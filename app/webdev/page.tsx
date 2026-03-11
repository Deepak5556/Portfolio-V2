"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Award, GitBranch, Star, ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";
import { SectionLabel, Pill } from "@/components/Shared";
import { achievements, projects } from "@/lib/data";
import { GithubCalendarWrapper } from "@/components/GithubCalendarWrapper";
import { ShareAction } from "@/components/ShareAction";
import { Pagination } from "@/components/Pagination";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Share2Icon } from "lucide-react";
import AnimatedBeamMultipleOutputDemo from "@/components/AnimatedBeamMultipleOutputDemo";

const features = [
  {
    Icon: Share2Icon,
    name: "API Integrations",
    description: "Seamlessly connecting Stripe, Firebase, AWS, and third-party services.",
    href: "/webdev",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-3",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-[1.02] overflow-hidden w-full max-w-none" />
    ),
  },
];

const ITEMS_PER_PAGE = 10;

export default function WebDevPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeRepos, setActiveRepos] = useState<any[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      const candidates = [
        { name: "ReactPortfolio", desc: "Showcases my professional journey as a Full Stack & App Developer.", lang: "JavaScript" },
        { name: "Smart-Identity-Validator", desc: "AI-powered identity validation and secure verification backend.", lang: "Python" },
        { name: "Smart-Identity-Validator-UI", desc: "Modern administrative dashboard for identity verification management.", lang: "TypeScript" }
      ];
      try {
        const promises = candidates.map(async (repo) => {
          const res = await fetch(`https://api.github.com/repos/Deepak5556/${repo.name}`);
          if (res.ok) {
            const data = await res.json();
            return { ...repo, stars: data.stargazers_count || 0, lang: data.language || repo.lang };
          }
          return null;
        });
        const results = await Promise.all(promises);
        setActiveRepos(results.filter((r) => r !== null));
      } catch (error) {
        console.error("Error checking github repos", error);
      }
    }
    fetchRepos();
  }, []);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return projects.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  return (
    <section id="webdev" className="scroll-mt-20 animate-fade-up">
      <div className="mb-8 sm:mb-12">
        <SectionLabel>Engineering</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-2">
          Web<span className="text-orange-500">.</span>
        </h2>
        <p className="text-sm sm:text-lg text-muted-foreground mt-3 max-w-2xl font-medium leading-relaxed">
            I craft performant, accessible web experiences using modern frameworks and best practices. 
            From pixel-perfect UI to scalable backend architectures.
        </p>
      </div>

      {/* Achievements grid */}
      <div className="mb-10 sm:mb-14">
        <h3 className="text-xs sm:text-sm font-black text-muted-foreground uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
          Technical Recognition <div className="h-px bg-border flex-1" />
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {achievements.map((a, i) => (
            <Link key={i} href={`/achievements/${a.id}`}>
              <Card className="card-hover cursor-pointer h-full border-border/50 bg-card/40 backdrop-blur-sm group overflow-hidden rounded-2xl">
                <CardHeader className="pb-2 px-5 sm:px-6 relative z-10 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform shadow-sm">
                        <Award size={18} />
                    </div>
                    <div>
                        <CardTitle className="text-sm sm:text-base font-black tracking-tight">{a.event}<span className="text-orange-500">.</span></CardTitle>
                        <CardDescription className="text-xs font-bold text-muted-foreground/60">{a.org}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-3 px-5 sm:px-6 relative z-10">
                  <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed font-medium mt-2">{a.desc}</p>
                </CardContent>
                <CardFooter className="px-5 sm:px-6 pb-6 relative z-10">
                  <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest bg-primary/5 text-primary border-none h-6 px-3">{a.year}</Badge>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      <div className="mb-10 sm:mb-14">
        <h3 className="text-xs sm:text-sm font-black text-muted-foreground uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
          Development Arsenal <div className="h-px bg-border flex-1" />
        </h3>
        <div className="flex flex-wrap gap-2">
          {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS",
            "Node.js", "Express.js", "MongoDB", "Firebase", "Git", "REST APIs", "FlutterFlow"].map((t) => (
            <Pill key={t} className="text-[10px] sm:text-xs px-3 sm:px-4 py-1 sm:py-1.5 font-bold uppercase tracking-wider bg-background border-border/60 hover:border-primary/40 transition-colors">{t}</Pill>
          ))}
        </div>
      </div>

      {/* Projects grid with Pagination */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {currentItems.map((p, i) => (
          <Card key={i} className="card-hover flex flex-col group overflow-hidden border-border/50 bg-card/40 backdrop-blur-sm rounded-2xl p-0">
            <div className="relative w-full aspect-video overflow-hidden border-b border-border/10">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all">
                  <ShareAction 
                    title={p.title} 
                    url={p.link || `https://github.com/Deepak5556`} 
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 bg-background/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/40 rounded-xl"
                    iconOnly={true}
                  />
              </div>
            </div>
            <CardHeader className="pb-3 flex-1 px-5 sm:px-6 mt-4">
              <CardTitle className="text-base sm:text-lg font-black group-hover:text-primary transition-colors">{p.title}<span className="text-orange-500">.</span></CardTitle>
              <CardDescription className="text-xs sm:text-sm leading-relaxed line-clamp-2 mt-2 font-medium text-muted-foreground/80">{p.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto flex-col items-start gap-4 p-5 sm:p-6 pt-0 border-t border-border/5 mt-4">
              <div className="flex flex-wrap gap-1.5 pt-4">
                {p.tech.slice(0, 3).map((t) => <Badge key={t} variant="secondary" className="text-[10px] font-black uppercase tracking-wider bg-primary/5 text-primary border-none h-5 px-2">{t}</Badge>)}
              </div>
              <div className="flex gap-2 w-full">
                <Button variant="outline" size="sm" className="flex-1 text-[10px] font-black uppercase tracking-widest h-10 border-border/60 hover:border-primary/50 group/btn rounded-xl" asChild>
                  <a href={`https://github.com/Deepak5556`} target="_blank" rel="noopener noreferrer">
                    <Github size={14} className="group-hover/btn:scale-110 transition-transform" /> Source Repo
                  </a>
                </Button>
                {p.link && (
                  <Button size="sm" className="flex-1 text-[10px] font-black uppercase tracking-widest h-10 shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-all rounded-xl" asChild>
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <div className="flex justify-center mt-6 sm:mt-10 mb-12">
        <Button variant="ghost" className="gap-2 group text-muted-foreground hover:text-foreground h-11 px-8 rounded-xl font-black uppercase text-[10px] tracking-widest" asChild>
          <Link href="/projects">
            Explore Full GitHub Archive <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      {/* Engineering Workflow */}
      <div className="mt-14 sm:mt-20">
        <h3 className="text-xs sm:text-sm font-black text-muted-foreground uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            Engineering Workflow <div className="h-px bg-border flex-1" />
        </h3>
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>

      {/* GitHub calendar with premium border */}
      <div className="mt-14 sm:mt-20 p-1 rounded-3xl bg-muted/20 border border-border/50">
        <GithubCalendarWrapper username="Deepak5556" />
      </div>

      {/* Featured Repos */}
      <div className="mt-14 sm:mt-20">
        <h3 className="text-xs sm:text-sm font-black text-muted-foreground uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            Open Source Activity <div className="h-px bg-border flex-1" />
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeRepos.map((repo, i) => (
            <Card key={i} className="card-hover border-border/50 bg-card/40 backdrop-blur-sm rounded-2xl group flex flex-col">
              <CardHeader className="pb-3 px-5 sm:px-6 relative pt-6 flex-1">
                <div className="flex items-center gap-3 mb-3">
                   <div className="p-1.5 rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                        <Code2 size={14} />
                   </div>
                   <CardTitle className="text-sm font-mono tracking-tight truncate flex-1">{repo.name}<span className="text-orange-500">.</span></CardTitle>
                </div>
                <CardDescription className="text-xs sm:text-sm font-medium text-muted-foreground/80 leading-relaxed line-clamp-2">{repo.desc}</CardDescription>
              </CardHeader>
              <CardFooter className="gap-3 px-5 sm:px-6 pb-6 pt-0 border-t border-border/5 mt-4">
                <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest bg-primary/5 text-primary border-none h-5 px-2">{repo.lang}</Badge>
                <span className="flex items-center gap-1.5 text-[10px] font-black text-muted-foreground/60 mr-auto tabular-nums">
                  <Star size={12} fill="currentColor" className="text-orange-500 border-none" /> {repo.stars}
                </span>
                <div className="flex gap-1.5">
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-primary/10 hover:text-primary transition-all" asChild>
                      <a href={`https://github.com/Deepak5556/${repo.name}`} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                    <ShareAction 
                      title={repo.name} 
                      url={`https://github.com/Deepak5556/${repo.name}`} 
                      variant="ghost"
                      size="sm"
                      className="h-9 w-9 rounded-xl"
                      iconOnly={true}
                    />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
