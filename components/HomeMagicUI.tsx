"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow
} from "@/components/ui/scroll-based-velocity";
import { Marquee } from "@/components/ui/marquee";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import dynamic from "next/dynamic";
const Globe = dynamic(() => import("@/components/ui/globe").then(m => m.Globe), {
  ssr: false,
  loading: () => <div className="w-full h-full animate-pulse bg-muted/20 rounded-full" />
});
import { Calendar } from "@/components/ui/calendar";

import {
  Code2, Palette, Sparkles, FileCode2, Layout, Image as ImageIcon
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

const features = [
  {
    Icon: Code2,
    name: "Software Development",
    description: "Architecting robust, scalable, and high-performance applications with modern stacks.",
    href: "/software",
    cta: "View Projects",
    className: "col-span-3 lg:col-span-1",
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
              <FileCode2 size={12} className="text-primary" />
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
  {
    Icon: Palette,
    name: "Designs",
    description: "Crafting pixel-perfect user interfaces and intuitive user experiences.",
    href: "/designs",
    cta: "Explore Gallery",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
        <Layout size={120} className="text-primary animate-pulse" />
      </div>
    ),
  },
  {
    Icon: Sparkles,
    name: "Visual Art",
    description: "Merging creativity with technology through photography and digital arts.",
    href: "/media",
    cta: "Watch Reels",
    className: "col-span-3 lg:col-span-3",
    background: (
      <div className="absolute top-10 left-10 opacity-10 group-hover:opacity-20 transition-opacity">
        <ImageIcon size={180} className="text-primary -rotate-12" />
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
