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
import { cn } from "@/lib/utils";
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

const ITEMS_PER_PAGE = 12;

const VideoCard = React.memo(({ item, index }: { item: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
    >
      <Card className="group h-full border-border/40 bg-card/40 backdrop-blur-3xl relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 rounded-[2.5rem] flex flex-col">
        {/* Thumbnail Container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-border/10 bg-muted/20">
          <Image
            src={item.poster} 
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
             <div className="w-14 h-14 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/40 text-primary flex items-center justify-center shadow-2xl">
                <Play fill="currentColor" size={20} className="translate-x-0.5" />
             </div>
          </div>

          <div className="absolute top-4 right-4 z-20">
             <Badge className="bg-background/40 backdrop-blur-md border border-white/10 text-foreground font-black text-[7px] uppercase tracking-widest px-2.5 py-1">
               0{index + 1} / NODE_{item.id.slice(0, 4)}
             </Badge>
          </div>
        </div>

        <CardHeader className="p-7 pb-3 relative z-10 flex-1">
          <div className="flex items-center gap-3 mb-3">
             <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
               <Film size={14} />
             </div>
             <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest bg-primary/5 border-none px-2.5 py-1 text-primary">
                Motion_Archive
             </Badge>
          </div>
          <CardTitle className="text-base font-black group-hover:text-primary transition-colors uppercase italic tracking-tight leading-tight mb-2">
            {item.title}<span className="text-primary tracking-normal not-italic">.</span>
          </CardTitle>
          <CardDescription className="text-[11px] leading-relaxed line-clamp-2 font-medium text-muted-foreground/60">
            {item.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-7 pt-0 pb-4 relative z-10">
           <div className="flex flex-wrap gap-1">
              {item.tools.slice(0, 3).map((t: string) => (
                <Badge key={t} className="text-[7px] font-black uppercase tracking-widest px-2 py-0.5 bg-muted/50 text-muted-foreground border border-border/50 rounded-md group-hover:border-primary/30 group-hover:text-primary transition-all">
                  {t}
                </Badge>
              ))}
           </div>
        </CardContent>

        <CardFooter className="p-7 pt-4 flex gap-3 mt-auto relative z-10">
          <Button variant="outline" className="flex-1 h-12 rounded-2xl gap-2 text-[10px] font-black uppercase tracking-widest border-border/60 hover:border-primary/50 group/btn transition-all duration-300 shadow-sm" asChild>
             <Link href={`/media/video/${item.id}`}>
                Open Node <Maximize2 size={14} className="group-hover/btn:scale-110 transition-transform" />
             </Link>
          </Button>
          <ShareAction 
            title={item.title} 
            url={`/media/video/${item.id}`} 
            variant="outline"
            className="h-12 w-12 border-border/60 hover:border-primary/50 rounded-2xl bg-card/40 backdrop-blur-xl group-hover:bg-primary/5 transition-all"
            iconOnly={true}
          />
        </CardFooter>
      </Card>
    </motion.div>
  );
});

VideoCard.displayName = "VideoCard";

const PhotoCard = React.memo(({ item, index, onClick }: { item: any, index: number, onClick: () => void }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
    >
      <Card 
        className="group h-full border-border/40 bg-card/40 backdrop-blur-3xl relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 rounded-[2.5rem] flex flex-col cursor-pointer"
        onClick={onClick}
      >
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-border/10 bg-muted/20">
          <Image
            src={item.images[0]} 
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={cn(
               "object-cover transition-all duration-1000 ease-out group-hover:scale-105",
               isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-110 blur-2xl"
            )}
          />
          
          {/* Soft Premium Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[1px] flex items-center justify-center p-6">
             <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center shadow-2xl mb-4 mx-auto">
                   <Eye size={22} />
                </div>
                <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white/90 mb-1">{item.title}</h4>
                <p className="text-[8px] font-bold uppercase tracking-widest text-white/40">View Full Archive</p>
             </div>
          </div>

          <div className="absolute top-4 right-4 z-20">
             <Badge className="bg-background/40 backdrop-blur-md border border-white/10 text-foreground font-black text-[7px] uppercase tracking-widest px-2.5 py-1">
               0{index + 1} / REF_{item.id.slice(0, 4)}
             </Badge>
          </div>
        </div>

        <CardHeader className="p-7 pb-3 relative z-10 flex-1">
          <div className="flex items-center gap-3 mb-3">
             <div className="p-1.5 rounded-lg bg-orange-500/10 text-orange-500">
               <Camera size={14} />
             </div>
             <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest bg-orange-500/5 border-none px-2.5 py-1 text-orange-500/80">
                Frame_Archive
             </Badge>
          </div>
          <CardTitle className="text-base font-black group-hover:text-primary transition-colors uppercase italic tracking-tight leading-tight mb-2">
            {item.title}<span className="text-orange-500 tracking-normal not-italic">.</span>
          </CardTitle>
          <CardDescription className="text-[11px] leading-relaxed line-clamp-2 font-medium text-muted-foreground/60">
            {item.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-7 pt-0 pb-4 relative z-10">
           <div className="flex flex-wrap gap-1">
              {item.tools.slice(0, 3).map((t: string) => (
                <Badge key={t} className="text-[7px] font-black uppercase tracking-widest px-2 py-0.5 bg-muted/50 text-muted-foreground border border-border/50 rounded-md group-hover:border-orange-500/30 group-hover:text-orange-500 transition-all">
                  {t}
                </Badge>
              ))}
           </div>
        </CardContent>

        <CardFooter className="p-7 pt-4 flex gap-3 mt-auto relative z-10">
          <Button variant="outline" className="flex-1 h-12 rounded-2xl gap-2 text-[10px] font-black uppercase tracking-widest border-border/60 hover:border-orange-500/50 group/btn transition-all duration-300 shadow-sm">
             Open Frame <Maximize2 size={14} className="group-hover/btn:scale-110 transition-transform" />
          </Button>
          <ShareAction 
            title={item.title} 
            url="#" 
            variant="outline"
            className="h-12 w-12 border-border/60 hover:border-orange-500/50 rounded-2xl bg-card/40 backdrop-blur-xl group-hover:bg-orange-500/5 transition-all"
            iconOnly={true}
          />
        </CardFooter>
      </Card>
    </motion.div>
  );
});

PhotoCard.displayName = "PhotoCard";

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

  const handleDownload = async (url: string, title: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${title.replace(/\s+/g, "_")}_HD.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  // Preload adjacent images
  React.useEffect(() => {
    if (selectedPhoto) {
      const nextIdx = (activeImageIdx + 1) % selectedPhoto.images.length;
      const prevIdx = (activeImageIdx - 1 + selectedPhoto.images.length) % selectedPhoto.images.length;
      
      const nextImg = new window.Image();
      nextImg.src = selectedPhoto.images[nextIdx];
      
      const prevImg = new window.Image();
      prevImg.src = selectedPhoto.images[prevIdx];
    }
  }, [selectedPhoto, activeImageIdx]);

  return (
    <div className="relative min-h-screen pb-32">
      {/* ── Background Aesthetics ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-500/5 blur-[150px] rounded-full animate-[pulse_10s_ease-in-out_infinite] delay-1000" />
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
            <div className="flex p-1.5 bg-card/40 backdrop-blur-2xl border border-border/40 rounded-[2rem] shadow-2xl shadow-black/20">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto px-4 md:px-0 mt-20">
                {videoItems.map((item, i) => (
                  <VideoCard 
                    key={item.id} 
                    item={item} 
                    index={i} 
                  />
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

              {/* ── PHOTOGRAPHY (UNIFIED GRID) ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto px-4 md:px-0">
                {photoItems.map((item, i) => (
                  <PhotoCard 
                    key={item.id} 
                    item={item} 
                    index={i} 
                    onClick={() => openLightbox(item)} 
                  />
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
      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-[100vw] w-full h-[100dvh] p-0 bg-transparent border-none overflow-hidden select-none outline-none flex items-center justify-center sm:p-4 lg:p-12 z-[100]">
            <div className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xl" onClick={() => setSelectedPhoto(null)} />
            
            <div className="relative flex flex-col lg:flex-row w-full max-w-7xl h-full lg:h-[85vh] bg-background border border-border/40 rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl z-10 transition-all duration-300">
               
               {/* Close Button (Absolute Mobile) */}
               <Button 
                 variant="ghost" 
                 size="icon" 
                 onClick={() => setSelectedPhoto(null)} 
                 className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/50 border border-border/40 text-foreground hover:bg-destructive/10 hover:text-destructive transition-all z-[60] lg:hidden"
               >
                 <X size={18} />
               </Button>

               {/* ── LEFT SIDE: MEDIA PREVIEW (65%) ── */}
               <div className="lg:w-[65%] h-[40vh] sm:h-[50vh] lg:h-full relative group bg-muted/20 overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border/10">
                  {/* Performance-friendly background blur */}
                  <div className="absolute inset-0 z-0 opacity-10 hidden lg:block">
                    <Image 
                      src={selectedPhoto?.images[activeImageIdx]} 
                      alt="" 
                      fill 
                      className="object-cover blur-[100px] scale-110"
                    />
                  </div>

                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeImageIdx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="relative z-10 w-full h-full flex items-center justify-center"
                    >
                      <Image 
                        src={selectedPhoto?.images[activeImageIdx]} 
                        alt="Preview" 
                        fill 
                        className="object-contain p-4 sm:p-10 lg:p-14"
                        priority
                        quality={95}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows - Simplified & Stable */}
                  {selectedPhoto?.images.length > 1 && (
                    <>
                       <button 
                         onClick={(e) => { e.stopPropagation(); setActiveImageIdx(prev => (prev === 0 ? selectedPhoto.images.length - 1 : prev - 1)); }}
                         className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/60 backdrop-blur-md border border-border/40 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all z-[50]"
                         aria-label="Previous Image"
                       >
                         <ChevronLeft size={20} />
                       </button>
                       <button 
                         onClick={(e) => { e.stopPropagation(); setActiveImageIdx(prev => (prev === selectedPhoto.images.length - 1 ? 0 : prev + 1)); }}
                         className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/60 backdrop-blur-md border border-border/40 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all z-[50]"
                         aria-label="Next Image"
                       >
                         <ChevronRight size={20} />
                       </button>
                    </>
                  )}
                  
                  {/* Indicators */}
                  <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-20">
                     <div className="px-4 py-1.5 rounded-full bg-background/60 backdrop-blur-md border border-border/40 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                        {activeImageIdx + 1} / {selectedPhoto?.images.length} • SEQUENCE
                     </div>
                  </div>
               </div>

               {/* ── RIGHT SIDE: INFO PANEL (35%) ── */}
               <div className="lg:w-[35%] flex flex-col h-full bg-card/60 backdrop-blur-3xl overflow-hidden">
                  <div className="flex-1 overflow-y-auto scrollbar-hide px-8 py-10 sm:p-12 space-y-10">
                     {/* Header Section */}
                     <div className="space-y-4">
                        <SectionLabel className="text-primary">Creative Asset Analysis</SectionLabel>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black italic uppercase tracking-tighter leading-[0.9] text-foreground">
                           {selectedPhoto?.title}<span className="text-orange-500 not-italic">.</span>
                        </h2>
                        <div className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
                           <MapPin size={14} />
                           <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                              {selectedPhoto?.location || "Global Creative Lab"}
                           </span>
                        </div>
                     </div>

                     {/* Detail Section */}
                     <div className="space-y-5">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40 flex items-center gap-4">
                           <Info size={14} /> Description <div className="h-px bg-border/40 flex-1" />
                        </h4>
                        <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed italic border-l-2 border-orange-500/20 pl-6">
                           {selectedPhoto?.description}
                        </p>
                     </div>

                     {/* Matrix (Thumbnail Grid) */}
                     <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40 flex items-center gap-4">
                           <Layers size={14} /> Perspective Matrix <div className="h-px bg-border/40 flex-1" />
                        </h4>
                        <div className="grid grid-cols-4 gap-3 sm:gap-4">
                           {selectedPhoto?.images.map((img: string, idx: number) => (
                              <button 
                                key={idx} 
                                onClick={() => setActiveImageIdx(idx)}
                                className={cn(
                                  "aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 relative group/thumb",
                                  activeImageIdx === idx 
                                    ? "border-orange-500 ring-4 ring-orange-500/10 opacity-100 shadow-xl" 
                                    : "border-border/40 opacity-40 hover:opacity-100 hover:border-border"
                                )}
                              >
                                 <Image src={img} alt="" fill className="object-cover" />
                                 <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover/thumb:opacity-100 transition-opacity" />
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Actions Section */}
                  <div className="p-8 sm:p-10 border-t border-border/40 bg-muted/20 space-y-4">
                     <Button 
                       onClick={() => handleDownload(selectedPhoto.images[activeImageIdx], selectedPhoto.title)}
                       size="lg" 
                       className="w-full gap-3 font-black text-[10px] uppercase tracking-widest h-14 rounded-2xl shadow-xl shadow-orange-500/20 bg-orange-500 text-white hover:bg-orange-600 transition-all"
                     >
                        <Download size={18} /> Download HD
                     </Button>
                     <div className="flex gap-4">
                        <Button variant="outline" size="lg" className="flex-1 h-14 rounded-2xl border-border hover:bg-muted transition-all text-[10px] font-black uppercase tracking-widest text-foreground">
                           <ShareAction title={selectedPhoto?.title} url="#" variant="ghost" iconOnly={false} className="w-full h-full p-0 border-none justify-center font-black gap-2" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => setSelectedPhoto(null)}
                          className="w-14 h-14 rounded-2xl border-border hover:bg-destructive/10 hover:border-destructive hover:text-destructive transition-all hidden lg:flex items-center justify-center shrink-0 text-foreground"
                        >
                           <X size={20} />
                        </Button>
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
