"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, ExternalLink, Award, GitBranch, Star, ArrowRight, 
  Code2, Smartphone, Search, Filter, Loader2, Sparkles,
  LayoutGrid, List, RefreshCw
} from "lucide-react";
import Link from "next/link";
import { SectionLabel, Pill } from "@/components/Shared";
import { achievements } from "@/lib/data";
import { GithubCalendarWrapper } from "@/components/GithubCalendarWrapper";
import { ShareAction } from "@/components/ShareAction";
import { Pagination } from "@/components/Pagination";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Share2Icon } from "lucide-react";
import AnimatedBeamMultipleOutputDemo from "@/components/AnimatedBeamMultipleOutputDemo";
import Image from "next/image";

const features = [
  {
    Icon: Share2Icon,
    name: "API Integrations",
    description: "Seamlessly connecting Stripe, Firebase, AWS, and third-party services.",
    href: "/software",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-3",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-[1.02] overflow-hidden w-full max-w-none" />
    ),
  },
];

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

const ITEMS_PER_PAGE = 12;

function SoftwareContent() {
  const [activeTab, setActiveTab] = useState<"all" | "web" | "app">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const fetchRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://api.github.com/users/Deepak5556/repos?sort=updated&per_page=100");
      if (res.status === 403) {
        throw new Error("GitHub API rate limit exceeded");
      }
      if (!res.ok) {
        throw new Error(`Connection sequence failure: ${res.status}`);
      }
      const data = await res.json();
      setRepos(data);
    } catch (err: any) {
      console.error("Link Failure:", err);
      setError(err.message || "Unknown neural link error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const allProjects = useMemo(() => {
    // Return only GitHub repos
    return repos.map(repo => {
      const isFlutter = repo.language === "Dart" || repo.topics?.includes("flutter");
      return {
        title: repo.name.replace(/-/g, ' '),
        description: repo.description,
        tech: repo.topics?.length ? repo.topics : [repo.language].filter(Boolean),
        link: repo.html_url,
        image: "", 
        icon: isFlutter ? Smartphone : Code2,
        type: isFlutter ? 'app' as const : 'web' as const,
        stars: repo.stargazers_count,
        isGithub: true
      };
    });
  }, [repos]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                           p.description.toLowerCase().includes(search.toLowerCase()) ||
                           p.tech.some(t => t.toLowerCase().includes(search.toLowerCase()));
      const matchesTab = activeTab === "all" || p.type === activeTab;
      return matchesSearch && matchesTab;
    });
  }, [allProjects, search, activeTab]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const currentItems = filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto pb-20 px-4 md:px-0">
      {/* ─── HEADER ─── */}
      <div className="flex flex-col gap-8 mb-12">
        <div>
          <SectionLabel>Engineering Portfolio</SectionLabel>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tight leading-none mt-2">
            Software Labs<span className="text-orange-500 not-italic tracking-normal">.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground/70 leading-relaxed font-medium mt-6 max-w-2xl">
            A comprehensive archive of my web and mobile engineering projects. 
            From high-performance React applications to native-feel Flutter experiences.
          </p>
        </div>

        {/* Technical Recognition & Contributions */}
        <div className="mt-4">
          <h3 className="text-xs sm:text-sm font-black text-muted-foreground uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
            Technical Recognition & Contributions <div className="h-px bg-border flex-1" />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((a, i) => (
              <Link key={i} href={`/achievements/${a.id}`}>
                <Card className="card-hover cursor-pointer h-full border-border/40 bg-card/40 backdrop-blur-sm group overflow-hidden rounded-[1.5rem] p-6 transition-all hover:bg-card/60">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform shadow-sm">
                        <Award size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-black tracking-tight">{a.event}<span className="text-orange-500">.</span></h4>
                        <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">{a.org} • {a.year}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed font-medium mt-4">{a.desc}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* ─── TABS & SEARCH ─── */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex p-1 bg-muted/20 border border-border/40 rounded-2xl w-full md:w-auto">
            {(["all", "web", "app"] as const).map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "secondary" : "ghost"}
                onClick={() => { setActiveTab(tab); setCurrentPage(1); }}
                className="flex-1 md:flex-none h-10 px-6 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all"
              >
                {tab === "all" ? "Core Archive" : tab === "web" ? "Web Nodes" : "Mobile Modules"}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
             <div className="relative flex-1 md:w-80 group">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/40 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Query modules..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                   className="w-full pl-11 pr-4 py-3 bg-card/40 border border-border/60 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                />
             </div>
             <Button variant="outline" size="icon" onClick={() => setViewMode(v => v === 'grid' ? 'list' : 'grid')} className="h-11 w-11 rounded-xl border-border/60 shrink-0">
                {viewMode === 'grid' ? <List size={18} /> : <LayoutGrid size={18} />}
             </Button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="py-32 flex flex-col items-center justify-center gap-6">
           <Loader2 size={40} className="animate-spin text-primary opacity-20" />
           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40 text-center">Synchronizing Remote Repositories</p>
        </div>
      ) : error ? (
        <div className="py-24 px-8 rounded-[2.5rem] bg-destructive/5 border border-destructive/10 text-center max-w-2xl mx-auto mb-12">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6 text-destructive">
                <Filter size={24} className="opacity-40" />
            </div>
            <h3 className="text-xl font-black uppercase italic mb-2">Neural Link Offline<span className="text-orange-500">.</span></h3>
            <p className="text-sm text-muted-foreground mb-8 font-medium">{error}</p>
            <Button onClick={fetchRepos} variant="outline" className="h-12 px-8 rounded-xl border-destructive/20 hover:bg-destructive/10 gap-2 font-black text-[10px] uppercase tracking-widest">
                <RefreshCw size={14} /> Re-establish Link
            </Button>
        </div>
      ) : (
        <>
          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "flex flex-col gap-4 max-w-4xl mx-auto"
              }
            >
              {currentItems.map((p, idx) => (
                <motion.div
                  layout
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className={`group h-full border-border/40 bg-card/30 backdrop-blur-3xl relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 rounded-[2rem] flex flex-col ${viewMode === 'list' ? 'flex-row items-center p-2 h-auto' : ''}`}>
                    {viewMode === 'grid' && p.image && (
                      <div className="relative w-full aspect-video overflow-hidden border-b border-border/10">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute top-3 right-3 z-20">
                           <Badge className="bg-background/40 backdrop-blur-md border border-white/10 text-white font-black text-[8px] uppercase tracking-widest">
                             {p.type}
                           </Badge>
                        </div>
                      </div>
                    )}

                    <CardHeader className={`flex-1 relative z-10 ${viewMode === 'list' ? 'p-4 flex-[2]' : 'p-8 pb-3'}`}>
                      <div className="flex items-center justify-between mb-3">
                         <div className="flex items-center gap-2">
                           <div className={`p-2 rounded-lg ${p.type === 'web' ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'}`}>
                             {p.type === 'web' ? <Code2 size={16} /> : <Smartphone size={16} />}
                           </div>
                           <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest bg-primary/5 border-none px-2.5 py-1 text-primary">
                              GitHub Source
                           </Badge>
                         </div>
                         {(p as any).stars > 0 && (
                            <div className="flex items-center gap-1.5 text-[10px] font-black text-orange-500 tabular-nums">
                               <Star size={12} fill="currentColor" /> {(p as any).stars}
                            </div>
                         )}
                      </div>
                      <CardTitle className="text-lg sm:text-xl font-black group-hover:text-primary transition-colors uppercase italic tracking-tight leading-none mb-1">
                        {p.title}<span className="text-orange-500 tracking-normal not-italic">.</span>
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm leading-relaxed line-clamp-2 font-medium text-muted-foreground/60">
                        {p.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className={`relative z-10 pt-0 ${viewMode === 'list' ? 'hidden' : 'p-8 pb-4'}`}>
                       <div className="flex flex-wrap gap-1.5">
                          {p.tech.slice(0, 4).map((t: string) => (
                            <Badge key={t} variant="secondary" className="text-[8px] font-black uppercase tracking-widest px-2.5 py-1 bg-muted/30 text-muted-foreground border-none group-hover:bg-primary/5 group-hover:text-primary transition-all">
                              {t}
                            </Badge>
                          ))}
                       </div>
                    </CardContent>

                    <CardFooter className={`relative z-10 ${viewMode === 'list' ? 'p-4 flex-1 border-none mt-0' : 'p-8 pt-4 flex gap-3 mt-auto'}`}>
                      <Button variant="outline" className={`gap-2 text-[10px] font-black uppercase tracking-widest border-border/60 group/btn shadow-sm transition-all duration-300 ${viewMode === 'list' ? 'w-full h-11' : 'flex-1 h-12 rounded-2xl hover:border-primary/50'}`} asChild>
                         <a href={p.link || "#"} target="_blank" rel="noopener noreferrer">
                            Visit {p.type === 'web' ? 'Site' : 'Repo'} <ExternalLink size={14} className="group-hover/btn:scale-110 transition-transform" />
                         </a>
                      </Button>
                      {viewMode === 'grid' && p.link && (
                        <ShareAction 
                          title={p.title} 
                          url={p.link} 
                          variant="outline"
                          className="h-12 w-12 border-border/60 hover:border-primary/50 rounded-2xl bg-card/40 backdrop-blur-xl group-hover:bg-primary/5 transition-all"
                          iconOnly={true}
                        />
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <div className="mt-16 flex justify-center">
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </>
      )}

        <div className="p-1 rounded-[2rem] bg-muted/20 border border-border/50">
          <GithubCalendarWrapper username="Deepak5556" />
        </div>

        {/* Engineering Workflow */}
        <div className="mt-24">
          <h3 className="text-xs sm:text-sm font-black text-muted-foreground uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
            Engineering Workflow <div className="h-px bg-border flex-1" />
          </h3>
          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>

        {/* CTA */}
        <div className="mt-24 p-8 sm:p-16 rounded-[3rem] bg-primary/5 border border-primary/10 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48 transition-all group-hover:bg-primary/10" />
          <div className="relative z-10">
              <h3 className="text-2xl sm:text-4xl font-black mb-4 italic uppercase">Building the Future of Software<span className="text-orange-500">.</span></h3>
              <p className="text-sm sm:text-lg font-medium text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Whether it's a high-impact web platform or a native mobile application, 
                I deliver engineering excellence with a focus on performance and precision.
              </p>
              <Button size="lg" className="h-14 px-10 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 hover:translate-y-[-4px] transition-all" asChild>
                <Link href="/contact">
                  Initiate Connection <ArrowRight size={20} />
                </Link>
              </Button>
          </div>
      </div>
    </div>
  );
}

export default function SoftwarePage() {
  return (
    <Suspense fallback={<div className="flex h-96 items-center justify-center"><Loader2 className="animate-spin text-primary opacity-20" size={48} /></div>}>
      <SoftwareContent />
    </Suspense>
  );
}
