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
import { AnimatedListDemo } from "@/components/AnimatedListDemo";

// --- Velocity Scroll Component ---
export function ScrollVelocitySection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 sm:py-20">
      <ScrollVelocityContainer className="text-4xl font-black tracking-[-0.05em] md:text-7xl md:leading-[5rem] opacity-20 uppercase">
        <ScrollVelocityRow baseVelocity={5} direction={1}>
           FULL STACK DEVELOPER • UI/UX DESIGNER • OPEN SOURCE CONTRIBUTOR • &nbsp;
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={5} direction={-1}>
           NEXT.JS • REACT • FLUTTER • NODE.JS • MONGODB • &nbsp;
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
}

// --- Marquee Review Demo ---
const reviews = [
  {
    name: "Client Endorsement",
    username: "@tech_lead",
    body: "Deepak's ability to seamlessly bridge complex backend architecture and pixel-perfect UX is outstanding.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Startup CTO",
    username: "@startup_cto",
    body: "Working with Deepak was a breeze. He delivered our Next.js MVP weeks ahead of schedule.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Senior UI Designer",
    username: "@ui_lead",
    body: "As a designer, I love handing off to Deepak. He respects the design system and executes flawlessly.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Database Architect",
    username: "@db_admin",
    body: "Deepak has an incredibly deep understanding of the MERN stack. His optimizations are top-notch.",
    img: "https://avatar.vercel.sh/jane",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-2xl border p-4 sm:p-6 transition-all",
        "border-border/50 bg-muted/20 hover:bg-muted/40",
        "dark:bg-card/20 dark:hover:bg-card/40 shadow-sm"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full bg-primary/10 p-1" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-black dark:text-white uppercase tracking-tight">
            {name}
          </figcaption>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-xs sm:text-sm font-medium leading-relaxed italic text-muted-foreground">"{body}"</blockquote>
    </figure>
  );
};

export function MarqueeSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s] mt-4">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
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
    Icon: BellIcon,
    name: "Real-Time Systems",
    description: "WebSockets and push notifications for instant data sync.",
    href: "/contact",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
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
