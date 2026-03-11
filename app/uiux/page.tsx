"use client";

import React, { useState, useMemo } from "react";
import {
  Card, CardHeader, CardTitle, CardDescription, CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Figma, Info } from "lucide-react";
import { SectionLabel } from "@/components/Shared";
import { figmaProjects } from "@/lib/data";
import { ShareAction } from "@/components/ShareAction";
import { Pagination } from "@/components/Pagination";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Meteors } from "@/components/ui/meteors";
import { WordRotate } from "@/components/ui/word-rotate";

const ITEMS_PER_PAGE = 10;

/* ── Design Tool Icons ── */
const Icons = {
  figma: () => (
    <svg width="100%" height="100%" viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff" />
    </svg>
  ),
  canva: () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#00C4CC" />
      <path d="M15.59 10.41c-.36-.77-1.02-1.19-1.72-1.19-.84 0-1.56.6-2.04 1.32-.36.54-.6 1.2-.72 1.86-.06.36-.12.72-.12 1.08 0 .84.36 1.56 1.14 1.56.54 0 1.02-.36 1.38-.78.12-.18.24-.36.3-.54.06-.12.12-.18.24-.18.18 0 .24.18.18.42-.12.42-.42.96-.84 1.38-.48.48-1.08.78-1.74.78-1.32 0-2.16-1.08-2.16-2.52 0-1.08.36-2.22 1.02-3.12.78-1.08 1.86-1.8 3.06-1.8 1.02 0 1.86.54 2.28 1.38.12.24.06.48-.12.48-.12 0-.18-.06-.24-.13z" fill="white" />
    </svg>
  ),
  adobeXd: () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#FF61F6" />
      <path d="M7.5 7.5l3.5 4.5-3.5 4.5h2.5l2.2-3 2.2 3H17l-3.5-4.5L17 7.5h-2.5l-2.2 3-2.2-3H7.5z" fill="white" />
    </svg>
  ),
  photoshop: () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#31A8FF" />
      <path d="M7 16.5V7.8c0-.1.1-.2.2-.2.3 0 .6 0 1.1-.1.5 0 1-.1 1.6-.1 1.3 0 2.3.3 2.9.9.5.5.8 1.2.8 2 0 .6-.2 1.2-.5 1.7-.4.5-.9.9-1.5 1.1-.7.3-1.4.4-2.2.4H8.6v3h-1.5zm1.5-4.4h.9c.5 0 .9-.1 1.3-.2.3-.1.6-.3.8-.6.2-.3.3-.6.3-1 0-.6-.2-1-.6-1.3-.4-.3-1-.4-1.7-.4-.3 0-.6 0-.8 0h-.2v3.5zM14.4 14.2c.3.3.8.5 1.4.5.4 0 .8-.1 1.1-.3.3-.2.5-.4.6-.6h1.1c-.3.7-.6 1.2-1.1 1.5-.5.4-1.1.5-1.8.5-.5 0-1-.1-1.4-.3-.4-.2-.8-.5-1-.9-.3-.4-.4-.9-.4-1.5 0-.6.1-1.1.4-1.5.3-.4.6-.8 1.1-1 .5-.2.9-.3 1.4-.3.6 0 1.1.1 1.5.4.4.3.7.6.9 1.1.2.5.3 1 .3 1.5h-4.2c0 .4.2.7.4.9h.2zm2.5-1.5c0-.4-.2-.7-.4-.9-.3-.2-.6-.3-1-.3-.4 0-.8.1-1 .3-.3.2-.5.5-.5.9h2.9z" fill="white" />
    </svg>
  ),
  sketch: () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1.5L5 6l7 16.5L19 6l-7-4.5z" fill="#FDB300" />
      <path d="M5 6l7 16.5L1 8.5 5 6z" fill="#EA6C00" />
      <path d="M19 6l-7 16.5L23 8.5 19 6z" fill="#EA6C00" />
      <path d="M5 6h14l-2-4.5H7L5 6z" fill="#FDAD00" />
      <path d="M12 1.5L5 6h14l-7-4.5z" fill="#FDD231" />
    </svg>
  ),
  invision: () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#FF3366" />
      <circle cx="14.5" cy="7.5" r="1.5" fill="white" />
      <path d="M8.5 17.5c-.2.8-.5 1-.9 1-.4 0-.6-.2-.6-.6 0-.5.3-1.2.8-2.8l1-3.2H7.2l.3-1h1.5l.5-1.5c.6-1.8 1.5-2.9 3-2.9.8 0 1.3.4 1.3 1 0 .5-.3.9-.8.9-.4 0-.7-.2-.7-.6 0-.1 0-.2.1-.3-.2.1-.4.3-.5.7l-.5 1.7h2l-.3 1h-2l-1.6 5.6z" fill="white" />
    </svg>
  ),
};

