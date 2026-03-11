"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { 
  Mail, Hand, Search, Pencil, Settings, 
  Camera, Box, Shapes, Layers 
} from "lucide-react"

export default function MotionEditor() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-5 w-full">
      {/* Main Editor */}
      <div className="w-full max-w-[1200px] h-[550px] sm:h-[650px] rounded-2xl bg-[#0b0e15] border border-white/10 shadow-[0_0_60px_rgba(0,150,255,0.15)] overflow-hidden relative flex flex-col font-sans">

        {/* Top Bar */}
        <div className="h-12 flex items-center justify-between px-4 bg-[#0d1117] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            {/* Mac buttons */}
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500/80 rounded-full"/>
              <div className="w-3 h-3 bg-yellow-500/80 rounded-full"/>
              <div className="w-3 h-3 bg-green-500/80 rounded-full"/>
            </div>

            {/* Tools */}
            <div className="hidden sm:flex gap-4 ml-6 text-gray-400">
              <Mail size={18} className="cursor-pointer hover:text-cyan-400 transition-colors" />
              <Hand size={18} className="cursor-pointer hover:text-cyan-400 transition-colors" />
              <Search size={18} className="cursor-pointer hover:text-cyan-400 transition-colors" />
              <Pencil size={18} className="cursor-pointer hover:text-cyan-400 transition-colors" />
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-300">
            <span className="bg-black/40 px-3 py-1 rounded border border-white/5">100%</span>
            <Settings size={16} className="cursor-pointer hover:rotate-90 transition-transform duration-500" />
          </div>
        </div>

        {/* Workspace Container */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Panel */}
          <div className="hidden md:block w-[220px] border-r border-white/10 bg-[#0b0e15] text-gray-400 text-xs sm:text-sm">
            <div className="p-4 space-y-4">
              <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Layers</div>
              <div className="flex items-center gap-2 hover:text-gray-200 cursor-pointer">
                <Camera size={14} className="text-blue-400" /> Camera 1
              </div>
              <div className="flex items-center gap-2 hover:text-gray-200 cursor-pointer">
                <Box size={14} className="text-purple-400" /> Null Object
              </div>
              <div className="bg-primary/20 px-3 py-2 rounded-lg text-white border border-primary/30 flex items-center gap-2">
                <Shapes size={14} className="text-cyan-400" /> 3D Shape
              </div>
              <div className="flex items-center gap-2 hover:text-gray-200 cursor-pointer opacity-50">
                <Layers size={14} /> Background
              </div>
            </div>
          </div>

          {/* Center Preview */}
          <div className="flex-1 flex items-center justify-center relative bg-[#05060b] group">
             {/* Grid background effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px'}} />
            
            <motion.div
              animate={{ 
                rotate: 360,
                y: [0, -15, 0]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] relative drop-shadow-[0_0_30px_rgba(0,255,255,0.2)]"
            >
              <Image
                src="/shape.png"
                alt="3d shape"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Right Transform Panel */}
          <div className="hidden lg:block w-[220px] border-l border-white/10 p-5 text-sm text-gray-300">
            <div className="bg-[#0f1624] rounded-xl p-4 border border-white/10 shadow-inner">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-[11px] uppercase tracking-widest text-gray-400">Transform</span>
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"/>
              </div>

              <div className="space-y-4 text-[11px] sm:text-xs text-gray-400 font-mono">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>POSITION X</span>
                  <span className="text-cyan-400">940.0</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>POSITION Y</span>
                  <span className="text-cyan-400">540.0</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>SCALE</span>
                  <span className="text-cyan-400">100.0%</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>ROTATION</span>
                  <span className="text-cyan-400">45.0°</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>OPACITY</span>
                  <span className="text-cyan-400">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="h-[140px] sm:h-[180px] border-t border-white/10 bg-[#0a0d14] relative shrink-0">
          {/* Time ruler */}
          <div className="text-[9px] sm:text-[10px] text-gray-500 flex gap-10 sm:gap-14 px-6 pt-3 font-mono">
            <span>00:00f</span>
            <span>00:15f</span>
            <span>00:30f</span>
            <span>00:45f</span>
            <span>01:00f</span>
            <span className="hidden sm:inline">01:15f</span>
            <span className="hidden sm:inline">01:30f</span>
          </div>

          {/* Playhead */}
          <motion.div
            animate={{ left: ["5%", "90%", "5%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-[2px] bg-cyan-400 shadow-[0_0_15px_#00ffff] z-20 pointer-events-none"
          >
            <div className="absolute -top-1 -left-[5px] w-3 h-3 bg-cyan-400 rotate-45" />
          </motion.div>

          {/* Tracks */}
          <div className="absolute top-12 left-6 right-6 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
               <div className="h-1.5 bg-purple-600/20 rounded-full flex-1 overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full w-[85%]" />
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
               <div className="h-1.5 bg-red-500/20 rounded-full flex-1 overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full w-[45%]" />
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
               <div className="h-1.5 bg-cyan-400/20 rounded-full flex-1 overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full w-[75%]" />
               </div>
            </div>
          </div>

          {/* Bottom neon glow */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 blur-sm opacity-50"/>
        </div>
      </div>
    </div>
  )
}