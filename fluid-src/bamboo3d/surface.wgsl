@group(0) @binding(0) var moments:texture_2d<f32>;
@group(0) @binding(1) var nearest:texture_2d<f32>;
override cutoff:f32;
override fringeTag:f32;
struct Full { @builtin(position) position:vec4f }
struct Surface { @location(0) depth:f32, @location(1) thickness:f32 }
@vertex fn vs(@builtin(vertex_index) id:u32)->Full {
  let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3));return Full(vec4f(p[id],0,1));
}
@fragment fn fs(input:Full)->Surface {
  let pixel=vec2i(input.position.xy);let m=textureLoad(moments,pixel,0);
  if(m.x<cutoff){return Surface(1e6,0);}
  // Relative moments avoid loss of precision in the half-float accumulation.
  let encoded=textureLoad(nearest,pixel,0).r;
  let near=encoded-select(0.,fringeTag,encoded>=fringeTag);
  let mean=m.y/m.x;let sigma=max(.08,m.w/m.x);
  let variance=max(0.,m.z/m.x-mean*mean);
  let offset=min(sigma*2.5,sqrt(variance+sigma*sigma)*sqrt(2.*log(m.x/cutoff)));
  return Surface(near+mean-offset,min(8.,.1*m.x*sigma*2.5066));
}
