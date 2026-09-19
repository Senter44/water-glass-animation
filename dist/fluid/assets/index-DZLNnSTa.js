var an=Object.defineProperty;var un=(d,v,z)=>v in d?an(d,v,{enumerable:!0,configurable:!0,writable:!0,value:z}):d[v]=z;var b=(d,v,z)=>un(d,typeof v!="symbol"?v+"":v,z);(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const G of document.querySelectorAll('link[rel="modulepreload"]'))S(G);new MutationObserver(G=>{for(const M of G)if(M.type==="childList")for(const I of M.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&S(I)}).observe(document,{childList:!0,subtree:!0});function z(G){const M={};return G.integrity&&(M.integrity=G.integrity),G.referrerPolicy&&(M.referrerPolicy=G.referrerPolicy),G.crossOrigin==="use-credentials"?M.credentials="include":G.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function S(G){if(G.ep)return;G.ep=!0;const M=z(G);fetch(G.href,M)}})();function ln(d,v){return class extends d{constructor(...z){super(...z),v(this)}}}const dn=ln(Array,d=>d.fill(0));let Y=1e-6;function fn(d){function v(e=0,o=0){const n=new d(2);return e!==void 0&&(n[0]=e,o!==void 0&&(n[1]=o)),n}const z=v;function S(e,o,n){const i=n??new d(2);return i[0]=e,i[1]=o,i}function G(e,o){const n=o??new d(2);return n[0]=Math.ceil(e[0]),n[1]=Math.ceil(e[1]),n}function M(e,o){const n=o??new d(2);return n[0]=Math.floor(e[0]),n[1]=Math.floor(e[1]),n}function I(e,o){const n=o??new d(2);return n[0]=Math.round(e[0]),n[1]=Math.round(e[1]),n}function U(e,o=0,n=1,i){const a=i??new d(2);return a[0]=Math.min(n,Math.max(o,e[0])),a[1]=Math.min(n,Math.max(o,e[1])),a}function T(e,o,n){const i=n??new d(2);return i[0]=e[0]+o[0],i[1]=e[1]+o[1],i}function B(e,o,n,i){const a=i??new d(2);return a[0]=e[0]+o[0]*n,a[1]=e[1]+o[1]*n,a}function H(e,o){const n=e[0],i=e[1],a=o[0],g=o[1],y=Math.sqrt(n*n+i*i),c=Math.sqrt(a*a+g*g),u=y*c,h=u&&N(e,o)/u;return Math.acos(h)}function k(e,o,n){const i=n??new d(2);return i[0]=e[0]-o[0],i[1]=e[1]-o[1],i}const K=k;function ee(e,o){return Math.abs(e[0]-o[0])<Y&&Math.abs(e[1]-o[1])<Y}function ie(e,o){return e[0]===o[0]&&e[1]===o[1]}function re(e,o,n,i){const a=i??new d(2);return a[0]=e[0]+n*(o[0]-e[0]),a[1]=e[1]+n*(o[1]-e[1]),a}function ue(e,o,n,i){const a=i??new d(2);return a[0]=e[0]+n[0]*(o[0]-e[0]),a[1]=e[1]+n[1]*(o[1]-e[1]),a}function $(e,o,n){const i=n??new d(2);return i[0]=Math.max(e[0],o[0]),i[1]=Math.max(e[1],o[1]),i}function W(e,o,n){const i=n??new d(2);return i[0]=Math.min(e[0],o[0]),i[1]=Math.min(e[1],o[1]),i}function L(e,o,n){const i=n??new d(2);return i[0]=e[0]*o,i[1]=e[1]*o,i}const Z=L;function Q(e,o,n){const i=n??new d(2);return i[0]=e[0]/o,i[1]=e[1]/o,i}function ne(e,o){const n=o??new d(2);return n[0]=1/e[0],n[1]=1/e[1],n}const J=ne;function X(e,o,n){const i=n??new d(3),a=e[0]*o[1]-e[1]*o[0];return i[0]=0,i[1]=0,i[2]=a,i}function N(e,o){return e[0]*o[0]+e[1]*o[1]}function te(e){const o=e[0],n=e[1];return Math.sqrt(o*o+n*n)}const ve=te;function E(e){const o=e[0],n=e[1];return o*o+n*n}const j=E;function R(e,o){const n=e[0]-o[0],i=e[1]-o[1];return Math.sqrt(n*n+i*i)}const me=R;function fe(e,o){const n=e[0]-o[0],i=e[1]-o[1];return n*n+i*i}const ye=fe;function ce(e,o){const n=o??new d(2),i=e[0],a=e[1],g=Math.sqrt(i*i+a*a);return g>1e-5?(n[0]=i/g,n[1]=a/g):(n[0]=0,n[1]=0),n}function Te(e,o){const n=o??new d(2);return n[0]=-e[0],n[1]=-e[1],n}function C(e,o){const n=o??new d(2);return n[0]=e[0],n[1]=e[1],n}const ge=C;function se(e,o,n){const i=n??new d(2);return i[0]=e[0]*o[0],i[1]=e[1]*o[1],i}const xe=se;function ae(e,o,n){const i=n??new d(2);return i[0]=e[0]/o[0],i[1]=e[1]/o[1],i}const le=ae;function de(e=1,o){const n=o??new d(2),i=Math.random()*2*Math.PI;return n[0]=Math.cos(i)*e,n[1]=Math.sin(i)*e,n}function r(e){const o=e??new d(2);return o[0]=0,o[1]=0,o}function p(e,o,n){const i=n??new d(2),a=e[0],g=e[1];return i[0]=a*o[0]+g*o[4]+o[12],i[1]=a*o[1]+g*o[5]+o[13],i}function t(e,o,n){const i=n??new d(2),a=e[0],g=e[1];return i[0]=o[0]*a+o[4]*g+o[8],i[1]=o[1]*a+o[5]*g+o[9],i}function s(e,o,n,i){const a=i??new d(2),g=e[0]-o[0],y=e[1]-o[1],c=Math.sin(n),u=Math.cos(n);return a[0]=g*u-y*c+o[0],a[1]=g*c+y*u+o[1],a}function l(e,o,n){const i=n??new d(2);return ce(e,i),L(i,o,i)}function f(e,o,n){const i=n??new d(2);return te(e)>o?l(e,o,i):C(e,i)}function w(e,o,n){const i=n??new d(2);return re(e,o,.5,i)}return{create:v,fromValues:z,set:S,ceil:G,floor:M,round:I,clamp:U,add:T,addScaled:B,angle:H,subtract:k,sub:K,equalsApproximately:ee,equals:ie,lerp:re,lerpV:ue,max:$,min:W,mulScalar:L,scale:Z,divScalar:Q,inverse:ne,invert:J,cross:X,dot:N,length:te,len:ve,lengthSq:E,lenSq:j,distance:R,dist:me,distanceSq:fe,distSq:ye,normalize:ce,negate:Te,copy:C,clone:ge,multiply:se,mul:xe,divide:ae,div:le,random:de,zero:r,transformMat4:p,transformMat3:t,rotate:s,setLength:l,truncate:f,midpoint:w}}const en=new Map;function cn(d){let v=en.get(d);return v||(v=fn(d),en.set(d,v)),v}function pn(d){function v(c,u,h){const x=new d(3);return c!==void 0&&(x[0]=c,u!==void 0&&(x[1]=u,h!==void 0&&(x[2]=h))),x}const z=v;function S(c,u,h,x){const m=x??new d(3);return m[0]=c,m[1]=u,m[2]=h,m}function G(c,u){const h=u??new d(3);return h[0]=Math.ceil(c[0]),h[1]=Math.ceil(c[1]),h[2]=Math.ceil(c[2]),h}function M(c,u){const h=u??new d(3);return h[0]=Math.floor(c[0]),h[1]=Math.floor(c[1]),h[2]=Math.floor(c[2]),h}function I(c,u){const h=u??new d(3);return h[0]=Math.round(c[0]),h[1]=Math.round(c[1]),h[2]=Math.round(c[2]),h}function U(c,u=0,h=1,x){const m=x??new d(3);return m[0]=Math.min(h,Math.max(u,c[0])),m[1]=Math.min(h,Math.max(u,c[1])),m[2]=Math.min(h,Math.max(u,c[2])),m}function T(c,u,h){const x=h??new d(3);return x[0]=c[0]+u[0],x[1]=c[1]+u[1],x[2]=c[2]+u[2],x}function B(c,u,h,x){const m=x??new d(3);return m[0]=c[0]+u[0]*h,m[1]=c[1]+u[1]*h,m[2]=c[2]+u[2]*h,m}function H(c,u){const h=c[0],x=c[1],m=c[2],P=u[0],D=u[1],_=u[2],A=Math.sqrt(h*h+x*x+m*m),V=Math.sqrt(P*P+D*D+_*_),F=A*V,O=F&&N(c,u)/F;return Math.acos(O)}function k(c,u,h){const x=h??new d(3);return x[0]=c[0]-u[0],x[1]=c[1]-u[1],x[2]=c[2]-u[2],x}const K=k;function ee(c,u){return Math.abs(c[0]-u[0])<Y&&Math.abs(c[1]-u[1])<Y&&Math.abs(c[2]-u[2])<Y}function ie(c,u){return c[0]===u[0]&&c[1]===u[1]&&c[2]===u[2]}function re(c,u,h,x){const m=x??new d(3);return m[0]=c[0]+h*(u[0]-c[0]),m[1]=c[1]+h*(u[1]-c[1]),m[2]=c[2]+h*(u[2]-c[2]),m}function ue(c,u,h,x){const m=x??new d(3);return m[0]=c[0]+h[0]*(u[0]-c[0]),m[1]=c[1]+h[1]*(u[1]-c[1]),m[2]=c[2]+h[2]*(u[2]-c[2]),m}function $(c,u,h){const x=h??new d(3);return x[0]=Math.max(c[0],u[0]),x[1]=Math.max(c[1],u[1]),x[2]=Math.max(c[2],u[2]),x}function W(c,u,h){const x=h??new d(3);return x[0]=Math.min(c[0],u[0]),x[1]=Math.min(c[1],u[1]),x[2]=Math.min(c[2],u[2]),x}function L(c,u,h){const x=h??new d(3);return x[0]=c[0]*u,x[1]=c[1]*u,x[2]=c[2]*u,x}const Z=L;function Q(c,u,h){const x=h??new d(3);return x[0]=c[0]/u,x[1]=c[1]/u,x[2]=c[2]/u,x}function ne(c,u){const h=u??new d(3);return h[0]=1/c[0],h[1]=1/c[1],h[2]=1/c[2],h}const J=ne;function X(c,u,h){const x=h??new d(3),m=c[2]*u[0]-c[0]*u[2],P=c[0]*u[1]-c[1]*u[0];return x[0]=c[1]*u[2]-c[2]*u[1],x[1]=m,x[2]=P,x}function N(c,u){return c[0]*u[0]+c[1]*u[1]+c[2]*u[2]}function te(c){const u=c[0],h=c[1],x=c[2];return Math.sqrt(u*u+h*h+x*x)}const ve=te;function E(c){const u=c[0],h=c[1],x=c[2];return u*u+h*h+x*x}const j=E;function R(c,u){const h=c[0]-u[0],x=c[1]-u[1],m=c[2]-u[2];return Math.sqrt(h*h+x*x+m*m)}const me=R;function fe(c,u){const h=c[0]-u[0],x=c[1]-u[1],m=c[2]-u[2];return h*h+x*x+m*m}const ye=fe;function ce(c,u){const h=u??new d(3),x=c[0],m=c[1],P=c[2],D=Math.sqrt(x*x+m*m+P*P);return D>1e-5?(h[0]=x/D,h[1]=m/D,h[2]=P/D):(h[0]=0,h[1]=0,h[2]=0),h}function Te(c,u){const h=u??new d(3);return h[0]=-c[0],h[1]=-c[1],h[2]=-c[2],h}function C(c,u){const h=u??new d(3);return h[0]=c[0],h[1]=c[1],h[2]=c[2],h}const ge=C;function se(c,u,h){const x=h??new d(3);return x[0]=c[0]*u[0],x[1]=c[1]*u[1],x[2]=c[2]*u[2],x}const xe=se;function ae(c,u,h){const x=h??new d(3);return x[0]=c[0]/u[0],x[1]=c[1]/u[1],x[2]=c[2]/u[2],x}const le=ae;function de(c=1,u){const h=u??new d(3),x=Math.random()*2*Math.PI,m=Math.random()*2-1,P=Math.sqrt(1-m*m)*c;return h[0]=Math.cos(x)*P,h[1]=Math.sin(x)*P,h[2]=m*c,h}function r(c){const u=c??new d(3);return u[0]=0,u[1]=0,u[2]=0,u}function p(c,u,h){const x=h??new d(3),m=c[0],P=c[1],D=c[2],_=u[3]*m+u[7]*P+u[11]*D+u[15]||1;return x[0]=(u[0]*m+u[4]*P+u[8]*D+u[12])/_,x[1]=(u[1]*m+u[5]*P+u[9]*D+u[13])/_,x[2]=(u[2]*m+u[6]*P+u[10]*D+u[14])/_,x}function t(c,u,h){const x=h??new d(3),m=c[0],P=c[1],D=c[2];return x[0]=m*u[0*4+0]+P*u[1*4+0]+D*u[2*4+0],x[1]=m*u[0*4+1]+P*u[1*4+1]+D*u[2*4+1],x[2]=m*u[0*4+2]+P*u[1*4+2]+D*u[2*4+2],x}function s(c,u,h){const x=h??new d(3),m=c[0],P=c[1],D=c[2];return x[0]=m*u[0]+P*u[4]+D*u[8],x[1]=m*u[1]+P*u[5]+D*u[9],x[2]=m*u[2]+P*u[6]+D*u[10],x}function l(c,u,h){const x=h??new d(3),m=u[0],P=u[1],D=u[2],_=u[3]*2,A=c[0],V=c[1],F=c[2],O=P*F-D*V,q=D*A-m*F,oe=m*V-P*A;return x[0]=A+O*_+(P*oe-D*q)*2,x[1]=V+q*_+(D*O-m*oe)*2,x[2]=F+oe*_+(m*q-P*O)*2,x}function f(c,u){const h=u??new d(3);return h[0]=c[12],h[1]=c[13],h[2]=c[14],h}function w(c,u,h){const x=h??new d(3),m=u*4;return x[0]=c[m+0],x[1]=c[m+1],x[2]=c[m+2],x}function e(c,u){const h=u??new d(3),x=c[0],m=c[1],P=c[2],D=c[4],_=c[5],A=c[6],V=c[8],F=c[9],O=c[10];return h[0]=Math.sqrt(x*x+m*m+P*P),h[1]=Math.sqrt(D*D+_*_+A*A),h[2]=Math.sqrt(V*V+F*F+O*O),h}function o(c,u,h,x){const m=x??new d(3),P=[],D=[];return P[0]=c[0]-u[0],P[1]=c[1]-u[1],P[2]=c[2]-u[2],D[0]=P[0],D[1]=P[1]*Math.cos(h)-P[2]*Math.sin(h),D[2]=P[1]*Math.sin(h)+P[2]*Math.cos(h),m[0]=D[0]+u[0],m[1]=D[1]+u[1],m[2]=D[2]+u[2],m}function n(c,u,h,x){const m=x??new d(3),P=[],D=[];return P[0]=c[0]-u[0],P[1]=c[1]-u[1],P[2]=c[2]-u[2],D[0]=P[2]*Math.sin(h)+P[0]*Math.cos(h),D[1]=P[1],D[2]=P[2]*Math.cos(h)-P[0]*Math.sin(h),m[0]=D[0]+u[0],m[1]=D[1]+u[1],m[2]=D[2]+u[2],m}function i(c,u,h,x){const m=x??new d(3),P=[],D=[];return P[0]=c[0]-u[0],P[1]=c[1]-u[1],P[2]=c[2]-u[2],D[0]=P[0]*Math.cos(h)-P[1]*Math.sin(h),D[1]=P[0]*Math.sin(h)+P[1]*Math.cos(h),D[2]=P[2],m[0]=D[0]+u[0],m[1]=D[1]+u[1],m[2]=D[2]+u[2],m}function a(c,u,h){const x=h??new d(3);return ce(c,x),L(x,u,x)}function g(c,u,h){const x=h??new d(3);return te(c)>u?a(c,u,x):C(c,x)}function y(c,u,h){const x=h??new d(3);return re(c,u,.5,x)}return{create:v,fromValues:z,set:S,ceil:G,floor:M,round:I,clamp:U,add:T,addScaled:B,angle:H,subtract:k,sub:K,equalsApproximately:ee,equals:ie,lerp:re,lerpV:ue,max:$,min:W,mulScalar:L,scale:Z,divScalar:Q,inverse:ne,invert:J,cross:X,dot:N,length:te,len:ve,lengthSq:E,lenSq:j,distance:R,dist:me,distanceSq:fe,distSq:ye,normalize:ce,negate:Te,copy:C,clone:ge,multiply:se,mul:xe,divide:ae,div:le,random:de,zero:r,transformMat4:p,transformMat4Upper3x3:t,transformMat3:s,transformQuat:l,getTranslation:f,getAxis:w,getScaling:e,rotateX:o,rotateY:n,rotateZ:i,setLength:a,truncate:g,midpoint:y}}const nn=new Map;function je(d){let v=nn.get(d);return v||(v=pn(d),nn.set(d,v)),v}function hn(d){const v=cn(d),z=je(d);function S(r,p,t,s,l,f,w,e,o){const n=new d(12);return n[3]=0,n[7]=0,n[11]=0,r!==void 0&&(n[0]=r,p!==void 0&&(n[1]=p,t!==void 0&&(n[2]=t,s!==void 0&&(n[4]=s,l!==void 0&&(n[5]=l,f!==void 0&&(n[6]=f,w!==void 0&&(n[8]=w,e!==void 0&&(n[9]=e,o!==void 0&&(n[10]=o))))))))),n}function G(r,p,t,s,l,f,w,e,o,n){const i=n??new d(12);return i[0]=r,i[1]=p,i[2]=t,i[3]=0,i[4]=s,i[5]=l,i[6]=f,i[7]=0,i[8]=w,i[9]=e,i[10]=o,i[11]=0,i}function M(r,p){const t=p??new d(12);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=0,t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=0,t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=0,t}function I(r,p){const t=p??new d(12),s=r[0],l=r[1],f=r[2],w=r[3],e=s+s,o=l+l,n=f+f,i=s*e,a=l*e,g=l*o,y=f*e,c=f*o,u=f*n,h=w*e,x=w*o,m=w*n;return t[0]=1-g-u,t[1]=a+m,t[2]=y-x,t[3]=0,t[4]=a-m,t[5]=1-i-u,t[6]=c+h,t[7]=0,t[8]=y+x,t[9]=c-h,t[10]=1-i-g,t[11]=0,t}function U(r,p){const t=p??new d(12);return t[0]=-r[0],t[1]=-r[1],t[2]=-r[2],t[4]=-r[4],t[5]=-r[5],t[6]=-r[6],t[8]=-r[8],t[9]=-r[9],t[10]=-r[10],t}function T(r,p){const t=p??new d(12);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[8]=r[8],t[9]=r[9],t[10]=r[10],t}const B=T;function H(r,p){return Math.abs(r[0]-p[0])<Y&&Math.abs(r[1]-p[1])<Y&&Math.abs(r[2]-p[2])<Y&&Math.abs(r[4]-p[4])<Y&&Math.abs(r[5]-p[5])<Y&&Math.abs(r[6]-p[6])<Y&&Math.abs(r[8]-p[8])<Y&&Math.abs(r[9]-p[9])<Y&&Math.abs(r[10]-p[10])<Y}function k(r,p){return r[0]===p[0]&&r[1]===p[1]&&r[2]===p[2]&&r[4]===p[4]&&r[5]===p[5]&&r[6]===p[6]&&r[8]===p[8]&&r[9]===p[9]&&r[10]===p[10]}function K(r){const p=r??new d(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function ee(r,p){const t=p??new d(12);if(t===r){let g;return g=r[1],r[1]=r[4],r[4]=g,g=r[2],r[2]=r[8],r[8]=g,g=r[6],r[6]=r[9],r[9]=g,t}const s=r[0*4+0],l=r[0*4+1],f=r[0*4+2],w=r[1*4+0],e=r[1*4+1],o=r[1*4+2],n=r[2*4+0],i=r[2*4+1],a=r[2*4+2];return t[0]=s,t[1]=w,t[2]=n,t[4]=l,t[5]=e,t[6]=i,t[8]=f,t[9]=o,t[10]=a,t}function ie(r,p){const t=p??new d(12),s=r[0*4+0],l=r[0*4+1],f=r[0*4+2],w=r[1*4+0],e=r[1*4+1],o=r[1*4+2],n=r[2*4+0],i=r[2*4+1],a=r[2*4+2],g=a*e-o*i,y=-a*w+o*n,c=i*w-e*n,u=1/(s*g+l*y+f*c);return t[0]=g*u,t[1]=(-a*l+f*i)*u,t[2]=(o*l-f*e)*u,t[4]=y*u,t[5]=(a*s-f*n)*u,t[6]=(-o*s+f*w)*u,t[8]=c*u,t[9]=(-i*s+l*n)*u,t[10]=(e*s-l*w)*u,t}function re(r){const p=r[0],t=r[0*4+1],s=r[0*4+2],l=r[1*4+0],f=r[1*4+1],w=r[1*4+2],e=r[2*4+0],o=r[2*4+1],n=r[2*4+2];return p*(f*n-o*w)-l*(t*n-o*s)+e*(t*w-f*s)}const ue=ie;function $(r,p,t){const s=t??new d(12),l=r[0],f=r[1],w=r[2],e=r[4],o=r[5],n=r[6],i=r[8],a=r[9],g=r[10],y=p[0],c=p[1],u=p[2],h=p[4],x=p[5],m=p[6],P=p[8],D=p[9],_=p[10];return s[0]=l*y+e*c+i*u,s[1]=f*y+o*c+a*u,s[2]=w*y+n*c+g*u,s[4]=l*h+e*x+i*m,s[5]=f*h+o*x+a*m,s[6]=w*h+n*x+g*m,s[8]=l*P+e*D+i*_,s[9]=f*P+o*D+a*_,s[10]=w*P+n*D+g*_,s}const W=$;function L(r,p,t){const s=t??K();return r!==s&&(s[0]=r[0],s[1]=r[1],s[2]=r[2],s[4]=r[4],s[5]=r[5],s[6]=r[6]),s[8]=p[0],s[9]=p[1],s[10]=1,s}function Z(r,p){const t=p??v.create();return t[0]=r[8],t[1]=r[9],t}function Q(r,p,t){const s=t??v.create(),l=p*4;return s[0]=r[l+0],s[1]=r[l+1],s}function ne(r,p,t,s){const l=s===r?r:T(r,s),f=t*4;return l[f+0]=p[0],l[f+1]=p[1],l}function J(r,p){const t=p??v.create(),s=r[0],l=r[1],f=r[4],w=r[5];return t[0]=Math.sqrt(s*s+l*l),t[1]=Math.sqrt(f*f+w*w),t}function X(r,p){const t=p??z.create(),s=r[0],l=r[1],f=r[2],w=r[4],e=r[5],o=r[6],n=r[8],i=r[9],a=r[10];return t[0]=Math.sqrt(s*s+l*l+f*f),t[1]=Math.sqrt(w*w+e*e+o*o),t[2]=Math.sqrt(n*n+i*i+a*a),t}function N(r,p){const t=p??new d(12);return t[0]=1,t[1]=0,t[2]=0,t[4]=0,t[5]=1,t[6]=0,t[8]=r[0],t[9]=r[1],t[10]=1,t}function te(r,p,t){const s=t??new d(12),l=p[0],f=p[1],w=r[0],e=r[1],o=r[2],n=r[1*4+0],i=r[1*4+1],a=r[1*4+2],g=r[2*4+0],y=r[2*4+1],c=r[2*4+2];return r!==s&&(s[0]=w,s[1]=e,s[2]=o,s[4]=n,s[5]=i,s[6]=a),s[8]=w*l+n*f+g,s[9]=e*l+i*f+y,s[10]=o*l+a*f+c,s}function ve(r,p){const t=p??new d(12),s=Math.cos(r),l=Math.sin(r);return t[0]=s,t[1]=l,t[2]=0,t[4]=-l,t[5]=s,t[6]=0,t[8]=0,t[9]=0,t[10]=1,t}function E(r,p,t){const s=t??new d(12),l=r[0*4+0],f=r[0*4+1],w=r[0*4+2],e=r[1*4+0],o=r[1*4+1],n=r[1*4+2],i=Math.cos(p),a=Math.sin(p);return s[0]=i*l+a*e,s[1]=i*f+a*o,s[2]=i*w+a*n,s[4]=i*e-a*l,s[5]=i*o-a*f,s[6]=i*n-a*w,r!==s&&(s[8]=r[8],s[9]=r[9],s[10]=r[10]),s}function j(r,p){const t=p??new d(12),s=Math.cos(r),l=Math.sin(r);return t[0]=1,t[1]=0,t[2]=0,t[4]=0,t[5]=s,t[6]=l,t[8]=0,t[9]=-l,t[10]=s,t}function R(r,p,t){const s=t??new d(12),l=r[4],f=r[5],w=r[6],e=r[8],o=r[9],n=r[10],i=Math.cos(p),a=Math.sin(p);return s[4]=i*l+a*e,s[5]=i*f+a*o,s[6]=i*w+a*n,s[8]=i*e-a*l,s[9]=i*o-a*f,s[10]=i*n-a*w,r!==s&&(s[0]=r[0],s[1]=r[1],s[2]=r[2]),s}function me(r,p){const t=p??new d(12),s=Math.cos(r),l=Math.sin(r);return t[0]=s,t[1]=0,t[2]=-l,t[4]=0,t[5]=1,t[6]=0,t[8]=l,t[9]=0,t[10]=s,t}function fe(r,p,t){const s=t??new d(12),l=r[0*4+0],f=r[0*4+1],w=r[0*4+2],e=r[2*4+0],o=r[2*4+1],n=r[2*4+2],i=Math.cos(p),a=Math.sin(p);return s[0]=i*l-a*e,s[1]=i*f-a*o,s[2]=i*w-a*n,s[8]=i*e+a*l,s[9]=i*o+a*f,s[10]=i*n+a*w,r!==s&&(s[4]=r[4],s[5]=r[5],s[6]=r[6]),s}const ye=ve,ce=E;function Te(r,p){const t=p??new d(12);return t[0]=r[0],t[1]=0,t[2]=0,t[4]=0,t[5]=r[1],t[6]=0,t[8]=0,t[9]=0,t[10]=1,t}function C(r,p,t){const s=t??new d(12),l=p[0],f=p[1];return s[0]=l*r[0*4+0],s[1]=l*r[0*4+1],s[2]=l*r[0*4+2],s[4]=f*r[1*4+0],s[5]=f*r[1*4+1],s[6]=f*r[1*4+2],r!==s&&(s[8]=r[8],s[9]=r[9],s[10]=r[10]),s}function ge(r,p){const t=p??new d(12);return t[0]=r[0],t[1]=0,t[2]=0,t[4]=0,t[5]=r[1],t[6]=0,t[8]=0,t[9]=0,t[10]=r[2],t}function se(r,p,t){const s=t??new d(12),l=p[0],f=p[1],w=p[2];return s[0]=l*r[0*4+0],s[1]=l*r[0*4+1],s[2]=l*r[0*4+2],s[4]=f*r[1*4+0],s[5]=f*r[1*4+1],s[6]=f*r[1*4+2],s[8]=w*r[2*4+0],s[9]=w*r[2*4+1],s[10]=w*r[2*4+2],s}function xe(r,p){const t=p??new d(12);return t[0]=r,t[1]=0,t[2]=0,t[4]=0,t[5]=r,t[6]=0,t[8]=0,t[9]=0,t[10]=1,t}function ae(r,p,t){const s=t??new d(12);return s[0]=p*r[0*4+0],s[1]=p*r[0*4+1],s[2]=p*r[0*4+2],s[4]=p*r[1*4+0],s[5]=p*r[1*4+1],s[6]=p*r[1*4+2],r!==s&&(s[8]=r[8],s[9]=r[9],s[10]=r[10]),s}function le(r,p){const t=p??new d(12);return t[0]=r,t[1]=0,t[2]=0,t[4]=0,t[5]=r,t[6]=0,t[8]=0,t[9]=0,t[10]=r,t}function de(r,p,t){const s=t??new d(12);return s[0]=p*r[0*4+0],s[1]=p*r[0*4+1],s[2]=p*r[0*4+2],s[4]=p*r[1*4+0],s[5]=p*r[1*4+1],s[6]=p*r[1*4+2],s[8]=p*r[2*4+0],s[9]=p*r[2*4+1],s[10]=p*r[2*4+2],s}return{clone:B,create:S,set:G,fromMat4:M,fromQuat:I,negate:U,copy:T,equalsApproximately:H,equals:k,identity:K,transpose:ee,inverse:ie,invert:ue,determinant:re,mul:W,multiply:$,setTranslation:L,getTranslation:Z,getAxis:Q,setAxis:ne,getScaling:J,get3DScaling:X,translation:N,translate:te,rotation:ve,rotate:E,rotationX:j,rotateX:R,rotationY:me,rotateY:fe,rotationZ:ye,rotateZ:ce,scaling:Te,scale:C,uniformScaling:xe,uniformScale:ae,scaling3D:ge,scale3D:se,uniformScaling3D:le,uniformScale3D:de}}const tn=new Map;function gn(d){let v=tn.get(d);return v||(v=hn(d),tn.set(d,v)),v}function xn(d){const v=je(d);function z(e,o,n,i,a,g,y,c,u,h,x,m,P,D,_,A){const V=new d(16);return e!==void 0&&(V[0]=e,o!==void 0&&(V[1]=o,n!==void 0&&(V[2]=n,i!==void 0&&(V[3]=i,a!==void 0&&(V[4]=a,g!==void 0&&(V[5]=g,y!==void 0&&(V[6]=y,c!==void 0&&(V[7]=c,u!==void 0&&(V[8]=u,h!==void 0&&(V[9]=h,x!==void 0&&(V[10]=x,m!==void 0&&(V[11]=m,P!==void 0&&(V[12]=P,D!==void 0&&(V[13]=D,_!==void 0&&(V[14]=_,A!==void 0&&(V[15]=A)))))))))))))))),V}function S(e,o,n,i,a,g,y,c,u,h,x,m,P,D,_,A,V){const F=V??new d(16);return F[0]=e,F[1]=o,F[2]=n,F[3]=i,F[4]=a,F[5]=g,F[6]=y,F[7]=c,F[8]=u,F[9]=h,F[10]=x,F[11]=m,F[12]=P,F[13]=D,F[14]=_,F[15]=A,F}function G(e,o){const n=o??new d(16);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=0,n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=0,n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function M(e,o){const n=o??new d(16),i=e[0],a=e[1],g=e[2],y=e[3],c=i+i,u=a+a,h=g+g,x=i*c,m=a*c,P=a*u,D=g*c,_=g*u,A=g*h,V=y*c,F=y*u,O=y*h;return n[0]=1-P-A,n[1]=m+O,n[2]=D-F,n[3]=0,n[4]=m-O,n[5]=1-x-A,n[6]=_+V,n[7]=0,n[8]=D+F,n[9]=_-V,n[10]=1-x-P,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function I(e,o){const n=o??new d(16);return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=-e[3],n[4]=-e[4],n[5]=-e[5],n[6]=-e[6],n[7]=-e[7],n[8]=-e[8],n[9]=-e[9],n[10]=-e[10],n[11]=-e[11],n[12]=-e[12],n[13]=-e[13],n[14]=-e[14],n[15]=-e[15],n}function U(e,o){const n=o??new d(16);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}const T=U;function B(e,o){return Math.abs(e[0]-o[0])<Y&&Math.abs(e[1]-o[1])<Y&&Math.abs(e[2]-o[2])<Y&&Math.abs(e[3]-o[3])<Y&&Math.abs(e[4]-o[4])<Y&&Math.abs(e[5]-o[5])<Y&&Math.abs(e[6]-o[6])<Y&&Math.abs(e[7]-o[7])<Y&&Math.abs(e[8]-o[8])<Y&&Math.abs(e[9]-o[9])<Y&&Math.abs(e[10]-o[10])<Y&&Math.abs(e[11]-o[11])<Y&&Math.abs(e[12]-o[12])<Y&&Math.abs(e[13]-o[13])<Y&&Math.abs(e[14]-o[14])<Y&&Math.abs(e[15]-o[15])<Y}function H(e,o){return e[0]===o[0]&&e[1]===o[1]&&e[2]===o[2]&&e[3]===o[3]&&e[4]===o[4]&&e[5]===o[5]&&e[6]===o[6]&&e[7]===o[7]&&e[8]===o[8]&&e[9]===o[9]&&e[10]===o[10]&&e[11]===o[11]&&e[12]===o[12]&&e[13]===o[13]&&e[14]===o[14]&&e[15]===o[15]}function k(e){const o=e??new d(16);return o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=1,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}function K(e,o){const n=o??new d(16);if(n===e){let q;return q=e[1],e[1]=e[4],e[4]=q,q=e[2],e[2]=e[8],e[8]=q,q=e[3],e[3]=e[12],e[12]=q,q=e[6],e[6]=e[9],e[9]=q,q=e[7],e[7]=e[13],e[13]=q,q=e[11],e[11]=e[14],e[14]=q,n}const i=e[0*4+0],a=e[0*4+1],g=e[0*4+2],y=e[0*4+3],c=e[1*4+0],u=e[1*4+1],h=e[1*4+2],x=e[1*4+3],m=e[2*4+0],P=e[2*4+1],D=e[2*4+2],_=e[2*4+3],A=e[3*4+0],V=e[3*4+1],F=e[3*4+2],O=e[3*4+3];return n[0]=i,n[1]=c,n[2]=m,n[3]=A,n[4]=a,n[5]=u,n[6]=P,n[7]=V,n[8]=g,n[9]=h,n[10]=D,n[11]=F,n[12]=y,n[13]=x,n[14]=_,n[15]=O,n}function ee(e,o){const n=o??new d(16),i=e[0*4+0],a=e[0*4+1],g=e[0*4+2],y=e[0*4+3],c=e[1*4+0],u=e[1*4+1],h=e[1*4+2],x=e[1*4+3],m=e[2*4+0],P=e[2*4+1],D=e[2*4+2],_=e[2*4+3],A=e[3*4+0],V=e[3*4+1],F=e[3*4+2],O=e[3*4+3],q=D*O,oe=F*_,pe=h*O,he=F*x,we=h*_,Pe=D*x,De=g*O,Me=F*y,ze=g*_,be=D*y,Ge=g*x,Se=h*y,Ve=m*V,_e=A*P,Fe=c*V,Ie=A*u,Ue=c*P,Ye=m*u,Le=i*V,Oe=A*a,Xe=i*P,ke=m*a,qe=i*u,We=c*a,$e=q*u+he*P+we*V-(oe*u+pe*P+Pe*V),Qe=oe*a+De*P+be*V-(q*a+Me*P+ze*V),Ke=pe*a+Me*u+Ge*V-(he*a+De*u+Se*V),Je=Pe*a+ze*u+Se*P-(we*a+be*u+Ge*P),Be=1/(i*$e+c*Qe+m*Ke+A*Je);return n[0]=Be*$e,n[1]=Be*Qe,n[2]=Be*Ke,n[3]=Be*Je,n[4]=Be*(oe*c+pe*m+Pe*A-(q*c+he*m+we*A)),n[5]=Be*(q*i+Me*m+ze*A-(oe*i+De*m+be*A)),n[6]=Be*(he*i+De*c+Se*A-(pe*i+Me*c+Ge*A)),n[7]=Be*(we*i+be*c+Ge*m-(Pe*i+ze*c+Se*m)),n[8]=Be*(Ve*x+Ie*_+Ue*O-(_e*x+Fe*_+Ye*O)),n[9]=Be*(_e*y+Le*_+ke*O-(Ve*y+Oe*_+Xe*O)),n[10]=Be*(Fe*y+Oe*x+qe*O-(Ie*y+Le*x+We*O)),n[11]=Be*(Ye*y+Xe*x+We*_-(Ue*y+ke*x+qe*_)),n[12]=Be*(Fe*D+Ye*F+_e*h-(Ue*F+Ve*h+Ie*D)),n[13]=Be*(Xe*F+Ve*g+Oe*D-(Le*D+ke*F+_e*g)),n[14]=Be*(Le*h+We*F+Ie*g-(qe*F+Fe*g+Oe*h)),n[15]=Be*(qe*D+Ue*g+ke*h-(Xe*h+We*D+Ye*g)),n}function ie(e){const o=e[0],n=e[0*4+1],i=e[0*4+2],a=e[0*4+3],g=e[1*4+0],y=e[1*4+1],c=e[1*4+2],u=e[1*4+3],h=e[2*4+0],x=e[2*4+1],m=e[2*4+2],P=e[2*4+3],D=e[3*4+0],_=e[3*4+1],A=e[3*4+2],V=e[3*4+3],F=m*V,O=A*P,q=c*V,oe=A*u,pe=c*P,he=m*u,we=i*V,Pe=A*a,De=i*P,Me=m*a,ze=i*u,be=c*a,Ge=F*y+oe*x+pe*_-(O*y+q*x+he*_),Se=O*n+we*x+Me*_-(F*n+Pe*x+De*_),Ve=q*n+Pe*y+ze*_-(oe*n+we*y+be*_),_e=he*n+De*y+be*x-(pe*n+Me*y+ze*x);return o*Ge+g*Se+h*Ve+D*_e}const re=ee;function ue(e,o,n){const i=n??new d(16),a=e[0],g=e[1],y=e[2],c=e[3],u=e[4],h=e[5],x=e[6],m=e[7],P=e[8],D=e[9],_=e[10],A=e[11],V=e[12],F=e[13],O=e[14],q=e[15],oe=o[0],pe=o[1],he=o[2],we=o[3],Pe=o[4],De=o[5],Me=o[6],ze=o[7],be=o[8],Ge=o[9],Se=o[10],Ve=o[11],_e=o[12],Fe=o[13],Ie=o[14],Ue=o[15];return i[0]=a*oe+u*pe+P*he+V*we,i[1]=g*oe+h*pe+D*he+F*we,i[2]=y*oe+x*pe+_*he+O*we,i[3]=c*oe+m*pe+A*he+q*we,i[4]=a*Pe+u*De+P*Me+V*ze,i[5]=g*Pe+h*De+D*Me+F*ze,i[6]=y*Pe+x*De+_*Me+O*ze,i[7]=c*Pe+m*De+A*Me+q*ze,i[8]=a*be+u*Ge+P*Se+V*Ve,i[9]=g*be+h*Ge+D*Se+F*Ve,i[10]=y*be+x*Ge+_*Se+O*Ve,i[11]=c*be+m*Ge+A*Se+q*Ve,i[12]=a*_e+u*Fe+P*Ie+V*Ue,i[13]=g*_e+h*Fe+D*Ie+F*Ue,i[14]=y*_e+x*Fe+_*Ie+O*Ue,i[15]=c*_e+m*Fe+A*Ie+q*Ue,i}const $=ue;function W(e,o,n){const i=n??k();return e!==i&&(i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11]),i[12]=o[0],i[13]=o[1],i[14]=o[2],i[15]=1,i}function L(e,o){const n=o??v.create();return n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function Z(e,o,n){const i=n??v.create(),a=o*4;return i[0]=e[a+0],i[1]=e[a+1],i[2]=e[a+2],i}function Q(e,o,n,i){const a=i===e?i:U(e,i),g=n*4;return a[g+0]=o[0],a[g+1]=o[1],a[g+2]=o[2],a}function ne(e,o){const n=o??v.create(),i=e[0],a=e[1],g=e[2],y=e[4],c=e[5],u=e[6],h=e[8],x=e[9],m=e[10];return n[0]=Math.sqrt(i*i+a*a+g*g),n[1]=Math.sqrt(y*y+c*c+u*u),n[2]=Math.sqrt(h*h+x*x+m*m),n}function J(e,o,n,i,a){const g=a??new d(16),y=Math.tan(Math.PI*.5-.5*e);if(g[0]=y/o,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=y,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,Number.isFinite(i)){const c=1/(n-i);g[10]=i*c,g[14]=i*n*c}else g[10]=-1,g[14]=-n;return g}function X(e,o,n,i=1/0,a){const g=a??new d(16),y=1/Math.tan(e*.5);if(g[0]=y/o,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=y,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,i===1/0)g[10]=0,g[14]=n;else{const c=1/(i-n);g[10]=n*c,g[14]=i*n*c}return g}function N(e,o,n,i,a,g,y){const c=y??new d(16);return c[0]=2/(o-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(i-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1/(a-g),c[11]=0,c[12]=(o+e)/(e-o),c[13]=(i+n)/(n-i),c[14]=a/(a-g),c[15]=1,c}function te(e,o,n,i,a,g,y){const c=y??new d(16),u=o-e,h=i-n,x=a-g;return c[0]=2*a/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/h,c[6]=0,c[7]=0,c[8]=(e+o)/u,c[9]=(i+n)/h,c[10]=g/x,c[11]=-1,c[12]=0,c[13]=0,c[14]=a*g/x,c[15]=0,c}function ve(e,o,n,i,a,g=1/0,y){const c=y??new d(16),u=o-e,h=i-n;if(c[0]=2*a/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/h,c[6]=0,c[7]=0,c[8]=(e+o)/u,c[9]=(i+n)/h,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,g===1/0)c[10]=0,c[14]=a;else{const x=1/(g-a);c[10]=a*x,c[14]=g*a*x}return c}const E=v.create(),j=v.create(),R=v.create();function me(e,o,n,i){const a=i??new d(16);return v.normalize(v.subtract(o,e,R),R),v.normalize(v.cross(n,R,E),E),v.normalize(v.cross(R,E,j),j),a[0]=E[0],a[1]=E[1],a[2]=E[2],a[3]=0,a[4]=j[0],a[5]=j[1],a[6]=j[2],a[7]=0,a[8]=R[0],a[9]=R[1],a[10]=R[2],a[11]=0,a[12]=e[0],a[13]=e[1],a[14]=e[2],a[15]=1,a}function fe(e,o,n,i){const a=i??new d(16);return v.normalize(v.subtract(e,o,R),R),v.normalize(v.cross(n,R,E),E),v.normalize(v.cross(R,E,j),j),a[0]=E[0],a[1]=E[1],a[2]=E[2],a[3]=0,a[4]=j[0],a[5]=j[1],a[6]=j[2],a[7]=0,a[8]=R[0],a[9]=R[1],a[10]=R[2],a[11]=0,a[12]=e[0],a[13]=e[1],a[14]=e[2],a[15]=1,a}function ye(e,o,n,i){const a=i??new d(16);return v.normalize(v.subtract(e,o,R),R),v.normalize(v.cross(n,R,E),E),v.normalize(v.cross(R,E,j),j),a[0]=E[0],a[1]=j[0],a[2]=R[0],a[3]=0,a[4]=E[1],a[5]=j[1],a[6]=R[1],a[7]=0,a[8]=E[2],a[9]=j[2],a[10]=R[2],a[11]=0,a[12]=-(E[0]*e[0]+E[1]*e[1]+E[2]*e[2]),a[13]=-(j[0]*e[0]+j[1]*e[1]+j[2]*e[2]),a[14]=-(R[0]*e[0]+R[1]*e[1]+R[2]*e[2]),a[15]=1,a}function ce(e,o){const n=o??new d(16);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function Te(e,o,n){const i=n??new d(16),a=o[0],g=o[1],y=o[2],c=e[0],u=e[1],h=e[2],x=e[3],m=e[1*4+0],P=e[1*4+1],D=e[1*4+2],_=e[1*4+3],A=e[2*4+0],V=e[2*4+1],F=e[2*4+2],O=e[2*4+3],q=e[3*4+0],oe=e[3*4+1],pe=e[3*4+2],he=e[3*4+3];return e!==i&&(i[0]=c,i[1]=u,i[2]=h,i[3]=x,i[4]=m,i[5]=P,i[6]=D,i[7]=_,i[8]=A,i[9]=V,i[10]=F,i[11]=O),i[12]=c*a+m*g+A*y+q,i[13]=u*a+P*g+V*y+oe,i[14]=h*a+D*g+F*y+pe,i[15]=x*a+_*g+O*y+he,i}function C(e,o){const n=o??new d(16),i=Math.cos(e),a=Math.sin(e);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=i,n[6]=a,n[7]=0,n[8]=0,n[9]=-a,n[10]=i,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function ge(e,o,n){const i=n??new d(16),a=e[4],g=e[5],y=e[6],c=e[7],u=e[8],h=e[9],x=e[10],m=e[11],P=Math.cos(o),D=Math.sin(o);return i[4]=P*a+D*u,i[5]=P*g+D*h,i[6]=P*y+D*x,i[7]=P*c+D*m,i[8]=P*u-D*a,i[9]=P*h-D*g,i[10]=P*x-D*y,i[11]=P*m-D*c,e!==i&&(i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function se(e,o){const n=o??new d(16),i=Math.cos(e),a=Math.sin(e);return n[0]=i,n[1]=0,n[2]=-a,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=a,n[9]=0,n[10]=i,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function xe(e,o,n){const i=n??new d(16),a=e[0*4+0],g=e[0*4+1],y=e[0*4+2],c=e[0*4+3],u=e[2*4+0],h=e[2*4+1],x=e[2*4+2],m=e[2*4+3],P=Math.cos(o),D=Math.sin(o);return i[0]=P*a-D*u,i[1]=P*g-D*h,i[2]=P*y-D*x,i[3]=P*c-D*m,i[8]=P*u+D*a,i[9]=P*h+D*g,i[10]=P*x+D*y,i[11]=P*m+D*c,e!==i&&(i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function ae(e,o){const n=o??new d(16),i=Math.cos(e),a=Math.sin(e);return n[0]=i,n[1]=a,n[2]=0,n[3]=0,n[4]=-a,n[5]=i,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function le(e,o,n){const i=n??new d(16),a=e[0*4+0],g=e[0*4+1],y=e[0*4+2],c=e[0*4+3],u=e[1*4+0],h=e[1*4+1],x=e[1*4+2],m=e[1*4+3],P=Math.cos(o),D=Math.sin(o);return i[0]=P*a+D*u,i[1]=P*g+D*h,i[2]=P*y+D*x,i[3]=P*c+D*m,i[4]=P*u-D*a,i[5]=P*h-D*g,i[6]=P*x-D*y,i[7]=P*m-D*c,e!==i&&(i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function de(e,o,n){const i=n??new d(16);let a=e[0],g=e[1],y=e[2];const c=Math.sqrt(a*a+g*g+y*y);a/=c,g/=c,y/=c;const u=a*a,h=g*g,x=y*y,m=Math.cos(o),P=Math.sin(o),D=1-m;return i[0]=u+(1-u)*m,i[1]=a*g*D+y*P,i[2]=a*y*D-g*P,i[3]=0,i[4]=a*g*D-y*P,i[5]=h+(1-h)*m,i[6]=g*y*D+a*P,i[7]=0,i[8]=a*y*D+g*P,i[9]=g*y*D-a*P,i[10]=x+(1-x)*m,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}const r=de;function p(e,o,n,i){const a=i??new d(16);let g=o[0],y=o[1],c=o[2];const u=Math.sqrt(g*g+y*y+c*c);g/=u,y/=u,c/=u;const h=g*g,x=y*y,m=c*c,P=Math.cos(n),D=Math.sin(n),_=1-P,A=h+(1-h)*P,V=g*y*_+c*D,F=g*c*_-y*D,O=g*y*_-c*D,q=x+(1-x)*P,oe=y*c*_+g*D,pe=g*c*_+y*D,he=y*c*_-g*D,we=m+(1-m)*P,Pe=e[0],De=e[1],Me=e[2],ze=e[3],be=e[4],Ge=e[5],Se=e[6],Ve=e[7],_e=e[8],Fe=e[9],Ie=e[10],Ue=e[11];return a[0]=A*Pe+V*be+F*_e,a[1]=A*De+V*Ge+F*Fe,a[2]=A*Me+V*Se+F*Ie,a[3]=A*ze+V*Ve+F*Ue,a[4]=O*Pe+q*be+oe*_e,a[5]=O*De+q*Ge+oe*Fe,a[6]=O*Me+q*Se+oe*Ie,a[7]=O*ze+q*Ve+oe*Ue,a[8]=pe*Pe+he*be+we*_e,a[9]=pe*De+he*Ge+we*Fe,a[10]=pe*Me+he*Se+we*Ie,a[11]=pe*ze+he*Ve+we*Ue,e!==a&&(a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}const t=p;function s(e,o){const n=o??new d(16);return n[0]=e[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function l(e,o,n){const i=n??new d(16),a=o[0],g=o[1],y=o[2];return i[0]=a*e[0*4+0],i[1]=a*e[0*4+1],i[2]=a*e[0*4+2],i[3]=a*e[0*4+3],i[4]=g*e[1*4+0],i[5]=g*e[1*4+1],i[6]=g*e[1*4+2],i[7]=g*e[1*4+3],i[8]=y*e[2*4+0],i[9]=y*e[2*4+1],i[10]=y*e[2*4+2],i[11]=y*e[2*4+3],e!==i&&(i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function f(e,o){const n=o??new d(16);return n[0]=e,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function w(e,o,n){const i=n??new d(16);return i[0]=o*e[0*4+0],i[1]=o*e[0*4+1],i[2]=o*e[0*4+2],i[3]=o*e[0*4+3],i[4]=o*e[1*4+0],i[5]=o*e[1*4+1],i[6]=o*e[1*4+2],i[7]=o*e[1*4+3],i[8]=o*e[2*4+0],i[9]=o*e[2*4+1],i[10]=o*e[2*4+2],i[11]=o*e[2*4+3],e!==i&&(i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}return{create:z,set:S,fromMat3:G,fromQuat:M,negate:I,copy:U,clone:T,equalsApproximately:B,equals:H,identity:k,transpose:K,inverse:ee,determinant:ie,invert:re,multiply:ue,mul:$,setTranslation:W,getTranslation:L,getAxis:Z,setAxis:Q,getScaling:ne,perspective:J,perspectiveReverseZ:X,ortho:N,frustum:te,frustumReverseZ:ve,aim:me,cameraAim:fe,lookAt:ye,translation:ce,translate:Te,rotationX:C,rotateX:ge,rotationY:se,rotateY:xe,rotationZ:ae,rotateZ:le,axisRotation:de,rotation:r,axisRotate:p,rotate:t,scaling:s,scale:l,uniformScaling:f,uniformScale:w}}const rn=new Map;function vn(d){let v=rn.get(d);return v||(v=xn(d),rn.set(d,v)),v}function wn(d){const v=je(d);function z(r,p,t,s){const l=new d(4);return r!==void 0&&(l[0]=r,p!==void 0&&(l[1]=p,t!==void 0&&(l[2]=t,s!==void 0&&(l[3]=s)))),l}const S=z;function G(r,p,t,s,l){const f=l??new d(4);return f[0]=r,f[1]=p,f[2]=t,f[3]=s,f}function M(r,p,t){const s=t??new d(4),l=p*.5,f=Math.sin(l);return s[0]=f*r[0],s[1]=f*r[1],s[2]=f*r[2],s[3]=Math.cos(l),s}function I(r,p){const t=p??v.create(3),s=Math.acos(r[3])*2,l=Math.sin(s*.5);return l>Y?(t[0]=r[0]/l,t[1]=r[1]/l,t[2]=r[2]/l):(t[0]=1,t[1]=0,t[2]=0),{angle:s,axis:t}}function U(r,p){const t=te(r,p);return Math.acos(2*t*t-1)}function T(r,p,t){const s=t??new d(4),l=r[0],f=r[1],w=r[2],e=r[3],o=p[0],n=p[1],i=p[2],a=p[3];return s[0]=l*a+e*o+f*i-w*n,s[1]=f*a+e*n+w*o-l*i,s[2]=w*a+e*i+l*n-f*o,s[3]=e*a-l*o-f*n-w*i,s}const B=T;function H(r,p,t){const s=t??new d(4),l=p*.5,f=r[0],w=r[1],e=r[2],o=r[3],n=Math.sin(l),i=Math.cos(l);return s[0]=f*i+o*n,s[1]=w*i+e*n,s[2]=e*i-w*n,s[3]=o*i-f*n,s}function k(r,p,t){const s=t??new d(4),l=p*.5,f=r[0],w=r[1],e=r[2],o=r[3],n=Math.sin(l),i=Math.cos(l);return s[0]=f*i-e*n,s[1]=w*i+o*n,s[2]=e*i+f*n,s[3]=o*i-w*n,s}function K(r,p,t){const s=t??new d(4),l=p*.5,f=r[0],w=r[1],e=r[2],o=r[3],n=Math.sin(l),i=Math.cos(l);return s[0]=f*i+w*n,s[1]=w*i-f*n,s[2]=e*i+o*n,s[3]=o*i-e*n,s}function ee(r,p,t,s){const l=s??new d(4),f=r[0],w=r[1],e=r[2],o=r[3];let n=p[0],i=p[1],a=p[2],g=p[3],y=f*n+w*i+e*a+o*g;y<0&&(y=-y,n=-n,i=-i,a=-a,g=-g);let c,u;if(1-y>Y){const h=Math.acos(y),x=Math.sin(h);c=Math.sin((1-t)*h)/x,u=Math.sin(t*h)/x}else c=1-t,u=t;return l[0]=c*f+u*n,l[1]=c*w+u*i,l[2]=c*e+u*a,l[3]=c*o+u*g,l}function ie(r,p){const t=p??new d(4),s=r[0],l=r[1],f=r[2],w=r[3],e=s*s+l*l+f*f+w*w,o=e?1/e:0;return t[0]=-s*o,t[1]=-l*o,t[2]=-f*o,t[3]=w*o,t}function re(r,p){const t=p??new d(4);return t[0]=-r[0],t[1]=-r[1],t[2]=-r[2],t[3]=r[3],t}function ue(r,p){const t=p??new d(4),s=r[0]+r[5]+r[10];if(s>0){const l=Math.sqrt(s+1);t[3]=.5*l;const f=.5/l;t[0]=(r[6]-r[9])*f,t[1]=(r[8]-r[2])*f,t[2]=(r[1]-r[4])*f}else{let l=0;r[5]>r[0]&&(l=1),r[10]>r[l*4+l]&&(l=2);const f=(l+1)%3,w=(l+2)%3,e=Math.sqrt(r[l*4+l]-r[f*4+f]-r[w*4+w]+1);t[l]=.5*e;const o=.5/e;t[3]=(r[f*4+w]-r[w*4+f])*o,t[f]=(r[f*4+l]+r[l*4+f])*o,t[w]=(r[w*4+l]+r[l*4+w])*o}return t}function $(r,p,t,s,l){const f=l??new d(4),w=r*.5,e=p*.5,o=t*.5,n=Math.sin(w),i=Math.cos(w),a=Math.sin(e),g=Math.cos(e),y=Math.sin(o),c=Math.cos(o);switch(s){case"xyz":f[0]=n*g*c+i*a*y,f[1]=i*a*c-n*g*y,f[2]=i*g*y+n*a*c,f[3]=i*g*c-n*a*y;break;case"xzy":f[0]=n*g*c-i*a*y,f[1]=i*a*c-n*g*y,f[2]=i*g*y+n*a*c,f[3]=i*g*c+n*a*y;break;case"yxz":f[0]=n*g*c+i*a*y,f[1]=i*a*c-n*g*y,f[2]=i*g*y-n*a*c,f[3]=i*g*c+n*a*y;break;case"yzx":f[0]=n*g*c+i*a*y,f[1]=i*a*c+n*g*y,f[2]=i*g*y-n*a*c,f[3]=i*g*c-n*a*y;break;case"zxy":f[0]=n*g*c-i*a*y,f[1]=i*a*c+n*g*y,f[2]=i*g*y+n*a*c,f[3]=i*g*c-n*a*y;break;case"zyx":f[0]=n*g*c-i*a*y,f[1]=i*a*c+n*g*y,f[2]=i*g*y-n*a*c,f[3]=i*g*c+n*a*y;break;default:throw new Error(`Unknown rotation order: ${s}`)}return f}function W(r,p){const t=p??new d(4);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t}const L=W;function Z(r,p,t){const s=t??new d(4);return s[0]=r[0]+p[0],s[1]=r[1]+p[1],s[2]=r[2]+p[2],s[3]=r[3]+p[3],s}function Q(r,p,t){const s=t??new d(4);return s[0]=r[0]-p[0],s[1]=r[1]-p[1],s[2]=r[2]-p[2],s[3]=r[3]-p[3],s}const ne=Q;function J(r,p,t){const s=t??new d(4);return s[0]=r[0]*p,s[1]=r[1]*p,s[2]=r[2]*p,s[3]=r[3]*p,s}const X=J;function N(r,p,t){const s=t??new d(4);return s[0]=r[0]/p,s[1]=r[1]/p,s[2]=r[2]/p,s[3]=r[3]/p,s}function te(r,p){return r[0]*p[0]+r[1]*p[1]+r[2]*p[2]+r[3]*p[3]}function ve(r,p,t,s){const l=s??new d(4);return l[0]=r[0]+t*(p[0]-r[0]),l[1]=r[1]+t*(p[1]-r[1]),l[2]=r[2]+t*(p[2]-r[2]),l[3]=r[3]+t*(p[3]-r[3]),l}function E(r){const p=r[0],t=r[1],s=r[2],l=r[3];return Math.sqrt(p*p+t*t+s*s+l*l)}const j=E;function R(r){const p=r[0],t=r[1],s=r[2],l=r[3];return p*p+t*t+s*s+l*l}const me=R;function fe(r,p){const t=p??new d(4),s=r[0],l=r[1],f=r[2],w=r[3],e=Math.sqrt(s*s+l*l+f*f+w*w);return e>1e-5?(t[0]=s/e,t[1]=l/e,t[2]=f/e,t[3]=w/e):(t[0]=0,t[1]=0,t[2]=0,t[3]=1),t}function ye(r,p){return Math.abs(r[0]-p[0])<Y&&Math.abs(r[1]-p[1])<Y&&Math.abs(r[2]-p[2])<Y&&Math.abs(r[3]-p[3])<Y}function ce(r,p){return r[0]===p[0]&&r[1]===p[1]&&r[2]===p[2]&&r[3]===p[3]}function Te(r){const p=r??new d(4);return p[0]=0,p[1]=0,p[2]=0,p[3]=1,p}const C=v.create(),ge=v.create(),se=v.create();function xe(r,p,t){const s=t??new d(4),l=v.dot(r,p);return l<-.999999?(v.cross(ge,r,C),v.len(C)<1e-6&&v.cross(se,r,C),v.normalize(C,C),M(C,Math.PI,s),s):l>.999999?(s[0]=0,s[1]=0,s[2]=0,s[3]=1,s):(v.cross(r,p,C),s[0]=C[0],s[1]=C[1],s[2]=C[2],s[3]=1+l,fe(s,s))}const ae=new d(4),le=new d(4);function de(r,p,t,s,l,f){const w=f??new d(4);return ee(r,s,l,ae),ee(p,t,l,le),ee(ae,le,2*l*(1-l),w),w}return{create:z,fromValues:S,set:G,fromAxisAngle:M,toAxisAngle:I,angle:U,multiply:T,mul:B,rotateX:H,rotateY:k,rotateZ:K,slerp:ee,inverse:ie,conjugate:re,fromMat:ue,fromEuler:$,copy:W,clone:L,add:Z,subtract:Q,sub:ne,mulScalar:J,scale:X,divScalar:N,dot:te,lerp:ve,length:E,len:j,lengthSq:R,lenSq:me,normalize:fe,equalsApproximately:ye,equals:ce,identity:Te,rotationTo:xe,sqlerp:de}}const sn=new Map;function mn(d){let v=sn.get(d);return v||(v=wn(d),sn.set(d,v)),v}function yn(d){function v(t,s,l,f){const w=new d(4);return t!==void 0&&(w[0]=t,s!==void 0&&(w[1]=s,l!==void 0&&(w[2]=l,f!==void 0&&(w[3]=f)))),w}const z=v;function S(t,s,l,f,w){const e=w??new d(4);return e[0]=t,e[1]=s,e[2]=l,e[3]=f,e}function G(t,s){const l=s??new d(4);return l[0]=Math.ceil(t[0]),l[1]=Math.ceil(t[1]),l[2]=Math.ceil(t[2]),l[3]=Math.ceil(t[3]),l}function M(t,s){const l=s??new d(4);return l[0]=Math.floor(t[0]),l[1]=Math.floor(t[1]),l[2]=Math.floor(t[2]),l[3]=Math.floor(t[3]),l}function I(t,s){const l=s??new d(4);return l[0]=Math.round(t[0]),l[1]=Math.round(t[1]),l[2]=Math.round(t[2]),l[3]=Math.round(t[3]),l}function U(t,s=0,l=1,f){const w=f??new d(4);return w[0]=Math.min(l,Math.max(s,t[0])),w[1]=Math.min(l,Math.max(s,t[1])),w[2]=Math.min(l,Math.max(s,t[2])),w[3]=Math.min(l,Math.max(s,t[3])),w}function T(t,s,l){const f=l??new d(4);return f[0]=t[0]+s[0],f[1]=t[1]+s[1],f[2]=t[2]+s[2],f[3]=t[3]+s[3],f}function B(t,s,l,f){const w=f??new d(4);return w[0]=t[0]+s[0]*l,w[1]=t[1]+s[1]*l,w[2]=t[2]+s[2]*l,w[3]=t[3]+s[3]*l,w}function H(t,s,l){const f=l??new d(4);return f[0]=t[0]-s[0],f[1]=t[1]-s[1],f[2]=t[2]-s[2],f[3]=t[3]-s[3],f}const k=H;function K(t,s){return Math.abs(t[0]-s[0])<Y&&Math.abs(t[1]-s[1])<Y&&Math.abs(t[2]-s[2])<Y&&Math.abs(t[3]-s[3])<Y}function ee(t,s){return t[0]===s[0]&&t[1]===s[1]&&t[2]===s[2]&&t[3]===s[3]}function ie(t,s,l,f){const w=f??new d(4);return w[0]=t[0]+l*(s[0]-t[0]),w[1]=t[1]+l*(s[1]-t[1]),w[2]=t[2]+l*(s[2]-t[2]),w[3]=t[3]+l*(s[3]-t[3]),w}function re(t,s,l,f){const w=f??new d(4);return w[0]=t[0]+l[0]*(s[0]-t[0]),w[1]=t[1]+l[1]*(s[1]-t[1]),w[2]=t[2]+l[2]*(s[2]-t[2]),w[3]=t[3]+l[3]*(s[3]-t[3]),w}function ue(t,s,l){const f=l??new d(4);return f[0]=Math.max(t[0],s[0]),f[1]=Math.max(t[1],s[1]),f[2]=Math.max(t[2],s[2]),f[3]=Math.max(t[3],s[3]),f}function $(t,s,l){const f=l??new d(4);return f[0]=Math.min(t[0],s[0]),f[1]=Math.min(t[1],s[1]),f[2]=Math.min(t[2],s[2]),f[3]=Math.min(t[3],s[3]),f}function W(t,s,l){const f=l??new d(4);return f[0]=t[0]*s,f[1]=t[1]*s,f[2]=t[2]*s,f[3]=t[3]*s,f}const L=W;function Z(t,s,l){const f=l??new d(4);return f[0]=t[0]/s,f[1]=t[1]/s,f[2]=t[2]/s,f[3]=t[3]/s,f}function Q(t,s){const l=s??new d(4);return l[0]=1/t[0],l[1]=1/t[1],l[2]=1/t[2],l[3]=1/t[3],l}const ne=Q;function J(t,s){return t[0]*s[0]+t[1]*s[1]+t[2]*s[2]+t[3]*s[3]}function X(t){const s=t[0],l=t[1],f=t[2],w=t[3];return Math.sqrt(s*s+l*l+f*f+w*w)}const N=X;function te(t){const s=t[0],l=t[1],f=t[2],w=t[3];return s*s+l*l+f*f+w*w}const ve=te;function E(t,s){const l=t[0]-s[0],f=t[1]-s[1],w=t[2]-s[2],e=t[3]-s[3];return Math.sqrt(l*l+f*f+w*w+e*e)}const j=E;function R(t,s){const l=t[0]-s[0],f=t[1]-s[1],w=t[2]-s[2],e=t[3]-s[3];return l*l+f*f+w*w+e*e}const me=R;function fe(t,s){const l=s??new d(4),f=t[0],w=t[1],e=t[2],o=t[3],n=Math.sqrt(f*f+w*w+e*e+o*o);return n>1e-5?(l[0]=f/n,l[1]=w/n,l[2]=e/n,l[3]=o/n):(l[0]=0,l[1]=0,l[2]=0,l[3]=0),l}function ye(t,s){const l=s??new d(4);return l[0]=-t[0],l[1]=-t[1],l[2]=-t[2],l[3]=-t[3],l}function ce(t,s){const l=s??new d(4);return l[0]=t[0],l[1]=t[1],l[2]=t[2],l[3]=t[3],l}const Te=ce;function C(t,s,l){const f=l??new d(4);return f[0]=t[0]*s[0],f[1]=t[1]*s[1],f[2]=t[2]*s[2],f[3]=t[3]*s[3],f}const ge=C;function se(t,s,l){const f=l??new d(4);return f[0]=t[0]/s[0],f[1]=t[1]/s[1],f[2]=t[2]/s[2],f[3]=t[3]/s[3],f}const xe=se;function ae(t){const s=t??new d(4);return s[0]=0,s[1]=0,s[2]=0,s[3]=0,s}function le(t,s,l){const f=l??new d(4),w=t[0],e=t[1],o=t[2],n=t[3];return f[0]=s[0]*w+s[4]*e+s[8]*o+s[12]*n,f[1]=s[1]*w+s[5]*e+s[9]*o+s[13]*n,f[2]=s[2]*w+s[6]*e+s[10]*o+s[14]*n,f[3]=s[3]*w+s[7]*e+s[11]*o+s[15]*n,f}function de(t,s,l){const f=l??new d(4);return fe(t,f),W(f,s,f)}function r(t,s,l){const f=l??new d(4);return X(t)>s?de(t,s,f):ce(t,f)}function p(t,s,l){const f=l??new d(4);return ie(t,s,.5,f)}return{create:v,fromValues:z,set:S,ceil:G,floor:M,round:I,clamp:U,add:T,addScaled:B,subtract:H,sub:k,equalsApproximately:K,equals:ee,lerp:ie,lerpV:re,max:ue,min:$,mulScalar:W,scale:L,divScalar:Z,inverse:Q,invert:ne,dot:J,length:X,len:N,lengthSq:te,lenSq:ve,distance:E,dist:j,distanceSq:R,distSq:me,normalize:fe,negate:ye,copy:ce,clone:Te,multiply:C,mul:ge,divide:se,div:xe,zero:ae,transformMat4:le,setLength:de,truncate:r,midpoint:p}}const on=new Map;function Pn(d){let v=on.get(d);return v||(v=yn(d),on.set(d,v)),v}function Ze(d,v,z,S,G,M){return{mat3:gn(d),mat4:vn(v),quat:mn(z),vec2:cn(S),vec3:je(G),vec4:Pn(M)}}const{mat3:Cn,mat4:Ae,quat:Zn,vec2:$n,vec3:Qn,vec4:Kn}=Ze(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Ze(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Ze(dn,Array,Array,Array,Array,Array);const Re=new ArrayBuffer(272),Ee={texelSize:new Float32Array(Re,0,2),sphereSize:new Float32Array(Re,8,2),invProjectionMatrix:new Float32Array(Re,16,16),projectionMatrix:new Float32Array(Re,80,16),viewMatrix:new Float32Array(Re,144,16),invViewMatrix:new Float32Array(Re,208,16)};class Dn{constructor(v){b(this,"isDragging");b(this,"prevX");b(this,"prevY");b(this,"prevHoverX");b(this,"prevHoverY");b(this,"currentHoverX");b(this,"currentHoverY");b(this,"currentXtheta");b(this,"currentYtheta");b(this,"maxYTheta");b(this,"minYTheta");b(this,"sensitivity");b(this,"currentDistance");b(this,"maxDistance");b(this,"minDistance");b(this,"target");b(this,"fov");b(this,"zoomRate");b(this,"canvas");this.canvas=v,this.canvas.addEventListener("pointerdown",z=>{this.isDragging=document.getElementById("interaction").value==="rotate",this.canvas.setPointerCapture(z.pointerId),this.prevX=z.clientX,this.prevY=z.clientY}),this.canvas.addEventListener("wheel",z=>{z.preventDefault();var S=z.deltaY;this.currentDistance+=(S>0?1:-1)*this.zoomRate,this.currentDistance<this.minDistance&&(this.currentDistance=this.minDistance),this.currentDistance>this.maxDistance&&(this.currentDistance=this.maxDistance),this.recalculateView()}),this.canvas.addEventListener("pointermove",z=>{const S=this.canvas.getBoundingClientRect();if(this.currentHoverX=z.clientX-S.left,this.currentHoverY=z.clientY-S.top,this.isDragging){const G=this.prevX-z.clientX,M=this.prevY-z.clientY;this.currentXtheta+=this.sensitivity*G,this.currentYtheta+=this.sensitivity*M,this.currentYtheta>this.maxYTheta&&(this.currentYtheta=this.maxYTheta),this.currentYtheta<this.minYTheta&&(this.currentYtheta=this.minYTheta),this.prevX=z.clientX,this.prevY=z.clientY,this.recalculateView()}}),this.canvas.addEventListener("pointerup",()=>{this.isDragging&&(this.isDragging=!1)}),this.canvas.addEventListener("pointercancel",()=>{this.isDragging=!1}),this.canvas.addEventListener("pointerleave",()=>{this.prevHoverX=this.currentHoverX,this.prevHoverY=this.currentHoverY}),window.addEventListener("resize",()=>{this.fov&&this.updateProjection()})}updateProjection(){const v=Ae.perspective(this.fov,this.canvas.clientWidth/this.canvas.clientHeight,.1,300);Ee.projectionMatrix.set(v),Ee.invProjectionMatrix.set(Ae.inverse(v))}reset(v,z,S,G){this.isDragging=!1,this.prevX=0,this.prevY=0,this.currentHoverX=this.prevHoverX=0,this.currentHoverY=this.prevHoverY=0,this.currentXtheta=-Math.PI/2*1,this.currentYtheta=-Math.PI/12*.8,this.maxYTheta=-Math.PI/12*.8,this.minYTheta=-.99*Math.PI/2,this.sensitivity=.005,this.currentDistance=v,this.maxDistance=1.3*this.currentDistance,this.minDistance=.8*this.currentDistance,this.target=z,this.fov=S,this.zoomRate=G;const M=this.canvas.clientWidth/this.canvas.clientHeight,I=Ae.perspective(S,M,.1,300);Ee.projectionMatrix.set(I),Ee.invProjectionMatrix.set(Ae.inverse(I)),this.recalculateView()}recalculateView(){var v=Ae.identity();Ae.translate(v,this.target,v),Ae.rotateY(v,this.currentXtheta,v),Ae.rotateX(v,this.currentYtheta,v),Ae.translate(v,[0,0,this.currentDistance],v);var z=Ae.multiply(v,[0,0,0,1]);let S=this.target;const G=Ae.lookAt([z[0],z[1],z[2]],S,[0,1,0]);Ee.viewMatrix.set(G),Ee.invViewMatrix.set(Ae.inverse(G))}calcMouseVelocity(){if(this.isDragging)return[0,0];let[v,z]=this.calcPlaneCoord(this.currentHoverX,this.currentHoverY),[S,G]=this.calcPlaneCoord(this.prevHoverX,this.prevHoverY),M=v-S,I=z-G,U=4;return M>U&&(M=U),M<-U&&(M=-U),I>U&&(I=U),I<-U&&(I=-U),[M,I,0,0]}calcPlaneCoord(v,z){let S=v/this.canvas.clientWidth,G=z/this.canvas.clientHeight,M=2*S-1,I=(1-G)*2-1,U=[M*Math.tan(this.fov/2)*(this.canvas.clientWidth/this.canvas.clientHeight),I*Math.tan(this.fov/2),-1];return[U[0]*this.currentDistance,U[1]*this.currentDistance]}setNewPrevMouseCoord(){this.prevHoverX=this.currentHoverX,this.prevHoverY=this.currentHoverY}stepAngle(){this.currentXtheta+=.012,this.recalculateView()}}var Mn=`struct Cell {
    vx: i32, 
    vy: i32, 
    vz: i32, 
    mass: i32, 
}

@group(0) @binding(0) var<storage, read_write> cells: array<Cell>;

@compute @workgroup_size(64)
fn clearGrid(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < arrayLength(&cells)) {
        cells[id.x].mass = 0;
        cells[id.x].vx = 0;
        cells[id.x].vy = 0;
        cells[id.x].vz = 0;
    }
}`,zn=`struct Particle {
    position: vec3f, 
    v: vec3f, 
    C: mat3x3f, 
}
struct Cell {
    vx: atomic<i32>, 
    vy: atomic<i32>, 
    vz: atomic<i32>, 
    mass: atomic<i32>, 
}

override fixedPointMultiplier: f32; 

fn encodeFixedPoint(floatingPoint: f32) -> i32 {
	return i32(floatingPoint * fixedPointMultiplier);
}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(1) var<storage, read_write> cells: array<Cell>;
@group(0) @binding(2) var<uniform> initBoxSize: vec3f;
@group(0) @binding(3) var<uniform> numParticles: u32;

@compute @workgroup_size(64)
fn p2g_1(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) {
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];
        let cellIndex: vec3f = floor(particle.position);
        let cellDiff: vec3f = particle.position - (cellIndex + 0.5f);
        weights[0] = 0.5f * (0.5f - cellDiff) * (0.5f - cellDiff);
        weights[1] = 0.75f - cellDiff * cellDiff;
        weights[2] = 0.5f * (0.5f + cellDiff) * (0.5f + cellDiff);

        let C: mat3x3f = particle.C;

        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cellX: vec3f = vec3f(
                            cellIndex.x + f32(gx) - 1., 
                            cellIndex.y + f32(gy) - 1.,
                            cellIndex.z + f32(gz) - 1.  
                        );
                    let cellDist = (cellX + 0.5f) - particle.position;

                    let Q: vec3f = C * cellDist;

                    let massContrib: f32 = weight * 1.0; 
                    let velContrib: vec3f = massContrib * (particle.v + Q);
                    let cellIndex1D: i32 = 
                        i32(cellX.x) * i32(initBoxSize.y) * i32(initBoxSize.z) + 
                        i32(cellX.y) * i32(initBoxSize.z) + 
                        i32(cellX.z);
                    atomicAdd(&cells[cellIndex1D].mass, encodeFixedPoint(massContrib));
                    atomicAdd(&cells[cellIndex1D].vx, encodeFixedPoint(velContrib.x));
                    atomicAdd(&cells[cellIndex1D].vy, encodeFixedPoint(velContrib.y));
                    atomicAdd(&cells[cellIndex1D].vz, encodeFixedPoint(velContrib.z));
                }
            }
        }
    }
}`,bn=`struct Particle {
    position: vec3f, 
    v: vec3f, 
    C: mat3x3f, 
}
struct Cell {
    vx: atomic<i32>, 
    vy: atomic<i32>, 
    vz: atomic<i32>, 
    mass: i32, 
}

override fixedPointMultiplier: f32; 
override fixedPointMultiplierInverse: f32; 
override stiffness: f32;
override restDensity: f32;
override dynamicViscosity: f32;

fn encodeFixedPoint(floatingPoint: f32) -> i32 {
	return i32(floatingPoint * fixedPointMultiplier);
}
fn decodeFixedPoint(fixedPoint: i32) -> f32 {
	return f32(fixedPoint) * fixedPointMultiplierInverse;
}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(1) var<storage, read_write> cells: array<Cell>;
@group(0) @binding(2) var<uniform> initBoxSize: vec3f;
@group(0) @binding(3) var<uniform> numParticles: u32;
@group(0) @binding(4) var<storage, read_write> densities: array<f32>;
@group(0) @binding(5) var<uniform> dt: f32;

@compute @workgroup_size(64)
fn p2g_2(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) {
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];
        let cellIndex: vec3f = floor(particle.position);
        let cellDiff: vec3f = particle.position - (cellIndex + 0.5f);
        weights[0] = 0.5f * (0.5f - cellDiff) * (0.5f - cellDiff);
        weights[1] = 0.75f - cellDiff * cellDiff;
        weights[2] = 0.5f * (0.5f + cellDiff) * (0.5f + cellDiff);

        var density: f32 = 0.;
        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {    
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cellX: vec3f = vec3f(
                            cellIndex.x + f32(gx) - 1., 
                            cellIndex.y + f32(gy) - 1.,
                            cellIndex.z + f32(gz) - 1.  
                        );
                    let cellIndex1D: i32 = 
                        i32(cellX.x) * i32(initBoxSize.y) * i32(initBoxSize.z) + 
                        i32(cellX.y) * i32(initBoxSize.z) + 
                        i32(cellX.z);
                    density += decodeFixedPoint(cells[cellIndex1D].mass) * weight;
                }
            }
        }

        let volume: f32 = 1.0 / density; 
        densities[id.x] = density;

        let pressure: f32 = max(-0.0, stiffness * (pow(density / restDensity, 1.) - 1));

        var stress: mat3x3f = mat3x3f(-pressure, 0, 0, 0, -pressure, 0, 0, 0, -pressure);
        let dudv: mat3x3f = particle.C;
        let strain: mat3x3f = dudv + transpose(dudv);
        stress += dynamicViscosity * strain;

        let eq_16_term0 = -volume * 4 * stress * dt;

        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cellX: vec3f = vec3f(
                            cellIndex.x + f32(gx) - 1., 
                            cellIndex.y + f32(gy) - 1.,
                            cellIndex.z + f32(gz) - 1.  
                        );
                    let cellDist = (cellX + 0.5f) - particle.position;
                    let cellIndex1D: i32 = 
                        i32(cellX.x) * i32(initBoxSize.y) * i32(initBoxSize.z) + 
                        i32(cellX.y) * i32(initBoxSize.z) + 
                        i32(cellX.z);
                    let momentum: vec3f = eq_16_term0 * weight * cellDist;
                    atomicAdd(&cells[cellIndex1D].vx, encodeFixedPoint(momentum.x));
                    atomicAdd(&cells[cellIndex1D].vy, encodeFixedPoint(momentum.y));
                    atomicAdd(&cells[cellIndex1D].vz, encodeFixedPoint(momentum.z));
                }
            }
        }
    }
}`,Bn=`struct Cell {\r
    vx: i32, \r
    vy: i32, \r
    vz: i32, \r
    mass: i32, \r
}\r
struct RenderUniforms {\r
    texelSize: vec2f, \r
    sphereSize: f32, \r
    invProjectionMatrix: mat4x4f, \r
    projectionMatrix: mat4x4f, \r
    viewMatrix: mat4x4f, \r
    invViewMatrix: mat4x4f, \r
}\r
struct MouseInfo {\r
    screenSize: vec2f, \r
    mouseCoord : vec2f, \r
    mouseVel : vec2f, \r
    mouseRadius: f32, \r
}

override fixedPointMultiplier: f32; \r
override fixedPointMultiplierInverse: f32; 

@group(0) @binding(0) var<storage, read_write> cells: array<Cell>;\r
@group(0) @binding(1) var<uniform> realBoxSize: vec3f;\r
@group(0) @binding(2) var<uniform> initBoxSize: vec3f;\r
@group(0) @binding(3) var<uniform> uniforms: RenderUniforms;\r
@group(0) @binding(4) var depthTexture: texture_2d<f32>;\r
@group(0) @binding(5) var<uniform> mouseInfo: MouseInfo; \r
@group(0) @binding(6) var<uniform> dt: f32; 

fn encodeFixedPoint(floatingPoint: f32) -> i32 {\r
	return i32(floatingPoint * fixedPointMultiplier);\r
}\r
fn decodeFixedPoint(fixedPoint: i32) -> f32 {\r
	return f32(fixedPoint) * fixedPointMultiplierInverse;\r
}

fn computeViewPosFromUVDepth(tex_coord: vec2f, depth: f32) -> vec3f {\r
    var ndc: vec4f = vec4f(tex_coord.x * 2.0 - 1.0, 1.0 - 2.0 * tex_coord.y, 0.0, 1.0);\r
    ndc.z = -uniforms.projectionMatrix[2].z + uniforms.projectionMatrix[3].z / depth;\r
    ndc.w = 1.0;

    var eye_pos: vec4f = uniforms.invProjectionMatrix * ndc;

    return eye_pos.xyz / eye_pos.w;\r
}

fn getViewPosFromTexCoord(tex_coord: vec2f, iuv: vec2f) -> vec3f {\r
    var depth: f32 = abs(textureLoad(depthTexture, vec2u(iuv), 0).x);\r
    return computeViewPosFromUVDepth(tex_coord, depth);\r
}

@compute @workgroup_size(64)\r
fn updateGrid(@builtin(global_invocation_id) id: vec3<u32>) {\r
    if (id.x < arrayLength(&cells)) { 
        let uv: vec2f = mouseInfo.mouseCoord;\r
        let iuv = uv * mouseInfo.screenSize;\r
        let depth: f32 = abs(textureLoad(depthTexture, vec2u(iuv), 0).x);\r
        var mouseCellIndex: u32 = 1000000000; 
        var cellSquareDistToMouse: f32 = 1e9;\r
        var forceDir = vec3f(0.);

        if (depth < 1e4) {\r
            let mouseViewPos = getViewPosFromTexCoord(uv, iuv);\r
            let mouseWorldPos = uniforms.invViewMatrix * vec4f(mouseViewPos, 1.); 
            let mouseCellPos: vec3i = vec3i(floor(mouseWorldPos).xyz);\r
            mouseCellIndex =    u32(mouseCellPos.x) * u32(initBoxSize.y) * u32(initBoxSize.z) + \r
                                u32(mouseCellPos.y) * u32(initBoxSize.z) + \r
                                u32(mouseCellPos.z);\r
            let center = realBoxSize / 2;\r
            forceDir = select(vec3f(0.), (uniforms.invViewMatrix * vec4f(mouseInfo.mouseVel, 0.0, 0)).xyz, dot(mouseInfo.mouseVel, mouseInfo.mouseVel) > 0.);\r
            var x: f32 = f32(i32(id.x) / i32(initBoxSize.z) / i32(initBoxSize.y));\r
            var y: f32 = f32((i32(id.x) / i32(initBoxSize.z)) % i32(initBoxSize.y));\r
            var z: f32 = f32(i32(id.x) % i32(initBoxSize.z));\r
            let cellPos = vec3f(x, y, z);\r
            let diff = floor(mouseWorldPos).xyz - cellPos;\r
            cellSquareDistToMouse = dot(diff, diff);\r
        }

        let dt = dt;\r
        let r = mouseInfo.mouseRadius;

        if (cells[id.x].mass > 0) { 
            var floatV: vec3f = vec3f(\r
                decodeFixedPoint(cells[id.x].vx), \r
                decodeFixedPoint(cells[id.x].vy), \r
                decodeFixedPoint(cells[id.x].vz)\r
            );\r
            floatV /= decodeFixedPoint(cells[id.x].mass);

            let strength = smoothstep(r*r, 0., cellSquareDistToMouse) * 0.2;   
            floatV += strength * forceDir;
            floatV.y -= 0.40 * dt;

            var x: i32 = i32(id.x) / i32(initBoxSize.z) / i32(initBoxSize.y);
            var y: i32 = (i32(id.x) / i32(initBoxSize.z)) % i32(initBoxSize.y);
            var z: i32 = i32(id.x) % i32(initBoxSize.z);
            let cylinderCenter = vec2f(realBoxSize.x, realBoxSize.z) * 0.5;
            let radial = vec2f(f32(x), f32(z)) - cylinderCenter;
            let radialDistance = length(radial);
            let cylinderRadius = min(realBoxSize.x, realBoxSize.z) * 0.5 - 3.0;
            if (radialDistance > cylinderRadius - 1.5 && radialDistance > 0.0) {
                let normal = radial / radialDistance;
                let outwardSpeed = dot(floatV.xz, normal);
                if (outwardSpeed > 0.0) {
                    let corrected = floatV.xz - normal * outwardSpeed;
                    floatV.x = corrected.x;
                    floatV.z = corrected.y;
                }
            }
            if (y < 2 || y > i32(ceil(realBoxSize.y) - 3)) { floatV.y = 0; }

            cells[id.x].vx = encodeFixedPoint(floatV.x);
            cells[id.x].vy = encodeFixedPoint(floatV.y);
            cells[id.x].vz = encodeFixedPoint(floatV.z);
        }
    }\r
}`,Tn=`struct Particle {\r
    position: vec3f, \r
    v: vec3f, \r
    C: mat3x3f, \r
}\r
struct Cell {\r
    vx: i32, \r
    vy: i32, \r
    vz: i32, \r
    mass: i32, \r
}

override fixedPointMultiplierInverse: f32; 

@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;\r
@group(0) @binding(1) var<storage, read> cells: array<Cell>;\r
@group(0) @binding(2) var<uniform> realBoxSize: vec3f;\r
@group(0) @binding(3) var<uniform> initBoxSize: vec3f;\r
@group(0) @binding(4) var<uniform> numParticles: u32;\r
@group(0) @binding(5) var<uniform> dt: f32;

fn decodeFixedPoint(fixedPoint: i32) -> f32 {\r
	return f32(fixedPoint) * fixedPointMultiplierInverse;\r
}

@compute @workgroup_size(64)\r
fn g2p(@builtin(global_invocation_id) id: vec3<u32>) {\r
    if (id.x < numParticles) {\r
        particles[id.x].v = vec3f(0.);\r
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];\r
        let cellIndex: vec3f = floor(particle.position);\r
        let cellDiff: vec3f = particle.position - (cellIndex + 0.5f);\r
        weights[0] = 0.5f * (0.5f - cellDiff) * (0.5f - cellDiff);\r
        weights[1] = 0.75f - cellDiff * cellDiff;\r
        weights[2] = 0.5f * (0.5f + cellDiff) * (0.5f + cellDiff);

        var B: mat3x3f = mat3x3f(vec3f(0.), vec3f(0.), vec3f(0.));\r
        for (var gx = 0; gx < 3; gx++) {\r
            for (var gy = 0; gy < 3; gy++) {\r
                for (var gz = 0; gz < 3; gz++) {\r
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;\r
                    let cellX: vec3f = vec3f(\r
                        cellIndex.x + f32(gx) - 1., \r
                        cellIndex.y + f32(gy) - 1.,\r
                        cellIndex.z + f32(gz) - 1.  \r
                    );\r
                    let cellDist: vec3f = (cellX + 0.5f) - particle.position;\r
                    let cellIndex1D: i32 = \r
                        i32(cellX.x) * i32(initBoxSize.y) * i32(initBoxSize.z) + \r
                        i32(cellX.y) * i32(initBoxSize.z) + \r
                        i32(cellX.z);\r
                    let weighted_velocity: vec3f = vec3f(\r
                        decodeFixedPoint(cells[cellIndex1D].vx), \r
                        decodeFixedPoint(cells[cellIndex1D].vy), \r
                        decodeFixedPoint(cells[cellIndex1D].vz)\r
                    ) * weight;\r
                    let term: mat3x3f = mat3x3f(\r
                        weighted_velocity * cellDist.x, \r
                        weighted_velocity * cellDist.y, \r
                        weighted_velocity * cellDist.z\r
                    );

                    B += term;

                    particles[id.x].v += weighted_velocity;\r
                }\r
            }\r
        }

        particles[id.x].C = B * 4.0f;
        particles[id.x].position += particles[id.x].v * dt;
        particles[id.x].position = vec3f(
            clamp(particles[id.x].position.x, 1., realBoxSize.x - 2.), 
            clamp(particles[id.x].position.y, 1., realBoxSize.y - 2.), 
            clamp(particles[id.x].position.z, 1., realBoxSize.z - 2.)
        );

        let center = vec2f(realBoxSize.x, realBoxSize.z) * 0.5;
        let cylinderRadius = min(realBoxSize.x, realBoxSize.z) * 0.5 - 3.0;
        var radial = particles[id.x].position.xz - center;
        var radialDistance = length(radial);
        if (radialDistance > cylinderRadius && radialDistance > 0.0) {
            let normal = radial / radialDistance;
            let corrected = center + normal * cylinderRadius;
            particles[id.x].position.x = corrected.x;
            particles[id.x].position.z = corrected.y;
            let outwardSpeed = dot(particles[id.x].v.xz, normal);
            if (outwardSpeed > 0.0) {
                let correctedVelocity = particles[id.x].v.xz - normal * outwardSpeed;
                particles[id.x].v.x = correctedVelocity.x;
                particles[id.x].v.z = correctedVelocity.y;
            }
        }

        let predicted = particles[id.x].position.xz + particles[id.x].v.xz * dt * 2.0;
        radial = predicted - center;
        radialDistance = length(radial);
        if (radialDistance > cylinderRadius - 0.8 && radialDistance > 0.0) {
            let normal = radial / radialDistance;
            let penetration = max(0.0, radialDistance - (cylinderRadius - 0.8));
            particles[id.x].v.x -= normal.x * penetration;
            particles[id.x].v.z -= normal.y * penetration;
        }

        let wallMin = 3.0;
        let wallMax = realBoxSize.y - 4.0;
        let predictedY = particles[id.x].position.y + particles[id.x].v.y * dt * 2.0;
        if (predictedY < wallMin) { particles[id.x].v.y += wallMin - predictedY; }
        if (predictedY > wallMax) { particles[id.x].v.y += wallMax - predictedY; }
    }
}`,Gn=`struct Particle {
    position: vec3f, 
    v: vec3f, 
    C: mat3x3f, 
}

struct PosVel {
    position: vec3f, 
    v: vec3f, 
}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(1) var<storage, read_write> posvel: array<PosVel>;
@group(0) @binding(2) var<uniform> numParticles: u32;

@compute @workgroup_size(64)
fn copyPosition(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) { 
        posvel[id.x].position = particles[id.x].position;
        posvel[id.x].v = particles[id.x].v;
    }
}`,Sn=`@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(1) var<storage, read> densities: array<f32>;
@group(0) @binding(2) var<uniform> numParticles: u32;
@group(0) @binding(3) var<storage, read_write> densityGrid: array<atomic<i32>>;
@group(0) @binding(4) var<uniform> densityGridSize: vec3f;

struct Particle {
    position: vec3f, 
    v: vec3f, 
    C: mat3x3f, 
}

override densityFixedPointMultiplier: f32; 

fn encodeFixedPoint(floatingPoint: f32) -> i32 {
	return i32(floatingPoint * densityFixedPointMultiplier);
}

@compute @workgroup_size(64)
fn p2gDensity(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) {
        var weights: array<vec3f, 3>;
        let particle = particles[id.x];
        let cellIndex: vec3f = floor(particle.position);
        let cellDiff: vec3f = particle.position - (cellIndex + 0.5f);
        weights[0] = 0.5f * (0.5f - cellDiff) * (0.5f - cellDiff);
        weights[1] = 0.75f - cellDiff * cellDiff;
        weights[2] = 0.5f * (0.5f + cellDiff) * (0.5f + cellDiff);

        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cellX: vec3f = vec3f(
                            cellIndex.x + f32(gx) - 1., 
                            cellIndex.y + f32(gy) - 1.,
                            cellIndex.z + f32(gz) - 1.  
                        );
                    let cellIndex1D: i32 = 
                        i32(cellX.x) * i32(densityGridSize.y) * i32(densityGridSize.z) + 
                        i32(cellX.y) * i32(densityGridSize.z) + 
                        i32(cellX.z);
                    atomicAdd(&densityGrid[cellIndex1D], encodeFixedPoint(densities[id.x] * weight));
                }
            }
        }
    }
}`,Vn=`@group(0) @binding(0) var<storage, read_write> densityGrid: array<i32>;
@group(0) @binding(1) var<storage, read_write> castedDensityGrid: array<i32>;

@compute @workgroup_size(64)
fn clearDensityGrid(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < arrayLength(&castedDensityGrid)) {
        densityGrid[2 * id.x] = 0;
        densityGrid[2 * id.x + 1] = 0;
        castedDensityGrid[id.x] = 0;
    }
}`,_n=`@group(0) @binding(0) var<storage, read> densityGrid: array<i32>;
@group(0) @binding(1) var<storage, read_write> castedDensityGrid: array<u32>;

override fixedPointMultiplierInverse: f32; 

fn decodeFixedPoint(fixedPoint: i32) -> f32 {
	return f32(fixedPoint) * fixedPointMultiplierInverse;
}

@compute @workgroup_size(64)
fn clearDensityGrid(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < arrayLength(&castedDensityGrid)) {
        let d0: f32 = decodeFixedPoint(densityGrid[2 * id.x]);
        let d1: f32 = decodeFixedPoint(densityGrid[2 * id.x + 1]);
        
        
        let d01: u32 = pack2x16float(vec2f(d0, d1));
        castedDensityGrid[id.x] = d01;
    }
}`;function Fn(d,v,z={}){const S=z.spacing??.65,G=z.wallMargin??3,M=z.floor??3,I=z.fillRatio??.56,U=z.jitter??(()=>Math.random()*S*.35),T=d[0]/2,B=d[2]/2,H=Math.min(d[0],d[2])/2-G,k=[];for(let K=M;K<d[1]*I&&k.length<v;K+=S)for(let ee=T-H;ee<=T+H&&k.length<v;ee+=S)for(let ie=B-H;ie<=B+H&&k.length<v;ie+=S){const re=ee+U(),ue=K+U(),$=ie+U();Math.hypot(re-T,$-B)<=H&&k.push([re,ue,$])}return k}const He=80;class In{constructor(v,z,S,G,M,I,U,T,B,H,k,K,ee,ie){b(this,"cellStructSize",16);b(this,"realBoxSizeBuffer");b(this,"numParticlesBuffer");b(this,"densityBuffer");b(this,"mouseInfoUniformBuffer");b(this,"sphereRadiusBuffer");b(this,"initBoxSizeBuffer");b(this,"numParticles",0);b(this,"gridCount",0);b(this,"maxGridCount",0);b(this,"maxParticleCount",0);b(this,"densityGridCount",0);b(this,"clearGridPipeline");b(this,"clearDensityGridPipeline");b(this,"castDensityGridPipeline");b(this,"p2g1Pipeline");b(this,"p2g2Pipeline");b(this,"p2gDensityPipeline");b(this,"updateGridPipeline");b(this,"g2pPipeline");b(this,"copyPositionPipeline");b(this,"clearGridBindGroup");b(this,"clearDensityGridBindGroup");b(this,"castDensityGridBindGroup");b(this,"p2g1BindGroup");b(this,"p2g2BindGroup");b(this,"p2gDensityBindGroup");b(this,"updateGridBindGroup");b(this,"g2pBindGroup");b(this,"copyPositionBindGroup");b(this,"particleBuffer");b(this,"dtBuffer");b(this,"densityGridBuffer");b(this,"device");b(this,"renderDiameter");b(this,"frameCount");b(this,"spawned");b(this,"mouseInfoValues",new ArrayBuffer(32));b(this,"mouseInfoViews",{screenSize:new Float32Array(this.mouseInfoValues,0,2),mouseCoord:new Float32Array(this.mouseInfoValues,8,2),mouseVel:new Float32Array(this.mouseInfoValues,16,2),mouseRadius:new Float32Array(this.mouseInfoValues,24,1)});b(this,"restDensity");this.device=T,this.renderDiameter=ie,this.frameCount=0,this.spawned=!1,this.numParticles=0,this.maxGridCount=k,this.maxParticleCount=K,this.initBoxSizeBuffer=I;const re=T.createShaderModule({code:Mn}),ue=T.createShaderModule({code:Vn}),$=T.createShaderModule({code:_n}),W=T.createShaderModule({code:zn}),L=T.createShaderModule({code:bn}),Z=T.createShaderModule({code:Sn}),Q=T.createShaderModule({code:Bn}),ne=T.createShaderModule({code:Tn}),J=T.createShaderModule({code:Gn});this.restDensity=3;const X={stiffness:50,restDensity:this.restDensity,dynamicViscosity:.1,fixedPointMultiplier:ee,fixedPointMultiplierInverse:1/ee};this.clearGridPipeline=T.createComputePipeline({label:"clear grid pipeline",layout:"auto",compute:{module:re}}),this.clearDensityGridPipeline=T.createComputePipeline({label:"clear density grid pipeline",layout:"auto",compute:{module:ue}}),this.castDensityGridPipeline=T.createComputePipeline({label:"cast density grid pipeline",layout:"auto",compute:{module:$,constants:{fixedPointMultiplierInverse:X.fixedPointMultiplierInverse}}}),this.p2g1Pipeline=T.createComputePipeline({label:"p2g 1 pipeline",layout:"auto",compute:{module:W,constants:{fixedPointMultiplier:X.fixedPointMultiplier}}}),this.p2g2Pipeline=T.createComputePipeline({label:"p2g 2 pipeline",layout:"auto",compute:{module:L,constants:{fixedPointMultiplier:X.fixedPointMultiplier,fixedPointMultiplierInverse:X.fixedPointMultiplierInverse,stiffness:X.stiffness,restDensity:X.restDensity,dynamicViscosity:X.dynamicViscosity}}}),this.p2gDensityPipeline=T.createComputePipeline({label:"p2g density pipeline",layout:"auto",compute:{module:Z,constants:{densityFixedPointMultiplier:X.fixedPointMultiplier}}}),this.updateGridPipeline=T.createComputePipeline({label:"update grid pipeline",layout:"auto",compute:{module:Q,constants:{fixedPointMultiplier:X.fixedPointMultiplier,fixedPointMultiplierInverse:X.fixedPointMultiplierInverse}}}),this.g2pPipeline=T.createComputePipeline({label:"g2p pipeline",layout:"auto",compute:{module:ne,constants:{fixedPointMultiplierInverse:X.fixedPointMultiplierInverse}}}),this.copyPositionPipeline=T.createComputePipeline({label:"copy position pipeline",layout:"auto",compute:{module:J}});const N=T.createBuffer({label:"cells buffer",size:this.cellStructSize*k,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});this.densityBuffer=T.createBuffer({label:"density buffer",size:4*K,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.realBoxSizeBuffer=T.createBuffer({label:"real box size buffer",size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.numParticlesBuffer=T.createBuffer({label:"number of particles buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.mouseInfoUniformBuffer=T.createBuffer({label:"mouse info buffer",size:this.mouseInfoValues.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.sphereRadiusBuffer=T.createBuffer({label:"sphere radius buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dtBuffer=T.createBuffer({label:"dt buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.mouseInfoViews.screenSize.set([H.width,H.height]),this.device.queue.writeBuffer(this.mouseInfoUniformBuffer,0,this.mouseInfoValues),this.clearGridBindGroup=T.createBindGroup({layout:this.clearGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:N}}]}),this.clearDensityGridBindGroup=T.createBindGroup({layout:this.clearDensityGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:M}}]}),this.castDensityGridBindGroup=T.createBindGroup({layout:this.castDensityGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:M}}]}),this.p2g1BindGroup=T.createBindGroup({layout:this.p2g1Pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:N}},{binding:2,resource:{buffer:I}},{binding:3,resource:{buffer:this.numParticlesBuffer}}]}),this.p2g2BindGroup=T.createBindGroup({layout:this.p2g2Pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:N}},{binding:2,resource:{buffer:I}},{binding:3,resource:{buffer:this.numParticlesBuffer}},{binding:4,resource:{buffer:this.densityBuffer}},{binding:5,resource:{buffer:this.dtBuffer}}]}),this.p2gDensityBindGroup=T.createBindGroup({layout:this.p2gDensityPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:this.densityBuffer}},{binding:2,resource:{buffer:this.numParticlesBuffer}},{binding:3,resource:{buffer:G}},{binding:4,resource:{buffer:U}}]}),this.updateGridBindGroup=T.createBindGroup({layout:this.updateGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:this.realBoxSizeBuffer}},{binding:2,resource:{buffer:I}},{binding:3,resource:{buffer:S}},{binding:4,resource:B},{binding:5,resource:{buffer:this.mouseInfoUniformBuffer}},{binding:6,resource:{buffer:this.dtBuffer}}]}),this.g2pBindGroup=T.createBindGroup({layout:this.g2pPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:N}},{binding:2,resource:{buffer:this.realBoxSizeBuffer}},{binding:3,resource:{buffer:I}},{binding:4,resource:{buffer:this.numParticlesBuffer}},{binding:5,resource:{buffer:this.dtBuffer}}]}),this.copyPositionBindGroup=T.createBindGroup({layout:this.copyPositionPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:this.numParticlesBuffer}}]}),this.particleBuffer=v,this.densityGridBuffer=G}initDambreak(v,z){let S=new ArrayBuffer(He*this.maxParticleCount);this.numParticles=0;const G=Fn(v,z);for(const T of G){const B=He*this.numParticles;new Float32Array(S,B,3).set(T),this.numParticles++}console.log(this.numParticles),this.numParticles<z&&console.log("warning: actual number of particles is smaller than the specified number. make bounding box larger.");let M=new ArrayBuffer(He*this.numParticles);const I=new Uint8Array(S),U=new Uint8Array(M);return U.set(I.subarray(0,U.length)),M}reset(v,z){if(this.gridCount=Math.ceil(v[0])*Math.ceil(v[1])*Math.ceil(v[2]),this.gridCount>this.maxGridCount)throw new Error("gridCount should be equal to or less than maxGridCount");this.densityGridCount=this.gridCount;const S=new Float32Array(v);this.device.queue.writeBuffer(this.initBoxSizeBuffer,0,S),this.frameCount=0;let G=this.initDambreak(v,z);this.device.queue.writeBuffer(this.particleBuffer,0,G),this.changeBoxSize(v),this.changeNumParticles(this.numParticles)}execute(v,z,S,G,M,I,U,T){const B=v.beginComputePass();this.mouseInfoViews.mouseCoord.set([z[0],z[1]]),this.mouseInfoViews.mouseVel.set([S[0],S[1]]),this.mouseInfoViews.mouseRadius.set([G]),this.device.queue.writeBuffer(this.mouseInfoUniformBuffer,0,this.mouseInfoValues);const H=new Float32Array([I]);if(this.device.queue.writeBuffer(this.dtBuffer,0,H),M){if(U)for(let K=0;K<1;K++)B.setBindGroup(0,this.clearGridBindGroup),B.setPipeline(this.clearGridPipeline),B.dispatchWorkgroups(Math.ceil(this.gridCount/64)),B.setBindGroup(0,this.p2g1BindGroup),B.setPipeline(this.p2g1Pipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64)),B.setBindGroup(0,this.p2g2BindGroup),B.setPipeline(this.p2g2Pipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64)),B.setBindGroup(0,this.updateGridBindGroup),B.setPipeline(this.updateGridPipeline),B.dispatchWorkgroups(Math.ceil(this.gridCount/64)),B.setBindGroup(0,this.g2pBindGroup),B.setPipeline(this.g2pPipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64));let k=T[0]*T[1]*T[2];B.setBindGroup(0,this.clearDensityGridBindGroup),B.setPipeline(this.clearDensityGridPipeline),B.dispatchWorkgroups(Math.ceil(k/2/64)),B.setBindGroup(0,this.p2gDensityBindGroup),B.setPipeline(this.p2gDensityPipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64)),B.setBindGroup(0,this.castDensityGridBindGroup),B.setPipeline(this.castDensityGridPipeline),B.dispatchWorkgroups(Math.ceil(k/2/64)),B.setBindGroup(0,this.copyPositionBindGroup),B.setPipeline(this.copyPositionPipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64))}else if(U){for(let k=0;k<1;k++)B.setBindGroup(0,this.clearGridBindGroup),B.setPipeline(this.clearGridPipeline),B.dispatchWorkgroups(Math.ceil(this.gridCount/64)),B.setBindGroup(0,this.p2g1BindGroup),B.setPipeline(this.p2g1Pipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64)),B.setBindGroup(0,this.p2g2BindGroup),B.setPipeline(this.p2g2Pipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64)),B.setBindGroup(0,this.updateGridBindGroup),B.setPipeline(this.updateGridPipeline),B.dispatchWorkgroups(Math.ceil(this.gridCount/64)),B.setBindGroup(0,this.g2pBindGroup),B.setPipeline(this.g2pPipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64));B.setBindGroup(0,this.copyPositionBindGroup),B.setPipeline(this.copyPositionPipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64))}B.end(),this.frameCount++}changeBoxSize(v){const z=new Float32Array(v);this.device.queue.writeBuffer(this.realBoxSizeBuffer,0,z)}changeNumParticles(v){const z=new Int32Array([v]);this.device.queue.writeBuffer(this.numParticlesBuffer,0,z),this.numParticles=v}}var Un=`@group(0) @binding(1) var depthTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: FilterUniforms;

struct FragmentInput {
    @location(0) uv: vec2f,  
    @location(1) iuv: vec2f
}

override projectedParticleConstant: f32; 
override maxFilterSize: f32;
override blur2D: u32;

struct FilterUniforms {
    blurDir: vec2f,
}

@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    let depth: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv), 0).r);

    if (depth >= 1e4) {
        return vec4f(vec3f(depth), 1.);
    }

    let filterSize: i32 = min(i32(maxFilterSize), i32(ceil(projectedParticleConstant / depth)));

    let sigma: f32 = f32(filterSize) / 2.0; 
    let sigmaSquareInv: f32 = 1.0 / (2.0 * sigma * sigma);

    let mu = 3. * 0.6; 
    let depthThreshold = 10.0 * 0.6;

    let higherDepthBound = depth + mu;

    var sum: f32 = depth;
    var wsum: f32 = 1.0;
    
    if (blur2D == 0) {
        var sum2 = vec2f(0, 0);
        var wsum2 = vec2f(0, 0);
        var depthThresholdLowX = depth - depthThreshold;
        var depthThresholdHighX = depth + depthThreshold;
        var depthThresholdLowY = depth - depthThreshold;
        var depthThresholdHighY = depth + depthThreshold;
        for (var r: i32 = 1; r <= filterSize; r++) {
            var gaussianWeight: f32 = exp(-f32(r * r) * sigmaSquareInv);
            var sampledDepthX: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv - vec2f(f32(r)) * uniforms.blurDir), 0).r);
            var sampledDepthY: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv + vec2f(f32(r)) * uniforms.blurDir), 0).r);

            var w = vec2f(gaussianWeight);

            if (sampledDepthX < depthThresholdLowX) {
                w.x = 0.;
                w.y = 0.; 
            } else {
                if (sampledDepthX > depthThresholdHighX) {
                    sampledDepthX = higherDepthBound;
                } else {
                    depthThresholdLowX = min(depthThresholdLowX, sampledDepthX - depthThreshold);
                    depthThresholdHighX = max(depthThresholdHighX, sampledDepthX + depthThreshold);
                }
            }

            if (sampledDepthY < depthThresholdLowY) {
                w.x = 0.;
                w.y = 0.; 
            } else {
                if (sampledDepthY > depthThresholdHighY) {
                    sampledDepthY = higherDepthBound;
                } else {
                    depthThresholdLowY = min(depthThresholdLowY, sampledDepthY - depthThreshold);
                    depthThresholdHighY = max(depthThresholdHighY, sampledDepthY + depthThreshold);
                }
            }

            sum2 += vec2f(sampledDepthX, sampledDepthY) * w;
            wsum2 += w;
        }
        sum += sum2.x + sum2.y;
        wsum += wsum2.x + wsum2.y;
    } else {
        let filterSize2D = 2;
        var depthThresholdLow = depth - depthThreshold;
        var depthThresholdHigh = depth + depthThreshold;
        var sum4 = vec4f(0.);
        var wsum4 = vec4f(0.);
        for (var r: i32 = 1; r <= filterSize2D; r++) {
            for (var i: i32 = 0; i < 2 * r; i++) {
                let gaussianWeight = exp((-f32(r*r) + f32((r-i) * (r-i))) * sigmaSquareInv);

                var sampledDepthX: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv - vec2f(f32(r), f32(r-i))), 0).r);
                var sampledDepthY: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv + vec2f(f32(r), f32(r-i))), 0).r);
                var sampledDepthZ: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv - vec2f(f32(r-i), f32(r))), 0).r);
                var sampledDepthW: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv + vec2f(f32(r-i), f32(r))), 0).r);

                var w = vec4f(gaussianWeight);

                if (sampledDepthX < depthThresholdLow) {
                    w.x = 0.;
                    w.y = 0.; 
                } else {
                    if (sampledDepthX > depthThresholdHigh) {
                        sampledDepthX = higherDepthBound;
                    } else {
                        depthThresholdLow = min(depthThresholdLow, sampledDepthX - depthThreshold);
                        depthThresholdHigh = max(depthThresholdHigh, sampledDepthX + depthThreshold);
                    }
                }

                if (sampledDepthY < depthThresholdLow) {
                    w.x = 0.;
                    w.y = 0.; 
                } else {
                    if (sampledDepthY > depthThresholdHigh) {
                        sampledDepthY = higherDepthBound;
                    } else {
                        depthThresholdLow = min(depthThresholdLow, sampledDepthY - depthThreshold);
                        depthThresholdHigh = max(depthThresholdHigh, sampledDepthY + depthThreshold);
                    }
                }

                if (sampledDepthZ < depthThresholdLow) {
                    w.z = 0.;
                    w.w = 0.; 
                } else {
                    if (sampledDepthZ > depthThresholdHigh) {
                        sampledDepthZ = higherDepthBound;
                    } else {
                        depthThresholdLow = min(depthThresholdLow, sampledDepthZ - depthThreshold);
                        depthThresholdHigh = max(depthThresholdHigh, sampledDepthZ + depthThreshold);
                    }
                }

                if (sampledDepthW < depthThresholdLow) {
                    w.z = 0.;
                    w.w = 0.; 
                } else {
                    if (sampledDepthW > depthThresholdHigh) {
                        sampledDepthW = higherDepthBound;
                    } else {
                        depthThresholdLow = min(depthThresholdLow, sampledDepthW - depthThreshold);
                        depthThresholdHigh = max(depthThresholdHigh, sampledDepthW + depthThreshold);
                    }
                }

                sum4 += vec4f(sampledDepthX, sampledDepthY, sampledDepthZ, sampledDepthW) * w;
                wsum4 += w;
            }
        }
        sum += sum4.x + sum4.y + sum4.z + sum4.w;
        wsum += wsum4.x + wsum4.y + wsum4.z + wsum4.w;
    }

    return vec4f(sum / wsum, 0., 0., 1.);
}`,An=`@group(0) @binding(0) var textureSampler: sampler;\r
@group(0) @binding(1) var depthTexture: texture_2d<f32>;\r
@group(0) @binding(2) var<uniform> uniforms: RenderUniforms;\r
@group(0) @binding(3) var thicknessTexture: texture_2d<f32>;\r
@group(0) @binding(4) var envmapTexture: texture_cube<f32>;\r
@group(0) @binding(5) var bgTexture: texture_2d<f32>;\r
@group(0) @binding(6) var<uniform> diffuseColor: vec3f;\r
@group(0) @binding(7) var<uniform> density: f32;

struct RenderUniforms {\r
    texelSize: vec2f, \r
    sphereSize: f32, \r
    invProjectionMatrix: mat4x4f, \r
    projectionMatrix: mat4x4f, \r
    viewMatrix: mat4x4f, \r
    invViewMatrix: mat4x4f, \r
}

struct FragmentInput {\r
    @location(0) uv: vec2f, \r
    @location(1) iuv: vec2f, \r
}

fn computeViewPosFromUVDepth(texCoord: vec2f, depth: f32) -> vec3f {\r
    var ndc: vec4f = vec4f(texCoord.x * 2.0 - 1.0, 1.0 - 2.0 * texCoord.y, 0.0, 1.0);\r
    ndc.z = -uniforms.projectionMatrix[2].z + uniforms.projectionMatrix[3].z / depth;\r
    ndc.w = 1.0;

    var eye_pos: vec4f = uniforms.invProjectionMatrix * ndc;

    return eye_pos.xyz / eye_pos.w;\r
}

fn getViewPosFromTexCoord(texCoord: vec2f, iuv: vec2f) -> vec3f {\r
    var depth: f32 = abs(textureLoad(depthTexture, vec2u(iuv), 0).x);\r
    return computeViewPosFromUVDepth(texCoord, depth);\r
}

fn gamma(v: vec3f) -> vec3f {\r
    return pow(v, vec3(1.0 / 2.2));\r
}\r
fn invGamma(v: vec3f) -> vec3f {\r
    return pow(v, vec3(2.2));\r
}

fn calcReflactedTexCoord(surfacePosView: vec3f, refractionDirView: vec3f, thickness: f32) -> vec2f {\r
    let refractionStrength = 3.;\r
    let exitPosView: vec3f = surfacePosView + refractionDirView * thickness * refractionStrength;\r
    let exitPosClip: vec4f = uniforms.projectionMatrix * vec4f(exitPosView, 1.);\r
    let exitPosNdc: vec3f = exitPosClip.xyz / exitPosClip.w;\r
    return clamp(vec2f((1. + exitPosNdc.x) / 2., (1. - exitPosNdc.y) / 2.), vec2f(0.), vec2f(1.));\r
}

fn floorColor(surfacePos: vec3f, refractDir: vec3f) -> vec4f {
    return vec4f(0.14, 0.24, 0.29, 1.0);
}

fn studioColor(direction: vec3f) -> vec3f {
    let vertical = clamp(direction.y * 0.5 + 0.5, 0.0, 1.0);
    let base = mix(vec3f(0.12, 0.23, 0.29), vec3f(0.68, 0.82, 0.86), vertical);
    let sideLight = pow(max(0.0, direction.x), 8.0) * vec3f(0.45, 0.58, 0.62);
    return base + sideLight;
}

@fragment\r
fn fs(input: FragmentInput) -> @location(0) vec4f {\r
    let depth: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv), 0).r);\r
    var thickness = textureSample(thicknessTexture, textureSampler, input.uv).r;

    if (depth >= 1e4) {\r
        let bgColor: vec3f = textureSampleLevel(bgTexture, textureSampler, input.uv, 0.0).rgb;\r
        return vec4f(bgColor, 0.);\r
    }

    let surfacePosView = computeViewPosFromUVDepth(input.uv, depth);\r
    let surfacePosWorld = (uniforms.invViewMatrix * vec4f(surfacePosView, 1.0)).xyz;\r
    if (surfacePosWorld.y < 2.0) {\r
        let bgColor: vec3f = textureSampleLevel(bgTexture, textureSampler, input.uv, 0.0).rgb;\r
        return vec4f(bgColor, 0.);\r
    }\r
    var ddx: vec3f = getViewPosFromTexCoord(input.uv + vec2f(uniforms.texelSize.x, 0.), input.iuv + vec2f(1.0, 0.0)) - surfacePosView; \r
    var ddy: vec3f = getViewPosFromTexCoord(input.uv + vec2f(0., uniforms.texelSize.y), input.iuv + vec2f(0.0, 1.0)) - surfacePosView; \r
    let ddx2: vec3f = surfacePosView - getViewPosFromTexCoord(input.uv + vec2f(-uniforms.texelSize.x, 0.), input.iuv + vec2f(-1.0, 0.0));\r
    let ddy2: vec3f = surfacePosView - getViewPosFromTexCoord(input.uv + vec2f(0., -uniforms.texelSize.y), input.iuv + vec2f(0.0, -1.0));\r
    let maxDeltaZ = max(max(abs(ddx.z), abs(ddy.z)), max(abs(ddx2.z), abs(ddy2.z)));

    ddx = select(ddx, ddx2, abs(ddx.z) > abs(ddx2.z));\r
    ddy = select(ddy, ddy2, abs(ddy.z) > abs(ddy2.z));

    var normal: vec3f = -normalize(cross(ddx, ddy)); \r
    var rayDirView = normalize(surfacePosView);\r
    var lightDirView = normalize((uniforms.viewMatrix * vec4f(0.2, 0.0, 1, 0.)).xyz);\r
    var H: vec3f        = normalize(lightDirView - rayDirView);\r
    var specular: f32   = pow(max(0.0, dot(H, normal)), 300.);\r
    var diffuse: f32  = max(0.0, dot(lightDirView, normal)) * 1.0;

    var transmittance: vec3f = exp(-density * 10 * thickness * (1.0 - diffuseColor)); \r
    var refractionDirView: vec3f = normalize(refract(rayDirView, normal, 1.0 / 1.333));
    var refractionDirWorld: vec3f = normalize((uniforms.invViewMatrix * vec4f(refractionDirView, 0.)).xyz);
    let refractedEnvironment = textureSampleLevel(envmapTexture, textureSampler, refractionDirWorld, 0.0).rgb;
    var transmitted = pow(mix(studioColor(refractionDirWorld), refractedEnvironment, 0.08), vec3f(2.2));
    if (refractionDirWorld.y < 0.) {\r
        let surfacePosWorld = (uniforms.invViewMatrix * vec4f(surfacePosView, 1.)).xyz;\r
        let floor = floorColor(surfacePosWorld, refractionDirWorld);\r
        transmitted = select(transmitted, invGamma(floor.rgb), floor.w > 0.5);\r
    }\r
    var refractionColor: vec3f = transmitted * transmittance;

    let F0 = 0.02;\r
    var fresnelBiased: f32 = clamp(F0 + (1.0 - F0) * pow(1.0 - dot(normal, -rayDirView), 5.0) + 0.0, 0., 1.);\r
    var fresnel: f32 = clamp(F0 + (1.0 - F0) * pow(1.0 - dot(normal, -rayDirView), 5.0), 0., 1.);

    var reflectionDir: vec3f = reflect(rayDirView, normal);
    var reflectionDirWorld: vec3f = (uniforms.invViewMatrix * vec4f(reflectionDir, 0.0)).xyz;
    let reflectedEnvironment = textureSampleLevel(envmapTexture, textureSampler, reflectionDirWorld, 0.0).rgb;
    let reflectedStudio = mix(studioColor(reflectionDirWorld), reflectedEnvironment, 0.08);
    var reflectionColor: vec3f = invGamma(select(reflectedStudio, vec3f(0.16), reflectionDirWorld.y < 0.)); 
    fresnel = select(fresnel, 0.1 * fresnel, reflectionDirWorld.y < 0.);\r
    fresnelBiased = select(fresnelBiased, 0.1 * fresnelBiased, reflectionDirWorld.y < 0.);

    var finalColor = 0.45 * specular + mix(refractionColor, reflectionColor, fresnel);

    return vec4f(gamma(finalColor), 1.0);\r
}`,Rn=`struct VertexOutput {
  @builtin(position) position : vec4f,
  @location(0) uv : vec2f,
  @location(1) iuv : vec2f,
}

override screenWidth: f32;
override screenHeight: f32;

@vertex
fn vs(@builtin(vertex_index) vertex_index : u32) -> VertexOutput {
    var out: VertexOutput;

    var pos = array(
        vec2( 1.0,  1.0),
        vec2( 1.0, -1.0),
        vec2(-1.0, -1.0),
        vec2( 1.0,  1.0),
        vec2(-1.0, -1.0),
        vec2(-1.0,  1.0),
    );

    var uv = array(
        vec2(1.0, 0.0),
        vec2(1.0, 1.0),
        vec2(0.0, 1.0),
        vec2(1.0, 0.0),
        vec2(0.0, 1.0),
        vec2(0.0, 0.0),
    );

    out.position = vec4(pos[vertex_index], 0.0, 1.0);
    out.uv = uv[vertex_index];
    out.iuv = out.uv * vec2f(screenWidth, screenHeight);

    return out;
}`,En=`struct RenderUniforms {
    texelSize: vec2f, 
    sphereSize: f32, 
    invProjectionMatrix: mat4x4f, 
    projectionMatrix: mat4x4f, 
    viewMatrix: mat4x4f, 
    invViewMatrix: mat4x4f, 
}

struct VertexOutput {
    @builtin(position) position: vec4f, 
    @location(0) uv: vec2f, 
}

struct FragmentInput {
    @location(0) uv: vec2f, 
}

struct PosVel {
    position: vec3f, 
    v: vec3f, 
}

@group(0) @binding(0) var<storage> particles: array<PosVel>;
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;

@vertex
fn vs(    
    @builtin(vertex_index) vertex_index: u32, 
    @builtin(instance_index) instance_index: u32
) -> VertexOutput {
    var corner_positions = array(
        vec2( 0.5,  0.5),
        vec2( 0.5, -0.5),
        vec2(-0.5, -0.5),
        vec2( 0.5,  0.5),
        vec2(-0.5, -0.5),
        vec2(-0.5,  0.5),
    );

    var size = uniforms.sphereSize;
    let stretched_position = corner_positions[vertex_index] * size;
    let corner = vec3(stretched_position, 0.0);

    let uv = corner_positions[vertex_index] + 0.5;

    let real_position = particles[instance_index].position;
    let view_position = (uniforms.viewMatrix * vec4f(real_position, 1.0)).xyz;

    let out_position = uniforms.projectionMatrix * vec4f(view_position + corner, 1.0);

    return VertexOutput(out_position, uv);
}

@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    var normalxy: vec2f = input.uv * 2.0 - 1.0;
    var r2: f32 = dot(normalxy, normalxy);
    if (r2 > 1.0) {
        discard;
    }
    var thickness: f32 = sqrt(1.0 - r2);
    let particle_alpha = 0.05;

    return vec4f(vec3f(particle_alpha * thickness), 1.0);
}`,Yn=`@group(0) @binding(0) var textureSampler: sampler;
@group(0) @binding(1) var texture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: FilterUniforms;
@group(0) @binding(3) var<uniform> filterSize: i32;

struct FragmentInput {
    @location(0) uv: vec2f,  
    @location(1) iuv: vec2f
}

struct FilterUniforms {
    blurDir: vec2f, 
}

override thicknessTextureWidth: f32;
override thicknessTextureHeight: f32;

@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    var thickness: f32 = textureSample(texture, textureSampler, input.uv).r;
    if (thickness == 0.) {
        return vec4f(0., 0., 0., 1.);
    }

    var sigma: f32 = f32(filterSize) / 3.0;
    var sigmaSquareInv: f32 = 1.0 / (2.0 * sigma * sigma);

    var sum = thickness;
    var wsum = 1.;

    let iuv: vec2f = vec2f(thicknessTextureWidth, thicknessTextureHeight) * input.uv;

    for (var x: i32 = 1; x <= filterSize; x++) {
        var coords: vec2f = vec2f(f32(x));
        var sampledThicknessLeft: f32 = textureLoad(texture, vec2u(iuv - uniforms.blurDir * coords), 0).r;
        var sampledThicknessRight: f32 = textureLoad(texture, vec2u(iuv + uniforms.blurDir * coords), 0).r;

        var w: f32 = exp(-f32(x * x) * sigmaSquareInv);

        sum += (sampledThicknessLeft + sampledThicknessRight) * w;
        wsum += 2.0 * w;
    }

    return vec4f(sum / wsum, 0., 0., 1.);
}`,Ln=`struct VertexOutput {
    @builtin(position) position: vec4f, 
    @location(0) uv: vec2f, 
    @location(1) viewPosition: vec3f, 
}

struct FragmentInput {
    @location(0) uv: vec2f, 
    @location(1) viewPosition: vec3f, 
}

struct FragmentOutput {
    
    @location(0) depth: f32, 
    @builtin(frag_depth) fragDepth: f32, 
}

struct RenderUniforms {
    texelSize: vec2f, 
    sphereSize: f32, 
    invProjectionMatrix: mat4x4f, 
    projectionMatrix: mat4x4f, 
    viewMatrix: mat4x4f, 
    invViewMatrix: mat4x4f, 
}

struct PosVel {
    position: vec3f, 
    v: vec3f, 
}

@group(0) @binding(0) var<storage> particles: array<PosVel>;
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;

@vertex
fn vs(    
    @builtin(vertex_index) vertex_index: u32, 
    @builtin(instance_index) instance_index: u32
) -> VertexOutput {
    var corner_positions = array(
        vec2( 0.5,  0.5),
        vec2( 0.5, -0.5),
        vec2(-0.5, -0.5),
        vec2( 0.5,  0.5),
        vec2(-0.5, -0.5),
        vec2(-0.5,  0.5),
    );

    var size = uniforms.sphereSize;
    let stretched_position = corner_positions[vertex_index] * size;
    let corner = vec3(stretched_position, 0.0);

    let uv = corner_positions[vertex_index] + 0.5;

    let real_position = particles[instance_index].position;
    let view_position = (uniforms.viewMatrix * vec4f(real_position, 1.0)).xyz;

    let out_position = uniforms.projectionMatrix * vec4f(view_position + corner, 1.0);

    return VertexOutput(out_position, uv, view_position);
}

@fragment
fn fs(input: FragmentInput) -> FragmentOutput {
    var out: FragmentOutput;

    var normalxy: vec2f = input.uv * 2.0 - 1.0;
    var r2: f32 = dot(normalxy, normalxy);
    if (r2 > 1.0) {
        discard;
    }
    var normalz = sqrt(1.0 - r2);
    var normal = vec3(normalxy, normalz);

    var radius = uniforms.sphereSize / 2;
    var realViewPos: vec4f = vec4f(input.viewPosition + normal * radius, 1.0);
    var clipSpacePos: vec4f = uniforms.projectionMatrix * realViewPos;
    out.fragDepth = clipSpacePos.z / clipSpacePos.w;
    out.depth = realViewPos.z;
    return out;
}`,On=`struct VertexOutput {
    @builtin(position) position: vec4f, 
    @location(0) uv: vec2f, 
    @location(1) viewPosition: vec3f, 
    @location(2) speed: f32, 
}

struct FragmentInput {
    @location(0) uv: vec2f, 
    @location(1) viewPosition: vec3f, 
    @location(2) speed: f32, 
}

struct FragmentOutput {
    @location(0) depth: f32, 
    @location(1) color: vec4f, 
    @builtin(frag_depth) fragDepth: f32, 
}

struct RenderUniforms {
    texelSize: vec2f, 
    sphereSize: f32, 
    invProjectionMatrix: mat4x4f, 
    projectionMatrix: mat4x4f, 
    viewMatrix: mat4x4f, 
    invViewMatrix: mat4x4f, 
}

struct PosVel {
    position: vec3f, 
    v: vec3f, 
}

@group(0) @binding(0) var<storage> particles: array<PosVel>;
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;

@vertex
fn vs(    
    @builtin(vertex_index) vertex_index: u32, 
    @builtin(instance_index) instance_index: u32
) -> VertexOutput {
    var corner_positions = array(
        vec2( 0.5,  0.5),
        vec2( 0.5, -0.5),
        vec2(-0.5, -0.5),
        vec2( 0.5,  0.5),
        vec2(-0.5, -0.5),
        vec2(-0.5,  0.5),
    );

    var size = uniforms.sphereSize;
    let stretched_position = corner_positions[vertex_index] * size;
    let corner = vec3(stretched_position, 0.0);
    let uv = corner_positions[vertex_index] + 0.5;

    let real_position = particles[instance_index].position;
    let view_position = (uniforms.viewMatrix * vec4f(real_position, 1.0)).xyz;

    let out_position = uniforms.projectionMatrix * vec4f(view_position + corner, 1.0);

    let speed = length(particles[instance_index].v);
    return VertexOutput(out_position, uv, view_position, speed);
}

@fragment
fn fs(input: FragmentInput) -> FragmentOutput {
    var out: FragmentOutput;

    var normalxy: vec2f = input.uv * 2.0 - 1.0;
    var r2: f32 = dot(normalxy, normalxy);
    if (r2 > 1.0) {
        discard;
    }
    var normalz = sqrt(1.0 - r2);
    var normal = vec3(normalxy, normalz);

    var radius = uniforms.sphereSize / 2;
    var realViewPos: vec4f = vec4f(input.viewPosition + normal * radius, 1.0);
    var clipSpacePos: vec4f = uniforms.projectionMatrix * realViewPos;
    out.fragDepth = clipSpacePos.z / clipSpacePos.w;

    out.depth = realViewPos.z;
    out.color = vec4f(input.speed, 0, 0, 1.);
    return out;
}`,Xn=`@group(0) @binding(0) var envmapTexture: texture_cube<f32>;\r
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;\r
@group(0) @binding(2) var textureSampler: sampler;

struct RenderUniforms {\r
    texelSize: vec2f, \r
    sphereSize: f32, \r
    invProjectionMatrix: mat4x4f, \r
    projectionMatrix: mat4x4f, \r
    viewMatrix: mat4x4f, \r
    invViewMatrix: mat4x4f, \r
}

struct FragmentInput {\r
    @location(0) uv: vec2f,  \r
    @location(1) iuv: vec2f\r
}

fn computeViewPosFromUVDepth(texCoord: vec2f, depth: f32) -> vec3f {\r
    var ndc: vec4f = vec4f(texCoord.x * 2.0 - 1.0, 1.0 - 2.0 * texCoord.y, 0.0, 1.0);\r
    ndc.z = -uniforms.projectionMatrix[2].z + uniforms.projectionMatrix[3].z / depth;\r
    ndc.w = 1.0;

    var eye_pos: vec4f = uniforms.invProjectionMatrix * ndc;

    return eye_pos.xyz / eye_pos.w;\r
}

fn getCameraPosition() -> vec3f {\r
    return (uniforms.invViewMatrix * vec4(0, 0, 0, 1)).xyz;\r
}

fn rayPlaneIntersection(rayOrigin: vec3f, rayDir: vec3f) -> vec3f {\r
    
    
    

    let t = -rayOrigin.y / rayDir.y;\r
    return rayOrigin + t * rayDir;\r
}

@fragment\r
fn fs(input: FragmentInput) -> @location(0) vec4f {
    let rayDirWorld = normalize((uniforms.invViewMatrix * vec4f(computeViewPosFromUVDepth(input.uv, 1.0), 0.)).xyz); 
    let vertical = clamp(rayDirWorld.y * 0.5 + 0.5, 0.0, 1.0);
    let horizonGlow = pow(1.0 - abs(rayDirWorld.y), 4.0);
    let lower = vec3f(0.12, 0.22, 0.28);
    let upper = vec3f(0.48, 0.64, 0.70);
    let studio = mix(lower, upper, vertical) + horizonGlow * vec3f(0.08, 0.13, 0.15);
    let environment = textureSampleLevel(envmapTexture, textureSampler, rayDirWorld, 0.0).rgb;
    return vec4f(mix(studio, environment, 0.06), 1.0);
}`,kn=`struct FragmentInput {
    @location(0) uv: vec2f,  
    @location(1) iuv: vec2f
}

struct RenderUniforms {
    texelSize: vec2f, 
    sphereSize: f32, 
    invProjectionMatrix: mat4x4f, 
    projectionMatrix: mat4x4f, 
    viewMatrix: mat4x4f, 
    invViewMatrix: mat4x4f, 
}

@group(0) @binding(0) var depthTexture: texture_2d<f32>;
@group(0) @binding(1) var densityGridTexture: texture_3d<f32>;
@group(0) @binding(2) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(3) var<uniform> initBoxSize: vec3f;
@group(0) @binding(4) var textureSampler: sampler;
@group(0) @binding(5) var bgTexture: texture_2d<f32>;
@group(0) @binding(6) var<uniform> densityGridSize: vec3f;

fn computeViewPosFromUVDepth(texCoord: vec2f, depth: f32) -> vec3f {
    var ndc: vec4f = vec4f(texCoord.x * 2.0 - 1.0, 1.0 - 2.0 * texCoord.y, 0.0, 1.0);
    ndc.z = -uniforms.projectionMatrix[2].z + uniforms.projectionMatrix[3].z / depth;
    ndc.w = 1.0;

    var eye_pos: vec4f = uniforms.invProjectionMatrix * ndc;

    return eye_pos.xyz / eye_pos.w;
}

fn getViewPosFromTexCoord(texCoord: vec2f, iuv: vec2f) -> vec3f {
    var depth: f32 = abs(textureLoad(depthTexture, vec2u(iuv), 0).x);
    return computeViewPosFromUVDepth(texCoord, depth);
}

fn gamma(v: vec3f) -> vec3f {
    return pow(v, vec3(1.0 / 2.2));
}

@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    let depth: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv), 0).r);
    if (depth >= 1e4) {
        let bgColor: vec3f = textureSampleLevel(bgTexture, textureSampler, input.uv, 0.0).rgb;
        return vec4f(bgColor, 0.);
    }

    let surfacePosView = computeViewPosFromUVDepth(input.uv, depth);
    let rayDirView = normalize(surfacePosView);
    var surfacePosWorld = (uniforms.invViewMatrix * vec4f(surfacePosView, 1.)).xyz;
    let rayDirWorld = (uniforms.invViewMatrix * vec4f(rayDirView, 0.)).xyz;

    var ddx: vec3f = getViewPosFromTexCoord(input.uv + vec2f(uniforms.texelSize.x, 0.), input.iuv + vec2f(1.0, 0.0)) - surfacePosView; 
    var ddy: vec3f = getViewPosFromTexCoord(input.uv + vec2f(0., uniforms.texelSize.y), input.iuv + vec2f(0.0, 1.0)) - surfacePosView; 
    let ddx2: vec3f = surfacePosView - getViewPosFromTexCoord(input.uv + vec2f(-uniforms.texelSize.x, 0.), input.iuv + vec2f(-1.0, 0.0));
    let ddy2: vec3f = surfacePosView - getViewPosFromTexCoord(input.uv + vec2f(0., -uniforms.texelSize.y), input.iuv + vec2f(0.0, -1.0));
    ddx = select(ddx, ddx2, abs(ddx.z) > abs(ddx2.z));
    ddy = select(ddy, ddy2, abs(ddy.z) > abs(ddy2.z));
    var normal: vec3f = -normalize(cross(ddx, ddy)); 
    var normalWorld: vec3f = (uniforms.invViewMatrix * vec4f(normal, 0.)).xyz; 

    var densitySum: f32 = 0.;
    var t: f32 = 0.;
    let stepSize: f32 = 0.6; 
    let densityScale: f32 = 0.2; 
    let lightDirWorld: vec3f = normalize(vec3f(0, 1, 0));

    surfacePosWorld += 1.5 * lightDirWorld; 
    for (var i = 0; i < 1000; i++) { 
        let posWorld = surfacePosWorld + t * lightDirWorld;
        if (any(posWorld <= vec3f(0.)) || any(posWorld >= initBoxSize - 1)) { 
            break;
        }
        let worldCoord: vec3f = posWorld / densityGridSize;
        let density: f32 = textureSampleLevel(densityGridTexture, textureSampler, worldCoord.zyx, 0.).r;
        densitySum += stepSize * density * densityScale;
        t += stepSize;
    }

    let speed = textureSampleLevel(bgTexture, textureSampler, input.uv, 0.0).r;
    let albedo: vec3f = vec3f(0, 70, 250) / 256.;

    let LdotN: f32 = 0.5 * dot(normalWorld, lightDirWorld) + 0.5;
    let shadow = exp(-1. * densitySum);

    let H: vec3f        = normalize(lightDirWorld - rayDirWorld);
    let specular: f32   = pow(max(0.0, dot(H, normalWorld)), 50.);
    let diffuse: f32 = max(dot(normalWorld, lightDirWorld), 0.);
    var finalColor = shadow * LdotN * albedo * 1. + 0.1 * diffuse * shadow + 0.3 * specular * shadow;

    return vec4f(gamma(finalColor), 1.); 
}`;class qn{constructor(v,z,S,G,M,I,U,T,B,H,k,K,ee){b(this,"depthFilter1DPipeline");b(this,"depthFilter2DPipeline");b(this,"thicknessMapPipeline");b(this,"thicknessFilterPipeline");b(this,"fluidPipeline");b(this,"depthMapPipeline");b(this,"spherePipeline");b(this,"bgColorPipeline");b(this,"densityRaymarchPipeline");b(this,"depthMapTextureView");b(this,"tmpDepthMapTextureView");b(this,"thicknessTextureView");b(this,"tmpThicknessTextureView");b(this,"depthTestTextureView");b(this,"tmpOutputTextureView");b(this,"depthFilter1DBindGroups");b(this,"depthFilter2DBindGroups");b(this,"thicknessMapBindGroup");b(this,"thicknessFilterBindGroups");b(this,"fluidBindGroup");b(this,"depthMapBindGroup");b(this,"sphereBindGroup");b(this,"bgColorBindGroup");b(this,"densityRaymarchBindGroup");b(this,"diffuseColorBuffer");b(this,"colorDensityBuffer");b(this,"densityGridSizeBuffer");b(this,"device");this.device=M;const ie=50,re=2*k,ue=12,$=B.width/2,W=B.height/2,L={screenHeight:B.height,screenWidth:B.width},Z={maxFilterSize:ie,projectedParticleConstant:ue*re*.05*(B.height/2)/Math.tan(K/2)},Q={thicknessTextureWidth:$,thicknessTextureHeight:W},ne=M.createSampler({magFilter:"linear",minFilter:"linear"}),J=M.createShaderModule({code:Rn}),X=M.createShaderModule({code:Un}),N=M.createShaderModule({code:An}),te=M.createShaderModule({code:Ln}),ve=M.createShaderModule({code:On}),E=M.createShaderModule({code:En}),j=M.createShaderModule({code:Yn}),R=M.createShaderModule({code:Xn}),me=M.createShaderModule({code:kn});this.depthMapPipeline=M.createRenderPipeline({label:"depthMap pipeline",layout:"auto",vertex:{module:te},fragment:{module:te,targets:[{format:"r32float"}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth32float"}}),this.spherePipeline=M.createRenderPipeline({label:"sphere pipeline",layout:"auto",vertex:{module:ve},fragment:{module:ve,targets:[{format:"r32float"},{format:H}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth32float"}}),this.depthFilter1DPipeline=M.createRenderPipeline({label:"depth filter pipeline (1d)",layout:"auto",vertex:{module:J,constants:L},fragment:{module:X,constants:{...Z,blur2D:0},targets:[{format:"r32float"}]},primitive:{topology:"triangle-list"}}),this.depthFilter2DPipeline=M.createRenderPipeline({label:"depth filter pipeline (2d)",layout:"auto",vertex:{module:J,constants:L},fragment:{module:X,constants:{...Z,blur2D:1},targets:[{format:"r32float"}]},primitive:{topology:"triangle-list"}}),this.thicknessMapPipeline=M.createRenderPipeline({label:"thickness map pipeline",layout:"auto",vertex:{module:E},fragment:{module:E,targets:[{format:"r16float",writeMask:GPUColorWrite.RED,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"}}),this.thicknessFilterPipeline=M.createRenderPipeline({label:"thickness filter pipeline",layout:"auto",vertex:{module:J,constants:L},fragment:{module:j,constants:Q,targets:[{format:"r16float"}]},primitive:{topology:"triangle-list"}}),this.fluidPipeline=M.createRenderPipeline({label:"fluid rendering pipeline",layout:"auto",vertex:{module:J,constants:L},fragment:{module:N,targets:[{format:H}]},primitive:{topology:"triangle-list"}}),this.bgColorPipeline=M.createRenderPipeline({label:"bgColor pipeline",layout:"auto",vertex:{module:J,constants:L},fragment:{module:R,targets:[{format:H}]},primitive:{topology:"triangle-list"}}),this.densityRaymarchPipeline=M.createRenderPipeline({label:"density raymarch pipeline",layout:"auto",vertex:{module:J,constants:L},fragment:{module:me,targets:[{format:H}]}});const fe=M.createTexture({label:"temporary depth map texture",size:[B.width,B.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r32float"}),ye=M.createTexture({label:"thickness map texture",size:[$,W,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r16float"}),ce=M.createTexture({label:"temporary thickness map texture",size:[$,W,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r16float"}),Te=M.createTexture({size:[B.width,B.height,1],format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),C=M.createTexture({size:[B.width,B.height,1],format:H,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING});this.depthMapTextureView=I,this.tmpDepthMapTextureView=fe.createView(),this.thicknessTextureView=ye.createView(),this.tmpThicknessTextureView=ce.createView(),this.depthTestTextureView=Te.createView(),this.tmpOutputTextureView=C.createView();const ge=M.createBuffer({label:"filter uniform buffer",size:8,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),se=M.createBuffer({label:"filter uniform buffer",size:8,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),xe=M.createBuffer({label:"thickness filter size buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.diffuseColorBuffer=M.createBuffer({label:"diffuse color buffer",size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.colorDensityBuffer=M.createBuffer({label:"color density buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.densityGridSizeBuffer=S;let ae=new Float32Array([1,0]),le=new Float32Array([0,1]),de=new Int32Array([15]);M.queue.writeBuffer(ge,0,ae),M.queue.writeBuffer(se,0,le),M.queue.writeBuffer(xe,0,de),this.depthFilter1DBindGroups=[],this.depthFilter1DBindGroups=[M.createBindGroup({label:"filterX bind group",layout:this.depthFilter1DPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.depthMapTextureView},{binding:2,resource:{buffer:ge}}]}),M.createBindGroup({label:"filterY bind group",layout:this.depthFilter1DPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.tmpDepthMapTextureView},{binding:2,resource:{buffer:se}}]})],this.depthFilter2DBindGroups=[M.createBindGroup({label:"filterX bind group",layout:this.depthFilter2DPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.depthMapTextureView},{binding:2,resource:{buffer:ge}}]}),M.createBindGroup({label:"filterY bind group",layout:this.depthFilter2DPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.tmpDepthMapTextureView},{binding:2,resource:{buffer:se}}]})],this.thicknessMapBindGroup=M.createBindGroup({label:"thickness map bind group",layout:this.thicknessMapPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:v}}]}),this.thicknessFilterBindGroups=[],this.thicknessFilterBindGroups=[M.createBindGroup({label:"thickness filterX bind group",layout:this.thicknessFilterPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:ne},{binding:1,resource:this.thicknessTextureView},{binding:2,resource:{buffer:ge}},{binding:3,resource:{buffer:xe}}]}),M.createBindGroup({label:"thickness filterY bind group",layout:this.thicknessFilterPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:ne},{binding:1,resource:this.tmpThicknessTextureView},{binding:2,resource:{buffer:se}},{binding:3,resource:{buffer:xe}}]})],this.fluidBindGroup=M.createBindGroup({label:"fluid bind group",layout:this.fluidPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:ne},{binding:1,resource:this.depthMapTextureView},{binding:2,resource:{buffer:v}},{binding:3,resource:this.thicknessTextureView},{binding:4,resource:U},{binding:5,resource:this.tmpOutputTextureView},{binding:6,resource:{buffer:this.diffuseColorBuffer}},{binding:7,resource:{buffer:this.colorDensityBuffer}}]}),this.depthMapBindGroup=M.createBindGroup({label:"depthMap bind group",layout:this.depthMapPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:v}}]}),this.bgColorBindGroup=M.createBindGroup({label:"bgColor bind group",layout:this.bgColorPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:U},{binding:1,resource:{buffer:v}},{binding:2,resource:ne}]}),this.sphereBindGroup=M.createBindGroup({label:"sphere bind group",layout:this.spherePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:v}}]}),this.densityRaymarchBindGroup=M.createBindGroup({label:"density raymarch bind group",layout:this.densityRaymarchPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.depthMapTextureView},{binding:1,resource:T},{binding:2,resource:{buffer:v}},{binding:3,resource:{buffer:G}},{binding:4,resource:ne},{binding:5,resource:this.tmpOutputTextureView},{binding:6,resource:{buffer:this.densityGridSizeBuffer}}]}),console.log(this.densityRaymarchPipeline.getBindGroupLayout(0))}execute(v,z,S,G,M,I){const U=new Float32Array(M),T=new Float32Array([I]);this.device.queue.writeBuffer(this.diffuseColorBuffer,0,U),this.device.queue.writeBuffer(this.colorDensityBuffer,0,T);const B=[{colorAttachments:[{view:this.tmpDepthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},{colorAttachments:[{view:this.depthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]}],H={colorAttachments:[{view:this.thicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},k=[{colorAttachments:[{view:this.tmpThicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},{colorAttachments:[{view:this.thicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]}],K={colorAttachments:[{view:this.tmpOutputTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},ee={colorAttachments:[{view:v.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},ie={colorAttachments:[{view:this.depthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.depthTestTextureView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},re={colorAttachments:[{view:this.depthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"},{view:this.tmpOutputTextureView,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.depthTestTextureView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},ue={colorAttachments:[{view:v.getCurrentTexture().createView(),clearValue:{r:.7,g:.7,b:.75,a:1},loadOp:"clear",storeOp:"store"}]};if(G){const W=z.beginRenderPass(K);W.setBindGroup(0,this.bgColorBindGroup),W.setPipeline(this.bgColorPipeline),W.draw(6),W.end();const L=z.beginRenderPass(re);L.setBindGroup(0,this.sphereBindGroup),L.setPipeline(this.spherePipeline),L.draw(6,S),L.end();const Z=z.beginRenderPass(ue);Z.setBindGroup(0,this.densityRaymarchBindGroup),Z.setPipeline(this.densityRaymarchPipeline),Z.draw(6),Z.end()}else{const W=z.beginRenderPass(ie);W.setBindGroup(0,this.depthMapBindGroup),W.setPipeline(this.depthMapPipeline),W.draw(6,S),W.end();for(var $=0;$<2;$++){const X=z.beginRenderPass(B[0]);X.setBindGroup(0,this.depthFilter1DBindGroups[0]),X.setPipeline(this.depthFilter1DPipeline),X.draw(6),X.end();const N=z.beginRenderPass(B[1]);N.setBindGroup(0,this.depthFilter1DBindGroups[1]),N.setPipeline(this.depthFilter1DPipeline),N.draw(6),N.end()}const L=z.beginRenderPass(B[0]);L.setBindGroup(0,this.depthFilter2DBindGroups[0]),L.setPipeline(this.depthFilter2DPipeline),L.draw(6),L.end();const Z=z.beginRenderPass(B[1]);Z.setBindGroup(0,this.depthFilter2DBindGroups[1]),Z.setPipeline(this.depthFilter2DPipeline),Z.draw(6),Z.end();const Q=z.beginRenderPass(H);Q.setBindGroup(0,this.thicknessMapBindGroup),Q.setPipeline(this.thicknessMapPipeline),Q.draw(6,S),Q.end();for(var $=0;$<1;$++){const N=z.beginRenderPass(k[0]);N.setBindGroup(0,this.thicknessFilterBindGroups[0]),N.setPipeline(this.thicknessFilterPipeline),N.draw(6),N.end();const te=z.beginRenderPass(k[1]);te.setBindGroup(0,this.thicknessFilterBindGroups[1]),te.setPipeline(this.thicknessFilterPipeline),te.draw(6),te.end()}const ne=z.beginRenderPass(K);ne.setBindGroup(0,this.bgColorBindGroup),ne.setPipeline(this.bgColorPipeline),ne.draw(6),ne.end();const J=z.beginRenderPass(ee);J.setBindGroup(0,this.fluidBindGroup),J.setPipeline(this.fluidPipeline),J.draw(6),J.end()}}}document.documentElement.classList.toggle("embed",new URLSearchParams(location.search).get("embed")==="glass");let Ce=!1;function Ne(d){Ce=!0;const v=d instanceof Error?d.message:String(d);console.error(d),document.getElementById("gpu-status").textContent="Unavailable";const z=document.getElementById("loading");z.hidden=!1,z.classList.add("failed"),z.querySelector("h2").textContent="The simulation could not start",document.getElementById("error-reason").textContent=v,document.getElementById("retry").hidden=!1,document.getElementById("controls").disabled=!0}document.getElementById("retry").addEventListener("click",()=>location.reload());async function Wn(){const d=document.querySelector("canvas");if(!navigator.gpu)throw new Error("WebGPU is unavailable here. Open this page in a current Chrome or Edge browser with graphics acceleration enabled.");const v=await navigator.gpu.requestAdapter();if(!v)throw new Error("The browser could not access a compatible GPU. Try Chrome or Edge with graphics acceleration enabled.");const z=await v.requestDevice();if(z.addEventListener("uncapturederror",I=>Ne(new Error(I.error.message))),!z)throw alert("float-32-filterable is not supported"),new Error;const S=d.getContext("webgpu");if(!S)throw new Error;const G=Math.min(.7,1e3/Math.max(d.clientWidth,d.clientHeight));d.width=Math.max(2,Math.floor(G*d.clientWidth/2)*2),d.height=Math.max(2,Math.floor(G*d.clientHeight/2)*2),console.log(d.width,d.height);const M=navigator.gpu.getPreferredCanvasFormat();return S.configure({device:z,format:M}),{canvas:d,device:z,presentationFormat:M,context:S}}function Hn(d){const v={running:!matchMedia("(prefers-reduced-motion: reduce)").matches,r:176,g:232,b:245,speed:.8,colorDensity:.035,numParticles:d[0],resetRequested:!1},z=document.getElementById("pause"),S=()=>{z.textContent=v.running?"Pause":"Resume",z.setAttribute("aria-pressed",String(!v.running))},G=()=>{v.running=!v.running,S()};z.addEventListener("click",G),document.getElementById("reset").addEventListener("click",()=>{v.resetRequested=!0});const M=document.getElementById("quality");d.forEach(U=>M.add(new Option(U,U))),M.addEventListener("change",()=>{v.numParticles=M.value});const I=document.getElementById("speed");return I.addEventListener("input",()=>{v.speed=Number(I.value),document.getElementById("speed-value").textContent=I.value+"×"}),document.addEventListener("keydown",U=>{U.code==="KeyP"&&!(U.target instanceof HTMLInputElement)&&!(U.target instanceof HTMLSelectElement)&&!U.repeat&&G()}),S(),v}async function Nn(){const{canvas:d,device:v,presentationFormat:z,context:S}=await Wn();console.log("initialization done"),S.configure({device:v,format:z});let G;{const w=["cubemap/posx.png","cubemap/negx.png","cubemap/posy.png","cubemap/negy.png","cubemap/posz.png","cubemap/negz.png"].map(async o=>{const n=await fetch(o);if(!n.ok)throw new Error("Unable to load water lighting textures. Reload to retry.");return createImageBitmap(await n.blob())}),e=await Promise.all(w);G=v.createTexture({dimension:"2d",size:[e[0].width,e[0].height,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});for(let o=0;o<e.length;o++){const n=e[o];v.queue.copyExternalImageToTexture({source:n},{texture:G,origin:[0,0,o]},[n.width,n.height])}}const M=G.createView({dimension:"cube"});console.log("cubemap initialization done");const I=[{particleCount:24e3,initBoxSize:[28,38,28],initDistance:43,mouseRadius:7,cameraTargetY:21,guiText:"Glass · 24,000"},{particleCount:16e3,initBoxSize:[36,48,36],initDistance:56,mouseRadius:10,cameraTargetY:26,guiText:"Balanced · 16,000"},{particleCount:3e4,initBoxSize:[46,60,46],initDistance:72,mouseRadius:14,cameraTargetY:33,guiText:"Detailed · 30,000"}],U=I.map(f=>f.guiText),T=Hn(U),B=Math.max(...I.map(f=>f.particleCount)),H=Math.max(...I.map(f=>f.initBoxSize[0]*f.initBoxSize[1]*f.initBoxSize[2])),k=He,K=v.createBuffer({label:"particles buffer",size:k*B,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),ee=v.createBuffer({label:"posvel buffer",size:32*B,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),ie=v.createBuffer({label:"filter uniform buffer",size:Re.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),re=v.createBuffer({label:"init box size buffer",size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),$=v.createTexture({label:"depth map texture",size:[d.width,d.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r32float"}).createView(),W=Math.max(...I.map(f=>f.initBoxSize[0])),L=Math.max(...I.map(f=>f.initBoxSize[1])),Z=Math.ceil(Math.max(...I.map(f=>f.initBoxSize[2]))/128)*128,Q=[W,L,Z],ne=v.createBuffer({label:"density grid buffer",size:4*W*L*Z,usage:GPUBufferUsage.STORAGE}),J=v.createBuffer({label:"casted density grid buffer",size:2*W*L*Z,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),X=v.createBuffer({label:"density grid size buffer",size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),N=new Float32Array(Q);v.queue.writeBuffer(X,0,N);const te=v.createTexture({label:"density grid texture",size:[Z,L,W],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST,format:"r16float",dimension:"3d"}),ve=te.createView();console.log("buffer allocating done");const E=document.getElementById("fluidCanvas"),j=60*Math.PI/180,R=.6,me=2*R,fe=.7,ye=1e7,ce=new In(K,ee,ie,ne,J,re,X,v,$,d,H,B,ye,me),Te=new qn(ie,ee,X,re,v,$,M,ve,d,z,R,j,ye);console.log("simulator initialization done");const C=new Dn(E);let ge=document.getElementById("error-reason");ge.textContent="",v.lost.then(f=>{const w=f.reason?`reason: ${f.reason}`:"unknown reason";Ne(new Error("Graphics device disconnected ("+w+"). Reload to retry."))});let se=-1,xe=[0,0,0],ae=[0,0,0],le=I[0],de=!1,r=!1;console.log("simulation start");let p=!0,t=performance.now(),s=0;async function l(){if(!Ce){if(document.hidden){requestAnimationFrame(l);return}try{const f=U.indexOf(T.numParticles);let w=!1;(Number(f)!=se||T.resetRequested)&&(w=!0,T.resetRequested=!1,se=Number(f),le=I[se],ae=le.initBoxSize,ce.reset(ae,le.particleCount),C.reset(le.initDistance,[ae[0]/2,le.cameraTargetY,ae[2]/2],j,fe),xe=[...ae]),de=document.getElementById("particle").checked,ce.changeBoxSize(xe),Ee.texelSize.set([1/d.width,1/d.height]),Ee.sphereSize.set([me]),v.queue.writeBuffer(ie,0,Re);const o=v.createCommandEncoder();ce.execute(o,[C.currentHoverX/d.clientWidth,C.currentHoverY/d.clientHeight],C.calcMouseVelocity(),le.mouseRadius,de,.4*T.speed,T.running||w,Q);let i=[T.r/255,T.g/255,T.b/255];if(Te.execute(S,o,ce.numParticles,de,i,T.colorDensity),v.queue.submit([o.finish()]),de){const g=v.createCommandEncoder();g.copyBufferToTexture({buffer:J,bytesPerRow:Q[2]*2,rowsPerImage:Q[1]},{texture:te},{width:Q[2],height:Q[1],depthOrArrayLayers:Q[0]}),v.queue.submit([g.finish()])}if(C.setNewPrevMouseCoord(),await v.queue.onSubmittedWorkDone(),Ce)return;p&&(p=!1,document.getElementById("loading").hidden=!0,document.getElementById("gpu-status").textContent="WebGPU ready",document.getElementById("controls").disabled=!1),s++;const a=performance.now();a-t>1e3&&(document.getElementById("fps").textContent=Math.round(s*1e3/(a-t))+" FPS",s=0,t=a),requestAnimationFrame(l)}catch(f){Ne(f)}}}requestAnimationFrame(l)}Nn().catch(Ne);
