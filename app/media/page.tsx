"use client";

import React, { useState, useMemo } from "react";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Film, Play, Scissors, Camera, Layout, 
  Eye, Sparkles, MoveRight, Maximize2, 
  X, ChevronLeft, ChevronRight, Info,
  ExternalLink, Download, MapPin, Layers
} from "lucide-react";
import Link from "next/link";
import { SectionLabel, Pill } from "@/components/Shared";
import { videoTools, videos, photoTools, photos } from "@/lib/data";
import { ShareAction } from "@/components/ShareAction";
import { Pagination } from "@/components/Pagination";
import MotionEditor from "@/components/MotionEditor";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Ripple } from "@/components/ui/ripple";
import { PixelImage } from "@/components/ui/pixel-image";

const ITEMS_PER_PAGE = 9;

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<"video" | "photo">("video");
  const [videoPage, setVideoPage] = useState(1);
  const [photoPage, setPhotoPage] = useState(1);
  
  // Lightbox State
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const videoItems = useMemo(() => {
    const start = (videoPage - 1) * ITEMS_PER_PAGE;
    return videos.slice(start, start + ITEMS_PER_PAGE);
  }, [videoPage]);

  const photoItems = useMemo(() => {
    const start = (photoPage - 1) * ITEMS_PER_PAGE;
    return photos.slice(start, start + ITEMS_PER_PAGE);
  }, [photoPage]);

  const totalVideoPages = Math.ceil(videos.length / ITEMS_PER_PAGE);
  const totalPhotoPages = Math.ceil(photos.length / ITEMS_PER_PAGE);

  const openLightbox = (photo: any) => {
    setSelectedPhoto(photo);
    setActiveImageIdx(0);
  };

  return (
    <div className="relative min-h-screen pb-32">
      {/* ── Background Aesthetics ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-500/5 blur-[150px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="relative z-10 space-y-16 sm:space-y-24">
        {/* ── IMMERSIVE HERO ── */}
        <section className="pt-8 sm:pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto px-4"
          >
            <SectionLabel className="mb-6">Creative Labs / Visual Analytics</SectionLabel>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tight leading-none mb-4">
              Media Collective<span className="text-primary not-italic tracking-normal">.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground/70 leading-relaxed font-medium max-w-2xl text-balance">
              Where high-fidelity cinematography meets professional imagery. Orchestrating a symphony of pixels, motion, and light.
            </p>
          </motion.div>

          {/* Premium Tab Switcher */}
          <div className="mt-16 flex justify-center sticky top-20 z-50 px-4">
            <div className="flex p-1.5 bg-card/40 backdrop-blur-2xl border border-white/5 rounded-[2rem] shadow-2xl shadow-black/20">
              {[
                { id: "video", label: "Showreels", icon: Film, desc: "Motion Design" },
                { id: "photo", label: "Galleria", icon: Camera, desc: "Still Vision" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative flex flex-col items-center gap-1 px-10 py-4 rounded-[1.5rem] transition-all duration-700 group ${
                    activeTab === tab.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="media-active-tab"
                      className="absolute inset-0 bg-primary rounded-[1.5rem] shadow-[0_0_30px_rgba(var(--primary),0.3)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <tab.icon size={18} className="relative z-10 group-hover:scale-110 transition-transform" />
                  <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em]">{tab.label}</span>
                  <span className={`relative z-10 text-[8px] font-bold uppercase opacity-40 tracking-widest hidden sm:block ${activeTab === tab.id ? 'text-white' : ''}`}>{tab.desc}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <AnimatePresence mode="wait">
          {activeTab === "video" ? (
            <motion.div
              key="video-section"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-32"
            >
              {/* ── VIDEO SHOWCASE REFINED (UNIFIED GRID) ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 md:px-0 mt-20">
                {videoItems.map((v, i) => (
                  <motion.div
                    key={v.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Card className="group h-full border-border/40 bg-card/30 backdrop-blur-3xl relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 rounded-[2rem] flex flex-col">
                      {/* Image Container */}
                      <div className="relative w-full aspect-video overflow-hidden border-b border-border/10">
                        <Image
                          src={v.poster} 
                          alt={v.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                           <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/40 text-white flex items-center justify-center shadow-2xl">
                              <Play fill="currentColor" size={24} className="translate-x-1" />
                           </div>
                        </div>

                        <div className="absolute top-3 right-3 z-20">
                           <Badge className="bg-background/40 backdrop-blur-md border border-white/10 text-white font-black text-[8px] uppercase tracking-widest">
                             Node 0{i+1}
                           </Badge>
                        </div>
                      </div>

                      <CardHeader className="p-8 pb-3 relative z-10 flex-1">
                        <div className="flex items-center gap-3 mb-3">
                           <div className="p-2 rounded-lg bg-primary/10 text-primary">
                             <Film size={16} />
                           </div>
                           <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest bg-primary/5 border-none px-2.5 py-1 text-primary">
                              Video Archive
                           </Badge>
                        </div>
                        <CardTitle className="text-lg sm:text-xl font-black group-hover:text-primary transition-colors uppercase italic tracking-tight leading-none mb-1">
                          {v.title}<span className="text-primary tracking-normal not-italic">.</span>
                        </CardTitle>
                        <CardDescription className="text-xs sm:text-sm leading-relaxed line-clamp-2 font-medium text-muted-foreground/60">
                          {v.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-8 pb-4 pt-0 relative z-10">
                         <div className="flex flex-wrap gap-1.5">
                            {v.tools.slice(0, 3).map(t => (
                              <Badge key={t} variant="secondary" className="text-[8px] font-black uppercase tracking-widest px-2.5 py-1 bg-muted/30 text-muted-foreground border-none group-hover:bg-primary/5 group-hover:text-primary transition-all">
                                {t}
                              </Badge>
                            ))}
                         </div>
                      </CardContent>

                      <CardFooter className="p-8 pt-4 flex gap-3 mt-auto relative z-10">
                        <Button variant="outline" className="flex-1 h-12 rounded-2xl gap-2 text-[10px] font-black uppercase tracking-widest border-border/60 hover:border-primary/50 group/btn transition-all duration-300 shadow-sm" asChild>
                           <Link href={`/media/video/${v.id}`}>
                              Open Node <Maximize2 size={14} className="group-hover/btn:scale-110 transition-transform" />
                           </Link>
                        </Button>
                        <ShareAction 
                          title={v.title} 
                          url={`/media/video/${v.id}`} 
                          variant="outline"
                          className="h-12 w-12 border-border/60 hover:border-primary/50 rounded-2xl bg-card/40 backdrop-blur-xl group-hover:bg-primary/5 transition-all"
                          iconOnly={true}
                        />
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Pagination 
                currentPage={videoPage}
                totalPages={totalVideoPages}
                onPageChange={setVideoPage}
              />
            </motion.div>
          ) : (
            <motion.div
              key="photo-section"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-24 px-4"
            >
              {/* ── VISION HEADER WITH RIPPLE ── */}
              <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden flex flex-col items-center justify-center border border-white/5 bg-zinc-950/20 backdrop-blur-3xl rounded-[3rem] shadow-2xl">
                 <Ripple />
                 <div className="relative z-10 text-center space-y-8 px-6">
                    <div className="flex flex-col items-center gap-4">
                       <span className="text-[11px] font-black uppercase tracking-[0.6em] text-primary italic">Optics & Post-Logic</span>
                       <h3 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tight leading-none text-balance max-w-2xl mx-auto">
                        Frame Matrix / Still Synthesis<span className="text-primary">.</span>
                       </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center max-w-md mx-auto">
                       {photoTools.map(t => (
                          <Badge key={t} className="px-5 py-2 text-[9px] uppercase font-black bg-white/5 text-white/40 border border-white/5 rounded-full hover:border-primary/50 transition-all">
                             {t}
                          </Badge>
                       ))}
                    </div>
                 </div>
              </div>

              {/* ── PHOTOGRAPHY (UNIFIED GRID) ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-0">
                {photoItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Card 
                      className="group h-full border-border/40 bg-card/30 backdrop-blur-3xl relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 rounded-[2rem] flex flex-col cursor-pointer"
                      onClick={() => openLightbox(item)}
                    >
                      {/* Image Container */}
                      <div className="relative w-full aspect-video overflow-hidden border-b border-border/10">
                        <PixelImage
                          src={item.images[0]} 
                          grid="12x12"
                          className="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                           <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/40 text-white flex items-center justify-center shadow-2xl">
                              <Eye size={24} />
                           </div>
                        </div>

                        <div className="absolute top-3 right-3 z-20">
                           <Badge className="bg-background/40 backdrop-blur-md border border-white/10 text-white font-black text-[8px] uppercase tracking-widest">
                             Asset_{item.id.slice(0, 4)}
                           </Badge>
                        </div>
                      </div>

                      <CardHeader className="p-8 pb-3 relative z-10 flex-1">
                        <div className="flex items-center gap-3 mb-3">
                           <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                             <Camera size={16} />
                           </div>
                           <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest bg-orange-500/5 border-none px-2.5 py-1 text-orange-500">
                              Frame Gallery
                           </Badge>
                        </div>
                        <CardTitle className="text-lg sm:text-xl font-black group-hover:text-primary transition-colors uppercase italic tracking-tight leading-none mb-1">
                          {item.title}<span className="text-orange-500 tracking-normal not-italic">.</span>
                        </CardTitle>
                        <CardDescription className="text-xs sm:text-sm leading-relaxed line-clamp-2 font-medium text-muted-foreground/60">
                          {item.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-8 pb-4 pt-0 relative z-10">
                         <div className="flex flex-wrap gap-1.5">
                            {photoTools.slice(0, 3).map(t => (
                              <Badge key={t} variant="secondary" className="text-[8px] font-black uppercase tracking-widest px-2.5 py-1 bg-muted/30 text-muted-foreground border-none group-hover:bg-primary/5 group-hover:text-primary transition-all">
                                {t}
                              </Badge>
                            ))}
                         </div>
                      </CardContent>

                      <CardFooter className="p-8 pt-4 flex gap-3 mt-auto relative z-10">
                        <Button variant="outline" className="flex-1 h-12 rounded-2xl gap-2 text-[10px] font-black uppercase tracking-widest border-border/60 hover:border-primary/50 group/btn transition-all duration-300 shadow-sm">
                           Deep View <Maximize2 size={14} className="group-hover/btn:scale-110 transition-transform" />
                        </Button>
                        <ShareAction 
                          title={item.title} 
                          url="#" 
                          variant="outline"
                          className="h-12 w-12 border-border/60 hover:border-primary/50 rounded-2xl bg-card/40 backdrop-blur-xl group-hover:bg-primary/5 transition-all"
                          iconOnly={true}
                        />
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Pagination 
                currentPage={photoPage}
                totalPages={totalPhotoPages}
                onPageChange={setPhotoPage}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-[98vw] w-full h-[95vh] sm:h-[90vh] p-0 bg-transparent border-none overflow-hidden select-none outline-none">
            <div className="flex flex-col lg:flex-row h-full bg-zinc-950/90 backdrop-blur-2xl border border-white/5 rounded-[3.5rem] overflow-hidden shadow-3xl">
               
               {/* ── LEFT SIDE: LARGE MEDIA PREVIEW (60%) ── */}
               <div className="lg:w-[60%] h-[50vh] lg:h-full relative group bg-black/40 overflow-hidden cursor-crosshair flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImageIdx}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image 
                        src={selectedPhoto?.images[activeImageIdx]} 
                        alt="Preview" 
                        fill 
                        className="object-contain p-4 sm:p-8 lg:p-12 transition-transform duration-1000 group-hover:scale-105"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {selectedPhoto?.images.length > 1 && (
                    <>
                       <button 
                         onClick={(e) => { e.stopPropagation(); setActiveImageIdx(prev => (prev === 0 ? selectedPhoto.images.length - 1 : prev - 1)); }}
                         className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all z-30 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                       >
                         <ChevronLeft size={24} />
                       </button>
                       <button 
                         onClick={(e) => { e.stopPropagation(); setActiveImageIdx(prev => (prev === selectedPhoto.images.length - 1 ? 0 : prev + 1)); }}
                         className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all z-30 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                       >
                         <ChevronRight size={24} />
                       </button>
                    </>
                  )}
                  
                  {/* Subtle Media Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute bottom-10 left-10 flex gap-4 z-20">
                     <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-[9px] font-black uppercase tracking-[0.4em] text-white/60">
                        Asset Sequence_{activeImageIdx + 1}/{selectedPhoto?.images.length}
                     </div>
                  </div>
               </div>

               {/* ── RIGHT SIDE: DETAILED CONTEXT (40%) ── */}
               <div className="lg:w-[40%] flex flex-col h-full bg-zinc-900/40 border-l border-white/5 overflow-y-auto scrollbar-hide">
                  <div className="p-8 sm:p-12 space-y-12 flex-1">
                     {/* Title & Stats */}
                     <div className="space-y-4">
                        <SectionLabel>Photo Archive Detail</SectionLabel>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tight leading-none">
                           {selectedPhoto?.title}<span className="text-primary">.</span>
                        </h2>
                        <div className="flex items-center gap-4 text-primary/60">
                           <MapPin size={14} />
                           <span className="text-[10px] font-black uppercase tracking-[0.4em] italic">
                              {selectedPhoto?.location || "Global Creative Lab"}
                           </span>
                        </div>
                     </div>

                     {/* Description */}
                     <div className="space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 flex items-center gap-4">
                           <Info size={14} /> Analysis <div className="h-px bg-white/5 flex-1" />
                        </h4>
                        <p className="text-base text-muted-foreground/70 font-medium leading-relaxed italic border-l-2 border-primary/20 pl-6">
                           {selectedPhoto?.description}
                        </p>
                     </div>

                     {/* Tags/Tools */}
                     <div className="space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 flex items-center gap-4">
                           <Layers size={14} /> Capabilities <div className="h-px bg-white/5 flex-1" />
                        </h4>
                        <div className="flex flex-wrap gap-2.5">
                           {selectedPhoto?.tools?.map((tool: string) => (
                              <Badge key={tool} variant="outline" className="px-5 py-2 text-[10px] uppercase font-black tracking-widest border-white/5 bg-white/5 hover:border-primary/50 transition-all">
                                 {tool}
                              </Badge>
                           ))}
                        </div>
                     </div>

                     {/* Angle Selection */}
                     <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 flex items-center gap-4">
                           <Camera size={14} /> Perspective Matrix <div className="h-px bg-white/5 flex-1" />
                        </h4>
                        <div className="grid grid-cols-4 gap-4">
                           {selectedPhoto?.images.map((img: string, idx: number) => (
                              <motion.div 
                                key={idx} 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveImageIdx(idx)}
                                className={`aspect-square rounded-2xl overflow-hidden border-2 cursor-pointer transition-all ${activeImageIdx === idx ? 'border-primary ring-4 ring-primary/10' : 'border-white/5 opacity-40 hover:opacity-100 hover:border-white/20'}`}
                              >
                                 <Image src={img} alt="thumb" fill className="object-cover" />
                              </motion.div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Actions (Sticky Bottom) */}
                  <div className="p-8 sm:p-12 border-t border-white/5 bg-zinc-950/20 backdrop-blur-3xl space-y-4">
                     <Button className="w-full h-14 rounded-2xl bg-white text-black hover:bg-primary hover:text-white transition-all font-black uppercase tracking-widest text-[11px] gap-3">
                        <Download size={18} /> High-Resolution Download
                     </Button>
                     <div className="flex gap-4">
                        <Button variant="outline" className="flex-1 h-14 rounded-2xl border-white/5 bg-white/5 hover:bg-white/10 transition-all font-black uppercase tracking-widest text-[10px] gap-3">
                           <ShareAction title={selectedPhoto?.title} url="#" variant="ghost" iconOnly={false} className="w-full h-full p-0 border-none justify-center font-black" />
                        </Button>
                        <DialogClose asChild>
                           <Button variant="outline" className="w-14 h-14 rounded-2xl border-white/5 bg-white/5 hover:bg-red-500/10 hover:text-red-500 transition-all">
                              <X size={20} />
                           </Button>
                        </DialogClose>
                     </div>
                  </div>
               </div>
            </div>
         </DialogContent>
      </Dialog>

      {/* ── Footer Branding ── */}
      <div className="mt-32 max-w-7xl mx-auto px-4 border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8 opacity-40 text-center sm:text-left">
         <div className="flex items-center gap-6">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Integrated Creative Network</span>
         </div>
         <p className="text-[10px] font-bold uppercase tracking-widest italic">Est. 2024 / Digital Arts Module v4.2</p>
      </div>
    </div>
  );
}
