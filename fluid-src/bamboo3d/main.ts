import './style.css';
import './geometry.js';
import { Simulation } from './simulation';
import { Renderer } from './renderer';
declare const BambooGeometry:any;

const canvas=document.querySelector<HTMLCanvasElement>('#scene')!;
const height=document.querySelector<HTMLInputElement>('#height')!;
const mode=document.querySelector<HTMLSelectElement>('#interaction')!;
const pause=document.querySelector<HTMLButtonElement>('#pause')!;
const reset=document.querySelector<HTMLButtonElement>('#reset')!;
const status=document.querySelector<HTMLOutputElement>('#status')!;
const message=document.querySelector<HTMLDivElement>('#message')!;
const controls=[height,mode,pause,reset];controls.forEach(c=>c.disabled=true);
let stopped=false,device:GPUDevice|undefined,simulation:Simulation|undefined,renderer:Renderer|undefined,photo:GPUTexture|undefined;
let raf=0,busy=false,dirty=false,paused=matchMedia('(prefers-reduced-motion: reduce)').matches;
let yaw=-.86,pitch=.43,angle=BambooGeometry.angleForHeight(30),lastTime=0,accumulator=0;
let frameCount=0,fpsTime=performance.now(),diagnosticTime=0;
let drag:{id:number;x:number;y:number;start:number}|null=null;
const syncPause=()=>{pause.textContent=paused?'Play':'Pause';pause.setAttribute('aria-pressed',String(paused));};syncPause();
function fail(error:unknown){
  if(stopped)return;stopped=true;cancelAnimationFrame(raf);raf=0;
  message.hidden=false;message.textContent='The 3D scene could not start. '+(error instanceof Error?error.message:String(error));
  status.textContent='Unavailable';canvas.dataset.state='error';controls.forEach(c=>c.disabled=true);console.error(error);
  renderer?.destroy();simulation?.destroy();photo?.destroy();device?.destroy();
}
function schedule(){dirty=true;if(!raf && !busy && !stopped && !document.hidden)raf=requestAnimationFrame(frame);}
height.addEventListener('input',schedule);
mode.addEventListener('change',()=>{canvas.classList.toggle('orbit',mode.value==='orbit');drag=null;});
pause.addEventListener('click',()=>{paused=!paused;accumulator=0;lastTime=0;syncPause();status.textContent=paused?'Paused':'Resuming…';schedule();});
reset.addEventListener('click',()=>{simulation?.reset(Number(height.value));angle=BambooGeometry.angleForHeight(Number(height.value));accumulator=0;schedule();});
canvas.addEventListener('pointerdown',e=>{drag={id:e.pointerId,x:e.clientX,y:e.clientY,start:Number(height.value)};canvas.setPointerCapture(e.pointerId);});
canvas.addEventListener('pointermove',e=>{
  if(!drag || e.pointerId!==drag.id)return;
  if(mode.value==='tilt')height.value=String(Math.max(0,Math.min(100,drag.start-(e.clientY-drag.y)*.35)));
  else {yaw-=(e.clientX-drag.x)*.006;pitch=Math.max(.1,Math.min(1.15,pitch+(e.clientY-drag.y)*.005));drag.x=e.clientX;drag.y=e.clientY;}
  schedule();
});
for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,()=>{drag=null;});
canvas.addEventListener('keydown',e=>{
  if(!['ArrowUp','ArrowDown','Home','End'].includes(e.key))return;e.preventDefault();
  height.value=String(e.key==='Home'?0:e.key==='End'?100:Number(height.value)+(e.key==='ArrowUp'?3:-3));schedule();
});
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;lastTime=0;accumulator=0;}else schedule();});
window.addEventListener('resize',()=>{lastTime=0;schedule();});
window.addEventListener('pagehide',()=>{stopped=true;cancelAnimationFrame(raf);renderer?.destroy();simulation?.destroy();photo?.destroy();device?.destroy();},{once:true});

