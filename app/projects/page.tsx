"use client";

import React, { useEffect, useState } from "react";
import { 
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, Star, GitBranch, Search, Filter, 
  ExternalLink, ChevronLeft, Loader2, RefreshCw
} from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/Shared";

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

export default function AllProjectsPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  const filteredRepos = repos.filter(repo => 
    repo.name.toLowerCase().includes(search.toLowerCase()) ||
    (repo.description && repo.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="animate-fade-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-4 -ml-2 text-muted-foreground hover:text-foreground">
            <Link href="/webdev">
              <ChevronLeft size={16} className="mr-1" /> Back to Web Dev
            </Link>
          </Button>
          <SectionLabel>Engineering</SectionLabel>
          <h1 className="text-4xl font-bold tracking-tight mt-2">
            GitHub Archive<span className="accent-dot">.</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-xl">
            A real-time collection of my open-source projects, experiments, and contributions fetched directly via GitHub API.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative group">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
              <input 
                type="text" 
                placeholder="Search projects..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 bg-muted/50 border border-border/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-full sm:w-64 transition-all"
              />
            </div>
            <Button variant="outline" size="icon" onClick={fetchRepos} className="shrink-0 h-10 w-10">
              <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
            </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <Loader2 size={40} className="animate-spin text-primary" />
          <p className="text-sm font-medium text-muted-foreground">Syncing repositories from GitHub...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo) => (
            <Card key={repo.id} className="card-hover flex flex-col group h-full">
              <CardHeader className="pb-3 flex-1">
                <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-[10px] font-mono bg-muted/30 border-none">
                      {repo.language || "Markdown"}
                    </Badge>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <span className="flex items-center gap-1 text-xs">
                           <Star size={12} fill="currentColor" className="text-amber-400 border-none" /> {repo.stargazers_count}
                        </span>
                    </div>
                </div>
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors truncate">
                  {repo.name.replace(/-/g, " ")}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed line-clamp-3 mt-2 min-h-[4.5rem]">
                  {repo.description || "No description provided for this repository."}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                 <div className="flex flex-wrap gap-1.5 mt-2">
                    {repo.topics?.slice(0, 3).map(topic => (
                      <Badge key={topic} variant="secondary" className="text-[9px] px-1.5 py-0">#{topic}</Badge>
                    ))}
                 </div>
              </CardContent>
              <CardFooter className="pt-0 p-6">
                <Button variant="outline" className="w-full gap-2 text-xs font-semibold h-9 group/btn" asChild>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <Github size={14} className="group-hover/btn:scale-110 transition-transform" /> View Source <ExternalLink size={12} className="opacity-50" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {!loading && filteredRepos.length === 0 && (
        <div className="text-center py-24 bg-muted/20 rounded-3xl border border-dashed border-border">
          <p className="text-muted-foreground">No repositories found matching "{search}"</p>
          <Button variant="ghost" className="mt-4" onClick={() => setSearch("")}>Clear Search</Button>
        </div>
      )}

      {!loading && (
        <div className="mt-20 p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
            <h3 className="text-xl font-bold mb-2">Interested in my latest work?</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              I'm always pushing new code and experimenting with new tech. Follow me on GitHub to stay updated with my daily activity.
            </p>
            <Button className="gap-2 px-8" asChild>
              <a href="https://github.com/Deepak5556" target="_blank" rel="noopener noreferrer">
                <Github size={18} /> @Deepak5556
              </a>
            </Button>
        </div>
      )}
    </div>
  );
}
