var Yn=Object.defineProperty;var Hn=(u,x,z)=>x in u?Yn(u,x,{enumerable:!0,configurable:!0,writable:!0,value:z}):u[x]=z;var X=(u,x,z)=>Hn(u,typeof x!="symbol"?x+"":x,z);(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))P(b);new MutationObserver(b=>{for(const A of b)if(A.type==="childList")for(const G of A.addedNodes)G.tagName==="LINK"&&G.rel==="modulepreload"&&P(G)}).observe(document,{childList:!0,subtree:!0});function z(b){const A={};return b.integrity&&(A.integrity=b.integrity),b.referrerPolicy&&(A.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?A.credentials="include":b.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function P(b){if(b.ep)return;b.ep=!0;const A=z(b);fetch(b.href,A)}})();(()=>{const u=[72,60,36],x=[42,28,18],z=17,P=26,b=4.7,A=4.05,G=.85,U=_=>.24-Math.max(0,Math.min(100,_))*.0046;function W(_,I){const Z=_[0]-z,E=Math.cos(I),R=Math.sin(I);return[x[0]+E*Z-R*_[1],x[1]+R*Z+E*_[1],x[2]+_[2]]}function F(_,I){const Z=_[0]-x[0],E=_[1]-x[1],R=Math.cos(I),Q=Math.sin(I);return[R*Z+Q*E+z,-Q*Z+R*E,_[2]-x[2]]}function L(_){const I=Math.hypot(_[1],_[2]),Z=Math.max(I-b,A-I,(G*_[1]-_[0])/Math.hypot(1,G),_[0]-P),E=Math.max(I-b,Math.abs(_[0]-P)-.4),R=Math.max(I-b,Math.abs(_[0]-18)-.4);return Math.min(Z,E,R)}function H(_){const I=[..._];for(let Z=0;Z<5;Z++){const E=L(I);if(E>=.15)break;const R=I.map((V,j)=>{const tt=[...I],ft=[...I];return tt[j]+=.001,ft[j]-=.001,L(tt)-L(ft)}),Q=Math.hypot(...R)||1;for(let V=0;V<3;V++)I[V]+=R[V]/Q*(.151-E)}return I}function K(_,I,Z=!0){const E=[];for(let Q=1;Z&&Q<17.4;Q+=.68)for(let V=-3.65;V<-1.35;V+=.68)for(let j=-3.6;j<3.7;j+=.68){const tt=[Q,V,j];L(tt)>.3&&Math.hypot(V,j)<3.7&&E.push(W(tt,I))}for(let Q=3.6;E.length<_&&Q<12;Q+=.68)for(let V=-12.8;V<13;V+=.68)for(let j=-12.8;j<13&&E.length<_;j+=.68)Math.hypot(V,j)<12.8&&E.push([24+V,Q,18+j]);if(E.length<_)throw new Error("Particle count exceeds the basin capacity");return E.slice(0,_)}class et{constructor(){X(this,"credit",0)}take(I,Z){this.credit+=Math.max(0,Math.min(1,I))*3*Math.max(0,Math.min(6,Z));const E=Math.floor(this.credit+1e-9);return this.credit=Math.max(0,this.credit-E),E}}const st=(_,I,Z)=>(_+I)%Z;globalThis.BambooGeometry={grid:u,pivot:x,axle:z,length:P,outer:b,inner:A,cut:G,angleForHeight:U,toWorld:W,toLocal:F,solidDistance:L,projectOut:H,initialParticles:K,EmissionBudget:et,advanceEmissionCursor:st}})();(()=>{class u{constructor(){X(this,"rest",-.3);X(this,"limit",.78);this.reset()}reset(){this.angle=this.rest,this.velocity=0,this.cycles=0,this.tipped=!1,this.phase="Filling"}step(z,P,b){let A=Math.max(0,Math.min(.05,z));for(;A>1e-9;){const G=Math.min(A,.008333333333333333),U=1e3*Math.cos(this.angle),W=900+Math.max(0,P)*1.2,F=(b-U)/W-this.velocity*.5;this.velocity=Math.max(-.9,Math.min(.9,this.velocity+F*G)),this.angle+=this.velocity*G,this.angle>.2&&(this.tipped=!0),this.angle>=this.limit&&(this.angle=this.limit,this.velocity=Math.min(0,this.velocity)),this.angle<=this.rest&&(this.angle=this.rest,this.velocity=0,this.tipped&&(this.cycles++,this.tipped=!1)),this.phase=this.angle<=this.rest+.02?"Filling":this.velocity<-.025?"Returning":"Tipping",A-=G}return this.angle}}globalThis.ShishiMechanism=u})();var On=`struct Cell {\r
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
}`,Rn=`struct Particle {\r
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
}`,jn=`struct Particle {\r
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
}`,Wn=`struct Particle {\r
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
}`,cn=`struct Bamboo { rotation: vec4f, emission: vec4f, previous: vec4f }

fn localPoint(p: vec3f, b: Bamboo) -> vec3f {
  let d = p - vec3f(42,28,18);
  return vec3f(b.rotation.x*d.x + b.rotation.y*d.y + 17, -b.rotation.y*d.x + b.rotation.x*d.y, d.z);
}
fn worldPoint(p: vec3f, b: Bamboo) -> vec3f {
  let d = p - vec3f(17,0,0);
  return vec3f(b.rotation.x*d.x - b.rotation.y*d.y, b.rotation.y*d.x + b.rotation.x*d.y, d.z) + vec3f(42,28,18);
}
fn worldVector(n: vec3f, b: Bamboo) -> vec3f { return vec3f(b.rotation.x*n.x-b.rotation.y*n.y,b.rotation.y*n.x+b.rotation.x*n.y,n.z); }
fn bambooDistance(p: vec3f) -> f32 {
  let r = length(p.yz);
  let shell = max(max(r-4.7,4.05-r),max((.85*p.y-p.x)/1.3124405,p.x-26));
  let cap = max(r-4.7,abs(p.x-26)-.4);
  let node = max(r-4.7,abs(p.x-18)-.4);
  return min(min(shell,cap),node);
}
fn bambooNormal(p: vec3f) -> vec3f {
  let e = .015;
  return normalize(vec3f(bambooDistance(p+vec3f(e,0,0))-bambooDistance(p-vec3f(e,0,0)),bambooDistance(p+vec3f(0,e,0))-bambooDistance(p-vec3f(0,e,0)),bambooDistance(p+vec3f(0,0,e))-bambooDistance(p-vec3f(0,0,e)))+vec3f(.000001));
}`,Nn=`struct Cell { vx:i32, vy:i32, vz:i32, mass:i32 }
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
    let wall = worldVector(vec3f(-local.y,local.x-17,0),b)*b.previous.z;
    v -= n*min(0.,dot(v-wall,n));
  }
  if(p.y < 3.5) { v.y=max(v.y,0.); v.x*=.99; v.z*=.99; }
  if(p.y<14.) {
    let radial=p.xz-vec2f(24,18); let r=length(radial);
    if(r>13. && r<18.) { let n=radial/max(r,.01); let outward=max(0.,dot(v.xz,n)); v.x-=outward*n.x;v.z-=outward*n.y; }
  }
  
  if(p.y>40. && length(p.xz-vec2f(28.1,18))<2.5){v=vec3f(-.04,-1.3,0);}
  v=clamp(v,vec3f(-5),vec3f(5));
  cells[id.x].vx=i32(v.x*1e6); cells[id.x].vy=i32(v.y*1e6); cells[id.x].vz=i32(v.z*1e6);
}`,$n=`struct Particle { position:vec3f, v:vec3f, C:mat3x3f }
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
    let wall=worldVector(vec3f(-local.y,local.x-17,0),b)*b.previous.z;
    p.v-=n*min(0.,dot(p.v-wall,n));
  }
  if(p.position.y<14.) {
    let radial=p.position.xz-vec2f(24,18); let r=length(radial);
    if(r>13.3){let n=radial/max(r,.01);p.position.x=24+n.x*13.3;p.position.z=18+n.y*13.3;let out=max(0.,dot(p.v.xz,n));p.v.x-=n.x*out;p.v.z-=n.y*out;}
  }
  if(p.position.y<3.4){p.position.y=3.4;p.v.y=max(p.v.y,0.);}
  p.position=clamp(p.position,vec3f(2),size-vec3f(3));
  particles[id.x]=p;
}`,Zn=`struct Particle { position:vec3f, v:vec3f, C:mat3x3f }
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
  
  p.position=vec3f(28.1+(random(seed)-.5)*.9,43.05+random(seed+2.)*1.2,18.+(random(seed+1.)-.5)*.9);
  p.v=vec3f(-.04,-1.3,0);
  p.C=mat3x3f(vec3f(0),vec3f(0),vec3f(0)); particles[index]=p;
}`;class Qn{constructor(x){X(this,"count",8e3);X(this,"buffers",[]);X(this,"particles");X(this,"positions");X(this,"bamboo");X(this,"stages",[]);X(this,"emit");X(this,"time",0);X(this,"cursor",0);X(this,"emission",new BambooGeometry.EmissionBudget);X(this,"lastAngle",-.3);X(this,"values",new Float32Array(12));this.device=x;const z=(L,H=!1)=>{const K=x.createBuffer({size:L,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|(H?GPUBufferUsage.UNIFORM:GPUBufferUsage.STORAGE)});return this.buffers.push(K),K};this.particles=z(this.count*80),this.positions=z(this.count*32),this.bamboo=z(48,!0);const P=z(16,!0),b=z(4,!0),A=z(4,!0),G=BambooGeometry.grid.reduce((L,H)=>L*H,1),U=z(G*16),W=z(this.count*4);x.queue.writeBuffer(P,0,new Float32Array([...BambooGeometry.grid,0])),x.queue.writeBuffer(b,0,new Uint32Array([this.count])),x.queue.writeBuffer(A,0,new Float32Array([.12]));const F=(L,H,K,et={},st=this.count)=>{const _=x.createComputePipeline({label:L,layout:"auto",compute:{module:x.createShaderModule({label:L,code:H}),constants:et}}),I=x.createBindGroup({layout:_.getBindGroupLayout(0),entries:K.map((Z,E)=>({binding:E,resource:{buffer:Z}}))});return{pipeline:_,group:I,work:Math.ceil(st/64)}};this.emit=F("Recycle pool water into bamboo",cn+Zn,[this.particles,this.bamboo]),this.stages=[F("Splash clear grid",On,[U],{},G),F("Splash mass transfer",Rn,[this.particles,U,P,b],{fixedPointMultiplier:1e6}),F("Splash pressure transfer",jn,[this.particles,U,P,b,W,A],{fixedPointMultiplier:1e6,fixedPointMultiplierInverse:1e-6,stiffness:32,restDensity:3,dynamicViscosity:.06}),F("Gravity and moving hollow collider",cn+Nn,[U,this.bamboo,P],{},G),F("Splash grid to particles and collisions",cn+$n,[this.particles,U,this.bamboo,P]),F("Copy fluid positions",Wn,[this.particles,this.positions,b])],this.reset()}reset(){this.lastAngle=-.3,this.time=0,this.cursor=0,this.emission=new BambooGeometry.EmissionBudget;const x=BambooGeometry.initialParticles(this.count,this.lastAngle,!1),z=new Float32Array(this.count*20),P=new Float32Array(this.count*8);x.forEach((b,A)=>{z.set(b,A*20),P.set(b,A*8)}),this.device.queue.writeBuffer(this.particles,0,z),this.device.queue.writeBuffer(this.positions,0,P)}update(x,z,P){const b=Math.max(0,Math.min(1,P)),A=this.emission.take(b,z);this.values.set([Math.cos(x),Math.sin(x),this.time,.12,this.cursor,A,b,0,Math.cos(this.lastAngle),Math.sin(this.lastAngle),z?(x-this.lastAngle)/(.12*z):0,0]),this.device.queue.writeBuffer(this.bamboo,0,this.values),this.lastAngle=x,z&&(this.cursor=BambooGeometry.advanceEmissionCursor(this.cursor,A,this.count),this.time+=z*.12)}execute(x,z){if(!z)return;const P=x.beginComputePass();P.setPipeline(this.emit.pipeline),P.setBindGroup(0,this.emit.group),P.dispatchWorkgroups(1);for(let b=0;b<z;b++)for(const A of this.stages)P.setPipeline(A.pipeline),P.setBindGroup(0,A.group),P.dispatchWorkgroups(A.work);P.end()}destroy(){this.buffers.forEach(x=>x.destroy())}}function Jn(u,x){return class extends u{constructor(...z){super(...z),x(this)}}}const Kn=Jn(Array,u=>u.fill(0));let k=1e-6;function Cn(u){function x(t=0,i=0){const n=new u(2);return t!==void 0&&(n[0]=t,i!==void 0&&(n[1]=i)),n}const z=x;function P(t,i,n){const s=n??new u(2);return s[0]=t,s[1]=i,s}function b(t,i){const n=i??new u(2);return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n}function A(t,i){const n=i??new u(2);return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n}function G(t,i){const n=i??new u(2);return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n}function U(t,i=0,n=1,s){const a=s??new u(2);return a[0]=Math.min(n,Math.max(i,t[0])),a[1]=Math.min(n,Math.max(i,t[1])),a}function W(t,i,n){const s=n??new u(2);return s[0]=t[0]+i[0],s[1]=t[1]+i[1],s}function F(t,i,n,s){const a=s??new u(2);return a[0]=t[0]+i[0]*n,a[1]=t[1]+i[1]*n,a}function L(t,i){const n=t[0],s=t[1],a=i[0],v=i[1],y=Math.sqrt(n*n+s*s),c=Math.sqrt(a*a+v*v),l=y*c,p=l&&Tt(t,i)/l;return Math.acos(p)}function H(t,i,n){const s=n??new u(2);return s[0]=t[0]-i[0],s[1]=t[1]-i[1],s}const K=H;function et(t,i){return Math.abs(t[0]-i[0])<k&&Math.abs(t[1]-i[1])<k}function st(t,i){return t[0]===i[0]&&t[1]===i[1]}function _(t,i,n,s){const a=s??new u(2);return a[0]=t[0]+n*(i[0]-t[0]),a[1]=t[1]+n*(i[1]-t[1]),a}function I(t,i,n,s){const a=s??new u(2);return a[0]=t[0]+n[0]*(i[0]-t[0]),a[1]=t[1]+n[1]*(i[1]-t[1]),a}function Z(t,i,n){const s=n??new u(2);return s[0]=Math.max(t[0],i[0]),s[1]=Math.max(t[1],i[1]),s}function E(t,i,n){const s=n??new u(2);return s[0]=Math.min(t[0],i[0]),s[1]=Math.min(t[1],i[1]),s}function R(t,i,n){const s=n??new u(2);return s[0]=t[0]*i,s[1]=t[1]*i,s}const Q=R;function V(t,i,n){const s=n??new u(2);return s[0]=t[0]/i,s[1]=t[1]/i,s}function j(t,i){const n=i??new u(2);return n[0]=1/t[0],n[1]=1/t[1],n}const tt=j;function ft(t,i,n){const s=n??new u(3),a=t[0]*i[1]-t[1]*i[0];return s[0]=0,s[1]=0,s[2]=a,s}function Tt(t,i){return t[0]*i[0]+t[1]*i[1]}function lt(t){const i=t[0],n=t[1];return Math.sqrt(i*i+n*n)}const Lt=lt;function N(t){const i=t[0],n=t[1];return i*i+n*n}const J=N;function O(t,i){const n=t[0]-i[0],s=t[1]-i[1];return Math.sqrt(n*n+s*s)}const Ft=O;function gt(t,i){const n=t[0]-i[0],s=t[1]-i[1];return n*n+s*s}const It=gt;function mt(t,i){const n=i??new u(2),s=t[0],a=t[1],v=Math.sqrt(s*s+a*a);return v>1e-5?(n[0]=s/v,n[1]=a/v):(n[0]=0,n[1]=0),n}function Et(t,i){const n=i??new u(2);return n[0]=-t[0],n[1]=-t[1],n}function C(t,i){const n=i??new u(2);return n[0]=t[0],n[1]=t[1],n}const Vt=C;function Pt(t,i,n){const s=n??new u(2);return s[0]=t[0]*i[0],s[1]=t[1]*i[1],s}const Xt=Pt;function At(t,i,n){const s=n??new u(2);return s[0]=t[0]/i[0],s[1]=t[1]/i[1],s}const Gt=At;function St(t=1,i){const n=i??new u(2),s=Math.random()*2*Math.PI;return n[0]=Math.cos(s)*t,n[1]=Math.sin(s)*t,n}function r(t){const i=t??new u(2);return i[0]=0,i[1]=0,i}function d(t,i,n){const s=n??new u(2),a=t[0],v=t[1];return s[0]=a*i[0]+v*i[4]+i[12],s[1]=a*i[1]+v*i[5]+i[13],s}function e(t,i,n){const s=n??new u(2),a=t[0],v=t[1];return s[0]=i[0]*a+i[4]*v+i[8],s[1]=i[1]*a+i[5]*v+i[9],s}function o(t,i,n,s){const a=s??new u(2),v=t[0]-i[0],y=t[1]-i[1],c=Math.sin(n),l=Math.cos(n);return a[0]=v*l-y*c+i[0],a[1]=v*c+y*l+i[1],a}function f(t,i,n){const s=n??new u(2);return mt(t,s),R(s,i,s)}function h(t,i,n){const s=n??new u(2);return lt(t)>i?f(t,i,s):C(t,s)}function m(t,i,n){const s=n??new u(2);return _(t,i,.5,s)}return{create:x,fromValues:z,set:P,ceil:b,floor:A,round:G,clamp:U,add:W,addScaled:F,angle:L,subtract:H,sub:K,equalsApproximately:et,equals:st,lerp:_,lerpV:I,max:Z,min:E,mulScalar:R,scale:Q,divScalar:V,inverse:j,invert:tt,cross:ft,dot:Tt,length:lt,len:Lt,lengthSq:N,lenSq:J,distance:O,dist:Ft,distanceSq:gt,distSq:It,normalize:mt,negate:Et,copy:C,clone:Vt,multiply:Pt,mul:Xt,divide:At,div:Gt,random:St,zero:r,transformMat4:d,transformMat3:e,rotate:o,setLength:f,truncate:h,midpoint:m}}const Sn=new Map;function Fn(u){let x=Sn.get(u);return x||(x=Cn(u),Sn.set(u,x)),x}function te(u){function x(c,l,p){const w=new u(3);return c!==void 0&&(w[0]=c,l!==void 0&&(w[1]=l,p!==void 0&&(w[2]=p))),w}const z=x;function P(c,l,p,w){const g=w??new u(3);return g[0]=c,g[1]=l,g[2]=p,g}function b(c,l){const p=l??new u(3);return p[0]=Math.ceil(c[0]),p[1]=Math.ceil(c[1]),p[2]=Math.ceil(c[2]),p}function A(c,l){const p=l??new u(3);return p[0]=Math.floor(c[0]),p[1]=Math.floor(c[1]),p[2]=Math.floor(c[2]),p}function G(c,l){const p=l??new u(3);return p[0]=Math.round(c[0]),p[1]=Math.round(c[1]),p[2]=Math.round(c[2]),p}function U(c,l=0,p=1,w){const g=w??new u(3);return g[0]=Math.min(p,Math.max(l,c[0])),g[1]=Math.min(p,Math.max(l,c[1])),g[2]=Math.min(p,Math.max(l,c[2])),g}function W(c,l,p){const w=p??new u(3);return w[0]=c[0]+l[0],w[1]=c[1]+l[1],w[2]=c[2]+l[2],w}function F(c,l,p,w){const g=w??new u(3);return g[0]=c[0]+l[0]*p,g[1]=c[1]+l[1]*p,g[2]=c[2]+l[2]*p,g}function L(c,l){const p=c[0],w=c[1],g=c[2],M=l[0],D=l[1],S=l[2],B=Math.sqrt(p*p+w*w+g*g),T=Math.sqrt(M*M+D*D+S*S),q=B*T,Y=q&&Tt(c,l)/q;return Math.acos(Y)}function H(c,l,p){const w=p??new u(3);return w[0]=c[0]-l[0],w[1]=c[1]-l[1],w[2]=c[2]-l[2],w}const K=H;function et(c,l){return Math.abs(c[0]-l[0])<k&&Math.abs(c[1]-l[1])<k&&Math.abs(c[2]-l[2])<k}function st(c,l){return c[0]===l[0]&&c[1]===l[1]&&c[2]===l[2]}function _(c,l,p,w){const g=w??new u(3);return g[0]=c[0]+p*(l[0]-c[0]),g[1]=c[1]+p*(l[1]-c[1]),g[2]=c[2]+p*(l[2]-c[2]),g}function I(c,l,p,w){const g=w??new u(3);return g[0]=c[0]+p[0]*(l[0]-c[0]),g[1]=c[1]+p[1]*(l[1]-c[1]),g[2]=c[2]+p[2]*(l[2]-c[2]),g}function Z(c,l,p){const w=p??new u(3);return w[0]=Math.max(c[0],l[0]),w[1]=Math.max(c[1],l[1]),w[2]=Math.max(c[2],l[2]),w}function E(c,l,p){const w=p??new u(3);return w[0]=Math.min(c[0],l[0]),w[1]=Math.min(c[1],l[1]),w[2]=Math.min(c[2],l[2]),w}function R(c,l,p){const w=p??new u(3);return w[0]=c[0]*l,w[1]=c[1]*l,w[2]=c[2]*l,w}const Q=R;function V(c,l,p){const w=p??new u(3);return w[0]=c[0]/l,w[1]=c[1]/l,w[2]=c[2]/l,w}function j(c,l){const p=l??new u(3);return p[0]=1/c[0],p[1]=1/c[1],p[2]=1/c[2],p}const tt=j;function ft(c,l,p){const w=p??new u(3),g=c[2]*l[0]-c[0]*l[2],M=c[0]*l[1]-c[1]*l[0];return w[0]=c[1]*l[2]-c[2]*l[1],w[1]=g,w[2]=M,w}function Tt(c,l){return c[0]*l[0]+c[1]*l[1]+c[2]*l[2]}function lt(c){const l=c[0],p=c[1],w=c[2];return Math.sqrt(l*l+p*p+w*w)}const Lt=lt;function N(c){const l=c[0],p=c[1],w=c[2];return l*l+p*p+w*w}const J=N;function O(c,l){const p=c[0]-l[0],w=c[1]-l[1],g=c[2]-l[2];return Math.sqrt(p*p+w*w+g*g)}const Ft=O;function gt(c,l){const p=c[0]-l[0],w=c[1]-l[1],g=c[2]-l[2];return p*p+w*w+g*g}const It=gt;function mt(c,l){const p=l??new u(3),w=c[0],g=c[1],M=c[2],D=Math.sqrt(w*w+g*g+M*M);return D>1e-5?(p[0]=w/D,p[1]=g/D,p[2]=M/D):(p[0]=0,p[1]=0,p[2]=0),p}function Et(c,l){const p=l??new u(3);return p[0]=-c[0],p[1]=-c[1],p[2]=-c[2],p}function C(c,l){const p=l??new u(3);return p[0]=c[0],p[1]=c[1],p[2]=c[2],p}const Vt=C;function Pt(c,l,p){const w=p??new u(3);return w[0]=c[0]*l[0],w[1]=c[1]*l[1],w[2]=c[2]*l[2],w}const Xt=Pt;function At(c,l,p){const w=p??new u(3);return w[0]=c[0]/l[0],w[1]=c[1]/l[1],w[2]=c[2]/l[2],w}const Gt=At;function St(c=1,l){const p=l??new u(3),w=Math.random()*2*Math.PI,g=Math.random()*2-1,M=Math.sqrt(1-g*g)*c;return p[0]=Math.cos(w)*M,p[1]=Math.sin(w)*M,p[2]=g*c,p}function r(c){const l=c??new u(3);return l[0]=0,l[1]=0,l[2]=0,l}function d(c,l,p){const w=p??new u(3),g=c[0],M=c[1],D=c[2],S=l[3]*g+l[7]*M+l[11]*D+l[15]||1;return w[0]=(l[0]*g+l[4]*M+l[8]*D+l[12])/S,w[1]=(l[1]*g+l[5]*M+l[9]*D+l[13])/S,w[2]=(l[2]*g+l[6]*M+l[10]*D+l[14])/S,w}function e(c,l,p){const w=p??new u(3),g=c[0],M=c[1],D=c[2];return w[0]=g*l[0*4+0]+M*l[1*4+0]+D*l[2*4+0],w[1]=g*l[0*4+1]+M*l[1*4+1]+D*l[2*4+1],w[2]=g*l[0*4+2]+M*l[1*4+2]+D*l[2*4+2],w}function o(c,l,p){const w=p??new u(3),g=c[0],M=c[1],D=c[2];return w[0]=g*l[0]+M*l[4]+D*l[8],w[1]=g*l[1]+M*l[5]+D*l[9],w[2]=g*l[2]+M*l[6]+D*l[10],w}function f(c,l,p){const w=p??new u(3),g=l[0],M=l[1],D=l[2],S=l[3]*2,B=c[0],T=c[1],q=c[2],Y=M*q-D*T,$=D*B-g*q,nt=g*T-M*B;return w[0]=B+Y*S+(M*nt-D*$)*2,w[1]=T+$*S+(D*Y-g*nt)*2,w[2]=q+nt*S+(g*$-M*Y)*2,w}function h(c,l){const p=l??new u(3);return p[0]=c[12],p[1]=c[13],p[2]=c[14],p}function m(c,l,p){const w=p??new u(3),g=l*4;return w[0]=c[g+0],w[1]=c[g+1],w[2]=c[g+2],w}function t(c,l){const p=l??new u(3),w=c[0],g=c[1],M=c[2],D=c[4],S=c[5],B=c[6],T=c[8],q=c[9],Y=c[10];return p[0]=Math.sqrt(w*w+g*g+M*M),p[1]=Math.sqrt(D*D+S*S+B*B),p[2]=Math.sqrt(T*T+q*q+Y*Y),p}function i(c,l,p,w){const g=w??new u(3),M=[],D=[];return M[0]=c[0]-l[0],M[1]=c[1]-l[1],M[2]=c[2]-l[2],D[0]=M[0],D[1]=M[1]*Math.cos(p)-M[2]*Math.sin(p),D[2]=M[1]*Math.sin(p)+M[2]*Math.cos(p),g[0]=D[0]+l[0],g[1]=D[1]+l[1],g[2]=D[2]+l[2],g}function n(c,l,p,w){const g=w??new u(3),M=[],D=[];return M[0]=c[0]-l[0],M[1]=c[1]-l[1],M[2]=c[2]-l[2],D[0]=M[2]*Math.sin(p)+M[0]*Math.cos(p),D[1]=M[1],D[2]=M[2]*Math.cos(p)-M[0]*Math.sin(p),g[0]=D[0]+l[0],g[1]=D[1]+l[1],g[2]=D[2]+l[2],g}function s(c,l,p,w){const g=w??new u(3),M=[],D=[];return M[0]=c[0]-l[0],M[1]=c[1]-l[1],M[2]=c[2]-l[2],D[0]=M[0]*Math.cos(p)-M[1]*Math.sin(p),D[1]=M[0]*Math.sin(p)+M[1]*Math.cos(p),D[2]=M[2],g[0]=D[0]+l[0],g[1]=D[1]+l[1],g[2]=D[2]+l[2],g}function a(c,l,p){const w=p??new u(3);return mt(c,w),R(w,l,w)}function v(c,l,p){const w=p??new u(3);return lt(c)>l?a(c,l,w):C(c,w)}function y(c,l,p){const w=p??new u(3);return _(c,l,.5,w)}return{create:x,fromValues:z,set:P,ceil:b,floor:A,round:G,clamp:U,add:W,addScaled:F,angle:L,subtract:H,sub:K,equalsApproximately:et,equals:st,lerp:_,lerpV:I,max:Z,min:E,mulScalar:R,scale:Q,divScalar:V,inverse:j,invert:tt,cross:ft,dot:Tt,length:lt,len:Lt,lengthSq:N,lenSq:J,distance:O,dist:Ft,distanceSq:gt,distSq:It,normalize:mt,negate:Et,copy:C,clone:Vt,multiply:Pt,mul:Xt,divide:At,div:Gt,random:St,zero:r,transformMat4:d,transformMat4Upper3x3:e,transformMat3:o,transformQuat:f,getTranslation:h,getAxis:m,getScaling:t,rotateX:i,rotateY:n,rotateZ:s,setLength:a,truncate:v,midpoint:y}}const qn=new Map;function pn(u){let x=qn.get(u);return x||(x=te(u),qn.set(u,x)),x}function ne(u){const x=Fn(u),z=pn(u);function P(r,d,e,o,f,h,m,t,i){const n=new u(12);return n[3]=0,n[7]=0,n[11]=0,r!==void 0&&(n[0]=r,d!==void 0&&(n[1]=d,e!==void 0&&(n[2]=e,o!==void 0&&(n[4]=o,f!==void 0&&(n[5]=f,h!==void 0&&(n[6]=h,m!==void 0&&(n[8]=m,t!==void 0&&(n[9]=t,i!==void 0&&(n[10]=i))))))))),n}function b(r,d,e,o,f,h,m,t,i,n){const s=n??new u(12);return s[0]=r,s[1]=d,s[2]=e,s[3]=0,s[4]=o,s[5]=f,s[6]=h,s[7]=0,s[8]=m,s[9]=t,s[10]=i,s[11]=0,s}function A(r,d){const e=d??new u(12);return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=0,e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=0,e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=0,e}function G(r,d){const e=d??new u(12),o=r[0],f=r[1],h=r[2],m=r[3],t=o+o,i=f+f,n=h+h,s=o*t,a=f*t,v=f*i,y=h*t,c=h*i,l=h*n,p=m*t,w=m*i,g=m*n;return e[0]=1-v-l,e[1]=a+g,e[2]=y-w,e[3]=0,e[4]=a-g,e[5]=1-s-l,e[6]=c+p,e[7]=0,e[8]=y+w,e[9]=c-p,e[10]=1-s-v,e[11]=0,e}function U(r,d){const e=d??new u(12);return e[0]=-r[0],e[1]=-r[1],e[2]=-r[2],e[4]=-r[4],e[5]=-r[5],e[6]=-r[6],e[8]=-r[8],e[9]=-r[9],e[10]=-r[10],e}function W(r,d){const e=d??new u(12);return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[8]=r[8],e[9]=r[9],e[10]=r[10],e}const F=W;function L(r,d){return Math.abs(r[0]-d[0])<k&&Math.abs(r[1]-d[1])<k&&Math.abs(r[2]-d[2])<k&&Math.abs(r[4]-d[4])<k&&Math.abs(r[5]-d[5])<k&&Math.abs(r[6]-d[6])<k&&Math.abs(r[8]-d[8])<k&&Math.abs(r[9]-d[9])<k&&Math.abs(r[10]-d[10])<k}function H(r,d){return r[0]===d[0]&&r[1]===d[1]&&r[2]===d[2]&&r[4]===d[4]&&r[5]===d[5]&&r[6]===d[6]&&r[8]===d[8]&&r[9]===d[9]&&r[10]===d[10]}function K(r){const d=r??new u(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function et(r,d){const e=d??new u(12);if(e===r){let v;return v=r[1],r[1]=r[4],r[4]=v,v=r[2],r[2]=r[8],r[8]=v,v=r[6],r[6]=r[9],r[9]=v,e}const o=r[0*4+0],f=r[0*4+1],h=r[0*4+2],m=r[1*4+0],t=r[1*4+1],i=r[1*4+2],n=r[2*4+0],s=r[2*4+1],a=r[2*4+2];return e[0]=o,e[1]=m,e[2]=n,e[4]=f,e[5]=t,e[6]=s,e[8]=h,e[9]=i,e[10]=a,e}function st(r,d){const e=d??new u(12),o=r[0*4+0],f=r[0*4+1],h=r[0*4+2],m=r[1*4+0],t=r[1*4+1],i=r[1*4+2],n=r[2*4+0],s=r[2*4+1],a=r[2*4+2],v=a*t-i*s,y=-a*m+i*n,c=s*m-t*n,l=1/(o*v+f*y+h*c);return e[0]=v*l,e[1]=(-a*f+h*s)*l,e[2]=(i*f-h*t)*l,e[4]=y*l,e[5]=(a*o-h*n)*l,e[6]=(-i*o+h*m)*l,e[8]=c*l,e[9]=(-s*o+f*n)*l,e[10]=(t*o-f*m)*l,e}function _(r){const d=r[0],e=r[0*4+1],o=r[0*4+2],f=r[1*4+0],h=r[1*4+1],m=r[1*4+2],t=r[2*4+0],i=r[2*4+1],n=r[2*4+2];return d*(h*n-i*m)-f*(e*n-i*o)+t*(e*m-h*o)}const I=st;function Z(r,d,e){const o=e??new u(12),f=r[0],h=r[1],m=r[2],t=r[4],i=r[5],n=r[6],s=r[8],a=r[9],v=r[10],y=d[0],c=d[1],l=d[2],p=d[4],w=d[5],g=d[6],M=d[8],D=d[9],S=d[10];return o[0]=f*y+t*c+s*l,o[1]=h*y+i*c+a*l,o[2]=m*y+n*c+v*l,o[4]=f*p+t*w+s*g,o[5]=h*p+i*w+a*g,o[6]=m*p+n*w+v*g,o[8]=f*M+t*D+s*S,o[9]=h*M+i*D+a*S,o[10]=m*M+n*D+v*S,o}const E=Z;function R(r,d,e){const o=e??K();return r!==o&&(o[0]=r[0],o[1]=r[1],o[2]=r[2],o[4]=r[4],o[5]=r[5],o[6]=r[6]),o[8]=d[0],o[9]=d[1],o[10]=1,o}function Q(r,d){const e=d??x.create();return e[0]=r[8],e[1]=r[9],e}function V(r,d,e){const o=e??x.create(),f=d*4;return o[0]=r[f+0],o[1]=r[f+1],o}function j(r,d,e,o){const f=o===r?r:W(r,o),h=e*4;return f[h+0]=d[0],f[h+1]=d[1],f}function tt(r,d){const e=d??x.create(),o=r[0],f=r[1],h=r[4],m=r[5];return e[0]=Math.sqrt(o*o+f*f),e[1]=Math.sqrt(h*h+m*m),e}function ft(r,d){const e=d??z.create(),o=r[0],f=r[1],h=r[2],m=r[4],t=r[5],i=r[6],n=r[8],s=r[9],a=r[10];return e[0]=Math.sqrt(o*o+f*f+h*h),e[1]=Math.sqrt(m*m+t*t+i*i),e[2]=Math.sqrt(n*n+s*s+a*a),e}function Tt(r,d){const e=d??new u(12);return e[0]=1,e[1]=0,e[2]=0,e[4]=0,e[5]=1,e[6]=0,e[8]=r[0],e[9]=r[1],e[10]=1,e}function lt(r,d,e){const o=e??new u(12),f=d[0],h=d[1],m=r[0],t=r[1],i=r[2],n=r[1*4+0],s=r[1*4+1],a=r[1*4+2],v=r[2*4+0],y=r[2*4+1],c=r[2*4+2];return r!==o&&(o[0]=m,o[1]=t,o[2]=i,o[4]=n,o[5]=s,o[6]=a),o[8]=m*f+n*h+v,o[9]=t*f+s*h+y,o[10]=i*f+a*h+c,o}function Lt(r,d){const e=d??new u(12),o=Math.cos(r),f=Math.sin(r);return e[0]=o,e[1]=f,e[2]=0,e[4]=-f,e[5]=o,e[6]=0,e[8]=0,e[9]=0,e[10]=1,e}function N(r,d,e){const o=e??new u(12),f=r[0*4+0],h=r[0*4+1],m=r[0*4+2],t=r[1*4+0],i=r[1*4+1],n=r[1*4+2],s=Math.cos(d),a=Math.sin(d);return o[0]=s*f+a*t,o[1]=s*h+a*i,o[2]=s*m+a*n,o[4]=s*t-a*f,o[5]=s*i-a*h,o[6]=s*n-a*m,r!==o&&(o[8]=r[8],o[9]=r[9],o[10]=r[10]),o}function J(r,d){const e=d??new u(12),o=Math.cos(r),f=Math.sin(r);return e[0]=1,e[1]=0,e[2]=0,e[4]=0,e[5]=o,e[6]=f,e[8]=0,e[9]=-f,e[10]=o,e}function O(r,d,e){const o=e??new u(12),f=r[4],h=r[5],m=r[6],t=r[8],i=r[9],n=r[10],s=Math.cos(d),a=Math.sin(d);return o[4]=s*f+a*t,o[5]=s*h+a*i,o[6]=s*m+a*n,o[8]=s*t-a*f,o[9]=s*i-a*h,o[10]=s*n-a*m,r!==o&&(o[0]=r[0],o[1]=r[1],o[2]=r[2]),o}function Ft(r,d){const e=d??new u(12),o=Math.cos(r),f=Math.sin(r);return e[0]=o,e[1]=0,e[2]=-f,e[4]=0,e[5]=1,e[6]=0,e[8]=f,e[9]=0,e[10]=o,e}function gt(r,d,e){const o=e??new u(12),f=r[0*4+0],h=r[0*4+1],m=r[0*4+2],t=r[2*4+0],i=r[2*4+1],n=r[2*4+2],s=Math.cos(d),a=Math.sin(d);return o[0]=s*f-a*t,o[1]=s*h-a*i,o[2]=s*m-a*n,o[8]=s*t+a*f,o[9]=s*i+a*h,o[10]=s*n+a*m,r!==o&&(o[4]=r[4],o[5]=r[5],o[6]=r[6]),o}const It=Lt,mt=N;function Et(r,d){const e=d??new u(12);return e[0]=r[0],e[1]=0,e[2]=0,e[4]=0,e[5]=r[1],e[6]=0,e[8]=0,e[9]=0,e[10]=1,e}function C(r,d,e){const o=e??new u(12),f=d[0],h=d[1];return o[0]=f*r[0*4+0],o[1]=f*r[0*4+1],o[2]=f*r[0*4+2],o[4]=h*r[1*4+0],o[5]=h*r[1*4+1],o[6]=h*r[1*4+2],r!==o&&(o[8]=r[8],o[9]=r[9],o[10]=r[10]),o}function Vt(r,d){const e=d??new u(12);return e[0]=r[0],e[1]=0,e[2]=0,e[4]=0,e[5]=r[1],e[6]=0,e[8]=0,e[9]=0,e[10]=r[2],e}function Pt(r,d,e){const o=e??new u(12),f=d[0],h=d[1],m=d[2];return o[0]=f*r[0*4+0],o[1]=f*r[0*4+1],o[2]=f*r[0*4+2],o[4]=h*r[1*4+0],o[5]=h*r[1*4+1],o[6]=h*r[1*4+2],o[8]=m*r[2*4+0],o[9]=m*r[2*4+1],o[10]=m*r[2*4+2],o}function Xt(r,d){const e=d??new u(12);return e[0]=r,e[1]=0,e[2]=0,e[4]=0,e[5]=r,e[6]=0,e[8]=0,e[9]=0,e[10]=1,e}function At(r,d,e){const o=e??new u(12);return o[0]=d*r[0*4+0],o[1]=d*r[0*4+1],o[2]=d*r[0*4+2],o[4]=d*r[1*4+0],o[5]=d*r[1*4+1],o[6]=d*r[1*4+2],r!==o&&(o[8]=r[8],o[9]=r[9],o[10]=r[10]),o}function Gt(r,d){const e=d??new u(12);return e[0]=r,e[1]=0,e[2]=0,e[4]=0,e[5]=r,e[6]=0,e[8]=0,e[9]=0,e[10]=r,e}function St(r,d,e){const o=e??new u(12);return o[0]=d*r[0*4+0],o[1]=d*r[0*4+1],o[2]=d*r[0*4+2],o[4]=d*r[1*4+0],o[5]=d*r[1*4+1],o[6]=d*r[1*4+2],o[8]=d*r[2*4+0],o[9]=d*r[2*4+1],o[10]=d*r[2*4+2],o}return{clone:F,create:P,set:b,fromMat4:A,fromQuat:G,negate:U,copy:W,equalsApproximately:L,equals:H,identity:K,transpose:et,inverse:st,invert:I,determinant:_,mul:E,multiply:Z,setTranslation:R,getTranslation:Q,getAxis:V,setAxis:j,getScaling:tt,get3DScaling:ft,translation:Tt,translate:lt,rotation:Lt,rotate:N,rotationX:J,rotateX:O,rotationY:Ft,rotateY:gt,rotationZ:It,rotateZ:mt,scaling:Et,scale:C,uniformScaling:Xt,uniformScale:At,scaling3D:Vt,scale3D:Pt,uniformScaling3D:Gt,uniformScale3D:St}}const _n=new Map;function ee(u){let x=_n.get(u);return x||(x=ne(u),_n.set(u,x)),x}function se(u){const x=pn(u);function z(t,i,n,s,a,v,y,c,l,p,w,g,M,D,S,B){const T=new u(16);return t!==void 0&&(T[0]=t,i!==void 0&&(T[1]=i,n!==void 0&&(T[2]=n,s!==void 0&&(T[3]=s,a!==void 0&&(T[4]=a,v!==void 0&&(T[5]=v,y!==void 0&&(T[6]=y,c!==void 0&&(T[7]=c,l!==void 0&&(T[8]=l,p!==void 0&&(T[9]=p,w!==void 0&&(T[10]=w,g!==void 0&&(T[11]=g,M!==void 0&&(T[12]=M,D!==void 0&&(T[13]=D,S!==void 0&&(T[14]=S,B!==void 0&&(T[15]=B)))))))))))))))),T}function P(t,i,n,s,a,v,y,c,l,p,w,g,M,D,S,B,T){const q=T??new u(16);return q[0]=t,q[1]=i,q[2]=n,q[3]=s,q[4]=a,q[5]=v,q[6]=y,q[7]=c,q[8]=l,q[9]=p,q[10]=w,q[11]=g,q[12]=M,q[13]=D,q[14]=S,q[15]=B,q}function b(t,i){const n=i??new u(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=0,n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=0,n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function A(t,i){const n=i??new u(16),s=t[0],a=t[1],v=t[2],y=t[3],c=s+s,l=a+a,p=v+v,w=s*c,g=a*c,M=a*l,D=v*c,S=v*l,B=v*p,T=y*c,q=y*l,Y=y*p;return n[0]=1-M-B,n[1]=g+Y,n[2]=D-q,n[3]=0,n[4]=g-Y,n[5]=1-w-B,n[6]=S+T,n[7]=0,n[8]=D+q,n[9]=S-T,n[10]=1-w-M,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function G(t,i){const n=i??new u(16);return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n[4]=-t[4],n[5]=-t[5],n[6]=-t[6],n[7]=-t[7],n[8]=-t[8],n[9]=-t[9],n[10]=-t[10],n[11]=-t[11],n[12]=-t[12],n[13]=-t[13],n[14]=-t[14],n[15]=-t[15],n}function U(t,i){const n=i??new u(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}const W=U;function F(t,i){return Math.abs(t[0]-i[0])<k&&Math.abs(t[1]-i[1])<k&&Math.abs(t[2]-i[2])<k&&Math.abs(t[3]-i[3])<k&&Math.abs(t[4]-i[4])<k&&Math.abs(t[5]-i[5])<k&&Math.abs(t[6]-i[6])<k&&Math.abs(t[7]-i[7])<k&&Math.abs(t[8]-i[8])<k&&Math.abs(t[9]-i[9])<k&&Math.abs(t[10]-i[10])<k&&Math.abs(t[11]-i[11])<k&&Math.abs(t[12]-i[12])<k&&Math.abs(t[13]-i[13])<k&&Math.abs(t[14]-i[14])<k&&Math.abs(t[15]-i[15])<k}function L(t,i){return t[0]===i[0]&&t[1]===i[1]&&t[2]===i[2]&&t[3]===i[3]&&t[4]===i[4]&&t[5]===i[5]&&t[6]===i[6]&&t[7]===i[7]&&t[8]===i[8]&&t[9]===i[9]&&t[10]===i[10]&&t[11]===i[11]&&t[12]===i[12]&&t[13]===i[13]&&t[14]===i[14]&&t[15]===i[15]}function H(t){const i=t??new u(16);return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function K(t,i){const n=i??new u(16);if(n===t){let $;return $=t[1],t[1]=t[4],t[4]=$,$=t[2],t[2]=t[8],t[8]=$,$=t[3],t[3]=t[12],t[12]=$,$=t[6],t[6]=t[9],t[9]=$,$=t[7],t[7]=t[13],t[13]=$,$=t[11],t[11]=t[14],t[14]=$,n}const s=t[0*4+0],a=t[0*4+1],v=t[0*4+2],y=t[0*4+3],c=t[1*4+0],l=t[1*4+1],p=t[1*4+2],w=t[1*4+3],g=t[2*4+0],M=t[2*4+1],D=t[2*4+2],S=t[2*4+3],B=t[3*4+0],T=t[3*4+1],q=t[3*4+2],Y=t[3*4+3];return n[0]=s,n[1]=c,n[2]=g,n[3]=B,n[4]=a,n[5]=l,n[6]=M,n[7]=T,n[8]=v,n[9]=p,n[10]=D,n[11]=q,n[12]=y,n[13]=w,n[14]=S,n[15]=Y,n}function et(t,i){const n=i??new u(16),s=t[0*4+0],a=t[0*4+1],v=t[0*4+2],y=t[0*4+3],c=t[1*4+0],l=t[1*4+1],p=t[1*4+2],w=t[1*4+3],g=t[2*4+0],M=t[2*4+1],D=t[2*4+2],S=t[2*4+3],B=t[3*4+0],T=t[3*4+1],q=t[3*4+2],Y=t[3*4+3],$=D*Y,nt=q*S,it=p*Y,ct=q*w,ut=p*S,dt=D*w,ht=v*Y,pt=q*y,vt=v*S,wt=D*y,yt=v*w,Mt=p*y,Dt=g*T,zt=B*M,qt=c*T,_t=B*l,Bt=c*M,Kt=g*l,Ct=s*T,tn=B*a,nn=s*M,en=g*a,sn=s*l,rn=c*a,bn=$*l+ct*M+ut*T-(nt*l+it*M+dt*T),Pn=nt*a+ht*M+wt*T-($*a+pt*M+vt*T),An=it*a+pt*l+yt*T-(ct*a+ht*l+Mt*T),Tn=dt*a+vt*l+Mt*M-(ut*a+wt*l+yt*M),xt=1/(s*bn+c*Pn+g*An+B*Tn);return n[0]=xt*bn,n[1]=xt*Pn,n[2]=xt*An,n[3]=xt*Tn,n[4]=xt*(nt*c+it*g+dt*B-($*c+ct*g+ut*B)),n[5]=xt*($*s+pt*g+vt*B-(nt*s+ht*g+wt*B)),n[6]=xt*(ct*s+ht*c+Mt*B-(it*s+pt*c+yt*B)),n[7]=xt*(ut*s+wt*c+yt*g-(dt*s+vt*c+Mt*g)),n[8]=xt*(Dt*w+_t*S+Bt*Y-(zt*w+qt*S+Kt*Y)),n[9]=xt*(zt*y+Ct*S+en*Y-(Dt*y+tn*S+nn*Y)),n[10]=xt*(qt*y+tn*w+sn*Y-(_t*y+Ct*w+rn*Y)),n[11]=xt*(Kt*y+nn*w+rn*S-(Bt*y+en*w+sn*S)),n[12]=xt*(qt*D+Kt*q+zt*p-(Bt*q+Dt*p+_t*D)),n[13]=xt*(nn*q+Dt*v+tn*D-(Ct*D+en*q+zt*v)),n[14]=xt*(Ct*p+rn*q+_t*v-(sn*q+qt*v+tn*p)),n[15]=xt*(sn*D+Bt*v+en*p-(nn*p+rn*D+Kt*v)),n}function st(t){const i=t[0],n=t[0*4+1],s=t[0*4+2],a=t[0*4+3],v=t[1*4+0],y=t[1*4+1],c=t[1*4+2],l=t[1*4+3],p=t[2*4+0],w=t[2*4+1],g=t[2*4+2],M=t[2*4+3],D=t[3*4+0],S=t[3*4+1],B=t[3*4+2],T=t[3*4+3],q=g*T,Y=B*M,$=c*T,nt=B*l,it=c*M,ct=g*l,ut=s*T,dt=B*a,ht=s*M,pt=g*a,vt=s*l,wt=c*a,yt=q*y+nt*w+it*S-(Y*y+$*w+ct*S),Mt=Y*n+ut*w+pt*S-(q*n+dt*w+ht*S),Dt=$*n+dt*y+vt*S-(nt*n+ut*y+wt*S),zt=ct*n+ht*y+wt*w-(it*n+pt*y+vt*w);return i*yt+v*Mt+p*Dt+D*zt}const _=et;function I(t,i,n){const s=n??new u(16),a=t[0],v=t[1],y=t[2],c=t[3],l=t[4],p=t[5],w=t[6],g=t[7],M=t[8],D=t[9],S=t[10],B=t[11],T=t[12],q=t[13],Y=t[14],$=t[15],nt=i[0],it=i[1],ct=i[2],ut=i[3],dt=i[4],ht=i[5],pt=i[6],vt=i[7],wt=i[8],yt=i[9],Mt=i[10],Dt=i[11],zt=i[12],qt=i[13],_t=i[14],Bt=i[15];return s[0]=a*nt+l*it+M*ct+T*ut,s[1]=v*nt+p*it+D*ct+q*ut,s[2]=y*nt+w*it+S*ct+Y*ut,s[3]=c*nt+g*it+B*ct+$*ut,s[4]=a*dt+l*ht+M*pt+T*vt,s[5]=v*dt+p*ht+D*pt+q*vt,s[6]=y*dt+w*ht+S*pt+Y*vt,s[7]=c*dt+g*ht+B*pt+$*vt,s[8]=a*wt+l*yt+M*Mt+T*Dt,s[9]=v*wt+p*yt+D*Mt+q*Dt,s[10]=y*wt+w*yt+S*Mt+Y*Dt,s[11]=c*wt+g*yt+B*Mt+$*Dt,s[12]=a*zt+l*qt+M*_t+T*Bt,s[13]=v*zt+p*qt+D*_t+q*Bt,s[14]=y*zt+w*qt+S*_t+Y*Bt,s[15]=c*zt+g*qt+B*_t+$*Bt,s}const Z=I;function E(t,i,n){const s=n??H();return t!==s&&(s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[8]=t[8],s[9]=t[9],s[10]=t[10],s[11]=t[11]),s[12]=i[0],s[13]=i[1],s[14]=i[2],s[15]=1,s}function R(t,i){const n=i??x.create();return n[0]=t[12],n[1]=t[13],n[2]=t[14],n}function Q(t,i,n){const s=n??x.create(),a=i*4;return s[0]=t[a+0],s[1]=t[a+1],s[2]=t[a+2],s}function V(t,i,n,s){const a=s===t?s:U(t,s),v=n*4;return a[v+0]=i[0],a[v+1]=i[1],a[v+2]=i[2],a}function j(t,i){const n=i??x.create(),s=t[0],a=t[1],v=t[2],y=t[4],c=t[5],l=t[6],p=t[8],w=t[9],g=t[10];return n[0]=Math.sqrt(s*s+a*a+v*v),n[1]=Math.sqrt(y*y+c*c+l*l),n[2]=Math.sqrt(p*p+w*w+g*g),n}function tt(t,i,n,s,a){const v=a??new u(16),y=Math.tan(Math.PI*.5-.5*t);if(v[0]=y/i,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=y,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,Number.isFinite(s)){const c=1/(n-s);v[10]=s*c,v[14]=s*n*c}else v[10]=-1,v[14]=-n;return v}function ft(t,i,n,s=1/0,a){const v=a??new u(16),y=1/Math.tan(t*.5);if(v[0]=y/i,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=y,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,s===1/0)v[10]=0,v[14]=n;else{const c=1/(s-n);v[10]=n*c,v[14]=s*n*c}return v}function Tt(t,i,n,s,a,v,y){const c=y??new u(16);return c[0]=2/(i-t),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(s-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1/(a-v),c[11]=0,c[12]=(i+t)/(t-i),c[13]=(s+n)/(n-s),c[14]=a/(a-v),c[15]=1,c}function lt(t,i,n,s,a,v,y){const c=y??new u(16),l=i-t,p=s-n,w=a-v;return c[0]=2*a/l,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/p,c[6]=0,c[7]=0,c[8]=(t+i)/l,c[9]=(s+n)/p,c[10]=v/w,c[11]=-1,c[12]=0,c[13]=0,c[14]=a*v/w,c[15]=0,c}function Lt(t,i,n,s,a,v=1/0,y){const c=y??new u(16),l=i-t,p=s-n;if(c[0]=2*a/l,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/p,c[6]=0,c[7]=0,c[8]=(t+i)/l,c[9]=(s+n)/p,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,v===1/0)c[10]=0,c[14]=a;else{const w=1/(v-a);c[10]=a*w,c[14]=v*a*w}return c}const N=x.create(),J=x.create(),O=x.create();function Ft(t,i,n,s){const a=s??new u(16);return x.normalize(x.subtract(i,t,O),O),x.normalize(x.cross(n,O,N),N),x.normalize(x.cross(O,N,J),J),a[0]=N[0],a[1]=N[1],a[2]=N[2],a[3]=0,a[4]=J[0],a[5]=J[1],a[6]=J[2],a[7]=0,a[8]=O[0],a[9]=O[1],a[10]=O[2],a[11]=0,a[12]=t[0],a[13]=t[1],a[14]=t[2],a[15]=1,a}function gt(t,i,n,s){const a=s??new u(16);return x.normalize(x.subtract(t,i,O),O),x.normalize(x.cross(n,O,N),N),x.normalize(x.cross(O,N,J),J),a[0]=N[0],a[1]=N[1],a[2]=N[2],a[3]=0,a[4]=J[0],a[5]=J[1],a[6]=J[2],a[7]=0,a[8]=O[0],a[9]=O[1],a[10]=O[2],a[11]=0,a[12]=t[0],a[13]=t[1],a[14]=t[2],a[15]=1,a}function It(t,i,n,s){const a=s??new u(16);return x.normalize(x.subtract(t,i,O),O),x.normalize(x.cross(n,O,N),N),x.normalize(x.cross(O,N,J),J),a[0]=N[0],a[1]=J[0],a[2]=O[0],a[3]=0,a[4]=N[1],a[5]=J[1],a[6]=O[1],a[7]=0,a[8]=N[2],a[9]=J[2],a[10]=O[2],a[11]=0,a[12]=-(N[0]*t[0]+N[1]*t[1]+N[2]*t[2]),a[13]=-(J[0]*t[0]+J[1]*t[1]+J[2]*t[2]),a[14]=-(O[0]*t[0]+O[1]*t[1]+O[2]*t[2]),a[15]=1,a}function mt(t,i){const n=i??new u(16);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function Et(t,i,n){const s=n??new u(16),a=i[0],v=i[1],y=i[2],c=t[0],l=t[1],p=t[2],w=t[3],g=t[1*4+0],M=t[1*4+1],D=t[1*4+2],S=t[1*4+3],B=t[2*4+0],T=t[2*4+1],q=t[2*4+2],Y=t[2*4+3],$=t[3*4+0],nt=t[3*4+1],it=t[3*4+2],ct=t[3*4+3];return t!==s&&(s[0]=c,s[1]=l,s[2]=p,s[3]=w,s[4]=g,s[5]=M,s[6]=D,s[7]=S,s[8]=B,s[9]=T,s[10]=q,s[11]=Y),s[12]=c*a+g*v+B*y+$,s[13]=l*a+M*v+T*y+nt,s[14]=p*a+D*v+q*y+it,s[15]=w*a+S*v+Y*y+ct,s}function C(t,i){const n=i??new u(16),s=Math.cos(t),a=Math.sin(t);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=a,n[7]=0,n[8]=0,n[9]=-a,n[10]=s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Vt(t,i,n){const s=n??new u(16),a=t[4],v=t[5],y=t[6],c=t[7],l=t[8],p=t[9],w=t[10],g=t[11],M=Math.cos(i),D=Math.sin(i);return s[4]=M*a+D*l,s[5]=M*v+D*p,s[6]=M*y+D*w,s[7]=M*c+D*g,s[8]=M*l-D*a,s[9]=M*p-D*v,s[10]=M*w-D*y,s[11]=M*g-D*c,t!==s&&(s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function Pt(t,i){const n=i??new u(16),s=Math.cos(t),a=Math.sin(t);return n[0]=s,n[1]=0,n[2]=-a,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=a,n[9]=0,n[10]=s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Xt(t,i,n){const s=n??new u(16),a=t[0*4+0],v=t[0*4+1],y=t[0*4+2],c=t[0*4+3],l=t[2*4+0],p=t[2*4+1],w=t[2*4+2],g=t[2*4+3],M=Math.cos(i),D=Math.sin(i);return s[0]=M*a-D*l,s[1]=M*v-D*p,s[2]=M*y-D*w,s[3]=M*c-D*g,s[8]=M*l+D*a,s[9]=M*p+D*v,s[10]=M*w+D*y,s[11]=M*g+D*c,t!==s&&(s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function At(t,i){const n=i??new u(16),s=Math.cos(t),a=Math.sin(t);return n[0]=s,n[1]=a,n[2]=0,n[3]=0,n[4]=-a,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Gt(t,i,n){const s=n??new u(16),a=t[0*4+0],v=t[0*4+1],y=t[0*4+2],c=t[0*4+3],l=t[1*4+0],p=t[1*4+1],w=t[1*4+2],g=t[1*4+3],M=Math.cos(i),D=Math.sin(i);return s[0]=M*a+D*l,s[1]=M*v+D*p,s[2]=M*y+D*w,s[3]=M*c+D*g,s[4]=M*l-D*a,s[5]=M*p-D*v,s[6]=M*w-D*y,s[7]=M*g-D*c,t!==s&&(s[8]=t[8],s[9]=t[9],s[10]=t[10],s[11]=t[11],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function St(t,i,n){const s=n??new u(16);let a=t[0],v=t[1],y=t[2];const c=Math.sqrt(a*a+v*v+y*y);a/=c,v/=c,y/=c;const l=a*a,p=v*v,w=y*y,g=Math.cos(i),M=Math.sin(i),D=1-g;return s[0]=l+(1-l)*g,s[1]=a*v*D+y*M,s[2]=a*y*D-v*M,s[3]=0,s[4]=a*v*D-y*M,s[5]=p+(1-p)*g,s[6]=v*y*D+a*M,s[7]=0,s[8]=a*y*D+v*M,s[9]=v*y*D-a*M,s[10]=w+(1-w)*g,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}const r=St;function d(t,i,n,s){const a=s??new u(16);let v=i[0],y=i[1],c=i[2];const l=Math.sqrt(v*v+y*y+c*c);v/=l,y/=l,c/=l;const p=v*v,w=y*y,g=c*c,M=Math.cos(n),D=Math.sin(n),S=1-M,B=p+(1-p)*M,T=v*y*S+c*D,q=v*c*S-y*D,Y=v*y*S-c*D,$=w+(1-w)*M,nt=y*c*S+v*D,it=v*c*S+y*D,ct=y*c*S-v*D,ut=g+(1-g)*M,dt=t[0],ht=t[1],pt=t[2],vt=t[3],wt=t[4],yt=t[5],Mt=t[6],Dt=t[7],zt=t[8],qt=t[9],_t=t[10],Bt=t[11];return a[0]=B*dt+T*wt+q*zt,a[1]=B*ht+T*yt+q*qt,a[2]=B*pt+T*Mt+q*_t,a[3]=B*vt+T*Dt+q*Bt,a[4]=Y*dt+$*wt+nt*zt,a[5]=Y*ht+$*yt+nt*qt,a[6]=Y*pt+$*Mt+nt*_t,a[7]=Y*vt+$*Dt+nt*Bt,a[8]=it*dt+ct*wt+ut*zt,a[9]=it*ht+ct*yt+ut*qt,a[10]=it*pt+ct*Mt+ut*_t,a[11]=it*vt+ct*Dt+ut*Bt,t!==a&&(a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a}const e=d;function o(t,i){const n=i??new u(16);return n[0]=t[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=t[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=t[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function f(t,i,n){const s=n??new u(16),a=i[0],v=i[1],y=i[2];return s[0]=a*t[0*4+0],s[1]=a*t[0*4+1],s[2]=a*t[0*4+2],s[3]=a*t[0*4+3],s[4]=v*t[1*4+0],s[5]=v*t[1*4+1],s[6]=v*t[1*4+2],s[7]=v*t[1*4+3],s[8]=y*t[2*4+0],s[9]=y*t[2*4+1],s[10]=y*t[2*4+2],s[11]=y*t[2*4+3],t!==s&&(s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function h(t,i){const n=i??new u(16);return n[0]=t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=t,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=t,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function m(t,i,n){const s=n??new u(16);return s[0]=i*t[0*4+0],s[1]=i*t[0*4+1],s[2]=i*t[0*4+2],s[3]=i*t[0*4+3],s[4]=i*t[1*4+0],s[5]=i*t[1*4+1],s[6]=i*t[1*4+2],s[7]=i*t[1*4+3],s[8]=i*t[2*4+0],s[9]=i*t[2*4+1],s[10]=i*t[2*4+2],s[11]=i*t[2*4+3],t!==s&&(s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}return{create:z,set:P,fromMat3:b,fromQuat:A,negate:G,copy:U,clone:W,equalsApproximately:F,equals:L,identity:H,transpose:K,inverse:et,determinant:st,invert:_,multiply:I,mul:Z,setTranslation:E,getTranslation:R,getAxis:Q,setAxis:V,getScaling:j,perspective:tt,perspectiveReverseZ:ft,ortho:Tt,frustum:lt,frustumReverseZ:Lt,aim:Ft,cameraAim:gt,lookAt:It,translation:mt,translate:Et,rotationX:C,rotateX:Vt,rotationY:Pt,rotateY:Xt,rotationZ:At,rotateZ:Gt,axisRotation:St,rotation:r,axisRotate:d,rotate:e,scaling:o,scale:f,uniformScaling:h,uniformScale:m}}const Bn=new Map;function re(u){let x=Bn.get(u);return x||(x=se(u),Bn.set(u,x)),x}function oe(u){const x=pn(u);function z(r,d,e,o){const f=new u(4);return r!==void 0&&(f[0]=r,d!==void 0&&(f[1]=d,e!==void 0&&(f[2]=e,o!==void 0&&(f[3]=o)))),f}const P=z;function b(r,d,e,o,f){const h=f??new u(4);return h[0]=r,h[1]=d,h[2]=e,h[3]=o,h}function A(r,d,e){const o=e??new u(4),f=d*.5,h=Math.sin(f);return o[0]=h*r[0],o[1]=h*r[1],o[2]=h*r[2],o[3]=Math.cos(f),o}function G(r,d){const e=d??x.create(3),o=Math.acos(r[3])*2,f=Math.sin(o*.5);return f>k?(e[0]=r[0]/f,e[1]=r[1]/f,e[2]=r[2]/f):(e[0]=1,e[1]=0,e[2]=0),{angle:o,axis:e}}function U(r,d){const e=lt(r,d);return Math.acos(2*e*e-1)}function W(r,d,e){const o=e??new u(4),f=r[0],h=r[1],m=r[2],t=r[3],i=d[0],n=d[1],s=d[2],a=d[3];return o[0]=f*a+t*i+h*s-m*n,o[1]=h*a+t*n+m*i-f*s,o[2]=m*a+t*s+f*n-h*i,o[3]=t*a-f*i-h*n-m*s,o}const F=W;function L(r,d,e){const o=e??new u(4),f=d*.5,h=r[0],m=r[1],t=r[2],i=r[3],n=Math.sin(f),s=Math.cos(f);return o[0]=h*s+i*n,o[1]=m*s+t*n,o[2]=t*s-m*n,o[3]=i*s-h*n,o}function H(r,d,e){const o=e??new u(4),f=d*.5,h=r[0],m=r[1],t=r[2],i=r[3],n=Math.sin(f),s=Math.cos(f);return o[0]=h*s-t*n,o[1]=m*s+i*n,o[2]=t*s+h*n,o[3]=i*s-m*n,o}function K(r,d,e){const o=e??new u(4),f=d*.5,h=r[0],m=r[1],t=r[2],i=r[3],n=Math.sin(f),s=Math.cos(f);return o[0]=h*s+m*n,o[1]=m*s-h*n,o[2]=t*s+i*n,o[3]=i*s-t*n,o}function et(r,d,e,o){const f=o??new u(4),h=r[0],m=r[1],t=r[2],i=r[3];let n=d[0],s=d[1],a=d[2],v=d[3],y=h*n+m*s+t*a+i*v;y<0&&(y=-y,n=-n,s=-s,a=-a,v=-v);let c,l;if(1-y>k){const p=Math.acos(y),w=Math.sin(p);c=Math.sin((1-e)*p)/w,l=Math.sin(e*p)/w}else c=1-e,l=e;return f[0]=c*h+l*n,f[1]=c*m+l*s,f[2]=c*t+l*a,f[3]=c*i+l*v,f}function st(r,d){const e=d??new u(4),o=r[0],f=r[1],h=r[2],m=r[3],t=o*o+f*f+h*h+m*m,i=t?1/t:0;return e[0]=-o*i,e[1]=-f*i,e[2]=-h*i,e[3]=m*i,e}function _(r,d){const e=d??new u(4);return e[0]=-r[0],e[1]=-r[1],e[2]=-r[2],e[3]=r[3],e}function I(r,d){const e=d??new u(4),o=r[0]+r[5]+r[10];if(o>0){const f=Math.sqrt(o+1);e[3]=.5*f;const h=.5/f;e[0]=(r[6]-r[9])*h,e[1]=(r[8]-r[2])*h,e[2]=(r[1]-r[4])*h}else{let f=0;r[5]>r[0]&&(f=1),r[10]>r[f*4+f]&&(f=2);const h=(f+1)%3,m=(f+2)%3,t=Math.sqrt(r[f*4+f]-r[h*4+h]-r[m*4+m]+1);e[f]=.5*t;const i=.5/t;e[3]=(r[h*4+m]-r[m*4+h])*i,e[h]=(r[h*4+f]+r[f*4+h])*i,e[m]=(r[m*4+f]+r[f*4+m])*i}return e}function Z(r,d,e,o,f){const h=f??new u(4),m=r*.5,t=d*.5,i=e*.5,n=Math.sin(m),s=Math.cos(m),a=Math.sin(t),v=Math.cos(t),y=Math.sin(i),c=Math.cos(i);switch(o){case"xyz":h[0]=n*v*c+s*a*y,h[1]=s*a*c-n*v*y,h[2]=s*v*y+n*a*c,h[3]=s*v*c-n*a*y;break;case"xzy":h[0]=n*v*c-s*a*y,h[1]=s*a*c-n*v*y,h[2]=s*v*y+n*a*c,h[3]=s*v*c+n*a*y;break;case"yxz":h[0]=n*v*c+s*a*y,h[1]=s*a*c-n*v*y,h[2]=s*v*y-n*a*c,h[3]=s*v*c+n*a*y;break;case"yzx":h[0]=n*v*c+s*a*y,h[1]=s*a*c+n*v*y,h[2]=s*v*y-n*a*c,h[3]=s*v*c-n*a*y;break;case"zxy":h[0]=n*v*c-s*a*y,h[1]=s*a*c+n*v*y,h[2]=s*v*y+n*a*c,h[3]=s*v*c-n*a*y;break;case"zyx":h[0]=n*v*c-s*a*y,h[1]=s*a*c+n*v*y,h[2]=s*v*y-n*a*c,h[3]=s*v*c+n*a*y;break;default:throw new Error(`Unknown rotation order: ${o}`)}return h}function E(r,d){const e=d??new u(4);return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e}const R=E;function Q(r,d,e){const o=e??new u(4);return o[0]=r[0]+d[0],o[1]=r[1]+d[1],o[2]=r[2]+d[2],o[3]=r[3]+d[3],o}function V(r,d,e){const o=e??new u(4);return o[0]=r[0]-d[0],o[1]=r[1]-d[1],o[2]=r[2]-d[2],o[3]=r[3]-d[3],o}const j=V;function tt(r,d,e){const o=e??new u(4);return o[0]=r[0]*d,o[1]=r[1]*d,o[2]=r[2]*d,o[3]=r[3]*d,o}const ft=tt;function Tt(r,d,e){const o=e??new u(4);return o[0]=r[0]/d,o[1]=r[1]/d,o[2]=r[2]/d,o[3]=r[3]/d,o}function lt(r,d){return r[0]*d[0]+r[1]*d[1]+r[2]*d[2]+r[3]*d[3]}function Lt(r,d,e,o){const f=o??new u(4);return f[0]=r[0]+e*(d[0]-r[0]),f[1]=r[1]+e*(d[1]-r[1]),f[2]=r[2]+e*(d[2]-r[2]),f[3]=r[3]+e*(d[3]-r[3]),f}function N(r){const d=r[0],e=r[1],o=r[2],f=r[3];return Math.sqrt(d*d+e*e+o*o+f*f)}const J=N;function O(r){const d=r[0],e=r[1],o=r[2],f=r[3];return d*d+e*e+o*o+f*f}const Ft=O;function gt(r,d){const e=d??new u(4),o=r[0],f=r[1],h=r[2],m=r[3],t=Math.sqrt(o*o+f*f+h*h+m*m);return t>1e-5?(e[0]=o/t,e[1]=f/t,e[2]=h/t,e[3]=m/t):(e[0]=0,e[1]=0,e[2]=0,e[3]=1),e}function It(r,d){return Math.abs(r[0]-d[0])<k&&Math.abs(r[1]-d[1])<k&&Math.abs(r[2]-d[2])<k&&Math.abs(r[3]-d[3])<k}function mt(r,d){return r[0]===d[0]&&r[1]===d[1]&&r[2]===d[2]&&r[3]===d[3]}function Et(r){const d=r??new u(4);return d[0]=0,d[1]=0,d[2]=0,d[3]=1,d}const C=x.create(),Vt=x.create(),Pt=x.create();function Xt(r,d,e){const o=e??new u(4),f=x.dot(r,d);return f<-.999999?(x.cross(Vt,r,C),x.len(C)<1e-6&&x.cross(Pt,r,C),x.normalize(C,C),A(C,Math.PI,o),o):f>.999999?(o[0]=0,o[1]=0,o[2]=0,o[3]=1,o):(x.cross(r,d,C),o[0]=C[0],o[1]=C[1],o[2]=C[2],o[3]=1+f,gt(o,o))}const At=new u(4),Gt=new u(4);function St(r,d,e,o,f,h){const m=h??new u(4);return et(r,o,f,At),et(d,e,f,Gt),et(At,Gt,2*f*(1-f),m),m}return{create:z,fromValues:P,set:b,fromAxisAngle:A,toAxisAngle:G,angle:U,multiply:W,mul:F,rotateX:L,rotateY:H,rotateZ:K,slerp:et,inverse:st,conjugate:_,fromMat:I,fromEuler:Z,copy:E,clone:R,add:Q,subtract:V,sub:j,mulScalar:tt,scale:ft,divScalar:Tt,dot:lt,lerp:Lt,length:N,len:J,lengthSq:O,lenSq:Ft,normalize:gt,equalsApproximately:It,equals:mt,identity:Et,rotationTo:Xt,sqlerp:St}}const Ln=new Map;function ie(u){let x=Ln.get(u);return x||(x=oe(u),Ln.set(u,x)),x}function ce(u){function x(e,o,f,h){const m=new u(4);return e!==void 0&&(m[0]=e,o!==void 0&&(m[1]=o,f!==void 0&&(m[2]=f,h!==void 0&&(m[3]=h)))),m}const z=x;function P(e,o,f,h,m){const t=m??new u(4);return t[0]=e,t[1]=o,t[2]=f,t[3]=h,t}function b(e,o){const f=o??new u(4);return f[0]=Math.ceil(e[0]),f[1]=Math.ceil(e[1]),f[2]=Math.ceil(e[2]),f[3]=Math.ceil(e[3]),f}function A(e,o){const f=o??new u(4);return f[0]=Math.floor(e[0]),f[1]=Math.floor(e[1]),f[2]=Math.floor(e[2]),f[3]=Math.floor(e[3]),f}function G(e,o){const f=o??new u(4);return f[0]=Math.round(e[0]),f[1]=Math.round(e[1]),f[2]=Math.round(e[2]),f[3]=Math.round(e[3]),f}function U(e,o=0,f=1,h){const m=h??new u(4);return m[0]=Math.min(f,Math.max(o,e[0])),m[1]=Math.min(f,Math.max(o,e[1])),m[2]=Math.min(f,Math.max(o,e[2])),m[3]=Math.min(f,Math.max(o,e[3])),m}function W(e,o,f){const h=f??new u(4);return h[0]=e[0]+o[0],h[1]=e[1]+o[1],h[2]=e[2]+o[2],h[3]=e[3]+o[3],h}function F(e,o,f,h){const m=h??new u(4);return m[0]=e[0]+o[0]*f,m[1]=e[1]+o[1]*f,m[2]=e[2]+o[2]*f,m[3]=e[3]+o[3]*f,m}function L(e,o,f){const h=f??new u(4);return h[0]=e[0]-o[0],h[1]=e[1]-o[1],h[2]=e[2]-o[2],h[3]=e[3]-o[3],h}const H=L;function K(e,o){return Math.abs(e[0]-o[0])<k&&Math.abs(e[1]-o[1])<k&&Math.abs(e[2]-o[2])<k&&Math.abs(e[3]-o[3])<k}function et(e,o){return e[0]===o[0]&&e[1]===o[1]&&e[2]===o[2]&&e[3]===o[3]}function st(e,o,f,h){const m=h??new u(4);return m[0]=e[0]+f*(o[0]-e[0]),m[1]=e[1]+f*(o[1]-e[1]),m[2]=e[2]+f*(o[2]-e[2]),m[3]=e[3]+f*(o[3]-e[3]),m}function _(e,o,f,h){const m=h??new u(4);return m[0]=e[0]+f[0]*(o[0]-e[0]),m[1]=e[1]+f[1]*(o[1]-e[1]),m[2]=e[2]+f[2]*(o[2]-e[2]),m[3]=e[3]+f[3]*(o[3]-e[3]),m}function I(e,o,f){const h=f??new u(4);return h[0]=Math.max(e[0],o[0]),h[1]=Math.max(e[1],o[1]),h[2]=Math.max(e[2],o[2]),h[3]=Math.max(e[3],o[3]),h}function Z(e,o,f){const h=f??new u(4);return h[0]=Math.min(e[0],o[0]),h[1]=Math.min(e[1],o[1]),h[2]=Math.min(e[2],o[2]),h[3]=Math.min(e[3],o[3]),h}function E(e,o,f){const h=f??new u(4);return h[0]=e[0]*o,h[1]=e[1]*o,h[2]=e[2]*o,h[3]=e[3]*o,h}const R=E;function Q(e,o,f){const h=f??new u(4);return h[0]=e[0]/o,h[1]=e[1]/o,h[2]=e[2]/o,h[3]=e[3]/o,h}function V(e,o){const f=o??new u(4);return f[0]=1/e[0],f[1]=1/e[1],f[2]=1/e[2],f[3]=1/e[3],f}const j=V;function tt(e,o){return e[0]*o[0]+e[1]*o[1]+e[2]*o[2]+e[3]*o[3]}function ft(e){const o=e[0],f=e[1],h=e[2],m=e[3];return Math.sqrt(o*o+f*f+h*h+m*m)}const Tt=ft;function lt(e){const o=e[0],f=e[1],h=e[2],m=e[3];return o*o+f*f+h*h+m*m}const Lt=lt;function N(e,o){const f=e[0]-o[0],h=e[1]-o[1],m=e[2]-o[2],t=e[3]-o[3];return Math.sqrt(f*f+h*h+m*m+t*t)}const J=N;function O(e,o){const f=e[0]-o[0],h=e[1]-o[1],m=e[2]-o[2],t=e[3]-o[3];return f*f+h*h+m*m+t*t}const Ft=O;function gt(e,o){const f=o??new u(4),h=e[0],m=e[1],t=e[2],i=e[3],n=Math.sqrt(h*h+m*m+t*t+i*i);return n>1e-5?(f[0]=h/n,f[1]=m/n,f[2]=t/n,f[3]=i/n):(f[0]=0,f[1]=0,f[2]=0,f[3]=0),f}function It(e,o){const f=o??new u(4);return f[0]=-e[0],f[1]=-e[1],f[2]=-e[2],f[3]=-e[3],f}function mt(e,o){const f=o??new u(4);return f[0]=e[0],f[1]=e[1],f[2]=e[2],f[3]=e[3],f}const Et=mt;function C(e,o,f){const h=f??new u(4);return h[0]=e[0]*o[0],h[1]=e[1]*o[1],h[2]=e[2]*o[2],h[3]=e[3]*o[3],h}const Vt=C;function Pt(e,o,f){const h=f??new u(4);return h[0]=e[0]/o[0],h[1]=e[1]/o[1],h[2]=e[2]/o[2],h[3]=e[3]/o[3],h}const Xt=Pt;function At(e){const o=e??new u(4);return o[0]=0,o[1]=0,o[2]=0,o[3]=0,o}function Gt(e,o,f){const h=f??new u(4),m=e[0],t=e[1],i=e[2],n=e[3];return h[0]=o[0]*m+o[4]*t+o[8]*i+o[12]*n,h[1]=o[1]*m+o[5]*t+o[9]*i+o[13]*n,h[2]=o[2]*m+o[6]*t+o[10]*i+o[14]*n,h[3]=o[3]*m+o[7]*t+o[11]*i+o[15]*n,h}function St(e,o,f){const h=f??new u(4);return gt(e,h),E(h,o,h)}function r(e,o,f){const h=f??new u(4);return ft(e)>o?St(e,o,h):mt(e,h)}function d(e,o,f){const h=f??new u(4);return st(e,o,.5,h)}return{create:x,fromValues:z,set:P,ceil:b,floor:A,round:G,clamp:U,add:W,addScaled:F,subtract:L,sub:H,equalsApproximately:K,equals:et,lerp:st,lerpV:_,max:I,min:Z,mulScalar:E,scale:R,divScalar:Q,inverse:V,invert:j,dot:tt,length:ft,len:Tt,lengthSq:lt,lenSq:Lt,distance:N,dist:J,distanceSq:O,distSq:Ft,normalize:gt,negate:It,copy:mt,clone:Et,multiply:C,mul:Vt,divide:Pt,div:Xt,zero:At,transformMat4:Gt,setLength:St,truncate:r,midpoint:d}}const Gn=new Map;function ae(u){let x=Gn.get(u);return x||(x=ce(u),Gn.set(u,x)),x}function Mn(u,x,z,P,b,A){return{mat3:ee(u),mat4:re(x),quat:ie(z),vec2:Fn(P),vec3:pn(b),vec4:ae(A)}}const{mat3:ye,mat4:on,quat:Me,vec2:De,vec3:ze,vec4:be}=Mn(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Mn(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Mn(Kn,Array,Array,Array,Array,Array);var le=`struct Camera { texel:vec2f, diameter:f32, pad:f32, invProjection:mat4x4f, projection:mat4x4f, view:mat4x4f, invView:mat4x4f }
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
}`,ue=`struct Camera { texel:vec2f, diameter:f32, pad:f32, invProjection:mat4x4f, projection:mat4x4f, view:mat4x4f, invView:mat4x4f }
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
}`,fe=`struct Camera { texel:vec2f, diameter:f32, pad:f32, invProjection:mat4x4f, projection:mat4x4f, view:mat4x4f, invView:mat4x4f }
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
}`,de=`struct Camera { texel:vec2f, diameter:f32, pad:f32, invProjection:mat4x4f, projection:mat4x4f, view:mat4x4f, invView:mat4x4f }
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
}`,he=`@group(0) @binding(1) var depthTexture: texture_2d<f32>;\r
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
}`,pe=`struct VertexOutput {\r
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
}`;class ve{constructor(x,z,P,b,A,G,U){X(this,"uniform");X(this,"data",new Float32Array(68));X(this,"textures",[]);X(this,"buffers",[]);X(this,"background");X(this,"mesh");X(this,"water");X(this,"particles");X(this,"thickness");X(this,"filter");X(this,"bgGroup");X(this,"meshGroup");X(this,"waterGroup");X(this,"particleGroup");X(this,"thicknessGroup");X(this,"filterGroups");X(this,"color");X(this,"worldDepth");X(this,"depthTest");X(this,"fluidDepth");X(this,"tempDepth");X(this,"fluidTest");X(this,"thicknessView");X(this,"vertex");X(this,"vertexCount");this.device=x,this.canvas=z;const W=(V,j)=>{const tt=x.createBuffer({size:V,usage:j|GPUBufferUsage.COPY_DST});return this.buffers.push(tt),tt};this.uniform=W(272,GPUBufferUsage.UNIFORM),this.vertex=W(U.byteLength,GPUBufferUsage.VERTEX),x.queue.writeBuffer(this.vertex,0,U),this.vertexCount=U.length/8;const F=V=>{const j=x.createTexture({size:[z.width,z.height],format:V,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING});return this.textures.push(j),j.createView()};this.color=F(P),this.worldDepth=F("r32float"),this.depthTest=F("depth32float"),this.fluidDepth=F("r32float"),this.tempDepth=F("r32float"),this.fluidTest=F("depth32float"),this.thicknessView=F("r16float");const L=(V,j)=>x.createShaderModule({label:V,code:j}),H=L("3D stone basin and garden",le),K=L("Blender bamboo material",cn+ue),et=L("Water refraction and scene-depth occlusion",fe),st=L("Splash ellipsoid surface",de),_=[{format:P},{format:"r32float"}],I={format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"};this.background=x.createRenderPipeline({layout:"auto",vertex:{module:H},fragment:{module:H,targets:_},depthStencil:I}),this.mesh=x.createRenderPipeline({layout:"auto",vertex:{module:K,buffers:[{arrayStride:32,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"},{shaderLocation:2,offset:24,format:"float32"}]}]},fragment:{module:K,targets:_},depthStencil:I}),this.water=x.createRenderPipeline({layout:"auto",vertex:{module:et},fragment:{module:et,targets:[{format:P}]}}),this.particles=x.createRenderPipeline({layout:"auto",vertex:{module:st,entryPoint:"vs"},fragment:{module:st,entryPoint:"depth",targets:[{format:"r32float"}]},depthStencil:I}),this.thickness=x.createRenderPipeline({layout:"auto",vertex:{module:st,entryPoint:"vs"},fragment:{module:st,entryPoint:"thickness",targets:[{format:"r16float",blend:{color:{srcFactor:"one",dstFactor:"one",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one",operation:"add"}}}]}}),this.filter=x.createRenderPipeline({layout:"auto",vertex:{module:L("Full screen",pe),constants:{screenWidth:z.width,screenHeight:z.height}},fragment:{module:L("Splash narrow-range surface filter",he),constants:{maxFilterSize:8,projectedParticleConstant:z.height*.36,blur2D:0},targets:[{format:"r32float"}]}});const Z=x.createSampler({magFilter:"linear",minFilter:"linear"}),E=G.createView(),R=V=>({buffer:V}),Q=(V,j)=>x.createBindGroup({layout:V.getBindGroupLayout(0),entries:j});this.bgGroup=Q(this.background,[{binding:0,resource:R(this.uniform)},{binding:1,resource:E},{binding:2,resource:Z}]),this.meshGroup=Q(this.mesh,[{binding:0,resource:R(this.uniform)},{binding:1,resource:R(A)},{binding:2,resource:E},{binding:3,resource:Z}]),this.waterGroup=Q(this.water,[{binding:0,resource:R(this.uniform)},{binding:1,resource:this.fluidDepth},{binding:2,resource:this.thicknessView},{binding:3,resource:this.color},{binding:4,resource:this.worldDepth},{binding:5,resource:E},{binding:6,resource:Z}]),this.particleGroup=Q(this.particles,[{binding:0,resource:R(b)},{binding:1,resource:R(this.uniform)}]),this.thicknessGroup=Q(this.thickness,[{binding:0,resource:R(b)},{binding:1,resource:R(this.uniform)}]),this.filterGroups=[[1,0],[0,1]].map((V,j)=>{const tt=W(8,GPUBufferUsage.UNIFORM);return x.queue.writeBuffer(tt,0,new Float32Array(V)),Q(this.filter,[{binding:1,resource:j?this.tempDepth:this.fluidDepth},{binding:2,resource:R(tt)}])})}camera(x,z){const P=this.canvas.clientWidth/this.canvas.clientHeight,b=[35,25,18],A=P<.85?96:82,G=[b[0]+Math.sin(x)*Math.cos(z)*A,b[1]+Math.sin(z)*A,b[2]+Math.cos(x)*Math.cos(z)*A],U=on.perspective(.7,P,.3,220),W=on.lookAt(G,b,[0,1,0]);this.data.set([1/this.canvas.width,1/this.canvas.height,1.05,0],0),this.data.set(on.inverse(U),4),this.data.set(U,20),this.data.set(W,36),this.data.set(on.inverse(W),52),this.device.queue.writeBuffer(this.uniform,0,this.data)}draw(x,z,P){const b=(L,H=0)=>({view:L,clearValue:{r:H,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}),A=L=>({view:L,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}),G=x.beginRenderPass({colorAttachments:[b(this.color),b(this.worldDepth,1e6)],depthStencilAttachment:A(this.depthTest)});G.setPipeline(this.background),G.setBindGroup(0,this.bgGroup),G.draw(3),G.setPipeline(this.mesh),G.setBindGroup(0,this.meshGroup),G.setVertexBuffer(0,this.vertex),G.draw(this.vertexCount),G.end();const U=x.beginRenderPass({colorAttachments:[b(this.fluidDepth,1e6)],depthStencilAttachment:A(this.fluidTest)});U.setPipeline(this.particles),U.setBindGroup(0,this.particleGroup),U.draw(6,P),U.end();for(let L=0;L<4;L++)for(let H=0;H<2;H++){const K=x.beginRenderPass({colorAttachments:[b(H?this.fluidDepth:this.tempDepth,1e6)]});K.setPipeline(this.filter),K.setBindGroup(0,this.filterGroups[H]),K.draw(6),K.end()}const W=x.beginRenderPass({colorAttachments:[b(this.thicknessView)]});W.setPipeline(this.thickness),W.setBindGroup(0,this.thicknessGroup),W.draw(6,P),W.end();const F=x.beginRenderPass({colorAttachments:[b(z)]});F.setPipeline(this.water),F.setBindGroup(0,this.waterGroup),F.draw(3),F.end()}destroy(){this.textures.forEach(x=>x.destroy()),this.buffers.forEach(x=>x.destroy())}}const rt=document.querySelector("#scene"),Dn=document.querySelector("#height"),Nt=document.querySelector("#interaction"),ln=document.querySelector("#pause"),In=document.querySelector("#reset"),En=document.querySelector("#status"),vn=document.querySelector("#message"),zn=[Dn,Nt,ln,In];zn.forEach(u=>u.disabled=!0);const bt=new ShishiMechanism;let Ut=!1,ot,at,Ot,$t,Ht,jt=0,wn=!1,xn=!1,Wt=matchMedia("(prefers-reduced-motion: reduce)").matches,un=-.82,Zt=.37,Yt=bt.rest,Qt=0,Jt=0,gn=0,fn=0,dn=0,mn=0,kt=null;const Vn=()=>{ln.textContent=Wt?"Play":"Pause",ln.setAttribute("aria-pressed",String(Wt))};Vn();function Xn(){Ot==null||Ot.destroy(),at==null||at.destroy(),Ht==null||Ht.destroy(),$t==null||$t.destroy(),ot==null||ot.destroy()}function hn(u){Ut||(Ut=!0,cancelAnimationFrame(jt),jt=0,vn.hidden=!1,vn.textContent="The 3D scene could not start. "+(u instanceof Error?u.message:String(u)),En.textContent="Unavailable",rt.dataset.state="error",zn.forEach(x=>x.disabled=!0),console.error(u),Xn())}function Rt(){xn=!0,!jt&&!wn&&!Ut&&!document.hidden&&(jt=requestAnimationFrame(xe))}Dn.addEventListener("input",Rt);Nt.addEventListener("change",()=>{rt.classList.toggle("orbit",Nt.value!=="tilt"),kt=null,Rt()});ln.addEventListener("click",()=>{Wt=!Wt,Jt=0,Qt=0,Vn(),Rt()});In.addEventListener("click",()=>{mn++,at==null||at.reset(),bt.reset(),Yt=bt.rest,fn=dn=Jt=0,gn=0,Rt()});rt.addEventListener("pointerdown",u=>{kt={id:u.pointerId,x:u.clientX,y:u.clientY,start:Yt},rt.setPointerCapture(u.pointerId)});rt.addEventListener("pointermove",u=>{!kt||u.pointerId!==kt.id||(Nt.value==="tilt"?(Yt=Math.max(bt.rest,Math.min(bt.limit,kt.start+(u.clientY-kt.y)*.004)),bt.angle=Yt,bt.velocity=0):(un-=(u.clientX-kt.x)*.006,Zt=Math.max(.1,Math.min(1.15,Zt+(u.clientY-kt.y)*.005)),kt.x=u.clientX,kt.y=u.clientY),Rt())});for(const u of["pointerup","pointercancel","lostpointercapture"])rt.addEventListener(u,()=>{kt=null});rt.addEventListener("keydown",u=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home"].includes(u.key)&&(u.preventDefault(),u.key==="Home"?(un=-.82,Zt=.37):u.key==="ArrowLeft"||u.key==="ArrowRight"?un+=u.key==="ArrowLeft"?-.08:.08:Nt.value==="tilt"?(Yt=Math.max(bt.rest,Math.min(bt.limit,Yt+(u.key==="ArrowUp"?-.04:.04))),bt.angle=Yt,bt.velocity=0):Zt=Math.max(.1,Math.min(1.15,Zt+(u.key==="ArrowUp"?.04:-.04))),Rt())});document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(jt),jt=0,Qt=0,Jt=0):Rt()});window.addEventListener("resize",()=>{Qt=0,Rt()});window.addEventListener("pagehide",()=>{Ut=!0,cancelAnimationFrame(jt),Xn()},{once:!0});let an,yn,kn;function Un(){const u=Math.min(devicePixelRatio||1,1.25,1e3/Math.max(rt.clientWidth,rt.clientHeight)),x=Math.max(2,Math.floor(rt.clientWidth*u/2)*2),z=Math.max(2,Math.floor(rt.clientHeight*u/2)*2);rt.width===x&&rt.height===z&&Ot||(Ot==null||Ot.destroy(),rt.width=x,rt.height=z,Ot=new ve(ot,rt,yn,at.positions,at.bamboo,$t,kn))}async function we(){if(Ut||!ot||!at||!Ht)return;const u=mn,x=Yt,z=ot.createCommandEncoder();z.copyBufferToBuffer(at.particles,0,Ht,0,Ht.size),ot.queue.submit([z.finish()]),await Ht.mapAsync(GPUMapMode.READ);try{if(Ut||u!==mn)return;const P=new Float32Array(Ht.getMappedRange());let b=0,A=0,G=0,U=0,W=0;for(let F=0;F<at.count;F++){const L=[P[F*20],P[F*20+1],P[F*20+2]];if(!L.every(Number.isFinite)){U++;continue}const H=BambooGeometry.toLocal(L,x);H[0]>.85*H[1]&&H[0]<17.6&&Math.hypot(H[1],H[2])<4.12?(b++,W+=BambooGeometry.pivot[0]-L[0]):L[1]>14?A++:G++}if(fn=b,dn=W,rt.dataset.liquid=JSON.stringify({inside:b,falling:A,pool:G,invalid:U,total:at.count}),U)throw new Error("The water simulation became unstable. Reload to reset it.")}finally{Ht.unmap()}}async function xe(u){if(jt=0,!(Ut||document.hidden||!ot||!at)){wn=!0,xn=!1;try{Un();const x=Qt?Math.min((u-Qt)/1e3,1/20):1/60;Qt=u,Jt+=Wt?0:x*120;const z=Math.min(6,Math.floor(Jt));Jt-=z,Nt.value!=="tilt"&&(Yt=bt.step(z/120,fn,dn)),at.update(Yt,z,Number(Dn.value)*.0026),Ot.camera(un,Zt);const P=ot.createCommandEncoder();if(at.execute(P,z),Ot.draw(P,an.getCurrentTexture().createView(),at.count),ot.queue.submit([P.finish()]),await ot.queue.onSubmittedWorkDone(),Ut)return;vn.hidden=!0,rt.dataset.state="ready",zn.forEach(A=>A.disabled=!1),u-gn>100&&(gn=u,await we());const b=Nt.value==="tilt"?"Manual":bt.phase;En.textContent=Wt?"Paused":`${b} · ${bt.cycles} cycles`,rt.dataset.mechanism=JSON.stringify({angle:Yt,phase:b,cycles:bt.cycles,waterCount:fn,waterMoment:dn})}catch(x){hn(x)}finally{wn=!1}(xn||!Wt)&&Rt()}}async function ge(){if(!navigator.gpu)throw new Error("WebGPU is required. Please use a compatible Chrome or Edge browser.");const u=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!u)throw new Error("No compatible graphics adapter is available.");if(ot=await u.requestDevice(),Ut){ot.destroy();return}if(ot.addEventListener("uncapturederror",b=>hn(new Error(b.error.message))),ot.lost.then(b=>{Ut||hn(new Error("Graphics device disconnected: "+b.message))}),an=rt.getContext("webgpu"),!an)throw new Error("Cannot create a WebGPU canvas.");yn=navigator.gpu.getPreferredCanvasFormat(),an.configure({device:ot,format:yn,alphaMode:"opaque"});const[x,z]=await Promise.all([fetch("./bamboo-mesh.json"),fetch("../bamboo/assets/garden.png")]);if(!x.ok||!z.ok)throw new Error("A scene asset failed to load. Reload to try again.");kn=new Float32Array(await x.json());const P=await createImageBitmap(await z.blob());if(Ut){P.close();return}$t=ot.createTexture({size:[P.width,P.height],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),ot.queue.copyExternalImageToTexture({source:P},{texture:$t},[P.width,P.height]),P.close(),at=new Qn(ot),Ht=ot.createBuffer({size:at.count*80,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),Un(),Rt()}ge().catch(hn);
