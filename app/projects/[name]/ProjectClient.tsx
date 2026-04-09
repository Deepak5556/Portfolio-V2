"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { 
  Card, CardHeader, CardTitle, CardContent 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, Star, ChevronLeft, Loader2, Code2, 
  FileText, GitBranch, Eye, History, Terminal, Folder, Award,
  Cpu, Zap, Globe, Shield, Braces, Sparkles, Copy, Check, AlertCircle
} from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/Shared";
import { ShareAction } from "@/components/ShareAction";
import { projects as localProjects, profile } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

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

export default function ProjectClient({ name }: { name: string }) {
  const [repo, setRepo] = useState<RepoDetails | null>(null);
  const [readme, setReadme] = useState<string | null>(null);
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!name) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const repoRes = await fetch(`https://api.github.com/repos/Deepak5556/${name}`, { cache: 'no-store' });
        
        if (repoRes.status === 403) throw new Error("GitHub Rate Limit Exceeded");
        if (!repoRes.ok) throw new Error("Neural Node connection failed");
        
        const repoData = await repoRes.json();
        setRepo(repoData);

        const readmeRes = await fetch(`https://api.github.com/repos/Deepak5556/${name}/readme`, {
          headers: { Accept: "application/vnd.github.v3.raw" }
        });
        if (readmeRes.ok) setReadme(await readmeRes.text());

        const filesRes = await fetch(`https://api.github.com/repos/Deepak5556/${name}/contents`);
        if (filesRes.ok) {
          const filesData = await filesRes.json();
          setFiles(Array.isArray(filesData) ? filesData : []);
        }

      } catch (err: any) {
        console.error("Project Fetch Error:", err);
        setError(err.message);
        
        // Fallback to local data if available
        const matchedLocal = localProjects.find(p => 
          p.title.toLowerCase().replace(/\s+/g, '') === name.toLowerCase().replace(/[-_]/g, '').replace(/\s+/g, '') ||
          name.toLowerCase().includes(p.title.toLowerCase().split(' ')[0])
        );

        if (matchedLocal) {
           setRepo({
             name: matchedLocal.title,
             description: matchedLocal.description,
             html_url: matchedLocal.link || "https://github.com/Deepak5556",
             stargazers_count: 0,
             watchers_count: 0,
             forks_count: 0,
             language: matchedLocal.tech[0] || "Component",
             topics: matchedLocal.tech,
             created_at: new Date().toISOString(),
             updated_at: new Date().toISOString(),
             size: 0,
             owner: { login: "Deepak5556", avatar_url: profile.avatar }
           } as any);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [name]);

  const copyToClipboard = () => {
    if (!repo) return;
    navigator.clipboard.writeText(`git clone ${repo.html_url}.git`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-64 gap-8">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="relative"
        >
          <Loader2 size={64} className="text-primary opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center">
             <Code2 size={24} className="text-primary animate-pulse" />
          </div>
        </motion.div>
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/30 animate-pulse italic">Synchronizing Neural Link</p>
      </div>
    );
  }

  if (!repo) {
    return (
      <div className="max-w-xl mx-auto py-40 text-center px-4">
        <div className="w-24 h-24 rounded-[2rem] bg-destructive/10 flex items-center justify-center text-destructive mb-10 mx-auto rotate-12">
           <Shield size={40} />
        </div>
        <h2 className="text-4xl font-black mb-6 uppercase italic tracking-tighter">Connection Failed<span className="text-destructive">.</span></h2>
        <p className="text-muted-foreground/50 text-sm font-bold uppercase tracking-widest leading-relaxed mb-12">Total disconnection from the central module network.</p>
        <Button asChild className="h-16 px-12 rounded-2xl bg-primary font-black text-xs uppercase tracking-widest">
           <Link href="/software">Return to Archive</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-6">
      <AnimatePresence>
        {error && (
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-12 bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl flex items-center gap-4 text-amber-500 shadow-xl shadow-amber-500/5 transition-all"
          >
             <AlertCircle size={20} className="shrink-0" />
             <div className="flex-1">
                <p className="text-[10px] font-black uppercase tracking-widest leading-none">External Link Latency: {error}</p>
                <p className="text-[9px] font-bold opacity-60 mt-1 uppercase tracking-widest">Serving from integrated local repository archive.</p>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── HEADER SECTION ─── */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-10 mb-20"
      >
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground/60 hover:text-foreground hover:bg-muted/30 -ml-4 px-4 py-3 rounded-2xl group transition-all">
            <Link href="/software" className="flex items-center gap-3 font-black text-[10px] uppercase tracking-[0.2em]">
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Files
            </Link>
          </Button>
          <div className={`flex items-center gap-3 bg-muted/20 px-4 py-2 rounded-full border border-border/40 ${error ? 'opacity-30' : ''}`}>
             <div className={`h-1.5 w-1.5 rounded-full ${error ? 'bg-amber-500' : 'bg-emerald-500'} animate-pulse shadow-[0_0_10px_rgba(var(--status-color),0.5)]`} />
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 italic">{error ? 'Limited Mode' : 'Link Active'}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="flex items-center gap-10 group">
             <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-[2.5rem] bg-gradient-to-br from-primary via-primary/80 to-primary/40 flex items-center justify-center text-primary-foreground shadow-3xl shadow-primary/20 border border-primary/20 group-hover:rotate-6 transition-all duration-700 relative overflow-hidden">
                   <Code2 size={48} className="sm:hidden relative z-10" />
                   <Code2 size={64} className="hidden sm:block relative z-10" />
                   <div className="absolute inset-0 bg-white/5 animate-pulse" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-2xl bg-background border border-border/60 flex items-center justify-center shadow-xl">
                   <GitBranch size={20} className="text-primary opacity-60" />
                </div>
             </div>
             
             <div className="space-y-4">
                <SectionLabel>Module / {repo.language || "Agnostic"}</SectionLabel>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.8] truncate max-w-[280px] sm:max-w-md md:max-w-lg selection:bg-primary/20">
                  {repo.name.replace(/-/g, " ")}<span className="text-primary tracking-normal">.</span>
                </h1>
                <div className="flex items-center gap-4 pt-2">
                   <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.2em] border-primary/30 text-primary px-4 py-1.5 bg-primary/5 rounded-xl">Build: Operational</Badge>
                   <span className="text-[10px] font-bold text-muted-foreground/30 uppercase tracking-[0.3em] font-mono">NODE_{repo.name.slice(0, 4).toUpperCase()}</span>
                </div>
             </div>
          </div>
          
          <div className="flex items-center gap-5">
              <Button size="lg" className="gap-3 h-16 px-10 rounded-[1.8rem] shadow-2xl shadow-primary/30 hover:translate-y-[-4px] active:scale-95 transition-all duration-500 font-black text-[12px] uppercase tracking-[0.2em] bg-primary text-primary-foreground group" asChild>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="group-hover:rotate-12 transition-transform" /> Open Hub
                </a>
              </Button>
              <ShareAction 
                title={repo.name} 
                url={typeof window !== 'undefined' ? window.location.href : ''} 
                variant="outline"
                className="h-16 w-16 border-border/40 hover:border-primary/50 rounded-[1.8rem] bg-card/60 backdrop-blur-3xl shadow-xl hover:bg-card transition-all"
                iconOnly={true}
              />
          </div>
        </div>

        {/* ─── STATS MATRIX ─── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {[
            { label: "Star Pulse", value: repo.stargazers_count ?? 0, icon: Star, color: "text-orange-500" },
            { label: "Neural Forks", value: repo.forks_count ?? 0, icon: GitBranch, color: "text-blue-500" },
            { label: "Sentinel Units", value: repo.watchers_count ?? 0, icon: Eye, color: "text-emerald-500" },
            { label: "Data Segments", value: files.length || '3+', icon: Folder, color: "text-purple-500" },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card/40 backdrop-blur-3xl border border-border/40 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-primary/30 transition-all duration-500 h-44 relative overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/5"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                 <stat.icon size={100} />
              </div>
              <div className="relative z-10 font-black">
                <p className="text-[10px] font-black uppercase text-muted-foreground/60 tracking-[0.4em] mb-2 leading-none">{stat.label}</p>
                <p className="text-5xl tabular-nums tracking-tighter">{stat.value}</p>
              </div>
              <div className="h-1 w-full bg-muted/30 rounded-full overflow-hidden relative z-10 mt-auto">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: '60%' }}
                   transition={{ duration: 1.5, delay: 0.5 }}
                   className={`h-full bg-current ${stat.color} opacity-40`} 
                 />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
        <div className="lg:col-span-2 space-y-24">
          <section>
            <h3 className="text-[11px] font-black text-muted-foreground/40 uppercase tracking-[0.5em] mb-10 flex items-center gap-4">
              <Cpu size={16} /> Module Concept <div className="h-px bg-border/40 flex-1" />
            </h3>
            <div className="bg-card/20 backdrop-blur-3xl border border-border/40 rounded-[3.5rem] p-12 sm:p-20 space-y-16 overflow-hidden relative group shadow-2xl shadow-black/5">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -mr-64 -mt-64 transition-all duration-1000 group-hover:bg-primary/10" />
              
              <p className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground italic leading-[1.1] relative z-10 selection:bg-primary/20 tracking-tight">
                {repo.description || "Experimental architecture node. High-integrity logic engine focusing on aesthetic precision and modular scalability."}
              </p>
              
              <div className="flex flex-wrap gap-4 relative z-10">
                {(repo.topics && repo.topics.length > 0 ? repo.topics : (repo.language ? [repo.language] : ['Architecture'])).map(topic => (
                  <Badge key={topic} variant="secondary" className="px-8 py-3 font-black uppercase tracking-widest bg-primary text-primary-foreground border-none text-[10px] rounded-2xl hover:scale-110 transition-transform duration-300">#{topic}</Badge>
                ))}
              </div>

              <div className="pt-16 border-t border-border/10 grid grid-cols-1 sm:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-4 text-center sm:text-left">
                  <p className="text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground/40 flex items-center justify-center sm:justify-start gap-3 italic">
                     <Braces size={16} className="text-primary opacity-60" /> System Dialect
                  </p>
                  <p className="text-xl font-black bg-muted/40 py-8 rounded-3xl border border-border/40 tracking-[0.4em] uppercase italic">{repo.language || "Agnostic"}</p>
                </div>
                <div className="space-y-4 text-center sm:text-left">
                  <p className="text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground/40 flex items-center justify-center sm:justify-start gap-3 italic">
                     <History size={16} className="text-primary opacity-60" /> Last Synchronized
                  </p>
                  <p className="text-xl font-black bg-muted/40 py-8 rounded-3xl border border-border/40 text-muted-foreground tracking-tighter italic">
                    {new Date(repo.updated_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {readme ? (
            <section>
              <h3 className="text-[11px] font-black text-muted-foreground/40 uppercase tracking-[0.5em] mb-10 flex items-center gap-4">
                <FileText size={16} /> Asset Manifest <div className="h-px bg-border/40 flex-1" />
              </h3>
              <div className="bg-card/20 backdrop-blur-md border border-border/30 rounded-[3.5rem] p-12 sm:p-20 relative overflow-hidden group shadow-inner">
                  <div className="relative z-10">
                    <div className="max-h-[800px] overflow-y-auto pr-8 custom-scrollbar scroll-smooth">
                      <div className="markdown-content max-w-none text-muted-foreground/80 selection:bg-primary/30">
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            h1: (props) => <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-12 text-foreground italic border-b-2 border-primary/20 pb-6" {...props} />,
                            h2: (props) => <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-[0.2em] mb-10 mt-20 text-foreground/90 flex items-center gap-6 before:w-4 before:h-4 before:bg-primary before:rounded-full" {...props} />,
                            h3: (props) => <h3 className="text-xl font-black uppercase tracking-widest mb-8 mt-14 text-foreground/70" {...props} />,
                            p: (props) => <p className="mb-10 leading-[2] text-lg sm:text-2xl font-medium opacity-80" {...props} />,
                            ul: (props) => <ul className="mb-12 space-y-6 list-none pl-0 bg-primary/[0.03] p-10 rounded-[2.5rem] border border-primary/10" {...props} />,
                            li: (props) => (
                              <li className="flex items-start gap-6 text-base sm:text-lg font-bold uppercase tracking-wide opacity-90">
                                 <div className="w-2 h-2 rounded-full bg-primary/60 mt-3 shrink-0" />
                                 <span>{props.children}</span>
                              </li>
                            ),
                            code: (props: any) => {
                              const { inline, children } = props;
                              if (inline) return <code className="bg-primary/10 text-primary px-3 py-1 rounded-xl font-mono text-[0.9em] font-black">{children}</code>;
                              return (
                                <div className="my-14 rounded-[3rem] bg-zinc-950 border border-white/5 p-10 sm:p-20 overflow-x-auto custom-scrollbar relative shadow-3xl">
                                  <div className="absolute top-8 left-10 flex gap-3">
                                     <div className="w-3 h-3 rounded-full bg-red-400 opacity-20" />
                                     <div className="w-3 h-3 rounded-full bg-amber-400 opacity-20" />
                                     <div className="w-3 h-3 rounded-full bg-emerald-400 opacity-80 shadow-[0_0_15px_rgba(52,211,153,0.4)]" />
                                  </div>
                                  <code className="block font-mono text-base sm:text-xl text-zinc-300 leading-[2] whitespace-pre-wrap">{children}</code>
                                </div>
                              );
                            },
                            blockquote: (props) => <blockquote className="border-l-[12px] border-primary/20 bg-primary/5 pl-12 py-12 px-12 italic mb-12 rounded-r-[3rem] opacity-70 text-3xl font-black leading-relaxed" {...props} />,
                            a: (props) => <a className="text-primary hover:underline underline-offset-8 decoration-4 font-black transition-all" target="_blank" {...props} />,
                          }}
                        >
                          {readme}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
              </div>
            </section>
          ) : (
            <div className="py-24 text-center bg-card/10 rounded-[3rem] border-2 border-dashed border-border/40">
               <FileText size={48} className="mx-auto text-muted-foreground/20 mb-6" />
               <p className="text-sm font-black uppercase tracking-[0.4em] text-muted-foreground/30 italic">Documentation Index Protected</p>
               <p className="text-[10px] font-bold text-muted-foreground/20 uppercase tracking-widest mt-2 px-10">The manifest for this node is currently encrypted or inaccessible from the primary link.</p>
            </div>
          )}
        </div>

        {/* ─── ASIDE ─── */}
        <aside className="space-y-20">
           <section>
              <h3 className="text-[11px] font-black text-muted-foreground/40 uppercase tracking-[0.5em] mb-10 flex items-center gap-4">
                <Folder size={16} /> Cluster Nodes <div className="h-px bg-border/40 flex-1" />
              </h3>
              <div className="bg-card/40 backdrop-blur-3xl border border-border/40 rounded-[2.5rem] divide-y divide-border/10 overflow-hidden shadow-2xl shadow-black/5">
                {files.length > 0 ? (
                   files.slice(0, 10).map((file, i) => (
                    <div key={i} className="flex items-center justify-between px-10 py-6 hover:bg-primary/5 transition-all duration-500">
                      <div className="flex items-center gap-6 overflow-hidden">
                         {file.type === "dir" ? (
                           <Folder size={20} className="text-primary opacity-60" />
                         ) : (
                           <FileText size={20} className="text-muted-foreground/40" />
                         )}
                         <span className="text-xs font-black truncate tracking-widest uppercase text-muted-foreground/80">{file.name}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-5 py-24 text-center opacity-30 flex flex-col items-center gap-8">
                    <Zap size={32} />
                    <p className="text-[10px] font-black uppercase tracking-[0.4em]">Node Logic Only</p>
                  </div>
                )}
              </div>
           </section>

           <div className="space-y-16 sticky top-28">
              <Card className="bg-gradient-to-br from-primary/10 via-card/80 to-muted/20 backdrop-blur-3xl border border-white/5 rounded-[3.5rem] overflow-hidden shadow-3xl relative p-1 group">
                <CardContent className="p-12 space-y-10 text-center sm:text-left">
                   <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div className="p-4 rounded-2xl bg-primary text-primary-foreground shadow-2xl shadow-primary/30 group-hover:rotate-12 transition-transform">
                          <Terminal size={24} />
                      </div>
                      <p className="text-[12px] font-black uppercase tracking-[0.4em] opacity-80 italic italic">Clone Target</p>
                   </div>
                   
                   <div className="relative cursor-pointer group/term" onClick={copyToClipboard}>
                      <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8 pr-16 flex items-center overflow-hidden shadow-inner group-hover/term:border-primary/50 transition-all">
                         <code className="text-[12px] font-mono whitespace-nowrap overflow-x-auto scrollbar-hide w-full font-black text-emerald-400">git clone {repo.html_url}.git</code>
                         <div className="absolute right-8 top-1/2 -translate-y-1/2 text-muted-foreground/40 group-hover/term:text-primary">
                            {copied ? <Check size={20} className="text-emerald-500" /> : <Copy size={20} />}
                         </div>
                      </div>
                   </div>

                   <p className="text-[10px] text-muted-foreground/40 font-black uppercase tracking-[0.3em] leading-relaxed italic border-t border-border/10 pt-10">
                      Primary network access channel. Verify SSH keys before injection.
                   </p>
                </CardContent>
              </Card>

              <div className="p-14 rounded-[3rem] bg-primary/5 border-2 border-primary/10 border-dashed space-y-10 group hover:border-primary/30 transition-all duration-1000 shadow-xl shadow-primary/5">
                  <div className="flex items-center gap-6">
                     <Globe size={20} className="text-primary opacity-40 group-hover:rotate-180 transition-all duration-1000" />
                     <p className="text-[11px] font-black uppercase text-muted-foreground/60 tracking-[0.6em]">Core Logic Map</p>
                  </div>
                  <p className="text-xs font-black leading-[2.5] text-muted-foreground/40 italic uppercase tracking-widest">
                    This module is hosted on the global constellation. Engineered for maximum interoperability across the {repo.language || "digital"} matrix.
                  </p>
                  <div className="h-0.5 bg-gradient-to-r from-primary/30 to-transparent w-full" />
              </div>
           </div>
        </aside>
      </div>
    </div>
  );
}
