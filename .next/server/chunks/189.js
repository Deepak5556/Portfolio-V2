"use strict";exports.id=189,exports.ids=[189],exports.modules={79320:(e,r,t)=>{t.d(r,{t:()=>x});var a=t(10326),i=t(62881);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,i.Z)("ChevronsLeft",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);var o=t(11890),s=t(39183);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let d=(0,i.Z)("ChevronsRight",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);var l=t(90772),c=t(77863);function x({currentPage:e,totalPages:r,onPageChange:t,className:i}){return r<=1?null:(0,a.jsxs)("div",{className:(0,c.cn)("flex items-center justify-center gap-2 mt-12 mb-8",i),children:[(0,a.jsxs)("div",{className:"flex items-center gap-1 group",children:[a.jsx(l.z,{variant:"outline",size:"icon",className:"h-9 w-9 border-border/50 hover:border-primary/50 disabled:opacity-30 rounded-xl transition-all",onClick:()=>t(1),disabled:1===e,children:a.jsx(n,{size:16})}),a.jsx(l.z,{variant:"outline",size:"icon",className:"h-9 w-9 border-border/50 hover:border-primary/50 disabled:opacity-30 rounded-xl transition-all",onClick:()=>t(e-1),disabled:1===e,children:a.jsx(o.Z,{size:16})})]}),a.jsx("div",{className:"flex items-center gap-1.5 mx-2",children:(()=>{let t=[];if(r<=5)for(let e=1;e<=r;e++)t.push(e);else{let a=Math.max(1,e-2),i=Math.min(r,a+5-1);i===r&&(a=Math.max(1,i-5+1));for(let e=a;e<=i;e++)t.push(e)}return t})().map(r=>a.jsx(l.z,{variant:e===r?"default":"outline",size:"icon",className:(0,c.cn)("h-9 w-9 rounded-xl transition-all font-bold text-xs",e===r?"shadow-lg shadow-primary/20 scale-110 z-10":"border-border/50 hover:border-primary/50 text-muted-foreground hover:text-foreground"),onClick:()=>t(r),children:r},r))}),(0,a.jsxs)("div",{className:"flex items-center gap-1 group",children:[a.jsx(l.z,{variant:"outline",size:"icon",className:"h-9 w-9 border-border/50 hover:border-primary/50 disabled:opacity-30 rounded-xl transition-all",onClick:()=>t(e+1),disabled:e===r,children:a.jsx(s.Z,{size:16})}),a.jsx(l.z,{variant:"outline",size:"icon",className:"h-9 w-9 border-border/50 hover:border-primary/50 disabled:opacity-30 rounded-xl transition-all",onClick:()=>t(r),disabled:e===r,children:a.jsx(d,{size:16})})]})]})}},56241:(e,r,t)=>{t.d(r,{ShareAction:()=>p});var a=t(10326),i=t(17577),n=t(32019),o=t(39730),s=t(74857),d=t(76993),l=t(94019),c=t(32933),x=t(17129),h=t(90772),m=t(77863);function p({title:e,text:r="Check this out!",url:t,variant:p="ghost",size:y="icon",className:f,iconOnly:u=!0}){let[b,g]=(0,i.useState)(!1),[v,k]=(0,i.useState)(!1),j=encodeURIComponent("");encodeURIComponent(e);let Z=encodeURIComponent(r),w=[{name:"LinkedIn",icon:n.Z,color:"hover:text-[#0077b5] hover:bg-[#0077b5]/10",href:`https://www.linkedin.com/sharing/share-offsite/?url=${j}`},{name:"WhatsApp",icon:o.Z,color:"hover:text-[#25D366] hover:bg-[#25D366]/10",href:`https://wa.me/?text=${Z}%20${j}`},{name:"X / Twitter",icon:s.Z,color:"hover:text-foreground hover:bg-foreground/10",href:`https://twitter.com/intent/tweet?text=${Z}&url=${j}`}],N=async()=>{if(navigator.share)try{await navigator.share({title:e,text:r,url:""})}catch(e){console.error("Native share failed:",e),g(!0)}else g(!0)};return(0,a.jsxs)("div",{className:"relative inline-block",children:[(0,a.jsxs)(h.z,{variant:p,size:y,className:(0,m.cn)("rounded-full transition-all active:scale-90",f),onClick:N,title:"Share",children:[a.jsx(d.Z,{size:"sm"===y?14:16}),!u&&a.jsx("span",{className:"ml-2",children:"Share"})]}),b&&(0,a.jsxs)(a.Fragment,{children:[a.jsx("div",{className:"fixed inset-0 z-[100] bg-background/20 backdrop-blur-[2px]",onClick:()=>g(!1)}),(0,a.jsxs)("div",{className:"absolute right-0 bottom-full mb-3 z-[110] w-56 p-2 bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between px-3 py-2 mb-1 border-b border-border/50",children:[a.jsx("span",{className:"text-[10px] uppercase font-black tracking-widest text-muted-foreground",children:"Share Project"}),a.jsx("button",{onClick:()=>g(!1),className:"text-muted-foreground hover:text-foreground",children:a.jsx(l.Z,{size:14})})]}),(0,a.jsxs)("div",{className:"space-y-1",children:[w.map(e=>(0,a.jsxs)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:(0,m.cn)("flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all",e.color),onClick:()=>g(!1),children:[a.jsx(e.icon,{size:16}),a.jsx("span",{children:e.name})]},e.name)),(0,a.jsxs)("button",{onClick:()=>{navigator.clipboard.writeText(""),k(!0),setTimeout(()=>k(!1),2e3)},className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-primary/10 hover:text-primary transition-all text-left",children:[v?a.jsx(c.Z,{size:16,className:"text-emerald-500"}):a.jsx(x.Z,{size:16}),a.jsx("span",{children:v?"Copied!":"Copy Link"})]})]})]})]})]})}},38141:(e,r,t)=>{t.d(r,{e:()=>n});var a=t(10326);t(17577);var i=t(77863);function n({children:e,className:r}){return a.jsx("p",{className:(0,i.cn)("text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.12em] mb-1",r),children:e})}},567:(e,r,t)=>{t.d(r,{C:()=>s});var a=t(10326);t(17577);var i=t(79360),n=t(77863);let o=(0,i.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground",secondary:"border-transparent bg-muted text-muted-foreground",outline:"border-border text-foreground"}},defaultVariants:{variant:"secondary"}});function s({className:e,variant:r,...t}){return a.jsx("div",{className:(0,n.cn)(o({variant:r}),e),...t})}},33071:(e,r,t)=>{t.d(r,{Ol:()=>s,SZ:()=>l,Zb:()=>o,aY:()=>c,eW:()=>x,ll:()=>d});var a=t(10326),i=t(17577),n=t(77863);let o=i.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,n.cn)("rounded-2xl border border-border bg-card text-card-foreground shadow-sm",e),...r}));o.displayName="Card";let s=i.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,n.cn)("flex flex-col gap-1.5 p-6",e),...r}));s.displayName="CardHeader";let d=i.forwardRef(({className:e,...r},t)=>a.jsx("h3",{ref:t,className:(0,n.cn)("text-base font-semibold leading-snug tracking-tight text-foreground",e),...r}));d.displayName="CardTitle";let l=i.forwardRef(({className:e,...r},t)=>a.jsx("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground leading-relaxed",e),...r}));l.displayName="CardDescription";let c=i.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,n.cn)("p-6 pt-0",e),...r}));c.displayName="CardContent";let x=i.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",e),...r}));x.displayName="CardFooter"},32933:(e,r,t)=>{t.d(r,{Z:()=>a});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(62881).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},11890:(e,r,t)=>{t.d(r,{Z:()=>a});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(62881).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},39183:(e,r,t)=>{t.d(r,{Z:()=>a});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(62881).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},44550:(e,r,t)=>{t.d(r,{Z:()=>a});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(62881).Z)("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]])},41137:(e,r,t)=>{t.d(r,{Z:()=>a});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(62881).Z)("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]])},4559:(e,r,t)=>{t.d(r,{Z:()=>a});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(62881).Z)("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]])},17129:(e,r,t)=>{t.d(r,{Z:()=>a});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(62881).Z)("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]])},29389:(e,r,t)=>{t.d(r,{Z:()=>a});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(62881).Z)("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]])},39730:(e,r,t)=>{t.d(r,{Z:()=>a});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(62881).Z)("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]])},21405:(e,r,t)=>{t.d(r,{Z:()=>a});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(62881).Z)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},88307:(e,r,t)=>{t.d(r,{Z:()=>a});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(62881).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},76993:(e,r,t)=>{t.d(r,{Z:()=>a});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(62881).Z)("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]])},33734:(e,r,t)=>{t.d(r,{Z:()=>a});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(62881).Z)("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]])}};