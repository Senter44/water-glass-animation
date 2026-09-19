const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const sandbox = {};
for (const name of ['physics.js', 'mouth.js']) {
  const source = path.join(__dirname, '../dist/bamboo', name);
  if (fs.existsSync(source)) vm.runInNewContext(fs.readFileSync(source, 'utf8'), sandbox, { filename: source });
}

test('interior water reaches the exact exterior emission point at every angle and size', () => {
  assert.ok(sandbox.BambooMouth, 'Interior flow renderer exists');
  for (const [width, poolY] of [[420, 512], [1000, 500], [2048, 367]]) {
    for (const height of [0, 30, 80, 100]) {
      const g = sandbox.BambooPhysics.geometryForScene(width, poolY, height);
      const end = sandbox.BambooMouth.toWorld(g, sandbox.BambooMouth.sample(1, g.angle));
      assert.ok(Math.abs(end.x - g.nozzle.x) < 1e-8);
      assert.ok(Math.abs(end.y - g.nozzle.y) < 1e-8);
    }
  }
});

test('the inside-water route begins within the hollow and moves continuously to the lip', () => {
  assert.ok(sandbox.BambooMouth, 'Interior flow renderer exists');
  let previous = sandbox.BambooMouth.sample(0, 0);
  assert.ok(previous.x > 180 && previous.y < 630);
  for (let i = 1; i <= 30; i++) {
    const point = sandbox.BambooMouth.sample(i / 30, 0);
    assert.ok(point.y > previous.y);
    assert.ok(Math.hypot(point.x - previous.x, point.y - previous.y) < 15);
    previous = point;
  }
  assert.equal(previous.x, 120);
  assert.equal(previous.y, 722);
});

test('raising the bamboo removes overflow, including when paused', () => {
  assert.ok(sandbox.BambooMouth, 'Interior flow renderer exists');
  assert.equal(sandbox.BambooMouth.isSpilling(sandbox.BambooPhysics.flowForHeight(100)), false);
  assert.equal(sandbox.BambooMouth.isSpilling(sandbox.BambooPhysics.flowForHeight(30)), true);
});
