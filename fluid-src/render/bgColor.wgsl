@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(3) var<uniform> box: vec3f;

struct RenderUniforms {
    texelSize: vec2f, 
    sphereSize: f32, 
    invProjectionMatrix: mat4x4f, 
    projectionMatrix: mat4x4f, 
    viewMatrix: mat4x4f, 
    invViewMatrix: mat4x4f, 
}

struct FragmentInput {
    @location(0) uv: vec2f,  
    @location(1) iuv: vec2f
}

fn computeViewPosFromUVDepth(texCoord: vec2f, depth: f32) -> vec3f {
    var ndc: vec4f = vec4f(texCoord.x * 2.0 - 1.0, 1.0 - 2.0 * texCoord.y, 0.0, 1.0);
    ndc.z = -uniforms.projectionMatrix[2].z + uniforms.projectionMatrix[3].z / depth;
    ndc.w = 1.0;

    var eye_pos: vec4f = uniforms.invProjectionMatrix * ndc;

    return eye_pos.xyz / eye_pos.w;
}

fn getCameraPosition() -> vec3f {
    return (uniforms.invViewMatrix * vec4(0, 0, 0, 1)).xyz;
}

fn rayPlaneIntersection(rayOrigin: vec3f, rayDir: vec3f) -> vec3f {
    // if (abs(rayDir.y) < 1e-6) {
    //     return vec3(0.0); // 交差しない場合
    // }

    let t = -rayOrigin.y / rayDir.y;
    return rayOrigin + t * rayDir;
}

@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    let rayDirWorld = normalize((uniforms.invViewMatrix * vec4f(computeViewPosFromUVDepth(input.uv, 1.0), 0.)).xyz); // depth は適当
    let vertical = clamp(rayDirWorld.y * 0.5 + 0.5, 0.0, 1.0);
    let horizonGlow = pow(1.0 - abs(rayDirWorld.y), 4.0);
    let lower = vec3f(0.12, 0.22, 0.28);
    let upper = vec3f(0.48, 0.64, 0.70);
    let studio = mix(lower, upper, vertical) + horizonGlow * vec3f(0.08, 0.13, 0.15);
    let camera = getCameraPosition();
    if (rayDirWorld.y < -0.00001) {
        let t = (0.8 - camera.y) / rayDirWorld.y;
        if (t > 0.0) {
            let point = camera + t * rayDirWorld;
            let radius = min(box.x, box.z) * 0.5 - 2.5;
            let radialDistance = length(point.xz - box.xz * 0.5);
            let shadow = exp(-pow(radialDistance / (radius * 1.2), 4.0));
            let floor = vec3f(0.37, 0.52, 0.60) * (1.0 - 0.35 * shadow);
            return vec4f(mix(studio, floor, exp(-t * 0.002)), 1.0);
        }
    }
    return vec4f(studio, 1.0);
}
