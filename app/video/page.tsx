"use client";

import React, { useState, useMemo } from "react";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Film, Play, Scissors, Camera, Layout } from "lucide-react";
import Link from "next/link";
import { SectionLabel, Pill } from "@/components/Shared";
import { videoTools, videos } from "@/lib/data";
import { ShareAction } from "@/components/ShareAction";
import { Pagination } from "@/components/Pagination";
import MotionEditor from "@/components/MotionEditor";

const ITEMS_PER_PAGE = 10;

export default function VideoPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(videos.length / ITEMS_PER_PAGE);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return videos.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  return (
    <section id="video" className="scroll-mt-20 animate-fade-up">
      <div className="mb-10 sm:mb-14">
        <SectionLabel>Creative Portfolio</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
          Videography<span className="text-orange-500">.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-medium">
            I specialize in cinematic storytelling and professional post-production. From capturing 
            moments through the lens to meticulously crafting the final edit, I focus on creating 
            visual experiences that resonate with the audience.
            </p>
            <div className="grid grid-cols-2 gap-4">
                {[
                    { icon: Scissors, label: "Advanced Editing" },
                    { icon: Layout, label: "Motion Graphics" },
                    { icon: Camera, label: "Color Grading" },
                    { icon: Film, label: "Cinematic Shoots" }
                ].map((s) => (
                    <div key={s.label} className="flex items-center gap-2 p-3 rounded-xl bg-muted/30 border border-border/50 group hover:border-primary/30 transition-colors">
                        <s.icon size={16} className="text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest">{s.label}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <div className="mb-12 sm:mb-20 overflow-hidden rounded-3xl border border-border/50 bg-card/20 backdrop-blur-sm p-4 sm:p-8 relative group">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-xl shadow-primary/10">
               <Layout size={20} />
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight">Motion Design Engine<span className="text-orange-500">.</span></h3>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-0.5">Interactive Creative Workspace</p>
            </div>
          </div>
          <div className="max-w-full overflow-x-auto pb-4 scrollbar-hide">
            <div className="min-w-[1000px] lg:scale-95 origin-top transition-transform duration-500 hover:scale-100">
              <MotionEditor />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 overflow-hidden">
        <h3 className="text-xs sm:text-sm font-black text-muted-foreground uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
          Post-Processing Tools <div className="h-px bg-border flex-1" />
        </h3>
        <div className="flex flex-wrap gap-2">
          {videoTools.map((t) => <Pill key={t} className="text-[10px] sm:text-xs px-3 py-1 bg-background border-border/60 hover:border-primary/40 transition-colors font-bold">{t}</Pill>)}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {currentItems.map((v, i) => (
          <Card key={i} className="card-hover group relative overflow-hidden flex flex-col border-border/50 shadow-lg bg-card/40 backdrop-blur-sm rounded-2xl">
            <CardHeader className="pb-3 px-0 pt-0 relative">
              <div className="w-full aspect-video rounded-t-2xl bg-muted overflow-hidden relative group/item">
                <img 
                  src={v.poster} 
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                   <Button size="sm" className="gap-2 shadow-xl h-10 px-6 rounded-full bg-white text-black hover:bg-white/90 font-black uppercase text-[10px] tracking-widest" asChild>
                     <Link href={`/video/${v.id}`}>
                       <Play size={16} fill="currentColor" /> Watch Case Study
                     </Link>
                   </Button>
                </div>
              </div>
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <ShareAction 
                    title={v.title} 
                    url={`/video/${v.id}`} 
                    variant="secondary"
                    size="sm"
                    className="bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 rounded-xl font-bold"
                />
              </div>
            </CardHeader>
            <CardContent className="px-5 sm:px-6 pb-4 flex-1">
              <CardTitle className="text-base sm:text-lg font-black mb-2 group-hover:text-primary transition-colors mt-2">
                {v.title}<span className="text-orange-500">.</span>
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm leading-relaxed line-clamp-2 text-muted-foreground/80 font-medium">
                {v.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 px-5 sm:px-6 pb-6 mt-auto border-t border-border/10 pt-4">
              {v.tools.map((t) => <Badge key={t} variant="secondary" className="text-[10px] font-black uppercase tracking-wider bg-primary/5 text-primary border-none px-2 h-5">{t}</Badge>)}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
