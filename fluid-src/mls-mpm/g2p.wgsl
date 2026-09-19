struct Particle {
    position: vec3f, 
    v: vec3f, 
    C: mat3x3f, 
}
struct Cell {
    vx: i32, 
    vy: i32, 
    vz: i32, 
    mass: i32, 
}

override fixedPointMultiplierInverse: f32; 

@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;
@group(0) @binding(1) var<storage, read> cells: array<Cell>;
@group(0) @binding(2) var<uniform> realBoxSize: vec3f;
@group(0) @binding(3) var<uniform> initBoxSize: vec3f;
@group(0) @binding(4) var<uniform> numParticles: u32;
@group(0) @binding(5) var<uniform> dt: f32;

fn decodeFixedPoint(fixedPoint: i32) -> f32 {
	return f32(fixedPoint) * fixedPointMultiplierInverse;
}

@compute @workgroup_size(64)
fn g2p(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) {
        particles[id.x].v = vec3f(0.);
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];
        let cellIndex: vec3f = floor(particle.position);
        let cellDiff: vec3f = particle.position - (cellIndex + 0.5f);
        weights[0] = 0.5f * (0.5f - cellDiff) * (0.5f - cellDiff);
        weights[1] = 0.75f - cellDiff * cellDiff;
        weights[2] = 0.5f * (0.5f + cellDiff) * (0.5f + cellDiff);

        var B: mat3x3f = mat3x3f(vec3f(0.), vec3f(0.), vec3f(0.));
        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cellX: vec3f = vec3f(
                        cellIndex.x + f32(gx) - 1., 
                        cellIndex.y + f32(gy) - 1.,
                        cellIndex.z + f32(gz) - 1.  
                    );
                    let cellDist: vec3f = (cellX + 0.5f) - particle.position;
                    let cellIndex1D: i32 = 
                        i32(cellX.x) * i32(initBoxSize.y) * i32(initBoxSize.z) + 
                        i32(cellX.y) * i32(initBoxSize.z) + 
                        i32(cellX.z);
                    let weighted_velocity: vec3f = vec3f(
                        decodeFixedPoint(cells[cellIndex1D].vx), 
                        decodeFixedPoint(cells[cellIndex1D].vy), 
                        decodeFixedPoint(cells[cellIndex1D].vz)
                    ) * weight;
                    let term: mat3x3f = mat3x3f(
                        weighted_velocity * cellDist.x, 
                        weighted_velocity * cellDist.y, 
                        weighted_velocity * cellDist.z
                    );

                    B += term;

                    particles[id.x].v += weighted_velocity;
                }
            }
        }

        particles[id.x].C = B * 4.0f;
        particles[id.x].position += particles[id.x].v * dt;
        particles[id.x].position = vec3f(
            clamp(particles[id.x].position.x, 1., realBoxSize.x - 2.), 
            clamp(particles[id.x].position.y, 3., realBoxSize.y - 4.),
            clamp(particles[id.x].position.z, 1., realBoxSize.z - 2.)
        );

        let center = vec2f(realBoxSize.x, realBoxSize.z) * 0.5;
        let cylinderRadius = min(realBoxSize.x, realBoxSize.z) * 0.5 - 3.0;
        var radial = particles[id.x].position.xz - center;
        var radialDistance = length(radial);
        if (radialDistance > cylinderRadius && radialDistance > 0.0) {
            let normal = radial / radialDistance;
            let corrected = center + normal * cylinderRadius;
            particles[id.x].position.x = corrected.x;
            particles[id.x].position.z = corrected.y;
            let outwardSpeed = dot(particles[id.x].v.xz, normal);
            if (outwardSpeed > 0.0) {
                let correctedVelocity = particles[id.x].v.xz - normal * outwardSpeed;
                particles[id.x].v.x = correctedVelocity.x;
                particles[id.x].v.z = correctedVelocity.y;
            }
        }

        let predicted = particles[id.x].position.xz + particles[id.x].v.xz * dt * 2.0;
        radial = predicted - center;
        radialDistance = length(radial);
        if (radialDistance > cylinderRadius - 0.2 && radialDistance > 0.0) {
            let normal = radial / radialDistance;
            let penetration = max(0.0, radialDistance - (cylinderRadius - 0.2));
            particles[id.x].v.x -= normal.x * penetration;
            particles[id.x].v.z -= normal.y * penetration;
        }

        let wallMin = 3.0;
        let wallMax = realBoxSize.y - 4.0;
        let predictedY = particles[id.x].position.y + particles[id.x].v.y * dt * 2.0;
        if (predictedY < wallMin) { particles[id.x].v.y += wallMin - predictedY; }
        if (predictedY > wallMax) { particles[id.x].v.y += wallMax - predictedY; }
    }
}
