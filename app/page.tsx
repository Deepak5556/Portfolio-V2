"use client";

import { useState } from "react";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Code2, Smartphone, MapPin, Layers, ExternalLink,
  Layout, Terminal, Database, Wrench, User, Palette, Film, Camera, Mail,
  Github, Linkedin, Twitter, Instagram, Link as LinkIcon, Award
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { profile, techStack, projects, achievements } from "@/lib/data";
import { SectionLabel, Pill } from "@/components/Shared";
import { RoleCarousel } from "@/components/RoleCarousel";
import { ShareAction } from "@/components/ShareAction";
import dynamic from "next/dynamic";
const ScrollVelocitySection = dynamic(() => import("@/components/HomeMagicUI").then(m => m.ScrollVelocitySection));
const BentoSection = dynamic(() => import("@/components/HomeMagicUI").then(m => m.BentoSection));
const GlobeSection = dynamic(() => import("@/components/HomeMagicUI").then(m => m.GlobeSection));
const PartnersSection = dynamic(() => import("@/components/HomeMagicUI").then(m => m.PartnersSection));
const WorkedWithSection = dynamic(() => import("@/components/HomeMagicUI").then(m => m.WorkedWithSection));
const AnimatedBeamDemo = dynamic(() => import("@/components/AnimatedBeamDemo").then(m => m.AnimatedBeamDemo));
const MotionEditor = dynamic(() => import("@/components/MotionEditor"));

