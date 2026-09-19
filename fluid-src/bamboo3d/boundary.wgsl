struct Bamboo { rotation: vec4f, emission: vec4f, previous: vec4f }
// rotation.xy = cos/sin, z = time, w = fixed dt. Shared mesh/physics transform.
fn localPoint(p: vec3f, b: Bamboo) -> vec3f {
  let d = p - vec3f(42,28,18);
  return vec3f(b.rotation.x*d.x + b.rotation.y*d.y + 17, -b.rotation.y*d.x + b.rotation.x*d.y, d.z);
}
fn worldPoint(p: vec3f, b: Bamboo) -> vec3f {
  let d = p - vec3f(17,0,0);
  return vec3f(b.rotation.x*d.x - b.rotation.y*d.y, b.rotation.y*d.x + b.rotation.x*d.y, d.z) + vec3f(42,28,18);
}
fn worldVector(n: vec3f, b: Bamboo) -> vec3f { return vec3f(b.rotation.x*n.x-b.rotation.y*n.y,b.rotation.y*n.x+b.rotation.x*n.y,n.z); }
fn bambooDistance(p: vec3f) -> f32 {
  let r = length(p.yz);
  let shell = max(max(r-4.7,4.05-r),max((.85*p.y-p.x)/1.3124405,p.x-26));
  let cap = max(r-4.7,abs(p.x-26)-.4);
  let node = max(r-4.7,abs(p.x-18)-.4);
  return min(min(shell,cap),node);
}
fn bambooNormal(p: vec3f) -> vec3f {
  let e = .015;
  return normalize(vec3f(bambooDistance(p+vec3f(e,0,0))-bambooDistance(p-vec3f(e,0,0)),bambooDistance(p+vec3f(0,e,0))-bambooDistance(p-vec3f(0,e,0)),bambooDistance(p+vec3f(0,0,e))-bambooDistance(p-vec3f(0,0,e)))+vec3f(.000001));
}
