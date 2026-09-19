const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const context = {};
const file = path.join(__dirname, '../fluid-src/bamboo3d/geometry.js');
if (fs.existsSync(file)) vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, {filename:file});

test('the 3D bamboo has open space inside, a solid wall, and an open diagonal mouth', () => {
  assert.ok(context.BambooGeometry, '3D hollow bamboo geometry exists');
  const { solidDistance } = context.BambooGeometry;
  assert.ok(solidDistance([12, 0, 0]) > 3);
  assert.ok(solidDistance([12, 4.4, 0]) < 0);
  assert.ok(solidDistance([-6, -3, 0]) > 0);
  assert.ok(solidDistance([26, 0, 0]) < 0);
});

test('moving the bamboo shares an invertible transform between model and fluid boundaries', () => {
  assert.ok(context.BambooGeometry);
  const { toWorld, toLocal, angleForHeight } = context.BambooGeometry;
  for (const height of [0, 30, 65, 100]) {
    const a = angleForHeight(height);
    for (const p of [[-3, -3, 0], [12, 0, 1], [24, 3, -2]]) {
      const q = toLocal(toWorld(p, a), a);
      p.forEach((v, i) => assert.ok(Math.abs(v - q[i]) < 1e-8));
    }
  }
  assert.ok(toWorld([0, 0, 0], angleForHeight(0))[1] < toWorld([0, 0, 0], angleForHeight(100))[1]);
});

test('initial liquid occupies both the hollow interior and basin, never bamboo material', () => {
  assert.ok(context.BambooGeometry);
  const G = context.BambooGeometry;
  const a = G.angleForHeight(30);
  const p = G.initialParticles(8000, a);
  assert.equal(p.length, 8000);
  let interior = 0, basin = 0;
  for (const pos of p) {
    pos.forEach((v, axis) => assert.ok(Number.isFinite(v) && v > 1 && v < G.grid[axis] - 2));
    assert.ok(G.solidDistance(G.toLocal(pos, a)) >= .2);
    if (pos[1] > 15) interior++; else basin++;
  }
  assert.ok(interior > 500, 'a shallow reservoir is present for the gentler pour');
  assert.ok(basin > 4000);
});

test('gentle emission remains the same across one-step and six-step frames', () => {
  assert.ok(context.BambooGeometry?.EmissionBudget, 'fractional fixed-step emission budget exists');
  for (const flow of [.01,.25,.7,1]) {
    const a=new context.BambooGeometry.EmissionBudget(),b=new context.BambooGeometry.EmissionBudget();
    let fast=0,slow=0;
    for(let i=0;i<120;i++)fast+=a.take(flow,1);
    for(let i=0;i<20;i++)slow+=b.take(flow,6);
    assert.ok(Math.abs(fast-slow)<=1);
  }
});

test('particle collision pushes liquid out of bamboo walls without blocking the opening', () => {
  assert.ok(context.BambooGeometry);
  const G = context.BambooGeometry;
  for (const p of [[10, 4.2, 0], [10, 0, -4.4], [25.9, 0, 0]]) {
    const corrected = G.projectOut(p);
    assert.ok(G.solidDistance(corrected) >= .14);
  }
  const open = [-6, -3, 0];
  const unchanged = G.projectOut(open);
  assert.ok(unchanged.every((v, i) => v === open[i]));
});
