// Hollow open-topped cylinder, in the same coordinates as the fluid collision walls.
@group(0) @binding(0) var sceneSampler: sampler;
@group(0) @binding(1) var sceneTexture: texture_2d<f32>;
@group(0) @binding(2) var waterDepth: texture_2d<f32>;
@group(0) @binding(3) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(4) var<uniform> box: vec3f;
struct RenderUniforms {
    texelSize: vec2f, sphereSize: f32,
    invProjectionMatrix: mat4x4f, projectionMatrix: mat4x4f,
    viewMatrix: mat4x4f, invViewMatrix: mat4x4f,
}
struct FragmentInput { @location(0) uv: vec2f, @location(1) iuv: vec2f }

// An inverted entry/exit interval means that the ray missed the finite cylinder.
fn cylinderInterval(ro: vec3f, rd: vec3f, radius: f32, bottom: f32, top: f32) -> vec2f {
    let p = ro.xz - box.xz * 0.5;
    let a = dot(rd.xz, rd.xz);
    let b = dot(p, rd.xz);
    let c = dot(p, p) - radius * radius;
    var near = -1e6;
    var far = 1e6;
    if (a < 1e-8) {
        if (c > 0.0) { return vec2f(1.0, -1.0); }
    } else {
        let discriminant = b * b - a * c;
        if (discriminant < 0.0) { return vec2f(1.0, -1.0); }
        let root = sqrt(discriminant);
        near = (-b - root) / a;
        far = (-b + root) / a;
    }
    if (abs(rd.y) < 1e-6) {
        if (ro.y < bottom || ro.y > top) { return vec2f(1.0, -1.0); }
    } else {
        let y0 = (bottom - ro.y) / rd.y;
        let y1 = (top - ro.y) / rd.y;
        near = max(near, min(y0, y1));
        far = min(far, max(y0, y1));
    }
    return vec2f(max(near, 0.0), far);
}
fn glassNormal(p: vec3f, inner: f32, top: f32) -> vec3f {
    let radial = p.xz - box.xz * 0.5;
    let radius = length(radial);
    if (abs(p.y - top) < 0.015) { return vec3f(0.0, 1.0, 0.0); }
    if (abs(p.y - 1.0) < 0.015) { return vec3f(0.0, -1.0, 0.0); }
    if (abs(p.y - 2.4) < 0.015 && radius < inner) { return vec3f(0.0, 1.0, 0.0); }
    let direction = radial / max(radius, 1e-6);
    let orientation = select(1.0, -1.0, abs(radius - inner) < 0.025);
    return vec3f(direction.x, 0.0, direction.y) * orientation;
}
fn studio(direction: vec3f) -> vec3f {
    let base = mix(vec3f(0.12, 0.21, 0.28), vec3f(0.63, 0.80, 0.87), clamp(direction.y * 0.5 + 0.5, 0.0, 1.0));
    let key = pow(max(dot(direction, normalize(vec3f(-0.7, 0.3, 0.6))), 0.0), 44.0);
    let horizontal = direction.xz / max(length(direction.xz), 1e-6);
    let strip = pow(max(dot(horizontal, normalize(vec2f(0.8, 0.35))), 0.0), 90.0);
    return base + vec3f(0.95, 0.98, 1.0) * (key * 1.4 + strip * 0.7);
}
fn throughGlass(baseColor: vec3f, uv: vec2f, ro: vec3f, rd: vec3f, interval: vec2f, fluidDistance: f32, inner: f32, top: f32) -> vec3f {
    if (interval.y <= interval.x) { return baseColor; }
    let p = ro + rd * interval.x;
    let normal = glassNormal(p, inner, top);
    let facing = abs(dot(normal, rd));
    let fresnel = 0.04 + 0.96 * pow(1.0 - facing, 5.0);
    let thickness = min(interval.y - interval.x, 12.0);
    let visibility = select(1.0, 0.18, interval.x > fluidDistance + 0.25);
    let viewNormal = (uniforms.viewMatrix * vec4f(normal, 0.0)).xy;
    let offset = viewNormal * vec2f(1.0, -1.0) * 0.005 * min(thickness, 3.0);
    let refracted = textureSampleLevel(sceneTexture, sceneSampler, clamp(uv + offset, vec2f(0.002), vec2f(0.998)), 0.0).rgb;
    let transmission = exp(-thickness * vec3f(0.014, 0.006, 0.003));
    let transmitted = mix(baseColor, refracted, 0.45 * visibility) * mix(vec3f(1.0), transmission, visibility);
    let reflection = studio(reflect(rd, normal));
    let baseHighlight = select(0.0, 0.26, p.y < 2.5);
    let rimHighlight = select(0.0, 0.50, p.y > top - 0.12);
    return mix(transmitted, reflection + rimHighlight * vec3f(0.7, 0.8, 0.9), clamp((fresnel * 0.85 + baseHighlight + rimHighlight) * visibility, 0.0, 0.9));
}
@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    var color = textureSampleLevel(sceneTexture, sceneSampler, input.uv, 0.0).rgb;
    let clip = vec4f(input.uv.x * 2.0 - 1.0, 1.0 - input.uv.y * 2.0, 1.0, 1.0);
    let view = uniforms.invProjectionMatrix * clip;
    let rdView = normalize(view.xyz / view.w);
    let rd = normalize((uniforms.invViewMatrix * vec4f(rdView, 0.0)).xyz);
    let ro = uniforms.invViewMatrix[3].xyz;
    let inner = min(box.x, box.z) * 0.5 - 3.0;
    let top = box.y - 4.0;
    let outerHit = cylinderInterval(ro, rd, inner + 0.48, 1.0, top);
    if (outerHit.y <= outerHit.x) { return vec4f(color, 1.0); }
    let cavityHit = cylinderInterval(ro, rd, inner, 2.4, top + 1000.0);
    let depth = abs(textureLoad(waterDepth, vec2u(input.iuv), 0).r);
    let fluidDistance = depth / max(-rdView.z, 1e-6);
    if (cavityHit.y <= cavityHit.x || cavityHit.x >= outerHit.y || cavityHit.y <= outerHit.x) {
        color = throughGlass(color, input.uv, ro, rd, outerHit, fluidDistance, inner, top);
    } else {
        // Subtract the cavity and composite the farther wall before the nearer one.
        let rear = vec2f(max(outerHit.x, cavityHit.y), outerHit.y);
        let front = vec2f(outerHit.x, min(outerHit.y, cavityHit.x));
        color = throughGlass(color, input.uv, ro, rd, rear, fluidDistance, inner, top);
        color = throughGlass(color, input.uv, ro, rd, front, fluidDistance, inner, top);
    }
    return vec4f(color, 1.0);
}
