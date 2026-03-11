"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import animationData from "@/app/animation/Loading Files.json";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress over ~1.8 seconds
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
      <div className="relative flex items-center justify-center w-64 h-64">
        <Lottie 
          animationData={animationData} 
          loop={true} 
          className="w-full h-full drop-shadow-[0_0_15px_rgba(251,100,21,0.3)]"
        />
      </div>

      {/* Progress Data */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 w-64 flex flex-col items-center space-y-4"
      >
        <div className="text-[10px] uppercase font-black tracking-[0.4em] text-muted-foreground">
          System Initialization
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-[2px] bg-muted/40 overflow-hidden relative">
          <motion.div
            className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </div>

        {/* Progress Text counter */}
        <div className="flex justify-between w-full text-[9px] font-mono font-bold text-muted-foreground/50 tracking-widest">
          <span>BOOT SEQUENCE</span>
          <span>{Math.min(100, Math.round(progress))}%</span>
        </div>
      </motion.div>
    </div>
  );
}
