const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C5UzdLSC.js","./index.YF-roAsg.css","./TXyVmjR5.js","./error-404.uf7-JO-j.css","./D-oG0qoJ.js","./error-500.CHLIJhcO.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function od(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Et={},Cs=[],mi=()=>{},Pg=()=>!1,Yo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ad=t=>t.startsWith("onUpdate:"),Zt=Object.assign,ld=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hy=Object.prototype.hasOwnProperty,pt=(t,e)=>Hy.call(t,e),He=Array.isArray,Ps=t=>Ko(t)==="[object Map]",Lg=t=>Ko(t)==="[object Set]",zy=t=>Ko(t)==="[object RegExp]",We=t=>typeof t=="function",Rt=t=>typeof t=="string",Ji=t=>typeof t=="symbol",bt=t=>t!==null&&typeof t=="object",Ig=t=>(bt(t)||We(t))&&We(t.then)&&We(t.catch),Dg=Object.prototype.toString,Ko=t=>Dg.call(t),Vy=t=>Ko(t).slice(8,-1),Ng=t=>Ko(t)==="[object Object]",cd=t=>Rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ls=od(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hl=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Gy=/-\w/g,zn=Hl(t=>t.replace(Gy,e=>e.slice(1).toUpperCase())),Wy=/\B([A-Z])/g,ns=Hl(t=>t.replace(Wy,"-$1").toLowerCase()),zl=Hl(t=>t.charAt(0).toUpperCase()+t.slice(1)),mc=Hl(t=>t?`on${zl(t)}`:""),dr=(t,e)=>!Object.is(t,e),Is=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ug=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Mu=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Og=t=>{const e=Rt(t)?Number(t):NaN;return isNaN(e)?t:e};let fh;const Vl=()=>fh||(fh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hr(t){if(He(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Rt(i)?qy(i):hr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Rt(t)||bt(t))return t}const Xy=/;(?![^(]*\))/g,$y=/:([^]+)/,jy=/\/\*[^]*?\*\//g;function qy(t){const e={};return t.replace(jy,"").split(Xy).forEach(n=>{if(n){const i=n.split($y);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Jo(t){let e="";if(Rt(t))e=t;else if(He(t))for(let n=0;n<t.length;n++){const i=Jo(t[n]);i&&(e+=i+" ")}else if(bt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Yy(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Rt(e)&&(t.class=Jo(e)),n&&(t.style=hr(n)),t}const Ky="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jy=od(Ky);function Fg(t){return!!t||t===""}const kg=t=>!!(t&&t.__v_isRef===!0),xn=t=>Rt(t)?t:t==null?"":He(t)||bt(t)&&(t.toString===Dg||!We(t.toString))?kg(t)?xn(t.value):JSON.stringify(t,Bg,2):String(t),Bg=(t,e)=>kg(e)?Bg(t,e.value):Ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[gc(i,s)+" =>"]=r,n),{})}:Lg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gc(n))}:Ji(e)?gc(e):bt(e)&&!He(e)&&!Ng(e)?String(e):e,gc=(t,e="")=>{var n;return Ji(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ln;class Hg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ln,!e&&ln&&(this.index=(ln.scopes||(ln.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ln;try{return ln=this,e()}finally{ln=n}}}on(){++this._on===1&&(this.prevScope=ln,ln=this)}off(){this._on>0&&--this._on===0&&(ln=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ud(t){return new Hg(t)}function Zo(){return ln}function ml(t,e=!1){ln&&ln.cleanups.push(t)}let Mt;const _c=new WeakSet;class zg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ln&&ln.active&&ln.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_c.has(this)&&(_c.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dh(this),Wg(this);const e=Mt,n=Zn;Mt=this,Zn=!0;try{return this.fn()}finally{Xg(this),Mt=e,Zn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hd(e);this.deps=this.depsTail=void 0,dh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tu(this)&&this.run()}get dirty(){return Tu(this)}}let Vg=0,bo,So;function Gg(t,e=!1){if(t.flags|=8,e){t.next=So,So=t;return}t.next=bo,bo=t}function fd(){Vg++}function dd(){if(--Vg>0)return;if(So){let e=So;for(So=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;bo;){let e=bo;for(bo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Wg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Xg(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),hd(i),Zy(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Tu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($g(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function $g(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Po)||(t.globalVersion=Po,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Tu(t))))return;t.flags|=2;const e=t.dep,n=Mt,i=Zn;Mt=t,Zn=!0;try{Wg(t);const r=t.fn(t._value);(e.version===0||dr(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Mt=n,Zn=i,Xg(t),t.flags&=-3}}function hd(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)hd(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Zy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Zn=!0;const jg=[];function $i(){jg.push(Zn),Zn=!1}function ji(){const t=jg.pop();Zn=t===void 0?!0:t}function dh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Mt;Mt=void 0;try{e()}finally{Mt=n}}}let Po=0;class Qy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Mt||!Zn||Mt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Mt)n=this.activeLink=new Qy(Mt,this),Mt.deps?(n.prevDep=Mt.depsTail,Mt.depsTail.nextDep=n,Mt.depsTail=n):Mt.deps=Mt.depsTail=n,qg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Mt.depsTail,n.nextDep=void 0,Mt.depsTail.nextDep=n,Mt.depsTail=n,Mt.deps===n&&(Mt.deps=i)}return n}trigger(e){this.version++,Po++,this.notify(e)}notify(e){fd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{dd()}}}function qg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)qg(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const gl=new WeakMap,jr=Symbol(""),wu=Symbol(""),Lo=Symbol("");function cn(t,e,n){if(Zn&&Mt){let i=gl.get(t);i||gl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Gl),r.map=i,r.key=n),r.track()}}function Oi(t,e,n,i,r,s){const o=gl.get(t);if(!o){Po++;return}const a=l=>{l&&l.trigger()};if(fd(),e==="clear")o.forEach(a);else{const l=He(t),c=l&&cd(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Lo||!Ji(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Lo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(jr)),Ps(t)&&a(o.get(wu)));break;case"delete":l||(a(o.get(jr)),Ps(t)&&a(o.get(wu)));break;case"set":Ps(t)&&a(o.get(jr));break}}dd()}function ex(t,e){const n=gl.get(t);return n&&n.get(e)}function os(t){const e=st(t);return e===t?e:(cn(e,"iterate",Lo),Hn(t)?e:e.map(en))}function Wl(t){return cn(t=st(t),"iterate",Lo),t}const tx={__proto__:null,[Symbol.iterator](){return vc(this,Symbol.iterator,en)},concat(...t){return os(this).concat(...t.map(e=>He(e)?os(e):e))},entries(){return vc(this,"entries",t=>(t[1]=en(t[1]),t))},every(t,e){return bi(this,"every",t,e,void 0,arguments)},filter(t,e){return bi(this,"filter",t,e,n=>n.map(en),arguments)},find(t,e){return bi(this,"find",t,e,en,arguments)},findIndex(t,e){return bi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return bi(this,"findLast",t,e,en,arguments)},findLastIndex(t,e){return bi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return bi(this,"forEach",t,e,void 0,arguments)},includes(...t){return yc(this,"includes",t)},indexOf(...t){return yc(this,"indexOf",t)},join(t){return os(this).join(t)},lastIndexOf(...t){return yc(this,"lastIndexOf",t)},map(t,e){return bi(this,"map",t,e,void 0,arguments)},pop(){return oo(this,"pop")},push(...t){return oo(this,"push",t)},reduce(t,...e){return hh(this,"reduce",t,e)},reduceRight(t,...e){return hh(this,"reduceRight",t,e)},shift(){return oo(this,"shift")},some(t,e){return bi(this,"some",t,e,void 0,arguments)},splice(...t){return oo(this,"splice",t)},toReversed(){return os(this).toReversed()},toSorted(t){return os(this).toSorted(t)},toSpliced(...t){return os(this).toSpliced(...t)},unshift(...t){return oo(this,"unshift",t)},values(){return vc(this,"values",en)}};function vc(t,e,n){const i=Wl(t),r=i[e]();return i!==t&&!Hn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const nx=Array.prototype;function bi(t,e,n,i,r,s){const o=Wl(t),a=o!==t&&!Hn(t),l=o[e];if(l!==nx[e]){const f=l.apply(t,s);return a?en(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,en(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function hh(t,e,n,i){const r=Wl(t);let s=n;return r!==t&&(Hn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,en(a),l,t)}),r[e](s,...i)}function yc(t,e,n){const i=st(t);cn(i,"iterate",Lo);const r=i[e](...n);return(r===-1||r===!1)&&gd(n[0])?(n[0]=st(n[0]),i[e](...n)):r}function oo(t,e,n=[]){$i(),fd();const i=st(t)[e].apply(t,n);return dd(),ji(),i}const ix=od("__proto__,__v_isRef,__isVue"),Yg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ji));function rx(t){Ji(t)||(t=String(t));const e=st(this);return cn(e,"has",t),e.hasOwnProperty(t)}class Kg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?px:e_:s?Qg:Zg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!r){let l;if(o&&(l=tx[n]))return l;if(n==="hasOwnProperty")return rx}const a=Reflect.get(e,n,At(e)?e:i);if((Ji(n)?Yg.has(n):ix(n))||(r||cn(e,"get",n),s))return a;if(At(a)){const l=o&&cd(n)?a:a.value;return r&&bt(l)?Io(l):l}return bt(a)?r?Io(a):ti(a):a}}class Jg extends Kg{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=qi(s);if(!Hn(i)&&!qi(i)&&(s=st(s),i=st(i)),!He(e)&&At(s)&&!At(i))return l||(s.value=i),!0}const o=He(e)&&cd(n)?Number(n)<e.length:pt(e,n),a=Reflect.set(e,n,i,At(e)?e:r);return e===st(r)&&(o?dr(i,s)&&Oi(e,"set",n,i):Oi(e,"add",n,i)),a}deleteProperty(e,n){const i=pt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Oi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Ji(n)||!Yg.has(n))&&cn(e,"has",n),i}ownKeys(e){return cn(e,"iterate",He(e)?"length":jr),Reflect.ownKeys(e)}}class sx extends Kg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ox=new Jg,ax=new sx,lx=new Jg(!0);const Au=t=>t,pa=t=>Reflect.getPrototypeOf(t);function cx(t,e,n){return function(...i){const r=this.__v_raw,s=st(r),o=Ps(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Au:e?_l:en;return!e&&cn(s,"iterate",l?wu:jr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function ma(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ux(t,e){const n={get(r){const s=this.__v_raw,o=st(s),a=st(r);t||(dr(r,a)&&cn(o,"get",r),cn(o,"get",a));const{has:l}=pa(o),c=e?Au:t?_l:en;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&cn(st(r),"iterate",jr),r.size},has(r){const s=this.__v_raw,o=st(s),a=st(r);return t||(dr(r,a)&&cn(o,"has",r),cn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=st(a),c=e?Au:t?_l:en;return!t&&cn(l,"iterate",jr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Zt(n,t?{add:ma("add"),set:ma("set"),delete:ma("delete"),clear:ma("clear")}:{add(r){!e&&!Hn(r)&&!qi(r)&&(r=st(r));const s=st(this);return pa(s).has.call(s,r)||(s.add(r),Oi(s,"add",r,r)),this},set(r,s){!e&&!Hn(s)&&!qi(s)&&(s=st(s));const o=st(this),{has:a,get:l}=pa(o);let c=a.call(o,r);c||(r=st(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?dr(s,u)&&Oi(o,"set",r,s):Oi(o,"add",r,s),this},delete(r){const s=st(this),{has:o,get:a}=pa(s);let l=o.call(s,r);l||(r=st(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Oi(s,"delete",r,void 0),c},clear(){const r=st(this),s=r.size!==0,o=r.clear();return s&&Oi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=cx(r,t,e)}),n}function pd(t,e){const n=ux(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(pt(n,r)&&r in i?n:i,r,s)}const fx={get:pd(!1,!1)},dx={get:pd(!1,!0)},hx={get:pd(!0,!1)};const Zg=new WeakMap,Qg=new WeakMap,e_=new WeakMap,px=new WeakMap;function mx(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gx(t){return t.__v_skip||!Object.isExtensible(t)?0:mx(Vy(t))}function ti(t){return qi(t)?t:md(t,!1,ox,fx,Zg)}function Bi(t){return md(t,!1,lx,dx,Qg)}function Io(t){return md(t,!0,ax,hx,e_)}function md(t,e,n,i,r){if(!bt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=gx(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function qr(t){return qi(t)?qr(t.__v_raw):!!(t&&t.__v_isReactive)}function qi(t){return!!(t&&t.__v_isReadonly)}function Hn(t){return!!(t&&t.__v_isShallow)}function gd(t){return t?!!t.__v_raw:!1}function st(t){const e=t&&t.__v_raw;return e?st(e):t}function _x(t){return!pt(t,"__v_skip")&&Object.isExtensible(t)&&Ug(t,"__v_skip",!0),t}const en=t=>bt(t)?ti(t):t,_l=t=>bt(t)?Io(t):t;function At(t){return t?t.__v_isRef===!0:!1}function kt(t){return t_(t,!1)}function Qn(t){return t_(t,!0)}function t_(t,e){return At(t)?t:new vx(t,e)}class vx{constructor(e,n){this.dep=new Gl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:st(e),this._value=n?e:en(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Hn(e)||qi(e);e=i?e:st(e),dr(e,n)&&(this._rawValue=e,this._value=i?e:en(e),this.dep.trigger())}}function Xe(t){return At(t)?t.value:t}function gi(t){return We(t)?t():Xe(t)}const yx={get:(t,e,n)=>e==="__v_raw"?t:Xe(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return At(r)&&!At(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function n_(t){return qr(t)?t:new Proxy(t,yx)}class xx{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Gl,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function i_(t){return new xx(t)}function ph(t){const e=He(t)?new Array(t.length):{};for(const n in t)e[n]=r_(t,n);return e}class Ex{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ex(st(this._object),this._key)}}class bx{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function _d(t,e,n){return At(t)?t:We(t)?new bx(t):bt(t)&&arguments.length>1?r_(t,e,n):kt(t)}function r_(t,e,n){const i=t[e];return At(i)?i:new Ex(t,e,n)}class Sx{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Gl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Po-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Mt!==this)return Gg(this,!0),!0}get value(){const e=this.dep.track();return $g(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Mx(t,e,n=!1){let i,r;return We(t)?i=t:(i=t.get,r=t.set),new Sx(i,r,n)}const ga={},vl=new WeakMap;let kr;function Tx(t,e=!1,n=kr){if(n){let i=vl.get(n);i||vl.set(n,i=[]),i.push(t)}}function wx(t,e,n=Et){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=v=>r?v:Hn(v)||r===!1||r===0?Fi(v,1):Fi(v);let u,f,d,h,g=!1,_=!1;if(At(t)?(f=()=>t.value,g=Hn(t)):qr(t)?(f=()=>c(t),g=!0):He(t)?(_=!0,g=t.some(v=>qr(v)||Hn(v)),f=()=>t.map(v=>{if(At(v))return v.value;if(qr(v))return c(v);if(We(v))return l?l(v,2):v()})):We(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){$i();try{d()}finally{ji()}}const v=kr;kr=u;try{return l?l(t,3,[h]):t(h)}finally{kr=v}}:f=mi,e&&r){const v=f,S=r===!0?1/0:r;f=()=>Fi(v(),S)}const m=Zo(),p=()=>{u.stop(),m&&m.active&&ld(m.effects,u)};if(s&&e){const v=e;e=(...S)=>{v(...S),p()}}let E=_?new Array(t.length).fill(ga):ga;const y=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const S=u.run();if(r||g||(_?S.some((w,A)=>dr(w,E[A])):dr(S,E))){d&&d();const w=kr;kr=u;try{const A=[S,E===ga?void 0:_&&E[0]===ga?[]:E,h];E=S,l?l(e,3,A):e(...A)}finally{kr=w}}}else u.run()};return a&&a(y),u=new zg(f),u.scheduler=o?()=>o(y,!1):y,h=v=>Tx(v,!1,u),d=u.onStop=()=>{const v=vl.get(u);if(v){if(l)l(v,4);else for(const S of v)S();vl.delete(u)}},e?i?y(!0):E=u.run():o?o(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Fi(t,e=1/0,n){if(e<=0||!bt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,At(t))Fi(t.value,e,n);else if(He(t))for(let i=0;i<t.length;i++)Fi(t[i],e,n);else if(Lg(t)||Ps(t))t.forEach(i=>{Fi(i,e,n)});else if(Ng(t)){for(const i in t)Fi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Fi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qo(t,e,n,i){try{return i?t(...i):t()}catch(r){Zs(r,e,n)}}function ni(t,e,n,i){if(We(t)){const r=Qo(t,e,n,i);return r&&Ig(r)&&r.catch(s=>{Zs(s,e,n)}),r}if(He(t)){const r=[];for(let s=0;s<t.length;s++)r.push(ni(t[s],e,n,i));return r}}function Zs(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Et;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){$i(),Qo(s,null,10,[t,l,c]),ji();return}}Ax(t,n,r,i,o)}function Ax(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const gn=[];let ci=-1;const Ds=[];let lr=null,Ss=0;const s_=Promise.resolve();let yl=null;function yr(t){const e=yl||s_;return t?e.then(this?t.bind(this):t):e}function Rx(t){let e=ci+1,n=gn.length;for(;e<n;){const i=e+n>>>1,r=gn[i],s=Do(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function vd(t){if(!(t.flags&1)){const e=Do(t),n=gn[gn.length-1];!n||!(t.flags&2)&&e>=Do(n)?gn.push(t):gn.splice(Rx(e),0,t),t.flags|=1,o_()}}function o_(){yl||(yl=s_.then(a_))}function Ru(t){He(t)?Ds.push(...t):lr&&t.id===-1?lr.splice(Ss+1,0,t):t.flags&1||(Ds.push(t),t.flags|=1),o_()}function mh(t,e,n=ci+1){for(;n<gn.length;n++){const i=gn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;gn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function xl(t){if(Ds.length){const e=[...new Set(Ds)].sort((n,i)=>Do(n)-Do(i));if(Ds.length=0,lr){lr.push(...e);return}for(lr=e,Ss=0;Ss<lr.length;Ss++){const n=lr[Ss];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}lr=null,Ss=0}}const Do=t=>t.id==null?t.flags&2?-1:1/0:t.id;function a_(t){try{for(ci=0;ci<gn.length;ci++){const e=gn[ci];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ci<gn.length;ci++){const e=gn[ci];e&&(e.flags&=-2)}ci=-1,gn.length=0,xl(),yl=null,(gn.length||Ds.length)&&a_()}}let nn=null,l_=null;function El(t){const e=nn;return nn=t,l_=t&&t.type.__scopeId||null,e}function Hi(t,e=nn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Al(-1);const s=El(e);let o;try{o=t(...r)}finally{El(s),i._d&&Al(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function m2(t,e){if(nn===null)return t;const n=ql(nn),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Et]=e[r];s&&(We(s)&&(s={mounted:s,updated:s}),s.deep&&Fi(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ui(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&($i(),ni(l,n,8,[t.el,a,t,e]),ji())}}const c_=Symbol("_vte"),u_=t=>t.__isTeleport,Mo=t=>t&&(t.disabled||t.disabled===""),gh=t=>t&&(t.defer||t.defer===""),_h=t=>typeof SVGElement<"u"&&t instanceof SVGElement,vh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Cu=(t,e)=>{const n=t&&t.to;return Rt(n)?e?e(n):null:n},f_={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:h,querySelector:g,createText:_,createComment:m}}=c,p=Mo(e.props);let{shapeFlag:E,children:y,dynamicChildren:v}=e;if(t==null){const S=e.el=_(""),w=e.anchor=_("");h(S,n,i),h(w,n,i);const A=(M,T)=>{E&16&&u(y,M,T,r,s,o,a,l)},I=()=>{const M=e.target=Cu(e.props,g),T=d_(M,e,_,h);M&&(o!=="svg"&&_h(M)?o="svg":o!=="mathml"&&vh(M)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(M),p||(A(M,T),sl(e,!1)))};p&&(A(n,w),sl(e,!0)),gh(e.props)?(e.el.__isMounted=!1,jt(()=>{I(),delete e.el.__isMounted},s)):I()}else{if(gh(e.props)&&t.el.__isMounted===!1){jt(()=>{f_.process(t,e,n,i,r,s,o,a,l,c)},s);return}e.el=t.el,e.targetStart=t.targetStart;const S=e.anchor=t.anchor,w=e.target=t.target,A=e.targetAnchor=t.targetAnchor,I=Mo(t.props),M=I?n:w,T=I?S:A;if(o==="svg"||_h(w)?o="svg":(o==="mathml"||vh(w))&&(o="mathml"),v?(d(t.dynamicChildren,v,M,r,s,o,a),bd(t,e,!0)):l||f(t,e,M,T,r,s,o,a,!1),p)I?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):_a(e,n,S,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const N=e.target=Cu(e.props,g);N&&_a(e,N,null,c,0)}else I&&_a(e,w,A,c,1);sl(e,p)}},remove(t,e,n,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:d}=t;if(f&&(r(c),r(u)),s&&r(l),o&16){const h=s||!Mo(d);for(let g=0;g<a.length;g++){const _=a[g];i(_,e,n,h,!!_.dynamicChildren)}}},move:_a,hydrate:Cx};function _a(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=s===2;if(f&&i(o,e,n),(!f||Mo(u))&&l&16)for(let d=0;d<c.length;d++)r(c[d],e,n,2);f&&i(a,e,n)}function Cx(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){function d(_,m,p,E){m.anchor=f(o(_),m,a(_),n,i,r,s),m.targetStart=p,m.targetAnchor=E}const h=e.target=Cu(e.props,l),g=Mo(e.props);if(h){const _=h._lpa||h.firstChild;if(e.shapeFlag&16)if(g)d(t,e,_,_&&o(_));else{e.anchor=o(t);let m=_;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||d_(h,e,u,c),f(_&&o(_),e,h,n,i,r,s)}sl(e,g)}else g&&e.shapeFlag&16&&d(t,e,t,o(t));return e.anchor&&o(e.anchor)}const g2=f_;function sl(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function d_(t,e,n,i){const r=e.targetStart=n(""),s=e.targetAnchor=n("");return r[c_]=s,t&&(i(r,t),i(s,t)),s}const Ui=Symbol("_leaveCb"),va=Symbol("_enterCb");function Px(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return si(()=>{t.isMounted=!0}),ta(()=>{t.isUnmounting=!0}),t}const Un=[Function,Array],h_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Un,onEnter:Un,onAfterEnter:Un,onEnterCancelled:Un,onBeforeLeave:Un,onLeave:Un,onAfterLeave:Un,onLeaveCancelled:Un,onBeforeAppear:Un,onAppear:Un,onAfterAppear:Un,onAppearCancelled:Un},p_=t=>{const e=t.subTree;return e.component?p_(e.component):e},Lx={name:"BaseTransition",props:h_,setup(t,{slots:e}){const n=In(),i=Px();return()=>{const r=e.default&&__(e.default(),!0);if(!r||!r.length)return;const s=m_(r),o=st(t),{mode:a}=o;if(i.isLeaving)return xc(s);const l=yh(s);if(!l)return xc(s);let c=Pu(l,o,i,n,f=>c=f);l.type!==Ot&&zs(l,c);let u=n.subTree&&yh(n.subTree);if(u&&u.type!==Ot&&!qn(u,l)&&p_(n).type!==Ot){let f=Pu(u,o,i,n);if(zs(u,f),a==="out-in"&&l.type!==Ot)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},xc(s);a==="in-out"&&l.type!==Ot?f.delayLeave=(d,h,g)=>{const _=g_(i,u);_[String(u.key)]=u,d[Ui]=()=>{h(),d[Ui]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function m_(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ot){e=n;break}}return e}const Ix=Lx;function g_(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Pu(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:E,onAppearCancelled:y}=e,v=String(t.key),S=g_(n,t),w=(M,T)=>{M&&ni(M,i,9,T)},A=(M,T)=>{const N=T[1];w(M,T),He(M)?M.every(U=>U.length<=1)&&N():M.length<=1&&N()},I={mode:o,persisted:a,beforeEnter(M){let T=l;if(!n.isMounted)if(s)T=m||l;else return;M[Ui]&&M[Ui](!0);const N=S[v];N&&qn(t,N)&&N.el[Ui]&&N.el[Ui](),w(T,[M])},enter(M){let T=c,N=u,U=f;if(!n.isMounted)if(s)T=p||c,N=E||u,U=y||f;else return;let G=!1;const X=M[va]=Y=>{G||(G=!0,Y?w(U,[M]):w(N,[M]),I.delayedLeave&&I.delayedLeave(),M[va]=void 0)};T?A(T,[M,X]):X()},leave(M,T){const N=String(t.key);if(M[va]&&M[va](!0),n.isUnmounting)return T();w(d,[M]);let U=!1;const G=M[Ui]=X=>{U||(U=!0,T(),X?w(_,[M]):w(g,[M]),M[Ui]=void 0,S[N]===t&&delete S[N])};S[N]=t,h?A(h,[M,G]):G()},clone(M){const T=Pu(M,e,n,i,r);return r&&r(T),T}};return I}function xc(t){if(ea(t))return t=yi(t),t.children=null,t}function yh(t){if(!ea(t))return u_(t.type)&&t.children?m_(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&We(n.default))return n.default()}}function zs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,zs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function __(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===It?(o.patchFlag&128&&r++,i=i.concat(__(o.children,e,a))):(e||o.type!==Ot)&&i.push(a!=null?yi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Qt(t,e){return We(t)?Zt({name:t.name},e,{setup:t}):t}function _2(){const t=In();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function yd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const bl=new WeakMap;function Ns(t,e,n,i,r=!1){if(He(t)){t.forEach((g,_)=>Ns(g,e&&(He(e)?e[_]:e),n,i,r));return}if(pr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ns(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?ql(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Et?a.refs={}:a.refs,f=a.setupState,d=st(f),h=f===Et?Pg:g=>pt(d,g);if(c!=null&&c!==l){if(xh(e),Rt(c))u[c]=null,h(c)&&(f[c]=null);else if(At(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(We(l))Qo(l,a,12,[o,u]);else{const g=Rt(l),_=At(l);if(g||_){const m=()=>{if(t.f){const p=g?h(l)?f[l]:u[l]:l.value;if(r)He(p)&&ld(p,s);else if(He(p))p.includes(s)||p.push(s);else if(g)u[l]=[s],h(l)&&(f[l]=u[l]);else{const E=[s];l.value=E,t.k&&(u[t.k]=E)}}else g?(u[l]=o,h(l)&&(f[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const p=()=>{m(),bl.delete(t)};p.id=-1,bl.set(t,p),jt(p,n)}else xh(t),m()}}}function xh(t){const e=bl.get(t);e&&(e.flags|=8,bl.delete(t))}let Eh=!1;const as=()=>{Eh||(console.error("Hydration completed but contains mismatches."),Eh=!0)},Dx=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Nx=t=>t.namespaceURI.includes("MathML"),ya=t=>{if(t.nodeType===1){if(Dx(t))return"svg";if(Nx(t))return"mathml"}},As=t=>t.nodeType===8;function Ux(t){const{mt:e,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(y,v)=>{if(!v.hasChildNodes()){n(null,y,v),xl(),v._vnode=y;return}f(v.firstChild,y,null,null,null),xl(),v._vnode=y},f=(y,v,S,w,A,I=!1)=>{I=I||!!v.dynamicChildren;const M=As(y)&&y.data==="[",T=()=>_(y,v,S,w,A,M),{type:N,ref:U,shapeFlag:G,patchFlag:X}=v;let Y=y.nodeType;v.el=y,X===-2&&(I=!1,v.dynamicChildren=null);let H=null;switch(N){case mr:Y!==3?v.children===""?(l(v.el=r(""),o(y),y),H=y):H=T():(y.data!==v.children&&(as(),y.data=v.children),H=s(y));break;case Ot:E(y)?(H=s(y),p(v.el=y.content.firstChild,y,S)):Y!==8||M?H=T():H=s(y);break;case wo:if(M&&(y=s(y),Y=y.nodeType),Y===1||Y===3){H=y;const te=!v.children.length;for(let F=0;F<v.staticCount;F++)te&&(v.children+=H.nodeType===1?H.outerHTML:H.data),F===v.staticCount-1&&(v.anchor=H),H=s(H);return M?s(H):H}else T();break;case It:M?H=g(y,v,S,w,A,I):H=T();break;default:if(G&1)(Y!==1||v.type.toLowerCase()!==y.tagName.toLowerCase())&&!E(y)?H=T():H=d(y,v,S,w,A,I);else if(G&6){v.slotScopeIds=A;const te=o(y);if(M?H=m(y):As(y)&&y.data==="teleport start"?H=m(y,y.data,"teleport end"):H=s(y),e(v,te,null,S,w,ya(te),I),pr(v)&&!v.type.__asyncResolved){let F;M?(F=et(It),F.anchor=H?H.previousSibling:te.lastChild):F=y.nodeType===3?Uo(""):et("div"),F.el=y,v.component.subTree=F}}else G&64?Y!==8?H=T():H=v.type.hydrate(y,v,S,w,A,I,t,h):G&128&&(H=v.type.hydrate(y,v,S,w,ya(o(y)),A,I,t,f))}return U!=null&&Ns(U,null,w,v),H},d=(y,v,S,w,A,I)=>{I=I||!!v.dynamicChildren;const{type:M,props:T,patchFlag:N,shapeFlag:U,dirs:G,transition:X}=v,Y=M==="input"||M==="option";if(Y||N!==-1){G&&ui(v,null,S,"created");let H=!1;if(E(y)){H=B_(null,X)&&S&&S.vnode.props&&S.vnode.props.appear;const F=y.content.firstChild;if(H){const ce=F.getAttribute("class");ce&&(F.$cls=ce),X.beforeEnter(F)}p(F,y,S),v.el=y=F}if(U&16&&!(T&&(T.innerHTML||T.textContent))){let F=h(y.firstChild,v,y,S,w,A,I);for(;F;){xa(y,1)||as();const ce=F;F=F.nextSibling,a(ce)}}else if(U&8){let F=v.children;F[0]===`
`&&(y.tagName==="PRE"||y.tagName==="TEXTAREA")&&(F=F.slice(1)),y.textContent!==F&&(xa(y,0)||as(),y.textContent=v.children)}if(T){if(Y||!I||N&48){const F=y.tagName.includes("-");for(const ce in T)(Y&&(ce.endsWith("value")||ce==="indeterminate")||Yo(ce)&&!Ls(ce)||ce[0]==="."||F)&&i(y,ce,null,T[ce],void 0,S)}else if(T.onClick)i(y,"onClick",null,T.onClick,void 0,S);else if(N&4&&qr(T.style))for(const F in T.style)T.style[F]}let te;(te=T&&T.onVnodeBeforeMount)&&yn(te,S,v),G&&ui(v,null,S,"beforeMount"),((te=T&&T.onVnodeMounted)||G||H)&&$_(()=>{te&&yn(te,S,v),H&&X.enter(y),G&&ui(v,null,S,"mounted")},w)}return y.nextSibling},h=(y,v,S,w,A,I,M)=>{M=M||!!v.dynamicChildren;const T=v.children,N=T.length;for(let U=0;U<N;U++){const G=M?T[U]:T[U]=Ln(T[U]),X=G.type===mr;y?(X&&!M&&U+1<N&&Ln(T[U+1]).type===mr&&(l(r(y.data.slice(G.children.length)),S,s(y)),y.data=G.children),y=f(y,G,w,A,I,M)):X&&!G.children?l(G.el=r(""),S):(xa(S,1)||as(),n(null,G,S,null,w,A,ya(S),I))}return y},g=(y,v,S,w,A,I)=>{const{slotScopeIds:M}=v;M&&(A=A?A.concat(M):M);const T=o(y),N=h(s(y),v,T,S,w,A,I);return N&&As(N)&&N.data==="]"?s(v.anchor=N):(as(),l(v.anchor=c("]"),T,N),N)},_=(y,v,S,w,A,I)=>{if(xa(y.parentElement,1)||as(),v.el=null,I){const N=m(y);for(;;){const U=s(y);if(U&&U!==N)a(U);else break}}const M=s(y),T=o(y);return a(y),n(null,v,T,M,S,w,ya(T),A),S&&(S.vnode.el=v.el,jl(S,v.el)),M},m=(y,v="[",S="]")=>{let w=0;for(;y;)if(y=s(y),y&&As(y)&&(y.data===v&&w++,y.data===S)){if(w===0)return s(y);w--}return y},p=(y,v,S)=>{const w=v.parentNode;w&&w.replaceChild(y,v);let A=S;for(;A;)A.vnode.el===v&&(A.vnode.el=A.subTree.el=y),A=A.parent},E=y=>y.nodeType===1&&y.tagName==="TEMPLATE";return[u,f]}const bh="data-allow-mismatch",Ox={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function xa(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(bh);)t=t.parentElement;const n=t&&t.getAttribute(bh);if(n==null)return!1;if(n==="")return!0;{const i=n.split(",");return e===0&&i.includes("children")?!0:i.includes(Ox[e])}}Vl().requestIdleCallback;Vl().cancelIdleCallback;function Fx(t,e){if(As(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(As(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const pr=t=>!!t.type.__asyncLoader;function Sh(t){We(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=t;let c=null,u,f=0;const d=()=>(f++,c=null,h()),h=()=>{let g;return c||(g=c=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((m,p)=>{l(_,()=>m(d()),()=>p(_),f+1)});throw _}).then(_=>g!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return Qt({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(g,_,m){let p=!1;(_.bu||(_.bu=[])).push(()=>p=!0);const E=()=>{p||m()},y=s?()=>{const v=s(E,S=>Fx(g,S));v&&(_.bum||(_.bum=[])).push(v)}:E;u?y():h().then(()=>!_.isUnmounted&&y())},get __asyncResolved(){return u},setup(){const g=tn;if(yd(g),u)return()=>Ec(u,g);const _=y=>{c=null,Zs(y,g,13,!i)};if(a&&g.suspense||Gs)return h().then(y=>()=>Ec(y,g)).catch(y=>(_(y),()=>i?et(i,{error:y}):null));const m=kt(!1),p=kt(),E=kt(!!r);return r&&setTimeout(()=>{E.value=!1},r),o!=null&&setTimeout(()=>{if(!m.value&&!p.value){const y=new Error(`Async component timed out after ${o}ms.`);_(y),p.value=y}},o),h().then(()=>{m.value=!0,g.parent&&ea(g.parent.vnode)&&g.parent.update()}).catch(y=>{_(y),p.value=y}),()=>{if(m.value&&u)return Ec(u,g);if(p.value&&i)return et(i,{error:p.value});if(n&&!E.value)return et(n)}}})}function Ec(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=et(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const ea=t=>t.type.__isKeepAlive,kx={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=In(),i=n.ctx;if(!i.renderer)return()=>{const E=e.default&&e.default();return E&&E.length===1?E[0]:E};const r=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,d=f("div");i.activate=(E,y,v,S,w)=>{const A=E.component;c(E,y,v,0,a),l(A.vnode,E,y,v,A,a,S,E.slotScopeIds,w),jt(()=>{A.isDeactivated=!1,A.a&&Is(A.a);const I=E.props&&E.props.onVnodeMounted;I&&yn(I,A.parent,E)},a)},i.deactivate=E=>{const y=E.component;Tl(y.m),Tl(y.a),c(E,d,null,1,a),jt(()=>{y.da&&Is(y.da);const v=E.props&&E.props.onVnodeUnmounted;v&&yn(v,y.parent,E),y.isDeactivated=!0},a)};function h(E){bc(E),u(E,n,a,!0)}function g(E){r.forEach((y,v)=>{const S=ku(y.type);S&&!E(S)&&_(v)})}function _(E){const y=r.get(E);y&&(!o||!qn(y,o))?h(y):o&&bc(o),r.delete(E),s.delete(E)}Gt(()=>[t.include,t.exclude],([E,y])=>{E&&g(v=>yo(E,v)),y&&g(v=>!yo(y,v))},{flush:"post",deep:!0});let m=null;const p=()=>{m!=null&&(wl(n.subTree.type)?jt(()=>{r.set(m,Ea(n.subTree))},n.subTree.suspense):r.set(m,Ea(n.subTree)))};return si(p),E_(p),ta(()=>{r.forEach(E=>{const{subTree:y,suspense:v}=n,S=Ea(y);if(E.type===S.type&&E.key===S.key){bc(S);const w=S.component.da;w&&jt(w,v);return}h(E)})}),()=>{if(m=null,!e.default)return o=null;const E=e.default(),y=E[0];if(E.length>1)return o=null,E;if(!Zr(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return o=null,y;let v=Ea(y);if(v.type===Ot)return o=null,v;const S=v.type,w=ku(pr(v)?v.type.__asyncResolved||{}:S),{include:A,exclude:I,max:M}=t;if(A&&(!w||!yo(A,w))||I&&w&&yo(I,w))return v.shapeFlag&=-257,o=v,y;const T=v.key==null?S:v.key,N=r.get(T);return v.el&&(v=yi(v),y.shapeFlag&128&&(y.ssContent=v)),m=T,N?(v.el=N.el,v.component=N.component,v.transition&&zs(v,v.transition),v.shapeFlag|=512,s.delete(T),s.add(T)):(s.add(T),M&&s.size>parseInt(M,10)&&_(s.values().next().value)),v.shapeFlag|=256,o=v,wl(y.type)?y:v}}},Bx=kx;function yo(t,e){return He(t)?t.some(n=>yo(n,e)):Rt(t)?t.split(",").includes(e):zy(t)?(t.lastIndex=0,t.test(e)):!1}function v_(t,e){x_(t,"a",e)}function y_(t,e){x_(t,"da",e)}function x_(t,e,n=tn){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Xl(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ea(r.parent.vnode)&&Hx(i,e,n,r),r=r.parent}}function Hx(t,e,n,i){const r=Xl(e,t,i,!0);Qs(()=>{ld(i[e],r)},n)}function bc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Ea(t){return t.shapeFlag&128?t.ssContent:t}function Xl(t,e,n=tn,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{$i();const a=na(n),l=ni(e,n,t,o);return a(),ji(),l});return i?r.unshift(s):r.push(s),s}}const Zi=t=>(e,n=tn)=>{(!Gs||t==="sp")&&Xl(t,(...i)=>e(...i),n)},zx=Zi("bm"),si=Zi("m"),Vx=Zi("bu"),E_=Zi("u"),ta=Zi("bum"),Qs=Zi("um"),Gx=Zi("sp"),Wx=Zi("rtg"),Xx=Zi("rtc");function b_(t,e=tn){Xl("ec",t,e)}const S_="components";function v2(t,e){return T_(S_,t,!0,e)||t}const M_=Symbol.for("v-ndc");function $x(t){return Rt(t)?T_(S_,t,!1)||t:t||M_}function T_(t,e,n=!0,i=!1){const r=nn||tn;if(r){const s=r.type;{const a=ku(s,!1);if(a&&(a===e||a===zn(e)||a===zl(zn(e))))return s}const o=Mh(r[t]||s[t],e)||Mh(r.appContext[t],e);return!o&&i?s:o}}function Mh(t,e){return t&&(t[e]||t[zn(e)]||t[zl(zn(e))])}function Sl(t,e,n,i){let r;const s=n,o=He(t);if(o||Rt(t)){const a=o&&qr(t);let l=!1,c=!1;a&&(l=!Hn(t),c=qi(t),t=Wl(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?_l(en(t[u])):en(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(bt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function jx(t,e,n={},i,r){if(nn.ce||nn.parent&&pr(nn.parent)&&nn.parent.ce){const c=Object.keys(n).length>0;return lt(),un(It,null,[et("slot",n,i&&i())],c?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),lt();const o=s&&w_(s(n)),a=n.key||o&&o.key,l=un(It,{key:(a&&!Ji(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&t._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function w_(t){return t.some(e=>Zr(e)?!(e.type===Ot||e.type===It&&!w_(e.children)):!0)?t:null}const Lu=t=>t?Z_(t)?ql(t):Lu(t.parent):null,To=Zt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Lu(t.parent),$root:t=>Lu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>R_(t),$forceUpdate:t=>t.f||(t.f=()=>{vd(t.update)}),$nextTick:t=>t.n||(t.n=yr.bind(t.proxy)),$watch:t=>hE.bind(t)}),Sc=(t,e)=>t!==Et&&!t.__isScriptSetup&&pt(t,e),qx={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Sc(i,e))return o[e]=1,i[e];if(r!==Et&&pt(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&pt(c,e))return o[e]=3,s[e];if(n!==Et&&pt(n,e))return o[e]=4,n[e];Iu&&(o[e]=0)}}const u=To[e];let f,d;if(u)return e==="$attrs"&&cn(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Et&&pt(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,pt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Sc(r,e)?(r[e]=n,!0):i!==Et&&pt(i,e)?(i[e]=n,!0):pt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s,type:o}},a){let l,c;return!!(n[a]||t!==Et&&a[0]!=="$"&&pt(t,a)||Sc(e,a)||(l=s[0])&&pt(l,a)||pt(i,a)||pt(To,a)||pt(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Th(t){return He(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Iu=!0;function Yx(t){const e=R_(t),n=t.proxy,i=t.ctx;Iu=!1,e.beforeCreate&&wh(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:E,destroyed:y,unmounted:v,render:S,renderTracked:w,renderTriggered:A,errorCaptured:I,serverPrefetch:M,expose:T,inheritAttrs:N,components:U,directives:G,filters:X}=e;if(c&&Kx(c,i,null),o)for(const te in o){const F=o[te];We(F)&&(i[te]=F.bind(n))}if(r){const te=r.call(n,n);bt(te)&&(t.data=ti(te))}if(Iu=!0,s)for(const te in s){const F=s[te],ce=We(F)?F.bind(n,n):We(F.get)?F.get.bind(n,n):mi,ve=!We(F)&&We(F.set)?F.set.bind(n):mi,Me=mt({get:ce,set:ve});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Me.value,set:Ne=>Me.value=Ne})}if(a)for(const te in a)A_(a[te],i,n,te);if(l){const te=We(l)?l.call(n):l;Reflect.ownKeys(te).forEach(F=>{Kr(F,te[F])})}u&&wh(u,t,"c");function H(te,F){He(F)?F.forEach(ce=>te(ce.bind(n))):F&&te(F.bind(n))}if(H(zx,f),H(si,d),H(Vx,h),H(E_,g),H(v_,_),H(y_,m),H(b_,I),H(Xx,w),H(Wx,A),H(ta,E),H(Qs,v),H(Gx,M),He(T))if(T.length){const te=t.exposed||(t.exposed={});T.forEach(F=>{Object.defineProperty(te,F,{get:()=>n[F],set:ce=>n[F]=ce,enumerable:!0})})}else t.exposed||(t.exposed={});S&&t.render===mi&&(t.render=S),N!=null&&(t.inheritAttrs=N),U&&(t.components=U),G&&(t.directives=G),M&&yd(t)}function Kx(t,e,n=mi){He(t)&&(t=Du(t));for(const i in t){const r=t[i];let s;bt(r)?"default"in r?s=fn(r.from||i,r.default,!0):s=fn(r.from||i):s=fn(r),At(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function wh(t,e,n){ni(He(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function A_(t,e,n,i){let r=i.includes(".")?V_(n,i):()=>n[i];if(Rt(t)){const s=e[t];We(s)&&Gt(r,s)}else if(We(t))Gt(r,t.bind(n));else if(bt(t))if(He(t))t.forEach(s=>A_(s,e,n,i));else{const s=We(t.handler)?t.handler.bind(n):e[t.handler];We(s)&&Gt(r,s,t)}}function R_(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ml(l,c,o,!0)),Ml(l,e,o)),bt(e)&&s.set(e,l),l}function Ml(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ml(t,s,n,!0),r&&r.forEach(o=>Ml(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Jx[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Jx={data:Ah,props:Rh,emits:Rh,methods:xo,computed:xo,beforeCreate:hn,created:hn,beforeMount:hn,mounted:hn,beforeUpdate:hn,updated:hn,beforeDestroy:hn,beforeUnmount:hn,destroyed:hn,unmounted:hn,activated:hn,deactivated:hn,errorCaptured:hn,serverPrefetch:hn,components:xo,directives:xo,watch:Qx,provide:Ah,inject:Zx};function Ah(t,e){return e?t?function(){return Zt(We(t)?t.call(this,this):t,We(e)?e.call(this,this):e)}:e:t}function Zx(t,e){return xo(Du(t),Du(e))}function Du(t){if(He(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function hn(t,e){return t?[...new Set([].concat(t,e))]:e}function xo(t,e){return t?Zt(Object.create(null),t,e):e}function Rh(t,e){return t?He(t)&&He(e)?[...new Set([...t,...e])]:Zt(Object.create(null),Th(t),Th(e??{})):e}function Qx(t,e){if(!t)return e;if(!e)return t;const n=Zt(Object.create(null),t);for(const i in e)n[i]=hn(t[i],e[i]);return n}function C_(){return{app:null,config:{isNativeTag:Pg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eE=0;function tE(t,e){return function(i,r=null){We(i)||(i=Zt({},i)),r!=null&&!bt(r)&&(r=null);const s=C_(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:eE++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:OE,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&We(u.install)?(o.add(u),u.install(c,...f)):We(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||et(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(h,u):t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,ql(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ni(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Yr;Yr=c;try{return u()}finally{Yr=f}}};return c}}let Yr=null;function Kr(t,e){if(tn){let n=tn.provides;const i=tn.parent&&tn.parent.provides;i===n&&(n=tn.provides=Object.create(i)),n[t]=e}}function fn(t,e,n=!1){const i=In();if(i||Yr){let r=Yr?Yr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&We(e)?e.call(i&&i.proxy):e}}function eo(){return!!(In()||Yr)}const P_={},L_=()=>Object.create(P_),I_=t=>Object.getPrototypeOf(t)===P_;function nE(t,e,n,i=!1){const r={},s=L_();t.propsDefaults=Object.create(null),D_(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Bi(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function iE(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=st(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if($l(t.emitsOptions,d))continue;const h=e[d];if(l)if(pt(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=zn(d);r[g]=Nu(l,a,g,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{D_(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!pt(e,f)&&((u=ns(f))===f||!pt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Nu(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!pt(e,f))&&(delete s[f],c=!0)}c&&Oi(t.attrs,"set","")}function D_(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ls(l))continue;const c=e[l];let u;r&&pt(r,u=zn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:$l(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=st(n),c=a||Et;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Nu(r,l,f,c[f],t,!pt(c,f))}}return o}function Nu(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=na(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ns(n))&&(i=!0))}return i}const rE=new WeakMap;function N_(t,e,n=!1){const i=n?rE:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!We(t)){const u=f=>{l=!0;const[d,h]=N_(f,e,!0);Zt(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return bt(t)&&i.set(t,Cs),Cs;if(He(s))for(let u=0;u<s.length;u++){const f=zn(s[u]);Ch(f)&&(o[f]=Et)}else if(s)for(const u in s){const f=zn(u);if(Ch(f)){const d=s[u],h=o[f]=He(d)||We(d)?{type:d}:Zt({},d),g=h.type;let _=!1,m=!0;if(He(g))for(let p=0;p<g.length;++p){const E=g[p],y=We(E)&&E.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(m=!1)}else _=We(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||pt(h,"default"))&&a.push(f)}}const c=[o,a];return bt(t)&&i.set(t,c),c}function Ch(t){return t[0]!=="$"&&!Ls(t)}const xd=t=>t==="_"||t==="_ctx"||t==="$stable",Ed=t=>He(t)?t.map(Ln):[Ln(t)],sE=(t,e,n)=>{if(e._n)return e;const i=Hi((...r)=>Ed(e(...r)),n);return i._c=!1,i},U_=(t,e,n)=>{const i=t._ctx;for(const r in t){if(xd(r))continue;const s=t[r];if(We(s))e[r]=sE(r,s,i);else if(s!=null){const o=Ed(s);e[r]=()=>o}}},O_=(t,e)=>{const n=Ed(e);t.slots.default=()=>n},F_=(t,e,n)=>{for(const i in e)(n||!xd(i))&&(t[i]=e[i])},oE=(t,e,n)=>{const i=t.slots=L_();if(t.vnode.shapeFlag&32){const r=e._;r?(F_(i,e,n),n&&Ug(i,"_",r,!0)):U_(e,i)}else e&&O_(t,e)},aE=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Et;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:F_(r,e,n):(s=!e.$stable,U_(e,r)),o=e}else e&&(O_(t,e),o={default:1});if(s)for(const a in r)!xd(a)&&o[a]==null&&delete r[a]},jt=$_;function lE(t){return k_(t)}function cE(t){return k_(t,Ux)}function k_(t,e){const n=Vl();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=mi,insertStaticContent:g}=t,_=(b,O,z,ee=null,$=null,C=null,L=void 0,B=null,K=!!O.dynamicChildren)=>{if(b===O)return;b&&!qn(b,O)&&(ee=k(b),Ne(b,$,C,!0),b=null),O.patchFlag===-2&&(K=!1,O.dynamicChildren=null);const{type:ie,ref:R,shapeFlag:x}=O;switch(ie){case mr:m(b,O,z,ee);break;case Ot:p(b,O,z,ee);break;case wo:b==null&&E(O,z,ee,L);break;case It:U(b,O,z,ee,$,C,L,B,K);break;default:x&1?S(b,O,z,ee,$,C,L,B,K):x&6?G(b,O,z,ee,$,C,L,B,K):(x&64||x&128)&&ie.process(b,O,z,ee,$,C,L,B,K,le)}R!=null&&$?Ns(R,b&&b.ref,C,O||b,!O):R==null&&b&&b.ref!=null&&Ns(b.ref,null,C,b,!0)},m=(b,O,z,ee)=>{if(b==null)i(O.el=a(O.children),z,ee);else{const $=O.el=b.el;O.children!==b.children&&c($,O.children)}},p=(b,O,z,ee)=>{b==null?i(O.el=l(O.children||""),z,ee):O.el=b.el},E=(b,O,z,ee)=>{[b.el,b.anchor]=g(b.children,O,z,ee,b.el,b.anchor)},y=({el:b,anchor:O},z,ee)=>{let $;for(;b&&b!==O;)$=d(b),i(b,z,ee),b=$;i(O,z,ee)},v=({el:b,anchor:O})=>{let z;for(;b&&b!==O;)z=d(b),r(b),b=z;r(O)},S=(b,O,z,ee,$,C,L,B,K)=>{O.type==="svg"?L="svg":O.type==="math"&&(L="mathml"),b==null?w(O,z,ee,$,C,L,B,K):M(b,O,$,C,L,B,K)},w=(b,O,z,ee,$,C,L,B)=>{let K,ie;const{props:R,shapeFlag:x,transition:D,dirs:W}=b;if(K=b.el=o(b.type,C,R&&R.is,R),x&8?u(K,b.children):x&16&&I(b.children,K,null,ee,$,Mc(b,C),L,B),W&&ui(b,null,ee,"created"),A(K,b,b.scopeId,L,ee),R){for(const Z in R)Z!=="value"&&!Ls(Z)&&s(K,Z,null,R[Z],C,ee);"value"in R&&s(K,"value",null,R.value,C),(ie=R.onVnodeBeforeMount)&&yn(ie,ee,b)}W&&ui(b,null,ee,"beforeMount");const Q=B_($,D);Q&&D.beforeEnter(K),i(K,O,z),((ie=R&&R.onVnodeMounted)||Q||W)&&jt(()=>{ie&&yn(ie,ee,b),Q&&D.enter(K),W&&ui(b,null,ee,"mounted")},$)},A=(b,O,z,ee,$)=>{if(z&&h(b,z),ee)for(let C=0;C<ee.length;C++)h(b,ee[C]);if($){let C=$.subTree;if(O===C||wl(C.type)&&(C.ssContent===O||C.ssFallback===O)){const L=$.vnode;A(b,L,L.scopeId,L.slotScopeIds,$.parent)}}},I=(b,O,z,ee,$,C,L,B,K=0)=>{for(let ie=K;ie<b.length;ie++){const R=b[ie]=B?cr(b[ie]):Ln(b[ie]);_(null,R,O,z,ee,$,C,L,B)}},M=(b,O,z,ee,$,C,L)=>{const B=O.el=b.el;let{patchFlag:K,dynamicChildren:ie,dirs:R}=O;K|=b.patchFlag&16;const x=b.props||Et,D=O.props||Et;let W;if(z&&Ar(z,!1),(W=D.onVnodeBeforeUpdate)&&yn(W,z,O,b),R&&ui(O,b,z,"beforeUpdate"),z&&Ar(z,!0),(x.innerHTML&&D.innerHTML==null||x.textContent&&D.textContent==null)&&u(B,""),ie?T(b.dynamicChildren,ie,B,z,ee,Mc(O,$),C):L||F(b,O,B,null,z,ee,Mc(O,$),C,!1),K>0){if(K&16)N(B,x,D,z,$);else if(K&2&&x.class!==D.class&&s(B,"class",null,D.class,$),K&4&&s(B,"style",x.style,D.style,$),K&8){const Q=O.dynamicProps;for(let Z=0;Z<Q.length;Z++){const he=Q[Z],fe=x[he],Ee=D[he];(Ee!==fe||he==="value")&&s(B,he,fe,Ee,$,z)}}K&1&&b.children!==O.children&&u(B,O.children)}else!L&&ie==null&&N(B,x,D,z,$);((W=D.onVnodeUpdated)||R)&&jt(()=>{W&&yn(W,z,O,b),R&&ui(O,b,z,"updated")},ee)},T=(b,O,z,ee,$,C,L)=>{for(let B=0;B<O.length;B++){const K=b[B],ie=O[B],R=K.el&&(K.type===It||!qn(K,ie)||K.shapeFlag&198)?f(K.el):z;_(K,ie,R,null,ee,$,C,L,!0)}},N=(b,O,z,ee,$)=>{if(O!==z){if(O!==Et)for(const C in O)!Ls(C)&&!(C in z)&&s(b,C,O[C],null,$,ee);for(const C in z){if(Ls(C))continue;const L=z[C],B=O[C];L!==B&&C!=="value"&&s(b,C,B,L,$,ee)}"value"in z&&s(b,"value",O.value,z.value,$)}},U=(b,O,z,ee,$,C,L,B,K)=>{const ie=O.el=b?b.el:a(""),R=O.anchor=b?b.anchor:a("");let{patchFlag:x,dynamicChildren:D,slotScopeIds:W}=O;W&&(B=B?B.concat(W):W),b==null?(i(ie,z,ee),i(R,z,ee),I(O.children||[],z,R,$,C,L,B,K)):x>0&&x&64&&D&&b.dynamicChildren?(T(b.dynamicChildren,D,z,$,C,L,B),(O.key!=null||$&&O===$.subTree)&&bd(b,O,!0)):F(b,O,z,R,$,C,L,B,K)},G=(b,O,z,ee,$,C,L,B,K)=>{O.slotScopeIds=B,b==null?O.shapeFlag&512?$.ctx.activate(O,z,ee,L,K):X(O,z,ee,$,C,L,K):Y(b,O,K)},X=(b,O,z,ee,$,C,L)=>{const B=b.component=PE(b,ee,$);if(ea(b)&&(B.ctx.renderer=le),LE(B,!1,L),B.asyncDep){if($&&$.registerDep(B,H,L),!b.el){const K=B.subTree=et(Ot);p(null,K,O,z),b.placeholder=K.el}}else H(B,b,O,z,$,C,L)},Y=(b,O,z)=>{const ee=O.component=b.component;if(xE(b,O,z))if(ee.asyncDep&&!ee.asyncResolved){te(ee,O,z);return}else ee.next=O,ee.update();else O.el=b.el,ee.vnode=O},H=(b,O,z,ee,$,C,L)=>{const B=()=>{if(b.isMounted){let{next:x,bu:D,u:W,parent:Q,vnode:Z}=b;{const de=H_(b);if(de){x&&(x.el=Z.el,te(b,x,L)),de.asyncDep.then(()=>{b.isUnmounted||B()});return}}let he=x,fe;Ar(b,!1),x?(x.el=Z.el,te(b,x,L)):x=Z,D&&Is(D),(fe=x.props&&x.props.onVnodeBeforeUpdate)&&yn(fe,Q,x,Z),Ar(b,!0);const Ee=Tc(b),Ae=b.subTree;b.subTree=Ee,_(Ae,Ee,f(Ae.el),k(Ae),b,$,C),x.el=Ee.el,he===null&&jl(b,Ee.el),W&&jt(W,$),(fe=x.props&&x.props.onVnodeUpdated)&&jt(()=>yn(fe,Q,x,Z),$)}else{let x;const{el:D,props:W}=O,{bm:Q,m:Z,parent:he,root:fe,type:Ee}=b,Ae=pr(O);if(Ar(b,!1),Q&&Is(Q),!Ae&&(x=W&&W.onVnodeBeforeMount)&&yn(x,he,O),Ar(b,!0),D&&ze){const de=()=>{b.subTree=Tc(b),ze(D,b.subTree,b,$,null)};Ae&&Ee.__asyncHydrate?Ee.__asyncHydrate(D,b,de):de()}else{fe.ce&&fe.ce._def.shadowRoot!==!1&&fe.ce._injectChildStyle(Ee);const de=b.subTree=Tc(b);_(null,de,z,ee,b,$,C),O.el=de.el}if(Z&&jt(Z,$),!Ae&&(x=W&&W.onVnodeMounted)){const de=O;jt(()=>yn(x,he,de),$)}(O.shapeFlag&256||he&&pr(he.vnode)&&he.vnode.shapeFlag&256)&&b.a&&jt(b.a,$),b.isMounted=!0,O=z=ee=null}};b.scope.on();const K=b.effect=new zg(B);b.scope.off();const ie=b.update=K.run.bind(K),R=b.job=K.runIfDirty.bind(K);R.i=b,R.id=b.uid,K.scheduler=()=>vd(R),Ar(b,!0),ie()},te=(b,O,z)=>{O.component=b;const ee=b.vnode.props;b.vnode=O,b.next=null,iE(b,O.props,ee,z),aE(b,O.children,z),$i(),mh(b),ji()},F=(b,O,z,ee,$,C,L,B,K=!1)=>{const ie=b&&b.children,R=b?b.shapeFlag:0,x=O.children,{patchFlag:D,shapeFlag:W}=O;if(D>0){if(D&128){ve(ie,x,z,ee,$,C,L,B,K);return}else if(D&256){ce(ie,x,z,ee,$,C,L,B,K);return}}W&8?(R&16&&oe(ie,$,C),x!==ie&&u(z,x)):R&16?W&16?ve(ie,x,z,ee,$,C,L,B,K):oe(ie,$,C,!0):(R&8&&u(z,""),W&16&&I(x,z,ee,$,C,L,B,K))},ce=(b,O,z,ee,$,C,L,B,K)=>{b=b||Cs,O=O||Cs;const ie=b.length,R=O.length,x=Math.min(ie,R);let D;for(D=0;D<x;D++){const W=O[D]=K?cr(O[D]):Ln(O[D]);_(b[D],W,z,null,$,C,L,B,K)}ie>R?oe(b,$,C,!0,!1,x):I(O,z,ee,$,C,L,B,K,x)},ve=(b,O,z,ee,$,C,L,B,K)=>{let ie=0;const R=O.length;let x=b.length-1,D=R-1;for(;ie<=x&&ie<=D;){const W=b[ie],Q=O[ie]=K?cr(O[ie]):Ln(O[ie]);if(qn(W,Q))_(W,Q,z,null,$,C,L,B,K);else break;ie++}for(;ie<=x&&ie<=D;){const W=b[x],Q=O[D]=K?cr(O[D]):Ln(O[D]);if(qn(W,Q))_(W,Q,z,null,$,C,L,B,K);else break;x--,D--}if(ie>x){if(ie<=D){const W=D+1,Q=W<R?O[W].el:ee;for(;ie<=D;)_(null,O[ie]=K?cr(O[ie]):Ln(O[ie]),z,Q,$,C,L,B,K),ie++}}else if(ie>D)for(;ie<=x;)Ne(b[ie],$,C,!0),ie++;else{const W=ie,Q=ie,Z=new Map;for(ie=Q;ie<=D;ie++){const we=O[ie]=K?cr(O[ie]):Ln(O[ie]);we.key!=null&&Z.set(we.key,ie)}let he,fe=0;const Ee=D-Q+1;let Ae=!1,de=0;const be=new Array(Ee);for(ie=0;ie<Ee;ie++)be[ie]=0;for(ie=W;ie<=x;ie++){const we=b[ie];if(fe>=Ee){Ne(we,$,C,!0);continue}let _e;if(we.key!=null)_e=Z.get(we.key);else for(he=Q;he<=D;he++)if(be[he-Q]===0&&qn(we,O[he])){_e=he;break}_e===void 0?Ne(we,$,C,!0):(be[_e-Q]=ie+1,_e>=de?de=_e:Ae=!0,_(we,O[_e],z,null,$,C,L,B,K),fe++)}const ke=Ae?uE(be):Cs;for(he=ke.length-1,ie=Ee-1;ie>=0;ie--){const we=Q+ie,_e=O[we],qe=O[we+1],V=we+1<R?qe.el||qe.placeholder:ee;be[ie]===0?_(null,_e,z,V,$,C,L,B,K):Ae&&(he<0||ie!==ke[he]?Me(_e,z,V,2):he--)}}},Me=(b,O,z,ee,$=null)=>{const{el:C,type:L,transition:B,children:K,shapeFlag:ie}=b;if(ie&6){Me(b.component.subTree,O,z,ee);return}if(ie&128){b.suspense.move(O,z,ee);return}if(ie&64){L.move(b,O,z,le);return}if(L===It){i(C,O,z);for(let x=0;x<K.length;x++)Me(K[x],O,z,ee);i(b.anchor,O,z);return}if(L===wo){y(b,O,z);return}if(ee!==2&&ie&1&&B)if(ee===0)B.beforeEnter(C),i(C,O,z),jt(()=>B.enter(C),$);else{const{leave:x,delayLeave:D,afterLeave:W}=B,Q=()=>{b.ctx.isUnmounted?r(C):i(C,O,z)},Z=()=>{C._isLeaving&&C[Ui](!0),x(C,()=>{Q(),W&&W()})};D?D(C,Q,Z):Z()}else i(C,O,z)},Ne=(b,O,z,ee=!1,$=!1)=>{const{type:C,props:L,ref:B,children:K,dynamicChildren:ie,shapeFlag:R,patchFlag:x,dirs:D,cacheIndex:W}=b;if(x===-2&&($=!1),B!=null&&($i(),Ns(B,null,z,b,!0),ji()),W!=null&&(O.renderCache[W]=void 0),R&256){O.ctx.deactivate(b);return}const Q=R&1&&D,Z=!pr(b);let he;if(Z&&(he=L&&L.onVnodeBeforeUnmount)&&yn(he,O,b),R&6)je(b.component,z,ee);else{if(R&128){b.suspense.unmount(z,ee);return}Q&&ui(b,null,O,"beforeUnmount"),R&64?b.type.remove(b,O,z,le,ee):ie&&!ie.hasOnce&&(C!==It||x>0&&x&64)?oe(ie,O,z,!1,!0):(C===It&&x&384||!$&&R&16)&&oe(K,O,z),ee&&Oe(b)}(Z&&(he=L&&L.onVnodeUnmounted)||Q)&&jt(()=>{he&&yn(he,O,b),Q&&ui(b,null,O,"unmounted")},z)},Oe=b=>{const{type:O,el:z,anchor:ee,transition:$}=b;if(O===It){Ve(z,ee);return}if(O===wo){v(b);return}const C=()=>{r(z),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(b.shapeFlag&1&&$&&!$.persisted){const{leave:L,delayLeave:B}=$,K=()=>L(z,C);B?B(b.el,C,K):K()}else C()},Ve=(b,O)=>{let z;for(;b!==O;)z=d(b),r(b),b=z;r(O)},je=(b,O,z)=>{const{bum:ee,scope:$,job:C,subTree:L,um:B,m:K,a:ie}=b;Tl(K),Tl(ie),ee&&Is(ee),$.stop(),C&&(C.flags|=8,Ne(L,b,O,z)),B&&jt(B,O),jt(()=>{b.isUnmounted=!0},O)},oe=(b,O,z,ee=!1,$=!1,C=0)=>{for(let L=C;L<b.length;L++)Ne(b[L],O,z,ee,$)},k=b=>{if(b.shapeFlag&6)return k(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const O=d(b.anchor||b.el),z=O&&O[c_];return z?d(z):O};let se=!1;const ae=(b,O,z)=>{b==null?O._vnode&&Ne(O._vnode,null,null,!0):_(O._vnode||null,b,O,null,null,null,z),O._vnode=b,se||(se=!0,mh(),xl(),se=!1)},le={p:_,um:Ne,m:Me,r:Oe,mt:X,mc:I,pc:F,pbc:T,n:k,o:t};let ye,ze;return e&&([ye,ze]=e(le)),{render:ae,hydrate:ye,createApp:tE(ae,ye)}}function Mc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ar({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function B_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function bd(t,e,n=!1){const i=t.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=cr(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&bd(o,a)),a.type===mr&&a.patchFlag!==-1&&(a.el=o.el),a.type===Ot&&!a.el&&(a.el=o.el)}}function uE(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function H_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:H_(e)}function Tl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const fE=Symbol.for("v-scx"),dE=()=>fn(fE);function z_(t,e){return Sd(t,null,e)}function Gt(t,e,n){return Sd(t,e,n)}function Sd(t,e,n=Et){const{immediate:i,deep:r,flush:s,once:o}=n,a=Zt({},n),l=e&&i||!e&&s!=="post";let c;if(Gs){if(s==="sync"){const h=dE();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=mi,h.resume=mi,h.pause=mi,h}}const u=tn;a.call=(h,g,_)=>ni(h,u,g,_);let f=!1;s==="post"?a.scheduler=h=>{jt(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():vd(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=wx(t,e,a);return Gs&&(c?c.push(d):l&&d()),d}function hE(t,e,n){const i=this.proxy,r=Rt(t)?t.includes(".")?V_(i,t):()=>i[t]:t.bind(i,i);let s;We(e)?s=e:(s=e.handler,n=e);const o=na(this),a=Sd(r,s.bind(i),n);return o(),a}function V_(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const pE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zn(e)}Modifiers`]||t[`${ns(e)}Modifiers`];function mE(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Et;let r=n;const s=e.startsWith("update:"),o=s&&pE(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Rt(u)?u.trim():u)),o.number&&(r=n.map(Mu)));let a,l=i[a=mc(e)]||i[a=mc(zn(e))];!l&&s&&(l=i[a=mc(ns(e))]),l&&ni(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ni(c,t,6,r)}}const gE=new WeakMap;function G_(t,e,n=!1){const i=n?gE:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!We(t)){const l=c=>{const u=G_(c,e,!0);u&&(a=!0,Zt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(bt(t)&&i.set(t,null),null):(He(s)?s.forEach(l=>o[l]=null):Zt(o,s),bt(t)&&i.set(t,o),o)}function $l(t,e){return!t||!Yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),pt(t,e[0].toLowerCase()+e.slice(1))||pt(t,ns(e))||pt(t,e))}function Tc(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=t,m=El(t);let p,E;try{if(n.shapeFlag&4){const v=r||i,S=v;p=Ln(c.call(S,v,u,f,h,d,g)),E=a}else{const v=e;p=Ln(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),E=e.props?a:vE(a)}}catch(v){Ao.length=0,Zs(v,t,1),p=et(Ot)}let y=p;if(E&&_!==!1){const v=Object.keys(E),{shapeFlag:S}=y;v.length&&S&7&&(s&&v.some(ad)&&(E=yE(E,s)),y=yi(y,E,!1,!0))}return n.dirs&&(y=yi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&zs(y,n.transition),p=y,El(m),p}function _E(t,e=!0){let n;for(let i=0;i<t.length;i++){const r=t[i];if(Zr(r)){if(r.type!==Ot||r.children==="v-if"){if(n)return;n=r}}else return}return n}const vE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yo(n))&&((e||(e={}))[n]=t[n]);return e},yE=(t,e)=>{const n={};for(const i in t)(!ad(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function xE(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Ph(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!$l(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ph(i,o,c):!0:!!o;return!1}function Ph(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!$l(n,s))return!0}return!1}function jl({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const wl=t=>t.__isSuspense;let Uu=0;const EE={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,o,a,l,c){if(t==null)bE(e,n,i,r,s,o,a,l,c);else{if(s&&s.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}SE(t,e,n,i,r,o,a,l,c)}},hydrate:ME,normalize:TE},W_=EE;function No(t,e){const n=t.props&&t.props[e];We(n)&&n()}function bE(t,e,n,i,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),d=t.suspense=X_(t,r,i,e,f,n,s,o,a,l);c(null,d.pendingBranch=t.ssContent,f,null,i,d,s,o),d.deps>0?(No(t,"onPending"),No(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,s,o),Us(d,t.ssFallback)):d.resolve(!1,!0)}function SE(t,e,n,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const d=e.ssContent,h=e.ssFallback,{activeBranch:g,pendingBranch:_,isInFallback:m,isHydrating:p}=f;if(_)f.pendingBranch=d,qn(_,d)?(l(_,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():m&&(p||(l(g,h,n,i,r,null,s,o,a),Us(f,h)))):(f.pendingId=Uu++,p?(f.isHydrating=!1,f.activeBranch=_):c(_,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(g,h,n,i,r,null,s,o,a),Us(f,h))):g&&qn(g,d)?(l(g,d,n,i,r,f,s,o,a),f.resolve(!0)):(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(g&&qn(g,d))l(g,d,n,i,r,f,s,o,a),Us(f,d);else if(No(e,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=Uu++,l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:E,pendingId:y}=f;E>0?setTimeout(()=>{f.pendingId===y&&f.fallback(h)},E):E===0&&f.fallback(h)}}function X_(t,e,n,i,r,s,o,a,l,c,u=!1){const{p:f,m:d,um:h,n:g,o:{parentNode:_,remove:m}}=c;let p;const E=wE(t);E&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);const y=t.props?Og(t.props.timeout):void 0,v=s,S={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:Uu++,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(w=!1,A=!1){const{vnode:I,activeBranch:M,pendingBranch:T,pendingId:N,effects:U,parentComponent:G,container:X}=S;let Y=!1;S.isHydrating?S.isHydrating=!1:w||(Y=M&&T.transition&&T.transition.mode==="out-in",Y&&(M.transition.afterLeave=()=>{N===S.pendingId&&(d(T,X,s===v?g(M):s,0),Ru(U))}),M&&(_(M.el)===X&&(s=g(M)),h(M,G,S,!0)),Y||d(T,X,s,0)),Us(S,T),S.pendingBranch=null,S.isInFallback=!1;let H=S.parent,te=!1;for(;H;){if(H.pendingBranch){H.effects.push(...U),te=!0;break}H=H.parent}!te&&!Y&&Ru(U),S.effects=[],E&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!A&&e.resolve()),No(I,"onResolve")},fallback(w){if(!S.pendingBranch)return;const{vnode:A,activeBranch:I,parentComponent:M,container:T,namespace:N}=S;No(A,"onFallback");const U=g(I),G=()=>{S.isInFallback&&(f(null,w,T,U,M,null,N,a,l),Us(S,w))},X=w.transition&&w.transition.mode==="out-in";X&&(I.transition.afterLeave=G),S.isInFallback=!0,h(I,M,null,!0),X||G()},move(w,A,I){S.activeBranch&&d(S.activeBranch,w,A,I),S.container=w},next(){return S.activeBranch&&g(S.activeBranch)},registerDep(w,A,I){const M=!!S.pendingBranch;M&&S.deps++;const T=w.vnode.el;w.asyncDep.catch(N=>{Zs(N,w,0)}).then(N=>{if(w.isUnmounted||S.isUnmounted||S.pendingId!==w.suspenseId)return;w.asyncResolved=!0;const{vnode:U}=w;Fu(w,N),T&&(U.el=T);const G=!T&&w.subTree.el;A(w,U,_(T||w.subTree.el),T?null:g(w.subTree),S,o,I),G&&m(G),jl(w,U.el),M&&--S.deps===0&&S.resolve()})},unmount(w,A){S.isUnmounted=!0,S.activeBranch&&h(S.activeBranch,n,w,A),S.pendingBranch&&h(S.pendingBranch,n,w,A)}};return S}function ME(t,e,n,i,r,s,o,a,l){const c=e.suspense=X_(e,i,n,t.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function TE(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=Lh(i?n.default:n),t.ssFallback=i?Lh(n.fallback):et(Ot)}function Lh(t){let e;if(We(t)){const n=Vs&&t._c;n&&(t._d=!1,lt()),t=t(),n&&(t._d=!0,e=En,j_())}return He(t)&&(t=_E(t)),t=Ln(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function $_(t,e){e&&e.pendingBranch?He(t)?e.effects.push(...t):e.effects.push(t):Ru(t)}function Us(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,jl(i,r))}function wE(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const It=Symbol.for("v-fgt"),mr=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),wo=Symbol.for("v-stc"),Ao=[];let En=null;function lt(t=!1){Ao.push(En=t?null:[])}function j_(){Ao.pop(),En=Ao[Ao.length-1]||null}let Vs=1;function Al(t,e=!1){Vs+=t,t<0&&En&&e&&(En.hasOnce=!0)}function q_(t){return t.dynamicChildren=Vs>0?En||Cs:null,j_(),Vs>0&&En&&En.push(t),t}function bn(t,e,n,i,r,s){return q_(Qe(t,e,n,i,r,s,!0))}function un(t,e,n,i,r){return q_(et(t,e,n,i,r,!0))}function Zr(t){return t?t.__v_isVNode===!0:!1}function qn(t,e){return t.type===e.type&&t.key===e.key}const Y_=({key:t})=>t??null,ol=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Rt(t)||At(t)||We(t)?{i:nn,r:t,k:e,f:!!n}:t:null);function Qe(t,e=null,n=null,i=0,r=null,s=t===It?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Y_(e),ref:e&&ol(e),scopeId:l_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:nn};return a?(Td(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Rt(n)?8:16),Vs>0&&!o&&En&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&En.push(l),l}const et=AE;function AE(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===M_)&&(t=Ot),Zr(t)){const a=yi(t,e,!0);return n&&Td(a,n),Vs>0&&!s&&En&&(a.shapeFlag&6?En[En.indexOf(t)]=a:En.push(a)),a.patchFlag=-2,a}if(UE(t)&&(t=t.__vccOpts),e){e=K_(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=Jo(a)),bt(l)&&(gd(l)&&!He(l)&&(l=Zt({},l)),e.style=hr(l))}const o=Rt(t)?1:wl(t)?128:u_(t)?64:bt(t)?4:We(t)?2:0;return Qe(t,e,n,i,r,o,s,!0)}function K_(t){return t?gd(t)||I_(t)?Zt({},t):t:null}function yi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?J_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Y_(c),ref:e&&e.ref?n&&s?He(s)?s.concat(ol(e)):[s,ol(e)]:ol(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yi(t.ssContent),ssFallback:t.ssFallback&&yi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&zs(u,l.clone(u)),u}function Uo(t=" ",e=0){return et(mr,null,t,e)}function y2(t,e){const n=et(wo,null,t);return n.staticCount=e,n}function Md(t="",e=!1){return e?(lt(),un(Ot,null,t)):et(Ot,null,t)}function Ln(t){return t==null||typeof t=="boolean"?et(Ot):He(t)?et(It,null,t.slice()):Zr(t)?cr(t):et(mr,null,String(t))}function cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yi(t)}function Td(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(He(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Td(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!I_(e)?e._ctx=nn:r===3&&nn&&(nn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:nn},n=32):(e=String(e),i&64?(n=16,e=[Uo(e)]):n=8);t.children=e,t.shapeFlag|=n}function J_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Jo([e.class,i.class]));else if(r==="style")e.style=hr([e.style,i.style]);else if(Yo(r)){const s=e[r],o=i[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function yn(t,e,n,i=null){ni(t,e,7,[n,i])}const RE=C_();let CE=0;function PE(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||RE,s={uid:CE++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:N_(i,r),emitsOptions:G_(i,r),emit:null,emitted:null,propsDefaults:Et,inheritAttrs:i.inheritAttrs,ctx:Et,data:Et,props:Et,attrs:Et,slots:Et,refs:Et,setupState:Et,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=mE.bind(null,s),t.ce&&t.ce(s),s}let tn=null;const In=()=>tn||nn;let Rl,Ou;{const t=Vl(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Rl=e("__VUE_INSTANCE_SETTERS__",n=>tn=n),Ou=e("__VUE_SSR_SETTERS__",n=>Gs=n)}const na=t=>{const e=tn;return Rl(t),t.scope.on(),()=>{t.scope.off(),Rl(e)}},Ih=()=>{tn&&tn.scope.off(),Rl(null)};function Z_(t){return t.vnode.shapeFlag&4}let Gs=!1;function LE(t,e=!1,n=!1){e&&Ou(e);const{props:i,children:r}=t.vnode,s=Z_(t);nE(t,i,s,e),oE(t,r,n||e);const o=s?IE(t,e):void 0;return e&&Ou(!1),o}function IE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qx);const{setup:i}=n;if(i){$i();const r=t.setupContext=i.length>1?NE(t):null,s=na(t),o=Qo(i,t,0,[t.props,r]),a=Ig(o);if(ji(),s(),(a||t.sp)&&!pr(t)&&yd(t),a){if(o.then(Ih,Ih),e)return o.then(l=>{Fu(t,l)}).catch(l=>{Zs(l,t,0)});t.asyncDep=o}else Fu(t,o)}else Q_(t)}function Fu(t,e,n){We(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:bt(e)&&(t.setupState=n_(e)),Q_(t)}function Q_(t,e,n){const i=t.type;t.render||(t.render=i.render||mi);{const r=na(t);$i();try{Yx(t)}finally{ji(),r()}}}const DE={get(t,e){return cn(t,"get",""),t[e]}};function NE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,DE),slots:t.slots,emit:t.emit,expose:e}}function ql(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(n_(_x(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in To)return To[n](t)},has(e,n){return n in e||n in To}})):t.proxy}function ku(t,e=!0){return We(t)?t.displayName||t.name:t.name||e&&t.__name}function UE(t){return We(t)&&"__vccOpts"in t}const mt=(t,e)=>Mx(t,e,Gs);function Vt(t,e,n){try{Al(-1);const i=arguments.length;return i===2?bt(e)&&!He(e)?Zr(e)?et(t,null,[e]):et(t,e):et(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Zr(n)&&(n=[n]),et(t,e,n))}finally{Al(1)}}const OE="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bu;const Dh=typeof window<"u"&&window.trustedTypes;if(Dh)try{Bu=Dh.createPolicy("vue",{createHTML:t=>t})}catch{}const ev=Bu?t=>Bu.createHTML(t):t=>t,FE="http://www.w3.org/2000/svg",kE="http://www.w3.org/1998/Math/MathML",Ni=typeof document<"u"?document:null,Nh=Ni&&Ni.createElement("template"),BE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Ni.createElementNS(FE,t):e==="mathml"?Ni.createElementNS(kE,t):n?Ni.createElement(t,{is:n}):Ni.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Ni.createTextNode(t),createComment:t=>Ni.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ni.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Nh.innerHTML=ev(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Nh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Qi="transition",ao="animation",Oo=Symbol("_vtc"),tv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},HE=Zt({},h_,tv),zE=t=>(t.displayName="Transition",t.props=HE,t),Yl=zE((t,{slots:e})=>Vt(Ix,VE(t),e)),Rr=(t,e=[])=>{He(t)?t.forEach(n=>n(...e)):t&&t(...e)},Uh=t=>t?He(t)?t.some(e=>e.length>1):t.length>1:!1;function VE(t){const e={};for(const U in t)U in tv||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=GE(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:E,onEnterCancelled:y,onLeave:v,onLeaveCancelled:S,onBeforeAppear:w=p,onAppear:A=E,onAppearCancelled:I=y}=e,M=(U,G,X,Y)=>{U._enterCancelled=Y,Cr(U,G?u:a),Cr(U,G?c:o),X&&X()},T=(U,G)=>{U._isLeaving=!1,Cr(U,f),Cr(U,h),Cr(U,d),G&&G()},N=U=>(G,X)=>{const Y=U?A:E,H=()=>M(G,U,X);Rr(Y,[G,H]),Oh(()=>{Cr(G,U?l:s),Si(G,U?u:a),Uh(Y)||Fh(G,i,_,H)})};return Zt(e,{onBeforeEnter(U){Rr(p,[U]),Si(U,s),Si(U,o)},onBeforeAppear(U){Rr(w,[U]),Si(U,l),Si(U,c)},onEnter:N(!1),onAppear:N(!0),onLeave(U,G){U._isLeaving=!0;const X=()=>T(U,G);Si(U,f),U._enterCancelled?(Si(U,d),Hh(U)):(Hh(U),Si(U,d)),Oh(()=>{U._isLeaving&&(Cr(U,f),Si(U,h),Uh(v)||Fh(U,i,m,X))}),Rr(v,[U,X])},onEnterCancelled(U){M(U,!1,void 0,!0),Rr(y,[U])},onAppearCancelled(U){M(U,!0,void 0,!0),Rr(I,[U])},onLeaveCancelled(U){T(U),Rr(S,[U])}})}function GE(t){if(t==null)return null;if(bt(t))return[wc(t.enter),wc(t.leave)];{const e=wc(t);return[e,e]}}function wc(t){return Og(t)}function Si(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Oo]||(t[Oo]=new Set)).add(e)}function Cr(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Oo];n&&(n.delete(e),n.size||(t[Oo]=void 0))}function Oh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let WE=0;function Fh(t,e,n,i){const r=t._endId=++WE,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=XE(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function XE(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${Qi}Delay`),s=i(`${Qi}Duration`),o=kh(r,s),a=i(`${ao}Delay`),l=i(`${ao}Duration`),c=kh(a,l);let u=null,f=0,d=0;e===Qi?o>0&&(u=Qi,f=o,d=s.length):e===ao?c>0&&(u=ao,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Qi:ao:null,d=u?u===Qi?s.length:l.length:0);const h=u===Qi&&/\b(?:transform|all)(?:,|$)/.test(i(`${Qi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function kh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Bh(n)+Bh(t[i])))}function Bh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Hh(t){return(t?t.ownerDocument:document).body.offsetHeight}function $E(t,e,n){const i=t[Oo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const zh=Symbol("_vod"),jE=Symbol("_vsh"),qE=Symbol(""),YE=/(?:^|;)\s*display\s*:/;function KE(t,e,n){const i=t.style,r=Rt(n);let s=!1;if(n&&!r){if(e)if(Rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&al(i,a,"")}else for(const o in e)n[o]==null&&al(i,o,"");for(const o in n)o==="display"&&(s=!0),al(i,o,n[o])}else if(r){if(e!==n){const o=i[qE];o&&(n+=";"+o),i.cssText=n,s=YE.test(n)}}else e&&t.removeAttribute("style");zh in t&&(t[zh]=s?i.display:"",t[jE]&&(i.display="none"))}const Vh=/\s*!important$/;function al(t,e,n){if(He(n))n.forEach(i=>al(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=JE(t,e);Vh.test(n)?t.setProperty(ns(i),n.replace(Vh,""),"important"):t[i]=n}}const Gh=["Webkit","Moz","ms"],Ac={};function JE(t,e){const n=Ac[e];if(n)return n;let i=zn(e);if(i!=="filter"&&i in t)return Ac[e]=i;i=zl(i);for(let r=0;r<Gh.length;r++){const s=Gh[r]+i;if(s in t)return Ac[e]=s}return e}const Wh="http://www.w3.org/1999/xlink";function Xh(t,e,n,i,r,s=Jy(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Wh,e.slice(6,e.length)):t.setAttributeNS(Wh,e,n):n==null||s&&!Fg(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Ji(n)?String(n):n)}function $h(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ev(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Fg(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Ms(t,e,n,i){t.addEventListener(e,n,i)}function ZE(t,e,n,i){t.removeEventListener(e,n,i)}const jh=Symbol("_vei");function QE(t,e,n,i,r=null){const s=t[jh]||(t[jh]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=eb(e);if(i){const c=s[e]=ib(i,r);Ms(t,a,c,l)}else o&&(ZE(t,a,o,l),s[e]=void 0)}}const qh=/(?:Once|Passive|Capture)$/;function eb(t){let e;if(qh.test(t)){e={};let i;for(;i=t.match(qh);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ns(t.slice(2)),e]}let Rc=0;const tb=Promise.resolve(),nb=()=>Rc||(tb.then(()=>Rc=0),Rc=Date.now());function ib(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ni(rb(i,n.value),e,5,[i])};return n.value=t,n.attached=nb(),n}function rb(t,e){if(He(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Yh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,sb=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?$E(t,i,o):e==="style"?KE(t,n,i):Yo(e)?ad(e)||QE(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ob(t,e,i,o))?($h(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xh(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Rt(i))?$h(t,zn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Xh(t,e,i,o))};function ob(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yh(e)&&We(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Yh(e)&&Rt(n)?!1:e in t}const Kh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return He(e)?n=>Is(e,n):e};function ab(t){t.target.composing=!0}function Jh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Cc=Symbol("_assign"),x2={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Cc]=Kh(r);const s=i||r.props&&r.props.type==="number";Ms(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Mu(a)),t[Cc](a)}),n&&Ms(t,"change",()=>{t.value=t.value.trim()}),e||(Ms(t,"compositionstart",ab),Ms(t,"compositionend",Jh),Ms(t,"change",Jh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[Cc]=Kh(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?Mu(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},lb=["ctrl","shift","alt","meta"],cb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>lb.some(n=>t[`${n}Key`]&&!e.includes(n))},E2=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=cb[e[o]];if(a&&a(r,e))return}return t(r,...s)}))},nv=Zt({patchProp:sb},BE);let Ro,Zh=!1;function ub(){return Ro||(Ro=lE(nv))}function fb(){return Ro=Zh?Ro:cE(nv),Zh=!0,Ro}const db=((...t)=>{const e=ub().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=rv(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,iv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e}),hb=((...t)=>{const e=fb().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=rv(i);if(r)return n(r,!0,iv(r))},e});function iv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rv(t){return Rt(t)?document.querySelector(t):t}const pb=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,mb=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,gb=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function _b(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){vb(t);return}return e}function vb(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Fo(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!gb.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(pb.test(t)||mb.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,_b)}return JSON.parse(t)}catch(i){if(e.strict)throw i;return t}}const yb=/#/g,xb=/&/g,Eb=/\//g,bb=/=/g,wd=/\+/g,Sb=/%5e/gi,Mb=/%60/gi,Tb=/%7c/gi,wb=/%20/gi;function Ab(t){return encodeURI(""+t).replace(Tb,"|")}function Hu(t){return Ab(typeof t=="string"?t:JSON.stringify(t)).replace(wd,"%2B").replace(wb,"+").replace(yb,"%23").replace(xb,"%26").replace(Mb,"`").replace(Sb,"^").replace(Eb,"%2F")}function Pc(t){return Hu(t).replace(bb,"%3D")}function Cl(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function Rb(t){return Cl(t.replace(wd," "))}function Cb(t){return Cl(t.replace(wd," "))}function Ad(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const i=n.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=Rb(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=Cb(i[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function Pb(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Pc(t)}=${Hu(n)}`).join("&"):`${Pc(t)}=${Hu(e)}`:Pc(t)}function Lb(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>Pb(e,t[e])).filter(Boolean).join("&")}const Ib=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,Db=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,Nb=/^([/\\]\s*){2,}[^/\\]/,Ub=/^[\s\0]*(blob|data|javascript|vbscript):$/i,Ob=/\/$|\/\?|\/#/,Fb=/^\.?\//;function xi(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?Ib.test(t):Db.test(t)||(e.acceptRelative?Nb.test(t):!1)}function kb(t){return!!t&&Ub.test(t)}function zu(t="",e){return e?Ob.test(t):t.endsWith("/")}function ko(t="",e){if(!e)return(zu(t)?t.slice(0,-1):t)||"/";if(!zu(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");r!==-1&&(n=t.slice(0,r),i=t.slice(r));const[s,...o]=n.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function Bb(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(zu(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");if(r!==-1&&(n=t.slice(0,r),i=t.slice(r),!n))return i;const[s,...o]=n.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function Hb(t,e){if(sv(e)||xi(t))return t;const n=ko(e);return t.startsWith(n)?t:Qr(n,t)}function Qh(t,e){if(sv(e))return t;const n=ko(e);if(!t.startsWith(n))return t;const i=t.slice(n.length);return i[0]==="/"?i:"/"+i}function Kl(t,e){const n=lv(t),i={...Ad(n.search),...e};return n.search=Lb(i),Gb(n)}function sv(t){return!t||t==="/"}function zb(t){return t&&t!=="/"}function Qr(t,...e){let n=t||"";for(const i of e.filter(r=>zb(r)))if(n){const r=i.replace(Fb,"");n=Bb(n)+r}else n=i;return n}function ov(...t){const e=/\/(?!\/)/,n=t.filter(Boolean),i=[];let r=0;for(const o of n)if(!(!o||o==="/")){for(const[a,l]of o.split(e).entries())if(!(!l||l===".")){if(l===".."){if(i.length===1&&xi(i[0]))continue;i.pop(),r--;continue}if(a===1&&i[i.length-1]?.endsWith(":/")){i[i.length-1]+="/"+l;continue}i.push(l),r++}}let s=i.join("/");return r>=0?n[0]?.startsWith("/")&&!s.startsWith("/")?s="/"+s:n[0]?.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,n[n.length-1]?.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function Vb(t,e){return Cl(ko(t))===Cl(ko(e))}const av=Symbol.for("ufo:protocolRelative");function lv(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,d=""]=n;return{protocol:f.toLowerCase(),pathname:d,href:f+d,auth:"",host:"",search:"",hash:""}}if(!xi(t,{acceptRelative:!0}))return Vu(t);const[,i="",r,s=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:c,hash:u}=Vu(a);return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:c,hash:u,[av]:!i}}function Vu(t=""){const[e="",n="",i=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:i}}function Gb(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",i=t.hash||"",r=t.auth?t.auth+"@":"",s=t.host||"";return(t.protocol||t[av]?(t.protocol||"")+"//":"")+r+s+e+n+i}class Wb extends Error{constructor(e,n){super(e,n),this.name="FetchError",n?.cause&&!this.cause&&(this.cause=n.cause)}}function Xb(t){const e=t.error?.message||t.error?.toString()||"",n=t.request?.method||t.options?.method||"GET",i=t.request?.url||String(t.request)||"/",r=`[${n}] ${JSON.stringify(i)}`,s=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${r}: ${s}${e?` ${e}`:""}`,a=new Wb(o,t.error?{cause:t.error}:void 0);for(const l of["request","options","response"])Object.defineProperty(a,l,{get(){return t[l]}});for(const[l,c]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,l,{get(){return t.response&&t.response[c]}});return a}const $b=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function ep(t="GET"){return $b.has(t.toUpperCase())}function jb(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const qb=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Yb=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Kb(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return Yb.test(e)?"json":qb.has(e)||e.startsWith("text/")?"text":"blob"}function Jb(t,e,n,i){const r=Zb(e?.headers??t?.headers,n?.headers,i);let s;return(n?.query||n?.params||e?.params||e?.query)&&(s={...n?.params,...n?.query,...e?.params,...e?.query}),{...n,...e,query:s,params:s,headers:r}}function Zb(t,e,n){if(!e)return new n(t);const i=new n(e);if(t)for(const[r,s]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))i.set(r,s);return i}async function ba(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const Qb=new Set([408,409,425,429,500,502,503,504]),eS=new Set([101,204,205,304]);function cv(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:i=globalThis.AbortController}=t;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let u;typeof a.options.retry=="number"?u=a.options.retry:u=ep(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):Qb.has(f))){const d=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return d>0&&await new Promise(h=>setTimeout(h,d)),s(a.request,{...a.options,retry:u-1})}}const c=Xb(a);throw Error.captureStackTrace&&Error.captureStackTrace(c,s),c}const s=async function(l,c={}){const u={request:l,options:Jb(l,c,t.defaults,n),response:void 0,error:void 0};u.options.method&&(u.options.method=u.options.method.toUpperCase()),u.options.onRequest&&await ba(u,u.options.onRequest),typeof u.request=="string"&&(u.options.baseURL&&(u.request=Hb(u.request,u.options.baseURL)),u.options.query&&(u.request=Kl(u.request,u.options.query),delete u.options.query),"query"in u.options&&delete u.options.query,"params"in u.options&&delete u.options.params),u.options.body&&ep(u.options.method)&&(jb(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new n(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half")));let f;if(!u.options.signal&&u.options.timeout){const h=new i;f=setTimeout(()=>{const g=new Error("[TimeoutError]: The operation was aborted due to timeout");g.name="TimeoutError",g.code=23,h.abort(g)},u.options.timeout),u.options.signal=h.signal}try{u.response=await e(u.request,u.options)}catch(h){return u.error=h,u.options.onRequestError&&await ba(u,u.options.onRequestError),await r(u)}finally{f&&clearTimeout(f)}if((u.response.body||u.response._bodyInit)&&!eS.has(u.response.status)&&u.options.method!=="HEAD"){const h=(u.options.parseResponse?"json":u.options.responseType)||Kb(u.response.headers.get("content-type")||"");switch(h){case"json":{const g=await u.response.text(),_=u.options.parseResponse||Fo;u.response._data=_(g);break}case"stream":{u.response._data=u.response.body||u.response._bodyInit;break}default:u.response._data=await u.response[h]()}}return u.options.onResponse&&await ba(u,u.options.onResponse),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await ba(u,u.options.onResponseError),await r(u)):u.response},o=async function(l,c){return(await s(l,c))._data};return o.raw=s,o.native=(...a)=>e(...a),o.create=(a={},l={})=>cv({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const Pl=(function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")})(),tS=Pl.fetch?(...t)=>Pl.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),nS=Pl.Headers,iS=Pl.AbortController,rS=cv({fetch:tS,Headers:nS,AbortController:iS}),sS=rS,oS=()=>window?.__NUXT__?.config||window?.useNuxtApp?.().payload?.config,Rd=()=>oS().app,aS=()=>Rd().baseURL,lS=()=>Rd().buildAssetsDir,Cd=(...t)=>ov(uv(),lS(),...t),uv=(...t)=>{const e=Rd(),n=e.cdnURL||e.baseURL;return t.length?ov(n,...t):n};globalThis.__buildAssetsURL=Cd,globalThis.__publicAssetsURL=uv;globalThis.$fetch||(globalThis.$fetch=sS.create({baseURL:aS()}));"global"in globalThis||(globalThis.global=globalThis);function Gu(t,e={},n){for(const i in t){const r=t[i],s=n?`${n}:${i}`:i;typeof r=="object"&&r!==null?Gu(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const cS={run:t=>t()},uS=()=>cS,fv=typeof console.createTask<"u"?console.createTask:uS;function fS(t,e){const n=e.shift(),i=fv(n);return t.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function dS(t,e){const n=e.shift(),i=fv(n);return Promise.all(t.map(r=>i.run(()=>r(...e))))}function Lc(t,e){for(const n of[...t])n(e)}class hS{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,i={}){if(!e||typeof n!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,n(...s));return i=this.hook(e,r),i}removeHook(e,n){if(this._hooks[e]){const i=this._hooks[e].indexOf(n);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Gu(e),i=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const n=Gu(e);for(const i in n)this.removeHook(i,n[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(fS,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(dS,e,...n)}callHookWith(e,n,...i){const r=this._before||this._after?{name:n,args:i,context:{}}:void 0;this._before&&Lc(this._before,r);const s=e(n in this._hooks?[...this._hooks[n]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&Lc(this._after,r)}):(this._after&&r&&Lc(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function dv(){return new hS}function pS(t={}){let e,n=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{i(o),e=o;try{return r?r.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},c=()=>e===o?l:void 0;Wu.add(c);try{const u=r?r.run(o,a):a();return n||(e=void 0),await u}finally{Wu.delete(c)}}}}function mS(t={}){const e={};return{get(n,i={}){return e[n]||(e[n]=pS({...t,...i})),e[n]}}}const Ll=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},tp="__unctx__",gS=Ll[tp]||(Ll[tp]=mS()),_S=(t,e={})=>gS.get(t,e),np="__unctx_async_handlers__",Wu=Ll[np]||(Ll[np]=new Set);function gr(t){const e=[];for(const r of Wu){const s=r();s&&e.push(s)}const n=()=>{for(const r of e)r()};let i=t();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw n(),r})),[i,n]}const ip=!1,vS=!1,rp={id:"__nuxt-loader"},b2={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},yS="#__nuxt",hv="nuxt-app",sp=36e5,xS="vite:preloadError";function pv(t=hv){return _S(t,{asyncContext:!1})}const ES="__nuxt_plugin";function bS(t){let e=0;const n={_id:t.id||hv||"nuxt-app",_scope:ud(),provide:void 0,versions:{get nuxt(){return"4.1.3"},get vue(){return n.vueApp.version}},payload:Bi({...t.ssrContext?.payload||{},data:Bi({}),state:ti({}),once:new Set,_errors:Bi({})}),static:{data:{}},runWithContext(r){return n._scope.active&&!Zo()?n._scope.run(()=>op(n,r)):op(n,r)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Bi({}),_payloadRevivers:{},...t};{const r=window.__NUXT__;if(r)for(const s in r)switch(s){case"data":case"state":case"_errors":Object.assign(n.payload[s],r[s]);break;default:n.payload[s]=r[s]}}n.hooks=dv(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(r,s)=>{const o="$"+r;Sa(n,o,s),Sa(n.vueApp.config.globalProperties,o,s)},Sa(n.vueApp,"$nuxt",n),Sa(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(xS,s=>{n.callHook("app:chunkError",{error:s.payload}),s.payload.message.includes("Unable to preload CSS")&&s.preventDefault()}),window.useNuxtApp||=at;const r=n.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});n.hook("app:mounted",r)}const i=n.payload.config;return n.provide("config",i),n}function SS(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function MS(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const i in n)t.provide(i,n[i])}}async function TS(t,e){const n=new Set,i=[],r=[];let s,o=0;async function a(l){const c=l.dependsOn?.filter(u=>e.some(f=>f._name===u)&&!n.has(u))??[];if(c.length>0)i.push([new Set(c),l]);else{const u=MS(t,l).then(async()=>{l._name&&(n.add(l._name),await Promise.all(i.map(async([f,d])=>{f.has(l._name)&&(f.delete(l._name),f.size===0&&(o++,await a(d)))})))}).catch(f=>{if(!l.parallel&&!t.payload.error)throw f;s||=f});l.parallel?r.push(u):await u}}for(const l of e)SS(t,l);for(const l of e)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(s)throw t.payload.error||s}function rn(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[ES]:!0,_name:e})}function op(t,e,n){const i=()=>e();return pv(t._id).set(t),t.vueApp.runWithContext(i)}function wS(t){let e;return eo()&&(e=In()?.appContext.app.$nuxt),e||=pv(t).tryUse(),e||null}function at(t){const e=wS(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function ia(t){return at().$config}function Sa(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function AS(t,e){return{ctx:{table:t},matchAll:n=>gv(n,t)}}function mv(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([i,r])=>[i,mv(r)])):new Map(Object.entries(t[n]));return e}function RS(t){return AS(mv(t))}function gv(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const i=[];for(const[s,o]of ap(e.wildcard))(t===s||t.startsWith(s+"/"))&&i.push(o);for(const[s,o]of ap(e.dynamic))if(t.startsWith(s+"/")){const a="/"+t.slice(s.length).split("/").splice(2).join("/");i.push(...gv(a,o))}const r=e.static.get(t);return r&&i.push(r),i.filter(Boolean)}function ap(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Ic(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Xu(t,e,n=".",i){if(!Ic(e))return Xu(t,{},n,i);const r=Object.assign({},e);for(const s in t){if(s==="__proto__"||s==="constructor")continue;const o=t[s];o!=null&&(i&&i(r,s,o,n)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:Ic(o)&&Ic(r[s])?r[s]=Xu(o,r[s],(n?`${n}.`:"")+s.toString(),i):r[s]=o))}return r}function _v(t){return(...e)=>e.reduce((n,i)=>Xu(n,i,"",t),{})}const vv=_v();function CS(t,e){try{return e in t}catch{return!1}}class lp extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(e,n={}){super(e,n),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:$u(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=yv(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}function PS(t){if(typeof t=="string")return new lp(t);if(LS(t))return t;const e=new lp(t.message??t.statusMessage??"",{cause:t.cause||t});if(CS(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=$u(t.statusCode,e.statusCode):t.status&&(e.statusCode=$u(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;yv(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function LS(t){return t?.constructor?.__h3_error__===!0}const IS=/[^\u0009\u0020-\u007E]/g;function yv(t=""){return t.replace(IS,"")}function $u(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const DS=Symbol("layout-meta"),Jl=Symbol("route");import.meta.url.replace(/\/app\/.*$/,"/");const wn=()=>at()?.$router,xv=()=>eo()?fn(Jl,at()._route):at()._route;const NS=()=>{try{if(at()._processingMiddleware)return!0}catch{return!1}return!1},S2=(t,e)=>{t||="/";const n=typeof t=="string"?t:"path"in t?US(t):wn().resolve(t).href;if(e?.open){const{target:l="_blank",windowFeatures:c={}}=e.open,u=[];for(const[f,d]of Object.entries(c))d!==void 0&&u.push(`${f.toLowerCase()}=${d}`);return open(n,l,u.join(", ")),Promise.resolve()}const i=xi(n,{acceptRelative:!0}),r=e?.external||i;if(r){if(!e?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&kb(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const s=NS();if(!r&&s){if(e?.replace){if(typeof t=="string"){const{pathname:l,search:c,hash:u}=lv(t);return{path:l,...c&&{query:Ad(c)},...u&&{hash:u},replace:!0}}return{...t,replace:!0}}return t}const o=wn(),a=at();return r?(a._scope.stop(),e?.replace?location.replace(n):location.href=n,s?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e?.replace?o.replace(t):o.push(t)};function US(t){return Kl(t.path||"",t.query||{})+(t.hash||"")}const Ev="__nuxt_error",Zl=()=>_d(at().payload,"error"),Br=t=>{const e=Jr(t);try{const n=Zl();at().hooks.callHook("app:error",e),n.value||=e}catch{throw e}return e},OS=async(t={})=>{const e=at(),n=Zl();e.callHook("app:error:cleared",t),t.redirect&&await wn().replace(t.redirect),n.value=void 0},bv=t=>!!t&&typeof t=="object"&&Ev in t,Jr=t=>{const e=PS(t);return Object.defineProperty(e,Ev,{value:!0,configurable:!1,writable:!1}),e};function FS(t){const e=BS(t),n=new ArrayBuffer(e.length),i=new DataView(n);for(let r=0;r<n.byteLength;r++)i.setUint8(r,e.charCodeAt(r));return n}const kS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function BS(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,i=0;for(let r=0;r<t.length;r++)n<<=6,n|=kS.indexOf(t[r]),i+=6,i===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=i=0);return i===12?(n>>=4,e+=String.fromCharCode(n)):i===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const HS=-1,zS=-2,VS=-3,GS=-4,WS=-5,XS=-6;function $S(t,e){return jS(JSON.parse(t),e)}function jS(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,i=Array(n.length);function r(s,o=!1){if(s===HS)return;if(s===VS)return NaN;if(s===GS)return 1/0;if(s===WS)return-1/0;if(s===XS)return-0;if(o||typeof s!="number")throw new Error("Invalid input");if(s in i)return i[s];const a=n[s];if(!a||typeof a!="object")i[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],c=e?.[l];if(c)return i[s]=c(r(a[1]));switch(l){case"Date":i[s]=new Date(a[1]);break;case"Set":const u=new Set;i[s]=u;for(let h=1;h<a.length;h+=1)u.add(r(a[h]));break;case"Map":const f=new Map;i[s]=f;for(let h=1;h<a.length;h+=2)f.set(r(a[h]),r(a[h+1]));break;case"RegExp":i[s]=new RegExp(a[1],a[2]);break;case"Object":i[s]=Object(a[1]);break;case"BigInt":i[s]=BigInt(a[1]);break;case"null":const d=Object.create(null);i[s]=d;for(let h=1;h<a.length;h+=2)d[a[h]]=r(a[h+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const h=globalThis[l],g=new h(r(a[1]));i[s]=a[2]!==void 0?g.subarray(a[2],a[3]):g;break}case"ArrayBuffer":{const h=a[1],g=FS(h);i[s]=g;break}case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":{const h=l.slice(9);i[s]=Temporal[h].from(a[1]);break}case"URL":{const h=new URL(a[1]);i[s]=h;break}case"URLSearchParams":{const h=new URLSearchParams(a[1]);i[s]=h;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);i[s]=l;for(let c=0;c<a.length;c+=1){const u=a[c];u!==zS&&(l[c]=r(u))}}else{const l={};i[s]=l;for(const c in a){if(c==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");const u=a[c];l[c]=r(u)}}return i[s]}return r(0)}const qS=new Set(["link","style","script","noscript"]),YS=new Set(["title","titleTemplate","script","style","noscript"]),cp=new Set(["base","meta","link","style","script","noscript"]),KS=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),JS=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),ZS=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),QS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),eM=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),tM=["name","property","http-equiv"],nM=new Set(["viewport","description","keywords","robots"]);function Sv(t){const e=t.split(":");return e.length?eM.has(e[1]):!1}function ju(t){const{props:e,tag:n}=t;if(JS.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const i of tM)if(e[i]!==void 0){const r=e[i],s=r.includes(":"),o=nM.has(r),l=!(s||o)&&t.key?`:key:${t.key}`:"";return`${n}:${r}${l}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(YS.has(n)){const i=t.textContent||t.innerHTML;if(i)return`${n}:content:${i}`}}function up(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([i,r])=>`${i}:${String(r)}`).join(",")}`}function Il(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let r;if(e&&(r=e(n,t)),Array.isArray(r))return r.map(s=>Il(s,e));if(r?.constructor===Object){const s={};for(const o of Object.keys(r))s[o]=Il(r[o],e,o);return s}return r}function iM(t,e){const n=t==="style"?new Map:new Set;function i(r){const s=r.trim();if(s)if(t==="style"){const[o,...a]=s.split(":").map(l=>l.trim());o&&a.length&&n.set(o,a.join(":"))}else s.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(i):i(e):Array.isArray(e)?e.forEach(r=>i(r)):e&&typeof e=="object"&&Object.entries(e).forEach(([r,s])=>{s&&s!=="false"&&(t==="style"?n.set(r.trim(),s):i(r))}),n}function Mv(t,e){return t.props=t.props||{},e?t.tag==="templateParams"?(t.props=e,t):(Object.entries(e).forEach(([n,i])=>{if(i===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=iM(n,i);return}if(ZS.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof i=="object"){let o=e.type;if(e.type||(o="application/json"),!o?.endsWith("json")&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(i)}else t[n]=i;return}const r=String(i),s=n.startsWith("data-");r==="true"||r===""?t.props[n]=s?r:!0:!i&&s&&r==="false"?t.props[n]="false":i!==void 0&&(t.props[n]=i)}),t):t}function rM(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},i=Mv({tag:t,props:{}},n);return i.key&&qS.has(i.tag)&&(i.props["data-hid"]=i._h=i.key),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(r=>({...i,props:{...i.props,content:r}})):i}function sM(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(r,s)=>{for(let o=0;o<e.length;o++)s=e[o](r,s);return s};t=n(void 0,t);const i=[];return t=Il(t,n),Object.entries(t||{}).forEach(([r,s])=>{if(s!==void 0)for(const o of Array.isArray(s)?s:[s])i.push(rM(r,o))}),i.flat()}const fp=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,dp={base:-10,title:10},oM={critical:-8,high:-1,low:2},hp={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},aM=/@import/,lo=t=>t===""||t===!0;function lM(t,e){if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const i=oM[e.tagPriority]||0,r=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:hp;if(e.tag in dp)n=dp[e.tag];else if(e.tag==="meta"){const s=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;s&&(n=hp.meta[s])}else e.tag==="link"&&e.props.rel?n=r.link[e.props.rel]:e.tag==="script"?lo(e.props.async)?n=r.script.async:e.props.src&&!lo(e.props.defer)&&!lo(e.props.async)&&e.props.type!=="module"&&!e.props.type?.endsWith("json")?n=r.script.sync:lo(e.props.defer)&&e.props.src&&!lo(e.props.async)&&(n=r.script.defer):e.tag==="style"&&(n=e.innerHTML&&aM.test(e.innerHTML)?r.style.imported:r.style.sync);return(n||100)+i}function pp(t,e){const n=typeof e=="function"?e(t):e,i=n.key||String(t.plugins.size+1);t.plugins.get(i)||(t.plugins.set(i,n),t.hooks.addHooks(n.hooks||{}))}function cM(t={}){const e=dv();e.addHooks(t.hooks||{});const n=!t.document,i=new Map,r=new Map,s=new Set,o={_entryCount:1,plugins:r,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:i,headEntries(){return[...i.values()]},use:a=>pp(o,a),push(a,l){const c={...l||{}};delete c.head;const u=c._index??o._entryCount++,f={_i:u,input:a,options:c},d={_poll(h=!1){o.dirty=!0,!h&&s.add(u),e.callHook("entries:updated",o)},dispose(){i.delete(u)&&o.invalidate()},patch(h){(!c.mode||c.mode==="server"&&n||c.mode==="client"&&!n)&&(f.input=h,i.set(u,f),d._poll())}};return d.patch(a),d},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",a);s.size;){const d=s.values().next().value;s.delete(d);const h=i.get(d);if(h){const g={tags:sM(h.input,t.propResolvers||[]).map(_=>Object.assign(_,h.options)),entry:h};await e.callHook("entries:normalize",g),h._tags=g.tags.map((_,m)=>(_._w=lM(o,_),_._p=(h._i<<10)+m,_._d=ju(_),_))}}let l=!1;a.entries.flatMap(d=>(d._tags||[]).map(h=>({...h,props:{...h.props}}))).sort(fp).reduce((d,h)=>{const g=String(h._d||h._p);if(!d.has(g))return d.set(g,h);const _=d.get(g);if((h?.tagDuplicateStrategy||(QS.has(h.tag)?"merge":null)||(h.key&&h.key===_.key?"merge":null))==="merge"){const p={..._.props};Object.entries(h.props).forEach(([E,y])=>p[E]=E==="style"?new Map([..._.props.style||new Map,...y]):E==="class"?new Set([..._.props.class||new Set,...y]):y),d.set(g,{...h,props:p})}else h._p>>10===_._p>>10&&h.tag==="meta"&&Sv(g)?(d.set(g,Object.assign([...Array.isArray(_)?_:[_],h],h)),l=!0):(h._w===_._w?h._p>_._p:h?._w<_?._w)&&d.set(g,h);return d},a.tagMap);const c=a.tagMap.get("title"),u=a.tagMap.get("titleTemplate");if(o._title=c?.textContent,u){const d=u?.textContent;if(o._titleTemplate=d,d){let h=typeof d=="function"?d(c?.textContent):d;typeof h=="string"&&!o.plugins.has("template-params")&&(h=h.replace("%s",c?.textContent||"")),c?h===null?a.tagMap.delete("title"):a.tagMap.set("title",{...c,textContent:h}):(u.tag="title",u.textContent=h)}}a.tags=Array.from(a.tagMap.values()),l&&(a.tags=a.tags.flat().sort(fp)),await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a);const f=[];for(const d of a.tags){const{innerHTML:h,tag:g,props:_}=d;if(KS.has(g)&&!(Object.keys(_).length===0&&!d.innerHTML&&!d.textContent)&&!(g==="meta"&&!_.content&&!_["http-equiv"]&&!_.charset)){if(g==="script"&&h){if(_.type?.endsWith("json")){const m=typeof h=="string"?h:JSON.stringify(h);d.innerHTML=m.replace(/</g,"\\u003C")}else typeof h=="string"&&(d.innerHTML=h.replace(new RegExp(`</${g}`,"g"),`<\\/${g}`));d._d=ju(d)}f.push(d)}}return f},invalidate(){for(const a of i.values())s.add(a._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(t?.plugins||[]).forEach(a=>pp(o,a)),o.hooks.callHook("init",o),t.init?.forEach(a=>a&&o.push(a)),o}const uM=(t,e)=>At(e)?gi(e):e,Pd="usehead";function fM(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Pd,t)}}.install}function dM(){if(eo()){const t=fn(Pd);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function hM(t,e={}){const n=e.head||dM();return n.ssr?n.push(t||{},e):pM(n,t,e)}function pM(t,e,n={}){const i=kt(!1);let r;return z_(()=>{const o=i.value?{}:Il(e,uM);r?r.patch(o):r=t.push(o,n)}),In()&&(ta(()=>{r.dispose()}),y_(()=>{i.value=!0}),v_(()=>{i.value=!1})),r}function mM(t){const e=t||at();return e.ssrContext?.head||e.runWithContext(()=>{if(eo()){const n=fn(Pd);if(!n)throw new Error("[nuxt] [unhead] Missing Unhead instance.");return n}})}function Tv(t,e={}){const n=e.head||mM(e.nuxt);return hM(t,{head:n,...e})}const gM="modulepreload",_M=function(t,e){return new URL(t,e).href},mp={},qu=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");r=c(n.map(u=>{if(u=_M(u,i),u in mp)return;mp[u]=!0;const f=u.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(i)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===u&&(!f||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":gM,f||(h.as="script"),h.crossOrigin="",h.href=u,l&&h.setAttribute("nonce",l),document.head.appendChild(h),f)return new Promise((g,_)=>{h.addEventListener("load",g),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};let ll,cl;function vM(){return ll=$fetch(Cd(`builds/meta/${ia().app.buildId}.json`),{responseType:"json"}),ll.then(t=>{cl=RS(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),ll}function Ql(){return ll||vM()}async function Ld(t){const e=typeof t=="string"?t:t.path;if(await Ql(),!cl)return console.error("[nuxt] Error creating app manifest matcher.",cl),{};try{return vv({},...cl.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function gp(t,e={}){if(!await Av(t))return null;const i=await xM(t,e);return await wv(i)||null}const yM="_payload.json";async function xM(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||xi(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const i=ia(),r=e.hash||(e.fresh?Date.now():i.app.buildId),s=i.app.cdnURL,o=s&&await Av(t)?s:i.app.baseURL;return Qr(o,n.pathname,yM+(r?`?${r}`:""))}async function wv(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(Rv));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function Av(t=xv().path){const e=at();return t=t.replace(/\/$/,""),(await Ql()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const i=await Ld({path:t});return!!i.prerender&&!i.redirect})}let Pr=null;async function EM(){if(Pr)return Pr;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await Rv(t.textContent||""),n=t.dataset.src?await wv(t.dataset.src):void 0;return Pr={...e,...n,...window.__NUXT__},Pr.config?.public&&(Pr.config.public=ti(Pr.config.public)),Pr}async function Rv(t){return await $S(t,at()._payloadRevivers)}function bM(t,e){at()._payloadRevivers[t]=e}const SM=[["NuxtError",t=>Jr(t)],["EmptyShallowRef",t=>Qn(t==="_"?void 0:t==="0n"?BigInt(0):Fo(t))],["EmptyRef",t=>kt(t==="_"?void 0:t==="0n"?BigInt(0):Fo(t))],["ShallowRef",t=>Qn(t)],["ShallowReactive",t=>Bi(t)],["Ref",t=>kt(t)],["Reactive",t=>ti(t)]],MM=rn({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[i,r]of SM)bM(i,r);Object.assign(t.payload,([e,n]=gr(()=>t.runWithContext(EM)),e=await e,n(),e)),delete window.__NUXT__}});async function Id(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const i={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async r=>{const s=new Map,o=new Promise(h=>{t.resolveTags().then(g=>{h(g.map(_=>{const m=s.get(_._d)||0,p={tag:_,id:(m?`${_._d}:${m}`:_._d)||up(_),shouldRender:!0};return _._d&&Sv(_._d)&&s.set(_._d,m+1),p}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const h of["body","head"]){const g=n[h]?.children;for(const _ of g){const m=_.tagName.toLowerCase();if(!cp.has(m))continue;const p=Mv({tag:m,props:{}},{innerHTML:_.innerHTML,..._.getAttributeNames().reduce((E,y)=>(E[y]=_.getAttribute(y),E),{})||{}});if(p.key=_.getAttribute("data-hid")||void 0,p._d=ju(p)||up(p),a.elMap.has(p._d)){let E=1,y=p._d;for(;a.elMap.has(y);)y=`${p._d}:${E++}`;a.elMap.set(y,_)}else a.elMap.set(p._d,_)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(h,g,_){const m=`${h}:${g}`;a.sideEffects[m]=_,delete a.pendingSideEffects[m]}function c({id:h,$el:g,tag:_}){const m=_.tag.endsWith("Attrs");a.elMap.set(h,g),m||(_.textContent&&_.textContent!==g.textContent&&(g.textContent=_.textContent),_.innerHTML&&_.innerHTML!==g.innerHTML&&(g.innerHTML=_.innerHTML),l(h,"el",()=>{g?.remove(),a.elMap.delete(h)}));for(const p in _.props){if(!Object.prototype.hasOwnProperty.call(_.props,p))continue;const E=_.props[p];if(p.startsWith("on")&&typeof E=="function"){const v=g?.dataset;if(v&&v[`${p}fired`]){const S=p.slice(0,-5);E.call(g,new Event(S.substring(2)))}g.getAttribute(`data-${p}`)!==""&&((_.tag==="bodyAttrs"?n.defaultView:g).addEventListener(p.substring(2),E.bind(g)),g.setAttribute(`data-${p}`,""));continue}const y=`attr:${p}`;if(p==="class"){if(!E)continue;for(const v of E)m&&l(h,`${y}:${v}`,()=>g.classList.remove(v)),!g.classList.contains(v)&&g.classList.add(v)}else if(p==="style"){if(!E)continue;for(const[v,S]of E)l(h,`${y}:${v}`,()=>{g.style.removeProperty(v)}),g.style.setProperty(v,S)}else E!==!1&&E!==null&&(g.getAttribute(p)!==E&&g.setAttribute(p,E===!0?"":String(E)),m&&l(h,y,()=>g.removeAttribute(p)))}}const u=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},d=await o;for(const h of d){const{tag:g,shouldRender:_,id:m}=h;if(_){if(g.tag==="title"){n.title=g.textContent,l("title","",()=>n.title=a.title);continue}h.$el=h.$el||a.elMap.get(m),h.$el?c(h):cp.has(g.tag)&&u.push(h)}}for(const h of u){const g=h.tag.tagPosition||"head";h.$el=n.createElement(h.tag.tag),c(h),f[g]=f[g]||n.createDocumentFragment(),f[g].appendChild(h.$el)}for(const h of d)await t.hooks.callHook("dom:renderTag",h,n,l);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose);for(const h in a.pendingSideEffects)a.pendingSideEffects[h]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:d}),r()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function TM(t={}){const e=t.domOptions?.render||Id;t.document=t.document||(typeof window<"u"?document:void 0);const n=t.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1;return cM({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function wM(t,e){let n=0;return()=>{const i=++n;e(()=>{n===i&&t()})}}function AM(t={}){const e=TM({domOptions:{render:wM(()=>Id(e),n=>setTimeout(n,0))},...t});return e.install=fM(e),e}const RM={disableDefaults:!0},CM=rn({name:"nuxt:head",enforce:"pre",setup(t){const e=AM(RM);t.vueApp.use(e);{let n=!0;const i=async()=>{n=!1,await Id(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||i()}),t.hooks.hook("app:error",i),t.hooks.hook("app:suspense:resolve",i)}}});/*!
 * vue-router v4.6.0
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ts=typeof document<"u";function Cv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function PM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Cv(t.default)}const dt=Object.assign;function Dc(t,e){const n={};for(const i in e){const r=e[i];n[i]=ii(r)?r.map(t):t(r)}return n}const Co=()=>{},ii=Array.isArray;function _p(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const Pv=/#/g,LM=/&/g,IM=/\//g,DM=/=/g,NM=/\?/g,Lv=/\+/g,UM=/%5B/g,OM=/%5D/g,Iv=/%5E/g,FM=/%60/g,Dv=/%7B/g,kM=/%7C/g,Nv=/%7D/g,BM=/%20/g;function Dd(t){return t==null?"":encodeURI(""+t).replace(kM,"|").replace(UM,"[").replace(OM,"]")}function HM(t){return Dd(t).replace(Dv,"{").replace(Nv,"}").replace(Iv,"^")}function Yu(t){return Dd(t).replace(Lv,"%2B").replace(BM,"+").replace(Pv,"%23").replace(LM,"%26").replace(FM,"`").replace(Dv,"{").replace(Nv,"}").replace(Iv,"^")}function zM(t){return Yu(t).replace(DM,"%3D")}function VM(t){return Dd(t).replace(Pv,"%23").replace(NM,"%3F")}function GM(t){return VM(t).replace(IM,"%2F")}function Bo(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const WM=/\/$/,XM=t=>t.replace(WM,"");function Nc(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=t(s)),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=YM(i??e,n),{fullPath:i+s+o,path:i,query:r,hash:Bo(o)}}function $M(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function jM(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Ws(e.matched[i],n.matched[r])&&Uv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Uv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!qM(t[n],e[n]))return!1;return!0}function qM(t,e){return ii(t)?yp(t,e):ii(e)?yp(e,t):t===e}function yp(t,e){return ii(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function YM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ku=(function(t){return t.pop="pop",t.push="push",t})({}),Uc=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function KM(t){if(!t)if(Ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),XM(t)}const JM=/^[^#]+#/;function ZM(t,e){return t.replace(JM,"#")+e}function QM(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ec=()=>({left:window.scrollX,top:window.scrollY});function eT(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=QM(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function xp(t,e){return(history.state?history.state.position-e:-1)+t}const Ju=new Map;function tT(t,e){Ju.set(t,e)}function nT(t){const e=Ju.get(t);return Ju.delete(t),e}function iT(t){return typeof t=="string"||t&&typeof t=="object"}function Ov(t){return typeof t=="string"||typeof t=="symbol"}let Nt=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Fv=Symbol("");Nt.MATCHER_NOT_FOUND+"",Nt.NAVIGATION_GUARD_REDIRECT+"",Nt.NAVIGATION_ABORTED+"",Nt.NAVIGATION_CANCELLED+"",Nt.NAVIGATION_DUPLICATED+"";function Xs(t,e){return dt(new Error,{type:t,[Fv]:!0},e)}function Mi(t,e){return t instanceof Error&&Fv in t&&(e==null||!!(t.type&e))}const rT=["params","query","hash"];function sT(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of rT)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function oT(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(Lv," "),s=r.indexOf("="),o=Bo(s<0?r:r.slice(0,s)),a=s<0?null:Bo(r.slice(s+1));if(o in e){let l=e[o];ii(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function Ep(t){let e="";for(let n in t){const i=t[n];if(n=zM(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(ii(i)?i.map(r=>r&&Yu(r)):[i&&Yu(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function aT(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=ii(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const lT=Symbol(""),bp=Symbol(""),Nd=Symbol(""),kv=Symbol(""),Zu=Symbol("");function co(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ur(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Xs(Nt.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):iT(d)?l(Xs(Nt.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Oc(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Cv(l)){const c=(l.__vccOpts||l)[e];c&&s.push(ur(c,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=PM(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&ur(d,n,i,o,a,r)()}))}}return s}function cT(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ws(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ws(c,l))||r.push(l))}return[n,i,r]}/*!
 * vue-router v4.6.0
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let uT=()=>location.protocol+"//"+location.host;function Bv(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),vp(a,"")}return vp(n,t)+i+r}function fT(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=Bv(t,location),g=n.value,_=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===g){o=null;return}m=_?d.position-_.position:0}else i(h);r.forEach(p=>{p(n.value,g,{delta:m,type:Ku.pop,direction:m?m>0?Uc.forward:Uc.back:Uc.unknown})})};function l(){o=n.value}function c(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(dt({},d.state,{scroll:ec()}),"")}}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function Sp(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?ec():null}}function dT(t){const{history:e,location:n}=window,i={value:Bv(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:uT()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){s(l,dt({},e.state,Sp(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=dt({},r.value,e.state,{forward:l,scroll:ec()});s(u.current,u,!0),s(l,dt({},Sp(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function hT(t){t=KM(t);const e=dT(t),n=fT(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=dt({location:"",base:t,go:i,createHref:ZM.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let Wr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var $t=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})($t||{});const pT={type:Wr.Static,value:""},mT=/[a-zA-Z0-9_]/;function gT(t){if(!t)return[[]];if(t==="/")return[[pT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=$t.Static,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===$t.Static?s.push({type:Wr.Static,value:c}):n===$t.Param||n===$t.ParamRegExp||n===$t.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Wr.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==$t.ParamRegExp){i=n,n=$t.EscapeNext;continue}switch(n){case $t.Static:l==="/"?(c&&f(),o()):l===":"?(f(),n=$t.Param):d();break;case $t.EscapeNext:d(),n=i;break;case $t.Param:l==="("?n=$t.ParamRegExp:mT.test(l)?d():(f(),n=$t.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case $t.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=$t.ParamRegExpEnd:u+=l;break;case $t.ParamRegExpEnd:f(),n=$t.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===$t.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}const Mp="[^/]+?",_T={sensitive:!1,strict:!1,start:!0,end:!0};var mn=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(mn||{});const vT=/[.+*?^${}()[\]/\\]/g;function yT(t,e){const n=dt({},_T,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[mn.Root];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=mn.Segment+(n.sensitive?mn.BonusCaseSensitive:0);if(d.type===Wr.Static)f||(r+="/"),r+=d.value.replace(vT,"\\$&"),h+=mn.Static;else if(d.type===Wr.Param){const{value:g,repeatable:_,optional:m,regexp:p}=d;s.push({name:g,repeatable:_,optional:m});const E=p||Mp;if(E!==Mp){h+=mn.BonusCustomRegExp;try{`${E}`}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+v.message)}}let y=_?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,h+=mn.Dynamic,m&&(h+=mn.BonusOptional),_&&(h+=mn.BonusRepeatable),E===".*"&&(h+=mn.BonusWildcard)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=mn.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=s[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===Wr.Static)u+=h.value;else if(h.type===Wr.Param){const{value:g,repeatable:_,optional:m}=h,p=g in c?c[g]:"";if(ii(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=ii(p)?p.join("/"):p;if(!E)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function xT(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===mn.Static+mn.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===mn.Static+mn.Segment?1:-1:0}function Hv(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=xT(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Tp(i))return 1;if(Tp(r))return-1}return r.length-i.length}function Tp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ET={strict:!1,end:!0,sensitive:!1};function bT(t,e,n){const i=yT(gT(t.path),n),r=dt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ST(t,e){const n=[],i=new Map;e=_p(ET,e);function r(f){return i.get(f)}function s(f,d,h){const g=!h,_=Ap(f);_.aliasOf=h&&h.record;const m=_p(e,f),p=[_];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const S of v)p.push(Ap(dt({},_,{components:h?h.record.components:_.components,path:S,aliasOf:h?h.record:_})))}let E,y;for(const v of p){const{path:S}=v;if(d&&S[0]!=="/"){const w=d.record.path,A=w[w.length-1]==="/"?"":"/";v.path=d.record.path+(S&&A+S)}if(E=bT(v,d,m),h?h.alias.push(E):(y=y||E,y!==E&&y.alias.push(E),g&&f.name&&!Rp(E)&&o(f.name)),zv(E)&&l(E),_.children){const w=_.children;for(let A=0;A<w.length;A++)s(w[A],E,h&&h.children[A])}h=h||E}return y?()=>{o(y)}:Co}function o(f){if(Ov(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=wT(f,n);n.splice(d,0,f),f.record.name&&!Rp(f)&&i.set(f.record.name,f)}function c(f,d){let h,g={},_,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw Xs(Nt.MATCHER_NOT_FOUND,{location:f});m=h.record.name,g=dt(wp(d.params,h.keys.filter(y=>!y.optional).concat(h.parent?h.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&wp(f.params,h.keys.map(y=>y.name))),_=h.stringify(g)}else if(f.path!=null)_=f.path,h=n.find(y=>y.re.test(_)),h&&(g=h.parse(_),m=h.record.name);else{if(h=d.name?i.get(d.name):n.find(y=>y.re.test(d.path)),!h)throw Xs(Nt.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=h.record.name,g=dt({},d.params,f.params),_=h.stringify(g)}const p=[];let E=h;for(;E;)p.unshift(E.record),E=E.parent;return{name:m,path:_,params:g,matched:p,meta:TT(p)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function wp(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Ap(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:MT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function MT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Rp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function TT(t){return t.reduce((e,n)=>dt(e,n.meta),{})}function wT(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;Hv(t,e[s])<0?i=s:n=s+1}const r=AT(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function AT(t){let e=t;for(;e=e.parent;)if(zv(e)&&Hv(t,e)===0)return e}function zv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Cp(t){const e=fn(Nd),n=fn(kv),i=mt(()=>{const l=Xe(t.to);return e.resolve(l)}),r=mt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Ws.bind(null,u));if(d>-1)return d;const h=Pp(l[c-2]);return c>1&&Pp(u)===h&&f[f.length-1].path!==h?f.findIndex(Ws.bind(null,l[c-2])):d}),s=mt(()=>r.value>-1&&IT(n.params,i.value.params)),o=mt(()=>r.value>-1&&r.value===n.matched.length-1&&Uv(n.params,i.value.params));function a(l={}){if(LT(l)){const c=e[Xe(t.replace)?"replace":"push"](Xe(t.to)).catch(Co);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:mt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function RT(t){return t.length===1?t[0]:t}const CT=Qt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Cp,setup(t,{slots:e}){const n=ti(Cp(t)),{options:i}=fn(Nd),r=mt(()=>({[Lp(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Lp(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&RT(e.default(n));return t.custom?s:Vt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),PT=CT;function LT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function IT(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!ii(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Pp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Lp=(t,e,n)=>t??e??n,DT=Qt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=fn(Zu),r=mt(()=>t.route||i.value),s=fn(bp,0),o=mt(()=>{let c=Xe(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=mt(()=>r.value.matched[o.value]);Kr(bp,mt(()=>o.value+1)),Kr(lT,a),Kr(Zu,r);const l=kt();return Gt(()=>[l.value,a.value,t.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Ws(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Ip(n.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Vt(d,dt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Ip(n.default,{Component:m,route:c})||m}}});function Ip(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Vv=DT;function NT(t){const e=ST(t.routes,t),n=t.parseQuery||oT,i=t.stringifyQuery||Ep,r=t.history,s=co(),o=co(),a=co(),l=Qn(Fn);let c=Fn;Ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Dc.bind(null,k=>""+k),f=Dc.bind(null,GM),d=Dc.bind(null,Bo);function h(k,se){let ae,le;return Ov(k)?(ae=e.getRecordMatcher(k),le=se):le=k,e.addRoute(le,ae)}function g(k){const se=e.getRecordMatcher(k);se&&e.removeRoute(se)}function _(){return e.getRoutes().map(k=>k.record)}function m(k){return!!e.getRecordMatcher(k)}function p(k,se){if(se=dt({},se||l.value),typeof k=="string"){const O=Nc(n,k,se.path),z=e.resolve({path:O.path},se),ee=r.createHref(O.fullPath);return dt(O,z,{params:d(z.params),hash:Bo(O.hash),redirectedFrom:void 0,href:ee})}let ae;if(k.path!=null)ae=dt({},k,{path:Nc(n,k.path,se.path).path});else{const O=dt({},k.params);for(const z in O)O[z]==null&&delete O[z];ae=dt({},k,{params:f(O)}),se.params=f(se.params)}const le=e.resolve(ae,se),ye=k.hash||"";le.params=u(d(le.params));const ze=$M(i,dt({},k,{hash:HM(ye),path:le.path})),b=r.createHref(ze);return dt({fullPath:ze,hash:ye,query:i===Ep?aT(k.query):k.query||{}},le,{redirectedFrom:void 0,href:b})}function E(k){return typeof k=="string"?Nc(n,k,l.value.path):dt({},k)}function y(k,se){if(c!==k)return Xs(Nt.NAVIGATION_CANCELLED,{from:se,to:k})}function v(k){return A(k)}function S(k){return v(dt(E(k),{replace:!0}))}function w(k,se){const ae=k.matched[k.matched.length-1];if(ae&&ae.redirect){const{redirect:le}=ae;let ye=typeof le=="function"?le(k,se):le;return typeof ye=="string"&&(ye=ye.includes("?")||ye.includes("#")?ye=E(ye):{path:ye},ye.params={}),dt({query:k.query,hash:k.hash,params:ye.path!=null?{}:k.params},ye)}}function A(k,se){const ae=c=p(k),le=l.value,ye=k.state,ze=k.force,b=k.replace===!0,O=w(ae,le);if(O)return A(dt(E(O),{state:typeof O=="object"?dt({},ye,O.state):ye,force:ze,replace:b}),se||ae);const z=ae;z.redirectedFrom=se;let ee;return!ze&&jM(i,le,ae)&&(ee=Xs(Nt.NAVIGATION_DUPLICATED,{to:z,from:le}),Me(le,le,!0,!1)),(ee?Promise.resolve(ee):T(z,le)).catch($=>Mi($)?Mi($,Nt.NAVIGATION_GUARD_REDIRECT)?$:ve($):F($,z,le)).then($=>{if($){if(Mi($,Nt.NAVIGATION_GUARD_REDIRECT))return A(dt({replace:b},E($.to),{state:typeof $.to=="object"?dt({},ye,$.to.state):ye,force:ze}),se||z)}else $=U(z,le,!0,b,ye);return N(z,le,$),$})}function I(k,se){const ae=y(k,se);return ae?Promise.reject(ae):Promise.resolve()}function M(k){const se=Ve.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(k):k()}function T(k,se){let ae;const[le,ye,ze]=cT(k,se);ae=Oc(le.reverse(),"beforeRouteLeave",k,se);for(const O of le)O.leaveGuards.forEach(z=>{ae.push(ur(z,k,se))});const b=I.bind(null,k,se);return ae.push(b),oe(ae).then(()=>{ae=[];for(const O of s.list())ae.push(ur(O,k,se));return ae.push(b),oe(ae)}).then(()=>{ae=Oc(ye,"beforeRouteUpdate",k,se);for(const O of ye)O.updateGuards.forEach(z=>{ae.push(ur(z,k,se))});return ae.push(b),oe(ae)}).then(()=>{ae=[];for(const O of ze)if(O.beforeEnter)if(ii(O.beforeEnter))for(const z of O.beforeEnter)ae.push(ur(z,k,se));else ae.push(ur(O.beforeEnter,k,se));return ae.push(b),oe(ae)}).then(()=>(k.matched.forEach(O=>O.enterCallbacks={}),ae=Oc(ze,"beforeRouteEnter",k,se,M),ae.push(b),oe(ae))).then(()=>{ae=[];for(const O of o.list())ae.push(ur(O,k,se));return ae.push(b),oe(ae)}).catch(O=>Mi(O,Nt.NAVIGATION_CANCELLED)?O:Promise.reject(O))}function N(k,se,ae){a.list().forEach(le=>M(()=>le(k,se,ae)))}function U(k,se,ae,le,ye){const ze=y(k,se);if(ze)return ze;const b=se===Fn,O=Ts?history.state:{};ae&&(le||b?r.replace(k.fullPath,dt({scroll:b&&O&&O.scroll},ye)):r.push(k.fullPath,ye)),l.value=k,Me(k,se,ae,b),ve()}let G;function X(){G||(G=r.listen((k,se,ae)=>{if(!je.listening)return;const le=p(k),ye=w(le,je.currentRoute.value);if(ye){A(dt(ye,{replace:!0,force:!0}),le).catch(Co);return}c=le;const ze=l.value;Ts&&tT(xp(ze.fullPath,ae.delta),ec()),T(le,ze).catch(b=>Mi(b,Nt.NAVIGATION_ABORTED|Nt.NAVIGATION_CANCELLED)?b:Mi(b,Nt.NAVIGATION_GUARD_REDIRECT)?(A(dt(E(b.to),{force:!0}),le).then(O=>{Mi(O,Nt.NAVIGATION_ABORTED|Nt.NAVIGATION_DUPLICATED)&&!ae.delta&&ae.type===Ku.pop&&r.go(-1,!1)}).catch(Co),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),F(b,le,ze))).then(b=>{b=b||U(le,ze,!1),b&&(ae.delta&&!Mi(b,Nt.NAVIGATION_CANCELLED)?r.go(-ae.delta,!1):ae.type===Ku.pop&&Mi(b,Nt.NAVIGATION_ABORTED|Nt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),N(le,ze,b)}).catch(Co)}))}let Y=co(),H=co(),te;function F(k,se,ae){ve(k);const le=H.list();return le.length?le.forEach(ye=>ye(k,se,ae)):console.error(k),Promise.reject(k)}function ce(){return te&&l.value!==Fn?Promise.resolve():new Promise((k,se)=>{Y.add([k,se])})}function ve(k){return te||(te=!k,X(),Y.list().forEach(([se,ae])=>k?ae(k):se()),Y.reset()),k}function Me(k,se,ae,le){const{scrollBehavior:ye}=t;if(!Ts||!ye)return Promise.resolve();const ze=!ae&&nT(xp(k.fullPath,0))||(le||!ae)&&history.state&&history.state.scroll||null;return yr().then(()=>ye(k,se,ze)).then(b=>b&&eT(b)).catch(b=>F(b,k,se))}const Ne=k=>r.go(k);let Oe;const Ve=new Set,je={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:t,push:v,replace:S,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:ce,install(k){k.component("RouterLink",PT),k.component("RouterView",Vv),k.config.globalProperties.$router=je,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Xe(l)}),Ts&&!Oe&&l.value===Fn&&(Oe=!0,v(r.location).catch(le=>{}));const se={};for(const le in Fn)Object.defineProperty(se,le,{get:()=>l.value[le],enumerable:!0});k.provide(Nd,je),k.provide(kv,Bi(se)),k.provide(Zu,l);const ae=k.unmount;Ve.add(k),k.unmount=function(){Ve.delete(k),Ve.size<1&&(c=Fn,G&&G(),G=null,l.value=Fn,Oe=!1,te=!1),ae()}}};function oe(k){return k.reduce((se,ae)=>se.then(()=>M(ae)),Promise.resolve())}return je}const UT=/(:\w+)\([^)]+\)/g,OT=/(:\w+)[?+*]/g,FT=/:\w+/g,kT=(t,e)=>e.path.replace(UT,"$1").replace(OT,"$1").replace(FT,n=>t.params[n.slice(1)]?.toString()||""),Qu=(t,e)=>{const n=t.route.matched.find(r=>r.components?.default===t.Component.type),i=e??n?.meta.key??(n&&kT(t.route,n));return typeof i=="function"?i(t.route):i},BT=(t,e)=>({default:()=>t?Vt(Bx,t===!0?{}:t,e):e});function Ud(t){return Array.isArray(t)?t:[t]}const Fc=[{name:"index",path:"/",component:()=>qu(()=>import("./C5UzdLSC.js"),__vite__mapDeps([0,1]),import.meta.url)}],HT=(t,e)=>({default:()=>t?Vt(Yl,t===!0?{}:t,e):e.default?.()}),zT=/(:\w+)\([^)]+\)/g,VT=/(:\w+)[?+*]/g,GT=/:\w+/g;function Dp(t){const e=t?.meta.key??t.path.replace(zT,"$1").replace(VT,"$1").replace(GT,n=>t.params[n.slice(1)]?.toString()||"");return typeof e=="function"?e(t):e}function WT(t,e){return t===e||e===Fn?!1:Dp(t)!==Dp(e)?!0:!t.matched.every((i,r)=>i.components&&i.components.default===e.matched[r]?.components?.default)}const XT={scrollBehavior(t,e,n){const i=at(),r=wn().options?.scrollBehaviorType??"auto";if(t.path.replace(/\/$/,"")===e.path.replace(/\/$/,""))return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Gv(t.hash),behavior:r}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;const o=i._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(a=>{if(e===Fn){a(Np(t,e,n,r));return}i.hooks.hookOnce(o,()=>{requestAnimationFrame(()=>a(Np(t,e,n,r)))})})}};function Gv(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function Np(t,e,n,i){if(n)return n;const r=WT(t,e);return t.hash?{el:t.hash,top:Gv(t.hash),behavior:r?i:"instant"}:{left:0,top:0}}const $T={hashMode:!1,scrollBehaviorType:"auto"},er={...$T,...XT},jT=async(t,e)=>{let n,i;if(!t.meta?.validate)return;const r=([n,i]=gr(()=>Promise.resolve(t.meta.validate(t))),n=await n,i(),n);if(r===!0)return;const s=Jr({fatal:!0,statusCode:r&&r.statusCode||404,statusMessage:r&&r.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),s},qT=async t=>{let e,n;const i=([e,n]=gr(()=>Ld({path:t.path})),e=await e,n(),e);if(i.redirect)return xi(i.redirect,{acceptRelative:!0})?(window.location.href=i.redirect,!1):i.redirect},YT=[jT,qT],ef={};function KT(t,e,n){const{pathname:i,search:r,hash:s}=e,o=t.indexOf("#");if(o>-1){const c=s.includes(t.slice(o))?t.slice(o).length:1;let u=s.slice(c);return u[0]!=="/"&&(u="/"+u),Qh(u,"")}const a=Qh(i,t),l=!n||Vb(a,n)?a:n;return l+(l.includes("?")?"":r)+s}const JT=rn({name:"nuxt:router",enforce:"pre",async setup(t){let e,n,i=ia().app.baseURL;const r=er.history?.(i)??hT(i),s=er.routes?([e,n]=gr(()=>er.routes(Fc)),e=await e,n(),e??Fc):Fc;let o;const a=NT({...er,scrollBehavior:(m,p,E)=>{if(p===Fn){o=E;return}if(er.scrollBehavior){if(a.options.scrollBehavior=er.scrollBehavior,"scrollRestoration"in window.history){const y=a.beforeEach(()=>{y(),window.history.scrollRestoration="manual"})}return er.scrollBehavior(m,Fn,o||E)}},history:r,routes:s});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Qn(a.currentRoute.value);a.afterEach((m,p)=>{l.value=p}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const c=KT(i,window.location,t.payload.path),u=Qn(a.currentRoute.value),f=()=>{u.value=a.currentRoute.value};t.hook("page:finish",f),a.afterEach((m,p)=>{m.matched[m.matched.length-1]?.components?.default===p.matched[p.matched.length-1]?.components?.default&&f()});const d={};for(const m in u.value)Object.defineProperty(d,m,{get:()=>u.value[m],enumerable:!0});t._route=Bi(d),t._middleware||={global:[],named:{}};const h=Zl();a.afterEach(async(m,p,E)=>{delete t._processingMiddleware,!t.isHydrating&&h.value&&await t.runWithContext(OS),E&&await t.callHook("page:loading:end")});try{[e,n]=gr(()=>a.isReady()),await e,n()}catch(m){[e,n]=gr(()=>t.runWithContext(()=>Br(m))),await e,n()}const g=c!==a.currentRoute.value.fullPath?a.resolve(c):a.currentRoute.value;f();const _=t.payload.state._layout;return a.beforeEach(async(m,p)=>{await t.callHook("page:loading:start"),m.meta=ti(m.meta),t.isHydrating&&_&&!qi(m.meta.layout)&&(m.meta.layout=_),t._processingMiddleware=!0;{const E=new Set([...YT,...t._middleware.global]);for(const y of m.matched){const v=y.meta.middleware;if(v)for(const S of Ud(v))E.add(S)}{const y=await t.runWithContext(()=>Ld({path:m.path}));if(y.appMiddleware)for(const v in y.appMiddleware)y.appMiddleware[v]?E.add(v):E.delete(v)}for(const y of E){const v=typeof y=="string"?t._middleware.named[y]||await ef[y]?.().then(S=>S.default||S):y;if(!v)throw new Error(`Unknown route middleware: '${y}'.`);try{const S=await t.runWithContext(()=>v(m,p));if(!t.payload.serverRendered&&t.isHydrating&&(S===!1||S instanceof Error)){const w=S||Jr({statusCode:404,statusMessage:`Page Not Found: ${c}`});return await t.runWithContext(()=>Br(w)),!1}if(S===!0)continue;if(S===!1)return S;if(S)return bv(S)&&S.fatal&&await t.runWithContext(()=>Br(S)),S}catch(S){const w=Jr(S);return w.fatal&&await t.runWithContext(()=>Br(w)),w}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(m=>{if(m.matched.length===0)return t.runWithContext(()=>Br(Jr({statusCode:404,fatal:!1,statusMessage:`Page not found: ${m.fullPath}`,data:{path:m.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in g&&(g.name=void 0),await a.replace({...g,force:!0}),a.options.scrollBehavior=er.scrollBehavior}catch(m){await t.runWithContext(()=>Br(m))}}),{provide:{router:a}}}}),Up=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),M2=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Od=t=>{const e=at();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Up(()=>t())}):Up(()=>t())},ZT=rn({name:"nuxt:payload",setup(t){const e=new Set;wn().beforeResolve(async(n,i)=>{if(n.path===i.path)return;const r=await gp(n.path);if(r){for(const s of e)delete t.static.data[s];for(const s in r.data)s in t.static.data||e.add(s),t.static.data[s]=r.data[s]}}),Od(()=>{t.hooks.hook("link:prefetch",async n=>{const{hostname:i}=new URL(n,window.location.href);i===window.location.hostname&&await gp(n).catch(()=>{console.warn("[nuxt] Error preloading payload for",n)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout(Ql,1e3)})}}),QT=rn(()=>{const t=wn();Od(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),ew=rn(t=>{let e;async function n(){let i;try{i=await Ql()}catch(r){const s=r;if(!("status"in s&&(s.status===404||s.status===403)))throw s}e&&clearTimeout(e),e=setTimeout(n,sp);try{const r=await $fetch(Cd("builds/latest.json")+`?${Date.now()}`);r.id!==i?.id&&(t.hooks.callHook("app:manifest:update",r),e&&clearTimeout(e))}catch{}}Od(()=>{e=setTimeout(n,sp)})});function tw(t={}){const e=t.path||window.location.pathname;let n={};try{n=Fo(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||n?.path!==e||n?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:at().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const nw=rn({name:"nuxt:chunk-reload",setup(t){const e=wn(),n=ia(),i=new Set;e.beforeEach(()=>{i.clear()}),t.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const o=Qr(n.app.baseURL,s.fullPath);tw({path:o,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((s,o)=>{i.has(s)&&r(o)})}}),iw=rn({name:"nuxt:global-components"}),Ma={};function rw(t){if(t?.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function sw(t,e=wn()){const{path:n,matched:i}=e.resolve(t);if(!i.length||(e._routePreloaded||=new Set,e._routePreloaded.has(n)))return;const r=e._preloadPromises||=[];if(r.length>4)return Promise.all(r).then(()=>sw(t,e));e._routePreloaded.add(n);for(const s of i){const o=s.components?.default;if(typeof o!="function")continue;const a=Promise.resolve(o()).catch(()=>{}).finally(()=>r.splice(r.indexOf(a)));r.push(a)}await Promise.all(r)}const ow=rn({name:"nuxt:prefetch",setup(t){const e=wn();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{const i=n?.meta?.layout;i&&typeof Ma[i]=="function"&&await Ma[i]()})}),t.hooks.hook("link:prefetch",n=>{if(xi(n))return;const i=e.resolve(n);if(!i)return;const r=i.meta.layout;let s=Ud(i.meta.middleware);s=s.filter(o=>typeof o=="string");for(const o of s)typeof ef[o]=="function"&&ef[o]();typeof r=="string"&&r in Ma&&rw(Ma[r])})}}),aw="__NUXT_COLOR_MODE__",kc="nuxt-color-mode",lw="localStorage",cw="$s";function Fd(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,i]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(i!==void 0&&typeof i!="function")throw new Error("[nuxt] [useState] init must be a function: "+i);const r=cw+n,s=at(),o=_d(s.payload.state,r);if(o.value===void 0&&i){const a=i();if(At(a))return s.payload.state[r]=a,a;o.value=a}return o}const Ti=window[aw]||{},uw=rn(t=>{const e=Fd("color-mode",()=>ti({preference:Ti.preference,value:Ti.value,unknown:!1,forced:!1})).value;wn().afterEach(s=>{const o=s.meta.colorMode;o&&o!=="system"?(e.value=o,e.forced=!0):(o==="system"&&console.warn("You cannot force the colorMode to system at the page level."),e.forced=!1,e.value=e.preference==="system"?Ti.getColorScheme():e.preference)});let n;function i(){n||!window.matchMedia||(n=window.matchMedia("(prefers-color-scheme: dark)"),n.addEventListener("change",()=>{!e.forced&&e.preference==="system"&&(e.value=Ti.getColorScheme())}))}function r(s,o){switch(s){case"cookie":window.document.cookie=kc+"="+o;break;case"sessionStorage":window.sessionStorage?.setItem(kc,o);break;case"localStorage":default:window.localStorage?.setItem(kc,o)}}Gt(()=>e.preference,s=>{e.forced||(s==="system"?(e.value=Ti.getColorScheme(),i()):e.value=s,r(lw,s))},{immediate:!0}),Gt(()=>e.value,(s,o)=>{Ti.removeColorScheme(o),Ti.addColorScheme(s)}),e.preference==="system"&&i(),t.hook("app:mounted",()=>{e.unknown&&(e.preference=Ti.preference,e.value=Ti.value,e.unknown=!1)}),t.provide("colorMode",e)});/*!
  * shared v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function fw(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const Dl=typeof window<"u",br=(t,e=!1)=>e?Symbol.for(t):Symbol(t),dw=(t,e,n)=>hw({l:t,k:e,s:n}),hw=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),zt=t=>typeof t=="number"&&isFinite(t),pw=t=>nc(t)==="[object Date]",Nl=t=>nc(t)==="[object RegExp]",tc=t=>it(t)&&Object.keys(t).length===0,Bt=Object.assign,mw=Object.create,gt=(t=null)=>mw(t);function Op(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Fp(t){return t.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gw(t){return t=t.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,r,s)=>`${r}="${Fp(s)}"`),t=t.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,r,s)=>`${r}='${Fp(s)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(t)&&(t=t.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{t=t.replace(i,"$1javascript&#58;")}),t}const _w=Object.prototype.hasOwnProperty;function Kn(t,e){return _w.call(t,e)}const Ut=Array.isArray,Tt=t=>typeof t=="function",Re=t=>typeof t=="string",Lt=t=>typeof t=="boolean",ct=t=>t!==null&&typeof t=="object",vw=t=>ct(t)&&Tt(t.then)&&Tt(t.catch),Wv=Object.prototype.toString,nc=t=>Wv.call(t),it=t=>nc(t)==="[object Object]",yw=t=>t==null?"":Ut(t)||it(t)&&t.toString===Wv?JSON.stringify(t,null,2):String(t);function kd(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const Ta=t=>!ct(t)||Ut(t);function Os(t,e){if(Ta(t)||Ta(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(ct(i[s])&&!ct(r[s])&&(r[s]=Array.isArray(i[s])?[]:gt()),Ta(r[s])||Ta(i[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]}))})}}function xw(t,e=t.getCurrentLanguage(),n=t.getCurrentDirection()){const i={htmlAttrs:{},link:[],meta:[]};if(t.dir&&(i.htmlAttrs.dir=n),t.lang&&e&&(i.htmlAttrs.lang=e),t.seo){const r=bw(t);i.link=i.link.concat(r,Mw(t)),i.meta=i.meta.concat(Tw(t),ww(t),Aw(t,t.locales.map(s=>s.language||s.code)))}return i}function Ew(t){const e=new Map;for(const n of t){if(!n.language){console.warn("Locale `language` ISO code is required to generate alternate link");continue}const[i,r]=n.language.split("-");i&&r&&(n.isCatchallLocale||!e.has(i))&&e.set(i,n),e.set(n.language,n)}return e}function bw(t){if(!t.hreflangLinks)return[];const e=[],n=Ew(t.locales);for(const[i,r]of n.entries()){const s=Sw(i,r,t);s&&(e.push(s),t.defaultLocale&&t.defaultLocale===r.code&&e[0].hreflang!=="x-default"&&e.unshift({[t.key]:"i18n-xd",rel:"alternate",href:s.href,hreflang:"x-default"}))}return e}function Sw(t,e,n,i=n.strictCanonicals?n.getRouteWithoutQuery():void 0){const r=n.getLocalizedRoute(e.code,i);if(!r)return;const s=Kl(xi(r)?r:Qr(n.baseUrl,r),n.strictCanonicals?$v(n):{});return{[n.key]:`i18n-alt-${t}`,rel:"alternate",href:s,hreflang:t}}function Xv(t,e=t.getCurrentRoute()){const n=t.getLocaleRoute(Object.assign({},e,{path:void 0,name:t.getRouteBaseName(e)}));return n?Kl(Qr(t.baseUrl,n.path),$v(t)):""}function Mw(t,e=Xv(t)){return e?[{[t.key]:"i18n-can",rel:"canonical",href:e}]:[]}function $v(t,e=t.getCurrentRoute()){const i=t.getLocaleRoute(Object.assign({},e,{path:void 0,name:t.getRouteBaseName(e)}))?.query??{},r={};for(const s of t.canonicalQueries.filter(o=>o in i)){r[s]??=[];for(const o of Rw(i[s]))r[s].push(o||"")}return r}function Tw(t,e=Xv(t)){return e?[{[t.key]:"i18n-og-url",property:"og:url",content:e}]:[]}function ww(t,e=t.getCurrentLanguage()){return e?[{[t.key]:"i18n-og",property:"og:locale",content:jv(e)}]:[]}function Aw(t,e,n=t.getCurrentLanguage()){return e.filter(r=>r&&r!==n).map(r=>({[t.key]:`i18n-og-alt-${r}`,property:"og:locale:alternate",content:jv(r)}))}function jv(t=""){return t.replace(/-/g,"_")}function Rw(t){return Array.isArray(t)?t:[t]}function qv(t,e,n=t.getLocale()){if(Re(e)&&xi(e,{acceptRelative:!0}))return e;try{return Kv(t,e,n).fullPath}catch{return""}}function Yv(t,e,n=t.getLocale()){try{return Kv(t,e,n)}catch{return}}function Cw(t){if(!Re(t))return Bt({},t);if(t[0]==="/"){const{pathname:e,search:n,hash:i}=Vu(t);return{path:e,query:Ad(n),hash:i}}return{name:t}}function Kv(t,e,n){const i=Cw(e),r=t.router.resolve(t.resolveLocalizedRouteObject(i,n));return r.name?r:t.router.resolve(e)}function Jv(t,e,n=t.router.currentRoute.value){const i=t.getRouteBaseName(n);if(!i)return"";const r={name:i,params:Bt({},n.params,t.getLocalizedDynamicParams(e)),fullPath:n.fullPath,query:n.query,hash:n.hash,path:n.path,meta:n.meta},s=qv(t,r,e);return t.afterSwitchLocalePath(s,e)}function Pw(t,e,n=t.getLocale(),i=t.getLocales(),r=t.getBaseUrl()){const s=i.find(a=>a.code===n)||{},o=typeof e.seo=="object"&&e.seo?.canonicalQueries||[];return r||console.warn("I18n `baseUrl` is required to generate valid SEO tag links."),{...e,key:"id",locales:i,baseUrl:r,canonicalQueries:o,hreflangLinks:t.routingOptions.hreflangLinks,defaultLocale:t.routingOptions.defaultLocale,strictCanonicals:t.routingOptions.strictCanonicals,getRouteBaseName:t.getRouteBaseName,getCurrentRoute:()=>t.router.currentRoute.value,getCurrentLanguage:()=>s.language,getCurrentDirection:()=>s.dir||"ltr",getLocaleRoute:a=>Yv(t,a),getLocalizedRoute:(a,l)=>Jv(t,a,l),getRouteWithoutQuery:()=>{try{return Bt({},t.router.resolve({query:{}}),{meta:t.router.currentRoute.value.meta})}catch{return}}}}function Lw(t,{dir:e=!0,lang:n=!0,seo:i=!0}){return xw(Pw(t,{dir:e,lang:n,seo:i}))}function Iw(t=0){return e=>{const r=(typeof e=="string"?e:e.pathname).split("?")[0].split("/");return r[0]===""&&r.shift(),r.length>t&&r[t]||""}}const Zv="___";function Qv(t){return typeof t=="string"?t:t!=null?t.toString():""}function Bc(t){return Qv(typeof t=="object"?t?.name:t).split(Zv)[0]}const Dw=Iw(0),e0=t=>Dw(t),Nw=t=>t.split(Zv).at(1)??"";function Uw(t){return String(typeof t!="object"?t:t?.name||t?.path||"")}function Ow(t){const e=Uw(t);return e[0]==="/"?e0(e):Nw(e)}function Fw(t){return e=>Qv(e)}function kw(t){return e=>e}const Ho=["en","ar"],Ul={en:[],ar:[]},Bw=[],ra=[{code:"en",iso:"en-US",name:"English",dir:"ltr",language:void 0},{code:"ar",iso:"ar-SA",name:"العربية",dir:"rtl",language:void 0}];function kp(t){return typeof t=="string"?`'${t}'`:new Hw().serialize(t)}const Hw=(function(){class t{#e=new Map;compare(n,i){const r=typeof n,s=typeof i;return r==="string"&&s==="string"?n.localeCompare(i):r==="number"&&s==="number"?n-i:String.prototype.localeCompare.call(this.serialize(n,!0),this.serialize(i,!0))}serialize(n,i){if(n===null)return"null";switch(typeof n){case"string":return i?n:`'${n}'`;case"bigint":return`${n}n`;case"object":return this.$object(n);case"function":return this.$function(n)}return String(n)}serializeObject(n){const i=Object.prototype.toString.call(n);if(i!=="[object Object]")return this.serializeBuiltInType(i.length<10?`unknown:${i}`:i.slice(8,-1),n);const r=n.constructor,s=r===Object||r===void 0?"":r.name;if(s!==""&&globalThis[s]===r)return this.serializeBuiltInType(s,n);if(typeof n.toJSON=="function"){const o=n.toJSON();return s+(o!==null&&typeof o=="object"?this.$object(o):`(${this.serialize(o)})`)}return this.serializeObjectEntries(s,Object.entries(n))}serializeBuiltInType(n,i){const r=this["$"+n];if(r)return r.call(this,i);if(typeof i?.entries=="function")return this.serializeObjectEntries(n,i.entries());throw new Error(`Cannot serialize ${n}`)}serializeObjectEntries(n,i){const r=Array.from(i).sort((o,a)=>this.compare(o[0],a[0]));let s=`${n}{`;for(let o=0;o<r.length;o++){const[a,l]=r[o];s+=`${this.serialize(a,!0)}:${this.serialize(l)}`,o<r.length-1&&(s+=",")}return s+"}"}$object(n){let i=this.#e.get(n);return i===void 0&&(this.#e.set(n,`#${this.#e.size}`),i=this.serializeObject(n),this.#e.set(n,i)),i}$function(n){const i=Function.prototype.toString.call(n);return i.slice(-15)==="[native code] }"?`${n.name||""}()[native]`:`${n.name}(${n.length})${i.replace(/\s*\n\s*/g,"")}`}$Array(n){let i="[";for(let r=0;r<n.length;r++)i+=this.serialize(n[r]),r<n.length-1&&(i+=",");return i+"]"}$Date(n){try{return`Date(${n.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(n){return`ArrayBuffer[${new Uint8Array(n).join(",")}]`}$Set(n){return`Set${this.$Array(Array.from(n).sort((i,r)=>this.compare(i,r)))}`}$Map(n){return this.serializeObjectEntries("Map",n.entries())}}for(const e of["Error","RegExp","URL"])t.prototype["$"+e]=function(n){return`${e}(${n})`};for(const e of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])t.prototype["$"+e]=function(n){return`${e}[${n.join(",")}]`};for(const e of["BigInt64Array","BigUint64Array"])t.prototype["$"+e]=function(n){return`${e}[${n.join("n,")}${n.length>0?"n":""}]`};return t})();function zw(t,e){return t===e||kp(t)===kp(e)}function t0(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},i=e||{},r=i.decode||Vw;let s=0;for(;s<t.length;){const o=t.indexOf("=",s);if(o===-1)break;let a=t.indexOf(";",s);if(a===-1)a=t.length;else if(a<o){s=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(s,o).trim();if(i?.filter&&!i?.filter(l)){s=a+1;continue}if(n[l]===void 0){let c=t.slice(o+1,a).trim();c.codePointAt(0)===34&&(c=c.slice(1,-1)),n[l]=Gw(c,r)}s=a+1}return n}function Vw(t){return t.includes("%")?decodeURIComponent(t):t}function Gw(t,e){try{return e(t)}catch{return t}}const wa=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function Bp(t,e,n){const i=n||{},r=i.encode||encodeURIComponent;if(typeof r!="function")throw new TypeError("option encode is invalid");if(!wa.test(t))throw new TypeError("argument name is invalid");const s=r(e);if(s&&!wa.test(s))throw new TypeError("argument val is invalid");let o=t+"="+s;if(i.maxAge!==void 0&&i.maxAge!==null){const a=i.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(i.domain){if(!wa.test(i.domain))throw new TypeError("option domain is invalid");o+="; Domain="+i.domain}if(i.path){if(!wa.test(i.path))throw new TypeError("option path is invalid");o+="; Path="+i.path}if(i.expires){if(!Ww(i.expires)||Number.isNaN(i.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(o+="; HttpOnly"),i.secure&&(o+="; Secure"),i.priority)switch(typeof i.priority=="string"?i.priority.toLowerCase():i.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return i.partitioned&&(o+="; Partitioned"),o}function Ww(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}function jn(t){if(typeof t!="object")return t;var e,n,i=Object.prototype.toString.call(t);if(i==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=jn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:jn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=jn(t[e])}return n}if(i==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=jn(t[e]);return n}return i==="[object Set]"?(n=new Set,t.forEach(function(r){n.add(jn(r))}),n):i==="[object Map]"?(n=new Map,t.forEach(function(r,s){n.set(jn(s),jn(r))}),n):i==="[object Date]"?new Date(+t):i==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):i==="[object DataView]"?new t.constructor(jn(t.buffer)):i==="[object ArrayBuffer]"?t.slice(0):i.slice(-6)==="Array]"?new t.constructor(t):t}const Xw={path:"/",watch:!0,decode:t=>Fo(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},Aa=globalThis.cookieStore;function n0(t,e){const n={...Xw,...e};n.filter??=c=>c===t;const i=Hp(n)||{};let r;n.maxAge!==void 0?r=n.maxAge*1e3:n.expires&&(r=n.expires.getTime()-Date.now());const s=r!==void 0&&r<=0,o=s||i[t]===void 0||i[t]===null,a=jn(s?void 0:i[t]??n.default?.()),l=r&&!s?qw(a,r,n.watch&&n.watch!=="shallow"):kt(a);{let c=null;try{!Aa&&typeof BroadcastChannel<"u"&&(c=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const u=(g=!1)=>{!g&&(n.readonly||zw(l.value,i[t]))||(jw(t,l.value,n),i[t]=jn(l.value),c?.postMessage({value:n.encode(l.value)}))},f=g=>{const _=g.refresh?Hp(n)?.[t]:n.decode(g.value);d=!0,l.value=_,i[t]=jn(_),yr(()=>{d=!1})};let d=!1;const h=!!Zo();if(h&&ml(()=>{d=!0,u(),c?.close()}),Aa){const g=_=>{const m=_.changed.find(E=>E.name===t),p=_.deleted.find(E=>E.name===t);m&&f({value:m.value}),p&&f({value:null})};Aa.addEventListener("change",g),h&&ml(()=>Aa.removeEventListener("change",g))}else c&&(c.onmessage=({data:g})=>f(g));n.watch&&Gt(l,()=>{d||u()},{deep:n.watch!=="shallow"}),o&&u(o)}return l}function Hp(t={}){return t0(document.cookie,t)}function $w(t,e,n={}){return e==null?Bp(t,e,{...n,maxAge:-1}):Bp(t,e,n)}function jw(t,e,n={}){document.cookie=$w(t,e,n)}const zp=2147483647;function qw(t,e,n){let i,r,s=0;const o=n?kt(t):{value:t};return Zo()&&ml(()=>{r?.(),clearTimeout(i)}),i_((a,l)=>{n&&(r=Gt(o,l));function c(){s=0,clearTimeout(i);const u=e-s,f=u<zp?u:zp;i=setTimeout(()=>{if(s+=f,s<e)return c();o.value=void 0,l()},f)}return{get(){return a(),o.value},set(u){c(),o.value=u,l()}}})}function i0(t){return new URL(globalThis.location.href)}const r0=new Map,Yw=_v((t,e,n)=>{if(e==="messages"||e==="datetimeFormats"||e==="numberFormats")return t[e]??=gt(null),Os(n,t[e]),!0});async function Kw(t){const e=at();let n={messages:gt(null)};for(const i of t){const r=await i().then(o=>o.default),s=Tt(r)?await e.runWithContext(()=>r()):r;n=Yw(gt(null),s,n)}return n.fallbackLocale??=!1,n}const Jw=t=>nc(t)==="[object Module]",Zw=t=>Jw(t)||!1;async function Qw(t,e){const n=at();try{const i=await n.runWithContext(e.load).then(r=>Zw(r)?r.default:r);return Tt(i)?await n.runWithContext(()=>i(t)):i}catch(i){throw new Error(`Failed loading locale (${t}): `+i.message)}}async function eA(t,e=[]){const n=at(),i={};for(const r of e){const s=tA(r),o=s||await n.runWithContext(async()=>await Qw(t,r));!s&&r.cache!==!1&&r0.set(r.key,{ttl:Date.now()+86400*1e3,value:o}),Os(o,i)}return i}function tA(t){if(t.cache===!1)return;const e=r0.get(t.key);if(e!=null)return e.ttl>Date.now()?e.value:void 0}function Bd(t){return t!=null&&"global"in t&&"mode"in t?t.global:t}function Ra(t){const e=Bd(t);return"__composer"in e?e.__composer:e}function ic(t){return t?t.$config.public.i18n:ia().public.i18n}function rc(t){const e=ic(t).detectBrowserLanguage,n=e||{};return{...n,enabled:!!e,cookieKey:n.cookieKey||"i18n_redirected"}}function nA(t){if(t)return{path:"/"+(Re(t)?t:t.path).replace(/^\//,""),code:!Re(t)&&t.statusCode||302}}function iA(t){return Array.isArray(t)?t:[t]}function rA(t,e,n){const i=(s="")=>s.replace(/https?:\/\//,""),r=t.filter(s=>i(s.domain)===e||iA(s.domains).includes(e));return r.length<=1?r[0]?.code:r.find(s=>s.code===n)?.code||r.find(s=>s.defaultForDomains?.includes(e)??s.domainDefault)?.code}function sA(t,e,n){const i=ra.find(s=>s.code===n),r=t?.[n]?.domain||i?.domain||i?.domains?.find(s=>s===e.host);if(r)return xi(r,{strict:!0})?r:e.protocol+"//"+r}function oA(t){const e={};for(const n of Ho){const i=aA(t,[n]),r=lA(n,i);e[n]={fallbacks:i,cacheable:r}}return e}function aA(t,e){if(t===!1)return[];if(Ut(t))return t;let n=[];if(Re(t))return e.every(r=>r!==t)&&n.push(t),n;const i=[...e,"default"];for(const r of i)r in t&&(n=[...n,...t[r].filter(Boolean)]);return n}function Vp(t){return Ul[t]!=null&&Ul[t].every(e=>e.cache!==!1)}function lA(t,e){return Vp(t)&&e.every(n=>Vp(n))}function cA(t){return ra.find(e=>!!e.defaultForDomains?.includes(t))?.code}const Fs=t=>Ho.includes(t||""),Gp=t=>Fs(t)?t:void 0,s0=()=>Fd("i18n:cached-locale-configs",()=>{}),o0=()=>Fd("i18n:resolved-locale",()=>"");function uA({cookieCrossOrigin:t,cookieDomain:e,cookieSecure:n,cookieKey:i}){const r=new Date;return n0(i,{path:"/",readonly:!1,expires:new Date(r.setDate(r.getDate()+365)),sameSite:t?"none":"lax",domain:e||void 0,secure:t||n})}function fA(t,e,n){const i=Bd(e),r=ic(t),s=rc(t),o=s0(),a=uA(s),l=_=>o.value[_],c=_=>sA(r.domainLocales,i0(),_),u=TA(t,r.baseUrl),f=o0(),d=async _=>{const m=l(_)?.fallbacks??[];m.includes(_)||m.push(_);for(const p of m){const E=await t.runWithContext(()=>eA(p,Ul[p]));i.mergeLocaleMessage(p,E)}},h=async _=>{if(!(_ in Ul))return;const m=l(_)?.cacheable?{}:{"Cache-Control":"no-cache"},p=await $fetch(`/_i18n/PsXMelXj/${_}/messages.json`,{headers:m});for(const E of Object.keys(p))i.mergeLocaleMessage(E,p[E])},g={vueI18n:e,initial:!0,preloaded:!1,config:r,rootRedirect:nA(r.rootRedirect),redirectStatusCode:r.redirectStatusCode??302,dynamicResourcesSSG:!1,getDefaultLocale:()=>n,getLocale:()=>Xe(i.locale),setLocale:async _=>{const m=g.getLocale();_===m||!Fs(_)||(At(i.locale)?i.locale.value=_:i.locale=_,await t.callHook("i18n:localeSwitched",{newLocale:_,oldLocale:m}),f.value=_)},setLocaleSuspend:async _=>{Fs(_)&&(g.vueI18n.__pendingLocale=_,g.vueI18n.__pendingLocalePromise=new Promise(m=>{g.vueI18n.__resolvePendingLocalePromise=async()=>{g.setCookieLocale(_),await g.setLocale(_),g.vueI18n.__pendingLocale=void 0,m()}}),(t.isHydrating||!g.config.skipSettingLocaleOnNavigate)&&await g.vueI18n.__resolvePendingLocalePromise?.())},getLocales:()=>Xe(i.locales).map(_=>Re(_)?{code:_}:_),setCookieLocale:_=>{s.useCookie&&Fs(_)&&(a.value=_)},getBaseUrl:_=>Qr(_&&c(_)||u(),t.$config.app.baseURL),loadMessages:async _=>{try{return g.dynamicResourcesSSG?await d(_):await h(_)}catch(m){console.warn(`Failed to load messages for locale "${_}"`,m)}},composableCtx:void 0};return g.composableCtx=EA(g,t),g}function Hd(t){if(t._nuxtI18n==null)throw new Error("Nuxt I18n context has not been set up yet.");return t._nuxtI18n}function dA(t,e){const n=[];for(const[i,r]of e.entries()){const s=t.find(o=>o.language?.toLowerCase()===r.toLowerCase());if(s){n.push({code:s.code,score:1-i/e.length});break}}for(const[i,r]of e.entries()){const s=r.split("-")[0].toLowerCase(),o=t.find(a=>a.language?.split("-")[0].toLowerCase()===s);if(o){n.push({code:o.code,score:.999-i/e.length});break}}return n}function hA(t,e){return t.score===e.score?e.code.length-t.code.length:e.score-t.score}function pA(t,e){return dA(t.map(i=>({code:i.code,language:i.language||i.code})),e).sort(hA).at(0)?.code??""}const mA=(t,e)=>{const n=document.cookie;return t0(n)[e]},gA=(t,e)=>Ow(e),_A=t=>pA(ra,navigator.languages),vA=(t,e,n)=>{const i=new URL(window.location.href).host,r=ra.map(s=>({...s,domain:n[s.code]?.domain??s.domain}));return rA(r,i,e0(e))},zd=(t,e,n)=>{const i=ic(n);return{cookie:()=>mA(t,e.cookieKey),header:()=>{},navigator:()=>_A(),host:r=>vA(t,r,i.domainLocales),route:r=>gA(t,r)}},yA=t=>!!t.path&&!t.name;function sc(t){const e=t?._nuxtI18n?.composableCtx;if(!e)throw new Error("i18n context is not initialized. Ensure the i18n plugin is installed and the composable is used within a Vue component or setup function.");return e}const xA=ko;function EA(t,e=at()){const n=wn();zd(void 0,rc(e),e);const i=t.getDefaultLocale(),r=Fw();function s(c,u){c.name||=Bc(n.currentRoute.value);const f=r(c.name,u);return n.hasRoute(f)&&(c.name=f),c}const o=kw();function a(c,u){const f=o(c,u),d=Bc(f);return d?(f.name=r(d,u),f):(f.path=xA(f.path,!0),f)}const l={router:n,_head:void 0,get head(){return this._head??=Tv({}),this._head},metaState:{htmlAttrs:{},meta:[],link:[]},seoSettings:{dir:!1,lang:!1,seo:!1},localePathPayload:bA(),routingOptions:{defaultLocale:i,strictCanonicals:t.config.experimental.alternateLinkCanonicalQueries??!0,hreflangLinks:!1},getLocale:t.getLocale,getLocales:t.getLocales,getBaseUrl:t.getBaseUrl,getRouteBaseName:Bc,getRouteLocalizedParams:()=>n.currentRoute.value.meta.nuxtI18nInternal??{},getLocalizedDynamicParams:c=>l.getRouteLocalizedParams()?.[c],afterSwitchLocalePath:(c,u)=>(l.getRouteLocalizedParams(),c),resolveLocalizedRouteObject:(c,u)=>yA(c)?a(c,u):s(c,u)};return l}function bA(t=at()){const e=document.querySelector(`[data-nuxt-i18n-slp="${t._id}"]`)?.textContent;return JSON.parse(e||"{}")}async function a0(t,e){const n=Hd(t),i=n.getLocale();if(e===i&&!n.initial)return e;const r={oldLocale:i,newLocale:e,initialSetup:n.initial,context:t};let s=await t.callHook("i18n:beforeLocaleSwitch",r);return s!=null,s??=r.newLocale,Fs(s)&&(e=s),await n.loadMessages(e),await n.setLocaleSuspend(e),e}function SA(t,e,n){return!1}function MA(t,e){const n=rc(t),i=zd(void 0,n,t),r=Hd(t),s=Re(e)?e:e.path;function*o(){r.initial&&n.enabled&&!SA(n,s,i.route(s))&&(yield i.cookie(),yield i.header(),yield i.navigator(),yield n.fallbackLocale)}for(const a of o())if(a&&Fs(a))return a;return r.getLocale()||r.getDefaultLocale()||""}function TA(t,e,n,i){return Tt(e)?()=>e(t):()=>e??""}/*!
  * message-compiler v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function wA(t,e,n){return{line:t,column:e,offset:n}}function tf(t,e,n){return{start:t,end:e}}const ht={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},AA=17;function oc(t,e,n={}){const{domain:i,messages:r,args:s}=n,o=t,a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=i,a}function RA(t){throw t}const ai=" ",CA="\r",an=`
`,PA="\u2028",LA="\u2029";function IA(t){const e=t;let n=0,i=1,r=1,s=0;const o=A=>e[A]===CA&&e[A+1]===an,a=A=>e[A]===an,l=A=>e[A]===LA,c=A=>e[A]===PA,u=A=>o(A)||a(A)||l(A)||c(A),f=()=>n,d=()=>i,h=()=>r,g=()=>s,_=A=>o(A)||l(A)||c(A)?an:e[A],m=()=>_(n),p=()=>_(n+s);function E(){return s=0,u(n)&&(i++,r=0),o(n)&&n++,n++,r++,e[n]}function y(){return o(n+s)&&s++,s++,e[n+s]}function v(){n=0,i=1,r=1,s=0}function S(A=0){s=A}function w(){const A=n+s;for(;A!==n;)E();s=0}return{index:f,line:d,column:h,peekOffset:g,charAt:_,currentChar:m,currentPeek:p,next:E,peek:y,reset:v,resetPeek:S,skipToPeek:w}}const wi=void 0,DA=".",Wp="'",NA="tokenizer";function UA(t,e={}){const n=e.location!==!1,i=IA(t),r=()=>i.index(),s=()=>wA(i.line(),i.column(),i.index()),o=s(),a=r(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(C,L,B,...K){const ie=c();if(L.column+=B,L.offset+=B,u){const R=n?tf(ie.startLoc,L):null,x=oc(C,R,{domain:NA,args:K});u(x)}}function d(C,L,B){C.endLoc=s(),C.currentType=L;const K={type:L};return n&&(K.loc=tf(C.startLoc,C.endLoc)),B!=null&&(K.value=B),K}const h=C=>d(C,13);function g(C,L){return C.currentChar()===L?(C.next(),L):(f(ht.EXPECTED_TOKEN,s(),0,L),"")}function _(C){let L="";for(;C.currentPeek()===ai||C.currentPeek()===an;)L+=C.currentPeek(),C.peek();return L}function m(C){const L=_(C);return C.skipToPeek(),L}function p(C){if(C===wi)return!1;const L=C.charCodeAt(0);return L>=97&&L<=122||L>=65&&L<=90||L===95}function E(C){if(C===wi)return!1;const L=C.charCodeAt(0);return L>=48&&L<=57}function y(C,L){const{currentType:B}=L;if(B!==2)return!1;_(C);const K=p(C.currentPeek());return C.resetPeek(),K}function v(C,L){const{currentType:B}=L;if(B!==2)return!1;_(C);const K=C.currentPeek()==="-"?C.peek():C.currentPeek(),ie=E(K);return C.resetPeek(),ie}function S(C,L){const{currentType:B}=L;if(B!==2)return!1;_(C);const K=C.currentPeek()===Wp;return C.resetPeek(),K}function w(C,L){const{currentType:B}=L;if(B!==7)return!1;_(C);const K=C.currentPeek()===".";return C.resetPeek(),K}function A(C,L){const{currentType:B}=L;if(B!==8)return!1;_(C);const K=p(C.currentPeek());return C.resetPeek(),K}function I(C,L){const{currentType:B}=L;if(!(B===7||B===11))return!1;_(C);const K=C.currentPeek()===":";return C.resetPeek(),K}function M(C,L){const{currentType:B}=L;if(B!==9)return!1;const K=()=>{const R=C.currentPeek();return R==="{"?p(C.peek()):R==="@"||R==="|"||R===":"||R==="."||R===ai||!R?!1:R===an?(C.peek(),K()):N(C,!1)},ie=K();return C.resetPeek(),ie}function T(C){_(C);const L=C.currentPeek()==="|";return C.resetPeek(),L}function N(C,L=!0){const B=(ie=!1,R="")=>{const x=C.currentPeek();return x==="{"||x==="@"||!x?ie:x==="|"?!(R===ai||R===an):x===ai?(C.peek(),B(!0,ai)):x===an?(C.peek(),B(!0,an)):!0},K=B();return L&&C.resetPeek(),K}function U(C,L){const B=C.currentChar();return B===wi?wi:L(B)?(C.next(),B):null}function G(C){const L=C.charCodeAt(0);return L>=97&&L<=122||L>=65&&L<=90||L>=48&&L<=57||L===95||L===36}function X(C){return U(C,G)}function Y(C){const L=C.charCodeAt(0);return L>=97&&L<=122||L>=65&&L<=90||L>=48&&L<=57||L===95||L===36||L===45}function H(C){return U(C,Y)}function te(C){const L=C.charCodeAt(0);return L>=48&&L<=57}function F(C){return U(C,te)}function ce(C){const L=C.charCodeAt(0);return L>=48&&L<=57||L>=65&&L<=70||L>=97&&L<=102}function ve(C){return U(C,ce)}function Me(C){let L="",B="";for(;L=F(C);)B+=L;return B}function Ne(C){let L="";for(;;){const B=C.currentChar();if(B==="{"||B==="}"||B==="@"||B==="|"||!B)break;if(B===ai||B===an)if(N(C))L+=B,C.next();else{if(T(C))break;L+=B,C.next()}else L+=B,C.next()}return L}function Oe(C){m(C);let L="",B="";for(;L=H(C);)B+=L;const K=C.currentChar();if(K&&K!=="}"&&K!==wi&&K!==ai&&K!==an&&K!=="　"){const ie=le(C);return f(ht.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,B+ie),B+ie}return C.currentChar()===wi&&f(ht.UNTERMINATED_CLOSING_BRACE,s(),0),B}function Ve(C){m(C);let L="";return C.currentChar()==="-"?(C.next(),L+=`-${Me(C)}`):L+=Me(C),C.currentChar()===wi&&f(ht.UNTERMINATED_CLOSING_BRACE,s(),0),L}function je(C){return C!==Wp&&C!==an}function oe(C){m(C),g(C,"'");let L="",B="";for(;L=U(C,je);)L==="\\"?B+=k(C):B+=L;const K=C.currentChar();return K===an||K===wi?(f(ht.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),K===an&&(C.next(),g(C,"'")),B):(g(C,"'"),B)}function k(C){const L=C.currentChar();switch(L){case"\\":case"'":return C.next(),`\\${L}`;case"u":return se(C,L,4);case"U":return se(C,L,6);default:return f(ht.UNKNOWN_ESCAPE_SEQUENCE,s(),0,L),""}}function se(C,L,B){g(C,L);let K="";for(let ie=0;ie<B;ie++){const R=ve(C);if(!R){f(ht.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${L}${K}${C.currentChar()}`);break}K+=R}return`\\${L}${K}`}function ae(C){return C!=="{"&&C!=="}"&&C!==ai&&C!==an}function le(C){m(C);let L="",B="";for(;L=U(C,ae);)B+=L;return B}function ye(C){let L="",B="";for(;L=X(C);)B+=L;return B}function ze(C){const L=B=>{const K=C.currentChar();return K==="{"||K==="@"||K==="|"||K==="("||K===")"||!K||K===ai?B:(B+=K,C.next(),L(B))};return L("")}function b(C){m(C);const L=g(C,"|");return m(C),L}function O(C,L){let B=null;switch(C.currentChar()){case"{":return L.braceNest>=1&&f(ht.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),C.next(),B=d(L,2,"{"),m(C),L.braceNest++,B;case"}":return L.braceNest>0&&L.currentType===2&&f(ht.EMPTY_PLACEHOLDER,s(),0),C.next(),B=d(L,3,"}"),L.braceNest--,L.braceNest>0&&m(C),L.inLinked&&L.braceNest===0&&(L.inLinked=!1),B;case"@":return L.braceNest>0&&f(ht.UNTERMINATED_CLOSING_BRACE,s(),0),B=z(C,L)||h(L),L.braceNest=0,B;default:{let ie=!0,R=!0,x=!0;if(T(C))return L.braceNest>0&&f(ht.UNTERMINATED_CLOSING_BRACE,s(),0),B=d(L,1,b(C)),L.braceNest=0,L.inLinked=!1,B;if(L.braceNest>0&&(L.currentType===4||L.currentType===5||L.currentType===6))return f(ht.UNTERMINATED_CLOSING_BRACE,s(),0),L.braceNest=0,ee(C,L);if(ie=y(C,L))return B=d(L,4,Oe(C)),m(C),B;if(R=v(C,L))return B=d(L,5,Ve(C)),m(C),B;if(x=S(C,L))return B=d(L,6,oe(C)),m(C),B;if(!ie&&!R&&!x)return B=d(L,12,le(C)),f(ht.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,B.value),m(C),B;break}}return B}function z(C,L){const{currentType:B}=L;let K=null;const ie=C.currentChar();switch((B===7||B===8||B===11||B===9)&&(ie===an||ie===ai)&&f(ht.INVALID_LINKED_FORMAT,s(),0),ie){case"@":return C.next(),K=d(L,7,"@"),L.inLinked=!0,K;case".":return m(C),C.next(),d(L,8,".");case":":return m(C),C.next(),d(L,9,":");default:return T(C)?(K=d(L,1,b(C)),L.braceNest=0,L.inLinked=!1,K):w(C,L)||I(C,L)?(m(C),z(C,L)):A(C,L)?(m(C),d(L,11,ye(C))):M(C,L)?(m(C),ie==="{"?O(C,L)||K:d(L,10,ze(C))):(B===7&&f(ht.INVALID_LINKED_FORMAT,s(),0),L.braceNest=0,L.inLinked=!1,ee(C,L))}}function ee(C,L){let B={type:13};if(L.braceNest>0)return O(C,L)||h(L);if(L.inLinked)return z(C,L)||h(L);switch(C.currentChar()){case"{":return O(C,L)||h(L);case"}":return f(ht.UNBALANCED_CLOSING_BRACE,s(),0),C.next(),d(L,3,"}");case"@":return z(C,L)||h(L);default:{if(T(C))return B=d(L,1,b(C)),L.braceNest=0,L.inLinked=!1,B;if(N(C))return d(L,0,Ne(C));break}}return B}function $(){const{currentType:C,offset:L,startLoc:B,endLoc:K}=l;return l.lastType=C,l.lastOffset=L,l.lastStartLoc=B,l.lastEndLoc=K,l.offset=r(),l.startLoc=s(),i.currentChar()===wi?d(l,13):ee(i,l)}return{nextToken:$,currentOffset:r,currentPosition:s,context:c}}const OA="parser",FA=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function kA(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function BA(t={}){const e=t.location!==!1,{onError:n}=t;function i(p,E,y,v,...S){const w=p.currentPosition();if(w.offset+=v,w.column+=v,n){const A=e?tf(y,w):null,I=oc(E,A,{domain:OA,args:S});n(I)}}function r(p,E,y){const v={type:p};return e&&(v.start=E,v.end=E,v.loc={start:y,end:y}),v}function s(p,E,y,v){e&&(p.end=E,p.loc&&(p.loc.end=y))}function o(p,E){const y=p.context(),v=r(3,y.offset,y.startLoc);return v.value=E,s(v,p.currentOffset(),p.currentPosition()),v}function a(p,E){const y=p.context(),{lastOffset:v,lastStartLoc:S}=y,w=r(5,v,S);return w.index=parseInt(E,10),p.nextToken(),s(w,p.currentOffset(),p.currentPosition()),w}function l(p,E){const y=p.context(),{lastOffset:v,lastStartLoc:S}=y,w=r(4,v,S);return w.key=E,p.nextToken(),s(w,p.currentOffset(),p.currentPosition()),w}function c(p,E){const y=p.context(),{lastOffset:v,lastStartLoc:S}=y,w=r(9,v,S);return w.value=E.replace(FA,kA),p.nextToken(),s(w,p.currentOffset(),p.currentPosition()),w}function u(p){const E=p.nextToken(),y=p.context(),{lastOffset:v,lastStartLoc:S}=y,w=r(8,v,S);return E.type!==11?(i(p,ht.UNEXPECTED_EMPTY_LINKED_MODIFIER,y.lastStartLoc,0),w.value="",s(w,v,S),{nextConsumeToken:E,node:w}):(E.value==null&&i(p,ht.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,li(E)),w.value=E.value||"",s(w,p.currentOffset(),p.currentPosition()),{node:w})}function f(p,E){const y=p.context(),v=r(7,y.offset,y.startLoc);return v.value=E,s(v,p.currentOffset(),p.currentPosition()),v}function d(p){const E=p.context(),y=r(6,E.offset,E.startLoc);let v=p.nextToken();if(v.type===8){const S=u(p);y.modifier=S.node,v=S.nextConsumeToken||p.nextToken()}switch(v.type!==9&&i(p,ht.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,li(v)),v=p.nextToken(),v.type===2&&(v=p.nextToken()),v.type){case 10:v.value==null&&i(p,ht.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,li(v)),y.key=f(p,v.value||"");break;case 4:v.value==null&&i(p,ht.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,li(v)),y.key=l(p,v.value||"");break;case 5:v.value==null&&i(p,ht.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,li(v)),y.key=a(p,v.value||"");break;case 6:v.value==null&&i(p,ht.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,li(v)),y.key=c(p,v.value||"");break;default:{i(p,ht.UNEXPECTED_EMPTY_LINKED_KEY,E.lastStartLoc,0);const S=p.context(),w=r(7,S.offset,S.startLoc);return w.value="",s(w,S.offset,S.startLoc),y.key=w,s(y,S.offset,S.startLoc),{nextConsumeToken:v,node:y}}}return s(y,p.currentOffset(),p.currentPosition()),{node:y}}function h(p){const E=p.context(),y=E.currentType===1?p.currentOffset():E.offset,v=E.currentType===1?E.endLoc:E.startLoc,S=r(2,y,v);S.items=[];let w=null;do{const M=w||p.nextToken();switch(w=null,M.type){case 0:M.value==null&&i(p,ht.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,li(M)),S.items.push(o(p,M.value||""));break;case 5:M.value==null&&i(p,ht.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,li(M)),S.items.push(a(p,M.value||""));break;case 4:M.value==null&&i(p,ht.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,li(M)),S.items.push(l(p,M.value||""));break;case 6:M.value==null&&i(p,ht.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,li(M)),S.items.push(c(p,M.value||""));break;case 7:{const T=d(p);S.items.push(T.node),w=T.nextConsumeToken||null;break}}}while(E.currentType!==13&&E.currentType!==1);const A=E.currentType===1?E.lastOffset:p.currentOffset(),I=E.currentType===1?E.lastEndLoc:p.currentPosition();return s(S,A,I),S}function g(p,E,y,v){const S=p.context();let w=v.items.length===0;const A=r(1,E,y);A.cases=[],A.cases.push(v);do{const I=h(p);w||(w=I.items.length===0),A.cases.push(I)}while(S.currentType!==13);return w&&i(p,ht.MUST_HAVE_MESSAGES_IN_PLURAL,y,0),s(A,p.currentOffset(),p.currentPosition()),A}function _(p){const E=p.context(),{offset:y,startLoc:v}=E,S=h(p);return E.currentType===13?S:g(p,y,v,S)}function m(p){const E=UA(p,Bt({},t)),y=E.context(),v=r(0,y.offset,y.startLoc);return e&&v.loc&&(v.loc.source=p),v.body=_(E),t.onCacheKey&&(v.cacheKey=t.onCacheKey(p)),y.currentType!==13&&i(E,ht.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,p[y.offset]||""),s(v,E.currentOffset(),E.currentPosition()),v}return{parse:m}}function li(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function HA(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function Xp(t,e){for(let n=0;n<t.length;n++)Vd(t[n],e)}function Vd(t,e){switch(t.type){case 1:Xp(t.cases,e),e.helper("plural");break;case 2:Xp(t.items,e);break;case 6:{Vd(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function zA(t,e={}){const n=HA(t);n.helper("normalize"),t.body&&Vd(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function VA(t){const e=t.body;return e.type===2?$p(e):e.cases.forEach(n=>$p(n)),t}function $p(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=kd(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}function ws(t){switch(t.t=t.type,t.type){case 0:{const e=t;ws(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)ws(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)ws(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;ws(e.key),e.k=e.key,delete e.key,e.modifier&&(ws(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function GA(t,e){const{filename:n,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&t.loc&&(o.source=t.loc.source);const a=()=>o;function l(_,m){o.code+=_}function c(_,m=!0){const p=m?i:"";l(r?p+"  ".repeat(_):p)}function u(_=!0){const m=++o.indentLevel;_&&c(m)}function f(_=!0){const m=--o.indentLevel;_&&c(m)}function d(){c(o.indentLevel)}return{context:a,push:l,indent:u,deindent:f,newline:d,helper:_=>`_${_}`,needIndent:()=>o.needIndent}}function WA(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),$s(t,e.key),e.modifier?(t.push(", "),$s(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function XA(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&($s(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function $A(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&($s(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function jA(t,e){e.body?$s(t,e.body):t.push("null")}function $s(t,e){const{helper:n}=t;switch(e.type){case 0:jA(t,e);break;case 1:$A(t,e);break;case 2:XA(t,e);break;case 6:WA(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const qA=(t,e={})=>{const n=Re(e.mode)?e.mode:"normal",i=Re(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,s=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],a=GA(t,{filename:i,breakLineCode:r,needIndent:s});a.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(s),o.length>0&&(a.push(`const { ${kd(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),a.newline()),a.push("return "),$s(a,t),a.deindent(s),a.push("}"),delete t.helpers;const{code:l,map:c}=a.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function YA(t,e={}){const n=Bt({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,a=BA(n).parse(t);return i?(s&&VA(a),r&&ws(a),{ast:a,code:""}):(zA(a,n),qA(a,n))}/*!
  * core-base v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function _i(t){return ct(t)&&Gd(t)===0&&(Kn(t,"b")||Kn(t,"body"))}const l0=["b","body"];function KA(t){return Sr(t,l0)}const c0=["c","cases"];function JA(t){return Sr(t,c0,[])}const u0=["s","static"];function ZA(t){return Sr(t,u0)}const f0=["i","items"];function QA(t){return Sr(t,f0,[])}const d0=["t","type"];function Gd(t){return Sr(t,d0)}const h0=["v","value"];function Ca(t,e){const n=Sr(t,h0);if(n!=null)return n;throw zo(e)}const p0=["m","modifier"];function eR(t){return Sr(t,p0)}const m0=["k","key"];function tR(t){const e=Sr(t,m0);if(e)return e;throw zo(6)}function Sr(t,e,n){for(let i=0;i<e.length;i++){const r=e[i];if(Kn(t,r)&&t[r]!=null)return t[r]}return n}const g0=[...l0,...c0,...u0,...f0,...m0,...p0,...h0,...d0];function zo(t){return new Error(`unhandled node type: ${t}`)}function Hc(t){return n=>nR(n,t)}function nR(t,e){const n=KA(e);if(n==null)throw zo(0);if(Gd(n)===1){const s=JA(n);return t.plural(s.reduce((o,a)=>[...o,jp(t,a)],[]))}else return jp(t,n)}function jp(t,e){const n=ZA(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=QA(e).reduce((r,s)=>[...r,nf(t,s)],[]);return t.normalize(i)}}function nf(t,e){const n=Gd(e);switch(n){case 3:return Ca(e,n);case 9:return Ca(e,n);case 4:{const i=e;if(Kn(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(Kn(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw zo(n)}case 5:{const i=e;if(Kn(i,"i")&&zt(i.i))return t.interpolate(t.list(i.i));if(Kn(i,"index")&&zt(i.index))return t.interpolate(t.list(i.index));throw zo(n)}case 6:{const i=e,r=eR(i),s=tR(i);return t.linked(nf(t,s),r?nf(t,r):void 0,t.type)}case 7:return Ca(e,n);case 8:return Ca(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const iR=t=>t;let Pa=gt();function rR(t,e={}){let n=!1;const i=e.onError||RA;return e.onError=r=>{n=!0,i(r)},{...YA(t,e),detectError:n}}function sR(t,e){if(Re(t)){Lt(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||iR)(t),r=Pa[i];if(r)return r;const{ast:s,detectError:o}=rR(t,{...e,location:!1,jit:!0}),a=Hc(s);return o?a:Pa[i]=a}else{const n=t.cacheKey;if(n){const i=Pa[n];return i||(Pa[n]=Hc(t))}else return Hc(t)}}const zi={INVALID_ARGUMENT:AA,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},oR=24;function Vi(t){return oc(t,null,void 0)}function Wd(t,e){return e.locale!=null?qp(e.locale):qp(t.locale)}let zc;function qp(t){if(Re(t))return t;if(Tt(t)){if(t.resolvedOnce&&zc!=null)return zc;if(t.constructor.name==="Function"){const e=t();if(vw(e))throw Vi(zi.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return zc=e}else throw Vi(zi.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Vi(zi.NOT_SUPPORT_LOCALE_TYPE)}function aR(t,e,n){return[...new Set([n,...Ut(e)?e:ct(e)?Object.keys(e):Re(e)?[e]:[n]])]}function _0(t,e,n){const i=Re(n)?n:Ol,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let o=[n];for(;Ut(o);)o=Yp(s,o,e);const a=Ut(e)||!it(e)?e:e.default?e.default:null;o=Re(a)?[a]:a,Ut(o)&&Yp(s,o,!1),r.__localeChainCache.set(i,s)}return s}function Yp(t,e,n){let i=!0;for(let r=0;r<e.length&&Lt(i);r++){const s=e[r];Re(s)&&(i=lR(t,e[r],n))}return i}function lR(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=cR(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function cR(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(Ut(n)||it(n))&&n[r]&&(i=n[r])}return i}const Mr=[];Mr[0]={w:[0],i:[3,0],"[":[4],o:[7]};Mr[1]={w:[1],".":[2],"[":[4],o:[7]};Mr[2]={w:[2],i:[3,0],0:[3,0]};Mr[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Mr[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Mr[5]={"'":[4,0],o:8,l:[5,0]};Mr[6]={'"':[4,0],o:8,l:[6,0]};const uR=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function fR(t){return uR.test(t)}function dR(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function hR(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function pR(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:fR(e)?dR(e):"*"+e}function mR(t){const e=[];let n=-1,i=0,r=0,s,o,a,l,c,u,f;const d=[];d[0]=()=>{o===void 0?o=a:o+=a},d[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},d[2]=()=>{d[0](),r++},d[3]=()=>{if(r>0)r--,i=4,d[0]();else{if(r=0,o===void 0||(o=pR(o),o===!1))return!1;d[1]()}};function h(){const g=t[n+1];if(i===5&&g==="'"||i===6&&g==='"')return n++,a="\\"+g,d[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&h())){if(l=hR(s),f=Mr[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=d[c[1]],u&&(a=s,u()===!1))))return;if(i===7)return e}}const Kp=new Map;function gR(t,e){return ct(t)?t[e]:null}function _R(t,e){if(!ct(t))return null;let n=Kp.get(e);if(n||(n=mR(e),n&&Kp.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const o=n[s];if(g0.includes(o)&&_i(r))return null;const a=r[o];if(a===void 0||Tt(r))return null;r=a,s++}return r}const vR="11.1.12",ac=-1,Ol="en-US",Jp="",Zp=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function yR(){return{upper:(t,e)=>e==="text"&&Re(t)?t.toUpperCase():e==="vnode"&&ct(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Re(t)?t.toLowerCase():e==="vnode"&&ct(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Re(t)?Zp(t):e==="vnode"&&ct(t)&&"__v_isVNode"in t?Zp(t.children):t}}let v0;function xR(t){v0=t}let y0;function ER(t){y0=t}let x0;function bR(t){x0=t}let E0=null;const Qp=t=>{E0=t},SR=()=>E0;let em=0;function MR(t={}){const e=Tt(t.onWarn)?t.onWarn:fw,n=Re(t.version)?t.version:vR,i=Re(t.locale)||Tt(t.locale)?t.locale:Ol,r=Tt(i)?Ol:i,s=Ut(t.fallbackLocale)||it(t.fallbackLocale)||Re(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,o=it(t.messages)?t.messages:Vc(r),a=it(t.datetimeFormats)?t.datetimeFormats:Vc(r),l=it(t.numberFormats)?t.numberFormats:Vc(r),c=Bt(gt(),t.modifiers,yR()),u=t.pluralRules||gt(),f=Tt(t.missing)?t.missing:null,d=Lt(t.missingWarn)||Nl(t.missingWarn)?t.missingWarn:!0,h=Lt(t.fallbackWarn)||Nl(t.fallbackWarn)?t.fallbackWarn:!0,g=!!t.fallbackFormat,_=!!t.unresolving,m=Tt(t.postTranslation)?t.postTranslation:null,p=it(t.processor)?t.processor:null,E=Lt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,y=!!t.escapeParameter,v=Tt(t.messageCompiler)?t.messageCompiler:v0,S=Tt(t.messageResolver)?t.messageResolver:y0||gR,w=Tt(t.localeFallbacker)?t.localeFallbacker:x0||aR,A=ct(t.fallbackContext)?t.fallbackContext:void 0,I=t,M=ct(I.__datetimeFormatters)?I.__datetimeFormatters:new Map,T=ct(I.__numberFormatters)?I.__numberFormatters:new Map,N=ct(I.__meta)?I.__meta:{};em++;const U={version:n,cid:em,locale:i,fallbackLocale:s,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:d,fallbackWarn:h,fallbackFormat:g,unresolving:_,postTranslation:m,processor:p,warnHtmlMessage:E,escapeParameter:y,messageCompiler:v,messageResolver:S,localeFallbacker:w,fallbackContext:A,onWarn:e,__meta:N};return U.datetimeFormats=a,U.numberFormats=l,U.__datetimeFormatters=M,U.__numberFormatters=T,U}const Vc=t=>({[t]:gt()});function Xd(t,e,n,i,r){const{missing:s,onWarn:o}=t;if(s!==null){const a=s(t,n,e,r);return Re(a)?a:e}else return e}function uo(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function TR(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function wR(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(TR(t,e[i]))return!0;return!1}function tm(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,c,u,f]=rf(...e),d=Lt(u.missingWarn)?u.missingWarn:t.missingWarn;Lt(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const h=!!u.part,g=Wd(t,u),_=o(t,r,g);if(!Re(l)||l==="")return new Intl.DateTimeFormat(g,f).format(c);let m={},p,E=null;const y="datetime format";for(let w=0;w<_.length&&(p=_[w],m=n[p]||{},E=m[l],!it(E));w++)Xd(t,l,p,d,y);if(!it(E)||!Re(p))return i?ac:l;let v=`${p}__${l}`;tc(f)||(v=`${v}__${JSON.stringify(f)}`);let S=a.get(v);return S||(S=new Intl.DateTimeFormat(p,Bt({},E,f)),a.set(v,S)),h?S.formatToParts(c):S.format(c)}const b0=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function rf(...t){const[e,n,i,r]=t,s=gt();let o=gt(),a;if(Re(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Vi(zi.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw Vi(zi.INVALID_ISO_DATE_ARGUMENT)}}else if(pw(e)){if(isNaN(e.getTime()))throw Vi(zi.INVALID_DATE_ARGUMENT);a=e}else if(zt(e))a=e;else throw Vi(zi.INVALID_ARGUMENT);return Re(n)?s.key=n:it(n)&&Object.keys(n).forEach(l=>{b0.includes(l)?o[l]=n[l]:s[l]=n[l]}),Re(i)?s.locale=i:it(i)&&(o=i),it(r)&&(o=r),[s.key||"",a,s,o]}function nm(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function im(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,c,u,f]=sf(...e),d=Lt(u.missingWarn)?u.missingWarn:t.missingWarn;Lt(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const h=!!u.part,g=Wd(t,u),_=o(t,r,g);if(!Re(l)||l==="")return new Intl.NumberFormat(g,f).format(c);let m={},p,E=null;const y="number format";for(let w=0;w<_.length&&(p=_[w],m=n[p]||{},E=m[l],!it(E));w++)Xd(t,l,p,d,y);if(!it(E)||!Re(p))return i?ac:l;let v=`${p}__${l}`;tc(f)||(v=`${v}__${JSON.stringify(f)}`);let S=a.get(v);return S||(S=new Intl.NumberFormat(p,Bt({},E,f)),a.set(v,S)),h?S.formatToParts(c):S.format(c)}const S0=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function sf(...t){const[e,n,i,r]=t,s=gt();let o=gt();if(!zt(e))throw Vi(zi.INVALID_ARGUMENT);const a=e;return Re(n)?s.key=n:it(n)&&Object.keys(n).forEach(l=>{S0.includes(l)?o[l]=n[l]:s[l]=n[l]}),Re(i)?s.locale=i:it(i)&&(o=i),it(r)&&(o=r),[s.key||"",a,s,o]}function rm(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}const AR=t=>t,RR=t=>"",CR="text",PR=t=>t.length===0?"":kd(t),LR=yw;function sm(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function IR(t){const e=zt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(zt(t.named.count)||zt(t.named.n))?zt(t.named.count)?t.named.count:zt(t.named.n)?t.named.n:e:e}function DR(t,e){e.count||(e.count=t),e.n||(e.n=t)}function NR(t={}){const e=t.locale,n=IR(t),i=ct(t.pluralRules)&&Re(e)&&Tt(t.pluralRules[e])?t.pluralRules[e]:sm,r=ct(t.pluralRules)&&Re(e)&&Tt(t.pluralRules[e])?sm:void 0,s=p=>p[i(n,p.length,r)],o=t.list||[],a=p=>o[p],l=t.named||gt();zt(t.pluralIndex)&&DR(n,l);const c=p=>l[p];function u(p,E){const y=Tt(t.messages)?t.messages(p,!!E):ct(t.messages)?t.messages[p]:!1;return y||(t.parent?t.parent.message(p):RR)}const f=p=>t.modifiers?t.modifiers[p]:AR,d=it(t.processor)&&Tt(t.processor.normalize)?t.processor.normalize:PR,h=it(t.processor)&&Tt(t.processor.interpolate)?t.processor.interpolate:LR,g=it(t.processor)&&Re(t.processor.type)?t.processor.type:CR,m={list:a,named:c,plural:s,linked:(p,...E)=>{const[y,v]=E;let S="text",w="";E.length===1?ct(y)?(w=y.modifier||w,S=y.type||S):Re(y)&&(w=y||w):E.length===2&&(Re(y)&&(w=y||w),Re(v)&&(S=v||S));const A=u(p,!0)(m),I=S==="vnode"&&Ut(A)&&w?A[0]:A;return w?f(w)(I,S):I},message:u,type:g,interpolate:h,normalize:d,values:Bt(gt(),o,l)};return m}const om=()=>"",Wi=t=>Tt(t);function am(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:o,messages:a}=t,[l,c]=of(...e),u=Lt(c.missingWarn)?c.missingWarn:t.missingWarn,f=Lt(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,d=Lt(c.escapeParameter)?c.escapeParameter:t.escapeParameter,h=!!c.resolvedMessage,g=Re(c.default)||Lt(c.default)?Lt(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:null,_=n||g!=null&&(Re(g)||Tt(g)),m=Wd(t,c);d&&UR(c);let[p,E,y]=h?[l,m,a[m]||gt()]:M0(t,l,m,o,f,u),v=p,S=l;if(!h&&!(Re(v)||_i(v)||Wi(v))&&_&&(v=g,S=v),!h&&(!(Re(v)||_i(v)||Wi(v))||!Re(E)))return r?ac:l;let w=!1;const A=()=>{w=!0},I=Wi(v)?v:T0(t,l,E,v,S,A);if(w)return v;const M=kR(t,E,y,c),T=NR(M),N=OR(t,I,T);let U=i?i(N,l):N;return d&&Re(U)&&(U=gw(U)),U}function UR(t){Ut(t.list)?t.list=t.list.map(e=>Re(e)?Op(e):e):ct(t.named)&&Object.keys(t.named).forEach(e=>{Re(t.named[e])&&(t.named[e]=Op(t.named[e]))})}function M0(t,e,n,i,r,s){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f=gt(),d,h=null;const g="translate";for(let _=0;_<u.length&&(d=u[_],f=o[d]||gt(),(h=l(f,e))===null&&(h=f[e]),!(Re(h)||_i(h)||Wi(h)));_++)if(!wR(d,u)){const m=Xd(t,e,d,s,g);m!==e&&(h=m)}return[h,d,f]}function T0(t,e,n,i,r,s){const{messageCompiler:o,warnHtmlMessage:a}=t;if(Wi(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=(()=>i);return c.locale=n,c.key=e,c}const l=o(i,FR(t,n,r,i,a,s));return l.locale=n,l.key=e,l.source=i,l}function OR(t,e,n){return e(n)}function of(...t){const[e,n,i]=t,r=gt();if(!Re(e)&&!zt(e)&&!Wi(e)&&!_i(e))throw Vi(zi.INVALID_ARGUMENT);const s=zt(e)?String(e):(Wi(e),e);return zt(n)?r.plural=n:Re(n)?r.default=n:it(n)&&!tc(n)?r.named=n:Ut(n)&&(r.list=n),zt(i)?r.plural=i:Re(i)?r.default=i:it(i)&&Bt(r,i),[s,r]}function FR(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:o=>{throw s&&s(o),o},onCacheKey:o=>dw(e,n,o)}}function kR(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,d={locale:e,modifiers:r,pluralRules:s,messages:(h,g)=>{let _=o(n,h);if(_==null&&(u||g)){const[,,m]=M0(u||t,h,e,a,l,c);_=o(m,h)}if(Re(_)||_i(_)){let m=!1;const E=T0(t,h,e,_,h,()=>{m=!0});return m?om:E}else return Wi(_)?_:om}};return t.processor&&(d.processor=t.processor),i.list&&(d.list=i.list),i.named&&(d.named=i.named),zt(i.plural)&&(d.pluralIndex=i.plural),d}/*!
  * vue-i18n v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const BR="11.1.12",Vn={UNEXPECTED_RETURN_TYPE:oR,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function ri(t,...e){return oc(t,null,void 0)}const af=br("__translateVNode"),lf=br("__datetimeParts"),cf=br("__numberParts"),HR=br("__setPluralRules"),zR=br("__injectWithOption"),uf=br("__dispose");function Vo(t){if(!ct(t)||_i(t))return t;for(const e in t)if(Kn(t,e))if(!e.includes("."))ct(t[e])&&Vo(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let o=0;o<i;o++){if(n[o]==="__proto__")throw new Error(`unsafe key: ${n[o]}`);if(n[o]in r||(r[n[o]]=gt()),!ct(r[n[o]])){s=!0;break}r=r[n[o]]}if(s||(_i(r)?g0.includes(n[i])||delete t[e]:(r[n[i]]=t[e],delete t[e])),!_i(r)){const o=r[n[i]];ct(o)&&Vo(o)}}return t}function w0(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,o=it(n)?n:Ut(i)?gt():{[t]:gt()};if(Ut(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||gt(),Os(c,o[l])):Os(c,o)}else Re(a)&&Os(JSON.parse(a),o)}),r==null&&s)for(const a in o)Kn(o,a)&&Vo(o[a]);return o}function VR(t){return t.type}function GR(t,e,n){let i=ct(e.messages)?e.messages:gt();"__i18nGlobal"in n&&(i=w0(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(ct(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(ct(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function lm(t){return et(mr,null,t,0)}const cm=()=>[],WR=()=>!1;let um=0;function fm(t){return((e,n,i,r)=>t(n,i,In()||void 0,r))}function A0(t={}){const{__root:e,__injectWithOption:n}=t,i=e===void 0,r=t.flatJson,s=Dl?kt:Qn;let o=Lt(t.inheritLocale)?t.inheritLocale:!0;const a=s(e&&o?e.locale.value:Re(t.locale)?t.locale:Ol),l=s(e&&o?e.fallbackLocale.value:Re(t.fallbackLocale)||Ut(t.fallbackLocale)||it(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),c=s(w0(a.value,t)),u=s(it(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),f=s(it(t.numberFormats)?t.numberFormats:{[a.value]:{}});let d=e?e.missingWarn:Lt(t.missingWarn)||Nl(t.missingWarn)?t.missingWarn:!0,h=e?e.fallbackWarn:Lt(t.fallbackWarn)||Nl(t.fallbackWarn)?t.fallbackWarn:!0,g=e?e.fallbackRoot:Lt(t.fallbackRoot)?t.fallbackRoot:!0,_=!!t.fallbackFormat,m=Tt(t.missing)?t.missing:null,p=Tt(t.missing)?fm(t.missing):null,E=Tt(t.postTranslation)?t.postTranslation:null,y=e?e.warnHtmlMessage:Lt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,v=!!t.escapeParameter;const S=e?e.modifiers:it(t.modifiers)?t.modifiers:{};let w=t.pluralRules||e&&e.pluralRules,A;A=(()=>{i&&Qp(null);const x={version:BR,locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:S,pluralRules:w,missing:p===null?void 0:p,missingWarn:d,fallbackWarn:h,fallbackFormat:_,unresolving:!0,postTranslation:E===null?void 0:E,warnHtmlMessage:y,escapeParameter:v,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};x.datetimeFormats=u.value,x.numberFormats=f.value,x.__datetimeFormatters=it(A)?A.__datetimeFormatters:void 0,x.__numberFormatters=it(A)?A.__numberFormatters:void 0;const D=MR(x);return i&&Qp(D),D})(),uo(A,a.value,l.value);function M(){return[a.value,l.value,c.value,u.value,f.value]}const T=mt({get:()=>a.value,set:x=>{A.locale=x,a.value=x}}),N=mt({get:()=>l.value,set:x=>{A.fallbackLocale=x,l.value=x,uo(A,a.value,x)}}),U=mt(()=>c.value),G=mt(()=>u.value),X=mt(()=>f.value);function Y(){return Tt(E)?E:null}function H(x){E=x,A.postTranslation=x}function te(){return m}function F(x){x!==null&&(p=fm(x)),m=x,A.missing=p}const ce=(x,D,W,Q,Z,he)=>{M();let fe;try{i||(A.fallbackContext=e?SR():void 0),fe=x(A)}finally{i||(A.fallbackContext=void 0)}if(W!=="translate exists"&&zt(fe)&&fe===ac||W==="translate exists"&&!fe){const[Ee,Ae]=D();return e&&g?Q(e):Z(Ee)}else{if(he(fe))return fe;throw ri(Vn.UNEXPECTED_RETURN_TYPE)}};function ve(...x){return ce(D=>Reflect.apply(am,null,[D,...x]),()=>of(...x),"translate",D=>Reflect.apply(D.t,D,[...x]),D=>D,D=>Re(D))}function Me(...x){const[D,W,Q]=x;if(Q&&!ct(Q))throw ri(Vn.INVALID_ARGUMENT);return ve(D,W,Bt({resolvedMessage:!0},Q||{}))}function Ne(...x){return ce(D=>Reflect.apply(tm,null,[D,...x]),()=>rf(...x),"datetime format",D=>Reflect.apply(D.d,D,[...x]),()=>Jp,D=>Re(D)||Ut(D))}function Oe(...x){return ce(D=>Reflect.apply(im,null,[D,...x]),()=>sf(...x),"number format",D=>Reflect.apply(D.n,D,[...x]),()=>Jp,D=>Re(D)||Ut(D))}function Ve(x){return x.map(D=>Re(D)||zt(D)||Lt(D)?lm(String(D)):D)}const oe={normalize:Ve,interpolate:x=>x,type:"vnode"};function k(...x){return ce(D=>{let W;const Q=D;try{Q.processor=oe,W=Reflect.apply(am,null,[Q,...x])}finally{Q.processor=null}return W},()=>of(...x),"translate",D=>D[af](...x),D=>[lm(D)],D=>Ut(D))}function se(...x){return ce(D=>Reflect.apply(im,null,[D,...x]),()=>sf(...x),"number format",D=>D[cf](...x),cm,D=>Re(D)||Ut(D))}function ae(...x){return ce(D=>Reflect.apply(tm,null,[D,...x]),()=>rf(...x),"datetime format",D=>D[lf](...x),cm,D=>Re(D)||Ut(D))}function le(x){w=x,A.pluralRules=w}function ye(x,D){return ce(()=>{if(!x)return!1;const W=Re(D)?D:a.value,Q=O(W),Z=A.messageResolver(Q,x);return _i(Z)||Wi(Z)||Re(Z)},()=>[x],"translate exists",W=>Reflect.apply(W.te,W,[x,D]),WR,W=>Lt(W))}function ze(x){let D=null;const W=_0(A,l.value,a.value);for(let Q=0;Q<W.length;Q++){const Z=c.value[W[Q]]||{},he=A.messageResolver(Z,x);if(he!=null){D=he;break}}return D}function b(x){const D=ze(x);return D??(e?e.tm(x)||{}:{})}function O(x){return c.value[x]||{}}function z(x,D){if(r){const W={[x]:D};for(const Q in W)Kn(W,Q)&&Vo(W[Q]);D=W[x]}c.value[x]=D,A.messages=c.value}function ee(x,D){c.value[x]=c.value[x]||{};const W={[x]:D};if(r)for(const Q in W)Kn(W,Q)&&Vo(W[Q]);D=W[x],Os(D,c.value[x]),A.messages=c.value}function $(x){return u.value[x]||{}}function C(x,D){u.value[x]=D,A.datetimeFormats=u.value,nm(A,x,D)}function L(x,D){u.value[x]=Bt(u.value[x]||{},D),A.datetimeFormats=u.value,nm(A,x,D)}function B(x){return f.value[x]||{}}function K(x,D){f.value[x]=D,A.numberFormats=f.value,rm(A,x,D)}function ie(x,D){f.value[x]=Bt(f.value[x]||{},D),A.numberFormats=f.value,rm(A,x,D)}um++,e&&Dl&&(Gt(e.locale,x=>{o&&(a.value=x,A.locale=x,uo(A,a.value,l.value))}),Gt(e.fallbackLocale,x=>{o&&(l.value=x,A.fallbackLocale=x,uo(A,a.value,l.value))}));const R={id:um,locale:T,fallbackLocale:N,get inheritLocale(){return o},set inheritLocale(x){o=x,x&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,uo(A,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:U,get modifiers(){return S},get pluralRules(){return w||{}},get isGlobal(){return i},get missingWarn(){return d},set missingWarn(x){d=x,A.missingWarn=d},get fallbackWarn(){return h},set fallbackWarn(x){h=x,A.fallbackWarn=h},get fallbackRoot(){return g},set fallbackRoot(x){g=x},get fallbackFormat(){return _},set fallbackFormat(x){_=x,A.fallbackFormat=_},get warnHtmlMessage(){return y},set warnHtmlMessage(x){y=x,A.warnHtmlMessage=x},get escapeParameter(){return v},set escapeParameter(x){v=x,A.escapeParameter=x},t:ve,getLocaleMessage:O,setLocaleMessage:z,mergeLocaleMessage:ee,getPostTranslationHandler:Y,setPostTranslationHandler:H,getMissingHandler:te,setMissingHandler:F,[HR]:le};return R.datetimeFormats=G,R.numberFormats=X,R.rt=Me,R.te=ye,R.tm=b,R.d=Ne,R.n=Oe,R.getDateTimeFormat=$,R.setDateTimeFormat=C,R.mergeDateTimeFormat=L,R.getNumberFormat=B,R.setNumberFormat=K,R.mergeNumberFormat=ie,R[zR]=n,R[af]=k,R[lf]=ae,R[cf]=se,R}const $d={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function XR({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===It?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},gt())}function R0(){return It}const $R=Qt({name:"i18n-t",props:Bt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>zt(t)||!isNaN(t)}},$d),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||is({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f[0]!=="_"),o=gt();t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=Re(t.plural)?+t.plural:t.plural);const a=XR(e,s),l=r[af](t.keypath,a,o),c=Bt(gt(),i),u=Re(t.tag)||ct(t.tag)?t.tag:R0();return Vt(u,c,l)}}}),dm=$R;function jR(t){return Ut(t)&&!Re(t[0])}function C0(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const o={part:!0};let a=gt();t.locale&&(o.locale=t.locale),Re(t.format)?o.key=t.format:ct(t.format)&&(Re(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((d,h)=>n.includes(h)?Bt(gt(),d,{[h]:t.format[h]}):d,gt()));const l=i(t.value,o,a);let c=[o.key];Ut(l)?c=l.map((d,h)=>{const g=r[d.type],_=g?g({[d.type]:d.value,index:h,parts:l}):[d.value];return jR(_)&&(_[0].key=`${d.type}-${h}`),_}):Re(l)&&(c=[l]);const u=Bt(gt(),s),f=Re(t.tag)||ct(t.tag)?t.tag:R0();return Vt(f,u,c)}}const qR=Qt({name:"i18n-n",props:Bt({value:{type:Number,required:!0},format:{type:[String,Object]}},$d),setup(t,e){const n=t.i18n||is({useScope:t.scope,__useComponent:!0});return C0(t,e,S0,(...i)=>n[cf](...i))}}),hm=qR;function YR(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function KR(t){const e=o=>{const{instance:a,value:l}=o;if(!a||!a.$)throw ri(Vn.UNEXPECTED_ERROR);const c=YR(t,a.$),u=pm(l);return[Reflect.apply(c.t,c,[...mm(u)]),c]};return{created:(o,a)=>{const[l,c]=e(a);Dl&&t.global===c&&(o.__i18nWatcher=Gt(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{Dl&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=pm(a);o.textContent=Reflect.apply(l.t,l,[...mm(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function pm(t){if(Re(t))return{path:t};if(it(t)){if(!("path"in t))throw ri(Vn.REQUIRED_VALUE,"path");return t}else throw ri(Vn.INVALID_VALUE)}function mm(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,o={},a=i||{};return Re(n)&&(o.locale=n),zt(r)&&(o.plural=r),zt(s)&&(o.plural=s),[e,a,o]}function JR(t,e,...n){const i=it(n[0])?n[0]:{};(Lt(i.globalInstall)?i.globalInstall:!0)&&([dm.name,"I18nT"].forEach(s=>t.component(s,dm)),[hm.name,"I18nN"].forEach(s=>t.component(s,hm)),[_m.name,"I18nD"].forEach(s=>t.component(s,_m))),t.directive("t",KR(e))}const ZR=br("global-vue-i18n");function P0(t={}){const e=Lt(t.globalInjection)?t.globalInjection:!0,n=new Map,[i,r]=QR(t),s=br("");function o(u){return n.get(u)||null}function a(u,f){n.set(u,f)}function l(u){n.delete(u)}const c={get mode(){return"composition"},async install(u,...f){if(u.__VUE_I18N_SYMBOL__=s,u.provide(u.__VUE_I18N_SYMBOL__,c),it(f[0])){const g=f[0];c.__composerExtend=g.__composerExtend,c.__vueI18nExtend=g.__vueI18nExtend}let d=null;e&&(d=aC(u,c.global)),JR(u,c,...f);const h=u.unmount;u.unmount=()=>{d&&d(),c.dispose(),h()}},get global(){return r},dispose(){i.stop()},__instances:n,__getInstance:o,__setInstance:a,__deleteInstance:l};return c}function is(t={}){const e=In();if(e==null)throw ri(Vn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw ri(Vn.NOT_INSTALLED);const n=eC(e),i=nC(n),r=VR(e),s=tC(t,r);if(s==="global")return GR(i,t,r),i;if(s==="parent"){let l=iC(n,e,t.__useComponent);return l==null&&(l=i),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=Bt({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=A0(l),o.__composerExtend&&(a[uf]=o.__composerExtend(a)),sC(o,e,a),o.__setInstance(e,a)}return a}function QR(t,e){const n=ud(),i=n.run(()=>A0(t));if(i==null)throw ri(Vn.UNEXPECTED_ERROR);return[n,i]}function eC(t){const e=fn(t.isCE?ZR:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw ri(t.isCE?Vn.NOT_INSTALLED_WITH_PROVIDE:Vn.UNEXPECTED_ERROR);return e}function tC(t,e){return tc(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function nC(t){return t.mode==="composition"?t.global:t.global.__composer}function iC(t,e,n=!1){let i=null;const r=e.root;let s=rC(e,n);for(;s!=null;){const o=t;if(t.mode==="composition"&&(i=o.__getInstance(s)),i!=null||r===s)break;s=s.parent}return i}function rC(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function sC(t,e,n){si(()=>{},e),Qs(()=>{const i=n;t.__deleteInstance(e);const r=i[uf];r&&(r(),delete i[uf])},e)}const oC=["locale","fallbackLocale","availableLocales"],gm=["t","rt","d","n","tm","te"];function aC(t,e){const n=Object.create(null);return oC.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw ri(Vn.UNEXPECTED_ERROR);const o=At(s.value)?{get(){return s.value.value},set(a){s.value.value=a}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,o)}),t.config.globalProperties.$i18n=n,gm.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw ri(Vn.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,gm.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}const lC=Qt({name:"i18n-d",props:Bt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},$d),setup(t,e){const n=t.i18n||is({useScope:t.scope,__useComponent:!0});return C0(t,e,b0,(...i)=>n[lf](...i))}}),_m=lC;xR(sR);ER(_R);bR(_0);function vm(t=at()){const e=sc(t);return n=>{if(n!=null)return e.getRouteBaseName(n)||void 0}}function cC(t=at()){const e=sc(t);return(n,i)=>qv(e,n,i)}function uC(t=at()){const e=sc(t);return(n,i)=>Yv(e,n,i)}function L0(t=at()){const e=sc(t);return n=>Jv(e,n)}const ym="nuxt-i18n-slp",fC=new RegExp([`<!--${ym}-\\[(\\w+)\\]-->`,".+?",`<!--/${ym}-->`].join(""),"g"),dC=rn({name:"i18n:plugin:switch-locale-path-ssr",dependsOn:["i18n:plugin"],setup(t){const e=at(t._id),n=L0(e);e.hook("app:rendered",i=>{i.renderResult?.html!=null&&(i.renderResult.html=i.renderResult.html.replaceAll(fC,(r,s)=>{const o=encodeURI(n(s??""));return r.replace(/href="([^"]+)"/,`href="${o||"#"}" `)}))})}}),hC=rn({name:"i18n:plugin:route-locale-detect",dependsOn:["i18n:plugin"],async setup(t){let e,n;const i=at(t._id),r=Hd(i),s=o0();[e,n]=gr(()=>i.runWithContext(()=>a0(i,r.initial&&s.value||MA(i,i.$router.currentRoute.value)))),await e,n()}}),pC=rn({name:"i18n:plugin:preload",dependsOn:["i18n:plugin"],async setup(t){}});function mC(t,{extendComposer:e,extendComposerInstance:n}){const i=ud(),r=t.install.bind(t);t.install=(s,...o)=>{const a=Bt({},o[0]);a.__composerExtend=c=>(n(c,Ra(t)),()=>{}),t.mode==="legacy"&&(a.__vueI18nExtend=c=>(n(c,Ra(c)),()=>{})),Reflect.apply(r,t,[s,a]);const l=Ra(t);if(i.run(()=>{e(l),t.mode==="legacy"&&"__composer"in t.global&&n(t.global,Ra(t.global))}),t.mode==="composition"&&s.config.globalProperties.$i18n!=null&&n(s.config.globalProperties.$i18n,l),s.unmount){const c=s.unmount.bind(s);s.unmount=()=>{i.stop(),c()}}}}const gC=async t=>{const e=await Kw(Bw);e.locale=t||e.locale||"en-US",e.defaultLocale=t,e.fallbackLocale??=!1,e.messages??={};for(const n of Ho)e.messages[n]??={};return e},_C=rn({name:"i18n:plugin",parallel:!1,async setup(t){let e,n;Object.defineProperty(t.versions,"nuxtI18n",{get:()=>"10.1.1"});const i=at(t._id),r=ic(i),s=i.ssrContext?.event?.context?.nuxtI18n?.vueI18nOptions,o=cA(i0().host)||r.defaultLocale||"",a=s||([e,n]=gr(()=>gC(o)),e=await e,n(),e),l=s0();l.value??=oA(a.fallbackLocale),Ho.map(d=>`/_i18n/PsXMelXj/${d}/messages.json`);const c=P0(a),u=zd(void 0,rc(i),i),f=fA(i,c,a.defaultLocale);i._nuxtI18n=f,mC(c,{extendComposer(d){d.locales=mt(()=>r.locales),d.localeCodes=mt(()=>Ho);const h=kt(f.getBaseUrl());d.baseUrl=mt(()=>h.value),Gt(d.locale,()=>h.value=f.getBaseUrl()),d.strategy="no_prefix",d.localeProperties=mt(()=>ra.find(g=>g.code===d.locale.value)||{code:d.locale.value}),d.setLocale=async g=>{await a0(i,g),await i.runWithContext(()=>(i.$router.currentRoute.value,void 0))},d.loadLocaleMessages=f.loadMessages,d.differentDomains=!1,d.defaultLocale=a.defaultLocale,d.getBrowserLocale=()=>Gp(u.navigator()),d.getLocaleCookie=()=>Gp(u.cookie()),d.setLocaleCookie=f.setCookieLocale,d.finalizePendingLocaleChange=async()=>{c.__pendingLocale&&await c.__resolvePendingLocalePromise?.()},d.waitForPendingLocaleChange=async()=>{await c?.__pendingLocalePromise}},extendComposerInstance(d,h){const g=[["locales",()=>h.locales],["localeCodes",()=>h.localeCodes],["baseUrl",()=>h.baseUrl],["strategy",()=>"no_prefix"],["localeProperties",()=>h.localeProperties],["setLocale",()=>async _=>Reflect.apply(h.setLocale,h,[_])],["loadLocaleMessages",()=>async _=>Reflect.apply(h.loadLocaleMessages,h,[_])],["differentDomains",()=>!1],["defaultLocale",()=>h.defaultLocale],["getBrowserLocale",()=>()=>Reflect.apply(h.getBrowserLocale,h,[])],["getLocaleCookie",()=>()=>Reflect.apply(h.getLocaleCookie,h,[])],["setLocaleCookie",()=>_=>Reflect.apply(h.setLocaleCookie,h,[_])],["finalizePendingLocaleChange",()=>()=>Reflect.apply(h.finalizePendingLocaleChange,h,[])],["waitForPendingLocaleChange",()=>()=>Reflect.apply(h.waitForPendingLocaleChange,h,[])]];for(const[_,m]of g)Object.defineProperty(d,_,{get:m})}}),i.vueApp.use(c),Object.defineProperty(i,"$i18n",{get:()=>Bd(c)}),i.provide("localeHead",d=>Lw(i._nuxtI18n.composableCtx,d)),i.provide("localePath",cC(i)),i.provide("localeRoute",uC(i)),i.provide("routeBaseName",vm(i)),i.provide("getRouteBaseName",vm(i)),i.provide("switchLocalePath",L0(i))}}),vC={home:"Home",about:"About",skills:"Skills",projects:"Projects",contact:"Contact"},yC={greeting:"Hi, I'm",title:"Front-End Web Developer",subtitle:"I build modern, responsive, and user-friendly web applications",cta:"View My Work",contact:"Get In Touch"},xC={title:"About Me",description:"Passionate Front-End Developer with 2+ years of experience building modern, responsive, and user-friendly web applications. Specialized in Vue.js, Nuxt.js, and Tailwind CSS, with strong knowledge in performance optimization, accessibility, and SEO. Basic experience with NestJS and Mongoose enables me to contribute to full-stack applications. Skilled at collaborating with cross-functional teams and delivering high-quality projects. Currently seeking opportunities to contribute to innovative products and grow within the web development industry.",experience:"Years Experience",projects:"Projects Completed",clients:"Happy Clients",workExperience:"Work Experience",genwin:"Front-End Web Developer at Genwin (2024 - April)",genwinDesc:"Designed and developed responsive web applications using Vue.js, Nuxt.js, JavaScript, and Tailwind CSS. Implemented UI/UX designs to improve user experience and reduce bounce rates by 30%. Collaborated with back-end developers and designers to ensure smooth integration of APIs and features.",freelance:"Freelance Projects (2025 - June)",freelanceDesc:"Built complete e-commerce platforms, user management dashboards, and custom web applications. Focused on performance, user experience, and mobile-first design with full SEO optimization and accessibility best practices."},EC={title:"My Skills",subtitle:"Technologies I work with",frontend:"Frontend",backend:"Backend",tools:"Tools & Others"},bC={title:"Featured Projects",subtitle:"Some of my recent work",viewProject:"View Project",viewCode:"View Code"},SC={title:"Get In Touch",subtitle:"Let's work together",name:"Name",email:"Email",message:"Message",send:"Send Message",sending:"Sending...",success:"Message sent successfully!",error:"Failed to send message. Please try again."},MC={rights:"All rights reserved",built:"Built with"},TC={light:"Light",dark:"Dark",system:"System"},wC={title:"Client Testimonials",subtitle:"What people say about my work"},AC={nav:vC,hero:yC,about:xC,skills:EC,projects:bC,contact:SC,footer:MC,theme:TC,testimonials:wC},RC={home:"الرئيسية",about:"عني",skills:"المهارات",projects:"المشاريع",contact:"تواصل"},CC={greeting:"مرحباً، أنا",title:"مطور واجهات أمامية",subtitle:"أبني تطبيقات ويب حديثة ومتجاوبة وسهلة الاستخدام",cta:"شاهد أعمالي",contact:"تواصل معي"},PC={title:"عني",description:"مطور واجهات أمامية شغوف مع أكثر من سنتين من الخبرة في بناء تطبيقات ويب حديثة ومتجاوبة وسهلة الاستخدام. متخصص في Vue.js و Nuxt.js و Tailwind CSS، مع معرفة قوية في تحسين الأداء وإمكانية الوصول وتحسين محركات البحث. خبرة أساسية في NestJS و Mongoose تمكنني من المساهمة في تطبيقات متكاملة. ماهر في التعاون مع الفرق متعددة الوظائف وتقديم مشاريع عالية الجودة. أبحث حالياً عن فرص للمساهمة في منتجات مبتكرة والنمو في صناعة تطوير الويب.",experience:"سنوات الخبرة",projects:"المشاريع المكتملة",clients:"العملاء السعداء",workExperience:"الخبرة العملية",genwin:"مطور واجهات أمامية في Genwin (2024 - أبريل)",genwinDesc:"تصميم وتطوير تطبيقات ويب متجاوبة باستخدام Vue.js و Nuxt.js و JavaScript و Tailwind CSS. تنفيذ تصميمات UI/UX لتحسين تجربة المستخدم وتقليل معدل الارتداد بنسبة 30٪. التعاون مع مطوري الواجهة الخلفية والمصممين لضمان التكامل السلس للواجهات البرمجية والميزات.",freelance:"مشاريع حرة (2025 - يونيو)",freelanceDesc:"بناء منصات تجارة إلكترونية كاملة ولوحات تحكم لإدارة المستخدمين وتطبيقات ويب مخصصة. التركيز على الأداء وتجربة المستخدم والتصميم المتوافق مع الأجهزة المحمولة مع تحسين كامل لمحركات البحث وأفضل ممارسات إمكانية الوصول."},LC={title:"مهاراتي",subtitle:"التقنيات التي أعمل بها",frontend:"الواجهة الأمامية",backend:"الواجهة الخلفية",tools:"الأدوات وأخرى"},IC={title:"المشاريع المميزة",subtitle:"بعض من أعمالي الأخيرة",viewProject:"عرض المشروع",viewCode:"عرض الكود"},DC={title:"تواصل معي",subtitle:"لنعمل معاً",name:"الاسم",email:"البريد الإلكتروني",message:"الرسالة",send:"إرسال الرسالة",sending:"جاري الإرسال...",success:"تم إرسال الرسالة بنجاح!",error:"فشل إرسال الرسالة. يرجى المحاولة مرة أخرى."},NC={rights:"جميع الحقوق محفوظة",built:"بُني بـ"},UC={light:"فاتح",dark:"داكن",system:"النظام"},OC={title:"آراء العملاء",subtitle:"ماذا يقول الناس عن عملي"},FC={nav:RC,hero:CC,about:PC,skills:LC,projects:IC,contact:DC,footer:NC,theme:UC,testimonials:OC},kC=rn(t=>{const e=n0("locale",{default:()=>"en",sameSite:"lax",maxAge:31536e3});let n=e.value;typeof window<"u"&&!e.value&&(n=navigator.language.startsWith("ar")?"ar":"en",e.value=n);const i=P0({globalInjection:!0,locale:n,fallbackLocale:"en",messages:{en:AC,ar:FC}});return t.vueApp.use(i),Tv({htmlAttrs:{lang:n,dir:n==="ar"?"rtl":"ltr"}}),typeof window<"u"&&Gt(()=>e.value,r=>{r&&(i.global.locale.value=r,document.documentElement.lang=r,document.documentElement.dir=r==="ar"?"rtl":"ltr")}),{provide:{setLocale:r=>{e.value=r}}}});function BC(t){return Zo()?(ml(t),!0):!1}const ks=new WeakMap,I0=(...t)=>{var e;const n=t[0],i=(e=In())==null?void 0:e.proxy;if(i==null&&!eo())throw new Error("injectLocal must be called in setup");return i&&ks.has(i)&&n in ks.get(i)?ks.get(i)[n]:fn(...t)};function D0(t,e){var n;const i=(n=In())==null?void 0:n.proxy;if(i==null)throw new Error("provideLocal must be called in setup");ks.has(i)||ks.set(i,Object.create(null));const r=ks.get(i);return r[t]=e,Kr(t,e)}function T2(t,e){const n=Symbol(t.name||"InjectionState"),i=void 0;return[(...o)=>{const a=t(...o);return D0(n,a),a},()=>I0(n,i)]}function HC(t){if(!At(t))return ti(t);const e=new Proxy({},{get(n,i,r){return Xe(Reflect.get(t.value,i,r))},set(n,i,r){return At(t.value[i])&&!At(r)?t.value[i].value=r:t.value[i]=r,!0},deleteProperty(n,i){return Reflect.deleteProperty(t.value,i)},has(n,i){return Reflect.has(t.value,i)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return ti(e)}function zC(t){return HC(mt(t))}function w2(t,...e){const n=e.flat(),i=n[0];return zC(()=>Object.fromEntries(typeof i=="function"?Object.entries(ph(t)).filter(([r,s])=>!i(gi(s),r)):Object.entries(ph(t)).filter(r=>!n.includes(r[0]))))}const VC=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const GC=Object.prototype.toString,WC=t=>GC.call(t)==="[object Object]",XC=()=>{};function N0(...t){if(t.length!==1)return _d(...t);const e=t[0];return typeof e=="function"?Io(i_(()=>({get:e,set:XC}))):kt(e)}function $C(t,e){function n(...i){return new Promise((r,s)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(s)})}return n}const U0=t=>t();function jC(t=U0,e={}){const{initialState:n="active"}=e,i=N0(n==="active");function r(){i.value=!1}function s(){i.value=!0}const o=(...a)=>{i.value&&t(...a)};return{isActive:Io(i),pause:r,resume:s,eventFilter:o}}function xm(t){return t.endsWith("rem")?Number.parseFloat(t)*16:Number.parseFloat(t)}function Gc(t){return Array.isArray(t)?t:[t]}function qC(t){return In()}function YC(t,e,n={}){const{eventFilter:i=U0,...r}=n;return Gt(t,$C(i,e),r)}function KC(t,e,n={}){const{eventFilter:i,initialState:r="active",...s}=n,{eventFilter:o,pause:a,resume:l,isActive:c}=jC(i,{initialState:r});return{stop:YC(t,e,{...s,eventFilter:o}),pause:a,resume:l,isActive:c}}function O0(t,e=!0,n){qC()?si(t,n):e?t():yr(t)}function JC(t,e,n){return Gt(t,e,{...n,immediate:!0})}const Go=VC?window:void 0;function F0(t){var e;const n=gi(t);return(e=n?.$el)!=null?e:n}function ff(...t){const e=[],n=()=>{e.forEach(a=>a()),e.length=0},i=(a,l,c,u)=>(a.addEventListener(l,c,u),()=>a.removeEventListener(l,c,u)),r=mt(()=>{const a=Gc(gi(t[0])).filter(l=>l!=null);return a.every(l=>typeof l!="string")?a:void 0}),s=JC(()=>{var a,l;return[(l=(a=r.value)==null?void 0:a.map(c=>F0(c)))!=null?l:[Go].filter(c=>c!=null),Gc(gi(r.value?t[1]:t[0])),Gc(Xe(r.value?t[2]:t[1])),gi(r.value?t[3]:t[2])]},([a,l,c,u])=>{if(n(),!a?.length||!l?.length||!c?.length)return;const f=WC(u)?{...u}:u;e.push(...a.flatMap(d=>l.flatMap(h=>c.map(g=>i(d,h,g,f)))))},{flush:"post"}),o=()=>{s(),n()};return BC(n),o}function ZC(){const t=Qn(!1),e=In();return e&&si(()=>{t.value=!0},e),t}function QC(t){const e=ZC();return mt(()=>(e.value,!!t()))}const df=Symbol("vueuse-ssr-width");function e1(){const t=eo()?I0(df,null):null;return typeof t=="number"?t:void 0}function t1(t,e){e!==void 0?e.provide(df,t):D0(df,t)}function n1(t,e={}){const{window:n=Go,ssrWidth:i=e1()}=e,r=QC(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function"),s=Qn(typeof i=="number"),o=Qn(),a=Qn(!1),l=c=>{a.value=c.matches};return z_(()=>{if(s.value){s.value=!r.value;const c=gi(t).split(",");a.value=c.some(u=>{const f=u.includes("not all"),d=u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),h=u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let g=!!(d||h);return d&&g&&(g=i>=xm(d[1])),h&&g&&(g=i<=xm(h[1])),f?!g:g});return}r.value&&(o.value=n.matchMedia(gi(t)),a.value=o.value.matches)}),ff(o,"change",l,{passive:!0}),mt(()=>a.value)}const La=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ia="__vueuse_ssr_handlers__",i1=r1();function r1(){return Ia in La||(La[Ia]=La[Ia]||{}),La[Ia]}function k0(t,e){return i1[t]||e}function s1(t){return n1("(prefers-color-scheme: dark)",t)}function o1(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const a1={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Em="vueuse-storage";function l1(t,e,n,i={}){var r;const{flush:s="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:f=Go,eventFilter:d,onError:h=X=>{console.error(X)},initOnMounted:g}=i,_=(u?Qn:kt)(typeof e=="function"?e():e),m=mt(()=>gi(t));if(!n)try{n=k0("getDefaultStorage",()=>{var X;return(X=Go)==null?void 0:X.localStorage})()}catch(X){h(X)}if(!n)return _;const p=gi(e),E=o1(p),y=(r=i.serializer)!=null?r:a1[E],{pause:v,resume:S}=KC(_,X=>T(X),{flush:s,deep:o,eventFilter:d});Gt(m,()=>U(),{flush:s});let w=!1;const A=X=>{g&&!w||U(X)},I=X=>{g&&!w||G(X)};f&&a&&(n instanceof Storage?ff(f,"storage",A,{passive:!0}):ff(f,Em,I)),g?O0(()=>{w=!0,U()}):U();function M(X,Y){if(f){const H={key:m.value,oldValue:X,newValue:Y,storageArea:n};f.dispatchEvent(n instanceof Storage?new StorageEvent("storage",H):new CustomEvent(Em,{detail:H}))}}function T(X){try{const Y=n.getItem(m.value);if(X==null)M(Y,null),n.removeItem(m.value);else{const H=y.write(X);Y!==H&&(n.setItem(m.value,H),M(Y,H))}}catch(Y){h(Y)}}function N(X){const Y=X?X.newValue:n.getItem(m.value);if(Y==null)return l&&p!=null&&n.setItem(m.value,y.write(p)),p;if(!X&&c){const H=y.read(Y);return typeof c=="function"?c(H,p):E==="object"&&!Array.isArray(H)?{...p,...H}:H}else return typeof Y!="string"?Y:y.read(Y)}function U(X){if(!(X&&X.storageArea!==n)){if(X&&X.key==null){_.value=p;return}if(!(X&&X.key!==m.value)){v();try{const Y=y.write(_.value);(X===void 0||X?.newValue!==Y)&&(_.value=N(X))}catch(Y){h(Y)}finally{X?yr(S):S()}}}}function G(X){U(X.detail)}return _}const c1="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function u1(t={}){const{selector:e="html",attribute:n="class",initialValue:i="auto",window:r=Go,storage:s,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:c,disableTransition:u=!0}=t,f={auto:"",light:"light",dark:"dark",...t.modes||{}},d=s1({window:r}),h=mt(()=>d.value?"dark":"light"),g=l||(o==null?N0(i):l1(o,i,s,{window:r,listenToStorageChanges:a})),_=mt(()=>g.value==="auto"?h.value:g.value),m=k0("updateHTMLAttrs",(v,S,w)=>{const A=typeof v=="string"?r?.document.querySelector(v):F0(v);if(!A)return;const I=new Set,M=new Set;let T=null;if(S==="class"){const U=w.split(/\s/g);Object.values(f).flatMap(G=>(G||"").split(/\s/g)).filter(Boolean).forEach(G=>{U.includes(G)?I.add(G):M.add(G)})}else T={key:S,value:w};if(I.size===0&&M.size===0&&T===null)return;let N;u&&(N=r.document.createElement("style"),N.appendChild(document.createTextNode(c1)),r.document.head.appendChild(N));for(const U of I)A.classList.add(U);for(const U of M)A.classList.remove(U);T&&A.setAttribute(T.key,T.value),u&&(r.getComputedStyle(N).opacity,document.head.removeChild(N))});function p(v){var S;m(e,n,(S=f[v])!=null?S:v)}function E(v){t.onChanged?t.onChanged(v,p):p(v)}Gt(_,E,{flush:"post",immediate:!0}),O0(()=>E(_.value));const y=mt({get(){return c?g.value:_.value},set(v){g.value=v}});return Object.assign(y,{store:g,system:h,state:_})}const f1=rn(t=>{t1(1024,t.vueApp)}),d1=rn({name:"i18n:plugin:ssg-detect",dependsOn:["i18n:plugin","i18n:plugin:route-locale-detect"],enforce:"post",setup(t){}}),h1=[MM,CM,JT,ZT,QT,ew,nw,iw,ow,uw,dC,hC,pC,_C,kC,f1,d1];/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),p1=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),m1=t=>{const e=p1(t);return e.charAt(0).toUpperCase()+e.slice(1)},g1=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),Sm=t=>t==="";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=({name:t,iconNode:e,absoluteStrokeWidth:n,"absolute-stroke-width":i,strokeWidth:r,"stroke-width":s,size:o=fo.width,color:a=fo.stroke,...l},{slots:c})=>Vt("svg",{...fo,...l,width:o,height:o,stroke:a,"stroke-width":Sm(n)||Sm(i)||n===!0||i===!0?Number(r||s||fo["stroke-width"])*24/Number(o):r||s||fo["stroke-width"],class:g1("lucide",l.class,...t?[`lucide-${bm(m1(t))}-icon`,`lucide-${bm(t)}`]:["lucide-icon"])},[...e.map(u=>Vt(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=(t,e)=>(n,{slots:i,attrs:r})=>Vt(_1,{...r,...n,iconNode:e,name:t},i);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=rs("code-xml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=rs("heart",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=rs("languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=rs("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=rs("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=rs("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=rs("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function B0(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=B0(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function H0(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=B0(t))&&(i&&(i+=" "),i+=e);return i}const Mm=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,Tm=H0,T1=(t,e)=>n=>{var i;if(e?.variants==null)return Tm(t,n?.class,n?.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const u=n?.[c],f=s?.[c];if(u===null)return null;const d=Mm(u)||Mm(f);return r[c][d]}),a=n&&Object.entries(n).reduce((c,u)=>{let[f,d]=u;return d===void 0||(c[f]=d),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:f,className:d,...h}=u;return Object.entries(h).every(g=>{let[_,m]=g;return Array.isArray(m)?m.includes({...s,...a}[_]):{...s,...a}[_]===m})?[...c,f,d]:c},[]);return Tm(t,o,l,n?.class,n?.className)};function z0(t){return t?t.flatMap(e=>e.type===It?z0(e.children):[e]):[]}const w1=Qt({name:"PrimitiveSlot",inheritAttrs:!1,setup(t,{attrs:e,slots:n}){return()=>{if(!n.default)return null;const i=z0(n.default()),r=i.findIndex(l=>l.type!==Ot);if(r===-1)return i;const s=i[r];delete s.props?.ref;const o=s.props?J_(e,s.props):e,a=yi({...s,props:{}},o);return i.length===1?a:(i[r]=a,i)}}}),A1=["area","img","input"],R1=Qt({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(t,{attrs:e,slots:n}){const i=t.asChild?"template":t.as;return typeof i=="string"&&A1.includes(i)?()=>Vt(i,e):i!=="template"?()=>Vt(t.as,e,{default:n.default}):()=>Vt(w1,e,{default:n.default})}}),jd="-",C1=t=>{const e=L1(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{const a=o.split(jd);return a[0]===""&&a.length!==1&&a.shift(),V0(a,e)||P1(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},V0=(t,e)=>{if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?V0(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(jd);return e.validators.find(({validator:o})=>o(s))?.classGroupId},wm=/^\[(.+)\]$/,P1=t=>{if(wm.test(t)){const e=wm.exec(t)[1],n=e?.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},L1=t=>{const{theme:e,classGroups:n}=t,i={nextPart:new Map,validators:[]};for(const r in n)hf(n[r],i,r,e);return i},hf=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:Am(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(I1(r)){hf(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{hf(o,Am(e,s),n,i)})})},Am=(t,e)=>{let n=t;return e.split(jd).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},I1=t=>t.isThemeGetter,D1=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}},pf="!",mf=":",N1=mf.length,U1=t=>{const{prefix:e,experimentalParseClassName:n}=t;let i=r=>{const s=[];let o=0,a=0,l=0,c;for(let g=0;g<r.length;g++){let _=r[g];if(o===0&&a===0){if(_===mf){s.push(r.slice(l,g)),l=g+N1;continue}if(_==="/"){c=g;continue}}_==="["?o++:_==="]"?o--:_==="("?a++:_===")"&&a--}const u=s.length===0?r:r.substring(l),f=O1(u),d=f!==u,h=c&&c>l?c-l:void 0;return{modifiers:s,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:h}};if(e){const r=e+mf,s=i;i=o=>o.startsWith(r)?s(o.substring(r.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:o,maybePostfixModifierPosition:void 0}}if(n){const r=i;i=s=>n({className:s,parseClassName:r})}return i},O1=t=>t.endsWith(pf)?t.substring(0,t.length-1):t.startsWith(pf)?t.substring(1):t,F1=t=>{const e=Object.fromEntries(t.orderSensitiveModifiers.map(i=>[i,!0]));return i=>{if(i.length<=1)return i;const r=[];let s=[];return i.forEach(o=>{o[0]==="["||e[o]?(r.push(...s.sort(),o),s=[]):s.push(o)}),r.push(...s.sort()),r}},k1=t=>({cache:D1(t.cacheSize),parseClassName:U1(t),sortModifiers:F1(t),...C1(t)}),B1=/\s+/,H1=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r,sortModifiers:s}=e,o=[],a=t.trim().split(B1);let l="";for(let c=a.length-1;c>=0;c-=1){const u=a[c],{isExternal:f,modifiers:d,hasImportantModifier:h,baseClassName:g,maybePostfixModifierPosition:_}=n(u);if(f){l=u+(l.length>0?" "+l:l);continue}let m=!!_,p=i(m?g.substring(0,_):g);if(!p){if(!m){l=u+(l.length>0?" "+l:l);continue}if(p=i(g),!p){l=u+(l.length>0?" "+l:l);continue}m=!1}const E=s(d).join(":"),y=h?E+pf:E,v=y+p;if(o.includes(v))continue;o.push(v);const S=r(p,m);for(let w=0;w<S.length;++w){const A=S[w];o.push(y+A)}l=u+(l.length>0?" "+l:l)}return l};function z1(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=G0(e))&&(i&&(i+=" "),i+=n);return i}const G0=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=G0(t[i]))&&(n&&(n+=" "),n+=e);return n};function V1(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((u,f)=>f(u),t());return n=k1(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const u=H1(l,n);return r(l,u),u}return function(){return s(z1.apply(null,arguments))}}const Xt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},W0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,X0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,G1=/^\d+\/\d+$/,W1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,X1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,$1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,j1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,q1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ls=t=>G1.test(t),Ze=t=>!!t&&!Number.isNaN(Number(t)),tr=t=>!!t&&Number.isInteger(Number(t)),Wc=t=>t.endsWith("%")&&Ze(t.slice(0,-1)),Ai=t=>W1.test(t),Y1=()=>!0,K1=t=>X1.test(t)&&!$1.test(t),$0=()=>!1,J1=t=>j1.test(t),Z1=t=>q1.test(t),Q1=t=>!Pe(t)&&!Le(t),eP=t=>to(t,Y0,$0),Pe=t=>W0.test(t),Lr=t=>to(t,K0,K1),Xc=t=>to(t,sP,Ze),Rm=t=>to(t,j0,$0),tP=t=>to(t,q0,Z1),Da=t=>to(t,J0,J1),Le=t=>X0.test(t),ho=t=>no(t,K0),nP=t=>no(t,oP),Cm=t=>no(t,j0),iP=t=>no(t,Y0),rP=t=>no(t,q0),Na=t=>no(t,J0,!0),to=(t,e,n)=>{const i=W0.exec(t);return i?i[1]?e(i[1]):n(i[2]):!1},no=(t,e,n=!1)=>{const i=X0.exec(t);return i?i[1]?e(i[1]):n:!1},j0=t=>t==="position"||t==="percentage",q0=t=>t==="image"||t==="url",Y0=t=>t==="length"||t==="size"||t==="bg-size",K0=t=>t==="length",sP=t=>t==="number",oP=t=>t==="family-name",J0=t=>t==="shadow",aP=()=>{const t=Xt("color"),e=Xt("font"),n=Xt("text"),i=Xt("font-weight"),r=Xt("tracking"),s=Xt("leading"),o=Xt("breakpoint"),a=Xt("container"),l=Xt("spacing"),c=Xt("radius"),u=Xt("shadow"),f=Xt("inset-shadow"),d=Xt("text-shadow"),h=Xt("drop-shadow"),g=Xt("blur"),_=Xt("perspective"),m=Xt("aspect"),p=Xt("ease"),E=Xt("animate"),y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],v=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],S=()=>[...v(),Le,Pe],w=()=>["auto","hidden","clip","visible","scroll"],A=()=>["auto","contain","none"],I=()=>[Le,Pe,l],M=()=>[ls,"full","auto",...I()],T=()=>[tr,"none","subgrid",Le,Pe],N=()=>["auto",{span:["full",tr,Le,Pe]},tr,Le,Pe],U=()=>[tr,"auto",Le,Pe],G=()=>["auto","min","max","fr",Le,Pe],X=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Y=()=>["start","end","center","stretch","center-safe","end-safe"],H=()=>["auto",...I()],te=()=>[ls,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...I()],F=()=>[t,Le,Pe],ce=()=>[...v(),Cm,Rm,{position:[Le,Pe]}],ve=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Me=()=>["auto","cover","contain",iP,eP,{size:[Le,Pe]}],Ne=()=>[Wc,ho,Lr],Oe=()=>["","none","full",c,Le,Pe],Ve=()=>["",Ze,ho,Lr],je=()=>["solid","dashed","dotted","double"],oe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],k=()=>[Ze,Wc,Cm,Rm],se=()=>["","none",g,Le,Pe],ae=()=>["none",Ze,Le,Pe],le=()=>["none",Ze,Le,Pe],ye=()=>[Ze,Le,Pe],ze=()=>[ls,"full",...I()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ai],breakpoint:[Ai],color:[Y1],container:[Ai],"drop-shadow":[Ai],ease:["in","out","in-out"],font:[Q1],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ai],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ai],shadow:[Ai],spacing:["px",Ze],text:[Ai],"text-shadow":[Ai],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ls,Pe,Le,m]}],container:["container"],columns:[{columns:[Ze,Pe,Le,a]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:S()}],overflow:[{overflow:w()}],"overflow-x":[{"overflow-x":w()}],"overflow-y":[{"overflow-y":w()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:M()}],"inset-x":[{"inset-x":M()}],"inset-y":[{"inset-y":M()}],start:[{start:M()}],end:[{end:M()}],top:[{top:M()}],right:[{right:M()}],bottom:[{bottom:M()}],left:[{left:M()}],visibility:["visible","invisible","collapse"],z:[{z:[tr,"auto",Le,Pe]}],basis:[{basis:[ls,"full","auto",a,...I()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ze,ls,"auto","initial","none",Pe]}],grow:[{grow:["",Ze,Le,Pe]}],shrink:[{shrink:["",Ze,Le,Pe]}],order:[{order:[tr,"first","last","none",Le,Pe]}],"grid-cols":[{"grid-cols":T()}],"col-start-end":[{col:N()}],"col-start":[{"col-start":U()}],"col-end":[{"col-end":U()}],"grid-rows":[{"grid-rows":T()}],"row-start-end":[{row:N()}],"row-start":[{"row-start":U()}],"row-end":[{"row-end":U()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":G()}],"auto-rows":[{"auto-rows":G()}],gap:[{gap:I()}],"gap-x":[{"gap-x":I()}],"gap-y":[{"gap-y":I()}],"justify-content":[{justify:[...X(),"normal"]}],"justify-items":[{"justify-items":[...Y(),"normal"]}],"justify-self":[{"justify-self":["auto",...Y()]}],"align-content":[{content:["normal",...X()]}],"align-items":[{items:[...Y(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Y(),{baseline:["","last"]}]}],"place-content":[{"place-content":X()}],"place-items":[{"place-items":[...Y(),"baseline"]}],"place-self":[{"place-self":["auto",...Y()]}],p:[{p:I()}],px:[{px:I()}],py:[{py:I()}],ps:[{ps:I()}],pe:[{pe:I()}],pt:[{pt:I()}],pr:[{pr:I()}],pb:[{pb:I()}],pl:[{pl:I()}],m:[{m:H()}],mx:[{mx:H()}],my:[{my:H()}],ms:[{ms:H()}],me:[{me:H()}],mt:[{mt:H()}],mr:[{mr:H()}],mb:[{mb:H()}],ml:[{ml:H()}],"space-x":[{"space-x":I()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":I()}],"space-y-reverse":["space-y-reverse"],size:[{size:te()}],w:[{w:[a,"screen",...te()]}],"min-w":[{"min-w":[a,"screen","none",...te()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[o]},...te()]}],h:[{h:["screen","lh",...te()]}],"min-h":[{"min-h":["screen","lh","none",...te()]}],"max-h":[{"max-h":["screen","lh",...te()]}],"font-size":[{text:["base",n,ho,Lr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,Le,Xc]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Wc,Pe]}],"font-family":[{font:[nP,Pe,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,Le,Pe]}],"line-clamp":[{"line-clamp":[Ze,"none",Le,Xc]}],leading:[{leading:[s,...I()]}],"list-image":[{"list-image":["none",Le,Pe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Le,Pe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:F()}],"text-color":[{text:F()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...je(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ze,"from-font","auto",Le,Lr]}],"text-decoration-color":[{decoration:F()}],"underline-offset":[{"underline-offset":[Ze,"auto",Le,Pe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Le,Pe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Le,Pe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ce()}],"bg-repeat":[{bg:ve()}],"bg-size":[{bg:Me()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},tr,Le,Pe],radial:["",Le,Pe],conic:[tr,Le,Pe]},rP,tP]}],"bg-color":[{bg:F()}],"gradient-from-pos":[{from:Ne()}],"gradient-via-pos":[{via:Ne()}],"gradient-to-pos":[{to:Ne()}],"gradient-from":[{from:F()}],"gradient-via":[{via:F()}],"gradient-to":[{to:F()}],rounded:[{rounded:Oe()}],"rounded-s":[{"rounded-s":Oe()}],"rounded-e":[{"rounded-e":Oe()}],"rounded-t":[{"rounded-t":Oe()}],"rounded-r":[{"rounded-r":Oe()}],"rounded-b":[{"rounded-b":Oe()}],"rounded-l":[{"rounded-l":Oe()}],"rounded-ss":[{"rounded-ss":Oe()}],"rounded-se":[{"rounded-se":Oe()}],"rounded-ee":[{"rounded-ee":Oe()}],"rounded-es":[{"rounded-es":Oe()}],"rounded-tl":[{"rounded-tl":Oe()}],"rounded-tr":[{"rounded-tr":Oe()}],"rounded-br":[{"rounded-br":Oe()}],"rounded-bl":[{"rounded-bl":Oe()}],"border-w":[{border:Ve()}],"border-w-x":[{"border-x":Ve()}],"border-w-y":[{"border-y":Ve()}],"border-w-s":[{"border-s":Ve()}],"border-w-e":[{"border-e":Ve()}],"border-w-t":[{"border-t":Ve()}],"border-w-r":[{"border-r":Ve()}],"border-w-b":[{"border-b":Ve()}],"border-w-l":[{"border-l":Ve()}],"divide-x":[{"divide-x":Ve()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Ve()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...je(),"hidden","none"]}],"divide-style":[{divide:[...je(),"hidden","none"]}],"border-color":[{border:F()}],"border-color-x":[{"border-x":F()}],"border-color-y":[{"border-y":F()}],"border-color-s":[{"border-s":F()}],"border-color-e":[{"border-e":F()}],"border-color-t":[{"border-t":F()}],"border-color-r":[{"border-r":F()}],"border-color-b":[{"border-b":F()}],"border-color-l":[{"border-l":F()}],"divide-color":[{divide:F()}],"outline-style":[{outline:[...je(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ze,Le,Pe]}],"outline-w":[{outline:["",Ze,ho,Lr]}],"outline-color":[{outline:F()}],shadow:[{shadow:["","none",u,Na,Da]}],"shadow-color":[{shadow:F()}],"inset-shadow":[{"inset-shadow":["none",f,Na,Da]}],"inset-shadow-color":[{"inset-shadow":F()}],"ring-w":[{ring:Ve()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:F()}],"ring-offset-w":[{"ring-offset":[Ze,Lr]}],"ring-offset-color":[{"ring-offset":F()}],"inset-ring-w":[{"inset-ring":Ve()}],"inset-ring-color":[{"inset-ring":F()}],"text-shadow":[{"text-shadow":["none",d,Na,Da]}],"text-shadow-color":[{"text-shadow":F()}],opacity:[{opacity:[Ze,Le,Pe]}],"mix-blend":[{"mix-blend":[...oe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":oe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ze]}],"mask-image-linear-from-pos":[{"mask-linear-from":k()}],"mask-image-linear-to-pos":[{"mask-linear-to":k()}],"mask-image-linear-from-color":[{"mask-linear-from":F()}],"mask-image-linear-to-color":[{"mask-linear-to":F()}],"mask-image-t-from-pos":[{"mask-t-from":k()}],"mask-image-t-to-pos":[{"mask-t-to":k()}],"mask-image-t-from-color":[{"mask-t-from":F()}],"mask-image-t-to-color":[{"mask-t-to":F()}],"mask-image-r-from-pos":[{"mask-r-from":k()}],"mask-image-r-to-pos":[{"mask-r-to":k()}],"mask-image-r-from-color":[{"mask-r-from":F()}],"mask-image-r-to-color":[{"mask-r-to":F()}],"mask-image-b-from-pos":[{"mask-b-from":k()}],"mask-image-b-to-pos":[{"mask-b-to":k()}],"mask-image-b-from-color":[{"mask-b-from":F()}],"mask-image-b-to-color":[{"mask-b-to":F()}],"mask-image-l-from-pos":[{"mask-l-from":k()}],"mask-image-l-to-pos":[{"mask-l-to":k()}],"mask-image-l-from-color":[{"mask-l-from":F()}],"mask-image-l-to-color":[{"mask-l-to":F()}],"mask-image-x-from-pos":[{"mask-x-from":k()}],"mask-image-x-to-pos":[{"mask-x-to":k()}],"mask-image-x-from-color":[{"mask-x-from":F()}],"mask-image-x-to-color":[{"mask-x-to":F()}],"mask-image-y-from-pos":[{"mask-y-from":k()}],"mask-image-y-to-pos":[{"mask-y-to":k()}],"mask-image-y-from-color":[{"mask-y-from":F()}],"mask-image-y-to-color":[{"mask-y-to":F()}],"mask-image-radial":[{"mask-radial":[Le,Pe]}],"mask-image-radial-from-pos":[{"mask-radial-from":k()}],"mask-image-radial-to-pos":[{"mask-radial-to":k()}],"mask-image-radial-from-color":[{"mask-radial-from":F()}],"mask-image-radial-to-color":[{"mask-radial-to":F()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":v()}],"mask-image-conic-pos":[{"mask-conic":[Ze]}],"mask-image-conic-from-pos":[{"mask-conic-from":k()}],"mask-image-conic-to-pos":[{"mask-conic-to":k()}],"mask-image-conic-from-color":[{"mask-conic-from":F()}],"mask-image-conic-to-color":[{"mask-conic-to":F()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ce()}],"mask-repeat":[{mask:ve()}],"mask-size":[{mask:Me()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Le,Pe]}],filter:[{filter:["","none",Le,Pe]}],blur:[{blur:se()}],brightness:[{brightness:[Ze,Le,Pe]}],contrast:[{contrast:[Ze,Le,Pe]}],"drop-shadow":[{"drop-shadow":["","none",h,Na,Da]}],"drop-shadow-color":[{"drop-shadow":F()}],grayscale:[{grayscale:["",Ze,Le,Pe]}],"hue-rotate":[{"hue-rotate":[Ze,Le,Pe]}],invert:[{invert:["",Ze,Le,Pe]}],saturate:[{saturate:[Ze,Le,Pe]}],sepia:[{sepia:["",Ze,Le,Pe]}],"backdrop-filter":[{"backdrop-filter":["","none",Le,Pe]}],"backdrop-blur":[{"backdrop-blur":se()}],"backdrop-brightness":[{"backdrop-brightness":[Ze,Le,Pe]}],"backdrop-contrast":[{"backdrop-contrast":[Ze,Le,Pe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ze,Le,Pe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ze,Le,Pe]}],"backdrop-invert":[{"backdrop-invert":["",Ze,Le,Pe]}],"backdrop-opacity":[{"backdrop-opacity":[Ze,Le,Pe]}],"backdrop-saturate":[{"backdrop-saturate":[Ze,Le,Pe]}],"backdrop-sepia":[{"backdrop-sepia":["",Ze,Le,Pe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":I()}],"border-spacing-x":[{"border-spacing-x":I()}],"border-spacing-y":[{"border-spacing-y":I()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Le,Pe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ze,"initial",Le,Pe]}],ease:[{ease:["linear","initial",p,Le,Pe]}],delay:[{delay:[Ze,Le,Pe]}],animate:[{animate:["none",E,Le,Pe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[_,Le,Pe]}],"perspective-origin":[{"perspective-origin":S()}],rotate:[{rotate:ae()}],"rotate-x":[{"rotate-x":ae()}],"rotate-y":[{"rotate-y":ae()}],"rotate-z":[{"rotate-z":ae()}],scale:[{scale:le()}],"scale-x":[{"scale-x":le()}],"scale-y":[{"scale-y":le()}],"scale-z":[{"scale-z":le()}],"scale-3d":["scale-3d"],skew:[{skew:ye()}],"skew-x":[{"skew-x":ye()}],"skew-y":[{"skew-y":ye()}],transform:[{transform:[Le,Pe,"","none","gpu","cpu"]}],"transform-origin":[{origin:S()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ze()}],"translate-x":[{"translate-x":ze()}],"translate-y":[{"translate-y":ze()}],"translate-z":[{"translate-z":ze()}],"translate-none":["translate-none"],accent:[{accent:F()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:F()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Le,Pe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Le,Pe]}],fill:[{fill:["none",...F()]}],"stroke-w":[{stroke:[Ze,ho,Lr,Xc]}],stroke:[{stroke:["none",...F()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},lP=V1(aP);function cP(...t){return lP(H0(t))}const $c=Qt({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(t){const e=t;return(n,i)=>(lt(),un(Xe(R1),{"data-slot":"button",as:t.as,"as-child":t.asChild,class:Jo(Xe(cP)(Xe(uP)({variant:t.variant,size:t.size}),e.class))},{default:Hi(()=>[jx(n.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),uP=T1("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}}),fP={class:"sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"},dP={class:"container flex h-16 items-center justify-between px-4"},hP={class:"flex items-center gap-2"},pP={class:"flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple-600"},mP={class:"text-white font-bold text-lg"},gP={class:"text-xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent"},_P={class:"hidden md:flex items-center gap-1"},vP=["href"],yP={class:"flex items-center gap-2"},xP={class:"text-xs font-semibold"},EP={key:0,class:"md:hidden border-t border-border/40 bg-background/95 backdrop-blur"},bP={class:"container py-4 flex flex-col gap-2 px-4"},SP=["href"],MP=Qt({__name:"Navigation",setup(t){const e=u1(),{locale:n}=is(),i=kt(!1),r=["home","about","skills","projects","contact"],s=mt(()=>e.value==="dark"),o=mt(()=>n.value==="ar"?"EN":"AR"),a=()=>{e.value=e.value==="dark"?"light":"dark"},l=()=>{const c=n.value==="en"?"ar":"en";n.value=c,document.documentElement.dir=c==="ar"?"rtl":"ltr"};return(c,u)=>(lt(),bn("header",fP,[Qe("div",dP,[Qe("div",hP,[Qe("div",pP,[Qe("span",mP,xn(Xe(n)==="ar"?"م":"P"),1)]),Qe("span",gP,xn(Xe(n)==="ar"?"محفظتي":"Portfolio"),1)]),Qe("nav",_P,[(lt(),bn(It,null,Sl(r,f=>Qe("a",{key:f,href:`#${f}`,class:"px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-accent rounded-md relative group"},[Uo(xn(f.charAt(0).toUpperCase()+f.slice(1))+" ",1),u[2]||(u[2]=Qe("span",{class:"absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"},null,-1))],8,vP)),64))]),Qe("div",yP,[et(Xe($c),{variant:"outline",size:"icon",onClick:a,class:"relative overflow-hidden transition-all hover:scale-105"},{default:Hi(()=>[s.value?(lt(),un(Xe(S1),{key:0,class:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"})):(lt(),un(Xe(b1),{key:1,class:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"}))]),_:1}),et(Xe($c),{variant:"outline",size:"sm",onClick:l,class:"gap-2 transition-all hover:scale-105"},{default:Hi(()=>[et(Xe(x1),{class:"h-4 w-4"}),Qe("span",xP,xn(o.value),1)]),_:1}),et(Xe($c),{variant:"outline",size:"icon",class:"md:hidden transition-all hover:scale-105",onClick:u[0]||(u[0]=f=>i.value=!i.value)},{default:Hi(()=>[i.value?(lt(),un(Xe(M1),{key:1,class:"h-5 w-5"})):(lt(),un(Xe(E1),{key:0,class:"h-5 w-5"}))]),_:1})])]),et(Yl,{"enter-active-class":"transition-all duration-200 ease-out","enter-from-class":"opacity-0 -translate-y-2","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition-all duration-150 ease-in","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 -translate-y-2"},{default:Hi(()=>[i.value?(lt(),bn("div",EP,[Qe("div",bP,[(lt(),bn(It,null,Sl(r,f=>Qe("a",{key:f,href:`#${f}`,onClick:u[1]||(u[1]=d=>i.value=!1),class:"px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all"},xn(f.charAt(0).toUpperCase()+f.slice(1)),9,SP)),64))])])):Md("",!0)]),_:1})]))}}),lc=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},TP=Object.assign(lc(MP,[["__scopeId","data-v-52388acc"]]),{__name:"Navigation"}),Z0=(t="RouteProvider")=>Qt({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,i=e.route,r={};for(const s in e.route)Object.defineProperty(r,s,{get:()=>n===e.renderKey?e.route[s]:i[s],enumerable:!0});return Kr(Jl,Bi(r)),()=>e.vnode?Vt(e.vnode,{ref:e.vnodeRef}):e.vnode}}),wP=Z0(),Pm=new WeakMap,AP=Qt({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:i}){const r=at(),s=kt(),o=fn(Jl,null);let a;i({pageRef:s});const l=fn(DS,null);let c;const u=r.deferHydration();if(r.isHydrating){const d=r.hooks.hookOnce("app:error",u);wn().beforeEach(d)}t.pageKey&&Gt(()=>t.pageKey,(d,h)=>{d!==h&&r.callHook("page:loading:start")});let f=!1;{const d=wn().beforeResolve(()=>{f=!1});ta(()=>{d()})}return()=>Vt(Vv,{name:t.name,route:t.route,...e},{default:d=>{const h=CP(o,d.route,d.Component),g=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(c&&!g)return c;u();return}if(c&&l&&!l.isCurrent(d.route))return c;if(h&&o&&(!l||l?.isCurrent(o)))return g?c:null;const _=Qu(d,t.pageKey),m=PP(o,d.route,d.Component);!r.isHydrating&&a===_&&!m&&yr(()=>{f=!0,r.callHook("page:loading:end")}),a=_;const p=!!(t.transition??d.route.meta.pageTransition??ip),E=p&&RP([t.transition,d.route.meta.pageTransition,ip,{onAfterLeave(){delete r._runningTransition,r.callHook("page:transition:finish",d.Component)}}]),y=t.keepalive??d.route.meta.keepalive??vS;return c=HT(p&&E,BT(y,Vt(W_,{suspensible:!0,onPending:()=>{p&&(r._runningTransition=!0),r.callHook("page:start",d.Component)},onResolve:()=>{yr(()=>r.callHook("page:finish",d.Component).then(()=>{if(delete r._runningTransition,!f&&!m)return f=!0,r.callHook("page:loading:end")}).finally(u))}},{default:()=>{const v={key:_||void 0,vnode:n.default?LP(n.default,d):d.Component,route:d.route,renderKey:_||void 0,trackRootNodes:p,vnodeRef:s};if(!y)return Vt(wP,v);const S=d.Component.type,w=S;let A=Pm.get(w);return A||(A=Z0(S.name||S.__name),Pm.set(w,A)),Vt(A,v)}}))).default(),c}})}});function RP(t){const e=[];for(const n of t)n&&e.push({...n,onAfterLeave:n.onAfterLeave?Ud(n.onAfterLeave):void 0});return vv(...e)}function CP(t,e,n){if(!t)return!1;const i=e.matched.findIndex(r=>r.components?.default===n?.type);return!i||i===-1?!1:e.matched.slice(0,i).some((r,s)=>r.components?.default!==t.matched[s]?.components?.default)||n&&Qu({route:e,Component:n})!==Qu({route:t,Component:n})}function PP(t,e,n){return t?e.matched.findIndex(r=>r.components?.default===n?.type)<e.matched.length-1:!1}function LP(t,e){const n=t(e);return n.length===1?Vt(n[0]):Vt(It,void 0,n)}const IP={class:"py-8 border-t bg-background"},DP={class:"container mx-auto px-4"},NP={class:"flex flex-col md:flex-row items-center justify-between gap-4"},UP={class:"text-sm text-muted-foreground"},OP={class:"text-sm text-muted-foreground flex items-center gap-2"},FP=Qt({__name:"Footer",setup(t){const{t:e,locale:n}=is();return(i,r)=>(lt(),bn("footer",IP,[Qe("div",DP,[Qe("div",NP,[Qe("p",UP," © "+xn(new Date().getFullYear())+" Ibrahim Ghaybour. "+xn(Xe(e)("footer.rights"))+". ",1),Qe("p",OP,[Uo(xn(Xe(e)("footer.built"))+" ",1),et(Xe(y1),{class:"w-4 h-4 text-red-500 fill-red-500 animate-pulse"}),Uo(" "+xn(Xe(n)==="ar"?"و":"and")+" ",1),et(Xe(v1),{class:"w-4 h-4 text-primary"})])])])]))}}),kP=Object.assign(FP,{__name:"Footer"}),BP=Qt({__name:"BackToTop",setup(t){const e=kt(!1),n=()=>{e.value=window.scrollY>300},i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return si(()=>{window.addEventListener("scroll",n,{passive:!0}),n()}),Qs(()=>{window.removeEventListener("scroll",n)}),(r,s)=>(lt(),un(Yl,{name:"slide-up"},{default:Hi(()=>[e.value?(lt(),bn("button",{key:0,onClick:i,class:"fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group","aria-label":"Back to top"},[...s[0]||(s[0]=[Qe("svg",{class:"w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Qe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 10l7-7m0 0l7 7m-7-7v18"})],-1),Qe("span",{class:"absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"},null,-1)])])):Md("",!0)]),_:1}))}}),HP=Object.assign(lc(BP,[["__scopeId","data-v-3ef2fa1d"]]),{__name:"BackToTop"});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qd="180",zP=0,Lm=1,VP=2,Q0=1,GP=2,Di=3,xr=0,Sn=1,ki=2,_r=0,Bs=1,Im=2,Dm=3,Nm=4,WP=5,Vr=100,XP=101,$P=102,jP=103,qP=104,YP=200,KP=201,JP=202,ZP=203,gf=204,_f=205,QP=206,eL=207,tL=208,nL=209,iL=210,rL=211,sL=212,oL=213,aL=214,vf=0,yf=1,xf=2,js=3,Ef=4,bf=5,Sf=6,Mf=7,ey=0,lL=1,cL=2,vr=0,uL=1,fL=2,dL=3,hL=4,pL=5,mL=6,gL=7,ty=300,qs=301,Ys=302,Tf=303,wf=304,cc=306,Af=1e3,Xr=1001,Rf=1002,ei=1003,_L=1004,Ua=1005,di=1006,jc=1007,$r=1008,Yi=1009,ny=1010,iy=1011,Wo=1012,Yd=1013,es=1014,Gi=1015,sa=1016,Kd=1017,Jd=1018,Xo=1020,ry=35902,sy=35899,oy=1021,ay=1022,Jn=1023,$o=1026,jo=1027,ly=1028,Zd=1029,cy=1030,Qd=1031,eh=1033,ul=33776,fl=33777,dl=33778,hl=33779,Cf=35840,Pf=35841,Lf=35842,If=35843,Df=36196,Nf=37492,Uf=37496,Of=37808,Ff=37809,kf=37810,Bf=37811,Hf=37812,zf=37813,Vf=37814,Gf=37815,Wf=37816,Xf=37817,$f=37818,jf=37819,qf=37820,Yf=37821,Kf=36492,Jf=36494,Zf=36495,Qf=36283,ed=36284,td=36285,nd=36286,vL=3200,yL=3201,xL=0,EL=1,fr="",kn="srgb",Ks="srgb-linear",Fl="linear",yt="srgb",cs=7680,Um=519,bL=512,SL=513,ML=514,uy=515,TL=516,wL=517,AL=518,RL=519,Om=35044,Fm="300 es",hi=2e3,kl=2001;class io{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qc=Math.PI/180,id=180/Math.PI;function oa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function CL(t,e){return(t%e+e)%e}function Yc(t,e,n){return(1-n)*t+n*e}function po(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ut{constructor(e=0,n=0){ut.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class aa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=h,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*_,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const S=Math.sqrt(y),w=Math.atan2(S,p*E);m=Math.sin(m*w)/S,a=Math.sin(a*w)/S}const v=a*E;if(l=l*m+d*v,c=c*m+h*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(km.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(km.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kc=new J,km=new aa;class Ke{constructor(e,n,i,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],E=r[1],y=r[4],v=r[7],S=r[2],w=r[5],A=r[8];return s[0]=o*_+a*E+l*S,s[3]=o*m+a*y+l*w,s[6]=o*p+a*v+l*A,s[1]=c*_+u*E+f*S,s[4]=c*m+u*y+f*w,s[7]=c*p+u*v+f*A,s[2]=d*_+h*E+g*S,s[5]=d*m+h*y+g*w,s[8]=d*p+h*v+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Jc.makeScale(e,n)),this}rotate(e){return this.premultiply(Jc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Jc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jc=new Ke;function fy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function PL(){const t=Bl("canvas");return t.style.display="block",t}const Bm={};function qo(t){t in Bm||(Bm[t]=!0,console.warn(t))}function LL(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Hm=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zm=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IL(){const t={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===yt&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(r.r=Hs(r.r),r.g=Hs(r.g),r.b=Hs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fr?Fl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ks]:{primaries:e,whitePoint:i,transfer:Fl,toXYZ:Hm,fromXYZ:zm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:Hm,fromXYZ:zm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),t}const ot=IL();function Xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Hs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let us;class DL{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{us===void 0&&(us=Bl("canvas")),us.width=e.width,us.height=e.height;const r=us.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=us}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xi(n[i]/255)*255):n[i]=Xi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NL=0;class th{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NL++}),this.uuid=oa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zc(r[o].image)):s.push(Zc(r[o]))}else s=Zc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Zc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?DL.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UL=0;const Qc=new J;class Mn extends io{constructor(e=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,i=Xr,r=Xr,s=di,o=$r,a=Jn,l=Yi,c=Mn.DEFAULT_ANISOTROPY,u=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UL++}),this.uuid=oa(),this.name="",this.source=new th(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qc).x}get height(){return this.source.getSize(Qc).y}get depth(){return this.source.getSize(Qc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ty)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Af:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case Rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Af:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case Rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=ty;Mn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,v=(h+1)/2,S=(p+1)/2,w=(u+d)/4,A=(f+_)/4,I=(g+m)/4;return y>v&&y>S?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=A/i):v>S?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=w/r,s=I/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=A/s,r=I/s),this.set(i,r,s,n),this}let E=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OL extends io{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Mn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new th(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends OL{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class dy extends Mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FL extends Mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class la{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(s,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Fa.subVectors(this.max,mo),fs.subVectors(e.a,mo),ds.subVectors(e.b,mo),hs.subVectors(e.c,mo),nr.subVectors(ds,fs),ir.subVectors(hs,ds),Ir.subVectors(fs,hs);let n=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Ir.z,Ir.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Ir.z,0,-Ir.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Ir.y,Ir.x,0];return!eu(n,fs,ds,hs,Fa)||(n=[1,0,0,0,1,0,0,0,1],!eu(n,fs,ds,hs,Fa))?!1:(ka.crossVectors(nr,ir),n=[ka.x,ka.y,ka.z],eu(n,fs,ds,hs,Fa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new J,new J,new J,new J,new J,new J,new J,new J],Wn=new J,Oa=new la,fs=new J,ds=new J,hs=new J,nr=new J,ir=new J,Ir=new J,mo=new J,Fa=new J,ka=new J,Dr=new J;function eu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Dr.fromArray(t,s);const a=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=e.dot(Dr),c=n.dot(Dr),u=i.dot(Dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const kL=new la,go=new J,tu=new J;class uc{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):kL.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const n=go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(tu)),this.expandByPoint(go.copy(e.center).sub(tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ci=new J,nu=new J,Ba=new J,rr=new J,iu=new J,Ha=new J,ru=new J;class hy{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){nu.copy(e).add(n).multiplyScalar(.5),Ba.copy(n).sub(e).normalize(),rr.copy(this.origin).sub(nu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ba),a=rr.dot(this.direction),l=-rr.dot(Ba),c=rr.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(nu).addScaledVector(Ba,d),h}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){iu.subVectors(n,e),Ha.subVectors(i,e),ru.crossVectors(iu,Ha);let o=this.direction.dot(ru),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rr.subVectors(this.origin,e);const l=a*this.direction.dot(Ha.crossVectors(rr,Ha));if(l<0)return null;const c=a*this.direction.dot(iu.cross(rr));if(c<0||l+c>o)return null;const u=-a*rr.dot(ru);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,h,g,_,m){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d+_*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d-_*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BL,e,HL)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),sr.crossVectors(i,Cn),sr.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),sr.crossVectors(i,Cn)),sr.normalize(),za.crossVectors(Cn,sr),r[0]=sr.x,r[4]=za.x,r[8]=Cn.x,r[1]=sr.y,r[5]=za.y,r[9]=Cn.y,r[2]=sr.z,r[6]=za.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],E=i[3],y=i[7],v=i[11],S=i[15],w=r[0],A=r[4],I=r[8],M=r[12],T=r[1],N=r[5],U=r[9],G=r[13],X=r[2],Y=r[6],H=r[10],te=r[14],F=r[3],ce=r[7],ve=r[11],Me=r[15];return s[0]=o*w+a*T+l*X+c*F,s[4]=o*A+a*N+l*Y+c*ce,s[8]=o*I+a*U+l*H+c*ve,s[12]=o*M+a*G+l*te+c*Me,s[1]=u*w+f*T+d*X+h*F,s[5]=u*A+f*N+d*Y+h*ce,s[9]=u*I+f*U+d*H+h*ve,s[13]=u*M+f*G+d*te+h*Me,s[2]=g*w+_*T+m*X+p*F,s[6]=g*A+_*N+m*Y+p*ce,s[10]=g*I+_*U+m*H+p*ve,s[14]=g*M+_*G+m*te+p*Me,s[3]=E*w+y*T+v*X+S*F,s[7]=E*A+y*N+v*Y+S*ce,s[11]=E*I+y*U+v*H+S*ve,s[15]=E*M+y*G+v*te+S*Me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+_*(+n*l*h-n*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+n*c*f-n*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=f*m*c-_*d*c+_*l*h-a*m*h-f*l*p+a*d*p,y=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,v=u*_*c-g*f*c+g*a*h-o*_*h-u*a*p+o*f*p,S=g*f*l-u*_*l-g*a*d+o*_*d+u*a*m-o*f*m,w=n*E+i*y+r*v+s*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=E*A,e[1]=(_*d*s-f*m*s-_*r*h+i*m*h+f*r*p-i*d*p)*A,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*A,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*A,e[4]=y*A,e[5]=(u*m*s-g*d*s+g*r*h-n*m*h-u*r*p+n*d*p)*A,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*p-n*l*p)*A,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*h+n*l*h)*A,e[8]=v*A,e[9]=(g*f*s-u*_*s-g*i*h+n*_*h+u*i*p-n*f*p)*A,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*p+n*a*p)*A,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*h-n*a*h)*A,e[12]=S*A,e[13]=(u*_*r-g*f*r+g*i*d-n*_*d-u*i*m+n*f*m)*A,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*A,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,_=o*u,m=o*f,p=a*f,E=l*c,y=l*u,v=l*f,S=i.x,w=i.y,A=i.z;return r[0]=(1-(_+p))*S,r[1]=(h+v)*S,r[2]=(g-y)*S,r[3]=0,r[4]=(h-v)*w,r[5]=(1-(d+p))*w,r[6]=(m+E)*w,r[7]=0,r[8]=(g+y)*A,r[9]=(m-E)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ps.set(r[0],r[1],r[2]).length();const o=ps.set(r[4],r[5],r[6]).length(),a=ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);const c=1/s,u=1/o,f=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,n.setFromRotationMatrix(Xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=hi,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===hi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===kl)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=hi,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===hi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===kl)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ps=new J,Xn=new Wt,BL=new J(0,0,0),HL=new J(1,1,1),sr=new J,za=new J,Cn=new J,Vm=new Wt,Gm=new aa;class Ki{constructor(e=0,n=0,i=0,r=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gm.setFromEuler(this),this.setFromQuaternion(Gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class py{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zL=0;const Wm=new J,ms=new aa,Pi=new Wt,Va=new J,_o=new J,VL=new J,GL=new aa,Xm=new J(1,0,0),$m=new J(0,1,0),jm=new J(0,0,1),qm={type:"added"},WL={type:"removed"},gs={type:"childadded",child:null},su={type:"childremoved",child:null};class Tn extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zL++}),this.uuid=oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new J,n=new Ki,i=new aa,r=new J(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Ke}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new py,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Xm,e)}rotateY(e){return this.rotateOnAxis($m,e)}rotateZ(e){return this.rotateOnAxis(jm,e)}translateOnAxis(e,n){return Wm.copy(e).applyQuaternion(this.quaternion),this.position.add(Wm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xm,e)}translateY(e){return this.translateOnAxis($m,e)}translateZ(e){return this.translateOnAxis(jm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Va.copy(e):Va.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(_o,Va,this.up):Pi.lookAt(Va,_o,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(Pi),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qm),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(WL),su.child=e,this.dispatchEvent(su),su.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qm),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,VL),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,GL,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tn.DEFAULT_UP=new J(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new J,Li=new J,ou=new J,Ii=new J,_s=new J,vs=new J,Ym=new J,au=new J,lu=new J,cu=new J,uu=new Ft,fu=new Ft,du=new Ft;class Yn{constructor(e=new J,n=new J,i=new J){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),Li.subVectors(i,n),ou.subVectors(e,n);const o=$n.dot($n),a=$n.dot(Li),l=$n.dot(ou),c=Li.dot(Li),u=Li.dot(ou),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return uu.setScalar(0),fu.setScalar(0),du.setScalar(0),uu.fromBufferAttribute(e,n),fu.fromBufferAttribute(e,i),du.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(uu,s.x),o.addScaledVector(fu,s.y),o.addScaledVector(du,s.z),o}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),Li.subVectors(e,n),$n.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),$n.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;_s.subVectors(r,i),vs.subVectors(s,i),au.subVectors(e,i);const l=_s.dot(au),c=vs.dot(au);if(l<=0&&c<=0)return n.copy(i);lu.subVectors(e,r);const u=_s.dot(lu),f=vs.dot(lu);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(_s,o);cu.subVectors(e,s);const h=_s.dot(cu),g=vs.dot(cu);if(g>=0&&h<=g)return n.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(vs,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Ym.subVectors(s,r),a=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(Ym,a);const p=1/(m+_+d);return o=_*p,a=d*p,n.copy(i).addScaledVector(_s,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const my={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function hu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class _t{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=CL(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=hu(o,s,e+1/3),this.g=hu(o,s,e),this.b=hu(o,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=my[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return ot.workingToColorSpace(on.copy(this),e),Math.round(nt(on.r*255,0,255))*65536+Math.round(nt(on.g*255,0,255))*256+Math.round(nt(on.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.workingToColorSpace(on.copy(this),n);const i=on.r,r=on.g,s=on.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ot.workingColorSpace){return ot.workingToColorSpace(on.copy(this),n),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=kn){ot.workingToColorSpace(on.copy(this),e);const n=on.r,i=on.g,r=on.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+n,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(or),e.getHSL(Ga);const i=Yc(or.h,Ga.h,n),r=Yc(or.s,Ga.s,n),s=Yc(or.l,Ga.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new _t;_t.NAMES=my;let XL=0;class ca extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XL++}),this.uuid=oa(),this.name="",this.type="Material",this.blending=Bs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gf,this.blendDst=_f,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==xr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gf&&(i.blendSrc=this.blendSrc),this.blendDst!==_f&&(i.blendDst=this.blendDst),this.blendEquation!==Vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Um&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nh extends ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=ey,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new J,Wa=new ut;let $L=0;class vi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$L++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Om,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wa.fromBufferAttribute(this,n),Wa.applyMatrix3(e),this.setXY(n,Wa.x,Wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix3(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix4(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyNormalMatrix(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.transformDirection(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=po(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=po(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=po(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=po(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Om&&(e.usage=this.usage),e}}class gy extends vi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _y extends vi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qt extends vi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let jL=0;const On=new Wt,pu=new Tn,ys=new J,Pn=new la,vo=new la,Jt=new J;class Gn extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jL++}),this.uuid=oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fy(e)?_y:gy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,i){return On.makeTranslation(e,n,i),this.applyMatrix4(On),this}scale(e,n,i){return On.makeScale(e,n,i),this.applyMatrix4(On),this}lookAt(e){return pu.lookAt(e),pu.updateMatrix(),this.applyMatrix4(pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new la);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Pn.min,vo.min),Pn.expandByPoint(Jt),Jt.addVectors(Pn.max,vo.max),Pn.expandByPoint(Jt)):(Pn.expandByPoint(vo.min),Pn.expandByPoint(vo.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(e,c),Jt.add(ys)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new J,l[I]=new J;const c=new J,u=new J,f=new J,d=new ut,h=new ut,g=new ut,_=new J,m=new J;function p(I,M,T){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,T),d.fromBufferAttribute(s,I),h.fromBufferAttribute(s,M),g.fromBufferAttribute(s,T),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const N=1/(h.x*g.y-g.x*h.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(N),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(N),a[I].add(_),a[M].add(_),a[T].add(_),l[I].add(m),l[M].add(m),l[T].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,M=E.length;I<M;++I){const T=E[I],N=T.start,U=T.count;for(let G=N,X=N+U;G<X;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new J,v=new J,S=new J,w=new J;function A(I){S.fromBufferAttribute(r,I),w.copy(S);const M=a[I];y.copy(M),y.sub(S.multiplyScalar(S.dot(M))).normalize(),v.crossVectors(w,M);const N=v.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,N)}for(let I=0,M=E.length;I<M;++I){const T=E[I],N=T.start,U=T.count;for(let G=N,X=N+U;G<X;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new J,s=new J,o=new J,a=new J,l=new J,c=new J,u=new J,f=new J;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new vi(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Km=new Wt,Nr=new hy,Xa=new uc,Jm=new J,$a=new J,ja=new J,qa=new J,mu=new J,Ya=new J,Zm=new J,Ka=new J;class pi extends Tn{constructor(e=new Gn,n=new nh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(mu.fromBufferAttribute(f,e),o?Ya.addScaledVector(mu,u):Ya.addScaledVector(mu.sub(n),u))}n.add(Ya)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(s),Nr.copy(e.ray).recast(e.near),!(Xa.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Xa,Jm)===null||Nr.origin.distanceToSquared(Jm)>(e.far-e.near)**2))&&(Km.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(Km),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,h.start),y=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let v=E,S=y;v<S;v+=3){const w=a.getX(v),A=a.getX(v+1),I=a.getX(v+2);r=Ja(this,p,e,i,c,u,f,w,A,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);r=Ja(this,o,e,i,c,u,f,E,y,v),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,h.start),y=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let v=E,S=y;v<S;v+=3){const w=v,A=v+1,I=v+2;r=Ja(this,p,e,i,c,u,f,w,A,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const E=m,y=m+1,v=m+2;r=Ja(this,o,e,i,c,u,f,E,y,v),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function qL(t,e,n,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===xr,a),l===null)return null;Ka.copy(a),Ka.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ka);return c<n.near||c>n.far?null:{distance:c,point:Ka.clone(),object:t}}function Ja(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,$a),t.getVertexPosition(l,ja),t.getVertexPosition(c,qa);const u=qL(t,e,n,i,$a,ja,qa,Zm);if(u){const f=new J;Yn.getBarycoord(Zm,$a,ja,qa,f),r&&(u.uv=Yn.getInterpolatedAttribute(r,a,l,c,f,new ut)),s&&(u.uv1=Yn.getInterpolatedAttribute(s,a,l,c,f,new ut)),o&&(u.normal=Yn.getInterpolatedAttribute(o,a,l,c,f,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new J,materialIndex:0};Yn.getNormal($a,ja,qa,d.normal),u.face=d,u.barycoord=f}return u}class ua extends Gn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2));function g(_,m,p,E,y,v,S,w,A,I,M){const T=v/A,N=S/I,U=v/2,G=S/2,X=w/2,Y=A+1,H=I+1;let te=0,F=0;const ce=new J;for(let ve=0;ve<H;ve++){const Me=ve*N-G;for(let Ne=0;Ne<Y;Ne++){const Oe=Ne*T-U;ce[_]=Oe*E,ce[m]=Me*y,ce[p]=X,c.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[p]=w>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(Ne/A),f.push(1-ve/I),te+=1}}for(let ve=0;ve<I;ve++)for(let Me=0;Me<A;Me++){const Ne=d+Me+Y*ve,Oe=d+Me+Y*(ve+1),Ve=d+(Me+1)+Y*(ve+1),je=d+(Me+1)+Y*ve;l.push(Ne,Oe,je),l.push(Oe,Ve,je),F+=6}a.addGroup(h,F,M),h+=F,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function pn(t){const e={};for(let n=0;n<t.length;n++){const i=Js(t[n]);for(const r in i)e[r]=i[r]}return e}function YL(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const KL={clone:Js,merge:pn};var JL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JL,this.fragmentShader=ZL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=YL(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class yy extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new J,Qm=new ut,eg=new ut;class Bn extends yy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=id*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return id*2*Math.atan(Math.tan(qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,n){return this.getViewBounds(e,Qm,eg),n.subVectors(eg,Qm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(qc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const xs=-90,Es=1;class QL extends Tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(xs,Es,e,n);r.layers=this.layers,this.add(r);const s=new Bn(xs,Es,e,n);s.layers=this.layers,this.add(s);const o=new Bn(xs,Es,e,n);o.layers=this.layers,this.add(o);const a=new Bn(xs,Es,e,n);a.layers=this.layers,this.add(a);const l=new Bn(xs,Es,e,n);l.layers=this.layers,this.add(l);const c=new Bn(xs,Es,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class xy extends Mn{constructor(e=[],n=qs,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eI extends ts{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xy(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ua(5,5,5),s=new Er({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:_r});s.uniforms.tEquirect.value=n;const o=new pi(r,s),a=n.minFilter;return n.minFilter===$r&&(n.minFilter=di),new QL(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Za extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tI={type:"move"};class gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tI)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Za;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class nI extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const _u=new J,iI=new J,rI=new Ke;class Hr{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=_u.subVectors(i,n).cross(iI.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(_u),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||rI.getNormalMatrix(e),r=this.coplanarPoint(_u).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new uc,sI=new ut(.5,.5),Qa=new J;class Ey{constructor(e=new Hr,n=new Hr,i=new Hr,r=new Hr,s=new Hr,o=new Hr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],E=s[12],y=s[13],v=s[14],S=s[15];if(r[0].setComponents(c-o,h-u,p-g,S-E).normalize(),r[1].setComponents(c+o,h+u,p+g,S+E).normalize(),r[2].setComponents(c+a,h+f,p+_,S+y).normalize(),r[3].setComponents(c-a,h-f,p-_,S-y).normalize(),i)r[4].setComponents(l,d,m,v).normalize(),r[5].setComponents(c-l,h-d,p-m,S-v).normalize();else if(r[4].setComponents(c-l,h-d,p-m,S-v).normalize(),n===hi)r[5].setComponents(c+l,h+d,p+m,S+v).normalize();else if(n===kl)r[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);const n=sI.distanceTo(e.center);return Ur.radius=.7071067811865476+n,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qa.x=r.normal.x>0?e.max.x:e.min.x,Qa.y=r.normal.y>0?e.max.y:e.min.y,Qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oI extends ca{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tg=new Wt,rd=new hy,el=new uc,tl=new J;class A2 extends Tn{constructor(e=new Gn,n=new oI){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(r),el.radius+=s,e.ray.intersectsSphere(el)===!1)return;tg.copy(r).invert(),rd.copy(e.ray).applyMatrix4(tg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const m=c.getX(g);tl.fromBufferAttribute(f,m),ng(tl,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)tl.fromBufferAttribute(f,g),ng(tl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ng(t,e,n,i,r,s,o){const a=rd.distanceSqToPoint(t);if(a<n){const l=new J;rd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class by extends Mn{constructor(e,n,i=es,r,s,o,a=ei,l=ei,c,u=$o,f=1){if(u!==$o&&u!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new th(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Sy extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fa extends Gn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(s.slice(),3)),this.setAttribute("uv",new qt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const y=new J,v=new J,S=new J;for(let w=0;w<n.length;w+=3)h(n[w+0],y),h(n[w+1],v),h(n[w+2],S),l(y,v,S,E)}function l(E,y,v,S){const w=S+1,A=[];for(let I=0;I<=w;I++){A[I]=[];const M=E.clone().lerp(v,I/w),T=y.clone().lerp(v,I/w),N=w-I;for(let U=0;U<=N;U++)U===0&&I===w?A[I][U]=M:A[I][U]=M.clone().lerp(T,U/N)}for(let I=0;I<w;I++)for(let M=0;M<2*(w-I)-1;M++){const T=Math.floor(M/2);M%2===0?(d(A[I][T+1]),d(A[I+1][T]),d(A[I][T])):(d(A[I][T+1]),d(A[I+1][T+1]),d(A[I+1][T]))}}function c(E){const y=new J;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(E),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function u(){const E=new J;for(let y=0;y<s.length;y+=3){E.x=s[y+0],E.y=s[y+1],E.z=s[y+2];const v=m(E)/2/Math.PI+.5,S=p(E)/Math.PI+.5;o.push(v,1-S)}g(),f()}function f(){for(let E=0;E<o.length;E+=6){const y=o[E+0],v=o[E+2],S=o[E+4],w=Math.max(y,v,S),A=Math.min(y,v,S);w>.9&&A<.1&&(y<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),S<.2&&(o[E+4]+=1))}}function d(E){s.push(E.x,E.y,E.z)}function h(E,y){const v=E*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const E=new J,y=new J,v=new J,S=new J,w=new ut,A=new ut,I=new ut;for(let M=0,T=0;M<s.length;M+=9,T+=6){E.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),w.set(o[T+0],o[T+1]),A.set(o[T+2],o[T+3]),I.set(o[T+4],o[T+5]),S.copy(E).add(y).add(v).divideScalar(3);const N=m(S);_(w,T+0,E,N),_(A,T+2,y,N),_(I,T+4,v,N)}}function _(E,y,v,S){S<0&&E.x===1&&(o[y]=E.x-1),v.x===0&&v.z===0&&(o[y]=S/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.vertices,e.indices,e.radius,e.details)}}class My extends fa{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new My(e.radius,e.detail)}}class Ty extends fa{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ty(e.radius,e.detail)}}class ih extends fa{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ih(e.radius,e.detail)}}class fc extends Gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*d-o;for(let y=0;y<c;y++){const v=y*f-s;g.push(v,-E,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const y=E+c*p,v=E+c*(p+1),S=E+1+c*(p+1),w=E+1+c*p;h.push(y,v,w),h.push(v,S,w)}this.setIndex(h),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.width,e.height,e.widthSegments,e.heightSegments)}}class wy extends Gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new J,d=new J,h=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const E=[],y=p/i;let v=0;p===0&&o===0?v=.5/n:p===i&&l===Math.PI&&(v=-.5/n);for(let S=0;S<=n;S++){const w=S/n;f.x=-e*Math.cos(r+w*s)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(r+w*s)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(w+v,1-y),E.push(c++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<n;E++){const y=u[p][E+1],v=u[p][E],S=u[p+1][E],w=u[p+1][E+1];(p!==0||o>0)&&h.push(y,v,w),(p!==i-1||l<Math.PI)&&h.push(v,S,w)}this.setIndex(h),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wy(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ay extends Gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new J,f=new J,d=new J;for(let h=0;h<=i;h++)for(let g=0;g<=r;g++){const _=g/r*s,m=h/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(_),f.y=(e+n*Math.cos(m))*Math.sin(_),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(h/i)}for(let h=1;h<=i;h++)for(let g=1;g<=r;g++){const _=(r+1)*h+g-1,m=(r+1)*(h-1)+g-1,p=(r+1)*(h-1)+g,E=(r+1)*h+g;o.push(_,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ay(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ry extends Gn{constructor(e=1,n=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],c=[],u=[],f=new J,d=new J,h=new J,g=new J,_=new J,m=new J,p=new J;for(let y=0;y<=i;++y){const v=y/i*s*Math.PI*2;E(v,s,o,e,h),E(v+.01,s,o,e,g),m.subVectors(g,h),p.addVectors(g,h),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let S=0;S<=r;++S){const w=S/r*Math.PI*2,A=-n*Math.cos(w),I=n*Math.sin(w);f.x=h.x+(A*p.x+I*_.x),f.y=h.y+(A*p.y+I*_.y),f.z=h.z+(A*p.z+I*_.z),l.push(f.x,f.y,f.z),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),u.push(y/i),u.push(S/r)}}for(let y=1;y<=i;y++)for(let v=1;v<=r;v++){const S=(r+1)*(y-1)+(v-1),w=(r+1)*y+(v-1),A=(r+1)*y+v,I=(r+1)*(y-1)+v;a.push(S,w,I),a.push(w,A,I)}this.setIndex(a),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(u,2));function E(y,v,S,w,A){const I=Math.cos(y),M=Math.sin(y),T=S/v*y,N=Math.cos(T);A.x=w*(2+N)*.5*I,A.y=w*(2+N)*M*.5,A.z=w*Math.sin(T)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ry(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class aI extends ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vL,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lI extends ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cI extends yy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class uI extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function ig(t,e,n,i){const r=fI(i);switch(n){case oy:return t*e;case ly:return t*e/r.components*r.byteLength;case Zd:return t*e/r.components*r.byteLength;case cy:return t*e*2/r.components*r.byteLength;case Qd:return t*e*2/r.components*r.byteLength;case ay:return t*e*3/r.components*r.byteLength;case Jn:return t*e*4/r.components*r.byteLength;case eh:return t*e*4/r.components*r.byteLength;case ul:case fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case dl:case hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pf:case If:return Math.max(t,16)*Math.max(e,8)/4;case Cf:case Lf:return Math.max(t,8)*Math.max(e,8)/2;case Df:case Nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Uf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case kf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case zf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case $f:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case qf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Kf:case Jf:case Zf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Qf:case ed:return Math.ceil(t/4)*Math.ceil(e/4)*8;case td:case nd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function fI(t){switch(t){case Yi:case ny:return{byteLength:1,components:1};case Wo:case iy:case sa:return{byteLength:2,components:1};case Kd:case Jd:return{byteLength:2,components:4};case es:case Yd:case Gi:return{byteLength:4,components:1};case ry:case sy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function dI(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var hI=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pI=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mI=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gI=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_I=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vI=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yI=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xI=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EI=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bI=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SI=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TI=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wI=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,AI=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RI=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,CI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,II=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,UI=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OI=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,FI=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kI=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HI=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zI=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VI=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GI="gl_FragColor = linearToOutputTexel( gl_FragColor );",WI=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$I=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jI=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eD=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iD=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rD=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fD=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pD=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_D=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ED=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,LD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ID=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ND=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,VD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$D=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,JD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tN=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_N=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,EN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ON=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,WN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:hI,alphahash_pars_fragment:pI,alphamap_fragment:mI,alphamap_pars_fragment:gI,alphatest_fragment:_I,alphatest_pars_fragment:vI,aomap_fragment:yI,aomap_pars_fragment:xI,batching_pars_vertex:EI,batching_vertex:bI,begin_vertex:SI,beginnormal_vertex:MI,bsdfs:TI,iridescence_fragment:wI,bumpmap_pars_fragment:AI,clipping_planes_fragment:RI,clipping_planes_pars_fragment:CI,clipping_planes_pars_vertex:PI,clipping_planes_vertex:LI,color_fragment:II,color_pars_fragment:DI,color_pars_vertex:NI,color_vertex:UI,common:OI,cube_uv_reflection_fragment:FI,defaultnormal_vertex:kI,displacementmap_pars_vertex:BI,displacementmap_vertex:HI,emissivemap_fragment:zI,emissivemap_pars_fragment:VI,colorspace_fragment:GI,colorspace_pars_fragment:WI,envmap_fragment:XI,envmap_common_pars_fragment:$I,envmap_pars_fragment:jI,envmap_pars_vertex:qI,envmap_physical_pars_fragment:sD,envmap_vertex:YI,fog_vertex:KI,fog_pars_vertex:JI,fog_fragment:ZI,fog_pars_fragment:QI,gradientmap_pars_fragment:eD,lightmap_pars_fragment:tD,lights_lambert_fragment:nD,lights_lambert_pars_fragment:iD,lights_pars_begin:rD,lights_toon_fragment:oD,lights_toon_pars_fragment:aD,lights_phong_fragment:lD,lights_phong_pars_fragment:cD,lights_physical_fragment:uD,lights_physical_pars_fragment:fD,lights_fragment_begin:dD,lights_fragment_maps:hD,lights_fragment_end:pD,logdepthbuf_fragment:mD,logdepthbuf_pars_fragment:gD,logdepthbuf_pars_vertex:_D,logdepthbuf_vertex:vD,map_fragment:yD,map_pars_fragment:xD,map_particle_fragment:ED,map_particle_pars_fragment:bD,metalnessmap_fragment:SD,metalnessmap_pars_fragment:MD,morphinstance_vertex:TD,morphcolor_vertex:wD,morphnormal_vertex:AD,morphtarget_pars_vertex:RD,morphtarget_vertex:CD,normal_fragment_begin:PD,normal_fragment_maps:LD,normal_pars_fragment:ID,normal_pars_vertex:DD,normal_vertex:ND,normalmap_pars_fragment:UD,clearcoat_normal_fragment_begin:OD,clearcoat_normal_fragment_maps:FD,clearcoat_pars_fragment:kD,iridescence_pars_fragment:BD,opaque_fragment:HD,packing:zD,premultiplied_alpha_fragment:VD,project_vertex:GD,dithering_fragment:WD,dithering_pars_fragment:XD,roughnessmap_fragment:$D,roughnessmap_pars_fragment:jD,shadowmap_pars_fragment:qD,shadowmap_pars_vertex:YD,shadowmap_vertex:KD,shadowmask_pars_fragment:JD,skinbase_vertex:ZD,skinning_pars_vertex:QD,skinning_vertex:eN,skinnormal_vertex:tN,specularmap_fragment:nN,specularmap_pars_fragment:iN,tonemapping_fragment:rN,tonemapping_pars_fragment:sN,transmission_fragment:oN,transmission_pars_fragment:aN,uv_pars_fragment:lN,uv_pars_vertex:cN,uv_vertex:uN,worldpos_vertex:fN,background_vert:dN,background_frag:hN,backgroundCube_vert:pN,backgroundCube_frag:mN,cube_vert:gN,cube_frag:_N,depth_vert:vN,depth_frag:yN,distanceRGBA_vert:xN,distanceRGBA_frag:EN,equirect_vert:bN,equirect_frag:SN,linedashed_vert:MN,linedashed_frag:TN,meshbasic_vert:wN,meshbasic_frag:AN,meshlambert_vert:RN,meshlambert_frag:CN,meshmatcap_vert:PN,meshmatcap_frag:LN,meshnormal_vert:IN,meshnormal_frag:DN,meshphong_vert:NN,meshphong_frag:UN,meshphysical_vert:ON,meshphysical_frag:FN,meshtoon_vert:kN,meshtoon_frag:BN,points_vert:HN,points_frag:zN,shadow_vert:VN,shadow_frag:GN,sprite_vert:WN,sprite_frag:XN},Se={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},fi={basic:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new _t(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:pn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:pn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new _t(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:pn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:pn([Se.points,Se.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:pn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:pn([Se.common,Se.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:pn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:pn([Se.sprite,Se.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:pn([Se.common,Se.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:pn([Se.lights,Se.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};fi.physical={uniforms:pn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const nl={r:0,b:0,g:0},Or=new Ki,$N=new Wt;function jN(t,e,n,i,r,s,o){const a=new _t(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?n:e).get(v)),v}function _(y){let v=!1;const S=g(y);S===null?p(a,l):S&&S.isColor&&(p(S,1),v=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(y,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===cc)?(u===void 0&&(u=new pi(new ua(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:Js(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Or.copy(v.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($N.makeRotationFromEuler(Or)),u.material.toneMapped=ot.getTransfer(S.colorSpace)!==yt,(f!==S||d!==S.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,h=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new pi(new fc(2,2),new Er({name:"BackgroundMaterial",uniforms:Js(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ot.getTransfer(S.colorSpace)!==yt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,h=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(nl,vy(t)),i.buffers.color.setClear(nl.r,nl.g,nl.b,v,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:E}}function qN(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(T,N,U,G,X){let Y=!1;const H=f(G,U,N);s!==H&&(s=H,c(s.object)),Y=h(T,G,U,X),Y&&g(T,G,U,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(T,N,U,G),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(T){return t.bindVertexArray(T)}function u(T){return t.deleteVertexArray(T)}function f(T,N,U){const G=U.wireframe===!0;let X=i[T.id];X===void 0&&(X={},i[T.id]=X);let Y=X[N.id];Y===void 0&&(Y={},X[N.id]=Y);let H=Y[G];return H===void 0&&(H=d(l()),Y[G]=H),H}function d(T){const N=[],U=[],G=[];for(let X=0;X<n;X++)N[X]=0,U[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:G,object:T,attributes:{},index:null}}function h(T,N,U,G){const X=s.attributes,Y=N.attributes;let H=0;const te=U.getAttributes();for(const F in te)if(te[F].location>=0){const ve=X[F];let Me=Y[F];if(Me===void 0&&(F==="instanceMatrix"&&T.instanceMatrix&&(Me=T.instanceMatrix),F==="instanceColor"&&T.instanceColor&&(Me=T.instanceColor)),ve===void 0||ve.attribute!==Me||Me&&ve.data!==Me.data)return!0;H++}return s.attributesNum!==H||s.index!==G}function g(T,N,U,G){const X={},Y=N.attributes;let H=0;const te=U.getAttributes();for(const F in te)if(te[F].location>=0){let ve=Y[F];ve===void 0&&(F==="instanceMatrix"&&T.instanceMatrix&&(ve=T.instanceMatrix),F==="instanceColor"&&T.instanceColor&&(ve=T.instanceColor));const Me={};Me.attribute=ve,ve&&ve.data&&(Me.data=ve.data),X[F]=Me,H++}s.attributes=X,s.attributesNum=H,s.index=G}function _(){const T=s.newAttributes;for(let N=0,U=T.length;N<U;N++)T[N]=0}function m(T){p(T,0)}function p(T,N){const U=s.newAttributes,G=s.enabledAttributes,X=s.attributeDivisors;U[T]=1,G[T]===0&&(t.enableVertexAttribArray(T),G[T]=1),X[T]!==N&&(t.vertexAttribDivisor(T,N),X[T]=N)}function E(){const T=s.newAttributes,N=s.enabledAttributes;for(let U=0,G=N.length;U<G;U++)N[U]!==T[U]&&(t.disableVertexAttribArray(U),N[U]=0)}function y(T,N,U,G,X,Y,H){H===!0?t.vertexAttribIPointer(T,N,U,X,Y):t.vertexAttribPointer(T,N,U,G,X,Y)}function v(T,N,U,G){_();const X=G.attributes,Y=U.getAttributes(),H=N.defaultAttributeValues;for(const te in Y){const F=Y[te];if(F.location>=0){let ce=X[te];if(ce===void 0&&(te==="instanceMatrix"&&T.instanceMatrix&&(ce=T.instanceMatrix),te==="instanceColor"&&T.instanceColor&&(ce=T.instanceColor)),ce!==void 0){const ve=ce.normalized,Me=ce.itemSize,Ne=e.get(ce);if(Ne===void 0)continue;const Oe=Ne.buffer,Ve=Ne.type,je=Ne.bytesPerElement,oe=Ve===t.INT||Ve===t.UNSIGNED_INT||ce.gpuType===Yd;if(ce.isInterleavedBufferAttribute){const k=ce.data,se=k.stride,ae=ce.offset;if(k.isInstancedInterleavedBuffer){for(let le=0;le<F.locationSize;le++)p(F.location+le,k.meshPerAttribute);T.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let le=0;le<F.locationSize;le++)m(F.location+le);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let le=0;le<F.locationSize;le++)y(F.location+le,Me/F.locationSize,Ve,ve,se*je,(ae+Me/F.locationSize*le)*je,oe)}else{if(ce.isInstancedBufferAttribute){for(let k=0;k<F.locationSize;k++)p(F.location+k,ce.meshPerAttribute);T.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let k=0;k<F.locationSize;k++)m(F.location+k);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let k=0;k<F.locationSize;k++)y(F.location+k,Me/F.locationSize,Ve,ve,Me*je,Me/F.locationSize*k*je,oe)}}else if(H!==void 0){const ve=H[te];if(ve!==void 0)switch(ve.length){case 2:t.vertexAttrib2fv(F.location,ve);break;case 3:t.vertexAttrib3fv(F.location,ve);break;case 4:t.vertexAttrib4fv(F.location,ve);break;default:t.vertexAttrib1fv(F.location,ve)}}}}E()}function S(){I();for(const T in i){const N=i[T];for(const U in N){const G=N[U];for(const X in G)u(G[X].object),delete G[X];delete N[U]}delete i[T]}}function w(T){if(i[T.id]===void 0)return;const N=i[T.id];for(const U in N){const G=N[U];for(const X in G)u(G[X].object),delete G[X];delete N[U]}delete i[T.id]}function A(T){for(const N in i){const U=i[N];if(U[T.id]===void 0)continue;const G=U[T.id];for(const X in G)u(G[X].object),delete G[X];delete U[T.id]}}function I(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function YN(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];n.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function KN(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Jn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const I=A===sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Yi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Gi&&!I)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:S,maxSamples:w}}function JN(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Hr,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,y=E*4;let v=p.clippingState||null;l.value=v,v=u(g,d,y,h);for(let S=0;S!==y;++S)v[S]=n[S];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=h;y!==_;++y,v+=4)o.copy(f[y]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ZN(t){let e=new WeakMap;function n(o,a){return a===Tf?o.mapping=qs:a===wf&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Tf||a===wf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new eI(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Rs=4,rg=[.125,.215,.35,.446,.526,.582],Gr=20,vu=new cI,sg=new _t;let yu=null,xu=0,Eu=0,bu=!1;const zr=(1+Math.sqrt(5))/2,bs=1/zr,og=[new J(-zr,bs,0),new J(zr,bs,0),new J(-bs,0,zr),new J(bs,0,zr),new J(0,zr,-bs),new J(0,zr,bs),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],QN=new J;class ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=QN}=s;yu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),Eu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ug(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yu,xu,Eu),this._renderer.xr.enabled=bu,e.scissorTest=!1,il(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),Eu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:di,minFilter:di,generateMipmaps:!1,type:sa,format:Jn,colorSpace:Ks,depthBuffer:!1},r=lg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eU(s)),this._blurMaterial=tU(s,e,n)}return r}_compileMaterial(e){const n=new pi(this._lodPlanes[0],e);this._renderer.compile(n,vu)}_sceneToCubeUV(e,n,i,r,s){const l=new Bn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(sg),f.toneMapping=vr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new nh({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),m=new pi(new ua,_);let p=!1;const E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,p=!0):(_.color.copy(sg),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const S=this._cubeSize;il(r,v*S,y>2?S:0,S,S),f.setRenderTarget(r),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=E}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===qs||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ug()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;il(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,vu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=og[(r-s-1)%og.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new pi(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Gr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Gr;m>Gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gr}`);const p=[];let E=0;for(let A=0;A<Gr;++A){const I=A/_,M=Math.exp(-I*I/2);p.push(M),A===0?E+=M:A<m&&(E+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const v=this._sizeLods[r],S=3*v*(r>y-Rs?r-y+Rs:0),w=4*(this._cubeSize-v);il(n,S,w,3*v,2*v),l.setRenderTarget(n),l.render(f,vu)}}function eU(t){const e=[],n=[],i=[];let r=t;const s=t-Rs+1+rg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Rs?l=rg[o-t+Rs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*h),y=new Float32Array(m*g*h),v=new Float32Array(p*g*h);for(let w=0;w<h;w++){const A=w%3*2/3-1,I=w>2?0:-1,M=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];E.set(M,_*g*w),y.set(d,m*g*w);const T=[w,w,w,w,w,w];v.set(T,p*g*w)}const S=new Gn;S.setAttribute("position",new vi(E,_)),S.setAttribute("uv",new vi(y,m)),S.setAttribute("faceIndex",new vi(v,p)),e.push(S),r>Rs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function lg(t,e,n){const i=new ts(t,e,n);return i.texture.mapping=cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function il(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function tU(t,e,n){const i=new Float32Array(Gr),r=new J(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function cg(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function ug(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function rh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nU(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Tf||l===wf,u=l===qs||l===Ys;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new ag(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new ag(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function iU(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&qo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rU(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const E=h.array;_=h.version;for(let y=0,v=E.length;y<v;y+=3){const S=E[y+0],w=E[y+1],A=E[y+2];d.push(S,w,w,A,A,S)}}else if(g!==void 0){const E=g.array;_=g.version;for(let y=0,v=E.length/3-1;y<v;y+=3){const S=y+0,w=y+1,A=y+2;d.push(S,w,w,A,A,S)}}else return;const m=new(fy(d)?_y:gy)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function sU(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*o),n.update(h,i,1)}function c(d,h,g){g!==0&&(t.drawElementsInstanced(i,h,s,d*o,g),n.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=h[E]*_[E];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function oU(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function aU(t,e,n){const i=new WeakMap,r=new Ft;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;h===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const w=new Float32Array(v*S*4*f),A=new dy(w,v,S,f);A.type=Gi,A.needsUpdate=!0;const I=y*4;for(let T=0;T<f;T++){const N=m[T],U=p[T],G=E[T],X=v*S*4*T;for(let Y=0;Y<N.count;Y++){const H=Y*I;h===!0&&(r.fromBufferAttribute(N,Y),w[X+H+0]=r.x,w[X+H+1]=r.y,w[X+H+2]=r.z,w[X+H+3]=0),g===!0&&(r.fromBufferAttribute(U,Y),w[X+H+4]=r.x,w[X+H+5]=r.y,w[X+H+6]=r.z,w[X+H+7]=0),_===!0&&(r.fromBufferAttribute(G,Y),w[X+H+8]=r.x,w[X+H+9]=r.y,w[X+H+10]=r.z,w[X+H+11]=G.itemSize===4?r.w:1)}}d={count:f,texture:A,size:new ut(v,S)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function lU(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Py=new Mn,fg=new by(1,1),Ly=new dy,Iy=new FL,Dy=new xy,dg=[],hg=[],pg=new Float32Array(16),mg=new Float32Array(9),gg=new Float32Array(4);function ro(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=dg[r];if(s===void 0&&(s=new Float32Array(r),dg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function dc(t,e){let n=hg[e];n===void 0&&(n=new Int32Array(e),hg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function cU(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function uU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2fv(this.addr,e),Kt(n,e)}}function fU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;t.uniform3fv(this.addr,e),Kt(n,e)}}function dU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4fv(this.addr,e),Kt(n,e)}}function hU(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if(Yt(n,i))return;gg.set(i),t.uniformMatrix2fv(this.addr,!1,gg),Kt(n,i)}}function pU(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if(Yt(n,i))return;mg.set(i),t.uniformMatrix3fv(this.addr,!1,mg),Kt(n,i)}}function mU(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if(Yt(n,i))return;pg.set(i),t.uniformMatrix4fv(this.addr,!1,pg),Kt(n,i)}}function gU(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _U(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2iv(this.addr,e),Kt(n,e)}}function vU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3iv(this.addr,e),Kt(n,e)}}function yU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4iv(this.addr,e),Kt(n,e)}}function xU(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function EU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2uiv(this.addr,e),Kt(n,e)}}function bU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3uiv(this.addr,e),Kt(n,e)}}function SU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4uiv(this.addr,e),Kt(n,e)}}function MU(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(fg.compareFunction=uy,s=fg):s=Py,n.setTexture2D(e||s,r)}function TU(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Iy,r)}function wU(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Dy,r)}function AU(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ly,r)}function RU(t){switch(t){case 5126:return cU;case 35664:return uU;case 35665:return fU;case 35666:return dU;case 35674:return hU;case 35675:return pU;case 35676:return mU;case 5124:case 35670:return gU;case 35667:case 35671:return _U;case 35668:case 35672:return vU;case 35669:case 35673:return yU;case 5125:return xU;case 36294:return EU;case 36295:return bU;case 36296:return SU;case 35678:case 36198:case 36298:case 36306:case 35682:return MU;case 35679:case 36299:case 36307:return TU;case 35680:case 36300:case 36308:case 36293:return wU;case 36289:case 36303:case 36311:case 36292:return AU}}function CU(t,e){t.uniform1fv(this.addr,e)}function PU(t,e){const n=ro(e,this.size,2);t.uniform2fv(this.addr,n)}function LU(t,e){const n=ro(e,this.size,3);t.uniform3fv(this.addr,n)}function IU(t,e){const n=ro(e,this.size,4);t.uniform4fv(this.addr,n)}function DU(t,e){const n=ro(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function NU(t,e){const n=ro(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function UU(t,e){const n=ro(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function OU(t,e){t.uniform1iv(this.addr,e)}function FU(t,e){t.uniform2iv(this.addr,e)}function kU(t,e){t.uniform3iv(this.addr,e)}function BU(t,e){t.uniform4iv(this.addr,e)}function HU(t,e){t.uniform1uiv(this.addr,e)}function zU(t,e){t.uniform2uiv(this.addr,e)}function VU(t,e){t.uniform3uiv(this.addr,e)}function GU(t,e){t.uniform4uiv(this.addr,e)}function WU(t,e,n){const i=this.cache,r=e.length,s=dc(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Py,s[o])}function XU(t,e,n){const i=this.cache,r=e.length,s=dc(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Iy,s[o])}function $U(t,e,n){const i=this.cache,r=e.length,s=dc(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Dy,s[o])}function jU(t,e,n){const i=this.cache,r=e.length,s=dc(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ly,s[o])}function qU(t){switch(t){case 5126:return CU;case 35664:return PU;case 35665:return LU;case 35666:return IU;case 35674:return DU;case 35675:return NU;case 35676:return UU;case 5124:case 35670:return OU;case 35667:case 35671:return FU;case 35668:case 35672:return kU;case 35669:case 35673:return BU;case 5125:return HU;case 36294:return zU;case 36295:return VU;case 36296:return GU;case 35678:case 36198:case 36298:case 36306:case 35682:return WU;case 35679:case 36299:case 36307:return XU;case 35680:case 36300:case 36308:case 36293:return $U;case 36289:case 36303:case 36311:case 36292:return jU}}class YU{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=RU(n.type)}}class KU{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=qU(n.type)}}class JU{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Su=/(\w+)(\])?(\[|\.)?/g;function _g(t,e){t.seq.push(e),t.map[e.id]=e}function ZU(t,e,n){const i=t.name,r=i.length;for(Su.lastIndex=0;;){const s=Su.exec(i),o=Su.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_g(n,c===void 0?new YU(a,t,e):new KU(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new JU(a),_g(n,f)),n=f}}}class pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);ZU(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function vg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const QU=37297;let eO=0;function tO(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const yg=new Ke;function nO(t){ot._getMatrix(yg,ot.workingColorSpace,t);const e=`mat3( ${yg.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(t)){case Fl:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function xg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+tO(t.getShaderSource(e),a)}else return s}function iO(t,e){const n=nO(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function rO(t,e){let n;switch(e){case uL:n="Linear";break;case fL:n="Reinhard";break;case dL:n="Cineon";break;case hL:n="ACESFilmic";break;case mL:n="AgX";break;case gL:n="Neutral";break;case pL:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const rl=new J;function sO(){ot.getLuminanceCoefficients(rl);const t=rl.x.toFixed(4),e=rl.y.toFixed(4),n=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oO(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function aO(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function lO(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Eo(t){return t!==""}function Eg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cO=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(t){return t.replace(cO,fO)}const uO=new Map;function fO(t,e){let n=Je[e];if(n===void 0){const i=uO.get(e);if(i!==void 0)n=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sd(n)}const dO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sg(t){return t.replace(dO,hO)}function hO(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pO(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Q0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===GP?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function mO(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case qs:case Ys:e="ENVMAP_TYPE_CUBE";break;case cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gO(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function _O(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ey:e="ENVMAP_BLENDING_MULTIPLY";break;case lL:e="ENVMAP_BLENDING_MIX";break;case cL:e="ENVMAP_BLENDING_ADD";break}return e}function vO(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function yO(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=pO(n),c=mO(n),u=gO(n),f=_O(n),d=vO(n),h=oO(n),g=aO(s),_=r.createProgram();let m,p,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Eo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Eo).join(`
`),p.length>0&&(p+=`
`)):(m=[Mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),p=[Mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?Je.tonemapping_pars_fragment:"",n.toneMapping!==vr?rO("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,iO("linearToOutputTexel",n.outputColorSpace),sO(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Eo).join(`
`)),o=sd(o),o=Eg(o,n),o=bg(o,n),a=sd(a),a=Eg(a,n),a=bg(a,n),o=Sg(o),a=Sg(a),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=E+m+o,v=E+p+a,S=vg(r,r.VERTEX_SHADER,y),w=vg(r,r.FRAGMENT_SHADER,v);r.attachShader(_,S),r.attachShader(_,w),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(N){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(S)||"",X=r.getShaderInfoLog(w)||"",Y=U.trim(),H=G.trim(),te=X.trim();let F=!0,ce=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,S,w);else{const ve=xg(r,S,"vertex"),Me=xg(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Y+`
`+ve+`
`+Me)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(H===""||te==="")&&(ce=!1);ce&&(N.diagnostics={runnable:F,programLog:Y,vertexShader:{log:H,prefix:m},fragmentShader:{log:te,prefix:p}})}r.deleteShader(S),r.deleteShader(w),I=new pl(r,_),M=lO(r,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,QU)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eO++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}let xO=0;class EO{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bO(e),n.set(e,i)),i}}class bO{constructor(e){this.id=xO++,this.code=e,this.usedTimes=0}}function SO(t,e,n,i,r,s,o){const a=new py,l=new EO,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,T,N,U,G){const X=U.fog,Y=G.geometry,H=M.isMeshStandardMaterial?U.environment:null,te=(M.isMeshStandardMaterial?n:e).get(M.envMap||H),F=te&&te.mapping===cc?te.image.height:null,ce=g[M.type];M.precision!==null&&(h=r.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const ve=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Me=ve!==void 0?ve.length:0;let Ne=0;Y.morphAttributes.position!==void 0&&(Ne=1),Y.morphAttributes.normal!==void 0&&(Ne=2),Y.morphAttributes.color!==void 0&&(Ne=3);let Oe,Ve,je,oe;if(ce){const ft=fi[ce];Oe=ft.vertexShader,Ve=ft.fragmentShader}else Oe=M.vertexShader,Ve=M.fragmentShader,l.update(M),je=l.getVertexShaderID(M),oe=l.getFragmentShaderID(M);const k=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),ae=G.isInstancedMesh===!0,le=G.isBatchedMesh===!0,ye=!!M.map,ze=!!M.matcap,b=!!te,O=!!M.aoMap,z=!!M.lightMap,ee=!!M.bumpMap,$=!!M.normalMap,C=!!M.displacementMap,L=!!M.emissiveMap,B=!!M.metalnessMap,K=!!M.roughnessMap,ie=M.anisotropy>0,R=M.clearcoat>0,x=M.dispersion>0,D=M.iridescence>0,W=M.sheen>0,Q=M.transmission>0,Z=ie&&!!M.anisotropyMap,he=R&&!!M.clearcoatMap,fe=R&&!!M.clearcoatNormalMap,Ee=R&&!!M.clearcoatRoughnessMap,Ae=D&&!!M.iridescenceMap,de=D&&!!M.iridescenceThicknessMap,be=W&&!!M.sheenColorMap,ke=W&&!!M.sheenRoughnessMap,we=!!M.specularMap,_e=!!M.specularColorMap,qe=!!M.specularIntensityMap,V=Q&&!!M.transmissionMap,ge=Q&&!!M.thicknessMap,xe=!!M.gradientMap,Ie=!!M.alphaMap,pe=M.alphaTest>0,ue=!!M.alphaHash,Ue=!!M.extensions;let Ye=vr;M.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ye=t.toneMapping);const St={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:Oe,fragmentShader:Ve,defines:M.defines,customVertexShaderID:je,customFragmentShaderID:oe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:le,batchingColor:le&&G._colorsTexture!==null,instancing:ae,instancingColor:ae&&G.instanceColor!==null,instancingMorph:ae&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:k===null?t.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ks,alphaToCoverage:!!M.alphaToCoverage,map:ye,matcap:ze,envMap:b,envMapMode:b&&te.mapping,envMapCubeUVHeight:F,aoMap:O,lightMap:z,bumpMap:ee,normalMap:$,displacementMap:d&&C,emissiveMap:L,normalMapObjectSpace:$&&M.normalMapType===EL,normalMapTangentSpace:$&&M.normalMapType===xL,metalnessMap:B,roughnessMap:K,anisotropy:ie,anisotropyMap:Z,clearcoat:R,clearcoatMap:he,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ee,dispersion:x,iridescence:D,iridescenceMap:Ae,iridescenceThicknessMap:de,sheen:W,sheenColorMap:be,sheenRoughnessMap:ke,specularMap:we,specularColorMap:_e,specularIntensityMap:qe,transmission:Q,transmissionMap:V,thicknessMap:ge,gradientMap:xe,opaque:M.transparent===!1&&M.blending===Bs&&M.alphaToCoverage===!1,alphaMap:Ie,alphaTest:pe,alphaHash:ue,combine:M.combine,mapUv:ye&&_(M.map.channel),aoMapUv:O&&_(M.aoMap.channel),lightMapUv:z&&_(M.lightMap.channel),bumpMapUv:ee&&_(M.bumpMap.channel),normalMapUv:$&&_(M.normalMap.channel),displacementMapUv:C&&_(M.displacementMap.channel),emissiveMapUv:L&&_(M.emissiveMap.channel),metalnessMapUv:B&&_(M.metalnessMap.channel),roughnessMapUv:K&&_(M.roughnessMap.channel),anisotropyMapUv:Z&&_(M.anisotropyMap.channel),clearcoatMapUv:he&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ke&&_(M.sheenRoughnessMap.channel),specularMapUv:we&&_(M.specularMap.channel),specularColorMapUv:_e&&_(M.specularColorMap.channel),specularIntensityMapUv:qe&&_(M.specularIntensityMap.channel),transmissionMapUv:V&&_(M.transmissionMap.channel),thicknessMapUv:ge&&_(M.thicknessMap.channel),alphaMapUv:Ie&&_(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&($||ie),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Y.attributes.uv&&(ye||Ie),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:se,skinning:G.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ne,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ye,decodeVideoTexture:ye&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===yt,decodeVideoTextureEmissive:L&&M.emissiveMap.isVideoTexture===!0&&ot.getTransfer(M.emissiveMap.colorSpace)===yt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ki,flipSided:M.side===Sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ue&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&M.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)T.push(N),T.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(E(T,M),y(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function E(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function y(M,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const T=g[M.type];let N;if(T){const U=fi[T];N=KL.clone(U.uniforms)}else N=M.uniforms;return N}function S(M,T){let N;for(let U=0,G=u.length;U<G;U++){const X=u[U];if(X.cacheKey===T){N=X,++N.usedTimes;break}}return N===void 0&&(N=new yO(t,T,M,s),u.push(N)),N}function w(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:I}}function MO(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function TO(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Tg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function wg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,h,g,_,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||TO),i.length>1&&i.sort(d||Tg),r.length>1&&r.sort(d||Tg)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function wO(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new wg,t.set(i,[o])):r>=s.length?(o=new wg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function AO(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new _t};break;case"SpotLight":n={position:new J,direction:new J,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new _t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":n={color:new _t,position:new J,halfWidth:new J,halfHeight:new J};break}return t[e.id]=n,n}}}function RO(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let CO=0;function PO(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function LO(t){const e=new AO,n=RO(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const r=new J,s=new Wt,o=new Wt;function a(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,E=0,y=0,v=0,S=0,w=0,A=0;c.sort(PO);for(let M=0,T=c.length;M<T;M++){const N=c[M],U=N.color,G=N.intensity,X=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=U.r*G,f+=U.g*G,d+=U.b*G;else if(N.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(N.sh.coefficients[H],G);A++}else if(N.isDirectionalLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const te=N.shadow,F=n.get(N);F.shadowIntensity=te.intensity,F.shadowBias=te.bias,F.shadowNormalBias=te.normalBias,F.shadowRadius=te.radius,F.shadowMapSize=te.mapSize,i.directionalShadow[h]=F,i.directionalShadowMap[h]=Y,i.directionalShadowMatrix[h]=N.shadow.matrix,E++}i.directional[h]=H,h++}else if(N.isSpotLight){const H=e.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(U).multiplyScalar(G),H.distance=X,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,i.spot[_]=H;const te=N.shadow;if(N.map&&(i.spotLightMap[S]=N.map,S++,te.updateMatrices(N),N.castShadow&&w++),i.spotLightMatrix[_]=te.matrix,N.castShadow){const F=n.get(N);F.shadowIntensity=te.intensity,F.shadowBias=te.bias,F.shadowNormalBias=te.normalBias,F.shadowRadius=te.radius,F.shadowMapSize=te.mapSize,i.spotShadow[_]=F,i.spotShadowMap[_]=Y,v++}_++}else if(N.isRectAreaLight){const H=e.get(N);H.color.copy(U).multiplyScalar(G),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=H,m++}else if(N.isPointLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),H.distance=N.distance,H.decay=N.decay,N.castShadow){const te=N.shadow,F=n.get(N);F.shadowIntensity=te.intensity,F.shadowBias=te.bias,F.shadowNormalBias=te.normalBias,F.shadowRadius=te.radius,F.shadowMapSize=te.mapSize,F.shadowCameraNear=te.camera.near,F.shadowCameraFar=te.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=N.shadow.matrix,y++}i.point[g]=H,g++}else if(N.isHemisphereLight){const H=e.get(N);H.skyColor.copy(N.color).multiplyScalar(G),H.groundColor.copy(N.groundColor).multiplyScalar(G),i.hemi[p]=H,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==h||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==E||I.numPointShadows!==y||I.numSpotShadows!==v||I.numSpotMaps!==S||I.numLightProbes!==A)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+S-w,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,I.directionalLength=h,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=E,I.numPointShadows=y,I.numSpotShadows=v,I.numSpotMaps=S,I.numLightProbes=A,i.version=CO++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const y=c[p];if(y.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(y.isSpotLight){const v=i.spot[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Ag(t){const e=new LO(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function IO(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ag(t),e.set(r,[a])):s>=o.length?(a=new Ag(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const DO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NO=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UO(t,e,n){let i=new Ey;const r=new ut,s=new ut,o=new Ft,a=new aI({depthPacking:yL}),l=new lI,c={},u=n.maxTextureSize,f={[xr]:Sn,[Sn]:xr,[ki]:ki},d=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:DO,fragmentShader:NO}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Gn;g.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pi(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q0;let p=this.type;this.render=function(w,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=t.getRenderTarget(),T=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),U=t.state;U.setBlending(_r),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const G=p!==Di&&this.type===Di,X=p===Di&&this.type!==Di;for(let Y=0,H=w.length;Y<H;Y++){const te=w[Y],F=te.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const ce=F.getFrameExtents();if(r.multiply(ce),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,F.mapSize.y=s.y)),F.map===null||G===!0||X===!0){const Me=this.type!==Di?{minFilter:ei,magFilter:ei}:{};F.map!==null&&F.map.dispose(),F.map=new ts(r.x,r.y,Me),F.map.texture.name=te.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const ve=F.getViewportCount();for(let Me=0;Me<ve;Me++){const Ne=F.getViewport(Me);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),U.viewport(o),F.updateMatrices(te,Me),i=F.getFrustum(),v(A,I,F.camera,te,this.type)}F.isPointLightShadow!==!0&&this.type===Di&&E(F,I),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(M,T,N)};function E(w,A){const I=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ts(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,I,d,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,I,h,_,null)}function y(w,A,I,M){let T=null;const N=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)T=N;else if(T=I.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=T.uuid,G=A.uuid;let X=c[U];X===void 0&&(X={},c[U]=X);let Y=X[G];Y===void 0&&(Y=T.clone(),X[G]=Y,A.addEventListener("dispose",S)),T=Y}if(T.visible=A.visible,T.wireframe=A.wireframe,M===Di?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:f[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const U=t.properties.get(T);U.light=I}return T}function v(w,A,I,M,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===Di)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const G=e.update(w),X=w.material;if(Array.isArray(X)){const Y=G.groups;for(let H=0,te=Y.length;H<te;H++){const F=Y[H],ce=X[F.materialIndex];if(ce&&ce.visible){const ve=y(w,ce,M,T);w.onBeforeShadow(t,w,A,I,G,ve,F),t.renderBufferDirect(I,null,G,ve,w,F),w.onAfterShadow(t,w,A,I,G,ve,F)}}}else if(X.visible){const Y=y(w,X,M,T);w.onBeforeShadow(t,w,A,I,G,Y,null),t.renderBufferDirect(I,null,G,Y,w,null),w.onAfterShadow(t,w,A,I,G,Y,null)}}const U=w.children;for(let G=0,X=U.length;G<X;G++)v(U[G],A,I,M,T)}function S(w){w.target.removeEventListener("dispose",S);for(const I in c){const M=c[I],T=w.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const OO={[vf]:yf,[xf]:Sf,[Ef]:Mf,[js]:bf,[yf]:vf,[Sf]:xf,[Mf]:Ef,[bf]:js};function FO(t,e){function n(){let V=!1;const ge=new Ft;let xe=null;const Ie=new Ft(0,0,0,0);return{setMask:function(pe){xe!==pe&&!V&&(t.colorMask(pe,pe,pe,pe),xe=pe)},setLocked:function(pe){V=pe},setClear:function(pe,ue,Ue,Ye,St){St===!0&&(pe*=Ye,ue*=Ye,Ue*=Ye),ge.set(pe,ue,Ue,Ye),Ie.equals(ge)===!1&&(t.clearColor(pe,ue,Ue,Ye),Ie.copy(ge))},reset:function(){V=!1,xe=null,Ie.set(-1,0,0,0)}}}function i(){let V=!1,ge=!1,xe=null,Ie=null,pe=null;return{setReversed:function(ue){if(ge!==ue){const Ue=e.get("EXT_clip_control");ue?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ge=ue;const Ye=pe;pe=null,this.setClear(Ye)}},getReversed:function(){return ge},setTest:function(ue){ue?k(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(ue){xe!==ue&&!V&&(t.depthMask(ue),xe=ue)},setFunc:function(ue){if(ge&&(ue=OO[ue]),Ie!==ue){switch(ue){case vf:t.depthFunc(t.NEVER);break;case yf:t.depthFunc(t.ALWAYS);break;case xf:t.depthFunc(t.LESS);break;case js:t.depthFunc(t.LEQUAL);break;case Ef:t.depthFunc(t.EQUAL);break;case bf:t.depthFunc(t.GEQUAL);break;case Sf:t.depthFunc(t.GREATER);break;case Mf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ie=ue}},setLocked:function(ue){V=ue},setClear:function(ue){pe!==ue&&(ge&&(ue=1-ue),t.clearDepth(ue),pe=ue)},reset:function(){V=!1,xe=null,Ie=null,pe=null,ge=!1}}}function r(){let V=!1,ge=null,xe=null,Ie=null,pe=null,ue=null,Ue=null,Ye=null,St=null;return{setTest:function(ft){V||(ft?k(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(ft){ge!==ft&&!V&&(t.stencilMask(ft),ge=ft)},setFunc:function(ft,Ei,oi){(xe!==ft||Ie!==Ei||pe!==oi)&&(t.stencilFunc(ft,Ei,oi),xe=ft,Ie=Ei,pe=oi)},setOp:function(ft,Ei,oi){(ue!==ft||Ue!==Ei||Ye!==oi)&&(t.stencilOp(ft,Ei,oi),ue=ft,Ue=Ei,Ye=oi)},setLocked:function(ft){V=ft},setClear:function(ft){St!==ft&&(t.clearStencil(ft),St=ft)},reset:function(){V=!1,ge=null,xe=null,Ie=null,pe=null,ue=null,Ue=null,Ye=null,St=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,E=null,y=null,v=null,S=null,w=null,A=new _t(0,0,0),I=0,M=!1,T=null,N=null,U=null,G=null,X=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,te=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(F)[1]),H=te>=1):F.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),H=te>=2);let ce=null,ve={};const Me=t.getParameter(t.SCISSOR_BOX),Ne=t.getParameter(t.VIEWPORT),Oe=new Ft().fromArray(Me),Ve=new Ft().fromArray(Ne);function je(V,ge,xe,Ie){const pe=new Uint8Array(4),ue=t.createTexture();t.bindTexture(V,ue),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<xe;Ue++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,Ie,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(ge+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return ue}const oe={};oe[t.TEXTURE_2D]=je(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=je(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=je(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=je(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(t.DEPTH_TEST),o.setFunc(js),ee(!1),$(Lm),k(t.CULL_FACE),O(_r);function k(V){u[V]!==!0&&(t.enable(V),u[V]=!0)}function se(V){u[V]!==!1&&(t.disable(V),u[V]=!1)}function ae(V,ge){return f[V]!==ge?(t.bindFramebuffer(V,ge),f[V]=ge,V===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ge),V===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function le(V,ge){let xe=h,Ie=!1;if(V){xe=d.get(ge),xe===void 0&&(xe=[],d.set(ge,xe));const pe=V.textures;if(xe.length!==pe.length||xe[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Ue=pe.length;ue<Ue;ue++)xe[ue]=t.COLOR_ATTACHMENT0+ue;xe.length=pe.length,Ie=!0}}else xe[0]!==t.BACK&&(xe[0]=t.BACK,Ie=!0);Ie&&t.drawBuffers(xe)}function ye(V){return g!==V?(t.useProgram(V),g=V,!0):!1}const ze={[Vr]:t.FUNC_ADD,[XP]:t.FUNC_SUBTRACT,[$P]:t.FUNC_REVERSE_SUBTRACT};ze[jP]=t.MIN,ze[qP]=t.MAX;const b={[YP]:t.ZERO,[KP]:t.ONE,[JP]:t.SRC_COLOR,[gf]:t.SRC_ALPHA,[iL]:t.SRC_ALPHA_SATURATE,[tL]:t.DST_COLOR,[QP]:t.DST_ALPHA,[ZP]:t.ONE_MINUS_SRC_COLOR,[_f]:t.ONE_MINUS_SRC_ALPHA,[nL]:t.ONE_MINUS_DST_COLOR,[eL]:t.ONE_MINUS_DST_ALPHA,[rL]:t.CONSTANT_COLOR,[sL]:t.ONE_MINUS_CONSTANT_COLOR,[oL]:t.CONSTANT_ALPHA,[aL]:t.ONE_MINUS_CONSTANT_ALPHA};function O(V,ge,xe,Ie,pe,ue,Ue,Ye,St,ft){if(V===_r){_===!0&&(se(t.BLEND),_=!1);return}if(_===!1&&(k(t.BLEND),_=!0),V!==WP){if(V!==m||ft!==M){if((p!==Vr||v!==Vr)&&(t.blendEquation(t.FUNC_ADD),p=Vr,v=Vr),ft)switch(V){case Bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Im:t.blendFunc(t.ONE,t.ONE);break;case Dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Nm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Im:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Dm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}E=null,y=null,S=null,w=null,A.set(0,0,0),I=0,m=V,M=ft}return}pe=pe||ge,ue=ue||xe,Ue=Ue||Ie,(ge!==p||pe!==v)&&(t.blendEquationSeparate(ze[ge],ze[pe]),p=ge,v=pe),(xe!==E||Ie!==y||ue!==S||Ue!==w)&&(t.blendFuncSeparate(b[xe],b[Ie],b[ue],b[Ue]),E=xe,y=Ie,S=ue,w=Ue),(Ye.equals(A)===!1||St!==I)&&(t.blendColor(Ye.r,Ye.g,Ye.b,St),A.copy(Ye),I=St),m=V,M=!1}function z(V,ge){V.side===ki?se(t.CULL_FACE):k(t.CULL_FACE);let xe=V.side===Sn;ge&&(xe=!xe),ee(xe),V.blending===Bs&&V.transparent===!1?O(_r):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const Ie=V.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),L(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?k(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(V){T!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),T=V)}function $(V){V!==zP?(k(t.CULL_FACE),V!==N&&(V===Lm?t.cullFace(t.BACK):V===VP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),N=V}function C(V){V!==U&&(H&&t.lineWidth(V),U=V)}function L(V,ge,xe){V?(k(t.POLYGON_OFFSET_FILL),(G!==ge||X!==xe)&&(t.polygonOffset(ge,xe),G=ge,X=xe)):se(t.POLYGON_OFFSET_FILL)}function B(V){V?k(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function K(V){V===void 0&&(V=t.TEXTURE0+Y-1),ce!==V&&(t.activeTexture(V),ce=V)}function ie(V,ge,xe){xe===void 0&&(ce===null?xe=t.TEXTURE0+Y-1:xe=ce);let Ie=ve[xe];Ie===void 0&&(Ie={type:void 0,texture:void 0},ve[xe]=Ie),(Ie.type!==V||Ie.texture!==ge)&&(ce!==xe&&(t.activeTexture(xe),ce=xe),t.bindTexture(V,ge||oe[V]),Ie.type=V,Ie.texture=ge)}function R(){const V=ve[ce];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function D(){try{t.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function W(){try{t.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{t.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{t.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{t.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{t.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{t.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{t.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(V){Oe.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),Oe.copy(V))}function ke(V){Ve.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),Ve.copy(V))}function we(V,ge){let xe=c.get(ge);xe===void 0&&(xe=new WeakMap,c.set(ge,xe));let Ie=xe.get(V);Ie===void 0&&(Ie=t.getUniformBlockIndex(ge,V.name),xe.set(V,Ie))}function _e(V,ge){const Ie=c.get(ge).get(V);l.get(ge)!==Ie&&(t.uniformBlockBinding(ge,Ie,V.__bindingPointIndex),l.set(ge,Ie))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ce=null,ve={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,E=null,y=null,v=null,S=null,w=null,A=new _t(0,0,0),I=0,M=!1,T=null,N=null,U=null,G=null,X=null,Oe.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:k,disable:se,bindFramebuffer:ae,drawBuffers:le,useProgram:ye,setBlending:O,setMaterial:z,setFlipSided:ee,setCullFace:$,setLineWidth:C,setPolygonOffset:L,setScissorTest:B,activeTexture:K,bindTexture:ie,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:D,texImage2D:Ae,texImage3D:de,updateUBOMapping:we,uniformBlockBinding:_e,texStorage2D:fe,texStorage3D:Ee,texSubImage2D:W,texSubImage3D:Q,compressedTexSubImage2D:Z,compressedTexSubImage3D:he,scissor:be,viewport:ke,reset:qe}}function kO(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return h?new OffscreenCanvas(R,x):Bl("canvas")}function _(R,x,D){let W=1;const Q=ie(R);if((Q.width>D||Q.height>D)&&(W=D/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(W*Q.width),he=Math.floor(W*Q.height);f===void 0&&(f=g(Z,he));const fe=x?g(Z,he):f;return fe.width=Z,fe.height=he,fe.getContext("2d").drawImage(R,0,0,Z,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+he+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){t.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(R,x,D,W,Q=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=x;if(x===t.RED&&(D===t.FLOAT&&(Z=t.R32F),D===t.HALF_FLOAT&&(Z=t.R16F),D===t.UNSIGNED_BYTE&&(Z=t.R8)),x===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(Z=t.R8UI),D===t.UNSIGNED_SHORT&&(Z=t.R16UI),D===t.UNSIGNED_INT&&(Z=t.R32UI),D===t.BYTE&&(Z=t.R8I),D===t.SHORT&&(Z=t.R16I),D===t.INT&&(Z=t.R32I)),x===t.RG&&(D===t.FLOAT&&(Z=t.RG32F),D===t.HALF_FLOAT&&(Z=t.RG16F),D===t.UNSIGNED_BYTE&&(Z=t.RG8)),x===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(Z=t.RG8UI),D===t.UNSIGNED_SHORT&&(Z=t.RG16UI),D===t.UNSIGNED_INT&&(Z=t.RG32UI),D===t.BYTE&&(Z=t.RG8I),D===t.SHORT&&(Z=t.RG16I),D===t.INT&&(Z=t.RG32I)),x===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),D===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),D===t.UNSIGNED_INT&&(Z=t.RGB32UI),D===t.BYTE&&(Z=t.RGB8I),D===t.SHORT&&(Z=t.RGB16I),D===t.INT&&(Z=t.RGB32I)),x===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),D===t.UNSIGNED_INT&&(Z=t.RGBA32UI),D===t.BYTE&&(Z=t.RGBA8I),D===t.SHORT&&(Z=t.RGBA16I),D===t.INT&&(Z=t.RGBA32I)),x===t.RGB&&(D===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),x===t.RGBA){const he=Q?Fl:ot.getTransfer(W);D===t.FLOAT&&(Z=t.RGBA32F),D===t.HALF_FLOAT&&(Z=t.RGBA16F),D===t.UNSIGNED_BYTE&&(Z=he===yt?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(R,x){let D;return R?x===null||x===es||x===Xo?D=t.DEPTH24_STENCIL8:x===Gi?D=t.DEPTH32F_STENCIL8:x===Wo&&(D=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===es||x===Xo?D=t.DEPTH_COMPONENT24:x===Gi?D=t.DEPTH_COMPONENT32F:x===Wo&&(D=t.DEPTH_COMPONENT16),D}function S(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ei&&R.minFilter!==di?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function w(R){const x=R.target;x.removeEventListener("dispose",w),I(x),x.isVideoTexture&&u.delete(x)}function A(R){const x=R.target;x.removeEventListener("dispose",A),T(x)}function I(R){const x=i.get(R);if(x.__webglInit===void 0)return;const D=R.source,W=d.get(D);if(W){const Q=W[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(R),Object.keys(W).length===0&&d.delete(D)}i.remove(R)}function M(R){const x=i.get(R);t.deleteTexture(x.__webglTexture);const D=R.source,W=d.get(D);delete W[x.__cacheKey],o.memory.textures--}function T(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let Q=0;Q<x.__webglFramebuffer[W].length;Q++)t.deleteFramebuffer(x.__webglFramebuffer[W][Q]);else t.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)t.deleteFramebuffer(x.__webglFramebuffer[W]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const D=R.textures;for(let W=0,Q=D.length;W<Q;W++){const Z=i.get(D[W]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(D[W])}i.remove(R)}let N=0;function U(){N=0}function G(){const R=N;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function X(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function Y(R,x){const D=i.get(R);if(R.isVideoTexture&&B(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&D.__version!==R.version){const W=R.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(D,R,x);return}}else R.isExternalTexture&&(D.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+x)}function H(R,x){const D=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){oe(D,R,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+x)}function te(R,x){const D=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){oe(D,R,x);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+x)}function F(R,x){const D=i.get(R);if(R.version>0&&D.__version!==R.version){k(D,R,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+x)}const ce={[Af]:t.REPEAT,[Xr]:t.CLAMP_TO_EDGE,[Rf]:t.MIRRORED_REPEAT},ve={[ei]:t.NEAREST,[_L]:t.NEAREST_MIPMAP_NEAREST,[Ua]:t.NEAREST_MIPMAP_LINEAR,[di]:t.LINEAR,[jc]:t.LINEAR_MIPMAP_NEAREST,[$r]:t.LINEAR_MIPMAP_LINEAR},Me={[bL]:t.NEVER,[RL]:t.ALWAYS,[SL]:t.LESS,[uy]:t.LEQUAL,[ML]:t.EQUAL,[AL]:t.GEQUAL,[TL]:t.GREATER,[wL]:t.NOTEQUAL};function Ne(R,x){if(x.type===Gi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===di||x.magFilter===jc||x.magFilter===Ua||x.magFilter===$r||x.minFilter===di||x.minFilter===jc||x.minFilter===Ua||x.minFilter===$r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ce[x.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ce[x.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ce[x.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ve[x.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ei||x.minFilter!==Ua&&x.minFilter!==$r||x.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Oe(R,x){let D=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",w));const W=x.source;let Q=d.get(W);Q===void 0&&(Q={},d.set(W,Q));const Z=X(x);if(Z!==R.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Q[Z].usedTimes++;const he=Q[R.__cacheKey];he!==void 0&&(Q[R.__cacheKey].usedTimes--,he.usedTimes===0&&M(x)),R.__cacheKey=Z,R.__webglTexture=Q[Z].texture}return D}function Ve(R,x,D){return Math.floor(Math.floor(R/D)/x)}function je(R,x,D,W){const Z=R.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,D,W,x.data);else{Z.sort((de,be)=>de.start-be.start);let he=0;for(let de=1;de<Z.length;de++){const be=Z[he],ke=Z[de],we=be.start+be.count,_e=Ve(ke.start,x.width,4),qe=Ve(be.start,x.width,4);ke.start<=we+1&&_e===qe&&Ve(ke.start+ke.count-1,x.width,4)===_e?be.count=Math.max(be.count,ke.start+ke.count-be.start):(++he,Z[he]=ke)}Z.length=he+1;const fe=t.getParameter(t.UNPACK_ROW_LENGTH),Ee=t.getParameter(t.UNPACK_SKIP_PIXELS),Ae=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let de=0,be=Z.length;de<be;de++){const ke=Z[de],we=Math.floor(ke.start/4),_e=Math.ceil(ke.count/4),qe=we%x.width,V=Math.floor(we/x.width),ge=_e,xe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,V),n.texSubImage2D(t.TEXTURE_2D,0,qe,V,ge,xe,D,W,x.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,fe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ae)}}function oe(R,x,D){let W=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=t.TEXTURE_3D);const Q=Oe(R,x),Z=x.source;n.bindTexture(W,R.__webglTexture,t.TEXTURE0+D);const he=i.get(Z);if(Z.version!==he.__version||Q===!0){n.activeTexture(t.TEXTURE0+D);const fe=ot.getPrimaries(ot.workingColorSpace),Ee=x.colorSpace===fr?null:ot.getPrimaries(x.colorSpace),Ae=x.colorSpace===fr||fe===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let de=_(x.image,!1,r.maxTextureSize);de=K(x,de);const be=s.convert(x.format,x.colorSpace),ke=s.convert(x.type);let we=y(x.internalFormat,be,ke,x.colorSpace,x.isVideoTexture);Ne(W,x);let _e;const qe=x.mipmaps,V=x.isVideoTexture!==!0,ge=he.__version===void 0||Q===!0,xe=Z.dataReady,Ie=S(x,de);if(x.isDepthTexture)we=v(x.format===jo,x.type),ge&&(V?n.texStorage2D(t.TEXTURE_2D,1,we,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,we,de.width,de.height,0,be,ke,null));else if(x.isDataTexture)if(qe.length>0){V&&ge&&n.texStorage2D(t.TEXTURE_2D,Ie,we,qe[0].width,qe[0].height);for(let pe=0,ue=qe.length;pe<ue;pe++)_e=qe[pe],V?xe&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,_e.width,_e.height,be,ke,_e.data):n.texImage2D(t.TEXTURE_2D,pe,we,_e.width,_e.height,0,be,ke,_e.data);x.generateMipmaps=!1}else V?(ge&&n.texStorage2D(t.TEXTURE_2D,Ie,we,de.width,de.height),xe&&je(x,de,be,ke)):n.texImage2D(t.TEXTURE_2D,0,we,de.width,de.height,0,be,ke,de.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){V&&ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,we,qe[0].width,qe[0].height,de.depth);for(let pe=0,ue=qe.length;pe<ue;pe++)if(_e=qe[pe],x.format!==Jn)if(be!==null)if(V){if(xe)if(x.layerUpdates.size>0){const Ue=ig(_e.width,_e.height,x.format,x.type);for(const Ye of x.layerUpdates){const St=_e.data.subarray(Ye*Ue/_e.data.BYTES_PER_ELEMENT,(Ye+1)*Ue/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,Ye,_e.width,_e.height,1,be,St)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,_e.width,_e.height,de.depth,be,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,pe,we,_e.width,_e.height,de.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?xe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,_e.width,_e.height,de.depth,be,ke,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,pe,we,_e.width,_e.height,de.depth,0,be,ke,_e.data)}else{V&&ge&&n.texStorage2D(t.TEXTURE_2D,Ie,we,qe[0].width,qe[0].height);for(let pe=0,ue=qe.length;pe<ue;pe++)_e=qe[pe],x.format!==Jn?be!==null?V?xe&&n.compressedTexSubImage2D(t.TEXTURE_2D,pe,0,0,_e.width,_e.height,be,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,pe,we,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?xe&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,_e.width,_e.height,be,ke,_e.data):n.texImage2D(t.TEXTURE_2D,pe,we,_e.width,_e.height,0,be,ke,_e.data)}else if(x.isDataArrayTexture)if(V){if(ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,we,de.width,de.height,de.depth),xe)if(x.layerUpdates.size>0){const pe=ig(de.width,de.height,x.format,x.type);for(const ue of x.layerUpdates){const Ue=de.data.subarray(ue*pe/de.data.BYTES_PER_ELEMENT,(ue+1)*pe/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,de.width,de.height,1,be,ke,Ue)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,be,ke,de.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,de.width,de.height,de.depth,0,be,ke,de.data);else if(x.isData3DTexture)V?(ge&&n.texStorage3D(t.TEXTURE_3D,Ie,we,de.width,de.height,de.depth),xe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,be,ke,de.data)):n.texImage3D(t.TEXTURE_3D,0,we,de.width,de.height,de.depth,0,be,ke,de.data);else if(x.isFramebufferTexture){if(ge)if(V)n.texStorage2D(t.TEXTURE_2D,Ie,we,de.width,de.height);else{let pe=de.width,ue=de.height;for(let Ue=0;Ue<Ie;Ue++)n.texImage2D(t.TEXTURE_2D,Ue,we,pe,ue,0,be,ke,null),pe>>=1,ue>>=1}}else if(qe.length>0){if(V&&ge){const pe=ie(qe[0]);n.texStorage2D(t.TEXTURE_2D,Ie,we,pe.width,pe.height)}for(let pe=0,ue=qe.length;pe<ue;pe++)_e=qe[pe],V?xe&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,be,ke,_e):n.texImage2D(t.TEXTURE_2D,pe,we,be,ke,_e);x.generateMipmaps=!1}else if(V){if(ge){const pe=ie(de);n.texStorage2D(t.TEXTURE_2D,Ie,we,pe.width,pe.height)}xe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,be,ke,de)}else n.texImage2D(t.TEXTURE_2D,0,we,be,ke,de);m(x)&&p(W),he.__version=Z.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function k(R,x,D){if(x.image.length!==6)return;const W=Oe(R,x),Q=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+D);const Z=i.get(Q);if(Q.version!==Z.__version||W===!0){n.activeTexture(t.TEXTURE0+D);const he=ot.getPrimaries(ot.workingColorSpace),fe=x.colorSpace===fr?null:ot.getPrimaries(x.colorSpace),Ee=x.colorSpace===fr||he===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ae=x.isCompressedTexture||x.image[0].isCompressedTexture,de=x.image[0]&&x.image[0].isDataTexture,be=[];for(let ue=0;ue<6;ue++)!Ae&&!de?be[ue]=_(x.image[ue],!0,r.maxCubemapSize):be[ue]=de?x.image[ue].image:x.image[ue],be[ue]=K(x,be[ue]);const ke=be[0],we=s.convert(x.format,x.colorSpace),_e=s.convert(x.type),qe=y(x.internalFormat,we,_e,x.colorSpace),V=x.isVideoTexture!==!0,ge=Z.__version===void 0||W===!0,xe=Q.dataReady;let Ie=S(x,ke);Ne(t.TEXTURE_CUBE_MAP,x);let pe;if(Ae){V&&ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,qe,ke.width,ke.height);for(let ue=0;ue<6;ue++){pe=be[ue].mipmaps;for(let Ue=0;Ue<pe.length;Ue++){const Ye=pe[Ue];x.format!==Jn?we!==null?V?xe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue,0,0,Ye.width,Ye.height,we,Ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue,qe,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue,0,0,Ye.width,Ye.height,we,_e,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue,qe,Ye.width,Ye.height,0,we,_e,Ye.data)}}}else{if(pe=x.mipmaps,V&&ge){pe.length>0&&Ie++;const ue=ie(be[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,qe,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(de){V?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,be[ue].width,be[ue].height,we,_e,be[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,qe,be[ue].width,be[ue].height,0,we,_e,be[ue].data);for(let Ue=0;Ue<pe.length;Ue++){const St=pe[Ue].image[ue].image;V?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue+1,0,0,St.width,St.height,we,_e,St.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue+1,qe,St.width,St.height,0,we,_e,St.data)}}else{V?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,we,_e,be[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,qe,we,_e,be[ue]);for(let Ue=0;Ue<pe.length;Ue++){const Ye=pe[Ue];V?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue+1,0,0,we,_e,Ye.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue+1,qe,we,_e,Ye.image[ue])}}}m(x)&&p(t.TEXTURE_CUBE_MAP),Z.__version=Q.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function se(R,x,D,W,Q,Z){const he=s.convert(D.format,D.colorSpace),fe=s.convert(D.type),Ee=y(D.internalFormat,he,fe,D.colorSpace),Ae=i.get(x),de=i.get(D);if(de.__renderTarget=x,!Ae.__hasExternalTextures){const be=Math.max(1,x.width>>Z),ke=Math.max(1,x.height>>Z);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,Z,Ee,be,ke,x.depth,0,he,fe,null):n.texImage2D(Q,Z,Ee,be,ke,0,he,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),L(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,Q,de.__webglTexture,0,C(x)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,Q,de.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(R,x,D){if(t.bindRenderbuffer(t.RENDERBUFFER,R),x.depthBuffer){const W=x.depthTexture,Q=W&&W.isDepthTexture?W.type:null,Z=v(x.stencilBuffer,Q),he=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=C(x);L(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,Z,x.width,x.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,Z,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Z,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,R)}else{const W=x.textures;for(let Q=0;Q<W.length;Q++){const Z=W[Q],he=s.convert(Z.format,Z.colorSpace),fe=s.convert(Z.type),Ee=y(Z.internalFormat,he,fe,Z.colorSpace),Ae=C(x);D&&L(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,Ee,x.width,x.height):L(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,Ee,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(x.depthTexture);W.__renderTarget=x,(!W.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const Q=W.__webglTexture,Z=C(x);if(x.depthTexture.format===$o)L(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(x.depthTexture.format===jo)L(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ye(R){const x=i.get(R),D=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const W=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=W}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");const W=R.texture.mipmaps;W&&W.length>0?le(x.__webglFramebuffer[0],R):le(x.__webglFramebuffer,R)}else if(D){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=t.createRenderbuffer(),ae(x.__webglDepthbuffer[W],R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,Z)}}else{const W=R.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),ae(x.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(R,x,D){const W=i.get(R);x!==void 0&&se(W.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&ye(R)}function b(R){const x=R.texture,D=i.get(R),W=i.get(x);R.addEventListener("dispose",A);const Q=R.textures,Z=R.isWebGLCubeRenderTarget===!0,he=Q.length>1;if(he||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=x.version,o.memory.textures++),Z){D.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[fe]=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)D.__webglFramebuffer[fe][Ee]=t.createFramebuffer()}else D.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)D.__webglFramebuffer[fe]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(he)for(let fe=0,Ee=Q.length;fe<Ee;fe++){const Ae=i.get(Q[fe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&L(R)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){const Ee=Q[fe];D.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[fe]);const Ae=s.convert(Ee.format,Ee.colorSpace),de=s.convert(Ee.type),be=y(Ee.internalFormat,Ae,de,Ee.colorSpace,R.isXRRenderTarget===!0),ke=C(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,be,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,D.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(D.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)se(D.__webglFramebuffer[fe][Ee],R,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee);else se(D.__webglFramebuffer[fe],R,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){for(let fe=0,Ee=Q.length;fe<Ee;fe++){const Ae=Q[fe],de=i.get(Ae);let be=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(be=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(be,de.__webglTexture),Ne(be,Ae),se(D.__webglFramebuffer,R,Ae,t.COLOR_ATTACHMENT0+fe,be,0),m(Ae)&&p(be)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,W.__webglTexture),Ne(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)se(D.__webglFramebuffer[Ee],R,x,t.COLOR_ATTACHMENT0,fe,Ee);else se(D.__webglFramebuffer,R,x,t.COLOR_ATTACHMENT0,fe,0);m(x)&&p(fe),n.unbindTexture()}R.depthBuffer&&ye(R)}function O(R){const x=R.textures;for(let D=0,W=x.length;D<W;D++){const Q=x[D];if(m(Q)){const Z=E(R),he=i.get(Q).__webglTexture;n.bindTexture(Z,he),p(Z),n.unbindTexture()}}}const z=[],ee=[];function $(R){if(R.samples>0){if(L(R)===!1){const x=R.textures,D=R.width,W=R.height;let Q=t.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(R),fe=x.length>1;if(fe)for(let Ae=0;Ae<x.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const Ee=R.texture.mipmaps;Ee&&Ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ae=0;Ae<x.length;Ae++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ae]);const de=i.get(x[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,de,0)}t.blitFramebuffer(0,0,D,W,0,0,D,W,Q,t.NEAREST),l===!0&&(z.length=0,ee.length=0,z.push(t.COLOR_ATTACHMENT0+Ae),R.depthBuffer&&R.resolveDepthBuffer===!1&&(z.push(Z),ee.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ee)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,z))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Ae=0;Ae<x.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ae]);const de=i.get(x[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,de,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function C(R){return Math.min(r.maxSamples,R.samples)}function L(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function B(R){const x=o.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function K(R,x){const D=R.colorSpace,W=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||D!==Ks&&D!==fr&&(ot.getTransfer(D)===yt?(W!==Jn||Q!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}function ie(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=te,this.setTextureCube=F,this.rebindTextures=ze,this.setupRenderTarget=b,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=se,this.useMultisampledRTT=L}function BO(t,e){function n(i,r=fr){let s;const o=ot.getTransfer(r);if(i===Yi)return t.UNSIGNED_BYTE;if(i===Kd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ry)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===sy)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ny)return t.BYTE;if(i===iy)return t.SHORT;if(i===Wo)return t.UNSIGNED_SHORT;if(i===Yd)return t.INT;if(i===es)return t.UNSIGNED_INT;if(i===Gi)return t.FLOAT;if(i===sa)return t.HALF_FLOAT;if(i===oy)return t.ALPHA;if(i===ay)return t.RGB;if(i===Jn)return t.RGBA;if(i===$o)return t.DEPTH_COMPONENT;if(i===jo)return t.DEPTH_STENCIL;if(i===ly)return t.RED;if(i===Zd)return t.RED_INTEGER;if(i===cy)return t.RG;if(i===Qd)return t.RG_INTEGER;if(i===eh)return t.RGBA_INTEGER;if(i===ul||i===fl||i===dl||i===hl)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ul)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ul)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cf||i===Pf||i===Lf||i===If)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===If)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Df||i===Nf||i===Uf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Df||i===Nf)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Uf)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Of||i===Ff||i===kf||i===Bf||i===Hf||i===zf||i===Vf||i===Gf||i===Wf||i===Xf||i===$f||i===jf||i===qf||i===Yf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Of)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ff)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kf)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bf)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hf)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zf)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vf)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gf)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wf)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xf)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$f)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jf)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qf)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yf)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kf||i===Jf||i===Zf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Kf)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qf||i===ed||i===td||i===nd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ed)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===td)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const HO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zO=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VO{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Sy(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Er({vertexShader:HO,fragmentShader:zO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pi(new fc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GO extends io{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new VO,p={},E=n.getContextAttributes();let y=null,v=null;const S=[],w=[],A=new ut;let I=null;const M=new Bn;M.viewport=new Ft;const T=new Bn;T.viewport=new Ft;const N=[M,T],U=new uI;let G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let k=S[oe];return k===void 0&&(k=new gu,S[oe]=k),k.getTargetRaySpace()},this.getControllerGrip=function(oe){let k=S[oe];return k===void 0&&(k=new gu,S[oe]=k),k.getGripSpace()},this.getHand=function(oe){let k=S[oe];return k===void 0&&(k=new gu,S[oe]=k),k.getHandSpace()};function Y(oe){const k=w.indexOf(oe.inputSource);if(k===-1)return;const se=S[k];se!==void 0&&(se.update(oe.inputSource,oe.frame,c||o),se.dispatchEvent({type:oe.type,data:oe.inputSource}))}function H(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",te);for(let oe=0;oe<S.length;oe++){const k=w[oe];k!==null&&(w[oe]=null,S[oe].disconnect(k))}G=null,X=null,m.reset();for(const oe in p)delete p[oe];e.setRenderTarget(y),h=null,d=null,f=null,r=null,v=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",H),r.addEventListener("inputsourceschange",te),E.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,ae=null,le=null;E.depth&&(le=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=E.stencil?jo:$o,ae=E.stencil?Xo:es);const ye={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(ye),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ts(d.textureWidth,d.textureHeight,{format:Jn,type:Yi,depthTexture:new by(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new ts(h.framebufferWidth,h.framebufferHeight,{format:Jn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(oe){for(let k=0;k<oe.removed.length;k++){const se=oe.removed[k],ae=w.indexOf(se);ae>=0&&(w[ae]=null,S[ae].disconnect(se))}for(let k=0;k<oe.added.length;k++){const se=oe.added[k];let ae=w.indexOf(se);if(ae===-1){for(let ye=0;ye<S.length;ye++)if(ye>=w.length){w.push(se),ae=ye;break}else if(w[ye]===null){w[ye]=se,ae=ye;break}if(ae===-1)break}const le=S[ae];le&&le.connect(se)}}const F=new J,ce=new J;function ve(oe,k,se){F.setFromMatrixPosition(k.matrixWorld),ce.setFromMatrixPosition(se.matrixWorld);const ae=F.distanceTo(ce),le=k.projectionMatrix.elements,ye=se.projectionMatrix.elements,ze=le[14]/(le[10]-1),b=le[14]/(le[10]+1),O=(le[9]+1)/le[5],z=(le[9]-1)/le[5],ee=(le[8]-1)/le[0],$=(ye[8]+1)/ye[0],C=ze*ee,L=ze*$,B=ae/(-ee+$),K=B*-ee;if(k.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(K),oe.translateZ(B),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),le[10]===-1)oe.projectionMatrix.copy(k.projectionMatrix),oe.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const ie=ze+B,R=b+B,x=C-K,D=L+(ae-K),W=O*b/R*ie,Q=z*b/R*ie;oe.projectionMatrix.makePerspective(x,D,W,Q,ie,R),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Me(oe,k){k===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(k.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let k=oe.near,se=oe.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(se=m.depthFar)),U.near=T.near=M.near=k,U.far=T.far=M.far=se,(G!==U.near||X!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),G=U.near,X=U.far),U.layers.mask=oe.layers.mask|6,M.layers.mask=U.layers.mask&3,T.layers.mask=U.layers.mask&5;const ae=oe.parent,le=U.cameras;Me(U,ae);for(let ye=0;ye<le.length;ye++)Me(le[ye],ae);le.length===2?ve(U,M,T):U.projectionMatrix.copy(M.projectionMatrix),Ne(oe,U,ae)};function Ne(oe,k,se){se===null?oe.matrix.copy(k.matrixWorld):(oe.matrix.copy(se.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(k.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(k.projectionMatrix),oe.projectionMatrixInverse.copy(k.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=id*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(oe){l=oe,d!==null&&(d.fixedFoveation=oe),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=oe)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(oe){return p[oe]};let Oe=null;function Ve(oe,k){if(u=k.getViewerPose(c||o),g=k,u!==null){const se=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let ae=!1;se.length!==U.cameras.length&&(U.cameras.length=0,ae=!0);for(let b=0;b<se.length;b++){const O=se[b];let z=null;if(h!==null)z=h.getViewport(O);else{const $=f.getViewSubImage(d,O);z=$.viewport,b===0&&(e.setRenderTargetTextures(v,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(v))}let ee=N[b];ee===void 0&&(ee=new Bn,ee.layers.enable(b),ee.viewport=new Ft,N[b]=ee),ee.matrix.fromArray(O.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(O.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(z.x,z.y,z.width,z.height),b===0&&(U.matrix.copy(ee.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ae===!0&&U.cameras.push(ee)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const b=f.getDepthInformation(se[0]);b&&b.isValid&&b.texture&&m.init(b,r.renderState)}if(le&&le.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let b=0;b<se.length;b++){const O=se[b].camera;if(O){let z=p[O];z||(z=new Sy,p[O]=z);const ee=f.getCameraImage(O);z.sourceTexture=ee}}}}for(let se=0;se<S.length;se++){const ae=w[se],le=S[se];ae!==null&&le!==void 0&&le.update(ae,k,c||o)}Oe&&Oe(oe,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),g=null}const je=new Cy;je.setAnimationLoop(Ve),this.setAnimationLoop=function(oe){Oe=oe},this.dispose=function(){}}}const Fr=new Ki,WO=new Wt;function XO(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,vy(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),y=E.envMap,v=E.envMapRotation;y&&(m.envMap.value=y,Fr.copy(v),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),m.envMapRotation.value.setFromMatrix4(WO.makeRotationFromEuler(Fr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=y*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $O(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const v=y.program;i.uniformBlockBinding(E,v)}function c(E,y){let v=r[E.id];v===void 0&&(g(E),v=u(E),r[E.id]=v,E.addEventListener("dispose",m));const S=y.program;i.updateUBOMapping(E,S);const w=e.render.frame;s[E.id]!==w&&(d(E),s[E.id]=w)}function u(E){const y=f();E.__bindingPointIndex=y;const v=t.createBuffer(),S=E.__size,w=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,S,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,v),v}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=r[E.id],v=E.uniforms,S=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let w=0,A=v.length;w<A;w++){const I=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,T=I.length;M<T;M++){const N=I[M];if(h(N,w,M,S)===!0){const U=N.__offset,G=Array.isArray(N.value)?N.value:[N.value];let X=0;for(let Y=0;Y<G.length;Y++){const H=G[Y],te=_(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,U+X,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,X),X+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(E,y,v,S){const w=E.value,A=y+"_"+v;if(S[A]===void 0)return typeof w=="number"||typeof w=="boolean"?S[A]=w:S[A]=w.clone(),!0;{const I=S[A];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return S[A]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(E){const y=E.uniforms;let v=0;const S=16;for(let A=0,I=y.length;A<I;A++){const M=Array.isArray(y[A])?y[A]:[y[A]];for(let T=0,N=M.length;T<N;T++){const U=M[T],G=Array.isArray(U.value)?U.value:[U.value];for(let X=0,Y=G.length;X<Y;X++){const H=G[X],te=_(H),F=v%S,ce=F%te.boundary,ve=F+ce;v+=ce,ve!==0&&S-ve<te.storage&&(v+=S-ve),U.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=te.storage}}}const w=v%S;return w>0&&(v+=S-w),E.__size=v,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const E in r)t.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class jO{constructor(e={}){const{canvas:n=PL(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=kn;let w=0,A=0,I=null,M=-1,T=null;const N=new Ft,U=new Ft;let G=null;const X=new _t(0);let Y=0,H=n.width,te=n.height,F=1,ce=null,ve=null;const Me=new Ft(0,0,H,te),Ne=new Ft(0,0,H,te);let Oe=!1;const Ve=new Ey;let je=!1,oe=!1;const k=new Wt,se=new J,ae=new Ft,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function ze(){return I===null?F:1}let b=i;function O(P,j){return n.getContext(P,j)}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qd}`),n.addEventListener("webglcontextlost",xe,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",pe,!1),b===null){const j="webgl2";if(b=O(j,P),b===null)throw O(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let z,ee,$,C,L,B,K,ie,R,x,D,W,Q,Z,he,fe,Ee,Ae,de,be,ke,we,_e,qe;function V(){z=new iU(b),z.init(),we=new BO(b,z),ee=new KN(b,z,e,we),$=new FO(b,z),ee.reversedDepthBuffer&&d&&$.buffers.depth.setReversed(!0),C=new oU(b),L=new MO,B=new kO(b,z,$,L,ee,we,C),K=new ZN(v),ie=new nU(v),R=new dI(b),_e=new qN(b,R),x=new rU(b,R,C,_e),D=new lU(b,x,R,C),de=new aU(b,ee,B),fe=new JN(L),W=new SO(v,K,ie,z,ee,_e,fe),Q=new XO(v,L),Z=new wO,he=new IO(z),Ae=new jN(v,K,ie,$,D,h,l),Ee=new UO(v,D,ee),qe=new $O(b,C,ee,$),be=new YN(b,z,C),ke=new sU(b,z,C),C.programs=W.programs,v.capabilities=ee,v.extensions=z,v.properties=L,v.renderLists=Z,v.shadowMap=Ee,v.state=$,v.info=C}V();const ge=new GO(v,b);this.xr=ge,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const P=z.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=z.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(P){P!==void 0&&(F=P,this.setSize(H,te,!1))},this.getSize=function(P){return P.set(H,te)},this.setSize=function(P,j,ne=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=P,te=j,n.width=Math.floor(P*F),n.height=Math.floor(j*F),ne===!0&&(n.style.width=P+"px",n.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(H*F,te*F).floor()},this.setDrawingBufferSize=function(P,j,ne){H=P,te=j,F=ne,n.width=Math.floor(P*ne),n.height=Math.floor(j*ne),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(N)},this.getViewport=function(P){return P.copy(Me)},this.setViewport=function(P,j,ne,re){P.isVector4?Me.set(P.x,P.y,P.z,P.w):Me.set(P,j,ne,re),$.viewport(N.copy(Me).multiplyScalar(F).round())},this.getScissor=function(P){return P.copy(Ne)},this.setScissor=function(P,j,ne,re){P.isVector4?Ne.set(P.x,P.y,P.z,P.w):Ne.set(P,j,ne,re),$.scissor(U.copy(Ne).multiplyScalar(F).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(P){$.setScissorTest(Oe=P)},this.setOpaqueSort=function(P){ce=P},this.setTransparentSort=function(P){ve=P},this.getClearColor=function(P){return P.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(P=!0,j=!0,ne=!0){let re=0;if(P){let q=!1;if(I!==null){const me=I.texture.format;q=me===eh||me===Qd||me===Zd}if(q){const me=I.texture.type,Te=me===Yi||me===es||me===Wo||me===Xo||me===Kd||me===Jd,De=Ae.getClearColor(),Ce=Ae.getClearAlpha(),Ge=De.r,$e=De.g,Fe=De.b;Te?(g[0]=Ge,g[1]=$e,g[2]=Fe,g[3]=Ce,b.clearBufferuiv(b.COLOR,0,g)):(_[0]=Ge,_[1]=$e,_[2]=Fe,_[3]=Ce,b.clearBufferiv(b.COLOR,0,_))}else re|=b.COLOR_BUFFER_BIT}j&&(re|=b.DEPTH_BUFFER_BIT),ne&&(re|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),Ae.dispose(),Z.dispose(),he.dispose(),L.dispose(),K.dispose(),ie.dispose(),D.dispose(),_e.dispose(),qe.dispose(),W.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",oi),ge.removeEventListener("sessionend",sh),Tr.stop()};function xe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const P=C.autoReset,j=Ee.enabled,ne=Ee.autoUpdate,re=Ee.needsUpdate,q=Ee.type;V(),C.autoReset=P,Ee.enabled=j,Ee.autoUpdate=ne,Ee.needsUpdate=re,Ee.type=q}function pe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ue(P){const j=P.target;j.removeEventListener("dispose",ue),Ue(j)}function Ue(P){Ye(P),L.remove(P)}function Ye(P){const j=L.get(P).programs;j!==void 0&&(j.forEach(function(ne){W.releaseProgram(ne)}),P.isShaderMaterial&&W.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,ne,re,q,me){j===null&&(j=le);const Te=q.isMesh&&q.matrixWorld.determinant()<0,De=Ny(P,j,ne,re,q);$.setMaterial(re,Te);let Ce=ne.index,Ge=1;if(re.wireframe===!0){if(Ce=x.getWireframeAttribute(ne),Ce===void 0)return;Ge=2}const $e=ne.drawRange,Fe=ne.attributes.position;let tt=$e.start*Ge,vt=($e.start+$e.count)*Ge;me!==null&&(tt=Math.max(tt,me.start*Ge),vt=Math.min(vt,(me.start+me.count)*Ge)),Ce!==null?(tt=Math.max(tt,0),vt=Math.min(vt,Ce.count)):Fe!=null&&(tt=Math.max(tt,0),vt=Math.min(vt,Fe.count));const Dt=vt-tt;if(Dt<0||Dt===1/0)return;_e.setup(q,re,De,ne,Ce);let wt,xt=be;if(Ce!==null&&(wt=R.get(Ce),xt=ke,xt.setIndex(wt)),q.isMesh)re.wireframe===!0?($.setLineWidth(re.wireframeLinewidth*ze()),xt.setMode(b.LINES)):xt.setMode(b.TRIANGLES);else if(q.isLine){let Be=re.linewidth;Be===void 0&&(Be=1),$.setLineWidth(Be*ze()),q.isLineSegments?xt.setMode(b.LINES):q.isLineLoop?xt.setMode(b.LINE_LOOP):xt.setMode(b.LINE_STRIP)}else q.isPoints?xt.setMode(b.POINTS):q.isSprite&&xt.setMode(b.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)qo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))xt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Be=q._multiDrawStarts,Ct=q._multiDrawCounts,rt=q._multiDrawCount,An=Ce?R.get(Ce).bytesPerElement:1,ss=L.get(re).currentProgram.getUniforms();for(let Rn=0;Rn<rt;Rn++)ss.setValue(b,"_gl_DrawID",Rn),xt.render(Be[Rn]/An,Ct[Rn])}else if(q.isInstancedMesh)xt.renderInstances(tt,Dt,q.count);else if(ne.isInstancedBufferGeometry){const Be=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ct=Math.min(ne.instanceCount,Be);xt.renderInstances(tt,Dt,Ct)}else xt.render(tt,Dt)};function St(P,j,ne){P.transparent===!0&&P.side===ki&&P.forceSinglePass===!1?(P.side=Sn,P.needsUpdate=!0,ha(P,j,ne),P.side=xr,P.needsUpdate=!0,ha(P,j,ne),P.side=ki):ha(P,j,ne)}this.compile=function(P,j,ne=null){ne===null&&(ne=P),p=he.get(ne),p.init(j),y.push(p),ne.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),P!==ne&&P.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const re=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const me=q.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){const De=me[Te];St(De,ne,q),re.add(De)}else St(me,ne,q),re.add(me)}),p=y.pop(),re},this.compileAsync=function(P,j,ne=null){const re=this.compile(P,j,ne);return new Promise(q=>{function me(){if(re.forEach(function(Te){L.get(Te).currentProgram.isReady()&&re.delete(Te)}),re.size===0){q(P);return}setTimeout(me,10)}z.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ft=null;function Ei(P){ft&&ft(P)}function oi(){Tr.stop()}function sh(){Tr.start()}const Tr=new Cy;Tr.setAnimationLoop(Ei),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(P){ft=P,ge.setAnimationLoop(P),P===null?Tr.stop():Tr.start()},ge.addEventListener("sessionstart",oi),ge.addEventListener("sessionend",sh),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(j),j=ge.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,j,I),p=he.get(P,y.length),p.init(j),y.push(p),k.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ve.setFromProjectionMatrix(k,hi,j.reversedDepth),oe=this.localClippingEnabled,je=fe.init(this.clippingPlanes,oe),m=Z.get(P,E.length),m.init(),E.push(m),ge.enabled===!0&&ge.isPresenting===!0){const me=v.xr.getDepthSensingMesh();me!==null&&hc(me,j,-1/0,v.sortObjects)}hc(P,j,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ce,ve),ye=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,ye&&Ae.addToRenderList(m,P),this.info.render.frame++,je===!0&&fe.beginShadows();const ne=p.state.shadowsArray;Ee.render(ne,P,j),je===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=m.opaque,q=m.transmissive;if(p.setupLights(),j.isArrayCamera){const me=j.cameras;if(q.length>0)for(let Te=0,De=me.length;Te<De;Te++){const Ce=me[Te];ah(re,q,P,Ce)}ye&&Ae.render(P);for(let Te=0,De=me.length;Te<De;Te++){const Ce=me[Te];oh(m,P,Ce,Ce.viewport)}}else q.length>0&&ah(re,q,P,j),ye&&Ae.render(P),oh(m,P,j);I!==null&&A===0&&(B.updateMultisampleRenderTarget(I),B.updateRenderTargetMipmap(I)),P.isScene===!0&&P.onAfterRender(v,P,j),_e.resetDefaultState(),M=-1,T=null,y.pop(),y.length>0?(p=y[y.length-1],je===!0&&fe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function hc(P,j,ne,re){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)ne=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ve.intersectsSprite(P)){re&&ae.setFromMatrixPosition(P.matrixWorld).applyMatrix4(k);const Te=D.update(P),De=P.material;De.visible&&m.push(P,Te,De,ne,ae.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ve.intersectsObject(P))){const Te=D.update(P),De=P.material;if(re&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ae.copy(P.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ae.copy(Te.boundingSphere.center)),ae.applyMatrix4(P.matrixWorld).applyMatrix4(k)),Array.isArray(De)){const Ce=Te.groups;for(let Ge=0,$e=Ce.length;Ge<$e;Ge++){const Fe=Ce[Ge],tt=De[Fe.materialIndex];tt&&tt.visible&&m.push(P,Te,tt,ne,ae.z,Fe)}}else De.visible&&m.push(P,Te,De,ne,ae.z,null)}}const me=P.children;for(let Te=0,De=me.length;Te<De;Te++)hc(me[Te],j,ne,re)}function oh(P,j,ne,re){const q=P.opaque,me=P.transmissive,Te=P.transparent;p.setupLightsView(ne),je===!0&&fe.setGlobalState(v.clippingPlanes,ne),re&&$.viewport(N.copy(re)),q.length>0&&da(q,j,ne),me.length>0&&da(me,j,ne),Te.length>0&&da(Te,j,ne),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function ah(P,j,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[re.id]===void 0&&(p.state.transmissionRenderTarget[re.id]=new ts(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?sa:Yi,minFilter:$r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const me=p.state.transmissionRenderTarget[re.id],Te=re.viewport||N;me.setSize(Te.z*v.transmissionResolutionScale,Te.w*v.transmissionResolutionScale);const De=v.getRenderTarget(),Ce=v.getActiveCubeFace(),Ge=v.getActiveMipmapLevel();v.setRenderTarget(me),v.getClearColor(X),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),ye&&Ae.render(ne);const $e=v.toneMapping;v.toneMapping=vr;const Fe=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),p.setupLightsView(re),je===!0&&fe.setGlobalState(v.clippingPlanes,re),da(P,ne,re),B.updateMultisampleRenderTarget(me),B.updateRenderTargetMipmap(me),z.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let vt=0,Dt=j.length;vt<Dt;vt++){const wt=j[vt],xt=wt.object,Be=wt.geometry,Ct=wt.material,rt=wt.group;if(Ct.side===ki&&xt.layers.test(re.layers)){const An=Ct.side;Ct.side=Sn,Ct.needsUpdate=!0,lh(xt,ne,re,Be,Ct,rt),Ct.side=An,Ct.needsUpdate=!0,tt=!0}}tt===!0&&(B.updateMultisampleRenderTarget(me),B.updateRenderTargetMipmap(me))}v.setRenderTarget(De,Ce,Ge),v.setClearColor(X,Y),Fe!==void 0&&(re.viewport=Fe),v.toneMapping=$e}function da(P,j,ne){const re=j.isScene===!0?j.overrideMaterial:null;for(let q=0,me=P.length;q<me;q++){const Te=P[q],De=Te.object,Ce=Te.geometry,Ge=Te.group;let $e=Te.material;$e.allowOverride===!0&&re!==null&&($e=re),De.layers.test(ne.layers)&&lh(De,j,ne,Ce,$e,Ge)}}function lh(P,j,ne,re,q,me){P.onBeforeRender(v,j,ne,re,q,me),P.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(v,j,ne,re,P,me),q.transparent===!0&&q.side===ki&&q.forceSinglePass===!1?(q.side=Sn,q.needsUpdate=!0,v.renderBufferDirect(ne,j,re,q,P,me),q.side=xr,q.needsUpdate=!0,v.renderBufferDirect(ne,j,re,q,P,me),q.side=ki):v.renderBufferDirect(ne,j,re,q,P,me),P.onAfterRender(v,j,ne,re,q,me)}function ha(P,j,ne){j.isScene!==!0&&(j=le);const re=L.get(P),q=p.state.lights,me=p.state.shadowsArray,Te=q.state.version,De=W.getParameters(P,q.state,me,j,ne),Ce=W.getProgramCacheKey(De);let Ge=re.programs;re.environment=P.isMeshStandardMaterial?j.environment:null,re.fog=j.fog,re.envMap=(P.isMeshStandardMaterial?ie:K).get(P.envMap||re.environment),re.envMapRotation=re.environment!==null&&P.envMap===null?j.environmentRotation:P.envMapRotation,Ge===void 0&&(P.addEventListener("dispose",ue),Ge=new Map,re.programs=Ge);let $e=Ge.get(Ce);if($e!==void 0){if(re.currentProgram===$e&&re.lightsStateVersion===Te)return uh(P,De),$e}else De.uniforms=W.getUniforms(P),P.onBeforeCompile(De,v),$e=W.acquireProgram(De,Ce),Ge.set(Ce,$e),re.uniforms=De.uniforms;const Fe=re.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Fe.clippingPlanes=fe.uniform),uh(P,De),re.needsLights=Oy(P),re.lightsStateVersion=Te,re.needsLights&&(Fe.ambientLightColor.value=q.state.ambient,Fe.lightProbe.value=q.state.probe,Fe.directionalLights.value=q.state.directional,Fe.directionalLightShadows.value=q.state.directionalShadow,Fe.spotLights.value=q.state.spot,Fe.spotLightShadows.value=q.state.spotShadow,Fe.rectAreaLights.value=q.state.rectArea,Fe.ltc_1.value=q.state.rectAreaLTC1,Fe.ltc_2.value=q.state.rectAreaLTC2,Fe.pointLights.value=q.state.point,Fe.pointLightShadows.value=q.state.pointShadow,Fe.hemisphereLights.value=q.state.hemi,Fe.directionalShadowMap.value=q.state.directionalShadowMap,Fe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Fe.spotShadowMap.value=q.state.spotShadowMap,Fe.spotLightMatrix.value=q.state.spotLightMatrix,Fe.spotLightMap.value=q.state.spotLightMap,Fe.pointShadowMap.value=q.state.pointShadowMap,Fe.pointShadowMatrix.value=q.state.pointShadowMatrix),re.currentProgram=$e,re.uniformsList=null,$e}function ch(P){if(P.uniformsList===null){const j=P.currentProgram.getUniforms();P.uniformsList=pl.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function uh(P,j){const ne=L.get(P);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.batchingColor=j.batchingColor,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function Ny(P,j,ne,re,q){j.isScene!==!0&&(j=le),B.resetTextureUnits();const me=j.fog,Te=re.isMeshStandardMaterial?j.environment:null,De=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ks,Ce=(re.isMeshStandardMaterial?ie:K).get(re.envMap||Te),Ge=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,$e=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Fe=!!ne.morphAttributes.position,tt=!!ne.morphAttributes.normal,vt=!!ne.morphAttributes.color;let Dt=vr;re.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Dt=v.toneMapping);const wt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,xt=wt!==void 0?wt.length:0,Be=L.get(re),Ct=p.state.lights;if(je===!0&&(oe===!0||P!==T)){const dn=P===T&&re.id===M;fe.setState(re,P,dn)}let rt=!1;re.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Ct.state.version||Be.outputColorSpace!==De||q.isBatchedMesh&&Be.batching===!1||!q.isBatchedMesh&&Be.batching===!0||q.isBatchedMesh&&Be.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Be.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Be.instancing===!1||!q.isInstancedMesh&&Be.instancing===!0||q.isSkinnedMesh&&Be.skinning===!1||!q.isSkinnedMesh&&Be.skinning===!0||q.isInstancedMesh&&Be.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Be.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Be.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Be.instancingMorph===!1&&q.morphTexture!==null||Be.envMap!==Ce||re.fog===!0&&Be.fog!==me||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==fe.numPlanes||Be.numIntersection!==fe.numIntersection)||Be.vertexAlphas!==Ge||Be.vertexTangents!==$e||Be.morphTargets!==Fe||Be.morphNormals!==tt||Be.morphColors!==vt||Be.toneMapping!==Dt||Be.morphTargetsCount!==xt)&&(rt=!0):(rt=!0,Be.__version=re.version);let An=Be.currentProgram;rt===!0&&(An=ha(re,j,q));let ss=!1,Rn=!1,so=!1;const Pt=An.getUniforms(),Dn=Be.uniforms;if($.useProgram(An.program)&&(ss=!0,Rn=!0,so=!0),re.id!==M&&(M=re.id,Rn=!0),ss||T!==P){$.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Pt.setValue(b,"projectionMatrix",P.projectionMatrix),Pt.setValue(b,"viewMatrix",P.matrixWorldInverse);const _n=Pt.map.cameraPosition;_n!==void 0&&_n.setValue(b,se.setFromMatrixPosition(P.matrixWorld)),ee.logarithmicDepthBuffer&&Pt.setValue(b,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Pt.setValue(b,"isOrthographic",P.isOrthographicCamera===!0),T!==P&&(T=P,Rn=!0,so=!0)}if(q.isSkinnedMesh){Pt.setOptional(b,q,"bindMatrix"),Pt.setOptional(b,q,"bindMatrixInverse");const dn=q.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Pt.setValue(b,"boneTexture",dn.boneTexture,B))}q.isBatchedMesh&&(Pt.setOptional(b,q,"batchingTexture"),Pt.setValue(b,"batchingTexture",q._matricesTexture,B),Pt.setOptional(b,q,"batchingIdTexture"),Pt.setValue(b,"batchingIdTexture",q._indirectTexture,B),Pt.setOptional(b,q,"batchingColorTexture"),q._colorsTexture!==null&&Pt.setValue(b,"batchingColorTexture",q._colorsTexture,B));const Nn=ne.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&de.update(q,ne,An),(Rn||Be.receiveShadow!==q.receiveShadow)&&(Be.receiveShadow=q.receiveShadow,Pt.setValue(b,"receiveShadow",q.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Dn.envMap.value=Ce,Dn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&j.environment!==null&&(Dn.envMapIntensity.value=j.environmentIntensity),Rn&&(Pt.setValue(b,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&Uy(Dn,so),me&&re.fog===!0&&Q.refreshFogUniforms(Dn,me),Q.refreshMaterialUniforms(Dn,re,F,te,p.state.transmissionRenderTarget[P.id]),pl.upload(b,ch(Be),Dn,B)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(pl.upload(b,ch(Be),Dn,B),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Pt.setValue(b,"center",q.center),Pt.setValue(b,"modelViewMatrix",q.modelViewMatrix),Pt.setValue(b,"normalMatrix",q.normalMatrix),Pt.setValue(b,"modelMatrix",q.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const dn=re.uniformsGroups;for(let _n=0,pc=dn.length;_n<pc;_n++){const wr=dn[_n];qe.update(wr,An),qe.bind(wr,An)}}return An}function Uy(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function Oy(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(P,j,ne){const re=L.get(P);re.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),L.get(P.texture).__webglTexture=j,L.get(P.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ne,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,j){const ne=L.get(P);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0};const Fy=b.createFramebuffer();this.setRenderTarget=function(P,j=0,ne=0){I=P,w=j,A=ne;let re=!0,q=null,me=!1,Te=!1;if(P){const Ce=L.get(P);if(Ce.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(b.FRAMEBUFFER,null),re=!1;else if(Ce.__webglFramebuffer===void 0)B.setupRenderTarget(P);else if(Ce.__hasExternalTextures)B.rebindTextures(P,L.get(P.texture).__webglTexture,L.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Fe=P.depthTexture;if(Ce.__boundDepthTexture!==Fe){if(Fe!==null&&L.has(Fe)&&(P.width!==Fe.image.width||P.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(P)}}const Ge=P.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Te=!0);const $e=L.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray($e[j])?q=$e[j][ne]:q=$e[j],me=!0):P.samples>0&&B.useMultisampledRTT(P)===!1?q=L.get(P).__webglMultisampledFramebuffer:Array.isArray($e)?q=$e[ne]:q=$e,N.copy(P.viewport),U.copy(P.scissor),G=P.scissorTest}else N.copy(Me).multiplyScalar(F).floor(),U.copy(Ne).multiplyScalar(F).floor(),G=Oe;if(ne!==0&&(q=Fy),$.bindFramebuffer(b.FRAMEBUFFER,q)&&re&&$.drawBuffers(P,q),$.viewport(N),$.scissor(U),$.setScissorTest(G),me){const Ce=L.get(P.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ce.__webglTexture,ne)}else if(Te){const Ce=j;for(let Ge=0;Ge<P.textures.length;Ge++){const $e=L.get(P.textures[Ge]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Ge,$e.__webglTexture,ne,Ce)}}else if(P!==null&&ne!==0){const Ce=L.get(P.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ce.__webglTexture,ne)}M=-1},this.readRenderTargetPixels=function(P,j,ne,re,q,me,Te,De=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=L.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){$.bindFramebuffer(b.FRAMEBUFFER,Ce);try{const Ge=P.textures[De],$e=Ge.format,Fe=Ge.type;if(!ee.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-re&&ne>=0&&ne<=P.height-q&&(P.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+De),b.readPixels(j,ne,re,q,we.convert($e),we.convert(Fe),me))}finally{const Ge=I!==null?L.get(I).__webglFramebuffer:null;$.bindFramebuffer(b.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(P,j,ne,re,q,me,Te,De=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=L.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce)if(j>=0&&j<=P.width-re&&ne>=0&&ne<=P.height-q){$.bindFramebuffer(b.FRAMEBUFFER,Ce);const Ge=P.textures[De],$e=Ge.format,Fe=Ge.type;if(!ee.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,tt),b.bufferData(b.PIXEL_PACK_BUFFER,me.byteLength,b.STREAM_READ),P.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+De),b.readPixels(j,ne,re,q,we.convert($e),we.convert(Fe),0);const vt=I!==null?L.get(I).__webglFramebuffer:null;$.bindFramebuffer(b.FRAMEBUFFER,vt);const Dt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await LL(b,Dt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,tt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,me),b.deleteBuffer(tt),b.deleteSync(Dt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,j=null,ne=0){const re=Math.pow(2,-ne),q=Math.floor(P.image.width*re),me=Math.floor(P.image.height*re),Te=j!==null?j.x:0,De=j!==null?j.y:0;B.setTexture2D(P,0),b.copyTexSubImage2D(b.TEXTURE_2D,ne,0,0,Te,De,q,me),$.unbindTexture()};const ky=b.createFramebuffer(),By=b.createFramebuffer();this.copyTextureToTexture=function(P,j,ne=null,re=null,q=0,me=null){me===null&&(q!==0?(qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=q,q=0):me=0);let Te,De,Ce,Ge,$e,Fe,tt,vt,Dt;const wt=P.isCompressedTexture?P.mipmaps[me]:P.image;if(ne!==null)Te=ne.max.x-ne.min.x,De=ne.max.y-ne.min.y,Ce=ne.isBox3?ne.max.z-ne.min.z:1,Ge=ne.min.x,$e=ne.min.y,Fe=ne.isBox3?ne.min.z:0;else{const Nn=Math.pow(2,-q);Te=Math.floor(wt.width*Nn),De=Math.floor(wt.height*Nn),P.isDataArrayTexture?Ce=wt.depth:P.isData3DTexture?Ce=Math.floor(wt.depth*Nn):Ce=1,Ge=0,$e=0,Fe=0}re!==null?(tt=re.x,vt=re.y,Dt=re.z):(tt=0,vt=0,Dt=0);const xt=we.convert(j.format),Be=we.convert(j.type);let Ct;j.isData3DTexture?(B.setTexture3D(j,0),Ct=b.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(B.setTexture2DArray(j,0),Ct=b.TEXTURE_2D_ARRAY):(B.setTexture2D(j,0),Ct=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,j.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,j.unpackAlignment);const rt=b.getParameter(b.UNPACK_ROW_LENGTH),An=b.getParameter(b.UNPACK_IMAGE_HEIGHT),ss=b.getParameter(b.UNPACK_SKIP_PIXELS),Rn=b.getParameter(b.UNPACK_SKIP_ROWS),so=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,wt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,wt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ge),b.pixelStorei(b.UNPACK_SKIP_ROWS,$e),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Fe);const Pt=P.isDataArrayTexture||P.isData3DTexture,Dn=j.isDataArrayTexture||j.isData3DTexture;if(P.isDepthTexture){const Nn=L.get(P),dn=L.get(j),_n=L.get(Nn.__renderTarget),pc=L.get(dn.__renderTarget);$.bindFramebuffer(b.READ_FRAMEBUFFER,_n.__webglFramebuffer),$.bindFramebuffer(b.DRAW_FRAMEBUFFER,pc.__webglFramebuffer);for(let wr=0;wr<Ce;wr++)Pt&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,L.get(P).__webglTexture,q,Fe+wr),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,L.get(j).__webglTexture,me,Dt+wr)),b.blitFramebuffer(Ge,$e,Te,De,tt,vt,Te,De,b.DEPTH_BUFFER_BIT,b.NEAREST);$.bindFramebuffer(b.READ_FRAMEBUFFER,null),$.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(q!==0||P.isRenderTargetTexture||L.has(P)){const Nn=L.get(P),dn=L.get(j);$.bindFramebuffer(b.READ_FRAMEBUFFER,ky),$.bindFramebuffer(b.DRAW_FRAMEBUFFER,By);for(let _n=0;_n<Ce;_n++)Pt?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Nn.__webglTexture,q,Fe+_n):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Nn.__webglTexture,q),Dn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,dn.__webglTexture,me,Dt+_n):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,dn.__webglTexture,me),q!==0?b.blitFramebuffer(Ge,$e,Te,De,tt,vt,Te,De,b.COLOR_BUFFER_BIT,b.NEAREST):Dn?b.copyTexSubImage3D(Ct,me,tt,vt,Dt+_n,Ge,$e,Te,De):b.copyTexSubImage2D(Ct,me,tt,vt,Ge,$e,Te,De);$.bindFramebuffer(b.READ_FRAMEBUFFER,null),$.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Dn?P.isDataTexture||P.isData3DTexture?b.texSubImage3D(Ct,me,tt,vt,Dt,Te,De,Ce,xt,Be,wt.data):j.isCompressedArrayTexture?b.compressedTexSubImage3D(Ct,me,tt,vt,Dt,Te,De,Ce,xt,wt.data):b.texSubImage3D(Ct,me,tt,vt,Dt,Te,De,Ce,xt,Be,wt):P.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,me,tt,vt,Te,De,xt,Be,wt.data):P.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,me,tt,vt,wt.width,wt.height,xt,wt.data):b.texSubImage2D(b.TEXTURE_2D,me,tt,vt,Te,De,xt,Be,wt);b.pixelStorei(b.UNPACK_ROW_LENGTH,rt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,An),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ss),b.pixelStorei(b.UNPACK_SKIP_ROWS,Rn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,so),me===0&&j.generateMipmaps&&b.generateMipmap(Ct),$.unbindTexture()},this.initRenderTarget=function(P){L.get(P).__webglFramebuffer===void 0&&B.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?B.setTextureCube(P,0):P.isData3DTexture?B.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?B.setTexture2DArray(P,0):B.setTexture2D(P,0),$.unbindTexture()},this.resetState=function(){w=0,A=0,I=null,$.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=ot._getUnpackColorSpace()}}const qO=Qt({__name:"Floating3DObjects",setup(t){const e=kt(null);let n,i,r,s=[],o,a=0,l=0;si(()=>{if(!e.value)return;n=new nI,i=new Bn(75,window.innerWidth/window.innerHeight,.1,1e3),i.position.z=30,r=new jO({alpha:!0,antialias:!0}),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.value.appendChild(r.domElement),c();const u=()=>{a=window.scrollY};window.addEventListener("scroll",u,{passive:!0});const f=(g,_,m)=>g+(_-g)*m,d=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",d);const h=()=>{o=requestAnimationFrame(h),l=f(l,a,.08);const g=l/(document.body.scrollHeight-window.innerHeight);if(s[0]){const p=s[0];p.rotation.x+=.003,p.rotation.y+=.005,p.position.y=5-g*20}const _=-g*20,m=g*.5;i.position.y=f(i.position.y,_,.08),i.rotation.x=f(i.rotation.x,m,.08),r.render(n,i)};h(),Qs(()=>{cancelAnimationFrame(o),window.removeEventListener("scroll",u),window.removeEventListener("resize",d),s.forEach(g=>{g.geometry.dispose(),Array.isArray(g.material)?g.material.forEach(_=>_.dispose()):g.material.dispose()}),r.dispose(),e.value&&r.domElement&&e.value.removeChild(r.domElement)})});function c(){const u=new ih(3.5,0),f=new nh({color:6514417,wireframe:!0,transparent:!0,opacity:.3}),d=new pi(u,f);d.position.x=20,d.position.y=5,d.position.z=-20,n.add(d),s.push(d)}return(u,f)=>(lt(),bn("div",{ref_key:"containerRef",ref:e,class:"fixed inset-0 pointer-events-none z-10"},null,512))}}),YO=Object.assign(lc(qO,[["__scopeId","data-v-e473432e"]]),{__name:"Floating3DObjects"}),KO=globalThis.setInterval,JO={key:0,class:"fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden"},ZO={class:"relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full"},QO={class:"mb-6 sm:mb-8"},e2={class:"text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 leading-tight break-words"},t2={class:"text-base sm:text-lg md:text-xl text-muted-foreground animate-fade-in-up px-4",style:{"animation-delay":"1.5s"}},n2={class:"max-w-xs sm:max-w-md mx-auto px-4"},i2={class:"relative h-1 bg-muted rounded-full overflow-hidden mb-4"},r2={class:"text-sm text-muted-foreground animate-pulse"},s2={class:"flex justify-center gap-2 mt-8"},o2=Qt({__name:"LoadingScreen",setup(t){const{locale:e}=is(),n=kt(!0),i=kt(0),r="Ibrahim Ghaybour".split("");return si(()=>{document.body.style.overflow="hidden";const s=KO(()=>{i.value+=Math.random()*15,i.value>=100&&(i.value=100,clearInterval(s),setTimeout(()=>{n.value=!1,document.body.style.overflow=""},500))},200);setTimeout(()=>{n.value&&(i.value=100,setTimeout(()=>{n.value=!1,document.body.style.overflow=""},500))},3e3)}),(s,o)=>(lt(),un(Yl,{name:"fade"},{default:Hi(()=>[n.value?(lt(),bn("div",JO,[o[1]||(o[1]=Qe("div",{class:"absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10 animate-gradient"},null,-1)),Qe("div",ZO,[Qe("div",QO,[Qe("h1",e2,[(lt(!0),bn(It,null,Sl(Xe(r),(a,l)=>(lt(),bn("span",{key:l,class:"inline-block animate-letter bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent",style:hr({animationDelay:`${l*.1}s`})},xn(a===" "?" ":a),5))),128))]),Qe("p",t2,xn(Xe(e)==="ar"?"مطور واجهات أمامية":"Frontend Developer"),1)]),Qe("div",n2,[Qe("div",i2,[Qe("div",{class:"absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-purple-600 to-blue-600 rounded-full transition-all duration-300 ease-out",style:hr({width:`${i.value}%`})},[...o[0]||(o[0]=[Qe("div",{class:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"},null,-1)])],4)]),Qe("p",r2,xn(Xe(e)==="ar"?"جاري التحميل...":"Loading...")+" "+xn(Math.round(i.value))+"% ",1)]),Qe("div",s2,[(lt(),bn(It,null,Sl(3,a=>Qe("div",{key:a,class:"w-2 h-2 bg-primary rounded-full animate-bounce",style:hr({animationDelay:`${a*.15}s`})},null,4)),64))])]),o[2]||(o[2]=Qe("div",{class:"hidden md:block absolute top-10 left-10 w-16 h-16 lg:w-20 lg:h-20 border-2 border-primary/20 rounded-full animate-spin-slow"},null,-1)),o[3]||(o[3]=Qe("div",{class:"hidden md:block absolute bottom-10 right-10 w-24 h-24 lg:w-32 lg:h-32 border-2 border-purple-500/20 rounded-full animate-spin-slow",style:{"animation-direction":"reverse"}},null,-1)),o[4]||(o[4]=Qe("div",{class:"hidden lg:block absolute top-1/2 right-20 w-16 h-16 border-2 border-blue-500/20 rounded-full animate-pulse"},null,-1))])):Md("",!0)]),_:1}))}}),a2=Object.assign(lc(o2,[["__scopeId","data-v-005927b6"]]),{__name:"LoadingScreen"}),l2={class:"fixed top-0 left-0 right-0 z-[100] h-1 bg-muted/30"},c2=Qt({__name:"ScrollProgress",setup(t){const e=kt(0),n=()=>{const i=window.innerHeight,r=document.documentElement.scrollHeight,s=window.scrollY,o=r-i;o>0&&(e.value=s/o*100)};return si(()=>{window.addEventListener("scroll",n,{passive:!0}),n()}),Qs(()=>{window.removeEventListener("scroll",n)}),(i,r)=>(lt(),bn("div",l2,[Qe("div",{class:"h-full bg-gradient-to-r from-primary via-purple-600 to-blue-600 transition-all duration-150 ease-out",style:hr({width:`${e.value}%`})},[...r[0]||(r[0]=[Qe("div",{class:"absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-blue-600 blur-sm opacity-50"},null,-1)])],4)]))}}),u2=Object.assign(c2,{__name:"ScrollProgress"}),f2={class:"min-h-screen w-full relative z-20"},d2=Qt({__name:"app",setup(t){const{locale:e}=is();return si(()=>{document.documentElement.style.scrollBehavior="smooth",document.documentElement.dir=e.value==="ar"?"rtl":"ltr",document.documentElement.lang=e.value}),Gt(e,n=>{document.documentElement.dir=n==="ar"?"rtl":"ltr",document.documentElement.lang=n}),(n,i)=>{const r=TP,s=AP,o=kP,a=HP;return lt(),bn("div",null,[et(a2),et(u2),et(YO),et(r,{class:"z-50"}),Qe("main",f2,[et(s)]),et(o),et(a)])}}}),h2={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const i=Number(n.statusCode||500),r=i===404,s=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,u=r?Sh(()=>qu(()=>import("./TXyVmjR5.js"),__vite__mapDeps([2,3]),import.meta.url)):Sh(()=>qu(()=>import("./D-oG0qoJ.js"),__vite__mapDeps([4,5]),import.meta.url));return(f,d)=>(lt(),un(Xe(u),Yy(K_({statusCode:Xe(i),statusMessage:Xe(s),description:Xe(o),stack:Xe(a)})),null,16))}},p2={key:0},Rg={__name:"nuxt-root",setup(t){const e=()=>null,n=at(),i=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",i);wn().beforeEach(c)}const r=!1;Kr(Jl,xv()),n.hooks.callHookWith(c=>c.map(u=>u()),"vue:setup");const s=Zl(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;b_((c,u,f)=>{if(n.hooks.callHook("vue:error",c,u,f).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",c),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,c),!1;if(bv(c)&&(c.fatal||c.unhandled))return n.runWithContext(()=>Br(c)),!1});const l=!1;return(c,u)=>(lt(),un(W_,{onResolve:Xe(i)},{default:Hi(()=>[Xe(o)?(lt(),bn("div",p2)):Xe(s)?(lt(),un(Xe(h2),{key:1,error:Xe(s)},null,8,["error"])):Xe(l)?(lt(),un(Xe(e),{key:2,context:Xe(l)},null,8,["context"])):Xe(r)?(lt(),un($x(Xe(r)),{key:3})):(lt(),un(Xe(d2),{key:4}))]),_:1},8,["onResolve"]))}};let Cg;{let t;Cg=async function(){if(t)return t;const n=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true"),i=n?hb(Rg):db(Rg),r=bS({vueApp:i});async function s(o){await r.callHook("app:error",o),r.payload.error||=Jr(o)}i.config.errorHandler=s,r.hook("app:suspense:resolve",()=>{i.config.errorHandler===s&&(i.config.errorHandler=void 0)}),!n&&rp.id&&r.hook("app:suspense:resolve",()=>{document.getElementById(rp.id)?.remove()});try{await TS(r,h1)}catch(o){s(o)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(yS),await r.hooks.callHook("app:mounted",i),await yr()}catch(o){s(o)}return i},t=Cg().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{un as $,Qe as A,xn as B,et as C,Hi as D,Uo as E,In as F,yi as G,Kr as H,rs as I,fn as J,ud as K,Zo as L,ml as M,Gt as N,gi as O,Xe as P,yr as Q,vv as R,mc as S,zn as T,_d as U,Qs as V,_2 as W,ph as X,z0 as Y,jx as Z,lc as _,at as a,J_ as a0,R1 as a1,z_ as a2,ti as a3,hr as a4,Md as a5,g2 as a6,Yy as a7,K_ as a8,nI as a9,M1 as aA,At as aB,T2 as aC,$x as aD,E2 as aE,m2 as aF,x2 as aG,E_ as aH,Vx as aI,Bn as aa,jO as ab,Gn as ac,vi as ad,oI as ae,Im as af,A2 as ag,Ay as ah,nh as ai,pi as aj,Ty as ak,ih as al,Ry as am,is as an,$c as ao,uv as ap,wy as aq,My as ar,y2 as as,v1 as at,Jo as au,cP as av,It as aw,Sl as ax,w2 as ay,T1 as az,Od as b,Up as c,Qt as d,ta as e,M2 as f,v2 as g,Vt as h,US as i,sw as j,mt as k,xi as l,Qr as m,ia as n,si as o,Ad as p,S2 as q,kt as r,Qn as s,ko as t,wn as u,b2 as v,Bb as w,Tv as x,bn as y,lt as z};
