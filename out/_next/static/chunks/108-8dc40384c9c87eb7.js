"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[108],{1174:function(e,t,r){r.d(t,{ShareAction:function(){return v}});var n=r(7437),i=r(2265),a=r(7218),o=r(7583),s=r(9799),d=r(1510),l=r(4697),c=r(2468),u=r(7422),h=r(495),f=r(7440);function v(e){let{title:t,text:r="Check this out!",url:v,variant:p="ghost",size:g="icon",className:x,iconOnly:m=!0}=e,[b,k]=(0,i.useState)(!1),[y,w]=(0,i.useState)(!1),j=v?v.startsWith("http")?v:window.location.origin+v:window.location.href,z=encodeURIComponent(j);encodeURIComponent(t);let Z=encodeURIComponent(r),N=[{name:"LinkedIn",icon:a.Z,color:"hover:text-[#0077b5] hover:bg-[#0077b5]/10",href:"https://www.linkedin.com/sharing/share-offsite/?url=".concat(z)},{name:"WhatsApp",icon:o.Z,color:"hover:text-[#25D366] hover:bg-[#25D366]/10",href:"https://wa.me/?text=".concat(Z,"%20").concat(z)},{name:"X / Twitter",icon:s.Z,color:"hover:text-foreground hover:bg-foreground/10",href:"https://twitter.com/intent/tweet?text=".concat(Z,"&url=").concat(z)}],C=async()=>{if(navigator.share)try{await navigator.share({title:t,text:r,url:j})}catch(e){console.error("Native share failed:",e),k(!0)}else k(!0)};return(0,n.jsxs)("div",{className:"relative inline-block",children:[(0,n.jsxs)(h.z,{variant:p,size:g,className:(0,f.cn)("rounded-full transition-all active:scale-90",x),onClick:C,title:"Share",children:[(0,n.jsx)(d.Z,{size:"sm"===g?14:16}),!m&&(0,n.jsx)("span",{className:"ml-2",children:"Share"})]}),b&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"fixed inset-0 z-[100] bg-background/20 backdrop-blur-[2px]",onClick:()=>k(!1)}),(0,n.jsxs)("div",{className:"absolute right-0 bottom-full mb-3 z-[110] w-56 p-2 bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between px-3 py-2 mb-1 border-b border-border/50",children:[(0,n.jsx)("span",{className:"text-[10px] uppercase font-black tracking-widest text-muted-foreground",children:"Share Project"}),(0,n.jsx)("button",{onClick:()=>k(!1),className:"text-muted-foreground hover:text-foreground",children:(0,n.jsx)(l.Z,{size:14})})]}),(0,n.jsxs)("div",{className:"space-y-1",children:[N.map(e=>(0,n.jsxs)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:(0,f.cn)("flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all",e.color),onClick:()=>k(!1),children:[(0,n.jsx)(e.icon,{size:16}),(0,n.jsx)("span",{children:e.name})]},e.name)),(0,n.jsxs)("button",{onClick:()=>{navigator.clipboard.writeText(j),w(!0),setTimeout(()=>w(!1),2e3)},className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-primary/10 hover:text-primary transition-all text-left",children:[y?(0,n.jsx)(c.Z,{size:16,className:"text-emerald-500"}):(0,n.jsx)(u.Z,{size:16}),(0,n.jsx)("span",{children:y?"Copied!":"Copy Link"})]})]})]})]})]})}},495:function(e,t,r){r.d(t,{z:function(){return d}});var n=r(7437);r(2265);var i=r(3027),a=r(8534),o=r(7440);let s=(0,i.j)("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",{variants:{variant:{default:"bg-primary text-primary-foreground [a]:hover:bg-primary/80",outline:"border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",ghost:"hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",destructive:"bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",xs:"h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",sm:"h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",lg:"h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",icon:"size-8","icon-xs":"size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3","icon-sm":"size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg","icon-lg":"size-9"}},defaultVariants:{variant:"default",size:"default"}});function d(e){let{className:t,variant:r="default",size:i="default",asChild:d=!1,...l}=e,c=d?a.fC:"button";return(0,n.jsx)(c,{"data-slot":"button","data-variant":r,"data-size":i,className:(0,o.cn)(s({variant:r,size:i,className:t})),...l})}},7440:function(e,t,r){r.d(t,{cn:function(){return a}});var n=r(4839),i=r(6164);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.m6)((0,n.W)(t))}},8030:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(2265);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:d,className:l="",children:c,iconNode:u,...h}=e;return(0,n.createElement)("svg",{ref:t,...o,width:i,height:i,stroke:r,strokeWidth:d?24*Number(s)/Number(i):s,className:a("lucide",l),...h},[...u.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),d=(e,t)=>{let r=(0,n.forwardRef)((r,o)=>{let{className:d,...l}=r;return(0,n.createElement)(s,{ref:o,iconNode:t,className:a("lucide-".concat(i(e)),d),...l})});return r.displayName="".concat(e),r}},2468:function(e,t,r){r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},7592:function(e,t,r){r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},7422:function(e,t,r){r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]])},7218:function(e,t,r){r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]])},3274:function(e,t,r){r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},7583:function(e,t,r){r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]])},1510:function(e,t,r){r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]])},9799:function(e,t,r){r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]])},4697:function(e,t,r){r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},3027:function(e,t,r){r.d(t,{j:function(){return o}});var n=r(4839);let i=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,a=n.W,o=(e,t)=>r=>{var n;if((null==t?void 0:t.variants)==null)return a(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:o,defaultVariants:s}=t,d=Object.keys(o).map(e=>{let t=null==r?void 0:r[e],n=null==s?void 0:s[e];if(null===t)return null;let a=i(t)||i(n);return o[e][a]}),l=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return a(e,d,null==t?void 0:null===(n=t.compoundVariants)||void 0===n?void 0:n.reduce((e,t)=>{let{class:r,className:n,...i}=t;return Object.entries(i).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...s,...l}[t]):({...s,...l})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}}]);