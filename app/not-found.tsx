"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center animate-fade-up">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full" />
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-card border border-border flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500 shadow-xl">
          <FileQuestion size={48} className="text-orange-500 sm:scale-125" />
        </div>
      </div>
      
      <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-4">
        404<span className="text-orange-500">.</span>
      </h1>
      
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Page not found</h2>
      
      <p className="text-muted-foreground max-w-md mb-10 leading-relaxed text-sm sm:text-base">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Button asChild className="gap-2 px-8 h-12 font-bold shadow-lg shadow-orange-500/20">
          <Link href="/">
            <Home size={18} /> Back to Home
          </Link>
        </Button>
        <Button variant="ghost" onClick={() => window.history.back()} className="gap-2 px-8 h-12 font-bold">
          <ArrowLeft size={18} /> Go Back
        </Button>
      </div>

      <div className="mt-20 flex gap-8 opacity-20 filter grayscale">
         <span className="text-xs font-mono uppercase tracking-widest">Deepakkumar V</span>
         <span className="text-xs font-mono uppercase tracking-widest">Portfolio</span>
      </div>
    </div>
  );
}
