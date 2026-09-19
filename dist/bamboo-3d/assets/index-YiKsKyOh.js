var Vn=Object.defineProperty;var Xn=(u,x,z)=>x in u?Vn(u,x,{enumerable:!0,configurable:!0,writable:!0,value:z}):u[x]=z;var U=(u,x,z)=>Xn(u,typeof x!="symbol"?x+"":x,z);(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))P(b);new MutationObserver(b=>{for(const q of b)if(q.type==="childList")for(const F of q.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&P(F)}).observe(document,{childList:!0,subtree:!0});function z(b){const q={};return b.integrity&&(q.integrity=b.integrity),b.referrerPolicy&&(q.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?q.credentials="include":b.crossOrigin==="anonymous"?q.credentials="omit":q.credentials="same-origin",q}function P(b){if(b.ep)return;b.ep=!0;const q=z(b);fetch(b.href,q)}})();(()=>{const u=[72,60,36],x=[54,35,18],z=26,P=4.7,b=4.05,q=.85,F=B=>.24-Math.max(0,Math.min(100,B))*.0046;function E(B,G){const X=B[0]-z,Z=Math.cos(G),j=Math.sin(G);return[x[0]+Z*X-j*B[1],x[1]+j*X+Z*B[1],x[2]+B[2]]}function N(B,G){const X=B[0]-x[0],Z=B[1]-x[1],j=Math.cos(G),W=Math.sin(G);return[j*X+W*Z+z,-W*X+j*Z,B[2]-x[2]]}function L(B){const G=Math.hypot(B[1],B[2]),X=Math.max(G-P,b-G,(q*B[1]-B[0])/Math.hypot(1,q),B[0]-z),Z=Math.max(G-P,Math.abs(B[0]-z)-.4);return Math.min(X,Z)}function R(B){const G=[...B];for(let X=0;X<5;X++){const Z=L(G);if(Z>=.15)break;const j=G.map((I,nt)=>{const Q=[...G],C=[...G];return Q[nt]+=.001,C[nt]-=.001,L(Q)-L(C)}),W=Math.hypot(...j)||1;for(let I=0;I<3;I++)G[I]+=j[I]/W*(.151-Z)}return G}function $(B,G){const X=[];for(let j=1;j<24.8;j+=.68)for(let W=-3.65;W<-1.35;W+=.68)for(let I=-3.6;I<3.7;I+=.68){const nt=[j,W,I];L(nt)>.3&&Math.hypot(W,I)<3.7&&X.push(E(nt,G))}for(let j=3.6;X.length<B&&j<12;j+=.68)for(let W=-12.8;W<13;W+=.68)for(let I=-12.8;I<13&&X.length<B;I+=.68)Math.hypot(W,I)<12.8&&X.push([24+W,j,18+I]);if(X.length<B)throw new Error("Particle count exceeds the basin capacity");return X.slice(0,B)}class K{constructor(){U(this,"credit",0)}take(G,X){this.credit+=Math.max(0,Math.min(1,G))*10*Math.max(0,Math.min(6,X));const Z=Math.floor(this.credit+1e-9);return this.credit=Math.max(0,this.credit-Z),Z}}globalThis.BambooGeometry={grid:u,pivot:x,length:z,outer:P,inner:b,cut:q,angleForHeight:F,toWorld:E,toLocal:N,solidDistance:L,projectOut:R,initialParticles:$,EmissionBudget:K}})();var kn=`struct Cell {\r
    vx: i32, \r
    vy: i32, \r
    vz: i32, \r
    mass: i32, \r
}

@group(0) @binding(0) var<storage, read_write> cells: array<Cell>;

@compute @workgroup_size(64)\r
fn clearGrid(@builtin(global_invocation_id) id: vec3<u32>) {\r
    if (id.x < arrayLength(&cells)) {\r
        cells[id.x].mass = 0;\r
        cells[id.x].vx = 0;\r
        cells[id.x].vy = 0;\r
        cells[id.x].vz = 0;\r
    }\r
}`,Un=`struct Particle {\r
    position: vec3f, \r
    v: vec3f, \r
    C: mat3x3f, \r
}\r
struct Cell {\r
    vx: atomic<i32>, \r
    vy: atomic<i32>, \r
    vz: atomic<i32>, \r
    mass: atomic<i32>, \r
}

override fixedPointMultiplier: f32; 

fn encodeFixedPoint(floatingPoint: f32) -> i32 {\r
	return i32(floatingPoint * fixedPointMultiplier);\r
}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;\r
@group(0) @binding(1) var<storage, read_write> cells: array<Cell>;\r
@group(0) @binding(2) var<uniform> initBoxSize: vec3f;\r
@group(0) @binding(3) var<uniform> numParticles: u32;

@compute @workgroup_size(64)\r
fn p2g_1(@builtin(global_invocation_id) id: vec3<u32>) {\r
    if (id.x < numParticles) {\r
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];\r
        let cellIndex: vec3f = floor(particle.position);\r
        let cellDiff: vec3f = particle.position - (cellIndex + 0.5f);\r
        weights[0] = 0.5f * (0.5f - cellDiff) * (0.5f - cellDiff);\r
        weights[1] = 0.75f - cellDiff * cellDiff;\r
        weights[2] = 0.5f * (0.5f + cellDiff) * (0.5f + cellDiff);

        let C: mat3x3f = particle.C;

        for (var gx = 0; gx < 3; gx++) {\r
            for (var gy = 0; gy < 3; gy++) {\r
                for (var gz = 0; gz < 3; gz++) {\r
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;\r
                    let cellX: vec3f = vec3f(\r
                            cellIndex.x + f32(gx) - 1., \r
                            cellIndex.y + f32(gy) - 1.,\r
                            cellIndex.z + f32(gz) - 1.  \r
                        );\r
                    let cellDist = (cellX + 0.5f) - particle.position;

                    let Q: vec3f = C * cellDist;

                    let massContrib: f32 = weight * 1.0; 
                    let velContrib: vec3f = massContrib * (particle.v + Q);\r
                    let cellIndex1D: i32 = \r
                        i32(cellX.x) * i32(initBoxSize.y) * i32(initBoxSize.z) + \r
                        i32(cellX.y) * i32(initBoxSize.z) + \r
                        i32(cellX.z);\r
                    atomicAdd(&cells[cellIndex1D].mass, encodeFixedPoint(massContrib));\r
                    atomicAdd(&cells[cellIndex1D].vx, encodeFixedPoint(velContrib.x));\r
                    atomicAdd(&cells[cellIndex1D].vy, encodeFixedPoint(velContrib.y));\r
                    atomicAdd(&cells[cellIndex1D].vz, encodeFixedPoint(velContrib.z));\r
                }\r
            }\r
        }\r
    }\r
}`,Hn=`struct Particle {\r
    position: vec3f, \r
    v: vec3f, \r
    C: mat3x3f, \r
}\r
struct Cell {\r
    vx: atomic<i32>, \r
    vy: atomic<i32>, \r
    vz: atomic<i32>, \r
    mass: i32, \r
}

override fixedPointMultiplier: f32; \r
override fixedPointMultiplierInverse: f32; \r
override stiffness: f32;\r
override restDensity: f32;\r
override dynamicViscosity: f32;

fn encodeFixedPoint(floatingPoint: f32) -> i32 {\r
	return i32(floatingPoint * fixedPointMultiplier);\r
}\r
fn decodeFixedPoint(fixedPoint: i32) -> f32 {\r
	return f32(fixedPoint) * fixedPointMultiplierInverse;\r
}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;\r
@group(0) @binding(1) var<storage, read_write> cells: array<Cell>;\r
@group(0) @binding(2) var<uniform> initBoxSize: vec3f;\r
@group(0) @binding(3) var<uniform> numParticles: u32;\r
@group(0) @binding(4) var<storage, read_write> densities: array<f32>;\r
@group(0) @binding(5) var<uniform> dt: f32;

@compute @workgroup_size(64)\r
fn p2g_2(@builtin(global_invocation_id) id: vec3<u32>) {\r
    if (id.x < numParticles) {\r
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];\r
        let cellIndex: vec3f = floor(particle.position);\r
        let cellDiff: vec3f = particle.position - (cellIndex + 0.5f);\r
        weights[0] = 0.5f * (0.5f - cellDiff) * (0.5f - cellDiff);\r
        weights[1] = 0.75f - cellDiff * cellDiff;\r
        weights[2] = 0.5f * (0.5f + cellDiff) * (0.5f + cellDiff);

        var density: f32 = 0.;\r
        for (var gx = 0; gx < 3; gx++) {\r
            for (var gy = 0; gy < 3; gy++) {    \r
                for (var gz = 0; gz < 3; gz++) {\r
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;\r
                    let cellX: vec3f = vec3f(\r
                            cellIndex.x + f32(gx) - 1., \r
                            cellIndex.y + f32(gy) - 1.,\r
                            cellIndex.z + f32(gz) - 1.  \r
                        );\r
                    let cellIndex1D: i32 = \r
                        i32(cellX.x) * i32(initBoxSize.y) * i32(initBoxSize.z) + \r
                        i32(cellX.y) * i32(initBoxSize.z) + \r
                        i32(cellX.z);\r
                    density += decodeFixedPoint(cells[cellIndex1D].mass) * weight;\r
                }\r
            }\r
        }

        let volume: f32 = 1.0 / density; 
        densities[id.x] = density;

        let pressure: f32 = max(-0.0, stiffness * (pow(density / restDensity, 1.) - 1));

        var stress: mat3x3f = mat3x3f(-pressure, 0, 0, 0, -pressure, 0, 0, 0, -pressure);\r
        let dudv: mat3x3f = particle.C;\r
        let strain: mat3x3f = dudv + transpose(dudv);\r
        stress += dynamicViscosity * strain;

        let eq_16_term0 = -volume * 4 * stress * dt;

        for (var gx = 0; gx < 3; gx++) {\r
            for (var gy = 0; gy < 3; gy++) {\r
                for (var gz = 0; gz < 3; gz++) {\r
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;\r
                    let cellX: vec3f = vec3f(\r
                            cellIndex.x + f32(gx) - 1., \r
                            cellIndex.y + f32(gy) - 1.,\r
                            cellIndex.z + f32(gz) - 1.  \r
                        );\r
                    let cellDist = (cellX + 0.5f) - particle.position;\r
                    let cellIndex1D: i32 = \r
                        i32(cellX.x) * i32(initBoxSize.y) * i32(initBoxSize.z) + \r
                        i32(cellX.y) * i32(initBoxSize.z) + \r
                        i32(cellX.z);\r
                    let momentum: vec3f = eq_16_term0 * weight * cellDist;\r
                    atomicAdd(&cells[cellIndex1D].vx, encodeFixedPoint(momentum.x));\r
                    atomicAdd(&cells[cellIndex1D].vy, encodeFixedPoint(momentum.y));\r
                    atomicAdd(&cells[cellIndex1D].vz, encodeFixedPoint(momentum.z));\r
                }\r
            }\r
        }\r
    }\r
}`,Yn=`struct Particle {\r
    position: vec3f, \r
    v: vec3f, \r
    C: mat3x3f, \r
}

struct PosVel {\r
    position: vec3f, \r
    v: vec3f, \r
}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;\r
@group(0) @binding(1) var<storage, read_write> posvel: array<PosVel>;\r
@group(0) @binding(2) var<uniform> numParticles: u32;

@compute @workgroup_size(64)\r
fn copyPosition(@builtin(global_invocation_id) id: vec3<u32>) {\r
    if (id.x < numParticles) { \r
        posvel[id.x].position = particles[id.x].position;\r
        posvel[id.x].v = particles[id.x].v;\r
    }\r
}`,sn=`struct Bamboo { rotation: vec4f, emission: vec4f, previous: vec4f }

fn localPoint(p: vec3f, b: Bamboo) -> vec3f {
  let d = p - vec3f(54,35,18);
  return vec3f(b.rotation.x*d.x + b.rotation.y*d.y + 26, -b.rotation.y*d.x + b.rotation.x*d.y, d.z);
}
fn worldPoint(p: vec3f, b: Bamboo) -> vec3f {
  let d = p - vec3f(26,0,0);
  return vec3f(b.rotation.x*d.x - b.rotation.y*d.y, b.rotation.y*d.x + b.rotation.x*d.y, d.z) + vec3f(54,35,18);
}
fn worldVector(n: vec3f, b: Bamboo) -> vec3f { return vec3f(b.rotation.x*n.x-b.rotation.y*n.y,b.rotation.y*n.x+b.rotation.x*n.y,n.z); }
fn bambooDistance(p: vec3f) -> f32 {
  let r = length(p.yz);
  let shell = max(max(r-4.7,4.05-r),max((.85*p.y-p.x)/1.3124405,p.x-26));
  let cap = max(r-4.7,abs(p.x-26)-.4);
  return min(shell,cap);
}
fn bambooNormal(p: vec3f) -> vec3f {
  let e = .015;
  return normalize(vec3f(bambooDistance(p+vec3f(e,0,0))-bambooDistance(p-vec3f(e,0,0)),bambooDistance(p+vec3f(0,e,0))-bambooDistance(p-vec3f(0,e,0)),bambooDistance(p+vec3f(0,0,e))-bambooDistance(p-vec3f(0,0,e)))+vec3f(.000001));
}`,On=`struct Cell { vx:i32, vy:i32, vz:i32, mass:i32 }
@group(0) @binding(0) var<storage,read_write> cells:array<Cell>;
@group(0) @binding(1) var<uniform> b:Bamboo;
@group(0) @binding(2) var<uniform> size:vec3f;
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id:vec3u) {
  if(id.x >= arrayLength(&cells) || cells[id.x].mass <= 0) { return; }
  let mass = f32(cells[id.x].mass);
  var v = vec3f(f32(cells[id.x].vx),f32(cells[id.x].vy),f32(cells[id.x].vz))/mass;
  v.y -= .4*b.rotation.w;
  let i = i32(id.x);
  let p = vec3f(f32(i/i32(size.y)/i32(size.z)),f32((i/i32(size.z))%i32(size.y)),f32(i%i32(size.z)))+.5;
  let local = localPoint(p,b);
  if(bambooDistance(local)<.65) {
    let n = worldVector(bambooNormal(local),b);
    let wall = worldVector(vec3f(-local.y,local.x-26,0),b)*b.previous.z;
    v -= n*min(0.,dot(v-wall,n));
  }
  if(p.y < 3.5) { v.y=max(v.y,0.); v.x*=.99; v.z*=.99; }
  if(p.y<14.) {
    let radial=p.xz-vec2f(24,18); let r=length(radial);
    if(r>13. && r<18.) { let n=radial/max(r,.01); let outward=max(0.,dot(v.xz,n)); v.x-=outward*n.x;v.z-=outward*n.y; }
  }
  v=clamp(v,vec3f(-5),vec3f(5));
  cells[id.x].vx=i32(v.x*1e6); cells[id.x].vy=i32(v.y*1e6); cells[id.x].vz=i32(v.z*1e6);
}`,Rn=`struct Particle { position:vec3f, v:vec3f, C:mat3x3f }
struct Cell { vx:i32, vy:i32, vz:i32, mass:i32 }
@group(0) @binding(0) var<storage,read_write> particles:array<Particle>;
@group(0) @binding(1) var<storage,read> cells:array<Cell>;
@group(0) @binding(2) var<uniform> b:Bamboo;
@group(0) @binding(3) var<uniform> size:vec3f;
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id:vec3u) {
  if(id.x>=arrayLength(&particles)) { return; }
  var p=particles[id.x]; let base=floor(p.position); let d=p.position-(base+.5);
  var w:array<vec3f,3>; w[0]=.5*(.5-d)*(.5-d); w[1]=.75-d*d; w[2]=.5*(.5+d)*(.5+d);
  var v=vec3f(0); var C=mat3x3f(vec3f(0),vec3f(0),vec3f(0));
  for(var x=0;x<3;x++){for(var y=0;y<3;y++){for(var z=0;z<3;z++){
    let cell=base+vec3f(f32(x),f32(y),f32(z))-1.;
    let index=i32(cell.x)*i32(size.y)*i32(size.z)+i32(cell.y)*i32(size.z)+i32(cell.z);
    let c=cells[index]; let vel=vec3f(f32(c.vx),f32(c.vy),f32(c.vz))*1e-6*w[x].x*w[y].y*w[z].z;
    let dist=cell+.5-p.position;
    v+=vel; C+=mat3x3f(vel*dist.x,vel*dist.y,vel*dist.z);
  }}}
  p.v=clamp(v,vec3f(-5),vec3f(5)); p.C=C*4.; p.position+=p.v*b.rotation.w;
  for(var iteration=0;iteration<3;iteration++) {
    let local=localPoint(p.position,b); let distance=bambooDistance(local);
    if(distance>=.2){break;}
    let n=worldVector(bambooNormal(local),b); p.position+=n*(.205-distance);
    let wall=worldVector(vec3f(-local.y,local.x-26,0),b)*b.previous.z;
    p.v-=n*min(0.,dot(p.v-wall,n));
  }
  if(p.position.y<14.) {
    let radial=p.position.xz-vec2f(24,18); let r=length(radial);
    if(r>13.3){let n=radial/max(r,.01);p.position.x=24+n.x*13.3;p.position.z=18+n.y*13.3;let out=max(0.,dot(p.v.xz,n));p.v.x-=n.x*out;p.v.z-=n.y*out;}
  }
  if(p.position.y<3.4){p.position.y=3.4;p.v.y=max(p.v.y,0.);}
  p.position=clamp(p.position,vec3f(2),size-vec3f(3));
  particles[id.x]=p;
}`,jn=`struct Particle { position:vec3f, v:vec3f, C:mat3x3f }
@group(0) @binding(0) var<storage,read_write> particles:array<Particle>;
@group(0) @binding(1) var<uniform> b:Bamboo;
fn random(x:f32)->f32{return fract(sin(x*127.1+311.7)*43758.5453);}
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id:vec3u) {
  
  if(f32(id.x)>=b.emission.y){return;}
  let index=(u32(b.emission.x)+id.x)%arrayLength(&particles);
  var p=particles[index];
  if(p.position.y>12.){return;}
  let seed=f32(index)+b.rotation.z*173.;
  let y=-3.3+random(seed)*1.6; let z=(random(seed+1.)-.5)*3.;
  p.position=worldPoint(vec3f(23.2+random(seed+2.)*.6,y,z),b);
  p.v=worldVector(vec3f(-.12,0,0),b);
  p.C=mat3x3f(vec3f(0),vec3f(0),vec3f(0)); particles[index]=p;
}`;class Wn{constructor(x){U(this,"count",8e3);U(this,"buffers",[]);U(this,"particles");U(this,"positions");U(this,"bamboo");U(this,"stages",[]);U(this,"emit");U(this,"time",0);U(this,"cursor",0);U(this,"emission",new BambooGeometry.EmissionBudget);U(this,"lastAngle",BambooGeometry.angleForHeight(30));U(this,"values",new Float32Array(12));this.device=x;const z=(R,$=!1)=>{const K=x.createBuffer({size:R,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|($?GPUBufferUsage.UNIFORM:GPUBufferUsage.STORAGE)});return this.buffers.push(K),K};this.particles=z(this.count*80),this.positions=z(this.count*32),this.bamboo=z(48,!0);const P=z(16,!0),b=z(4,!0),q=z(4,!0),F=BambooGeometry.grid.reduce((R,$)=>R*$,1),E=z(F*16),N=z(this.count*4);x.queue.writeBuffer(P,0,new Float32Array([...BambooGeometry.grid,0])),x.queue.writeBuffer(b,0,new Uint32Array([this.count])),x.queue.writeBuffer(q,0,new Float32Array([.12]));const L=(R,$,K,B={},G=this.count)=>{const X=x.createComputePipeline({label:R,layout:"auto",compute:{module:x.createShaderModule({label:R,code:$}),constants:B}}),Z=x.createBindGroup({layout:X.getBindGroupLayout(0),entries:K.map((j,W)=>({binding:W,resource:{buffer:j}}))});return{pipeline:X,group:Z,work:Math.ceil(G/64)}};this.emit=L("Recycle pool water into bamboo",sn+jn,[this.particles,this.bamboo]),this.stages=[L("Splash clear grid",kn,[E],{},F),L("Splash mass transfer",Un,[this.particles,E,P,b],{fixedPointMultiplier:1e6}),L("Splash pressure transfer",Hn,[this.particles,E,P,b,N,q],{fixedPointMultiplier:1e6,fixedPointMultiplierInverse:1e-6,stiffness:32,restDensity:3,dynamicViscosity:.06}),L("Gravity and moving hollow collider",sn+On,[E,this.bamboo,P],{},F),L("Splash grid to particles and collisions",sn+Rn,[this.particles,E,this.bamboo,P]),L("Copy fluid positions",Yn,[this.particles,this.positions,b])],this.reset(30)}reset(x){this.lastAngle=BambooGeometry.angleForHeight(x),this.time=0,this.cursor=0,this.emission=new BambooGeometry.EmissionBudget;const z=BambooGeometry.initialParticles(this.count,this.lastAngle),P=new Float32Array(this.count*20),b=new Float32Array(this.count*8);z.forEach((q,F)=>{P.set(q,F*20),b.set(q,F*8)}),this.device.queue.writeBuffer(this.particles,0,P),this.device.queue.writeBuffer(this.positions,0,b)}update(x,z){const P=Math.max(0,Math.min(1,(x+.01)/.25)),b=this.emission.take(P,z);this.values.set([Math.cos(x),Math.sin(x),this.time,.12,this.cursor,b,P,0,Math.cos(this.lastAngle),Math.sin(this.lastAngle),z?(x-this.lastAngle)/(.12*z):0,0]),this.device.queue.writeBuffer(this.bamboo,0,this.values),this.lastAngle=x,z&&(this.cursor=(this.cursor+40*z)%this.count,this.time+=z*.12)}execute(x,z){if(!z)return;const P=x.beginComputePass();P.setPipeline(this.emit.pipeline),P.setBindGroup(0,this.emit.group),P.dispatchWorkgroups(1);for(let b=0;b<z;b++)for(const q of this.stages)P.setPipeline(q.pipeline),P.setBindGroup(0,q.group),P.dispatchWorkgroups(q.work);P.end()}destroy(){this.buffers.forEach(x=>x.destroy())}}function Nn(u,x){return class extends u{constructor(...z){super(...z),x(this)}}}const Zn=Nn(Array,u=>u.fill(0));let V=1e-6;function $n(u){function x(t=0,i=0){const n=new u(2);return t!==void 0&&(n[0]=t,i!==void 0&&(n[1]=i)),n}const z=x;function P(t,i,n){const s=n??new u(2);return s[0]=t,s[1]=i,s}function b(t,i){const n=i??new u(2);return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n}function q(t,i){const n=i??new u(2);return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n}function F(t,i){const n=i??new u(2);return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n}function E(t,i=0,n=1,s){const a=s??new u(2);return a[0]=Math.min(n,Math.max(i,t[0])),a[1]=Math.min(n,Math.max(i,t[1])),a}function N(t,i,n){const s=n??new u(2);return s[0]=t[0]+i[0],s[1]=t[1]+i[1],s}function L(t,i,n,s){const a=s??new u(2);return a[0]=t[0]+i[0]*n,a[1]=t[1]+i[1]*n,a}function R(t,i){const n=t[0],s=t[1],a=i[0],v=i[1],y=Math.sqrt(n*n+s*s),c=Math.sqrt(a*a+v*v),l=y*c,p=l&&Tt(t,i)/l;return Math.acos(p)}function $(t,i,n){const s=n??new u(2);return s[0]=t[0]-i[0],s[1]=t[1]-i[1],s}const K=$;function B(t,i){return Math.abs(t[0]-i[0])<V&&Math.abs(t[1]-i[1])<V}function G(t,i){return t[0]===i[0]&&t[1]===i[1]}function X(t,i,n,s){const a=s??new u(2);return a[0]=t[0]+n*(i[0]-t[0]),a[1]=t[1]+n*(i[1]-t[1]),a}function Z(t,i,n,s){const a=s??new u(2);return a[0]=t[0]+n[0]*(i[0]-t[0]),a[1]=t[1]+n[1]*(i[1]-t[1]),a}function j(t,i,n){const s=n??new u(2);return s[0]=Math.max(t[0],i[0]),s[1]=Math.max(t[1],i[1]),s}function W(t,i,n){const s=n??new u(2);return s[0]=Math.min(t[0],i[0]),s[1]=Math.min(t[1],i[1]),s}function I(t,i,n){const s=n??new u(2);return s[0]=t[0]*i,s[1]=t[1]*i,s}const nt=I;function Q(t,i,n){const s=n??new u(2);return s[0]=t[0]/i,s[1]=t[1]/i,s}function C(t,i){const n=i??new u(2);return n[0]=1/t[0],n[1]=1/t[1],n}const at=C;function Pt(t,i,n){const s=n??new u(3),a=t[0]*i[1]-t[1]*i[0];return s[0]=0,s[1]=0,s[2]=a,s}function Tt(t,i){return t[0]*i[0]+t[1]*i[1]}function lt(t){const i=t[0],n=t[1];return Math.sqrt(i*i+n*n)}const Lt=lt;function Y(t){const i=t[0],n=t[1];return i*i+n*n}const J=Y;function H(t,i){const n=t[0]-i[0],s=t[1]-i[1];return Math.sqrt(n*n+s*s)}const Gt=H;function xt(t,i){const n=t[0]-i[0],s=t[1]-i[1];return n*n+s*s}const It=xt;function gt(t,i){const n=i??new u(2),s=t[0],a=t[1],v=Math.sqrt(s*s+a*a);return v>1e-5?(n[0]=s/v,n[1]=a/v):(n[0]=0,n[1]=0),n}function Et(t,i){const n=i??new u(2);return n[0]=-t[0],n[1]=-t[1],n}function tt(t,i){const n=i??new u(2);return n[0]=t[0],n[1]=t[1],n}const Vt=tt;function zt(t,i,n){const s=n??new u(2);return s[0]=t[0]*i[0],s[1]=t[1]*i[1],s}const Xt=zt;function bt(t,i,n){const s=n??new u(2);return s[0]=t[0]/i[0],s[1]=t[1]/i[1],s}const Ft=bt;function At(t=1,i){const n=i??new u(2),s=Math.random()*2*Math.PI;return n[0]=Math.cos(s)*t,n[1]=Math.sin(s)*t,n}function o(t){const i=t??new u(2);return i[0]=0,i[1]=0,i}function d(t,i,n){const s=n??new u(2),a=t[0],v=t[1];return s[0]=a*i[0]+v*i[4]+i[12],s[1]=a*i[1]+v*i[5]+i[13],s}function e(t,i,n){const s=n??new u(2),a=t[0],v=t[1];return s[0]=i[0]*a+i[4]*v+i[8],s[1]=i[1]*a+i[5]*v+i[9],s}function r(t,i,n,s){const a=s??new u(2),v=t[0]-i[0],y=t[1]-i[1],c=Math.sin(n),l=Math.cos(n);return a[0]=v*l-y*c+i[0],a[1]=v*c+y*l+i[1],a}function f(t,i,n){const s=n??new u(2);return gt(t,s),I(s,i,s)}function h(t,i,n){const s=n??new u(2);return lt(t)>i?f(t,i,s):tt(t,s)}function m(t,i,n){const s=n??new u(2);return X(t,i,.5,s)}return{create:x,fromValues:z,set:P,ceil:b,floor:q,round:F,clamp:E,add:N,addScaled:L,angle:R,subtract:$,sub:K,equalsApproximately:B,equals:G,lerp:X,lerpV:Z,max:j,min:W,mulScalar:I,scale:nt,divScalar:Q,inverse:C,invert:at,cross:Pt,dot:Tt,length:lt,len:Lt,lengthSq:Y,lenSq:J,distance:H,dist:Gt,distanceSq:xt,distSq:It,normalize:gt,negate:Et,copy:tt,clone:Vt,multiply:zt,mul:Xt,divide:bt,div:Ft,random:At,zero:o,transformMat4:d,transformMat3:e,rotate:r,setLength:f,truncate:h,midpoint:m}}const bn=new Map;function _n(u){let x=bn.get(u);return x||(x=$n(u),bn.set(u,x)),x}function Qn(u){function x(c,l,p){const w=new u(3);return c!==void 0&&(w[0]=c,l!==void 0&&(w[1]=l,p!==void 0&&(w[2]=p))),w}const z=x;function P(c,l,p,w){const g=w??new u(3);return g[0]=c,g[1]=l,g[2]=p,g}function b(c,l){const p=l??new u(3);return p[0]=Math.ceil(c[0]),p[1]=Math.ceil(c[1]),p[2]=Math.ceil(c[2]),p}function q(c,l){const p=l??new u(3);return p[0]=Math.floor(c[0]),p[1]=Math.floor(c[1]),p[2]=Math.floor(c[2]),p}function F(c,l){const p=l??new u(3);return p[0]=Math.round(c[0]),p[1]=Math.round(c[1]),p[2]=Math.round(c[2]),p}function E(c,l=0,p=1,w){const g=w??new u(3);return g[0]=Math.min(p,Math.max(l,c[0])),g[1]=Math.min(p,Math.max(l,c[1])),g[2]=Math.min(p,Math.max(l,c[2])),g}function N(c,l,p){const w=p??new u(3);return w[0]=c[0]+l[0],w[1]=c[1]+l[1],w[2]=c[2]+l[2],w}function L(c,l,p,w){const g=w??new u(3);return g[0]=c[0]+l[0]*p,g[1]=c[1]+l[1]*p,g[2]=c[2]+l[2]*p,g}function R(c,l){const p=c[0],w=c[1],g=c[2],D=l[0],M=l[1],A=l[2],_=Math.sqrt(p*p+w*w+g*g),T=Math.sqrt(D*D+M*M+A*A),S=_*T,k=S&&Tt(c,l)/S;return Math.acos(k)}function $(c,l,p){const w=p??new u(3);return w[0]=c[0]-l[0],w[1]=c[1]-l[1],w[2]=c[2]-l[2],w}const K=$;function B(c,l){return Math.abs(c[0]-l[0])<V&&Math.abs(c[1]-l[1])<V&&Math.abs(c[2]-l[2])<V}function G(c,l){return c[0]===l[0]&&c[1]===l[1]&&c[2]===l[2]}function X(c,l,p,w){const g=w??new u(3);return g[0]=c[0]+p*(l[0]-c[0]),g[1]=c[1]+p*(l[1]-c[1]),g[2]=c[2]+p*(l[2]-c[2]),g}function Z(c,l,p,w){const g=w??new u(3);return g[0]=c[0]+p[0]*(l[0]-c[0]),g[1]=c[1]+p[1]*(l[1]-c[1]),g[2]=c[2]+p[2]*(l[2]-c[2]),g}function j(c,l,p){const w=p??new u(3);return w[0]=Math.max(c[0],l[0]),w[1]=Math.max(c[1],l[1]),w[2]=Math.max(c[2],l[2]),w}function W(c,l,p){const w=p??new u(3);return w[0]=Math.min(c[0],l[0]),w[1]=Math.min(c[1],l[1]),w[2]=Math.min(c[2],l[2]),w}function I(c,l,p){const w=p??new u(3);return w[0]=c[0]*l,w[1]=c[1]*l,w[2]=c[2]*l,w}const nt=I;function Q(c,l,p){const w=p??new u(3);return w[0]=c[0]/l,w[1]=c[1]/l,w[2]=c[2]/l,w}function C(c,l){const p=l??new u(3);return p[0]=1/c[0],p[1]=1/c[1],p[2]=1/c[2],p}const at=C;function Pt(c,l,p){const w=p??new u(3),g=c[2]*l[0]-c[0]*l[2],D=c[0]*l[1]-c[1]*l[0];return w[0]=c[1]*l[2]-c[2]*l[1],w[1]=g,w[2]=D,w}function Tt(c,l){return c[0]*l[0]+c[1]*l[1]+c[2]*l[2]}function lt(c){const l=c[0],p=c[1],w=c[2];return Math.sqrt(l*l+p*p+w*w)}const Lt=lt;function Y(c){const l=c[0],p=c[1],w=c[2];return l*l+p*p+w*w}const J=Y;function H(c,l){const p=c[0]-l[0],w=c[1]-l[1],g=c[2]-l[2];return Math.sqrt(p*p+w*w+g*g)}const Gt=H;function xt(c,l){const p=c[0]-l[0],w=c[1]-l[1],g=c[2]-l[2];return p*p+w*w+g*g}const It=xt;function gt(c,l){const p=l??new u(3),w=c[0],g=c[1],D=c[2],M=Math.sqrt(w*w+g*g+D*D);return M>1e-5?(p[0]=w/M,p[1]=g/M,p[2]=D/M):(p[0]=0,p[1]=0,p[2]=0),p}function Et(c,l){const p=l??new u(3);return p[0]=-c[0],p[1]=-c[1],p[2]=-c[2],p}function tt(c,l){const p=l??new u(3);return p[0]=c[0],p[1]=c[1],p[2]=c[2],p}const Vt=tt;function zt(c,l,p){const w=p??new u(3);return w[0]=c[0]*l[0],w[1]=c[1]*l[1],w[2]=c[2]*l[2],w}const Xt=zt;function bt(c,l,p){const w=p??new u(3);return w[0]=c[0]/l[0],w[1]=c[1]/l[1],w[2]=c[2]/l[2],w}const Ft=bt;function At(c=1,l){const p=l??new u(3),w=Math.random()*2*Math.PI,g=Math.random()*2-1,D=Math.sqrt(1-g*g)*c;return p[0]=Math.cos(w)*D,p[1]=Math.sin(w)*D,p[2]=g*c,p}function o(c){const l=c??new u(3);return l[0]=0,l[1]=0,l[2]=0,l}function d(c,l,p){const w=p??new u(3),g=c[0],D=c[1],M=c[2],A=l[3]*g+l[7]*D+l[11]*M+l[15]||1;return w[0]=(l[0]*g+l[4]*D+l[8]*M+l[12])/A,w[1]=(l[1]*g+l[5]*D+l[9]*M+l[13])/A,w[2]=(l[2]*g+l[6]*D+l[10]*M+l[14])/A,w}function e(c,l,p){const w=p??new u(3),g=c[0],D=c[1],M=c[2];return w[0]=g*l[0*4+0]+D*l[1*4+0]+M*l[2*4+0],w[1]=g*l[0*4+1]+D*l[1*4+1]+M*l[2*4+1],w[2]=g*l[0*4+2]+D*l[1*4+2]+M*l[2*4+2],w}function r(c,l,p){const w=p??new u(3),g=c[0],D=c[1],M=c[2];return w[0]=g*l[0]+D*l[4]+M*l[8],w[1]=g*l[1]+D*l[5]+M*l[9],w[2]=g*l[2]+D*l[6]+M*l[10],w}function f(c,l,p){const w=p??new u(3),g=l[0],D=l[1],M=l[2],A=l[3]*2,_=c[0],T=c[1],S=c[2],k=D*S-M*T,O=M*_-g*S,et=g*T-D*_;return w[0]=_+k*A+(D*et-M*O)*2,w[1]=T+O*A+(M*k-g*et)*2,w[2]=S+et*A+(g*O-D*k)*2,w}function h(c,l){const p=l??new u(3);return p[0]=c[12],p[1]=c[13],p[2]=c[14],p}function m(c,l,p){const w=p??new u(3),g=l*4;return w[0]=c[g+0],w[1]=c[g+1],w[2]=c[g+2],w}function t(c,l){const p=l??new u(3),w=c[0],g=c[1],D=c[2],M=c[4],A=c[5],_=c[6],T=c[8],S=c[9],k=c[10];return p[0]=Math.sqrt(w*w+g*g+D*D),p[1]=Math.sqrt(M*M+A*A+_*_),p[2]=Math.sqrt(T*T+S*S+k*k),p}function i(c,l,p,w){const g=w??new u(3),D=[],M=[];return D[0]=c[0]-l[0],D[1]=c[1]-l[1],D[2]=c[2]-l[2],M[0]=D[0],M[1]=D[1]*Math.cos(p)-D[2]*Math.sin(p),M[2]=D[1]*Math.sin(p)+D[2]*Math.cos(p),g[0]=M[0]+l[0],g[1]=M[1]+l[1],g[2]=M[2]+l[2],g}function n(c,l,p,w){const g=w??new u(3),D=[],M=[];return D[0]=c[0]-l[0],D[1]=c[1]-l[1],D[2]=c[2]-l[2],M[0]=D[2]*Math.sin(p)+D[0]*Math.cos(p),M[1]=D[1],M[2]=D[2]*Math.cos(p)-D[0]*Math.sin(p),g[0]=M[0]+l[0],g[1]=M[1]+l[1],g[2]=M[2]+l[2],g}function s(c,l,p,w){const g=w??new u(3),D=[],M=[];return D[0]=c[0]-l[0],D[1]=c[1]-l[1],D[2]=c[2]-l[2],M[0]=D[0]*Math.cos(p)-D[1]*Math.sin(p),M[1]=D[0]*Math.sin(p)+D[1]*Math.cos(p),M[2]=D[2],g[0]=M[0]+l[0],g[1]=M[1]+l[1],g[2]=M[2]+l[2],g}function a(c,l,p){const w=p??new u(3);return gt(c,w),I(w,l,w)}function v(c,l,p){const w=p??new u(3);return lt(c)>l?a(c,l,w):tt(c,w)}function y(c,l,p){const w=p??new u(3);return X(c,l,.5,w)}return{create:x,fromValues:z,set:P,ceil:b,floor:q,round:F,clamp:E,add:N,addScaled:L,angle:R,subtract:$,sub:K,equalsApproximately:B,equals:G,lerp:X,lerpV:Z,max:j,min:W,mulScalar:I,scale:nt,divScalar:Q,inverse:C,invert:at,cross:Pt,dot:Tt,length:lt,len:Lt,lengthSq:Y,lenSq:J,distance:H,dist:Gt,distanceSq:xt,distSq:It,normalize:gt,negate:Et,copy:tt,clone:Vt,multiply:zt,mul:Xt,divide:bt,div:Ft,random:At,zero:o,transformMat4:d,transformMat4Upper3x3:e,transformMat3:r,transformQuat:f,getTranslation:h,getAxis:m,getScaling:t,rotateX:i,rotateY:n,rotateZ:s,setLength:a,truncate:v,midpoint:y}}const Pn=new Map;function ln(u){let x=Pn.get(u);return x||(x=Qn(u),Pn.set(u,x)),x}function Jn(u){const x=_n(u),z=ln(u);function P(o,d,e,r,f,h,m,t,i){const n=new u(12);return n[3]=0,n[7]=0,n[11]=0,o!==void 0&&(n[0]=o,d!==void 0&&(n[1]=d,e!==void 0&&(n[2]=e,r!==void 0&&(n[4]=r,f!==void 0&&(n[5]=f,h!==void 0&&(n[6]=h,m!==void 0&&(n[8]=m,t!==void 0&&(n[9]=t,i!==void 0&&(n[10]=i))))))))),n}function b(o,d,e,r,f,h,m,t,i,n){const s=n??new u(12);return s[0]=o,s[1]=d,s[2]=e,s[3]=0,s[4]=r,s[5]=f,s[6]=h,s[7]=0,s[8]=m,s[9]=t,s[10]=i,s[11]=0,s}function q(o,d){const e=d??new u(12);return e[0]=o[0],e[1]=o[1],e[2]=o[2],e[3]=0,e[4]=o[4],e[5]=o[5],e[6]=o[6],e[7]=0,e[8]=o[8],e[9]=o[9],e[10]=o[10],e[11]=0,e}function F(o,d){const e=d??new u(12),r=o[0],f=o[1],h=o[2],m=o[3],t=r+r,i=f+f,n=h+h,s=r*t,a=f*t,v=f*i,y=h*t,c=h*i,l=h*n,p=m*t,w=m*i,g=m*n;return e[0]=1-v-l,e[1]=a+g,e[2]=y-w,e[3]=0,e[4]=a-g,e[5]=1-s-l,e[6]=c+p,e[7]=0,e[8]=y+w,e[9]=c-p,e[10]=1-s-v,e[11]=0,e}function E(o,d){const e=d??new u(12);return e[0]=-o[0],e[1]=-o[1],e[2]=-o[2],e[4]=-o[4],e[5]=-o[5],e[6]=-o[6],e[8]=-o[8],e[9]=-o[9],e[10]=-o[10],e}function N(o,d){const e=d??new u(12);return e[0]=o[0],e[1]=o[1],e[2]=o[2],e[4]=o[4],e[5]=o[5],e[6]=o[6],e[8]=o[8],e[9]=o[9],e[10]=o[10],e}const L=N;function R(o,d){return Math.abs(o[0]-d[0])<V&&Math.abs(o[1]-d[1])<V&&Math.abs(o[2]-d[2])<V&&Math.abs(o[4]-d[4])<V&&Math.abs(o[5]-d[5])<V&&Math.abs(o[6]-d[6])<V&&Math.abs(o[8]-d[8])<V&&Math.abs(o[9]-d[9])<V&&Math.abs(o[10]-d[10])<V}function $(o,d){return o[0]===d[0]&&o[1]===d[1]&&o[2]===d[2]&&o[4]===d[4]&&o[5]===d[5]&&o[6]===d[6]&&o[8]===d[8]&&o[9]===d[9]&&o[10]===d[10]}function K(o){const d=o??new u(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function B(o,d){const e=d??new u(12);if(e===o){let v;return v=o[1],o[1]=o[4],o[4]=v,v=o[2],o[2]=o[8],o[8]=v,v=o[6],o[6]=o[9],o[9]=v,e}const r=o[0*4+0],f=o[0*4+1],h=o[0*4+2],m=o[1*4+0],t=o[1*4+1],i=o[1*4+2],n=o[2*4+0],s=o[2*4+1],a=o[2*4+2];return e[0]=r,e[1]=m,e[2]=n,e[4]=f,e[5]=t,e[6]=s,e[8]=h,e[9]=i,e[10]=a,e}function G(o,d){const e=d??new u(12),r=o[0*4+0],f=o[0*4+1],h=o[0*4+2],m=o[1*4+0],t=o[1*4+1],i=o[1*4+2],n=o[2*4+0],s=o[2*4+1],a=o[2*4+2],v=a*t-i*s,y=-a*m+i*n,c=s*m-t*n,l=1/(r*v+f*y+h*c);return e[0]=v*l,e[1]=(-a*f+h*s)*l,e[2]=(i*f-h*t)*l,e[4]=y*l,e[5]=(a*r-h*n)*l,e[6]=(-i*r+h*m)*l,e[8]=c*l,e[9]=(-s*r+f*n)*l,e[10]=(t*r-f*m)*l,e}function X(o){const d=o[0],e=o[0*4+1],r=o[0*4+2],f=o[1*4+0],h=o[1*4+1],m=o[1*4+2],t=o[2*4+0],i=o[2*4+1],n=o[2*4+2];return d*(h*n-i*m)-f*(e*n-i*r)+t*(e*m-h*r)}const Z=G;function j(o,d,e){const r=e??new u(12),f=o[0],h=o[1],m=o[2],t=o[4],i=o[5],n=o[6],s=o[8],a=o[9],v=o[10],y=d[0],c=d[1],l=d[2],p=d[4],w=d[5],g=d[6],D=d[8],M=d[9],A=d[10];return r[0]=f*y+t*c+s*l,r[1]=h*y+i*c+a*l,r[2]=m*y+n*c+v*l,r[4]=f*p+t*w+s*g,r[5]=h*p+i*w+a*g,r[6]=m*p+n*w+v*g,r[8]=f*D+t*M+s*A,r[9]=h*D+i*M+a*A,r[10]=m*D+n*M+v*A,r}const W=j;function I(o,d,e){const r=e??K();return o!==r&&(r[0]=o[0],r[1]=o[1],r[2]=o[2],r[4]=o[4],r[5]=o[5],r[6]=o[6]),r[8]=d[0],r[9]=d[1],r[10]=1,r}function nt(o,d){const e=d??x.create();return e[0]=o[8],e[1]=o[9],e}function Q(o,d,e){const r=e??x.create(),f=d*4;return r[0]=o[f+0],r[1]=o[f+1],r}function C(o,d,e,r){const f=r===o?o:N(o,r),h=e*4;return f[h+0]=d[0],f[h+1]=d[1],f}function at(o,d){const e=d??x.create(),r=o[0],f=o[1],h=o[4],m=o[5];return e[0]=Math.sqrt(r*r+f*f),e[1]=Math.sqrt(h*h+m*m),e}function Pt(o,d){const e=d??z.create(),r=o[0],f=o[1],h=o[2],m=o[4],t=o[5],i=o[6],n=o[8],s=o[9],a=o[10];return e[0]=Math.sqrt(r*r+f*f+h*h),e[1]=Math.sqrt(m*m+t*t+i*i),e[2]=Math.sqrt(n*n+s*s+a*a),e}function Tt(o,d){const e=d??new u(12);return e[0]=1,e[1]=0,e[2]=0,e[4]=0,e[5]=1,e[6]=0,e[8]=o[0],e[9]=o[1],e[10]=1,e}function lt(o,d,e){const r=e??new u(12),f=d[0],h=d[1],m=o[0],t=o[1],i=o[2],n=o[1*4+0],s=o[1*4+1],a=o[1*4+2],v=o[2*4+0],y=o[2*4+1],c=o[2*4+2];return o!==r&&(r[0]=m,r[1]=t,r[2]=i,r[4]=n,r[5]=s,r[6]=a),r[8]=m*f+n*h+v,r[9]=t*f+s*h+y,r[10]=i*f+a*h+c,r}function Lt(o,d){const e=d??new u(12),r=Math.cos(o),f=Math.sin(o);return e[0]=r,e[1]=f,e[2]=0,e[4]=-f,e[5]=r,e[6]=0,e[8]=0,e[9]=0,e[10]=1,e}function Y(o,d,e){const r=e??new u(12),f=o[0*4+0],h=o[0*4+1],m=o[0*4+2],t=o[1*4+0],i=o[1*4+1],n=o[1*4+2],s=Math.cos(d),a=Math.sin(d);return r[0]=s*f+a*t,r[1]=s*h+a*i,r[2]=s*m+a*n,r[4]=s*t-a*f,r[5]=s*i-a*h,r[6]=s*n-a*m,o!==r&&(r[8]=o[8],r[9]=o[9],r[10]=o[10]),r}function J(o,d){const e=d??new u(12),r=Math.cos(o),f=Math.sin(o);return e[0]=1,e[1]=0,e[2]=0,e[4]=0,e[5]=r,e[6]=f,e[8]=0,e[9]=-f,e[10]=r,e}function H(o,d,e){const r=e??new u(12),f=o[4],h=o[5],m=o[6],t=o[8],i=o[9],n=o[10],s=Math.cos(d),a=Math.sin(d);return r[4]=s*f+a*t,r[5]=s*h+a*i,r[6]=s*m+a*n,r[8]=s*t-a*f,r[9]=s*i-a*h,r[10]=s*n-a*m,o!==r&&(r[0]=o[0],r[1]=o[1],r[2]=o[2]),r}function Gt(o,d){const e=d??new u(12),r=Math.cos(o),f=Math.sin(o);return e[0]=r,e[1]=0,e[2]=-f,e[4]=0,e[5]=1,e[6]=0,e[8]=f,e[9]=0,e[10]=r,e}function xt(o,d,e){const r=e??new u(12),f=o[0*4+0],h=o[0*4+1],m=o[0*4+2],t=o[2*4+0],i=o[2*4+1],n=o[2*4+2],s=Math.cos(d),a=Math.sin(d);return r[0]=s*f-a*t,r[1]=s*h-a*i,r[2]=s*m-a*n,r[8]=s*t+a*f,r[9]=s*i+a*h,r[10]=s*n+a*m,o!==r&&(r[4]=o[4],r[5]=o[5],r[6]=o[6]),r}const It=Lt,gt=Y;function Et(o,d){const e=d??new u(12);return e[0]=o[0],e[1]=0,e[2]=0,e[4]=0,e[5]=o[1],e[6]=0,e[8]=0,e[9]=0,e[10]=1,e}function tt(o,d,e){const r=e??new u(12),f=d[0],h=d[1];return r[0]=f*o[0*4+0],r[1]=f*o[0*4+1],r[2]=f*o[0*4+2],r[4]=h*o[1*4+0],r[5]=h*o[1*4+1],r[6]=h*o[1*4+2],o!==r&&(r[8]=o[8],r[9]=o[9],r[10]=o[10]),r}function Vt(o,d){const e=d??new u(12);return e[0]=o[0],e[1]=0,e[2]=0,e[4]=0,e[5]=o[1],e[6]=0,e[8]=0,e[9]=0,e[10]=o[2],e}function zt(o,d,e){const r=e??new u(12),f=d[0],h=d[1],m=d[2];return r[0]=f*o[0*4+0],r[1]=f*o[0*4+1],r[2]=f*o[0*4+2],r[4]=h*o[1*4+0],r[5]=h*o[1*4+1],r[6]=h*o[1*4+2],r[8]=m*o[2*4+0],r[9]=m*o[2*4+1],r[10]=m*o[2*4+2],r}function Xt(o,d){const e=d??new u(12);return e[0]=o,e[1]=0,e[2]=0,e[4]=0,e[5]=o,e[6]=0,e[8]=0,e[9]=0,e[10]=1,e}function bt(o,d,e){const r=e??new u(12);return r[0]=d*o[0*4+0],r[1]=d*o[0*4+1],r[2]=d*o[0*4+2],r[4]=d*o[1*4+0],r[5]=d*o[1*4+1],r[6]=d*o[1*4+2],o!==r&&(r[8]=o[8],r[9]=o[9],r[10]=o[10]),r}function Ft(o,d){const e=d??new u(12);return e[0]=o,e[1]=0,e[2]=0,e[4]=0,e[5]=o,e[6]=0,e[8]=0,e[9]=0,e[10]=o,e}function At(o,d,e){const r=e??new u(12);return r[0]=d*o[0*4+0],r[1]=d*o[0*4+1],r[2]=d*o[0*4+2],r[4]=d*o[1*4+0],r[5]=d*o[1*4+1],r[6]=d*o[1*4+2],r[8]=d*o[2*4+0],r[9]=d*o[2*4+1],r[10]=d*o[2*4+2],r}return{clone:L,create:P,set:b,fromMat4:q,fromQuat:F,negate:E,copy:N,equalsApproximately:R,equals:$,identity:K,transpose:B,inverse:G,invert:Z,determinant:X,mul:W,multiply:j,setTranslation:I,getTranslation:nt,getAxis:Q,setAxis:C,getScaling:at,get3DScaling:Pt,translation:Tt,translate:lt,rotation:Lt,rotate:Y,rotationX:J,rotateX:H,rotationY:Gt,rotateY:xt,rotationZ:It,rotateZ:gt,scaling:Et,scale:tt,uniformScaling:Xt,uniformScale:bt,scaling3D:Vt,scale3D:zt,uniformScaling3D:Ft,uniformScale3D:At}}const Tn=new Map;function Kn(u){let x=Tn.get(u);return x||(x=Jn(u),Tn.set(u,x)),x}function Cn(u){const x=ln(u);function z(t,i,n,s,a,v,y,c,l,p,w,g,D,M,A,_){const T=new u(16);return t!==void 0&&(T[0]=t,i!==void 0&&(T[1]=i,n!==void 0&&(T[2]=n,s!==void 0&&(T[3]=s,a!==void 0&&(T[4]=a,v!==void 0&&(T[5]=v,y!==void 0&&(T[6]=y,c!==void 0&&(T[7]=c,l!==void 0&&(T[8]=l,p!==void 0&&(T[9]=p,w!==void 0&&(T[10]=w,g!==void 0&&(T[11]=g,D!==void 0&&(T[12]=D,M!==void 0&&(T[13]=M,A!==void 0&&(T[14]=A,_!==void 0&&(T[15]=_)))))))))))))))),T}function P(t,i,n,s,a,v,y,c,l,p,w,g,D,M,A,_,T){const S=T??new u(16);return S[0]=t,S[1]=i,S[2]=n,S[3]=s,S[4]=a,S[5]=v,S[6]=y,S[7]=c,S[8]=l,S[9]=p,S[10]=w,S[11]=g,S[12]=D,S[13]=M,S[14]=A,S[15]=_,S}function b(t,i){const n=i??new u(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=0,n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=0,n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function q(t,i){const n=i??new u(16),s=t[0],a=t[1],v=t[2],y=t[3],c=s+s,l=a+a,p=v+v,w=s*c,g=a*c,D=a*l,M=v*c,A=v*l,_=v*p,T=y*c,S=y*l,k=y*p;return n[0]=1-D-_,n[1]=g+k,n[2]=M-S,n[3]=0,n[4]=g-k,n[5]=1-w-_,n[6]=A+T,n[7]=0,n[8]=M+S,n[9]=A-T,n[10]=1-w-D,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function F(t,i){const n=i??new u(16);return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n[4]=-t[4],n[5]=-t[5],n[6]=-t[6],n[7]=-t[7],n[8]=-t[8],n[9]=-t[9],n[10]=-t[10],n[11]=-t[11],n[12]=-t[12],n[13]=-t[13],n[14]=-t[14],n[15]=-t[15],n}function E(t,i){const n=i??new u(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}const N=E;function L(t,i){return Math.abs(t[0]-i[0])<V&&Math.abs(t[1]-i[1])<V&&Math.abs(t[2]-i[2])<V&&Math.abs(t[3]-i[3])<V&&Math.abs(t[4]-i[4])<V&&Math.abs(t[5]-i[5])<V&&Math.abs(t[6]-i[6])<V&&Math.abs(t[7]-i[7])<V&&Math.abs(t[8]-i[8])<V&&Math.abs(t[9]-i[9])<V&&Math.abs(t[10]-i[10])<V&&Math.abs(t[11]-i[11])<V&&Math.abs(t[12]-i[12])<V&&Math.abs(t[13]-i[13])<V&&Math.abs(t[14]-i[14])<V&&Math.abs(t[15]-i[15])<V}function R(t,i){return t[0]===i[0]&&t[1]===i[1]&&t[2]===i[2]&&t[3]===i[3]&&t[4]===i[4]&&t[5]===i[5]&&t[6]===i[6]&&t[7]===i[7]&&t[8]===i[8]&&t[9]===i[9]&&t[10]===i[10]&&t[11]===i[11]&&t[12]===i[12]&&t[13]===i[13]&&t[14]===i[14]&&t[15]===i[15]}function $(t){const i=t??new u(16);return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function K(t,i){const n=i??new u(16);if(n===t){let O;return O=t[1],t[1]=t[4],t[4]=O,O=t[2],t[2]=t[8],t[8]=O,O=t[3],t[3]=t[12],t[12]=O,O=t[6],t[6]=t[9],t[9]=O,O=t[7],t[7]=t[13],t[13]=O,O=t[11],t[11]=t[14],t[14]=O,n}const s=t[0*4+0],a=t[0*4+1],v=t[0*4+2],y=t[0*4+3],c=t[1*4+0],l=t[1*4+1],p=t[1*4+2],w=t[1*4+3],g=t[2*4+0],D=t[2*4+1],M=t[2*4+2],A=t[2*4+3],_=t[3*4+0],T=t[3*4+1],S=t[3*4+2],k=t[3*4+3];return n[0]=s,n[1]=c,n[2]=g,n[3]=_,n[4]=a,n[5]=l,n[6]=D,n[7]=T,n[8]=v,n[9]=p,n[10]=M,n[11]=S,n[12]=y,n[13]=w,n[14]=A,n[15]=k,n}function B(t,i){const n=i??new u(16),s=t[0*4+0],a=t[0*4+1],v=t[0*4+2],y=t[0*4+3],c=t[1*4+0],l=t[1*4+1],p=t[1*4+2],w=t[1*4+3],g=t[2*4+0],D=t[2*4+1],M=t[2*4+2],A=t[2*4+3],_=t[3*4+0],T=t[3*4+1],S=t[3*4+2],k=t[3*4+3],O=M*k,et=S*A,rt=p*k,it=S*w,ut=p*A,ft=M*w,dt=v*k,ht=S*y,pt=v*A,vt=M*y,mt=v*w,yt=p*y,Dt=g*T,Mt=_*D,St=c*T,qt=_*l,Bt=c*D,$t=g*l,Qt=s*T,Jt=_*a,Kt=s*D,Ct=g*a,tn=s*l,nn=c*a,yn=O*l+it*D+ut*T-(et*l+rt*D+ft*T),Dn=et*a+dt*D+vt*T-(O*a+ht*D+pt*T),Mn=rt*a+ht*l+mt*T-(it*a+dt*l+yt*T),zn=ft*a+pt*l+yt*D-(ut*a+vt*l+mt*D),wt=1/(s*yn+c*Dn+g*Mn+_*zn);return n[0]=wt*yn,n[1]=wt*Dn,n[2]=wt*Mn,n[3]=wt*zn,n[4]=wt*(et*c+rt*g+ft*_-(O*c+it*g+ut*_)),n[5]=wt*(O*s+ht*g+pt*_-(et*s+dt*g+vt*_)),n[6]=wt*(it*s+dt*c+yt*_-(rt*s+ht*c+mt*_)),n[7]=wt*(ut*s+vt*c+mt*g-(ft*s+pt*c+yt*g)),n[8]=wt*(Dt*w+qt*A+Bt*k-(Mt*w+St*A+$t*k)),n[9]=wt*(Mt*y+Qt*A+Ct*k-(Dt*y+Jt*A+Kt*k)),n[10]=wt*(St*y+Jt*w+tn*k-(qt*y+Qt*w+nn*k)),n[11]=wt*($t*y+Kt*w+nn*A-(Bt*y+Ct*w+tn*A)),n[12]=wt*(St*M+$t*S+Mt*p-(Bt*S+Dt*p+qt*M)),n[13]=wt*(Kt*S+Dt*v+Jt*M-(Qt*M+Ct*S+Mt*v)),n[14]=wt*(Qt*p+nn*S+qt*v-(tn*S+St*v+Jt*p)),n[15]=wt*(tn*M+Bt*v+Ct*p-(Kt*p+nn*M+$t*v)),n}function G(t){const i=t[0],n=t[0*4+1],s=t[0*4+2],a=t[0*4+3],v=t[1*4+0],y=t[1*4+1],c=t[1*4+2],l=t[1*4+3],p=t[2*4+0],w=t[2*4+1],g=t[2*4+2],D=t[2*4+3],M=t[3*4+0],A=t[3*4+1],_=t[3*4+2],T=t[3*4+3],S=g*T,k=_*D,O=c*T,et=_*l,rt=c*D,it=g*l,ut=s*T,ft=_*a,dt=s*D,ht=g*a,pt=s*l,vt=c*a,mt=S*y+et*w+rt*A-(k*y+O*w+it*A),yt=k*n+ut*w+ht*A-(S*n+ft*w+dt*A),Dt=O*n+ft*y+pt*A-(et*n+ut*y+vt*A),Mt=it*n+dt*y+vt*w-(rt*n+ht*y+pt*w);return i*mt+v*yt+p*Dt+M*Mt}const X=B;function Z(t,i,n){const s=n??new u(16),a=t[0],v=t[1],y=t[2],c=t[3],l=t[4],p=t[5],w=t[6],g=t[7],D=t[8],M=t[9],A=t[10],_=t[11],T=t[12],S=t[13],k=t[14],O=t[15],et=i[0],rt=i[1],it=i[2],ut=i[3],ft=i[4],dt=i[5],ht=i[6],pt=i[7],vt=i[8],mt=i[9],yt=i[10],Dt=i[11],Mt=i[12],St=i[13],qt=i[14],Bt=i[15];return s[0]=a*et+l*rt+D*it+T*ut,s[1]=v*et+p*rt+M*it+S*ut,s[2]=y*et+w*rt+A*it+k*ut,s[3]=c*et+g*rt+_*it+O*ut,s[4]=a*ft+l*dt+D*ht+T*pt,s[5]=v*ft+p*dt+M*ht+S*pt,s[6]=y*ft+w*dt+A*ht+k*pt,s[7]=c*ft+g*dt+_*ht+O*pt,s[8]=a*vt+l*mt+D*yt+T*Dt,s[9]=v*vt+p*mt+M*yt+S*Dt,s[10]=y*vt+w*mt+A*yt+k*Dt,s[11]=c*vt+g*mt+_*yt+O*Dt,s[12]=a*Mt+l*St+D*qt+T*Bt,s[13]=v*Mt+p*St+M*qt+S*Bt,s[14]=y*Mt+w*St+A*qt+k*Bt,s[15]=c*Mt+g*St+_*qt+O*Bt,s}const j=Z;function W(t,i,n){const s=n??$();return t!==s&&(s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[8]=t[8],s[9]=t[9],s[10]=t[10],s[11]=t[11]),s[12]=i[0],s[13]=i[1],s[14]=i[2],s[15]=1,s}function I(t,i){const n=i??x.create();return n[0]=t[12],n[1]=t[13],n[2]=t[14],n}function nt(t,i,n){const s=n??x.create(),a=i*4;return s[0]=t[a+0],s[1]=t[a+1],s[2]=t[a+2],s}function Q(t,i,n,s){const a=s===t?s:E(t,s),v=n*4;return a[v+0]=i[0],a[v+1]=i[1],a[v+2]=i[2],a}function C(t,i){const n=i??x.create(),s=t[0],a=t[1],v=t[2],y=t[4],c=t[5],l=t[6],p=t[8],w=t[9],g=t[10];return n[0]=Math.sqrt(s*s+a*a+v*v),n[1]=Math.sqrt(y*y+c*c+l*l),n[2]=Math.sqrt(p*p+w*w+g*g),n}function at(t,i,n,s,a){const v=a??new u(16),y=Math.tan(Math.PI*.5-.5*t);if(v[0]=y/i,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=y,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,Number.isFinite(s)){const c=1/(n-s);v[10]=s*c,v[14]=s*n*c}else v[10]=-1,v[14]=-n;return v}function Pt(t,i,n,s=1/0,a){const v=a??new u(16),y=1/Math.tan(t*.5);if(v[0]=y/i,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=y,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,s===1/0)v[10]=0,v[14]=n;else{const c=1/(s-n);v[10]=n*c,v[14]=s*n*c}return v}function Tt(t,i,n,s,a,v,y){const c=y??new u(16);return c[0]=2/(i-t),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(s-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1/(a-v),c[11]=0,c[12]=(i+t)/(t-i),c[13]=(s+n)/(n-s),c[14]=a/(a-v),c[15]=1,c}function lt(t,i,n,s,a,v,y){const c=y??new u(16),l=i-t,p=s-n,w=a-v;return c[0]=2*a/l,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/p,c[6]=0,c[7]=0,c[8]=(t+i)/l,c[9]=(s+n)/p,c[10]=v/w,c[11]=-1,c[12]=0,c[13]=0,c[14]=a*v/w,c[15]=0,c}function Lt(t,i,n,s,a,v=1/0,y){const c=y??new u(16),l=i-t,p=s-n;if(c[0]=2*a/l,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/p,c[6]=0,c[7]=0,c[8]=(t+i)/l,c[9]=(s+n)/p,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,v===1/0)c[10]=0,c[14]=a;else{const w=1/(v-a);c[10]=a*w,c[14]=v*a*w}return c}const Y=x.create(),J=x.create(),H=x.create();function Gt(t,i,n,s){const a=s??new u(16);return x.normalize(x.subtract(i,t,H),H),x.normalize(x.cross(n,H,Y),Y),x.normalize(x.cross(H,Y,J),J),a[0]=Y[0],a[1]=Y[1],a[2]=Y[2],a[3]=0,a[4]=J[0],a[5]=J[1],a[6]=J[2],a[7]=0,a[8]=H[0],a[9]=H[1],a[10]=H[2],a[11]=0,a[12]=t[0],a[13]=t[1],a[14]=t[2],a[15]=1,a}function xt(t,i,n,s){const a=s??new u(16);return x.normalize(x.subtract(t,i,H),H),x.normalize(x.cross(n,H,Y),Y),x.normalize(x.cross(H,Y,J),J),a[0]=Y[0],a[1]=Y[1],a[2]=Y[2],a[3]=0,a[4]=J[0],a[5]=J[1],a[6]=J[2],a[7]=0,a[8]=H[0],a[9]=H[1],a[10]=H[2],a[11]=0,a[12]=t[0],a[13]=t[1],a[14]=t[2],a[15]=1,a}function It(t,i,n,s){const a=s??new u(16);return x.normalize(x.subtract(t,i,H),H),x.normalize(x.cross(n,H,Y),Y),x.normalize(x.cross(H,Y,J),J),a[0]=Y[0],a[1]=J[0],a[2]=H[0],a[3]=0,a[4]=Y[1],a[5]=J[1],a[6]=H[1],a[7]=0,a[8]=Y[2],a[9]=J[2],a[10]=H[2],a[11]=0,a[12]=-(Y[0]*t[0]+Y[1]*t[1]+Y[2]*t[2]),a[13]=-(J[0]*t[0]+J[1]*t[1]+J[2]*t[2]),a[14]=-(H[0]*t[0]+H[1]*t[1]+H[2]*t[2]),a[15]=1,a}function gt(t,i){const n=i??new u(16);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function Et(t,i,n){const s=n??new u(16),a=i[0],v=i[1],y=i[2],c=t[0],l=t[1],p=t[2],w=t[3],g=t[1*4+0],D=t[1*4+1],M=t[1*4+2],A=t[1*4+3],_=t[2*4+0],T=t[2*4+1],S=t[2*4+2],k=t[2*4+3],O=t[3*4+0],et=t[3*4+1],rt=t[3*4+2],it=t[3*4+3];return t!==s&&(s[0]=c,s[1]=l,s[2]=p,s[3]=w,s[4]=g,s[5]=D,s[6]=M,s[7]=A,s[8]=_,s[9]=T,s[10]=S,s[11]=k),s[12]=c*a+g*v+_*y+O,s[13]=l*a+D*v+T*y+et,s[14]=p*a+M*v+S*y+rt,s[15]=w*a+A*v+k*y+it,s}function tt(t,i){const n=i??new u(16),s=Math.cos(t),a=Math.sin(t);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=a,n[7]=0,n[8]=0,n[9]=-a,n[10]=s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Vt(t,i,n){const s=n??new u(16),a=t[4],v=t[5],y=t[6],c=t[7],l=t[8],p=t[9],w=t[10],g=t[11],D=Math.cos(i),M=Math.sin(i);return s[4]=D*a+M*l,s[5]=D*v+M*p,s[6]=D*y+M*w,s[7]=D*c+M*g,s[8]=D*l-M*a,s[9]=D*p-M*v,s[10]=D*w-M*y,s[11]=D*g-M*c,t!==s&&(s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function zt(t,i){const n=i??new u(16),s=Math.cos(t),a=Math.sin(t);return n[0]=s,n[1]=0,n[2]=-a,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=a,n[9]=0,n[10]=s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Xt(t,i,n){const s=n??new u(16),a=t[0*4+0],v=t[0*4+1],y=t[0*4+2],c=t[0*4+3],l=t[2*4+0],p=t[2*4+1],w=t[2*4+2],g=t[2*4+3],D=Math.cos(i),M=Math.sin(i);return s[0]=D*a-M*l,s[1]=D*v-M*p,s[2]=D*y-M*w,s[3]=D*c-M*g,s[8]=D*l+M*a,s[9]=D*p+M*v,s[10]=D*w+M*y,s[11]=D*g+M*c,t!==s&&(s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function bt(t,i){const n=i??new u(16),s=Math.cos(t),a=Math.sin(t);return n[0]=s,n[1]=a,n[2]=0,n[3]=0,n[4]=-a,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Ft(t,i,n){const s=n??new u(16),a=t[0*4+0],v=t[0*4+1],y=t[0*4+2],c=t[0*4+3],l=t[1*4+0],p=t[1*4+1],w=t[1*4+2],g=t[1*4+3],D=Math.cos(i),M=Math.sin(i);return s[0]=D*a+M*l,s[1]=D*v+M*p,s[2]=D*y+M*w,s[3]=D*c+M*g,s[4]=D*l-M*a,s[5]=D*p-M*v,s[6]=D*w-M*y,s[7]=D*g-M*c,t!==s&&(s[8]=t[8],s[9]=t[9],s[10]=t[10],s[11]=t[11],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function At(t,i,n){const s=n??new u(16);let a=t[0],v=t[1],y=t[2];const c=Math.sqrt(a*a+v*v+y*y);a/=c,v/=c,y/=c;const l=a*a,p=v*v,w=y*y,g=Math.cos(i),D=Math.sin(i),M=1-g;return s[0]=l+(1-l)*g,s[1]=a*v*M+y*D,s[2]=a*y*M-v*D,s[3]=0,s[4]=a*v*M-y*D,s[5]=p+(1-p)*g,s[6]=v*y*M+a*D,s[7]=0,s[8]=a*y*M+v*D,s[9]=v*y*M-a*D,s[10]=w+(1-w)*g,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}const o=At;function d(t,i,n,s){const a=s??new u(16);let v=i[0],y=i[1],c=i[2];const l=Math.sqrt(v*v+y*y+c*c);v/=l,y/=l,c/=l;const p=v*v,w=y*y,g=c*c,D=Math.cos(n),M=Math.sin(n),A=1-D,_=p+(1-p)*D,T=v*y*A+c*M,S=v*c*A-y*M,k=v*y*A-c*M,O=w+(1-w)*D,et=y*c*A+v*M,rt=v*c*A+y*M,it=y*c*A-v*M,ut=g+(1-g)*D,ft=t[0],dt=t[1],ht=t[2],pt=t[3],vt=t[4],mt=t[5],yt=t[6],Dt=t[7],Mt=t[8],St=t[9],qt=t[10],Bt=t[11];return a[0]=_*ft+T*vt+S*Mt,a[1]=_*dt+T*mt+S*St,a[2]=_*ht+T*yt+S*qt,a[3]=_*pt+T*Dt+S*Bt,a[4]=k*ft+O*vt+et*Mt,a[5]=k*dt+O*mt+et*St,a[6]=k*ht+O*yt+et*qt,a[7]=k*pt+O*Dt+et*Bt,a[8]=rt*ft+it*vt+ut*Mt,a[9]=rt*dt+it*mt+ut*St,a[10]=rt*ht+it*yt+ut*qt,a[11]=rt*pt+it*Dt+ut*Bt,t!==a&&(a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a}const e=d;function r(t,i){const n=i??new u(16);return n[0]=t[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=t[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=t[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function f(t,i,n){const s=n??new u(16),a=i[0],v=i[1],y=i[2];return s[0]=a*t[0*4+0],s[1]=a*t[0*4+1],s[2]=a*t[0*4+2],s[3]=a*t[0*4+3],s[4]=v*t[1*4+0],s[5]=v*t[1*4+1],s[6]=v*t[1*4+2],s[7]=v*t[1*4+3],s[8]=y*t[2*4+0],s[9]=y*t[2*4+1],s[10]=y*t[2*4+2],s[11]=y*t[2*4+3],t!==s&&(s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function h(t,i){const n=i??new u(16);return n[0]=t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=t,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=t,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function m(t,i,n){const s=n??new u(16);return s[0]=i*t[0*4+0],s[1]=i*t[0*4+1],s[2]=i*t[0*4+2],s[3]=i*t[0*4+3],s[4]=i*t[1*4+0],s[5]=i*t[1*4+1],s[6]=i*t[1*4+2],s[7]=i*t[1*4+3],s[8]=i*t[2*4+0],s[9]=i*t[2*4+1],s[10]=i*t[2*4+2],s[11]=i*t[2*4+3],t!==s&&(s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}return{create:z,set:P,fromMat3:b,fromQuat:q,negate:F,copy:E,clone:N,equalsApproximately:L,equals:R,identity:$,transpose:K,inverse:B,determinant:G,invert:X,multiply:Z,mul:j,setTranslation:W,getTranslation:I,getAxis:nt,setAxis:Q,getScaling:C,perspective:at,perspectiveReverseZ:Pt,ortho:Tt,frustum:lt,frustumReverseZ:Lt,aim:Gt,cameraAim:xt,lookAt:It,translation:gt,translate:Et,rotationX:tt,rotateX:Vt,rotationY:zt,rotateY:Xt,rotationZ:bt,rotateZ:Ft,axisRotation:At,rotation:o,axisRotate:d,rotate:e,scaling:r,scale:f,uniformScaling:h,uniformScale:m}}const An=new Map;function te(u){let x=An.get(u);return x||(x=Cn(u),An.set(u,x)),x}function ne(u){const x=ln(u);function z(o,d,e,r){const f=new u(4);return o!==void 0&&(f[0]=o,d!==void 0&&(f[1]=d,e!==void 0&&(f[2]=e,r!==void 0&&(f[3]=r)))),f}const P=z;function b(o,d,e,r,f){const h=f??new u(4);return h[0]=o,h[1]=d,h[2]=e,h[3]=r,h}function q(o,d,e){const r=e??new u(4),f=d*.5,h=Math.sin(f);return r[0]=h*o[0],r[1]=h*o[1],r[2]=h*o[2],r[3]=Math.cos(f),r}function F(o,d){const e=d??x.create(3),r=Math.acos(o[3])*2,f=Math.sin(r*.5);return f>V?(e[0]=o[0]/f,e[1]=o[1]/f,e[2]=o[2]/f):(e[0]=1,e[1]=0,e[2]=0),{angle:r,axis:e}}function E(o,d){const e=lt(o,d);return Math.acos(2*e*e-1)}function N(o,d,e){const r=e??new u(4),f=o[0],h=o[1],m=o[2],t=o[3],i=d[0],n=d[1],s=d[2],a=d[3];return r[0]=f*a+t*i+h*s-m*n,r[1]=h*a+t*n+m*i-f*s,r[2]=m*a+t*s+f*n-h*i,r[3]=t*a-f*i-h*n-m*s,r}const L=N;function R(o,d,e){const r=e??new u(4),f=d*.5,h=o[0],m=o[1],t=o[2],i=o[3],n=Math.sin(f),s=Math.cos(f);return r[0]=h*s+i*n,r[1]=m*s+t*n,r[2]=t*s-m*n,r[3]=i*s-h*n,r}function $(o,d,e){const r=e??new u(4),f=d*.5,h=o[0],m=o[1],t=o[2],i=o[3],n=Math.sin(f),s=Math.cos(f);return r[0]=h*s-t*n,r[1]=m*s+i*n,r[2]=t*s+h*n,r[3]=i*s-m*n,r}function K(o,d,e){const r=e??new u(4),f=d*.5,h=o[0],m=o[1],t=o[2],i=o[3],n=Math.sin(f),s=Math.cos(f);return r[0]=h*s+m*n,r[1]=m*s-h*n,r[2]=t*s+i*n,r[3]=i*s-t*n,r}function B(o,d,e,r){const f=r??new u(4),h=o[0],m=o[1],t=o[2],i=o[3];let n=d[0],s=d[1],a=d[2],v=d[3],y=h*n+m*s+t*a+i*v;y<0&&(y=-y,n=-n,s=-s,a=-a,v=-v);let c,l;if(1-y>V){const p=Math.acos(y),w=Math.sin(p);c=Math.sin((1-e)*p)/w,l=Math.sin(e*p)/w}else c=1-e,l=e;return f[0]=c*h+l*n,f[1]=c*m+l*s,f[2]=c*t+l*a,f[3]=c*i+l*v,f}function G(o,d){const e=d??new u(4),r=o[0],f=o[1],h=o[2],m=o[3],t=r*r+f*f+h*h+m*m,i=t?1/t:0;return e[0]=-r*i,e[1]=-f*i,e[2]=-h*i,e[3]=m*i,e}function X(o,d){const e=d??new u(4);return e[0]=-o[0],e[1]=-o[1],e[2]=-o[2],e[3]=o[3],e}function Z(o,d){const e=d??new u(4),r=o[0]+o[5]+o[10];if(r>0){const f=Math.sqrt(r+1);e[3]=.5*f;const h=.5/f;e[0]=(o[6]-o[9])*h,e[1]=(o[8]-o[2])*h,e[2]=(o[1]-o[4])*h}else{let f=0;o[5]>o[0]&&(f=1),o[10]>o[f*4+f]&&(f=2);const h=(f+1)%3,m=(f+2)%3,t=Math.sqrt(o[f*4+f]-o[h*4+h]-o[m*4+m]+1);e[f]=.5*t;const i=.5/t;e[3]=(o[h*4+m]-o[m*4+h])*i,e[h]=(o[h*4+f]+o[f*4+h])*i,e[m]=(o[m*4+f]+o[f*4+m])*i}return e}function j(o,d,e,r,f){const h=f??new u(4),m=o*.5,t=d*.5,i=e*.5,n=Math.sin(m),s=Math.cos(m),a=Math.sin(t),v=Math.cos(t),y=Math.sin(i),c=Math.cos(i);switch(r){case"xyz":h[0]=n*v*c+s*a*y,h[1]=s*a*c-n*v*y,h[2]=s*v*y+n*a*c,h[3]=s*v*c-n*a*y;break;case"xzy":h[0]=n*v*c-s*a*y,h[1]=s*a*c-n*v*y,h[2]=s*v*y+n*a*c,h[3]=s*v*c+n*a*y;break;case"yxz":h[0]=n*v*c+s*a*y,h[1]=s*a*c-n*v*y,h[2]=s*v*y-n*a*c,h[3]=s*v*c+n*a*y;break;case"yzx":h[0]=n*v*c+s*a*y,h[1]=s*a*c+n*v*y,h[2]=s*v*y-n*a*c,h[3]=s*v*c-n*a*y;break;case"zxy":h[0]=n*v*c-s*a*y,h[1]=s*a*c+n*v*y,h[2]=s*v*y+n*a*c,h[3]=s*v*c-n*a*y;break;case"zyx":h[0]=n*v*c-s*a*y,h[1]=s*a*c+n*v*y,h[2]=s*v*y-n*a*c,h[3]=s*v*c+n*a*y;break;default:throw new Error(`Unknown rotation order: ${r}`)}return h}function W(o,d){const e=d??new u(4);return e[0]=o[0],e[1]=o[1],e[2]=o[2],e[3]=o[3],e}const I=W;function nt(o,d,e){const r=e??new u(4);return r[0]=o[0]+d[0],r[1]=o[1]+d[1],r[2]=o[2]+d[2],r[3]=o[3]+d[3],r}function Q(o,d,e){const r=e??new u(4);return r[0]=o[0]-d[0],r[1]=o[1]-d[1],r[2]=o[2]-d[2],r[3]=o[3]-d[3],r}const C=Q;function at(o,d,e){const r=e??new u(4);return r[0]=o[0]*d,r[1]=o[1]*d,r[2]=o[2]*d,r[3]=o[3]*d,r}const Pt=at;function Tt(o,d,e){const r=e??new u(4);return r[0]=o[0]/d,r[1]=o[1]/d,r[2]=o[2]/d,r[3]=o[3]/d,r}function lt(o,d){return o[0]*d[0]+o[1]*d[1]+o[2]*d[2]+o[3]*d[3]}function Lt(o,d,e,r){const f=r??new u(4);return f[0]=o[0]+e*(d[0]-o[0]),f[1]=o[1]+e*(d[1]-o[1]),f[2]=o[2]+e*(d[2]-o[2]),f[3]=o[3]+e*(d[3]-o[3]),f}function Y(o){const d=o[0],e=o[1],r=o[2],f=o[3];return Math.sqrt(d*d+e*e+r*r+f*f)}const J=Y;function H(o){const d=o[0],e=o[1],r=o[2],f=o[3];return d*d+e*e+r*r+f*f}const Gt=H;function xt(o,d){const e=d??new u(4),r=o[0],f=o[1],h=o[2],m=o[3],t=Math.sqrt(r*r+f*f+h*h+m*m);return t>1e-5?(e[0]=r/t,e[1]=f/t,e[2]=h/t,e[3]=m/t):(e[0]=0,e[1]=0,e[2]=0,e[3]=1),e}function It(o,d){return Math.abs(o[0]-d[0])<V&&Math.abs(o[1]-d[1])<V&&Math.abs(o[2]-d[2])<V&&Math.abs(o[3]-d[3])<V}function gt(o,d){return o[0]===d[0]&&o[1]===d[1]&&o[2]===d[2]&&o[3]===d[3]}function Et(o){const d=o??new u(4);return d[0]=0,d[1]=0,d[2]=0,d[3]=1,d}const tt=x.create(),Vt=x.create(),zt=x.create();function Xt(o,d,e){const r=e??new u(4),f=x.dot(o,d);return f<-.999999?(x.cross(Vt,o,tt),x.len(tt)<1e-6&&x.cross(zt,o,tt),x.normalize(tt,tt),q(tt,Math.PI,r),r):f>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(x.cross(o,d,tt),r[0]=tt[0],r[1]=tt[1],r[2]=tt[2],r[3]=1+f,xt(r,r))}const bt=new u(4),Ft=new u(4);function At(o,d,e,r,f,h){const m=h??new u(4);return B(o,r,f,bt),B(d,e,f,Ft),B(bt,Ft,2*f*(1-f),m),m}return{create:z,fromValues:P,set:b,fromAxisAngle:q,toAxisAngle:F,angle:E,multiply:N,mul:L,rotateX:R,rotateY:$,rotateZ:K,slerp:B,inverse:G,conjugate:X,fromMat:Z,fromEuler:j,copy:W,clone:I,add:nt,subtract:Q,sub:C,mulScalar:at,scale:Pt,divScalar:Tt,dot:lt,lerp:Lt,length:Y,len:J,lengthSq:H,lenSq:Gt,normalize:xt,equalsApproximately:It,equals:gt,identity:Et,rotationTo:Xt,sqlerp:At}}const Sn=new Map;function ee(u){let x=Sn.get(u);return x||(x=ne(u),Sn.set(u,x)),x}function se(u){function x(e,r,f,h){const m=new u(4);return e!==void 0&&(m[0]=e,r!==void 0&&(m[1]=r,f!==void 0&&(m[2]=f,h!==void 0&&(m[3]=h)))),m}const z=x;function P(e,r,f,h,m){const t=m??new u(4);return t[0]=e,t[1]=r,t[2]=f,t[3]=h,t}function b(e,r){const f=r??new u(4);return f[0]=Math.ceil(e[0]),f[1]=Math.ceil(e[1]),f[2]=Math.ceil(e[2]),f[3]=Math.ceil(e[3]),f}function q(e,r){const f=r??new u(4);return f[0]=Math.floor(e[0]),f[1]=Math.floor(e[1]),f[2]=Math.floor(e[2]),f[3]=Math.floor(e[3]),f}function F(e,r){const f=r??new u(4);return f[0]=Math.round(e[0]),f[1]=Math.round(e[1]),f[2]=Math.round(e[2]),f[3]=Math.round(e[3]),f}function E(e,r=0,f=1,h){const m=h??new u(4);return m[0]=Math.min(f,Math.max(r,e[0])),m[1]=Math.min(f,Math.max(r,e[1])),m[2]=Math.min(f,Math.max(r,e[2])),m[3]=Math.min(f,Math.max(r,e[3])),m}function N(e,r,f){const h=f??new u(4);return h[0]=e[0]+r[0],h[1]=e[1]+r[1],h[2]=e[2]+r[2],h[3]=e[3]+r[3],h}function L(e,r,f,h){const m=h??new u(4);return m[0]=e[0]+r[0]*f,m[1]=e[1]+r[1]*f,m[2]=e[2]+r[2]*f,m[3]=e[3]+r[3]*f,m}function R(e,r,f){const h=f??new u(4);return h[0]=e[0]-r[0],h[1]=e[1]-r[1],h[2]=e[2]-r[2],h[3]=e[3]-r[3],h}const $=R;function K(e,r){return Math.abs(e[0]-r[0])<V&&Math.abs(e[1]-r[1])<V&&Math.abs(e[2]-r[2])<V&&Math.abs(e[3]-r[3])<V}function B(e,r){return e[0]===r[0]&&e[1]===r[1]&&e[2]===r[2]&&e[3]===r[3]}function G(e,r,f,h){const m=h??new u(4);return m[0]=e[0]+f*(r[0]-e[0]),m[1]=e[1]+f*(r[1]-e[1]),m[2]=e[2]+f*(r[2]-e[2]),m[3]=e[3]+f*(r[3]-e[3]),m}function X(e,r,f,h){const m=h??new u(4);return m[0]=e[0]+f[0]*(r[0]-e[0]),m[1]=e[1]+f[1]*(r[1]-e[1]),m[2]=e[2]+f[2]*(r[2]-e[2]),m[3]=e[3]+f[3]*(r[3]-e[3]),m}function Z(e,r,f){const h=f??new u(4);return h[0]=Math.max(e[0],r[0]),h[1]=Math.max(e[1],r[1]),h[2]=Math.max(e[2],r[2]),h[3]=Math.max(e[3],r[3]),h}function j(e,r,f){const h=f??new u(4);return h[0]=Math.min(e[0],r[0]),h[1]=Math.min(e[1],r[1]),h[2]=Math.min(e[2],r[2]),h[3]=Math.min(e[3],r[3]),h}function W(e,r,f){const h=f??new u(4);return h[0]=e[0]*r,h[1]=e[1]*r,h[2]=e[2]*r,h[3]=e[3]*r,h}const I=W;function nt(e,r,f){const h=f??new u(4);return h[0]=e[0]/r,h[1]=e[1]/r,h[2]=e[2]/r,h[3]=e[3]/r,h}function Q(e,r){const f=r??new u(4);return f[0]=1/e[0],f[1]=1/e[1],f[2]=1/e[2],f[3]=1/e[3],f}const C=Q;function at(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]}function Pt(e){const r=e[0],f=e[1],h=e[2],m=e[3];return Math.sqrt(r*r+f*f+h*h+m*m)}const Tt=Pt;function lt(e){const r=e[0],f=e[1],h=e[2],m=e[3];return r*r+f*f+h*h+m*m}const Lt=lt;function Y(e,r){const f=e[0]-r[0],h=e[1]-r[1],m=e[2]-r[2],t=e[3]-r[3];return Math.sqrt(f*f+h*h+m*m+t*t)}const J=Y;function H(e,r){const f=e[0]-r[0],h=e[1]-r[1],m=e[2]-r[2],t=e[3]-r[3];return f*f+h*h+m*m+t*t}const Gt=H;function xt(e,r){const f=r??new u(4),h=e[0],m=e[1],t=e[2],i=e[3],n=Math.sqrt(h*h+m*m+t*t+i*i);return n>1e-5?(f[0]=h/n,f[1]=m/n,f[2]=t/n,f[3]=i/n):(f[0]=0,f[1]=0,f[2]=0,f[3]=0),f}function It(e,r){const f=r??new u(4);return f[0]=-e[0],f[1]=-e[1],f[2]=-e[2],f[3]=-e[3],f}function gt(e,r){const f=r??new u(4);return f[0]=e[0],f[1]=e[1],f[2]=e[2],f[3]=e[3],f}const Et=gt;function tt(e,r,f){const h=f??new u(4);return h[0]=e[0]*r[0],h[1]=e[1]*r[1],h[2]=e[2]*r[2],h[3]=e[3]*r[3],h}const Vt=tt;function zt(e,r,f){const h=f??new u(4);return h[0]=e[0]/r[0],h[1]=e[1]/r[1],h[2]=e[2]/r[2],h[3]=e[3]/r[3],h}const Xt=zt;function bt(e){const r=e??new u(4);return r[0]=0,r[1]=0,r[2]=0,r[3]=0,r}function Ft(e,r,f){const h=f??new u(4),m=e[0],t=e[1],i=e[2],n=e[3];return h[0]=r[0]*m+r[4]*t+r[8]*i+r[12]*n,h[1]=r[1]*m+r[5]*t+r[9]*i+r[13]*n,h[2]=r[2]*m+r[6]*t+r[10]*i+r[14]*n,h[3]=r[3]*m+r[7]*t+r[11]*i+r[15]*n,h}function At(e,r,f){const h=f??new u(4);return xt(e,h),W(h,r,h)}function o(e,r,f){const h=f??new u(4);return Pt(e)>r?At(e,r,h):gt(e,h)}function d(e,r,f){const h=f??new u(4);return G(e,r,.5,h)}return{create:x,fromValues:z,set:P,ceil:b,floor:q,round:F,clamp:E,add:N,addScaled:L,subtract:R,sub:$,equalsApproximately:K,equals:B,lerp:G,lerpV:X,max:Z,min:j,mulScalar:W,scale:I,divScalar:nt,inverse:Q,invert:C,dot:at,length:Pt,len:Tt,lengthSq:lt,lenSq:Lt,distance:Y,dist:J,distanceSq:H,distSq:Gt,normalize:xt,negate:It,copy:gt,clone:Et,multiply:tt,mul:Vt,divide:zt,div:Xt,zero:bt,transformMat4:Ft,setLength:At,truncate:o,midpoint:d}}const qn=new Map;function oe(u){let x=qn.get(u);return x||(x=se(u),qn.set(u,x)),x}function xn(u,x,z,P,b,q){return{mat3:Kn(u),mat4:te(x),quat:ee(z),vec2:_n(P),vec3:ln(b),vec4:oe(q)}}const{mat3:we,mat4:en,quat:xe,vec2:ge,vec3:me,vec4:ye}=xn(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);xn(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);xn(Zn,Array,Array,Array,Array,Array);var re=`struct Camera { texel:vec2f, diameter:f32, pad:f32, invProjection:mat4x4f, projection:mat4x4f, view:mat4x4f, invView:mat4x4f }
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
}`,ie=`struct Camera { texel:vec2f, diameter:f32, pad:f32, invProjection:mat4x4f, projection:mat4x4f, view:mat4x4f, invView:mat4x4f }
@group(0) @binding(0) var<uniform> camera:Camera;
@group(0) @binding(1) var<uniform> b:Bamboo;
@group(0) @binding(2) var garden:texture_2d<f32>;
@group(0) @binding(3) var textureSampler:sampler;
struct Input { @location(0) p:vec3f, @location(1) n:vec3f, @location(2) material:f32 }
struct Vertex { @builtin(position) clip:vec4f, @location(0) local:vec3f, @location(1) normal:vec3f, @location(2) world:vec3f, @location(3) @interpolate(flat) material:f32, @location(4) depth:f32 }
struct Output { @location(0) color:vec4f, @location(1) depth:f32 }
@vertex fn vs(input:Input)->Vertex {
  let p=worldPoint(input.p,b);let v=camera.view*vec4f(p,1);
  return Vertex(camera.projection*v,input.p,worldVector(input.n,b),p,input.material,-v.z);
}
fn hash(p:vec2f)->f32{return fract(sin(dot(p,vec2f(127.1,311.7)))*43758.5453);}
fn grain(p:vec2f)->f32{
  let i=floor(p);let f=fract(p);let u=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2f(1,0)),u.x),mix(hash(i+vec2f(0,1)),hash(i+vec2f(1,1)),u.x),u.y);
}
@fragment fn fs(v:Vertex)->Output {
  let theta=atan2(v.local.z,v.local.y);let uv=vec2f(v.local.x,theta);
  let fibers=grain(uv*vec2f(.24,120));let mottled=grain(uv*vec2f(1.5,12));let fine=grain(uv*vec2f(22,310));
  var base=mix(vec3f(.065,.12,.022),vec3f(.28,.36,.075),fibers*.55+mottled*.45);
  let node=exp(-pow((v.local.x-19.)/.20,2.));
  base=mix(base,vec3f(.33,.38,.17),node*.7);
  var rough=.32;
  if(v.material>.5){base=mix(vec3f(.25,.15,.055),vec3f(.56,.42,.22),fibers*.6+fine*.4);rough=.46;}
  if(v.material>1.5){base=mix(vec3f(.50,.33,.14),vec3f(.82,.69,.44),fine);rough=.68;}
  let eye=camera.invView[3].xyz;let view=normalize(eye-v.world);
  let light=normalize(vec3f(-.4,.85,.45));
  var n=normalize(v.normal);if(dot(n,view)<0.){n=-n;}
  let tangent=normalize(cross(n,worldVector(vec3f(1,0,0),b))+vec3f(.00001));
  n=normalize(n+tangent*(fibers-.5)*.13);
  let diffuse=max(0.,dot(n,light));let h=normalize(light+view);
  let spec=pow(max(0.,dot(n,h)),mix(160.,28.,rough));
  let interior=select(1.,.56+.28*clamp((4.-v.local.x)/8.,0.,1.),v.material>.5 && v.material<1.5);
  let rimLight=.12*pow(1.-max(0.,dot(n,view)),3.);
  let reflection=reflect(-view,n);let env=textureSampleLevel(garden,textureSampler,vec2f(atan2(reflection.z,reflection.x)/6.283+.5,.5-reflection.y*.45),0).rgb;
  let color=base*(.48+.85*diffuse)*interior+spec*vec3f(.65,.72,.49)+env*rimLight;
  return Output(vec4f(color,1),v.depth);
}`,ce=`struct Camera { texel:vec2f, diameter:f32, pad:f32, invProjection:mat4x4f, projection:mat4x4f, view:mat4x4f, invView:mat4x4f }
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
  let highlight=pow(max(0.,dot(n,normalize(light-ray))),220.);
  var color=mix(transmission,env(reflection),clamp(fresnel,.07,.95))+highlight*vec3f(1,.98,.87)*.85;
  
  color=mix(color,vec3f(.16,.29,.23),min(.10,thickness*.025));
  return vec4f(color,1);
}`,ae=`struct Camera { texel:vec2f, diameter:f32, pad:f32, invProjection:mat4x4f, projection:mat4x4f, view:mat4x4f, invView:mat4x4f }
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
}`,le=`@group(0) @binding(1) var depthTexture: texture_2d<f32>;\r
@group(0) @binding(2) var<uniform> uniforms: FilterUniforms;

struct FragmentInput {\r
    @location(0) uv: vec2f,  \r
    @location(1) iuv: vec2f\r
}

override projectedParticleConstant: f32; \r
override maxFilterSize: f32;\r
override blur2D: u32;

struct FilterUniforms {\r
    blurDir: vec2f,\r
}

@fragment\r
fn fs(input: FragmentInput) -> @location(0) vec4f {\r
    let depth: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv), 0).r);

    if (depth >= 1e4) {\r
        return vec4f(vec3f(depth), 1.);\r
    }

    let filterSize: i32 = min(i32(maxFilterSize), i32(ceil(projectedParticleConstant / depth)));

    let sigma: f32 = f32(filterSize) / 2.0; \r
    let sigmaSquareInv: f32 = 1.0 / (2.0 * sigma * sigma);

    let mu = 3. * 0.6; 
    let depthThreshold = 10.0 * 0.6;

    let higherDepthBound = depth + mu;

    var sum: f32 = depth;\r
    var wsum: f32 = 1.0;\r
    
    if (blur2D == 0) {\r
        var sum2 = vec2f(0, 0);\r
        var wsum2 = vec2f(0, 0);\r
        var depthThresholdLowX = depth - depthThreshold;\r
        var depthThresholdHighX = depth + depthThreshold;\r
        var depthThresholdLowY = depth - depthThreshold;\r
        var depthThresholdHighY = depth + depthThreshold;\r
        for (var r: i32 = 1; r <= filterSize; r++) {\r
            var gaussianWeight: f32 = exp(-f32(r * r) * sigmaSquareInv);\r
            var sampledDepthX: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv - vec2f(f32(r)) * uniforms.blurDir), 0).r);\r
            var sampledDepthY: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv + vec2f(f32(r)) * uniforms.blurDir), 0).r);

            var w = vec2f(gaussianWeight);

            if (sampledDepthX < depthThresholdLowX) {\r
                w.x = 0.;\r
                w.y = 0.; \r
            } else {\r
                if (sampledDepthX > depthThresholdHighX) {\r
                    sampledDepthX = higherDepthBound;\r
                } else {\r
                    depthThresholdLowX = min(depthThresholdLowX, sampledDepthX - depthThreshold);\r
                    depthThresholdHighX = max(depthThresholdHighX, sampledDepthX + depthThreshold);\r
                }\r
            }

            if (sampledDepthY < depthThresholdLowY) {\r
                w.x = 0.;\r
                w.y = 0.; \r
            } else {\r
                if (sampledDepthY > depthThresholdHighY) {\r
                    sampledDepthY = higherDepthBound;\r
                } else {\r
                    depthThresholdLowY = min(depthThresholdLowY, sampledDepthY - depthThreshold);\r
                    depthThresholdHighY = max(depthThresholdHighY, sampledDepthY + depthThreshold);\r
                }\r
            }

            sum2 += vec2f(sampledDepthX, sampledDepthY) * w;\r
            wsum2 += w;\r
        }\r
        sum += sum2.x + sum2.y;\r
        wsum += wsum2.x + wsum2.y;\r
    } else {\r
        let filterSize2D = 2;\r
        var depthThresholdLow = depth - depthThreshold;\r
        var depthThresholdHigh = depth + depthThreshold;\r
        var sum4 = vec4f(0.);\r
        var wsum4 = vec4f(0.);\r
        for (var r: i32 = 1; r <= filterSize2D; r++) {\r
            for (var i: i32 = 0; i < 2 * r; i++) {\r
                let gaussianWeight = exp((-f32(r*r) + f32((r-i) * (r-i))) * sigmaSquareInv);

                var sampledDepthX: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv - vec2f(f32(r), f32(r-i))), 0).r);\r
                var sampledDepthY: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv + vec2f(f32(r), f32(r-i))), 0).r);\r
                var sampledDepthZ: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv - vec2f(f32(r-i), f32(r))), 0).r);\r
                var sampledDepthW: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv + vec2f(f32(r-i), f32(r))), 0).r);

                var w = vec4f(gaussianWeight);

                if (sampledDepthX < depthThresholdLow) {\r
                    w.x = 0.;\r
                    w.y = 0.; 
                } else {\r
                    if (sampledDepthX > depthThresholdHigh) {\r
                        sampledDepthX = higherDepthBound;\r
                    } else {\r
                        depthThresholdLow = min(depthThresholdLow, sampledDepthX - depthThreshold);\r
                        depthThresholdHigh = max(depthThresholdHigh, sampledDepthX + depthThreshold);\r
                    }\r
                }

                if (sampledDepthY < depthThresholdLow) {\r
                    w.x = 0.;\r
                    w.y = 0.; \r
                } else {\r
                    if (sampledDepthY > depthThresholdHigh) {\r
                        sampledDepthY = higherDepthBound;\r
                    } else {\r
                        depthThresholdLow = min(depthThresholdLow, sampledDepthY - depthThreshold);\r
                        depthThresholdHigh = max(depthThresholdHigh, sampledDepthY + depthThreshold);\r
                    }\r
                }

                if (sampledDepthZ < depthThresholdLow) {\r
                    w.z = 0.;\r
                    w.w = 0.; \r
                } else {\r
                    if (sampledDepthZ > depthThresholdHigh) {\r
                        sampledDepthZ = higherDepthBound;\r
                    } else {\r
                        depthThresholdLow = min(depthThresholdLow, sampledDepthZ - depthThreshold);\r
                        depthThresholdHigh = max(depthThresholdHigh, sampledDepthZ + depthThreshold);\r
                    }\r
                }

                if (sampledDepthW < depthThresholdLow) {\r
                    w.z = 0.;\r
                    w.w = 0.; \r
                } else {\r
                    if (sampledDepthW > depthThresholdHigh) {\r
                        sampledDepthW = higherDepthBound;\r
                    } else {\r
                        depthThresholdLow = min(depthThresholdLow, sampledDepthW - depthThreshold);\r
                        depthThresholdHigh = max(depthThresholdHigh, sampledDepthW + depthThreshold);\r
                    }\r
                }

                sum4 += vec4f(sampledDepthX, sampledDepthY, sampledDepthZ, sampledDepthW) * w;\r
                wsum4 += w;\r
            }\r
        }\r
        sum += sum4.x + sum4.y + sum4.z + sum4.w;\r
        wsum += wsum4.x + wsum4.y + wsum4.z + wsum4.w;\r
    }

    return vec4f(sum / wsum, 0., 0., 1.);\r
}`,ue=`struct VertexOutput {\r
  @builtin(position) position : vec4f,\r
  @location(0) uv : vec2f,\r
  @location(1) iuv : vec2f,\r
}

override screenWidth: f32;\r
override screenHeight: f32;

@vertex\r
fn vs(@builtin(vertex_index) vertex_index : u32) -> VertexOutput {\r
    var out: VertexOutput;

    var pos = array(\r
        vec2( 1.0,  1.0),\r
        vec2( 1.0, -1.0),\r
        vec2(-1.0, -1.0),\r
        vec2( 1.0,  1.0),\r
        vec2(-1.0, -1.0),\r
        vec2(-1.0,  1.0),\r
    );

    var uv = array(\r
        vec2(1.0, 0.0),\r
        vec2(1.0, 1.0),\r
        vec2(0.0, 1.0),\r
        vec2(1.0, 0.0),\r
        vec2(0.0, 1.0),\r
        vec2(0.0, 0.0),\r
    );

    out.position = vec4(pos[vertex_index], 0.0, 1.0);\r
    out.uv = uv[vertex_index];\r
    out.iuv = out.uv * vec2f(screenWidth, screenHeight);

    return out;\r
}`;class fe{constructor(x,z,P,b,q,F,E){U(this,"uniform");U(this,"data",new Float32Array(68));U(this,"textures",[]);U(this,"buffers",[]);U(this,"background");U(this,"mesh");U(this,"water");U(this,"particles");U(this,"thickness");U(this,"filter");U(this,"bgGroup");U(this,"meshGroup");U(this,"waterGroup");U(this,"particleGroup");U(this,"thicknessGroup");U(this,"filterGroups");U(this,"color");U(this,"worldDepth");U(this,"depthTest");U(this,"fluidDepth");U(this,"tempDepth");U(this,"fluidTest");U(this,"thicknessView");U(this,"vertex");U(this,"vertexCount");this.device=x,this.canvas=z;const N=(Q,C)=>{const at=x.createBuffer({size:Q,usage:C|GPUBufferUsage.COPY_DST});return this.buffers.push(at),at};this.uniform=N(272,GPUBufferUsage.UNIFORM),this.vertex=N(E.byteLength,GPUBufferUsage.VERTEX),x.queue.writeBuffer(this.vertex,0,E),this.vertexCount=E.length/8;const L=Q=>{const C=x.createTexture({size:[z.width,z.height],format:Q,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING});return this.textures.push(C),C.createView()};this.color=L(P),this.worldDepth=L("r32float"),this.depthTest=L("depth32float"),this.fluidDepth=L("r32float"),this.tempDepth=L("r32float"),this.fluidTest=L("depth32float"),this.thicknessView=L("r16float");const R=(Q,C)=>x.createShaderModule({label:Q,code:C}),$=R("3D stone basin and garden",re),K=R("Blender bamboo material",sn+ie),B=R("Water refraction and scene-depth occlusion",ce),G=R("Splash ellipsoid surface",ae),X=[{format:P},{format:"r32float"}],Z={format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"};this.background=x.createRenderPipeline({layout:"auto",vertex:{module:$},fragment:{module:$,targets:X},depthStencil:Z}),this.mesh=x.createRenderPipeline({layout:"auto",vertex:{module:K,buffers:[{arrayStride:32,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"},{shaderLocation:2,offset:24,format:"float32"}]}]},fragment:{module:K,targets:X},depthStencil:Z}),this.water=x.createRenderPipeline({layout:"auto",vertex:{module:B},fragment:{module:B,targets:[{format:P}]}}),this.particles=x.createRenderPipeline({layout:"auto",vertex:{module:G,entryPoint:"vs"},fragment:{module:G,entryPoint:"depth",targets:[{format:"r32float"}]},depthStencil:Z}),this.thickness=x.createRenderPipeline({layout:"auto",vertex:{module:G,entryPoint:"vs"},fragment:{module:G,entryPoint:"thickness",targets:[{format:"r16float",blend:{color:{srcFactor:"one",dstFactor:"one",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one",operation:"add"}}}]}}),this.filter=x.createRenderPipeline({layout:"auto",vertex:{module:R("Full screen",ue),constants:{screenWidth:z.width,screenHeight:z.height}},fragment:{module:R("Splash narrow-range surface filter",le),constants:{maxFilterSize:8,projectedParticleConstant:z.height*.36,blur2D:0},targets:[{format:"r32float"}]}});const j=x.createSampler({magFilter:"linear",minFilter:"linear"}),W=F.createView(),I=Q=>({buffer:Q}),nt=(Q,C)=>x.createBindGroup({layout:Q.getBindGroupLayout(0),entries:C});this.bgGroup=nt(this.background,[{binding:0,resource:I(this.uniform)},{binding:1,resource:W},{binding:2,resource:j}]),this.meshGroup=nt(this.mesh,[{binding:0,resource:I(this.uniform)},{binding:1,resource:I(q)},{binding:2,resource:W},{binding:3,resource:j}]),this.waterGroup=nt(this.water,[{binding:0,resource:I(this.uniform)},{binding:1,resource:this.fluidDepth},{binding:2,resource:this.thicknessView},{binding:3,resource:this.color},{binding:4,resource:this.worldDepth},{binding:5,resource:W},{binding:6,resource:j}]),this.particleGroup=nt(this.particles,[{binding:0,resource:I(b)},{binding:1,resource:I(this.uniform)}]),this.thicknessGroup=nt(this.thickness,[{binding:0,resource:I(b)},{binding:1,resource:I(this.uniform)}]),this.filterGroups=[[1,0],[0,1]].map((Q,C)=>{const at=N(8,GPUBufferUsage.UNIFORM);return x.queue.writeBuffer(at,0,new Float32Array(Q)),nt(this.filter,[{binding:1,resource:C?this.tempDepth:this.fluidDepth},{binding:2,resource:I(at)}])})}camera(x,z){const P=this.canvas.clientWidth/this.canvas.clientHeight,b=[30,24,18],q=P<.85?82:66,F=[b[0]+Math.sin(x)*Math.cos(z)*q,b[1]+Math.sin(z)*q,b[2]+Math.cos(x)*Math.cos(z)*q],E=en.perspective(.7,P,.3,220),N=en.lookAt(F,b,[0,1,0]);this.data.set([1/this.canvas.width,1/this.canvas.height,1.05,0],0),this.data.set(en.inverse(E),4),this.data.set(E,20),this.data.set(N,36),this.data.set(en.inverse(N),52),this.device.queue.writeBuffer(this.uniform,0,this.data)}draw(x,z,P){const b=(R,$=0)=>({view:R,clearValue:{r:$,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}),q=R=>({view:R,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}),F=x.beginRenderPass({colorAttachments:[b(this.color),b(this.worldDepth,1e6)],depthStencilAttachment:q(this.depthTest)});F.setPipeline(this.background),F.setBindGroup(0,this.bgGroup),F.draw(3),F.setPipeline(this.mesh),F.setBindGroup(0,this.meshGroup),F.setVertexBuffer(0,this.vertex),F.draw(this.vertexCount),F.end();const E=x.beginRenderPass({colorAttachments:[b(this.fluidDepth,1e6)],depthStencilAttachment:q(this.fluidTest)});E.setPipeline(this.particles),E.setBindGroup(0,this.particleGroup),E.draw(6,P),E.end();for(let R=0;R<4;R++)for(let $=0;$<2;$++){const K=x.beginRenderPass({colorAttachments:[b($?this.fluidDepth:this.tempDepth,1e6)]});K.setPipeline(this.filter),K.setBindGroup(0,this.filterGroups[$]),K.draw(6),K.end()}const N=x.beginRenderPass({colorAttachments:[b(this.thicknessView)]});N.setPipeline(this.thickness),N.setBindGroup(0,this.thicknessGroup),N.draw(6,P),N.end();const L=x.beginRenderPass({colorAttachments:[b(z)]});L.setPipeline(this.water),L.setBindGroup(0,this.waterGroup),L.draw(3),L.end()}destroy(){this.textures.forEach(x=>x.destroy()),this.buffers.forEach(x=>x.destroy())}}const ct=document.querySelector("#scene"),Ut=document.querySelector("#height"),rn=document.querySelector("#interaction"),cn=document.querySelector("#pause"),Ln=document.querySelector("#reset"),gn=document.querySelector("#status"),dn=document.querySelector("#message"),mn=[Ut,rn,cn,Ln];mn.forEach(u=>u.disabled=!0);let Rt=!1,st,ot,_t,Yt,jt=0,hn=!1,pn=!1,Ht=matchMedia("(prefers-reduced-motion: reduce)").matches,Fn=-.86,vn=.43,Wt=BambooGeometry.angleForHeight(30),Nt=0,Zt=0,un=0,fn=performance.now(),Bn=0,kt=null;const Gn=()=>{cn.textContent=Ht?"Play":"Pause",cn.setAttribute("aria-pressed",String(Ht))};Gn();function an(u){Rt||(Rt=!0,cancelAnimationFrame(jt),jt=0,dn.hidden=!1,dn.textContent="The 3D scene could not start. "+(u instanceof Error?u.message:String(u)),gn.textContent="Unavailable",ct.dataset.state="error",mn.forEach(x=>x.disabled=!0),console.error(u),_t==null||_t.destroy(),ot==null||ot.destroy(),Yt==null||Yt.destroy(),st==null||st.destroy())}function Ot(){pn=!0,!jt&&!hn&&!Rt&&!document.hidden&&(jt=requestAnimationFrame(he))}Ut.addEventListener("input",Ot);rn.addEventListener("change",()=>{ct.classList.toggle("orbit",rn.value==="orbit"),kt=null});cn.addEventListener("click",()=>{Ht=!Ht,Zt=0,Nt=0,Gn(),gn.textContent=Ht?"Paused":"Resuming…",Ot()});Ln.addEventListener("click",()=>{ot==null||ot.reset(Number(Ut.value)),Wt=BambooGeometry.angleForHeight(Number(Ut.value)),Zt=0,Ot()});ct.addEventListener("pointerdown",u=>{kt={id:u.pointerId,x:u.clientX,y:u.clientY,start:Number(Ut.value)},ct.setPointerCapture(u.pointerId)});ct.addEventListener("pointermove",u=>{!kt||u.pointerId!==kt.id||(rn.value==="tilt"?Ut.value=String(Math.max(0,Math.min(100,kt.start-(u.clientY-kt.y)*.35))):(Fn-=(u.clientX-kt.x)*.006,vn=Math.max(.1,Math.min(1.15,vn+(u.clientY-kt.y)*.005)),kt.x=u.clientX,kt.y=u.clientY),Ot())});for(const u of["pointerup","pointercancel","lostpointercapture"])ct.addEventListener(u,()=>{kt=null});ct.addEventListener("keydown",u=>{["ArrowUp","ArrowDown","Home","End"].includes(u.key)&&(u.preventDefault(),Ut.value=String(u.key==="Home"?0:u.key==="End"?100:Number(Ut.value)+(u.key==="ArrowUp"?3:-3)),Ot())});document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(jt),jt=0,Nt=0,Zt=0):Ot()});window.addEventListener("resize",()=>{Nt=0,Ot()});window.addEventListener("pagehide",()=>{Rt=!0,cancelAnimationFrame(jt),_t==null||_t.destroy(),ot==null||ot.destroy(),Yt==null||Yt.destroy(),st==null||st.destroy()},{once:!0});let on,wn,In;function En(){const u=Math.min(devicePixelRatio||1,1.25,1e3/Math.max(ct.clientWidth,ct.clientHeight)),x=Math.max(2,Math.floor(ct.clientWidth*u/2)*2),z=Math.max(2,Math.floor(ct.clientHeight*u/2)*2);ct.width===x&&ct.height===z&&_t||(_t==null||_t.destroy(),ct.width=x,ct.height=z,_t=new fe(st,ct,wn,ot.positions,ot.bamboo,Yt,In))}async function de(){if(Rt||!st||!ot)return;const u=st.createBuffer({size:ot.count*80,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{const x=st.createCommandEncoder();x.copyBufferToBuffer(ot.particles,0,u,0,u.size),st.queue.submit([x.finish()]),await u.mapAsync(GPUMapMode.READ);const z=new Float32Array(u.getMappedRange());let P=0,b=0,q=0,F=0;for(let E=0;E<ot.count;E++){const N=[z[E*20],z[E*20+1],z[E*20+2]];if(!N.every(Number.isFinite)){F++;continue}const L=BambooGeometry.toLocal(N,Wt);L[0]>.85*L[1]&&L[0]<26&&Math.hypot(L[1],L[2])<4.1?P++:N[1]>14?b++:q++}if(ct.dataset.liquid=JSON.stringify({inside:P,falling:b,pool:q,invalid:F,total:ot.count}),F)throw new Error("The water simulation became unstable. Reload to reset it.")}finally{u.destroy()}}async function he(u){if(jt=0,!(Rt||document.hidden||!st||!ot)){hn=!0,pn=!1;try{En();const x=Nt?Math.min((u-Nt)/1e3,1/20):1/60;Nt=u;const z=BambooGeometry.angleForHeight(Number(Ut.value));Wt+=Math.max(-.012,Math.min(.012,z-Wt)),Ht&&(Wt=z),Zt+=Ht?0:x*120;const P=Math.min(6,Math.floor(Zt));Zt-=P,ot.update(Wt,P),_t.camera(Fn,vn);const b=st.createCommandEncoder();if(ot.execute(b,P),_t.draw(b,on.getCurrentTexture().createView(),ot.count),st.queue.submit([b.finish()]),await st.queue.onSubmittedWorkDone(),Rt)return;dn.hidden=!0,ct.dataset.state="ready",mn.forEach(q=>q.disabled=!1),un++,u-fn>1e3&&(gn.textContent=Ht?"Paused":`${Math.round(un*1e3/(u-fn))} FPS · 8k particles`,un=0,fn=u),u-Bn>2500&&(Bn=u,await de())}catch(x){an(x)}finally{hn=!1}(pn||!Ht||Math.abs(Wt-BambooGeometry.angleForHeight(Number(Ut.value)))>.001)&&Ot()}}async function pe(){if(!navigator.gpu)throw new Error("WebGPU is required. Please use a compatible Chrome or Edge browser.");const u=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!u)throw new Error("No compatible graphics adapter is available.");if(st=await u.requestDevice(),st.addEventListener("uncapturederror",b=>an(new Error(b.error.message))),st.lost.then(b=>{Rt||an(new Error("Graphics device disconnected: "+b.message))}),on=ct.getContext("webgpu"),!on)throw new Error("Cannot create a WebGPU canvas.");wn=navigator.gpu.getPreferredCanvasFormat(),on.configure({device:st,format:wn,alphaMode:"opaque"});const[x,z]=await Promise.all([fetch("./bamboo-mesh.json"),fetch("../bamboo/assets/garden.png")]);if(!x.ok||!z.ok)throw new Error("A scene asset failed to load. Reload to try again.");In=new Float32Array(await x.json());const P=await createImageBitmap(await z.blob());Yt=st.createTexture({size:[P.width,P.height],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),st.queue.copyExternalImageToTexture({source:P},{texture:Yt},[P.width,P.height]),P.close(),ot=new Wn(st),En(),Ot()}pe().catch(an);
