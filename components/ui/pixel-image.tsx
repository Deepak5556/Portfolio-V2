"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PixelImageProps {
  src: string;
  alt?: string;
  grid?: string; // e.g. "8x8", "16x16"
  className?: string;
}

export function PixelImage({ src, alt = "", grid = "10x10", className }: PixelImageProps) {
  const [cols, rows] = useMemo(() => grid.split("x").map(Number), [grid]);
  const [hovered, setHovered] = useState(false);

  // We use a single background image on the container for the reveal
  // and a grid of divs for the pixelated state.
  
  return (
    <div 
      className={`relative overflow-hidden group/pixel ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ isolation: "isolate" }}
    >
      {/* ── REVEALED IMAGE (Full Quality) ── */}
      <Image 
        src={src} 
        alt={alt} 
        fill 
        className="object-cover transition-transform duration-1000 group-hover/pixel:scale-110"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* ── PIXEL GRID OVERLAY ── */}
      <div 
        className="absolute inset-0 grid pointer-events-none" 
        style={{ 
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)` 
        }}
      >
        {Array.from({ length: cols * rows }).map((_, i) => {
          const col = i % cols;
          const row = Math.floor(i / cols);
          
          return (
            <PixelBlock 
              key={i} 
              src={src} 
              col={col} 
              row={row} 
              totalCols={cols} 
              totalRows={rows} 
              hovered={hovered}
            />
          );
        })}
      </div>
      
      {/* Overlay Glow */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/pixel:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}

function PixelBlock({ src, col, row, totalCols, totalRows, hovered }: any) {
  // Staggered reveal based on distance from center or just random
  const delay = useMemo(() => {
    return (col + row) * 0.015 + Math.random() * 0.1;
  }, [col, row]);

  return (
    <motion.div
      initial={false}
      animate={{ 
        opacity: hovered ? 0 : 1,
        scale: hovered ? 1.1 : 1,
      }}
      transition={{ 
        delay: hovered ? delay : 0, 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="relative w-full h-full overflow-hidden bg-zinc-900 border-[0.2px] border-white/5"
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: `${totalCols * 100}% ${totalRows * 100}%`,
          backgroundPosition: `${(col / (totalCols - 1)) * 100}% ${(row / (totalRows - 1)) * 100}%`,
          filter: "grayscale(1) contrast(1.2) brightness(0.8)",
        }}
      />
    </motion.div>
  );
}
