"use client";

import React, { useEffect, useState } from "react";
import { 
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, Star, ExternalLink, ChevronLeft, Loader2, Code2, 
  FileText, GitBranch, Eye, History, Terminal, Folder, Award
} from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/Shared";
import { ShareAction } from "@/components/ShareAction";
import { projects as localProjects } from "@/lib/data";

interface RepoDetails {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  created_at: string;
  updated_at: string;
  size: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface RepoFile {
  name: string;
  path: string;
  type: "file" | "dir";
  size: number;
  download_url: string | null;
}

export default function ProjectDetailsClient({ name }: { name: string }) {
  const [repo, setRepo] = useState<RepoDetails | null>(null);
  const [readme, setReadme] = useState<string | null>(null);
  const [files, setFiles] = useState<RepoFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!name) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch Repo Info
        const repoRes = await fetch(`https://api.github.com/repos/Deepak5556/${name}`);
        if (!repoRes.ok) throw new Error("Repository not found");
        const repoData = await repoRes.json();
        setRepo(repoData);

        // Fetch README
        const readmeRes = await fetch(`https://api.github.com/repos/Deepak5556/${name}/readme`, {
          headers: { Accept: "application/vnd.github.v3.raw" }
        });
        if (readmeRes.ok) {
          const readmeText = await readmeRes.text();
          setReadme(readmeText);
        }

