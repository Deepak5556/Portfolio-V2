"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card, CardHeader, CardTitle, CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Search, LayoutTemplate, Palette, MonitorSmartphone, Type, MonitorPlay, ArrowRight, Eye, Calendar, X, ChevronLeft, ChevronRight, PenTool, Hash, ExternalLink
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionLabel } from "@/components/Shared";
import { designProjects } from "@/lib/data";

const categories = ["All", "Web Design", "Mobile App Design", "Dashboard Design", "Branding"] as const;
type Category = typeof categories[number];

function EmptyState() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center py-32 px-4 text-center w-full min-h-[50vh] relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      
      <div className="relative mb-12 flex justify-center w-full z-10">
        <div className="relative w-40 h-40 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(168,85,247,0.15)] animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute inset-4 rounded-full border border-primary/30 animate-[spin_15s_linear_infinite]" />
          <div className="absolute inset-8 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite_reverse]" />
          
          <div className="relative z-10 p-6 rounded-full bg-card/40 backdrop-blur-xl shadow-2xl border border-border/50">
            <LayoutTemplate className="w-12 h-12 text-primary drop-shadow-md" />
          </div>

          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 blur-[2px] opacity-70 animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-bl from-orange-400 to-red-400 blur-[2px] opacity-70 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        </div>
      </div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl sm:text-4xl font-black tracking-tight mb-4 uppercase italic z-10"
      >
        No Designs Found<span className="text-orange-500 not-italic">.</span>
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-base sm:text-lg text-muted-foreground/70 font-medium max-w-md mx-auto mb-10 leading-relaxed z-10"
      >
        New creative works will be updated soon.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full sm:w-auto"
      >
        <Button 
          asChild 
          className="rounded-2xl h-14 px-8 text-[11px] font-black tracking-[0.2em] uppercase bg-primary text-primary-foreground shadow-2xl shadow-primary/20 hover:-translate-y-1 transition-all w-full sm:w-auto"
        >
          <Link href="/">
             Explore Home
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Web Design": return <MonitorSmartphone size={16} />;
    case "Mobile App Design": return <LayoutTemplate size={16} />;
    case "Dashboard Design": return <MonitorPlay size={16} />;
    case "Branding": return <Type size={16} />;
    default: return <Palette size={16} />;
  }
};

