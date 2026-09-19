const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const scope={};const file=path.join(__dirname,'../fluid-src/bamboo3d/surface.js');
if(fs.existsSync(file))vm.runInNewContext(fs.readFileSync(file,'utf8'),scope,{filename:file});
const surface=()=>{assert.ok(scope.FluidSurface,'shared liquid density reconstruction exists');return scope.FluidSurface;};
test('neighboring parcels create a shared surface where neither parcel alone covers the gap',()=>{
  const s=surface(),w=s.kernel(.36);
  assert.ok(w<s.cutoff);assert.ok(w*2>s.cutoff);
  assert.equal(s.resolve([w,w*.4,w*.16,w*.3],60),null);
  assert.ok(s.resolve([2*w,2*w*.4,2*w*.16,2*w*.3],60).depth<60.4);
});
test('isolated gaps stay empty and distant fluid layers do not merge',()=>{
  const s=surface();assert.equal(s.kernel(1),0);assert.equal(s.kernel(4),0);
  assert.equal(s.resolve([0,0,0,0],80),null);
  assert.equal(s.layerWeight(5,.3),0);assert.equal(s.layerWeight(.4,.3),1);
});
test('relative depth moments preserve the shape at different camera distances',()=>{
  const s=surface(),m=[1.4,.7,.35,.42];const a=s.resolve(m,30),b=s.resolve(m,130);
  assert.ok(Number.isFinite(a.depth)&&a.thickness>0);
  assert.ok(Math.abs((b.depth-a.depth)-100)<1e-9);
});
test('half-float rounding cannot make a negative variance or nonfinite surface',()=>{
  const s=surface(),p=s.resolve([1,.5,.2499,.3],70);
  assert.ok(Number.isFinite(p.depth)&&p.depth>69&&p.depth<71);
});
