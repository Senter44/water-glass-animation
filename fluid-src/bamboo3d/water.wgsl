struct Camera { texel:vec2f, diameter:f32, pad:f32, invProjection:mat4x4f, projection:mat4x4f, view:mat4x4f, invView:mat4x4f }
@group(0) @binding(0) var<uniform> camera:Camera;
@group(0) @binding(1) var depthMap:texture_2d<f32>;
@group(0) @binding(2) var thicknessMap:texture_2d<f32>;
@group(0) @binding(3) var scene:texture_2d<f32>;
@group(0) @binding(4) var sceneDepth:texture_2d<f32>;
@group(0) @binding(5) var garden:texture_2d<f32>;
@group(0) @binding(6) var textureSampler:sampler;
struct Full { @builtin(position) position:vec4f, @location(0) uv:vec2f }
@vertex fn vs(@builtin(vertex_index) id:u32)->Full {
  let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3));return Full(vec4f(p[id],0,1),vec2f(p[id].x*.5+.5,.5-p[id].y*.5));
}
fn eyePosition(uv:vec2f,d:f32)->vec3f {
  let n=vec4f(uv.x*2-1,1-uv.y*2,-camera.projection[2].z+camera.projection[3].z/d,1);
  let p=camera.invProjection*n;return p.xyz/p.w;
}
fn at(pixel:vec2i)->vec3f {
  let p=clamp(pixel,vec2i(0),vec2i(textureDimensions(depthMap))-1);
  return eyePosition((vec2f(p)+.5)*camera.texel,abs(textureLoad(depthMap,p,0).r));
}
fn env(d:vec3f)->vec3f {
  let photo=textureSampleLevel(garden,textureSampler,vec2f(atan2(d.z,d.x)/6.283185+.5,clamp(.5-d.y*.45,.01,.99)),0).rgb;
  return mix(photo,vec3f(.87,.95,.96),smoothstep(-.2,.65,d.y)*.85);
}
@fragment fn fs(input:Full)->@location(0) vec4f {
  let pixel=vec2i(input.position.xy);let depth=abs(textureLoad(depthMap,pixel,0).r);
  let background=textureLoad(scene,pixel,0).rgb;
  if(depth>=1e4 || depth>textureLoad(sceneDepth,pixel,0).r+.025){return vec4f(background,1);}
  let p=eyePosition(input.uv,depth);
  let dx1=at(pixel+vec2i(1,0))-p;let dx2=p-at(pixel-vec2i(1,0));
  let dy1=at(pixel+vec2i(0,1))-p;let dy2=p-at(pixel-vec2i(0,1));
  let dx=select(dx1,dx2,abs(dx1.z)>abs(dx2.z));let dy=select(dy1,dy2,abs(dy1.z)>abs(dy2.z));
  var n=normalize(-cross(dx,dy)+vec3f(.0000001));let ray=normalize(p);if(dot(n,ray)>0.){n=-n;}
  let world=(camera.invView*vec4f(p,1)).xyz;
  let reflection=normalize((camera.invView*vec4f(reflect(ray,n),0)).xyz);
  let thickness=max(.03,textureSampleLevel(thicknessMap,textureSampler,input.uv,0).r);
  let uv=clamp(input.uv+n.xy*vec2f(1,-1)*min(.026,thickness*.012),vec2f(.002),vec2f(.998));
  var transmission=textureSampleLevel(scene,textureSampler,uv,0).rgb;
  let tinted=exp(-vec3f(.13,.055,.025)*thickness);
  transmission=transmission*tinted;
  let fresnel=.0204+.9796*pow(1.-max(0.,dot(n,-ray)),5.);
  let light=normalize((camera.view*vec4f(-.4,.85,.45,0)).xyz);
  let highlight=pow(max(0.,dot(n,normalize(light-ray))),120.);
  var color=mix(transmission,env(reflection),clamp(fresnel,.025,.82))+highlight*vec3f(1,.98,.87)*.55;
  // A subtle blue-green volume tint helps the transparent interior read as liquid.
  color=mix(color,vec3f(.16,.29,.23),min(.10,thickness*.025));
  return vec4f(color,1);
}
