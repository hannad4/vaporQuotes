(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Io="144",Br=0,Oo=1,Fr=2,er=1,Nr=2,Zn=3,Wn=0,gt=1,Kt=2,Zt=0,Nn=1,Uo=2,Go=3,Ho=4,zr=5,Bn=100,Wr=101,Or=102,Vo=103,qo=104,Ur=200,Gr=201,Hr=202,Vr=203,tr=204,nr=205,qr=206,Yr=207,Xr=208,Jr=209,jr=210,Kr=0,Zr=1,$r=2,To=3,Qr=4,es=5,ts=6,ns=7,ir=0,is=1,os=2,zt=0,as=1,rs=2,ss=3,hs=4,ls=5,or=300,On=301,Un=302,Ao=303,Eo=304,zi=306,Co=1e3,_t=1001,Lo=1002,tt=1003,Yo=1004,Xo=1005,ft=1006,us=1007,Wi=1008,fn=1009,cs=1010,ds=1011,ar=1012,fs=1013,sn=1014,hn=1015,Qn=1016,ps=1017,ms=1018,zn=1020,gs=1021,ys=1022,Et=1023,xs=1024,ws=1025,un=1026,Gn=1027,vs=1028,bs=1029,_s=1030,Ms=1031,Ss=1033,Yi=33776,Xi=33777,Ji=33778,ji=33779,Jo=35840,jo=35841,Ko=35842,Zo=35843,Ts=36196,$o=37492,Qo=37496,ea=37808,ta=37809,na=37810,ia=37811,oa=37812,aa=37813,ra=37814,sa=37815,ha=37816,la=37817,ua=37818,ca=37819,da=37820,fa=37821,pa=36492,pn=3e3,Ne=3001,As=3200,Es=3201,rr=0,Cs=1,Ft="srgb",ln="srgb-linear",Ki=7680,Ls=519,ma=35044,ga="300 es",Do=1035;class Vn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let o=0,s=i.length;o<s;o++)i[o].call(this,e);e.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zi=Math.PI/180,ya=180/Math.PI;function ti(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[a&255]+je[a>>8&255]+je[a>>16&255]+je[a>>24&255]+"-"+je[e&255]+je[e>>8&255]+"-"+je[e>>16&15|64]+je[e>>24&255]+"-"+je[t&63|128]+je[t>>8&255]+"-"+je[t>>16&255]+je[t>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function ht(a,e,t){return Math.max(e,Math.min(t,a))}function Ds(a,e){return(a%e+e)%e}function $i(a,e,t){return(1-t)*a+t*e}function xa(a){return(a&a-1)===0&&a!==0}function ko(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function pi(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function at(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*i+e.x,this.y=o*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,o,s,r,l,h){const u=this.elements;return u[0]=e,u[1]=i,u[2]=r,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,s=n[0],r=n[3],l=n[6],h=n[1],u=n[4],d=n[7],f=n[2],m=n[5],y=n[8],p=i[0],c=i[3],x=i[6],_=i[1],A=i[4],S=i[7],M=i[2],E=i[5],B=i[8];return o[0]=s*p+r*_+l*M,o[3]=s*c+r*A+l*E,o[6]=s*x+r*S+l*B,o[1]=h*p+u*_+d*M,o[4]=h*c+u*A+d*E,o[7]=h*x+u*S+d*B,o[2]=f*p+m*_+y*M,o[5]=f*c+m*A+y*E,o[8]=f*x+m*S+y*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],s=e[4],r=e[5],l=e[6],h=e[7],u=e[8];return t*s*u-t*r*h-n*o*u+n*r*l+i*o*h-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],s=e[4],r=e[5],l=e[6],h=e[7],u=e[8],d=u*s-r*h,f=r*l-u*o,m=h*o-s*l,y=t*d+n*f+i*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/y;return e[0]=d*p,e[1]=(i*h-u*n)*p,e[2]=(r*n-i*s)*p,e[3]=f*p,e[4]=(u*t-i*l)*p,e[5]=(i*o-r*t)*p,e[6]=m*p,e[7]=(n*l-h*t)*p,e[8]=(s*t-n*o)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,o,s,r){const l=Math.cos(o),h=Math.sin(o);return this.set(n*l,n*h,-n*(l*s+h*r)+s+e,-i*h,i*l,-i*(-h*s+l*r)+r+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,o=i[0],s=i[3],r=i[6],l=i[1],h=i[4],u=i[7];return i[0]=t*o+n*l,i[3]=t*s+n*h,i[6]=t*r+n*u,i[1]=-n*o+t*l,i[4]=-n*s+t*h,i[7]=-n*r+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function sr(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ei(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function cn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Fi(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Qi={[Ft]:{[ln]:cn},[ln]:{[Ft]:Fi}},xt={legacyMode:!0,get workingColorSpace(){return ln},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Qi[e]&&Qi[e][t]!==void 0){const n=Qi[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},hr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ge={r:0,g:0,b:0},wt={h:0,s:0,l:0},mi={h:0,s:0,l:0};function eo(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function gi(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ln){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ln){if(e=Ds(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=eo(s,o,e+1/3),this.g=eo(s,o,e),this.b=eo(s,o,e-1/3)}return xt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ft){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let o;const s=i[1],r=i[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,xt.toWorkingColorSpace(this,t),n(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,xt.toWorkingColorSpace(this,t),n(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const l=parseFloat(o[1])/360,h=parseFloat(o[2])/100,u=parseFloat(o[3])/100;return n(o[4]),this.setHSL(l,h,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],s=o.length;if(s===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,xt.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,xt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ft){const n=hr[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cn(e.r),this.g=cn(e.g),this.b=cn(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return xt.fromWorkingColorSpace(gi(this,Ge),e),ht(Ge.r*255,0,255)<<16^ht(Ge.g*255,0,255)<<8^ht(Ge.b*255,0,255)<<0}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ln){xt.fromWorkingColorSpace(gi(this,Ge),t);const n=Ge.r,i=Ge.g,o=Ge.b,s=Math.max(n,i,o),r=Math.min(n,i,o);let l,h;const u=(r+s)/2;if(r===s)l=0,h=0;else{const d=s-r;switch(h=u<=.5?d/(s+r):d/(2-s-r),s){case n:l=(i-o)/d+(i<o?6:0);break;case i:l=(o-n)/d+2;break;case o:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=ln){return xt.fromWorkingColorSpace(gi(this,Ge),t),e.r=Ge.r,e.g=Ge.g,e.b=Ge.b,e}getStyle(e=Ft){return xt.fromWorkingColorSpace(gi(this,Ge),e),e!==Ft?`color(${e} ${Ge.r} ${Ge.g} ${Ge.b})`:`rgb(${Ge.r*255|0},${Ge.g*255|0},${Ge.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(wt),wt.h+=e,wt.s+=t,wt.l+=n,this.setHSL(wt.h,wt.s,wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wt),e.getHSL(mi);const n=$i(wt.h,mi.h,t),i=$i(wt.s,mi.s,t),o=$i(wt.l,mi.l,t);return this.setHSL(n,i,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Re.NAMES=hr;let bn;class lr{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bn===void 0&&(bn=ei("canvas")),bn.width=e.width,bn.height=e.height;const n=bn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ei("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),o=i.data;for(let s=0;s<o.length;s++)o[s]=cn(o[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cn(t[n]/255)*255):t[n]=cn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ur{constructor(e=null){this.isSource=!0,this.uuid=ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let s=0,r=i.length;s<r;s++)i[s].isDataTexture?o.push(to(i[s].image)):o.push(to(i[s]))}else o=to(i);n.url=o}return t||(e.images[this.uuid]=n),n}}function to(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?lr.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ks=0;class yt extends Vn{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=_t,i=_t,o=ft,s=Wi,r=Et,l=fn,h=1,u=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ks++}),this.uuid=ti(),this.name="",this.source=new ur(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=s,this.anisotropy=h,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==or)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Co:e.x=e.x-Math.floor(e.x);break;case _t:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Co:e.y=e.y-Math.floor(e.y);break;case _t:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=or;class Xe{constructor(e=0,t=0,n=0,i=1){Xe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,o;const l=e.elements,h=l[0],u=l[4],d=l[8],f=l[1],m=l[5],y=l[9],p=l[2],c=l[6],x=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-p)<.01&&Math.abs(y-c)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+p)<.1&&Math.abs(y+c)<.1&&Math.abs(h+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(h+1)/2,S=(m+1)/2,M=(x+1)/2,E=(u+f)/4,B=(d+p)/4,w=(y+c)/4;return A>S&&A>M?A<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(A),i=E/n,o=B/n):S>M?S<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(S),n=E/i,o=w/i):M<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(M),n=B/o,i=w/o),this.set(n,i,o,t),this}let _=Math.sqrt((c-y)*(c-y)+(d-p)*(d-p)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(c-y)/_,this.y=(d-p)/_,this.z=(f-u)/_,this.w=Math.acos((h+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mn extends Vn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ur(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=_t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rs extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=_t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,o,s,r){let l=n[i+0],h=n[i+1],u=n[i+2],d=n[i+3];const f=o[s+0],m=o[s+1],y=o[s+2],p=o[s+3];if(r===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=d;return}if(r===1){e[t+0]=f,e[t+1]=m,e[t+2]=y,e[t+3]=p;return}if(d!==p||l!==f||h!==m||u!==y){let c=1-r;const x=l*f+h*m+u*y+d*p,_=x>=0?1:-1,A=1-x*x;if(A>Number.EPSILON){const M=Math.sqrt(A),E=Math.atan2(M,x*_);c=Math.sin(c*E)/M,r=Math.sin(r*E)/M}const S=r*_;if(l=l*c+f*S,h=h*c+m*S,u=u*c+y*S,d=d*c+p*S,c===1-r){const M=1/Math.sqrt(l*l+h*h+u*u+d*d);l*=M,h*=M,u*=M,d*=M}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,o,s){const r=n[i],l=n[i+1],h=n[i+2],u=n[i+3],d=o[s],f=o[s+1],m=o[s+2],y=o[s+3];return e[t]=r*y+u*d+l*m-h*f,e[t+1]=l*y+u*f+h*d-r*m,e[t+2]=h*y+u*m+r*f-l*d,e[t+3]=u*y-r*d-l*f-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,o=e._z,s=e._order,r=Math.cos,l=Math.sin,h=r(n/2),u=r(i/2),d=r(o/2),f=l(n/2),m=l(i/2),y=l(o/2);switch(s){case"XYZ":this._x=f*u*d+h*m*y,this._y=h*m*d-f*u*y,this._z=h*u*y+f*m*d,this._w=h*u*d-f*m*y;break;case"YXZ":this._x=f*u*d+h*m*y,this._y=h*m*d-f*u*y,this._z=h*u*y-f*m*d,this._w=h*u*d+f*m*y;break;case"ZXY":this._x=f*u*d-h*m*y,this._y=h*m*d+f*u*y,this._z=h*u*y+f*m*d,this._w=h*u*d-f*m*y;break;case"ZYX":this._x=f*u*d-h*m*y,this._y=h*m*d+f*u*y,this._z=h*u*y-f*m*d,this._w=h*u*d+f*m*y;break;case"YZX":this._x=f*u*d+h*m*y,this._y=h*m*d+f*u*y,this._z=h*u*y-f*m*d,this._w=h*u*d-f*m*y;break;case"XZY":this._x=f*u*d-h*m*y,this._y=h*m*d-f*u*y,this._z=h*u*y+f*m*d,this._w=h*u*d+f*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],o=t[8],s=t[1],r=t[5],l=t[9],h=t[2],u=t[6],d=t[10],f=n+r+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-h)*m,this._z=(s-i)*m}else if(n>r&&n>d){const m=2*Math.sqrt(1+n-r-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+s)/m,this._z=(o+h)/m}else if(r>d){const m=2*Math.sqrt(1+r-n-d);this._w=(o-h)/m,this._x=(i+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-r);this._w=(s-i)/m,this._x=(o+h)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,o=e._z,s=e._w,r=t._x,l=t._y,h=t._z,u=t._w;return this._x=n*u+s*r+i*h-o*l,this._y=i*u+s*l+o*r-n*h,this._z=o*u+s*h+n*l-i*r,this._w=s*u-n*r-i*l-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,o=this._z,s=this._w;let r=s*e._w+n*e._x+i*e._y+o*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=s,this._x=n,this._y=i,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(l),u=Math.atan2(h,r),d=Math.sin((1-t)*u)/h,f=Math.sin(t*u)/h;return this._w=s*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(o),n*Math.cos(o),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*i,this.y=o[1]*t+o[4]*n+o[7]*i,this.z=o[2]*t+o[5]*n+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*i+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*i+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*i+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,o=e.x,s=e.y,r=e.z,l=e.w,h=l*t+s*i-r*n,u=l*n+r*t-o*i,d=l*i+o*n-s*t,f=-o*t-s*n-r*i;return this.x=h*l+f*-o+u*-r-d*-s,this.y=u*l+f*-s+d*-o-h*-r,this.z=d*l+f*-r+h*-s-u*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i,this.y=o[1]*t+o[5]*n+o[9]*i,this.z=o[2]*t+o[6]*n+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,o=e.z,s=t.x,r=t.y,l=t.z;return this.x=i*l-o*r,this.y=o*s-n*l,this.z=n*r-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return no.copy(this).projectOnVector(e),this.sub(no)}reflect(e){return this.sub(no.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const no=new I,wa=new ni;class ii{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,o=-1/0,s=-1/0,r=-1/0;for(let l=0,h=e.length;l<h;l+=3){const u=e[l],d=e[l+1],f=e[l+2];u<t&&(t=u),d<n&&(n=d),f<i&&(i=f),u>o&&(o=u),d>s&&(s=d),f>r&&(r=f)}return this.min.set(t,n,i),this.max.set(o,s,r),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,o=-1/0,s=-1/0,r=-1/0;for(let l=0,h=e.count;l<h;l++){const u=e.getX(l),d=e.getY(l),f=e.getZ(l);u<t&&(t=u),d<n&&(n=d),f<i&&(i=f),u>o&&(o=u),d>s&&(s=d),f>r&&(r=f)}return this.min.set(t,n,i),this.max.set(o,s,r),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const o=n.attributes.position;for(let s=0,r=o.count;s<r;s++)en.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(en)}else n.boundingBox===null&&n.computeBoundingBox(),io.copy(n.boundingBox),io.applyMatrix4(e.matrixWorld),this.union(io);const i=e.children;for(let o=0,s=i.length;o<s;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jn),yi.subVectors(this.max,Jn),_n.subVectors(e.a,Jn),Mn.subVectors(e.b,Jn),Sn.subVectors(e.c,Jn),Ht.subVectors(Mn,_n),Vt.subVectors(Sn,Mn),tn.subVectors(_n,Sn);let t=[0,-Ht.z,Ht.y,0,-Vt.z,Vt.y,0,-tn.z,tn.y,Ht.z,0,-Ht.x,Vt.z,0,-Vt.x,tn.z,0,-tn.x,-Ht.y,Ht.x,0,-Vt.y,Vt.x,0,-tn.y,tn.x,0];return!oo(t,_n,Mn,Sn,yi)||(t=[1,0,0,0,1,0,0,0,1],!oo(t,_n,Mn,Sn,yi))?!1:(xi.crossVectors(Ht,Vt),t=[xi.x,xi.y,xi.z],oo(t,_n,Mn,Sn,yi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return en.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(en).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kt=[new I,new I,new I,new I,new I,new I,new I,new I],en=new I,io=new ii,_n=new I,Mn=new I,Sn=new I,Ht=new I,Vt=new I,tn=new I,Jn=new I,yi=new I,xi=new I,nn=new I;function oo(a,e,t,n,i){for(let o=0,s=a.length-3;o<=s;o+=3){nn.fromArray(a,o);const r=i.x*Math.abs(nn.x)+i.y*Math.abs(nn.y)+i.z*Math.abs(nn.z),l=e.dot(nn),h=t.dot(nn),u=n.dot(nn);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>r)return!1}return!0}const Is=new ii,va=new I,wi=new I,ao=new I;class Po{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Is.setFromPoints(e).getCenter(n);let i=0;for(let o=0,s=e.length;o<s;o++)i=Math.max(i,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ao.subVectors(e,this.center);const t=ao.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(ao.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?wi.set(0,0,1).multiplyScalar(e.radius):wi.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(va.copy(e.center).add(wi)),this.expandByPoint(va.copy(e.center).sub(wi)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rt=new I,ro=new I,vi=new I,qt=new I,so=new I,bi=new I,ho=new I;class Ps{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rt.copy(this.direction).multiplyScalar(t).add(this.origin),Rt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ro.copy(e).add(t).multiplyScalar(.5),vi.copy(t).sub(e).normalize(),qt.copy(this.origin).sub(ro);const o=e.distanceTo(t)*.5,s=-this.direction.dot(vi),r=qt.dot(this.direction),l=-qt.dot(vi),h=qt.lengthSq(),u=Math.abs(1-s*s);let d,f,m,y;if(u>0)if(d=s*l-r,f=s*r-l,y=o*u,d>=0)if(f>=-y)if(f<=y){const p=1/u;d*=p,f*=p,m=d*(d+s*f+2*r)+f*(s*d+f+2*l)+h}else f=o,d=Math.max(0,-(s*f+r)),m=-d*d+f*(f+2*l)+h;else f=-o,d=Math.max(0,-(s*f+r)),m=-d*d+f*(f+2*l)+h;else f<=-y?(d=Math.max(0,-(-s*o+r)),f=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+h):f<=y?(d=0,f=Math.min(Math.max(-o,-l),o),m=f*(f+2*l)+h):(d=Math.max(0,-(s*o+r)),f=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+f*(f+2*l)+h);else f=s>0?-o:o,d=Math.max(0,-(s*f+r)),m=-d*d+f*(f+2*l)+h;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(vi).multiplyScalar(f).add(ro),m}intersectSphere(e,t){Rt.subVectors(e.center,this.origin);const n=Rt.dot(this.direction),i=Rt.dot(Rt)-n*n,o=e.radius*e.radius;if(i>o)return null;const s=Math.sqrt(o-i),r=n-s,l=n+s;return r<0&&l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,o,s,r,l;const h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,i=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,i=(e.min.x-f.x)*h),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||o>i||((o>n||n!==n)&&(n=o),(s<i||i!==i)&&(i=s),d>=0?(r=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(r=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Rt)!==null}intersectTriangle(e,t,n,i,o){so.subVectors(t,e),bi.subVectors(n,e),ho.crossVectors(so,bi);let s=this.direction.dot(ho),r;if(s>0){if(i)return null;r=1}else if(s<0)r=-1,s=-s;else return null;qt.subVectors(this.origin,e);const l=r*this.direction.dot(bi.crossVectors(qt,bi));if(l<0)return null;const h=r*this.direction.dot(so.cross(qt));if(h<0||l+h>s)return null;const u=-r*qt.dot(ho);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,o,s,r,l,h,u,d,f,m,y,p,c){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=o,x[5]=s,x[9]=r,x[13]=l,x[2]=h,x[6]=u,x[10]=d,x[14]=f,x[3]=m,x[7]=y,x[11]=p,x[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Tn.setFromMatrixColumn(e,0).length(),o=1/Tn.setFromMatrixColumn(e,1).length(),s=1/Tn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,o=e.z,s=Math.cos(n),r=Math.sin(n),l=Math.cos(i),h=Math.sin(i),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*u,m=s*d,y=r*u,p=r*d;t[0]=l*u,t[4]=-l*d,t[8]=h,t[1]=m+y*h,t[5]=f-p*h,t[9]=-r*l,t[2]=p-f*h,t[6]=y+m*h,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,y=h*u,p=h*d;t[0]=f+p*r,t[4]=y*r-m,t[8]=s*h,t[1]=s*d,t[5]=s*u,t[9]=-r,t[2]=m*r-y,t[6]=p+f*r,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,y=h*u,p=h*d;t[0]=f-p*r,t[4]=-s*d,t[8]=y+m*r,t[1]=m+y*r,t[5]=s*u,t[9]=p-f*r,t[2]=-s*h,t[6]=r,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,m=s*d,y=r*u,p=r*d;t[0]=l*u,t[4]=y*h-m,t[8]=f*h+p,t[1]=l*d,t[5]=p*h+f,t[9]=m*h-y,t[2]=-h,t[6]=r*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*h,y=r*l,p=r*h;t[0]=l*u,t[4]=p-f*d,t[8]=y*d+m,t[1]=d,t[5]=s*u,t[9]=-r*u,t[2]=-h*u,t[6]=m*d+y,t[10]=f-p*d}else if(e.order==="XZY"){const f=s*l,m=s*h,y=r*l,p=r*h;t[0]=l*u,t[4]=-d,t[8]=h*u,t[1]=f*d+p,t[5]=s*u,t[9]=m*d-y,t[2]=y*d-m,t[6]=r*u,t[10]=p*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bs,e,Fs)}lookAt(e,t,n){const i=this.elements;return rt.subVectors(e,t),rt.lengthSq()===0&&(rt.z=1),rt.normalize(),Yt.crossVectors(n,rt),Yt.lengthSq()===0&&(Math.abs(n.z)===1?rt.x+=1e-4:rt.z+=1e-4,rt.normalize(),Yt.crossVectors(n,rt)),Yt.normalize(),_i.crossVectors(rt,Yt),i[0]=Yt.x,i[4]=_i.x,i[8]=rt.x,i[1]=Yt.y,i[5]=_i.y,i[9]=rt.y,i[2]=Yt.z,i[6]=_i.z,i[10]=rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,s=n[0],r=n[4],l=n[8],h=n[12],u=n[1],d=n[5],f=n[9],m=n[13],y=n[2],p=n[6],c=n[10],x=n[14],_=n[3],A=n[7],S=n[11],M=n[15],E=i[0],B=i[4],w=i[8],T=i[12],P=i[1],Y=i[5],ae=i[9],z=i[13],R=i[2],q=i[6],X=i[10],J=i[14],H=i[3],k=i[7],F=i[11],$=i[15];return o[0]=s*E+r*P+l*R+h*H,o[4]=s*B+r*Y+l*q+h*k,o[8]=s*w+r*ae+l*X+h*F,o[12]=s*T+r*z+l*J+h*$,o[1]=u*E+d*P+f*R+m*H,o[5]=u*B+d*Y+f*q+m*k,o[9]=u*w+d*ae+f*X+m*F,o[13]=u*T+d*z+f*J+m*$,o[2]=y*E+p*P+c*R+x*H,o[6]=y*B+p*Y+c*q+x*k,o[10]=y*w+p*ae+c*X+x*F,o[14]=y*T+p*z+c*J+x*$,o[3]=_*E+A*P+S*R+M*H,o[7]=_*B+A*Y+S*q+M*k,o[11]=_*w+A*ae+S*X+M*F,o[15]=_*T+A*z+S*J+M*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],o=e[12],s=e[1],r=e[5],l=e[9],h=e[13],u=e[2],d=e[6],f=e[10],m=e[14],y=e[3],p=e[7],c=e[11],x=e[15];return y*(+o*l*d-i*h*d-o*r*f+n*h*f+i*r*m-n*l*m)+p*(+t*l*m-t*h*f+o*s*f-i*s*m+i*h*u-o*l*u)+c*(+t*h*d-t*r*m-o*s*d+n*s*m+o*r*u-n*h*u)+x*(-i*r*u-t*l*d+t*r*f+i*s*d-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],s=e[4],r=e[5],l=e[6],h=e[7],u=e[8],d=e[9],f=e[10],m=e[11],y=e[12],p=e[13],c=e[14],x=e[15],_=d*c*h-p*f*h+p*l*m-r*c*m-d*l*x+r*f*x,A=y*f*h-u*c*h-y*l*m+s*c*m+u*l*x-s*f*x,S=u*p*h-y*d*h+y*r*m-s*p*m-u*r*x+s*d*x,M=y*d*l-u*p*l-y*r*f+s*p*f+u*r*c-s*d*c,E=t*_+n*A+i*S+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/E;return e[0]=_*B,e[1]=(p*f*o-d*c*o-p*i*m+n*c*m+d*i*x-n*f*x)*B,e[2]=(r*c*o-p*l*o+p*i*h-n*c*h-r*i*x+n*l*x)*B,e[3]=(d*l*o-r*f*o-d*i*h+n*f*h+r*i*m-n*l*m)*B,e[4]=A*B,e[5]=(u*c*o-y*f*o+y*i*m-t*c*m-u*i*x+t*f*x)*B,e[6]=(y*l*o-s*c*o-y*i*h+t*c*h+s*i*x-t*l*x)*B,e[7]=(s*f*o-u*l*o+u*i*h-t*f*h-s*i*m+t*l*m)*B,e[8]=S*B,e[9]=(y*d*o-u*p*o-y*n*m+t*p*m+u*n*x-t*d*x)*B,e[10]=(s*p*o-y*r*o+y*n*h-t*p*h-s*n*x+t*r*x)*B,e[11]=(u*r*o-s*d*o-u*n*h+t*d*h+s*n*m-t*r*m)*B,e[12]=M*B,e[13]=(u*p*i-y*d*i+y*n*f-t*p*f-u*n*c+t*d*c)*B,e[14]=(y*r*i-s*p*i-y*n*l+t*p*l+s*n*c-t*r*c)*B,e[15]=(s*d*i-u*r*i+u*n*l-t*d*l-s*n*f+t*r*f)*B,this}scale(e){const t=this.elements,n=e.x,i=e.y,o=e.z;return t[0]*=n,t[4]*=i,t[8]*=o,t[1]*=n,t[5]*=i,t[9]*=o,t[2]*=n,t[6]*=i,t[10]*=o,t[3]*=n,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),o=1-n,s=e.x,r=e.y,l=e.z,h=o*s,u=o*r;return this.set(h*s+n,h*r-i*l,h*l+i*r,0,h*r+i*l,u*r+n,u*l-i*s,0,h*l-i*r,u*l+i*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,o,s){return this.set(1,n,o,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,o=t._x,s=t._y,r=t._z,l=t._w,h=o+o,u=s+s,d=r+r,f=o*h,m=o*u,y=o*d,p=s*u,c=s*d,x=r*d,_=l*h,A=l*u,S=l*d,M=n.x,E=n.y,B=n.z;return i[0]=(1-(p+x))*M,i[1]=(m+S)*M,i[2]=(y-A)*M,i[3]=0,i[4]=(m-S)*E,i[5]=(1-(f+x))*E,i[6]=(c+_)*E,i[7]=0,i[8]=(y+A)*B,i[9]=(c-_)*B,i[10]=(1-(f+p))*B,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let o=Tn.set(i[0],i[1],i[2]).length();const s=Tn.set(i[4],i[5],i[6]).length(),r=Tn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],vt.copy(this);const h=1/o,u=1/s,d=1/r;return vt.elements[0]*=h,vt.elements[1]*=h,vt.elements[2]*=h,vt.elements[4]*=u,vt.elements[5]*=u,vt.elements[6]*=u,vt.elements[8]*=d,vt.elements[9]*=d,vt.elements[10]*=d,t.setFromRotationMatrix(vt),n.x=o,n.y=s,n.z=r,this}makePerspective(e,t,n,i,o,s){const r=this.elements,l=2*o/(t-e),h=2*o/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f=-(s+o)/(s-o),m=-2*s*o/(s-o);return r[0]=l,r[4]=0,r[8]=u,r[12]=0,r[1]=0,r[5]=h,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=f,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,n,i,o,s){const r=this.elements,l=1/(t-e),h=1/(n-i),u=1/(s-o),d=(t+e)*l,f=(n+i)*h,m=(s+o)*u;return r[0]=2*l,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*h,r[9]=0,r[13]=-f,r[2]=0,r[6]=0,r[10]=-2*u,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Tn=new I,vt=new Je,Bs=new I(0,0,0),Fs=new I(1,1,1),Yt=new I,_i=new I,rt=new I,ba=new Je,_a=new ni;class oi{constructor(e=0,t=0,n=0,i=oi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,o=i[0],s=i[4],r=i[8],l=i[1],h=i[5],u=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-ht(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ba.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ba,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _a.setFromEuler(this),this.setFromQuaternion(_a,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}oi.DefaultOrder="XYZ";oi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class dr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ns=0;const Ma=new I,An=new ni,It=new Je,Mi=new I,jn=new I,zs=new I,Ws=new ni,Sa=new I(1,0,0),Ta=new I(0,1,0),Aa=new I(0,0,1),Os={type:"added"},Ea={type:"removed"};class nt extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ns++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DefaultUp.clone();const e=new I,t=new oi,n=new ni,i=new I(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new mt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=nt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=nt.DefaultMatrixWorldAutoUpdate,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.multiply(An),this}rotateOnWorldAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.premultiply(An),this}rotateX(e){return this.rotateOnAxis(Sa,e)}rotateY(e){return this.rotateOnAxis(Ta,e)}rotateZ(e){return this.rotateOnAxis(Aa,e)}translateOnAxis(e,t){return Ma.copy(e).applyQuaternion(this.quaternion),this.position.add(Ma.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sa,e)}translateY(e){return this.translateOnAxis(Ta,e)}translateZ(e){return this.translateOnAxis(Aa,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(It.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mi.copy(e):Mi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),jn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?It.lookAt(jn,Mi,this.up):It.lookAt(Mi,jn,this.up),this.quaternion.setFromRotationMatrix(It),i&&(It.extractRotation(i.matrixWorld),An.setFromRotationMatrix(It),this.quaternion.premultiply(An.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Os)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ea)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ea)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),It.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),It.multiply(e.parent.matrixWorld)),e.applyMatrix4(It),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jn,e,zs),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jn,Ws,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let o=0,s=i.length;o<s;o++){const r=i[o];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const d=l[h];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,h=this.material.length;l<h;l++)r.push(o(e.materials,this.material[l]));i.material=r}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];i.animations.push(o(e.animations,l))}}if(t){const r=s(e.geometries),l=s(e.materials),h=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),m=s(e.animations),y=s(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),y.length>0&&(n.nodes=y)}return n.object=i,n;function s(r){const l=[];for(const h in r){const u=r[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}nt.DefaultUp=new I(0,1,0);nt.DefaultMatrixAutoUpdate=!0;nt.DefaultMatrixWorldAutoUpdate=!0;const bt=new I,Pt=new I,lo=new I,Bt=new I,En=new I,Cn=new I,Ca=new I,uo=new I,co=new I,fo=new I;class Nt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bt.subVectors(e,t),i.cross(bt);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,n,i,o){bt.subVectors(i,t),Pt.subVectors(n,t),lo.subVectors(e,t);const s=bt.dot(bt),r=bt.dot(Pt),l=bt.dot(lo),h=Pt.dot(Pt),u=Pt.dot(lo),d=s*h-r*r;if(d===0)return o.set(-2,-1,-1);const f=1/d,m=(h*l-r*u)*f,y=(s*u-r*l)*f;return o.set(1-m-y,y,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bt),Bt.x>=0&&Bt.y>=0&&Bt.x+Bt.y<=1}static getUV(e,t,n,i,o,s,r,l){return this.getBarycoord(e,t,n,i,Bt),l.set(0,0),l.addScaledVector(o,Bt.x),l.addScaledVector(s,Bt.y),l.addScaledVector(r,Bt.z),l}static isFrontFacing(e,t,n,i){return bt.subVectors(n,t),Pt.subVectors(e,t),bt.cross(Pt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bt.subVectors(this.c,this.b),Pt.subVectors(this.a,this.b),bt.cross(Pt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,o){return Nt.getUV(e,this.a,this.b,this.c,t,n,i,o)}containsPoint(e){return Nt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,o=this.c;let s,r;En.subVectors(i,n),Cn.subVectors(o,n),uo.subVectors(e,n);const l=En.dot(uo),h=Cn.dot(uo);if(l<=0&&h<=0)return t.copy(n);co.subVectors(e,i);const u=En.dot(co),d=Cn.dot(co);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*h;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(En,s);fo.subVectors(e,o);const m=En.dot(fo),y=Cn.dot(fo);if(y>=0&&m<=y)return t.copy(o);const p=m*h-l*y;if(p<=0&&h>=0&&y<=0)return r=h/(h-y),t.copy(n).addScaledVector(Cn,r);const c=u*y-m*d;if(c<=0&&d-u>=0&&m-y>=0)return Ca.subVectors(o,i),r=(d-u)/(d-u+(m-y)),t.copy(i).addScaledVector(Ca,r);const x=1/(c+p+f);return s=p*x,r=f*x,t.copy(n).addScaledVector(En,s).addScaledVector(Cn,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Us=0;class ai extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Us++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Nn,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=tr,this.blendDst=nr,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ls,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Nn&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(o){const s=[];for(const r in o){const l=o[r];delete l.metadata,s.push(l)}return s}if(t){const o=i(e.textures),s=i(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fr extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ir,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ue=new I,Si=new Ie;class Ct{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ma,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Si.fromBufferAttribute(this,t),Si.applyMatrix3(e),this.setXY(t,Si.x,Si.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ue.fromBufferAttribute(this,t),Ue.applyMatrix3(e),this.setXYZ(t,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ue.fromBufferAttribute(this,t),Ue.applyMatrix4(e),this.setXYZ(t,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ue.fromBufferAttribute(this,t),Ue.applyNormalMatrix(e),this.setXYZ(t,Ue.x,Ue.y,Ue.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ue.fromBufferAttribute(this,t),Ue.transformDirection(e),this.setXYZ(t,Ue.x,Ue.y,Ue.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),o=at(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ma&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class pr extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mr extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dn extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gs=0;const dt=new Je,po=new nt,Ln=new I,st=new ii,Kn=new ii,Ve=new I;class yn extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gs++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sr(e)?mr:pr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new mt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dt.makeRotationFromQuaternion(e),this.applyMatrix4(dt),this}rotateX(e){return dt.makeRotationX(e),this.applyMatrix4(dt),this}rotateY(e){return dt.makeRotationY(e),this.applyMatrix4(dt),this}rotateZ(e){return dt.makeRotationZ(e),this.applyMatrix4(dt),this}translate(e,t,n){return dt.makeTranslation(e,t,n),this.applyMatrix4(dt),this}scale(e,t,n){return dt.makeScale(e,t,n),this.applyMatrix4(dt),this}lookAt(e){return po.lookAt(e),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ln).negate(),this.translate(Ln.x,Ln.y,Ln.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const o=t[n];st.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,st.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,st.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(st.min),this.boundingBox.expandByPoint(st.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(st.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const r=t[o];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(st.min,Kn.min),st.expandByPoint(Ve),Ve.addVectors(st.max,Kn.max),st.expandByPoint(Ve)):(st.expandByPoint(Kn.min),st.expandByPoint(Kn.max))}st.getCenter(n);let i=0;for(let o=0,s=e.count;o<s;o++)Ve.fromBufferAttribute(e,o),i=Math.max(i,n.distanceToSquared(Ve));if(t)for(let o=0,s=t.length;o<s;o++){const r=t[o],l=this.morphTargetsRelative;for(let h=0,u=r.count;h<u;h++)Ve.fromBufferAttribute(r,h),l&&(Ln.fromBufferAttribute(e,h),Ve.add(Ln)),i=Math.max(i,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,o=t.normal.array,s=t.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*r),4));const l=this.getAttribute("tangent").array,h=[],u=[];for(let P=0;P<r;P++)h[P]=new I,u[P]=new I;const d=new I,f=new I,m=new I,y=new Ie,p=new Ie,c=new Ie,x=new I,_=new I;function A(P,Y,ae){d.fromArray(i,P*3),f.fromArray(i,Y*3),m.fromArray(i,ae*3),y.fromArray(s,P*2),p.fromArray(s,Y*2),c.fromArray(s,ae*2),f.sub(d),m.sub(d),p.sub(y),c.sub(y);const z=1/(p.x*c.y-c.x*p.y);!isFinite(z)||(x.copy(f).multiplyScalar(c.y).addScaledVector(m,-p.y).multiplyScalar(z),_.copy(m).multiplyScalar(p.x).addScaledVector(f,-c.x).multiplyScalar(z),h[P].add(x),h[Y].add(x),h[ae].add(x),u[P].add(_),u[Y].add(_),u[ae].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let P=0,Y=S.length;P<Y;++P){const ae=S[P],z=ae.start,R=ae.count;for(let q=z,X=z+R;q<X;q+=3)A(n[q+0],n[q+1],n[q+2])}const M=new I,E=new I,B=new I,w=new I;function T(P){B.fromArray(o,P*3),w.copy(B);const Y=h[P];M.copy(Y),M.sub(B.multiplyScalar(B.dot(Y))).normalize(),E.crossVectors(w,Y);const z=E.dot(u[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=z}for(let P=0,Y=S.length;P<Y;++P){const ae=S[P],z=ae.start,R=ae.count;for(let q=z,X=z+R;q<X;q+=3)T(n[q+0]),T(n[q+1]),T(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new I,o=new I,s=new I,r=new I,l=new I,h=new I,u=new I,d=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const y=e.getX(f+0),p=e.getX(f+1),c=e.getX(f+2);i.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),s.fromBufferAttribute(t,c),u.subVectors(s,o),d.subVectors(i,o),u.cross(d),r.fromBufferAttribute(n,y),l.fromBufferAttribute(n,p),h.fromBufferAttribute(n,c),r.add(u),l.add(u),h.add(u),n.setXYZ(y,r.x,r.y,r.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(c,h.x,h.y,h.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(i,o),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ve.fromBufferAttribute(e,t),Ve.normalize(),e.setXYZ(t,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function e(r,l){const h=r.array,u=r.itemSize,d=r.normalized,f=new h.constructor(l.length*u);let m=0,y=0;for(let p=0,c=l.length;p<c;p++){r.isInterleavedBufferAttribute?m=l[p]*r.data.stride+r.offset:m=l[p]*u;for(let x=0;x<u;x++)f[y++]=h[m++]}return new Ct(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,n=this.index.array,i=this.attributes;for(const r in i){const l=i[r],h=e(l,n);t.setAttribute(r,h)}const o=this.morphAttributes;for(const r in o){const l=[],h=o[r];for(let u=0,d=h.length;u<d;u++){const f=h[u],m=e(f,n);l.push(m)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let r=0,l=s.length;r<l;r++){const h=s[r];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let d=0,f=h.length;d<f;d++){const m=h[d];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(t))}const o=e.morphAttributes;for(const h in o){const u=[],d=o[h];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let h=0,u=s.length;h<u;h++){const d=s[h];this.addGroup(d.start,d.count,d.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const La=new Je,Dn=new Ps,mo=new Po,Xt=new I,Jt=new I,jt=new I,go=new I,yo=new I,xo=new I,Ti=new I,Ai=new I,Ei=new I,Ci=new Ie,Li=new Ie,Di=new Ie,wo=new I,ki=new I;class lt extends nt{constructor(e=new yn,t=new fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=i.length;o<s;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}raycast(e,t){const n=this.geometry,i=this.material,o=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(o),e.ray.intersectsSphere(mo)===!1)||(La.copy(o).invert(),Dn.copy(e.ray).applyMatrix4(La),n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1))return;let s;const r=n.index,l=n.attributes.position,h=n.morphAttributes.position,u=n.morphTargetsRelative,d=n.attributes.uv,f=n.attributes.uv2,m=n.groups,y=n.drawRange;if(r!==null)if(Array.isArray(i))for(let p=0,c=m.length;p<c;p++){const x=m[p],_=i[x.materialIndex],A=Math.max(x.start,y.start),S=Math.min(r.count,Math.min(x.start+x.count,y.start+y.count));for(let M=A,E=S;M<E;M+=3){const B=r.getX(M),w=r.getX(M+1),T=r.getX(M+2);s=Ri(this,_,e,Dn,l,h,u,d,f,B,w,T),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const p=Math.max(0,y.start),c=Math.min(r.count,y.start+y.count);for(let x=p,_=c;x<_;x+=3){const A=r.getX(x),S=r.getX(x+1),M=r.getX(x+2);s=Ri(this,i,e,Dn,l,h,u,d,f,A,S,M),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,c=m.length;p<c;p++){const x=m[p],_=i[x.materialIndex],A=Math.max(x.start,y.start),S=Math.min(l.count,Math.min(x.start+x.count,y.start+y.count));for(let M=A,E=S;M<E;M+=3){const B=M,w=M+1,T=M+2;s=Ri(this,_,e,Dn,l,h,u,d,f,B,w,T),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const p=Math.max(0,y.start),c=Math.min(l.count,y.start+y.count);for(let x=p,_=c;x<_;x+=3){const A=x,S=x+1,M=x+2;s=Ri(this,i,e,Dn,l,h,u,d,f,A,S,M),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function Hs(a,e,t,n,i,o,s,r){let l;if(e.side===gt?l=n.intersectTriangle(s,o,i,!0,r):l=n.intersectTriangle(i,o,s,e.side!==Kt,r),l===null)return null;ki.copy(r),ki.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(ki);return h<t.near||h>t.far?null:{distance:h,point:ki.clone(),object:a}}function Ri(a,e,t,n,i,o,s,r,l,h,u,d){Xt.fromBufferAttribute(i,h),Jt.fromBufferAttribute(i,u),jt.fromBufferAttribute(i,d);const f=a.morphTargetInfluences;if(o&&f){Ti.set(0,0,0),Ai.set(0,0,0),Ei.set(0,0,0);for(let y=0,p=o.length;y<p;y++){const c=f[y],x=o[y];c!==0&&(go.fromBufferAttribute(x,h),yo.fromBufferAttribute(x,u),xo.fromBufferAttribute(x,d),s?(Ti.addScaledVector(go,c),Ai.addScaledVector(yo,c),Ei.addScaledVector(xo,c)):(Ti.addScaledVector(go.sub(Xt),c),Ai.addScaledVector(yo.sub(Jt),c),Ei.addScaledVector(xo.sub(jt),c)))}Xt.add(Ti),Jt.add(Ai),jt.add(Ei)}a.isSkinnedMesh&&(a.boneTransform(h,Xt),a.boneTransform(u,Jt),a.boneTransform(d,jt));const m=Hs(a,e,t,n,Xt,Jt,jt,wo);if(m){r&&(Ci.fromBufferAttribute(r,h),Li.fromBufferAttribute(r,u),Di.fromBufferAttribute(r,d),m.uv=Nt.getUV(wo,Xt,Jt,jt,Ci,Li,Di,new Ie)),l&&(Ci.fromBufferAttribute(l,h),Li.fromBufferAttribute(l,u),Di.fromBufferAttribute(l,d),m.uv2=Nt.getUV(wo,Xt,Jt,jt,Ci,Li,Di,new Ie));const y={a:h,b:u,c:d,normal:new I,materialIndex:0};Nt.getNormal(Xt,Jt,jt,y.normal),m.face=y}return m}class ri extends yn{constructor(e=1,t=1,n=1,i=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:o,depthSegments:s};const r=this;i=Math.floor(i),o=Math.floor(o),s=Math.floor(s);const l=[],h=[],u=[],d=[];let f=0,m=0;y("z","y","x",-1,-1,n,t,e,s,o,0),y("z","y","x",1,-1,n,t,-e,s,o,1),y("x","z","y",1,1,e,n,t,i,s,2),y("x","z","y",1,-1,e,n,-t,i,s,3),y("x","y","z",1,-1,e,t,n,i,o,4),y("x","y","z",-1,-1,e,t,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new dn(h,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(d,2));function y(p,c,x,_,A,S,M,E,B,w,T){const P=S/B,Y=M/w,ae=S/2,z=M/2,R=E/2,q=B+1,X=w+1;let J=0,H=0;const k=new I;for(let F=0;F<X;F++){const $=F*Y-z;for(let K=0;K<q;K++){const j=K*P-ae;k[p]=j*_,k[c]=$*A,k[x]=R,h.push(k.x,k.y,k.z),k[p]=0,k[c]=0,k[x]=E>0?1:-1,u.push(k.x,k.y,k.z),d.push(K/B),d.push(1-F/w),J+=1}}for(let F=0;F<w;F++)for(let $=0;$<B;$++){const K=f+$+q*F,j=f+$+q*(F+1),le=f+($+1)+q*(F+1),ge=f+($+1)+q*F;l.push(K,j,ge),l.push(j,le,ge),H+=6}r.addGroup(m,H,T),m+=H,f+=J}}static fromJSON(e){return new ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hn(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ke(a){const e={};for(let t=0;t<a.length;t++){const n=Hn(a[t]);for(const i in n)e[i]=n[i]}return e}function Vs(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}const qs={clone:Hn,merge:Ke};var Ys=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xs=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ys,this.fragmentShader=Xs,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hn(e.uniforms),this.uniformsGroups=Vs(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gr extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pt extends gr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,o=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,h=s.fullHeight;o+=s.offsetX*i/l,t-=s.offsetY*n/h,i*=s.width/l,n*=s.height/h}const r=this.filmOffset;r!==0&&(o+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const kn=90,Rn=1;class Js extends nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new pt(kn,Rn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new I(1,0,0)),this.add(i);const o=new pt(kn,Rn,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new I(-1,0,0)),this.add(o);const s=new pt(kn,Rn,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new I(0,1,0)),this.add(s);const r=new pt(kn,Rn,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(new I(0,-1,0)),this.add(r);const l=new pt(kn,Rn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,1)),this.add(l);const h=new pt(kn,Rn,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new I(0,0,-1)),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,o,s,r,l,h]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=zt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,o),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,r),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class yr extends yt{constructor(e,t,n,i,o,s,r,l,h,u){e=e!==void 0?e:[],t=t!==void 0?t:On,super(e,t,n,i,o,s,r,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class js extends mn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new yr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ri(5,5,5),o=new gn({name:"CubemapFromEquirect",uniforms:Hn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gt,blending:Zt});o.uniforms.tEquirect.value=t;const s=new lt(i,o),r=t.minFilter;return t.minFilter===Wi&&(t.minFilter=ft),new Js(1,10,this).update(e,s),t.minFilter=r,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(o)}}const vo=new I,Ks=new I,Zs=new mt;class on{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=vo.subVectors(n,t).cross(Ks.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(vo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:t.copy(n).multiplyScalar(o).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zs.getNormalMatrix(e),i=this.coplanarPoint(vo).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Po,Ii=new I;class xr{constructor(e=new on,t=new on,n=new on,i=new on,o=new on,s=new on){this.planes=[e,t,n,i,o,s]}set(e,t,n,i,o,s){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(i),r[4].copy(o),r[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],o=n[1],s=n[2],r=n[3],l=n[4],h=n[5],u=n[6],d=n[7],f=n[8],m=n[9],y=n[10],p=n[11],c=n[12],x=n[13],_=n[14],A=n[15];return t[0].setComponents(r-i,d-l,p-f,A-c).normalize(),t[1].setComponents(r+i,d+l,p+f,A+c).normalize(),t[2].setComponents(r+o,d+h,p+m,A+x).normalize(),t[3].setComponents(r-o,d-h,p-m,A-x).normalize(),t[4].setComponents(r-s,d-u,p-y,A-_).normalize(),t[5].setComponents(r+s,d+u,p+y,A+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ii.x=i.normal.x>0?e.max.x:e.min.x,Ii.y=i.normal.y>0?e.max.y:e.min.y,Ii.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ii)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wr(){let a=null,e=!1,t=null,n=null;function i(o,s){t(o,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function $s(a,e){const t=e.isWebGL2,n=new WeakMap;function i(h,u){const d=h.array,f=h.usage,m=a.createBuffer();a.bindBuffer(u,m),a.bufferData(u,d,f),h.onUploadCallback();let y;if(d instanceof Float32Array)y=5126;else if(d instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(d instanceof Int16Array)y=5122;else if(d instanceof Uint32Array)y=5125;else if(d instanceof Int32Array)y=5124;else if(d instanceof Int8Array)y=5120;else if(d instanceof Uint8Array)y=5121;else if(d instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version}}function o(h,u,d){const f=u.array,m=u.updateRange;a.bindBuffer(d,h),m.count===-1?a.bufferSubData(d,0,f):(t?a.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):a.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function r(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u&&(a.deleteBuffer(u.buffer),n.delete(h))}function l(h,u){if(h.isGLBufferAttribute){const f=n.get(h);(!f||f.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d===void 0?n.set(h,i(h,u)):d.version<h.version&&(o(d.buffer,h,u),d.version=h.version)}return{get:s,remove:r,update:l}}class Oi extends yn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const o=e/2,s=t/2,r=Math.floor(n),l=Math.floor(i),h=r+1,u=l+1,d=e/r,f=t/l,m=[],y=[],p=[],c=[];for(let x=0;x<u;x++){const _=x*f-s;for(let A=0;A<h;A++){const S=A*d-o;y.push(S,-_,0),p.push(0,0,1),c.push(A/r),c.push(1-x/l)}}for(let x=0;x<l;x++)for(let _=0;_<r;_++){const A=_+h*x,S=_+h*(x+1),M=_+1+h*(x+1),E=_+1+h*x;m.push(A,S,E),m.push(S,M,E)}this.setIndex(m),this.setAttribute("position",new dn(y,3)),this.setAttribute("normal",new dn(p,3)),this.setAttribute("uv",new dn(c,2))}static fromJSON(e){return new Oi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qs=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,eh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,th=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ih=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ah="vec3 transformed = vec3( position );",rh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,hh=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,lh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xh=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,wh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,vh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Mh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Th="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ah=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,Ch=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lh=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kh=`#ifdef USE_ENVMAP
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
#endif`,Rh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ih=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ph=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fh=`#ifdef USE_GRADIENTMAP
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
}`,Nh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Uh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Gh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Hh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Xh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Jh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,jh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,$h=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,el=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tl=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,il=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ol=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,al=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hl=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ll=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ul=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,cl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,fl=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ml=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yl=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,xl=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,vl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,bl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_l=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ml=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Sl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Al=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,El=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ll=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dl=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,kl=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rl=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Il=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bl=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Fl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nl=`#ifdef USE_SKINNING
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
#endif`,zl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ol=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ul=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gl=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Hl=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Vl=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ql=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Yl=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Xl=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Jl=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,jl=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Kl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$l=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ql=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eu=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,nu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,iu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ou=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ru=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,su=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lu=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,uu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,du=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,pu=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,xu=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,vu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,_u=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Su=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Au=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Eu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Cu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Me={alphamap_fragment:Qs,alphamap_pars_fragment:eh,alphatest_fragment:th,alphatest_pars_fragment:nh,aomap_fragment:ih,aomap_pars_fragment:oh,begin_vertex:ah,beginnormal_vertex:rh,bsdfs:sh,iridescence_fragment:hh,bumpmap_pars_fragment:lh,clipping_planes_fragment:uh,clipping_planes_pars_fragment:ch,clipping_planes_pars_vertex:dh,clipping_planes_vertex:fh,color_fragment:ph,color_pars_fragment:mh,color_pars_vertex:gh,color_vertex:yh,common:xh,cube_uv_reflection_fragment:wh,defaultnormal_vertex:vh,displacementmap_pars_vertex:bh,displacementmap_vertex:_h,emissivemap_fragment:Mh,emissivemap_pars_fragment:Sh,encodings_fragment:Th,encodings_pars_fragment:Ah,envmap_fragment:Eh,envmap_common_pars_fragment:Ch,envmap_pars_fragment:Lh,envmap_pars_vertex:Dh,envmap_physical_pars_fragment:Gh,envmap_vertex:kh,fog_vertex:Rh,fog_pars_vertex:Ih,fog_fragment:Ph,fog_pars_fragment:Bh,gradientmap_pars_fragment:Fh,lightmap_fragment:Nh,lightmap_pars_fragment:zh,lights_lambert_fragment:Wh,lights_lambert_pars_fragment:Oh,lights_pars_begin:Uh,lights_toon_fragment:Hh,lights_toon_pars_fragment:Vh,lights_phong_fragment:qh,lights_phong_pars_fragment:Yh,lights_physical_fragment:Xh,lights_physical_pars_fragment:Jh,lights_fragment_begin:jh,lights_fragment_maps:Kh,lights_fragment_end:Zh,logdepthbuf_fragment:$h,logdepthbuf_pars_fragment:Qh,logdepthbuf_pars_vertex:el,logdepthbuf_vertex:tl,map_fragment:nl,map_pars_fragment:il,map_particle_fragment:ol,map_particle_pars_fragment:al,metalnessmap_fragment:rl,metalnessmap_pars_fragment:sl,morphcolor_vertex:hl,morphnormal_vertex:ll,morphtarget_pars_vertex:ul,morphtarget_vertex:cl,normal_fragment_begin:dl,normal_fragment_maps:fl,normal_pars_fragment:pl,normal_pars_vertex:ml,normal_vertex:gl,normalmap_pars_fragment:yl,clearcoat_normal_fragment_begin:xl,clearcoat_normal_fragment_maps:wl,clearcoat_pars_fragment:vl,iridescence_pars_fragment:bl,output_fragment:_l,packing:Ml,premultiplied_alpha_fragment:Sl,project_vertex:Tl,dithering_fragment:Al,dithering_pars_fragment:El,roughnessmap_fragment:Cl,roughnessmap_pars_fragment:Ll,shadowmap_pars_fragment:Dl,shadowmap_pars_vertex:kl,shadowmap_vertex:Rl,shadowmask_pars_fragment:Il,skinbase_vertex:Pl,skinning_pars_vertex:Bl,skinning_vertex:Fl,skinnormal_vertex:Nl,specularmap_fragment:zl,specularmap_pars_fragment:Wl,tonemapping_fragment:Ol,tonemapping_pars_fragment:Ul,transmission_fragment:Gl,transmission_pars_fragment:Hl,uv_pars_fragment:Vl,uv_pars_vertex:ql,uv_vertex:Yl,uv2_pars_fragment:Xl,uv2_pars_vertex:Jl,uv2_vertex:jl,worldpos_vertex:Kl,background_vert:Zl,background_frag:$l,cube_vert:Ql,cube_frag:eu,depth_vert:tu,depth_frag:nu,distanceRGBA_vert:iu,distanceRGBA_frag:ou,equirect_vert:au,equirect_frag:ru,linedashed_vert:su,linedashed_frag:hu,meshbasic_vert:lu,meshbasic_frag:uu,meshlambert_vert:cu,meshlambert_frag:du,meshmatcap_vert:fu,meshmatcap_frag:pu,meshnormal_vert:mu,meshnormal_frag:gu,meshphong_vert:yu,meshphong_frag:xu,meshphysical_vert:wu,meshphysical_frag:vu,meshtoon_vert:bu,meshtoon_frag:_u,points_vert:Mu,points_frag:Su,shadow_vert:Tu,shadow_frag:Au,sprite_vert:Eu,sprite_frag:Cu},ee={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new mt},uv2Transform:{value:new mt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mt}}},At={basic:{uniforms:Ke([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:Ke([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Re(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:Ke([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:Ke([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:Ke([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new Re(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:Ke([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:Ke([ee.points,ee.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:Ke([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:Ke([ee.common,ee.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:Ke([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:Ke([ee.sprite,ee.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},cube:{uniforms:Ke([ee.envmap,{opacity:{value:1}}]),vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:Ke([ee.common,ee.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:Ke([ee.lights,ee.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};At.physical={uniforms:Ke([At.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};function Lu(a,e,t,n,i,o){const s=new Re(0);let r=i===!0?0:1,l,h,u=null,d=0,f=null;function m(p,c){let x=!1,_=c.isScene===!0?c.background:null;_&&_.isTexture&&(_=e.get(_));const A=a.xr,S=A.getSession&&A.getSession();S&&S.environmentBlendMode==="additive"&&(_=null),_===null?y(s,r):_&&_.isColor&&(y(_,1),x=!0),(a.autoClear||x)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),_&&(_.isCubeTexture||_.mapping===zi)?(h===void 0&&(h=new lt(new ri(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Hn(At.cube.uniforms),vertexShader:At.cube.vertexShader,fragmentShader:At.cube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,E,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,(u!==_||d!==_.version||f!==a.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=a.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new lt(new Oi(2,2),new gn({name:"BackgroundMaterial",uniforms:Hn(At.background.uniforms),vertexShader:At.background.vertexShader,fragmentShader:At.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==a.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=a.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function y(p,c){t.buffers.color.setClear(p.r,p.g,p.b,c,o)}return{getClearColor:function(){return s},setClearColor:function(p,c=1){s.set(p),r=c,y(s,r)},getClearAlpha:function(){return r},setClearAlpha:function(p){r=p,y(s,r)},render:m}}function Du(a,e,t,n){const i=a.getParameter(34921),o=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||o!==null,r={},l=c(null);let h=l,u=!1;function d(R,q,X,J,H){let k=!1;if(s){const F=p(J,X,q);h!==F&&(h=F,m(h.object)),k=x(R,J,X,H),k&&_(R,J,X,H)}else{const F=q.wireframe===!0;(h.geometry!==J.id||h.program!==X.id||h.wireframe!==F)&&(h.geometry=J.id,h.program=X.id,h.wireframe=F,k=!0)}H!==null&&t.update(H,34963),(k||u)&&(u=!1,w(R,q,X,J),H!==null&&a.bindBuffer(34963,t.get(H).buffer))}function f(){return n.isWebGL2?a.createVertexArray():o.createVertexArrayOES()}function m(R){return n.isWebGL2?a.bindVertexArray(R):o.bindVertexArrayOES(R)}function y(R){return n.isWebGL2?a.deleteVertexArray(R):o.deleteVertexArrayOES(R)}function p(R,q,X){const J=X.wireframe===!0;let H=r[R.id];H===void 0&&(H={},r[R.id]=H);let k=H[q.id];k===void 0&&(k={},H[q.id]=k);let F=k[J];return F===void 0&&(F=c(f()),k[J]=F),F}function c(R){const q=[],X=[],J=[];for(let H=0;H<i;H++)q[H]=0,X[H]=0,J[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:X,attributeDivisors:J,object:R,attributes:{},index:null}}function x(R,q,X,J){const H=h.attributes,k=q.attributes;let F=0;const $=X.getAttributes();for(const K in $)if($[K].location>=0){const le=H[K];let ge=k[K];if(ge===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ge=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ge=R.instanceColor)),le===void 0||le.attribute!==ge||ge&&le.data!==ge.data)return!0;F++}return h.attributesNum!==F||h.index!==J}function _(R,q,X,J){const H={},k=q.attributes;let F=0;const $=X.getAttributes();for(const K in $)if($[K].location>=0){let le=k[K];le===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(le=R.instanceColor));const ge={};ge.attribute=le,le&&le.data&&(ge.data=le.data),H[K]=ge,F++}h.attributes=H,h.attributesNum=F,h.index=J}function A(){const R=h.newAttributes;for(let q=0,X=R.length;q<X;q++)R[q]=0}function S(R){M(R,0)}function M(R,q){const X=h.newAttributes,J=h.enabledAttributes,H=h.attributeDivisors;X[R]=1,J[R]===0&&(a.enableVertexAttribArray(R),J[R]=1),H[R]!==q&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,q),H[R]=q)}function E(){const R=h.newAttributes,q=h.enabledAttributes;for(let X=0,J=q.length;X<J;X++)q[X]!==R[X]&&(a.disableVertexAttribArray(X),q[X]=0)}function B(R,q,X,J,H,k){n.isWebGL2===!0&&(X===5124||X===5125)?a.vertexAttribIPointer(R,q,X,H,k):a.vertexAttribPointer(R,q,X,J,H,k)}function w(R,q,X,J){if(n.isWebGL2===!1&&(R.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const H=J.attributes,k=X.getAttributes(),F=q.defaultAttributeValues;for(const $ in k){const K=k[$];if(K.location>=0){let j=H[$];if(j===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),j!==void 0){const le=j.normalized,ge=j.itemSize,V=t.get(j);if(V===void 0)continue;const De=V.buffer,pe=V.type,ye=V.bytesPerElement;if(j.isInterleavedBufferAttribute){const se=j.data,Pe=se.stride,_e=j.offset;if(se.isInstancedInterleavedBuffer){for(let fe=0;fe<K.locationSize;fe++)M(K.location+fe,se.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let fe=0;fe<K.locationSize;fe++)S(K.location+fe);a.bindBuffer(34962,De);for(let fe=0;fe<K.locationSize;fe++)B(K.location+fe,ge/K.locationSize,pe,le,Pe*ye,(_e+ge/K.locationSize*fe)*ye)}else{if(j.isInstancedBufferAttribute){for(let se=0;se<K.locationSize;se++)M(K.location+se,j.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let se=0;se<K.locationSize;se++)S(K.location+se);a.bindBuffer(34962,De);for(let se=0;se<K.locationSize;se++)B(K.location+se,ge/K.locationSize,pe,le,ge*ye,ge/K.locationSize*se*ye)}}else if(F!==void 0){const le=F[$];if(le!==void 0)switch(le.length){case 2:a.vertexAttrib2fv(K.location,le);break;case 3:a.vertexAttrib3fv(K.location,le);break;case 4:a.vertexAttrib4fv(K.location,le);break;default:a.vertexAttrib1fv(K.location,le)}}}}E()}function T(){ae();for(const R in r){const q=r[R];for(const X in q){const J=q[X];for(const H in J)y(J[H].object),delete J[H];delete q[X]}delete r[R]}}function P(R){if(r[R.id]===void 0)return;const q=r[R.id];for(const X in q){const J=q[X];for(const H in J)y(J[H].object),delete J[H];delete q[X]}delete r[R.id]}function Y(R){for(const q in r){const X=r[q];if(X[R.id]===void 0)continue;const J=X[R.id];for(const H in J)y(J[H].object),delete J[H];delete X[R.id]}}function ae(){z(),u=!0,h!==l&&(h=l,m(h.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ae,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:Y,initAttributes:A,enableAttribute:S,disableUnusedAttributes:E}}function ku(a,e,t,n){const i=n.isWebGL2;let o;function s(h){o=h}function r(h,u){a.drawArrays(o,h,u),t.update(u,o,1)}function l(h,u,d){if(d===0)return;let f,m;if(i)f=a,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](o,h,u,d),t.update(u,o,d)}this.setMode=s,this.render=r,this.renderInstances=l}function Ru(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(B){if(B==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let r=t.precision!==void 0?t.precision:"highp";const l=o(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);const h=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=a.getParameter(34930),f=a.getParameter(35660),m=a.getParameter(3379),y=a.getParameter(34076),p=a.getParameter(34921),c=a.getParameter(36347),x=a.getParameter(36348),_=a.getParameter(36349),A=f>0,S=s||e.has("OES_texture_float"),M=A&&S,E=s?a.getParameter(36183):0;return{isWebGL2:s,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:o,precision:r,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:y,maxAttributes:p,maxVertexUniforms:c,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:A,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:E}}function Iu(a){const e=this;let t=null,n=0,i=!1,o=!1;const s=new on,r=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,m){const y=d.length!==0||f||n!==0||i;return i=f,t=u(d,m,0),n=d.length,y},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1,h()},this.setState=function(d,f,m){const y=d.clippingPlanes,p=d.clipIntersection,c=d.clipShadows,x=a.get(d);if(!i||y===null||y.length===0||o&&!c)o?u(null):h();else{const _=o?0:n,A=_*4;let S=x.clippingState||null;l.value=S,S=u(y,f,A,m);for(let M=0;M!==A;++M)S[M]=t[M];x.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,y){const p=d!==null?d.length:0;let c=null;if(p!==0){if(c=l.value,y!==!0||c===null){const x=m+p*4,_=f.matrixWorldInverse;r.getNormalMatrix(_),(c===null||c.length<x)&&(c=new Float32Array(x));for(let A=0,S=m;A!==p;++A,S+=4)s.copy(d[A]).applyMatrix4(_,r),s.normal.toArray(c,S),c[S+3]=s.constant}l.value=c,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,c}}function Pu(a){let e=new WeakMap;function t(s,r){return r===Ao?s.mapping=On:r===Eo&&(s.mapping=Un),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const r=s.mapping;if(r===Ao||r===Eo)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const h=new js(l.height/2);return h.fromEquirectangularTexture(a,s),e.set(s,h),s.addEventListener("dispose",i),t(h.texture,s.mapping)}else return null}}return s}function i(s){const r=s.target;r.removeEventListener("dispose",i);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Bu extends gr{constructor(e=-1,t=1,n=1,i=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-e,s=n+e,r=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,s=o+h*this.view.width,r-=u*this.view.offsetY,l=r-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,r,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fn=4,Da=[.125,.215,.35,.446,.526,.582],rn=20,bo=new Bu,ka=new Re;let _o=null;const an=(1+Math.sqrt(5))/2,Pn=1/an,Ra=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,an,Pn),new I(0,an,-Pn),new I(Pn,0,an),new I(-Pn,0,an),new I(an,Pn,0),new I(-an,Pn,0)];class Ia{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_o=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,i,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_o),e.scissorTest=!1,Pi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===On||e.mapping===Un?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_o=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ft,minFilter:ft,generateMipmaps:!1,type:Qn,format:Et,encoding:pn,depthBuffer:!1},i=Pa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pa(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fu(o)),this._blurMaterial=Nu(o,e,t)}return i}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,n,i){const r=new pt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ka),u.toneMapping=zt,u.autoClear=!1;const m=new fr({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),y=new lt(new ri,m);let p=!1;const c=e.background;c?c.isColor&&(m.color.copy(c),e.background=null,p=!0):(m.color.copy(ka),p=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(r.up.set(0,l[x],0),r.lookAt(h[x],0,0)):_===1?(r.up.set(0,0,l[x]),r.lookAt(0,h[x],0)):(r.up.set(0,l[x],0),r.lookAt(0,0,h[x]));const A=this._cubeSize;Pi(i,_*A,x>2?A:0,A,A),u.setRenderTarget(i),p&&u.render(y,r),u.render(e,r)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=c}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===On||e.mapping===Un;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ba());const o=i?this._cubemapMaterial:this._equirectMaterial,s=new lt(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=e;const l=this._cubeSize;Pi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,bo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Ra[(i-1)%Ra.length];this._blur(e,i-1,i,o,s)}t.autoClear=n}_blur(e,t,n,i,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",o),this._halfBlur(s,e,n,n,i,"longitudinal",o)}_halfBlur(e,t,n,i,o,s,r){const l=this._renderer,h=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new lt(this._lodPlanes[i],h),f=h.uniforms,m=this._sizeLods[n]-1,y=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*rn-1),p=o/y,c=isFinite(o)?1+Math.floor(u*p):rn;c>rn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${rn}`);const x=[];let _=0;for(let B=0;B<rn;++B){const w=B/p,T=Math.exp(-w*w/2);x.push(T),B===0?_+=T:B<c&&(_+=2*T)}for(let B=0;B<x.length;B++)x[B]=x[B]/_;f.envMap.value=e.texture,f.samples.value=c,f.weights.value=x,f.latitudinal.value=s==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:A}=this;f.dTheta.value=y,f.mipInt.value=A-n;const S=this._sizeLods[i],M=3*S*(i>A-Fn?i-A+Fn:0),E=4*(this._cubeSize-S);Pi(t,M,E,3*S,2*S),l.setRenderTarget(t),l.render(d,bo)}}function Fu(a){const e=[],t=[],n=[];let i=a;const o=a-Fn+1+Da.length;for(let s=0;s<o;s++){const r=Math.pow(2,i);t.push(r);let l=1/r;s>a-Fn?l=Da[s-a+Fn-1]:s===0&&(l=0),n.push(l);const h=1/(r-2),u=-h,d=1+h,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,y=6,p=3,c=2,x=1,_=new Float32Array(p*y*m),A=new Float32Array(c*y*m),S=new Float32Array(x*y*m);for(let E=0;E<m;E++){const B=E%3*2/3-1,w=E>2?0:-1,T=[B,w,0,B+2/3,w,0,B+2/3,w+1,0,B,w,0,B+2/3,w+1,0,B,w+1,0];_.set(T,p*y*E),A.set(f,c*y*E);const P=[E,E,E,E,E,E];S.set(P,x*y*E)}const M=new yn;M.setAttribute("position",new Ct(_,p)),M.setAttribute("uv",new Ct(A,c)),M.setAttribute("faceIndex",new Ct(S,x)),e.push(M),i>Fn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pa(a,e,t){const n=new mn(a,e,t);return n.texture.mapping=zi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pi(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Nu(a,e,t){const n=new Float32Array(rn),i=new I(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:rn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function Ba(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function Fa(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function Bo(){return`

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
	`}function zu(a){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const l=r.mapping,h=l===Ao||l===Eo,u=l===On||l===Un;if(h||u)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=e.get(r);return t===null&&(t=new Ia(a)),d=h?t.fromEquirectangular(r,d):t.fromCubemap(r,d),e.set(r,d),d.texture}else{if(e.has(r))return e.get(r).texture;{const d=r.image;if(h&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new Ia(a));const f=h?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,f),r.addEventListener("dispose",o),f.texture}else return null}}}return r}function i(r){let l=0;const h=6;for(let u=0;u<h;u++)r[u]!==void 0&&l++;return l===h}function o(r){const l=r.target;l.removeEventListener("dispose",o);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Wu(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ou(a,e,t,n){const i={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);f.removeEventListener("dispose",s),delete i[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(d,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const y in f)e.update(f[y],34962);const m=d.morphAttributes;for(const y in m){const p=m[y];for(let c=0,x=p.length;c<x;c++)e.update(p[c],34962)}}function h(d){const f=[],m=d.index,y=d.attributes.position;let p=0;if(m!==null){const _=m.array;p=m.version;for(let A=0,S=_.length;A<S;A+=3){const M=_[A+0],E=_[A+1],B=_[A+2];f.push(M,E,E,B,B,M)}}else{const _=y.array;p=y.version;for(let A=0,S=_.length/3-1;A<S;A+=3){const M=A+0,E=A+1,B=A+2;f.push(M,E,E,B,B,M)}}const c=new(sr(f)?mr:pr)(f,1);c.version=p;const x=o.get(d);x&&e.remove(x),o.set(d,c)}function u(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&h(d)}else h(d);return o.get(d)}return{get:r,update:l,getWireframeAttribute:u}}function Uu(a,e,t,n){const i=n.isWebGL2;let o;function s(f){o=f}let r,l;function h(f){r=f.type,l=f.bytesPerElement}function u(f,m){a.drawElements(o,m,r,f*l),t.update(m,o,1)}function d(f,m,y){if(y===0)return;let p,c;if(i)p=a,c="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[c](o,m,r,f*l,y),t.update(m,o,y)}this.setMode=s,this.setIndex=h,this.render=u,this.renderInstances=d}function Gu(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,r){switch(t.calls++,s){case 4:t.triangles+=r*(o/3);break;case 1:t.lines+=r*(o/2);break;case 3:t.lines+=r*(o-1);break;case 2:t.lines+=r*o;break;case 0:t.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Hu(a,e){return a[0]-e[0]}function Vu(a,e){return Math.abs(e[1])-Math.abs(a[1])}function qu(a,e,t){const n={},i=new Float32Array(8),o=new WeakMap,s=new Xe,r=[];for(let h=0;h<8;h++)r[h]=[h,0];function l(h,u,d,f){const m=h.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,c=p!==void 0?p.length:0;let x=o.get(u);if(x===void 0||x.count!==c){let X=function(){R.dispose(),o.delete(u),u.removeEventListener("dispose",X)};var y=X;x!==void 0&&x.texture.dispose();const S=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,B=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let P=0;S===!0&&(P=1),M===!0&&(P=2),E===!0&&(P=3);let Y=u.attributes.position.count*P,ae=1;Y>e.maxTextureSize&&(ae=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const z=new Float32Array(Y*ae*4*c),R=new cr(z,Y,ae,c);R.type=hn,R.needsUpdate=!0;const q=P*4;for(let J=0;J<c;J++){const H=B[J],k=w[J],F=T[J],$=Y*ae*4*J;for(let K=0;K<H.count;K++){const j=K*q;S===!0&&(s.fromBufferAttribute(H,K),z[$+j+0]=s.x,z[$+j+1]=s.y,z[$+j+2]=s.z,z[$+j+3]=0),M===!0&&(s.fromBufferAttribute(k,K),z[$+j+4]=s.x,z[$+j+5]=s.y,z[$+j+6]=s.z,z[$+j+7]=0),E===!0&&(s.fromBufferAttribute(F,K),z[$+j+8]=s.x,z[$+j+9]=s.y,z[$+j+10]=s.z,z[$+j+11]=F.itemSize===4?s.w:1)}}x={count:c,texture:R,size:new Ie(Y,ae)},o.set(u,x),u.addEventListener("dispose",X)}let _=0;for(let S=0;S<m.length;S++)_+=m[S];const A=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(a,"morphTargetBaseInfluence",A),f.getUniforms().setValue(a,"morphTargetInfluences",m),f.getUniforms().setValue(a,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}else{const p=m===void 0?0:m.length;let c=n[u.id];if(c===void 0||c.length!==p){c=[];for(let M=0;M<p;M++)c[M]=[M,0];n[u.id]=c}for(let M=0;M<p;M++){const E=c[M];E[0]=M,E[1]=m[M]}c.sort(Vu);for(let M=0;M<8;M++)M<p&&c[M][1]?(r[M][0]=c[M][0],r[M][1]=c[M][1]):(r[M][0]=Number.MAX_SAFE_INTEGER,r[M][1]=0);r.sort(Hu);const x=u.morphAttributes.position,_=u.morphAttributes.normal;let A=0;for(let M=0;M<8;M++){const E=r[M],B=E[0],w=E[1];B!==Number.MAX_SAFE_INTEGER&&w?(x&&u.getAttribute("morphTarget"+M)!==x[B]&&u.setAttribute("morphTarget"+M,x[B]),_&&u.getAttribute("morphNormal"+M)!==_[B]&&u.setAttribute("morphNormal"+M,_[B]),i[M]=w,A+=w):(x&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),_&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const S=u.morphTargetsRelative?1:1-A;f.getUniforms().setValue(a,"morphTargetBaseInfluence",S),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Yu(a,e,t,n){let i=new WeakMap;function o(l){const h=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==h&&(e.update(d),i.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function s(){i=new WeakMap}function r(l){const h=l.target;h.removeEventListener("dispose",r),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:s}}const vr=new yt,br=new cr,_r=new Rs,Mr=new yr,Na=[],za=[],Wa=new Float32Array(16),Oa=new Float32Array(9),Ua=new Float32Array(4);function qn(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let o=Na[i];if(o===void 0&&(o=new Float32Array(i),Na[i]=o),e!==0){n.toArray(o,0);for(let s=1,r=0;s!==e;++s)r+=t,a[s].toArray(o,r)}return o}function Qe(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function et(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Ui(a,e){let t=za[e];t===void 0&&(t=new Int32Array(e),za[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Xu(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Ju(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qe(t,e))return;a.uniform2fv(this.addr,e),et(t,e)}}function ju(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qe(t,e))return;a.uniform3fv(this.addr,e),et(t,e)}}function Ku(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qe(t,e))return;a.uniform4fv(this.addr,e),et(t,e)}}function Zu(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),et(t,e)}else{if(Qe(t,n))return;Ua.set(n),a.uniformMatrix2fv(this.addr,!1,Ua),et(t,n)}}function $u(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),et(t,e)}else{if(Qe(t,n))return;Oa.set(n),a.uniformMatrix3fv(this.addr,!1,Oa),et(t,n)}}function Qu(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),et(t,e)}else{if(Qe(t,n))return;Wa.set(n),a.uniformMatrix4fv(this.addr,!1,Wa),et(t,n)}}function ec(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function tc(a,e){const t=this.cache;Qe(t,e)||(a.uniform2iv(this.addr,e),et(t,e))}function nc(a,e){const t=this.cache;Qe(t,e)||(a.uniform3iv(this.addr,e),et(t,e))}function ic(a,e){const t=this.cache;Qe(t,e)||(a.uniform4iv(this.addr,e),et(t,e))}function oc(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function ac(a,e){const t=this.cache;Qe(t,e)||(a.uniform2uiv(this.addr,e),et(t,e))}function rc(a,e){const t=this.cache;Qe(t,e)||(a.uniform3uiv(this.addr,e),et(t,e))}function sc(a,e){const t=this.cache;Qe(t,e)||(a.uniform4uiv(this.addr,e),et(t,e))}function hc(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||vr,i)}function lc(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||_r,i)}function uc(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Mr,i)}function cc(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||br,i)}function dc(a){switch(a){case 5126:return Xu;case 35664:return Ju;case 35665:return ju;case 35666:return Ku;case 35674:return Zu;case 35675:return $u;case 35676:return Qu;case 5124:case 35670:return ec;case 35667:case 35671:return tc;case 35668:case 35672:return nc;case 35669:case 35673:return ic;case 5125:return oc;case 36294:return ac;case 36295:return rc;case 36296:return sc;case 35678:case 36198:case 36298:case 36306:case 35682:return hc;case 35679:case 36299:case 36307:return lc;case 35680:case 36300:case 36308:case 36293:return uc;case 36289:case 36303:case 36311:case 36292:return cc}}function fc(a,e){a.uniform1fv(this.addr,e)}function pc(a,e){const t=qn(e,this.size,2);a.uniform2fv(this.addr,t)}function mc(a,e){const t=qn(e,this.size,3);a.uniform3fv(this.addr,t)}function gc(a,e){const t=qn(e,this.size,4);a.uniform4fv(this.addr,t)}function yc(a,e){const t=qn(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function xc(a,e){const t=qn(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function wc(a,e){const t=qn(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function vc(a,e){a.uniform1iv(this.addr,e)}function bc(a,e){a.uniform2iv(this.addr,e)}function _c(a,e){a.uniform3iv(this.addr,e)}function Mc(a,e){a.uniform4iv(this.addr,e)}function Sc(a,e){a.uniform1uiv(this.addr,e)}function Tc(a,e){a.uniform2uiv(this.addr,e)}function Ac(a,e){a.uniform3uiv(this.addr,e)}function Ec(a,e){a.uniform4uiv(this.addr,e)}function Cc(a,e,t){const n=e.length,i=Ui(t,n);a.uniform1iv(this.addr,i);for(let o=0;o!==n;++o)t.setTexture2D(e[o]||vr,i[o])}function Lc(a,e,t){const n=e.length,i=Ui(t,n);a.uniform1iv(this.addr,i);for(let o=0;o!==n;++o)t.setTexture3D(e[o]||_r,i[o])}function Dc(a,e,t){const n=e.length,i=Ui(t,n);a.uniform1iv(this.addr,i);for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Mr,i[o])}function kc(a,e,t){const n=e.length,i=Ui(t,n);a.uniform1iv(this.addr,i);for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||br,i[o])}function Rc(a){switch(a){case 5126:return fc;case 35664:return pc;case 35665:return mc;case 35666:return gc;case 35674:return yc;case 35675:return xc;case 35676:return wc;case 5124:case 35670:return vc;case 35667:case 35671:return bc;case 35668:case 35672:return _c;case 35669:case 35673:return Mc;case 5125:return Sc;case 36294:return Tc;case 36295:return Ac;case 36296:return Ec;case 35678:case 36198:case 36298:case 36306:case 35682:return Cc;case 35679:case 36299:case 36307:return Lc;case 35680:case 36300:case 36308:case 36293:return Dc;case 36289:case 36303:case 36311:case 36292:return kc}}class Ic{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=dc(t.type)}}class Pc{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Rc(t.type)}}class Bc{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let o=0,s=i.length;o!==s;++o){const r=i[o];r.setValue(e,t[r.id],n)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function Ga(a,e){a.seq.push(e),a.map[e.id]=e}function Fc(a,e,t){const n=a.name,i=n.length;for(Mo.lastIndex=0;;){const o=Mo.exec(n),s=Mo.lastIndex;let r=o[1];const l=o[2]==="]",h=o[3];if(l&&(r=r|0),h===void 0||h==="["&&s+2===i){Ga(t,h===void 0?new Ic(r,a,e):new Pc(r,a,e));break}else{let d=t.map[r];d===void 0&&(d=new Bc(r),Ga(t,d)),t=d}}}class Ni{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const o=e.getActiveUniform(t,i),s=e.getUniformLocation(t,o.name);Fc(o,s,this)}}setValue(e,t,n,i){const o=this.map[t];o!==void 0&&o.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let o=0,s=t.length;o!==s;++o){const r=t[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,o=e.length;i!==o;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Ha(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Nc=0;function zc(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=i;s<o;s++){const r=s+1;n.push(`${r===e?">":" "} ${r}: ${t[s]}`)}return n.join(`
`)}function Wc(a){switch(a){case pn:return["Linear","( value )"];case Ne:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Va(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+zc(a.getShaderSource(e),s)}else return i}function Oc(a,e){const t=Wc(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Uc(a,e){let t;switch(e){case as:t="Linear";break;case rs:t="Reinhard";break;case ss:t="OptimizedCineon";break;case hs:t="ACESFilmic";break;case ls:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gc(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($n).join(`
`)}function Hc(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vc(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const o=a.getActiveAttrib(e,i),s=o.name;let r=1;o.type===35674&&(r=2),o.type===35675&&(r=3),o.type===35676&&(r=4),t[s]={type:o.type,location:a.getAttribLocation(e,s),locationSize:r}}return t}function $n(a){return a!==""}function qa(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ya(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ro(a){return a.replace(qc,Yc)}function Yc(a,e){const t=Me[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ro(t)}const Xc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xa(a){return a.replace(Xc,Jc)}function Jc(a,e,t,n){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Ja(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jc(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===er?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Nr?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Kc(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case On:case Un:e="ENVMAP_TYPE_CUBE";break;case zi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zc(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Un:e="ENVMAP_MODE_REFRACTION";break}return e}function $c(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ir:e="ENVMAP_BLENDING_MULTIPLY";break;case is:e="ENVMAP_BLENDING_MIX";break;case os:e="ENVMAP_BLENDING_ADD";break}return e}function Qc(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ed(a,e,t,n){const i=a.getContext(),o=t.defines;let s=t.vertexShader,r=t.fragmentShader;const l=jc(t),h=Kc(t),u=Zc(t),d=$c(t),f=Qc(t),m=t.isWebGL2?"":Gc(t),y=Hc(o),p=i.createProgram();let c,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=[y].filter($n).join(`
`),c.length>0&&(c+=`
`),x=[m,y].filter($n).join(`
`),x.length>0&&(x+=`
`)):(c=[Ja(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($n).join(`
`),x=[m,Ja(t),"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zt?"#define TONE_MAPPING":"",t.toneMapping!==zt?Me.tonemapping_pars_fragment:"",t.toneMapping!==zt?Uc("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Me.encodings_pars_fragment,Oc("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($n).join(`
`)),s=Ro(s),s=qa(s,t),s=Ya(s,t),r=Ro(r),r=qa(r,t),r=Ya(r,t),s=Xa(s),r=Xa(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,c=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,x=["#define varying in",t.glslVersion===ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const A=_+c+s,S=_+x+r,M=Ha(i,35633,A),E=Ha(i,35632,S);if(i.attachShader(p,M),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),a.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(M).trim(),Y=i.getShaderInfoLog(E).trim();let ae=!0,z=!0;if(i.getProgramParameter(p,35714)===!1){ae=!1;const R=Va(i,M,"vertex"),q=Va(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+R+`
`+q)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||Y==="")&&(z=!1);z&&(this.diagnostics={runnable:ae,programLog:T,vertexShader:{log:P,prefix:c},fragmentShader:{log:Y,prefix:x}})}i.deleteShader(M),i.deleteShader(E);let B;this.getUniforms=function(){return B===void 0&&(B=new Ni(i,p)),B};let w;return this.getAttributes=function(){return w===void 0&&(w=Vc(i,p)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Nc++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}let td=0;class nd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new id(e),t.set(e,n)),n}}class id{constructor(e){this.id=td++,this.code=e,this.usedTimes=0}}function od(a,e,t,n,i,o,s){const r=new dr,l=new nd,h=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(w,T,P,Y,ae){const z=Y.fog,R=ae.geometry,q=w.isMeshStandardMaterial?Y.environment:null,X=(w.isMeshStandardMaterial?t:e).get(w.envMap||q),J=!!X&&X.mapping===zi?X.image.height:null,H=y[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const k=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,F=k!==void 0?k.length:0;let $=0;R.morphAttributes.position!==void 0&&($=1),R.morphAttributes.normal!==void 0&&($=2),R.morphAttributes.color!==void 0&&($=3);let K,j,le,ge;if(H){const Pe=At[H];K=Pe.vertexShader,j=Pe.fragmentShader}else K=w.vertexShader,j=w.fragmentShader,l.update(w),le=l.getVertexShaderID(w),ge=l.getFragmentShaderID(w);const V=a.getRenderTarget(),De=w.alphaTest>0,pe=w.clearcoat>0,ye=w.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:w.type,vertexShader:K,fragmentShader:j,defines:w.defines,customVertexShaderID:le,customFragmentShaderID:ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,instancing:ae.isInstancedMesh===!0,instancingColor:ae.isInstancedMesh===!0&&ae.instanceColor!==null,supportsVertexTextures:f,outputEncoding:V===null?a.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:pn,map:!!w.map,matcap:!!w.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:J,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===Cs,tangentSpaceNormalMap:w.normalMapType===rr,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===Ne,clearcoat:pe,clearcoatMap:pe&&!!w.clearcoatMap,clearcoatRoughnessMap:pe&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!w.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!w.iridescenceMap,iridescenceThicknessMap:ye&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===Nn,alphaMap:!!w.alphaMap,alphaTest:De,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!R.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||w.transmission>0||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||w.sheen>0||!!w.sheenColorMap||!!w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!z,useFog:w.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:d,skinning:ae.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:$,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&P.length>0,shadowMapType:a.shadowMap.type,toneMapping:w.toneMapped?a.toneMapping:zt,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Kt,flipSided:w.side===gt,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function c(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)T.push(P),T.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(x(T,w),_(T,w),T.push(a.outputEncoding)),T.push(w.customProgramCacheKey),T.join()}function x(w,T){w.push(T.precision),w.push(T.outputEncoding),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.combine),w.push(T.vertexUvs),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function _(w,T){r.disableAll(),T.isWebGL2&&r.enable(0),T.supportsVertexTextures&&r.enable(1),T.instancing&&r.enable(2),T.instancingColor&&r.enable(3),T.map&&r.enable(4),T.matcap&&r.enable(5),T.envMap&&r.enable(6),T.lightMap&&r.enable(7),T.aoMap&&r.enable(8),T.emissiveMap&&r.enable(9),T.bumpMap&&r.enable(10),T.normalMap&&r.enable(11),T.objectSpaceNormalMap&&r.enable(12),T.tangentSpaceNormalMap&&r.enable(13),T.clearcoat&&r.enable(14),T.clearcoatMap&&r.enable(15),T.clearcoatRoughnessMap&&r.enable(16),T.clearcoatNormalMap&&r.enable(17),T.iridescence&&r.enable(18),T.iridescenceMap&&r.enable(19),T.iridescenceThicknessMap&&r.enable(20),T.displacementMap&&r.enable(21),T.specularMap&&r.enable(22),T.roughnessMap&&r.enable(23),T.metalnessMap&&r.enable(24),T.gradientMap&&r.enable(25),T.alphaMap&&r.enable(26),T.alphaTest&&r.enable(27),T.vertexColors&&r.enable(28),T.vertexAlphas&&r.enable(29),T.vertexUvs&&r.enable(30),T.vertexTangents&&r.enable(31),T.uvsVertexOnly&&r.enable(32),w.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.skinning&&r.enable(4),T.morphTargets&&r.enable(5),T.morphNormals&&r.enable(6),T.morphColors&&r.enable(7),T.premultipliedAlpha&&r.enable(8),T.shadowMapEnabled&&r.enable(9),T.physicallyCorrectLights&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.specularIntensityMap&&r.enable(15),T.specularColorMap&&r.enable(16),T.transmission&&r.enable(17),T.transmissionMap&&r.enable(18),T.thicknessMap&&r.enable(19),T.sheen&&r.enable(20),T.sheenColorMap&&r.enable(21),T.sheenRoughnessMap&&r.enable(22),T.decodeVideoTexture&&r.enable(23),T.opaque&&r.enable(24),w.push(r.mask)}function A(w){const T=y[w.type];let P;if(T){const Y=At[T];P=qs.clone(Y.uniforms)}else P=w.uniforms;return P}function S(w,T){let P;for(let Y=0,ae=h.length;Y<ae;Y++){const z=h[Y];if(z.cacheKey===T){P=z,++P.usedTimes;break}}return P===void 0&&(P=new ed(a,T,w,o),h.push(P)),P}function M(w){if(--w.usedTimes===0){const T=h.indexOf(w);h[T]=h[h.length-1],h.pop(),w.destroy()}}function E(w){l.remove(w)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:A,acquireProgram:S,releaseProgram:M,releaseShaderCache:E,programs:h,dispose:B}}function ad(){let a=new WeakMap;function e(o){let s=a.get(o);return s===void 0&&(s={},a.set(o,s)),s}function t(o){a.delete(o)}function n(o,s,r){a.get(o)[s]=r}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function rd(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function ja(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Ka(){const a=[];let e=0;const t=[],n=[],i=[];function o(){e=0,t.length=0,n.length=0,i.length=0}function s(d,f,m,y,p,c){let x=a[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:m,groupOrder:y,renderOrder:d.renderOrder,z:p,group:c},a[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=m,x.groupOrder=y,x.renderOrder=d.renderOrder,x.z=p,x.group=c),e++,x}function r(d,f,m,y,p,c){const x=s(d,f,m,y,p,c);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function l(d,f,m,y,p,c){const x=s(d,f,m,y,p,c);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||rd),n.length>1&&n.sort(f||ja),i.length>1&&i.sort(f||ja)}function u(){for(let d=e,f=a.length;d<f;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:o,push:r,unshift:l,finish:u,sort:h}}function sd(){let a=new WeakMap;function e(n,i){const o=a.get(n);let s;return o===void 0?(s=new Ka,a.set(n,[s])):i>=o.length?(s=new Ka,o.push(s)):s=o[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function hd(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Re};break;case"SpotLight":t={position:new I,direction:new I,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new I,halfWidth:new I,halfHeight:new I};break}return a[e.id]=t,t}}}function ld(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let ud=0;function cd(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function dd(a,e){const t=new hd,n=ld(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new I);const o=new I,s=new Je,r=new Je;function l(u,d){let f=0,m=0,y=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let p=0,c=0,x=0,_=0,A=0,S=0,M=0,E=0,B=0,w=0;u.sort(cd);const T=d!==!0?Math.PI:1;for(let Y=0,ae=u.length;Y<ae;Y++){const z=u[Y],R=z.color,q=z.intensity,X=z.distance,J=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=R.r*q*T,m+=R.g*q*T,y+=R.b*q*T;else if(z.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(z.sh.coefficients[H],q);else if(z.isDirectionalLight){const H=t.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){const k=z.shadow,F=n.get(z);F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=z.shadow.matrix,S++}i.directional[p]=H,p++}else if(z.isSpotLight){const H=t.get(z);H.position.setFromMatrixPosition(z.matrixWorld),H.color.copy(R).multiplyScalar(q*T),H.distance=X,H.coneCos=Math.cos(z.angle),H.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),H.decay=z.decay,i.spot[x]=H;const k=z.shadow;if(z.map&&(i.spotLightMap[B]=z.map,B++,k.updateMatrices(z),z.castShadow&&w++),i.spotLightMatrix[x]=k.matrix,z.castShadow){const F=n.get(z);F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,i.spotShadow[x]=F,i.spotShadowMap[x]=J,E++}x++}else if(z.isRectAreaLight){const H=t.get(z);H.color.copy(R).multiplyScalar(q),H.halfWidth.set(z.width*.5,0,0),H.halfHeight.set(0,z.height*.5,0),i.rectArea[_]=H,_++}else if(z.isPointLight){const H=t.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity*T),H.distance=z.distance,H.decay=z.decay,z.castShadow){const k=z.shadow,F=n.get(z);F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,F.shadowCameraNear=k.camera.near,F.shadowCameraFar=k.camera.far,i.pointShadow[c]=F,i.pointShadowMap[c]=J,i.pointShadowMatrix[c]=z.shadow.matrix,M++}i.point[c]=H,c++}else if(z.isHemisphereLight){const H=t.get(z);H.skyColor.copy(z.color).multiplyScalar(q*T),H.groundColor.copy(z.groundColor).multiplyScalar(q*T),i.hemi[A]=H,A++}}_>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=y;const P=i.hash;(P.directionalLength!==p||P.pointLength!==c||P.spotLength!==x||P.rectAreaLength!==_||P.hemiLength!==A||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==E||P.numSpotMaps!==B)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=_,i.point.length=c,i.hemi.length=A,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+B-w,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=w,P.directionalLength=p,P.pointLength=c,P.spotLength=x,P.rectAreaLength=_,P.hemiLength=A,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=E,P.numSpotMaps=B,i.version=ud++)}function h(u,d){let f=0,m=0,y=0,p=0,c=0;const x=d.matrixWorldInverse;for(let _=0,A=u.length;_<A;_++){const S=u[_];if(S.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(x),f++}else if(S.isSpotLight){const M=i.spot[y];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(x),y++}else if(S.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(x),r.identity(),s.copy(S.matrixWorld),s.premultiply(x),r.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),p++}else if(S.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(x),m++}else if(S.isHemisphereLight){const M=i.hemi[c];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(x),c++}}}return{setup:l,setupView:h,state:i}}function Za(a,e){const t=new dd(a,e),n=[],i=[];function o(){n.length=0,i.length=0}function s(d){n.push(d)}function r(d){i.push(d)}function l(d){t.setup(n,d)}function h(d){t.setupView(n,d)}return{init:o,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:h,pushLight:s,pushShadow:r}}function fd(a,e){let t=new WeakMap;function n(o,s=0){const r=t.get(o);let l;return r===void 0?(l=new Za(a,e),t.set(o,[l])):s>=r.length?(l=new Za(a,e),r.push(l)):l=r[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class pd extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=As,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class md extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yd=`uniform sampler2D shadow_pass;
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
}`;function xd(a,e,t){let n=new xr;const i=new Ie,o=new Ie,s=new Xe,r=new pd({depthPacking:Es}),l=new md,h={},u=t.maxTextureSize,d={0:gt,1:Wn,2:Kt},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:gd,fragmentShader:yd}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const y=new yn;y.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new lt(y,f),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er,this.render=function(S,M,E){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||S.length===0)return;const B=a.getRenderTarget(),w=a.getActiveCubeFace(),T=a.getActiveMipmapLevel(),P=a.state;P.setBlending(Zt),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let Y=0,ae=S.length;Y<ae;Y++){const z=S[Y],R=z.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const q=R.getFrameExtents();if(i.multiply(q),o.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/q.x),i.x=o.x*q.x,R.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/q.y),i.y=o.y*q.y,R.mapSize.y=o.y)),R.map===null){const J=this.type!==Zn?{minFilter:tt,magFilter:tt}:{};R.map=new mn(i.x,i.y,J),R.map.texture.name=z.name+".shadowMap",R.camera.updateProjectionMatrix()}a.setRenderTarget(R.map),a.clear();const X=R.getViewportCount();for(let J=0;J<X;J++){const H=R.getViewport(J);s.set(o.x*H.x,o.y*H.y,o.x*H.z,o.y*H.w),P.viewport(s),R.updateMatrices(z,J),n=R.getFrustum(),A(M,E,R.camera,z,this.type)}R.isPointLightShadow!==!0&&this.type===Zn&&x(R,E),R.needsUpdate=!1}c.needsUpdate=!1,a.setRenderTarget(B,w,T)};function x(S,M){const E=e.update(p);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new mn(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(M,null,E,f,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(M,null,E,m,p,null)}function _(S,M,E,B,w,T){let P=null;const Y=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(Y!==void 0?P=Y:P=E.isPointLight===!0?l:r,a.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const ae=P.uuid,z=M.uuid;let R=h[ae];R===void 0&&(R={},h[ae]=R);let q=R[z];q===void 0&&(q=P.clone(),R[z]=q),P=q}return P.visible=M.visible,P.wireframe=M.wireframe,T===Zn?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:d[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=B,P.farDistance=w),P}function A(S,M,E,B,w){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Zn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);const Y=e.update(S),ae=S.material;if(Array.isArray(ae)){const z=Y.groups;for(let R=0,q=z.length;R<q;R++){const X=z[R],J=ae[X.materialIndex];if(J&&J.visible){const H=_(S,J,B,E.near,E.far,w);a.renderBufferDirect(E,null,Y,H,S,X)}}}else if(ae.visible){const z=_(S,ae,B,E.near,E.far,w);a.renderBufferDirect(E,null,Y,z,S,null)}}const P=S.children;for(let Y=0,ae=P.length;Y<ae;Y++)A(P[Y],M,E,B,w)}}function wd(a,e,t){const n=t.isWebGL2;function i(){let C=!1;const oe=new Xe;let W=null;const ie=new Xe(0,0,0,0);return{setMask:function(te){W!==te&&!C&&(a.colorMask(te,te,te,te),W=te)},setLocked:function(te){C=te},setClear:function(te,Ae,He,We,Ut){Ut===!0&&(te*=We,Ae*=We,He*=We),oe.set(te,Ae,He,We),ie.equals(oe)===!1&&(a.clearColor(te,Ae,He,We),ie.copy(oe))},reset:function(){C=!1,W=null,ie.set(-1,0,0,0)}}}function o(){let C=!1,oe=null,W=null,ie=null;return{setTest:function(te){te?De(2929):pe(2929)},setMask:function(te){oe!==te&&!C&&(a.depthMask(te),oe=te)},setFunc:function(te){if(W!==te){if(te)switch(te){case Kr:a.depthFunc(512);break;case Zr:a.depthFunc(519);break;case $r:a.depthFunc(513);break;case To:a.depthFunc(515);break;case Qr:a.depthFunc(514);break;case es:a.depthFunc(518);break;case ts:a.depthFunc(516);break;case ns:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);W=te}},setLocked:function(te){C=te},setClear:function(te){ie!==te&&(a.clearDepth(te),ie=te)},reset:function(){C=!1,oe=null,W=null,ie=null}}}function s(){let C=!1,oe=null,W=null,ie=null,te=null,Ae=null,He=null,We=null,Ut=null;return{setTest:function(Be){C||(Be?De(2960):pe(2960))},setMask:function(Be){oe!==Be&&!C&&(a.stencilMask(Be),oe=Be)},setFunc:function(Be,Dt,ut){(W!==Be||ie!==Dt||te!==ut)&&(a.stencilFunc(Be,Dt,ut),W=Be,ie=Dt,te=ut)},setOp:function(Be,Dt,ut){(Ae!==Be||He!==Dt||We!==ut)&&(a.stencilOp(Be,Dt,ut),Ae=Be,He=Dt,We=ut)},setLocked:function(Be){C=Be},setClear:function(Be){Ut!==Be&&(a.clearStencil(Be),Ut=Be)},reset:function(){C=!1,oe=null,W=null,ie=null,te=null,Ae=null,He=null,We=null,Ut=null}}}const r=new i,l=new o,h=new s,u=new WeakMap,d=new WeakMap;let f={},m={},y=new WeakMap,p=[],c=null,x=!1,_=null,A=null,S=null,M=null,E=null,B=null,w=null,T=!1,P=null,Y=null,ae=null,z=null,R=null;const q=a.getParameter(35661);let X=!1,J=0;const H=a.getParameter(7938);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=J>=2);let k=null,F={};const $=a.getParameter(3088),K=a.getParameter(2978),j=new Xe().fromArray($),le=new Xe().fromArray(K);function ge(C,oe,W){const ie=new Uint8Array(4),te=a.createTexture();a.bindTexture(C,te),a.texParameteri(C,10241,9728),a.texParameteri(C,10240,9728);for(let Ae=0;Ae<W;Ae++)a.texImage2D(oe+Ae,0,6408,1,1,0,6408,5121,ie);return te}const V={};V[3553]=ge(3553,3553,1),V[34067]=ge(34067,34069,6),r.setClear(0,0,0,1),l.setClear(1),h.setClear(0),De(2929),l.setFunc(To),Ze(!1),Mt(Oo),De(2884),qe(Zt);function De(C){f[C]!==!0&&(a.enable(C),f[C]=!0)}function pe(C){f[C]!==!1&&(a.disable(C),f[C]=!1)}function ye(C,oe){return m[C]!==oe?(a.bindFramebuffer(C,oe),m[C]=oe,n&&(C===36009&&(m[36160]=oe),C===36160&&(m[36009]=oe)),!0):!1}function se(C,oe){let W=p,ie=!1;if(C)if(W=y.get(oe),W===void 0&&(W=[],y.set(oe,W)),C.isWebGLMultipleRenderTargets){const te=C.texture;if(W.length!==te.length||W[0]!==36064){for(let Ae=0,He=te.length;Ae<He;Ae++)W[Ae]=36064+Ae;W.length=te.length,ie=!0}}else W[0]!==36064&&(W[0]=36064,ie=!0);else W[0]!==1029&&(W[0]=1029,ie=!0);ie&&(t.isWebGL2?a.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}function Pe(C){return c!==C?(a.useProgram(C),c=C,!0):!1}const _e={[Bn]:32774,[Wr]:32778,[Or]:32779};if(n)_e[Vo]=32775,_e[qo]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(_e[Vo]=C.MIN_EXT,_e[qo]=C.MAX_EXT)}const fe={[Ur]:0,[Gr]:1,[Hr]:768,[tr]:770,[jr]:776,[Xr]:774,[qr]:772,[Vr]:769,[nr]:771,[Jr]:775,[Yr]:773};function qe(C,oe,W,ie,te,Ae,He,We){if(C===Zt){x===!0&&(pe(3042),x=!1);return}if(x===!1&&(De(3042),x=!0),C!==zr){if(C!==_||We!==T){if((A!==Bn||E!==Bn)&&(a.blendEquation(32774),A=Bn,E=Bn),We)switch(C){case Nn:a.blendFuncSeparate(1,771,1,771);break;case Uo:a.blendFunc(1,1);break;case Go:a.blendFuncSeparate(0,769,0,1);break;case Ho:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Nn:a.blendFuncSeparate(770,771,1,771);break;case Uo:a.blendFunc(770,1);break;case Go:a.blendFuncSeparate(0,769,0,1);break;case Ho:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}S=null,M=null,B=null,w=null,_=C,T=We}return}te=te||oe,Ae=Ae||W,He=He||ie,(oe!==A||te!==E)&&(a.blendEquationSeparate(_e[oe],_e[te]),A=oe,E=te),(W!==S||ie!==M||Ae!==B||He!==w)&&(a.blendFuncSeparate(fe[W],fe[ie],fe[Ae],fe[He]),S=W,M=ie,B=Ae,w=He),_=C,T=null}function it(C,oe){C.side===Kt?pe(2884):De(2884);let W=C.side===gt;oe&&(W=!W),Ze(W),C.blending===Nn&&C.transparent===!1?qe(Zt):qe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),r.setMask(C.colorWrite);const ie=C.stencilWrite;h.setTest(ie),ie&&(h.setMask(C.stencilWriteMask),h.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),h.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ke(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?De(32926):pe(32926)}function Ze(C){P!==C&&(C?a.frontFace(2304):a.frontFace(2305),P=C)}function Mt(C){C!==Br?(De(2884),C!==Y&&(C===Oo?a.cullFace(1029):C===Fr?a.cullFace(1028):a.cullFace(1032))):pe(2884),Y=C}function Ye(C){C!==ae&&(X&&a.lineWidth(C),ae=C)}function ke(C,oe,W){C?(De(32823),(z!==oe||R!==W)&&(a.polygonOffset(oe,W),z=oe,R=W)):pe(32823)}function Lt(C){C?De(3089):pe(3089)}function St(C){C===void 0&&(C=33984+q-1),k!==C&&(a.activeTexture(C),k=C)}function b(C,oe){k===null&&St();let W=F[k];W===void 0&&(W={type:void 0,texture:void 0},F[k]=W),(W.type!==C||W.texture!==oe)&&(a.bindTexture(C,oe||V[C]),W.type=C,W.texture=oe)}function g(){const C=F[k];C!==void 0&&C.type!==void 0&&(a.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function U(){try{a.compressedTexImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{a.texSubImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{a.texSubImage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{a.texStorage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function N(){try{a.texStorage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{a.texImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function re(){try{a.texImage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(C){j.equals(C)===!1&&(a.scissor(C.x,C.y,C.z,C.w),j.copy(C))}function he(C){le.equals(C)===!1&&(a.viewport(C.x,C.y,C.z,C.w),le.copy(C))}function ve(C,oe){let W=d.get(oe);W===void 0&&(W=new WeakMap,d.set(oe,W));let ie=W.get(C);ie===void 0&&(ie=a.getUniformBlockIndex(oe,C.name),W.set(C,ie))}function Ee(C,oe){const ie=d.get(oe).get(C);u.get(C)!==ie&&(a.uniformBlockBinding(oe,ie,C.__bindingPointIndex),u.set(C,ie))}function ze(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},k=null,F={},m={},y=new WeakMap,p=[],c=null,x=!1,_=null,A=null,S=null,M=null,E=null,B=null,w=null,T=!1,P=null,Y=null,ae=null,z=null,R=null,j.set(0,0,a.canvas.width,a.canvas.height),le.set(0,0,a.canvas.width,a.canvas.height),r.reset(),l.reset(),h.reset()}return{buffers:{color:r,depth:l,stencil:h},enable:De,disable:pe,bindFramebuffer:ye,drawBuffers:se,useProgram:Pe,setBlending:qe,setMaterial:it,setFlipSided:Ze,setCullFace:Mt,setLineWidth:Ye,setPolygonOffset:ke,setScissorTest:Lt,activeTexture:St,bindTexture:b,unbindTexture:g,compressedTexImage2D:U,texImage2D:ce,texImage3D:re,updateUBOMapping:ve,uniformBlockBinding:Ee,texStorage2D:xe,texStorage3D:N,texSubImage2D:Z,texSubImage3D:Q,compressedTexSubImage2D:ne,scissor:ue,viewport:he,reset:ze}}function vd(a,e,t,n,i,o,s){const r=i.isWebGL2,l=i.maxTextures,h=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let p;const c=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,g){return x?new OffscreenCanvas(b,g):ei("canvas")}function A(b,g,U,Z){let Q=1;if((b.width>Z||b.height>Z)&&(Q=Z/Math.max(b.width,b.height)),Q<1||g===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ne=g?ko:Math.floor,xe=ne(Q*b.width),N=ne(Q*b.height);p===void 0&&(p=_(xe,N));const ce=U?_(xe,N):p;return ce.width=xe,ce.height=N,ce.getContext("2d").drawImage(b,0,0,xe,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+xe+"x"+N+")."),ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function S(b){return xa(b.width)&&xa(b.height)}function M(b){return r?!1:b.wrapS!==_t||b.wrapT!==_t||b.minFilter!==tt&&b.minFilter!==ft}function E(b,g){return b.generateMipmaps&&g&&b.minFilter!==tt&&b.minFilter!==ft}function B(b){a.generateMipmap(b)}function w(b,g,U,Z,Q=!1){if(r===!1)return g;if(b!==null){if(a[b]!==void 0)return a[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=g;return g===6403&&(U===5126&&(ne=33326),U===5131&&(ne=33325),U===5121&&(ne=33321)),g===33319&&(U===5126&&(ne=33328),U===5131&&(ne=33327),U===5121&&(ne=33323)),g===6408&&(U===5126&&(ne=34836),U===5131&&(ne=34842),U===5121&&(ne=Z===Ne&&Q===!1?35907:32856),U===32819&&(ne=32854),U===32820&&(ne=32855)),(ne===33325||ne===33326||ne===33327||ne===33328||ne===34842||ne===34836)&&e.get("EXT_color_buffer_float"),ne}function T(b,g,U){return E(b,U)===!0||b.isFramebufferTexture&&b.minFilter!==tt&&b.minFilter!==ft?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function P(b){return b===tt||b===Yo||b===Xo?9728:9729}function Y(b){const g=b.target;g.removeEventListener("dispose",Y),z(g),g.isVideoTexture&&y.delete(g)}function ae(b){const g=b.target;g.removeEventListener("dispose",ae),q(g)}function z(b){const g=n.get(b);if(g.__webglInit===void 0)return;const U=b.source,Z=c.get(U);if(Z){const Q=Z[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(b),Object.keys(Z).length===0&&c.delete(U)}n.remove(b)}function R(b){const g=n.get(b);a.deleteTexture(g.__webglTexture);const U=b.source,Z=c.get(U);delete Z[g.__cacheKey],s.memory.textures--}function q(b){const g=b.texture,U=n.get(b),Z=n.get(g);if(Z.__webglTexture!==void 0&&(a.deleteTexture(Z.__webglTexture),s.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)a.deleteFramebuffer(U.__webglFramebuffer[Q]),U.__webglDepthbuffer&&a.deleteRenderbuffer(U.__webglDepthbuffer[Q]);else{if(a.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&a.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&a.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Q=0;Q<U.__webglColorRenderbuffer.length;Q++)U.__webglColorRenderbuffer[Q]&&a.deleteRenderbuffer(U.__webglColorRenderbuffer[Q]);U.__webglDepthRenderbuffer&&a.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Q=0,ne=g.length;Q<ne;Q++){const xe=n.get(g[Q]);xe.__webglTexture&&(a.deleteTexture(xe.__webglTexture),s.memory.textures--),n.remove(g[Q])}n.remove(g),n.remove(b)}let X=0;function J(){X=0}function H(){const b=X;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),X+=1,b}function k(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.encoding),g.join()}function F(b,g){const U=n.get(b);if(b.isVideoTexture&&Lt(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){const Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(U,b,g);return}}t.activeTexture(33984+g),t.bindTexture(3553,U.__webglTexture)}function $(b,g){const U=n.get(b);if(b.version>0&&U.__version!==b.version){pe(U,b,g);return}t.activeTexture(33984+g),t.bindTexture(35866,U.__webglTexture)}function K(b,g){const U=n.get(b);if(b.version>0&&U.__version!==b.version){pe(U,b,g);return}t.activeTexture(33984+g),t.bindTexture(32879,U.__webglTexture)}function j(b,g){const U=n.get(b);if(b.version>0&&U.__version!==b.version){ye(U,b,g);return}t.activeTexture(33984+g),t.bindTexture(34067,U.__webglTexture)}const le={[Co]:10497,[_t]:33071,[Lo]:33648},ge={[tt]:9728,[Yo]:9984,[Xo]:9986,[ft]:9729,[us]:9985,[Wi]:9987};function V(b,g,U){if(U?(a.texParameteri(b,10242,le[g.wrapS]),a.texParameteri(b,10243,le[g.wrapT]),(b===32879||b===35866)&&a.texParameteri(b,32882,le[g.wrapR]),a.texParameteri(b,10240,ge[g.magFilter]),a.texParameteri(b,10241,ge[g.minFilter])):(a.texParameteri(b,10242,33071),a.texParameteri(b,10243,33071),(b===32879||b===35866)&&a.texParameteri(b,32882,33071),(g.wrapS!==_t||g.wrapT!==_t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(b,10240,P(g.magFilter)),a.texParameteri(b,10241,P(g.minFilter)),g.minFilter!==tt&&g.minFilter!==ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(g.type===hn&&e.has("OES_texture_float_linear")===!1||r===!1&&g.type===Qn&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(a.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function De(b,g){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",Y));const Z=g.source;let Q=c.get(Z);Q===void 0&&(Q={},c.set(Z,Q));const ne=k(g);if(ne!==b.__cacheKey){Q[ne]===void 0&&(Q[ne]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,U=!0),Q[ne].usedTimes++;const xe=Q[b.__cacheKey];xe!==void 0&&(Q[b.__cacheKey].usedTimes--,xe.usedTimes===0&&R(g)),b.__cacheKey=ne,b.__webglTexture=Q[ne].texture}return U}function pe(b,g,U){let Z=3553;g.isDataArrayTexture&&(Z=35866),g.isData3DTexture&&(Z=32879);const Q=De(b,g),ne=g.source;if(t.activeTexture(33984+U),t.bindTexture(Z,b.__webglTexture),ne.version!==ne.__currentVersion||Q===!0){a.pixelStorei(37440,g.flipY),a.pixelStorei(37441,g.premultiplyAlpha),a.pixelStorei(3317,g.unpackAlignment),a.pixelStorei(37443,0);const xe=M(g)&&S(g.image)===!1;let N=A(g.image,xe,!1,u);N=St(g,N);const ce=S(N)||r,re=o.convert(g.format,g.encoding);let ue=o.convert(g.type),he=w(g.internalFormat,re,ue,g.encoding,g.isVideoTexture);V(Z,g,ce);let ve;const Ee=g.mipmaps,ze=r&&g.isVideoTexture!==!0,C=ne.__currentVersion===void 0||Q===!0,oe=T(g,N,ce);if(g.isDepthTexture)he=6402,r?g.type===hn?he=36012:g.type===sn?he=33190:g.type===zn?he=35056:he=33189:g.type===hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===un&&he===6402&&g.type!==ar&&g.type!==sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=sn,ue=o.convert(g.type)),g.format===Gn&&he===6402&&(he=34041,g.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=zn,ue=o.convert(g.type))),C&&(ze?t.texStorage2D(3553,1,he,N.width,N.height):t.texImage2D(3553,0,he,N.width,N.height,0,re,ue,null));else if(g.isDataTexture)if(Ee.length>0&&ce){ze&&C&&t.texStorage2D(3553,oe,he,Ee[0].width,Ee[0].height);for(let W=0,ie=Ee.length;W<ie;W++)ve=Ee[W],ze?t.texSubImage2D(3553,W,0,0,ve.width,ve.height,re,ue,ve.data):t.texImage2D(3553,W,he,ve.width,ve.height,0,re,ue,ve.data);g.generateMipmaps=!1}else ze?(C&&t.texStorage2D(3553,oe,he,N.width,N.height),t.texSubImage2D(3553,0,0,0,N.width,N.height,re,ue,N.data)):t.texImage2D(3553,0,he,N.width,N.height,0,re,ue,N.data);else if(g.isCompressedTexture){ze&&C&&t.texStorage2D(3553,oe,he,Ee[0].width,Ee[0].height);for(let W=0,ie=Ee.length;W<ie;W++)ve=Ee[W],g.format!==Et?re!==null?ze?t.compressedTexSubImage2D(3553,W,0,0,ve.width,ve.height,re,ve.data):t.compressedTexImage2D(3553,W,he,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,W,0,0,ve.width,ve.height,re,ue,ve.data):t.texImage2D(3553,W,he,ve.width,ve.height,0,re,ue,ve.data)}else if(g.isDataArrayTexture)ze?(C&&t.texStorage3D(35866,oe,he,N.width,N.height,N.depth),t.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,re,ue,N.data)):t.texImage3D(35866,0,he,N.width,N.height,N.depth,0,re,ue,N.data);else if(g.isData3DTexture)ze?(C&&t.texStorage3D(32879,oe,he,N.width,N.height,N.depth),t.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,re,ue,N.data)):t.texImage3D(32879,0,he,N.width,N.height,N.depth,0,re,ue,N.data);else if(g.isFramebufferTexture){if(C)if(ze)t.texStorage2D(3553,oe,he,N.width,N.height);else{let W=N.width,ie=N.height;for(let te=0;te<oe;te++)t.texImage2D(3553,te,he,W,ie,0,re,ue,null),W>>=1,ie>>=1}}else if(Ee.length>0&&ce){ze&&C&&t.texStorage2D(3553,oe,he,Ee[0].width,Ee[0].height);for(let W=0,ie=Ee.length;W<ie;W++)ve=Ee[W],ze?t.texSubImage2D(3553,W,0,0,re,ue,ve):t.texImage2D(3553,W,he,re,ue,ve);g.generateMipmaps=!1}else ze?(C&&t.texStorage2D(3553,oe,he,N.width,N.height),t.texSubImage2D(3553,0,0,0,re,ue,N)):t.texImage2D(3553,0,he,re,ue,N);E(g,ce)&&B(Z),ne.__currentVersion=ne.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function ye(b,g,U){if(g.image.length!==6)return;const Z=De(b,g),Q=g.source;if(t.activeTexture(33984+U),t.bindTexture(34067,b.__webglTexture),Q.version!==Q.__currentVersion||Z===!0){a.pixelStorei(37440,g.flipY),a.pixelStorei(37441,g.premultiplyAlpha),a.pixelStorei(3317,g.unpackAlignment),a.pixelStorei(37443,0);const ne=g.isCompressedTexture||g.image[0].isCompressedTexture,xe=g.image[0]&&g.image[0].isDataTexture,N=[];for(let W=0;W<6;W++)!ne&&!xe?N[W]=A(g.image[W],!1,!0,h):N[W]=xe?g.image[W].image:g.image[W],N[W]=St(g,N[W]);const ce=N[0],re=S(ce)||r,ue=o.convert(g.format,g.encoding),he=o.convert(g.type),ve=w(g.internalFormat,ue,he,g.encoding),Ee=r&&g.isVideoTexture!==!0,ze=Q.__currentVersion===void 0||Z===!0;let C=T(g,ce,re);V(34067,g,re);let oe;if(ne){Ee&&ze&&t.texStorage2D(34067,C,ve,ce.width,ce.height);for(let W=0;W<6;W++){oe=N[W].mipmaps;for(let ie=0;ie<oe.length;ie++){const te=oe[ie];g.format!==Et?ue!==null?Ee?t.compressedTexSubImage2D(34069+W,ie,0,0,te.width,te.height,ue,te.data):t.compressedTexImage2D(34069+W,ie,ve,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(34069+W,ie,0,0,te.width,te.height,ue,he,te.data):t.texImage2D(34069+W,ie,ve,te.width,te.height,0,ue,he,te.data)}}}else{oe=g.mipmaps,Ee&&ze&&(oe.length>0&&C++,t.texStorage2D(34067,C,ve,N[0].width,N[0].height));for(let W=0;W<6;W++)if(xe){Ee?t.texSubImage2D(34069+W,0,0,0,N[W].width,N[W].height,ue,he,N[W].data):t.texImage2D(34069+W,0,ve,N[W].width,N[W].height,0,ue,he,N[W].data);for(let ie=0;ie<oe.length;ie++){const Ae=oe[ie].image[W].image;Ee?t.texSubImage2D(34069+W,ie+1,0,0,Ae.width,Ae.height,ue,he,Ae.data):t.texImage2D(34069+W,ie+1,ve,Ae.width,Ae.height,0,ue,he,Ae.data)}}else{Ee?t.texSubImage2D(34069+W,0,0,0,ue,he,N[W]):t.texImage2D(34069+W,0,ve,ue,he,N[W]);for(let ie=0;ie<oe.length;ie++){const te=oe[ie];Ee?t.texSubImage2D(34069+W,ie+1,0,0,ue,he,te.image[W]):t.texImage2D(34069+W,ie+1,ve,ue,he,te.image[W])}}}E(g,re)&&B(34067),Q.__currentVersion=Q.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function se(b,g,U,Z,Q){const ne=o.convert(U.format,U.encoding),xe=o.convert(U.type),N=w(U.internalFormat,ne,xe,U.encoding);n.get(g).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,N,g.width,g.height,g.depth,0,ne,xe,null):t.texImage2D(Q,0,N,g.width,g.height,0,ne,xe,null)),t.bindFramebuffer(36160,b),ke(g)?f.framebufferTexture2DMultisampleEXT(36160,Z,Q,n.get(U).__webglTexture,0,Ye(g)):a.framebufferTexture2D(36160,Z,Q,n.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function Pe(b,g,U){if(a.bindRenderbuffer(36161,b),g.depthBuffer&&!g.stencilBuffer){let Z=33189;if(U||ke(g)){const Q=g.depthTexture;Q&&Q.isDepthTexture&&(Q.type===hn?Z=36012:Q.type===sn&&(Z=33190));const ne=Ye(g);ke(g)?f.renderbufferStorageMultisampleEXT(36161,ne,Z,g.width,g.height):a.renderbufferStorageMultisample(36161,ne,Z,g.width,g.height)}else a.renderbufferStorage(36161,Z,g.width,g.height);a.framebufferRenderbuffer(36160,36096,36161,b)}else if(g.depthBuffer&&g.stencilBuffer){const Z=Ye(g);U&&ke(g)===!1?a.renderbufferStorageMultisample(36161,Z,35056,g.width,g.height):ke(g)?f.renderbufferStorageMultisampleEXT(36161,Z,35056,g.width,g.height):a.renderbufferStorage(36161,34041,g.width,g.height),a.framebufferRenderbuffer(36160,33306,36161,b)}else{const Z=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let Q=0;Q<Z.length;Q++){const ne=Z[Q],xe=o.convert(ne.format,ne.encoding),N=o.convert(ne.type),ce=w(ne.internalFormat,xe,N,ne.encoding),re=Ye(g);U&&ke(g)===!1?a.renderbufferStorageMultisample(36161,re,ce,g.width,g.height):ke(g)?f.renderbufferStorageMultisampleEXT(36161,re,ce,g.width,g.height):a.renderbufferStorage(36161,ce,g.width,g.height)}}a.bindRenderbuffer(36161,null)}function _e(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),F(g.depthTexture,0);const Z=n.get(g.depthTexture).__webglTexture,Q=Ye(g);if(g.depthTexture.format===un)ke(g)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,Q):a.framebufferTexture2D(36160,36096,3553,Z,0);else if(g.depthTexture.format===Gn)ke(g)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,Q):a.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function fe(b){const g=n.get(b),U=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");_e(g.__webglFramebuffer,b)}else if(U){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(36160,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]=a.createRenderbuffer(),Pe(g.__webglDepthbuffer[Z],b,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=a.createRenderbuffer(),Pe(g.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function qe(b,g,U){const Z=n.get(b);g!==void 0&&se(Z.__webglFramebuffer,b,b.texture,36064,3553),U!==void 0&&fe(b)}function it(b){const g=b.texture,U=n.get(b),Z=n.get(g);b.addEventListener("dispose",ae),b.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=a.createTexture()),Z.__version=g.version,s.memory.textures++);const Q=b.isWebGLCubeRenderTarget===!0,ne=b.isWebGLMultipleRenderTargets===!0,xe=S(b)||r;if(Q){U.__webglFramebuffer=[];for(let N=0;N<6;N++)U.__webglFramebuffer[N]=a.createFramebuffer()}else{if(U.__webglFramebuffer=a.createFramebuffer(),ne)if(i.drawBuffers){const N=b.texture;for(let ce=0,re=N.length;ce<re;ce++){const ue=n.get(N[ce]);ue.__webglTexture===void 0&&(ue.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&b.samples>0&&ke(b)===!1){const N=ne?g:[g];U.__webglMultisampledFramebuffer=a.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let ce=0;ce<N.length;ce++){const re=N[ce];U.__webglColorRenderbuffer[ce]=a.createRenderbuffer(),a.bindRenderbuffer(36161,U.__webglColorRenderbuffer[ce]);const ue=o.convert(re.format,re.encoding),he=o.convert(re.type),ve=w(re.internalFormat,ue,he,re.encoding),Ee=Ye(b);a.renderbufferStorageMultisample(36161,Ee,ve,b.width,b.height),a.framebufferRenderbuffer(36160,36064+ce,36161,U.__webglColorRenderbuffer[ce])}a.bindRenderbuffer(36161,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=a.createRenderbuffer(),Pe(U.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,Z.__webglTexture),V(34067,g,xe);for(let N=0;N<6;N++)se(U.__webglFramebuffer[N],b,g,36064,34069+N);E(g,xe)&&B(34067),t.unbindTexture()}else if(ne){const N=b.texture;for(let ce=0,re=N.length;ce<re;ce++){const ue=N[ce],he=n.get(ue);t.bindTexture(3553,he.__webglTexture),V(3553,ue,xe),se(U.__webglFramebuffer,b,ue,36064+ce,3553),E(ue,xe)&&B(3553)}t.unbindTexture()}else{let N=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(r?N=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(N,Z.__webglTexture),V(N,g,xe),se(U.__webglFramebuffer,b,g,36064,N),E(g,xe)&&B(N),t.unbindTexture()}b.depthBuffer&&fe(b)}function Ze(b){const g=S(b)||r,U=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Z=0,Q=U.length;Z<Q;Z++){const ne=U[Z];if(E(ne,g)){const xe=b.isWebGLCubeRenderTarget?34067:3553,N=n.get(ne).__webglTexture;t.bindTexture(xe,N),B(xe),t.unbindTexture()}}}function Mt(b){if(r&&b.samples>0&&ke(b)===!1){const g=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],U=b.width,Z=b.height;let Q=16384;const ne=[],xe=b.stencilBuffer?33306:36096,N=n.get(b),ce=b.isWebGLMultipleRenderTargets===!0;if(ce)for(let re=0;re<g.length;re++)t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+re,36161,null),t.bindFramebuffer(36160,N.__webglFramebuffer),a.framebufferTexture2D(36009,36064+re,3553,null,0);t.bindFramebuffer(36008,N.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,N.__webglFramebuffer);for(let re=0;re<g.length;re++){ne.push(36064+re),b.depthBuffer&&ne.push(xe);const ue=N.__ignoreDepthValues!==void 0?N.__ignoreDepthValues:!1;if(ue===!1&&(b.depthBuffer&&(Q|=256),b.stencilBuffer&&(Q|=1024)),ce&&a.framebufferRenderbuffer(36008,36064,36161,N.__webglColorRenderbuffer[re]),ue===!0&&(a.invalidateFramebuffer(36008,[xe]),a.invalidateFramebuffer(36009,[xe])),ce){const he=n.get(g[re]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,he,0)}a.blitFramebuffer(0,0,U,Z,0,0,U,Z,Q,9728),m&&a.invalidateFramebuffer(36008,ne)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ce)for(let re=0;re<g.length;re++){t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+re,36161,N.__webglColorRenderbuffer[re]);const ue=n.get(g[re]).__webglTexture;t.bindFramebuffer(36160,N.__webglFramebuffer),a.framebufferTexture2D(36009,36064+re,3553,ue,0)}t.bindFramebuffer(36009,N.__webglMultisampledFramebuffer)}}function Ye(b){return Math.min(d,b.samples)}function ke(b){const g=n.get(b);return r&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Lt(b){const g=s.render.frame;y.get(b)!==g&&(y.set(b,g),b.update())}function St(b,g){const U=b.encoding,Z=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Do||U!==pn&&(U===Ne?r===!1?e.has("EXT_sRGB")===!0&&Z===Et?(b.format=Do,b.minFilter=ft,b.generateMipmaps=!1):g=lr.sRGBToLinear(g):(Z!==Et||Q!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),g}this.allocateTextureUnit=H,this.resetTextureUnits=J,this.setTexture2D=F,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=qe,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=ke}function bd(a,e,t){const n=t.isWebGL2;function i(o,s=null){let r;if(o===fn)return 5121;if(o===ps)return 32819;if(o===ms)return 32820;if(o===cs)return 5120;if(o===ds)return 5122;if(o===ar)return 5123;if(o===fs)return 5124;if(o===sn)return 5125;if(o===hn)return 5126;if(o===Qn)return n?5131:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(o===gs)return 6406;if(o===Et)return 6408;if(o===xs)return 6409;if(o===ws)return 6410;if(o===un)return 6402;if(o===Gn)return 34041;if(o===vs)return 6403;if(o===ys)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(o===Do)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(o===bs)return 36244;if(o===_s)return 33319;if(o===Ms)return 33320;if(o===Ss)return 36249;if(o===Yi||o===Xi||o===Ji||o===ji)if(s===Ne)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(o===Yi)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Xi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Ji)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===ji)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(o===Yi)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Xi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Ji)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===ji)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Jo||o===jo||o===Ko||o===Zo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(o===Jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Ts)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===$o||o===Qo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(o===$o)return s===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(o===Qo)return s===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===ea||o===ta||o===na||o===ia||o===oa||o===aa||o===ra||o===sa||o===ha||o===la||o===ua||o===ca||o===da||o===fa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(o===ea)return s===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===ta)return s===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===na)return s===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===ia)return s===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===oa)return s===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===aa)return s===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===ra)return s===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===sa)return s===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===ha)return s===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===la)return s===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===ua)return s===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===ca)return s===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===da)return s===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===fa)return s===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===pa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(o===pa)return s===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return o===zn?n?34042:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):a[o]!==void 0?a[o]:null}return{convert:i}}class _d extends pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bi extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Md={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,o=null,s=null;const r=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){s=!0;for(const p of e.hand.values()){const c=t.getJointPose(p,n);if(h.joints[p.jointName]===void 0){const _=new Bi;_.matrixAutoUpdate=!1,_.visible=!1,h.joints[p.jointName]=_,h.add(_)}const x=h.joints[p.jointName];c!==null&&(x.matrix.fromArray(c.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=c.radius),x.visible=c!==null}const u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,y=.005;h.inputState.pinching&&f>m+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=m-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Md)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=o!==null),h!==null&&(h.visible=s!==null),this}}class Sd extends yt{constructor(e,t,n,i,o,s,r,l,h,u){if(u=u!==void 0?u:un,u!==un&&u!==Gn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===un&&(n=sn),n===void 0&&u===Gn&&(n=zn),super(null,i,o,s,r,l,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:tt,this.minFilter=l!==void 0?l:tt,this.flipY=!1,this.generateMipmaps=!1}}class Td extends Vn{constructor(e,t){super();const n=this;let i=null,o=1,s=null,r="local-floor",l=null,h=null,u=null,d=null,f=null,m=null;const y=t.getContextAttributes();let p=null,c=null;const x=[],_=[],A=new pt;A.layers.enable(1),A.viewport=new Xe;const S=new pt;S.layers.enable(2),S.viewport=new Xe;const M=[A,S],E=new _d;E.layers.enable(1),E.layers.enable(2);let B=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let F=x[k];return F===void 0&&(F=new So,x[k]=F),F.getTargetRaySpace()},this.getControllerGrip=function(k){let F=x[k];return F===void 0&&(F=new So,x[k]=F),F.getGripSpace()},this.getHand=function(k){let F=x[k];return F===void 0&&(F=new So,x[k]=F),F.getHandSpace()};function T(k){const F=_.indexOf(k.inputSource);if(F===-1)return;const $=x[F];$!==void 0&&$.dispatchEvent({type:k.type,data:k.inputSource})}function P(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",Y);for(let k=0;k<x.length;k++){const F=_[k];F!==null&&(_[k]=null,x[k].disconnect(F))}B=null,w=null,e.setRenderTarget(p),f=null,d=null,u=null,i=null,c=null,H.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",P),i.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,t,F),i.updateRenderState({baseLayer:f}),c=new mn(f.framebufferWidth,f.framebufferHeight,{format:Et,type:fn,encoding:e.outputEncoding,stencilBuffer:y.stencil})}else{let F=null,$=null,K=null;y.depth&&(K=y.stencil?35056:33190,F=y.stencil?Gn:un,$=y.stencil?zn:sn);const j={colorFormat:32856,depthFormat:K,scaleFactor:o};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(j),i.updateRenderState({layers:[d]}),c=new mn(d.textureWidth,d.textureHeight,{format:Et,type:fn,depthTexture:new Sd(d.textureWidth,d.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const le=e.properties.get(c);le.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(1),l=null,s=await i.requestReferenceSpace(r),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function Y(k){for(let F=0;F<k.removed.length;F++){const $=k.removed[F],K=_.indexOf($);K>=0&&(_[K]=null,x[K].dispatchEvent({type:"disconnected",data:$}))}for(let F=0;F<k.added.length;F++){const $=k.added[F];let K=_.indexOf($);if(K===-1){for(let le=0;le<x.length;le++)if(le>=_.length){_.push($),K=le;break}else if(_[le]===null){_[le]=$,K=le;break}if(K===-1)break}const j=x[K];j&&j.dispatchEvent({type:"connected",data:$})}}const ae=new I,z=new I;function R(k,F,$){ae.setFromMatrixPosition(F.matrixWorld),z.setFromMatrixPosition($.matrixWorld);const K=ae.distanceTo(z),j=F.projectionMatrix.elements,le=$.projectionMatrix.elements,ge=j[14]/(j[10]-1),V=j[14]/(j[10]+1),De=(j[9]+1)/j[5],pe=(j[9]-1)/j[5],ye=(j[8]-1)/j[0],se=(le[8]+1)/le[0],Pe=ge*ye,_e=ge*se,fe=K/(-ye+se),qe=fe*-ye;F.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(qe),k.translateZ(fe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const it=ge+fe,Ze=V+fe,Mt=Pe-qe,Ye=_e+(K-qe),ke=De*V/Ze*it,Lt=pe*V/Ze*it;k.projectionMatrix.makePerspective(Mt,Ye,ke,Lt,it,Ze)}function q(k,F){F===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(F.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;E.near=S.near=A.near=k.near,E.far=S.far=A.far=k.far,(B!==E.near||w!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),B=E.near,w=E.far);const F=k.parent,$=E.cameras;q(E,F);for(let j=0;j<$.length;j++)q($[j],F);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),k.matrix.copy(E.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const K=k.children;for(let j=0,le=K.length;j<le;j++)K[j].updateMatrixWorld(!0);$.length===2?R(E,A,S):E.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(k){d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)};let X=null;function J(k,F){if(h=F.getViewerPose(l||s),m=F,h!==null){const $=h.views;f!==null&&(e.setRenderTargetFramebuffer(c,f.framebuffer),e.setRenderTarget(c));let K=!1;$.length!==E.cameras.length&&(E.cameras.length=0,K=!0);for(let j=0;j<$.length;j++){const le=$[j];let ge=null;if(f!==null)ge=f.getViewport(le);else{const De=u.getViewSubImage(d,le);ge=De.viewport,j===0&&(e.setRenderTargetTextures(c,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(c))}let V=M[j];V===void 0&&(V=new pt,V.layers.enable(j),V.viewport=new Xe,M[j]=V),V.matrix.fromArray(le.transform.matrix),V.projectionMatrix.fromArray(le.projectionMatrix),V.viewport.set(ge.x,ge.y,ge.width,ge.height),j===0&&E.matrix.copy(V.matrix),K===!0&&E.cameras.push(V)}}for(let $=0;$<x.length;$++){const K=_[$],j=x[$];K!==null&&j!==void 0&&j.update(K,F,l||s)}X&&X(k,F),m=null}const H=new wr;H.setAnimationLoop(J),this.setAnimationLoop=function(k){X=k},this.dispose=function(){}}}function Ad(a,e){function t(p,c){p.fogColor.value.copy(c.color),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function n(p,c,x,_,A){c.isMeshBasicMaterial||c.isMeshLambertMaterial?i(p,c):c.isMeshToonMaterial?(i(p,c),u(p,c)):c.isMeshPhongMaterial?(i(p,c),h(p,c)):c.isMeshStandardMaterial?(i(p,c),d(p,c),c.isMeshPhysicalMaterial&&f(p,c,A)):c.isMeshMatcapMaterial?(i(p,c),m(p,c)):c.isMeshDepthMaterial?i(p,c):c.isMeshDistanceMaterial?(i(p,c),y(p,c)):c.isMeshNormalMaterial?i(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&s(p,c)):c.isPointsMaterial?r(p,c,x,_):c.isSpriteMaterial?l(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function i(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map),c.alphaMap&&(p.alphaMap.value=c.alphaMap),c.bumpMap&&(p.bumpMap.value=c.bumpMap,p.bumpScale.value=c.bumpScale,c.side===gt&&(p.bumpScale.value*=-1)),c.displacementMap&&(p.displacementMap.value=c.displacementMap,p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap),c.normalMap&&(p.normalMap.value=c.normalMap,p.normalScale.value.copy(c.normalScale),c.side===gt&&p.normalScale.value.negate()),c.specularMap&&(p.specularMap.value=c.specularMap),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const x=e.get(c).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const S=a.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*S}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity);let _;c.map?_=c.map:c.specularMap?_=c.specularMap:c.displacementMap?_=c.displacementMap:c.normalMap?_=c.normalMap:c.bumpMap?_=c.bumpMap:c.roughnessMap?_=c.roughnessMap:c.metalnessMap?_=c.metalnessMap:c.alphaMap?_=c.alphaMap:c.emissiveMap?_=c.emissiveMap:c.clearcoatMap?_=c.clearcoatMap:c.clearcoatNormalMap?_=c.clearcoatNormalMap:c.clearcoatRoughnessMap?_=c.clearcoatRoughnessMap:c.iridescenceMap?_=c.iridescenceMap:c.iridescenceThicknessMap?_=c.iridescenceThicknessMap:c.specularIntensityMap?_=c.specularIntensityMap:c.specularColorMap?_=c.specularColorMap:c.transmissionMap?_=c.transmissionMap:c.thicknessMap?_=c.thicknessMap:c.sheenColorMap?_=c.sheenColorMap:c.sheenRoughnessMap&&(_=c.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix));let A;c.aoMap?A=c.aoMap:c.lightMap&&(A=c.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uv2Transform.value.copy(A.matrix))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity}function s(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function r(p,c,x,_){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*x,p.scale.value=_*.5,c.map&&(p.map.value=c.map),c.alphaMap&&(p.alphaMap.value=c.alphaMap),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);let A;c.map?A=c.map:c.alphaMap&&(A=c.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix))}function l(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map),c.alphaMap&&(p.alphaMap.value=c.alphaMap),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);let x;c.map?x=c.map:c.alphaMap&&(x=c.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function h(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function u(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function d(p,c){p.roughness.value=c.roughness,p.metalness.value=c.metalness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap),c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function f(p,c,x){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap)),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap),c.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),p.clearcoatNormalMap.value=c.clearcoatNormalMap,c.side===gt&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap)),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap)}function m(p,c){c.matcap&&(p.matcap.value=c.matcap)}function y(p,c){p.referencePosition.value.copy(c.referencePosition),p.nearDistance.value=c.nearDistance,p.farDistance.value=c.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Ed(a,e,t,n){let i={},o={},s=[];const r=t.isWebGL2?a.getParameter(35375):0;function l(_,A){const S=A.program;n.uniformBlockBinding(_,S)}function h(_,A){let S=i[_.id];S===void 0&&(y(_),S=u(_),i[_.id]=S,_.addEventListener("dispose",c));const M=A.program;n.updateUBOMapping(_,M);const E=e.render.frame;o[_.id]!==E&&(f(_),o[_.id]=E)}function u(_){const A=d();_.__bindingPointIndex=A;const S=a.createBuffer(),M=_.__size,E=_.usage;return a.bindBuffer(35345,S),a.bufferData(35345,M,E),a.bindBuffer(35345,null),a.bindBufferBase(35345,A,S),S}function d(){for(let _=0;_<r;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const A=i[_.id],S=_.uniforms,M=_.__cache;a.bindBuffer(35345,A);for(let E=0,B=S.length;E<B;E++){const w=S[E];if(m(w,E,M)===!0){const T=w.value,P=w.__offset;typeof T=="number"?(w.__data[0]=T,a.bufferSubData(35345,P,w.__data)):(w.value.isMatrix3?(w.__data[0]=w.value.elements[0],w.__data[1]=w.value.elements[1],w.__data[2]=w.value.elements[2],w.__data[3]=w.value.elements[0],w.__data[4]=w.value.elements[3],w.__data[5]=w.value.elements[4],w.__data[6]=w.value.elements[5],w.__data[7]=w.value.elements[0],w.__data[8]=w.value.elements[6],w.__data[9]=w.value.elements[7],w.__data[10]=w.value.elements[8],w.__data[11]=w.value.elements[0]):T.toArray(w.__data),a.bufferSubData(35345,P,w.__data))}}a.bindBuffer(35345,null)}function m(_,A,S){const M=_.value;if(S[A]===void 0)return typeof M=="number"?S[A]=M:S[A]=M.clone(),!0;if(typeof M=="number"){if(S[A]!==M)return S[A]=M,!0}else{const E=S[A];if(E.equals(M)===!1)return E.copy(M),!0}return!1}function y(_){const A=_.uniforms;let S=0;const M=16;let E=0;for(let B=0,w=A.length;B<w;B++){const T=A[B],P=p(T);if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=S,B>0){E=S%M;const Y=M-E;E!==0&&Y-P.boundary<0&&(S+=M-E,T.__offset=S)}S+=P.storage}return E=S%M,E>0&&(S+=M-E),_.__size=S,_.__cache={},this}function p(_){const A=_.value,S={boundary:0,storage:0};return typeof A=="number"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function c(_){const A=_.target;A.removeEventListener("dispose",c);const S=s.indexOf(A.__bindingPointIndex);s.splice(S,1),a.deleteBuffer(i[A.id]),delete i[A.id],delete o[A.id]}function x(){for(const _ in i)a.deleteBuffer(i[_]);s=[],i={},o={}}return{bind:l,update:h,dispose:x}}function Cd(){const a=ei("canvas");return a.style.display="block",a}function Sr(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:Cd(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,o=a.antialias!==void 0?a.antialias:!1,s=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,r=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",h=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let d=null,f=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pn,this.physicallyCorrectLights=!1,this.toneMapping=zt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let c=!1,x=0,_=0,A=null,S=-1,M=null;const E=new Xe,B=new Xe;let w=null,T=e.width,P=e.height,Y=1,ae=null,z=null;const R=new Xe(0,0,T,P),q=new Xe(0,0,T,P);let X=!1;const J=new xr;let H=!1,k=!1,F=null;const $=new Je,K=new Ie,j=new I,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return A===null?Y:1}let V=t;function De(v,D){for(let O=0;O<v.length;O++){const L=v[O],G=e.getContext(L,D);if(G!==null)return G}return null}try{const v={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:r,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Io}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",ze,!1),V===null){const D=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&D.shift(),V=De(D,v),V===null)throw De(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let pe,ye,se,Pe,_e,fe,qe,it,Ze,Mt,Ye,ke,Lt,St,b,g,U,Z,Q,ne,xe,N,ce,re;function ue(){pe=new Wu(V),ye=new Ru(V,pe,a),pe.init(ye),N=new bd(V,pe,ye),se=new wd(V,pe,ye),Pe=new Gu,_e=new ad,fe=new vd(V,pe,se,_e,ye,N,Pe),qe=new Pu(p),it=new zu(p),Ze=new $s(V,ye),ce=new Du(V,pe,Ze,ye),Mt=new Ou(V,Ze,Pe,ce),Ye=new Yu(V,Mt,Ze,Pe),Q=new qu(V,ye,fe),g=new Iu(_e),ke=new od(p,qe,it,pe,ye,ce,g),Lt=new Ad(p,_e),St=new sd,b=new fd(pe,ye),Z=new Lu(p,qe,se,Ye,u,s),U=new xd(p,Ye,ye),re=new Ed(V,Pe,ye,se),ne=new ku(V,pe,Pe,ye),xe=new Uu(V,pe,Pe,ye),Pe.programs=ke.programs,p.capabilities=ye,p.extensions=pe,p.properties=_e,p.renderLists=St,p.shadowMap=U,p.state=se,p.info=Pe}ue();const he=new Td(p,V);this.xr=he,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const v=pe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=pe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(v){v!==void 0&&(Y=v,this.setSize(T,P,!1))},this.getSize=function(v){return v.set(T,P)},this.setSize=function(v,D,O){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=v,P=D,e.width=Math.floor(v*Y),e.height=Math.floor(D*Y),O!==!1&&(e.style.width=v+"px",e.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(T*Y,P*Y).floor()},this.setDrawingBufferSize=function(v,D,O){T=v,P=D,Y=O,e.width=Math.floor(v*O),e.height=Math.floor(D*O),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(E)},this.getViewport=function(v){return v.copy(R)},this.setViewport=function(v,D,O,L){v.isVector4?R.set(v.x,v.y,v.z,v.w):R.set(v,D,O,L),se.viewport(E.copy(R).multiplyScalar(Y).floor())},this.getScissor=function(v){return v.copy(q)},this.setScissor=function(v,D,O,L){v.isVector4?q.set(v.x,v.y,v.z,v.w):q.set(v,D,O,L),se.scissor(B.copy(q).multiplyScalar(Y).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(v){se.setScissorTest(X=v)},this.setOpaqueSort=function(v){ae=v},this.setTransparentSort=function(v){z=v},this.getClearColor=function(v){return v.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(v=!0,D=!0,O=!0){let L=0;v&&(L|=16384),D&&(L|=256),O&&(L|=1024),V.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",ze,!1),St.dispose(),b.dispose(),_e.dispose(),qe.dispose(),it.dispose(),Ye.dispose(),ce.dispose(),re.dispose(),ke.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ae),he.removeEventListener("sessionend",He),F&&(F.dispose(),F=null),We.stop()};function ve(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),c=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),c=!1;const v=Pe.autoReset,D=U.enabled,O=U.autoUpdate,L=U.needsUpdate,G=U.type;ue(),Pe.autoReset=v,U.enabled=D,U.autoUpdate=O,U.needsUpdate=L,U.type=G}function ze(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function C(v){const D=v.target;D.removeEventListener("dispose",C),oe(D)}function oe(v){W(v),_e.remove(v)}function W(v){const D=_e.get(v).programs;D!==void 0&&(D.forEach(function(O){ke.releaseProgram(O)}),v.isShaderMaterial&&ke.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,O,L,G,de){D===null&&(D=le);const me=G.isMesh&&G.matrixWorld.determinant()<0,be=kr(v,D,O,L,G);se.setMaterial(L,me);let we=O.index;const Le=O.attributes.position;if(we===null){if(Le===void 0||Le.count===0)return}else if(we.count===0)return;let Se=1;L.wireframe===!0&&(we=Mt.getWireframeAttribute(O),Se=2),ce.setup(G,L,be,O,we);let Te,Fe=ne;we!==null&&(Te=Ze.get(we),Fe=xe,Fe.setIndex(Te));const $t=we!==null?we.count:Le.count,xn=O.drawRange.start*Se,wn=O.drawRange.count*Se,Tt=de!==null?de.start*Se:0,Ce=de!==null?de.count*Se:1/0,vn=Math.max(xn,Tt),Oe=Math.min($t,xn+wn,Tt+Ce)-1,ct=Math.max(0,Oe-vn+1);if(ct!==0){if(G.isMesh)L.wireframe===!0?(se.setLineWidth(L.wireframeLinewidth*ge()),Fe.setMode(1)):Fe.setMode(4);else if(G.isLine){let Gt=L.linewidth;Gt===void 0&&(Gt=1),se.setLineWidth(Gt*ge()),G.isLineSegments?Fe.setMode(1):G.isLineLoop?Fe.setMode(2):Fe.setMode(3)}else G.isPoints?Fe.setMode(0):G.isSprite&&Fe.setMode(4);if(G.isInstancedMesh)Fe.renderInstances(vn,ct,G.count);else if(O.isInstancedBufferGeometry){const Gt=Math.min(O.instanceCount,O._maxInstanceCount);Fe.renderInstances(vn,ct,Gt)}else Fe.render(vn,ct)}},this.compile=function(v,D){function O(L,G,de){L.transparent===!0&&L.side===Kt?(L.side=gt,L.needsUpdate=!0,fi(L,G,de),L.side=Wn,L.needsUpdate=!0,fi(L,G,de),L.side=Kt):fi(L,G,de)}f=b.get(v),f.init(),y.push(f),v.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),f.setupLights(p.physicallyCorrectLights),v.traverse(function(L){const G=L.material;if(G)if(Array.isArray(G))for(let de=0;de<G.length;de++){const me=G[de];O(me,v,L)}else O(G,v,L)}),y.pop(),f=null};let ie=null;function te(v){ie&&ie(v)}function Ae(){We.stop()}function He(){We.start()}const We=new wr;We.setAnimationLoop(te),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(v){ie=v,he.setAnimationLoop(v),v===null?We.stop():We.start()},he.addEventListener("sessionstart",Ae),he.addEventListener("sessionend",He),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(c===!0)return;v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(D),D=he.getCamera()),v.isScene===!0&&v.onBeforeRender(p,v,D,A),f=b.get(v,y.length),f.init(),y.push(f),$.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),J.setFromProjectionMatrix($),k=this.localClippingEnabled,H=g.init(this.clippingPlanes,k,D),d=St.get(v,m.length),d.init(),m.push(d),Ut(v,D,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(ae,z),H===!0&&g.beginShadows();const O=f.state.shadowsArray;if(U.render(O,v,D),H===!0&&g.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(d,v),f.setupLights(p.physicallyCorrectLights),D.isArrayCamera){const L=D.cameras;for(let G=0,de=L.length;G<de;G++){const me=L[G];Be(d,v,me,me.viewport)}}else Be(d,v,D);A!==null&&(fe.updateMultisampleRenderTarget(A),fe.updateRenderTargetMipmap(A)),v.isScene===!0&&v.onAfterRender(p,v,D),ce.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?f=y[y.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Ut(v,D,O,L){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||J.intersectsSprite(v)){L&&j.setFromMatrixPosition(v.matrixWorld).applyMatrix4($);const me=Ye.update(v),be=v.material;be.visible&&d.push(v,me,be,O,j.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(v.isSkinnedMesh&&v.skeleton.frame!==Pe.render.frame&&(v.skeleton.update(),v.skeleton.frame=Pe.render.frame),!v.frustumCulled||J.intersectsObject(v))){L&&j.setFromMatrixPosition(v.matrixWorld).applyMatrix4($);const me=Ye.update(v),be=v.material;if(Array.isArray(be)){const we=me.groups;for(let Le=0,Se=we.length;Le<Se;Le++){const Te=we[Le],Fe=be[Te.materialIndex];Fe&&Fe.visible&&d.push(v,me,Fe,O,j.z,Te)}}else be.visible&&d.push(v,me,be,O,j.z,null)}}const de=v.children;for(let me=0,be=de.length;me<be;me++)Ut(de[me],D,O,L)}function Be(v,D,O,L){const G=v.opaque,de=v.transmissive,me=v.transparent;f.setupLightsView(O),de.length>0&&Dt(G,D,O),L&&se.viewport(E.copy(L)),G.length>0&&ut(G,D,O),de.length>0&&ut(de,D,O),me.length>0&&ut(me,D,O),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Dt(v,D,O){const L=ye.isWebGL2;F===null&&(F=new mn(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?Qn:fn,minFilter:Wi,samples:L&&o===!0?4:0})),p.getDrawingBufferSize(K),L?F.setSize(K.x,K.y):F.setSize(ko(K.x),ko(K.y));const G=p.getRenderTarget();p.setRenderTarget(F),p.clear();const de=p.toneMapping;p.toneMapping=zt,ut(v,D,O),p.toneMapping=de,fe.updateMultisampleRenderTarget(F),fe.updateRenderTargetMipmap(F),p.setRenderTarget(G)}function ut(v,D,O){const L=D.isScene===!0?D.overrideMaterial:null;for(let G=0,de=v.length;G<de;G++){const me=v[G],be=me.object,we=me.geometry,Le=L===null?me.material:L,Se=me.group;be.layers.test(O.layers)&&Dr(be,D,O,we,Le,Se)}}function Dr(v,D,O,L,G,de){v.onBeforeRender(p,D,O,L,G,de),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(p,D,O,L,v,de),G.transparent===!0&&G.side===Kt?(G.side=gt,G.needsUpdate=!0,p.renderBufferDirect(O,D,L,G,v,de),G.side=Wn,G.needsUpdate=!0,p.renderBufferDirect(O,D,L,G,v,de),G.side=Kt):p.renderBufferDirect(O,D,L,G,v,de),v.onAfterRender(p,D,O,L,G,de)}function fi(v,D,O){D.isScene!==!0&&(D=le);const L=_e.get(v),G=f.state.lights,de=f.state.shadowsArray,me=G.state.version,be=ke.getParameters(v,G.state,de,D,O),we=ke.getProgramCacheKey(be);let Le=L.programs;L.environment=v.isMeshStandardMaterial?D.environment:null,L.fog=D.fog,L.envMap=(v.isMeshStandardMaterial?it:qe).get(v.envMap||L.environment),Le===void 0&&(v.addEventListener("dispose",C),Le=new Map,L.programs=Le);let Se=Le.get(we);if(Se!==void 0){if(L.currentProgram===Se&&L.lightsStateVersion===me)return zo(v,be),Se}else be.uniforms=ke.getUniforms(v),v.onBuild(O,be,p),v.onBeforeCompile(be,p),Se=ke.acquireProgram(be,we),Le.set(we,Se),L.uniforms=be.uniforms;const Te=L.uniforms;(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Te.clippingPlanes=g.uniform),zo(v,be),L.needsLights=Ir(v),L.lightsStateVersion=me,L.needsLights&&(Te.ambientLightColor.value=G.state.ambient,Te.lightProbe.value=G.state.probe,Te.directionalLights.value=G.state.directional,Te.directionalLightShadows.value=G.state.directionalShadow,Te.spotLights.value=G.state.spot,Te.spotLightShadows.value=G.state.spotShadow,Te.rectAreaLights.value=G.state.rectArea,Te.ltc_1.value=G.state.rectAreaLTC1,Te.ltc_2.value=G.state.rectAreaLTC2,Te.pointLights.value=G.state.point,Te.pointLightShadows.value=G.state.pointShadow,Te.hemisphereLights.value=G.state.hemi,Te.directionalShadowMap.value=G.state.directionalShadowMap,Te.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Te.spotShadowMap.value=G.state.spotShadowMap,Te.spotLightMatrix.value=G.state.spotLightMatrix,Te.spotLightMap.value=G.state.spotLightMap,Te.pointShadowMap.value=G.state.pointShadowMap,Te.pointShadowMatrix.value=G.state.pointShadowMatrix);const Fe=Se.getUniforms(),$t=Ni.seqWithValue(Fe.seq,Te);return L.currentProgram=Se,L.uniformsList=$t,Se}function zo(v,D){const O=_e.get(v);O.outputEncoding=D.outputEncoding,O.instancing=D.instancing,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function kr(v,D,O,L,G){D.isScene!==!0&&(D=le),fe.resetTextureUnits();const de=D.fog,me=L.isMeshStandardMaterial?D.environment:null,be=A===null?p.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:pn,we=(L.isMeshStandardMaterial?it:qe).get(L.envMap||me),Le=L.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Se=!!L.normalMap&&!!O.attributes.tangent,Te=!!O.morphAttributes.position,Fe=!!O.morphAttributes.normal,$t=!!O.morphAttributes.color,xn=L.toneMapped?p.toneMapping:zt,wn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Tt=wn!==void 0?wn.length:0,Ce=_e.get(L),vn=f.state.lights;if(H===!0&&(k===!0||v!==M)){const ot=v===M&&L.id===S;g.setState(L,v,ot)}let Oe=!1;L.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==vn.state.version||Ce.outputEncoding!==be||G.isInstancedMesh&&Ce.instancing===!1||!G.isInstancedMesh&&Ce.instancing===!0||G.isSkinnedMesh&&Ce.skinning===!1||!G.isSkinnedMesh&&Ce.skinning===!0||Ce.envMap!==we||L.fog===!0&&Ce.fog!==de||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==g.numPlanes||Ce.numIntersection!==g.numIntersection)||Ce.vertexAlphas!==Le||Ce.vertexTangents!==Se||Ce.morphTargets!==Te||Ce.morphNormals!==Fe||Ce.morphColors!==$t||Ce.toneMapping!==xn||ye.isWebGL2===!0&&Ce.morphTargetsCount!==Tt)&&(Oe=!0):(Oe=!0,Ce.__version=L.version);let ct=Ce.currentProgram;Oe===!0&&(ct=fi(L,D,G));let Gt=!1,Xn=!1,Hi=!1;const $e=ct.getUniforms(),Qt=Ce.uniforms;if(se.useProgram(ct.program)&&(Gt=!0,Xn=!0,Hi=!0),L.id!==S&&(S=L.id,Xn=!0),Gt||M!==v){if($e.setValue(V,"projectionMatrix",v.projectionMatrix),ye.logarithmicDepthBuffer&&$e.setValue(V,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),M!==v&&(M=v,Xn=!0,Hi=!0),L.isShaderMaterial||L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshStandardMaterial||L.envMap){const ot=$e.map.cameraPosition;ot!==void 0&&ot.setValue(V,j.setFromMatrixPosition(v.matrixWorld))}(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&$e.setValue(V,"isOrthographic",v.isOrthographicCamera===!0),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial||L.isShadowMaterial||G.isSkinnedMesh)&&$e.setValue(V,"viewMatrix",v.matrixWorldInverse)}if(G.isSkinnedMesh){$e.setOptional(V,G,"bindMatrix"),$e.setOptional(V,G,"bindMatrixInverse");const ot=G.skeleton;ot&&(ye.floatVertexTextures?(ot.boneTexture===null&&ot.computeBoneTexture(),$e.setValue(V,"boneTexture",ot.boneTexture,fe),$e.setValue(V,"boneTextureSize",ot.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Vi=O.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0&&ye.isWebGL2===!0)&&Q.update(G,O,L,ct),(Xn||Ce.receiveShadow!==G.receiveShadow)&&(Ce.receiveShadow=G.receiveShadow,$e.setValue(V,"receiveShadow",G.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(Qt.envMap.value=we,Qt.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Xn&&($e.setValue(V,"toneMappingExposure",p.toneMappingExposure),Ce.needsLights&&Rr(Qt,Hi),de&&L.fog===!0&&Lt.refreshFogUniforms(Qt,de),Lt.refreshMaterialUniforms(Qt,L,Y,P,F),Ni.upload(V,Ce.uniformsList,Qt,fe)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Ni.upload(V,Ce.uniformsList,Qt,fe),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&$e.setValue(V,"center",G.center),$e.setValue(V,"modelViewMatrix",G.modelViewMatrix),$e.setValue(V,"normalMatrix",G.normalMatrix),$e.setValue(V,"modelMatrix",G.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const ot=L.uniformsGroups;for(let qi=0,Pr=ot.length;qi<Pr;qi++)if(ye.isWebGL2){const Wo=ot[qi];re.update(Wo,ct),re.bind(Wo,ct)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ct}function Rr(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function Ir(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(v,D,O){_e.get(v.texture).__webglTexture=D,_e.get(v.depthTexture).__webglTexture=O;const L=_e.get(v);L.__hasExternalTextures=!0,L.__hasExternalTextures&&(L.__autoAllocateDepthBuffer=O===void 0,L.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,D){const O=_e.get(v);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,O=0){A=v,x=D,_=O;let L=!0;if(v){const we=_e.get(v);we.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(36160,null),L=!1):we.__webglFramebuffer===void 0?fe.setupRenderTarget(v):we.__hasExternalTextures&&fe.rebindTextures(v,_e.get(v.texture).__webglTexture,_e.get(v.depthTexture).__webglTexture)}let G=null,de=!1,me=!1;if(v){const we=v.texture;(we.isData3DTexture||we.isDataArrayTexture)&&(me=!0);const Le=_e.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(G=Le[D],de=!0):ye.isWebGL2&&v.samples>0&&fe.useMultisampledRTT(v)===!1?G=_e.get(v).__webglMultisampledFramebuffer:G=Le,E.copy(v.viewport),B.copy(v.scissor),w=v.scissorTest}else E.copy(R).multiplyScalar(Y).floor(),B.copy(q).multiplyScalar(Y).floor(),w=X;if(se.bindFramebuffer(36160,G)&&ye.drawBuffers&&L&&se.drawBuffers(v,G),se.viewport(E),se.scissor(B),se.setScissorTest(w),de){const we=_e.get(v.texture);V.framebufferTexture2D(36160,36064,34069+D,we.__webglTexture,O)}else if(me){const we=_e.get(v.texture),Le=D||0;V.framebufferTextureLayer(36160,36064,we.__webglTexture,O||0,Le)}S=-1},this.readRenderTargetPixels=function(v,D,O,L,G,de,me){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=_e.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){se.bindFramebuffer(36160,be);try{const we=v.texture,Le=we.format,Se=we.type;if(Le!==Et&&N.convert(Le)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Te=Se===Qn&&(pe.has("EXT_color_buffer_half_float")||ye.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Se!==fn&&N.convert(Se)!==V.getParameter(35738)&&!(Se===hn&&(ye.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-L&&O>=0&&O<=v.height-G&&V.readPixels(D,O,L,G,N.convert(Le),N.convert(Se),de)}finally{const we=A!==null?_e.get(A).__webglFramebuffer:null;se.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(v,D,O=0){const L=Math.pow(2,-O),G=Math.floor(D.image.width*L),de=Math.floor(D.image.height*L);fe.setTexture2D(D,0),V.copyTexSubImage2D(3553,O,0,0,v.x,v.y,G,de),se.unbindTexture()},this.copyTextureToTexture=function(v,D,O,L=0){const G=D.image.width,de=D.image.height,me=N.convert(O.format),be=N.convert(O.type);fe.setTexture2D(O,0),V.pixelStorei(37440,O.flipY),V.pixelStorei(37441,O.premultiplyAlpha),V.pixelStorei(3317,O.unpackAlignment),D.isDataTexture?V.texSubImage2D(3553,L,v.x,v.y,G,de,me,be,D.image.data):D.isCompressedTexture?V.compressedTexSubImage2D(3553,L,v.x,v.y,D.mipmaps[0].width,D.mipmaps[0].height,me,D.mipmaps[0].data):V.texSubImage2D(3553,L,v.x,v.y,me,be,D.image),L===0&&O.generateMipmaps&&V.generateMipmap(3553),se.unbindTexture()},this.copyTextureToTexture3D=function(v,D,O,L,G=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=v.max.x-v.min.x+1,me=v.max.y-v.min.y+1,be=v.max.z-v.min.z+1,we=N.convert(L.format),Le=N.convert(L.type);let Se;if(L.isData3DTexture)fe.setTexture3D(L,0),Se=32879;else if(L.isDataArrayTexture)fe.setTexture2DArray(L,0),Se=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,L.flipY),V.pixelStorei(37441,L.premultiplyAlpha),V.pixelStorei(3317,L.unpackAlignment);const Te=V.getParameter(3314),Fe=V.getParameter(32878),$t=V.getParameter(3316),xn=V.getParameter(3315),wn=V.getParameter(32877),Tt=O.isCompressedTexture?O.mipmaps[0]:O.image;V.pixelStorei(3314,Tt.width),V.pixelStorei(32878,Tt.height),V.pixelStorei(3316,v.min.x),V.pixelStorei(3315,v.min.y),V.pixelStorei(32877,v.min.z),O.isDataTexture||O.isData3DTexture?V.texSubImage3D(Se,G,D.x,D.y,D.z,de,me,be,we,Le,Tt.data):O.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Se,G,D.x,D.y,D.z,de,me,be,we,Tt.data)):V.texSubImage3D(Se,G,D.x,D.y,D.z,de,me,be,we,Le,Tt),V.pixelStorei(3314,Te),V.pixelStorei(32878,Fe),V.pixelStorei(3316,$t),V.pixelStorei(3315,xn),V.pixelStorei(32877,wn),G===0&&L.generateMipmaps&&V.generateMipmap(Se),se.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?fe.setTextureCube(v,0):v.isData3DTexture?fe.setTexture3D(v,0):v.isDataArrayTexture?fe.setTexture2DArray(v,0):fe.setTexture2D(v,0),se.unbindTexture()},this.resetState=function(){x=0,_=0,A=null,se.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ld extends Sr{}Ld.prototype.isWebGL1Renderer=!0;class Dd extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class kd extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const $a={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Rd{constructor(e,t,n){const i=this;let o=!1,s=0,r=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){r++,o===!1&&i.onStart!==void 0&&i.onStart(u,s,r),o=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,r),s===r&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){const d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=h.length;d<f;d+=2){const m=h[d],y=h[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return y}return null}}}const Id=new Rd;class Tr{constructor(e){this.manager=e!==void 0?e:Id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,o){n.load(e,i,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Pd extends Tr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=$a.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const r=ei("img");function l(){u(),$a.add(e,this),t&&t(this),o.manager.itemEnd(e)}function h(d){u(),i&&i(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){r.removeEventListener("load",l,!1),r.removeEventListener("error",h,!1)}return r.addEventListener("load",l,!1),r.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),o.manager.itemStart(e),r.src=e,r}}class Bd extends Tr{constructor(e){super(e)}load(e,t,n,i){const o=new yt,s=new Pd(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(r){o.image=r,o.needsUpdate=!0,t!==void 0&&t(o)},n,i),o}}class Fd extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Nd extends Fd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class zd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Qa();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Qa(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Io);const Wd=[{author:"Abraham Lincoln",text:"A house divided against itself cannot stand."},{author:"Abraham Lincoln",text:"Important principles may, and must, be inflexible."},{author:"Abraham Lincoln",text:"I destroy my enemies when I make them my friends."},{author:"Abraham Lincoln",text:"You have to do your own growing no matter how tall your grandfather was."},{author:"Abraham Lincoln",text:"Most people are about as happy as they make up their minds to be"},{author:"Abraham Lincoln",text:"Most folks are about as happy as they make up their minds to be."},{author:"Abraham Lincoln",text:"Give me six hours to chop down a tree and I will spend the first four sharpening the axe."},{author:"Abraham Lincoln",text:"When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run."},{author:"Abraham Lincoln",text:"The best thing about the future is that it only comes one day at a time."},{author:"Abraham Lincoln",text:"Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing."},{author:"Abraham Lincoln",text:"As our case is new, we must think and act anew."},{author:"Abraham Lincoln",text:"Be sure you put your feet in the right place, then stand firm."},{author:"Abraham Lincoln",text:"Always bear in mind that your own resolution to succeed is more important than any one thing."},{author:"Abraham Lincoln",text:"I walk slowly, but I never walk backward."},{author:"Abraham Lincoln",text:"Truth is generally the best vindication against slander."},{author:"Abraham Lincoln",text:"Most folks are as happy as they make up their minds to be."},{author:"Abraham Lincoln",text:"I will prepare and some day my chance will come."},{author:"Abraham Maslow",text:"What is necessary to change a person is to change his awareness of himself."},{author:"Aesop",text:"No act of kindness, no matter how small, is ever wasted."},{author:"Ajahn Chah",text:"If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace."},{author:"Alan Watts",text:"No valid plans for the future can be made by those who have no capacity for living now."},{author:"Albert Camus",text:"Autumn is a second spring when every leaf is a flower."},{author:"Albert Camus",text:"In the depth of winter, I finally learned that there was within me an invincible summer."},{author:"Albert Einstein",text:"God always takes the simplest way."},{author:"Albert Einstein",text:"Learn from yesterday, live for today, hope for tomorrow."},{author:"Albert Einstein",text:"The only real valuable thing is intuition."},{author:"Albert Einstein",text:"Once we accept our limits, we go beyond them."},{author:"Albert Einstein",text:"Life is like riding a bicycle. To keep your balance you must keep moving."},{author:"Albert Einstein",text:"Feeling and longing are the motive forces behind all human endeavor and human creations."},{author:"Albert Einstein",text:"I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind."},{author:"Albert Einstein",text:"Try not to become a man of success, but rather try to become a man of value."},{author:"Albert Einstein",text:"When the solution is simple, God is answering."},{author:"Albert Einstein",text:"A man should look for what is, and not for what he thinks should be."},{author:"Albert Einstein",text:"Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create."},{author:"Albert Einstein",text:"If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut."},{author:"Albert Einstein",text:"Reality is merely an illusion, albeit a very persistent one."},{author:"Albert Einstein",text:"Peace cannot be kept by force. It can only be achieved by understanding."},{author:"Albert Einstein",text:"We cannot solve our problems with the same thinking we used when we created them."},{author:"Albert Einstein",source:"https://en.wikiquote.org/wiki/Albert_Einstein",tags:"intelligence, knowledge, simplicity, understanding",text:"If you can't explain it simply, you don't understand it well enough."},{author:"Albert Einstein",source:"https://www.goodreads.com/quotes/38836",tags:"imagination, creativity, inspiration",text:"Imagination is everything. It is the preview of life's coming attractions."},{author:"Albert Einstein",source:"https://www.goodreads.com/quotes/297929",tags:"imagination, creativity, intelligence",text:"The true sign of intelligence is not knowledge but imagination."},{author:"Albert Einstein",text:"In the middle of every difficulty lies opportunity."},{author:"Albert Einstein",text:"Setting an example is not the main means of influencing another, it is the only means."},{author:"Albert Einstein",text:"Logic will get you from A to B. Imagination will take you everywhere."},{author:"Albert Einstein",text:"Great ideas often receive violent opposition from mediocre minds."},{author:"Albert Einstein",text:"Anyone who doesn't take truth seriously in small matters cannot be trusted in large ones either."},{author:"Albert Einstein",text:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."},{author:"Albert Einstein",text:"One may say the eternal mystery of the world is its comprehensibility."},{author:"Albert Einstein",text:"A person who never made a mistake never tried anything new."},{author:"Albert Einstein",source:"https://www.goodreads.com/quotes/11458",tags:"talent, curious, curiosity, passion",text:"I have no special talent. I am only passionately curious."},{author:"Albert Gray",source:"https://www.goodreads.com/quotes/524224",tags:"winners, habit, losers",text:"Winners have simply formed the habit of doing things losers don't like to do."},{author:"Albert Schweitzer",text:"Do something wonderful, people may imitate it."},{author:"Albert Schweitzer",text:"We should all be thankful for those people who rekindle the inner spirit."},{author:"Albert Schweitzer",text:"One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity."},{author:"Albert Schweitzer",text:"Wherever a man turns he can find someone who needs him."},{author:"Albert Schweitzer",text:"Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate."},{author:"Albert Schweitzer",text:"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."},{author:"Albert Schweitzer",text:"An optimist is a person who sees a green light everywhere, while the pessimist sees only the red spotlight... The truly wise person is colour-blind."},{author:"Albert Schweitzer",text:"Never say there is nothing beautiful in the world any more. There is always something to make you wonder in the shape of a tree, the trembling of a leaf."},{author:"Aldous Huxley",text:"There is only one corner of the universe you can be certain of improving, and that's your own self."},{author:"Aldous Huxley",text:"Experience is not what happens to a man. It is what a man does with what happens to him."},{author:"Alexander Pope",text:"Do good by stealth, and blush to find it fame."},{author:"Alexander Pope",text:"Blessed is the man who expects nothing, for he shall never be disappointed."},{author:"Alexander the Great",text:"There is nothing impossible to him who will try."},{author:"Alexis Carrel",text:"All great men are gifted with intuition. They know without reasoning or analysis, what they need to know."},{author:"Alfred Adler",text:"Trust only movement. Life happens at the level of events, not of words. Trust movement."},{author:"Alfred Korzybski",text:"There are two ways to slide easily through life: to believe everything or to doubt everything; both ways save us from thinking."},{author:"Alfred Painter",text:"Saying thank you is more than good manners. It is good spirituality."},{author:"Alfred Sheinwold",text:"Learn all you can from the mistakes of others. You won't have time to make them all yourself."},{author:"Alfred Tennyson",text:"The happiness of a man in this life does not consist in the absence but in the mastery of his passions."},{author:"Alfred Whitehead",text:"The art of progress is to preserve order amid change, and to preserve change amid order."},{author:"Alice Walker",text:"No person is your friend who demands your silence, or denies your right to grow."},{author:"Alphonse Karr",text:"Some people are always grumbling because roses have thorns; I am thankful that thorns have roses."},{author:"Ambrose Bierce",text:"Speak when you are angry and you will make the best speech you will ever regret."},{author:"Amelia Earhart",text:"Never do things others can do and will do, if there are things others cannot do or will not do."},{author:"American proverb",text:"From little acorns mighty oaks do grow."},{author:"Amiel",text:"Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark."},{author:"Amy Bloom",text:"Love at first sight is easy to understand; its when two people have been looking at each other for a lifetime that it becomes a miracle."},{author:"Amy Tan",text:"I am like a falling star who has finally found her place next to another in a lovely constellation, where we will sparkle in the heavens forever."},{author:"Anais Nin",text:"Life shrinks or expands in proportion to one's courage."},{author:"Anais Nin",text:"The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery."},{author:"Anais Nin",text:"Dreams pass into the reality of action. From the actions stems the dream again; and this interdependence produces the highest form of living."},{author:"Anais Nin",text:"The personal life deeply lived always expands into truths beyond itself."},{author:"Anais Nin",text:"Age does not protect you from love. But love, to some extent, protects you from age."},{author:"Anais Nin",text:"The dream was always running ahead of me. To catch up, to live for a moment in unison with it, that was the miracle."},{author:"Anais Nin",text:"There is not one big cosmic meaning for all, there is only the meaning we each give to our life."},{author:"Anatole France",text:"To accomplish great things, we must dream as well as act."},{author:"Anatole France",text:"To accomplish great things, we must not only act, but also dream; not only plan, but also believe."},{author:"Anatole France",text:"It is better to understand a little than to misunderstand a lot."},{author:"Anatole France",text:"You learn to speak by speaking, to study by studying, to run by running, to work by working; in just the same way, you learn to love by loving."},{author:"Andr\xE9 Gide",text:"One does not discover new lands without consenting to lose sight of the shore for a very long time."},{author:"Andr\xE9 Gide",text:"The most decisive actions of our life... are most often unconsidered actions."},{author:"Andy Rooney",text:"If you smile when no one else is around, you really mean it."},{author:"Andy Warhol",text:"They say that time changes things, but you actually have to change them yourself."},{author:"Angela Schwindt",text:"While we try to teach our children all about life, our children teach us what life is all about."},{author:"Anna Pavlova",text:"To follow, without halt, one aim: There is the secret of success."},{author:"Anne Bradstreet",text:"If we had no winter, the spring would not be so pleasant; if we did not sometimes taste of adversity, prosperity would not be so welcome."},{author:"Anne Bronte",text:"All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise."},{author:"Anne Frank",text:"We all live with the objective of being happy; our lives are all different and yet the same."},{author:"Anne Frank",text:"How wonderful it is that nobody need wait a single moment before starting to improve the world."},{author:"Anne Frank",text:"No one has ever become poor by giving."},{author:"Anne Frank",text:"Parents can only give good advice or put them on the right paths, but the final forming of a persons character lies in their own hands."},{author:"Anne Lamott",text:"Joy is the best makeup."},{author:"Anne Lindbergh",text:"If one is estranged from oneself, then one is estranged from others too. If one is out of touch with oneself, then one cannot touch others."},{author:"Anne Schaef",text:"Life is a process. We are a process. The universe is a process."},{author:"Anne Wilson Schaef",text:"Trusting our intuition often saves us from disaster."},{author:"Annie Dillard",source:"https://www.goodreads.com/quotes/530337",tags:"passion, try, live",text:"How we spend our days is, of course, how we spend our lives."},{author:"Anthony D'Angelo",text:"Listen to your intuition. It will tell you everything you need to know."},{author:"Antoine de Saint-Exupery",text:"It is only with the heart that one can see rightly, what is essential is invisible to the eye."},{author:"Antoine de Saint-Exupery",text:"I know but one freedom and that is the freedom of the mind."},{author:"Antoine de Saint-Exupery",text:"Love does not consist of gazing at each other, but in looking together in the same direction."},{author:"Arianna Huffington",source:"https://quotefancy.com/quote/1246163",tags:"Sleep, Ideas",text:"Discover the great ideas that lie inside you by discovering the power of sleep."},{author:"Arie de Gues",text:"Your ability to learn faster than your competition is your only sustainable competitive advantage."},{author:"Aristotle",text:"Well begun is half done."},{author:"Aristotle",text:"Change in all things is sweet."},{author:"Aristotle",text:"It is the mark of an educated mind to be able to entertain a thought without accepting it."},{author:"Aristotle",text:"Happiness depends upon ourselves."},{author:"Aristotle",text:"In all things of nature there is something of the marvellous."},{author:"Aristotle",text:"We are what we repeatedly do. Excellence, then, is not an act, but a habit."},{author:"Aristotle",text:"Those that know, do. Those that understand, teach."},{author:"Aristotle",source:"https://www.goodreads.com/quotes/1309500",tags:"Criticism",text:"Criticism is something you can easily avoid by saying nothing, doing nothing, and being nothing."},{author:"Aristotle",text:"We are what we repeatedly do. Excellence, then, is not an act but a habit."},{author:"Aristotle",text:"Moral excellence comes about as a result of habit. We become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts."},{author:"Aristotle",source:"https://www.goodreads.com/quotes/101859",tags:"energy, essence, life-lessons, mind",text:"The energy of the mind is the essence of life."},{author:"Aristotle",text:"If one way be better than another, that you may be sure is natures way."},{author:"Arthur Conan Doyle",text:"Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth."},{author:"Arthur Conan Doyle",text:"Mediocrity knows nothing higher than itself, but talent instantly recognizes genius."},{author:"Arthur Rubinstein",text:"Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings."},{author:"Arthur Schopenhauer",text:"Every man takes the limits of his own field of vision for the limits of the world."},{author:"Audre Lorde",text:"When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid."},{author:"Augustinus Sanctus",text:"The world is a book, and those who do not travel read only a page."},{author:"Babatunde Olatunji",text:"Yesterday is history. Tomorrow is a mystery. And today? Today is a gift. That is why we call it the present."},{author:"Babe Ruth",text:"Yesterdays home runs don't win today's games."},{author:"Baltasar Gracian",text:"Without courage, wisdom bears no fruit."},{author:"Barack Obama",text:"If you're walking down the right path and you're willing to keep walking, eventually you'll make progress."},{author:"Barack Obama",text:"Focusing your life solely on making a buck shows a poverty of ambition. It asks too little of yourself. And it will leave you unfulfilled."},{author:"Barack Obama",text:"Change will not come if we wait for some other person or some other time. We are the ones weve been waiting for. We are the change that we seek."},{author:"Barbara Baron",text:"Don't wait for your feelings to change to take the action. Take the action and your feelings will change."},{author:"Barbara De Angelis",text:"We need to find the courage to say NO to the things and people that are not serving us if we want to rediscover ourselves and live our lives with authenticity."},{author:"Ben Stein",text:"The first step to getting the things you want out of life is this: decide what you want."},{author:"Ben Sweetland",text:"We cannot hold a torch to light another's path without brightening our own."},{author:"Benjamin Disraeli",text:"The secret of success is constancy to purpose."},{author:"Benjamin Disraeli",text:"Action may not always bring happiness; but there is no happiness without action."},{author:"Benjamin Disraeli",text:"Through perseverance many people win success out of what seemed destined to be certain failure."},{author:"Benjamin Disraeli",text:"Never apologize for showing feelings. When you do so, you apologize for the truth."},{author:"Benjamin Disraeli",text:"One secret of success in life is for a man to be ready for his opportunity when it comes."},{author:"Benjamin Disraeli",text:"The greatest good you can do for another is not just to share your riches but to reveal to him his own."},{author:"Benjamin Disraeli",text:"The greatest good you can do for another is not just share your riches, but reveal to them their own."},{author:"Benjamin Disraeli",text:"Ignorance never settle a question."},{author:"Benjamin Disraeli",text:"Action may not always bring happiness, but there is no happiness without action."},{author:"Benjamin Disraeli",text:"Never apologize for showing feeling. When you do so, you apologize for truth."},{author:"Benjamin Disraeli",text:"We make our own fortunes and we call them fate."},{author:"Benjamin Franklin",text:"Well done is better than well said."},{author:"Benjamin Franklin",text:"One today is worth two tomorrows."},{author:"Benjamin Franklin",text:"There never was a good knife made of bad steel."},{author:"Benjamin Franklin",text:"Watch the little things; a small leak will sink a great ship."},{author:"Benjamin Franklin",text:"Experience keeps a dear school, but fools will learn in no other."},{author:"Benjamin Haydon",text:"There surely is in human nature an inherent propensity to extract all the good out of all the evil."},{author:"Benjamin Spock",text:"Trust yourself. You know more than you think you do."},{author:"Bernadette Devlin",text:"Yesterday I dared to struggle. Today I dare to win."},{author:"Bernice Reagon",text:"Life's challenges are not supposed to paralyse you, they're supposed to help you discover who you are."},{author:"Bernice Reagon",text:"Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are."},{author:"Bertrand Russell",text:"The happiness that is genuinely satisfying is accompanied by the fullest exercise of our faculties and the fullest realization of the world in which we live."},{author:"Betty Friedan",text:"It is easier to live through someone else than to become complete yourself."},{author:"Bill Gates",source:"https://www.goodreads.com/quotes/323288",tags:"inspirational",text:"Success is a lousy teacher. It seduces smart people into thinking they can't lose."},{author:"Billie Armstrong",text:"Our passion is our strength."},{author:"Billy Wilder",text:"Trust your own instinct. Your mistakes might as well be your own, instead of someone elses."},{author:"Bishop Desmond Tutu",text:"We must not allow ourselves to become like the system we oppose."},{author:"Blaise Pascal",text:"The heart has its reasons which reason knows not of."},{author:"Blaise Pascal",text:"Kind words do not cost much. Yet they accomplish much."},{author:"Blaise Pascal",text:"Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed."},{author:"Blaise Pascal",text:"Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world."},{author:"Blaise Pascal",text:"The least movement is of importance to all nature. The entire ocean is affected by a pebble."},{author:"Blaise Pascal",text:"We are all something, but none of us are everything."},{author:"Blaise Pascal",text:"We know the truth, not only by the reason, but by the heart."},{author:"Blaise Pascal",text:"We must learn our limits. We are all something, but none of us are everything."},{author:"Bo Jackson",text:"Set your goals high, and don't stop till you get there."},{author:"Bob Newhart",text:"All I can say about life is, Oh God, enjoy it!"},{author:"Bodhidharma",text:"All know the way; few actually walk it."},{author:"Booker Washington",text:"Excellence is to do a common thing in an uncommon way."},{author:"Booker Washington",text:"The world cares very little about what a man or woman knows; it is what a man or woman is able to do that counts."},{author:"Brendan Francis",text:"No yesterdays are ever wasted for those who give themselves to today."},{author:"Brian Tracy",text:"Goals are the fuel in the furnace of achievement."},{author:"Brian Tracy",text:"Whatever we expect with confidence becomes our own self-fulfilling prophecy."},{author:"Brian Tracy",text:"You can only grow if you're willing to feel awkward and uncomfortable when you try something new."},{author:"Brian Tracy",text:"There is never enough time to do everything, but there is always enough time to do the most important thing."},{author:"Brian Tracy",source:"https://www.goodreads.com/quotes/28134",tags:"future, inner power",text:"You have within you, right now, everything you need to deal with whatever the world can throw at you."},{author:"Bruce Garrabrandt",source:"https://www.google.com/search?q=Bruce+Garrabrandt+Creativity+doesn%27t+wait",tags:"creativity, creative, perfect, waiting, ordinary",text:"Creativity doesn't wait for that perfect moment. It fashions its own perfect moments out of ordinary ones."},{author:"Bruce Lee",text:"If you spend too much time thinking about a thing, you'll never get it done."},{author:"Bruce Lee",text:"A wise man can learn more from a foolish question than a fool can learn from a wise answer."},{author:"Bruce Lee",text:"Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind."},{author:"Bruce Lee",text:"Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it."},{author:"Bruce Lee",text:"Take no thought of who is right or wrong or who is better than. Be not for or against."},{author:"Bruce Lee",text:"Take things as they are. Punch when you have to punch. Kick when you have to kick."},{author:"Bruce Lee",text:"I'm not in this world to live up to your expectations and you're not in this world to live up to mine."},{author:"Bruce Lee",text:"To know oneself is to study oneself in action with another person."},{author:"Bruce Lee",text:"As you think, so shall you become."},{author:"Bruce Lee",text:"Mistakes are always forgivable, if one has the courage to admit them."},{author:"Bruce Lee",text:"If you love life, don't waste time, for time is what life is made up of."},{author:"Bruce Lee",text:"All fixed set patterns are incapable of adaptability or pliability. The truth is outside of all fixed patterns."},{author:"Bruce Lee",text:"The less effort, the faster and more powerful you will be."},{author:"Bruce Lee",text:"To hell with circumstances; I create opportunities."},{author:"Bruce Lee",text:"Im not in this world to live up to your expectations and you're not in this world to live up to mine."},{author:"Bruce Lee",source:"https://www.goodreads.com/quotes/302319",tags:"knowledge, action",text:"Knowing is not enough, we must apply. Willing is not enough, we must do."},{author:"Bruce Lee",source:"https://www.goodreads.com/quotes/4146-do-not-pray-for-an-easy-life-pray-for-the",tags:"life, stoic",text:"Do not pray for an easy life, pray for the strength to endure a difficult one"},{author:"Bruce Lee",source:"https://www.goodreads.com/quotes/19527-be-happy-but-never-satisfied",tags:"stoic, happiness",text:"Be happy, but never satisfied."},{author:"Buckminster Fuller",text:"There is nothing in a caterpillar that tells you it's going to be a butterfly."},{author:"Buckminster Fuller",source:"https://www.goodreads.com/quotes/13119",tags:"future, progress, reality, new",text:"You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete"},{author:"Buddha",text:"Peace comes from within. Do not seek it without."},{author:"Buddha",text:"Work out your own salvation. Do not depend on others."},{author:"Buddha",text:"He is able who thinks he is able."},{author:"Buddha",text:"Those who are free of resentful thoughts surely find peace."},{author:"Buddha",text:"What we think, we become."},{author:"Buddha",text:"It is better to travel well than to arrive."},{author:"Buddha",text:"The mind is everything. What you think you become."},{author:"Buddha",text:"In separateness lies the world's great misery, in compassion lies the world's true strength."},{author:"Buddha",text:"Happiness comes when your work and words are of benefit to yourself and others."},{author:"Buddha",text:"Just as a candle cannot burn without fire, men cannot live without a spiritual life."},{author:"Buddha",text:"If you light a lamp for somebody, it will also brighten your path."},{author:"Buddha",text:"Your worst enemy cannot harm you as much as your own unguarded thoughts."},{author:"Buddha",text:"The way is not in the sky. The way is in the heart."},{author:"Buddha",text:"Three things cannot be long hidden: the sun, the moon, and the truth."},{author:"Buddha",text:"You, yourself, as much as anybody in the entire universe, deserve your love and affection."},{author:"Buddha",text:"You will not be punished for your anger, you will be punished by your anger."},{author:"Buddha",text:"The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character."},{author:"Buddha",text:"In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves."},{author:"Buddha",text:"Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind."},{author:"Buddha",text:"To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear."},{author:"Buddha",text:"There are only two mistakes one can make along the road to truth; not going all the way, and not starting."},{author:"Buddha",text:"To live a pure unselfish life, one must count nothing as ones own in the midst of abundance."},{author:"Buddha",text:"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."},{author:"Buddha",text:"We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world."},{author:"Buddha",text:"Your work is to discover your world and then with all your heart give yourself to it."},{author:"Buddha",text:"All that we are is the result of what we have thought. The mind is everything. What we think we become."},{author:"Buddha",text:"The foot feels the foot when it feels the ground."},{author:"Buddha",text:"No one saves us but ourselves. No one can and no one may. We ourselves must walk the path."},{author:"Buddha",text:"When you realize how perfect everything is you will tilt your head back and laugh at the sky."},{author:"Buddha",text:"Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared."},{author:"Buddha",text:"He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye."},{author:"Buddha",text:"In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true."},{author:"Buddha",text:"Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared."},{author:"Buddha",text:"Always be mindful of the kindness and not the faults of others."},{author:"Buddha",text:"Better than a thousand hollow words, is one word that brings peace."},{author:"Buddha",text:"A jug fills drop by drop."},{author:"Buddha",text:"You only lose what you cling to."},{author:"Buddha",text:"Every human being is the author of his own health or disease."},{author:"Buddha",text:"Your body is precious. It is our vehicle for awakening. Treat it with care."},{author:"Buddha",text:"Chaos is inherent in all compounded things. Strive on with diligence."},{author:"Buddha",text:"No matter how hard the past, you can always begin again."},{author:"Buddha",text:"Your work is to discover your work and then with all your heart to give yourself to it."},{author:"Buddha",text:"If we could see the miracle of a single flower clearly, our whole life would change."},{author:"Buddha",text:"You cannot travel the path until you have become the path itself."},{author:"Buddha",text:"We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves."},{author:"Buddha",text:"Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned."},{author:"Buddha",text:"I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on them unless they act."},{author:"Buddha",text:"Remembering a wrong is like carrying a burden on the mind."},{author:"Buddha",text:"The only real failure in life is not to be true to the best one knows."},{author:"Buddha",text:"However many holy words you read, However many you speak, What good will they do you If you do not act on upon them?"},{author:"Buddha",text:"Meditation brings wisdom; lack of mediation leaves ignorance. Know well what leads you forward and what hold you back, and choose the path that leads to wisdom."},{author:"Buddha",text:"If you propose to speak, always ask yourself, is it true, is it necessary, is it kind."},{author:"Buddha",text:"An idea that is developed and put into action is more important than an idea that exists only as an idea."},{author:"Buddha",text:"However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?"},{author:"Buddha",text:"Better than a thousand hollow words is one word that brings peace."},{author:"Buddha",text:"What you are is what you have been. What you will be is what you do now."},{author:"Buddha",text:"What you are is what you have been. What you'll be is what you do now."},{author:"Byron Pulsifer",text:"Fate is in your hands and no one elses"},{author:"Byron Pulsifer",text:"What you give is what you get."},{author:"Byron Pulsifer",text:"The best teacher is experience learned from failures."},{author:"Byron Pulsifer",text:"What you fear is that which requires action to overcome."},{author:"Byron Pulsifer",text:"If you cannot be silent be brilliant and thoughtful."},{author:"Byron Pulsifer",text:"Someone is special only if you tell them."},{author:"Byron Pulsifer",text:"Give thanks for the rain of life that propels us to reach new horizons."},{author:"Byron Pulsifer",text:"Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us."},{author:"Byron Pulsifer",text:"Your destiny isn't just fate; it is how you use your own developed abilities to get what you want."},{author:"Byron Pulsifer",text:"Everyone can taste success when the going is easy, but few know how to taste victory when times get tough."},{author:"Byron Pulsifer",text:"Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience."},{author:"Byron Pulsifer",text:"Many people think of prosperity that concerns money only to forget that true prosperity is of the mind."},{author:"Byron Pulsifer",text:"Today, give a stranger a smile without waiting for it may be the joy they need to have a great day."},{author:"Byron Pulsifer",text:"Sadness may be part of life but there is no need to let it dominate your entire life."},{author:"Byron Pulsifer",text:"To give hope to someone occurs when you teach them how to use the tools to do it for themselves."},{author:"Byron Pulsifer",text:"You can be what you want to be. You have the power within and we will help you always."},{author:"Byron Pulsifer",text:"Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to."},{author:"Byron Pulsifer",text:"Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life."},{author:"Byron Pulsifer",text:"You can't create in a vacuum. Life gives you the material and dreams can propel new beginnings."},{author:"Byron Pulsifer",text:"You can't trust without risk but neither can you live in a cocoon."},{author:"Byron Pulsifer",text:"Look forward to spring as a time when you can start to see what nature has to offer once again."},{author:"Byron Pulsifer",text:"Fear of failure is one attitude that will keep you at the same point in your life."},{author:"Byron Pulsifer",text:"To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture."},{author:"Byron Pulsifer",text:"If you have no respect for your own values how can you be worthy of respect from others."},{author:"Byron Pulsifer",text:"Wishes can be your best avenue of getting what you want when you turn wishes into action. Action moves your wish to the forefront from thought to reality."},{author:"Byron Pulsifer",text:"Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance."},{author:"Byron Pulsifer",text:"Truth isn't all about what actually happens but more about how what has happened is interpreted."},{author:"Byron Pulsifer",text:"Passion creates the desire for more and action fuelled by passion creates a future."},{author:"Byron Pulsifer",text:"Experience can only be gained by doing not by thinking or dreaming."},{author:"Byron Pulsifer",text:"It can't be spring if your heart is filled with past failures."},{author:"Byron Pulsifer",text:"I may not know everything, but everything is not known yet anyway."},{author:"Byron Pulsifer",text:"Transformation does not start with some one else changing you; transformation is an inner self reworking of what you are now to what you will be."},{author:"Byron Pulsifer",text:"Time is not a measure the length of a day or month or year but more a measure of what you have accomplished."},{author:"Byron Pulsifer",text:"Complaining doesn't change a thing only taking action does."},{author:"Byron Pulsifer",text:"Strength to carry on despite the odds means you have faith in your own abilities and know how."},{author:"Byron Pulsifer",text:"Spring is a time for rebirth and the fulfilment of new life."},{author:"Byron Pulsifer",text:"Respect is not something that you can ask for, buy or borrow. Respect is what you earn from each person no matter their background or status."},{author:"Byron Pulsifer",text:"Bold is not the act of foolishness but the attribute and inner strength to act when others will not so as to move forward not backward."},{author:"Byron Pulsifer",text:"Staying in one place is the best path to be taken over and surpassed by many."},{author:"Byron Pulsifer",text:"To know your purpose is to live a life of direction, and in that direction is found peace and tranquillity."},{author:"Byron Pulsifer",text:"Into each life rain must fall but rain can be the giver of life and it is all in your attitude that makes rain produce sunshine."},{author:"Byron Roberts",text:"It is not the mistake that has the most power, instead, it is learning from the mistake to advance your own attributes."},{author:"C. Pulsifer",text:"When anger use your energy to do something productive."},{author:"Cadet Maxim",text:"Risk more than others think is safe. Care more than others think is wise. Dream more than others think is practical.Expect more than others think is possible."},{author:"Calvin Coolidge",text:"We cannot do everything at once, but we can do something at once."},{author:"Calvin Coolidge",text:"I have never been hurt by anything I didn't say."},{author:"Cardinal Retz",text:"A man who doesn't trust himself can never really trust anyone else."},{author:"Carl Bard",text:"Though no one can go back and make a brand new start, anyone can start from not and make a brand new ending."},{author:"Carl Jung",text:"Who looks outside, dreams; who looks inside, awakes."},{author:"Carl Jung",text:"You are what you do, not what you say you do."},{author:"Carl Jung",text:"The shoe that fits one person pinches another; there is no recipe for living that suits all cases."},{author:"Carl Jung",text:"Everything that irritates us about others can lead us to an understanding about ourselves."},{author:"Carl Jung",text:"Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens."},{author:"Carl Jung",text:"Everything that irritates us about others can lead us to an understanding of ourselves."},{author:"Carl Jung",text:"In all chaos there is a cosmos, in all disorder a secret order."},{author:"Carl Jung",text:"Without this playing with fantasy no creative work has ever yet come to birth. The debt we owe to the play of the imagination is incalculable."},{author:"Carl Jung",text:"Through pride we are ever deceiving ourselves. But deep down below the surface of the average conscience a still, small voice says to us, Something is out of tune."},{author:"Carl Jung",text:"Knowledge rests not upon truth alone, but upon error also."},{author:"Carl Jung",text:"The least of things with a meaning is worth more in life than the greatest of things without it."},{author:"Carl Jung",text:"Knowing your own darkness is the best method for dealing with the darknesses of other people."},{author:"Carl Jung",text:"It all depends on how we look at things, and not how they are in themselves."},{author:"Carl Jung",text:"Everything that irritates us about others can lead us to a better understanding of ourselves."},{author:"Carl Jung",text:"Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes."},{author:"Carl Sagan",text:"Imagination will often carry us to worlds that never were. But without it we go nowhere."},{author:"Carl Sandburg",text:"Nothing happens unless first we dream."},{author:"Carla Gordon",text:"If someone in your life talked to you the way you talk to yourself, you would have left them long ago."},{author:"Carlos Castaneda",text:"The trick is in what one emphasizes. We either make ourselves miserable, or we make ourselves happy. The amount of work is the same."},{author:"Carlyle",text:"Silence is deep as Eternity, Speech is shallow as Time."},{author:"Caroline Myss",text:"You cannot change anything in your life with intention alone, which can become a watered-down, occasional hope that you'll get to tomorrow. Intention without action is useless."},{author:"Catherine Pulsifer",text:"You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action."},{author:"Catherine Pulsifer",text:"Being angry never solves anything."},{author:"Catherine Pulsifer",text:"Rather than wishing for change, you first must be prepared to change."},{author:"Catherine Pulsifer",text:"Our ability to achieve happiness and success depends on the strength of our wings."},{author:"Cathy Pulsifer",text:"You are special, you are unique, you are the best!"},{author:"Cavour",text:"The man who trusts men will make fewer mistakes than he who distrusts them."},{author:"Cecil B. DeMille",text:"The person who makes a success of living is the one who see his goal steadily and aims for it unswervingly. That is dedication."},{author:"Cervantes",text:"Those who will play with cats must expect to be scratched."},{author:"Cervantes",text:"Be slow of tongue and quick of eye."},{author:"Chalmers",text:"The grand essentials of happiness are: something to do, something to love, and something to hope for."},{author:"Chanakya",text:"A man is great by deeds, not by birth."},{author:"Channing",text:"Error is discipline through which we advance."},{author:"Channing",text:"Every man is a volume if you know how to read him."},{author:"Charles A. Lindbergh",text:"Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter."},{author:"Charles Chesnutt",text:"Impossibilities are merely things which we have not yet learned."},{author:"Charles Darwin",text:"The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts."},{author:"Charles DeLint",text:"The road leading to a goal does not separate you from the destination; it is essentially a part of it."},{author:"Charles Dickens",text:"Don't leave a stone unturned. It's always something, to know you have done the most you could."},{author:"Charles Dubois",text:"The important thing is this: to be able at any moment to sacrifice what we are for what we could become."},{author:"Charles Kettering",text:"One fails forward toward success."},{author:"Charles Lamb",text:"The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident."},{author:"Charles Perkhurst",text:"The heart has eyes which the brain knows nothing of."},{author:"Charles R. Swindoll",text:"We are all faced with a series of great opportunities brilliantly disguised as impossible situations."},{author:"Charles Schwab",text:"Keeping a little ahead of conditions is one of the secrets of business, the trailer seldom goes far."},{author:"Charles Swindoll",text:"Life is 10% what happens to you and 90% how you react to it."},{author:"Charlotte Bronte",text:"Life is so constructed that an event does not, cannot, will not, match the expectation."},{author:"Charlotte Gilman",text:"Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!"},{author:"Charlotte Perkins Gilman",text:"The first duty of a human being is to assume the right functional relationship to society more briefly, to find your real job, and do it."},{author:"Charlotte Perkins Gilman",text:"The first duty of a human being is to assume the right functional relationship to society - more briefly, to find your real job, and do it."},{author:"Chelsea Leyland",source:"https://www.brainyquote.com/quotes/chelsea_leyland_624473",tags:"Beauty, Sleep, Secret",text:"Sleep is the real beauty secret, but I dont get enough of that."},{author:"Cheng Yen",text:"Happiness does not come from having much, but from being attached to little."},{author:"Chinese proverb",text:"Learning is a treasure that will follow its owner everywhere"},{author:"Chinese proverb",text:"Talk doesn't cook rice."},{author:"Chinese proverb",text:"Tension is who you think you should be. Relaxation is who you are."},{author:"Chinese proverb",text:"If you are patient in one moment of anger, you will escape one hundred days of sorrow."},{author:"Chinese proverb",text:"People who say it cannot be done should not interrupt those who are doing it."},{author:"Chinese proverb",text:"A gem cannot be polished without friction, nor a man perfected without trials."},{author:"Chinese proverb",text:"He who deliberates fully before taking a step will spend his entire life on one leg."},{author:"Chinese proverb",text:"A single conversation across the table with a wise person is worth a months study of books."},{author:"Christian Bovee",text:"Example has more followers than reason."},{author:"Christopher Morley",text:"There is only one success to be able to spend your life in your own way."},{author:"Christopher Morley",text:"There is only one success - to be able to spend your life in your own way."},{author:"Christopher Reeve",text:"Once you choose hope, anythings possible."},{author:"Chuang Tzu",text:"When deeds and words are in accord, the whole world is transformed."},{author:"Chuang Tzu",text:"Flow with whatever is happening and let your mind be free. Stay centred by accepting whatever you are doing. This is the ultimate."},{author:"Chuck Norris",text:"A lot of times people look at the negative side of what they feel they can't do. I always look on the positive side of what I can do."},{author:"Chuck Norris",text:"A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one."},{author:"Cicero",text:"We must not say every mistake is a foolish one."},{author:"Cicero",text:"Gratitude is not only the greatest of virtues, but the paren't of all the others."},{author:"Claire Charmont",text:"The one who always loses, is the only person who gets the reward."},{author:"Coco Chanel",text:"There are people who have money and people who are rich."},{author:"Coco Chanel",text:"How many cares one loses when one decides not to be something but to be someone."},{author:"Colette",text:"I love my past. I love my present. I'm not ashamed of what Ive had, and I'm not sad because I have it no longer."},{author:"Colette",text:"I love my past. I love my present. Im not ashamed of what Ive had, and Im not sad because I have it no longer."},{author:"Colin Powell",text:"If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude."},{author:"Confucius",text:"Study the past, if you would divine the future."},{author:"Confucius",text:"Silence is a true friend who never betrays."},{author:"Confucius",source:"https://www.goodreads.com/quotes/961585",tags:"future, tomorrow, past",text:"Think of tomorrow, the past can't be mended."},{author:"Confucius",text:"Wherever you go, go with all your heart."},{author:"Confucius",text:"The more you know yourself, the more you forgive yourself."},{author:"Confucius",text:"To be wrong is nothing unless you continue to remember it."},{author:"Confucius",text:"The cautious seldom err."},{author:"Confucius",text:"What you do not want done to yourself, do not do to others."},{author:"Confucius",text:"Reviewing what you have learned and learning anew, you are fit to be a teacher."},{author:"Confucius",text:"The superior man is satisfied and composed; the mean man is always full of distress."},{author:"Confucius",text:"It does not matter how slowly you go as long as you do not stop."},{author:"Confucius",text:"To study and not think is a waste. To think and not study is dangerous."},{author:"Confucius",text:"I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability."},{author:"Confucius",text:"Choose a job you love, and you will never have to work a day in your life."},{author:"Confucius",text:"When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself."},{author:"Confucius",text:"Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?"},{author:"Confucius",text:"When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps."},{author:"Confucius",text:"I am not bothered by the fact that I am unknown. I am bothered when I do not know others."},{author:"Confucius",text:"The superior man is modest in his speech, but exceeds in his actions."},{author:"Confucius",text:"Silence is the true friend that never betrays."},{author:"Confucius",text:"To be wronged is nothing unless you continue to remember it."},{author:"Confucius",text:"They must often change, who would be constant in happiness or wisdom."},{author:"Confucius",text:"When you see a good person, think of becoming like him. When you see someone not so good, reflect on your own weak points."},{author:"Confucius",text:"When you meet someone better than yourself, turn your thoughts to becoming his equal. When you meet someone not as good as you are, look within and examine your own self."},{author:"Confucius",text:"Everything has beauty, but not everyone sees it."},{author:"Confucius",text:"I want you to be everything that's you, deep at the center of your being."},{author:"Confucius",text:"The Superior Man is aware of Righteousness, the inferior man is aware of advantage."},{author:"Confucius",text:"Fine words and an insinuating appearance are seldom associated with true virtue"},{author:"Confucius",text:"Our greatest glory is not in never falling, but in rising every time we fall."},{author:"Confucius",text:"I hear and I forget. I see and I remember. I do and I understand."},{author:"Confucius",text:"Ability will never catch up with the demand for it."},{author:"Confucius",text:"The superior man acts before he speaks, and afterwards speaks according to his action."},{author:"Confucius",text:"Learning without reflection is a waste, reflection without learning is dangerous."},{author:"Confucius",text:"If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?"},{author:"Confucius",text:"Sincerity is the way of Heaven. The attainment of sincerity is the way of men."},{author:"Confucius",text:"To give ones self earnestly to the duties due to men, and, while respecting spiritual beings, to keep aloof from them, may be called wisdom."},{author:"Confucius",text:"He who wishes to secure the good of others, has already secured his own."},{author:"Confucius",text:"Life is really simple, but we insist on making it complicated."},{author:"Corita Kent",text:"Life is a succession of moments. To live each one is to succeed."},{author:"Cullen Hightower",text:"When performance exceeds ambition, the overlap is called success."},{author:"Cynthia Ozick",text:"To want to be what one can be is purpose in life."},{author:"Daisaku Ikeda",text:"What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people."},{author:"Daisaku Ikeda",text:"The person who lives life fully, glowing with life's energy, is the person who lives a successful life."},{author:"Daisaku Ikeda",text:"True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances."},{author:"Daisaku Ikeda",text:"Genuine sincerity opens people's hearts, while manipulation causes them to close."},{author:"Daisaku Ikeda",text:"If we look at the world with a love of life, the world will reveal its beauty to us."},{author:"Daisaku Ikeda",text:"If you lose today, win tomorrow. In this never-ending spirit of challenge is the heart of a victor."},{author:"Dalai Lama",text:"Be kind whenever possible. It is always possible."},{author:"Dalai Lama",source:"https://dailymeditate.com/meditation-quote-99-sleep-meditation-dalai-lama/",tags:"Mindful, Sleep, Meditation, Relaxing, Rest",text:"Sleep is the best meditation."},{author:"Dalai Lama",text:"I believe that we are fundamentally the same and have the same basic potential."},{author:"Dalai Lama",text:"Love and compassion open our own inner life, reducing stress, distrust and loneliness."},{author:"Dalai Lama",text:"More often than not, anger is actually an indication of weakness rather than of strength."},{author:"Dalai Lama",text:"By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm."},{author:"Dalai Lama",text:"If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace."},{author:"Dalai Lama",text:"Genuine love should first be directed at oneself if we do not love ourselves, how can we love others?"},{author:"Dalai Lama",text:"With the realization of ones own potential and self-confidence in ones ability, one can build a better world."},{author:"Dalai Lama",text:"The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work."},{author:"Dalai Lama",text:"I find hope in the darkest of days, and focus in the brightest. I do not judge the universe."},{author:"Dalai Lama",text:"People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost."},{author:"Dalai Lama",text:"With realization of ones own potential and self-confidence in ones ability, one can build a better world."},{author:"Dalai Lama",text:"Happiness is not something ready made. It comes from your own actions."},{author:"Dalai Lama",text:"Remember that sometimes not getting what you want is a wonderful stroke of luck."},{author:"Dalai Lama",text:"Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health."},{author:"Dalai Lama",text:"The greatest antidote to insecurity and the sense of fear is compassion it brings one back to the basis of one's inner strength"},{author:"Dalai Lama",text:"There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness."},{author:"Dalai Lama",text:"Happiness mainly comes from our own attitude, rather than from external factors."},{author:"Dalai Lama",text:"It is difficult to achieve a spirit of genuine cooperation as long as people remain indifferent to the feelings and happiness of others."},{author:"Dalai Lama",text:"The most important thing is transforming our minds, for a new way of thinking, a new outlook: we should strive to develop a new inner world."},{author:"Dalai Lama",text:"Compassion and happiness are not a sign of weakness but a sign of strength."},{author:"Dalai Lama",text:"See the positive side, the potential, and make an effort."},{author:"Dalai Lama",text:"Happiness does not come about only due to external circumstances; it mainly derives from inner attitudes."},{author:"Dalai Lama",text:"Genuine love should first be directed at oneself - if we do not love ourselves, how can we love others?"},{author:"Dalai Lama",text:"The greatest antidote to insecurity and the sense of fear is compassion - it brings one back to the basis of one's inner strength"},{author:"Dale Carnegie",text:"Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all."},{author:"Dale Carnegie",text:"When fate hands us a lemon, lets try to make lemonade."},{author:"Dale Carnegie",text:"Success is getting what you want. Happiness is wanting what you get."},{author:"Dale Earnhardt",text:"The winner ain't the one with the fastest car it's the one who refuses to lose."},{author:"Danielle Ingrum",text:"Give it all you've got because you never know if there's going to be a next time."},{author:"Danilo Dolci",text:"It's important to know that words don't move mountains. Work, exacting work moves mountains."},{author:"Dave Weinbaum",text:"The secret to a rich life is to have more beginnings than endings."},{author:"David Bader",text:"Be here now. Be someplace else later. Is that so complicated?"},{author:"David Bowie",source:"https://www.goodreads.com/quotes/462535",tags:"future, life, listen",text:"Tomorrow belongs to those who can hear it coming"},{author:"David Brinkley",text:"A successful person is one who can lay a firm foundation with the bricks that others throw at him or her."},{author:"David Eddings",text:"No day in which you learn something is a complete loss."},{author:"David Jordan",text:"Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it."},{author:"David McCullough",text:"Real success is finding your lifework in the work that you love."},{author:"David Rockefeller",text:"Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were."},{author:"David Seamans",text:"We cannot change our memories, but we can change their meaning and the power they have over us."},{author:"Deepak Chopra",source:"https://www.goodreads.com/quotes/381641",tags:"future, choice, decision, change",text:"When you make a choice, you change the future."},{author:"Demosthenes",text:"Small opportunities are often the beginning of great enterprises."},{author:"Denis Waitley",text:"There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them."},{author:"Denis Waitley",text:"There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them."},{author:"Denis Waitley",text:"You must welcome change as the rule but not as your ruler."},{author:"Denis Waitley",text:"Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude."},{author:"Denis Waitley",text:"A dream is your creative vision for your life in the future. You must break out of your current comfort zone and become comfortable with the unfamiliar and the unknown."},{author:"Denis Waitley",text:"The only person who never makes mistakes is the person who never does anything."},{author:"Dennis Gabor",source:"https://en.wikiquote.org/wiki/Dennis_Gabor",text:"The future cannot be predicted, but futures can be invented. It was man's ability to invent which has made human society what it is."},{author:"Dennis Kimbro",text:"We see things not as they are, but as we are. Our perception is shaped by our previous experiences."},{author:"Desiderius Erasmus",text:"The fox has many tricks. The hedgehog has but one. But that is the best of all."},{author:"Dhammapada",text:"Just as a flower, which seems beautiful has color but no perfume, so are the fruitless words of a man who speaks them but does them not."},{author:"Dhammapada",text:"Do not give your attention to what others do or fail to do; give it to what you do or fail to do."},{author:"Dieter F. Uchtdorf",source:"https://www.goodreads.com/quotes/8070701",tags:"creative, creativity, soul",text:"The desire to create is one of the deepest yearnings of the human soul."},{author:"Diogenes",source:"https://www.goodreads.com/quotes/524180-when-some-one-reminded-him-that-the-people-of-sinope",tags:"stoic, outlook, mentality",text:"When some one reminded him that the people of Sinope had sentenced him to exile, he said, And I sentenced them to stay at home."},{author:"Diogenes",source:"https://www.goodreads.com/quotes/524169-the-art-of-being-a-slave-is-to-rule-one-s",tags:"stoic, mentality",text:"The art of being a slave is to rule one's master."},{author:"Diogenes of Sinope",source:"https://www.goodreads.com/quotes/7242929-a-philosopher-named-aristippus-who-had-quite-willingly-sucked-up",tags:"stoic, willpower, mentality",text:"A philosopher named Aristippus, who had quite willingly sucked up to Dionysus and won himself a spot at his court, saw Diogenes cooking lentils for a meal. If you would only learn to compliment Dionysus, you wouldn't have to live on lentils. Diogenes replied, But if you would only learn to live on lentils, you wouldn't have to flatter Dionysus."},{author:"Donald Kircher",text:"A man of ability and the desire to accomplish something can do anything."},{author:"Donald Trump",text:"Everything in life is luck."},{author:"Donald Trump",text:"Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game."},{author:"Donald Trump",text:"As long as your going to be thinking anyway, think big."},{author:"Donald Trump",text:"You have to think anyway, so why not think big?"},{author:"Donald Trump",text:"What separates the winners from the losers is how a person reacts to each new twist of fate."},{author:"Donald Trump",text:"Sometimes by losing a battle you find a new way to win the war."},{author:"Doris Day",text:"Gratitude is riches. Complaint is poverty."},{author:"Doris Mortman",text:"Until you make peace with who you are, you will never be content with what you have."},{author:"Doris Mortman",text:"Until you make peace with who you are, you'll never be content with what you have."},{author:"Dorothy Thompson",text:"Fear grows in darkness; if you think theres a bogeyman around, turn on the light."},{author:"Dorothy Thompson",text:"Only when we are no longer afraid do we begin to live."},{author:"Doug Horton",text:"Be your own hero, it's cheaper than a movie ticket."},{author:"Doug Larson",text:"Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk."},{author:"Douglas Adams",text:"Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so."},{author:"Dr. David M. Burns",text:"Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life."},{author:"Dr. Seuss",text:"Don't cry because it's over. Smile because it happened."},{author:"E. E. Cummings",text:"It takes courage to grow up and become who you really are."},{author:"E. M. Forster",text:"One must be fond of people and trust them if one is not to make a mess of life."},{author:"Eckhart Tolle",text:"It is not uncommon for people to spend their whole life waiting to start living."},{author:"Eckhart Tolle",text:"You cannot find yourself by going into the past. You can find yourself by coming into the present."},{author:"Eckhart Tolle",text:"The past has no power to stop you from being present now. Only your grievance about the past can do that."},{author:"Eckhart Tolle",text:"Whenever something negative happens to you, there is a deep lesson concealed within it."},{author:"Eckhart Tolle",text:"You do not become good by trying to be good, but by finding the goodness that is already within you."},{author:"Eckhart Tolle",text:"The greater part of human pain is unnecessary. It is self-created as long as the unobserved mind runs your life."},{author:"Ed Cunningham",text:"Friends are those rare people who ask how we are and then wait to hear the answer."},{author:"Eddie Cantor",text:"Slow down and enjoy life. It's not only the scenery you miss by going too fast you also miss the sense of where you are going and why."},{author:"Eddie Cantor",text:"Slow down and enjoy life. It's not only the scenery you miss by going too fast - you also miss the sense of where you are going and why."},{author:"Eden Phillpotts",text:"The universe is full of magical things, patiently waiting for our wits to grow sharper."},{author:"Edgar Allan Poe",text:"Those who dream by day are cognizant of many things which escape those who dream only by night."},{author:"Edith S\xF6dergran",source:"https://www.goodreads.com/quotes/11458",tags:"creativity, fire, passion",text:"The inner fire is the most important thing mankind possesses."},{author:"Edith Wharton",text:"If only wed stop trying to be happy wed have a pretty good time."},{author:"Edmond Rostand",text:"A man is not old as long as he is seeking something."},{author:"Edmund Burke",text:"Nobody made a greater mistake than he who did nothing because he could do only a little."},{author:"Edna Millay",text:"I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes."},{author:"Edward Ericson",text:"The cosmos is neither moral or immoral; only people are. He who would move the world must first move himself."},{author:"Edward Gibbon",text:"The winds and waves are always on the side of the ablest navigators."},{author:"Edward Young",text:"On every thorn, delightful wisdom grows, In every rill a sweet instruction flows."},{author:"Edward de Bono",text:"It is better to have enough ideas for some of them to be wrong, than to be always right by having no ideas at all."},{author:"Edwin Chapin",text:"Every action of our lives touches on some chord that will vibrate in eternity."},{author:"Edwin Markham",text:"We have committed the Golden Rule to memory; let us now commit it to life."},{author:"Eknath Easwaran",text:"Through meditation and by giving full attention to one thing at a time, we can learn to direct attention where we choose."},{author:"Elbert Hubbard",text:"There is no failure except in no longer trying."},{author:"Elbert Hubbard",text:"To avoid criticism, do nothing, say nothing, be nothing."},{author:"Elbert Hubbard",text:"A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success."},{author:"Elbert Hubbard",text:"A failure is a man who has blundered but is not capable of cashing in on the experience."},{author:"Elbert Hubbard",text:"The final proof of greatness lies in being able to endure criticism without resentment."},{author:"Elbert Hubbard",text:"The greatest mistake you can make in life is to be continually fearing you will make one."},{author:"Eleanor Roosevelt",text:"No one can make you feel inferior without your consent."},{author:"Eleanor Roosevelt",text:"Do one thing every day that scares you."},{author:"Eleanor Roosevelt",text:"The future belongs to those who believe in the beauty of their dreams."},{author:"Eleanor Roosevelt",text:"I think somehow we learn who we really are and then live with that decision."},{author:"Eleanor Roosevelt",text:"Friendship with oneself is all important because without it one cannot be friends with anybody else in the world."},{author:"Eleanor Roosevelt",text:"Remember always that you not only have the right to be an individual, you have an obligation to be one."},{author:"Eleanor Roosevelt",text:"People grow through experience if they meet life honestly and courageously. This is how character is built."},{author:"Eleanor Roosevelt",text:"It is not fair to ask of others what you are unwilling to do yourself."},{author:"Eleanor Roosevelt",text:"You must do the things you think you cannot do."},{author:"Elisabeth Kubler-Ross",text:"I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime."},{author:"Elizabeth Arden",text:"I'm not interested in age. People who tell me their age are silly. You're as old as you feel."},{author:"Elizabeth Browning",text:"Light tomorrow with today!"},{author:"Elizabeth Browning",text:"Love doesn't make the world go round, love is what makes the ride worthwhile."},{author:"Elizabeth Browning",text:"Whoso loves, believes the impossible."},{author:"Elizabeth Kenny",text:"He who angers you conquers you."},{author:"Elizabeth Montagu",text:"I endeavour to be wise when I cannot be merry, easy when I cannot be glad, content with what cannot be mended and patient when there is no redress."},{author:"Ella Fitzgerald",text:"It isn't where you come from, it's where you're going that counts."},{author:"Ella Wilcox",text:"The truest greatness lies in being kind, the truest wisdom in a happy mind."},{author:"Ella Williams",text:"Bite off more than you can chew, then chew it."},{author:"Ellen Gilchrist",text:"Don't ruin the present with the ruined past."},{author:"Ellen Parr",text:"The cure for boredom is curiosity. There is no cure for curiosity."},{author:"English proverb",text:"Take heed: you do not find what you do not seek."},{author:"Epictetus",text:"Freedom is the right to live as we wish."},{author:"Epictetus",text:"Difficulties are things that show a person what they are."},{author:"Epictetus",text:"If you wish to be a writer, write."},{author:"Epictetus",text:"Practice yourself, for heavens sake in little things, and then proceed to greater."},{author:"Epictetus",text:"Make the best use of what is in your power, and take the rest as it happens."},{author:"Epictetus",text:"Nature gave us one tongue and two ears so we could hear twice as much as we speak."},{author:"Epictetus",text:"He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has."},{author:"Epictetus",text:"There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will."},{author:"Epictetus",text:"If you seek truth you will not seek victory by dishonourable means, and if you find truth you will become invincible."},{author:"Epictetus",text:"When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger."},{author:"Epictetus",text:"Know, first, who you are, and then adorn yourself accordingly."},{author:"Epictetus",text:"Men are disturbed not by things, but by the view which they take of them."},{author:"Epictetus",text:"We have two ears and one mouth so that we can listen twice as much as we speak."},{author:"Epictetus",text:"Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort."},{author:"Epictetus",text:"No man is free who is not master of himself."},{author:"Epictetus",text:"It's not what happens to you, but how you react to it that matters."},{author:"Epictetus",text:"The world turns aside to let any man pass who knows where he is going."},{author:"Epictetus",text:"First say to yourself what you would be; and then do what you have to do."},{author:"Epictetus",text:"Keep silence for the most part, and speak only when you must, and then briefly."},{author:"Epictetus",text:"It is impossible for a man to learn what he thinks he already knows."},{author:"Epictetus",text:"One that desires to excel should endeavour in those things that are in themselves most excellent."},{author:"Epictetus",source:"https://www.goodreads.com/quotes/123453-there-is-only-one-way-to-happiness-and-that-is?page=2",tags:"stoic, willpower",text:"There is only one way to happiness and that is to cease worrying about things which are beyond the power or our will. "},{author:"Eric Hoffer",source:"https://www.goodreads.com/quotes/10562",tags:"change, learners, learned, learn, world",text:"In times of change learners inherit the earth, while the learned find themselves beautifully equipped to deal with a world that no longer exists."},{author:"Eriksson",text:"The greatest barrier to success is the fear of failure."},{author:"Ernest Hemingway",source:"https://www.goodreads.com/quotes/353013",tags:"listen, learn, learning",text:"I like to listen. I have learned a great deal from listening carefully. Most people never listen."},{author:"Ernest Hemingway",source:"https://www.goodreads.com/quotes/392801",tags:"action, motion, mistake",text:"Never mistake motion for action."},{author:"Etty Hillesum",text:"Sometimes the most important thing in a whole day is the rest we take between two deep breaths."},{author:"Euripides",text:"The wisest men follow their own direction."},{author:"Everett Dirksen",text:"I am a man of fixed and unbending principles, the first of which is to be flexible at all times."},{author:"Fannie Hamer",text:"There is one thing you have got to learn about our movement. Three people are better than no people."},{author:"Felix Adler",text:"The truth which has made us free will in the end make us glad also."},{author:"Flora Whittemore",text:"The doors we open and close each day decide the lives we live."},{author:"Florence Nightingale",source:"https://www.goodreads.com/quotes/161358",tags:"excuse, excuses, success",text:"I attribute my success to this: I never gave or took an excuse."},{author:"Forrest Church",text:"Do what you can. Want what you have. Be who you are."},{author:"Forrest Gump",source:"https://www.rottentomatoes.com/m/forrest_gump/quotes",tags:"fictional, movie, life",text:"My mama always said: life is like a box of chocolate, you never know what you gonna get."},{author:"Fran Watson",text:"As we risk ourselves, we grow. Each new experience is a risk."},{author:"Frances de Sales",text:"Nothing is so strong as gentleness. Nothing is so gentle as real strength."},{author:"Francis Bacon",text:"A prudent question is one half of wisdom."},{author:"Francis Bacon",text:"A wise man will make more opportunities than he finds."},{author:"Francois de La Rochefoucauld",text:"A true friend is the most precious of all possessions and the one we take the least thought about acquiring."},{author:"Francoise de Motteville",text:"The true way to render ourselves happy is to love our work and find in it our pleasure."},{author:"Frank Crane",text:"You may be deceived if you trust too much, but you will live in torment if you don't trust enough."},{author:"Frank Herbert",text:"The beginning of knowledge is the discovery of something we do not understand."},{author:"Frank Tyger",text:"Your future depends on many things, but mostly on you."},{author:"Frank Tyger",text:"Learn to listen. Opportunity could be knocking at your door very softly."},{author:"Frank Tyger",text:"Be a good listener. Your ears will never get you in trouble."},{author:"Frank Wright",text:"The thing always happens that you really believe in; and the belief in a thing makes it happen."},{author:"Frank Wright",text:"Respect should be earned by actions, and not acquired by years."},{author:"Franklin D. Roosevelt",text:"It is common sense to take a method and try it. If it fails, admit it frankly and try another. But above all, try something."},{author:"Franklin Roosevelt",text:"The only limit to our realization of tomorrow will be our doubts of today."},{author:"Franklin Roosevelt",text:"Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort."},{author:"Franklin Roosevelt",text:"When you come to the end of your rope, tie a knot and hang on."},{author:"Franz Liszt",text:"Beware of missing chances; otherwise it may be altogether too late some day."},{author:"Frederick Douglass",text:"If there is no struggle, there is no progress."},{author:"Frederick Douglass",text:"I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence."},{author:"Frederick Wilcox",text:"Progress always involves risks. You can't steal second base and keep your foot on first."},{author:"Friedrich von Schiller",text:"Keep true to the dreams of thy youth."},{author:"Friedrich von Schiller",text:"If you want to study yourself look into the hearts of other people. If you want to study other people look into your own heart."},{author:"Friedrich von Schiller",text:"If you want to study yourself, look into the hearts of other people. If you want to study other people, look into your own heart."},{author:"Fyodor Dostoyevsky",source:"https://www.goodreads.com/author/quotes/3137322.Fyodor_Dostoyevsky",tags:"soul, children, healing",text:"The soul is healed by being with children."},{author:"G. K. Chesterton",text:"I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder."},{author:"G. K. Chesterton",text:"I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on man unless they act."},{author:"Gail Sheehy",text:"To be tested is good. The challenged life may be the best therapist."},{author:"Galileo Galilei",text:"All truths are easy to understand once they are discovered; the point is to discover them."},{author:"General Douglas MacArthur",text:"It is fatal to enter any war without the will to win it."},{author:"Geoffrey F. Abert",text:"Prosperity depends more on wanting what you have than having what you want."},{author:"Georg Lichtenberg",text:"Everyone is a genius at least once a year. A real genius has his original ideas closer together."},{author:"Georg Lichtenberg",text:"I cannot say whether things will get better if we change; what I can say is they must change if they are to get better."},{author:"George Allen",text:"People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to."},{author:"George Bernard Shaw",text:"A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing."},{author:"George Bernard Shaw",text:"I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can."},{author:"George Bernard Shaw",text:"We don't stop playing because we grow old; we grow old because we stop playing."},{author:"George Bernard Shaw",source:"https://www.goodreads.com/quotes/8727",tags:"meaning, creativity",text:"Life isn't about finding yourself. Life is about creating yourself."},{author:"George Bernard Shaw",text:"A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing."},{author:"George Bernard Shaw",text:"The possibilities are numerous once we decide to act and not react."},{author:"George Eliot",text:"It is never too late to be what you might have been."},{author:"George Eliot",text:"What do we live for, if it is not to make life less difficult for each other?"},{author:"George Matthew Adams",text:"Each day can be one of triumph if you keep up your interests."},{author:"George Orwell",text:"Myths which are believed in tend to become true."},{author:"George Patton",text:"If a man does his best, what else is there?"},{author:"George Patton",text:"Accept challenges, so that you may feel the exhilaration of victory."},{author:"George Sand",text:"There is only one happiness in life, to love and be loved."},{author:"George Santayan",text:"Those who cannot learn from history are doomed to repeat it."},{author:"George Shaw",text:"My reputation grows with every failure."},{author:"George Shaw",text:"The reasonable man adapts himself to the world; the unreasonable man persists in trying to adapt the world to himself. Therefore, all progress depends on the unreasonable man."},{author:"George Sheehan",text:"Success means having the courage, the determination, and the will to become the person you believe you were meant to be."},{author:"German proverb",text:"Silence is a fence around wisdom."},{author:"German proverb",text:"Begin to weave and God will give you the thread."},{author:"Gloria Steinem",text:"If the shoe doesn't fit, must we change the foot?"},{author:"Gloria Steinem",text:"Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning."},{author:"Goethe",text:"A man sees in the world what he carries in his heart."},{author:"Goethe",text:"What is not started today is never finished tomorrow."},{author:"Goethe",text:"Just trust yourself, then you will know how to live."},{author:"Goethe",source:"https://www.goodreads.com/quotes/6774650",tags:"time, effectiveness",text:"If I know how you spend your time, then I know what might become of you."},{author:"Gordon Hinckley",text:"Our kindness may be the most persuasive argument for that which we believe."},{author:"Gordon Hinckley",text:"Our lives are the only meaningful expression of what we believe and in Whom we believe. And the only real wealth, for any of us, lies in our faith."},{author:"Grandma Moses",text:"Life is what you make of it. Always has been, always will be."},{author:"Gustave Flaubert",text:"Reality does not conform to the ideal, but confirms it."},{author:"H. Bertram Lewis",text:"The happy and efficient people in this world are those who accept trouble as a normal detail of human life and resolve to capitalize it when it comes along."},{author:"H. Jackson Browne",text:"Don't be afraid to go out on a limb. That's where the fruit is."},{author:"H. W. Arnold",text:"The worst bankrupt in the world is the person who has lost his enthusiasm."},{author:"Haddon Robinson",text:"What worries you masters you."},{author:"Hannah Arendt",text:"Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible."},{author:"Hannah More",text:"It is not so important to know everything as to appreciate what we learn."},{author:"Hannah More",text:"Obstacles are those things you see when you take your eyes off the goal."},{author:"Hannah Senesh",text:"One needs something to believe in, something for which one can have whole-hearted enthusiasm. One needs to feel that ones life has meaning, that one is needed in this world."},{author:"Harold Nicolson",text:"We are all inclined to judge ourselves by our ideals; others, by their acts."},{author:"Harriet Beecher Stowe",text:"All serious daring starts from within."},{author:"Harriet Lerner",text:"Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others."},{author:"Harriet Tubman",text:"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world."},{author:"Harriet Woods",text:"You can stand tall without standing on someone. You can be a victor without having victims."},{author:"Harry Banks",text:"For success, attitude is equally as important as ability."},{author:"Harry Burchell Mathews",text:"Translation is the paradigm, the exemplar of all writing. It is translation that demonstrates most vividly the yearning for transformation that underlies every act involving speech, that supremely human gift."},{author:"Harry Kemp",text:"The poor man is not he who is without a cent, but he who is without a dream."},{author:"Hasidic saying",text:"Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength."},{author:"Hausa",text:"Give thanks for a little and you will find a lot."},{author:"Havelock Ellis",text:"It is on our failures that we base a new and different and better success."},{author:"Haynes Bayly",text:"Absence makes the heart grow fonder."},{author:"Helen Keller",text:"Keep yourself to the sunshine and you cannot see the shadow."},{author:"Helen Keller",text:"Never bend your head. Always hold it high. Look the world right in the eye."},{author:"Helen Keller",text:"The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart."},{author:"Helen Keller",text:"We could never learn to be brave and patient if there were only joy in the world."},{author:"Helen Keller",text:"Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight."},{author:"Helen Keller",text:"No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit."},{author:"Helen Keller",text:"Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved."},{author:"Helen Keller",text:"The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart."},{author:"Helen Keller",text:"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us."},{author:"Henri Amiel",text:"Almost everything comes from nothing."},{author:"Henri Bergson",text:"To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly."},{author:"Henri Bergson",text:"The eye sees only what the mind is prepared to comprehend."},{author:"Henri L. Bergson",text:"Think like a man of action; act like a man of thought."},{author:"Henri Matisse",source:"https://www.goodreads.com/quotes/21433",tags:"creativity, courage",text:"Creativity takes courage."},{author:"Henri-Frederic Amiel",text:"So long as a person is capable of self-renewal they are a living being."},{author:"Henri-Frederic Amiel",text:"Work while you have the light. You are responsible for the talent that has been entrusted to you."},{author:"Henry Beecher",text:"Gratitude is the fairest blossom which springs from the soul."},{author:"Henry David Thoreau",text:"I cannot make my days longer so I strive to make them better."},{author:"Henry David Thoreau",text:"If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours."},{author:"Henry David Thoreau",source:"https://www.brainyquote.com/quotes/henry_david_thoreau_106427",tags:"price, priorities, life",text:"The price of anything is the amount of life you exchange for it."},{author:"Henry Ford",text:"If you think you can, you can. And if you think you can't, you're right."},{author:"Henry Ford",text:"Quality means doing it right when no one is looking."},{author:"Henry Ford",text:"Obstacles are those frightful things you see when you take your eyes off your goal."},{author:"Henry J. Kaiser",text:"Trouble is only opportunity in work clothes."},{author:"Henry James",text:"Three things in human life are important. The first is to be kind. The second is to be kind. The third is to be kind."},{author:"Henry Longfellow",text:"He that respects himself is safe from others; he wears a coat of mail that none can pierce."},{author:"Henry Longfellow",text:"Perseverance is a great element of success. If you only knock long enough and loud enough at the gate, you are sure to wake up somebody."},{author:"Henry Miller",text:"The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself."},{author:"Henry Miller",text:"The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself."},{author:"Henry Moore",text:"There is no retirement for an artist, it's your way of living so there is no end to it."},{author:"Henry Reed",text:"Intuition is the very force or activity of the soul in its experience through whatever has been the experience of the soul itself."},{author:"Henry Thoreau",text:"The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard."},{author:"Henry Thoreau",text:"Things do not change, we change."},{author:"Henry Thoreau",text:"The world is but a canvas to the imagination."},{author:"Henry Thoreau",text:"Things do not change; we change."},{author:"Henry Van Dyke",text:"Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars."},{author:"Henry Ward Beecher",text:"Every artist dips his brush in his own soul, and paints his own nature into his pictures."},{author:"Heraclitus",text:"All is flux; nothing stays still."},{author:"Heraclitus",text:"You cannot step twice into the same river, for other waters are continually flowing in."},{author:"Herbert Swope",text:"I cannot give you the formula for success, but I can give you the formula for failure: which is: Try to please everybody."},{author:"Hermann Hesse",text:"If I know what love is, it is because of you."},{author:"Holmes",text:"Fame usually comes to those who are thinking about something else."},{author:"Honore de Balzac",text:"When you doubt your power, you give power to your doubt."},{author:"Honore de Balzac",text:"The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition."},{author:"Horace",text:"Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant."},{author:"Horace",text:"Begin, be bold, and venture to be wise."},{author:"Horace Friess",text:"All seasons are beautiful for the person who carries happiness within."},{author:"Hugh Miller",text:"Problems are only opportunities with thorns on them."},{author:"Immanuel Kant",text:"Science is organized knowledge. Wisdom is organized life."},{author:"Immanuel Kant",text:"All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason."},{author:"Indira Gandhi",text:"You can't shake hands with a clenched fist."},{author:"Ingrid Bergman",text:"You must train your intuition you must trust the small voice inside you which tells you exactly what to say, what to decide."},{author:"Ingrid Bergman",text:"You must train your intuition, you must trust the small voice inside you which tells you exactly what to say, what to decide."},{author:"Iris Murdoch",text:"We can only learn to love by loving."},{author:"Isaac Asimov",text:"A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value."},{author:"Isocrates",text:"The noblest worship is to make yourself as good and as just as you can."},{author:"Ivy Baker Priest",text:"The world is round and the place which may seem like the end may also be the beginning."},{author:"J. Willard Marriott",text:"Good timber does not grow with ease; the stronger the wind, the stronger the trees."},{author:"J.K. Rowling",source:"https://www.goodreads.com/quotes/396385",tags:"future, adversity, failure, life, foundation",text:"Rock bottom became the solid foundation on which I rebuilt my life."},{author:"Jack Buck",text:"Things turn out best for those who make the best of the way things turn out."},{author:"Jack Canfield",source:"https://www.goodreads.com/quotes/495741",tags:"overcome, action, try, persevere",text:"Everything you want is on the other side of fear."},{author:"Jack Dixon",text:"If you focus on results, you will never change. If you focus on change, you will get results."},{author:"Jacob Braude",text:"Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others."},{author:"James Barrie",text:"We never understand how little we need in this world until we know the loss of it."},{author:"James Faust",text:"If you take each challenge one step at a time, with faith in every footstep, your strength and understanding will increase."},{author:"James Freeman Clarke",text:"We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life."},{author:"James Lowell",text:"A weed is no more than a flower in disguise."},{author:"James Openheim",text:"The foolish man seeks happiness in the distance; the wise grows it under his feet."},{author:"James Oppenheim",text:"The foolish man seeks happiness in the distance, the wise grows it under his feet."},{author:"James Pence",text:"Success is determined by those whom prove the impossible, possible."},{author:"James Yorke",text:"The most successful people are those who are good at plan B."},{author:"Jamie Paolinetti",text:"Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless."},{author:"Jane Addams",text:"Our doubts are traitors and make us lose the good we often might win, by fearing to attempt."},{author:"Jane Addams",text:"Nothing could be worse than the fear that one had given up too soon, and left one unexpended effort that might have saved the world."},{author:"Jane Roberts",text:"By accepting yourself and being fully what you are, your presence can make others happy."},{author:"Janis Joplin",text:"Don't compromise yourself. You are all you've got."},{author:"Japanese proverb",text:"The day you decide to do it is your lucky day."},{author:"Japanese proverb",text:"Vision without action is a daydream. Action without vision is a nightmare."},{author:"Jason Fried",text:"No is easier to do. Yes is easier to say."},{author:"Jawaharlal Nehru",text:"A leader or a man of action in a crisis almost always acts subconsciously and then thinks of the reasons for his action."},{author:"Jean Lacordaire",text:"We are the leaves of one branch, the drops of one sea, the flowers of one garden."},{author:"Jean Lacordaire",text:"Neither genius, fame, nor love show the greatness of the soul. Only kindness can do that."},{author:"Jean de la Bruyere",source:"https://www.brainyquote.com/quotes/jean_de_la_bruyere_104446",tags:"time, complain",text:"Those who make the worse use of their time are the first to complain of its shortness"},{author:"Jean de la Fontaine",text:"Sadness flies away on the wings of time."},{author:"Jean-Paul Sartre",text:"Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have."},{author:"Jean-Paul Sartre",text:"Freedom is what you do with what's been done to you."},{author:"Jessamyn West",text:"It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own."},{author:"Jim Beggs",text:"Before you put on a frown, make absolutely sure there are no smiles available."},{author:"Jim Bishop",text:"The future is an opaque mirror. Anyone who tries to look into it sees nothing but the dim outlines of an old and worried face."},{author:"Jim Rohn",text:"Either you run the day or the day runs you."},{author:"Jim Rohn",text:"Give whatever you are doing and whoever you are with the gift of your attention."},{author:"Jim Rohn",text:"The more you care, the stronger you can be."},{author:"Jim Rohn",text:"If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much."},{author:"Jimmy Dean",text:"I can't change the direction of the wind, but I can adjust my sails to always reach my destination."},{author:"Joan Didion",text:"To free us from the expectations of others, to give us back to ourselves there lies the great, singular power of self-respect."},{author:"Joan Didion",text:"To free us from the expectations of others, to give us back to ourselves - there lies the great, singular power of self-respect."},{author:"Joe Namath",text:"If you aren't going all the way, why go at all?"},{author:"Joe Paterno",text:"Believe deep down in your heart that you're destined to do great things."},{author:"Johann Wolfgang von Goethe",text:"Difficulties increase the nearer we get to the goal."},{author:"Johann Wolfgang von Goethe",text:"Great talent finds happiness in execution."},{author:"Johann Wolfgang von Goethe",text:"Character develops itself in the stream of life."},{author:"Johann Wolfgang von Goethe",text:"A really great talent finds its happiness in execution."},{author:"Johann Wolfgang von Goethe",text:"Mountains cannot be surmounted except by winding paths."},{author:"Johann Wolfgang von Goethe",text:"Knowing is not enough; we must apply!"},{author:"Johann Wolfgang von Goethe",text:"In the end we retain from our studies only that which we practically apply."},{author:"Johann Wolfgang von Goethe",text:"The person born with a talent they are meant to use will find their greatest happiness in using it."},{author:"Johann Wolfgang von Goethe",text:"People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not."},{author:"Johann Wolfgang von Goethe",text:"If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own."},{author:"Johann Wolfgang von Goethe",text:"Treat people as if they were what they ought to be and you help them to become what they are capable of being."},{author:"Johann Wolfgang von Goethe",text:"Correction does much, but encouragement does more."},{author:"Johann Wolfgang von Goethe",text:"Kindness is the golden chain by which society is bound together."},{author:"Johann Wolfgang von Goethe",text:"Wherever a man may happen to turn, whatever a man may undertake, he will always end up by returning to the path which nature has marked out for him."},{author:"Johann Wolfgang von Goethe",text:"The really unhappy person is the one who leaves undone what they can do, and starts doing what they don't understand; no wonder they come to grief."},{author:"Johann Wolfgang von Goethe",text:"Sometimes our fate resembles a fruit tree in winter. Who would think that those branches would turn green again and blossom, but we hope it, we know it."},{author:"Johannes Gaertner",text:"To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven."},{author:"John Acosta",text:"You cannot have what you do not want."},{author:"John Adams",text:"Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish."},{author:"John Astin",text:"There are things so deep and complex that only intuition can reach it in our stage of development as human beings."},{author:"John Barrymore",text:"Happiness often sneaks in through a door you didn't know you left open."},{author:"John Berry",text:"The bird of paradise alights only upon the hand that does not grasp."},{author:"John Cleese",source:"https://www.goodreads.com/quotes/548576",tags:"urgent, important, trivial, thinking, ",text:"It's easier to do trivial things that are urgent than it is to do important things that are not, like thinking. And it's also easier to do little things we know we can do than to start on big things that we\u2019re not so sure about."},{author:"John De Paola",text:"Slow down and everything you are chasing will come around and catch you."},{author:"John Dewey",text:"Without some goals and some efforts to reach it, no man can live."},{author:"John Dewey",text:"Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving."},{author:"John Dewey",text:"Arriving at one point is the starting point to another."},{author:"John Dewey",text:"Every great advance in science has issued from a new audacity of the imagination."},{author:"John Dewey",text:"The self is not something ready-made, but something in continuous formation through choice of action."},{author:"John Dryden",text:"Fortune befriends the bold."},{author:"John Dryden",text:"A thing well said will be wit in all languages."},{author:"John Eliot",text:"All the great performers I have worked with are fuelled by a personal dream."},{author:"John F. Kennedy",text:"As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them."},{author:"John Holmes",text:"Never tell a young person that anything cannot be done. God may have been waiting centuries for someone ignorant enough of the impossible to do that very thing."},{author:"John Junor",text:"An ounce of emotion is equal to a ton of facts."},{author:"John Kennedy",text:"Change is the law of life. And those who look only to the past or present are certain to miss the future."},{author:"John Kennedy",text:"Let us resolve to be masters, not the victims, of our history, controlling our own destiny without giving way to blind suspicions and emotions."},{author:"John Lennon",text:"Love is the flower you've got to let grow."},{author:"John Lennon",text:"Reality leaves a lot to the imagination."},{author:"John Lennon",text:"Time you enjoy wasting, was not wasted."},{author:"John Lennon",text:"Yeah we all shine on, like the moon, and the stars, and the sun."},{author:"John Lennon",text:"You may say I'm a dreamer, but I'm not the only one, I hope someday you will join us, and the world will live as one."},{author:"John Lennon",text:"Life is what happens while you are making other plans."},{author:"John Lennon",text:"Time you enjoyed wasting was not wasted."},{author:"John Lennon",text:"Life is what happens to you while you're busy making other plans."},{author:"John Lennon",text:"You may say Im a dreamer, but Im not the only one, I hope someday you will join us, and the world will live as one."},{author:"John Locke",text:"I have always thought the actions of men the best interpreters of their thoughts."},{author:"John Lubbock",text:"A day of worry is more exhausting than a day of work."},{author:"John Lubbock",text:"What we see depends mainly on what we look for."},{author:"John Marshall",text:"To listen well is as powerful a means of communication and influence as to talk well."},{author:"John Muir",text:"When one tugs at a single thing in nature, he finds it attached to the rest of the world."},{author:"John Petit-Senn",text:"Not what we have but what we enjoy constitutes our abundance."},{author:"John Pierrakos",text:"Life is movement-we breathe, we eat, we walk, we move!"},{author:"John Powell",text:"The only real mistake is the one from which we learn nothing."},{author:"John Quincy Adams",text:"If your actions inspire others to dream more, learn more, do more and become more, you are a leader."},{author:"John Ruskin",text:"Quality is never an accident; it is always the result of intelligent effort."},{author:"John Ruskin",text:"Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather."},{author:"John Simone",text:"If you're in a bad situation, don't worry it'll change. If you're in a good situation, don't worry it'll change."},{author:"John Steinbeck",source:"https://www.goodreads.com/quotes/990924",tags:"Sleep-on-it, Subconcious-mind",text:"It is a common experience that a problem difficult at night is resolved in the morning after the committee of sleep has worked on it."},{author:"John Steinbeck",text:"If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away."},{author:"John Updike",text:"Dreams come true. Without that possibility, nature would not incite us to have them."},{author:"John Wooden",text:"Never mistake activity for achievement."},{author:"John Wooden",text:"You can't let praise or criticism get to you. It's a weakness to get caught up in either one."},{author:"Jon Kabat-Zinn",text:"You can't stop the waves, but you can learn to surf."},{author:"Jonas Salk",text:"Intuition will tell the thinking mind where to look next."},{author:"Jonathan Kozol",text:"Pick battles big enough to matter, small enough to win."},{author:"Jonathan Swift",text:"Discovery consists of seeing what everybody has seen and thinking what nobody else has thought."},{author:"Joseph Campbell",text:"When we quit thinking primarily about ourselves and our own self-preservation, we undergo a truly heroic transformation of consciousness."},{author:"Joseph Campbell",text:"Your sacred space is where you can find yourself again and again."},{author:"Joseph Chilton Pearce",source:"https://www.goodreads.com/quotes/30290",tags:"creativity, life, fear",text:"To live a creative life, we must lose our fear of being wrong."},{author:"Joseph Joubert",text:"He who has imagination without learning has wings but no feet."},{author:"Joseph Roux",text:"A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool."},{author:"Joseph Stalin",text:"I believe in one thing only, the power of human will."},{author:"Joyce Brothers",text:"Trust your hunches. They're usually based on facts filed away just below the conscious level."},{author:"Jules Poincare",text:"It is through science that we prove, but through intuition that we discover."},{author:"Julie Morgenstern",text:"Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you."},{author:"Julius Charles Hare",text:"Be what you are. This is the first step toward becoming better than you are."},{author:"Kahlil Gibran",text:"A little knowledge that acts is worth infinitely more than much knowledge that is idle."},{author:"Kahlil Gibran",text:"To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to do."},{author:"Kahlil Gibran",text:"Beauty is not in the face; beauty is a light in the heart."},{author:"Kahlil Gibran",text:"We choose our joys and sorrows long before we experience them."},{author:"Kahlil Gibran",text:"Be like the flower, turn your face to the sun."},{author:"Karen Clark",text:"Life is change. Growth is optional. Choose wisely."},{author:"Katherine Mansfield",text:"Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can't build on it; it's only for wallowing in."},{author:"Kathleen Norris",text:"All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable."},{author:"Ken Robinson",source:"https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity",tags:"creative, creativity, original, originality, wrong, mistakes",text:"If you're not prepared to be wrong, you'll never come up with anything original."},{author:"Ken S. Keyes",text:"To be upset over what you don't have is to waste what you do have."},{author:"Kenji Miyazawa",text:"We must embrace pain and burn it as fuel for our journey."},{author:"Kenneth Patton",text:"We learn what we have said from those who listen to our speaking."},{author:"Keshavan Nair",text:"With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity."},{author:"Kin Hubbard",text:"You won't skid if you stay in a rut."},{author:"Korean proverb",text:"If you kick a stone in anger, you'll hurt your own foot."},{author:"Lama Yeshe",text:"Be gentle first with yourself if you wish to be gentle with others."},{author:"Lama Yeshe",text:"It is never too late. Even if you are going to die tomorrow, keep yourself straight and clear and be a happy human being today."},{author:"Lao Tzu",text:"Be the chief but never the lord."},{author:"Lao Tzu",text:"To lead people walk behind them."},{author:"Lao Tzu",text:"Doing nothing is better than being busy doing nothing."},{author:"Lao Tzu",text:"Anticipate the difficult by managing the easy."},{author:"Lao Tzu",text:"He who talks more is sooner exhausted."},{author:"Lao Tzu",text:"He who is contented is rich."},{author:"Lao Tzu",text:"The journey of a thousand miles begins with one step."},{author:"Lao Tzu",text:"An ant on the move does more than a dozing ox"},{author:"Lao Tzu",text:"If you correct your mind, the rest of your life will fall into place."},{author:"Lao Tzu",text:"If you would take, you must first give, this is the beginning of intelligence."},{author:"Lao Tzu",text:"The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own."},{author:"Lao Tzu",text:"Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven."},{author:"Lao Tzu",text:"At the center of your being you have the answer; you know who you are and you know what you want."},{author:"Lao Tzu",text:"When you are content to be simply yourself and don't compare or compete, everybody will respect you."},{author:"Lao Tzu",text:"All difficult things have their origin in that which is easy, and great things in that which is small."},{author:"Lao Tzu",text:"I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures."},{author:"Lao Tzu",text:"When you realize there is nothing lacking, the whole world belongs to you."},{author:"Lao Tzu",text:"By letting it go it all gets done. The world is won by those who let it go. But when you try and try. The world is beyond the winning."},{author:"Lao Tzu",text:"He who conquers others is strong; He who conquers himself is mighty."},{author:"Lao Tzu",source:"https://americanart.si.edu/artwork/he-who-obtains-has-little-he-who-scatters-has-much-lao-tzu-6th-century-bc-chinese-moralist",text:"He who obtains has little. He who scatters has much."},{author:"Lao Tzu",text:"Silence is a source of great strength."},{author:"Lao Tzu",text:"If you do not change direction, you may end up where you are heading."},{author:"Lao Tzu",text:"From wonder into wonder existence opens."},{author:"Lao Tzu",text:"He who knows himself is enlightened."},{author:"Lao Tzu",text:"Great acts are made up of small deeds."},{author:"Lao Tzu",text:"Nothing is softer or more flexible than water, yet nothing can resist it."},{author:"Lao Tzu",text:"When I let go of what I am, I become what I might be."},{author:"Lao Tzu",text:"He who controls others may be powerful, but he who has mastered himself is mightier still."},{author:"Lao Tzu",text:"To see things in the seed, that is genius."},{author:"Lao Tzu",text:"The key to growth is the introduction of higher dimensions of consciousness into our awareness."},{author:"Lao Tzu",text:"He who knows, does not speak. He who speaks, does not know."},{author:"Lao Tzu",text:"Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love."},{author:"Lao Tzu",text:"A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves."},{author:"Lao Tzu",text:"He who knows others is wise. He who knows himself is enlightened."},{author:"Lao Tzu",text:"One who is too insistent on his own views, finds few to agree with him."},{author:"Lao Tzu",text:"Give a man a fish and you feed him for a day. Teach him how to fish and you feed him for a lifetime."},{author:"Lao Tzu",text:"He who knows that enough is enough will always have enough."},{author:"Lao Tzu",text:"Music in the soul can be heard by the universe."},{author:"Lao Tzu",text:"The power of intuitive understanding will protect you from harm until the end of your days."},{author:"Larry Elder",text:"A goal without a plan is just a wish."},{author:"Laura Teresa Marquez",text:"Arrogance and rudeness are training wheels on the bicycle of life for weak people who cannot keep their balance without them."},{author:"Lauren Bacall",text:"Imagination is the highest kite one can fly."},{author:"Lauren Raffo",text:"Sometimes the biggest act of courage is a small one."},{author:"Laurence J. Peter",text:"There are two kinds of failures: those who thought and never did, and those who did and never thought."},{author:"Lawrence Peter",text:"If you don't know where you are going, you will probably end up somewhere else."},{author:"Lazurus Long",text:"Great is the art of beginning, but greater is the art of ending."},{author:"Lee Mildon",text:"People seldom notice old clothes if you wear a big smile."},{author:"Lee Womack",text:"I think you can have moderate success by copying something else, but if you really want to knock it out of the park, you have to do something different and take chances."},{author:"Lena Horne",text:"Always be smarter than the people who hire you."},{author:"Leo Aikman",text:"Blessed is the person who is too busy to worry in the daytime, and too sleepy to worry at night."},{author:"Leo Buscaglia",text:"Never idealize others. They will never live up to your expectations."},{author:"Leo F. Buscaglia",text:"Don't smother each other. No one can grow in the shade."},{author:"Leo Tolstoy",text:"The two most powerful warriors are patience and time."},{author:"Leo Tolstoy",text:"Everyone thinks of changing the world, but no one thinks of changing himself."},{author:"Leo Tolstoy",text:"We lost because we told ourselves we lost."},{author:"Leon Blum",text:"The free man is he who does not fear to go to the end of his thought."},{author:"Leonardo Ruiz",text:"The only difference between your abilities and others is the ability to put yourself in their shoes and actually try."},{author:"Leonardo da Vinci",text:"Who sows virtue reaps honour."},{author:"Leonardo da Vinci",text:"All our knowledge has its origins in our perceptions."},{author:"Leonardo da Vinci",text:"Nothing strengthens authority so much as silence."},{author:"Leonardo da Vinci",text:"Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind."},{author:"Leonardo da Vinci",text:"He who is fixed to a star does not change his mind."},{author:"Leonardo da Vinci",text:"Time stays long enough for anyone who will use it."},{author:"Leonardo da Vinci",text:"In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time."},{author:"Leonardo da Vinci",text:"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do."},{author:"Les Brown",text:"Shoot for the moon. Even if you miss, you'll land among the stars."},{author:"Lewis B. Smedes",text:"To forgive is to set a prisoner free and realize that prisoner was you."},{author:"Lewis Cass",text:"People may doubt what you say, but they will believe what you do."},{author:"Liberace",text:"Nobody will believe in you unless you believe in yourself."},{author:"Lily Tomlin",text:"I always wanted to be somebody, but I should have been more specific."},{author:"Lin-yutang",text:"I have done my best: that is about all the philosophy of living one needs."},{author:"Linda Hogan",text:"There is a way that nature speaks, that land speaks. Most of the time we are simply not patient enough, quiet enough, to pay attention to the story."},{author:"Lisa Alther",text:"Thats the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along."},{author:"Lloyd Jones",text:"Those who try to do something and fail are infinitely better than those who try nothing and succeed."},{author:"Lord Herbert",text:"The shortest answer is doing."},{author:"Lou Holtz",text:"You were not born a winner, and you were not born a loser. You are what you make yourself be."},{author:"Lou Holtz",text:"Ability is what you're capable of doing. Motivation determines what you do.Attitude determines how well you do it."},{author:"Lou Holtz",text:"I can't believe that God put us on this earth to be ordinary."},{author:"Louis Pasteur",source:"https://www.goodreads.com/quotes/9178",tags:"creativity, prepared, preparedness",text:"Chance favors the prepared mind."},{author:"Louis Pasteur",text:"Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity."},{author:"Louisa Alcott",text:"I'm not afraid of storms, for I'm learning how to sail my ship."},{author:"Louisa Alcott",text:"I'm not afraid of storms, for Im learning how to sail my ship."},{author:"Louise Hay",text:"The thoughts we choose to think are the tools we use to paint the canvas of our lives."},{author:"Lucille Ball",text:"Id rather regret the things that I have done than the things that I have not done."},{author:"Lucille Ball",text:"I have an everyday religion that works for me. Love yourself first, and everything else falls into line."},{author:"Lucius Annaeus Seneca",source:"https://www.goodreads.com/quotes/341035-we-suffer-more-often-in-imagination-than-in-reality",tags:"stoic, pain",text:"We suffer more often in imagination than in reality"},{author:"Lucius Annaeus Seneca",source:"https://www.goodreads.com/quotes/81134-difficulties-strengthen-the-mind-as-labor-does-the-body",tags:"stoic, strength",text:"Difficulties strengthen the mind, as labor does the body."},{author:"Luisa Sigea",text:"Blaze with the fire that is never extinguished."},{author:"Lululemon",text:"Your outlook on life is a direct reflection on how much you like yourself."},{author:"M. Scott Peck",text:"Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it."},{author:"Mabel Newcomber",text:"It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement."},{author:"Madame de Stael",text:"Society develops wit, but its contemplation alone forms genius."},{author:"Madame de Stael",text:"Wit lies in recognizing the resemblance among things which differ and the difference between things which are alike."},{author:"Mahatma Gandhi",text:"We must become the change we want to see."},{author:"Mahatma Gandhi",source:"https://www.goodreads.com/quotes/16418",tags:"action, change, world, present, future, today",text:"The future depends on what you do today."},{author:"Mahatma Gandhi",text:"Live as if you were to die tomorrow. Learn as if you were to live forever."},{author:"Mahatma Gandhi",text:"Strength does not come from physical capacity. It comes from an indomitable will."},{author:"Mahatma Gandhi",text:"It is the quality of our work which will please God, not the quantity."},{author:"Mahatma Gandhi",text:"Our greatness lies not so much in being able to remake the world as being able to remake ourselves."},{author:"Mahummad Ali",text:"To be able to give away riches is mandatory if you wish to possess them. This is the only way that you will be truly rich."},{author:"Mal Pancoast",text:"The odds of hitting your target go up dramatically when you aim at it."},{author:"Malcolm X",source:"https://www.goodreads.com/quotes/788",tags:"education, future, tomorrow, today",text:"Education is our passport to the future, for tomorrow belongs to the people who prepare for it today."},{author:"Man Ray",text:"It has never been my object to record my dreams, just to realize them."},{author:"Manuel Puig",text:"I allow my intuition to lead my path."},{author:"Maori proverb",text:"Turn your face toward the sun and the shadows will fall behind you."},{author:"Marcel Proust",text:"Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom."},{author:"Marcus Aurelius",text:"Each day provides its own gifts."},{author:"Marcus Aurelius",text:"Loss is nothing else but change,and change is Natures delight."},{author:"Marcus Aurelius",text:"Everything that happens happens as it should, and if you observe carefully, you will find this to be so."},{author:"Marcus Aurelius",text:"Very little is needed to make a happy life; it is all within yourself, in your way of thinking."},{author:"Marcus Aurelius",text:"If it is not right do not do it; if it is not true do not say it."},{author:"Marcus Aurelius",text:"You have power over your mind not outside events. Realize this, and you will find strength."},{author:"Marcus Aurelius",text:"He who lives in harmony with himself lives in harmony with the universe."},{author:"Marcus Aurelius",text:"The universe is transformation; our life is what our thoughts make it."},{author:"Marcus Aurelius",text:"Look back over the past, with its changing empires that rose and fell, and you can foresee the future, too."},{author:"Marcus Aurelius",text:"When you arise in the morning, think of what a precious privilege it is to be alive to breathe, to think, to enjoy, to love."},{author:"Marcus Aurelius",text:"Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart."},{author:"Marcus Aurelius",text:"Everything that exists is in a manner the seed of that which will be."},{author:"Marcus Aurelius",text:"He who lives in harmony with himself lives in harmony with the world."},{author:"Marcus Aurelius",text:"Waste no more time arguing about what a good man should be. Be one."},{author:"Marcus Aurelius",text:"There is nothing happens to any person but what was in his power to go through with."},{author:"Marcus Aurelius",text:"Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth."},{author:"Marcus Aurelius",text:"You have power over your mind, not outside events. Realize this, and you will find strength."},{author:"Marcus Aurelius",text:"When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love."},{author:"Marcus Aurelius",source:"https://www.goodreads.com/quotes/8765043-today-i-escaped-anxiety-or-no-i-discarded-it-because",tags:"anxiety, stoic, perception",text:"Today I escaped anxiety. Or no, I discarded it, because it was within me, in my own perceptions \u2014 not outside."},{author:"Marcus Aurelius",source:"https://medium.com/stories-by-aurora-e/20-stoic-quotes-that-will-motivate-and-inspire-you-bfb4fc7fc660",tags:"tags: inspiration, stoic",text:"You have power over your mind \u2014 not outside events. Realize this, and you will find strength."},{author:"Margaret Bonnano",text:"It is only possible to live happily ever after on a day to day basis."},{author:"Margaret Cousins",text:"Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary."},{author:"Margaret Fuller",text:"If you have knowledge, let others light their candles in it."},{author:"Margaret Laurence",text:"Know that although in the eternal scheme of things you are small, you are also unique and irreplaceable, as are all your fellow humans everywhere in the world."},{author:"Margaret Mead",text:"Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has."},{author:"Margaret Runbeck",text:"Silences make the real conversations between friends. Not the saying but the never needing to say is what counts."},{author:"Margaret Sangster",text:"Self-complacency is fatal to progress."},{author:"Margaret Smith",text:"The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character."},{author:"Margaret Wheatley",text:"We know from science that nothing in the universe exists as an isolated or independent entity."},{author:"Marian Edelman",text:"You're not obligated to win. You're obligated to keep trying to do the best you can every day."},{author:"Marian Edelman",text:"You really can change the world if you care enough."},{author:"Marianne Williamson",text:"Joy is what happens to us when we allow ourselves to recognize how good things really are."},{author:"Marie Curie",text:"I never see what has been done; I only see what remains to be done."},{author:"Marie Curie",text:"Nothing in life is to be feared. It is only to be understood."},{author:"Marie Curie",text:"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."},{author:"Marie Curie",text:"Be less curious about people and more curious about ideas."},{author:"Mark Twain",text:"A thing long expected takes the form of the unexpected when at last it comes."},{author:"Mark Twain",text:"Happiness is a Swedish sunset it is there for all, but most of us look the other way and lose it."},{author:"Mark Twain",text:"Always tell the truth. That way, you don't have to remember what you said."},{author:"Mark Twain",text:"When in doubt, tell the truth."},{author:"Mark Twain",text:"Whoever is happy will make others happy, too."},{author:"Mark Twain",text:"The exercise of an extraordinary gift is the supremest pleasure in life."},{author:"Mark Twain",text:"Kindness is the language which the deaf can hear and the blind can see."},{author:"Mark Twain",text:"There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded."},{author:"Mark Twain",text:"Wrinkles should merely indicate where smiles have been."},{author:"Mark Twain",text:"To get the full value of joy you must have someone to divide it with."},{author:"Mark Twain",text:"Happiness is a sunset - it is there for all, but most of us look the other way and lose it."},{author:"Marquis Vauvenargues",text:"Wicked people are always surprised to find ability in those that are good."},{author:"Marsha Petrie Sue",text:"Stay away from what might have been and look at what will be."},{author:"Martha Washington",text:"The greatest part of our happiness depends on our dispositions, not our circumstances."},{author:"Martin Fischer",text:"Knowledge is a process of piling up facts; wisdom lies in their simplification."},{author:"Martin Luther",source:"https://www.azquotes.com/author/9142-Martin_Luther/tag/scripture",tags:"Reformer, Martin Luther, God, Christianity, Faith, Scripture",text:"Remove Christ from the Scriptures and there is nothing left."},{author:"Martin Luther King, Jr.",text:"Love is the only force capable of transforming an enemy into friend."},{author:"Mary Almanac",text:"Who we are never changes. Who we think we are does."},{author:"Mary Bethune",text:"Without faith, nothing is possible. With it, nothing is impossible."},{author:"Mary Kay Ash",text:"Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway."},{author:"Mary Kay Ash",text:"Those who are blessed with the most talent don't necessarily outperform everyone else. It's the people with follow-through who excel."},{author:"Mary Kay Ash",text:"For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour."},{author:"Mary Morrissey",text:"You block your dream when you allow your fear to grow bigger than your faith."},{author:"Mary Parrish",text:"Love vanquishes time. To lovers, a moment can be eternity, eternity can be the tick of a clock."},{author:"Mary Pickford",text:"If you have made mistakes, there is always another chance for you. You may have a fresh start any moment you choose."},{author:"Mary Wollstonecraft",text:"The beginning is always today."},{author:"Matt Zotti",text:"Live through feeling and you will live through love. For feeling is the language of the soul, and feeling is truth."},{author:"Maureen Dowd",text:"The minute you settle for less than you deserve, you get even less than you settled for."},{author:"Max Planck",text:"It is not the possession of truth, but the success which attends the seeking after it, that enriches the seeker and brings happiness to him."},{author:"May Sarton",text:"A garden is always a series of losses set against a few triumphs, like life itself."},{author:"Maya Angelou",text:"I believe that every person is born with talent."},{author:"Maya Angelou",text:"If you don't like something, change it. If you can't change it, change your attitude."},{author:"Maya Angelou",text:"If one is lucky, a solitary fantasy can totally transform one million realities."},{author:"Maya Angelou",text:"When you learn, teach. When you get, give."},{author:"Maya Angelou",text:"All great achievements require time."},{author:"Maya Angelou",text:"We may encounter many defeats but we must not be defeated."},{author:"Maya Angelou",text:"Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible."},{author:"Maya Angelou",text:"Nothing will work unless you do."},{author:"Maya Angelou",source:"https://www.goodreads.com/quotes/153929",tags:"curiosity, limitless",text:"You can't use up creativity. The more you use, the more you have."},{author:"Maya Lin",text:"To fly, we have to have resistance."},{author:"Melody Beattie",text:"Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow."},{author:"Michael Burke",text:"Good instincts usually tell you what to do long before your head has figured it out."},{author:"Michael Jordan",text:"If you accept the expectations of others, especially negative ones, then you never will change the outcome."},{author:"Michael Korda",text:"To succeed, we must first believe that we can."},{author:"Michael Vance",text:"Life is not measured by the breaths you take, but by its breathtaking moments."},{author:"Michel de Montaigne",text:"I care not so much what I am to others as what I am to myself. I will be rich by myself, and not by borrowing."},{author:"Michelangelo",text:"Faith in oneself is the best and safest course."},{author:"Michelangelo",text:"The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it."},{author:"Michelangelo",source:"https://www.brainyquote.com/quotes/michelangelo_183580",tags:"time, waste",text:"There is no greater harm than that of time wasted."},{author:"Mike Ditka",text:"You're never a loser until you quit trying."},{author:"Mohandas Gandhi",text:"Happiness is when what you think, what you say, and what you do are in harmony."},{author:"Mohandas Gandhi",text:"The weak can never forgive. Forgiveness is the attribute of the strong."},{author:"Mohandas Gandhi",text:"Freedom is not worth having if it does not connote freedom to err."},{author:"Mohandas Gandhi",text:"Forgiveness is choosing to love. It is the first skill of self-giving love."},{author:"Mohandas Gandhi",text:"The difference between what we do and what we are capable of doing would suffice to solve most of the worlds problems."},{author:"Mohandas Gandhi",text:"Be the change that you want to see in the world."},{author:"Moliere",text:"It is not only for what we do that we are held responsible, but also for what we do not do."},{author:"Moncure Conway",text:"The best thing in every noble dream is the dreamer..."},{author:"Morris West",text:"If you spend your whole life waiting for the storm, you'll never enjoy the sunshine."},{author:"Mortimer Adler",text:"The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live."},{author:"Mother Teresa",text:"Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing."},{author:"Mother Teresa",text:"Be faithful in small things because it is in them that your strength lies."},{author:"Mother Teresa",text:"Let us always meet each other with smile, for the smile is the beginning of love."},{author:"Mother Teresa",text:"We shall never know all the good that a simple smile can do."},{author:"Mother Teresa",text:"If you can't feed a hundred people, then feed just one."},{author:"Mother Teresa",text:"Peace begins with a smile."},{author:"Mother Teresa",text:"Kind words can be short and easy to speak but their echoes are truly endless."},{author:"Mother Teresa",text:"We can do no great things, only small things with great love."},{author:"Mother Teresa",text:"Do not wait for leaders; do it alone, person to person."},{author:"Mother Teresa",text:"Kind words can be short and easy to speak, but their echoes are truly endless."},{author:"Muriel Rukeyser",text:"The universe is made of stories, not atoms."},{author:"Murray Gell-Mann",text:"Think how hard physics would be if particles could think."},{author:"Naguib Mahfouz",text:"You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions."},{author:"Naomi Williams",text:"It is impossible to feel grateful and depressed in the same moment."},{author:"Napoleon Bonaparte",text:"Victory belongs to the most persevering."},{author:"Napoleon Bonaparte",text:"The truest wisdom is a resolute determination."},{author:"Napoleon Bonaparte",text:"Imagination rules the world."},{author:"Napoleon Bonaparte",text:"Take time to deliberate, but when the time for action has arrived, stop thinking and go in."},{author:"Napoleon Bonaparte",text:"To do all that one is able to do, is to be a man; to do all that one would like to do, is to be a god."},{author:"Napoleon Bonaparte",text:"He who fears being conquered is sure of defeat."},{author:"Napoleon Bonaparte",text:"If you want a thing done well, do it yourself."},{author:"Napoleon Bonaparte",text:"The best cure for the body is a quiet mind."},{author:"Napoleon Hill",text:"Ideas are the beginning points of all fortunes."},{author:"Napoleon Hill",text:"Don't wait. The time will never be just right."},{author:"Napoleon Hill",text:"You give before you get."},{author:"Napoleon Hill",text:"A goal is a dream with a deadline."},{author:"Napoleon Hill",text:"You can do it if you believe you can!"},{author:"Napoleon Hill",text:"No alibi will save you from accepting the responsibility."},{author:"Napoleon Hill",text:"Happiness is found in doing, not merely possessing."},{author:"Napoleon Hill",text:"Fears are nothing more than a state of mind."},{author:"Napoleon Hill",text:"Most great people have attained their greatest success just one step beyond their greatest failure."},{author:"Napoleon Hill",text:"When your desires are strong enough you will appear to possess superhuman powers to achieve."},{author:"Napoleon Hill",text:"No man can succeed in a line of endeavor which he does not like."},{author:"Napoleon Hill",text:"If you cannot do great things, do small things in a great way."},{author:"Napoleon Hill",text:"Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements."},{author:"Napoleon Hill",text:"Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements."},{author:"Napoleon Hill",text:"Edison failed 10,000 times before he made the electric light. Do not be discouraged if you fail a few times."},{author:"Napoleon Hill",text:"Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit."},{author:"Napoleon Hill",text:"All achievements, all earned riches, have their beginning in an idea."},{author:"Napoleon Hill",text:"You might well remember that nothing can bring you success but yourself."},{author:"Napoleon Hill",text:"Your big opportunity may be right where you are now."},{author:"Napoleon Hill",text:"Opportunity often comes disguised in the form of misfortune, or temporary defeat."},{author:"Napoleon Hill",text:"The ladder of success is never crowded at the top."},{author:"Napoleon Hill",text:"The world has the habit of making room for the man whose actions show that he knows where he is going."},{author:"Napoleon Hill",text:"First comes thought; then organization of that thought, into ideas and plans; then transformation of those plans into reality. The beginning, as you will observe, is in your imagination."},{author:"Napoleon Hill",text:"There are no limitations to the mind except those we acknowledge."},{author:"Napoleon Hill",text:"Here is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants, and a burning desire to possess it."},{author:"Nathaniel Hawthorne",text:"Happiness is as a butterfly which, when pursued, is always beyond our grasp, but which if you will sit down quietly, may alight upon you."},{author:"Nelson Mandela",text:"There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered."},{author:"Nelson Mandela",text:"As we are liberated from our own fear, our presence automatically liberates others."},{author:"Nelson Mandela",text:"And as we let our own light shine, we unconsciously give other people permission to do the same."},{author:"Niccolo Machiavelli",text:"Men in general judge more from appearances than from reality. All men have eyes, but few have the gift of penetration."},{author:"Niels Bohr",text:"How wonderful that we have met with a paradox. Now we have some hope of making progress."},{author:"Nietzsche",text:"You need chaos in your soul to give birth to a dancing star."},{author:"Nikola Tesla",text:"Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more."},{author:"Nikola Tesla",text:"Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine."},{author:"Nikos Kazantzakis",text:"By believing passionately in something that does not yet exist, we create it."},{author:"Nora Roberts",text:"If you don't go after what you want, you'll never have it. If you don't ask, the answer is always no. If you don't step forward, you're always in the same place."},{author:"Norman Cousins",text:"Never deny a diagnosis, but do deny the negative verdict that may go with it."},{author:"Norman Peale",text:"If you want things to be different, perhaps the answer is to become different yourself."},{author:"Norman Schwarzkopf",text:"The truth of the matter is that you always know the right thing to do. The hard part is doing it."},{author:"Og Mandino",text:"Each misfortune you encounter will carry in it the seed of tomorrows good luck."},{author:"Og Mandino",text:"I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars."},{author:"Og Mandino",text:"I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted."},{author:"Og Mandino",text:"Always do your best. What you plant now, you will harvest later."},{author:"Og Mandino",text:"Always seek out the seed of triumph in every adversity."},{author:"Og Mandino",text:"Failure will never overtake me if my determination to succeed is strong enough."},{author:"Old German proverb",text:"You have to take it as it happens, but you should try to make it happen the way you want to take it."},{author:"Oliver Holmes",text:"What lies behind us and what lies before us are small matters compared to what lies within us."},{author:"Oliver Holmes",text:"A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve."},{author:"Oliver Holmes",text:"We do not quit playing because we grow old, we grow old because we quit playing."},{author:"Oliver Holmes",text:"Love is the master key that opens the gates of happiness."},{author:"Oprah Winfrey",text:"Follow your instincts. That is where true wisdom manifests itself."},{author:"Oprah Winfrey",text:"I don't believe in failure. It is not failure if you enjoyed the process."},{author:"Oprah Winfrey",text:"If you want your life to be more rewarding, you have to change the way you think."},{author:"Oprah Winfrey",text:"The biggest adventure you can ever take is to live the life of your dreams."},{author:"Oprah Winfrey",text:"Although there may be tragedy in your life, there's always a possibility to triumph. It doesn't matter who you are, where you come from. The ability to triumph begins with you. Always."},{author:"Oprah Winfrey",text:"With every experience, you alone are painting your own canvas, thought by thought, choice by choice."},{author:"Oprah Winfrey",text:"I don't believe in failure. It's not failure if you enjoyed the process."},{author:"Oprah Winfrey",text:"Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down."},{author:"Oprah Winfrey",text:"Don't settle for a relationship that won't let you be yourself."},{author:"Orison Marden",text:"The Creator has not given you a longing to do that which you have no ability to do."},{author:"Orison Marden",text:"Most of our obstacles would melt away if, instead of cowering before them, we should make up our minds to walk boldly through them."},{author:"Orison Marden",text:"All men who have achieved great things have been great dreamers."},{author:"Oscar Wilde",text:"Experience is simply the name we give our mistakes."},{author:"Oscar Wilde",text:"The only thing to do with good advice is to pass it on. It is never of any use to oneself."},{author:"Oscar Wilde",text:"The aim of life is self-development. To realize ones nature perfectly that is what each of us is here for."},{author:"Oscar Wilde",text:"The smallest act of kindness is worth more than the grandest intention."},{author:"Oscar Wilde",text:"Anybody can make history. Only a great man can write it."},{author:"Oscar Wilde",text:"Be yourself; everyone else is already taken."},{author:"Oscar Wilde",source:"https://www.goodreads.com/quotes/19884-be-yourself-everyone-else-is-already-taken",tags:"stoic",text:"Be yourself; everyone else is already taken."},{author:"Ovid",text:"The cause is hidden. The effect is visible to all."},{author:"Ovid",text:"All things change; nothing perishes."},{author:"Ovid",text:"Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish."},{author:"Ovid",text:"Let your hook always be cast; in the pool where you least expect it, there will be a fish."},{author:"Ovid",text:"Take rest; a field that has rested gives a bountiful crop."},{author:"Paavo Nurmi",text:"Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind."},{author:"Pablo Picasso",text:"Everything you can imagine is real."},{author:"Pablo Picasso",text:"Inspiration exists, but it has to find us working."},{author:"Pablo Picasso",text:"He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law."},{author:"Pablo Picasso",text:"I am always doing that which I cannot do, in order that I may learn how to do it."},{author:"Pablo Picasso",text:"I am always doing that which I can not do, in order that I may learn how to do it."},{author:"Pablo Picasso",text:"Action is the foundational key to all success."},{author:"Pablo Picasso",text:"I begin with an idea and then it becomes something else."},{author:"Pablo Picasso",text:"All children are artists. The problem is how to remain an artist once he grows up."},{author:"Pat Riley",text:"Courage is not the absence of fear, but simply moving on with dignity despite that fear."},{author:"Paul Boese",text:"Forgiveness does not change the past, but it does enlarge the future."},{author:"Paul Cezanne",text:"The awareness of our own strength makes us modest."},{author:"Paul Graham",text:"The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent."},{author:"Paul Graham",source:"www.paulgraham.com/before.html",tags:"ideas, intuition, startup",text:"That\u2019s the thing about counter-intuitive ideas, they contradict your intuitions. So, they seem wrong."},{author:"Paul Tillich",text:"Decision is a risk rooted in the courage of being free."},{author:"Paulo Coelho",text:"Write your plans in pencil and give God the eraser."},{author:"Pearl Buck",text:"One faces the future with ones past."},{author:"Pearl Buck",text:"Growth itself contains the germ of happiness."},{author:"Pearl Buck",text:"Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied."},{author:"Pearl Buck",text:"You cannot make yourself feel something you do not feel, but you can make yourself do right in spite of your feelings."},{author:"Pearl Buck",text:"The truth is always exciting. Speak it, then. Life is dull without it."},{author:"Pearl Buck",text:"The secret of joy in work is contained in one word excellence. To know how to do something well is to enjoy it."},{author:"Pearl Buck",text:"The secret of joy in work is contained in one word: excellence. To know how to do something well is to enjoy it."},{author:"Pema Chodron",text:"The truth you believe and cling to makes you unavailable to hear anything new."},{author:"Pema Chodron",text:"When you begin to touch your heart or let your heart be touched, you begin to discover that it's bottomless."},{author:"Pema Chodron",text:"If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher."},{author:"Pema Chodron",text:"Nothing ever goes away until it has taught us what we need to know."},{author:"Pema Chodron",text:"The greatest obstacle to connecting with our joy is resentment."},{author:"Pema Chodron",text:"The future is completely open, and we are writing it moment to moment."},{author:"Pema Chodron",text:"To be fully alive, fully human, and completely awake is to be continually thrown out of the nest."},{author:"Pema Chodron",text:"It isn't what happens to us that causes us to suffer; it's what we say to ourselves about what happens."},{author:"Percy Shelley",text:"Fear not for the future, weep not for the past."},{author:"Pericles",text:"Time is the wisest counsellor of all."},{author:"Peter Drucker",text:"Efficiency is doing things right; effectiveness is doing the right things."},{author:"Peter Drucker",text:"Follow effective action with quiet reflection. From the quiet reflection will come even more effective action."},{author:"Peter Drucker",text:"There is nothing so useless as doing efficiently that which should not be done at all."},{author:"Peter Drucker",source:"https://books.google.com/books?id=mV3XM28AdoIC&pg=PA4&hl=en&sa=X&#v=onepage&q=%22You%20cannot%20predict%20the%20future%2C%20but%20you%20can%20create%20it.%22",text:"You cannot predict the future, but you can create it."},{author:"Peter Drucker",source:"https://www.goodreads.com/quotes/784267",tags:"time, management",text:"Until we can manage time, we can manage nothing else."},{author:"Peter Elbow",text:"Meaning is not what you start with but what you end up with."},{author:"Philip Breedveld",text:"Moments of complete apathy are the best for new creations."},{author:"Philip Sidney",text:"Either I will find a way, or I will make one."},{author:"Pierre Abelard",text:"The beginning of wisdom is found in doubting; by doubting we come to the question, and by seeking we may come upon the truth."},{author:"Pierre Auguste Renoir",text:"The pain passes, but the beauty remains."},{author:"Plato",text:"A good decision is based on knowledge and not on numbers."},{author:"Plato",text:"Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind."},{author:"Plato",text:"Good actions give strength to ourselves and inspire good actions in others."},{author:"Plato",text:"Wise men talk because they have something to say; fools, because they have to say something."},{author:"Plotinus",text:"Knowledge has three degrees opinion, science, illumination. The means or instrument of the first is sense; of the second, dialectic; of the third, intuition."},{author:"Plutarch",text:"What we achieve inwardly will change outer reality."},{author:"Plutarch",text:"Know how to listen, and you will profit even from those who talk badly."},{author:"Plutarch",text:"To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future."},{author:"Princess Diana",text:"Only do what your heart tells you."},{author:"Publilius Syrus",text:"A rolling stone gathers no moss."},{author:"Publilius Syrus",text:"While we stop to think, we often miss our opportunity."},{author:"Publilius Syrus",text:"Better be ignorant of a matter than half know it."},{author:"Publilius Syrus",text:"I have often regretted my speech, never my silence."},{author:"Publilius Syrus",text:"Do not turn back when you are just at the goal."},{author:"Publilius Syrus",text:"Never promise more than you can perform."},{author:"Rabbi Hillel",text:"If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?"},{author:"Rabindranath Tagore",text:"We read the world wrong and say that it deceives us."},{author:"Rachel Carson",text:"If facts are the seeds that later produce knowledge and wisdom, then the emotions and the impressions of the senses are the fertile soil in which the seeds must grow."},{author:"Rahul Dravid",source:"https://www.azquotes.com/quote/877863",text:"You don't play for revenge. You play for respect and pride"},{author:"Rainer Maria Rilke",source:"https://goodreads.com/quotes/95915",tags:"life, feelings, fearlessness, persistence",text:"Let everything happen to you. Beauty and terror. Just keep going. No feeling is final"},{author:"Ralph Blum",text:"Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings."},{author:"Ralph Emerson",text:"Skill to do comes of doing."},{author:"Ralph Emerson",text:"The years teach much which the days never know."},{author:"Ralph Emerson",text:"Our distrust is very expensive."},{author:"Ralph Emerson",text:"Good luck is another name for tenacity of purpose."},{author:"Ralph Emerson",text:"Life is a progress, and not a station."},{author:"Ralph Emerson",text:"The world makes way for the man who knows where he is going."},{author:"Ralph Emerson",text:"Life is a succession of lessons, which must be lived to be understood."},{author:"Ralph Emerson",text:"Great are they who see that spiritual is stronger than any material force, that thoughts rule the world."},{author:"Ralph Emerson",text:"Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good."},{author:"Ralph Emerson",text:"If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him."},{author:"Ralph Emerson",text:"It is one of the blessings of old friends that you can afford to be stupid with them."},{author:"Ralph Emerson",text:"If the stars should appear but one night every thousand years how man would marvel and adore."},{author:"Ralph Emerson",text:"Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better."},{author:"Ralph Emerson",text:"Do not go where the path may lead, go instead where there is no path and leave a trail."},{author:"Ralph Emerson",text:"Self-trust is the first secret of success."},{author:"Ralph Emerson",text:"Go put your creed into the deed. Nor speak with double tongue."},{author:"Ralph Emerson",text:"We aim above the mark to hit the mark."},{author:"Ralph Emerson",text:"Nature is a mutable cloud which is always and never the same."},{author:"Ralph Emerson",text:"Build a better mousetrap and the world will beat a path to your door."},{author:"Ralph Emerson",text:"Nothing is at last sacred but the integrity of your own mind."},{author:"Ralph Emerson",text:"Nothing great was ever achieved without enthusiasm."},{author:"Ralph Emerson",text:"Each man has his own vocation; his talent is his call. There is one direction in which all space is open to him."},{author:"Ralph Emerson",text:"Truth, and goodness, and beauty are but different faces of the same all."},{author:"Ralph Emerson",text:"To be great is to be misunderstood."},{author:"Ralph Emerson",text:"Make the most of yourself, for that is all there is of you."},{author:"Ralph Emerson",text:"Everything in the universe goes by indirection. There are no straight lines."},{author:"Ralph Emerson",text:"Make the most of yourself for that is all there is of you."},{author:"Ralph Emerson",text:"Thought is the blossom; language the bud; action the fruit behind it."},{author:"Ralph Emerson",text:"We must be as courteous to a man as we are to a picture, which we are willing to give the advantage of a good light."},{author:"Ralph Emerson",text:"What is a weed? A plant whose virtues have not yet been discovered."},{author:"Ralph Emerson",text:"Belief consists in accepting the affirmations of the soul; Unbelief, in denying them."},{author:"Ralph Emerson",text:"Good thoughts are no better than good dreams, unless they be executed."},{author:"Ralph Emerson",text:"In skating over thin ice our safety is in our speed."},{author:"Ralph Emerson",text:"So is cheerfulness, or a good temper, the more it is spent, the more remains."},{author:"Ralph Emerson",text:"Bad times have a scientific value. These are occasions a good learner would not miss."},{author:"Ralph Emerson",text:"The only way to have a friend is to be one."},{author:"Ralph Marston",text:"Excellence is not a skill. It is an attitude."},{author:"Ralph Marston",text:"Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement."},{author:"Ralph Waldo Emerson",text:"Our strength grows out of our weaknesses."},{author:"Ralph Waldo Emerson",text:"It is only when the mind and character slumber that the dress can be seen."},{author:"Ralph Waldo Emerson",text:"Happiness is a perfume you cannot pour on others without getting a few drops on yourself."},{author:"Ralph Waldo Emerson",text:"A hero is no braver than an ordinary man, but he is braver five minutes longer."},{author:"Ralph Waldo Emerson",text:"Imagination is not a talent of some men but is the health of every man."},{author:"Ralph Waldo Emerson",text:"Most of the shadows of life are caused by standing in our own sunshine."},{author:"Ralph Waldo Emerson",text:"Do not follow where the path may lead. Go, instead, where there is no path and leave a trail."},{author:"Ray Bradbury",text:"Living at risk is jumping off the cliff and building your wings on the way down."},{author:"Remez Sasson",text:"You get peace of mind not by thinking about it or imagining it, but by quietening and relaxing the restless mind."},{author:"Rene Descartes",text:"It is not enough to have a good mind; the main thing is to use it well."},{author:"Rene Descartes",text:"The greatest minds are capable of the greatest vices as well as of the greatest virtues."},{author:"Rene Descartes",text:"Divide each difficulty into as many parts as is feasible and necessary to resolve it."},{author:"Richard Bach",text:"Argue for your limitations, and sure enough theyre yours."},{author:"Richard Bach",text:"In order to win, you must expect to win."},{author:"Richard Bach",text:"The simplest things are often the truest."},{author:"Richard Bach",text:"To bring anything into your life, imagine that it's already there."},{author:"Richard Bach",text:"Strong beliefs win strong men, and then make them stronger."},{author:"Richard Bach",text:"Every problem has a gift for you in its hands."},{author:"Richard Bach",text:"The best way to pay for a lovely moment is to enjoy it."},{author:"Richard Bach",text:"In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice."},{author:"Richard Bach",text:"You are always free to change your mind and choose a different future, or a different past."},{author:"Richard Bach",text:"Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years."},{author:"Richard Bach",text:"If you love someone, set them free. If they come back they're yours; if they don't they never were."},{author:"Richard Bach",text:"Bad things are not the worst things that can happen to us. Nothing is the worst thing that can happen to us!"},{author:"Richard Bach",text:"Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?"},{author:"Richard Bach",text:"Don't turn away from possible futures before you're certain you don't have anything to learn from them."},{author:"Richard Bach",text:"Don't believe what your eyes are telling you. All they show is limitation. Look with your understanding, find out what you already know, and you'll see the way to fly."},{author:"Richard Bach",text:"Sooner or later, those who win are those who think they can."},{author:"Richard Bach",text:"Happiness is the reward we get for living to the highest right we know."},{author:"Richard Bach",text:"Every gift from a friend is a wish for your happiness."},{author:"Richard Bach",text:"Learning is finding out what you already know."},{author:"Richard Bach",text:"Ask yourself the secret of your success. Listen to your answer, and practice it."},{author:"Richard Bach",text:"The meaning I picked, the one that changed my life: Overcome fear, behold wonder."},{author:"Richard Bach",text:"Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you."},{author:"Richard Bach",text:"To fly as fast as thought, you must begin by knowing that you have already arrived."},{author:"Richard Bach",text:"Allow the world to live as it chooses, and allow yourself to live as you choose."},{author:"Richard Bach",text:"I gave my life to become the person I am right now. Was it worth it?"},{author:"Richard Bach",text:"The mark of your ignorance is the depth of your belief in injustice and tragedy. What the caterpillar calls the end of the world, the Master calls the butterfly."},{author:"Richard Bach",text:"Listen to what you know instead of what you fear."},{author:"Richard Bach",text:"What the caterpillar calls the end of the world, the master calls a butterfly."},{author:"Richard Bach",text:"You teach best what you most need to learn."},{author:"Richard Bach",text:"Don't be dismayed by good-byes. A farewell is necessary before you can meet again. And meeting again, after moments or lifetimes, is certain for those who are friends."},{author:"Richard Bach",text:"You are never given a wish without also being given the power to make it come true. You may have to work for it, however."},{author:"Richard Bach",text:"Argue for your limitations, and sure enough they're yours."},{author:"Richard Evans",text:"The undertaking of a new action brings new strength."},{author:"Richard Feynman",source:"https://simple.wikiquote.org/wiki/Richard_Feynman",tags:"create, creation, understand, understanding",text:"What I cannot create, I do not understand."},{author:"Richard Garriott",text:"Chaos and Order are not enemies, only opposites."},{author:"Richard Needham",text:"Strong people make as many mistakes as weak people. Difference is that strong people admit their mistakes, laugh at them, learn from them. That is how they become strong."},{author:"Richard Whately",text:"Lose an hour in the morning, and you will spend all day looking for it."},{author:"Rita Mae Brown",text:"Creativity comes from trust. Trust your instincts. And never hope more than you work."},{author:"Robert Anthony",text:"Forget about all the reasons why something may not work. You only need to find one good reason why it will."},{author:"Robert Brault",text:"Enjoy the little things, for one day you may look back and realize they were the big things."},{author:"Robert C. Solomon",text:"Spirituality can be severed from both vicious sectarianism and thoughtless banalities. Spirituality, I have come to see, is nothing less than the thoughtful love of life."},{author:"Robert Frost",text:"The best way out is always through."},{author:"Robert Frost",text:"In three words I can sum up everything Ive learned about life: it goes on."},{author:"Robert Fulghum",text:"Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away."},{author:"Robert Fulghum",text:"If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience."},{author:"Robert Graves",text:"Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer."},{author:"Robert Heller",text:"Never ignore a gut feeling, but never believe that it's enough."},{author:"Robert Kennedy",text:"Only those who dare to fail greatly can ever achieve greatly."},{author:"Robert Louis Stevenson",text:"There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world."},{author:"Robert Lynd",text:"Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us."},{author:"Robert M. Pirsig",text:"The place to improve the world is first in one's own heart and head and hands."},{author:"Robert McKain",text:"The reason most goals are not achieved is that we spend our time doing second things first."},{author:"Robert Orben",text:"Don't think of it as failure. Think of it as time-released success."},{author:"Robert Pirsig",text:"The only Zen you find on the tops of mountains is the Zen you bring up there."},{author:"Robert Schuller",text:"As we grow as unique persons, we learn to respect the uniqueness of others."},{author:"Robert Schuller",text:"Failure doesn't mean you are a failure it just means you haven't succeeded yet."},{author:"Robert Southey",text:"It is with words as with sunbeams. The more they are condensed, the deeper they burn."},{author:"Robert Stevenson",text:"Don't judge each day by the harvest you reap but by the seeds you plant."},{author:"Robert Stevenson",text:"To be what we are, and to become what we are capable of becoming, is the only end of life."},{author:"Robert Stevenson",text:"Don't judge each day by the harvest you reap but by the seeds that you plant."},{author:"Rodin",text:"Nothing is a waste of time if you use the experience wisely."},{author:"Rudolf Arnheim",text:"All perceiving is also thinking, all reasoning is also intuition, all observation is also invention."},{author:"Rumi",text:"Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness."},{author:"Rumi",text:"Everyone has been made for some particular work, and the desire for that work has been put in every heart."},{author:"Rumi",text:"Let the beauty of what you love be what you do."},{author:"Rumi",text:"Let yourself be silently drawn by the stronger pull of what you really love."},{author:"Sai Baba",text:"What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be."},{author:"Sai Baba",text:"All action results from thought, so it is thoughts that matter."},{author:"Saint Augustine",text:"Patience is the companion of wisdom."},{author:"Saint Augustine",source:"https://www.thegospelcoalition.org/blogs/justin-taylor/an-analysis-of-one-of-the-greatest-sentences-ever-written/",tags:"Faith, Christianity, Saint, God, Augustine",text:"Because God has made us for Himself, our hearts are restless until they rest in Him."},{author:"Saint Augustine",source:"https://www.livingwithchrist.us/thought_of_the_day/to-fall-in-love-with-god-is-the-greatest-romance-to-seek-him-the-greatest-adventure-to-find-him-the-greatest-human-achievement-st-augustine-of-hippo/",tags:"Faith, Christianity, Saint, God, Augustine",text:"To fall in love with God is the greatest romance; to seek him the greatest adventure; to find him, the greatest human achievement"},{author:"Salman Rushdie",source:"https://www.goodreads.com/quotes/144304-how-do-you-defeat-terrorism-don-t-be-terrorized",tags:"stoic",text:"How do you defeat terrorism? Don\u2019t be terrorized."},{author:"Sam Keen",text:"We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly."},{author:"Sam Levenson",text:"It's so simple to be wise. Just think of something stupid to say and then don't say it."},{author:"Sam Rayburn",text:"No one has a finer command of language than the person who keeps his mouth shut."},{author:"Samuel Johnson",text:"Memory is the mother of all wisdom."},{author:"Samuel Taylor Coleridge",text:"Imagination is the living power and prime agent of all human perception."},{author:"Sarah Breathnach",text:"Our deepest wishes are whispers of our authentic selves. We must learn to respect them. We must learn to listen."},{author:"Satchel Paige",text:"Don't look back. Something might be gaining on you."},{author:"Satya Nadella",source:"https://www.goodreads.com/quotes/8907834",tags:"technology",text:"Our industry does not respect tradition. What it respects is innovation."},{author:"Saul Alinsky",text:"As an organizer I start from where the world is, as it is, not as I would like it to be."},{author:"Seneca",text:"Luck is what happens when preparation meets opportunity."},{author:"Seneca",text:"No man was ever wise by chance."},{author:"Seneca",text:"The greatest remedy for anger is delay."},{author:"Seneca",text:"The mind unlearns with difficulty what it has long learned."},{author:"Seneca",text:"Begin at once to live and count each separate day as a separate life."},{author:"Seneca",text:"If one does not know to which port is sailing, no wind is favorable."},{author:"Seneca",text:"The conditions of conquest are always easy. We have but to toil awhile, endure awhile, believe always, and never turn back."},{author:"Seneca",text:"There is no great genius without some touch of madness."},{author:"Seneca",text:"Most powerful is he who has himself in his own power."},{author:"Seneca",text:"Things that were hard to bear are sweet to remember."},{author:"Seneca",source:"https://www.goodreads.com/quotes/17490-luck-is-what-happens-when-preparation-meets-opportunity",tags:"stoic, luck",text:"Luck is what happens when preparation meets opportunity."},{author:"Seneca",source:"https://www.goodreads.com/quotes/37051-it-is-the-power-of-the-mind-to-be-unconquerable",tags:"stoic, willpower",text:"It is the power of the mind to be unconquerable."},{author:"Shakti Gawain",text:"The more light you allow within you, the brighter the world you live in will be."},{author:"Shannon L. Alder",source:"https://www.goodreads.com/quotes/736095",tags:"choices, courage, decisions, questions, avoid, avoiding, avoidance, procrastination",text:"Courage doesn\u2019t happen when you have all the answers. It happens when you are ready to face the questions you have been avoiding your whole life."},{author:"Sheldon Kopp",text:"In the long run we get no more than we have been willing to risk giving."},{author:"Shunryu Suzuki",text:"The most important point is to accept yourself and stand on your two feet."},{author:"Sigmund Freud",text:"From error to error one discovers the entire truth."},{author:"Sigmund Freud",text:"The most complicated achievements of thought are possible without the assistance of consciousness."},{author:"Simone Weil",text:"Liberty, taking the word in its concrete sense, consists in the ability to choose."},{author:"Sinvyest Tan",text:"Don't frown because you never know who is falling in love with your smile."},{author:"Socrates",text:"Be as you wish to seem."},{author:"Socrates",text:"Wisdom begins in wonder."},{author:"Socrates",text:"The greatest way to live with honor in this world is to be what we pretend to be."},{author:"Socrates",text:"The greatest way to live with honour in this world is to be what we pretend to be."},{author:"Sogyal Rinpoche",text:"We must never forget that it is through our actions, words, and thoughts that we have a choice."},{author:"Sojourner Truth",text:"Truth is powerful and it prevails."},{author:"Sophia Loren",source:"https://www.goodreads.com/quotes/8746",tags:"creativity, youth, age, mind",text:"There is a fountain of youth: it is your mind, your talents, the creativity you bring to your life and the lives of people you love. When you learn to tap this source, you will truly have defeated age."},{author:"Sophocles",text:"Wisdom is the supreme part of happiness."},{author:"Sophocles",text:"A short saying often contains much wisdom."},{author:"Sophocles",text:"A short saying oft contains much wisdom."},{author:"Sophocles",text:"Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them."},{author:"Sophocles",text:"Ignorant men don't know what good they hold in their hands until they've flung it away."},{author:"Sophocles",text:"Much wisdom often goes with fewer words."},{author:"Sophocles",text:"Numberless are the worlds wonders, but none more wonderful than man."},{author:"Sri Chinmoy",text:"Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest."},{author:"St. Augustine",text:"Better to have loved and lost, than to have never loved at all."},{author:"Stephen Covey",text:"We are not animals. We are not a product of what has happened to us in our past. We have the power of choice."},{author:"Stephen Kaggwa",text:"Try and fail, but don't fail to try."},{author:"Stephen Sigmund",text:"Learn wisdom from the ways of a seedling. A seedling which is never hardened off through stressful situations will never become a strong productive plant."},{author:"Steve Jobs",source:"https://www.goodreads.com/author/quotes/5255891.Steve_Jobs",tags:"inspirational",text:"Stay hungry. Stay foolish."},{author:"Sue Patton Thoele",text:"Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand."},{author:"Sun Tzu",text:"You have to believe in yourself."},{author:"Sun Tzu",text:"Can you imagine what I would do if I could do all I can?"},{author:"Swedish proverb",text:"Worry often gives a small thing a big shadow."},{author:"Sydney Smith",text:"It is the greatest of all mistakes to do nothing because you can only do little do what you can."},{author:"Sydney Smith",text:"It is the greatest of all mistakes to do nothing because you can only do little - do what you can."},{author:"Sylvia Plath",source:"https://www.goodreads.com/quotes/358562",tags:"creativity, confidence, self-doubt, enemy",text:"The worst enemy to creativity is self-doubt."},{author:"Sylvia Voirol",text:"Rainbows apologize for angry skies."},{author:"S\xF8ren Kierkegaard",source:"https://www.goodreads.com/quotes/6812",tags:"fictional, movie, do, try, star wars",text:"Life can only be understood backwards; but it must be lived forwards."},{author:"S\xF8ren Kierkegaard",text:"To dare is to lose ones footing momentarily. To not dare is to lose oneself."},{author:"Taleb Nassim Nicholas",source:"https://www.goodreads.com/quotes/563493-a-stoic-is-someone-who-transforms-fear-into-prudence-pain",tags:"stoic",text:"A Stoic is someone who transforms fear into prudence, pain into transformation, mistakes into initiation, and desire into undertaking."},{author:"Tehyi Hsieh",text:"Action will remove the doubts that theory cannot solve."},{author:"Tenzin Gyatso",text:"To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else."},{author:"Tenzin Gyatso",text:"When we feel love and kindness toward others, it not only makes others feel loved and cared for, but it helps us also to develop inner happiness and peace."},{author:"Terry Tempest Williams",source:"https://www.goodreads.com/quotes/784313",tags:"creative, creativity",text:"Creativity involves breaking out of expected patterns in order to look at things in a different way."},{author:"Theodore H. White",text:"To go against the dominant thinking of your friends, of most of the people you see every day, is perhaps the most difficult act of heroism you can perform."},{author:"Theodore Roosevelt",text:"Keep your eyes on the stars and your feet on the ground."},{author:"Theodore Rubin",text:"Kindness is more important than wisdom, and the recognition of this is the beginning of wisdom."},{author:"Theophrastus",text:"Time is the most valuable thing a man can spend."},{author:"Thich Nhat Hanh",text:"Smile, breathe, and go slowly."},{author:"Thich Nhat Hanh",text:"There is no way to happiness, happiness is the way."},{author:"Thich Nhat Hanh",text:"May our hearts garden of awakening bloom with hundreds of flowers."},{author:"Thich Nhat Hanh",text:"To be beautiful means to be yourself. You do not need to be accepted by others. You need to accept yourself."},{author:"Thich Nhat Hanh",text:"The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers."},{author:"Thich Nhat Hanh",text:"Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy."},{author:"Thich Nhat Hanh",text:"By living deeply in the present moment we can understand the past better and we can prepare for a better future."},{author:"Thich Nhat Hanh",text:"The amount of happiness that you have depends on the amount of freedom you have in your heart."},{author:"Thich Nhat Hanh",text:"Smile, breathe and go slowly."},{author:"Thich Nhat Hanh",text:"If we are not fully ourselves, truly in the present moment, we miss everything."},{author:"Thich Nhat Hanh",text:"To be beautiful means to be yourself. You don't need to be accepted by others. You need to accept yourself."},{author:"Thomas Carlyle",text:"By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears."},{author:"Thomas Carlyle",text:"This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it."},{author:"Thomas Carlyle",text:"Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education."},{author:"Thomas Carlyle",text:"Instead of saying that man is the creature of circumstance, it would be nearer the mark to say that man is the architect of circumstance."},{author:"Thomas Dewar",text:"Minds are like parachutes. They only function when open."},{author:"Thomas Edison",text:"Genius is one percent inspiration and ninety-nine percent perspiration."},{author:"Thomas Edison",text:"If we did the things we are capable of, we would astound ourselves."},{author:"Thomas Edison",text:"Opportunity is missed by most because it is dressed in overalls and looks like work."},{author:"Thomas Edison",text:"Many of life's failures are people who did not realize how close they were to success when they gave up."},{author:"Thomas Edison",text:"The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary."},{author:"Thomas Fuller",text:"No garden is without its weeds."},{author:"Thomas Fuller",text:"An invincible determination can accomplish almost anything and in this lies the great distinction between great men and little men."},{author:"Thomas Hardy",text:"Time changes everything except something within us which is always surprised by change."},{author:"Thomas Jefferson",text:"Never put off till tomorrow what you can do today."},{author:"Thomas Jefferson",text:"Do you want to know who you are? Don't ask. Act! Action will delineate and define you."},{author:"Thomas Jefferson",text:"I'm a great believer in luck and I find the harder I work, the more I have of it."},{author:"Thomas Jefferson",text:"Don't talk about what you have done or what you are going to do."},{author:"Thomas Jefferson",text:"Reason and free inquiry are the only effectual agents against error."},{author:"Thomas Kempis",text:"Be not angry that you cannot make others as you wish them to be, since you cannot make yourself as you wish to be."},{author:"Thomas Paine",text:"The most formidable weapon against errors of every kind is reason."},{author:"Tom Brady",source:"https://www.brainyquote.com/quotes/tom_brady_807060",tags:"Sleep, Routine, Sport",text:"Proper sleep has helped me get to where I am today as an athlete, and it is something that I continue to rely on every day."},{author:"Tom Jackson",text:"Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on."},{author:"Tom Krause",text:"There are no failures. Just experiences and your reactions to them."},{author:"Tom Krause",text:"There are no failures, just experiences and your reactions to them."},{author:"Tom Lehrer",text:"Life is like a sewer. What you get out of it depends on what you put into it."},{author:"Tom Peters",text:"Formula for success: under promise and over deliver."},{author:"Tomas Eliot",text:"Do not expect the world to look bright, if you habitually wear gray-brown glasses."},{author:"Toni Morrison",text:"If you surrender to the wind, you can ride it."},{author:"Tony Blair",text:"Sometimes it is better to lose and do the right thing than to win and do the wrong thing."},{author:"Tony Robbins",text:"Whatever happens, take responsibility."},{author:"Tony Robbins",text:"The path to success is to take massive, determined action."},{author:"Tony Robbins",text:"Successful people ask better questions, and as a result, they get better answers."},{author:"Tony Robbins",text:"It is in your moments of decision that your destiny is shaped."},{author:"Tony Robbins",text:"The way we communicate with others and with ourselves ultimately determines the quality of our lives."},{author:"Tony Robbins",text:"The only limit to your impact is your imagination and commitment."},{author:"Tony Robbins",text:"You always succeed in producing a result."},{author:"Tony Robbins",text:"Stay committed to your decisions, but stay flexible in your approach."},{author:"Tony Robbins",text:"People are not lazy. They simply have impotent goals that is, goals that do not inspire them."},{author:"Tony Robbins",text:"Setting goals is the first step in turning the invisible into the visible."},{author:"Tony Robbins",text:"We can change our lives. We can do, have, and be exactly what we wish."},{author:"Tony Robbins",text:"When people are like each other they tend to like each other."},{author:"Tony Robbins",text:"If you do what you've always done, you'll get what youve always gotten."},{author:"Tony Robbins",text:"Using the power of decision gives you the capacity to get past any excuse to change any and every part of your life in an instant."},{author:"Tony Robbins",text:"People are not lazy. They simply have impotent goals - that is, goals that do not inspire them."},{author:"Tony Robbins",text:"Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more"},{author:"Tony Robbins",text:"To effectively communicate, we must realize that we are all different in the way we perceive the world and use this understanding as a guide to our communication with others."},{author:"Tryon Edwards",text:"He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today."},{author:"Turkish proverb",text:"Kind words will unlock an iron door."},{author:"Unknown",source:"https://quoteinvestigator.com/2017/03/23/same/",tags:"action, change, creative, creativity, sanity",text:"The definition of insanity is doing the same thing over and over again and expecting a different result."},{author:"Ursula Leguin",source:"https://www.goodreads.com/quotes/1260096",tags:"creative, creativity, child",text:"The creative adult is the child who survived."},{author:"Usman Asif",text:"Fear is a darkroom where negatives develop."},{author:"Uta Hagen",text:"We must overcome the notion that we must be regular. It robs you of the chance to be extraordinary and leads you to the mediocre."},{author:"V. Naipaul",text:"The world is always in movement."},{author:"Vaclav Havel",text:"Work for something because it is good, not just because it stands a chance to succeed."},{author:"Vernon Cooper",text:"These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future."},{author:"Victor Frankl",text:"Everything can be taken from a man but ... the last of the human freedoms to choose ones attitude in any given set of circumstances, to choose ones own way."},{author:"Victor Frankl",text:"Everything can be taken from a man but ... the last of the human freedoms - to choose ones attitude in any given set of circumstances, to choose ones own way."},{author:"Victor Hugo",text:"Life is the flower for which love is the honey."},{author:"Victor Hugo",text:"An invasion of armies can be resisted, but not an idea whose time has come."},{author:"Victoria Holt",text:"Never regret. If it's good, it's wonderful. If it's bad, it's experience."},{author:"Vince Lombardi",text:"If you'll not settle for anything less than your best, you will be amazed at what you can accomplish in your lives."},{author:"Vince Lombardi",text:"Leaders aren't born they are made. And they are made just like anything else, through hard work. And that's the price well have to pay to achieve that goal, or any goal."},{author:"Vincent Lombardi",text:"The spirit, the will to win, and the will to excel, are the things that endure. These qualities are so much more important than the events that occur."},{author:"Virgil",text:"Fortune favours the brave."},{author:"Virgil",text:"They can do all because they think they can."},{author:"Virgil",text:"They can conquer who believe they can."},{author:"Vista Kelly",text:"Snowflakes are one of natures most fragile things, but just look what they can do when they stick together."},{author:"Voltaire",text:"No snowflake in an avalanche ever feels responsible."},{author:"Voltaire",text:"To enjoy life, we must touch much of it lightly."},{author:"Voltaire",text:"Think for yourselves and let others enjoy the privilege to do so too."},{author:"Voltaire",text:"The longer we dwell on our misfortunes, the greater is their power to harm us."},{author:"Voltaire",text:"We never live; we are always in the expectation of living."},{author:"Voltaire",text:"Meditation is the dissolution of thoughts in eternal awareness or Pure consciousness without objectification, knowing without thinking, merging finitude in infinity."},{author:"W. Clement Stone",text:"No matter how carefully you plan your goals they will never be more that pipe dreams unless you pursue them with gusto."},{author:"W. Clement Stone",text:"When you discover your mission, you will feel its demand. It will fill you with enthusiasm and a burning desire to get to work on it."},{author:"W. H. Auden",text:"To choose what is difficult all ones days, as if it were easy, that is faith."},{author:"Walt Disney",text:"If you can dream it, you can do it."},{author:"Walt Disney",text:"Weve got to have a dream if we are going to make a dream come true."},{author:"Walt Emerson",text:"What lies behind us and what lies before us are tiny matters compared to what lies within us."},{author:"Walter Anderson",text:"Nothing diminishes anxiety faster than action."},{author:"Walter Benjamin",text:"To be happy is to be able to become aware of oneself without fright."},{author:"Walter Cronkite",text:"I can't imagine a person becoming a success who doesn't give this game of life everything hes got."},{author:"Walter Linn",text:"It is surprising what a man can do when he has to, and how little most men will do when they don't have to."},{author:"Walter Lippmann",text:"Ideals are an imaginative understanding of that which is desirable in that which is possible."},{author:"Walter Lippmann",text:"Where all think alike, no one thinks very much."},{author:"Walter Reisch",source:"https://www.pinterest.com/pin/69805862960101466",tags:"Calmness, Sleep, Plan",text:"Tired minds dont plan well. Sleep first, plan later."},{author:"Washington Irving",text:"Love is never lost. If not reciprocated, it will flow back and soften and purify the heart."},{author:"Wayne Dyer",text:"You'll see it when you believe it."},{author:"Wayne Dyer",text:"Real magic in relationships means an absence of judgement of others."},{author:"Wayne Dyer",text:"Our intention creates our reality."},{author:"Wayne Dyer",text:"I think and that is all that I am."},{author:"Wayne Dyer",text:"There is no way to prosperity, prosperity is the way."},{author:"Wayne Dyer",text:"Everything is perfect in the universe even your desire to improve it."},{author:"Wayne Dyer",text:"Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice."},{author:"Wayne Dyer",text:"If you change the way you look at things, the things you look at change."},{author:"Wayne Dyer",text:"You are important enough to ask and you are blessed enough to receive back."},{author:"Wayne Dyer",text:"What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds."},{author:"Wayne Dyer",text:"I cannot always control what goes on outside. But I can always control what goes on inside."},{author:"Wayne Dyer",text:"Our lives are a sum total of the choices we have made."},{author:"Wayne Dyer",text:"When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way."},{author:"Wayne Dyer",text:"Anything you really want, you can attain, if you really go after it."},{author:"Wayne Dyer",text:"Doing what you love is the cornerstone of having abundance in your life."},{author:"Wayne Dyer",text:"Everything you are against weakens you. Everything you are for empowers you."},{author:"Wayne Dyer",text:"You can't choose up sides on a round world."},{author:"Wayne Dyer",text:"There is no scarcity of opportunity to make a living at what you love; theres only scarcity of resolve to make it happen."},{author:"Wayne Dyer",text:"We are Divine enough to ask and we are important enough to receive."},{author:"Wayne Dyer",text:"Maxim for life: You get treated in life the way you teach people to treat you."},{author:"Wayne Dyer",text:"You cannot be lonely if you like the person you're alone with."},{author:"Wayne Dyer",text:"Go for it now. The future is promised to no one."},{author:"Wayne Dyer",text:"Miracles come in moments. Be ready and willing."},{author:"Wayne Dyer",text:"When you judge another, you do not define them, you define yourself."},{author:"Wayne Dyer",text:"Simply put, you believer that things or people make you unhappy, but this is not accurate. You make yourself unhappy."},{author:"Wayne Dyer",text:"Everything is perfect in the universe - even your desire to improve it."},{author:"Whoopi Goldberg",text:"Were here for a reason. I believe a bit of the reason is to throw little torches out to lead people through the dark."},{author:"Will Durant",text:"The trouble with most people is that they think with their hopes or fears or wishes rather than with their minds."},{author:"Will Rogers",text:"If you find yourself in a hole, the first thing to do is stop digging."},{author:"Willa Cather",text:"Where there is great love, there are always miracles."},{author:"William Arthur Ward",text:"Do more than dream: work."},{author:"William Arthur Ward",text:"Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently."},{author:"William Blake",text:"In seed time learn, in harvest teach, in winter enjoy."},{author:"William Blake",text:"For everything that lives is holy, life delights in life."},{author:"William Blake",source:"https://www.goodreads.com/quotes/218205",tags:"Advice, Rest, Nuitrition",text:"Think in the morning. Act in the noon. Eat in the evening. Sleep in the night."},{author:"William Burroughs",text:"Your mind will answer most questions if you learn to relax and wait for the answer."},{author:"William Channing",text:"Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict."},{author:"William H. McRaven",source:"https://quotefancy.com/quote/1582978",tags:"Exercise, Sleep, Balance",text:"I think the best way to get a good night sleep is to work hard throughout the day. If you work hard and, of course, work out."},{author:"William Hazlitt",text:"Just as much as we see in others we have in ourselves."},{author:"William James",text:"The greatest discovery of our generation is that human beings can alter their lives by altering their attitudes of mind. As you think, so shall you be."},{author:"William James",text:"Act as if what you do makes a difference. It does."},{author:"William James",text:"To change ones life, start immediately, do it flamboyantly, no exceptions."},{author:"William James",text:"The deepest craving of human nature is the need to be appreciated."},{author:"William Londen",text:"To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life."},{author:"William Lyon Phelps",text:"This is the final test of a gentleman: his respect for those who can be of no possible value to him."},{author:"William Menninger",text:"Six essential qualities that are the key to success: Sincerity, personal integrity, humility, courtesy, wisdom, charity."},{author:"William Penn",text:"True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment."},{author:"William R. Inge",text:"Nature takes away any faculty that is not used."},{author:"William Saroyan",text:"Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know."},{author:"William Scolavino",text:"The height of your accomplishments will equal the depth of your convictions."},{author:"William Shakespeare",text:"Having nothing, nothing can he lose."},{author:"William Shakespeare",text:"Love all, trust a few, do wrong to none."},{author:"William Shakespeare",source:"https://www.goodreads.com/quotes/8516632",tags:"Sleep, Poetry, Resting",text:"Sleep that knits up the ravelled sleave of care. The death of each days life, sore labors bath. Balm of hurt minds, great natures second course. Chief nourisher in lifes feast."},{author:"William Shakespeare",text:"He that is giddy thinks the world turns round."},{author:"William Shakespeare",text:"Speak low, if you speak love."},{author:"William Shakespeare",text:"Be great in act, as you have been in thought."},{author:"William Shakespeare",text:"Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them."},{author:"William Shakespeare",text:"How far that little candle throws its beams! So shines a good deed in a naughty world."},{author:"William Shakespeare",text:"God has given you one face, and you make yourself another."},{author:"William Shakespeare",text:"Go to your bosom: Knock there, and ask your heart what it doth know."},{author:"William Shakespeare",text:"We know what we are, but know not what we may be."},{author:"William Shakespeare",text:"All the world is a stage, And all the men and women merely players.They have their exits and entrances; Each man in his time plays many parts."},{author:"William Shakespeare",text:"To climb steep hills requires a slow pace at first."},{author:"William Shakespeare",text:"It is not in the stars to hold our destiny but in ourselves."},{author:"William Sloane Coffin",text:"Hope arouses, as nothing else can arouse, a passion for the possible."},{author:"William Ward",text:"When we seek to discover the best in others, we somehow bring out the best in ourselves."},{author:"William Ward",text:"Adversity causes some men to break, others to break records."},{author:"William White",text:"I am not afraid of tomorrow, for I have seen yesterday and I love today."},{author:"William Yeats",text:"Think as a wise man but communicate in the language of the people."},{author:"Winifred Holtby",text:"The things that one most wants to do are the things that are probably most worth doing."},{author:"Winston Churchill",text:"Courage is going from failure to failure without losing enthusiasm."},{author:"Winston Churchill",text:"Short words are best and the old words when short are best of all."},{author:"Winston Churchill",text:"You have enemies? Good. That means you've stood up for something, sometime in your life."},{author:"Winston Churchill",text:"Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen."},{author:"Winston Churchill",text:"History will be kind to me for I intend to write it."},{author:"Winston Churchill",text:"Before you can inspire with emotion, you must be swamped with it yourself. Before you can move their tears, your own must flow. To convince them, you must yourself believe."},{author:"Winston Churchill",text:"The price of greatness is responsibility."},{author:"Winston Churchill",text:"The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty."},{author:"Winston Churchill",text:"I never worry about action, but only inaction."},{author:"Winston Churchill",text:"Never, never, never give up."},{author:"Winston Churchill",text:"We make a living by what we get, but we make a life by what we give."},{author:"Winston Churchill",text:"Continuous effort, not strength or intelligence is the key to unlocking our potential."},{author:"Winston Churchill",text:"Continuous effort - not strength or intelligence - is the key to unlocking our potential."},{author:"Wit",text:"We choose our destiny in the way we treat others."},{author:"Wolfgang Amadeus Mozart",text:"Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius."},{author:"Woody Guthrie",text:"Take it easy, but take it."},{author:"Woody Guthrie",text:"Take it easy but take it."},{author:"Woody Guthrie",text:"Take it easy - but take it."},{author:"Ymber Delecto",text:"The time you think you're missing, misses you too."},{author:"Yoda",text:"Do, or do not. There is no try."},{author:"Yogi Berra",text:"You can observe a lot just by watching."},{author:"Yogi Berra",text:"Life is a learning experience, only if you learn."},{author:"Yogi Berra",text:"You got to be careful if you don't know where you're going, because you might not get there."},{author:"Zadok Rabinowitz",text:"A man's dreams are an index to his greatness."},{author:"Zeno of Citium",source:"https://www.goodreads.com/quotes/515411-man-conquers-the-world-by-conquering-himself",tags:"stoic",text:"Man conquers the world by conquering himself."},{author:"Zig Ziglar",text:"Positive thinking will let you do everything better than negative thinking will."},{author:"Zig Ziglar",text:"You are the only person on earth who can use your ability."},{author:"Zig Ziglar",text:"Your attitude, not your aptitude, will determine your altitude."},{author:"Zig Ziglar",text:"Remember that failure is an event, not a person."},{author:"Ziggy",text:"You can complain because roses have thorns, or you can rejoice because thorns have roses."}],Wt=Wd;function Od(){return Wt}function Ud(){return Wt[Math.floor(Math.random()*Wt.length)]}function Gd(a){const e=Wt.filter(t=>t.text.includes(a)||t.tags&&t.tags.includes(a));return e[Math.floor(Math.random()*e.length)]}function Hd(a){const e=Wt.filter(t=>t.text.includes(a)||t.author&&t.author.includes(a));return e[Math.floor(Math.random()*e.length)]}function Vd(a){const e=Wt.filter(t=>t.text.includes(a)||t.source&&t.source.includes(a));return e[Math.floor(Math.random()*e.length)]}function qd(a){return Wt.filter(t=>t.text.includes(a)||t.author&&t.author.includes(a))}function Yd(a){return Wt.filter(t=>t.text.includes(a)||t.tags&&t.tags.includes(a))}function Xd(a){return Wt.filter(t=>t.text.includes(a)||t.source&&t.source.includes(a))}var Jd={parse_json:Od,random:Ud,random_by_tag:Gd,random_by_author:Hd,random_by_source:Vd,search_by_author:qd,search_by_tag:Yd,search_by_source:Xd};const Fo=new Dd,Gi=new pt(75,window.innerWidth/window.innerHeight,.01,50),No=new Sr({canvas:document.querySelector("#background")});No.setPixelRatio(window.devicePixelRatio);No.setSize(window.innerWidth,window.innerHeight);Gi.position.x=15;Gi.position.y=18;Gi.position.z=.15;const Ar=()=>{let a=new Re(16777215);return a.setHex(Math.random()*16777215),a},si=new Oi(window.innerWidth,window.innerHeight,100,100),hi=new kd({color:Ar(),wireframe:!0,wireframeLinewidth:50}),Yn=new lt(si,hi),li=new lt(si,hi),ui=new lt(si,hi),ci=new lt(si,hi),di=new lt(si,hi),jd=new zd;Yn.rotation.x=-Math.PI*.5;Yn.position.y=-12;Yn.position.z=.15;li.rotation.x=-Math.PI*.5;li.position.y=-12+2;li.position.z=.15;ui.rotation.x=-Math.PI*.5;ui.position.y=-12+3;ui.position.z=.15;ci.rotation.x=-Math.PI*.5;ci.position.y=-12+4;ci.position.z=.15;di.rotation.x=-Math.PI*.5;di.position.y=-12+5;di.position.z=.15;const Er=new Nd(16777215);Er.position.set(5,5,5);Fo.add(Yn,li,ui,ci,di,Er);const Kd=new Bd,Zd=Kd.load("/vaporWave3.jpg");Fo.background=Zd;var Ot=document.createElement("div");Ot.style.position="absolute";Ot.style.fontFamily="Verdana";Ot.style.fontSize="20px";Ot.style.width=50;Ot.style.height=75;Ot.style.top=150+"px";Ot.style.left=150+"px";const Cr=()=>{No.render(Fo,Gi);const a=jd.getElapsedTime();Yn.position.z=a*9%200,li.position.z=a*9%200-2,ui.position.z=a*9%200-3,ci.position.z=a*9%200-4,di.position.z=a*9%200-5,requestAnimationFrame(Cr)};function Lr(){Yn.material.color.set(Ar());let a=Jd.random();Ot.innerHTML=a.text+"<br></br>-"+a.author,document.body.appendChild(Ot),setTimeout(Lr,3e4)}Lr();Cr();
