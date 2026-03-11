"use client";

import React, { useState, useMemo } from "react";
import {
  Card, CardContent, CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";
import { SectionLabel, Pill } from "@/components/Shared";
import { photoTools, photos } from "@/lib/data";
import { ShareAction } from "@/components/ShareAction";
import { Pagination } from "@/components/Pagination";

const ITEMS_PER_PAGE = 10;

export default function PhotoPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(photos.length / ITEMS_PER_PAGE);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return photos.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  return (
    <section id="photo" className="scroll-mt-20 animate-fade-up">
      <div className="mb-8 sm:mb-12">
        <SectionLabel>Creative Portfolio</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-2">
          Photography<span className="text-orange-500">.</span>
        </h2>
        <p className="text-sm sm:text-lg text-muted-foreground mt-3 max-w-2xl leading-relaxed font-medium">
          Professional photography, portrait retouching, and creative compositions — bringing stories to life through the lens.
        </p>
      </div>

      <div className="mb-10 overflow-hidden">
        <h3 className="text-xs sm:text-sm font-black text-muted-foreground uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
          Known Tools <div className="h-px bg-border flex-1" />
        </h3>
        <div className="flex flex-wrap gap-2">
          {photoTools.map((t) => <Pill key={t} className="text-[10px] sm:text-xs px-3 py-1 font-bold bg-background border-border/60 hover:border-primary/40 transition-colors uppercase tracking-wider">{t}</Pill>)}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentItems.map((item, i) => (
          <Card key={i} className="card-hover group relative overflow-hidden border-border/50 bg-card/40 backdrop-blur-sm rounded-2xl p-0">
            <CardContent className="p-3">
              <div className="w-full aspect-[4/5] sm:aspect-square rounded-xl bg-muted border border-border flex items-center justify-center mb-4 relative overflow-hidden">
                <img 
                  src={item.images[0]} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Floating Share Button */}
                <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all">
                    <ShareAction 
                        title={item.title} 
                        url={`/photo/${item.id}`} 
                        variant="ghost"
                        size="sm"
                        className="bg-background/40 backdrop-blur-md border border-white/10 h-9 w-9 text-white hover:bg-black/40 rounded-xl"
                    />
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center backdrop-blur-[2px]">
                   <Button size="sm" className="gap-2 text-[10px] font-black uppercase tracking-widest h-10 px-6 rounded-full bg-white text-black hover:bg-white/90 shadow-xl" asChild>
                     <Link href={`/photo/${item.id}`}>
                       <Eye size={16} /> View Details
                     </Link>
                   </Button>
                </div>
              </div>
              <p className="text-sm font-black truncate px-2 mb-1 group-hover:text-primary transition-colors">{item.title}<span className="text-orange-500">.</span></p>
              <CardDescription className="text-xs px-2 mt-1 line-clamp-2 font-medium text-muted-foreground/80 leading-relaxed mb-1">
                {item.description}
              </CardDescription>
            </CardContent>
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
