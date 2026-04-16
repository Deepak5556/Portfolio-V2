"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow
} from "@/components/ui/scroll-based-velocity";
import { Marquee } from "@/components/ui/marquee";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Tree, type TreeViewElement } from "@/components/ui/file-tree";
import dynamic from "next/dynamic";
const Globe = dynamic(() => import("@/components/ui/globe").then(m => m.Globe), {
  ssr: false,
  loading: () => <div className="w-full h-full animate-pulse bg-muted/20 rounded-full" />
});
import { Calendar } from "@/components/ui/calendar";

import {
  Code2, Palette, Sparkles, FileCode2, Layout, Image as ImageIcon, Terminal, Camera, Film,
  LayoutTemplate, Database, Smartphone, PenTool, ImagePlus, MonitorPlay, Video, Scissors
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// --- Velocity Scroll Component ---
export const ScrollVelocitySection = React.memo(function ScrollVelocitySection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 sm:py-20 z-20">
      <ScrollVelocityContainer className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em] leading-[1.3] opacity-20 uppercase pb-2">
        <ScrollVelocityRow baseVelocity={5} direction={1}>
          WEB DEV • MOBILE APPS • UI/UX • &nbsp;
        </ScrollVelocityRow>

        <ScrollVelocityRow baseVelocity={5} direction={-1}>
          VIDEO • PHOTO • EDITING • CREATIVITY • &nbsp;
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
});



// --- Bento Grid Demo ---
const files = [
  { name: "Fullstack_App.tsx", body: "Scalable React & Next.js architectures." },
  { name: "Backend_API.go", body: "High-performance microservices and logic." },
  { name: "Database_Schema.sql", body: "Optimized data structures and relations." },
  { name: "CI_CD_Build.yml", body: "Automated deployment pipelines." },
];

const treeElements: TreeViewElement[] = [
  {
    id: "src",
    type: "folder",
    name: "src",
    children: [
      { id: "components", type: "folder", name: "components" },
      { id: "app", type: "folder", name: "app" },
      { id: "page", name: "page.tsx" },
      { id: "layout", name: "layout.tsx" },
    ],
  },
];

