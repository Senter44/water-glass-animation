import './style.css';
import './geometry.js';
import './shishi.js';
import { Simulation } from './simulation';
import { Renderer } from './renderer';
declare const BambooGeometry:any;
declare const ShishiMechanism:any;

const canvas=document.querySelector<HTMLCanvasElement>('#scene')!;
const flow=document.querySelector<HTMLInputElement>('#height')!;
const mode=document.querySelector<HTMLSelectElement>('#interaction')!;
const pause=document.querySelector<HTMLButtonElement>('#pause')!;
const reset=document.querySelector<HTMLButtonElement>('#reset')!;
const status=document.querySelector<HTMLOutputElement>('#status')!;
const message=document.querySelector<HTMLDivElement>('#message')!;
const controls=[flow,mode,pause,reset];controls.forEach(c=>c.disabled=true);
const mechanism=new ShishiMechanism();
let stopped=false,device:GPUDevice|undefined,simulation:Simulation|undefined,renderer:Renderer|undefined,photo:GPUTexture|undefined;
let loadBuffer:GPUBuffer|undefined;
let raf=0,busy=false,dirty=false,paused=matchMedia('(prefers-reduced-motion: reduce)').matches;
let yaw=-.82,pitch=.37,angle=mechanism.rest,lastTime=0,accumulator=0;
let diagnosticTime=0,waterCount=0,waterMoment=0,resetGeneration=0;
let drag:{id:number;x:number;y:number;start:number}|null=null;
const syncPause=()=>{pause.textContent=paused?'Play':'Pause';pause.setAttribute('aria-pressed',String(paused));};syncPause();
function destroy(){renderer?.destroy();simulation?.destroy();loadBuffer?.destroy();photo?.destroy();device?.destroy();}
function fail(error:unknown){
  if(stopped)return;stopped=true;cancelAnimationFrame(raf);raf=0;
  message.hidden=false;message.textContent='The 3D scene could not start. '+(error instanceof Error?error.message:String(error));
  status.textContent='Unavailable';canvas.dataset.state='error';controls.forEach(c=>c.disabled=true);console.error(error);destroy();
}
function schedule(){dirty=true;if(!raf&&!busy&&!stopped&&!document.hidden)raf=requestAnimationFrame(frame);}
flow.addEventListener('input',schedule);
mode.addEventListener('change',()=>{canvas.classList.toggle('orbit',mode.value!=='tilt');drag=null;schedule();});
pause.addEventListener('click',()=>{paused=!paused;accumulator=0;lastTime=0;syncPause();schedule();});
reset.addEventListener('click',()=>{resetGeneration++;simulation?.reset();mechanism.reset();angle=mechanism.rest;waterCount=waterMoment=accumulator=0;diagnosticTime=0;schedule();});
canvas.addEventListener('pointerdown',e=>{drag={id:e.pointerId,x:e.clientX,y:e.clientY,start:angle};canvas.setPointerCapture(e.pointerId);});
canvas.addEventListener('pointermove',e=>{
  if(!drag||e.pointerId!==drag.id)return;
  if(mode.value==='tilt'){angle=Math.max(mechanism.rest,Math.min(mechanism.limit,drag.start+(e.clientY-drag.y)*.004));mechanism.angle=angle;mechanism.velocity=0;}
  else{yaw-=(e.clientX-drag.x)*.006;pitch=Math.max(.1,Math.min(1.15,pitch+(e.clientY-drag.y)*.005));drag.x=e.clientX;drag.y=e.clientY;}
  schedule();
});
for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,()=>{drag=null;});
canvas.addEventListener('keydown',e=>{
  if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Home'].includes(e.key))return;e.preventDefault();
  if(e.key==='Home'){yaw=-.82;pitch=.37;}
  else if(e.key==='ArrowLeft'||e.key==='ArrowRight')yaw+=e.key==='ArrowLeft'?-.08:.08;
  else if(mode.value==='tilt'){angle=Math.max(mechanism.rest,Math.min(mechanism.limit,angle+(e.key==='ArrowUp'?-.04:.04)));mechanism.angle=angle;mechanism.velocity=0;}
  else pitch=Math.max(.1,Math.min(1.15,pitch+(e.key==='ArrowUp'?.04:-.04)));
  schedule();
});
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;lastTime=0;accumulator=0;}else schedule();});
window.addEventListener('resize',()=>{lastTime=0;schedule();});
window.addEventListener('pagehide',()=>{stopped=true;cancelAnimationFrame(raf);destroy();},{once:true});

