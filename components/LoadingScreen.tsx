"use client";

import React from "react";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500">
      <div className="relative flex flex-col items-center">
        {/* Animated DK Logo */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Circular progress track */}
          <svg className="absolute w-full h-full -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-muted/20"
            />
            <circle
              cx="64"
              cy="64"
              r="60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="377"
              strokeDashoffset="377"
              className="text-primary animate-draw-circle"
            />
          </svg>

          {/* Centered DK with split animation */}
          <div className="flex text-5xl font-black tracking-tighter overflow-hidden">
            <span className="text-primary translate-y-full animate-reveal-d">D</span>
            <span className="text-orange-500 -translate-y-full animate-reveal-k">K</span>
          </div>
        </div>
        
        {/* Loading text with letter spacing animation */}
        <div className="mt-8 overflow-hidden h-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-muted-foreground/40 animate-slide-up">
                Portfolio 2026
            </p>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes draw-circle {
          0% { stroke-dashoffset: 377; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes reveal-d {
          0%, 10% { transform: translateY(100%); opacity: 0; }
          40%, 60% { transform: translateY(0); opacity: 1; }
          90%, 100% { transform: translateY(-100%); opacity: 0; }
        }
        @keyframes reveal-k {
          0%, 10% { transform: translateY(-100%); opacity: 0; }
          40%, 60% { transform: translateY(0); opacity: 1; }
          90%, 100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes slide-up {
          0% { transform: translateY(100%); opacity: 0; }
          20%, 80% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        .animate-draw-circle {
          animation: draw-circle 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        .animate-reveal-d {
          animation: reveal-d 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
        .animate-reveal-k {
          animation: reveal-k 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
        .animate-slide-up {
          animation: slide-up 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
      `}</style>
    </div>
  );
}