const features = [
  {
    Icon: Terminal,
    name: "Software Development",
    description: (
      <div className="flex flex-col mt-1">
        <p>
          Building <span className="text-orange-500 font-bold">scalable, high-performance</span>{" "}
          applications with clean architecture and modern technologies.
        </p>
        <div className="flex flex-wrap gap-2 mt-3 pointer-events-auto">
          {[
            { tag: "Frontend", icon: LayoutTemplate },
            { tag: "Backend", icon: Database },
            { tag: "App Development", icon: Smartphone }
          ].map((item) => (
            <span key={item.tag} className="px-3 py-1 text-[10px] sm:text-[11px] font-medium tracking-wide rounded-full bg-primary/5 hover:bg-primary/10 border border-primary/10 text-foreground/70 transition-all duration-300 ease-out hover:scale-[1.05] hover:shadow-md md:hover:shadow-primary/5 shadow-sm flex items-center gap-1.5 cursor-default">
              <item.icon size={12} className="text-primary/60" />
              {item.tag}
            </span>
          ))}
        </div>
      </div>
    ),
    href: "/software",
    cta: "View Projects",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        {/* Blurred code editor UI */}
        <div className="absolute inset-0 opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-700 bg-black/10 dark:bg-black/40">
          <div className="w-full h-full p-4 font-mono text-[8px] sm:text-[10px] text-primary/40 flex flex-col gap-1 tracking-widest blur-[1px]">
            <div><span className="text-orange-500">import</span> React <span className="text-orange-500">from</span> "react";</div>
            <div><span className="text-orange-500">export const</span> App = () =&gt; {"{"}</div>
            <div className="pl-4"><span className="text-violet-400">const</span> [data, setData] = useState&lt;<span className="text-cyan-400">any</span>&gt;([]);</div>
            <div className="pl-4"><span className="text-violet-400">return</span> (</div>
            <div className="pl-8">&lt;<span className="text-orange-400">Dashboard</span> data={"{"}data{"}"} /&gt;</div>
            <div className="pl-4">);</div>
            <div>{"}"}</div>
            <div className="mt-4 text-emerald-500/50">~ $ npm run dev</div>
            <div className="text-emerald-500/50">ready - started server on 0.0.0.0:3000</div>
          </div>
        </div>

        {/* Floating UI Mockup Cards */}
        <div className="absolute inset-0 flex items-center justify-center">

          {/* API Response Mock */}
          <div className="absolute top-4 left-4 sm:left-6 w-[120px] sm:w-[150px] rounded-xl border border-border/30 bg-card/60 backdrop-blur-md shadow-xl p-3 transform -rotate-3 opacity-30 group-hover:opacity-70 group-hover:translate-y-[-4px] group-hover:rotate-0 transition-all duration-500 ease-out font-mono text-[6px] sm:text-[8px] leading-relaxed">
            <div className="text-orange-400">{"{"}</div>
            <div className="pl-2"><span className="text-violet-400">"status"</span>: <span className="text-emerald-400">200</span>,</div>
            <div className="pl-2"><span className="text-violet-400">"message"</span>: <span className="text-emerald-400">"Success"</span>,</div>
            <div className="pl-2"><span className="text-violet-400">"data"</span>: {"["}</div>
            <div className="pl-4 text-muted-foreground">...items</div>
            <div className="pl-2">{"]"}</div>
            <div className="text-orange-400">{"}"}</div>
          </div>

          {/* Dashboard Widget */}
          <div className="absolute bottom-6 right-4 sm:right-8 w-[100px] sm:w-[130px] rounded-xl border border-border/30 bg-card/60 backdrop-blur-md shadow-xl p-3 transform rotate-6 opacity-30 group-hover:opacity-70 group-hover:translate-y-[4px] group-hover:-rotate-2 transition-all duration-500 ease-out delay-75">
            <div className="flex justify-between items-center mb-2">
              <div className="w-12 h-1.5 rounded bg-primary/20" />
              <div className="w-4 h-1.5 rounded bg-emerald-500/40" />
            </div>
            <div className="flex items-end gap-1 h-8 mt-2">
              <div className="flex-1 bg-primary/20 rounded-t-sm h-[30%]" />
              <div className="flex-1 bg-primary/30 rounded-t-sm h-[50%]" />
              <div className="flex-1 bg-primary/40 rounded-t-sm h-[70%]" />
              <div className="flex-1 bg-orange-500/60 rounded-t-sm h-[100%]" />
              <div className="flex-1 bg-primary/30 rounded-t-sm h-[60%]" />
            </div>
          </div>

          {/* Code Snippet Card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-1/2 w-[110px] sm:w-[140px] rounded-xl border border-border/30 bg-card/60 backdrop-blur-md shadow-xl p-2 transform rotate-2 opacity-20 group-hover:opacity-60 group-hover:translate-x-[-8px] transition-all duration-500 ease-out delay-100">
            <div className="flex gap-1 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400/80" />
            </div>
            <div className="space-y-1.5">
              <div className="w-3/4 h-1 rounded bg-orange-500/30" />
              <div className="w-full h-1 rounded bg-primary/10" />
              <div className="w-5/6 h-1 rounded bg-primary/10" />
            </div>
          </div>

          {/* Developer Icons */}
          <div className="absolute bottom-10 left-8 opacity-[0.05] group-hover:opacity-[0.15] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
            <Terminal size={32} className="text-primary" />
          </div>
          <div className="absolute top-12 right-10 opacity-[0.05] group-hover:opacity-[0.15] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
            <Code2 size={28} className="text-orange-500" />
          </div>
        </div>

        {/* Glassmorphism panel behind content */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-background/90 via-background/60 to-transparent backdrop-blur-[2px]" />
      </div>
    ),
  },
  {
    Icon: Palette,
    name: "Designs",
    description: (
      <div className="flex flex-col mt-1">
        <p>
          Crafting <span className="text-orange-500 font-bold">pixel-perfect</span> user interfaces and{" "}
          <span className="text-orange-500 font-bold">intuitive</span> user experiences.
        </p>
        <div className="flex flex-wrap gap-2 mt-3 pointer-events-auto">
          {[
            { tag: "UI/UX", icon: PenTool },
            { tag: "Poster Making", icon: ImagePlus },
            { tag: "Thumbnail Design", icon: MonitorPlay }
          ].map((item) => (
            <span key={item.tag} className="px-3 py-1 text-[10px] sm:text-[11px] font-medium tracking-wide rounded-full bg-primary/5 hover:bg-primary/10 border border-primary/10 text-foreground/70 transition-all duration-300 ease-out hover:scale-[1.05] hover:shadow-md md:hover:shadow-primary/5 shadow-sm flex items-center gap-1.5 cursor-default">
              <item.icon size={12} className="text-primary/60" />
              {item.tag}
            </span>
          ))}
        </div>
      </div>
    ),
    href: "/designs",
    cta: "Explore Gallery",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-700">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-orange-500/40 blur-[80px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-500/30 blur-[80px]" />
          <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-cyan-400/25 blur-[60px]" />
        </div>

        {/* Faint grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="design-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#design-grid)" />
        </svg>

        {/* Floating UI Mockup Cards */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Dashboard Card */}
          <div className="absolute top-6 right-8 w-[140px] sm:w-[180px] rounded-xl border border-border/30 bg-card/60 backdrop-blur-md shadow-xl p-3 transform rotate-3 opacity-30 group-hover:opacity-60 group-hover:translate-y-[-6px] group-hover:rotate-1 transition-all duration-500 ease-out">
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
              <div className="flex-1" />
              <div className="w-8 h-1 rounded bg-muted-foreground/10" />
            </div>
            <div className="w-full h-1.5 rounded bg-primary/10 mb-1.5" />
            <div className="w-3/4 h-1.5 rounded bg-primary/8 mb-3" />
            <div className="flex items-end gap-1 h-10">
              <div className="flex-1 bg-orange-500/20 rounded-sm h-[40%]" />
              <div className="flex-1 bg-orange-500/30 rounded-sm h-[65%]" />
              <div className="flex-1 bg-orange-500/40 rounded-sm h-[50%]" />
              <div className="flex-1 bg-orange-500/50 rounded-sm h-[85%]" />
              <div className="flex-1 bg-orange-500/35 rounded-sm h-[70%]" />
              <div className="flex-1 bg-orange-500/25 rounded-sm h-[55%]" />
            </div>
          </div>

          {/* Mobile Screen Card */}
          <div className="absolute bottom-8 left-6 w-[90px] sm:w-[110px] rounded-2xl border border-border/30 bg-card/60 backdrop-blur-md shadow-xl p-2 transform -rotate-6 opacity-25 group-hover:opacity-55 group-hover:translate-y-[6px] group-hover:-rotate-3 transition-all duration-500 ease-out delay-75">
            <div className="w-6 h-0.5 rounded bg-muted-foreground/15 mx-auto mb-2" />
            <div className="w-full h-1 rounded bg-primary/10 mb-1" />
            <div className="w-full h-1 rounded bg-primary/7 mb-1" />
            <div className="w-2/3 h-1 rounded bg-primary/5 mb-2" />
            <div className="w-full aspect-[4/3] rounded-lg bg-gradient-to-br from-orange-500/10 to-violet-500/10 mb-2 flex items-center justify-center">
              <Layout size={12} className="text-primary/20" />
            </div>
            <div className="flex gap-1">
              <div className="flex-1 h-4 rounded bg-orange-500/15" />
              <div className="flex-1 h-4 rounded bg-primary/8" />
            </div>
            <div className="flex justify-around mt-2">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/10" />
              <div className="w-2 h-2 rounded-full bg-orange-500/20" />
              <div className="w-2 h-2 rounded-full bg-muted-foreground/10" />
              <div className="w-2 h-2 rounded-full bg-muted-foreground/10" />
            </div>
          </div>

          {/* Component Card */}
          <div className="absolute top-1/2 right-4 sm:right-12 -translate-y-1/2 w-[100px] sm:w-[130px] rounded-xl border border-border/30 bg-card/60 backdrop-blur-md shadow-lg p-2.5 transform rotate-1 opacity-20 group-hover:opacity-50 group-hover:translate-x-[-4px] group-hover:rotate-0 transition-all duration-500 ease-out delay-100">
            <div className="w-full h-1.5 rounded bg-primary/10 mb-1.5" />
            <div className="w-2/3 h-1 rounded bg-muted-foreground/8 mb-2.5" />
            <div className="flex gap-1.5 mb-2">
              <div className="flex-1 h-5 rounded-md bg-orange-500/20 flex items-center justify-center">
                <div className="w-4 h-0.5 rounded bg-orange-500/40" />
              </div>
              <div className="flex-1 h-5 rounded-md border border-primary/10 flex items-center justify-center">
                <div className="w-4 h-0.5 rounded bg-primary/15" />
              </div>
            </div>
            <div className="w-full h-6 rounded-md bg-gradient-to-r from-primary/5 to-primary/10 flex items-center px-2">
              <div className="w-2 h-2 rounded-full bg-primary/15 mr-1.5" />
              <div className="flex-1 h-0.5 rounded bg-primary/10" />
            </div>
          </div>

          {/* Design Tool Icons */}
          <div className="absolute top-10 left-10 opacity-[0.06] group-hover:opacity-[0.15] transition-all duration-500 group-hover:scale-110">
            {/* Pen Tool Cursor */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" />
              <circle cx="11" cy="11" r="2" />
            </svg>
          </div>

          <div className="absolute bottom-12 right-16 opacity-[0.05] group-hover:opacity-[0.12] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
            {/* Grid/Layout Icon */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-orange-500" stroke="currentColor" strokeWidth="1">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </div>

          {/* Wireframe ruler accents */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/[0.06] to-transparent" />
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-primary/[0.06] to-transparent" />
        </div>

        {/* Glassmorphism panel behind content */}
        <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-background/80 via-background/40 to-transparent backdrop-blur-[2px]" />
      </div>
    ),
  },
  {
    Icon: Camera,
    name: "Visual Art",
    description: (
      <div className="flex flex-col mt-1">
        <p>
          Crafting <span className="text-orange-500 font-bold">compelling visuals</span> through photography, videography, and professional editing that brings stories to life.
        </p>
        <div className="flex flex-wrap gap-2 mt-3 pointer-events-auto">
          {[
            { tag: "Photography", icon: Camera },
            { tag: "Videography", icon: Film },
            { tag: "Photo Editing", icon: ImagePlus },
            { tag: "Video Editing", icon: Scissors }
          ].map((item) => (
            <span key={item.tag} className="px-3 py-1 text-[10px] sm:text-[11px] font-medium tracking-wide rounded-full bg-primary/5 hover:bg-primary/10 border border-primary/10 text-foreground/70 transition-all duration-300 ease-out hover:scale-[1.05] hover:shadow-md md:hover:shadow-primary/5 shadow-sm flex items-center gap-1.5 cursor-default">
              <item.icon size={12} className="text-primary/60" />
              {item.tag}
            </span>
          ))}
        </div>
      </div>
    ),
    href: "/media",
    cta: "Watch Reels",
    className: "col-span-3 lg:col-span-3",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft gradient overlays & blur */}
        <div className="absolute inset-0 opacity-[0.1] group-hover:opacity-[0.15] transition-opacity duration-700">
          <div className="absolute top-[-30%] right-[-10%] w-[50%] h-[70%] rounded-full bg-blue-500/30 blur-[100px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] rounded-full bg-purple-500/20 blur-[80px]" />
          <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-orange-500/20 blur-[60px]" />
        </div>

        {/* Film grain texture */}
        <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        {/* Floating Elements */}
        <div className="absolute inset-0 flex items-center justify-center">

          {/* Photo Frame Mockup */}
          <div className="absolute top-8 left-12 sm:left-24 w-[100px] sm:w-[130px] p-2 rounded-sm border-4 border-white/10 bg-black/20 backdrop-blur-sm shadow-xl transform rotate-6 opacity-30 group-hover:opacity-70 group-hover:translate-y-[-8px] group-hover:rotate-3 transition-all duration-500 ease-out">
            <div className="w-full aspect-square bg-gradient-to-tr from-orange-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden relative">
              <div className={`absolute inset-0 opacity-50 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)"/%3E%3C/svg%3E')]`} />
              <ImageIcon size={20} className="text-primary/30" />
            </div>
          </div>

          {/* Video Timeline Strip */}
          <div className="absolute bottom-16 right-12 sm:right-24 w-[160px] sm:w-[220px] h-[40px] sm:h-[50px] rounded-lg border border-border/30 bg-card/60 backdrop-blur-md shadow-xl p-1.5 transform -rotate-2 opacity-30 group-hover:opacity-70 group-hover:translate-y-[6px] group-hover:-rotate-1 transition-all duration-500 ease-out delay-75 flex gap-1 items-center">
            <div className="w-1.5 h-full rounded-sm bg-orange-500/60" />
            <div className="flex-1 h-full rounded-sm bg-primary/10 flex flex-col justify-between py-0.5 px-1">
              <div className="w-full h-1/2 flex items-center gap-1 overflow-hidden">
                <div className="h-full w-1/3 bg-blue-500/20 rounded-sm" />
                <div className="h-full w-1/4 bg-purple-500/20 rounded-sm" />
                <div className="h-full w-2/3 bg-orange-500/20 rounded-sm" />
              </div>
              <div className="w-full h-[2px] bg-primary/5 flex items-center justify-between">
                {[...Array(8)].map((_, i) => <div key={i} className="w-[1px] h-[2px] bg-primary/20" />)}
              </div>
            </div>
            <div className="w-6 h-full rounded-sm bg-primary/5 flex items-center justify-center">
              <Film size={12} className="text-primary/40" />
            </div>
          </div>

          {/* Color Grading Panel */}
          <div className="absolute top-1/2 left-1/2 translate-x-4 -translate-y-[60%] w-[110px] sm:w-[140px] rounded-xl border border-border/30 bg-card/60 backdrop-blur-md shadow-xl p-2 transform -rotate-3 opacity-20 group-hover:opacity-60 group-hover:translate-x-[8px] transition-all duration-500 ease-out delay-100">
            <div className="flex justify-between items-center mb-2">
              <div className="w-10 h-1.5 rounded bg-primary/20" />
              <div className="flex gap-0.5">
                <div className="w-2 h-2 rounded-full border border-red-400/50" />
                <div className="w-2 h-2 rounded-full border border-green-400/50" />
                <div className="w-2 h-2 rounded-full border border-blue-400/50" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1 h-1.5 rounded-full bg-primary/10 relative">
                <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-500/60" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1 h-1.5 rounded-full bg-primary/10 relative">
                <div className="absolute left-[70%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500/60" />
              </div>
            </div>
          </div>

          {/* Creative Tools Icons */}
          <div className="absolute bottom-10 left-16 opacity-[0.05] group-hover:opacity-[0.15] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
            <Film size={36} className="text-purple-500" />
          </div>
          <div className="absolute top-16 right-16 opacity-[0.05] group-hover:opacity-[0.15] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
            <Camera size={32} className="text-orange-500" />
          </div>
        </div>



        {/* Glassmorphism panel behind content */}
        <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-background/90 via-background/60 to-transparent backdrop-blur-[2px]" />
      </div>
    ),
  },
];

