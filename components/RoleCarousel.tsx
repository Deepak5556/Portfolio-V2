"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const roles = [
  "Full Stack Developer",
  "App Developer",
  "Photographer",
  "Photo Editor",
  "Videographer",
  "Video Editor"
];

export function RoleCarousel({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[index];
      
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setSpeed(100);
        
        if (displayText === fullText) {
          setIsDeleting(true);
          setSpeed(2000); // Pause at end
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setSpeed(50);
        
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
          setSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, speed]);

  return (
    <div className={cn("inline-flex items-center min-h-[1.25rem]", className)}>
      <span className="whitespace-nowrap">
        {displayText}
      </span>
      <span className="w-[2px] h-[1em] bg-primary/60 ml-0.5 animate-pulse" />
    </div>
  );
}
