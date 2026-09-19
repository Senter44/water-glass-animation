struct Cell { vx:i32, vy:i32, vz:i32, mass:i32 }
@group(0) @binding(0) var<storage,read_write> cells:array<Cell>;
@group(0) @binding(1) var<uniform> b:Bamboo;
@group(0) @binding(2) var<uniform> size:vec3f;
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id:vec3u) {
  if(id.x >= arrayLength(&cells) || cells[id.x].mass <= 0) { return; }
  let mass = f32(cells[id.x].mass);
  var v = vec3f(f32(cells[id.x].vx),f32(cells[id.x].vy),f32(cells[id.x].vz))/mass;
  v.y -= .4*b.rotation.w;
  let i = i32(id.x);
  let p = vec3f(f32(i/i32(size.y)/i32(size.z)),f32((i/i32(size.z))%i32(size.y)),f32(i%i32(size.z)))+.5;
  let local = localPoint(p,b);
  if(bambooDistance(local)<.65) {
    let n = worldVector(bambooNormal(local),b);
    let wall = worldVector(vec3f(-local.y,local.x-26,0),b)*b.previous.z;
    v -= n*min(0.,dot(v-wall,n));
  }
  if(p.y < 3.5) { v.y=max(v.y,0.); v.x*=.99; v.z*=.99; }
  if(p.y<14.) {
    let radial=p.xz-vec2f(24,18); let r=length(radial);
    if(r>13. && r<18.) { let n=radial/max(r,.01); let outward=max(0.,dot(v.xz,n)); v.x-=outward*n.x;v.z-=outward*n.y; }
  }
  v=clamp(v,vec3f(-5),vec3f(5));
  cells[id.x].vx=i32(v.x*1e6); cells[id.x].vy=i32(v.y*1e6); cells[id.x].vz=i32(v.z*1e6);
}
