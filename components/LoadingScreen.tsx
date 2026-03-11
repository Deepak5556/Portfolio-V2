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
        return prev + 1.5;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background pointer-events-none">
      <div className="flex flex-col items-center justify-center mb-12">
        {/* iOS Style Spinner */}
        <div className="ios-loader relative w-12 h-12 mb-8">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute left-[44.5%] top-0 w-[11%] h-[28%] bg-foreground/30 rounded-full origin-[center_180%]"
              style={{
                transform: `rotate(${i * 30}deg)`,
                animation: `ios-fade 1.2s linear infinite`,
                animationDelay: `${-1.2 + i * 0.1}s`,
              }}
            />
          ))}
        </div>
        
        <p className="text-xl font-semibold tracking-tighter text-foreground/80 animate-pulse">
          Loading Portfolio
        </p>
      </div>

      {/* Progress Data (Optional, but kept for consistency) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 w-64 flex flex-col items-center space-y-4"
      >
        <div className="w-full h-[3px] bg-muted/20 overflow-hidden relative rounded-full max-w-[120px]">
          <motion.div
            className="absolute inset-y-0 left-0 bg-foreground/60"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
