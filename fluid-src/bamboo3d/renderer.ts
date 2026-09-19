import { mat4 } from 'wgpu-matrix';
import boundary from './boundary.wgsl';
import sceneShader from './scene.wgsl';
import meshShader from './mesh.wgsl';
import waterShader from './water.wgsl';
import particleShader from './particle.wgsl';
import filterShader from '../render/narrowRangeFilter.wgsl';
import fullScreen from '../render/fullScreen.wgsl';

export class Renderer {
  readonly uniform:GPUBuffer;
  readonly data=new Float32Array(68);
  readonly textures:GPUTexture[]=[];
  readonly buffers:GPUBuffer[]=[];
  private background:GPURenderPipeline; private mesh:GPURenderPipeline;private water:GPURenderPipeline;
  private particles:GPURenderPipeline;private thickness:GPURenderPipeline;private filter:GPURenderPipeline;
  private bgGroup:GPUBindGroup;private meshGroup:GPUBindGroup;private waterGroup:GPUBindGroup;
  private particleGroup:GPUBindGroup;private thicknessGroup:GPUBindGroup;private filterGroups:GPUBindGroup[];
  private color:GPUTextureView;private worldDepth:GPUTextureView;private depthTest:GPUTextureView;
  private fluidDepth:GPUTextureView;private tempDepth:GPUTextureView;private fluidTest:GPUTextureView;private thicknessView:GPUTextureView;
  private vertex:GPUBuffer;private vertexCount:number;
  constructor(readonly device:GPUDevice, readonly canvas:HTMLCanvasElement, format:GPUTextureFormat, positions:GPUBuffer, bamboo:GPUBuffer, garden:GPUTexture, vertices:Float32Array){
    const buffer=(size:number,usage:number)=>{const b=device.createBuffer({size,usage:usage|GPUBufferUsage.COPY_DST});this.buffers.push(b);return b;};
    this.uniform=buffer(272,GPUBufferUsage.UNIFORM);
    this.vertex=buffer(vertices.byteLength,GPUBufferUsage.VERTEX);device.queue.writeBuffer(this.vertex,0,vertices);this.vertexCount=vertices.length/8;
    const texture=(format:GPUTextureFormat)=>{const t=device.createTexture({size:[canvas.width,canvas.height],format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING});this.textures.push(t);return t.createView();};
    this.color=texture(format);this.worldDepth=texture('r32float');this.depthTest=texture('depth32float');
    this.fluidDepth=texture('r32float');this.tempDepth=texture('r32float');this.fluidTest=texture('depth32float');this.thicknessView=texture('r16float');
    const shader=(label:string,code:string)=>device.createShaderModule({label,code});
    const sceneModule=shader('3D stone basin and garden',sceneShader),meshModule=shader('Blender bamboo material',boundary+meshShader),waterModule=shader('Water refraction and scene-depth occlusion',waterShader);
    const depthModule=shader('Splash ellipsoid surface',particleShader);
    const targets=[{format},{format:'r32float' as GPUTextureFormat}];
    const depthStencil={format:'depth32float' as GPUTextureFormat,depthWriteEnabled:true,depthCompare:'less' as GPUCompareFunction};
    this.background=device.createRenderPipeline({layout:'auto',vertex:{module:sceneModule},fragment:{module:sceneModule,targets},depthStencil});
    this.mesh=device.createRenderPipeline({layout:'auto',vertex:{module:meshModule,buffers:[{arrayStride:32,attributes:[{shaderLocation:0,offset:0,format:'float32x3'},{shaderLocation:1,offset:12,format:'float32x3'},{shaderLocation:2,offset:24,format:'float32'}]}]},fragment:{module:meshModule,targets},depthStencil});
    this.water=device.createRenderPipeline({layout:'auto',vertex:{module:waterModule},fragment:{module:waterModule,targets:[{format}]}});
    this.particles=device.createRenderPipeline({layout:'auto',vertex:{module:depthModule,entryPoint:'vs'},fragment:{module:depthModule,entryPoint:'depth',targets:[{format:'r32float'}]},depthStencil});
    this.thickness=device.createRenderPipeline({layout:'auto',vertex:{module:depthModule,entryPoint:'vs'},fragment:{module:depthModule,entryPoint:'thickness',targets:[{format:'r16float',blend:{color:{srcFactor:'one',dstFactor:'one',operation:'add'},alpha:{srcFactor:'one',dstFactor:'one',operation:'add'}}}]}});
    this.filter=device.createRenderPipeline({layout:'auto',vertex:{module:shader('Full screen',fullScreen),constants:{screenWidth:canvas.width,screenHeight:canvas.height}},fragment:{module:shader('Splash narrow-range surface filter',filterShader),constants:{maxFilterSize:8,projectedParticleConstant:canvas.height*.36,blur2D:0},targets:[{format:'r32float'}]}});
    const sampler=device.createSampler({magFilter:'linear',minFilter:'linear'}),photo=garden.createView();
    const resource=(b:GPUBuffer)=>({buffer:b});
    const group=(pipeline:GPURenderPipeline,entries:GPUBindGroupEntry[])=>device.createBindGroup({layout:pipeline.getBindGroupLayout(0),entries});
    this.bgGroup=group(this.background,[{binding:0,resource:resource(this.uniform)},{binding:1,resource:photo},{binding:2,resource:sampler}]);
    this.meshGroup=group(this.mesh,[{binding:0,resource:resource(this.uniform)},{binding:1,resource:resource(bamboo)},{binding:2,resource:photo},{binding:3,resource:sampler}]);
    this.waterGroup=group(this.water,[{binding:0,resource:resource(this.uniform)},{binding:1,resource:this.fluidDepth},{binding:2,resource:this.thicknessView},{binding:3,resource:this.color},{binding:4,resource:this.worldDepth},{binding:5,resource:photo},{binding:6,resource:sampler}]);
    this.particleGroup=group(this.particles,[{binding:0,resource:resource(positions)},{binding:1,resource:resource(this.uniform)}]);
    this.thicknessGroup=group(this.thickness,[{binding:0,resource:resource(positions)},{binding:1,resource:resource(this.uniform)}]);
    this.filterGroups=[[1,0],[0,1]].map((direction,i)=>{const b=buffer(8,GPUBufferUsage.UNIFORM);device.queue.writeBuffer(b,0,new Float32Array(direction));return group(this.filter,[{binding:1,resource:i?this.tempDepth:this.fluidDepth},{binding:2,resource:resource(b)}]);});
  }
  camera(yaw:number,pitch:number){
    const aspect=this.canvas.clientWidth/this.canvas.clientHeight;
    const target=[35,25,18],distance=aspect<.85?96:82;
    const eye=[target[0]+Math.sin(yaw)*Math.cos(pitch)*distance,target[1]+Math.sin(pitch)*distance,target[2]+Math.cos(yaw)*Math.cos(pitch)*distance];
    const projection=mat4.perspective(.70,aspect,.3,220),view=mat4.lookAt(eye,target,[0,1,0]);
    this.data.set([1/this.canvas.width,1/this.canvas.height,1.05,0],0);
    this.data.set(mat4.inverse(projection),4);this.data.set(projection,20);this.data.set(view,36);this.data.set(mat4.inverse(view),52);
    this.device.queue.writeBuffer(this.uniform,0,this.data);
  }
  draw(encoder:GPUCommandEncoder,output:GPUTextureView,count:number){
    const attachment=(view:GPUTextureView,r=0):GPURenderPassColorAttachment=>({view,clearValue:{r,g:0,b:0,a:1},loadOp:'clear',storeOp:'store'});
    const depth=(view:GPUTextureView):GPURenderPassDepthStencilAttachment=>({view,depthClearValue:1,depthLoadOp:'clear',depthStoreOp:'store'});
    const scene=encoder.beginRenderPass({colorAttachments:[attachment(this.color),attachment(this.worldDepth,1e6)],depthStencilAttachment:depth(this.depthTest)});
    scene.setPipeline(this.background);scene.setBindGroup(0,this.bgGroup);scene.draw(3);
    scene.setPipeline(this.mesh);scene.setBindGroup(0,this.meshGroup);scene.setVertexBuffer(0,this.vertex);scene.draw(this.vertexCount);scene.end();
    const particles=encoder.beginRenderPass({colorAttachments:[attachment(this.fluidDepth,1e6)],depthStencilAttachment:depth(this.fluidTest)});
    particles.setPipeline(this.particles);particles.setBindGroup(0,this.particleGroup);particles.draw(6,count);particles.end();
    for(let iteration=0;iteration<4;iteration++)for(let i=0;i<2;i++){
      const p=encoder.beginRenderPass({colorAttachments:[attachment(i?this.fluidDepth:this.tempDepth,1e6)]});p.setPipeline(this.filter);p.setBindGroup(0,this.filterGroups[i]);p.draw(6);p.end();
    }
    const thickness=encoder.beginRenderPass({colorAttachments:[attachment(this.thicknessView)]});thickness.setPipeline(this.thickness);thickness.setBindGroup(0,this.thicknessGroup);thickness.draw(6,count);thickness.end();
    const finish=encoder.beginRenderPass({colorAttachments:[attachment(output)]});finish.setPipeline(this.water);finish.setBindGroup(0,this.waterGroup);finish.draw(3);finish.end();
  }
  destroy(){this.textures.forEach(t=>t.destroy());this.buffers.forEach(b=>b.destroy());}
}
