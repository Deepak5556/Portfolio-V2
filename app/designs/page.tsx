"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

export default function DesignsPage() {
  return (
    <section id="designs" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-20">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-reverse {
          0% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite 1s;
        }
        .animate-float-reverse {
          animation: float-reverse 5s ease-in-out infinite;
        }
      `}</style>

      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[100px] sm:blur-[120px] opacity-70 dark:opacity-50 mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      <div className="absolute top-[40%] left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[80px] sm:blur-[100px] opacity-60 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen pointer-events-none animate-pulse duration-[3000ms]" />
      
      <div className="z-10 flex flex-col items-center text-center w-full max-w-5xl px-4 mt-10">
        {/* Antigravity Floating Illustration Container */}
        <div className="relative mb-14 flex justify-center w-full">
          <div className="relative w-full max-w-[320px] sm:max-w-[450px] aspect-square rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(168,85,247,0.1)] dark:shadow-[0_0_80px_rgba(168,85,247,0.15)] p-4 sm:p-8 flex items-center justify-center animate-float">
            {/* Glowing inner ring */}
            <div className="absolute inset-0 rounded-full border border-blue-500/30 dark:border-blue-500/20 shadow-[inset_0_0_30px_rgba(59,130,246,0.1)] animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-purple-500/30 dark:border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]" />
            
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl bg-white/40 dark:bg-black/40">
              <Image 
                src="/designs-empty-state.png" 
                alt="Futuristic Design Empty State"
                fill
                className="object-cover scale-[1.02] hover:scale-110 transition-transform duration-1000 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 dark:from-black/40 via-transparent to-transparent mix-blend-overlay" />
            </div>

            {/* Floating Geometric Orbs */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 blur-[1px] dark:blur-[2px] shadow-[0_0_15px_rgba(168,85,247,0.4)] dark:shadow-[0_0_20px_rgba(168,85,247,0.6)] animate-float-reverse" />
            <div className="absolute top-1/2 -left-8 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 blur-[1px] shadow-[0_0_10px_rgba(59,130,246,0.4)] dark:shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-float-delayed" />
            <div className="absolute -bottom-6 right-10 w-16 h-16 rounded-full bg-gradient-to-bl from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 blur-[2px] dark:blur-[3px] shadow-[0_0_20px_rgba(236,72,153,0.3)] dark:shadow-[0_0_25px_rgba(236,72,153,0.5)] animate-float" />
          </div>
        </div>

        {/* Text Content with Glassmorphism Label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-xl mb-8 shadow-sm dark:shadow-xl animate-fade-up">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span className="text-[11px] sm:text-xs font-black tracking-[0.2em] text-purple-600 dark:text-purple-300 uppercase">Coming Soon</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-black via-black/80 to-black/50 dark:from-white dark:via-white/90 dark:to-white/40 mb-6 drop-shadow-sm animate-fade-up" style={{ animationDelay: '100ms' }}>
          Designs will be updated soon<span className="text-purple-500">.</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed mb-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
          New creative works are coming shortly.
        </p>

        {/* Call to Action */}
        <Button 
          asChild 
          className="rounded-full h-14 px-8 text-sm sm:text-base font-bold tracking-wide bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/90 hover:scale-105 transition-all shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.2)] animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-5 w-5" /> Return Home
          </Link>
        </Button>
      </div>
    </section>
  );
}