export const BentoSection = React.memo(function BentoSection() {
  return (
    <div className="py-10">
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
});

// --- Globe Demo ---
export const GlobeSection = React.memo(function GlobeSection() {
  return (
    <div className="relative flex flex-col md:flex-row items-center gap-10 py-20 overflow-hidden">
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight leading-[0.9]">
          Freelance Developer<br /><span className="text-orange-500 not-italic">Available 24/7.</span>
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground/60 font-medium leading-relaxed max-w-lg border-l-2 border-orange-500/20 pl-6 italic">
          I help businesses and individuals build high-quality web and mobile applications.
          Available anytime for freelance projects with fast response and reliable delivery.
        </p>
        <div className="flex gap-8 pt-2">
          <div className="text-left">
            <p className="text-2xl sm:text-3xl font-black text-orange-500 uppercase italic">24/7</p>
            <p className="text-[9px] uppercase font-black text-muted-foreground/40 tracking-[0.2em] mt-1">Availability</p>
          </div>
          <div className="h-10 w-px bg-white/5 my-auto" />
          <div className="text-left">
            <p className="text-2xl sm:text-3xl font-black text-orange-500 uppercase italic">1-2 Hour</p>
            <p className="text-[9px] uppercase font-black text-muted-foreground/40 tracking-[0.2em] mt-1">Response Time</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button size="lg" asChild className="sm:px-10 h-12 rounded-xl">
            <Link href="/contact">Hire Me Now</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="sm:px-10 h-12 rounded-xl">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 aspect-square flex items-center justify-center overflow-hidden rounded-[2rem] border border-border/40 bg-card/10 backdrop-blur-xl shadow-2xl p-10 group">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <Globe className="top-10 transition-transform duration-700 group-hover:scale-110" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.1),rgba(255,255,255,0))]" />
      </div>
    </div>
  );
});

export const PartnersSection = React.memo(function PartnersSection() {
  const partners = [
    { name: "Team Catom", logo: "https://plain-apac-prod-public.komododecks.com/202604/16/IbiFpL4Zw6DtBGnTpcWd/image.jpg" },
    { name: "Hexoran", logo: "https://www.hexoran.com/favicon.ico" },
  ];

  return (
    <div className="py-10 border-t border-border/10 mt-10">
      <div className="mb-8 pl-1 border-l-2 border-orange-500/50">
        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight italic ml-4">
          PARTNERS & COLLABORATIONS<span className="text-orange-500 not-italic">.</span>
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground/60 font-medium leading-relaxed max-w-lg mt-1 ml-4 uppercase tracking-widest">
          Working alongside teams, startups, and creators on freelance and collaborative projects.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {partners.map((partner, idx) => (
          <div key={idx} className="group flex items-center justify-center p-6 sm:p-8 rounded-xl bg-card/40 backdrop-blur-md border border-border/40 hover:border-primary/20 transition-all duration-300 hover:scale-[1.05] hover:shadow-md">
            <div className="opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-3">
              <div className="text-muted-foreground group-hover:text-primary transition-colors flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 relative">
                <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain relative z-10" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                {/* Fallback text if image fails to load or acts as placeholder */}

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export const WorkedWithSection = React.memo(function WorkedWithSection() {
  const clients = [
    { name: "WebYorn", duration: "Apr 2026", work: "SEO Optimization", logo: "https://webyorn.com/assets/WebYornLogo-DUIEdjlX.png" },
  ];

  return (
    <div className="py-10">
      <div className="mb-8 pl-1 border-l-2 border-orange-500/50">
        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight italic ml-4">
          WORKED WITH<span className="text-orange-500 not-italic">.</span>
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground/60 font-medium leading-relaxed max-w-lg mt-1 ml-4 uppercase tracking-widest">
          Companies and clients I’ve delivered real-world projects for.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {clients.map((client, idx) => (
          <div key={idx} className="group relative flex items-center justify-center p-6 sm:p-8 rounded-xl bg-card/40 backdrop-blur-md border border-border/40 hover:border-primary/20 transition-all duration-300 hover:scale-[1.05] hover:shadow-md overflow-hidden cursor-pointer">

            {/* Logo Display */}
            <div className="opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-3">
              <div className="text-muted-foreground group-hover:text-primary transition-colors flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 relative">
                <img src={client.logo} alt={client.name} className="w-full h-full object-contain relative z-10" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                {/* Fallback text if image fails to load or acts as placeholder */}
                <span className="absolute text-[10px] sm:text-xs font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground/80 text-center opacity-50 group-hover:opacity-100 transition-opacity z-0">{client.name}</span>
              </div>
            </div>

            {/* Hover Tooltip Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end pb-6 items-center opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out bg-background/90 backdrop-blur-md px-4 shadow-xl">
              <h4 className="text-xs sm:text-sm font-black uppercase tracking-tight text-foreground text-center">{client.name}</h4>
              <p className="text-[9px] sm:text-[10px] font-bold text-orange-500 mt-1 uppercase tracking-widest text-center">{client.duration}</p>
              <div className="w-8 h-px bg-border my-2" />
              <p className="text-[10px] sm:text-[11px] font-medium text-muted-foreground text-center line-clamp-2 leading-tight">{client.work}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