let context:GPUCanvasContext,format:GPUTextureFormat,vertices:Float32Array;
function resize(){
  const ratio=Math.min(devicePixelRatio||1,1.25,1000/Math.max(canvas.clientWidth,canvas.clientHeight));
  const w=Math.max(2,Math.floor(canvas.clientWidth*ratio/2)*2),h=Math.max(2,Math.floor(canvas.clientHeight*ratio/2)*2);
  if(canvas.width===w&&canvas.height===h&&renderer)return;
  renderer?.destroy();canvas.width=w;canvas.height=h;
  renderer=new Renderer(device!,canvas,format,simulation!.positions,simulation!.bamboo,photo!,vertices);
}
async function sampleWaterLoad(){
  if(stopped||!device||!simulation||!loadBuffer)return;
  const sampledGeneration=resetGeneration,sampledAngle=angle;
  const encoder=device.createCommandEncoder();encoder.copyBufferToBuffer(simulation.particles,0,loadBuffer,0,loadBuffer.size);device.queue.submit([encoder.finish()]);
  await loadBuffer.mapAsync(GPUMapMode.READ);
  try{
    if(stopped||sampledGeneration!==resetGeneration)return;
    const data=new Float32Array(loadBuffer.getMappedRange());let inside=0,falling=0,pool=0,invalid=0,moment=0;
    for(let i=0;i<simulation.count;i++){
      const p=[data[i*20],data[i*20+1],data[i*20+2]];
      if(!p.every(Number.isFinite)){invalid++;continue;}
      const q=BambooGeometry.toLocal(p,sampledAngle);
      if(q[0]>.85*q[1]&&q[0]<17.6&&Math.hypot(q[1],q[2])<4.12){inside++;moment+=BambooGeometry.pivot[0]-p[0];}
      else if(p[1]>14)falling++;else pool++;
    }
    waterCount=inside;waterMoment=moment;
    canvas.dataset.liquid=JSON.stringify({inside,falling,pool,invalid,total:simulation.count});
    if(invalid)throw new Error('The water simulation became unstable. Reload to reset it.');
  }finally{loadBuffer.unmap();}
}
async function frame(now:number){
  raf=0;if(stopped||document.hidden||!device||!simulation)return;busy=true;dirty=false;
  try{
    resize();const elapsed=lastTime?Math.min((now-lastTime)/1000,1/20):1/60;lastTime=now;
    accumulator+=paused?0:elapsed*120;const steps=Math.min(6,Math.floor(accumulator));accumulator-=steps;
    if(mode.value!=='tilt')angle=mechanism.step(steps/120,waterCount,waterMoment);
    // Keep the small feeder below its resolved particle-density capacity.
    simulation.update(angle,steps,Number(flow.value)*.0026);renderer!.camera(yaw,pitch);
    const encoder=device.createCommandEncoder();simulation.execute(encoder,steps);renderer!.draw(encoder,context.getCurrentTexture().createView(),simulation.count);device.queue.submit([encoder.finish()]);
    await device.queue.onSubmittedWorkDone();if(stopped)return;
    message.hidden=true;canvas.dataset.state='ready';controls.forEach(c=>c.disabled=false);
    if(now-diagnosticTime>100){diagnosticTime=now;await sampleWaterLoad();}
    const phase=mode.value==='tilt'?'Manual':mechanism.phase;
    status.textContent=paused?'Paused':`${phase} · ${mechanism.cycles} cycles`;
    canvas.dataset.mechanism=JSON.stringify({angle,phase,cycles:mechanism.cycles,waterCount,waterMoment});
  }catch(error){fail(error);}finally{busy=false;}
  if(dirty||!paused)schedule();
}
async function start(){
  if(!navigator.gpu)throw new Error('WebGPU is required. Please use a compatible Chrome or Edge browser.');
  const adapter=await navigator.gpu.requestAdapter({powerPreference:'high-performance'});
  if(!adapter)throw new Error('No compatible graphics adapter is available.');
  device=await adapter.requestDevice();if(stopped){device.destroy();return;}
  device.addEventListener('uncapturederror',e=>fail(new Error((e as GPUUncapturedErrorEvent).error.message)));
  device.lost.then(info=>{if(!stopped)fail(new Error('Graphics device disconnected: '+info.message));});
  context=canvas.getContext('webgpu')!;if(!context)throw new Error('Cannot create a WebGPU canvas.');
  format=navigator.gpu.getPreferredCanvasFormat();context.configure({device,format,alphaMode:'opaque'});
  const [meshResponse,imageResponse]=await Promise.all([fetch('./bamboo-mesh.json'),fetch('../bamboo/assets/garden.png')]);
  if(!meshResponse.ok||!imageResponse.ok)throw new Error('A scene asset failed to load. Reload to try again.');
  vertices=new Float32Array(await meshResponse.json());
  const bitmap=await createImageBitmap(await imageResponse.blob());
  if(stopped){bitmap.close();return;}
  photo=device.createTexture({size:[bitmap.width,bitmap.height],format:'rgba8unorm',usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});
  device.queue.copyExternalImageToTexture({source:bitmap},{texture:photo},[bitmap.width,bitmap.height]);bitmap.close();
  simulation=new Simulation(device);
  loadBuffer=device.createBuffer({size:simulation.count*80,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});
  resize();schedule();
}
start().catch(fail);
