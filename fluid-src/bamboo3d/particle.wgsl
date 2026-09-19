// Splash screen-space surface reconstruction with velocity-oriented ellipsoids.
// Stretching the reconstruction support joins fast parcels without drawing balls.
struct Camera { texel:vec2f, diameter:f32, pad:f32, invProjection:mat4x4f, projection:mat4x4f, view:mat4x4f, invView:mat4x4f }
struct Particle { position:vec3f, velocity:vec3f }
@group(0) @binding(0) var<storage,read> particles:array<Particle>;
@group(0) @binding(1) var<uniform> camera:Camera;
struct Vertex { @builtin(position) position:vec4f, @location(0) uv:vec2f, @location(1) center:vec3f, @location(2) axis:vec2f, @location(3) radii:vec2f }
@vertex fn vs(@builtin(vertex_index) i:u32,@builtin(instance_index) instance:u32)->Vertex {
  let corners=array<vec2f,6>(vec2f(1,1),vec2f(1,-1),vec2f(-1,-1),vec2f(1,1),vec2f(-1,-1),vec2f(-1,1));
  let particle=particles[instance];let center=(camera.view*vec4f(particle.position,1)).xyz;
  let velocity=(camera.view*vec4f(particle.velocity,0)).xyz;
  let speed=length(velocity.xy);var axis=vec2f(0,1);if(speed>.001){axis=velocity.xy/speed;}
  let airborne=select(0.,1.,particle.position.y>14.);
  let stretch=1.+min(2.6,speed*1.1)*airborne;
  // Keep transverse supports overlapping: shrinking them created separate threads.
  let radii=camera.diameter*.5*vec2f(stretch,1.);
  let side=vec2f(-axis.y,axis.x);let corner=corners[i];
  let offset=axis*corner.x*radii.x+side*corner.y*radii.y;
  return Vertex(camera.projection*vec4f(center+vec3f(offset,0),1),corner,center,axis,radii);
}
struct Depth { @location(0) depth:f32, @builtin(frag_depth) z:f32 }
@fragment fn depth(v:Vertex)->Depth {
  let r=dot(v.uv,v.uv);if(r>1.){discard;}
  let side=vec2f(-v.axis.y,v.axis.x);
  let offset=v.axis*v.uv.x*v.radii.x+side*v.uv.y*v.radii.y;
  let p=v.center+vec3f(offset,sqrt(1.-r)*v.radii.y);
  let clip=camera.projection*vec4f(p,1);return Depth(p.z,clip.z/clip.w);
}
@fragment fn thickness(v:Vertex)->@location(0) vec4f {
  let r=dot(v.uv,v.uv);if(r>1.){discard;}
  return vec4f(.05*sqrt(1.-r),0,0,1);
}
