struct Camera { texel:vec2f, diameter:f32, pad:f32, invProjection:mat4x4f, projection:mat4x4f, view:mat4x4f, invView:mat4x4f }
@group(0) @binding(0) var<uniform> camera:Camera;
@group(0) @binding(1) var garden:texture_2d<f32>;
@group(0) @binding(2) var textureSampler:sampler;
struct Full { @builtin(position) position:vec4f, @location(0) uv:vec2f }
struct Output { @location(0) color:vec4f, @location(1) depth:f32, @builtin(frag_depth) z:f32 }
@vertex fn vs(@builtin(vertex_index) id:u32)->Full {
  let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3));
  return Full(vec4f(p[id],0,1),vec2f(p[id].x*.5+.5,.5-p[id].y*.5));
}
fn hash(p:vec3f)->f32{return fract(sin(dot(p,vec3f(127.1,311.7,74.7)))*43758.5453);}
fn noise(p:vec3f)->f32{
  let i=floor(p);let f=fract(p);let u=f*f*(3.-2.*f);
  let a=mix(mix(hash(i),hash(i+vec3f(1,0,0)),u.x),mix(hash(i+vec3f(0,1,0)),hash(i+vec3f(1,1,0)),u.x),u.y);
  let c=mix(mix(hash(i+vec3f(0,0,1)),hash(i+vec3f(1,0,1)),u.x),mix(hash(i+vec3f(0,1,1)),hash(i+vec3f(1,1,1)),u.x),u.y);
  return mix(a,c,u.z);
}
fn environment(d:vec3f)->vec3f {
  let uv=vec2f(atan2(d.z,d.x)/6.283185+.5,clamp(.5-d.y*.45,.03,.97));
  let photo=textureSampleLevel(garden,textureSampler,uv,0).rgb;
  return mix(photo,vec3f(.8,.89,.87),smoothstep(.4,.95,d.y)*.75);
}
@fragment fn fs(input:Full)->Output {
  let eye=camera.invView[3].xyz;
  let v=camera.invProjection*vec4f(input.uv.x*2-1,1-input.uv.y*2,1,1);
  let ray=normalize((camera.invView*vec4f(v.xyz/v.w,0)).xyz);
  var t=1e5;var n=vec3f(0,1,0);var kind=0.;
  // The basin is an actual hollow cylinder with a floor, evaluated in world space.
  let q=eye.xz-vec2f(24,18);let a=dot(ray.xz,ray.xz);let b=dot(q,ray.xz);
  for(var side=0;side<2;side++){
    let r=select(15.2,13.9,side==1);let discriminant=b*b-a*(dot(q,q)-r*r);
    if(discriminant>0. && a>.00001){
      for(var root=0;root<2;root++){
        let hit=(-b+select(-1.,1.,root==1)*sqrt(discriminant))/a;
        let p=eye+ray*hit;
        if(hit>.01 && hit<t && p.y>2. && p.y<13.){t=hit;n=vec3f(normalize(p.xz-vec2f(24,18)).x,0,normalize(p.xz-vec2f(24,18)).y)*select(1.,-1.,side==1);kind=1.;}
      }
    }
  }
  if(abs(ray.y)>.00001){
    for(var plane=0;plane<3;plane++){
      let y=select(select(13.,3.,plane==1),1.8,plane==2);
      let hit=(y-eye.y)/ray.y;let p=eye+ray*hit;let r=length(p.xz-vec2f(24,18));
      let valid=select(select(r>=13.9 && r<=15.2,r<13.9,plane==1),true,plane==2);
      if(hit>.01 && hit<t && valid){t=hit;n=vec3f(0,1,0);kind=select(1.,2.,plane==2);}
    }
  }
  var color=environment(ray);var depth=1e6;var z=.999999;
  if(t<1e4){
    let p=eye+ray*t;let grain=noise(p*7.);let patches=noise(p*.6);
    let stone=mix(vec3f(.055,.066,.057),vec3f(.21,.24,.20),patches*.5+grain*.5);
    let moss=mix(vec3f(.065,.12,.032),vec3f(.21,.27,.075),noise(p*1.6));
    var base=select(stone,mix(stone,moss,smoothstep(.2,.8,noise(p*.12))),kind>1.5);
    let light=normalize(vec3f(-.4,.85,.45));let diffuse=max(0.,dot(n,light));
    let ao=select(1.,.63,p.y<4. && length(p.xz-vec2f(24,18))<14.);
    let contact=select(1.,mix(.32,1.,smoothstep(15.,23.,length(p.xz-vec2f(24,18)))),kind>1.5);
    color=base*(.5+.9*diffuse)*ao*contact;
    let fog=1.-exp(-max(0.,t-110.)*.006);
    color=mix(color,environment(ray),fog);
    let view=camera.view*vec4f(p,1);let clip=camera.projection*view;depth=-view.z;z=min(.999999,clip.z/clip.w);
  }
  return Output(vec4f(color,1),depth,z);
}
