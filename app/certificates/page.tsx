"use client";

import React, { useState, useMemo } from "react";
import { 
  Card, CardHeader, CardTitle, CardDescription, CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, ChevronLeft, Award, Calendar, 
  CheckCircle2, Bookmark
} from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/Shared";
import { certifications } from "@/lib/data";
import { Pagination } from "@/components/Pagination";

const ITEMS_PER_PAGE = 10;

export default function CertificatesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(certifications.length / ITEMS_PER_PAGE);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return certifications.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  return (
    <div className="animate-fade-up">
      <div className="mb-8 sm:mb-12">
        <Button variant="ghost" size="sm" asChild className="mb-4 -ml-2 text-muted-foreground hover:text-foreground">
          <Link href="/about">
            <ChevronLeft size={16} className="mr-1" /> Back to About
          </Link>
        </Button>
        <SectionLabel>Recognition</SectionLabel>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mt-2">
          Certifications<span className="text-orange-500">.</span>
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl font-medium">
          A showcase of professional certifications, technical courses, and academic recognitions I've earned.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {currentItems.map((cert, i) => (
          <Card key={i} className="card-hover flex flex-col group overflow-hidden border-border/50 bg-card/40 backdrop-blur-sm rounded-2xl">
            <CardHeader className="pb-3 flex-1 px-4 sm:px-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary transition-transform group-hover:scale-110 shadow-sm border border-primary/10">
                <Bookmark size={20} />
              </div>
              <CardTitle className="text-sm sm:text-base font-black leading-tight group-hover:text-primary transition-colors">
                {cert.title}
              </CardTitle>
              <CardDescription className="text-xs font-bold text-muted-foreground/80 flex items-center gap-1.5 mt-2">
                <CheckCircle2 size={12} className="text-orange-500" /> {cert.issuer}
              </CardDescription>
            </CardHeader>
            <CardFooter className="pt-0 p-4 sm:p-6 flex-col items-start gap-4 mt-auto border-t border-border/5 pt-4">
              <div className="flex items-center gap-3 text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest">
                <span className="flex items-center gap-1">
                  <Calendar size={11} /> {cert.date}
                </span>
              </div>
              {cert.link && cert.link !== "#" && (
                <Button variant="outline" size="sm" className="w-full gap-2 text-[10px] font-black uppercase tracking-widest h-9 border-border/60 hover:border-primary/50 group/btn rounded-xl" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    Verify Certificate <ExternalLink size={12} className="group-hover/btn:scale-110 transition-transform" />
                  </a>
                </Button>
              )}
              {(!cert.link || cert.link === "#") && (
                <Button variant="outline" size="sm" className="w-full gap-2 text-[10px] font-black uppercase tracking-widest h-9 opacity-50 cursor-not-allowed rounded-xl border-border/60">
                  Certificate Offline
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <div className="mt-14 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-primary/5 border border-primary/10 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[120px] -mr-32 -mt-32" />
          <Award size={48} className="mx-auto mb-6 text-primary group-hover:scale-110 transition-transform" />
          <h3 className="text-xl sm:text-2xl font-black mb-3">Commitment to Excellence<span className="text-orange-500">.</span></h3>
          <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            I consistently invest in my professional growth through industry-standard certifications and specialized technical training. 
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-primary/5 text-primary border-none h-6">Quality First</Badge>
            <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-primary/5 text-primary border-none h-6">Continuous Learning</Badge>
            <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-primary/5 text-primary border-none h-6">Technical Mastery</Badge>
          </div>
      </div>
    </div>
  );
}
