"use client";

import React, { useEffect, useState, useMemo } from "react";
import { 
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, Star, Search, ExternalLink, ChevronLeft, Loader2, RefreshCw
} from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/Shared";
import { ShareAction } from "@/components/ShareAction";
import { Pagination } from "@/components/Pagination";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

const ITEMS_PER_PAGE = 10;

export default function AllProjectsPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchRepos = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.github.com/users/Deepak5556/repos?sort=updated&per_page=100");
      const data = await res.json();
      if (Array.isArray(data)) {
        setRepos(data);
      }
    } catch (err) {
      console.error("Failed to fetch repos", err);
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
      (repo.description && repo.description.toLowerCase().includes(search.toLowerCase()))
    );
  }, [repos, search]);

  const totalPages = Math.ceil(filteredRepos.length / ITEMS_PER_PAGE);
  
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredRepos.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredRepos, currentPage]);

  // Reset to first page when searching
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <div className="animate-fade-up">
      <div className="flex flex-col gap-6 mb-8 sm:mb-12">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-4 -ml-2 text-muted-foreground hover:text-foreground">
            <Link href="/webdev">
              <ChevronLeft size={16} className="mr-1" /> Back to Web Dev
            </Link>
          </Button>
          <SectionLabel>Engineering</SectionLabel>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mt-2">
            GitHub Archive<span className="text-orange-500">.</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl font-medium">
            Explore my latest open-source contributions and development history.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative group flex-1 sm:flex-initial">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
              <input 
                type="text" 
                placeholder="Search projects..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 bg-muted/50 border border-border/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-full sm:w-64 transition-all h-11 sm:h-10"
              />
            </div>
            <Button variant="outline" size="icon" onClick={fetchRepos} className="shrink-0 h-11 w-11 sm:h-10 sm:w-10 rounded-xl hover:border-primary/50 transition-colors">
              <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
            </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 sm:py-32 gap-4">
          <Loader2 size={36} className="animate-spin text-primary opacity-50" />
          <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-muted-foreground/60">Fetching latest activity...</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 min-[2000px]:grid-cols-3 gap-4 sm:gap-6">
            {currentItems.map((repo) => (
              <Card key={repo.id} className="card-hover flex flex-col group h-full border-border/50 bg-card/30 backdrop-blur-sm relative overflow-hidden">
                <CardHeader className="pb-3 flex-1 px-4 sm:px-6 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-[10px] font-mono bg-muted/40 border-none font-black tracking-wider px-2 py-0.5">
                        {repo.language || "Markdown"}
                      </Badge>
                      <div className="flex items-center gap-3 text-muted-foreground">
                          <span className="flex items-center gap-1.5 text-xs font-bold tabular-nums">
                             <Star size={13} fill="currentColor" className="text-orange-500 border-none" /> {repo.stargazers_count}
                          </span>
                      </div>
                  </div>
                  <CardTitle className="text-base sm:text-lg font-black group-hover:text-primary transition-colors truncate">
                    {repo.name.replace(/-/g, " ")}<span className="text-orange-500">.</span>
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm leading-relaxed line-clamp-2 mt-2 font-medium text-muted-foreground/80">
                    {repo.description || "Experimental repository focusing on technical implementation."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 px-4 sm:px-6 relative z-10">
                   <div className="flex flex-wrap gap-1.5">
                      {repo.topics?.slice(0, 3).map(topic => (
                        <Badge key={topic} variant="secondary" className="text-[9px] font-black uppercase tracking-wider px-2 py-0 h-4 bg-primary/5 text-primary border-none">#{topic}</Badge>
                      ))}
                   </div>
                </CardContent>
                <CardFooter className="pt-4 p-4 sm:p-6 flex gap-2 border-t border-border/5 mt-4 relative z-10">
                  <Button variant="outline" className="flex-1 gap-2 text-[10px] font-black uppercase tracking-widest h-9 border-border/60 hover:border-primary/50 group/btn rounded-xl" asChild>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      <Github size={14} className="group-hover/btn:scale-110 transition-transform" /> View Source
                    </a>
                  </Button>
                  <ShareAction 
                    title={repo.name} 
                    url={repo.html_url} 
                    variant="outline"
                    size="default"
                    className="h-9 w-9 border-border/60 hover:border-primary/50 rounded-xl"
                    iconOnly={true}
                  />
                </CardFooter>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}

          {filteredRepos.length === 0 && (
            <div className="text-center py-16 sm:py-24 bg-muted/10 rounded-3xl border border-dashed border-border/50">
              <p className="text-sm sm:text-base font-black uppercase tracking-widest text-muted-foreground/40">No matching projects found</p>
              <Button variant="ghost" className="mt-4 text-xs font-bold" onClick={() => setSearch("")}>Clear Search Filter</Button>
            </div>
          )}
        </>
      )}

      {!loading && (
        <div className="mt-14 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-primary/5 border border-primary/10 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[120px] -ml-32 -mt-32" />
            <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-black mb-3">Keen to see more activity?</h3>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed">
                  I'm constantly pushing code, experiments, and open-source fixes. Follow me on GitHub to stay in the loop with my latest commits.
                </p>
                <Button className="gap-2 px-8 h-12 rounded-xl font-black text-xs uppercase tracking-[0.1em] shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-all" asChild>
                  <a href="https://github.com/Deepak5556" target="_blank" rel="noopener noreferrer">
                    <Github size={18} /> @Deepak5556
                  </a>
                </Button>
            </div>
        </div>
      )}
    </div>
  );
}
