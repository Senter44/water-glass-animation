struct Particle { position:vec3f, v:vec3f, C:mat3x3f }
struct Cell { vx:i32, vy:i32, vz:i32, mass:i32 }
@group(0) @binding(0) var<storage,read_write> particles:array<Particle>;
@group(0) @binding(1) var<storage,read> cells:array<Cell>;
@group(0) @binding(2) var<uniform> b:Bamboo;
@group(0) @binding(3) var<uniform> size:vec3f;
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id:vec3u) {
  if(id.x>=arrayLength(&particles)) { return; }
  var p=particles[id.x]; let base=floor(p.position); let d=p.position-(base+.5);
  var w:array<vec3f,3>; w[0]=.5*(.5-d)*(.5-d); w[1]=.75-d*d; w[2]=.5*(.5+d)*(.5+d);
  var v=vec3f(0); var C=mat3x3f(vec3f(0),vec3f(0),vec3f(0));
  for(var x=0;x<3;x++){for(var y=0;y<3;y++){for(var z=0;z<3;z++){
    let cell=base+vec3f(f32(x),f32(y),f32(z))-1.;
    let index=i32(cell.x)*i32(size.y)*i32(size.z)+i32(cell.y)*i32(size.z)+i32(cell.z);
    let c=cells[index]; let vel=vec3f(f32(c.vx),f32(c.vy),f32(c.vz))*1e-6*w[x].x*w[y].y*w[z].z;
    let dist=cell+.5-p.position;
    v+=vel; C+=mat3x3f(vel*dist.x,vel*dist.y,vel*dist.z);
  }}}
  p.v=clamp(v,vec3f(-5),vec3f(5)); p.C=C*4.; p.position+=p.v*b.rotation.w;
  for(var iteration=0;iteration<3;iteration++) {
    let local=localPoint(p.position,b); let distance=bambooDistance(local);
    if(distance>=.2){break;}
    let n=worldVector(bambooNormal(local),b); p.position+=n*(.205-distance);
    let wall=worldVector(vec3f(-local.y,local.x-17,0),b)*b.previous.z;
    p.v-=n*min(0.,dot(p.v-wall,n));
  }
  if(p.position.y<14.) {
    let radial=p.position.xz-vec2f(24,18); let r=length(radial);
    if(r>13.3){let n=radial/max(r,.01);p.position.x=24+n.x*13.3;p.position.z=18+n.y*13.3;let out=max(0.,dot(p.v.xz,n));p.v.x-=n.x*out;p.v.z-=n.y*out;}
  }
  if(p.position.y<3.4){p.position.y=3.4;p.v.y=max(p.v.y,0.);}
  p.position=clamp(p.position,vec3f(2),size-vec3f(3));
  particles[id.x]=p;
}
