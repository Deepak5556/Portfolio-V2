"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { 
  Server, Smartphone, Lock, Database, Globe, Cloud, Zap, 
  Terminal, ShieldCheck, Layers, Boxes, Network
} from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { 
    className?: string; 
    children?: React.ReactNode; 
    label?: string;
  }
>(({ className, children, label }, ref) => {
  return (
    <div className="flex flex-col items-center gap-2 group/node">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 sm:size-14 items-center justify-center rounded-2xl border-2 bg-background p-3 shadow-lg transition-all duration-500 group-hover/node:scale-110 group-hover/node:shadow-primary/20 group-hover/node:border-primary/40",
          className,
        )}
      >
        {children}
      </div>
      {label && (
        <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-widest text-muted-foreground/60 group-hover/node:text-primary transition-colors duration-500 w-max">{label}</span>
      )}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);
  const authRef = useRef<HTMLDivElement>(null);
  const dbRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-[2.5rem] bg-background/50 p-6 sm:p-10 md:shadow-2xl border border-border/40 group/workflow",
        className,
      )}
      ref={containerRef}
    >
      {/* ── Background Redesign ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent opacity-0 group-hover/workflow:opacity-100 transition-opacity duration-1000" />
        
        {/* Soft Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        
        {/* Dotted Grid Pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, 
          backgroundSize: '24px 24px',
          opacity: 0.05
        }} />
      </div>

      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-6 sm:gap-10 relative z-10">
        {/* Left: Input Nodes */}
        <div className="flex flex-col justify-center gap-6 sm:gap-8">
          <Circle ref={clientRef} label="Web / Mobile" className="border-blue-500/20 bg-blue-500/5">
            <Smartphone className="text-blue-500" size={24} />
          </Circle>
          <Circle ref={authRef} label="Auth / IAM" className="border-emerald-500/20 bg-emerald-500/5">
            <Lock className="text-emerald-500" size={24} />
          </Circle>
          <Circle ref={dbRef} label="Database" className="border-orange-500/20 bg-orange-500/5">
            <Database className="text-orange-500" size={24} />
          </Circle>
          <Circle ref={apiRef} label="Ext APIs" className="border-violet-500/20 bg-violet-500/5">
            <Network className="text-violet-500" size={24} />
          </Circle>
        </div>
        
        {/* Center: Logic Node */}
        <div className="flex flex-col justify-center">
          <div className="relative">
            {/* Core Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full scale-150 animate-pulse" />
            <Circle ref={coreRef} className="size-20 sm:size-24 border-primary/50 bg-card shadow-2xl shadow-primary/20" label="API CORE">
              <Server className="text-primary" size={36} />
            </Circle>
          </div>
        </div>

        {/* Right: Output Node */}
        <div className="flex flex-col justify-center">
          <Circle ref={cloudRef} label="Cloud / Deployment" className="border-sky-500/20 bg-sky-500/5">
            <Cloud className="text-sky-500" size={24} />
          </Circle>
        </div>
      </div>

      {/* ── CONNECTION LINES (Animated Beams) ── */}
      {/* All beams flow from sources to core */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={clientRef}
        toRef={coreRef}
        duration={5}
        curvature={-40}
        pathColor="currentColor"
        gradientStartColor="var(--primary)"
        gradientStopColor="var(--primary)"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={authRef}
        toRef={coreRef}
        duration={5}
        curvature={-20}
        pathColor="currentColor"
        gradientStartColor="var(--primary)"
        gradientStopColor="#10b981"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={dbRef}
        toRef={coreRef}
        duration={5}
        curvature={20}
        pathColor="currentColor"
        gradientStartColor="var(--primary)"
        gradientStopColor="#f97316"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={apiRef}
        toRef={coreRef}
        duration={5}
        curvature={40}
        pathColor="currentColor"
        gradientStartColor="var(--primary)"
        gradientStopColor="#8b5cf6"
      />
      
      {/* Flow from core to deployment */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={coreRef}
        toRef={cloudRef}
        duration={5}
        pathColor="currentColor"
        gradientStartColor="var(--primary)"
        gradientStopColor="#0ea5e9"
      />
    </div>
  );
}
