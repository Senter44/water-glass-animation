struct Camera { texel:vec2f, diameter:f32, pad:f32, invProjection:mat4x4f, projection:mat4x4f, view:mat4x4f, invView:mat4x4f }
@group(0) @binding(0) var<uniform> camera:Camera;
@group(0) @binding(1) var<uniform> b:Bamboo;
@group(0) @binding(2) var garden:texture_2d<f32>;
@group(0) @binding(3) var textureSampler:sampler;
struct Input { @location(0) p:vec3f, @location(1) n:vec3f, @location(2) material:f32 }
struct Vertex { @builtin(position) clip:vec4f, @location(0) local:vec3f, @location(1) normal:vec3f, @location(2) world:vec3f, @location(3) @interpolate(flat) material:f32, @location(4) depth:f32 }
struct Output { @location(0) color:vec4f, @location(1) depth:f32 }
@vertex fn vs(input:Input)->Vertex {
  let fixed=input.material>=10.;
  let p=select(worldPoint(input.p,b),input.p,fixed);let v=camera.view*vec4f(p,1);
  return Vertex(camera.projection*v,input.p,select(worldVector(input.n,b),input.n,fixed),p,input.material,-v.z);
}
fn hash(p:vec2f)->f32{return fract(sin(dot(p,vec2f(127.1,311.7)))*43758.5453);}
fn grain(p:vec2f)->f32{
  let i=floor(p);let f=fract(p);let u=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2f(1,0)),u.x),mix(hash(i+vec2f(0,1)),hash(i+vec2f(1,1)),u.x),u.y);
}
@fragment fn fs(v:Vertex)->Output {
  let material=v.material%10.;
  let theta=atan2(v.local.z,v.local.y);let uv=vec2f(v.local.x,theta);
  let fibers=grain(uv*vec2f(.24,120));let mottled=grain(uv*vec2f(1.5,12));let fine=grain(uv*vec2f(22,310));
  var base=mix(vec3f(.065,.12,.022),vec3f(.28,.36,.075),fibers*.55+mottled*.45);
  let node=exp(-pow((v.local.x-19.)/.20,2.));
  base=mix(base,vec3f(.33,.38,.17),node*.7);
  var rough=.32;
  if(material>.5){base=mix(vec3f(.25,.15,.055),vec3f(.56,.42,.22),fibers*.6+fine*.4);rough=.46;}
  if(material>1.5){base=mix(vec3f(.50,.33,.14),vec3f(.82,.69,.44),fine);rough=.68;}
  if(v.material>=30.){base=mix(vec3f(.11,.12,.10),vec3f(.29,.31,.27),fine);rough=.9;}
  let eye=camera.invView[3].xyz;let view=normalize(eye-v.world);
  let light=normalize(vec3f(-.4,.85,.45));
  var n=normalize(v.normal);if(dot(n,view)<0.){n=-n;}
  let tangent=normalize(cross(n,worldVector(vec3f(1,0,0),b))+vec3f(.00001));
  n=normalize(n+tangent*(fibers-.5)*.13);
  let diffuse=max(0.,dot(n,light));let h=normalize(light+view);
  let spec=pow(max(0.,dot(n,h)),mix(160.,28.,rough));
  let interior=select(1.,.56+.28*clamp((4.-v.local.x)/8.,0.,1.),material>.5 && material<1.5);
  let rimLight=.12*pow(1.-max(0.,dot(n,view)),3.);
  let reflection=reflect(-view,n);let env=textureSampleLevel(garden,textureSampler,vec2f(atan2(reflection.z,reflection.x)/6.283+.5,.5-reflection.y*.45),0).rgb;
  let color=base*(.48+.85*diffuse)*interior+spec*vec3f(.65,.72,.49)+env*rimLight;
  return Output(vec4f(color,1),v.depth);
}
