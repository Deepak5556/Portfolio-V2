"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { 
  Mail, Hand, Search, Pencil, Settings, 
  Camera, Box, Shapes, Layers, Activity,
  Cpu, Zap, Database, Terminal
} from "lucide-react"

export default function MotionEditor() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-5 w-full bg-transparent">
      {/* Main Console Container */}
      <div className="w-full max-w-[1240px] h-[600px] sm:h-[700px] rounded-[2.5rem] bg-[#05060b] border border-white/10 shadow-[0_0_100px_rgba(var(--primary),0.1)] overflow-hidden relative flex flex-col font-mono text-xs">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] -mr-48 -mt-48 opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[80px] -ml-32 -mb-32 opacity-30" />

        {/* Console Header */}
        <div className="h-14 flex items-center justify-between px-6 bg-[#0a0d14] border-b border-white/5 shrink-0 z-10">
          <div className="flex items-center gap-6">
            {/* System Status */}
            <div className="flex items-center gap-3 pr-6 border-r border-white/5">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-red-500/40 rounded-full border border-red-500/50" />
                    <div className="w-2.5 h-2.5 bg-yellow-500/40 rounded-full border border-yellow-500/50" />
                    <div className="w-2.5 h-2.5 bg-green-500/40 rounded-full border border-green-500/50 text-[6px] flex items-center justify-center text-green-500 font-black">L</div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/40 font-black uppercase tracking-widest">
                   <Terminal size={12} className="text-primary" /> Core_Sentry
                </div>
            </div>

            {/* Application Tools */}
            <div className="hidden md:flex gap-6 text-white/30">
               <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-crosshair group">
                  <Mail size={16} /> <span className="text-[9px] group-hover:tracking-widest transition-all">COMM_LINK</span>
               </div>
               <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-crosshair group">
                  <Hand size={16} /> <span className="text-[9px] group-hover:tracking-widest transition-all">INTERACT</span>
               </div>
               <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-crosshair group">
                  <Search size={16} /> <span className="text-[9px] group-hover:tracking-widest transition-all">DEEP_SCAN</span>
               </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4 text-[9px] font-bold text-white/20 uppercase tracking-widest">
               <div className="flex items-center gap-2">
                  <Cpu size={12} className="text-purple-500" /> CPU: 12%
               </div>
               <div className="flex items-center gap-2">
                  <Database size={12} className="text-blue-500" /> RAM: 4.2GB
               </div>
            </div>
            <div className="bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 text-primary text-[10px] font-black tracking-widest flex items-center gap-2">
               <Activity size={12} className="animate-pulse" /> ENGINE_SYNC
            </div>
          </div>
        </div>

        {/* Workspace Split */}
        <div className="flex flex-1 overflow-hidden z-0">
          {/* Layer Hierarchy (Left) */}
          <div className="hidden md:flex w-[240px] border-r border-white/5 bg-[#05060b] flex-col overflow-y-auto scrollbar-hide">
            <div className="p-6 space-y-8">
               <div className="space-y-4">
                  <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                     <span>Layer Matrix</span>
                     <Settings size={12} className="animate-spin-slow" />
                  </div>
                  <div className="space-y-2">
                     <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20 text-white shadow-lg shadow-primary/5">
                        <Shapes size={14} className="text-primary animate-pulse" /> 
                        <div className="flex flex-col">
                           <span className="text-[10px] font-black tracking-widest uppercase">3D_Vector_01</span>
                           <span className="text-[8px] text-white/40 uppercase">Rendering...</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 border border-transparent transition-all cursor-pointer opacity-60 hover:opacity-100">
                        <Camera size={14} className="text-blue-400" /> 
                        <span className="text-[10px] font-black tracking-widest uppercase">Optics_Node</span>
                     </div>
                     <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 border border-transparent transition-all cursor-pointer opacity-60 hover:opacity-100">
                        <Box size={14} className="text-purple-400" /> 
                        <span className="text-[10px] font-black tracking-widest uppercase">Null_Track</span>
                     </div>
                     <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 border border-transparent transition-all cursor-pointer opacity-40 hover:opacity-100">
                        <Layers size={14} className="text-white/40" /> 
                        <span className="text-[10px] font-black tracking-widest uppercase">BG_Compositor</span>
                     </div>
                  </div>
               </div>

               {/* Project Assets */}
               <div className="space-y-4 pt-12 border-t border-white/5">
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">Active_Buffers</div>
                  <div className="grid grid-cols-2 gap-3 opacity-60">
                     <div className="aspect-square rounded-xl bg-zinc-900 border border-white/5 p-2 flex flex-col justify-end text-[7px] font-black uppercase tracking-widest">
                        <Zap size={10} className="mb-auto text-orange-400" />
                        FX_1
                     </div>
                     <div className="aspect-square rounded-xl bg-zinc-900 border border-white/5 p-2 flex flex-col justify-end text-[7px] font-black uppercase tracking-widest">
                        <Database size={10} className="mb-auto text-cyan-400" />
                        DATA_B
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Main Viewport (Center) */}
          <div className="flex-1 flex flex-col relative bg-zinc-950 group">
             {/* Dynamic Grid Overlay */}
             <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, .05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, .05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }} />
             
             {/* Viewport UI */}
             <div className="absolute top-6 left-6 z-10 flex gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
                <span className="text-primary/60">[ ACTIVE_NODE ]</span>
                <span className="border-l border-white/10 pl-4">Z_AXIS: 1440.0</span>
             </div>

             <div className="flex-1 flex items-center justify-center relative">
                <motion.div
                  animate={{ 
                    rotateY: 360,
                    y: [0, -20, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] relative transition-all duration-700 sm:hover:scale-110"
                  style={{ perspective: "1000px" }}
                >
                  {/* Floating geometric glow */}
                  <div className="absolute inset-[-40px] bg-primary/20 blur-[60px] rounded-full opacity-40 animate-pulse" />
                  
                  <Image
                    src="/shape.png"
                    alt="3d shape"
                    fill
                    className="object-contain drop-shadow-[0_0_50px_rgba(var(--primary),0.4)]"
                    priority
                  />
                </motion.div>
             </div>

             {/* Viewport Bottom Info */}
             <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[8px] font-black uppercase tracking-[0.5em] text-white/30 italic">
                <span>Rendering Context: Unreal_Optics v4</span>
                <span className="flex items-center gap-3">
                   <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "75%" }}
                        className="h-full bg-primary"
                      />
                   </div>
                   Buffers: 100%
                </span>
             </div>
          </div>

          {/* Properties Panel (Right) */}
          <div className="hidden lg:flex w-[240px] border-l border-white/5 p-6 flex-col gap-8 text-[10px] text-white/40 bg-[#05060b]">
             <div className="space-y-4">
                <div className="font-black uppercase tracking-[0.3em] flex items-center gap-4">
                   Transform <div className="h-px bg-white/5 flex-1" />
                </div>
                <div className="space-y-3 font-mono">
                   {['POS_X', 'POS_Y', 'POS_Z', 'SCALE', 'OPACITY'].map((prop, i) => (
                      <div key={prop} className="flex flex-col gap-1 group/prop">
                         <div className="flex justify-between items-center group-hover/prop:text-white transition-colors">
                            <span>{prop}</span>
                            <span className="text-primary italic">[{Math.floor(Math.random() * 1000)}.00]</span>
                         </div>
                         <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-primary/40 group-hover:bg-primary transition-all duration-500" 
                                style={{ width: `${Math.random() * 60 + 20}%` }} 
                            />
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             <div className="space-y-4">
                <div className="font-black uppercase tracking-[0.3em] flex items-center gap-4">
                   Effects <div className="h-px bg-white/5 flex-1" />
                </div>
                <div className="space-y-2">
                   {['Bloom', 'Chrom_Ab', 'Grain', 'Lens_Flare'].map(fx => (
                      <div key={fx} className="flex items-center justify-between p-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-primary/40 transition-all cursor-pointer">
                         <span>{fx}</span>
                         <div className="w-6 h-3 bg-primary/20 rounded-full relative">
                            <div className="absolute right-1 top-1 w-1 h-1 bg-primary rounded-full" />
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Timeline (Bottom) */}
        <div className="h-40 border-t border-white/5 bg-[#0a0d14] relative shrink-0 overflow-hidden">
          {/* Timeline Grids */}
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{backgroundImage: 'linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 100%'}} />

          {/* Ruler */}
          <div className="relative z-10 h-8 flex items-end px-8 gap-14 text-[8px] font-black text-white/20 uppercase tracking-widest border-b border-white/5 bg-zinc-950/40">
            {['00s', '01s', '02s', '03s', '04s', '05s', '06s', '07s', '08s'].map(t => (
               <span key={t} className="flex flex-col items-center">
                  <div className="h-2 w-[1px] bg-white/20 mb-1" />
                  {t}
               </span>
            ))}
          </div>

          {/* Playhead */}
          <motion.div
            animate={{ left: ["0%", "100%", "0%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-[1px] bg-primary z-30 shadow-[0_0_20px_rgba(var(--primary),1)]"
          >
            <div className="absolute -top-1 -left-[5px] w-2.5 h-2.5 bg-primary rotate-45" />
            <div className="absolute -bottom-1 -left-[5px] w-2.5 h-2.5 bg-primary rotate-45" />
          </motion.div>

          {/* Tracks Data */}
          <div className="p-8 space-y-4">
            {[
               { color: 'bg-purple-600', width: '85%', label: 'Motion_Path' },
               { color: 'bg-red-500', width: '45%', label: 'Luma_Key' },
               { color: 'bg-cyan-400', width: '75%', label: 'Final_Render' }
            ].map(track => (
               <div key={track.label} className="flex items-center gap-6 group/track">
                  <span className="w-24 text-[8px] font-black uppercase tracking-widest text-white/20 group-hover/track:text-white transition-colors">{track.label}</span>
                  <div className="flex-1 h-2 bg-white/5 rounded-full relative overflow-hidden">
                     <motion.div 
                        initial={{ left: "-100%" }}
                        animate={{ left: "0%" }}
                        className={`absolute inset-0 ${track.color} opacity-40`}
                        style={{ width: track.width }}
                     />
                     <div className={`h-full ${track.color} rounded-full relative shadow-lg shadow-white/5`} style={{ width: track.width }} />
                  </div>
               </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}