        // Fetch Files
        const filesRes = await fetch(`https://api.github.com/repos/Deepak5556/${name}/contents`);
        if (filesRes.ok) {
          const filesData = await filesRes.json();
          setFiles(Array.isArray(filesData) ? filesData : []);
        }

      } catch (err: any) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 sm:py-48 gap-4">
        <Loader2 size={40} className="animate-spin text-primary opacity-50" />
        <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-muted-foreground/60">Loading project details...</p>
      </div>
    );
  }

  if (error || !repo) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center px-4">
        <h2 className="text-2xl font-black mb-4">Project Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">We couldn't retrieve the details for "{name}". It might be private or deleted.</p>
        <Button asChild className="rounded-xl px-8 h-12 shadow-xl shadow-primary/20">
          <Link href="/projects">
            <ChevronLeft size={16} className="mr-2" /> Back to Archive
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="animate-fade-up max-w-5xl mx-auto px-4 md:px-0">
      {/* Header */}
      <div className="flex flex-col gap-6 mb-10 sm:mb-16">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-4 -ml-2 text-muted-foreground hover:text-foreground">
            <Link href="/projects">
              <ChevronLeft size={16} className="mr-1" /> Back to Archive
            </Link>
          </Button>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-xl shadow-primary/5 shrink-0">
                  <Code2 size={24} className="sm:hidden" />
                  <Code2 size={32} className="hidden sm:block" />
               </div>
               <div className="overflow-hidden">
                  <SectionLabel>Repository</SectionLabel>
                  <h1 className="text-2xl sm:text-4xl font-black tracking-tight mt-1 truncate">
                    {repo.name.replace(/-/g, " ")}<span className="text-orange-500">.</span>
                  </h1>
               </div>
            </div>
            <div className="flex items-center gap-2">
                <Button size="sm" className="gap-2 h-10 px-5 rounded-xl shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-all font-black text-[11px] uppercase tracking-widest" asChild>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <Github size={14} /> Open GitHub
                  </a>
                </Button>
                <ShareAction 
                  title={repo.name} 
                  url={typeof window !== 'undefined' ? window.location.href : ''} 
                  variant="outline"
                  className="h-10 w-10 border-border/60 hover:border-primary/50 rounded-xl"
                  iconOnly={true}
                />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Stars", value: repo.stargazers_count ?? 0, icon: Star, color: "text-orange-500" },
            { label: "Forks", value: repo.forks_count ?? 0, icon: GitBranch, color: "text-blue-500" },
            { label: "Watchers", value: repo.watchers_count ?? 0, icon: Eye, color: "text-emerald-500" },
            { label: "Files", value: files.length, icon: Folder, color: "text-purple-500" },
          ].map((stat, i) => (
            <div key={i} className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-4 flex items-center justify-between group hover:border-primary/30 transition-colors">
              <div className="overflow-hidden">
                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest leading-none mb-1">{stat.label}</p>
                <p className="text-lg font-black tabular-nums">{stat.value}</p>
              </div>
              <stat.icon size={20} className={`${stat.color} opacity-60 group-hover:scale-110 transition-transform flex-shrink-0`} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Info & Explanation */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h3 className="text-xs sm:text-sm font-black text-muted-foreground uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              Project Overview <div className="h-px bg-border flex-1" />
            </h3>
            <div className="bg-card/40 backdrop-blur-xl border border-border/30 rounded-3xl p-6 sm:p-8 space-y-6 overflow-hidden">
              <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed whitespace-pre-wrap">
                {repo.description || "No description provided for this repository."}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {repo.topics && repo.topics.length > 0 ? (
                  repo.topics.map(topic => (
                    <Badge key={topic} variant="secondary" className="px-3 py-1 font-black uppercase tracking-wider bg-primary/5 text-primary border-none text-[10px] sm:text-[11px]">#{topic}</Badge>
                  ))
                ) : (
                  <Badge variant="outline" className="opacity-50 text-[10px] font-bold uppercase tracking-widest">Experimental</Badge>
                )}
              </div>

              <div className="pt-6 border-t border-border/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Primary Language</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-sm font-bold uppercase">{repo.language || "Global"}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Last Synced</p>
                  <p className="text-sm font-bold uppercase">{new Date(repo.updated_at).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </section>

          {readme && (
            <section>
              <h3 className="text-xs sm:text-sm font-black text-muted-foreground uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                Technical Documentation <div className="h-px bg-border flex-1" />
              </h3>
              <div className="bg-muted/30 border border-border/30 rounded-3xl p-6 sm:p-10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                     <FileText size={120} />
                  </div>
                  <div className="relative z-10 prose prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap text-xs sm:text-sm font-mono text-muted-foreground/90 bg-transparent p-0 leading-relaxed overflow-hidden">
                      {readme}
                    </pre>
                  </div>
              </div>
            </section>
          )}

          <section>
            <h3 className="text-xs sm:text-sm font-black text-muted-foreground uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              Professional Insight <div className="h-px bg-border flex-1" />
            </h3>
            {(() => {
              const matchedProject = localProjects.find(p => 
                p.title.toLowerCase().replace(/\s+/g, '') === repo.name.toLowerCase().replace(/[-_]/g, '').replace(/\s+/g, '') ||
                repo.name.toLowerCase().includes(p.title.toLowerCase().split(' ')[0].toLowerCase())
              );
              
              if (matchedProject) {
                return (
                  <div className="bg-orange-500/5 border border-orange-500/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                       <Award size={100} className="text-orange-500" />
                    </div>
                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-600">
                             <Award size={16} />
                           </div>
                           <h4 className="text-lg font-black italic">Expert Vision<span className="text-orange-500">.</span></h4>
                        </div>
                        <p className="text-base font-medium leading-relaxed">
                          {matchedProject.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {matchedProject.tech.map(t => (
                            <Badge key={t} variant="secondary" className="text-[10px] font-black tracking-widest bg-orange-500/10 text-orange-600 border-none px-3 py-1">{t}</Badge>
                          ))}
                        </div>
                    </div>
                  </div>
                );
              }

              return (
                <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10 relative overflow-hidden">
                    <p className="text-sm font-medium leading-relaxed italic opacity-80">
                      This project was initiated on {new Date(repo.created_at).toLocaleDateString()} as part of {repo.owner.login}'s architectural research. 
                      Leveraging {repo.language || "modern technologies"}, it represents an iterative approach to {repo.name.replace(/-/g, " ")} system design, 
                      focused on maintainability and optimal performance.
                    </p>
                </div>
              );
            })()}
          </section>
        </div>

        {/* Sidebar: File List & Tools */}
        <div className="space-y-8">
           <section>
              <h3 className="text-xs sm:text-sm font-black text-muted-foreground uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                Source Explorer <div className="h-px bg-border flex-1" />
              </h3>
              <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl divide-y divide-border/20 overflow-hidden">
                {files.length > 0 ? (
                   files.slice(0, 15).map((file, i) => (
                    <div key={i} className="flex items-center justify-between px-4 py-3 hover:bg-primary/5 transition-colors group cursor-default">
                      <div className="flex items-center gap-3">
                         {file.type === "dir" ? (
                           <Folder size={14} className="text-blue-500 opacity-60" />
                         ) : (
                           <FileText size={14} className="text-muted-foreground opacity-60" />
                         )}
                         <span className="text-xs font-mono font-medium truncate max-w-[150px]">{file.name}</span>
                      </div>
                      {file.type === "file" && (
                        <span className="text-[10px] tabular-nums font-bold text-muted-foreground/50">{(file.size / 1024).toFixed(1)} KB</span>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-6 text-center text-xs text-muted-foreground/50">
                    Directory content unavailable
                  </div>
                )}
                {files.length > 15 && (
                  <div className="px-4 py-3 bg-muted/20 text-center">
                    <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">+{files.length - 15} more items</p>
                  </div>
                )}
              </div>
           </section>

           <section>
              <h3 className="text-xs sm:text-sm font-black text-muted-foreground uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                Tech Stack <div className="h-px bg-border flex-1" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {repo.language && <Badge className="bg-primary text-primary-foreground pointer-events-none uppercase font-black text-[10px] tracking-widest h-6 px-3">{repo.language}</Badge>}
                {repo.topics && repo.topics.slice(0, 5).map(t => (
                  <Badge key={t} variant="outline" className="border-border/60 font-bold uppercase text-[10px] tracking-wider bg-card/40 h-6 px-3">{t}</Badge>
                ))}
              </div>
           </section>

           <Card className="bg-muted/5 border border-dashed border-border/60 rounded-2xl mt-8">
              <CardHeader className="p-5 pb-2">
                 <div className="flex items-center gap-2 mb-1">
                    <Terminal size={14} className="text-muted-foreground" />
                    <CardTitle className="text-[10px] sm:text-xs font-black uppercase tracking-widest">Clone Project</CardTitle>
                 </div>
              </CardHeader>
              <CardContent className="px-5 pb-5">
                 <div className="bg-background border border-border/80 rounded-lg p-3 flex items-center justify-between group overflow-hidden">
                    <code className="text-[10px] font-mono whitespace-nowrap overflow-x-auto scrollbar-hide">git clone {repo.html_url}.git</code>
                 </div>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
