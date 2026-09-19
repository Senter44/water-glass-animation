import clear from '../mls-mpm/clearGrid.wgsl';
import p2g1 from '../mls-mpm/p2g_1.wgsl';
import p2g2 from '../mls-mpm/p2g_2.wgsl';
import copy from '../mls-mpm/copyPosition.wgsl';
import boundary from './boundary.wgsl';
import gridShader from './grid.wgsl';
import advance from './advance.wgsl';
import emitter from './emitter.wgsl';
import './geometry.js';
declare const BambooGeometry: any;

export class Simulation {
  readonly count = 8000;
  readonly buffers: GPUBuffer[] = [];
  readonly particles: GPUBuffer;
  readonly positions: GPUBuffer;
  readonly bamboo: GPUBuffer;
  private stages: { pipeline: GPUComputePipeline; group: GPUBindGroup; work: number }[] = [];
  private emit: { pipeline: GPUComputePipeline; group: GPUBindGroup };
  private time = 0;
  private cursor = 0;
  private emission = new BambooGeometry.EmissionBudget();
  private lastAngle = -.30;
  private values = new Float32Array(12);
  constructor(readonly device: GPUDevice) {
    const buffer = (size: number, uniform = false) => {
      const b = device.createBuffer({size, usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|(uniform?GPUBufferUsage.UNIFORM:GPUBufferUsage.STORAGE)});
      this.buffers.push(b); return b;
    };
    this.particles = buffer(this.count*80); this.positions = buffer(this.count*32);
    this.bamboo = buffer(48,true);
    const dimensions = buffer(16,true), count = buffer(4,true), dt = buffer(4,true);
    const gridCount = BambooGeometry.grid.reduce((a:number,b:number)=>a*b,1);
    const cells = buffer(gridCount*16), density = buffer(this.count*4);
    device.queue.writeBuffer(dimensions,0,new Float32Array([...BambooGeometry.grid,0]));
    device.queue.writeBuffer(count,0,new Uint32Array([this.count]));
    device.queue.writeBuffer(dt,0,new Float32Array([.12]));
    const stage = (label: string, code: string, resources: GPUBuffer[], constants: Record<string,number> = {}, work = this.count) => {
      const pipeline=device.createComputePipeline({label,layout:'auto',compute:{module:device.createShaderModule({label,code}),constants}});
      const group=device.createBindGroup({layout:pipeline.getBindGroupLayout(0),entries:resources.map((b,binding)=>({binding,resource:{buffer:b}}))});
      return {pipeline,group,work:Math.ceil(work/64)};
    };
    this.emit=stage('Recycle pool water into bamboo',boundary+emitter,[this.particles,this.bamboo]);
    this.stages=[
      stage('Splash clear grid',clear,[cells],{},gridCount),
      stage('Splash mass transfer',p2g1,[this.particles,cells,dimensions,count],{fixedPointMultiplier:1e6}),
      stage('Splash pressure transfer',p2g2,[this.particles,cells,dimensions,count,density,dt],{fixedPointMultiplier:1e6,fixedPointMultiplierInverse:1e-6,stiffness:32,restDensity:3,dynamicViscosity:.06}),
      stage('Gravity and moving hollow collider',boundary+gridShader,[cells,this.bamboo,dimensions],{},gridCount),
      stage('Splash grid to particles and collisions',boundary+advance,[this.particles,cells,this.bamboo,dimensions]),
      stage('Copy fluid positions',copy,[this.particles,this.positions,count]),
    ];
    this.reset();
  }
  reset() {
    this.lastAngle=-.30;this.time=0;this.cursor=0;this.emission=new BambooGeometry.EmissionBudget();
    const points=BambooGeometry.initialParticles(this.count,this.lastAngle,false);
    const data=new Float32Array(this.count*20),positions=new Float32Array(this.count*8);
    points.forEach((p:number[],i:number)=>{data.set(p,i*20);positions.set(p,i*8);});
    this.device.queue.writeBuffer(this.particles,0,data);this.device.queue.writeBuffer(this.positions,0,positions);
  }
  update(angle:number, steps:number, supply:number) {
    const flow=Math.max(0,Math.min(1,supply));
    const emit=this.emission.take(flow,steps);
    this.values.set([Math.cos(angle),Math.sin(angle),this.time,.12,this.cursor,emit,flow,0,Math.cos(this.lastAngle),Math.sin(this.lastAngle),steps?(angle-this.lastAngle)/(.12*steps):0,0]);
    this.device.queue.writeBuffer(this.bamboo,0,this.values);
    this.lastAngle=angle;
    if(steps){this.cursor=(this.cursor+40*steps)%this.count;this.time+=steps*.12;}
  }
  execute(encoder:GPUCommandEncoder, steps:number) {
    if(!steps)return;
    const pass=encoder.beginComputePass();
    pass.setPipeline(this.emit.pipeline);pass.setBindGroup(0,this.emit.group);pass.dispatchWorkgroups(1);
    for(let i=0;i<steps;i++)for(const stage of this.stages){pass.setPipeline(stage.pipeline);pass.setBindGroup(0,stage.group);pass.dispatchWorkgroups(stage.work);}
    pass.end();
  }
  destroy(){this.buffers.forEach(b=>b.destroy());}
}