const ImageWithSkeleton = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={`relative w-full h-full overflow-hidden ${isLoading ? 'bg-muted/30 animate-pulse' : ''} ${className || ''}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
        decoding="async"
        className={`object-cover transition-all duration-700 ${isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100 group-hover:scale-110'}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default function DesignsPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<Category>("All");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const filteredDesigns = useMemo(() => {
    return designProjects.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
                            project.description.toLowerCase().includes(search.toLowerCase());
      const matchesTab = activeTab === "All" || project.category === activeTab;
      return matchesSearch && matchesTab;
    });
  }, [search, activeTab]);

  const featuredPosters = useMemo(() => {
    return designProjects.filter(p => p.featured);
  }, []);

  // Handle keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProjectIndex === null) return;
      if (e.key === "Escape") setSelectedProjectIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectIndex, filteredDesigns]);

  const handleNext = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex((selectedProjectIndex + 1) % filteredDesigns.length);
    }
  };

  const handlePrev = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex((selectedProjectIndex - 1 + filteredDesigns.length) % filteredDesigns.length);
    }
  };

  const openModalWithProject = (id: string) => {
    const index = filteredDesigns.findIndex(p => p.id === id);
    if (index !== -1) setSelectedProjectIndex(index);
  };

  const selectedProject = selectedProjectIndex !== null ? filteredDesigns[selectedProjectIndex] : null;

  return (
    <div className="max-w-7xl mx-auto pb-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <div className="flex flex-col gap-8 mb-16 pt-10">
        <div>
          <SectionLabel>Creative Portfolio</SectionLabel>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tight leading-none mt-2 drop-shadow-sm">
            Creative Designs <br/>
            & Posters<span className="text-orange-500 not-italic tracking-normal">.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-medium mt-6 max-w-2xl">
            A curated showcase of digital creativity, blending UI/UX engineering with cinematic visual arts and branding.
          </p>
        </div>
      </div>

      {designProjects.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          {/* Featured Poster Showcase */}
          {featuredPosters.length > 0 && activeTab === "All" && search === "" && (
            <div className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl sm:text-2xl font-black uppercase italic tracking-tight">
                  Featured Designs<span className="text-primary">.</span>
                </h2>
              </div>
              
              <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 gap-4 sm:gap-6 snap-x snap-mandatory no-scrollbar">
                {featuredPosters.map((poster, idx) => (
                  <motion.div 
                    key={poster.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => openModalWithProject(poster.id)}
                    className="snap-center shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[40vw] relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-primary/20 hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="aspect-[3/4] sm:aspect-video relative overflow-hidden bg-muted/20">
                      <ImageWithSkeleton src={poster.image} alt={poster.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity backdrop-blur-[1px] group-hover:backdrop-blur-sm" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 backdrop-blur-md uppercase tracking-widest text-[9px] font-black shadow-sm">
                          {poster.category}
                        </Badge>
                        <h3 className="text-2xl sm:text-3xl font-black text-white uppercase italic tracking-tight mb-2 drop-shadow-md">
                          {poster.title}
                        </h3>
                        <p className="text-white/80 text-sm font-medium line-clamp-2 max-w-lg mb-3">
                          {poster.description}
                        </p>
                        <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                           <Calendar size={12} /> {poster.date}
                        </div>
                      </div>

                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                        <Eye size={24} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Categories & Filter */}
          <div className="sticky top-16 sm:top-20 z-30 bg-background/80 backdrop-blur-xl border-b border-border/40 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 mb-8 sm:mb-10">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between">
              <div className="overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 py-1 select-none shrink-0">
                <div className="flex p-1 sm:p-1.5 bg-muted/30 border border-border/40 rounded-full w-max items-center gap-0.5 sm:gap-1">
                  {categories.map((tab) => {
                    const isActive = activeTab === tab;
                    return (
                      <button
                        key={tab}
                        onClick={() => { setActiveTab(tab); setSelectedProjectIndex(null); }}
                        className={`
                          relative px-3 sm:px-5 py-2 sm:py-2.5 rounded-full 
                          text-[10px] sm:text-xs font-bold uppercase tracking-[0.08em] sm:tracking-[0.1em] 
                          transition-all duration-300 ease-in-out whitespace-nowrap flex items-center gap-1.5 sm:gap-2
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
                          ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"}
                        `}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeDesignTab"
                            className="absolute inset-0 bg-background dark:bg-card border border-border/60 shadow-md rounded-full -z-10"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                          />
                        )}
                        <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                           {tab !== "All" && getCategoryIcon(tab)} {tab}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="relative w-full sm:w-72 md:w-80 group shrink-0">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/40 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search creative works..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 sm:py-3 bg-card/50 border border-border/60 rounded-full text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Design Grid */}
          {filteredDesigns.length === 0 ? (
            <div className="py-32 text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mb-6">
                <Search size={32} className="text-muted-foreground/50" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-2">No matches found</h3>
              <p className="text-muted-foreground font-medium">Try adjusting your category or search query.</p>
            </div>
          ) : (
            <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 lg:gap-6">
              <AnimatePresence mode="popLayout">
                {filteredDesigns.map((project, idx) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="break-inside-avoid mb-4 sm:mb-5 lg:mb-6"
                  >
                    <Card 
                      onClick={() => setSelectedProjectIndex(idx)}
                      className="group border-border/40 bg-card/20 backdrop-blur-xl relative overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 rounded-2xl sm:rounded-3xl flex flex-col cursor-pointer"
                    >
                      {/* Subtle hover glow */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 z-0 pointer-events-none" />
                      
                      <div className={`relative w-full overflow-hidden bg-muted/20 z-10 ${project.category === 'Posters' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                        {project.image ? (
                          <ImageWithSkeleton src={project.image} alt={project.title} />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-muted">
                            <Palette className="w-12 h-12 text-muted-foreground/20" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                          <Button variant="secondary" className="rounded-full shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300 gap-2 font-black text-[10px] uppercase tracking-widest pointer-events-none">
                             View Details <ArrowRight size={14} />
                          </Button>
                        </div>
                        <div className="absolute top-4 left-4 z-20">
                           <Badge className="bg-background/90 backdrop-blur-md border border-border/50 text-foreground font-black text-[9px] uppercase tracking-widest px-3 py-1.5 shadow-sm">
                             {project.category}
                           </Badge>
                        </div>
                      </div>

                      <CardHeader className="p-3.5 sm:p-5 flex-1 relative z-10 flex flex-col justify-between">
                        <div>
                          <CardTitle className="text-sm sm:text-base lg:text-lg font-black group-hover:text-primary transition-colors tracking-tight leading-tight mb-1.5 sm:mb-2">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-xs leading-relaxed font-medium text-muted-foreground/80 line-clamp-2">
                            {project.description}
                          </CardDescription>
                        </div>
                        {project.date && (
                          <div className="mt-4 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">
                            <Calendar size={12} /> {project.date}
                          </div>
                        )}
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </>
      )}

      {/* Visual Art Details Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Modal Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-xl" 
              onClick={() => setSelectedProjectIndex(null)}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-card/80 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-[2rem] overflow-hidden flex flex-col md:flex-row z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <button 
                onClick={() => setSelectedProjectIndex(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Left Side: Image */}
              <div className="w-full md:w-3/5 bg-black/90 relative min-h-[40vh] md:min-h-0 flex items-center justify-center p-4 sm:p-8">
                {selectedProject.image ? (
                  <div className={`relative w-full h-full max-h-[80vh] ${selectedProject.category === 'Posters' ? 'aspect-[3/4] max-w-md mx-auto' : 'aspect-video w-full'}`}>
                     <Image 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        fill 
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 768px) 100vw, 60vw"
                        priority
                        decoding="async"
                     />
                  </div>
                ) : (
                  <Palette className="w-24 h-24 text-white/10" />
                )}
                
                {/* Navigation Arrows inside image area on desktop */}
                {filteredDesigns.length > 1 && (
                  <>
                    <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/80 backdrop-blur-md text-white rounded-full transition-all hover:scale-110">
                      <ChevronLeft size={24} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/80 backdrop-blur-md text-white rounded-full transition-all hover:scale-110">
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col overflow-y-auto no-scrollbar max-h-[50vh] md:max-h-[90vh]">
                <Badge className="w-max mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 uppercase tracking-widest text-[10px] font-black">
                  {selectedProject.category}
                </Badge>
                
                <h2 className="text-2xl sm:text-3xl font-black italic tracking-tight uppercase leading-tight mb-4">
                  {selectedProject.title}<span className="text-orange-500 not-italic">.</span>
                </h2>
                
                <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-border/40">
                   {selectedProject.date && (
                     <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                       <Calendar size={14} className="text-primary" /> {selectedProject.date}
                     </div>
                   )}
                   {selectedProject.link && selectedProject.link !== "#" && (
                     <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-widest hover:underline underline-offset-4">
                       <ExternalLink size={14} /> Live Preview
                     </a>
                   )}
                </div>

                <div className="mb-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-3">About the Project</h4>
                  <p className="text-sm leading-relaxed text-foreground/80 font-medium">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.tools && selectedProject.tools.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-3 flex items-center gap-2">
                      <PenTool size={12} /> Software & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map(tool => (
                        <Badge key={tool} variant="outline" className="text-[10px] uppercase font-bold tracking-widest bg-muted/30 border-border/50">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.tags && selectedProject.tags.length > 0 && (
                  <div className="mt-auto pt-8 border-t border-border/40">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-3 flex items-center gap-2">
                      <Hash size={12} /> Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-muted-foreground/80 hover:text-primary transition-colors cursor-pointer">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
