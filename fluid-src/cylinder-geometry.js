export function generateCylinderParticlePositions(boxSize, maxParticles, options = {}) {
  const spacing = options.spacing ?? 0.9;
  const wallMargin = options.wallMargin ?? 3;
  const floor = options.floor ?? 3;
  const fillRatio = options.fillRatio ?? 0.56;
  const jitter = options.jitter ?? (() => Math.random() * spacing * 0.35);
  const centerX = boxSize[0] / 2;
  const centerZ = boxSize[2] / 2;
  const radius = Math.min(boxSize[0], boxSize[2]) / 2 - wallMargin;
  const positions = [];

  for (let y = floor; y < boxSize[1] * fillRatio && positions.length < maxParticles; y += spacing) {
    for (let x = centerX - radius; x <= centerX + radius && positions.length < maxParticles; x += spacing) {
      for (let z = centerZ - radius; z <= centerZ + radius && positions.length < maxParticles; z += spacing) {
        const px = x + jitter();
        const py = y + jitter();
        const pz = z + jitter();
        if (Math.hypot(px - centerX, pz - centerZ) <= radius) {
          positions.push([px, py, pz]);
        }
      }
    }
  }
  return positions;
}

export function projectParticleToCylinder(position, velocity, boxSize, wallMargin = 3) {
  const centerX = boxSize[0] / 2;
  const centerZ = boxSize[2] / 2;
  const radius = Math.min(boxSize[0], boxSize[2]) / 2 - wallMargin;
  const dx = position[0] - centerX;
  const dz = position[2] - centerZ;
  const distance = Math.hypot(dx, dz);

  if (distance <= radius || distance === 0) {
    return { position: [...position], velocity: [...velocity] };
  }

  const nx = dx / distance;
  const nz = dz / distance;
  const outwardVelocity = velocity[0] * nx + velocity[2] * nz;
  const correctedVelocity = [...velocity];
  if (outwardVelocity > 0) {
    correctedVelocity[0] -= outwardVelocity * nx;
    correctedVelocity[2] -= outwardVelocity * nz;
  }

  return {
    position: [centerX + nx * radius, position[1], centerZ + nz * radius],
    velocity: correctedVelocity,
  };
}