export default function UiUxPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(figmaProjects.length / ITEMS_PER_PAGE);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return figmaProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  return (
    <section id="uiux" className="scroll-mt-20 animate-fade-up">
      <div className="mb-8 sm:mb-12">
        <SectionLabel>Design Portfolio</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-2">
          UI/UX<span className="text-orange-500">.</span>
        </h2>
        <p className="text-sm sm:text-lg text-muted-foreground mt-3 max-w-2xl leading-relaxed font-medium">
          Designing intuitive, accessible interfaces — from wireframes to high-fidelity prototypes in Figma.
        </p>
      </div>

      {/* ── Hero: Meteors + Orbiting Design Tools ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 sm:mb-14">
        {/* Meteors Card */}
        <div className="relative flex h-[400px] sm:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-border/50 bg-card/20 backdrop-blur-sm">
          <Meteors number={30} />
          <WordRotate
            className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-center text-5xl sm:text-7xl font-black leading-none text-transparent"
            words={[
              "Understand",
              "Gather",
              "Research",
              "Define",
              "Plan",
              "Sketch",
              "Wireframe",
              "Explore",
              "Design",
              "Prototype",
              "Test",
              "Iterate",
              "Handoff",
              "Improve"
            ]}
          />
          <p className="mt-4 text-xs sm:text-sm text-muted-foreground font-medium text-center max-w-xs px-4">
            Pixel-perfect interfaces crafted with passion and precision.
          </p>
        </div>

        {/* Orbiting Design Tools */}
        <div className="relative flex h-[400px] sm:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-border/50 bg-card/20 backdrop-blur-sm">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-center text-5xl sm:text-7xl font-black leading-none text-transparent">
            Design
          </span>
          <OrbitingCircles iconSize={24}>
            <Icons.figma />
            <Icons.canva />
            <Icons.adobeXd />
            <Icons.photoshop />
            <Icons.sketch />
          </OrbitingCircles>
          <OrbitingCircles iconSize={18} radius={100} reverse speed={2}>
            <Icons.figma />
            <Icons.canva />
            <Icons.invision />
            <Icons.photoshop />
          </OrbitingCircles>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentItems.map((proj, i) => (
          <Card key={i} className="card-hover flex flex-col group border-border/50 bg-card/40 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardHeader className="pb-3 px-5 sm:px-6 relative z-10 pt-6">
              <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-border/60 flex items-center justify-center mb-5 relative group/item overflow-hidden">
                <Figma size={32} className="text-primary/40 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-500" />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/item:opacity-100 transition-opacity" />

                {/* Floating Share Button on Top Right */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all">
                  <ShareAction
                    title={proj.name}
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 bg-background/40 backdrop-blur-md border border-white/10 text-foreground hover:bg-background/60 shadow-lg rounded-xl"
                  />
                </div>
              </div>

              <CardTitle className="text-sm sm:text-base font-black group-hover:text-primary transition-colors tracking-tight">
                {proj.name}<span className="text-orange-500">.</span>
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm font-medium text-muted-foreground/80 leading-relaxed mt-2 line-clamp-2">
                {proj.desc}
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto px-5 sm:px-6 pb-6 pt-4 border-t border-border/5">
              <Button variant="outline" size="sm" className="w-full text-[10px] font-black uppercase tracking-widest h-10 gap-2 border-border/60 hover:border-primary/50 hover:bg-primary/5 transition-all rounded-xl">
                <Figma size={14} /> View Prototype
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <div className="mt-14 sm:mt-20 p-6 sm:p-10 rounded-3xl bg-muted/30 border border-border/50 relative overflow-hidden group">
        <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
          <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <Info size={24} />
          </div>
          <div className="text-center sm:text-left flex-1">
            <h4 className="text-lg font-black mb-1">Design System & Guidelines</h4>
            <p className="text-xs sm:text-sm font-medium text-muted-foreground leading-relaxed">
              All projects follow WCAG accessibility standards and use Atomic Design principles.
              I focus on creating scalable design systems that bridge the gap between design and engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
