"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background pointer-events-none">
      <div className="flex flex-col items-center justify-center scale-110 sm:scale-150 mb-12">
        <p className="scan-loader text-[50px] font-black italic relative text-foreground transition-colors duration-500">
          <span className="animate-scan-cut inline-block">Deepak</span>
        </p>
      </div>

      {/* Progress Data (Keeping existing progress bar for better UX) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 w-64 flex flex-col items-center space-y-4"
      >
        <div className="text-[10px] uppercase font-black tracking-[0.4em] text-muted-foreground/60">
          Processing Data
        </div>

        <div className="w-full h-[2px] bg-muted/20 overflow-hidden relative rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#ff8282] shadow-[0_0_10px_rgba(255,130,130,0.5)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </div>

        <div className="flex justify-between w-full text-[9px] font-mono font-bold text-muted-foreground/40 tracking-widest">
          <span>{Math.min(100, Math.round(progress))}% SCANNING</span>
          <span>STABLE</span>
        </div>
      </motion.div>
    </div>
  );
}
