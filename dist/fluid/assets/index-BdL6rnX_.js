var an=Object.defineProperty;var un=(d,v,z)=>v in d?an(d,v,{enumerable:!0,configurable:!0,writable:!0,value:z}):d[v]=z;var B=(d,v,z)=>un(d,typeof v!="symbol"?v+"":v,z);(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const G of document.querySelectorAll('link[rel="modulepreload"]'))S(G);new MutationObserver(G=>{for(const M of G)if(M.type==="childList")for(const I of M.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&S(I)}).observe(document,{childList:!0,subtree:!0});function z(G){const M={};return G.integrity&&(M.integrity=G.integrity),G.referrerPolicy&&(M.referrerPolicy=G.referrerPolicy),G.crossOrigin==="use-credentials"?M.credentials="include":G.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function S(G){if(G.ep)return;G.ep=!0;const M=z(G);fetch(G.href,M)}})();function ln(d,v){return class extends d{constructor(...z){super(...z),v(this)}}}const dn=ln(Array,d=>d.fill(0));let k=1e-6;function fn(d){function v(e=0,o=0){const n=new d(2);return e!==void 0&&(n[0]=e,o!==void 0&&(n[1]=o)),n}const z=v;function S(e,o,n){const r=n??new d(2);return r[0]=e,r[1]=o,r}function G(e,o){const n=o??new d(2);return n[0]=Math.ceil(e[0]),n[1]=Math.ceil(e[1]),n}function M(e,o){const n=o??new d(2);return n[0]=Math.floor(e[0]),n[1]=Math.floor(e[1]),n}function I(e,o){const n=o??new d(2);return n[0]=Math.round(e[0]),n[1]=Math.round(e[1]),n}function A(e,o=0,n=1,r){const a=r??new d(2);return a[0]=Math.min(n,Math.max(o,e[0])),a[1]=Math.min(n,Math.max(o,e[1])),a}function T(e,o,n){const r=n??new d(2);return r[0]=e[0]+o[0],r[1]=e[1]+o[1],r}function b(e,o,n,r){const a=r??new d(2);return a[0]=e[0]+o[0]*n,a[1]=e[1]+o[1]*n,a}function Y(e,o){const n=e[0],r=e[1],a=o[0],g=o[1],y=Math.sqrt(n*n+r*r),c=Math.sqrt(a*a+g*g),u=y*c,h=u&&te(e,o)/u;return Math.acos(h)}function U(e,o,n){const r=n??new d(2);return r[0]=e[0]-o[0],r[1]=e[1]-o[1],r}const J=U;function ee(e,o){return Math.abs(e[0]-o[0])<k&&Math.abs(e[1]-o[1])<k}function re(e,o){return e[0]===o[0]&&e[1]===o[1]}function ie(e,o,n,r){const a=r??new d(2);return a[0]=e[0]+n*(o[0]-e[0]),a[1]=e[1]+n*(o[1]-e[1]),a}function le(e,o,n,r){const a=r??new d(2);return a[0]=e[0]+n[0]*(o[0]-e[0]),a[1]=e[1]+n[1]*(o[1]-e[1]),a}function $(e,o,n){const r=n??new d(2);return r[0]=Math.max(e[0],o[0]),r[1]=Math.max(e[1],o[1]),r}function Q(e,o,n){const r=n??new d(2);return r[0]=Math.min(e[0],o[0]),r[1]=Math.min(e[1],o[1]),r}function O(e,o,n){const r=n??new d(2);return r[0]=e[0]*o,r[1]=e[1]*o,r}const Z=O;function W(e,o,n){const r=n??new d(2);return r[0]=e[0]/o,r[1]=e[1]/o,r}function ne(e,o){const n=o??new d(2);return n[0]=1/e[0],n[1]=1/e[1],n}const K=ne;function H(e,o,n){const r=n??new d(3),a=e[0]*o[1]-e[1]*o[0];return r[0]=0,r[1]=0,r[2]=a,r}function te(e,o){return e[0]*o[0]+e[1]*o[1]}function N(e){const o=e[0],n=e[1];return Math.sqrt(o*o+n*n)}const ae=N;function L(e){const o=e[0],n=e[1];return o*o+n*n}const j=L;function E(e,o){const n=e[0]-o[0],r=e[1]-o[1];return Math.sqrt(n*n+r*r)}const we=E;function pe(e,o){const n=e[0]-o[0],r=e[1]-o[1];return n*n+r*r}const me=pe;function ue(e,o){const n=o??new d(2),r=e[0],a=e[1],g=Math.sqrt(r*r+a*a);return g>1e-5?(n[0]=r/g,n[1]=a/g):(n[0]=0,n[1]=0),n}function Be(e,o){const n=o??new d(2);return n[0]=-e[0],n[1]=-e[1],n}function C(e,o){const n=o??new d(2);return n[0]=e[0],n[1]=e[1],n}const Te=C;function oe(e,o,n){const r=n??new d(2);return r[0]=e[0]*o[0],r[1]=e[1]*o[1],r}const he=oe;function se(e,o,n){const r=n??new d(2);return r[0]=e[0]/o[0],r[1]=e[1]/o[1],r}const de=se;function fe(e=1,o){const n=o??new d(2),r=Math.random()*2*Math.PI;return n[0]=Math.cos(r)*e,n[1]=Math.sin(r)*e,n}function i(e){const o=e??new d(2);return o[0]=0,o[1]=0,o}function p(e,o,n){const r=n??new d(2),a=e[0],g=e[1];return r[0]=a*o[0]+g*o[4]+o[12],r[1]=a*o[1]+g*o[5]+o[13],r}function t(e,o,n){const r=n??new d(2),a=e[0],g=e[1];return r[0]=o[0]*a+o[4]*g+o[8],r[1]=o[1]*a+o[5]*g+o[9],r}function s(e,o,n,r){const a=r??new d(2),g=e[0]-o[0],y=e[1]-o[1],c=Math.sin(n),u=Math.cos(n);return a[0]=g*u-y*c+o[0],a[1]=g*c+y*u+o[1],a}function l(e,o,n){const r=n??new d(2);return ue(e,r),O(r,o,r)}function f(e,o,n){const r=n??new d(2);return N(e)>o?l(e,o,r):C(e,r)}function w(e,o,n){const r=n??new d(2);return ie(e,o,.5,r)}return{create:v,fromValues:z,set:S,ceil:G,floor:M,round:I,clamp:A,add:T,addScaled:b,angle:Y,subtract:U,sub:J,equalsApproximately:ee,equals:re,lerp:ie,lerpV:le,max:$,min:Q,mulScalar:O,scale:Z,divScalar:W,inverse:ne,invert:K,cross:H,dot:te,length:N,len:ae,lengthSq:L,lenSq:j,distance:E,dist:we,distanceSq:pe,distSq:me,normalize:ue,negate:Be,copy:C,clone:Te,multiply:oe,mul:he,divide:se,div:de,random:fe,zero:i,transformMat4:p,transformMat3:t,rotate:s,setLength:l,truncate:f,midpoint:w}}const en=new Map;function cn(d){let v=en.get(d);return v||(v=fn(d),en.set(d,v)),v}function pn(d){function v(c,u,h){const x=new d(3);return c!==void 0&&(x[0]=c,u!==void 0&&(x[1]=u,h!==void 0&&(x[2]=h))),x}const z=v;function S(c,u,h,x){const m=x??new d(3);return m[0]=c,m[1]=u,m[2]=h,m}function G(c,u){const h=u??new d(3);return h[0]=Math.ceil(c[0]),h[1]=Math.ceil(c[1]),h[2]=Math.ceil(c[2]),h}function M(c,u){const h=u??new d(3);return h[0]=Math.floor(c[0]),h[1]=Math.floor(c[1]),h[2]=Math.floor(c[2]),h}function I(c,u){const h=u??new d(3);return h[0]=Math.round(c[0]),h[1]=Math.round(c[1]),h[2]=Math.round(c[2]),h}function A(c,u=0,h=1,x){const m=x??new d(3);return m[0]=Math.min(h,Math.max(u,c[0])),m[1]=Math.min(h,Math.max(u,c[1])),m[2]=Math.min(h,Math.max(u,c[2])),m}function T(c,u,h){const x=h??new d(3);return x[0]=c[0]+u[0],x[1]=c[1]+u[1],x[2]=c[2]+u[2],x}function b(c,u,h,x){const m=x??new d(3);return m[0]=c[0]+u[0]*h,m[1]=c[1]+u[1]*h,m[2]=c[2]+u[2]*h,m}function Y(c,u){const h=c[0],x=c[1],m=c[2],P=u[0],D=u[1],_=u[2],R=Math.sqrt(h*h+x*x+m*m),V=Math.sqrt(P*P+D*D+_*_),F=R*V,X=F&&te(c,u)/F;return Math.acos(X)}function U(c,u,h){const x=h??new d(3);return x[0]=c[0]-u[0],x[1]=c[1]-u[1],x[2]=c[2]-u[2],x}const J=U;function ee(c,u){return Math.abs(c[0]-u[0])<k&&Math.abs(c[1]-u[1])<k&&Math.abs(c[2]-u[2])<k}function re(c,u){return c[0]===u[0]&&c[1]===u[1]&&c[2]===u[2]}function ie(c,u,h,x){const m=x??new d(3);return m[0]=c[0]+h*(u[0]-c[0]),m[1]=c[1]+h*(u[1]-c[1]),m[2]=c[2]+h*(u[2]-c[2]),m}function le(c,u,h,x){const m=x??new d(3);return m[0]=c[0]+h[0]*(u[0]-c[0]),m[1]=c[1]+h[1]*(u[1]-c[1]),m[2]=c[2]+h[2]*(u[2]-c[2]),m}function $(c,u,h){const x=h??new d(3);return x[0]=Math.max(c[0],u[0]),x[1]=Math.max(c[1],u[1]),x[2]=Math.max(c[2],u[2]),x}function Q(c,u,h){const x=h??new d(3);return x[0]=Math.min(c[0],u[0]),x[1]=Math.min(c[1],u[1]),x[2]=Math.min(c[2],u[2]),x}function O(c,u,h){const x=h??new d(3);return x[0]=c[0]*u,x[1]=c[1]*u,x[2]=c[2]*u,x}const Z=O;function W(c,u,h){const x=h??new d(3);return x[0]=c[0]/u,x[1]=c[1]/u,x[2]=c[2]/u,x}function ne(c,u){const h=u??new d(3);return h[0]=1/c[0],h[1]=1/c[1],h[2]=1/c[2],h}const K=ne;function H(c,u,h){const x=h??new d(3),m=c[2]*u[0]-c[0]*u[2],P=c[0]*u[1]-c[1]*u[0];return x[0]=c[1]*u[2]-c[2]*u[1],x[1]=m,x[2]=P,x}function te(c,u){return c[0]*u[0]+c[1]*u[1]+c[2]*u[2]}function N(c){const u=c[0],h=c[1],x=c[2];return Math.sqrt(u*u+h*h+x*x)}const ae=N;function L(c){const u=c[0],h=c[1],x=c[2];return u*u+h*h+x*x}const j=L;function E(c,u){const h=c[0]-u[0],x=c[1]-u[1],m=c[2]-u[2];return Math.sqrt(h*h+x*x+m*m)}const we=E;function pe(c,u){const h=c[0]-u[0],x=c[1]-u[1],m=c[2]-u[2];return h*h+x*x+m*m}const me=pe;function ue(c,u){const h=u??new d(3),x=c[0],m=c[1],P=c[2],D=Math.sqrt(x*x+m*m+P*P);return D>1e-5?(h[0]=x/D,h[1]=m/D,h[2]=P/D):(h[0]=0,h[1]=0,h[2]=0),h}function Be(c,u){const h=u??new d(3);return h[0]=-c[0],h[1]=-c[1],h[2]=-c[2],h}function C(c,u){const h=u??new d(3);return h[0]=c[0],h[1]=c[1],h[2]=c[2],h}const Te=C;function oe(c,u,h){const x=h??new d(3);return x[0]=c[0]*u[0],x[1]=c[1]*u[1],x[2]=c[2]*u[2],x}const he=oe;function se(c,u,h){const x=h??new d(3);return x[0]=c[0]/u[0],x[1]=c[1]/u[1],x[2]=c[2]/u[2],x}const de=se;function fe(c=1,u){const h=u??new d(3),x=Math.random()*2*Math.PI,m=Math.random()*2-1,P=Math.sqrt(1-m*m)*c;return h[0]=Math.cos(x)*P,h[1]=Math.sin(x)*P,h[2]=m*c,h}function i(c){const u=c??new d(3);return u[0]=0,u[1]=0,u[2]=0,u}function p(c,u,h){const x=h??new d(3),m=c[0],P=c[1],D=c[2],_=u[3]*m+u[7]*P+u[11]*D+u[15]||1;return x[0]=(u[0]*m+u[4]*P+u[8]*D+u[12])/_,x[1]=(u[1]*m+u[5]*P+u[9]*D+u[13])/_,x[2]=(u[2]*m+u[6]*P+u[10]*D+u[14])/_,x}function t(c,u,h){const x=h??new d(3),m=c[0],P=c[1],D=c[2];return x[0]=m*u[0*4+0]+P*u[1*4+0]+D*u[2*4+0],x[1]=m*u[0*4+1]+P*u[1*4+1]+D*u[2*4+1],x[2]=m*u[0*4+2]+P*u[1*4+2]+D*u[2*4+2],x}function s(c,u,h){const x=h??new d(3),m=c[0],P=c[1],D=c[2];return x[0]=m*u[0]+P*u[4]+D*u[8],x[1]=m*u[1]+P*u[5]+D*u[9],x[2]=m*u[2]+P*u[6]+D*u[10],x}function l(c,u,h){const x=h??new d(3),m=u[0],P=u[1],D=u[2],_=u[3]*2,R=c[0],V=c[1],F=c[2],X=P*F-D*V,q=D*R-m*F,ce=m*V-P*R;return x[0]=R+X*_+(P*ce-D*q)*2,x[1]=V+q*_+(D*X-m*ce)*2,x[2]=F+ce*_+(m*q-P*X)*2,x}function f(c,u){const h=u??new d(3);return h[0]=c[12],h[1]=c[13],h[2]=c[14],h}function w(c,u,h){const x=h??new d(3),m=u*4;return x[0]=c[m+0],x[1]=c[m+1],x[2]=c[m+2],x}function e(c,u){const h=u??new d(3),x=c[0],m=c[1],P=c[2],D=c[4],_=c[5],R=c[6],V=c[8],F=c[9],X=c[10];return h[0]=Math.sqrt(x*x+m*m+P*P),h[1]=Math.sqrt(D*D+_*_+R*R),h[2]=Math.sqrt(V*V+F*F+X*X),h}function o(c,u,h,x){const m=x??new d(3),P=[],D=[];return P[0]=c[0]-u[0],P[1]=c[1]-u[1],P[2]=c[2]-u[2],D[0]=P[0],D[1]=P[1]*Math.cos(h)-P[2]*Math.sin(h),D[2]=P[1]*Math.sin(h)+P[2]*Math.cos(h),m[0]=D[0]+u[0],m[1]=D[1]+u[1],m[2]=D[2]+u[2],m}function n(c,u,h,x){const m=x??new d(3),P=[],D=[];return P[0]=c[0]-u[0],P[1]=c[1]-u[1],P[2]=c[2]-u[2],D[0]=P[2]*Math.sin(h)+P[0]*Math.cos(h),D[1]=P[1],D[2]=P[2]*Math.cos(h)-P[0]*Math.sin(h),m[0]=D[0]+u[0],m[1]=D[1]+u[1],m[2]=D[2]+u[2],m}function r(c,u,h,x){const m=x??new d(3),P=[],D=[];return P[0]=c[0]-u[0],P[1]=c[1]-u[1],P[2]=c[2]-u[2],D[0]=P[0]*Math.cos(h)-P[1]*Math.sin(h),D[1]=P[0]*Math.sin(h)+P[1]*Math.cos(h),D[2]=P[2],m[0]=D[0]+u[0],m[1]=D[1]+u[1],m[2]=D[2]+u[2],m}function a(c,u,h){const x=h??new d(3);return ue(c,x),O(x,u,x)}function g(c,u,h){const x=h??new d(3);return N(c)>u?a(c,u,x):C(c,x)}function y(c,u,h){const x=h??new d(3);return ie(c,u,.5,x)}return{create:v,fromValues:z,set:S,ceil:G,floor:M,round:I,clamp:A,add:T,addScaled:b,angle:Y,subtract:U,sub:J,equalsApproximately:ee,equals:re,lerp:ie,lerpV:le,max:$,min:Q,mulScalar:O,scale:Z,divScalar:W,inverse:ne,invert:K,cross:H,dot:te,length:N,len:ae,lengthSq:L,lenSq:j,distance:E,dist:we,distanceSq:pe,distSq:me,normalize:ue,negate:Be,copy:C,clone:Te,multiply:oe,mul:he,divide:se,div:de,random:fe,zero:i,transformMat4:p,transformMat4Upper3x3:t,transformMat3:s,transformQuat:l,getTranslation:f,getAxis:w,getScaling:e,rotateX:o,rotateY:n,rotateZ:r,setLength:a,truncate:g,midpoint:y}}const nn=new Map;function je(d){let v=nn.get(d);return v||(v=pn(d),nn.set(d,v)),v}function hn(d){const v=cn(d),z=je(d);function S(i,p,t,s,l,f,w,e,o){const n=new d(12);return n[3]=0,n[7]=0,n[11]=0,i!==void 0&&(n[0]=i,p!==void 0&&(n[1]=p,t!==void 0&&(n[2]=t,s!==void 0&&(n[4]=s,l!==void 0&&(n[5]=l,f!==void 0&&(n[6]=f,w!==void 0&&(n[8]=w,e!==void 0&&(n[9]=e,o!==void 0&&(n[10]=o))))))))),n}function G(i,p,t,s,l,f,w,e,o,n){const r=n??new d(12);return r[0]=i,r[1]=p,r[2]=t,r[3]=0,r[4]=s,r[5]=l,r[6]=f,r[7]=0,r[8]=w,r[9]=e,r[10]=o,r[11]=0,r}function M(i,p){const t=p??new d(12);return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=0,t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=0,t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=0,t}function I(i,p){const t=p??new d(12),s=i[0],l=i[1],f=i[2],w=i[3],e=s+s,o=l+l,n=f+f,r=s*e,a=l*e,g=l*o,y=f*e,c=f*o,u=f*n,h=w*e,x=w*o,m=w*n;return t[0]=1-g-u,t[1]=a+m,t[2]=y-x,t[3]=0,t[4]=a-m,t[5]=1-r-u,t[6]=c+h,t[7]=0,t[8]=y+x,t[9]=c-h,t[10]=1-r-g,t[11]=0,t}function A(i,p){const t=p??new d(12);return t[0]=-i[0],t[1]=-i[1],t[2]=-i[2],t[4]=-i[4],t[5]=-i[5],t[6]=-i[6],t[8]=-i[8],t[9]=-i[9],t[10]=-i[10],t}function T(i,p){const t=p??new d(12);return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[8]=i[8],t[9]=i[9],t[10]=i[10],t}const b=T;function Y(i,p){return Math.abs(i[0]-p[0])<k&&Math.abs(i[1]-p[1])<k&&Math.abs(i[2]-p[2])<k&&Math.abs(i[4]-p[4])<k&&Math.abs(i[5]-p[5])<k&&Math.abs(i[6]-p[6])<k&&Math.abs(i[8]-p[8])<k&&Math.abs(i[9]-p[9])<k&&Math.abs(i[10]-p[10])<k}function U(i,p){return i[0]===p[0]&&i[1]===p[1]&&i[2]===p[2]&&i[4]===p[4]&&i[5]===p[5]&&i[6]===p[6]&&i[8]===p[8]&&i[9]===p[9]&&i[10]===p[10]}function J(i){const p=i??new d(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function ee(i,p){const t=p??new d(12);if(t===i){let g;return g=i[1],i[1]=i[4],i[4]=g,g=i[2],i[2]=i[8],i[8]=g,g=i[6],i[6]=i[9],i[9]=g,t}const s=i[0*4+0],l=i[0*4+1],f=i[0*4+2],w=i[1*4+0],e=i[1*4+1],o=i[1*4+2],n=i[2*4+0],r=i[2*4+1],a=i[2*4+2];return t[0]=s,t[1]=w,t[2]=n,t[4]=l,t[5]=e,t[6]=r,t[8]=f,t[9]=o,t[10]=a,t}function re(i,p){const t=p??new d(12),s=i[0*4+0],l=i[0*4+1],f=i[0*4+2],w=i[1*4+0],e=i[1*4+1],o=i[1*4+2],n=i[2*4+0],r=i[2*4+1],a=i[2*4+2],g=a*e-o*r,y=-a*w+o*n,c=r*w-e*n,u=1/(s*g+l*y+f*c);return t[0]=g*u,t[1]=(-a*l+f*r)*u,t[2]=(o*l-f*e)*u,t[4]=y*u,t[5]=(a*s-f*n)*u,t[6]=(-o*s+f*w)*u,t[8]=c*u,t[9]=(-r*s+l*n)*u,t[10]=(e*s-l*w)*u,t}function ie(i){const p=i[0],t=i[0*4+1],s=i[0*4+2],l=i[1*4+0],f=i[1*4+1],w=i[1*4+2],e=i[2*4+0],o=i[2*4+1],n=i[2*4+2];return p*(f*n-o*w)-l*(t*n-o*s)+e*(t*w-f*s)}const le=re;function $(i,p,t){const s=t??new d(12),l=i[0],f=i[1],w=i[2],e=i[4],o=i[5],n=i[6],r=i[8],a=i[9],g=i[10],y=p[0],c=p[1],u=p[2],h=p[4],x=p[5],m=p[6],P=p[8],D=p[9],_=p[10];return s[0]=l*y+e*c+r*u,s[1]=f*y+o*c+a*u,s[2]=w*y+n*c+g*u,s[4]=l*h+e*x+r*m,s[5]=f*h+o*x+a*m,s[6]=w*h+n*x+g*m,s[8]=l*P+e*D+r*_,s[9]=f*P+o*D+a*_,s[10]=w*P+n*D+g*_,s}const Q=$;function O(i,p,t){const s=t??J();return i!==s&&(s[0]=i[0],s[1]=i[1],s[2]=i[2],s[4]=i[4],s[5]=i[5],s[6]=i[6]),s[8]=p[0],s[9]=p[1],s[10]=1,s}function Z(i,p){const t=p??v.create();return t[0]=i[8],t[1]=i[9],t}function W(i,p,t){const s=t??v.create(),l=p*4;return s[0]=i[l+0],s[1]=i[l+1],s}function ne(i,p,t,s){const l=s===i?i:T(i,s),f=t*4;return l[f+0]=p[0],l[f+1]=p[1],l}function K(i,p){const t=p??v.create(),s=i[0],l=i[1],f=i[4],w=i[5];return t[0]=Math.sqrt(s*s+l*l),t[1]=Math.sqrt(f*f+w*w),t}function H(i,p){const t=p??z.create(),s=i[0],l=i[1],f=i[2],w=i[4],e=i[5],o=i[6],n=i[8],r=i[9],a=i[10];return t[0]=Math.sqrt(s*s+l*l+f*f),t[1]=Math.sqrt(w*w+e*e+o*o),t[2]=Math.sqrt(n*n+r*r+a*a),t}function te(i,p){const t=p??new d(12);return t[0]=1,t[1]=0,t[2]=0,t[4]=0,t[5]=1,t[6]=0,t[8]=i[0],t[9]=i[1],t[10]=1,t}function N(i,p,t){const s=t??new d(12),l=p[0],f=p[1],w=i[0],e=i[1],o=i[2],n=i[1*4+0],r=i[1*4+1],a=i[1*4+2],g=i[2*4+0],y=i[2*4+1],c=i[2*4+2];return i!==s&&(s[0]=w,s[1]=e,s[2]=o,s[4]=n,s[5]=r,s[6]=a),s[8]=w*l+n*f+g,s[9]=e*l+r*f+y,s[10]=o*l+a*f+c,s}function ae(i,p){const t=p??new d(12),s=Math.cos(i),l=Math.sin(i);return t[0]=s,t[1]=l,t[2]=0,t[4]=-l,t[5]=s,t[6]=0,t[8]=0,t[9]=0,t[10]=1,t}function L(i,p,t){const s=t??new d(12),l=i[0*4+0],f=i[0*4+1],w=i[0*4+2],e=i[1*4+0],o=i[1*4+1],n=i[1*4+2],r=Math.cos(p),a=Math.sin(p);return s[0]=r*l+a*e,s[1]=r*f+a*o,s[2]=r*w+a*n,s[4]=r*e-a*l,s[5]=r*o-a*f,s[6]=r*n-a*w,i!==s&&(s[8]=i[8],s[9]=i[9],s[10]=i[10]),s}function j(i,p){const t=p??new d(12),s=Math.cos(i),l=Math.sin(i);return t[0]=1,t[1]=0,t[2]=0,t[4]=0,t[5]=s,t[6]=l,t[8]=0,t[9]=-l,t[10]=s,t}function E(i,p,t){const s=t??new d(12),l=i[4],f=i[5],w=i[6],e=i[8],o=i[9],n=i[10],r=Math.cos(p),a=Math.sin(p);return s[4]=r*l+a*e,s[5]=r*f+a*o,s[6]=r*w+a*n,s[8]=r*e-a*l,s[9]=r*o-a*f,s[10]=r*n-a*w,i!==s&&(s[0]=i[0],s[1]=i[1],s[2]=i[2]),s}function we(i,p){const t=p??new d(12),s=Math.cos(i),l=Math.sin(i);return t[0]=s,t[1]=0,t[2]=-l,t[4]=0,t[5]=1,t[6]=0,t[8]=l,t[9]=0,t[10]=s,t}function pe(i,p,t){const s=t??new d(12),l=i[0*4+0],f=i[0*4+1],w=i[0*4+2],e=i[2*4+0],o=i[2*4+1],n=i[2*4+2],r=Math.cos(p),a=Math.sin(p);return s[0]=r*l-a*e,s[1]=r*f-a*o,s[2]=r*w-a*n,s[8]=r*e+a*l,s[9]=r*o+a*f,s[10]=r*n+a*w,i!==s&&(s[4]=i[4],s[5]=i[5],s[6]=i[6]),s}const me=ae,ue=L;function Be(i,p){const t=p??new d(12);return t[0]=i[0],t[1]=0,t[2]=0,t[4]=0,t[5]=i[1],t[6]=0,t[8]=0,t[9]=0,t[10]=1,t}function C(i,p,t){const s=t??new d(12),l=p[0],f=p[1];return s[0]=l*i[0*4+0],s[1]=l*i[0*4+1],s[2]=l*i[0*4+2],s[4]=f*i[1*4+0],s[5]=f*i[1*4+1],s[6]=f*i[1*4+2],i!==s&&(s[8]=i[8],s[9]=i[9],s[10]=i[10]),s}function Te(i,p){const t=p??new d(12);return t[0]=i[0],t[1]=0,t[2]=0,t[4]=0,t[5]=i[1],t[6]=0,t[8]=0,t[9]=0,t[10]=i[2],t}function oe(i,p,t){const s=t??new d(12),l=p[0],f=p[1],w=p[2];return s[0]=l*i[0*4+0],s[1]=l*i[0*4+1],s[2]=l*i[0*4+2],s[4]=f*i[1*4+0],s[5]=f*i[1*4+1],s[6]=f*i[1*4+2],s[8]=w*i[2*4+0],s[9]=w*i[2*4+1],s[10]=w*i[2*4+2],s}function he(i,p){const t=p??new d(12);return t[0]=i,t[1]=0,t[2]=0,t[4]=0,t[5]=i,t[6]=0,t[8]=0,t[9]=0,t[10]=1,t}function se(i,p,t){const s=t??new d(12);return s[0]=p*i[0*4+0],s[1]=p*i[0*4+1],s[2]=p*i[0*4+2],s[4]=p*i[1*4+0],s[5]=p*i[1*4+1],s[6]=p*i[1*4+2],i!==s&&(s[8]=i[8],s[9]=i[9],s[10]=i[10]),s}function de(i,p){const t=p??new d(12);return t[0]=i,t[1]=0,t[2]=0,t[4]=0,t[5]=i,t[6]=0,t[8]=0,t[9]=0,t[10]=i,t}function fe(i,p,t){const s=t??new d(12);return s[0]=p*i[0*4+0],s[1]=p*i[0*4+1],s[2]=p*i[0*4+2],s[4]=p*i[1*4+0],s[5]=p*i[1*4+1],s[6]=p*i[1*4+2],s[8]=p*i[2*4+0],s[9]=p*i[2*4+1],s[10]=p*i[2*4+2],s}return{clone:b,create:S,set:G,fromMat4:M,fromQuat:I,negate:A,copy:T,equalsApproximately:Y,equals:U,identity:J,transpose:ee,inverse:re,invert:le,determinant:ie,mul:Q,multiply:$,setTranslation:O,getTranslation:Z,getAxis:W,setAxis:ne,getScaling:K,get3DScaling:H,translation:te,translate:N,rotation:ae,rotate:L,rotationX:j,rotateX:E,rotationY:we,rotateY:pe,rotationZ:me,rotateZ:ue,scaling:Be,scale:C,uniformScaling:he,uniformScale:se,scaling3D:Te,scale3D:oe,uniformScaling3D:de,uniformScale3D:fe}}const tn=new Map;function gn(d){let v=tn.get(d);return v||(v=hn(d),tn.set(d,v)),v}function xn(d){const v=je(d);function z(e,o,n,r,a,g,y,c,u,h,x,m,P,D,_,R){const V=new d(16);return e!==void 0&&(V[0]=e,o!==void 0&&(V[1]=o,n!==void 0&&(V[2]=n,r!==void 0&&(V[3]=r,a!==void 0&&(V[4]=a,g!==void 0&&(V[5]=g,y!==void 0&&(V[6]=y,c!==void 0&&(V[7]=c,u!==void 0&&(V[8]=u,h!==void 0&&(V[9]=h,x!==void 0&&(V[10]=x,m!==void 0&&(V[11]=m,P!==void 0&&(V[12]=P,D!==void 0&&(V[13]=D,_!==void 0&&(V[14]=_,R!==void 0&&(V[15]=R)))))))))))))))),V}function S(e,o,n,r,a,g,y,c,u,h,x,m,P,D,_,R,V){const F=V??new d(16);return F[0]=e,F[1]=o,F[2]=n,F[3]=r,F[4]=a,F[5]=g,F[6]=y,F[7]=c,F[8]=u,F[9]=h,F[10]=x,F[11]=m,F[12]=P,F[13]=D,F[14]=_,F[15]=R,F}function G(e,o){const n=o??new d(16);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=0,n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=0,n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function M(e,o){const n=o??new d(16),r=e[0],a=e[1],g=e[2],y=e[3],c=r+r,u=a+a,h=g+g,x=r*c,m=a*c,P=a*u,D=g*c,_=g*u,R=g*h,V=y*c,F=y*u,X=y*h;return n[0]=1-P-R,n[1]=m+X,n[2]=D-F,n[3]=0,n[4]=m-X,n[5]=1-x-R,n[6]=_+V,n[7]=0,n[8]=D+F,n[9]=_-V,n[10]=1-x-P,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function I(e,o){const n=o??new d(16);return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=-e[3],n[4]=-e[4],n[5]=-e[5],n[6]=-e[6],n[7]=-e[7],n[8]=-e[8],n[9]=-e[9],n[10]=-e[10],n[11]=-e[11],n[12]=-e[12],n[13]=-e[13],n[14]=-e[14],n[15]=-e[15],n}function A(e,o){const n=o??new d(16);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}const T=A;function b(e,o){return Math.abs(e[0]-o[0])<k&&Math.abs(e[1]-o[1])<k&&Math.abs(e[2]-o[2])<k&&Math.abs(e[3]-o[3])<k&&Math.abs(e[4]-o[4])<k&&Math.abs(e[5]-o[5])<k&&Math.abs(e[6]-o[6])<k&&Math.abs(e[7]-o[7])<k&&Math.abs(e[8]-o[8])<k&&Math.abs(e[9]-o[9])<k&&Math.abs(e[10]-o[10])<k&&Math.abs(e[11]-o[11])<k&&Math.abs(e[12]-o[12])<k&&Math.abs(e[13]-o[13])<k&&Math.abs(e[14]-o[14])<k&&Math.abs(e[15]-o[15])<k}function Y(e,o){return e[0]===o[0]&&e[1]===o[1]&&e[2]===o[2]&&e[3]===o[3]&&e[4]===o[4]&&e[5]===o[5]&&e[6]===o[6]&&e[7]===o[7]&&e[8]===o[8]&&e[9]===o[9]&&e[10]===o[10]&&e[11]===o[11]&&e[12]===o[12]&&e[13]===o[13]&&e[14]===o[14]&&e[15]===o[15]}function U(e){const o=e??new d(16);return o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=1,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}function J(e,o){const n=o??new d(16);if(n===e){let q;return q=e[1],e[1]=e[4],e[4]=q,q=e[2],e[2]=e[8],e[8]=q,q=e[3],e[3]=e[12],e[12]=q,q=e[6],e[6]=e[9],e[9]=q,q=e[7],e[7]=e[13],e[13]=q,q=e[11],e[11]=e[14],e[14]=q,n}const r=e[0*4+0],a=e[0*4+1],g=e[0*4+2],y=e[0*4+3],c=e[1*4+0],u=e[1*4+1],h=e[1*4+2],x=e[1*4+3],m=e[2*4+0],P=e[2*4+1],D=e[2*4+2],_=e[2*4+3],R=e[3*4+0],V=e[3*4+1],F=e[3*4+2],X=e[3*4+3];return n[0]=r,n[1]=c,n[2]=m,n[3]=R,n[4]=a,n[5]=u,n[6]=P,n[7]=V,n[8]=g,n[9]=h,n[10]=D,n[11]=F,n[12]=y,n[13]=x,n[14]=_,n[15]=X,n}function ee(e,o){const n=o??new d(16),r=e[0*4+0],a=e[0*4+1],g=e[0*4+2],y=e[0*4+3],c=e[1*4+0],u=e[1*4+1],h=e[1*4+2],x=e[1*4+3],m=e[2*4+0],P=e[2*4+1],D=e[2*4+2],_=e[2*4+3],R=e[3*4+0],V=e[3*4+1],F=e[3*4+2],X=e[3*4+3],q=D*X,ce=F*_,ge=h*X,xe=F*x,ve=h*_,ye=D*x,Pe=g*X,De=F*y,Me=g*_,ze=D*y,Ge=g*x,Se=h*y,Ve=m*V,_e=R*P,Ie=c*V,Fe=R*u,Ue=c*P,Le=m*u,Ye=r*V,Oe=R*a,ke=r*P,Xe=m*a,He=r*u,qe=c*a,$e=q*u+xe*P+ve*V-(ce*u+ge*P+ye*V),Qe=ce*a+Pe*P+ze*V-(q*a+De*P+Me*V),Ke=ge*a+De*u+Ge*V-(xe*a+Pe*u+Se*V),Je=ye*a+Me*u+Se*P-(ve*a+ze*u+Ge*P),be=1/(r*$e+c*Qe+m*Ke+R*Je);return n[0]=be*$e,n[1]=be*Qe,n[2]=be*Ke,n[3]=be*Je,n[4]=be*(ce*c+ge*m+ye*R-(q*c+xe*m+ve*R)),n[5]=be*(q*r+De*m+Me*R-(ce*r+Pe*m+ze*R)),n[6]=be*(xe*r+Pe*c+Se*R-(ge*r+De*c+Ge*R)),n[7]=be*(ve*r+ze*c+Ge*m-(ye*r+Me*c+Se*m)),n[8]=be*(Ve*x+Fe*_+Ue*X-(_e*x+Ie*_+Le*X)),n[9]=be*(_e*y+Ye*_+Xe*X-(Ve*y+Oe*_+ke*X)),n[10]=be*(Ie*y+Oe*x+He*X-(Fe*y+Ye*x+qe*X)),n[11]=be*(Le*y+ke*x+qe*_-(Ue*y+Xe*x+He*_)),n[12]=be*(Ie*D+Le*F+_e*h-(Ue*F+Ve*h+Fe*D)),n[13]=be*(ke*F+Ve*g+Oe*D-(Ye*D+Xe*F+_e*g)),n[14]=be*(Ye*h+qe*F+Fe*g-(He*F+Ie*g+Oe*h)),n[15]=be*(He*D+Ue*g+Xe*h-(ke*h+qe*D+Le*g)),n}function re(e){const o=e[0],n=e[0*4+1],r=e[0*4+2],a=e[0*4+3],g=e[1*4+0],y=e[1*4+1],c=e[1*4+2],u=e[1*4+3],h=e[2*4+0],x=e[2*4+1],m=e[2*4+2],P=e[2*4+3],D=e[3*4+0],_=e[3*4+1],R=e[3*4+2],V=e[3*4+3],F=m*V,X=R*P,q=c*V,ce=R*u,ge=c*P,xe=m*u,ve=r*V,ye=R*a,Pe=r*P,De=m*a,Me=r*u,ze=c*a,Ge=F*y+ce*x+ge*_-(X*y+q*x+xe*_),Se=X*n+ve*x+De*_-(F*n+ye*x+Pe*_),Ve=q*n+ye*y+Me*_-(ce*n+ve*y+ze*_),_e=xe*n+Pe*y+ze*x-(ge*n+De*y+Me*x);return o*Ge+g*Se+h*Ve+D*_e}const ie=ee;function le(e,o,n){const r=n??new d(16),a=e[0],g=e[1],y=e[2],c=e[3],u=e[4],h=e[5],x=e[6],m=e[7],P=e[8],D=e[9],_=e[10],R=e[11],V=e[12],F=e[13],X=e[14],q=e[15],ce=o[0],ge=o[1],xe=o[2],ve=o[3],ye=o[4],Pe=o[5],De=o[6],Me=o[7],ze=o[8],Ge=o[9],Se=o[10],Ve=o[11],_e=o[12],Ie=o[13],Fe=o[14],Ue=o[15];return r[0]=a*ce+u*ge+P*xe+V*ve,r[1]=g*ce+h*ge+D*xe+F*ve,r[2]=y*ce+x*ge+_*xe+X*ve,r[3]=c*ce+m*ge+R*xe+q*ve,r[4]=a*ye+u*Pe+P*De+V*Me,r[5]=g*ye+h*Pe+D*De+F*Me,r[6]=y*ye+x*Pe+_*De+X*Me,r[7]=c*ye+m*Pe+R*De+q*Me,r[8]=a*ze+u*Ge+P*Se+V*Ve,r[9]=g*ze+h*Ge+D*Se+F*Ve,r[10]=y*ze+x*Ge+_*Se+X*Ve,r[11]=c*ze+m*Ge+R*Se+q*Ve,r[12]=a*_e+u*Ie+P*Fe+V*Ue,r[13]=g*_e+h*Ie+D*Fe+F*Ue,r[14]=y*_e+x*Ie+_*Fe+X*Ue,r[15]=c*_e+m*Ie+R*Fe+q*Ue,r}const $=le;function Q(e,o,n){const r=n??U();return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11]),r[12]=o[0],r[13]=o[1],r[14]=o[2],r[15]=1,r}function O(e,o){const n=o??v.create();return n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function Z(e,o,n){const r=n??v.create(),a=o*4;return r[0]=e[a+0],r[1]=e[a+1],r[2]=e[a+2],r}function W(e,o,n,r){const a=r===e?r:A(e,r),g=n*4;return a[g+0]=o[0],a[g+1]=o[1],a[g+2]=o[2],a}function ne(e,o){const n=o??v.create(),r=e[0],a=e[1],g=e[2],y=e[4],c=e[5],u=e[6],h=e[8],x=e[9],m=e[10];return n[0]=Math.sqrt(r*r+a*a+g*g),n[1]=Math.sqrt(y*y+c*c+u*u),n[2]=Math.sqrt(h*h+x*x+m*m),n}function K(e,o,n,r,a){const g=a??new d(16),y=Math.tan(Math.PI*.5-.5*e);if(g[0]=y/o,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=y,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,Number.isFinite(r)){const c=1/(n-r);g[10]=r*c,g[14]=r*n*c}else g[10]=-1,g[14]=-n;return g}function H(e,o,n,r=1/0,a){const g=a??new d(16),y=1/Math.tan(e*.5);if(g[0]=y/o,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=y,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,r===1/0)g[10]=0,g[14]=n;else{const c=1/(r-n);g[10]=n*c,g[14]=r*n*c}return g}function te(e,o,n,r,a,g,y){const c=y??new d(16);return c[0]=2/(o-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(r-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1/(a-g),c[11]=0,c[12]=(o+e)/(e-o),c[13]=(r+n)/(n-r),c[14]=a/(a-g),c[15]=1,c}function N(e,o,n,r,a,g,y){const c=y??new d(16),u=o-e,h=r-n,x=a-g;return c[0]=2*a/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/h,c[6]=0,c[7]=0,c[8]=(e+o)/u,c[9]=(r+n)/h,c[10]=g/x,c[11]=-1,c[12]=0,c[13]=0,c[14]=a*g/x,c[15]=0,c}function ae(e,o,n,r,a,g=1/0,y){const c=y??new d(16),u=o-e,h=r-n;if(c[0]=2*a/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/h,c[6]=0,c[7]=0,c[8]=(e+o)/u,c[9]=(r+n)/h,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,g===1/0)c[10]=0,c[14]=a;else{const x=1/(g-a);c[10]=a*x,c[14]=g*a*x}return c}const L=v.create(),j=v.create(),E=v.create();function we(e,o,n,r){const a=r??new d(16);return v.normalize(v.subtract(o,e,E),E),v.normalize(v.cross(n,E,L),L),v.normalize(v.cross(E,L,j),j),a[0]=L[0],a[1]=L[1],a[2]=L[2],a[3]=0,a[4]=j[0],a[5]=j[1],a[6]=j[2],a[7]=0,a[8]=E[0],a[9]=E[1],a[10]=E[2],a[11]=0,a[12]=e[0],a[13]=e[1],a[14]=e[2],a[15]=1,a}function pe(e,o,n,r){const a=r??new d(16);return v.normalize(v.subtract(e,o,E),E),v.normalize(v.cross(n,E,L),L),v.normalize(v.cross(E,L,j),j),a[0]=L[0],a[1]=L[1],a[2]=L[2],a[3]=0,a[4]=j[0],a[5]=j[1],a[6]=j[2],a[7]=0,a[8]=E[0],a[9]=E[1],a[10]=E[2],a[11]=0,a[12]=e[0],a[13]=e[1],a[14]=e[2],a[15]=1,a}function me(e,o,n,r){const a=r??new d(16);return v.normalize(v.subtract(e,o,E),E),v.normalize(v.cross(n,E,L),L),v.normalize(v.cross(E,L,j),j),a[0]=L[0],a[1]=j[0],a[2]=E[0],a[3]=0,a[4]=L[1],a[5]=j[1],a[6]=E[1],a[7]=0,a[8]=L[2],a[9]=j[2],a[10]=E[2],a[11]=0,a[12]=-(L[0]*e[0]+L[1]*e[1]+L[2]*e[2]),a[13]=-(j[0]*e[0]+j[1]*e[1]+j[2]*e[2]),a[14]=-(E[0]*e[0]+E[1]*e[1]+E[2]*e[2]),a[15]=1,a}function ue(e,o){const n=o??new d(16);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function Be(e,o,n){const r=n??new d(16),a=o[0],g=o[1],y=o[2],c=e[0],u=e[1],h=e[2],x=e[3],m=e[1*4+0],P=e[1*4+1],D=e[1*4+2],_=e[1*4+3],R=e[2*4+0],V=e[2*4+1],F=e[2*4+2],X=e[2*4+3],q=e[3*4+0],ce=e[3*4+1],ge=e[3*4+2],xe=e[3*4+3];return e!==r&&(r[0]=c,r[1]=u,r[2]=h,r[3]=x,r[4]=m,r[5]=P,r[6]=D,r[7]=_,r[8]=R,r[9]=V,r[10]=F,r[11]=X),r[12]=c*a+m*g+R*y+q,r[13]=u*a+P*g+V*y+ce,r[14]=h*a+D*g+F*y+ge,r[15]=x*a+_*g+X*y+xe,r}function C(e,o){const n=o??new d(16),r=Math.cos(e),a=Math.sin(e);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=r,n[6]=a,n[7]=0,n[8]=0,n[9]=-a,n[10]=r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Te(e,o,n){const r=n??new d(16),a=e[4],g=e[5],y=e[6],c=e[7],u=e[8],h=e[9],x=e[10],m=e[11],P=Math.cos(o),D=Math.sin(o);return r[4]=P*a+D*u,r[5]=P*g+D*h,r[6]=P*y+D*x,r[7]=P*c+D*m,r[8]=P*u-D*a,r[9]=P*h-D*g,r[10]=P*x-D*y,r[11]=P*m-D*c,e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function oe(e,o){const n=o??new d(16),r=Math.cos(e),a=Math.sin(e);return n[0]=r,n[1]=0,n[2]=-a,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=a,n[9]=0,n[10]=r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function he(e,o,n){const r=n??new d(16),a=e[0*4+0],g=e[0*4+1],y=e[0*4+2],c=e[0*4+3],u=e[2*4+0],h=e[2*4+1],x=e[2*4+2],m=e[2*4+3],P=Math.cos(o),D=Math.sin(o);return r[0]=P*a-D*u,r[1]=P*g-D*h,r[2]=P*y-D*x,r[3]=P*c-D*m,r[8]=P*u+D*a,r[9]=P*h+D*g,r[10]=P*x+D*y,r[11]=P*m+D*c,e!==r&&(r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function se(e,o){const n=o??new d(16),r=Math.cos(e),a=Math.sin(e);return n[0]=r,n[1]=a,n[2]=0,n[3]=0,n[4]=-a,n[5]=r,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function de(e,o,n){const r=n??new d(16),a=e[0*4+0],g=e[0*4+1],y=e[0*4+2],c=e[0*4+3],u=e[1*4+0],h=e[1*4+1],x=e[1*4+2],m=e[1*4+3],P=Math.cos(o),D=Math.sin(o);return r[0]=P*a+D*u,r[1]=P*g+D*h,r[2]=P*y+D*x,r[3]=P*c+D*m,r[4]=P*u-D*a,r[5]=P*h-D*g,r[6]=P*x-D*y,r[7]=P*m-D*c,e!==r&&(r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function fe(e,o,n){const r=n??new d(16);let a=e[0],g=e[1],y=e[2];const c=Math.sqrt(a*a+g*g+y*y);a/=c,g/=c,y/=c;const u=a*a,h=g*g,x=y*y,m=Math.cos(o),P=Math.sin(o),D=1-m;return r[0]=u+(1-u)*m,r[1]=a*g*D+y*P,r[2]=a*y*D-g*P,r[3]=0,r[4]=a*g*D-y*P,r[5]=h+(1-h)*m,r[6]=g*y*D+a*P,r[7]=0,r[8]=a*y*D+g*P,r[9]=g*y*D-a*P,r[10]=x+(1-x)*m,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}const i=fe;function p(e,o,n,r){const a=r??new d(16);let g=o[0],y=o[1],c=o[2];const u=Math.sqrt(g*g+y*y+c*c);g/=u,y/=u,c/=u;const h=g*g,x=y*y,m=c*c,P=Math.cos(n),D=Math.sin(n),_=1-P,R=h+(1-h)*P,V=g*y*_+c*D,F=g*c*_-y*D,X=g*y*_-c*D,q=x+(1-x)*P,ce=y*c*_+g*D,ge=g*c*_+y*D,xe=y*c*_-g*D,ve=m+(1-m)*P,ye=e[0],Pe=e[1],De=e[2],Me=e[3],ze=e[4],Ge=e[5],Se=e[6],Ve=e[7],_e=e[8],Ie=e[9],Fe=e[10],Ue=e[11];return a[0]=R*ye+V*ze+F*_e,a[1]=R*Pe+V*Ge+F*Ie,a[2]=R*De+V*Se+F*Fe,a[3]=R*Me+V*Ve+F*Ue,a[4]=X*ye+q*ze+ce*_e,a[5]=X*Pe+q*Ge+ce*Ie,a[6]=X*De+q*Se+ce*Fe,a[7]=X*Me+q*Ve+ce*Ue,a[8]=ge*ye+xe*ze+ve*_e,a[9]=ge*Pe+xe*Ge+ve*Ie,a[10]=ge*De+xe*Se+ve*Fe,a[11]=ge*Me+xe*Ve+ve*Ue,e!==a&&(a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}const t=p;function s(e,o){const n=o??new d(16);return n[0]=e[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function l(e,o,n){const r=n??new d(16),a=o[0],g=o[1],y=o[2];return r[0]=a*e[0*4+0],r[1]=a*e[0*4+1],r[2]=a*e[0*4+2],r[3]=a*e[0*4+3],r[4]=g*e[1*4+0],r[5]=g*e[1*4+1],r[6]=g*e[1*4+2],r[7]=g*e[1*4+3],r[8]=y*e[2*4+0],r[9]=y*e[2*4+1],r[10]=y*e[2*4+2],r[11]=y*e[2*4+3],e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function f(e,o){const n=o??new d(16);return n[0]=e,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function w(e,o,n){const r=n??new d(16);return r[0]=o*e[0*4+0],r[1]=o*e[0*4+1],r[2]=o*e[0*4+2],r[3]=o*e[0*4+3],r[4]=o*e[1*4+0],r[5]=o*e[1*4+1],r[6]=o*e[1*4+2],r[7]=o*e[1*4+3],r[8]=o*e[2*4+0],r[9]=o*e[2*4+1],r[10]=o*e[2*4+2],r[11]=o*e[2*4+3],e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}return{create:z,set:S,fromMat3:G,fromQuat:M,negate:I,copy:A,clone:T,equalsApproximately:b,equals:Y,identity:U,transpose:J,inverse:ee,determinant:re,invert:ie,multiply:le,mul:$,setTranslation:Q,getTranslation:O,getAxis:Z,setAxis:W,getScaling:ne,perspective:K,perspectiveReverseZ:H,ortho:te,frustum:N,frustumReverseZ:ae,aim:we,cameraAim:pe,lookAt:me,translation:ue,translate:Be,rotationX:C,rotateX:Te,rotationY:oe,rotateY:he,rotationZ:se,rotateZ:de,axisRotation:fe,rotation:i,axisRotate:p,rotate:t,scaling:s,scale:l,uniformScaling:f,uniformScale:w}}const rn=new Map;function vn(d){let v=rn.get(d);return v||(v=xn(d),rn.set(d,v)),v}function wn(d){const v=je(d);function z(i,p,t,s){const l=new d(4);return i!==void 0&&(l[0]=i,p!==void 0&&(l[1]=p,t!==void 0&&(l[2]=t,s!==void 0&&(l[3]=s)))),l}const S=z;function G(i,p,t,s,l){const f=l??new d(4);return f[0]=i,f[1]=p,f[2]=t,f[3]=s,f}function M(i,p,t){const s=t??new d(4),l=p*.5,f=Math.sin(l);return s[0]=f*i[0],s[1]=f*i[1],s[2]=f*i[2],s[3]=Math.cos(l),s}function I(i,p){const t=p??v.create(3),s=Math.acos(i[3])*2,l=Math.sin(s*.5);return l>k?(t[0]=i[0]/l,t[1]=i[1]/l,t[2]=i[2]/l):(t[0]=1,t[1]=0,t[2]=0),{angle:s,axis:t}}function A(i,p){const t=N(i,p);return Math.acos(2*t*t-1)}function T(i,p,t){const s=t??new d(4),l=i[0],f=i[1],w=i[2],e=i[3],o=p[0],n=p[1],r=p[2],a=p[3];return s[0]=l*a+e*o+f*r-w*n,s[1]=f*a+e*n+w*o-l*r,s[2]=w*a+e*r+l*n-f*o,s[3]=e*a-l*o-f*n-w*r,s}const b=T;function Y(i,p,t){const s=t??new d(4),l=p*.5,f=i[0],w=i[1],e=i[2],o=i[3],n=Math.sin(l),r=Math.cos(l);return s[0]=f*r+o*n,s[1]=w*r+e*n,s[2]=e*r-w*n,s[3]=o*r-f*n,s}function U(i,p,t){const s=t??new d(4),l=p*.5,f=i[0],w=i[1],e=i[2],o=i[3],n=Math.sin(l),r=Math.cos(l);return s[0]=f*r-e*n,s[1]=w*r+o*n,s[2]=e*r+f*n,s[3]=o*r-w*n,s}function J(i,p,t){const s=t??new d(4),l=p*.5,f=i[0],w=i[1],e=i[2],o=i[3],n=Math.sin(l),r=Math.cos(l);return s[0]=f*r+w*n,s[1]=w*r-f*n,s[2]=e*r+o*n,s[3]=o*r-e*n,s}function ee(i,p,t,s){const l=s??new d(4),f=i[0],w=i[1],e=i[2],o=i[3];let n=p[0],r=p[1],a=p[2],g=p[3],y=f*n+w*r+e*a+o*g;y<0&&(y=-y,n=-n,r=-r,a=-a,g=-g);let c,u;if(1-y>k){const h=Math.acos(y),x=Math.sin(h);c=Math.sin((1-t)*h)/x,u=Math.sin(t*h)/x}else c=1-t,u=t;return l[0]=c*f+u*n,l[1]=c*w+u*r,l[2]=c*e+u*a,l[3]=c*o+u*g,l}function re(i,p){const t=p??new d(4),s=i[0],l=i[1],f=i[2],w=i[3],e=s*s+l*l+f*f+w*w,o=e?1/e:0;return t[0]=-s*o,t[1]=-l*o,t[2]=-f*o,t[3]=w*o,t}function ie(i,p){const t=p??new d(4);return t[0]=-i[0],t[1]=-i[1],t[2]=-i[2],t[3]=i[3],t}function le(i,p){const t=p??new d(4),s=i[0]+i[5]+i[10];if(s>0){const l=Math.sqrt(s+1);t[3]=.5*l;const f=.5/l;t[0]=(i[6]-i[9])*f,t[1]=(i[8]-i[2])*f,t[2]=(i[1]-i[4])*f}else{let l=0;i[5]>i[0]&&(l=1),i[10]>i[l*4+l]&&(l=2);const f=(l+1)%3,w=(l+2)%3,e=Math.sqrt(i[l*4+l]-i[f*4+f]-i[w*4+w]+1);t[l]=.5*e;const o=.5/e;t[3]=(i[f*4+w]-i[w*4+f])*o,t[f]=(i[f*4+l]+i[l*4+f])*o,t[w]=(i[w*4+l]+i[l*4+w])*o}return t}function $(i,p,t,s,l){const f=l??new d(4),w=i*.5,e=p*.5,o=t*.5,n=Math.sin(w),r=Math.cos(w),a=Math.sin(e),g=Math.cos(e),y=Math.sin(o),c=Math.cos(o);switch(s){case"xyz":f[0]=n*g*c+r*a*y,f[1]=r*a*c-n*g*y,f[2]=r*g*y+n*a*c,f[3]=r*g*c-n*a*y;break;case"xzy":f[0]=n*g*c-r*a*y,f[1]=r*a*c-n*g*y,f[2]=r*g*y+n*a*c,f[3]=r*g*c+n*a*y;break;case"yxz":f[0]=n*g*c+r*a*y,f[1]=r*a*c-n*g*y,f[2]=r*g*y-n*a*c,f[3]=r*g*c+n*a*y;break;case"yzx":f[0]=n*g*c+r*a*y,f[1]=r*a*c+n*g*y,f[2]=r*g*y-n*a*c,f[3]=r*g*c-n*a*y;break;case"zxy":f[0]=n*g*c-r*a*y,f[1]=r*a*c+n*g*y,f[2]=r*g*y+n*a*c,f[3]=r*g*c-n*a*y;break;case"zyx":f[0]=n*g*c-r*a*y,f[1]=r*a*c+n*g*y,f[2]=r*g*y-n*a*c,f[3]=r*g*c+n*a*y;break;default:throw new Error(`Unknown rotation order: ${s}`)}return f}function Q(i,p){const t=p??new d(4);return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t}const O=Q;function Z(i,p,t){const s=t??new d(4);return s[0]=i[0]+p[0],s[1]=i[1]+p[1],s[2]=i[2]+p[2],s[3]=i[3]+p[3],s}function W(i,p,t){const s=t??new d(4);return s[0]=i[0]-p[0],s[1]=i[1]-p[1],s[2]=i[2]-p[2],s[3]=i[3]-p[3],s}const ne=W;function K(i,p,t){const s=t??new d(4);return s[0]=i[0]*p,s[1]=i[1]*p,s[2]=i[2]*p,s[3]=i[3]*p,s}const H=K;function te(i,p,t){const s=t??new d(4);return s[0]=i[0]/p,s[1]=i[1]/p,s[2]=i[2]/p,s[3]=i[3]/p,s}function N(i,p){return i[0]*p[0]+i[1]*p[1]+i[2]*p[2]+i[3]*p[3]}function ae(i,p,t,s){const l=s??new d(4);return l[0]=i[0]+t*(p[0]-i[0]),l[1]=i[1]+t*(p[1]-i[1]),l[2]=i[2]+t*(p[2]-i[2]),l[3]=i[3]+t*(p[3]-i[3]),l}function L(i){const p=i[0],t=i[1],s=i[2],l=i[3];return Math.sqrt(p*p+t*t+s*s+l*l)}const j=L;function E(i){const p=i[0],t=i[1],s=i[2],l=i[3];return p*p+t*t+s*s+l*l}const we=E;function pe(i,p){const t=p??new d(4),s=i[0],l=i[1],f=i[2],w=i[3],e=Math.sqrt(s*s+l*l+f*f+w*w);return e>1e-5?(t[0]=s/e,t[1]=l/e,t[2]=f/e,t[3]=w/e):(t[0]=0,t[1]=0,t[2]=0,t[3]=1),t}function me(i,p){return Math.abs(i[0]-p[0])<k&&Math.abs(i[1]-p[1])<k&&Math.abs(i[2]-p[2])<k&&Math.abs(i[3]-p[3])<k}function ue(i,p){return i[0]===p[0]&&i[1]===p[1]&&i[2]===p[2]&&i[3]===p[3]}function Be(i){const p=i??new d(4);return p[0]=0,p[1]=0,p[2]=0,p[3]=1,p}const C=v.create(),Te=v.create(),oe=v.create();function he(i,p,t){const s=t??new d(4),l=v.dot(i,p);return l<-.999999?(v.cross(Te,i,C),v.len(C)<1e-6&&v.cross(oe,i,C),v.normalize(C,C),M(C,Math.PI,s),s):l>.999999?(s[0]=0,s[1]=0,s[2]=0,s[3]=1,s):(v.cross(i,p,C),s[0]=C[0],s[1]=C[1],s[2]=C[2],s[3]=1+l,pe(s,s))}const se=new d(4),de=new d(4);function fe(i,p,t,s,l,f){const w=f??new d(4);return ee(i,s,l,se),ee(p,t,l,de),ee(se,de,2*l*(1-l),w),w}return{create:z,fromValues:S,set:G,fromAxisAngle:M,toAxisAngle:I,angle:A,multiply:T,mul:b,rotateX:Y,rotateY:U,rotateZ:J,slerp:ee,inverse:re,conjugate:ie,fromMat:le,fromEuler:$,copy:Q,clone:O,add:Z,subtract:W,sub:ne,mulScalar:K,scale:H,divScalar:te,dot:N,lerp:ae,length:L,len:j,lengthSq:E,lenSq:we,normalize:pe,equalsApproximately:me,equals:ue,identity:Be,rotationTo:he,sqlerp:fe}}const sn=new Map;function mn(d){let v=sn.get(d);return v||(v=wn(d),sn.set(d,v)),v}function yn(d){function v(t,s,l,f){const w=new d(4);return t!==void 0&&(w[0]=t,s!==void 0&&(w[1]=s,l!==void 0&&(w[2]=l,f!==void 0&&(w[3]=f)))),w}const z=v;function S(t,s,l,f,w){const e=w??new d(4);return e[0]=t,e[1]=s,e[2]=l,e[3]=f,e}function G(t,s){const l=s??new d(4);return l[0]=Math.ceil(t[0]),l[1]=Math.ceil(t[1]),l[2]=Math.ceil(t[2]),l[3]=Math.ceil(t[3]),l}function M(t,s){const l=s??new d(4);return l[0]=Math.floor(t[0]),l[1]=Math.floor(t[1]),l[2]=Math.floor(t[2]),l[3]=Math.floor(t[3]),l}function I(t,s){const l=s??new d(4);return l[0]=Math.round(t[0]),l[1]=Math.round(t[1]),l[2]=Math.round(t[2]),l[3]=Math.round(t[3]),l}function A(t,s=0,l=1,f){const w=f??new d(4);return w[0]=Math.min(l,Math.max(s,t[0])),w[1]=Math.min(l,Math.max(s,t[1])),w[2]=Math.min(l,Math.max(s,t[2])),w[3]=Math.min(l,Math.max(s,t[3])),w}function T(t,s,l){const f=l??new d(4);return f[0]=t[0]+s[0],f[1]=t[1]+s[1],f[2]=t[2]+s[2],f[3]=t[3]+s[3],f}function b(t,s,l,f){const w=f??new d(4);return w[0]=t[0]+s[0]*l,w[1]=t[1]+s[1]*l,w[2]=t[2]+s[2]*l,w[3]=t[3]+s[3]*l,w}function Y(t,s,l){const f=l??new d(4);return f[0]=t[0]-s[0],f[1]=t[1]-s[1],f[2]=t[2]-s[2],f[3]=t[3]-s[3],f}const U=Y;function J(t,s){return Math.abs(t[0]-s[0])<k&&Math.abs(t[1]-s[1])<k&&Math.abs(t[2]-s[2])<k&&Math.abs(t[3]-s[3])<k}function ee(t,s){return t[0]===s[0]&&t[1]===s[1]&&t[2]===s[2]&&t[3]===s[3]}function re(t,s,l,f){const w=f??new d(4);return w[0]=t[0]+l*(s[0]-t[0]),w[1]=t[1]+l*(s[1]-t[1]),w[2]=t[2]+l*(s[2]-t[2]),w[3]=t[3]+l*(s[3]-t[3]),w}function ie(t,s,l,f){const w=f??new d(4);return w[0]=t[0]+l[0]*(s[0]-t[0]),w[1]=t[1]+l[1]*(s[1]-t[1]),w[2]=t[2]+l[2]*(s[2]-t[2]),w[3]=t[3]+l[3]*(s[3]-t[3]),w}function le(t,s,l){const f=l??new d(4);return f[0]=Math.max(t[0],s[0]),f[1]=Math.max(t[1],s[1]),f[2]=Math.max(t[2],s[2]),f[3]=Math.max(t[3],s[3]),f}function $(t,s,l){const f=l??new d(4);return f[0]=Math.min(t[0],s[0]),f[1]=Math.min(t[1],s[1]),f[2]=Math.min(t[2],s[2]),f[3]=Math.min(t[3],s[3]),f}function Q(t,s,l){const f=l??new d(4);return f[0]=t[0]*s,f[1]=t[1]*s,f[2]=t[2]*s,f[3]=t[3]*s,f}const O=Q;function Z(t,s,l){const f=l??new d(4);return f[0]=t[0]/s,f[1]=t[1]/s,f[2]=t[2]/s,f[3]=t[3]/s,f}function W(t,s){const l=s??new d(4);return l[0]=1/t[0],l[1]=1/t[1],l[2]=1/t[2],l[3]=1/t[3],l}const ne=W;function K(t,s){return t[0]*s[0]+t[1]*s[1]+t[2]*s[2]+t[3]*s[3]}function H(t){const s=t[0],l=t[1],f=t[2],w=t[3];return Math.sqrt(s*s+l*l+f*f+w*w)}const te=H;function N(t){const s=t[0],l=t[1],f=t[2],w=t[3];return s*s+l*l+f*f+w*w}const ae=N;function L(t,s){const l=t[0]-s[0],f=t[1]-s[1],w=t[2]-s[2],e=t[3]-s[3];return Math.sqrt(l*l+f*f+w*w+e*e)}const j=L;function E(t,s){const l=t[0]-s[0],f=t[1]-s[1],w=t[2]-s[2],e=t[3]-s[3];return l*l+f*f+w*w+e*e}const we=E;function pe(t,s){const l=s??new d(4),f=t[0],w=t[1],e=t[2],o=t[3],n=Math.sqrt(f*f+w*w+e*e+o*o);return n>1e-5?(l[0]=f/n,l[1]=w/n,l[2]=e/n,l[3]=o/n):(l[0]=0,l[1]=0,l[2]=0,l[3]=0),l}function me(t,s){const l=s??new d(4);return l[0]=-t[0],l[1]=-t[1],l[2]=-t[2],l[3]=-t[3],l}function ue(t,s){const l=s??new d(4);return l[0]=t[0],l[1]=t[1],l[2]=t[2],l[3]=t[3],l}const Be=ue;function C(t,s,l){const f=l??new d(4);return f[0]=t[0]*s[0],f[1]=t[1]*s[1],f[2]=t[2]*s[2],f[3]=t[3]*s[3],f}const Te=C;function oe(t,s,l){const f=l??new d(4);return f[0]=t[0]/s[0],f[1]=t[1]/s[1],f[2]=t[2]/s[2],f[3]=t[3]/s[3],f}const he=oe;function se(t){const s=t??new d(4);return s[0]=0,s[1]=0,s[2]=0,s[3]=0,s}function de(t,s,l){const f=l??new d(4),w=t[0],e=t[1],o=t[2],n=t[3];return f[0]=s[0]*w+s[4]*e+s[8]*o+s[12]*n,f[1]=s[1]*w+s[5]*e+s[9]*o+s[13]*n,f[2]=s[2]*w+s[6]*e+s[10]*o+s[14]*n,f[3]=s[3]*w+s[7]*e+s[11]*o+s[15]*n,f}function fe(t,s,l){const f=l??new d(4);return pe(t,f),Q(f,s,f)}function i(t,s,l){const f=l??new d(4);return H(t)>s?fe(t,s,f):ue(t,f)}function p(t,s,l){const f=l??new d(4);return re(t,s,.5,f)}return{create:v,fromValues:z,set:S,ceil:G,floor:M,round:I,clamp:A,add:T,addScaled:b,subtract:Y,sub:U,equalsApproximately:J,equals:ee,lerp:re,lerpV:ie,max:le,min:$,mulScalar:Q,scale:O,divScalar:Z,inverse:W,invert:ne,dot:K,length:H,len:te,lengthSq:N,lenSq:ae,distance:L,dist:j,distanceSq:E,distSq:we,normalize:pe,negate:me,copy:ue,clone:Be,multiply:C,mul:Te,divide:oe,div:he,zero:se,transformMat4:de,setLength:fe,truncate:i,midpoint:p}}const on=new Map;function Pn(d){let v=on.get(d);return v||(v=yn(d),on.set(d,v)),v}function Ze(d,v,z,S,G,M){return{mat3:gn(d),mat4:vn(v),quat:mn(z),vec2:cn(S),vec3:je(G),vec4:Pn(M)}}const{mat3:Zn,mat4:Ae,quat:$n,vec2:Qn,vec3:Kn,vec4:Jn}=Ze(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Ze(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Ze(dn,Array,Array,Array,Array,Array);const Re=new ArrayBuffer(272),Ee={texelSize:new Float32Array(Re,0,2),sphereSize:new Float32Array(Re,8,2),invProjectionMatrix:new Float32Array(Re,16,16),projectionMatrix:new Float32Array(Re,80,16),viewMatrix:new Float32Array(Re,144,16),invViewMatrix:new Float32Array(Re,208,16)};class Dn{constructor(v){B(this,"isDragging");B(this,"prevX");B(this,"prevY");B(this,"prevHoverX");B(this,"prevHoverY");B(this,"currentHoverX");B(this,"currentHoverY");B(this,"currentXtheta");B(this,"currentYtheta");B(this,"maxYTheta");B(this,"minYTheta");B(this,"sensitivity");B(this,"currentDistance");B(this,"maxDistance");B(this,"minDistance");B(this,"target");B(this,"fov");B(this,"zoomRate");B(this,"canvas");this.canvas=v,this.canvas.addEventListener("pointerdown",z=>{this.isDragging=document.getElementById("interaction").value==="rotate",this.canvas.setPointerCapture(z.pointerId),this.prevX=z.clientX,this.prevY=z.clientY}),this.canvas.addEventListener("wheel",z=>{z.preventDefault();var S=z.deltaY;this.currentDistance+=(S>0?1:-1)*this.zoomRate,this.currentDistance<this.minDistance&&(this.currentDistance=this.minDistance),this.currentDistance>this.maxDistance&&(this.currentDistance=this.maxDistance),this.recalculateView()}),this.canvas.addEventListener("pointermove",z=>{const S=this.canvas.getBoundingClientRect();if(this.currentHoverX=z.clientX-S.left,this.currentHoverY=z.clientY-S.top,this.isDragging){const G=this.prevX-z.clientX,M=this.prevY-z.clientY;this.currentXtheta+=this.sensitivity*G,this.currentYtheta+=this.sensitivity*M,this.currentYtheta>this.maxYTheta&&(this.currentYtheta=this.maxYTheta),this.currentYtheta<this.minYTheta&&(this.currentYtheta=this.minYTheta),this.prevX=z.clientX,this.prevY=z.clientY,this.recalculateView()}}),this.canvas.addEventListener("pointerup",()=>{this.isDragging&&(this.isDragging=!1)}),this.canvas.addEventListener("pointercancel",()=>{this.isDragging=!1}),this.canvas.addEventListener("pointerleave",()=>{this.prevHoverX=this.currentHoverX,this.prevHoverY=this.currentHoverY}),window.addEventListener("resize",()=>{this.fov&&this.updateProjection()})}updateProjection(){const v=Ae.perspective(this.fov,this.canvas.clientWidth/this.canvas.clientHeight,.1,300);Ee.projectionMatrix.set(v),Ee.invProjectionMatrix.set(Ae.inverse(v))}reset(v,z,S,G){this.isDragging=!1,this.prevX=0,this.prevY=0,this.currentHoverX=this.prevHoverX=0,this.currentHoverY=this.prevHoverY=0,this.currentXtheta=-Math.PI/2*1,this.currentYtheta=-Math.PI/8,this.maxYTheta=-Math.PI/12*.8,this.minYTheta=-.99*Math.PI/2,this.sensitivity=.005,this.currentDistance=v,this.maxDistance=1.3*this.currentDistance,this.minDistance=.8*this.currentDistance,this.target=z,this.fov=S,this.zoomRate=G;const M=this.canvas.clientWidth/this.canvas.clientHeight,I=Ae.perspective(S,M,.1,300);Ee.projectionMatrix.set(I),Ee.invProjectionMatrix.set(Ae.inverse(I)),this.recalculateView()}recalculateView(){var v=Ae.identity();Ae.translate(v,this.target,v),Ae.rotateY(v,this.currentXtheta,v),Ae.rotateX(v,this.currentYtheta,v),Ae.translate(v,[0,0,this.currentDistance],v);var z=Ae.multiply(v,[0,0,0,1]);let S=this.target;const G=Ae.lookAt([z[0],z[1],z[2]],S,[0,1,0]);Ee.viewMatrix.set(G),Ee.invViewMatrix.set(Ae.inverse(G))}calcMouseVelocity(){if(this.isDragging)return[0,0];let[v,z]=this.calcPlaneCoord(this.currentHoverX,this.currentHoverY),[S,G]=this.calcPlaneCoord(this.prevHoverX,this.prevHoverY),M=v-S,I=z-G,A=4;return M>A&&(M=A),M<-A&&(M=-A),I>A&&(I=A),I<-A&&(I=-A),[M,I,0,0]}calcPlaneCoord(v,z){let S=v/this.canvas.clientWidth,G=z/this.canvas.clientHeight,M=2*S-1,I=(1-G)*2-1,A=[M*Math.tan(this.fov/2)*(this.canvas.clientWidth/this.canvas.clientHeight),I*Math.tan(this.fov/2),-1];return[A[0]*this.currentDistance,A[1]*this.currentDistance]}setNewPrevMouseCoord(){this.prevHoverX=this.currentHoverX,this.prevHoverY=this.currentHoverY}stepAngle(){this.currentXtheta+=.012,this.recalculateView()}}var Mn=`struct Cell {\r
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
}`,zn=`struct Particle {\r
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
}`,bn=`struct Particle {\r
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
            if (radialDistance > cylinderRadius - 0.3 && radialDistance > 0.0) {
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
            clamp(particles[id.x].position.y, 3., realBoxSize.y - 4.),
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
        if (radialDistance > cylinderRadius - 0.2 && radialDistance > 0.0) {
            let normal = radial / radialDistance;
            let penetration = max(0.0, radialDistance - (cylinderRadius - 0.2));
            particles[id.x].v.x -= normal.x * penetration;
            particles[id.x].v.z -= normal.y * penetration;
        }

        let wallMin = 3.0;
        let wallMax = realBoxSize.y - 4.0;
        let predictedY = particles[id.x].position.y + particles[id.x].v.y * dt * 2.0;
        if (predictedY < wallMin) { particles[id.x].v.y += wallMin - predictedY; }
        if (predictedY > wallMax) { particles[id.x].v.y += wallMax - predictedY; }
    }
}`,Gn=`struct Particle {\r
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
}`,Sn=`@group(0) @binding(0) var<storage, read> particles: array<Particle>;\r
@group(0) @binding(1) var<storage, read> densities: array<f32>;\r
@group(0) @binding(2) var<uniform> numParticles: u32;\r
@group(0) @binding(3) var<storage, read_write> densityGrid: array<atomic<i32>>;\r
@group(0) @binding(4) var<uniform> densityGridSize: vec3f;

struct Particle {\r
    position: vec3f, \r
    v: vec3f, \r
    C: mat3x3f, \r
}

override densityFixedPointMultiplier: f32; 

fn encodeFixedPoint(floatingPoint: f32) -> i32 {\r
	return i32(floatingPoint * densityFixedPointMultiplier);\r
}

@compute @workgroup_size(64)\r
fn p2gDensity(@builtin(global_invocation_id) id: vec3<u32>) {\r
    if (id.x < numParticles) {\r
        var weights: array<vec3f, 3>;\r
        let particle = particles[id.x];\r
        let cellIndex: vec3f = floor(particle.position);\r
        let cellDiff: vec3f = particle.position - (cellIndex + 0.5f);\r
        weights[0] = 0.5f * (0.5f - cellDiff) * (0.5f - cellDiff);\r
        weights[1] = 0.75f - cellDiff * cellDiff;\r
        weights[2] = 0.5f * (0.5f + cellDiff) * (0.5f + cellDiff);

        for (var gx = 0; gx < 3; gx++) {\r
            for (var gy = 0; gy < 3; gy++) {\r
                for (var gz = 0; gz < 3; gz++) {\r
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;\r
                    let cellX: vec3f = vec3f(\r
                            cellIndex.x + f32(gx) - 1., \r
                            cellIndex.y + f32(gy) - 1.,\r
                            cellIndex.z + f32(gz) - 1.  \r
                        );\r
                    let cellIndex1D: i32 = \r
                        i32(cellX.x) * i32(densityGridSize.y) * i32(densityGridSize.z) + \r
                        i32(cellX.y) * i32(densityGridSize.z) + \r
                        i32(cellX.z);\r
                    atomicAdd(&densityGrid[cellIndex1D], encodeFixedPoint(densities[id.x] * weight));\r
                }\r
            }\r
        }\r
    }\r
}`,Vn=`@group(0) @binding(0) var<storage, read_write> densityGrid: array<i32>;\r
@group(0) @binding(1) var<storage, read_write> castedDensityGrid: array<i32>;

@compute @workgroup_size(64)\r
fn clearDensityGrid(@builtin(global_invocation_id) id: vec3<u32>) {\r
    if (id.x < arrayLength(&castedDensityGrid)) {\r
        densityGrid[2 * id.x] = 0;\r
        densityGrid[2 * id.x + 1] = 0;\r
        castedDensityGrid[id.x] = 0;\r
    }\r
}`,_n=`@group(0) @binding(0) var<storage, read> densityGrid: array<i32>;\r
@group(0) @binding(1) var<storage, read_write> castedDensityGrid: array<u32>;

override fixedPointMultiplierInverse: f32; 

fn decodeFixedPoint(fixedPoint: i32) -> f32 {\r
	return f32(fixedPoint) * fixedPointMultiplierInverse;\r
}

@compute @workgroup_size(64)\r
fn clearDensityGrid(@builtin(global_invocation_id) id: vec3<u32>) {\r
    if (id.x < arrayLength(&castedDensityGrid)) {\r
        let d0: f32 = decodeFixedPoint(densityGrid[2 * id.x]);\r
        let d1: f32 = decodeFixedPoint(densityGrid[2 * id.x + 1]);\r
        
        
        let d01: u32 = pack2x16float(vec2f(d0, d1));\r
        castedDensityGrid[id.x] = d01;\r
    }\r
}`;function In(d,v,z={}){const S=z.spacing??.65,G=z.wallMargin??3,M=z.floor??3,I=z.fillRatio??.56,A=z.jitter??(()=>Math.random()*S*.35),T=d[0]/2,b=d[2]/2,Y=Math.min(d[0],d[2])/2-G,U=[];for(let J=M;J<d[1]*I&&U.length<v;J+=S)for(let ee=T-Y;ee<=T+Y&&U.length<v;ee+=S)for(let re=b-Y;re<=b+Y&&U.length<v;re+=S){const ie=ee+A(),le=J+A(),$=re+A();Math.hypot(ie-T,$-b)<=Y&&U.push([ie,le,$])}return U}const We=80;class Fn{constructor(v,z,S,G,M,I,A,T,b,Y,U,J,ee,re){B(this,"cellStructSize",16);B(this,"realBoxSizeBuffer");B(this,"numParticlesBuffer");B(this,"densityBuffer");B(this,"mouseInfoUniformBuffer");B(this,"sphereRadiusBuffer");B(this,"initBoxSizeBuffer");B(this,"numParticles",0);B(this,"gridCount",0);B(this,"maxGridCount",0);B(this,"maxParticleCount",0);B(this,"densityGridCount",0);B(this,"clearGridPipeline");B(this,"clearDensityGridPipeline");B(this,"castDensityGridPipeline");B(this,"p2g1Pipeline");B(this,"p2g2Pipeline");B(this,"p2gDensityPipeline");B(this,"updateGridPipeline");B(this,"g2pPipeline");B(this,"copyPositionPipeline");B(this,"clearGridBindGroup");B(this,"clearDensityGridBindGroup");B(this,"castDensityGridBindGroup");B(this,"p2g1BindGroup");B(this,"p2g2BindGroup");B(this,"p2gDensityBindGroup");B(this,"updateGridBindGroup");B(this,"g2pBindGroup");B(this,"copyPositionBindGroup");B(this,"particleBuffer");B(this,"dtBuffer");B(this,"densityGridBuffer");B(this,"device");B(this,"renderDiameter");B(this,"frameCount");B(this,"spawned");B(this,"mouseInfoValues",new ArrayBuffer(32));B(this,"mouseInfoViews",{screenSize:new Float32Array(this.mouseInfoValues,0,2),mouseCoord:new Float32Array(this.mouseInfoValues,8,2),mouseVel:new Float32Array(this.mouseInfoValues,16,2),mouseRadius:new Float32Array(this.mouseInfoValues,24,1)});B(this,"restDensity");this.device=T,this.renderDiameter=re,this.frameCount=0,this.spawned=!1,this.numParticles=0,this.maxGridCount=U,this.maxParticleCount=J,this.initBoxSizeBuffer=I;const ie=T.createShaderModule({code:Mn}),le=T.createShaderModule({code:Vn}),$=T.createShaderModule({code:_n}),Q=T.createShaderModule({code:zn}),O=T.createShaderModule({code:bn}),Z=T.createShaderModule({code:Sn}),W=T.createShaderModule({code:Bn}),ne=T.createShaderModule({code:Tn}),K=T.createShaderModule({code:Gn});this.restDensity=3;const H={stiffness:50,restDensity:this.restDensity,dynamicViscosity:.1,fixedPointMultiplier:ee,fixedPointMultiplierInverse:1/ee};this.clearGridPipeline=T.createComputePipeline({label:"clear grid pipeline",layout:"auto",compute:{module:ie}}),this.clearDensityGridPipeline=T.createComputePipeline({label:"clear density grid pipeline",layout:"auto",compute:{module:le}}),this.castDensityGridPipeline=T.createComputePipeline({label:"cast density grid pipeline",layout:"auto",compute:{module:$,constants:{fixedPointMultiplierInverse:H.fixedPointMultiplierInverse}}}),this.p2g1Pipeline=T.createComputePipeline({label:"p2g 1 pipeline",layout:"auto",compute:{module:Q,constants:{fixedPointMultiplier:H.fixedPointMultiplier}}}),this.p2g2Pipeline=T.createComputePipeline({label:"p2g 2 pipeline",layout:"auto",compute:{module:O,constants:{fixedPointMultiplier:H.fixedPointMultiplier,fixedPointMultiplierInverse:H.fixedPointMultiplierInverse,stiffness:H.stiffness,restDensity:H.restDensity,dynamicViscosity:H.dynamicViscosity}}}),this.p2gDensityPipeline=T.createComputePipeline({label:"p2g density pipeline",layout:"auto",compute:{module:Z,constants:{densityFixedPointMultiplier:H.fixedPointMultiplier}}}),this.updateGridPipeline=T.createComputePipeline({label:"update grid pipeline",layout:"auto",compute:{module:W,constants:{fixedPointMultiplier:H.fixedPointMultiplier,fixedPointMultiplierInverse:H.fixedPointMultiplierInverse}}}),this.g2pPipeline=T.createComputePipeline({label:"g2p pipeline",layout:"auto",compute:{module:ne,constants:{fixedPointMultiplierInverse:H.fixedPointMultiplierInverse}}}),this.copyPositionPipeline=T.createComputePipeline({label:"copy position pipeline",layout:"auto",compute:{module:K}});const te=T.createBuffer({label:"cells buffer",size:this.cellStructSize*U,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});this.densityBuffer=T.createBuffer({label:"density buffer",size:4*J,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.realBoxSizeBuffer=T.createBuffer({label:"real box size buffer",size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.numParticlesBuffer=T.createBuffer({label:"number of particles buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.mouseInfoUniformBuffer=T.createBuffer({label:"mouse info buffer",size:this.mouseInfoValues.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.sphereRadiusBuffer=T.createBuffer({label:"sphere radius buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dtBuffer=T.createBuffer({label:"dt buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.mouseInfoViews.screenSize.set([Y.width,Y.height]),this.device.queue.writeBuffer(this.mouseInfoUniformBuffer,0,this.mouseInfoValues),this.clearGridBindGroup=T.createBindGroup({layout:this.clearGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:te}}]}),this.clearDensityGridBindGroup=T.createBindGroup({layout:this.clearDensityGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:M}}]}),this.castDensityGridBindGroup=T.createBindGroup({layout:this.castDensityGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:M}}]}),this.p2g1BindGroup=T.createBindGroup({layout:this.p2g1Pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:te}},{binding:2,resource:{buffer:I}},{binding:3,resource:{buffer:this.numParticlesBuffer}}]}),this.p2g2BindGroup=T.createBindGroup({layout:this.p2g2Pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:te}},{binding:2,resource:{buffer:I}},{binding:3,resource:{buffer:this.numParticlesBuffer}},{binding:4,resource:{buffer:this.densityBuffer}},{binding:5,resource:{buffer:this.dtBuffer}}]}),this.p2gDensityBindGroup=T.createBindGroup({layout:this.p2gDensityPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:this.densityBuffer}},{binding:2,resource:{buffer:this.numParticlesBuffer}},{binding:3,resource:{buffer:G}},{binding:4,resource:{buffer:A}}]}),this.updateGridBindGroup=T.createBindGroup({layout:this.updateGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:te}},{binding:1,resource:{buffer:this.realBoxSizeBuffer}},{binding:2,resource:{buffer:I}},{binding:3,resource:{buffer:S}},{binding:4,resource:b},{binding:5,resource:{buffer:this.mouseInfoUniformBuffer}},{binding:6,resource:{buffer:this.dtBuffer}}]}),this.g2pBindGroup=T.createBindGroup({layout:this.g2pPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:te}},{binding:2,resource:{buffer:this.realBoxSizeBuffer}},{binding:3,resource:{buffer:I}},{binding:4,resource:{buffer:this.numParticlesBuffer}},{binding:5,resource:{buffer:this.dtBuffer}}]}),this.copyPositionBindGroup=T.createBindGroup({layout:this.copyPositionPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:this.numParticlesBuffer}}]}),this.particleBuffer=v,this.densityGridBuffer=G}initDambreak(v,z){let S=new ArrayBuffer(We*this.maxParticleCount);this.numParticles=0;const G=In(v,z);for(const T of G){const b=We*this.numParticles;new Float32Array(S,b,3).set(T),this.numParticles++}console.log(this.numParticles),this.numParticles<z&&console.log("warning: actual number of particles is smaller than the specified number. make bounding box larger.");let M=new ArrayBuffer(We*this.numParticles);const I=new Uint8Array(S),A=new Uint8Array(M);return A.set(I.subarray(0,A.length)),M}reset(v,z){if(this.gridCount=Math.ceil(v[0])*Math.ceil(v[1])*Math.ceil(v[2]),this.gridCount>this.maxGridCount)throw new Error("gridCount should be equal to or less than maxGridCount");this.densityGridCount=this.gridCount;const S=new Float32Array(v);this.device.queue.writeBuffer(this.initBoxSizeBuffer,0,S),this.frameCount=0;let G=this.initDambreak(v,z);this.device.queue.writeBuffer(this.particleBuffer,0,G),this.changeBoxSize(v),this.changeNumParticles(this.numParticles)}execute(v,z,S,G,M,I,A,T){const b=v.beginComputePass();this.mouseInfoViews.mouseCoord.set([z[0],z[1]]),this.mouseInfoViews.mouseVel.set([S[0],S[1]]),this.mouseInfoViews.mouseRadius.set([G]),this.device.queue.writeBuffer(this.mouseInfoUniformBuffer,0,this.mouseInfoValues);const Y=new Float32Array([I]);if(this.device.queue.writeBuffer(this.dtBuffer,0,Y),M){if(A)for(let J=0;J<1;J++)b.setBindGroup(0,this.clearGridBindGroup),b.setPipeline(this.clearGridPipeline),b.dispatchWorkgroups(Math.ceil(this.gridCount/64)),b.setBindGroup(0,this.p2g1BindGroup),b.setPipeline(this.p2g1Pipeline),b.dispatchWorkgroups(Math.ceil(this.numParticles/64)),b.setBindGroup(0,this.p2g2BindGroup),b.setPipeline(this.p2g2Pipeline),b.dispatchWorkgroups(Math.ceil(this.numParticles/64)),b.setBindGroup(0,this.updateGridBindGroup),b.setPipeline(this.updateGridPipeline),b.dispatchWorkgroups(Math.ceil(this.gridCount/64)),b.setBindGroup(0,this.g2pBindGroup),b.setPipeline(this.g2pPipeline),b.dispatchWorkgroups(Math.ceil(this.numParticles/64));let U=T[0]*T[1]*T[2];b.setBindGroup(0,this.clearDensityGridBindGroup),b.setPipeline(this.clearDensityGridPipeline),b.dispatchWorkgroups(Math.ceil(U/2/64)),b.setBindGroup(0,this.p2gDensityBindGroup),b.setPipeline(this.p2gDensityPipeline),b.dispatchWorkgroups(Math.ceil(this.numParticles/64)),b.setBindGroup(0,this.castDensityGridBindGroup),b.setPipeline(this.castDensityGridPipeline),b.dispatchWorkgroups(Math.ceil(U/2/64)),b.setBindGroup(0,this.copyPositionBindGroup),b.setPipeline(this.copyPositionPipeline),b.dispatchWorkgroups(Math.ceil(this.numParticles/64))}else if(A){for(let U=0;U<1;U++)b.setBindGroup(0,this.clearGridBindGroup),b.setPipeline(this.clearGridPipeline),b.dispatchWorkgroups(Math.ceil(this.gridCount/64)),b.setBindGroup(0,this.p2g1BindGroup),b.setPipeline(this.p2g1Pipeline),b.dispatchWorkgroups(Math.ceil(this.numParticles/64)),b.setBindGroup(0,this.p2g2BindGroup),b.setPipeline(this.p2g2Pipeline),b.dispatchWorkgroups(Math.ceil(this.numParticles/64)),b.setBindGroup(0,this.updateGridBindGroup),b.setPipeline(this.updateGridPipeline),b.dispatchWorkgroups(Math.ceil(this.gridCount/64)),b.setBindGroup(0,this.g2pBindGroup),b.setPipeline(this.g2pPipeline),b.dispatchWorkgroups(Math.ceil(this.numParticles/64));b.setBindGroup(0,this.copyPositionBindGroup),b.setPipeline(this.copyPositionPipeline),b.dispatchWorkgroups(Math.ceil(this.numParticles/64))}b.end(),this.frameCount++}changeBoxSize(v){const z=new Float32Array(v);this.device.queue.writeBuffer(this.realBoxSizeBuffer,0,z)}changeNumParticles(v){const z=new Int32Array([v]);this.device.queue.writeBuffer(this.numParticlesBuffer,0,z),this.numParticles=v}}var Un=`@group(0) @binding(1) var depthTexture: texture_2d<f32>;\r
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
    let refractedUV = calcReflactedTexCoord(surfacePosView, refractionDirView, min(thickness * 0.1, 2.0));
    let backdrop = textureSampleLevel(bgTexture, textureSampler, refractedUV, 0.0).rgb;
    var transmitted = invGamma(mix(backdrop, refractedEnvironment, 0.025));
    var refractionColor: vec3f = transmitted * transmittance;

    let F0 = 0.02;\r
    var fresnelBiased: f32 = clamp(F0 + (1.0 - F0) * pow(1.0 - dot(normal, -rayDirView), 5.0) + 0.0, 0., 1.);\r
    var fresnel: f32 = clamp(F0 + (1.0 - F0) * pow(1.0 - dot(normal, -rayDirView), 5.0), 0., 1.);

    var reflectionDir: vec3f = reflect(rayDirView, normal);
    var reflectionDirWorld: vec3f = (uniforms.invViewMatrix * vec4f(reflectionDir, 0.0)).xyz;
    let reflectedEnvironment = textureSampleLevel(envmapTexture, textureSampler, reflectionDirWorld, 0.0).rgb;
    let reflectedStudio = mix(studioColor(reflectionDirWorld), reflectedEnvironment, 0.08);
    var reflectionColor: vec3f = invGamma(reflectedStudio);

    var finalColor = 0.45 * specular + mix(refractionColor, reflectionColor, fresnel);

    return vec4f(gamma(finalColor), 1.0);\r
}`,Rn=`struct VertexOutput {\r
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
}`,En=`struct RenderUniforms {\r
    texelSize: vec2f, \r
    sphereSize: f32, \r
    invProjectionMatrix: mat4x4f, \r
    projectionMatrix: mat4x4f, \r
    viewMatrix: mat4x4f, \r
    invViewMatrix: mat4x4f, \r
}

struct VertexOutput {\r
    @builtin(position) position: vec4f, \r
    @location(0) uv: vec2f, \r
}

struct FragmentInput {\r
    @location(0) uv: vec2f, \r
}

struct PosVel {\r
    position: vec3f, \r
    v: vec3f, \r
}

@group(0) @binding(0) var<storage> particles: array<PosVel>;\r
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;

@vertex\r
fn vs(    \r
    @builtin(vertex_index) vertex_index: u32, \r
    @builtin(instance_index) instance_index: u32\r
) -> VertexOutput {\r
    var corner_positions = array(\r
        vec2( 0.5,  0.5),\r
        vec2( 0.5, -0.5),\r
        vec2(-0.5, -0.5),\r
        vec2( 0.5,  0.5),\r
        vec2(-0.5, -0.5),\r
        vec2(-0.5,  0.5),\r
    );

    var size = uniforms.sphereSize;\r
    let stretched_position = corner_positions[vertex_index] * size;\r
    let corner = vec3(stretched_position, 0.0);

    let uv = corner_positions[vertex_index] + 0.5;

    let real_position = particles[instance_index].position;\r
    let view_position = (uniforms.viewMatrix * vec4f(real_position, 1.0)).xyz;

    let out_position = uniforms.projectionMatrix * vec4f(view_position + corner, 1.0);

    return VertexOutput(out_position, uv);\r
}

@fragment\r
fn fs(input: FragmentInput) -> @location(0) vec4f {\r
    var normalxy: vec2f = input.uv * 2.0 - 1.0;\r
    var r2: f32 = dot(normalxy, normalxy);\r
    if (r2 > 1.0) {\r
        discard;\r
    }\r
    var thickness: f32 = sqrt(1.0 - r2);\r
    let particle_alpha = 0.05;

    return vec4f(vec3f(particle_alpha * thickness), 1.0);\r
}`,Ln=`@group(0) @binding(0) var textureSampler: sampler;\r
@group(0) @binding(1) var texture: texture_2d<f32>;\r
@group(0) @binding(2) var<uniform> uniforms: FilterUniforms;\r
@group(0) @binding(3) var<uniform> filterSize: i32;

struct FragmentInput {\r
    @location(0) uv: vec2f,  \r
    @location(1) iuv: vec2f\r
}

struct FilterUniforms {\r
    blurDir: vec2f, \r
}

override thicknessTextureWidth: f32;\r
override thicknessTextureHeight: f32;

@fragment\r
fn fs(input: FragmentInput) -> @location(0) vec4f {\r
    var thickness: f32 = textureSample(texture, textureSampler, input.uv).r;\r
    if (thickness == 0.) {\r
        return vec4f(0., 0., 0., 1.);\r
    }

    var sigma: f32 = f32(filterSize) / 3.0;\r
    var sigmaSquareInv: f32 = 1.0 / (2.0 * sigma * sigma);

    var sum = thickness;\r
    var wsum = 1.;

    let iuv: vec2f = vec2f(thicknessTextureWidth, thicknessTextureHeight) * input.uv;

    for (var x: i32 = 1; x <= filterSize; x++) {\r
        var coords: vec2f = vec2f(f32(x));\r
        var sampledThicknessLeft: f32 = textureLoad(texture, vec2u(iuv - uniforms.blurDir * coords), 0).r;\r
        var sampledThicknessRight: f32 = textureLoad(texture, vec2u(iuv + uniforms.blurDir * coords), 0).r;

        var w: f32 = exp(-f32(x * x) * sigmaSquareInv);

        sum += (sampledThicknessLeft + sampledThicknessRight) * w;\r
        wsum += 2.0 * w;\r
    }

    return vec4f(sum / wsum, 0., 0., 1.);\r
}`,Yn=`struct VertexOutput {\r
    @builtin(position) position: vec4f, \r
    @location(0) uv: vec2f, \r
    @location(1) viewPosition: vec3f, \r
}

struct FragmentInput {\r
    @location(0) uv: vec2f, \r
    @location(1) viewPosition: vec3f, \r
}

struct FragmentOutput {\r
    
    @location(0) depth: f32, \r
    @builtin(frag_depth) fragDepth: f32, \r
}

struct RenderUniforms {\r
    texelSize: vec2f, \r
    sphereSize: f32, \r
    invProjectionMatrix: mat4x4f, \r
    projectionMatrix: mat4x4f, \r
    viewMatrix: mat4x4f, \r
    invViewMatrix: mat4x4f, \r
}

struct PosVel {\r
    position: vec3f, \r
    v: vec3f, \r
}

@group(0) @binding(0) var<storage> particles: array<PosVel>;\r
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;

@vertex\r
fn vs(    \r
    @builtin(vertex_index) vertex_index: u32, \r
    @builtin(instance_index) instance_index: u32\r
) -> VertexOutput {\r
    var corner_positions = array(\r
        vec2( 0.5,  0.5),\r
        vec2( 0.5, -0.5),\r
        vec2(-0.5, -0.5),\r
        vec2( 0.5,  0.5),\r
        vec2(-0.5, -0.5),\r
        vec2(-0.5,  0.5),\r
    );

    var size = uniforms.sphereSize;\r
    let stretched_position = corner_positions[vertex_index] * size;\r
    let corner = vec3(stretched_position, 0.0);

    let uv = corner_positions[vertex_index] + 0.5;

    let real_position = particles[instance_index].position;\r
    let view_position = (uniforms.viewMatrix * vec4f(real_position, 1.0)).xyz;

    let out_position = uniforms.projectionMatrix * vec4f(view_position + corner, 1.0);

    return VertexOutput(out_position, uv, view_position);\r
}

@fragment\r
fn fs(input: FragmentInput) -> FragmentOutput {\r
    var out: FragmentOutput;

    var normalxy: vec2f = input.uv * 2.0 - 1.0;\r
    var r2: f32 = dot(normalxy, normalxy);\r
    if (r2 > 1.0) {\r
        discard;\r
    }\r
    var normalz = sqrt(1.0 - r2);\r
    var normal = vec3(normalxy, normalz);

    var radius = uniforms.sphereSize / 2;\r
    var realViewPos: vec4f = vec4f(input.viewPosition + normal * radius, 1.0);\r
    var clipSpacePos: vec4f = uniforms.projectionMatrix * realViewPos;\r
    out.fragDepth = clipSpacePos.z / clipSpacePos.w;\r
    out.depth = realViewPos.z;\r
    return out;\r
}`,On=`struct VertexOutput {\r
    @builtin(position) position: vec4f, \r
    @location(0) uv: vec2f, \r
    @location(1) viewPosition: vec3f, \r
    @location(2) speed: f32, \r
}

struct FragmentInput {\r
    @location(0) uv: vec2f, \r
    @location(1) viewPosition: vec3f, \r
    @location(2) speed: f32, \r
}

struct FragmentOutput {\r
    @location(0) depth: f32, \r
    @location(1) color: vec4f, \r
    @builtin(frag_depth) fragDepth: f32, \r
}

struct RenderUniforms {\r
    texelSize: vec2f, \r
    sphereSize: f32, \r
    invProjectionMatrix: mat4x4f, \r
    projectionMatrix: mat4x4f, \r
    viewMatrix: mat4x4f, \r
    invViewMatrix: mat4x4f, \r
}

struct PosVel {\r
    position: vec3f, \r
    v: vec3f, \r
}

@group(0) @binding(0) var<storage> particles: array<PosVel>;\r
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;

@vertex\r
fn vs(    \r
    @builtin(vertex_index) vertex_index: u32, \r
    @builtin(instance_index) instance_index: u32\r
) -> VertexOutput {\r
    var corner_positions = array(\r
        vec2( 0.5,  0.5),\r
        vec2( 0.5, -0.5),\r
        vec2(-0.5, -0.5),\r
        vec2( 0.5,  0.5),\r
        vec2(-0.5, -0.5),\r
        vec2(-0.5,  0.5),\r
    );

    var size = uniforms.sphereSize;\r
    let stretched_position = corner_positions[vertex_index] * size;\r
    let corner = vec3(stretched_position, 0.0);\r
    let uv = corner_positions[vertex_index] + 0.5;

    let real_position = particles[instance_index].position;\r
    let view_position = (uniforms.viewMatrix * vec4f(real_position, 1.0)).xyz;

    let out_position = uniforms.projectionMatrix * vec4f(view_position + corner, 1.0);

    let speed = length(particles[instance_index].v);\r
    return VertexOutput(out_position, uv, view_position, speed);\r
}

@fragment\r
fn fs(input: FragmentInput) -> FragmentOutput {\r
    var out: FragmentOutput;

    var normalxy: vec2f = input.uv * 2.0 - 1.0;\r
    var r2: f32 = dot(normalxy, normalxy);\r
    if (r2 > 1.0) {\r
        discard;\r
    }\r
    var normalz = sqrt(1.0 - r2);\r
    var normal = vec3(normalxy, normalz);

    var radius = uniforms.sphereSize / 2;\r
    var realViewPos: vec4f = vec4f(input.viewPosition + normal * radius, 1.0);\r
    var clipSpacePos: vec4f = uniforms.projectionMatrix * realViewPos;\r
    out.fragDepth = clipSpacePos.z / clipSpacePos.w;

    out.depth = realViewPos.z;\r
    out.color = vec4f(input.speed, 0, 0, 1.);\r
    return out;\r
}`,kn=`@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(3) var<uniform> box: vec3f;

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
    let camera = getCameraPosition();
    if (rayDirWorld.y < -0.00001) {
        let t = (0.8 - camera.y) / rayDirWorld.y;
        if (t > 0.0) {
            let point = camera + t * rayDirWorld;
            let radius = min(box.x, box.z) * 0.5 - 2.5;
            let radialDistance = length(point.xz - box.xz * 0.5);
            let shadow = exp(-pow(radialDistance / (radius * 1.2), 4.0));
            let floor = vec3f(0.37, 0.52, 0.60) * (1.0 - 0.35 * shadow);
            return vec4f(mix(studio, floor, exp(-t * 0.002)), 1.0);
        }
    }
    return vec4f(studio, 1.0);
}`,Xn=`struct FragmentInput {\r
    @location(0) uv: vec2f,  \r
    @location(1) iuv: vec2f\r
}

struct RenderUniforms {\r
    texelSize: vec2f, \r
    sphereSize: f32, \r
    invProjectionMatrix: mat4x4f, \r
    projectionMatrix: mat4x4f, \r
    viewMatrix: mat4x4f, \r
    invViewMatrix: mat4x4f, \r
}

@group(0) @binding(0) var depthTexture: texture_2d<f32>;\r
@group(0) @binding(1) var densityGridTexture: texture_3d<f32>;\r
@group(0) @binding(2) var<uniform> uniforms: RenderUniforms;\r
@group(0) @binding(3) var<uniform> initBoxSize: vec3f;\r
@group(0) @binding(4) var textureSampler: sampler;\r
@group(0) @binding(5) var bgTexture: texture_2d<f32>;\r
@group(0) @binding(6) var<uniform> densityGridSize: vec3f;

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
}

@fragment\r
fn fs(input: FragmentInput) -> @location(0) vec4f {\r
    let depth: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv), 0).r);\r
    if (depth >= 1e4) {\r
        let bgColor: vec3f = textureSampleLevel(bgTexture, textureSampler, input.uv, 0.0).rgb;\r
        return vec4f(bgColor, 0.);\r
    }

    let surfacePosView = computeViewPosFromUVDepth(input.uv, depth);\r
    let rayDirView = normalize(surfacePosView);\r
    var surfacePosWorld = (uniforms.invViewMatrix * vec4f(surfacePosView, 1.)).xyz;\r
    let rayDirWorld = (uniforms.invViewMatrix * vec4f(rayDirView, 0.)).xyz;

    var ddx: vec3f = getViewPosFromTexCoord(input.uv + vec2f(uniforms.texelSize.x, 0.), input.iuv + vec2f(1.0, 0.0)) - surfacePosView; \r
    var ddy: vec3f = getViewPosFromTexCoord(input.uv + vec2f(0., uniforms.texelSize.y), input.iuv + vec2f(0.0, 1.0)) - surfacePosView; \r
    let ddx2: vec3f = surfacePosView - getViewPosFromTexCoord(input.uv + vec2f(-uniforms.texelSize.x, 0.), input.iuv + vec2f(-1.0, 0.0));\r
    let ddy2: vec3f = surfacePosView - getViewPosFromTexCoord(input.uv + vec2f(0., -uniforms.texelSize.y), input.iuv + vec2f(0.0, -1.0));\r
    ddx = select(ddx, ddx2, abs(ddx.z) > abs(ddx2.z));\r
    ddy = select(ddy, ddy2, abs(ddy.z) > abs(ddy2.z));\r
    var normal: vec3f = -normalize(cross(ddx, ddy)); \r
    var normalWorld: vec3f = (uniforms.invViewMatrix * vec4f(normal, 0.)).xyz; 

    var densitySum: f32 = 0.;\r
    var t: f32 = 0.;\r
    let stepSize: f32 = 0.6; \r
    let densityScale: f32 = 0.2; \r
    let lightDirWorld: vec3f = normalize(vec3f(0, 1, 0));

    surfacePosWorld += 1.5 * lightDirWorld; \r
    for (var i = 0; i < 1000; i++) { \r
        let posWorld = surfacePosWorld + t * lightDirWorld;\r
        if (any(posWorld <= vec3f(0.)) || any(posWorld >= initBoxSize - 1)) { \r
            break;\r
        }\r
        let worldCoord: vec3f = posWorld / densityGridSize;\r
        let density: f32 = textureSampleLevel(densityGridTexture, textureSampler, worldCoord.zyx, 0.).r;\r
        densitySum += stepSize * density * densityScale;\r
        t += stepSize;\r
    }\r

    let speed = textureSampleLevel(bgTexture, textureSampler, input.uv, 0.0).r;\r
    let albedo: vec3f = vec3f(0, 70, 250) / 256.;

    let LdotN: f32 = 0.5 * dot(normalWorld, lightDirWorld) + 0.5;\r
    let shadow = exp(-1. * densitySum);

    let H: vec3f        = normalize(lightDirWorld - rayDirWorld);\r
    let specular: f32   = pow(max(0.0, dot(H, normalWorld)), 50.);\r
    let diffuse: f32 = max(dot(normalWorld, lightDirWorld), 0.);\r
    var finalColor = shadow * LdotN * albedo * 1. + 0.1 * diffuse * shadow + 0.3 * specular * shadow;

    return vec4f(gamma(finalColor), 1.); \r
}`,Hn=`@group(0) @binding(0) var sceneSampler: sampler;
@group(0) @binding(1) var sceneTexture: texture_2d<f32>;
@group(0) @binding(2) var waterDepth: texture_2d<f32>;
@group(0) @binding(3) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(4) var<uniform> box: vec3f;
struct RenderUniforms {
    texelSize: vec2f, sphereSize: f32,
    invProjectionMatrix: mat4x4f, projectionMatrix: mat4x4f,
    viewMatrix: mat4x4f, invViewMatrix: mat4x4f,
}
struct FragmentInput { @location(0) uv: vec2f, @location(1) iuv: vec2f }

fn cylinderInterval(ro: vec3f, rd: vec3f, radius: f32, bottom: f32, top: f32) -> vec2f {
    let p = ro.xz - box.xz * 0.5;
    let a = dot(rd.xz, rd.xz);
    let b = dot(p, rd.xz);
    let c = dot(p, p) - radius * radius;
    var near = -1e6;
    var far = 1e6;
    if (a < 1e-8) {
        if (c > 0.0) { return vec2f(1.0, -1.0); }
    } else {
        let discriminant = b * b - a * c;
        if (discriminant < 0.0) { return vec2f(1.0, -1.0); }
        let root = sqrt(discriminant);
        near = (-b - root) / a;
        far = (-b + root) / a;
    }
    if (abs(rd.y) < 1e-6) {
        if (ro.y < bottom || ro.y > top) { return vec2f(1.0, -1.0); }
    } else {
        let y0 = (bottom - ro.y) / rd.y;
        let y1 = (top - ro.y) / rd.y;
        near = max(near, min(y0, y1));
        far = min(far, max(y0, y1));
    }
    return vec2f(max(near, 0.0), far);
}
fn glassNormal(p: vec3f, inner: f32, top: f32) -> vec3f {
    let radial = p.xz - box.xz * 0.5;
    let radius = length(radial);
    if (abs(p.y - top) < 0.015) { return vec3f(0.0, 1.0, 0.0); }
    if (abs(p.y - 1.0) < 0.015) { return vec3f(0.0, -1.0, 0.0); }
    if (abs(p.y - 2.4) < 0.015 && radius < inner) { return vec3f(0.0, 1.0, 0.0); }
    let direction = radial / max(radius, 1e-6);
    let orientation = select(1.0, -1.0, abs(radius - inner) < 0.025);
    return vec3f(direction.x, 0.0, direction.y) * orientation;
}
fn studio(direction: vec3f) -> vec3f {
    let base = mix(vec3f(0.12, 0.21, 0.28), vec3f(0.63, 0.80, 0.87), clamp(direction.y * 0.5 + 0.5, 0.0, 1.0));
    let key = pow(max(dot(direction, normalize(vec3f(-0.7, 0.3, 0.6))), 0.0), 44.0);
    let horizontal = direction.xz / max(length(direction.xz), 1e-6);
    let strip = pow(max(dot(horizontal, normalize(vec2f(0.8, 0.35))), 0.0), 90.0);
    return base + vec3f(0.95, 0.98, 1.0) * (key * 1.4 + strip * 0.7);
}
fn throughGlass(baseColor: vec3f, uv: vec2f, ro: vec3f, rd: vec3f, interval: vec2f, fluidDistance: f32, inner: f32, top: f32) -> vec3f {
    if (interval.y <= interval.x) { return baseColor; }
    let p = ro + rd * interval.x;
    let normal = glassNormal(p, inner, top);
    let facing = abs(dot(normal, rd));
    let fresnel = 0.04 + 0.96 * pow(1.0 - facing, 5.0);
    let thickness = min(interval.y - interval.x, 12.0);
    let visibility = select(1.0, 0.18, interval.x > fluidDistance + 0.25);
    let viewNormal = (uniforms.viewMatrix * vec4f(normal, 0.0)).xy;
    let offset = viewNormal * vec2f(1.0, -1.0) * 0.005 * min(thickness, 3.0);
    let refracted = textureSampleLevel(sceneTexture, sceneSampler, clamp(uv + offset, vec2f(0.002), vec2f(0.998)), 0.0).rgb;
    let transmission = exp(-thickness * vec3f(0.014, 0.006, 0.003));
    let transmitted = mix(baseColor, refracted, 0.45 * visibility) * mix(vec3f(1.0), transmission, visibility);
    let reflection = studio(reflect(rd, normal));
    let baseHighlight = select(0.0, 0.26, p.y < 2.5);
    let rimHighlight = select(0.0, 0.50, p.y > top - 0.12);
    return mix(transmitted, reflection + rimHighlight * vec3f(0.7, 0.8, 0.9), clamp((fresnel * 0.85 + baseHighlight + rimHighlight) * visibility, 0.0, 0.9));
}
@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    var color = textureSampleLevel(sceneTexture, sceneSampler, input.uv, 0.0).rgb;
    let clip = vec4f(input.uv.x * 2.0 - 1.0, 1.0 - input.uv.y * 2.0, 1.0, 1.0);
    let view = uniforms.invProjectionMatrix * clip;
    let rdView = normalize(view.xyz / view.w);
    let rd = normalize((uniforms.invViewMatrix * vec4f(rdView, 0.0)).xyz);
    let ro = uniforms.invViewMatrix[3].xyz;
    let inner = min(box.x, box.z) * 0.5 - 3.0;
    let top = box.y - 4.0;
    let outerHit = cylinderInterval(ro, rd, inner + 0.48, 1.0, top);
    if (outerHit.y <= outerHit.x) { return vec4f(color, 1.0); }
    let cavityHit = cylinderInterval(ro, rd, inner, 2.4, top + 1000.0);
    let depth = abs(textureLoad(waterDepth, vec2u(input.iuv), 0).r);
    let fluidDistance = depth / max(-rdView.z, 1e-6);
    if (cavityHit.y <= cavityHit.x || cavityHit.x >= outerHit.y || cavityHit.y <= outerHit.x) {
        color = throughGlass(color, input.uv, ro, rd, outerHit, fluidDistance, inner, top);
    } else {
        
        let rear = vec2f(max(outerHit.x, cavityHit.y), outerHit.y);
        let front = vec2f(outerHit.x, min(outerHit.y, cavityHit.x));
        color = throughGlass(color, input.uv, ro, rd, rear, fluidDistance, inner, top);
        color = throughGlass(color, input.uv, ro, rd, front, fluidDistance, inner, top);
    }
    return vec4f(color, 1.0);
}`;class qn{constructor(v,z,S,G,M,I,A,T,b,Y,U,J,ee){B(this,"depthFilter1DPipeline");B(this,"depthFilter2DPipeline");B(this,"thicknessMapPipeline");B(this,"thicknessFilterPipeline");B(this,"fluidPipeline");B(this,"depthMapPipeline");B(this,"spherePipeline");B(this,"bgColorPipeline");B(this,"densityRaymarchPipeline");B(this,"glassPipeline");B(this,"glassBindGroup");B(this,"sceneColorTextureView");B(this,"depthMapTextureView");B(this,"tmpDepthMapTextureView");B(this,"thicknessTextureView");B(this,"tmpThicknessTextureView");B(this,"depthTestTextureView");B(this,"tmpOutputTextureView");B(this,"depthFilter1DBindGroups");B(this,"depthFilter2DBindGroups");B(this,"thicknessMapBindGroup");B(this,"thicknessFilterBindGroups");B(this,"fluidBindGroup");B(this,"depthMapBindGroup");B(this,"sphereBindGroup");B(this,"bgColorBindGroup");B(this,"densityRaymarchBindGroup");B(this,"diffuseColorBuffer");B(this,"colorDensityBuffer");B(this,"densityGridSizeBuffer");B(this,"device");this.device=M;const re=50,ie=2*U,le=12,$=b.width/2,Q=b.height/2,O={screenHeight:b.height,screenWidth:b.width},Z={maxFilterSize:re,projectedParticleConstant:le*ie*.05*(b.height/2)/Math.tan(J/2)},W={thicknessTextureWidth:$,thicknessTextureHeight:Q},ne=M.createSampler({magFilter:"linear",minFilter:"linear"}),K=M.createShaderModule({code:Rn}),H=M.createShaderModule({code:Un}),te=M.createShaderModule({code:An}),N=M.createShaderModule({code:Yn}),ae=M.createShaderModule({code:On}),L=M.createShaderModule({code:En}),j=M.createShaderModule({code:Ln}),E=M.createShaderModule({code:kn}),we=M.createShaderModule({code:Xn}),pe=M.createShaderModule({label:"world-space glass",code:Hn});this.glassPipeline=M.createRenderPipeline({label:"world-space glass composite",layout:"auto",vertex:{module:K,constants:O},fragment:{module:pe,targets:[{format:Y}]},primitive:{topology:"triangle-list"}}),this.depthMapPipeline=M.createRenderPipeline({label:"depthMap pipeline",layout:"auto",vertex:{module:N},fragment:{module:N,targets:[{format:"r32float"}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth32float"}}),this.spherePipeline=M.createRenderPipeline({label:"sphere pipeline",layout:"auto",vertex:{module:ae},fragment:{module:ae,targets:[{format:"r32float"},{format:Y}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth32float"}}),this.depthFilter1DPipeline=M.createRenderPipeline({label:"depth filter pipeline (1d)",layout:"auto",vertex:{module:K,constants:O},fragment:{module:H,constants:{...Z,blur2D:0},targets:[{format:"r32float"}]},primitive:{topology:"triangle-list"}}),this.depthFilter2DPipeline=M.createRenderPipeline({label:"depth filter pipeline (2d)",layout:"auto",vertex:{module:K,constants:O},fragment:{module:H,constants:{...Z,blur2D:1},targets:[{format:"r32float"}]},primitive:{topology:"triangle-list"}}),this.thicknessMapPipeline=M.createRenderPipeline({label:"thickness map pipeline",layout:"auto",vertex:{module:L},fragment:{module:L,targets:[{format:"r16float",writeMask:GPUColorWrite.RED,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"}}),this.thicknessFilterPipeline=M.createRenderPipeline({label:"thickness filter pipeline",layout:"auto",vertex:{module:K,constants:O},fragment:{module:j,constants:W,targets:[{format:"r16float"}]},primitive:{topology:"triangle-list"}}),this.fluidPipeline=M.createRenderPipeline({label:"fluid rendering pipeline",layout:"auto",vertex:{module:K,constants:O},fragment:{module:te,targets:[{format:Y}]},primitive:{topology:"triangle-list"}}),this.bgColorPipeline=M.createRenderPipeline({label:"bgColor pipeline",layout:"auto",vertex:{module:K,constants:O},fragment:{module:E,targets:[{format:Y}]},primitive:{topology:"triangle-list"}}),this.densityRaymarchPipeline=M.createRenderPipeline({label:"density raymarch pipeline",layout:"auto",vertex:{module:K,constants:O},fragment:{module:we,targets:[{format:Y}]}});const me=M.createTexture({label:"temporary depth map texture",size:[b.width,b.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r32float"}),ue=M.createTexture({label:"thickness map texture",size:[$,Q,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r16float"}),Be=M.createTexture({label:"temporary thickness map texture",size:[$,Q,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r16float"}),C=M.createTexture({size:[b.width,b.height,1],format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),Te=M.createTexture({size:[b.width,b.height,1],format:Y,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING});this.depthMapTextureView=I,this.tmpDepthMapTextureView=me.createView(),this.thicknessTextureView=ue.createView(),this.tmpThicknessTextureView=Be.createView(),this.depthTestTextureView=C.createView(),this.tmpOutputTextureView=Te.createView(),this.sceneColorTextureView=M.createTexture({label:"water scene before glass",size:[b.width,b.height,1],format:Y,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}).createView(),this.glassBindGroup=M.createBindGroup({label:"world-space glass resources",layout:this.glassPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:ne},{binding:1,resource:this.sceneColorTextureView},{binding:2,resource:this.depthMapTextureView},{binding:3,resource:{buffer:v}},{binding:4,resource:{buffer:G}}]});const oe=M.createBuffer({label:"filter uniform buffer",size:8,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),he=M.createBuffer({label:"filter uniform buffer",size:8,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),se=M.createBuffer({label:"thickness filter size buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.diffuseColorBuffer=M.createBuffer({label:"diffuse color buffer",size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.colorDensityBuffer=M.createBuffer({label:"color density buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.densityGridSizeBuffer=S;let de=new Float32Array([1,0]),fe=new Float32Array([0,1]),i=new Int32Array([15]);M.queue.writeBuffer(oe,0,de),M.queue.writeBuffer(he,0,fe),M.queue.writeBuffer(se,0,i),this.depthFilter1DBindGroups=[],this.depthFilter1DBindGroups=[M.createBindGroup({label:"filterX bind group",layout:this.depthFilter1DPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.depthMapTextureView},{binding:2,resource:{buffer:oe}}]}),M.createBindGroup({label:"filterY bind group",layout:this.depthFilter1DPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.tmpDepthMapTextureView},{binding:2,resource:{buffer:he}}]})],this.depthFilter2DBindGroups=[M.createBindGroup({label:"filterX bind group",layout:this.depthFilter2DPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.depthMapTextureView},{binding:2,resource:{buffer:oe}}]}),M.createBindGroup({label:"filterY bind group",layout:this.depthFilter2DPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.tmpDepthMapTextureView},{binding:2,resource:{buffer:he}}]})],this.thicknessMapBindGroup=M.createBindGroup({label:"thickness map bind group",layout:this.thicknessMapPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:v}}]}),this.thicknessFilterBindGroups=[],this.thicknessFilterBindGroups=[M.createBindGroup({label:"thickness filterX bind group",layout:this.thicknessFilterPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:ne},{binding:1,resource:this.thicknessTextureView},{binding:2,resource:{buffer:oe}},{binding:3,resource:{buffer:se}}]}),M.createBindGroup({label:"thickness filterY bind group",layout:this.thicknessFilterPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:ne},{binding:1,resource:this.tmpThicknessTextureView},{binding:2,resource:{buffer:he}},{binding:3,resource:{buffer:se}}]})],this.fluidBindGroup=M.createBindGroup({label:"fluid bind group",layout:this.fluidPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:ne},{binding:1,resource:this.depthMapTextureView},{binding:2,resource:{buffer:v}},{binding:3,resource:this.thicknessTextureView},{binding:4,resource:A},{binding:5,resource:this.tmpOutputTextureView},{binding:6,resource:{buffer:this.diffuseColorBuffer}},{binding:7,resource:{buffer:this.colorDensityBuffer}}]}),this.depthMapBindGroup=M.createBindGroup({label:"depthMap bind group",layout:this.depthMapPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:v}}]}),this.bgColorBindGroup=M.createBindGroup({label:"bgColor bind group",layout:this.bgColorPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:{buffer:v}},{binding:3,resource:{buffer:G}}]}),this.sphereBindGroup=M.createBindGroup({label:"sphere bind group",layout:this.spherePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:v}}]}),this.densityRaymarchBindGroup=M.createBindGroup({label:"density raymarch bind group",layout:this.densityRaymarchPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.depthMapTextureView},{binding:1,resource:T},{binding:2,resource:{buffer:v}},{binding:3,resource:{buffer:G}},{binding:4,resource:ne},{binding:5,resource:this.tmpOutputTextureView},{binding:6,resource:{buffer:this.densityGridSizeBuffer}}]}),console.log(this.densityRaymarchPipeline.getBindGroupLayout(0))}execute(v,z,S,G,M,I){const A=new Float32Array(M),T=new Float32Array([I]);this.device.queue.writeBuffer(this.diffuseColorBuffer,0,A),this.device.queue.writeBuffer(this.colorDensityBuffer,0,T);const b=[{colorAttachments:[{view:this.tmpDepthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},{colorAttachments:[{view:this.depthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]}],Y={colorAttachments:[{view:this.thicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},U=[{colorAttachments:[{view:this.tmpThicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},{colorAttachments:[{view:this.thicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]}],J={colorAttachments:[{view:this.tmpOutputTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},ee={colorAttachments:[{view:this.sceneColorTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},re={colorAttachments:[{view:this.depthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.depthTestTextureView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},ie={colorAttachments:[{view:this.depthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"},{view:this.tmpOutputTextureView,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.depthTestTextureView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},le={colorAttachments:[{view:this.sceneColorTextureView,clearValue:{r:.7,g:.7,b:.75,a:1},loadOp:"clear",storeOp:"store"}]};if(G){const O=z.beginRenderPass(J);O.setBindGroup(0,this.bgColorBindGroup),O.setPipeline(this.bgColorPipeline),O.draw(6),O.end();const Z=z.beginRenderPass(ie);Z.setBindGroup(0,this.sphereBindGroup),Z.setPipeline(this.spherePipeline),Z.draw(6,S),Z.end();const W=z.beginRenderPass(le);W.setBindGroup(0,this.densityRaymarchBindGroup),W.setPipeline(this.densityRaymarchPipeline),W.draw(6),W.end()}else{const O=z.beginRenderPass(re);O.setBindGroup(0,this.depthMapBindGroup),O.setPipeline(this.depthMapPipeline),O.draw(6,S),O.end();for(var $=0;$<2;$++){const te=z.beginRenderPass(b[0]);te.setBindGroup(0,this.depthFilter1DBindGroups[0]),te.setPipeline(this.depthFilter1DPipeline),te.draw(6),te.end();const N=z.beginRenderPass(b[1]);N.setBindGroup(0,this.depthFilter1DBindGroups[1]),N.setPipeline(this.depthFilter1DPipeline),N.draw(6),N.end()}const Z=z.beginRenderPass(b[0]);Z.setBindGroup(0,this.depthFilter2DBindGroups[0]),Z.setPipeline(this.depthFilter2DPipeline),Z.draw(6),Z.end();const W=z.beginRenderPass(b[1]);W.setBindGroup(0,this.depthFilter2DBindGroups[1]),W.setPipeline(this.depthFilter2DPipeline),W.draw(6),W.end();const ne=z.beginRenderPass(Y);ne.setBindGroup(0,this.thicknessMapBindGroup),ne.setPipeline(this.thicknessMapPipeline),ne.draw(6,S),ne.end();for(var $=0;$<1;$++){const N=z.beginRenderPass(U[0]);N.setBindGroup(0,this.thicknessFilterBindGroups[0]),N.setPipeline(this.thicknessFilterPipeline),N.draw(6),N.end();const ae=z.beginRenderPass(U[1]);ae.setBindGroup(0,this.thicknessFilterBindGroups[1]),ae.setPipeline(this.thicknessFilterPipeline),ae.draw(6),ae.end()}const K=z.beginRenderPass(J);K.setBindGroup(0,this.bgColorBindGroup),K.setPipeline(this.bgColorPipeline),K.draw(6),K.end();const H=z.beginRenderPass(ee);H.setBindGroup(0,this.fluidBindGroup),H.setPipeline(this.fluidPipeline),H.draw(6),H.end()}const Q=z.beginRenderPass({colorAttachments:[{view:v.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]});Q.setPipeline(this.glassPipeline),Q.setBindGroup(0,this.glassBindGroup),Q.draw(6),Q.end()}}document.documentElement.classList.toggle("embed",new URLSearchParams(location.search).get("embed")==="glass");let Ce=!1;function Ne(d){Ce=!0;const v=d instanceof Error?d.message:String(d);console.error(d),document.getElementById("gpu-status").textContent="Unavailable";const z=document.getElementById("loading");z.hidden=!1,z.classList.add("failed"),z.querySelector("h2").textContent="The simulation could not start",document.getElementById("error-reason").textContent=v,document.getElementById("retry").hidden=!1,document.getElementById("controls").disabled=!0}document.getElementById("retry").addEventListener("click",()=>location.reload());async function Wn(){const d=document.querySelector("canvas");if(!navigator.gpu)throw new Error("WebGPU is unavailable here. Open this page in a current Chrome or Edge browser with graphics acceleration enabled.");const v=await navigator.gpu.requestAdapter();if(!v)throw new Error("The browser could not access a compatible GPU. Try Chrome or Edge with graphics acceleration enabled.");const z=await v.requestDevice();if(z.addEventListener("uncapturederror",I=>Ne(new Error(I.error.message))),!z)throw alert("float-32-filterable is not supported"),new Error;const S=d.getContext("webgpu");if(!S)throw new Error;const G=Math.min(window.devicePixelRatio||1,1.1,1200/Math.max(d.clientWidth,d.clientHeight));d.width=Math.max(2,Math.floor(G*d.clientWidth/2)*2),d.height=Math.max(2,Math.floor(G*d.clientHeight/2)*2),console.log(d.width,d.height);const M=navigator.gpu.getPreferredCanvasFormat();return S.configure({device:z,format:M}),{canvas:d,device:z,presentationFormat:M,context:S}}function Nn(d){const v={running:!matchMedia("(prefers-reduced-motion: reduce)").matches,r:205,g:239,b:249,speed:.8,colorDensity:.01,numParticles:d[0],resetRequested:!1},z=document.getElementById("pause"),S=document.getElementById("embed-pause"),G=()=>{for(const U of[z,S])U.textContent=v.running?"Pause":"Resume",U.setAttribute("aria-pressed",String(!v.running))},M=()=>{v.running=!v.running,G()};z.addEventListener("click",M),S.addEventListener("click",M);const I=document.getElementById("interaction"),A=document.querySelectorAll("[data-interaction]"),T=()=>A.forEach(U=>U.setAttribute("aria-pressed",String(U.dataset.interaction===I.value)));document.documentElement.classList.contains("embed")&&(I.value="stir"),A.forEach(U=>U.addEventListener("click",()=>{I.value=U.dataset.interaction,T()})),I.addEventListener("change",T),T(),document.getElementById("reset").addEventListener("click",()=>{v.resetRequested=!0});const b=document.getElementById("quality");d.forEach(U=>b.add(new Option(U,U))),b.addEventListener("change",()=>{v.numParticles=b.value});const Y=document.getElementById("speed");return Y.addEventListener("input",()=>{v.speed=Number(Y.value),document.getElementById("speed-value").textContent=Y.value+"×"}),document.addEventListener("keydown",U=>{U.code==="KeyP"&&!(U.target instanceof HTMLInputElement)&&!(U.target instanceof HTMLSelectElement)&&!U.repeat&&M()}),G(),v}async function jn(){const{canvas:d,device:v,presentationFormat:z,context:S}=await Wn();console.log("initialization done"),S.configure({device:v,format:z});let G;{const w=["cubemap/posx.png","cubemap/negx.png","cubemap/posy.png","cubemap/negy.png","cubemap/posz.png","cubemap/negz.png"].map(async o=>{const n=await fetch(o);if(!n.ok)throw new Error("Unable to load water lighting textures. Reload to retry.");return createImageBitmap(await n.blob())}),e=await Promise.all(w);G=v.createTexture({dimension:"2d",size:[e[0].width,e[0].height,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});for(let o=0;o<e.length;o++){const n=e[o];v.queue.copyExternalImageToTexture({source:n},{texture:G,origin:[0,0,o]},[n.width,n.height])}}const M=G.createView({dimension:"cube"});console.log("cubemap initialization done");const I=[{particleCount:12e3,initBoxSize:[26,30,26],initDistance:42,mouseRadius:5,cameraTargetY:13.5,guiText:"Light · 12,000"},{particleCount:24e3,initBoxSize:[32,38,32],initDistance:53,mouseRadius:7,cameraTargetY:17.5,guiText:"Balanced · 24,000"},{particleCount:4e4,initBoxSize:[38,46,38],initDistance:65,mouseRadius:9,cameraTargetY:21.5,guiText:"Detailed · 40,000"}],A=I.map(f=>f.guiText),T=Nn(A),b=Math.max(...I.map(f=>f.particleCount)),Y=Math.max(...I.map(f=>f.initBoxSize[0]*f.initBoxSize[1]*f.initBoxSize[2])),U=We,J=v.createBuffer({label:"particles buffer",size:U*b,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),ee=v.createBuffer({label:"posvel buffer",size:32*b,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),re=v.createBuffer({label:"filter uniform buffer",size:Re.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),ie=v.createBuffer({label:"init box size buffer",size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),$=v.createTexture({label:"depth map texture",size:[d.width,d.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r32float"}).createView(),Q=Math.max(...I.map(f=>f.initBoxSize[0])),O=Math.max(...I.map(f=>f.initBoxSize[1])),Z=Math.ceil(Math.max(...I.map(f=>f.initBoxSize[2]))/128)*128,W=[Q,O,Z],ne=v.createBuffer({label:"density grid buffer",size:4*Q*O*Z,usage:GPUBufferUsage.STORAGE}),K=v.createBuffer({label:"casted density grid buffer",size:2*Q*O*Z,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),H=v.createBuffer({label:"density grid size buffer",size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),te=new Float32Array(W);v.queue.writeBuffer(H,0,te);const N=v.createTexture({label:"density grid texture",size:[Z,O,Q],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST,format:"r16float",dimension:"3d"}),ae=N.createView();console.log("buffer allocating done");const L=document.getElementById("fluidCanvas"),j=60*Math.PI/180,E=.6,we=2*E,pe=.7,me=1e7,ue=new Fn(J,ee,re,ne,K,ie,H,v,$,d,Y,b,me,we),Be=new qn(re,ee,H,ie,v,$,M,ae,d,z,E,j,me);console.log("simulator initialization done");const C=new Dn(L);let Te=document.getElementById("error-reason");Te.textContent="",v.lost.then(f=>{const w=f.reason?`reason: ${f.reason}`:"unknown reason";Ne(new Error("Graphics device disconnected ("+w+"). Reload to retry."))});let oe=-1,he=[0,0,0],se=[0,0,0],de=I[0],fe=!1,i=!1;console.log("simulation start");let p=!0,t=performance.now(),s=0;async function l(){if(!Ce){if(document.hidden){requestAnimationFrame(l);return}try{const f=A.indexOf(T.numParticles);let w=!1;(Number(f)!=oe||T.resetRequested)&&(w=!0,T.resetRequested=!1,oe=Number(f),de=I[oe],se=de.initBoxSize,ue.reset(se,de.particleCount),C.reset(de.initDistance,[se[0]/2,de.cameraTargetY,se[2]/2],j,pe),he=[...se]),fe=document.getElementById("particle").checked,ue.changeBoxSize(he),Ee.texelSize.set([1/d.width,1/d.height]),Ee.sphereSize.set([we]),v.queue.writeBuffer(re,0,Re);const o=v.createCommandEncoder();ue.execute(o,[C.currentHoverX/d.clientWidth,C.currentHoverY/d.clientHeight],C.calcMouseVelocity(),de.mouseRadius,fe,.4*T.speed,T.running||w,W);let r=[T.r/255,T.g/255,T.b/255];if(Be.execute(S,o,ue.numParticles,fe,r,T.colorDensity),v.queue.submit([o.finish()]),fe){const g=v.createCommandEncoder();g.copyBufferToTexture({buffer:K,bytesPerRow:W[2]*2,rowsPerImage:W[1]},{texture:N},{width:W[2],height:W[1],depthOrArrayLayers:W[0]}),v.queue.submit([g.finish()])}if(C.setNewPrevMouseCoord(),await v.queue.onSubmittedWorkDone(),Ce)return;p&&(p=!1,document.getElementById("loading").hidden=!0,document.getElementById("gpu-status").textContent="WebGPU ready",document.getElementById("controls").disabled=!1),s++;const a=performance.now();a-t>1e3&&(document.getElementById("fps").textContent=Math.round(s*1e3/(a-t))+" FPS",s=0,t=a),requestAnimationFrame(l)}catch(f){Ne(f)}}}requestAnimationFrame(l)}jn().catch(Ne);
