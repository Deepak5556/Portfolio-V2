"use client"

import React, { forwardRef, useRef } from "react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { Smartphone, Monitor, Palette, Film, Camera, Code2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { profile } from "@/lib/data"

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string; labelPosition?: "top" | "bottom" | "left" | "right" }
>(({ className, children, label, labelPosition = "bottom" }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 relative flex size-12 sm:size-14 items-center justify-center rounded-full border-2 bg-background p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
      {label && (
        <span
          className={cn(
            "absolute text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap transition-colors group-hover:text-foreground",
            labelPosition === "bottom" && "-bottom-6 sm:-bottom-8",
            labelPosition === "top" && "-top-6 sm:-top-8",
            labelPosition === "left" && "-left-4 -translate-x-full",
            labelPosition === "right" && "-right-4 translate-x-full",
          )}
        >
          {label}
        </span>
      )}
    </div>
  )
})

Circle.displayName = "Circle"

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className="relative flex w-full max-w-[800px] mx-auto items-center justify-center overflow-hidden py-14 sm:py-20"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[300px] max-w-2xl flex-col items-stretch justify-between gap-12 sm:gap-16">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref} label="App Development" labelPosition="top" className="bg-card border-primary/20 group hover:scale-110 transition-transform">
            <Smartphone size={32} className="text-emerald-500" />
          </Circle>
          <Circle ref={div5Ref} label="Web Development" labelPosition="top" className="bg-card border-primary/20 group hover:scale-110 transition-transform">
            <Monitor size={32} className="text-blue-500" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref} label="UI/UX Designing" labelPosition="left" className="bg-card border-primary/20 group hover:scale-110 transition-transform">
            <Palette size={32} className="text-pink-500" />
          </Circle>
          <Circle ref={div4Ref} label="Deepakkumar" labelPosition="bottom" className="size-20 sm:size-24 bg-card border-primary/50 overflow-hidden p-0 shadow-lg shadow-primary/20 group hover:scale-110 transition-transform z-20">
             <Avatar className="size-full">
               <AvatarImage src={profile.avatar} alt={profile.name} className="object-cover" />
               <AvatarFallback className="text-xl font-bold">{profile.initials}</AvatarFallback>
             </Avatar>
          </Circle>
          <Circle ref={div6Ref} label="Video Editing" labelPosition="right" className="bg-card border-primary/20 group hover:scale-110 transition-transform">
            <Film size={32} className="text-purple-500" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref} label="Engineering" labelPosition="bottom" className="bg-card border-primary/20 group hover:scale-110 transition-transform">
            <Code2 size={32} className="text-orange-500" />
          </Circle>
          <Circle ref={div7Ref} label="Photo Editing" labelPosition="bottom" className="bg-card border-primary/20 group hover:scale-110 transition-transform">
            <Camera size={32} className="text-yellow-500" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  )
}
