const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const context={};
const file=path.join(__dirname,'../fluid-src/bamboo3d/shishi.js');
if(fs.existsSync(file))vm.runInNewContext(fs.readFileSync(file,'utf8'),context);
function create(){assert.ok(context.ShishiMechanism,'water-weight tipping mechanism exists');return new context.ShishiMechanism();}
test('an empty bamboo rests against its stone without a timer-driven tip',()=>{
  const m=create();for(let i=0;i<3600;i++)m.step(1/120,0,0);
  assert.equal(m.angle,m.rest);assert.equal(m.cycles,0);assert.equal(m.phase,'Filling');
});
test('water weight tips the bamboo, draining lets it return and complete a cycle',()=>{
  const m=create();let deepest=m.angle;
  for(let i=0;i<600;i++){m.step(1/120,500,3500);deepest=Math.max(deepest,m.angle);}
  assert.ok(deepest>.55,'load lowers the mouth');
  for(let i=0;i<900;i++)m.step(1/120,0,0);
  assert.ok(Math.abs(m.angle-m.rest)<.001);assert.equal(m.cycles,1);
});
test('equal water masses on opposite sides of the axle exert opposite torque',()=>{
  const front=create(),rear=create();for(let i=0;i<120;i++){front.step(1/120,500,3500);rear.step(1/120,500,-3500);}
  assert.ok(front.angle>0);assert.equal(rear.angle,rear.rest);
});
test('zero elapsed time freezes the mechanism and reset restores its balance',()=>{
  const m=create();for(let i=0;i<100;i++)m.step(1/120,500,3500);
  const angle=m.angle;m.step(0,0,0);assert.equal(m.angle,angle);
  m.reset();assert.equal(m.angle,m.rest);assert.equal(m.velocity,0);assert.equal(m.cycles,0);
});
test('integration is stable across frame rates and a long stalled frame is bounded',()=>{
  const a=create(),b=create();for(let i=0;i<120;i++)a.step(1/120,500,3500);for(let i=0;i<30;i++)b.step(1/30,500,3500);
  assert.ok(Math.abs(a.angle-b.angle)<.01);
  b.step(10,500,3500);assert.ok(Number.isFinite(b.angle)&&b.angle>=b.rest&&b.angle<=b.limit);
});
