struct Particle { position:vec3f, v:vec3f, C:mat3x3f }
@group(0) @binding(0) var<storage,read_write> particles:array<Particle>;
@group(0) @binding(1) var<uniform> b:Bamboo;
fn random(x:f32)->f32{return fract(sin(x*127.1+311.7)*43758.5453);}
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id:vec3u) {
  // Recycle only particles already in the pool; never teleport the visible stream.
  if(f32(id.x)>=b.emission.y){return;}
  let index=(u32(b.emission.x)+id.x)%arrayLength(&particles);
  var p=particles[index];
  if(p.position.y>12.){return;}
  let seed=f32(index)+b.rotation.z*173.;
  // A fixed feeder remains above the scoop while the scoop rotates underneath it.
  p.position=vec3f(28.1+(random(seed)-.5)*.9,43.05+random(seed+2.)*1.2,18.+(random(seed+1.)-.5)*.9);
  p.v=vec3f(-.04,-1.3,0);
  p.C=mat3x3f(vec3f(0),vec3f(0),vec3f(0)); particles[index]=p;
}
