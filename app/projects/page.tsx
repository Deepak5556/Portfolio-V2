"use client";

import React, { useEffect, useState, useMemo, Suspense } from "react";
import { 
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, Star, Search, ChevronLeft, Loader2, RefreshCw, 
  Layers, Filter, Sparkles, LayoutGrid, List, ArrowRight,
  TrendingUp, GitFork, AlertTriangle, Code2, Smartphone
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { SectionLabel } from "@/components/Shared";
import { ShareAction } from "@/components/ShareAction";
import { Pagination } from "@/components/Pagination";
import { projects as localProjects } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

const ITEMS_PER_PAGE = 100;

function ProjectsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const projectName = searchParams.get("project");
    if (projectName) {
      router.push(`/projects/${projectName}`);
    }
  }, [searchParams, router]);

  const fetchRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://api.github.com/users/Deepak5556/repos?sort=updated&per_page=100", {
         cache: 'no-store'
      });
      
      if (res.status === 403) {
        throw new Error("GitHub API Rate Limit Reached");
      }
      
      if (!res.ok) throw new Error(`API Connection Failed (Status: ${res.status})`);
      
      const data = await res.json();
      if (Array.isArray(data)) {
        setRepos(data);
      }
    } catch (err: any) {
      console.error("Fetch encounter:", err);
      setError(err.message);
      
      // Fallback: Use everything from lib/data.ts + Mock Repos
      const fallbackRepos: Repo[] = localProjects.map((p, idx) => ({
        id: -idx - 1,
        name: p.title.replace(/\s+/g, '-'),
        description: p.description,
        html_url: p.link || "https://github.com/Deepak5556",
        stargazers_count: Math.floor(Math.random() * 5),
        forks_count: 0,
        language: p.tech[0] || "Architecture",
        updated_at: new Date().toISOString(),
        topics: p.tech
      }));
      setRepos(fallbackRepos);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const filteredRepos = useMemo(() => {
    return repos.filter(repo => 
      repo.name.toLowerCase().includes(search.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(search.toLowerCase())) ||
      (repo.topics && repo.topics.some(t => t.toLowerCase().includes(search.toLowerCase())))
    );
  }, [repos, search]);

  const totalPages = Math.ceil(filteredRepos.length / ITEMS_PER_PAGE);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredRepos.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredRepos, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <div className="max-w-7xl mx-auto pb-20 px-4 md:px-0">
      {/* ─── STATUS ALERT ─── */}
      <AnimatePresence>
        {error && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="mb-8 overflow-hidden"
          >
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-center gap-4 text-amber-500">
               <AlertTriangle size={20} className="shrink-0" />
               <div className="flex-1">
                 <p className="text-[10px] font-black uppercase tracking-widest">System Warning: {error}</p>
                 <p className="text-[9px] font-bold opacity-60 uppercase tracking-widest mt-0.5">Automated sync from local archive enabled to keep archive accessible.</p>
               </div>
               <Button variant="ghost" size="sm" onClick={fetchRepos} className="h-8 rounded-lg font-black text-[9px] uppercase border border-amber-500/30 hover:bg-amber-500/10">Retry Sync</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── HEADER ─── */}
      <div className="flex flex-col gap-10 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-4">
                 <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-muted-foreground/40">
                    Digital Labs Archive
                 </div>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-xl shadow-primary/5 border border-primary/10">
                   <Layers size={24} />
                </div>
                <div>
                   <SectionLabel>Architecture Archive</SectionLabel>
                   <h1 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tight leading-none mt-1">
                     Digital Labs<span className="text-primary not-italic tracking-normal">.</span><span className="text-primary not-italic tracking-normal uppercase text-sm sm:text-lg font-bold ml-4 tabular-nums">({filteredRepos.length})</span>
                   </h1>
                </div>
             </div>
          </div>
          
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-2 self-end group">
                {!error ? (
                  <>
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/30 italic group-hover:text-muted-foreground/60 transition-colors">Cluster Synchronized</span>
                  </>
                ) : (
                  <span className="text-[10px] font-black uppercase tracking-widest text-destructive/60 italic">Neural Link Offline</span>
                )}
             </div>
             <div className="flex items-center gap-2 bg-muted/20 p-1 rounded-xl border border-border/40">
                <Button 
                   variant={viewMode === 'grid' ? 'secondary' : 'ghost'} 
                   size="icon" 
                   onClick={() => setViewMode('grid')}
                   className="h-8 w-8 rounded-lg shadow-sm"
                >
                   <LayoutGrid size={14} />
                </Button>
                <Button 
                   variant={viewMode === 'list' ? 'secondary' : 'ghost'} 
                   size="icon" 
                   onClick={() => setViewMode('list')}
                   className="h-8 w-8 rounded-lg"
                >
                   <List size={14} />
                </Button>
             </div>
          </div>
        </div>

        {/* ─── SEARCH & FILTER ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
           <div className="md:col-span-8 relative group">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/40 transition-colors group-focus-within:text-primary" />
              <input 
                type="text" 
                placeholder="Query software node name or module tag..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 pr-6 py-4 bg-card/40 backdrop-blur-xl border border-border/60 rounded-[1.5rem] text-sm font-bold placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/10 w-full transition-all shadow-xl shadow-black/5"
              />
           </div>
           <div className="md:col-span-4 flex items-center gap-3">
              <Button 
                variant="outline" 
                onClick={fetchRepos} 
                className="flex-1 h-14 rounded-[1.5rem] border-border/60 hover:border-primary/50 bg-card/40 backdrop-blur-xl gap-3 font-black text-[10px] uppercase tracking-widest group shadow-lg"
              >
                <RefreshCw size={16} className={loading ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-500"} /> System Scan
              </Button>
              <Button variant="outline" size="icon" className="h-14 w-14 rounded-[1.5rem] border-border/60 bg-card/40 backdrop-blur-xl opacity-40 grayscale cursor-not-allowed">
                 <Filter size={18} />
              </Button>
           </div>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-48 gap-8 animate-pulse px-4 md:px-0">
          <div className="relative">
             <Loader2 size={48} className="animate-spin text-primary opacity-20" />
             <TrendingUp size={24} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary opacity-40 animate-bounce" />
          </div>
          <div className="text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground/40 leading-none mb-2">Retrieving Digital Assets</p>
            <p className="text-[9px] font-bold text-muted-foreground/20 italic tracking-widest uppercase">Encryption Pass verified</p>
          </div>
        </div>
      ) : (
        <div className="px-4 md:px-0">
          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "flex flex-col gap-4 max-w-4xl mx-auto"
              }
            >
              {currentItems.map((repo, idx) => (
                <motion.div
                  layout
                  key={repo.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ delay: idx * 0.03, duration: 0.3 }}
                >
                  <Card className={`group h-full border-border/40 bg-card/30 backdrop-blur-3xl relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 rounded-[2rem] flex flex-col ${viewMode === 'list' ? 'flex-row items-center p-2 h-auto' : ''}`}>
                    {viewMode === 'grid' && (
                       <div className="relative w-full aspect-video overflow-hidden border-b border-border/10 bg-muted/20 flex items-center justify-center">
                          <Code2 size={48} className="text-primary/10 group-hover:scale-110 group-hover:text-primary/20 transition-all duration-700" />
                          <div className="absolute top-3 right-3 z-20">
                             <Badge className="bg-background/40 backdrop-blur-md border border-white/10 text-white font-black text-[8px] uppercase tracking-widest">
                               {repo.id < 0 ? 'Archive' : 'Module'}
                             </Badge>
                          </div>
                       </div>
                    )}
                    
                    <CardHeader className={`flex-1 relative z-10 ${viewMode === 'list' ? 'p-4 flex-[2]' : 'p-8 pb-3'}`}>
                      <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                             <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest bg-primary/5 border-none px-2.5 py-1 text-primary">
                                {repo.language || "Native Logic"}
                             </Badge>
                          </div>
                          <div className="flex items-center gap-3 text-muted-foreground/60 transition-colors group-hover:text-primary">
                              <span className="flex items-center gap-1.5 text-xs font-black tabular-nums">
                                 <Star size={12} fill="currentColor" className="text-orange-500 border-none" /> {repo.stargazers_count}
                              </span>
                          </div>
                      </div>
                      <CardTitle className="text-lg sm:text-xl font-black group-hover:text-primary transition-colors truncate uppercase italic tracking-tight leading-none mb-1">
                        {repo.name.replace(/-/g, " ")}<span className="text-primary tracking-normal not-italic">.</span>
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm leading-relaxed line-clamp-2 font-medium text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                        {repo.description || "Quantum encoded architecture node requiring system access for full documentation."}
                      </CardDescription>
                    </CardHeader>

                    {viewMode === 'grid' && (
                      <CardContent className="pt-0 p-8 pb-4 relative z-10">
                         <div className="flex flex-wrap gap-2">
                            {(repo.topics?.length ? repo.topics.slice(0, 3) : ['Architecture', 'Logic']).map((topic, i) => (
                              <Badge key={i} variant="secondary" className="text-[8px] font-black uppercase tracking-widest px-2.5 py-1 bg-muted/30 text-muted-foreground border-none group-hover:bg-primary/5 group-hover:text-primary transition-all rounded-lg">#{topic}</Badge>
                            ))}
                         </div>
                      </CardContent>
                    )}

                    <CardFooter className={`relative z-10 ${viewMode === 'list' ? 'p-4 flex-1 border-none mt-0' : 'p-8 pt-4 flex gap-3 mt-auto'}`}>
                      <Button variant="outline" className={`gap-2 text-[10px] font-black uppercase tracking-widest border-border/60 group/btn shadow-sm transition-all duration-300 ${viewMode === 'list' ? 'w-full h-11' : 'flex-1 h-12 rounded-2xl hover:border-primary/50'}`} asChild>
                        <Link href={`/projects/${repo.name}`}>
                          Explore Node <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      {viewMode === 'grid' && (
                        <ShareAction 
                          title={repo.name} 
                          url={repo.html_url} 
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

          {filteredRepos.length === 0 && (
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-center py-24 bg-card/10 backdrop-blur-xl rounded-[3rem] border border-dashed border-border/40 max-w-4xl mx-auto shadow-inner"
            >
              <div className="w-16 h-16 rounded-3xl bg-muted/20 flex items-center justify-center mx-auto mb-6">
                 <Sparkles size={24} className="text-muted-foreground opacity-20" />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.4em] text-muted-foreground/30">Node Correlation Sequence Failure</p>
              <p className="text-xs font-bold text-muted-foreground/20 italic mt-2">Zero matching entities identified in the current sector.</p>
              <Button variant="ghost" className="mt-8 text-[11px] font-black uppercase tracking-widest text-primary hover:bg-primary/5" onClick={() => setSearch("")}>Reset Filtering Core</Button>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}

export default function AllProjectsPage() {
  return (
    <Suspense fallback={<div className="flex h-96 items-center justify-center"><Loader2 className="animate-spin text-primary opacity-20" size={48} /></div>}>
      <ProjectsContent />
    </Suspense>
  );
}