let context:GPUCanvasContext,format:GPUTextureFormat,vertices:Float32Array;
function resize(){
  const ratio=Math.min(devicePixelRatio||1,1.25,1000/Math.max(canvas.clientWidth,canvas.clientHeight));
  const w=Math.max(2,Math.floor(canvas.clientWidth*ratio/2)*2),h=Math.max(2,Math.floor(canvas.clientHeight*ratio/2)*2);
  if(canvas.width===w && canvas.height===h && renderer)return;
  renderer?.destroy();canvas.width=w;canvas.height=h;
  renderer=new Renderer(device!,canvas,format,simulation!.positions,simulation!.bamboo,photo!,vertices);
}
async function diagnostics(){
  if(stopped||!device||!simulation)return;
  const buffer=device.createBuffer({size:simulation.count*80,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});
  try{
    const encoder=device.createCommandEncoder();encoder.copyBufferToBuffer(simulation.particles,0,buffer,0,buffer.size);device.queue.submit([encoder.finish()]);
    await buffer.mapAsync(GPUMapMode.READ);const data=new Float32Array(buffer.getMappedRange());
    let inside=0,falling=0,pool=0,invalid=0;
    for(let i=0;i<simulation.count;i++){
      const p=[data[i*20],data[i*20+1],data[i*20+2]];
      if(!p.every(Number.isFinite)){invalid++;continue;}
      const q=BambooGeometry.toLocal(p,angle);
      if(q[0]>.85*q[1] && q[0]<26 && Math.hypot(q[1],q[2])<4.1)inside++;
      else if(p[1]>14)falling++;else pool++;
    }
    canvas.dataset.liquid=JSON.stringify({inside,falling,pool,invalid,total:simulation.count});
    if(invalid)throw new Error('The water simulation became unstable. Reload to reset it.');
  }finally{buffer.destroy();}
}
async function frame(now:number){
  raf=0;if(stopped||document.hidden||!device||!simulation)return;busy=true;dirty=false;
  try{
    resize();const elapsed=lastTime?Math.min((now-lastTime)/1000,1/20):1/60;lastTime=now;
    const desired=BambooGeometry.angleForHeight(Number(height.value));
    angle+=Math.max(-.012,Math.min(.012,desired-angle));
    if(paused)angle=desired;
    accumulator+=paused?0:elapsed*120;const steps=Math.min(6,Math.floor(accumulator));accumulator-=steps;
    simulation.update(angle,steps);renderer!.camera(yaw,pitch);
    const encoder=device.createCommandEncoder();simulation.execute(encoder,steps);renderer!.draw(encoder,context.getCurrentTexture().createView(),simulation.count);device.queue.submit([encoder.finish()]);
    await device.queue.onSubmittedWorkDone();if(stopped)return;
    message.hidden=true;canvas.dataset.state='ready';controls.forEach(c=>c.disabled=false);
    frameCount++;if(now-fpsTime>1000){status.textContent=paused?'Paused':`${Math.round(frameCount*1000/(now-fpsTime))} FPS · 8k particles`;frameCount=0;fpsTime=now;}
    if(now-diagnosticTime>2500){diagnosticTime=now;await diagnostics();}
  }catch(error){fail(error);}finally{busy=false;}
  if(dirty||!paused||Math.abs(angle-BambooGeometry.angleForHeight(Number(height.value)))>.001)schedule();
}
async function start(){
  if(!navigator.gpu)throw new Error('WebGPU is required. Please use a compatible Chrome or Edge browser.');
  const adapter=await navigator.gpu.requestAdapter({powerPreference:'high-performance'});
  if(!adapter)throw new Error('No compatible graphics adapter is available.');
  device=await adapter.requestDevice();device.addEventListener('uncapturederror',e=>fail(new Error((e as GPUUncapturedErrorEvent).error.message)));
  device.lost.then(info=>{if(!stopped)fail(new Error('Graphics device disconnected: '+info.message));});
  context=canvas.getContext('webgpu')!;if(!context)throw new Error('Cannot create a WebGPU canvas.');
  format=navigator.gpu.getPreferredCanvasFormat();context.configure({device,format,alphaMode:'opaque'});
  const [meshResponse,imageResponse]=await Promise.all([fetch('./bamboo-mesh.json'),fetch('../bamboo/assets/garden.png')]);
  if(!meshResponse.ok||!imageResponse.ok)throw new Error('A scene asset failed to load. Reload to try again.');
  vertices=new Float32Array(await meshResponse.json());
  const bitmap=await createImageBitmap(await imageResponse.blob());
  photo=device.createTexture({size:[bitmap.width,bitmap.height],format:'rgba8unorm',usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});
  device.queue.copyExternalImageToTexture({source:bitmap},{texture:photo},[bitmap.width,bitmap.height]);bitmap.close();
  simulation=new Simulation(device);resize();schedule();
}
start().catch(fail);
