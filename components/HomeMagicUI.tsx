"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow
} from "@/components/ui/scroll-based-velocity";
import { Marquee } from "@/components/ui/marquee";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Globe } from "@/components/ui/globe";
import { Calendar } from "@/components/ui/calendar";

import {
  FileTextIcon, BellIcon
} from "lucide-react";

// --- Velocity Scroll Component ---
export function ScrollVelocitySection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 sm:py-20 z-20">
      <ScrollVelocityContainer className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em] leading-[1.3] opacity-20 uppercase pb-2">
        <ScrollVelocityRow baseVelocity={5} direction={1}>
          FULL STACK DEVELOPER • UI/UX DESIGNER • APP DEVELOPER • &nbsp;
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={5} direction={-1}>
          MERN • FLUTTER • PHOTOSHOP • AFTER EFFECTS • &nbsp;
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
}



// --- Bento Grid Demo ---
const files = [
  { name: "System_Arch.pdf", body: "High-level design docs for scalable microservices." },
  { name: "API_Endpoints.json", body: "RESTful and GraphQL schema configurations." },
  { name: "App_Wireframes.fig", body: "Figma mockups and user journey flows." },
  { name: "CI_CD_Pipeline.yml", body: "Automated build and testing deployments." },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Architecture & Docs",
    description: "Detailed technical documentation for every architectural decision.",
    href: "/projects",
    cta: "Learn more",
    className: "col-span-3",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-border/50 bg-background/50 backdrop-blur-sm",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-[10px] font-black uppercase tracking-tight truncate">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-[9px] font-medium leading-tight text-muted-foreground">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
];

export function BentoSection() {
  return (
    <div className="py-10">
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

// --- Globe Demo ---
export function GlobeSection() {
  return (
    <div className="relative flex flex-col md:flex-row items-center gap-10 py-20 overflow-hidden">
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">Global Engineering<br /><span className="text-orange-500">Connectivity.</span></h3>
        <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed max-w-lg">
          I architect 100% cloud-native solutions that are geo-distributed and highly available.
          My applications leverage global edge networks for low-latency performance worldwide.
        </p>
        <div className="flex gap-8 pt-4">
          <div className="text-left">
            <p className="text-3xl font-black text-primary">0ms</p>
            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mt-1">Edge Latency</p>
          </div>
          <div className="h-10 w-px bg-border my-auto opacity-50" />
          <div className="text-left">
            <p className="text-3xl font-black text-primary">24/7</p>
            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mt-1">Reliability</p>
          </div>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 aspect-square flex items-center justify-center overflow-hidden rounded-[2rem] border border-border/40 bg-card/10 backdrop-blur-xl shadow-2xl p-10 group">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <Globe className="top-10 transition-transform duration-700 group-hover:scale-110" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.1),rgba(255,255,255,0))]" />
      </div>
    </div>
  );
}
