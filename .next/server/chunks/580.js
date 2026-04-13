"use strict";exports.id=580,exports.ids=[580],exports.modules={32933:(e,t,r)=>{r.d(t,{Z:()=>n});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(62881).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},11890:(e,t,r)=>{r.d(t,{Z:()=>n});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(62881).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},12714:(e,t,r)=>{r.d(t,{Z:()=>n});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(62881).Z)("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},39730:(e,t,r)=>{r.d(t,{Z:()=>n});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(62881).Z)("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]])},76993:(e,t,r)=>{r.d(t,{Z:()=>n});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(62881).Z)("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]])},74857:(e,t,r)=>{r.d(t,{Z:()=>n});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(62881).Z)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]])},9086:(e,t,r)=>{r.d(t,{M:()=>k});var n=r(10326),o=r(17577),l=r(40339),s=r(74749),i=r(71606),c=r(40295),u=r(69539),p=r(73965);function f(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class h extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if((0,u.R)(t)&&e.isPresent&&!this.props.isPresent&&!1!==this.props.pop){let e=t.offsetParent,r=(0,u.R)(e)&&e.offsetWidth||0,n=(0,u.R)(e)&&e.offsetHeight||0,o=getComputedStyle(t),l=this.props.sizeRef.current;l.height=parseFloat(o.height),l.width=parseFloat(o.width),l.top=t.offsetTop,l.left=t.offsetLeft,l.right=r-l.width-l.left,l.bottom=n-l.height-l.top}return null}componentDidUpdate(){}render(){return this.props.children}}function d({children:e,isPresent:t,anchorX:r,anchorY:l,root:s,pop:i}){let c=(0,o.useId)(),u=(0,o.useRef)(null),d=(0,o.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:a}=(0,o.useContext)(p._),m=function(...e){return o.useCallback(function(...e){return t=>{let r=!1,n=e.map(e=>{let n=f(e,t);return r||"function"!=typeof n||(r=!0),n});if(r)return()=>{for(let t=0;t<n.length;t++){let r=n[t];"function"==typeof r?r():f(e[t],null)}}}}(...e),e)}(u,e.props?.ref??e?.ref);return(0,o.useInsertionEffect)(()=>{let{width:e,height:n,top:o,left:p,right:f,bottom:h}=d.current;if(t||!1===i||!u.current||!e||!n)return;let m="left"===r?`left: ${p}`:`right: ${f}`,y="bottom"===l?`bottom: ${h}`:`top: ${o}`;u.current.dataset.motionPopId=c;let x=document.createElement("style");a&&(x.nonce=a);let g=s??document.head;return g.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            ${m}px !important;
            ${y}px !important;
          }
        `),()=>{g.contains(x)&&g.removeChild(x)}},[t]),(0,n.jsx)(h,{isPresent:t,childRef:u,sizeRef:d,pop:i,children:!1===i?e:o.cloneElement(e,{ref:m})})}let a=({children:e,initial:t,isPresent:r,onExitComplete:l,custom:i,presenceAffectsLayout:u,mode:p,anchorX:f,anchorY:h,root:a})=>{let y=(0,s.h)(m),x=(0,o.useId)(),g=!0,k=(0,o.useMemo)(()=>(g=!1,{id:x,initial:t,isPresent:r,custom:i,onExitComplete:e=>{for(let t of(y.set(e,!0),y.values()))if(!t)return;l&&l()},register:e=>(y.set(e,!1),()=>y.delete(e))}),[r,y,l]);return u&&g&&(k={...k}),(0,o.useMemo)(()=>{y.forEach((e,t)=>y.set(t,!1))},[r]),o.useEffect(()=>{r||y.size||!l||l()},[r]),e=(0,n.jsx)(d,{pop:"popLayout"===p,isPresent:r,anchorX:f,anchorY:h,root:a,children:e}),(0,n.jsx)(c.O.Provider,{value:k,children:e})};function m(){return new Map}var y=r(56933);let x=e=>e.key||"";function g(e){let t=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&t.push(e)}),t}let k=({children:e,custom:t,initial:r=!0,onExitComplete:c,presenceAffectsLayout:u=!0,mode:p="sync",propagate:f=!1,anchorX:h="left",anchorY:d="top",root:m})=>{let[k,w]=(0,y.oO)(f),C=(0,o.useMemo)(()=>g(e),[e]),Z=f&&!k?[]:C.map(x),R=(0,o.useRef)(!0),v=(0,o.useRef)(C),E=(0,s.h)(()=>new Map),M=(0,o.useRef)(new Set),[$,P]=(0,o.useState)(C),[z,L]=(0,o.useState)(C);(0,i.L)(()=>{R.current=!1,v.current=C;for(let e=0;e<z.length;e++){let t=x(z[e]);Z.includes(t)?(E.delete(t),M.current.delete(t)):!0!==E.get(t)&&E.set(t,!1)}},[z,Z.length,Z.join("-")]);let b=[];if(C!==$){let e=[...C];for(let t=0;t<z.length;t++){let r=z[t],n=x(r);Z.includes(n)||(e.splice(t,0,r),b.push(r))}return"wait"===p&&b.length&&(e=b),L(g(e)),P(C),null}let{forceRender:j}=(0,o.useContext)(l.p);return(0,n.jsx)(n.Fragment,{children:z.map(e=>{let o=x(e),l=(!f||!!k)&&(C===z||Z.includes(o));return(0,n.jsx)(a,{isPresent:l,initial:(!R.current||!!r)&&void 0,custom:t,presenceAffectsLayout:u,mode:p,root:m,onExitComplete:l?void 0:()=>{if(M.current.has(o)||(M.current.add(o),!E.has(o)))return;E.set(o,!0);let e=!0;E.forEach(t=>{t||(e=!1)}),e&&(j?.(),L(v.current),f&&w?.(),c&&c())},anchorX:h,anchorY:d,children:e},o)})})}},71606:(e,t,r)=>{r.d(t,{L:()=>n});let n=r(17577).useEffect}};