export default function Home() {
  return (
    <div className="space-y-16 sm:space-y-28">
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section id="home" className="scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">

          {/* Profile card */}
          <Card className="md:col-span-2 lg:col-span-5 card-hover animate-fade-up delay-100 border-border/50 bg-card/60 backdrop-blur-xl overflow-hidden group flex flex-col">
            <CardHeader className="pb-3 px-3 md:px-6 pt-6 md:pt-8 text-center md:text-left">
              <div className="mb-4 flex justify-center md:justify-start">
                <Avatar className="h-16 w-16 sm:h-20 sm:w-20 ring-4 ring-primary/5 ring-offset-4 ring-offset-card shadow-xl transition-transform hover:scale-105 duration-500">
                  <AvatarImage src={profile.avatar} alt={profile.name} className="object-cover" fetchPriority="high" />
                  <AvatarFallback className="text-lg sm:text-xl font-bold uppercase">{profile.initials}</AvatarFallback>
                </Avatar>
              </div>
              <div className="inline-flex items-center gap-1.5 w-fit mb-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm self-center md:self-start">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">Open for work</span>
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-black tracking-tight mb-1">
                {profile.name}<span className="text-orange-500">.</span>
              </CardTitle>
              <div className="flex justify-center md:justify-start">
                <RoleCarousel className="text-sm font-bold text-muted-foreground/80" />
              </div>
            </CardHeader>
            <CardContent className="px-3 md:px-6 flex-1 text-center md:text-left">
              <CardDescription className="leading-relaxed text-xs sm:text-sm mb-4">{profile.tagline}</CardDescription>

              <p className="text-xs sm:text-sm text-muted-foreground/80 font-medium leading-relaxed mb-6">
                Quick learner and focused on perfection, dedicated to building high-quality digital experiences.
              </p>

              {/* Social Icons Print Area */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                {[
                  { icon: Github, href: profile.github, label: "GitHub" },
                  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                  { icon: Twitter, href: profile.twitter, label: "X (Twitter)" },
                  { icon: Instagram, href: profile.instagram, label: "Instagram" },
                  { icon: LinkIcon, href: profile.linktree, label: "Linktree" },
                ].map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i + 0.5 }}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col md:flex-row items-stretch md:items-center gap-3 pt-4 px-3 md:px-6 pb-6 md:pb-8">
              <Button size="lg" asChild className="flex-1 hover:translate-y-[-2px] transition-all">
                <Link href="/software">
                  View Projects <ArrowRight size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="flex-1">
                <Link href="/contact">
                  Connect
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* About card */}
          <Card className="md:col-span-2 lg:col-span-7 card-hover animate-fade-up delay-200 border-border/50 bg-card/60 backdrop-blur-xl overflow-hidden relative group flex flex-col">
            <CardHeader className="px-3 md:px-6 pt-6 md:pt-8 relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <SectionLabel>About</SectionLabel>
                  <CardTitle className="text-xl sm:text-2xl font-black mt-2">Deep-dive into my background<span className="text-orange-500">.</span></CardTitle>
                </div>
                <Button variant="outline" size="sm" asChild className="hidden md:flex">
                  <Link href="/about">Learn More <ArrowRight size={14} /></Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 px-3 md:px-6 flex-1">
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed font-medium">
                I’m Deepakkumar V — a full stack developer, mobile app developer, and UI/UX designer who’s also deeply into visual creativity.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed font-medium">
                I work across web and mobile, building things that are not just functional but feel smooth and intuitive to use. Alongside coding, I’m a videographer, video editor, photographer, and photo editor — so design and storytelling are a big part of what I do.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed font-medium">
                I care a lot about creativity and getting the details right. Whether it’s code or visuals, I like making things clean, polished, and meaningful.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                {[
                  "Web Developer",
                  "Mobile Developer",
                  "UI/UX Designer",
                  "Videographer",
                  "Photographer"
                ].map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="px-2 sm:px-3 py-0.5 sm:py-1 font-black uppercase text-[10px] tracking-widest bg-primary/5 text-primary border-none"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="grid grid-cols-2 md:flex items-center gap-4 md:gap-8 text-xs sm:text-sm font-black text-muted-foreground uppercase tracking-widest border-t border-border/50 pt-4 md:pt-6 px-3 md:px-6 pb-6 md:pb-8">
              <span className="flex items-center gap-2.5 transition-colors hover:text-foreground"><Code2 size={16} className="text-primary" />Full Stack</span>
              <span className="flex items-center gap-3 transition-colors hover:text-foreground"><Smartphone size={16} className="text-primary" />Mobile Dev</span>
              <span className="flex items-center gap-3 transition-colors hover:text-foreground col-span-2 md:col-auto"><MapPin size={16} className="text-primary" />{profile.location}</span>
            </CardFooter>
          </Card>

          {/* New Interactive Sections */}
          <div className="col-span-full py-8 relative z-20">
            <ScrollVelocitySection />
          </div>


          {/* Core Expertise Visualizer */}
          <div className="col-span-full">
            <AnimatedBeamDemo />
          </div>

          {/* Technical Recognition & Contributions */}
          <div className="col-span-full mt-4">
            <div className="mb-8">
              <SectionLabel>Recognition</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tight leading-none mt-2">
                Technical Awards<span className="text-orange-500 not-italic">.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((a, i) => (
                <Link key={i} href={`/achievements/${a.id}`}>
                  <Card className="card-hover cursor-pointer h-full border-border/40 bg-card/40 backdrop-blur-sm group overflow-hidden rounded-[2.5rem] p-8 transition-all hover:bg-card/60">
                    <div className="flex items-center gap-5">
                      <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform shadow-lg shadow-primary/5 border border-primary/20">
                        <Award size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-black tracking-tight group-hover:text-primary transition-colors">{a.event}<span className="text-orange-500">.</span></h4>
                        <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest mt-1">{a.org} • {a.year}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed font-medium mt-6">{a.desc}</p>
                    <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                      Explore Details <ArrowRight size={14} />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* ── FULL-WIDTH SKILLS ARCHITECTURE ── */}
          <div className="col-span-full py-12 px-6 sm:px-10 rounded-[3rem] border border-border/40 bg-card/40 backdrop-blur-3xl relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48 opacity-40 group-hover:bg-primary/10 transition-colors duration-1000" />

            <div className="mb-12">
              <SectionLabel>Core Arsenal</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tight leading-none mt-2">
                Professional Capabilities<span className="text-orange-500 not-italic">.</span>
              </h2>
              <div className="h-px w-24 bg-primary/20 mt-6" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
              {techStack.map((group) => {
                const CategoryIcon = {
                  "Software Development": Code2,
                  "Video Editing": Film,
                  "Photo Editing": Camera,
                  "UI/UX Designing": Palette
                }[group.category] || Code2;

                return (
                  <div key={group.category} className="space-y-6 group/item">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary transition-transform group-hover/item:scale-110 border border-primary/20 shadow-lg shadow-primary/5">
                        <CategoryIcon size={18} />
                      </div>
                      <h4 className="text-[11px] font-black text-foreground uppercase tracking-[0.25em] leading-none">
                        {group.category}
                      </h4>
                    </div>
                    <div className="flex flex-col gap-3 pl-1">
                      {group.items.map((item) => (
                        <div key={item} className="flex items-center gap-3 group/skill">
                          <div className="w-1 h-1 rounded-full bg-primary/40 group-hover/skill:bg-primary group-hover/skill:scale-150 transition-all" />
                          <span className="text-xs sm:text-sm font-medium text-muted-foreground/80 group-hover/skill:text-primary transition-colors">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Projects card */}
          <Card className="md:col-span-2 lg:col-span-12 card-hover animate-fade-up border-border/50 bg-card/60 backdrop-blur-xl overflow-hidden relative group mt-8">
            <CardHeader className="px-4 sm:px-6 pt-6 sm:pt-8 relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <SectionLabel>Work</SectionLabel>
                  <CardTitle className="text-lg sm:text-xl font-black mt-2">Selected Works<span className="text-orange-500">.</span></CardTitle>
                </div>
                <Button variant="outline" size="sm" asChild className="hidden sm:flex h-9 px-4 rounded-xl border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary transition-all font-black uppercase text-[10px] tracking-widest gap-2">
                  <Link href="/software">View Archive <ArrowRight size={14} /></Link>
                </Button>
              </div>
              <CardDescription className="text-xs font-bold text-muted-foreground/60 mt-1 uppercase tracking-widest">A curated selection of my latest engineering projects.</CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 relative z-10">
              <div className="space-y-4">
                {projects.slice(0, 3).map((project, i) => {
                  const ProjectIcon = project.icon;
                  return (
                    <div key={i} className="group/project relative">
                      <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-xl hover:bg-primary/5 border border-transparent hover:border-border/50 transition-all duration-300">
                        <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-background border border-border group-hover/project:border-primary/30 flex items-center justify-center transition-all group-hover/project:scale-110 shadow-sm overflow-hidden">
                          <ProjectIcon size={18} className="text-primary group-hover/project:animate-pulse" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="text-xs sm:text-sm font-black truncate group-hover/project:text-primary transition-colors uppercase tracking-tight">{project.title}</h4>
                            <div className="flex gap-1">
                              {project.link && (
                                <>
                                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                                    className="p-1.5 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all" aria-label="Visit">
                                    <ExternalLink size={14} />
                                  </a>
                                  <ShareAction
                                    title={project.title}
                                    url={project.link}
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 opacity-0 group-hover/project:opacity-100 transition-all"
                                    iconOnly={true}
                                  />
                                </>
                              )}
                            </div>
                          </div>
                          <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-1 font-medium">{project.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.slice(0, 4).map((t) => (
                              <Badge key={t} variant="secondary" className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest h-4 sm:h-5 bg-primary/5 text-primary border-none">{t}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
            <CardFooter className="px-4 sm:px-6 pb-6 pt-2 sm:hidden">
              <Button variant="outline" className="w-full gap-2 text-[10px] font-black uppercase tracking-widest h-11 rounded-xl border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary transition-all shadow-lg" asChild>
                <Link href="/software">See Full Archive <ArrowRight size={14} /></Link>
              </Button>
            </CardFooter>
          </Card>

          <div className="col-span-full">
            <BentoSection />
          </div>

          <div className="col-span-full">
            <PartnersSection />
          </div>

          <div className="col-span-full">
            <WorkedWithSection />
          </div>

          <div className="col-span-full">
            <GlobeSection />
          </div>
        </div>
      </section>
    </div>
  );
}
