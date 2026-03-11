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
const ITEMS_PER_PAGE = 10;

export default function FigmaPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(figmaProjects.length / ITEMS_PER_PAGE);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return figmaProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  return (
    <section id="figma" className="scroll-mt-20 animate-fade-up">
      <div className="mb-8 sm:mb-12">
        <SectionLabel>Design Portfolio</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-2">
          UI/UX Design<span className="text-orange-500">.</span>
        </h2>
        <p className="text-sm sm:text-lg text-muted-foreground mt-3 max-w-2xl leading-relaxed font-medium">
          Designing intuitive, accessible interfaces — from wireframes to high-fidelity prototypes in Figma.
        </p>
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
