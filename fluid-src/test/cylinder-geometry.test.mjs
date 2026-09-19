import test from 'node:test';
import assert from 'node:assert/strict';

import {
  generateCylinderParticlePositions,
  projectParticleToCylinder,
} from '../cylinder-geometry.js';

test('generated water particles stay inside the cylindrical glass', () => {
  const box = [24, 32, 24];
  const wallMargin = 3;
  const positions = generateCylinderParticlePositions(box, 5000, {
    spacing: 0.9,
    wallMargin,
    floor: 3,
    fillRatio: 0.56,
    jitter: () => 0,
  });
  const centerX = box[0] / 2;
  const centerZ = box[2] / 2;
  const radius = Math.min(box[0], box[2]) / 2 - wallMargin;

  assert.ok(positions.length > 1000);
  for (const [x, y, z] of positions) {
    assert.ok(Math.hypot(x - centerX, z - centerZ) <= radius + 1e-6);
    assert.ok(y >= 3 && y < box[1] * 0.56);
  }
});

test('cylinder initialization fills all four quadrants', () => {
  const positions = generateCylinderParticlePositions([24, 32, 24], 5000, {
    spacing: 1,
    wallMargin: 3,
    floor: 3,
    fillRatio: 0.5,
    jitter: () => 0,
  });
  const quadrants = new Set(positions.map(([x, , z]) => `${x >= 12}:${z >= 12}`));
  assert.deepEqual([...quadrants].sort(), ['false:false', 'false:true', 'true:false', 'true:true']);
});

test('cylinder projection clamps a particle and removes outward velocity', () => {
  const result = projectParticleToCylinder(
    [23, 10, 12],
    [4, -1, 2],
    [24, 32, 24],
    3,
  );

  assert.ok(Math.abs(Math.hypot(result.position[0] - 12, result.position[2] - 12) - 9) < 1e-6);
  assert.ok(result.velocity[0] <= 0);
  assert.equal(result.velocity[1], -1);
  assert.equal(result.velocity[2], 2);
});

test('cylinder projection leaves an interior particle unchanged', () => {
  const result = projectParticleToCylinder(
    [12, 10, 12],
    [-2, 1, 3],
    [24, 32, 24],
    3,
  );
  assert.deepEqual(result, { position: [12, 10, 12], velocity: [-2, 1, 3] });
});

test('default cylinder settings generate a bounded sample', () => {
  const positions = generateCylinderParticlePositions([24, 32, 24], 50);
  assert.equal(positions.length, 50);
  assert.ok(positions.every(([x, , z]) => Math.hypot(x - 12, z - 12) <= 9));
});

test('a particle exactly on the wall is not moved', () => {
  const result = projectParticleToCylinder([21, 10, 12], [1, 0, 0], [24, 32, 24]);
  assert.deepEqual(result, { position: [21, 10, 12], velocity: [1, 0, 0] });
});
