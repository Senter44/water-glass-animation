const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const sandbox = {};
const source = path.join(__dirname, '../dist/bamboo/physics.js');
if (fs.existsSync(source)) vm.runInNewContext(fs.readFileSync(source, 'utf8'), sandbox, { filename: source });

test('bamboo lip stays visible and above water at every height on wide and narrow screens', () => {
  assert.equal(typeof sandbox.BambooPhysics.geometryForScene, 'function');
  for (const [width, poolY] of [[2048, 367], [1790, 401], [750, 512], [420, 512]]) {
    for (let height = 0; height <= 100; height += 5) {
      const g = sandbox.BambooPhysics.geometryForScene(width, poolY, height);
      assert.ok(g.nozzle.y >= 60);
      assert.ok(g.nozzle.y <= poolY - 70);
      assert.ok(g.nozzle.x > 0 && g.nozzle.x < width - 70);
    }
  }
});

test('lowering bamboo increases flow; raised bamboo stops', () => {
  assert.ok(sandbox.BambooPhysics, 'Bamboo physics is implemented');
  const { flowForHeight } = sandbox.BambooPhysics;
  assert.equal(flowForHeight(100), 0);
  assert.equal(flowForHeight(0), 1);
  assert.ok(flowForHeight(25) > flowForHeight(65));
});

test('falling drops keep gravity and create ripples at the pool, not at the tip', () => {
  assert.ok(sandbox.BambooPhysics, 'Bamboo physics is implemented');
  const model = new sandbox.BambooPhysics.Simulation(() => 0.5);
  const nozzle = { x: 400, y: 200 };
  for (let i = 0; i < 12; i++) model.step(1 / 60, nozzle, 1, 600);
  assert.ok(model.drops.some(drop => drop.y > nozzle.y + 15));
  assert.equal(model.ripples.length, 0);
  for (let i = 0; i < 90; i++) model.step(1 / 60, nozzle, 1, 600);
  assert.ok(model.ripples.length > 0);
  assert.ok(model.ripples.every(ripple => ripple.y === 600));
  assert.ok(model.drops.every(drop => drop.y < 600));
});

test('new drops follow a moved nozzle; existing drops keep falling', () => {
  assert.ok(sandbox.BambooPhysics, 'Bamboo physics is implemented');
  const model = new sandbox.BambooPhysics.Simulation(() => 0.5);
  for (let i = 0; i < 10; i++) model.step(1 / 60, { x: 300, y: 200 }, 1, 600);
  model.step(1 / 60, { x: 600, y: 100 }, 1, 600);
  assert.ok(model.drops.some(drop => Math.abs(drop.x - 600) < 5));
  assert.ok(model.drops.some(drop => Math.abs(drop.x - 300) < 10));
});

test('particle buffers stay bounded and drain when flow stops', () => {
  assert.ok(sandbox.BambooPhysics, 'Bamboo physics is implemented');
  const model = new sandbox.BambooPhysics.Simulation(() => 0.5);
  for (let i = 0; i < 6000; i++) model.step(1 / 60, { x: 400, y: 100 }, 1, 600);
  assert.ok(model.drops.length <= 200);
  assert.ok(model.splashes.length <= 80);
  assert.ok(model.ripples.length <= 28);
  for (let i = 0; i < 240; i++) model.step(1 / 60, { x: 400, y: 100 }, 0, 600);
  assert.equal(model.drops.length + model.splashes.length + model.ripples.length, 0);
  model.reset();
  assert.equal(model.time, 0);
});

test('freshly emitted liquid is not advanced by a full extra frame', () => {
  const model = new sandbox.BambooPhysics.Simulation(() => 0.5);
  model.step(1 / 60, { x: 400, y: 100 }, 1, 600);
  assert.ok(model.drops.length > 0);
  assert.ok(model.drops.every(drop => drop.age <= 1 / 60));
});

test('stream parcels carry stable identity and narrow as gravity accelerates them', () => {
  const { Simulation, radiusForDrop } = sandbox.BambooPhysics;
  assert.equal(typeof radiusForDrop, 'function');
  const model = new Simulation(() => 0.5);
  model.step(1 / 60, { x: 400, y: 100 }, 1, 600);
  const drop = model.drops[0];
  const startRadius = radiusForDrop(drop);
  const id = drop.id;
  for (let i = 0; i < 20; i++) model.step(1 / 60, { x: 400, y: 100 }, 1, 600);
  assert.equal(drop.id, id);
  assert.ok(radiusForDrop(drop) < startRadius);
  assert.equal(new Set(model.drops.map(item => item.id)).size, model.drops.length);
});
