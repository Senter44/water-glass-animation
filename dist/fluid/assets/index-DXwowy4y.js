var an=Object.defineProperty;var un=(f,v,z)=>v in f?an(f,v,{enumerable:!0,configurable:!0,writable:!0,value:z}):f[v]=z;var b=(f,v,z)=>un(f,typeof v!="symbol"?v+"":v,z);(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))_(S);new MutationObserver(S=>{for(const M of S)if(M.type==="childList")for(const F of M.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&_(F)}).observe(document,{childList:!0,subtree:!0});function z(S){const M={};return S.integrity&&(M.integrity=S.integrity),S.referrerPolicy&&(M.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?M.credentials="include":S.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function _(S){if(S.ep)return;S.ep=!0;const M=z(S);fetch(S.href,M)}})();function ln(f,v){return class extends f{constructor(...z){super(...z),v(this)}}}const fn=ln(Array,f=>f.fill(0));let E=1e-6;function dn(f){function v(e=0,o=0){const n=new f(2);return e!==void 0&&(n[0]=e,o!==void 0&&(n[1]=o)),n}const z=v;function _(e,o,n){const i=n??new f(2);return i[0]=e,i[1]=o,i}function S(e,o){const n=o??new f(2);return n[0]=Math.ceil(e[0]),n[1]=Math.ceil(e[1]),n}function M(e,o){const n=o??new f(2);return n[0]=Math.floor(e[0]),n[1]=Math.floor(e[1]),n}function F(e,o){const n=o??new f(2);return n[0]=Math.round(e[0]),n[1]=Math.round(e[1]),n}function A(e,o=0,n=1,i){const a=i??new f(2);return a[0]=Math.min(n,Math.max(o,e[0])),a[1]=Math.min(n,Math.max(o,e[1])),a}function T(e,o,n){const i=n??new f(2);return i[0]=e[0]+o[0],i[1]=e[1]+o[1],i}function B(e,o,n,i){const a=i??new f(2);return a[0]=e[0]+o[0]*n,a[1]=e[1]+o[1]*n,a}function j(e,o){const n=e[0],i=e[1],a=o[0],g=o[1],y=Math.sqrt(n*n+i*i),c=Math.sqrt(a*a+g*g),u=y*c,h=u&&H(e,o)/u;return Math.acos(h)}function W(e,o,n){const i=n??new f(2);return i[0]=e[0]-o[0],i[1]=e[1]-o[1],i}const ne=W;function K(e,o){return Math.abs(e[0]-o[0])<E&&Math.abs(e[1]-o[1])<E}function ie(e,o){return e[0]===o[0]&&e[1]===o[1]}function ce(e,o,n,i){const a=i??new f(2);return a[0]=e[0]+n*(o[0]-e[0]),a[1]=e[1]+n*(o[1]-e[1]),a}function fe(e,o,n,i){const a=i??new f(2);return a[0]=e[0]+n[0]*(o[0]-e[0]),a[1]=e[1]+n[1]*(o[1]-e[1]),a}function te(e,o,n){const i=n??new f(2);return i[0]=Math.max(e[0],o[0]),i[1]=Math.max(e[1],o[1]),i}function q(e,o,n){const i=n??new f(2);return i[0]=Math.min(e[0],o[0]),i[1]=Math.min(e[1],o[1]),i}function O(e,o,n){const i=n??new f(2);return i[0]=e[0]*o,i[1]=e[1]*o,i}const Z=O;function $(e,o,n){const i=n??new f(2);return i[0]=e[0]/o,i[1]=e[1]/o,i}function J(e,o){const n=o??new f(2);return n[0]=1/e[0],n[1]=1/e[1],n}const Q=J;function k(e,o,n){const i=n??new f(3),a=e[0]*o[1]-e[1]*o[0];return i[0]=0,i[1]=0,i[2]=a,i}function H(e,o){return e[0]*o[0]+e[1]*o[1]}function ee(e){const o=e[0],n=e[1];return Math.sqrt(o*o+n*n)}const ve=ee;function L(e){const o=e[0],n=e[1];return o*o+n*n}const N=L;function R(e,o){const n=e[0]-o[0],i=e[1]-o[1];return Math.sqrt(n*n+i*i)}const me=R;function de(e,o){const n=e[0]-o[0],i=e[1]-o[1];return n*n+i*i}const ye=de;function ae(e,o){const n=o??new f(2),i=e[0],a=e[1],g=Math.sqrt(i*i+a*a);return g>1e-5?(n[0]=i/g,n[1]=a/g):(n[0]=0,n[1]=0),n}function Te(e,o){const n=o??new f(2);return n[0]=-e[0],n[1]=-e[1],n}function C(e,o){const n=o??new f(2);return n[0]=e[0],n[1]=e[1],n}const xe=C;function re(e,o,n){const i=n??new f(2);return i[0]=e[0]*o[0],i[1]=e[1]*o[1],i}const pe=re;function se(e,o,n){const i=n??new f(2);return i[0]=e[0]/o[0],i[1]=e[1]/o[1],i}const ue=se;function le(e=1,o){const n=o??new f(2),i=Math.random()*2*Math.PI;return n[0]=Math.cos(i)*e,n[1]=Math.sin(i)*e,n}function r(e){const o=e??new f(2);return o[0]=0,o[1]=0,o}function d(e,o,n){const i=n??new f(2),a=e[0],g=e[1];return i[0]=a*o[0]+g*o[4]+o[12],i[1]=a*o[1]+g*o[5]+o[13],i}function t(e,o,n){const i=n??new f(2),a=e[0],g=e[1];return i[0]=o[0]*a+o[4]*g+o[8],i[1]=o[1]*a+o[5]*g+o[9],i}function s(e,o,n,i){const a=i??new f(2),g=e[0]-o[0],y=e[1]-o[1],c=Math.sin(n),u=Math.cos(n);return a[0]=g*u-y*c+o[0],a[1]=g*c+y*u+o[1],a}function l(e,o,n){const i=n??new f(2);return ae(e,i),O(i,o,i)}function p(e,o,n){const i=n??new f(2);return ee(e)>o?l(e,o,i):C(e,i)}function w(e,o,n){const i=n??new f(2);return ce(e,o,.5,i)}return{create:v,fromValues:z,set:_,ceil:S,floor:M,round:F,clamp:A,add:T,addScaled:B,angle:j,subtract:W,sub:ne,equalsApproximately:K,equals:ie,lerp:ce,lerpV:fe,max:te,min:q,mulScalar:O,scale:Z,divScalar:$,inverse:J,invert:Q,cross:k,dot:H,length:ee,len:ve,lengthSq:L,lenSq:N,distance:R,dist:me,distanceSq:de,distSq:ye,normalize:ae,negate:Te,copy:C,clone:xe,multiply:re,mul:pe,divide:se,div:ue,random:le,zero:r,transformMat4:d,transformMat3:t,rotate:s,setLength:l,truncate:p,midpoint:w}}const en=new Map;function cn(f){let v=en.get(f);return v||(v=dn(f),en.set(f,v)),v}function pn(f){function v(c,u,h){const x=new f(3);return c!==void 0&&(x[0]=c,u!==void 0&&(x[1]=u,h!==void 0&&(x[2]=h))),x}const z=v;function _(c,u,h,x){const m=x??new f(3);return m[0]=c,m[1]=u,m[2]=h,m}function S(c,u){const h=u??new f(3);return h[0]=Math.ceil(c[0]),h[1]=Math.ceil(c[1]),h[2]=Math.ceil(c[2]),h}function M(c,u){const h=u??new f(3);return h[0]=Math.floor(c[0]),h[1]=Math.floor(c[1]),h[2]=Math.floor(c[2]),h}function F(c,u){const h=u??new f(3);return h[0]=Math.round(c[0]),h[1]=Math.round(c[1]),h[2]=Math.round(c[2]),h}function A(c,u=0,h=1,x){const m=x??new f(3);return m[0]=Math.min(h,Math.max(u,c[0])),m[1]=Math.min(h,Math.max(u,c[1])),m[2]=Math.min(h,Math.max(u,c[2])),m}function T(c,u,h){const x=h??new f(3);return x[0]=c[0]+u[0],x[1]=c[1]+u[1],x[2]=c[2]+u[2],x}function B(c,u,h,x){const m=x??new f(3);return m[0]=c[0]+u[0]*h,m[1]=c[1]+u[1]*h,m[2]=c[2]+u[2]*h,m}function j(c,u){const h=c[0],x=c[1],m=c[2],P=u[0],D=u[1],V=u[2],U=Math.sqrt(h*h+x*x+m*m),G=Math.sqrt(P*P+D*D+V*V),I=U*G,Y=I&&H(c,u)/I;return Math.acos(Y)}function W(c,u,h){const x=h??new f(3);return x[0]=c[0]-u[0],x[1]=c[1]-u[1],x[2]=c[2]-u[2],x}const ne=W;function K(c,u){return Math.abs(c[0]-u[0])<E&&Math.abs(c[1]-u[1])<E&&Math.abs(c[2]-u[2])<E}function ie(c,u){return c[0]===u[0]&&c[1]===u[1]&&c[2]===u[2]}function ce(c,u,h,x){const m=x??new f(3);return m[0]=c[0]+h*(u[0]-c[0]),m[1]=c[1]+h*(u[1]-c[1]),m[2]=c[2]+h*(u[2]-c[2]),m}function fe(c,u,h,x){const m=x??new f(3);return m[0]=c[0]+h[0]*(u[0]-c[0]),m[1]=c[1]+h[1]*(u[1]-c[1]),m[2]=c[2]+h[2]*(u[2]-c[2]),m}function te(c,u,h){const x=h??new f(3);return x[0]=Math.max(c[0],u[0]),x[1]=Math.max(c[1],u[1]),x[2]=Math.max(c[2],u[2]),x}function q(c,u,h){const x=h??new f(3);return x[0]=Math.min(c[0],u[0]),x[1]=Math.min(c[1],u[1]),x[2]=Math.min(c[2],u[2]),x}function O(c,u,h){const x=h??new f(3);return x[0]=c[0]*u,x[1]=c[1]*u,x[2]=c[2]*u,x}const Z=O;function $(c,u,h){const x=h??new f(3);return x[0]=c[0]/u,x[1]=c[1]/u,x[2]=c[2]/u,x}function J(c,u){const h=u??new f(3);return h[0]=1/c[0],h[1]=1/c[1],h[2]=1/c[2],h}const Q=J;function k(c,u,h){const x=h??new f(3),m=c[2]*u[0]-c[0]*u[2],P=c[0]*u[1]-c[1]*u[0];return x[0]=c[1]*u[2]-c[2]*u[1],x[1]=m,x[2]=P,x}function H(c,u){return c[0]*u[0]+c[1]*u[1]+c[2]*u[2]}function ee(c){const u=c[0],h=c[1],x=c[2];return Math.sqrt(u*u+h*h+x*x)}const ve=ee;function L(c){const u=c[0],h=c[1],x=c[2];return u*u+h*h+x*x}const N=L;function R(c,u){const h=c[0]-u[0],x=c[1]-u[1],m=c[2]-u[2];return Math.sqrt(h*h+x*x+m*m)}const me=R;function de(c,u){const h=c[0]-u[0],x=c[1]-u[1],m=c[2]-u[2];return h*h+x*x+m*m}const ye=de;function ae(c,u){const h=u??new f(3),x=c[0],m=c[1],P=c[2],D=Math.sqrt(x*x+m*m+P*P);return D>1e-5?(h[0]=x/D,h[1]=m/D,h[2]=P/D):(h[0]=0,h[1]=0,h[2]=0),h}function Te(c,u){const h=u??new f(3);return h[0]=-c[0],h[1]=-c[1],h[2]=-c[2],h}function C(c,u){const h=u??new f(3);return h[0]=c[0],h[1]=c[1],h[2]=c[2],h}const xe=C;function re(c,u,h){const x=h??new f(3);return x[0]=c[0]*u[0],x[1]=c[1]*u[1],x[2]=c[2]*u[2],x}const pe=re;function se(c,u,h){const x=h??new f(3);return x[0]=c[0]/u[0],x[1]=c[1]/u[1],x[2]=c[2]/u[2],x}const ue=se;function le(c=1,u){const h=u??new f(3),x=Math.random()*2*Math.PI,m=Math.random()*2-1,P=Math.sqrt(1-m*m)*c;return h[0]=Math.cos(x)*P,h[1]=Math.sin(x)*P,h[2]=m*c,h}function r(c){const u=c??new f(3);return u[0]=0,u[1]=0,u[2]=0,u}function d(c,u,h){const x=h??new f(3),m=c[0],P=c[1],D=c[2],V=u[3]*m+u[7]*P+u[11]*D+u[15]||1;return x[0]=(u[0]*m+u[4]*P+u[8]*D+u[12])/V,x[1]=(u[1]*m+u[5]*P+u[9]*D+u[13])/V,x[2]=(u[2]*m+u[6]*P+u[10]*D+u[14])/V,x}function t(c,u,h){const x=h??new f(3),m=c[0],P=c[1],D=c[2];return x[0]=m*u[0*4+0]+P*u[1*4+0]+D*u[2*4+0],x[1]=m*u[0*4+1]+P*u[1*4+1]+D*u[2*4+1],x[2]=m*u[0*4+2]+P*u[1*4+2]+D*u[2*4+2],x}function s(c,u,h){const x=h??new f(3),m=c[0],P=c[1],D=c[2];return x[0]=m*u[0]+P*u[4]+D*u[8],x[1]=m*u[1]+P*u[5]+D*u[9],x[2]=m*u[2]+P*u[6]+D*u[10],x}function l(c,u,h){const x=h??new f(3),m=u[0],P=u[1],D=u[2],V=u[3]*2,U=c[0],G=c[1],I=c[2],Y=P*I-D*G,X=D*U-m*I,oe=m*G-P*U;return x[0]=U+Y*V+(P*oe-D*X)*2,x[1]=G+X*V+(D*Y-m*oe)*2,x[2]=I+oe*V+(m*X-P*Y)*2,x}function p(c,u){const h=u??new f(3);return h[0]=c[12],h[1]=c[13],h[2]=c[14],h}function w(c,u,h){const x=h??new f(3),m=u*4;return x[0]=c[m+0],x[1]=c[m+1],x[2]=c[m+2],x}function e(c,u){const h=u??new f(3),x=c[0],m=c[1],P=c[2],D=c[4],V=c[5],U=c[6],G=c[8],I=c[9],Y=c[10];return h[0]=Math.sqrt(x*x+m*m+P*P),h[1]=Math.sqrt(D*D+V*V+U*U),h[2]=Math.sqrt(G*G+I*I+Y*Y),h}function o(c,u,h,x){const m=x??new f(3),P=[],D=[];return P[0]=c[0]-u[0],P[1]=c[1]-u[1],P[2]=c[2]-u[2],D[0]=P[0],D[1]=P[1]*Math.cos(h)-P[2]*Math.sin(h),D[2]=P[1]*Math.sin(h)+P[2]*Math.cos(h),m[0]=D[0]+u[0],m[1]=D[1]+u[1],m[2]=D[2]+u[2],m}function n(c,u,h,x){const m=x??new f(3),P=[],D=[];return P[0]=c[0]-u[0],P[1]=c[1]-u[1],P[2]=c[2]-u[2],D[0]=P[2]*Math.sin(h)+P[0]*Math.cos(h),D[1]=P[1],D[2]=P[2]*Math.cos(h)-P[0]*Math.sin(h),m[0]=D[0]+u[0],m[1]=D[1]+u[1],m[2]=D[2]+u[2],m}function i(c,u,h,x){const m=x??new f(3),P=[],D=[];return P[0]=c[0]-u[0],P[1]=c[1]-u[1],P[2]=c[2]-u[2],D[0]=P[0]*Math.cos(h)-P[1]*Math.sin(h),D[1]=P[0]*Math.sin(h)+P[1]*Math.cos(h),D[2]=P[2],m[0]=D[0]+u[0],m[1]=D[1]+u[1],m[2]=D[2]+u[2],m}function a(c,u,h){const x=h??new f(3);return ae(c,x),O(x,u,x)}function g(c,u,h){const x=h??new f(3);return ee(c)>u?a(c,u,x):C(c,x)}function y(c,u,h){const x=h??new f(3);return ce(c,u,.5,x)}return{create:v,fromValues:z,set:_,ceil:S,floor:M,round:F,clamp:A,add:T,addScaled:B,angle:j,subtract:W,sub:ne,equalsApproximately:K,equals:ie,lerp:ce,lerpV:fe,max:te,min:q,mulScalar:O,scale:Z,divScalar:$,inverse:J,invert:Q,cross:k,dot:H,length:ee,len:ve,lengthSq:L,lenSq:N,distance:R,dist:me,distanceSq:de,distSq:ye,normalize:ae,negate:Te,copy:C,clone:xe,multiply:re,mul:pe,divide:se,div:ue,random:le,zero:r,transformMat4:d,transformMat4Upper3x3:t,transformMat3:s,transformQuat:l,getTranslation:p,getAxis:w,getScaling:e,rotateX:o,rotateY:n,rotateZ:i,setLength:a,truncate:g,midpoint:y}}const nn=new Map;function Ce(f){let v=nn.get(f);return v||(v=pn(f),nn.set(f,v)),v}function hn(f){const v=cn(f),z=Ce(f);function _(r,d,t,s,l,p,w,e,o){const n=new f(12);return n[3]=0,n[7]=0,n[11]=0,r!==void 0&&(n[0]=r,d!==void 0&&(n[1]=d,t!==void 0&&(n[2]=t,s!==void 0&&(n[4]=s,l!==void 0&&(n[5]=l,p!==void 0&&(n[6]=p,w!==void 0&&(n[8]=w,e!==void 0&&(n[9]=e,o!==void 0&&(n[10]=o))))))))),n}function S(r,d,t,s,l,p,w,e,o,n){const i=n??new f(12);return i[0]=r,i[1]=d,i[2]=t,i[3]=0,i[4]=s,i[5]=l,i[6]=p,i[7]=0,i[8]=w,i[9]=e,i[10]=o,i[11]=0,i}function M(r,d){const t=d??new f(12);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=0,t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=0,t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=0,t}function F(r,d){const t=d??new f(12),s=r[0],l=r[1],p=r[2],w=r[3],e=s+s,o=l+l,n=p+p,i=s*e,a=l*e,g=l*o,y=p*e,c=p*o,u=p*n,h=w*e,x=w*o,m=w*n;return t[0]=1-g-u,t[1]=a+m,t[2]=y-x,t[3]=0,t[4]=a-m,t[5]=1-i-u,t[6]=c+h,t[7]=0,t[8]=y+x,t[9]=c-h,t[10]=1-i-g,t[11]=0,t}function A(r,d){const t=d??new f(12);return t[0]=-r[0],t[1]=-r[1],t[2]=-r[2],t[4]=-r[4],t[5]=-r[5],t[6]=-r[6],t[8]=-r[8],t[9]=-r[9],t[10]=-r[10],t}function T(r,d){const t=d??new f(12);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[8]=r[8],t[9]=r[9],t[10]=r[10],t}const B=T;function j(r,d){return Math.abs(r[0]-d[0])<E&&Math.abs(r[1]-d[1])<E&&Math.abs(r[2]-d[2])<E&&Math.abs(r[4]-d[4])<E&&Math.abs(r[5]-d[5])<E&&Math.abs(r[6]-d[6])<E&&Math.abs(r[8]-d[8])<E&&Math.abs(r[9]-d[9])<E&&Math.abs(r[10]-d[10])<E}function W(r,d){return r[0]===d[0]&&r[1]===d[1]&&r[2]===d[2]&&r[4]===d[4]&&r[5]===d[5]&&r[6]===d[6]&&r[8]===d[8]&&r[9]===d[9]&&r[10]===d[10]}function ne(r){const d=r??new f(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function K(r,d){const t=d??new f(12);if(t===r){let g;return g=r[1],r[1]=r[4],r[4]=g,g=r[2],r[2]=r[8],r[8]=g,g=r[6],r[6]=r[9],r[9]=g,t}const s=r[0*4+0],l=r[0*4+1],p=r[0*4+2],w=r[1*4+0],e=r[1*4+1],o=r[1*4+2],n=r[2*4+0],i=r[2*4+1],a=r[2*4+2];return t[0]=s,t[1]=w,t[2]=n,t[4]=l,t[5]=e,t[6]=i,t[8]=p,t[9]=o,t[10]=a,t}function ie(r,d){const t=d??new f(12),s=r[0*4+0],l=r[0*4+1],p=r[0*4+2],w=r[1*4+0],e=r[1*4+1],o=r[1*4+2],n=r[2*4+0],i=r[2*4+1],a=r[2*4+2],g=a*e-o*i,y=-a*w+o*n,c=i*w-e*n,u=1/(s*g+l*y+p*c);return t[0]=g*u,t[1]=(-a*l+p*i)*u,t[2]=(o*l-p*e)*u,t[4]=y*u,t[5]=(a*s-p*n)*u,t[6]=(-o*s+p*w)*u,t[8]=c*u,t[9]=(-i*s+l*n)*u,t[10]=(e*s-l*w)*u,t}function ce(r){const d=r[0],t=r[0*4+1],s=r[0*4+2],l=r[1*4+0],p=r[1*4+1],w=r[1*4+2],e=r[2*4+0],o=r[2*4+1],n=r[2*4+2];return d*(p*n-o*w)-l*(t*n-o*s)+e*(t*w-p*s)}const fe=ie;function te(r,d,t){const s=t??new f(12),l=r[0],p=r[1],w=r[2],e=r[4],o=r[5],n=r[6],i=r[8],a=r[9],g=r[10],y=d[0],c=d[1],u=d[2],h=d[4],x=d[5],m=d[6],P=d[8],D=d[9],V=d[10];return s[0]=l*y+e*c+i*u,s[1]=p*y+o*c+a*u,s[2]=w*y+n*c+g*u,s[4]=l*h+e*x+i*m,s[5]=p*h+o*x+a*m,s[6]=w*h+n*x+g*m,s[8]=l*P+e*D+i*V,s[9]=p*P+o*D+a*V,s[10]=w*P+n*D+g*V,s}const q=te;function O(r,d,t){const s=t??ne();return r!==s&&(s[0]=r[0],s[1]=r[1],s[2]=r[2],s[4]=r[4],s[5]=r[5],s[6]=r[6]),s[8]=d[0],s[9]=d[1],s[10]=1,s}function Z(r,d){const t=d??v.create();return t[0]=r[8],t[1]=r[9],t}function $(r,d,t){const s=t??v.create(),l=d*4;return s[0]=r[l+0],s[1]=r[l+1],s}function J(r,d,t,s){const l=s===r?r:T(r,s),p=t*4;return l[p+0]=d[0],l[p+1]=d[1],l}function Q(r,d){const t=d??v.create(),s=r[0],l=r[1],p=r[4],w=r[5];return t[0]=Math.sqrt(s*s+l*l),t[1]=Math.sqrt(p*p+w*w),t}function k(r,d){const t=d??z.create(),s=r[0],l=r[1],p=r[2],w=r[4],e=r[5],o=r[6],n=r[8],i=r[9],a=r[10];return t[0]=Math.sqrt(s*s+l*l+p*p),t[1]=Math.sqrt(w*w+e*e+o*o),t[2]=Math.sqrt(n*n+i*i+a*a),t}function H(r,d){const t=d??new f(12);return t[0]=1,t[1]=0,t[2]=0,t[4]=0,t[5]=1,t[6]=0,t[8]=r[0],t[9]=r[1],t[10]=1,t}function ee(r,d,t){const s=t??new f(12),l=d[0],p=d[1],w=r[0],e=r[1],o=r[2],n=r[1*4+0],i=r[1*4+1],a=r[1*4+2],g=r[2*4+0],y=r[2*4+1],c=r[2*4+2];return r!==s&&(s[0]=w,s[1]=e,s[2]=o,s[4]=n,s[5]=i,s[6]=a),s[8]=w*l+n*p+g,s[9]=e*l+i*p+y,s[10]=o*l+a*p+c,s}function ve(r,d){const t=d??new f(12),s=Math.cos(r),l=Math.sin(r);return t[0]=s,t[1]=l,t[2]=0,t[4]=-l,t[5]=s,t[6]=0,t[8]=0,t[9]=0,t[10]=1,t}function L(r,d,t){const s=t??new f(12),l=r[0*4+0],p=r[0*4+1],w=r[0*4+2],e=r[1*4+0],o=r[1*4+1],n=r[1*4+2],i=Math.cos(d),a=Math.sin(d);return s[0]=i*l+a*e,s[1]=i*p+a*o,s[2]=i*w+a*n,s[4]=i*e-a*l,s[5]=i*o-a*p,s[6]=i*n-a*w,r!==s&&(s[8]=r[8],s[9]=r[9],s[10]=r[10]),s}function N(r,d){const t=d??new f(12),s=Math.cos(r),l=Math.sin(r);return t[0]=1,t[1]=0,t[2]=0,t[4]=0,t[5]=s,t[6]=l,t[8]=0,t[9]=-l,t[10]=s,t}function R(r,d,t){const s=t??new f(12),l=r[4],p=r[5],w=r[6],e=r[8],o=r[9],n=r[10],i=Math.cos(d),a=Math.sin(d);return s[4]=i*l+a*e,s[5]=i*p+a*o,s[6]=i*w+a*n,s[8]=i*e-a*l,s[9]=i*o-a*p,s[10]=i*n-a*w,r!==s&&(s[0]=r[0],s[1]=r[1],s[2]=r[2]),s}function me(r,d){const t=d??new f(12),s=Math.cos(r),l=Math.sin(r);return t[0]=s,t[1]=0,t[2]=-l,t[4]=0,t[5]=1,t[6]=0,t[8]=l,t[9]=0,t[10]=s,t}function de(r,d,t){const s=t??new f(12),l=r[0*4+0],p=r[0*4+1],w=r[0*4+2],e=r[2*4+0],o=r[2*4+1],n=r[2*4+2],i=Math.cos(d),a=Math.sin(d);return s[0]=i*l-a*e,s[1]=i*p-a*o,s[2]=i*w-a*n,s[8]=i*e+a*l,s[9]=i*o+a*p,s[10]=i*n+a*w,r!==s&&(s[4]=r[4],s[5]=r[5],s[6]=r[6]),s}const ye=ve,ae=L;function Te(r,d){const t=d??new f(12);return t[0]=r[0],t[1]=0,t[2]=0,t[4]=0,t[5]=r[1],t[6]=0,t[8]=0,t[9]=0,t[10]=1,t}function C(r,d,t){const s=t??new f(12),l=d[0],p=d[1];return s[0]=l*r[0*4+0],s[1]=l*r[0*4+1],s[2]=l*r[0*4+2],s[4]=p*r[1*4+0],s[5]=p*r[1*4+1],s[6]=p*r[1*4+2],r!==s&&(s[8]=r[8],s[9]=r[9],s[10]=r[10]),s}function xe(r,d){const t=d??new f(12);return t[0]=r[0],t[1]=0,t[2]=0,t[4]=0,t[5]=r[1],t[6]=0,t[8]=0,t[9]=0,t[10]=r[2],t}function re(r,d,t){const s=t??new f(12),l=d[0],p=d[1],w=d[2];return s[0]=l*r[0*4+0],s[1]=l*r[0*4+1],s[2]=l*r[0*4+2],s[4]=p*r[1*4+0],s[5]=p*r[1*4+1],s[6]=p*r[1*4+2],s[8]=w*r[2*4+0],s[9]=w*r[2*4+1],s[10]=w*r[2*4+2],s}function pe(r,d){const t=d??new f(12);return t[0]=r,t[1]=0,t[2]=0,t[4]=0,t[5]=r,t[6]=0,t[8]=0,t[9]=0,t[10]=1,t}function se(r,d,t){const s=t??new f(12);return s[0]=d*r[0*4+0],s[1]=d*r[0*4+1],s[2]=d*r[0*4+2],s[4]=d*r[1*4+0],s[5]=d*r[1*4+1],s[6]=d*r[1*4+2],r!==s&&(s[8]=r[8],s[9]=r[9],s[10]=r[10]),s}function ue(r,d){const t=d??new f(12);return t[0]=r,t[1]=0,t[2]=0,t[4]=0,t[5]=r,t[6]=0,t[8]=0,t[9]=0,t[10]=r,t}function le(r,d,t){const s=t??new f(12);return s[0]=d*r[0*4+0],s[1]=d*r[0*4+1],s[2]=d*r[0*4+2],s[4]=d*r[1*4+0],s[5]=d*r[1*4+1],s[6]=d*r[1*4+2],s[8]=d*r[2*4+0],s[9]=d*r[2*4+1],s[10]=d*r[2*4+2],s}return{clone:B,create:_,set:S,fromMat4:M,fromQuat:F,negate:A,copy:T,equalsApproximately:j,equals:W,identity:ne,transpose:K,inverse:ie,invert:fe,determinant:ce,mul:q,multiply:te,setTranslation:O,getTranslation:Z,getAxis:$,setAxis:J,getScaling:Q,get3DScaling:k,translation:H,translate:ee,rotation:ve,rotate:L,rotationX:N,rotateX:R,rotationY:me,rotateY:de,rotationZ:ye,rotateZ:ae,scaling:Te,scale:C,uniformScaling:pe,uniformScale:se,scaling3D:xe,scale3D:re,uniformScaling3D:ue,uniformScale3D:le}}const tn=new Map;function gn(f){let v=tn.get(f);return v||(v=hn(f),tn.set(f,v)),v}function xn(f){const v=Ce(f);function z(e,o,n,i,a,g,y,c,u,h,x,m,P,D,V,U){const G=new f(16);return e!==void 0&&(G[0]=e,o!==void 0&&(G[1]=o,n!==void 0&&(G[2]=n,i!==void 0&&(G[3]=i,a!==void 0&&(G[4]=a,g!==void 0&&(G[5]=g,y!==void 0&&(G[6]=y,c!==void 0&&(G[7]=c,u!==void 0&&(G[8]=u,h!==void 0&&(G[9]=h,x!==void 0&&(G[10]=x,m!==void 0&&(G[11]=m,P!==void 0&&(G[12]=P,D!==void 0&&(G[13]=D,V!==void 0&&(G[14]=V,U!==void 0&&(G[15]=U)))))))))))))))),G}function _(e,o,n,i,a,g,y,c,u,h,x,m,P,D,V,U,G){const I=G??new f(16);return I[0]=e,I[1]=o,I[2]=n,I[3]=i,I[4]=a,I[5]=g,I[6]=y,I[7]=c,I[8]=u,I[9]=h,I[10]=x,I[11]=m,I[12]=P,I[13]=D,I[14]=V,I[15]=U,I}function S(e,o){const n=o??new f(16);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=0,n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=0,n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function M(e,o){const n=o??new f(16),i=e[0],a=e[1],g=e[2],y=e[3],c=i+i,u=a+a,h=g+g,x=i*c,m=a*c,P=a*u,D=g*c,V=g*u,U=g*h,G=y*c,I=y*u,Y=y*h;return n[0]=1-P-U,n[1]=m+Y,n[2]=D-I,n[3]=0,n[4]=m-Y,n[5]=1-x-U,n[6]=V+G,n[7]=0,n[8]=D+I,n[9]=V-G,n[10]=1-x-P,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function F(e,o){const n=o??new f(16);return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=-e[3],n[4]=-e[4],n[5]=-e[5],n[6]=-e[6],n[7]=-e[7],n[8]=-e[8],n[9]=-e[9],n[10]=-e[10],n[11]=-e[11],n[12]=-e[12],n[13]=-e[13],n[14]=-e[14],n[15]=-e[15],n}function A(e,o){const n=o??new f(16);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}const T=A;function B(e,o){return Math.abs(e[0]-o[0])<E&&Math.abs(e[1]-o[1])<E&&Math.abs(e[2]-o[2])<E&&Math.abs(e[3]-o[3])<E&&Math.abs(e[4]-o[4])<E&&Math.abs(e[5]-o[5])<E&&Math.abs(e[6]-o[6])<E&&Math.abs(e[7]-o[7])<E&&Math.abs(e[8]-o[8])<E&&Math.abs(e[9]-o[9])<E&&Math.abs(e[10]-o[10])<E&&Math.abs(e[11]-o[11])<E&&Math.abs(e[12]-o[12])<E&&Math.abs(e[13]-o[13])<E&&Math.abs(e[14]-o[14])<E&&Math.abs(e[15]-o[15])<E}function j(e,o){return e[0]===o[0]&&e[1]===o[1]&&e[2]===o[2]&&e[3]===o[3]&&e[4]===o[4]&&e[5]===o[5]&&e[6]===o[6]&&e[7]===o[7]&&e[8]===o[8]&&e[9]===o[9]&&e[10]===o[10]&&e[11]===o[11]&&e[12]===o[12]&&e[13]===o[13]&&e[14]===o[14]&&e[15]===o[15]}function W(e){const o=e??new f(16);return o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=1,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}function ne(e,o){const n=o??new f(16);if(n===e){let X;return X=e[1],e[1]=e[4],e[4]=X,X=e[2],e[2]=e[8],e[8]=X,X=e[3],e[3]=e[12],e[12]=X,X=e[6],e[6]=e[9],e[9]=X,X=e[7],e[7]=e[13],e[13]=X,X=e[11],e[11]=e[14],e[14]=X,n}const i=e[0*4+0],a=e[0*4+1],g=e[0*4+2],y=e[0*4+3],c=e[1*4+0],u=e[1*4+1],h=e[1*4+2],x=e[1*4+3],m=e[2*4+0],P=e[2*4+1],D=e[2*4+2],V=e[2*4+3],U=e[3*4+0],G=e[3*4+1],I=e[3*4+2],Y=e[3*4+3];return n[0]=i,n[1]=c,n[2]=m,n[3]=U,n[4]=a,n[5]=u,n[6]=P,n[7]=G,n[8]=g,n[9]=h,n[10]=D,n[11]=I,n[12]=y,n[13]=x,n[14]=V,n[15]=Y,n}function K(e,o){const n=o??new f(16),i=e[0*4+0],a=e[0*4+1],g=e[0*4+2],y=e[0*4+3],c=e[1*4+0],u=e[1*4+1],h=e[1*4+2],x=e[1*4+3],m=e[2*4+0],P=e[2*4+1],D=e[2*4+2],V=e[2*4+3],U=e[3*4+0],G=e[3*4+1],I=e[3*4+2],Y=e[3*4+3],X=D*Y,oe=I*V,he=h*Y,ge=I*x,we=h*V,Pe=D*x,De=g*Y,Me=I*y,ze=g*V,be=D*y,Se=g*x,Ge=h*y,Ve=m*G,_e=U*P,Ie=c*G,Fe=U*u,Ue=c*P,Ee=m*u,Oe=i*G,Ye=U*a,ke=i*P,Xe=m*a,qe=i*u,We=c*a,$e=X*u+ge*P+we*G-(oe*u+he*P+Pe*G),Qe=oe*a+De*P+be*G-(X*a+Me*P+ze*G),Ke=he*a+Me*u+Se*G-(ge*a+De*u+Ge*G),Je=Pe*a+ze*u+Ge*P-(we*a+be*u+Se*P),Be=1/(i*$e+c*Qe+m*Ke+U*Je);return n[0]=Be*$e,n[1]=Be*Qe,n[2]=Be*Ke,n[3]=Be*Je,n[4]=Be*(oe*c+he*m+Pe*U-(X*c+ge*m+we*U)),n[5]=Be*(X*i+Me*m+ze*U-(oe*i+De*m+be*U)),n[6]=Be*(ge*i+De*c+Ge*U-(he*i+Me*c+Se*U)),n[7]=Be*(we*i+be*c+Se*m-(Pe*i+ze*c+Ge*m)),n[8]=Be*(Ve*x+Fe*V+Ue*Y-(_e*x+Ie*V+Ee*Y)),n[9]=Be*(_e*y+Oe*V+Xe*Y-(Ve*y+Ye*V+ke*Y)),n[10]=Be*(Ie*y+Ye*x+qe*Y-(Fe*y+Oe*x+We*Y)),n[11]=Be*(Ee*y+ke*x+We*V-(Ue*y+Xe*x+qe*V)),n[12]=Be*(Ie*D+Ee*I+_e*h-(Ue*I+Ve*h+Fe*D)),n[13]=Be*(ke*I+Ve*g+Ye*D-(Oe*D+Xe*I+_e*g)),n[14]=Be*(Oe*h+We*I+Fe*g-(qe*I+Ie*g+Ye*h)),n[15]=Be*(qe*D+Ue*g+Xe*h-(ke*h+We*D+Ee*g)),n}function ie(e){const o=e[0],n=e[0*4+1],i=e[0*4+2],a=e[0*4+3],g=e[1*4+0],y=e[1*4+1],c=e[1*4+2],u=e[1*4+3],h=e[2*4+0],x=e[2*4+1],m=e[2*4+2],P=e[2*4+3],D=e[3*4+0],V=e[3*4+1],U=e[3*4+2],G=e[3*4+3],I=m*G,Y=U*P,X=c*G,oe=U*u,he=c*P,ge=m*u,we=i*G,Pe=U*a,De=i*P,Me=m*a,ze=i*u,be=c*a,Se=I*y+oe*x+he*V-(Y*y+X*x+ge*V),Ge=Y*n+we*x+Me*V-(I*n+Pe*x+De*V),Ve=X*n+Pe*y+ze*V-(oe*n+we*y+be*V),_e=ge*n+De*y+be*x-(he*n+Me*y+ze*x);return o*Se+g*Ge+h*Ve+D*_e}const ce=K;function fe(e,o,n){const i=n??new f(16),a=e[0],g=e[1],y=e[2],c=e[3],u=e[4],h=e[5],x=e[6],m=e[7],P=e[8],D=e[9],V=e[10],U=e[11],G=e[12],I=e[13],Y=e[14],X=e[15],oe=o[0],he=o[1],ge=o[2],we=o[3],Pe=o[4],De=o[5],Me=o[6],ze=o[7],be=o[8],Se=o[9],Ge=o[10],Ve=o[11],_e=o[12],Ie=o[13],Fe=o[14],Ue=o[15];return i[0]=a*oe+u*he+P*ge+G*we,i[1]=g*oe+h*he+D*ge+I*we,i[2]=y*oe+x*he+V*ge+Y*we,i[3]=c*oe+m*he+U*ge+X*we,i[4]=a*Pe+u*De+P*Me+G*ze,i[5]=g*Pe+h*De+D*Me+I*ze,i[6]=y*Pe+x*De+V*Me+Y*ze,i[7]=c*Pe+m*De+U*Me+X*ze,i[8]=a*be+u*Se+P*Ge+G*Ve,i[9]=g*be+h*Se+D*Ge+I*Ve,i[10]=y*be+x*Se+V*Ge+Y*Ve,i[11]=c*be+m*Se+U*Ge+X*Ve,i[12]=a*_e+u*Ie+P*Fe+G*Ue,i[13]=g*_e+h*Ie+D*Fe+I*Ue,i[14]=y*_e+x*Ie+V*Fe+Y*Ue,i[15]=c*_e+m*Ie+U*Fe+X*Ue,i}const te=fe;function q(e,o,n){const i=n??W();return e!==i&&(i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11]),i[12]=o[0],i[13]=o[1],i[14]=o[2],i[15]=1,i}function O(e,o){const n=o??v.create();return n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function Z(e,o,n){const i=n??v.create(),a=o*4;return i[0]=e[a+0],i[1]=e[a+1],i[2]=e[a+2],i}function $(e,o,n,i){const a=i===e?i:A(e,i),g=n*4;return a[g+0]=o[0],a[g+1]=o[1],a[g+2]=o[2],a}function J(e,o){const n=o??v.create(),i=e[0],a=e[1],g=e[2],y=e[4],c=e[5],u=e[6],h=e[8],x=e[9],m=e[10];return n[0]=Math.sqrt(i*i+a*a+g*g),n[1]=Math.sqrt(y*y+c*c+u*u),n[2]=Math.sqrt(h*h+x*x+m*m),n}function Q(e,o,n,i,a){const g=a??new f(16),y=Math.tan(Math.PI*.5-.5*e);if(g[0]=y/o,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=y,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,Number.isFinite(i)){const c=1/(n-i);g[10]=i*c,g[14]=i*n*c}else g[10]=-1,g[14]=-n;return g}function k(e,o,n,i=1/0,a){const g=a??new f(16),y=1/Math.tan(e*.5);if(g[0]=y/o,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=y,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,i===1/0)g[10]=0,g[14]=n;else{const c=1/(i-n);g[10]=n*c,g[14]=i*n*c}return g}function H(e,o,n,i,a,g,y){const c=y??new f(16);return c[0]=2/(o-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(i-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1/(a-g),c[11]=0,c[12]=(o+e)/(e-o),c[13]=(i+n)/(n-i),c[14]=a/(a-g),c[15]=1,c}function ee(e,o,n,i,a,g,y){const c=y??new f(16),u=o-e,h=i-n,x=a-g;return c[0]=2*a/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/h,c[6]=0,c[7]=0,c[8]=(e+o)/u,c[9]=(i+n)/h,c[10]=g/x,c[11]=-1,c[12]=0,c[13]=0,c[14]=a*g/x,c[15]=0,c}function ve(e,o,n,i,a,g=1/0,y){const c=y??new f(16),u=o-e,h=i-n;if(c[0]=2*a/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/h,c[6]=0,c[7]=0,c[8]=(e+o)/u,c[9]=(i+n)/h,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,g===1/0)c[10]=0,c[14]=a;else{const x=1/(g-a);c[10]=a*x,c[14]=g*a*x}return c}const L=v.create(),N=v.create(),R=v.create();function me(e,o,n,i){const a=i??new f(16);return v.normalize(v.subtract(o,e,R),R),v.normalize(v.cross(n,R,L),L),v.normalize(v.cross(R,L,N),N),a[0]=L[0],a[1]=L[1],a[2]=L[2],a[3]=0,a[4]=N[0],a[5]=N[1],a[6]=N[2],a[7]=0,a[8]=R[0],a[9]=R[1],a[10]=R[2],a[11]=0,a[12]=e[0],a[13]=e[1],a[14]=e[2],a[15]=1,a}function de(e,o,n,i){const a=i??new f(16);return v.normalize(v.subtract(e,o,R),R),v.normalize(v.cross(n,R,L),L),v.normalize(v.cross(R,L,N),N),a[0]=L[0],a[1]=L[1],a[2]=L[2],a[3]=0,a[4]=N[0],a[5]=N[1],a[6]=N[2],a[7]=0,a[8]=R[0],a[9]=R[1],a[10]=R[2],a[11]=0,a[12]=e[0],a[13]=e[1],a[14]=e[2],a[15]=1,a}function ye(e,o,n,i){const a=i??new f(16);return v.normalize(v.subtract(e,o,R),R),v.normalize(v.cross(n,R,L),L),v.normalize(v.cross(R,L,N),N),a[0]=L[0],a[1]=N[0],a[2]=R[0],a[3]=0,a[4]=L[1],a[5]=N[1],a[6]=R[1],a[7]=0,a[8]=L[2],a[9]=N[2],a[10]=R[2],a[11]=0,a[12]=-(L[0]*e[0]+L[1]*e[1]+L[2]*e[2]),a[13]=-(N[0]*e[0]+N[1]*e[1]+N[2]*e[2]),a[14]=-(R[0]*e[0]+R[1]*e[1]+R[2]*e[2]),a[15]=1,a}function ae(e,o){const n=o??new f(16);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function Te(e,o,n){const i=n??new f(16),a=o[0],g=o[1],y=o[2],c=e[0],u=e[1],h=e[2],x=e[3],m=e[1*4+0],P=e[1*4+1],D=e[1*4+2],V=e[1*4+3],U=e[2*4+0],G=e[2*4+1],I=e[2*4+2],Y=e[2*4+3],X=e[3*4+0],oe=e[3*4+1],he=e[3*4+2],ge=e[3*4+3];return e!==i&&(i[0]=c,i[1]=u,i[2]=h,i[3]=x,i[4]=m,i[5]=P,i[6]=D,i[7]=V,i[8]=U,i[9]=G,i[10]=I,i[11]=Y),i[12]=c*a+m*g+U*y+X,i[13]=u*a+P*g+G*y+oe,i[14]=h*a+D*g+I*y+he,i[15]=x*a+V*g+Y*y+ge,i}function C(e,o){const n=o??new f(16),i=Math.cos(e),a=Math.sin(e);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=i,n[6]=a,n[7]=0,n[8]=0,n[9]=-a,n[10]=i,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function xe(e,o,n){const i=n??new f(16),a=e[4],g=e[5],y=e[6],c=e[7],u=e[8],h=e[9],x=e[10],m=e[11],P=Math.cos(o),D=Math.sin(o);return i[4]=P*a+D*u,i[5]=P*g+D*h,i[6]=P*y+D*x,i[7]=P*c+D*m,i[8]=P*u-D*a,i[9]=P*h-D*g,i[10]=P*x-D*y,i[11]=P*m-D*c,e!==i&&(i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function re(e,o){const n=o??new f(16),i=Math.cos(e),a=Math.sin(e);return n[0]=i,n[1]=0,n[2]=-a,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=a,n[9]=0,n[10]=i,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function pe(e,o,n){const i=n??new f(16),a=e[0*4+0],g=e[0*4+1],y=e[0*4+2],c=e[0*4+3],u=e[2*4+0],h=e[2*4+1],x=e[2*4+2],m=e[2*4+3],P=Math.cos(o),D=Math.sin(o);return i[0]=P*a-D*u,i[1]=P*g-D*h,i[2]=P*y-D*x,i[3]=P*c-D*m,i[8]=P*u+D*a,i[9]=P*h+D*g,i[10]=P*x+D*y,i[11]=P*m+D*c,e!==i&&(i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function se(e,o){const n=o??new f(16),i=Math.cos(e),a=Math.sin(e);return n[0]=i,n[1]=a,n[2]=0,n[3]=0,n[4]=-a,n[5]=i,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function ue(e,o,n){const i=n??new f(16),a=e[0*4+0],g=e[0*4+1],y=e[0*4+2],c=e[0*4+3],u=e[1*4+0],h=e[1*4+1],x=e[1*4+2],m=e[1*4+3],P=Math.cos(o),D=Math.sin(o);return i[0]=P*a+D*u,i[1]=P*g+D*h,i[2]=P*y+D*x,i[3]=P*c+D*m,i[4]=P*u-D*a,i[5]=P*h-D*g,i[6]=P*x-D*y,i[7]=P*m-D*c,e!==i&&(i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function le(e,o,n){const i=n??new f(16);let a=e[0],g=e[1],y=e[2];const c=Math.sqrt(a*a+g*g+y*y);a/=c,g/=c,y/=c;const u=a*a,h=g*g,x=y*y,m=Math.cos(o),P=Math.sin(o),D=1-m;return i[0]=u+(1-u)*m,i[1]=a*g*D+y*P,i[2]=a*y*D-g*P,i[3]=0,i[4]=a*g*D-y*P,i[5]=h+(1-h)*m,i[6]=g*y*D+a*P,i[7]=0,i[8]=a*y*D+g*P,i[9]=g*y*D-a*P,i[10]=x+(1-x)*m,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}const r=le;function d(e,o,n,i){const a=i??new f(16);let g=o[0],y=o[1],c=o[2];const u=Math.sqrt(g*g+y*y+c*c);g/=u,y/=u,c/=u;const h=g*g,x=y*y,m=c*c,P=Math.cos(n),D=Math.sin(n),V=1-P,U=h+(1-h)*P,G=g*y*V+c*D,I=g*c*V-y*D,Y=g*y*V-c*D,X=x+(1-x)*P,oe=y*c*V+g*D,he=g*c*V+y*D,ge=y*c*V-g*D,we=m+(1-m)*P,Pe=e[0],De=e[1],Me=e[2],ze=e[3],be=e[4],Se=e[5],Ge=e[6],Ve=e[7],_e=e[8],Ie=e[9],Fe=e[10],Ue=e[11];return a[0]=U*Pe+G*be+I*_e,a[1]=U*De+G*Se+I*Ie,a[2]=U*Me+G*Ge+I*Fe,a[3]=U*ze+G*Ve+I*Ue,a[4]=Y*Pe+X*be+oe*_e,a[5]=Y*De+X*Se+oe*Ie,a[6]=Y*Me+X*Ge+oe*Fe,a[7]=Y*ze+X*Ve+oe*Ue,a[8]=he*Pe+ge*be+we*_e,a[9]=he*De+ge*Se+we*Ie,a[10]=he*Me+ge*Ge+we*Fe,a[11]=he*ze+ge*Ve+we*Ue,e!==a&&(a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}const t=d;function s(e,o){const n=o??new f(16);return n[0]=e[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function l(e,o,n){const i=n??new f(16),a=o[0],g=o[1],y=o[2];return i[0]=a*e[0*4+0],i[1]=a*e[0*4+1],i[2]=a*e[0*4+2],i[3]=a*e[0*4+3],i[4]=g*e[1*4+0],i[5]=g*e[1*4+1],i[6]=g*e[1*4+2],i[7]=g*e[1*4+3],i[8]=y*e[2*4+0],i[9]=y*e[2*4+1],i[10]=y*e[2*4+2],i[11]=y*e[2*4+3],e!==i&&(i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function p(e,o){const n=o??new f(16);return n[0]=e,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function w(e,o,n){const i=n??new f(16);return i[0]=o*e[0*4+0],i[1]=o*e[0*4+1],i[2]=o*e[0*4+2],i[3]=o*e[0*4+3],i[4]=o*e[1*4+0],i[5]=o*e[1*4+1],i[6]=o*e[1*4+2],i[7]=o*e[1*4+3],i[8]=o*e[2*4+0],i[9]=o*e[2*4+1],i[10]=o*e[2*4+2],i[11]=o*e[2*4+3],e!==i&&(i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}return{create:z,set:_,fromMat3:S,fromQuat:M,negate:F,copy:A,clone:T,equalsApproximately:B,equals:j,identity:W,transpose:ne,inverse:K,determinant:ie,invert:ce,multiply:fe,mul:te,setTranslation:q,getTranslation:O,getAxis:Z,setAxis:$,getScaling:J,perspective:Q,perspectiveReverseZ:k,ortho:H,frustum:ee,frustumReverseZ:ve,aim:me,cameraAim:de,lookAt:ye,translation:ae,translate:Te,rotationX:C,rotateX:xe,rotationY:re,rotateY:pe,rotationZ:se,rotateZ:ue,axisRotation:le,rotation:r,axisRotate:d,rotate:t,scaling:s,scale:l,uniformScaling:p,uniformScale:w}}const rn=new Map;function vn(f){let v=rn.get(f);return v||(v=xn(f),rn.set(f,v)),v}function wn(f){const v=Ce(f);function z(r,d,t,s){const l=new f(4);return r!==void 0&&(l[0]=r,d!==void 0&&(l[1]=d,t!==void 0&&(l[2]=t,s!==void 0&&(l[3]=s)))),l}const _=z;function S(r,d,t,s,l){const p=l??new f(4);return p[0]=r,p[1]=d,p[2]=t,p[3]=s,p}function M(r,d,t){const s=t??new f(4),l=d*.5,p=Math.sin(l);return s[0]=p*r[0],s[1]=p*r[1],s[2]=p*r[2],s[3]=Math.cos(l),s}function F(r,d){const t=d??v.create(3),s=Math.acos(r[3])*2,l=Math.sin(s*.5);return l>E?(t[0]=r[0]/l,t[1]=r[1]/l,t[2]=r[2]/l):(t[0]=1,t[1]=0,t[2]=0),{angle:s,axis:t}}function A(r,d){const t=ee(r,d);return Math.acos(2*t*t-1)}function T(r,d,t){const s=t??new f(4),l=r[0],p=r[1],w=r[2],e=r[3],o=d[0],n=d[1],i=d[2],a=d[3];return s[0]=l*a+e*o+p*i-w*n,s[1]=p*a+e*n+w*o-l*i,s[2]=w*a+e*i+l*n-p*o,s[3]=e*a-l*o-p*n-w*i,s}const B=T;function j(r,d,t){const s=t??new f(4),l=d*.5,p=r[0],w=r[1],e=r[2],o=r[3],n=Math.sin(l),i=Math.cos(l);return s[0]=p*i+o*n,s[1]=w*i+e*n,s[2]=e*i-w*n,s[3]=o*i-p*n,s}function W(r,d,t){const s=t??new f(4),l=d*.5,p=r[0],w=r[1],e=r[2],o=r[3],n=Math.sin(l),i=Math.cos(l);return s[0]=p*i-e*n,s[1]=w*i+o*n,s[2]=e*i+p*n,s[3]=o*i-w*n,s}function ne(r,d,t){const s=t??new f(4),l=d*.5,p=r[0],w=r[1],e=r[2],o=r[3],n=Math.sin(l),i=Math.cos(l);return s[0]=p*i+w*n,s[1]=w*i-p*n,s[2]=e*i+o*n,s[3]=o*i-e*n,s}function K(r,d,t,s){const l=s??new f(4),p=r[0],w=r[1],e=r[2],o=r[3];let n=d[0],i=d[1],a=d[2],g=d[3],y=p*n+w*i+e*a+o*g;y<0&&(y=-y,n=-n,i=-i,a=-a,g=-g);let c,u;if(1-y>E){const h=Math.acos(y),x=Math.sin(h);c=Math.sin((1-t)*h)/x,u=Math.sin(t*h)/x}else c=1-t,u=t;return l[0]=c*p+u*n,l[1]=c*w+u*i,l[2]=c*e+u*a,l[3]=c*o+u*g,l}function ie(r,d){const t=d??new f(4),s=r[0],l=r[1],p=r[2],w=r[3],e=s*s+l*l+p*p+w*w,o=e?1/e:0;return t[0]=-s*o,t[1]=-l*o,t[2]=-p*o,t[3]=w*o,t}function ce(r,d){const t=d??new f(4);return t[0]=-r[0],t[1]=-r[1],t[2]=-r[2],t[3]=r[3],t}function fe(r,d){const t=d??new f(4),s=r[0]+r[5]+r[10];if(s>0){const l=Math.sqrt(s+1);t[3]=.5*l;const p=.5/l;t[0]=(r[6]-r[9])*p,t[1]=(r[8]-r[2])*p,t[2]=(r[1]-r[4])*p}else{let l=0;r[5]>r[0]&&(l=1),r[10]>r[l*4+l]&&(l=2);const p=(l+1)%3,w=(l+2)%3,e=Math.sqrt(r[l*4+l]-r[p*4+p]-r[w*4+w]+1);t[l]=.5*e;const o=.5/e;t[3]=(r[p*4+w]-r[w*4+p])*o,t[p]=(r[p*4+l]+r[l*4+p])*o,t[w]=(r[w*4+l]+r[l*4+w])*o}return t}function te(r,d,t,s,l){const p=l??new f(4),w=r*.5,e=d*.5,o=t*.5,n=Math.sin(w),i=Math.cos(w),a=Math.sin(e),g=Math.cos(e),y=Math.sin(o),c=Math.cos(o);switch(s){case"xyz":p[0]=n*g*c+i*a*y,p[1]=i*a*c-n*g*y,p[2]=i*g*y+n*a*c,p[3]=i*g*c-n*a*y;break;case"xzy":p[0]=n*g*c-i*a*y,p[1]=i*a*c-n*g*y,p[2]=i*g*y+n*a*c,p[3]=i*g*c+n*a*y;break;case"yxz":p[0]=n*g*c+i*a*y,p[1]=i*a*c-n*g*y,p[2]=i*g*y-n*a*c,p[3]=i*g*c+n*a*y;break;case"yzx":p[0]=n*g*c+i*a*y,p[1]=i*a*c+n*g*y,p[2]=i*g*y-n*a*c,p[3]=i*g*c-n*a*y;break;case"zxy":p[0]=n*g*c-i*a*y,p[1]=i*a*c+n*g*y,p[2]=i*g*y+n*a*c,p[3]=i*g*c-n*a*y;break;case"zyx":p[0]=n*g*c-i*a*y,p[1]=i*a*c+n*g*y,p[2]=i*g*y-n*a*c,p[3]=i*g*c+n*a*y;break;default:throw new Error(`Unknown rotation order: ${s}`)}return p}function q(r,d){const t=d??new f(4);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t}const O=q;function Z(r,d,t){const s=t??new f(4);return s[0]=r[0]+d[0],s[1]=r[1]+d[1],s[2]=r[2]+d[2],s[3]=r[3]+d[3],s}function $(r,d,t){const s=t??new f(4);return s[0]=r[0]-d[0],s[1]=r[1]-d[1],s[2]=r[2]-d[2],s[3]=r[3]-d[3],s}const J=$;function Q(r,d,t){const s=t??new f(4);return s[0]=r[0]*d,s[1]=r[1]*d,s[2]=r[2]*d,s[3]=r[3]*d,s}const k=Q;function H(r,d,t){const s=t??new f(4);return s[0]=r[0]/d,s[1]=r[1]/d,s[2]=r[2]/d,s[3]=r[3]/d,s}function ee(r,d){return r[0]*d[0]+r[1]*d[1]+r[2]*d[2]+r[3]*d[3]}function ve(r,d,t,s){const l=s??new f(4);return l[0]=r[0]+t*(d[0]-r[0]),l[1]=r[1]+t*(d[1]-r[1]),l[2]=r[2]+t*(d[2]-r[2]),l[3]=r[3]+t*(d[3]-r[3]),l}function L(r){const d=r[0],t=r[1],s=r[2],l=r[3];return Math.sqrt(d*d+t*t+s*s+l*l)}const N=L;function R(r){const d=r[0],t=r[1],s=r[2],l=r[3];return d*d+t*t+s*s+l*l}const me=R;function de(r,d){const t=d??new f(4),s=r[0],l=r[1],p=r[2],w=r[3],e=Math.sqrt(s*s+l*l+p*p+w*w);return e>1e-5?(t[0]=s/e,t[1]=l/e,t[2]=p/e,t[3]=w/e):(t[0]=0,t[1]=0,t[2]=0,t[3]=1),t}function ye(r,d){return Math.abs(r[0]-d[0])<E&&Math.abs(r[1]-d[1])<E&&Math.abs(r[2]-d[2])<E&&Math.abs(r[3]-d[3])<E}function ae(r,d){return r[0]===d[0]&&r[1]===d[1]&&r[2]===d[2]&&r[3]===d[3]}function Te(r){const d=r??new f(4);return d[0]=0,d[1]=0,d[2]=0,d[3]=1,d}const C=v.create(),xe=v.create(),re=v.create();function pe(r,d,t){const s=t??new f(4),l=v.dot(r,d);return l<-.999999?(v.cross(xe,r,C),v.len(C)<1e-6&&v.cross(re,r,C),v.normalize(C,C),M(C,Math.PI,s),s):l>.999999?(s[0]=0,s[1]=0,s[2]=0,s[3]=1,s):(v.cross(r,d,C),s[0]=C[0],s[1]=C[1],s[2]=C[2],s[3]=1+l,de(s,s))}const se=new f(4),ue=new f(4);function le(r,d,t,s,l,p){const w=p??new f(4);return K(r,s,l,se),K(d,t,l,ue),K(se,ue,2*l*(1-l),w),w}return{create:z,fromValues:_,set:S,fromAxisAngle:M,toAxisAngle:F,angle:A,multiply:T,mul:B,rotateX:j,rotateY:W,rotateZ:ne,slerp:K,inverse:ie,conjugate:ce,fromMat:fe,fromEuler:te,copy:q,clone:O,add:Z,subtract:$,sub:J,mulScalar:Q,scale:k,divScalar:H,dot:ee,lerp:ve,length:L,len:N,lengthSq:R,lenSq:me,normalize:de,equalsApproximately:ye,equals:ae,identity:Te,rotationTo:pe,sqlerp:le}}const sn=new Map;function mn(f){let v=sn.get(f);return v||(v=wn(f),sn.set(f,v)),v}function yn(f){function v(t,s,l,p){const w=new f(4);return t!==void 0&&(w[0]=t,s!==void 0&&(w[1]=s,l!==void 0&&(w[2]=l,p!==void 0&&(w[3]=p)))),w}const z=v;function _(t,s,l,p,w){const e=w??new f(4);return e[0]=t,e[1]=s,e[2]=l,e[3]=p,e}function S(t,s){const l=s??new f(4);return l[0]=Math.ceil(t[0]),l[1]=Math.ceil(t[1]),l[2]=Math.ceil(t[2]),l[3]=Math.ceil(t[3]),l}function M(t,s){const l=s??new f(4);return l[0]=Math.floor(t[0]),l[1]=Math.floor(t[1]),l[2]=Math.floor(t[2]),l[3]=Math.floor(t[3]),l}function F(t,s){const l=s??new f(4);return l[0]=Math.round(t[0]),l[1]=Math.round(t[1]),l[2]=Math.round(t[2]),l[3]=Math.round(t[3]),l}function A(t,s=0,l=1,p){const w=p??new f(4);return w[0]=Math.min(l,Math.max(s,t[0])),w[1]=Math.min(l,Math.max(s,t[1])),w[2]=Math.min(l,Math.max(s,t[2])),w[3]=Math.min(l,Math.max(s,t[3])),w}function T(t,s,l){const p=l??new f(4);return p[0]=t[0]+s[0],p[1]=t[1]+s[1],p[2]=t[2]+s[2],p[3]=t[3]+s[3],p}function B(t,s,l,p){const w=p??new f(4);return w[0]=t[0]+s[0]*l,w[1]=t[1]+s[1]*l,w[2]=t[2]+s[2]*l,w[3]=t[3]+s[3]*l,w}function j(t,s,l){const p=l??new f(4);return p[0]=t[0]-s[0],p[1]=t[1]-s[1],p[2]=t[2]-s[2],p[3]=t[3]-s[3],p}const W=j;function ne(t,s){return Math.abs(t[0]-s[0])<E&&Math.abs(t[1]-s[1])<E&&Math.abs(t[2]-s[2])<E&&Math.abs(t[3]-s[3])<E}function K(t,s){return t[0]===s[0]&&t[1]===s[1]&&t[2]===s[2]&&t[3]===s[3]}function ie(t,s,l,p){const w=p??new f(4);return w[0]=t[0]+l*(s[0]-t[0]),w[1]=t[1]+l*(s[1]-t[1]),w[2]=t[2]+l*(s[2]-t[2]),w[3]=t[3]+l*(s[3]-t[3]),w}function ce(t,s,l,p){const w=p??new f(4);return w[0]=t[0]+l[0]*(s[0]-t[0]),w[1]=t[1]+l[1]*(s[1]-t[1]),w[2]=t[2]+l[2]*(s[2]-t[2]),w[3]=t[3]+l[3]*(s[3]-t[3]),w}function fe(t,s,l){const p=l??new f(4);return p[0]=Math.max(t[0],s[0]),p[1]=Math.max(t[1],s[1]),p[2]=Math.max(t[2],s[2]),p[3]=Math.max(t[3],s[3]),p}function te(t,s,l){const p=l??new f(4);return p[0]=Math.min(t[0],s[0]),p[1]=Math.min(t[1],s[1]),p[2]=Math.min(t[2],s[2]),p[3]=Math.min(t[3],s[3]),p}function q(t,s,l){const p=l??new f(4);return p[0]=t[0]*s,p[1]=t[1]*s,p[2]=t[2]*s,p[3]=t[3]*s,p}const O=q;function Z(t,s,l){const p=l??new f(4);return p[0]=t[0]/s,p[1]=t[1]/s,p[2]=t[2]/s,p[3]=t[3]/s,p}function $(t,s){const l=s??new f(4);return l[0]=1/t[0],l[1]=1/t[1],l[2]=1/t[2],l[3]=1/t[3],l}const J=$;function Q(t,s){return t[0]*s[0]+t[1]*s[1]+t[2]*s[2]+t[3]*s[3]}function k(t){const s=t[0],l=t[1],p=t[2],w=t[3];return Math.sqrt(s*s+l*l+p*p+w*w)}const H=k;function ee(t){const s=t[0],l=t[1],p=t[2],w=t[3];return s*s+l*l+p*p+w*w}const ve=ee;function L(t,s){const l=t[0]-s[0],p=t[1]-s[1],w=t[2]-s[2],e=t[3]-s[3];return Math.sqrt(l*l+p*p+w*w+e*e)}const N=L;function R(t,s){const l=t[0]-s[0],p=t[1]-s[1],w=t[2]-s[2],e=t[3]-s[3];return l*l+p*p+w*w+e*e}const me=R;function de(t,s){const l=s??new f(4),p=t[0],w=t[1],e=t[2],o=t[3],n=Math.sqrt(p*p+w*w+e*e+o*o);return n>1e-5?(l[0]=p/n,l[1]=w/n,l[2]=e/n,l[3]=o/n):(l[0]=0,l[1]=0,l[2]=0,l[3]=0),l}function ye(t,s){const l=s??new f(4);return l[0]=-t[0],l[1]=-t[1],l[2]=-t[2],l[3]=-t[3],l}function ae(t,s){const l=s??new f(4);return l[0]=t[0],l[1]=t[1],l[2]=t[2],l[3]=t[3],l}const Te=ae;function C(t,s,l){const p=l??new f(4);return p[0]=t[0]*s[0],p[1]=t[1]*s[1],p[2]=t[2]*s[2],p[3]=t[3]*s[3],p}const xe=C;function re(t,s,l){const p=l??new f(4);return p[0]=t[0]/s[0],p[1]=t[1]/s[1],p[2]=t[2]/s[2],p[3]=t[3]/s[3],p}const pe=re;function se(t){const s=t??new f(4);return s[0]=0,s[1]=0,s[2]=0,s[3]=0,s}function ue(t,s,l){const p=l??new f(4),w=t[0],e=t[1],o=t[2],n=t[3];return p[0]=s[0]*w+s[4]*e+s[8]*o+s[12]*n,p[1]=s[1]*w+s[5]*e+s[9]*o+s[13]*n,p[2]=s[2]*w+s[6]*e+s[10]*o+s[14]*n,p[3]=s[3]*w+s[7]*e+s[11]*o+s[15]*n,p}function le(t,s,l){const p=l??new f(4);return de(t,p),q(p,s,p)}function r(t,s,l){const p=l??new f(4);return k(t)>s?le(t,s,p):ae(t,p)}function d(t,s,l){const p=l??new f(4);return ie(t,s,.5,p)}return{create:v,fromValues:z,set:_,ceil:S,floor:M,round:F,clamp:A,add:T,addScaled:B,subtract:j,sub:W,equalsApproximately:ne,equals:K,lerp:ie,lerpV:ce,max:fe,min:te,mulScalar:q,scale:O,divScalar:Z,inverse:$,invert:J,dot:Q,length:k,len:H,lengthSq:ee,lenSq:ve,distance:L,dist:N,distanceSq:R,distSq:me,normalize:de,negate:ye,copy:ae,clone:Te,multiply:C,mul:xe,divide:re,div:pe,zero:se,transformMat4:ue,setLength:le,truncate:r,midpoint:d}}const on=new Map;function Pn(f){let v=on.get(f);return v||(v=yn(f),on.set(f,v)),v}function Ze(f,v,z,_,S,M){return{mat3:gn(f),mat4:vn(v),quat:mn(z),vec2:cn(_),vec3:Ce(S),vec4:Pn(M)}}const{mat3:Cn,mat4:Ae,quat:jn,vec2:Zn,vec3:$n,vec4:Qn}=Ze(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Ze(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Ze(fn,Array,Array,Array,Array,Array);const Re=new ArrayBuffer(272),Le={texelSize:new Float32Array(Re,0,2),sphereSize:new Float32Array(Re,8,2),invProjectionMatrix:new Float32Array(Re,16,16),projectionMatrix:new Float32Array(Re,80,16),viewMatrix:new Float32Array(Re,144,16),invViewMatrix:new Float32Array(Re,208,16)};class Dn{constructor(v){b(this,"isDragging");b(this,"prevX");b(this,"prevY");b(this,"prevHoverX");b(this,"prevHoverY");b(this,"currentHoverX");b(this,"currentHoverY");b(this,"currentXtheta");b(this,"currentYtheta");b(this,"maxYTheta");b(this,"minYTheta");b(this,"sensitivity");b(this,"currentDistance");b(this,"maxDistance");b(this,"minDistance");b(this,"target");b(this,"fov");b(this,"zoomRate");b(this,"canvas");this.canvas=v,this.canvas.addEventListener("pointerdown",z=>{this.isDragging=document.getElementById("interaction").value==="rotate",this.canvas.setPointerCapture(z.pointerId),this.prevX=z.clientX,this.prevY=z.clientY}),this.canvas.addEventListener("wheel",z=>{z.preventDefault();var _=z.deltaY;this.currentDistance+=(_>0?1:-1)*this.zoomRate,this.currentDistance<this.minDistance&&(this.currentDistance=this.minDistance),this.currentDistance>this.maxDistance&&(this.currentDistance=this.maxDistance),this.recalculateView()}),this.canvas.addEventListener("pointermove",z=>{const _=this.canvas.getBoundingClientRect();if(this.currentHoverX=z.clientX-_.left,this.currentHoverY=z.clientY-_.top,this.isDragging){const S=this.prevX-z.clientX,M=this.prevY-z.clientY;this.currentXtheta+=this.sensitivity*S,this.currentYtheta+=this.sensitivity*M,this.currentYtheta>this.maxYTheta&&(this.currentYtheta=this.maxYTheta),this.currentYtheta<this.minYTheta&&(this.currentYtheta=this.minYTheta),this.prevX=z.clientX,this.prevY=z.clientY,this.recalculateView()}}),this.canvas.addEventListener("pointerup",()=>{this.isDragging&&(this.isDragging=!1)}),this.canvas.addEventListener("pointercancel",()=>{this.isDragging=!1}),this.canvas.addEventListener("pointerleave",()=>{this.prevHoverX=this.currentHoverX,this.prevHoverY=this.currentHoverY}),window.addEventListener("resize",()=>{this.fov&&this.updateProjection()})}updateProjection(){const v=Ae.perspective(this.fov,this.canvas.clientWidth/this.canvas.clientHeight,.1,300);Le.projectionMatrix.set(v),Le.invProjectionMatrix.set(Ae.inverse(v))}reset(v,z,_,S){this.isDragging=!1,this.prevX=0,this.prevY=0,this.currentHoverX=this.prevHoverX=0,this.currentHoverY=this.prevHoverY=0,this.currentXtheta=-Math.PI/2*1,this.currentYtheta=-Math.PI/12*.8,this.maxYTheta=-Math.PI/12*.8,this.minYTheta=-.99*Math.PI/2,this.sensitivity=.005,this.currentDistance=v,this.maxDistance=1.3*this.currentDistance,this.minDistance=.8*this.currentDistance,this.target=z,this.fov=_,this.zoomRate=S;const M=this.canvas.clientWidth/this.canvas.clientHeight,F=Ae.perspective(_,M,.1,300);Le.projectionMatrix.set(F),Le.invProjectionMatrix.set(Ae.inverse(F)),this.recalculateView()}recalculateView(){var v=Ae.identity();Ae.translate(v,this.target,v),Ae.rotateY(v,this.currentXtheta,v),Ae.rotateX(v,this.currentYtheta,v),Ae.translate(v,[0,0,this.currentDistance],v);var z=Ae.multiply(v,[0,0,0,1]);let _=this.target;const S=Ae.lookAt([z[0],z[1],z[2]],_,[0,1,0]);Le.viewMatrix.set(S),Le.invViewMatrix.set(Ae.inverse(S))}calcMouseVelocity(){if(this.isDragging)return[0,0];let[v,z]=this.calcPlaneCoord(this.currentHoverX,this.currentHoverY),[_,S]=this.calcPlaneCoord(this.prevHoverX,this.prevHoverY),M=v-_,F=z-S,A=4;return M>A&&(M=A),M<-A&&(M=-A),F>A&&(F=A),F<-A&&(F=-A),[M,F,0,0]}calcPlaneCoord(v,z){let _=v/this.canvas.clientWidth,S=z/this.canvas.clientHeight,M=2*_-1,F=(1-S)*2-1,A=[M*Math.tan(this.fov/2)*(this.canvas.clientWidth/this.canvas.clientHeight),F*Math.tan(this.fov/2),-1];return[A[0]*this.currentDistance,A[1]*this.currentDistance]}setNewPrevMouseCoord(){this.prevHoverX=this.currentHoverX,this.prevHoverY=this.currentHoverY}stepAngle(){this.currentXtheta+=.012,this.recalculateView()}}var Mn=`struct Cell {
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
}`,Bn=`struct Cell {
    vx: i32, 
    vy: i32, 
    vz: i32, 
    mass: i32, 
}
struct RenderUniforms {
    texelSize: vec2f, 
    sphereSize: f32, 
    invProjectionMatrix: mat4x4f, 
    projectionMatrix: mat4x4f, 
    viewMatrix: mat4x4f, 
    invViewMatrix: mat4x4f, 
}
struct MouseInfo {
    screenSize: vec2f, 
    mouseCoord : vec2f, 
    mouseVel : vec2f, 
    mouseRadius: f32, 
}

override fixedPointMultiplier: f32; 
override fixedPointMultiplierInverse: f32; 

@group(0) @binding(0) var<storage, read_write> cells: array<Cell>;
@group(0) @binding(1) var<uniform> realBoxSize: vec3f;
@group(0) @binding(2) var<uniform> initBoxSize: vec3f;
@group(0) @binding(3) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(4) var depthTexture: texture_2d<f32>;
@group(0) @binding(5) var<uniform> mouseInfo: MouseInfo; 
@group(0) @binding(6) var<uniform> dt: f32; 

fn encodeFixedPoint(floatingPoint: f32) -> i32 {
	return i32(floatingPoint * fixedPointMultiplier);
}
fn decodeFixedPoint(fixedPoint: i32) -> f32 {
	return f32(fixedPoint) * fixedPointMultiplierInverse;
}

fn computeViewPosFromUVDepth(tex_coord: vec2f, depth: f32) -> vec3f {
    var ndc: vec4f = vec4f(tex_coord.x * 2.0 - 1.0, 1.0 - 2.0 * tex_coord.y, 0.0, 1.0);
    ndc.z = -uniforms.projectionMatrix[2].z + uniforms.projectionMatrix[3].z / depth;
    ndc.w = 1.0;

    var eye_pos: vec4f = uniforms.invProjectionMatrix * ndc;

    return eye_pos.xyz / eye_pos.w;
}

fn getViewPosFromTexCoord(tex_coord: vec2f, iuv: vec2f) -> vec3f {
    var depth: f32 = abs(textureLoad(depthTexture, vec2u(iuv), 0).x);
    return computeViewPosFromUVDepth(tex_coord, depth);
}

@compute @workgroup_size(64)
fn updateGrid(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < arrayLength(&cells)) { 
        let uv: vec2f = mouseInfo.mouseCoord;
        let iuv = uv * mouseInfo.screenSize;
        let depth: f32 = abs(textureLoad(depthTexture, vec2u(iuv), 0).x);
        var mouseCellIndex: u32 = 1000000000; 
        var cellSquareDistToMouse: f32 = 1e9;
        var forceDir = vec3f(0.);

        if (depth < 1e4) {
            let mouseViewPos = getViewPosFromTexCoord(uv, iuv);
            let mouseWorldPos = uniforms.invViewMatrix * vec4f(mouseViewPos, 1.); 
            let mouseCellPos: vec3i = vec3i(floor(mouseWorldPos).xyz);
            mouseCellIndex =    u32(mouseCellPos.x) * u32(initBoxSize.y) * u32(initBoxSize.z) + 
                                u32(mouseCellPos.y) * u32(initBoxSize.z) + 
                                u32(mouseCellPos.z);
            let center = realBoxSize / 2;
            forceDir = select(vec3f(0.), (uniforms.invViewMatrix * vec4f(mouseInfo.mouseVel, 0.0, 0)).xyz, dot(mouseInfo.mouseVel, mouseInfo.mouseVel) > 0.);
            var x: f32 = f32(i32(id.x) / i32(initBoxSize.z) / i32(initBoxSize.y));
            var y: f32 = f32((i32(id.x) / i32(initBoxSize.z)) % i32(initBoxSize.y));
            var z: f32 = f32(i32(id.x) % i32(initBoxSize.z));
            let cellPos = vec3f(x, y, z);
            let diff = floor(mouseWorldPos).xyz - cellPos;
            cellSquareDistToMouse = dot(diff, diff);
        }

        let dt = dt;
        let r = mouseInfo.mouseRadius;

        if (cells[id.x].mass > 0) { 
            var floatV: vec3f = vec3f(
                decodeFixedPoint(cells[id.x].vx), 
                decodeFixedPoint(cells[id.x].vy), 
                decodeFixedPoint(cells[id.x].vz)
            );
            floatV /= decodeFixedPoint(cells[id.x].mass);

            let strength = smoothstep(r*r, 0., cellSquareDistToMouse) * 0.2;   
            cells[id.x].vx = encodeFixedPoint(floatV.x + strength * forceDir.x); 
            cells[id.x].vy = encodeFixedPoint(floatV.y + strength * forceDir.y - 0.40 * dt); 
            cells[id.x].vz = encodeFixedPoint(floatV.z + strength * forceDir.z); 

            var x: i32 = i32(id.x) / i32(initBoxSize.z) / i32(initBoxSize.y);
            var y: i32 = (i32(id.x) / i32(initBoxSize.z)) % i32(initBoxSize.y);
            var z: i32 = i32(id.x) % i32(initBoxSize.z);
            if (x < 2 || x > i32(ceil(realBoxSize.x) - 3)) { cells[id.x].vx = 0; } 
            if (y < 2 || y > i32(ceil(realBoxSize.y) - 3)) { cells[id.x].vy = 0; }
            if (z < 2 || z > i32(ceil(realBoxSize.z) - 3)) { cells[id.x].vz = 0; }
        }
    }
}`,Tn=`struct Particle {
    position: vec3f, 
    v: vec3f, 
    C: mat3x3f, 
}
struct Cell {
    vx: i32, 
    vy: i32, 
    vz: i32, 
    mass: i32, 
}

override fixedPointMultiplierInverse: f32; 

@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;
@group(0) @binding(1) var<storage, read> cells: array<Cell>;
@group(0) @binding(2) var<uniform> realBoxSize: vec3f;
@group(0) @binding(3) var<uniform> initBoxSize: vec3f;
@group(0) @binding(4) var<uniform> numParticles: u32;
@group(0) @binding(5) var<uniform> dt: f32;

fn decodeFixedPoint(fixedPoint: i32) -> f32 {
	return f32(fixedPoint) * fixedPointMultiplierInverse;
}

@compute @workgroup_size(64)
fn g2p(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) {
        particles[id.x].v = vec3f(0.);
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];
        let cellIndex: vec3f = floor(particle.position);
        let cellDiff: vec3f = particle.position - (cellIndex + 0.5f);
        weights[0] = 0.5f * (0.5f - cellDiff) * (0.5f - cellDiff);
        weights[1] = 0.75f - cellDiff * cellDiff;
        weights[2] = 0.5f * (0.5f + cellDiff) * (0.5f + cellDiff);

        var B: mat3x3f = mat3x3f(vec3f(0.), vec3f(0.), vec3f(0.));
        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cellX: vec3f = vec3f(
                        cellIndex.x + f32(gx) - 1., 
                        cellIndex.y + f32(gy) - 1.,
                        cellIndex.z + f32(gz) - 1.  
                    );
                    let cellDist: vec3f = (cellX + 0.5f) - particle.position;
                    let cellIndex1D: i32 = 
                        i32(cellX.x) * i32(initBoxSize.y) * i32(initBoxSize.z) + 
                        i32(cellX.y) * i32(initBoxSize.z) + 
                        i32(cellX.z);
                    let weighted_velocity: vec3f = vec3f(
                        decodeFixedPoint(cells[cellIndex1D].vx), 
                        decodeFixedPoint(cells[cellIndex1D].vy), 
                        decodeFixedPoint(cells[cellIndex1D].vz)
                    ) * weight;
                    let term: mat3x3f = mat3x3f(
                        weighted_velocity * cellDist.x, 
                        weighted_velocity * cellDist.y, 
                        weighted_velocity * cellDist.z
                    );

                    B += term;

                    particles[id.x].v += weighted_velocity;
                }
            }
        }

        particles[id.x].C = B * 4.0f;
        particles[id.x].position += particles[id.x].v * dt;
        particles[id.x].position = vec3f(
            clamp(particles[id.x].position.x, 1., realBoxSize.x - 2.), 
            clamp(particles[id.x].position.y, 1., realBoxSize.y - 2.), 
            clamp(particles[id.x].position.z, 1., realBoxSize.z - 2.)
        );

        let center = vec3f(realBoxSize.x / 2, realBoxSize.y / 2, realBoxSize.z / 2);
        let dist = center - particles[id.x].position;
        let dirToOrigin = normalize(dist);
        var rForce = vec3f(0);

        
        let k = 2.0;
        let wallStiffness = 1.0;
        let x_n: vec3f = particles[id.x].position + particles[id.x].v * dt * k;
        let wallMin: vec3f = vec3f(3.);
        let wallMax: vec3f = realBoxSize - 4.;
        if (x_n.x < wallMin.x) { particles[id.x].v.x += wallStiffness * (wallMin.x - x_n.x); }
        if (x_n.x > wallMax.x) { particles[id.x].v.x += wallStiffness * (wallMax.x - x_n.x); }
        if (x_n.y < wallMin.y) { particles[id.x].v.y += wallStiffness * (wallMin.y - x_n.y); }
        if (x_n.y > wallMax.y) { particles[id.x].v.y += wallStiffness * (wallMax.y - x_n.y); }
        if (x_n.z < wallMin.z) { particles[id.x].v.z += wallStiffness * (wallMin.z - x_n.z); }
        if (x_n.z > wallMax.z) { particles[id.x].v.z += wallStiffness * (wallMax.z - x_n.z); }
    }
}`,Sn=`struct Particle {
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
}`,Gn=`@group(0) @binding(0) var<storage, read> particles: array<Particle>;
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
}`;const He=80;class In{constructor(v,z,_,S,M,F,A,T,B,j,W,ne,K,ie){b(this,"cellStructSize",16);b(this,"realBoxSizeBuffer");b(this,"numParticlesBuffer");b(this,"densityBuffer");b(this,"mouseInfoUniformBuffer");b(this,"sphereRadiusBuffer");b(this,"initBoxSizeBuffer");b(this,"numParticles",0);b(this,"gridCount",0);b(this,"maxGridCount",0);b(this,"maxParticleCount",0);b(this,"densityGridCount",0);b(this,"clearGridPipeline");b(this,"clearDensityGridPipeline");b(this,"castDensityGridPipeline");b(this,"p2g1Pipeline");b(this,"p2g2Pipeline");b(this,"p2gDensityPipeline");b(this,"updateGridPipeline");b(this,"g2pPipeline");b(this,"copyPositionPipeline");b(this,"clearGridBindGroup");b(this,"clearDensityGridBindGroup");b(this,"castDensityGridBindGroup");b(this,"p2g1BindGroup");b(this,"p2g2BindGroup");b(this,"p2gDensityBindGroup");b(this,"updateGridBindGroup");b(this,"g2pBindGroup");b(this,"copyPositionBindGroup");b(this,"particleBuffer");b(this,"dtBuffer");b(this,"densityGridBuffer");b(this,"device");b(this,"renderDiameter");b(this,"frameCount");b(this,"spawned");b(this,"mouseInfoValues",new ArrayBuffer(32));b(this,"mouseInfoViews",{screenSize:new Float32Array(this.mouseInfoValues,0,2),mouseCoord:new Float32Array(this.mouseInfoValues,8,2),mouseVel:new Float32Array(this.mouseInfoValues,16,2),mouseRadius:new Float32Array(this.mouseInfoValues,24,1)});b(this,"restDensity");this.device=T,this.renderDiameter=ie,this.frameCount=0,this.spawned=!1,this.numParticles=0,this.maxGridCount=W,this.maxParticleCount=ne,this.initBoxSizeBuffer=F;const ce=T.createShaderModule({code:Mn}),fe=T.createShaderModule({code:Vn}),te=T.createShaderModule({code:_n}),q=T.createShaderModule({code:zn}),O=T.createShaderModule({code:bn}),Z=T.createShaderModule({code:Gn}),$=T.createShaderModule({code:Bn}),J=T.createShaderModule({code:Tn}),Q=T.createShaderModule({code:Sn});this.restDensity=3;const k={stiffness:50,restDensity:this.restDensity,dynamicViscosity:.1,fixedPointMultiplier:K,fixedPointMultiplierInverse:1/K};this.clearGridPipeline=T.createComputePipeline({label:"clear grid pipeline",layout:"auto",compute:{module:ce}}),this.clearDensityGridPipeline=T.createComputePipeline({label:"clear density grid pipeline",layout:"auto",compute:{module:fe}}),this.castDensityGridPipeline=T.createComputePipeline({label:"cast density grid pipeline",layout:"auto",compute:{module:te,constants:{fixedPointMultiplierInverse:k.fixedPointMultiplierInverse}}}),this.p2g1Pipeline=T.createComputePipeline({label:"p2g 1 pipeline",layout:"auto",compute:{module:q,constants:{fixedPointMultiplier:k.fixedPointMultiplier}}}),this.p2g2Pipeline=T.createComputePipeline({label:"p2g 2 pipeline",layout:"auto",compute:{module:O,constants:{fixedPointMultiplier:k.fixedPointMultiplier,fixedPointMultiplierInverse:k.fixedPointMultiplierInverse,stiffness:k.stiffness,restDensity:k.restDensity,dynamicViscosity:k.dynamicViscosity}}}),this.p2gDensityPipeline=T.createComputePipeline({label:"p2g density pipeline",layout:"auto",compute:{module:Z,constants:{densityFixedPointMultiplier:k.fixedPointMultiplier}}}),this.updateGridPipeline=T.createComputePipeline({label:"update grid pipeline",layout:"auto",compute:{module:$,constants:{fixedPointMultiplier:k.fixedPointMultiplier,fixedPointMultiplierInverse:k.fixedPointMultiplierInverse}}}),this.g2pPipeline=T.createComputePipeline({label:"g2p pipeline",layout:"auto",compute:{module:J,constants:{fixedPointMultiplierInverse:k.fixedPointMultiplierInverse}}}),this.copyPositionPipeline=T.createComputePipeline({label:"copy position pipeline",layout:"auto",compute:{module:Q}});const H=T.createBuffer({label:"cells buffer",size:this.cellStructSize*W,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});this.densityBuffer=T.createBuffer({label:"density buffer",size:4*ne,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.realBoxSizeBuffer=T.createBuffer({label:"real box size buffer",size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.numParticlesBuffer=T.createBuffer({label:"number of particles buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.mouseInfoUniformBuffer=T.createBuffer({label:"mouse info buffer",size:this.mouseInfoValues.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.sphereRadiusBuffer=T.createBuffer({label:"sphere radius buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dtBuffer=T.createBuffer({label:"dt buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.mouseInfoViews.screenSize.set([j.width,j.height]),this.device.queue.writeBuffer(this.mouseInfoUniformBuffer,0,this.mouseInfoValues),this.clearGridBindGroup=T.createBindGroup({layout:this.clearGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:H}}]}),this.clearDensityGridBindGroup=T.createBindGroup({layout:this.clearDensityGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:S}},{binding:1,resource:{buffer:M}}]}),this.castDensityGridBindGroup=T.createBindGroup({layout:this.castDensityGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:S}},{binding:1,resource:{buffer:M}}]}),this.p2g1BindGroup=T.createBindGroup({layout:this.p2g1Pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:F}},{binding:3,resource:{buffer:this.numParticlesBuffer}}]}),this.p2g2BindGroup=T.createBindGroup({layout:this.p2g2Pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:F}},{binding:3,resource:{buffer:this.numParticlesBuffer}},{binding:4,resource:{buffer:this.densityBuffer}},{binding:5,resource:{buffer:this.dtBuffer}}]}),this.p2gDensityBindGroup=T.createBindGroup({layout:this.p2gDensityPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:this.densityBuffer}},{binding:2,resource:{buffer:this.numParticlesBuffer}},{binding:3,resource:{buffer:S}},{binding:4,resource:{buffer:A}}]}),this.updateGridBindGroup=T.createBindGroup({layout:this.updateGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:H}},{binding:1,resource:{buffer:this.realBoxSizeBuffer}},{binding:2,resource:{buffer:F}},{binding:3,resource:{buffer:_}},{binding:4,resource:B},{binding:5,resource:{buffer:this.mouseInfoUniformBuffer}},{binding:6,resource:{buffer:this.dtBuffer}}]}),this.g2pBindGroup=T.createBindGroup({layout:this.g2pPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:this.realBoxSizeBuffer}},{binding:3,resource:{buffer:F}},{binding:4,resource:{buffer:this.numParticlesBuffer}},{binding:5,resource:{buffer:this.dtBuffer}}]}),this.copyPositionBindGroup=T.createBindGroup({layout:this.copyPositionPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:this.numParticlesBuffer}}]}),this.particleBuffer=v,this.densityGridBuffer=S}initDambreak(v,z){let _=new ArrayBuffer(He*this.maxParticleCount);const S=.9;this.numParticles=0,v[0]/2,v[0]/2,v[2]/2;for(let T=3;T<v[1]*.8&&this.numParticles<z;T+=S)for(let B=v[0]*.25;B<v[0]-4&&this.numParticles<z;B+=S)for(let j=3;j<v[2]/2&&this.numParticles<z;j+=S){const W=He*this.numParticles,ne={position:new Float32Array(_,W+0,3),v:new Float32Array(_,W+16,3),C:new Float32Array(_,W+32,12)},K=.5*Math.random();ne.position.set([B+K,T+K,j+K]),this.numParticles++}console.log(this.numParticles),this.numParticles<z&&console.log("warning: actual number of particles is smaller than the specified number. make bounding box larger.");let M=new ArrayBuffer(He*this.numParticles);const F=new Uint8Array(_),A=new Uint8Array(M);return A.set(F.subarray(0,A.length)),M}reset(v,z){if(this.gridCount=Math.ceil(v[0])*Math.ceil(v[1])*Math.ceil(v[2]),this.gridCount>this.maxGridCount)throw new Error("gridCount should be equal to or less than maxGridCount");this.densityGridCount=this.gridCount;const _=new Float32Array(v);this.device.queue.writeBuffer(this.initBoxSizeBuffer,0,_),this.frameCount=0;let S=this.initDambreak(v,z);this.device.queue.writeBuffer(this.particleBuffer,0,S),this.changeBoxSize(v),this.changeNumParticles(this.numParticles)}execute(v,z,_,S,M,F,A,T){const B=v.beginComputePass();this.mouseInfoViews.mouseCoord.set([z[0],z[1]]),this.mouseInfoViews.mouseVel.set([_[0],_[1]]),this.mouseInfoViews.mouseRadius.set([S]),this.device.queue.writeBuffer(this.mouseInfoUniformBuffer,0,this.mouseInfoValues);const j=new Float32Array([F]);if(this.device.queue.writeBuffer(this.dtBuffer,0,j),M){if(A)for(let ne=0;ne<1;ne++)B.setBindGroup(0,this.clearGridBindGroup),B.setPipeline(this.clearGridPipeline),B.dispatchWorkgroups(Math.ceil(this.gridCount/64)),B.setBindGroup(0,this.p2g1BindGroup),B.setPipeline(this.p2g1Pipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64)),B.setBindGroup(0,this.p2g2BindGroup),B.setPipeline(this.p2g2Pipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64)),B.setBindGroup(0,this.updateGridBindGroup),B.setPipeline(this.updateGridPipeline),B.dispatchWorkgroups(Math.ceil(this.gridCount/64)),B.setBindGroup(0,this.g2pBindGroup),B.setPipeline(this.g2pPipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64));let W=T[0]*T[1]*T[2];B.setBindGroup(0,this.clearDensityGridBindGroup),B.setPipeline(this.clearDensityGridPipeline),B.dispatchWorkgroups(Math.ceil(W/2/64)),B.setBindGroup(0,this.p2gDensityBindGroup),B.setPipeline(this.p2gDensityPipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64)),B.setBindGroup(0,this.castDensityGridBindGroup),B.setPipeline(this.castDensityGridPipeline),B.dispatchWorkgroups(Math.ceil(W/2/64)),B.setBindGroup(0,this.copyPositionBindGroup),B.setPipeline(this.copyPositionPipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64))}else if(A){for(let W=0;W<1;W++)B.setBindGroup(0,this.clearGridBindGroup),B.setPipeline(this.clearGridPipeline),B.dispatchWorkgroups(Math.ceil(this.gridCount/64)),B.setBindGroup(0,this.p2g1BindGroup),B.setPipeline(this.p2g1Pipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64)),B.setBindGroup(0,this.p2g2BindGroup),B.setPipeline(this.p2g2Pipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64)),B.setBindGroup(0,this.updateGridBindGroup),B.setPipeline(this.updateGridPipeline),B.dispatchWorkgroups(Math.ceil(this.gridCount/64)),B.setBindGroup(0,this.g2pBindGroup),B.setPipeline(this.g2pPipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64));B.setBindGroup(0,this.copyPositionBindGroup),B.setPipeline(this.copyPositionPipeline),B.dispatchWorkgroups(Math.ceil(this.numParticles/64))}B.end(),this.frameCount++}changeBoxSize(v){const z=new Float32Array(v);this.device.queue.writeBuffer(this.realBoxSizeBuffer,0,z)}changeNumParticles(v){const z=new Int32Array([v]);this.device.queue.writeBuffer(this.numParticlesBuffer,0,z),this.numParticles=v}}var Fn=`@group(0) @binding(1) var depthTexture: texture_2d<f32>;
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
}`,Un=`@group(0) @binding(0) var textureSampler: sampler;
@group(0) @binding(1) var depthTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(3) var thicknessTexture: texture_2d<f32>;
@group(0) @binding(4) var envmapTexture: texture_cube<f32>;
@group(0) @binding(5) var bgTexture: texture_2d<f32>;
@group(0) @binding(6) var<uniform> diffuseColor: vec3f;
@group(0) @binding(7) var<uniform> density: f32;

struct RenderUniforms {
    texelSize: vec2f, 
    sphereSize: f32, 
    invProjectionMatrix: mat4x4f, 
    projectionMatrix: mat4x4f, 
    viewMatrix: mat4x4f, 
    invViewMatrix: mat4x4f, 
}

struct FragmentInput {
    @location(0) uv: vec2f, 
    @location(1) iuv: vec2f, 
}

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
fn invGamma(v: vec3f) -> vec3f {
    return pow(v, vec3(2.2));
}

fn calcReflactedTexCoord(surfacePosView: vec3f, refractionDirView: vec3f, thickness: f32) -> vec2f {
    let refractionStrength = 3.;
    let exitPosView: vec3f = surfacePosView + refractionDirView * thickness * refractionStrength;
    let exitPosClip: vec4f = uniforms.projectionMatrix * vec4f(exitPosView, 1.);
    let exitPosNdc: vec3f = exitPosClip.xyz / exitPosClip.w;
    return clamp(vec2f((1. + exitPosNdc.x) / 2., (1. - exitPosNdc.y) / 2.), vec2f(0.), vec2f(1.));
}

fn floorColor(surfacePos: vec3f, refractDir: vec3f) -> vec4f {
    let t = -surfacePos.y / refractDir.y;
    let rayHitPos = surfacePos + t * refractDir;

    let gridSize = 16.0;
    let lineThickness = 0.2; 

    let isLineX = abs(fract(rayHitPos.x / gridSize - 0.5) - 0.5) < lineThickness / gridSize;
    let isLineZ = abs(fract(rayHitPos.z / gridSize - 0.5) - 0.5) < lineThickness / gridSize;
    let isLine = isLineX || isLineZ;

    let boardColor = vec3(0.6); 
    let lineColor = vec3(0.5); 
    let finalColor = select(boardColor, lineColor, isLine);

    return vec4f(finalColor, f32(abs(rayHitPos.x) < 3e2 && abs(rayHitPos.z) < 3e2));
}

@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    let depth: f32 = abs(textureLoad(depthTexture, vec2u(input.iuv), 0).r);
    var thickness = textureSample(thicknessTexture, textureSampler, input.uv).r;

    if (depth >= 1e4) {
        let bgColor: vec3f = textureSampleLevel(bgTexture, textureSampler, input.uv, 0.0).rgb;
        return vec4f(bgColor, 0.);
    }

    let surfacePosView = computeViewPosFromUVDepth(input.uv, depth);
    let surfacePosWorld = (uniforms.invViewMatrix * vec4f(surfacePosView, 1.0)).xyz;
    if (surfacePosWorld.y < 2.0) {
        let bgColor: vec3f = textureSampleLevel(bgTexture, textureSampler, input.uv, 0.0).rgb;
        return vec4f(bgColor, 0.);
    }
    var ddx: vec3f = getViewPosFromTexCoord(input.uv + vec2f(uniforms.texelSize.x, 0.), input.iuv + vec2f(1.0, 0.0)) - surfacePosView; 
    var ddy: vec3f = getViewPosFromTexCoord(input.uv + vec2f(0., uniforms.texelSize.y), input.iuv + vec2f(0.0, 1.0)) - surfacePosView; 
    let ddx2: vec3f = surfacePosView - getViewPosFromTexCoord(input.uv + vec2f(-uniforms.texelSize.x, 0.), input.iuv + vec2f(-1.0, 0.0));
    let ddy2: vec3f = surfacePosView - getViewPosFromTexCoord(input.uv + vec2f(0., -uniforms.texelSize.y), input.iuv + vec2f(0.0, -1.0));
    let maxDeltaZ = max(max(abs(ddx.z), abs(ddy.z)), max(abs(ddx2.z), abs(ddy2.z)));

    ddx = select(ddx, ddx2, abs(ddx.z) > abs(ddx2.z));
    ddy = select(ddy, ddy2, abs(ddy.z) > abs(ddy2.z));

    var normal: vec3f = -normalize(cross(ddx, ddy)); 
    var rayDirView = normalize(surfacePosView);
    var lightDirView = normalize((uniforms.viewMatrix * vec4f(0.2, 0.0, 1, 0.)).xyz);
    var H: vec3f        = normalize(lightDirView - rayDirView);
    var specular: f32   = pow(max(0.0, dot(H, normal)), 300.);
    var diffuse: f32  = max(0.0, dot(lightDirView, normal)) * 1.0;

    var transmittance: vec3f = exp(-density * 10 * thickness * (1.0 - diffuseColor)); 
    var refractionDirView: vec3f = normalize(refract(rayDirView, normal, 1.0 / 1.333));
    var refractionDirWorld: vec3f = normalize((uniforms.invViewMatrix * vec4f(refractionDirView, 0.)).xyz);
    var transmitted = pow(textureSampleLevel(envmapTexture, textureSampler, refractionDirWorld, 0.0).rgb, vec3f(2.2));
    if (refractionDirWorld.y < 0.) {
        let surfacePosWorld = (uniforms.invViewMatrix * vec4f(surfacePosView, 1.)).xyz;
        let floor = floorColor(surfacePosWorld, refractionDirWorld);
        transmitted = select(transmitted, invGamma(floor.rgb), floor.w > 0.5);
    }
    var refractionColor: vec3f = transmitted * transmittance;

    let F0 = 0.02;
    var fresnelBiased: f32 = clamp(F0 + (1.0 - F0) * pow(1.0 - dot(normal, -rayDirView), 5.0) + 0.0, 0., 1.);
    var fresnel: f32 = clamp(F0 + (1.0 - F0) * pow(1.0 - dot(normal, -rayDirView), 5.0), 0., 1.);

    var reflectionDir: vec3f = reflect(rayDirView, normal);
    var reflectionDirWorld: vec3f = (uniforms.invViewMatrix * vec4f(reflectionDir, 0.0)).xyz;
    var reflectionColor: vec3f = invGamma(select(textureSampleLevel(envmapTexture, textureSampler, reflectionDirWorld, 0.).rgb, vec3f(0.75), reflectionDirWorld.y < 0.)); 
    fresnel = select(fresnel, 0.1 * fresnel, reflectionDirWorld.y < 0.);
    fresnelBiased = select(fresnelBiased, 0.1 * fresnelBiased, reflectionDirWorld.y < 0.);

    var finalColor = 0.0     * specular + mix(refractionColor, reflectionColor, fresnel) + 0. * fresnel;

    return vec4f(gamma(finalColor), 1.0);
}`,An=`struct VertexOutput {
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
}`,Rn=`struct RenderUniforms {
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
}`,Ln=`@group(0) @binding(0) var textureSampler: sampler;
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
}`,En=`struct VertexOutput {
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
}`,Yn=`@group(0) @binding(0) var envmapTexture: texture_cube<f32>;
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(2) var textureSampler: sampler;

struct RenderUniforms {
    texelSize: vec2f, 
    sphereSize: f32, 
    invProjectionMatrix: mat4x4f, 
    projectionMatrix: mat4x4f, 
    viewMatrix: mat4x4f, 
    invViewMatrix: mat4x4f, 
}

struct FragmentInput {
    @location(0) uv: vec2f,  
    @location(1) iuv: vec2f
}

fn computeViewPosFromUVDepth(texCoord: vec2f, depth: f32) -> vec3f {
    var ndc: vec4f = vec4f(texCoord.x * 2.0 - 1.0, 1.0 - 2.0 * texCoord.y, 0.0, 1.0);
    ndc.z = -uniforms.projectionMatrix[2].z + uniforms.projectionMatrix[3].z / depth;
    ndc.w = 1.0;

    var eye_pos: vec4f = uniforms.invProjectionMatrix * ndc;

    return eye_pos.xyz / eye_pos.w;
}

fn getCameraPosition() -> vec3f {
    return (uniforms.invViewMatrix * vec4(0, 0, 0, 1)).xyz;
}

fn rayPlaneIntersection(rayOrigin: vec3f, rayDir: vec3f) -> vec3f {
    
    
    

    let t = -rayOrigin.y / rayDir.y;
    return rayOrigin + t * rayDir;
}

@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    let cameraPos = getCameraPosition();
    let rayDirWorld = normalize((uniforms.invViewMatrix * vec4f(computeViewPosFromUVDepth(input.uv, 1.0), 0.)).xyz); 
    let bgColor = textureSampleLevel(envmapTexture, textureSampler, rayDirWorld, 0.).rgb;
    if (abs(rayDirWorld.y) < 1e-6) { 
        return vec4f(bgColor, 1.);
    } 

    let t = -cameraPos.y / rayDirWorld.y;
    if (t < 0) {
        return vec4f(bgColor, 1.);
    }
    let rayHitPos = cameraPos + t * rayDirWorld;
    let gridSize = 16.0;
    let lineThickness = 0.2; 

    let isLineX = abs(fract(rayHitPos.x / gridSize - 0.5) - 0.5) < lineThickness / gridSize;
    let isLineZ = abs(fract(rayHitPos.z / gridSize - 0.5) - 0.5) < lineThickness / gridSize;
    let isLine = isLineX || isLineZ;

    let boardColor = vec3(0.6); 
    let lineColor = vec3(0.5); 
    var finalColor = select(boardColor, lineColor, isLine);
    finalColor = select(bgColor, finalColor, abs(rayHitPos.x) < 3e2 && abs(rayHitPos.z) < 3e2);
    return vec4f(finalColor, 1.);
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
}`;class Xn{constructor(v,z,_,S,M,F,A,T,B,j,W,ne,K){b(this,"depthFilter1DPipeline");b(this,"depthFilter2DPipeline");b(this,"thicknessMapPipeline");b(this,"thicknessFilterPipeline");b(this,"fluidPipeline");b(this,"depthMapPipeline");b(this,"spherePipeline");b(this,"bgColorPipeline");b(this,"densityRaymarchPipeline");b(this,"depthMapTextureView");b(this,"tmpDepthMapTextureView");b(this,"thicknessTextureView");b(this,"tmpThicknessTextureView");b(this,"depthTestTextureView");b(this,"tmpOutputTextureView");b(this,"depthFilter1DBindGroups");b(this,"depthFilter2DBindGroups");b(this,"thicknessMapBindGroup");b(this,"thicknessFilterBindGroups");b(this,"fluidBindGroup");b(this,"depthMapBindGroup");b(this,"sphereBindGroup");b(this,"bgColorBindGroup");b(this,"densityRaymarchBindGroup");b(this,"diffuseColorBuffer");b(this,"colorDensityBuffer");b(this,"densityGridSizeBuffer");b(this,"device");this.device=M;const ie=50,ce=2*W,fe=12,te=B.width/2,q=B.height/2,O={screenHeight:B.height,screenWidth:B.width},Z={maxFilterSize:ie,projectedParticleConstant:fe*ce*.05*(B.height/2)/Math.tan(ne/2)},$={thicknessTextureWidth:te,thicknessTextureHeight:q},J=M.createSampler({magFilter:"linear",minFilter:"linear"}),Q=M.createShaderModule({code:An}),k=M.createShaderModule({code:Fn}),H=M.createShaderModule({code:Un}),ee=M.createShaderModule({code:En}),ve=M.createShaderModule({code:On}),L=M.createShaderModule({code:Rn}),N=M.createShaderModule({code:Ln}),R=M.createShaderModule({code:Yn}),me=M.createShaderModule({code:kn});this.depthMapPipeline=M.createRenderPipeline({label:"depthMap pipeline",layout:"auto",vertex:{module:ee},fragment:{module:ee,targets:[{format:"r32float"}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth32float"}}),this.spherePipeline=M.createRenderPipeline({label:"sphere pipeline",layout:"auto",vertex:{module:ve},fragment:{module:ve,targets:[{format:"r32float"},{format:j}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth32float"}}),this.depthFilter1DPipeline=M.createRenderPipeline({label:"depth filter pipeline (1d)",layout:"auto",vertex:{module:Q,constants:O},fragment:{module:k,constants:{...Z,blur2D:0},targets:[{format:"r32float"}]},primitive:{topology:"triangle-list"}}),this.depthFilter2DPipeline=M.createRenderPipeline({label:"depth filter pipeline (2d)",layout:"auto",vertex:{module:Q,constants:O},fragment:{module:k,constants:{...Z,blur2D:1},targets:[{format:"r32float"}]},primitive:{topology:"triangle-list"}}),this.thicknessMapPipeline=M.createRenderPipeline({label:"thickness map pipeline",layout:"auto",vertex:{module:L},fragment:{module:L,targets:[{format:"r16float",writeMask:GPUColorWrite.RED,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"}}),this.thicknessFilterPipeline=M.createRenderPipeline({label:"thickness filter pipeline",layout:"auto",vertex:{module:Q,constants:O},fragment:{module:N,constants:$,targets:[{format:"r16float"}]},primitive:{topology:"triangle-list"}}),this.fluidPipeline=M.createRenderPipeline({label:"fluid rendering pipeline",layout:"auto",vertex:{module:Q,constants:O},fragment:{module:H,targets:[{format:j}]},primitive:{topology:"triangle-list"}}),this.bgColorPipeline=M.createRenderPipeline({label:"bgColor pipeline",layout:"auto",vertex:{module:Q,constants:O},fragment:{module:R,targets:[{format:j}]},primitive:{topology:"triangle-list"}}),this.densityRaymarchPipeline=M.createRenderPipeline({label:"density raymarch pipeline",layout:"auto",vertex:{module:Q,constants:O},fragment:{module:me,targets:[{format:j}]}});const de=M.createTexture({label:"temporary depth map texture",size:[B.width,B.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r32float"}),ye=M.createTexture({label:"thickness map texture",size:[te,q,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r16float"}),ae=M.createTexture({label:"temporary thickness map texture",size:[te,q,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r16float"}),Te=M.createTexture({size:[B.width,B.height,1],format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),C=M.createTexture({size:[B.width,B.height,1],format:j,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING});this.depthMapTextureView=F,this.tmpDepthMapTextureView=de.createView(),this.thicknessTextureView=ye.createView(),this.tmpThicknessTextureView=ae.createView(),this.depthTestTextureView=Te.createView(),this.tmpOutputTextureView=C.createView();const xe=M.createBuffer({label:"filter uniform buffer",size:8,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),re=M.createBuffer({label:"filter uniform buffer",size:8,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),pe=M.createBuffer({label:"thickness filter size buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.diffuseColorBuffer=M.createBuffer({label:"diffuse color buffer",size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.colorDensityBuffer=M.createBuffer({label:"color density buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.densityGridSizeBuffer=_;let se=new Float32Array([1,0]),ue=new Float32Array([0,1]),le=new Int32Array([15]);M.queue.writeBuffer(xe,0,se),M.queue.writeBuffer(re,0,ue),M.queue.writeBuffer(pe,0,le),this.depthFilter1DBindGroups=[],this.depthFilter1DBindGroups=[M.createBindGroup({label:"filterX bind group",layout:this.depthFilter1DPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.depthMapTextureView},{binding:2,resource:{buffer:xe}}]}),M.createBindGroup({label:"filterY bind group",layout:this.depthFilter1DPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.tmpDepthMapTextureView},{binding:2,resource:{buffer:re}}]})],this.depthFilter2DBindGroups=[M.createBindGroup({label:"filterX bind group",layout:this.depthFilter2DPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.depthMapTextureView},{binding:2,resource:{buffer:xe}}]}),M.createBindGroup({label:"filterY bind group",layout:this.depthFilter2DPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.tmpDepthMapTextureView},{binding:2,resource:{buffer:re}}]})],this.thicknessMapBindGroup=M.createBindGroup({label:"thickness map bind group",layout:this.thicknessMapPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:v}}]}),this.thicknessFilterBindGroups=[],this.thicknessFilterBindGroups=[M.createBindGroup({label:"thickness filterX bind group",layout:this.thicknessFilterPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:J},{binding:1,resource:this.thicknessTextureView},{binding:2,resource:{buffer:xe}},{binding:3,resource:{buffer:pe}}]}),M.createBindGroup({label:"thickness filterY bind group",layout:this.thicknessFilterPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:J},{binding:1,resource:this.tmpThicknessTextureView},{binding:2,resource:{buffer:re}},{binding:3,resource:{buffer:pe}}]})],this.fluidBindGroup=M.createBindGroup({label:"fluid bind group",layout:this.fluidPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:J},{binding:1,resource:this.depthMapTextureView},{binding:2,resource:{buffer:v}},{binding:3,resource:this.thicknessTextureView},{binding:4,resource:A},{binding:5,resource:this.tmpOutputTextureView},{binding:6,resource:{buffer:this.diffuseColorBuffer}},{binding:7,resource:{buffer:this.colorDensityBuffer}}]}),this.depthMapBindGroup=M.createBindGroup({label:"depthMap bind group",layout:this.depthMapPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:v}}]}),this.bgColorBindGroup=M.createBindGroup({label:"bgColor bind group",layout:this.bgColorPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:A},{binding:1,resource:{buffer:v}},{binding:2,resource:J}]}),this.sphereBindGroup=M.createBindGroup({label:"sphere bind group",layout:this.spherePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:v}}]}),this.densityRaymarchBindGroup=M.createBindGroup({label:"density raymarch bind group",layout:this.densityRaymarchPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.depthMapTextureView},{binding:1,resource:T},{binding:2,resource:{buffer:v}},{binding:3,resource:{buffer:S}},{binding:4,resource:J},{binding:5,resource:this.tmpOutputTextureView},{binding:6,resource:{buffer:this.densityGridSizeBuffer}}]}),console.log(this.densityRaymarchPipeline.getBindGroupLayout(0))}execute(v,z,_,S,M,F){const A=new Float32Array(M),T=new Float32Array([F]);this.device.queue.writeBuffer(this.diffuseColorBuffer,0,A),this.device.queue.writeBuffer(this.colorDensityBuffer,0,T);const B=[{colorAttachments:[{view:this.tmpDepthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},{colorAttachments:[{view:this.depthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]}],j={colorAttachments:[{view:this.thicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},W=[{colorAttachments:[{view:this.tmpThicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},{colorAttachments:[{view:this.thicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]}],ne={colorAttachments:[{view:this.tmpOutputTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},K={colorAttachments:[{view:v.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},ie={colorAttachments:[{view:this.depthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.depthTestTextureView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},ce={colorAttachments:[{view:this.depthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"},{view:this.tmpOutputTextureView,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.depthTestTextureView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},fe={colorAttachments:[{view:v.getCurrentTexture().createView(),clearValue:{r:.7,g:.7,b:.75,a:1},loadOp:"clear",storeOp:"store"}]};if(S){const q=z.beginRenderPass(ne);q.setBindGroup(0,this.bgColorBindGroup),q.setPipeline(this.bgColorPipeline),q.draw(6),q.end();const O=z.beginRenderPass(ce);O.setBindGroup(0,this.sphereBindGroup),O.setPipeline(this.spherePipeline),O.draw(6,_),O.end();const Z=z.beginRenderPass(fe);Z.setBindGroup(0,this.densityRaymarchBindGroup),Z.setPipeline(this.densityRaymarchPipeline),Z.draw(6),Z.end()}else{const q=z.beginRenderPass(ie);q.setBindGroup(0,this.depthMapBindGroup),q.setPipeline(this.depthMapPipeline),q.draw(6,_),q.end();for(var te=0;te<2;te++){const k=z.beginRenderPass(B[0]);k.setBindGroup(0,this.depthFilter1DBindGroups[0]),k.setPipeline(this.depthFilter1DPipeline),k.draw(6),k.end();const H=z.beginRenderPass(B[1]);H.setBindGroup(0,this.depthFilter1DBindGroups[1]),H.setPipeline(this.depthFilter1DPipeline),H.draw(6),H.end()}const O=z.beginRenderPass(B[0]);O.setBindGroup(0,this.depthFilter2DBindGroups[0]),O.setPipeline(this.depthFilter2DPipeline),O.draw(6),O.end();const Z=z.beginRenderPass(B[1]);Z.setBindGroup(0,this.depthFilter2DBindGroups[1]),Z.setPipeline(this.depthFilter2DPipeline),Z.draw(6),Z.end();const $=z.beginRenderPass(j);$.setBindGroup(0,this.thicknessMapBindGroup),$.setPipeline(this.thicknessMapPipeline),$.draw(6,_),$.end();for(var te=0;te<1;te++){const H=z.beginRenderPass(W[0]);H.setBindGroup(0,this.thicknessFilterBindGroups[0]),H.setPipeline(this.thicknessFilterPipeline),H.draw(6),H.end();const ee=z.beginRenderPass(W[1]);ee.setBindGroup(0,this.thicknessFilterBindGroups[1]),ee.setPipeline(this.thicknessFilterPipeline),ee.draw(6),ee.end()}const J=z.beginRenderPass(ne);J.setBindGroup(0,this.bgColorBindGroup),J.setPipeline(this.bgColorPipeline),J.draw(6),J.end();const Q=z.beginRenderPass(K);Q.setBindGroup(0,this.fluidBindGroup),Q.setPipeline(this.fluidPipeline),Q.draw(6),Q.end()}}}let je=!1;function Ne(f){je=!0;const v=f instanceof Error?f.message:String(f);console.error(f),document.getElementById("gpu-status").textContent="Unavailable";const z=document.getElementById("loading");z.hidden=!1,z.classList.add("failed"),z.querySelector("h2").textContent="The simulation could not start",document.getElementById("error-reason").textContent=v,document.getElementById("retry").hidden=!1,document.getElementById("controls").disabled=!0}document.getElementById("retry").addEventListener("click",()=>location.reload());async function qn(){const f=document.querySelector("canvas");if(!navigator.gpu)throw new Error("WebGPU is unavailable here. Open this page in a current Chrome or Edge browser with graphics acceleration enabled.");const v=await navigator.gpu.requestAdapter();if(!v)throw new Error("The browser could not access a compatible GPU. Try Chrome or Edge with graphics acceleration enabled.");const z=await v.requestDevice();if(z.addEventListener("uncapturederror",F=>Ne(new Error(F.error.message))),!z)throw alert("float-32-filterable is not supported"),new Error;const _=f.getContext("webgpu");if(!_)throw new Error;const S=Math.min(.7,1e3/Math.max(f.clientWidth,f.clientHeight));f.width=Math.max(2,Math.floor(S*f.clientWidth/2)*2),f.height=Math.max(2,Math.floor(S*f.clientHeight/2)*2),console.log(f.width,f.height);const M=navigator.gpu.getPreferredCanvasFormat();return _.configure({device:z,format:M}),{canvas:f,device:z,presentationFormat:M,context:_}}function Wn(f){const v={running:!matchMedia("(prefers-reduced-motion: reduce)").matches,r:140,g:220,b:240,speed:.8,colorDensity:.7,numParticles:f[0],resetRequested:!1},z=document.getElementById("pause"),_=()=>{z.textContent=v.running?"Pause":"Resume",z.setAttribute("aria-pressed",String(!v.running))},S=()=>{v.running=!v.running,_()};z.addEventListener("click",S),document.getElementById("reset").addEventListener("click",()=>{v.resetRequested=!0});const M=document.getElementById("quality");f.forEach(T=>M.add(new Option(T,T))),M.addEventListener("change",()=>{v.numParticles=M.value});const F=document.getElementById("speed");F.addEventListener("input",()=>{v.speed=Number(F.value),document.getElementById("speed-value").textContent=F.value+"×"});const A=document.getElementById("slider");return A.addEventListener("input",()=>{document.getElementById("slider-value").textContent=50+Number(A.value)/2+"%"}),document.addEventListener("keydown",T=>{T.code==="KeyP"&&!(T.target instanceof HTMLInputElement)&&!(T.target instanceof HTMLSelectElement)&&!T.repeat&&S()}),_(),v}async function Hn(){const{canvas:f,device:v,presentationFormat:z,context:_}=await qn();console.log("initialization done"),_.configure({device:v,format:z});let S;{const n=["cubemap/posx.png","cubemap/negx.png","cubemap/posy.png","cubemap/negy.png","cubemap/posz.png","cubemap/negz.png"].map(async a=>{const g=await fetch(a);if(!g.ok)throw new Error("Unable to load water lighting textures. Reload to retry.");return createImageBitmap(await g.blob())}),i=await Promise.all(n);S=v.createTexture({dimension:"2d",size:[i[0].width,i[0].height,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});for(let a=0;a<i.length;a++){const g=i[a];v.queue.copyExternalImageToTexture({source:g},{texture:S,origin:[0,0,a]},[g.width,g.height])}}const M=S.createView({dimension:"cube"});console.log("cubemap initialization done");const F=[{particleCount:4e3,initBoxSize:[24,28,24],initDistance:29,mouseRadius:7,cameraTargetY:5,guiText:"Light · 4,000"},{particleCount:16e3,initBoxSize:[40,40,40],initDistance:42,mouseRadius:10,cameraTargetY:8,guiText:"Balanced · 16,000"},{particleCount:4e4,initBoxSize:[60,50,60],initDistance:60,mouseRadius:15,cameraTargetY:10,guiText:"Detailed · 40,000"}],A=F.map(o=>o.guiText),T=Wn(A),B=Math.max(...F.map(o=>o.particleCount)),j=Math.max(...F.map(o=>o.initBoxSize[0]*o.initBoxSize[1]*o.initBoxSize[2])),W=He,ne=v.createBuffer({label:"particles buffer",size:W*B,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),K=v.createBuffer({label:"posvel buffer",size:32*B,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),ie=v.createBuffer({label:"filter uniform buffer",size:Re.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),ce=v.createBuffer({label:"init box size buffer",size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),te=v.createTexture({label:"depth map texture",size:[f.width,f.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r32float"}).createView(),q=Math.max(...F.map(o=>o.initBoxSize[0])),O=Math.max(...F.map(o=>o.initBoxSize[1])),Z=Math.ceil(Math.max(...F.map(o=>o.initBoxSize[2]))/128)*128,$=[q,O,Z],J=v.createBuffer({label:"density grid buffer",size:4*q*O*Z,usage:GPUBufferUsage.STORAGE}),Q=v.createBuffer({label:"casted density grid buffer",size:2*q*O*Z,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),k=v.createBuffer({label:"density grid size buffer",size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),H=new Float32Array($);v.queue.writeBuffer(k,0,H);const ee=v.createTexture({label:"density grid texture",size:[Z,O,q],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST,format:"r16float",dimension:"3d"}),ve=ee.createView();console.log("buffer allocating done");const L=document.getElementById("fluidCanvas"),N=60*Math.PI/180,R=.6,me=2*R,de=.7,ye=1e7,ae=new In(ne,K,ie,J,Q,ce,k,v,te,f,j,B,ye,me),Te=new Xn(ie,K,k,ce,v,te,M,ve,f,z,R,N,ye);console.log("simulator initialization done");const C=new Dn(L);let xe=document.getElementById("error-reason");xe.textContent="",v.lost.then(o=>{const n=o.reason?`reason: ${o.reason}`:"unknown reason";Ne(new Error("Graphics device disconnected ("+n+"). Reload to retry."))});let re=-1,pe=[0,0,0],se=[0,0,0],ue=F[0],le=!1,r=!1,d=1;console.log("simulation start");let t=0,s=0,l=!0,p=performance.now(),w=0;async function e(){if(!je){if(document.hidden){requestAnimationFrame(e);return}try{const o=A.indexOf(T.numParticles);let n=!1;if(Number(o)!=re||T.resetRequested){n=!0,T.resetRequested=!1,d=1,t=0,s=0,re=Number(o),ue=F[re],se=ue.initBoxSize,ae.reset(se,ue.particleCount),C.reset(ue.initDistance,[se[0]/2,ue.cameraTargetY,se[2]/2],N,de),pe=[...se];let u=document.getElementById("slider");u.value="100",document.getElementById("slider-value").textContent="100%"}if(le=document.getElementById("particle").checked,T.running){const u=document.getElementById("slider");let h=parseInt(u.value)/200+.5;const x=.007*T.speed;t=Math.min(x,s+x/40);let m=Math.min(d-h,t);d-=m,m<=0?(t=0,s=0):s=t}pe[2]=se[2]*d,ae.changeBoxSize(pe),Le.texelSize.set([1/f.width,1/f.height]),Le.sphereSize.set([me]),v.queue.writeBuffer(ie,0,Re);const a=v.createCommandEncoder();ae.execute(a,[C.currentHoverX/f.clientWidth,C.currentHoverY/f.clientHeight],C.calcMouseVelocity(),ue.mouseRadius,le,.4*T.speed,T.running||n,$);let y=[T.r/255,T.g/255,T.b/255];if(Te.execute(_,a,ae.numParticles,le,y,T.colorDensity),v.queue.submit([a.finish()]),le){const u=v.createCommandEncoder();u.copyBufferToTexture({buffer:Q,bytesPerRow:$[2]*2,rowsPerImage:$[1]},{texture:ee},{width:$[2],height:$[1],depthOrArrayLayers:$[0]}),v.queue.submit([u.finish()])}if(C.setNewPrevMouseCoord(),await v.queue.onSubmittedWorkDone(),je)return;l&&(l=!1,document.getElementById("loading").hidden=!0,document.getElementById("gpu-status").textContent="WebGPU ready",document.getElementById("controls").disabled=!1),w++;const c=performance.now();c-p>1e3&&(document.getElementById("fps").textContent=Math.round(w*1e3/(c-p))+" FPS",w=0,p=c),requestAnimationFrame(e)}catch(o){Ne(o)}}}requestAnimationFrame(e)}Hn().catch(Ne);
