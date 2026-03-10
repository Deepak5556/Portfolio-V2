"use client";

import { useState } from "react";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Code2, Smartphone, MapPin, Globe, Layers, ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { profile, techStack, projects } from "@/lib/data";
import { SectionLabel, Pill } from "@/components/Shared";
import { RoleCarousel } from "@/components/RoleCarousel";

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section id="home" className="scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">

          {/* Profile card */}
          <Card className="md:col-span-2 lg:col-span-5 card-hover animate-fade-up delay-100 border-border/50 overflow-hidden">
            <CardHeader className="pb-3 px-4 sm:px-6 pt-6 sm:pt-8 text-center sm:text-left">
              <div className="mb-4 flex justify-center sm:justify-start">
                <Avatar className="h-16 w-16 sm:h-20 sm:w-20 ring-4 ring-primary/5 ring-offset-4 ring-offset-card shadow-xl transition-transform hover:scale-105 duration-500">
                  <AvatarImage src={profile.avatar} alt={profile.name} className="object-cover" />
                  <AvatarFallback className="text-lg sm:text-xl font-bold">{profile.initials}</AvatarFallback>
                </Avatar>
              </div>
              <div className="inline-flex items-center gap-1.5 w-fit mb-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm self-center sm:self-start">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">Open to opportunities</span>
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-black tracking-tight mb-1">
                {profile.name}<span className="text-orange-500">.</span>
              </CardTitle>
              <RoleCarousel className="text-sm font-bold text-muted-foreground/80" />
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <CardDescription className="leading-relaxed text-xs sm:text-sm">{profile.tagline}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 px-4 sm:px-6 pb-6 sm:pb-8">
              <Button size="lg" asChild className="gap-2 flex-1 shadow-lg shadow-primary/10 transition-all hover:translate-y-[-2px] text-sm md:text-base h-10 md:h-11">
                <Link href="/webdev">
                  View Projects <ArrowRight size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="flex-1 transition-all hover:bg-muted/50 text-sm md:text-base h-10 md:h-11">
                <Link href="/contact">
                  Connect
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* About card */}
          <Card className="md:col-span-2 lg:col-span-7 card-hover animate-fade-up delay-200 border-border/50 overflow-hidden">
            <CardHeader className="px-4 sm:px-6 pt-6 sm:pt-8">
              <SectionLabel>About</SectionLabel>
              <CardTitle className="text-xl sm:text-2xl font-bold mt-2">Deep-dive into my background</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-4 sm:px-6">
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer with hands-on experience building responsive web
                and mobile applications. I love crafting products that solve real problems with clean,
                maintainable code.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Currently studying at Karpagam College, I focus on React, Flutter, and the MERN stack —
                constantly learning, shipping, and improving.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                {["React", "Next.js", "Flutter", "Node.js", "MongoDB", "PostgreSQL"].map((t) => (
                  <Badge key={t} variant="secondary" className="px-2 sm:px-3 py-0.5 sm:py-1 font-semibold text-[10px] sm:text-xs">{t}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="grid grid-cols-2 sm:flex items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-bold text-muted-foreground uppercase tracking-widest border-t border-border/50 pt-4 sm:pt-6 px-4 sm:px-6 pb-6 sm:pb-8">
              <span className="flex items-center gap-2 transition-colors hover:text-foreground"><Code2 size={14} className="text-orange-500" />Full Stack</span>
              <span className="flex items-center gap-2 transition-colors hover:text-foreground"><Smartphone size={14} className="text-orange-500" />Mobile Dev</span>
              <span className="flex items-center gap-2 transition-colors hover:text-foreground col-span-2 sm:col-auto"><MapPin size={14} className="text-orange-500" />{profile.location}</span>
            </CardFooter>
          </Card>

          {/* Tech stack card */}
          <Card className="md:col-span-1 lg:col-span-4 card-hover animate-fade-up delay-300 border-border/50 bg-muted/5">
            <CardHeader className="px-4 sm:px-6 pt-6 sm:pt-8">
              <SectionLabel>Skills</SectionLabel>
              <CardTitle className="text-lg sm:text-xl font-bold mt-2">Core Arsenal</CardTitle>
              <CardDescription className="text-xs">Technologies powering my solutions.</CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8">
              <div className="space-y-5 sm:space-y-6">
                {techStack.map((group) => (
                  <div key={group.category}>
                    <p className="text-[10px] font-black text-muted-foreground mb-2 sm:mb-3 uppercase tracking-widest text-primary/60">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => <Pill key={item} className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 sm:py-1">{item}</Pill>)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects card */}
          <Card className="md:col-span-1 lg:col-span-8 card-hover animate-fade-up delay-400 border-border/50">
            <CardHeader className="px-4 sm:px-6 pt-6 sm:pt-8">
              <div className="flex items-center justify-between">
                <div>
                  <SectionLabel>Work</SectionLabel>
                  <CardTitle className="text-lg sm:text-xl font-bold mt-2">Featured Projects</CardTitle>
                </div>
                <Button variant="ghost" size="sm" asChild className="hidden sm:flex gap-1.5 text-muted-foreground hover:text-foreground transition-all">
                   <Link href="/webdev">View All <ArrowRight size={14} /></Link>
                </Button>
              </div>
              <CardDescription className="text-xs">A curated selection of my latest engineering work.</CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <div className="space-y-4 sm:space-y-6">
                {projects.slice(0, 3).map((project, i) => {
                  const Icon = project.icon;
                  return (
                    <div key={i} className="group relative">
                      <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-xl hover:bg-muted/30 transition-all">
                        <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                          <Icon size={16} className="text-primary sm:hidden" />
                          <Icon size={18} className="text-primary hidden sm:block" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="text-xs sm:text-sm font-bold truncate group-hover:text-primary transition-colors">{project.title}</h4>
                            <div className="flex gap-2">
                                {project.link && (
                                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                                    className="p-1.5 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all" aria-label="Visit">
                                    <ExternalLink size={14} />
                                  </a>
                                )}
                            </div>
                          </div>
                          <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed mb-2 sm:mb-3 line-clamp-2">{project.description}</p>
                          <div className="flex flex-wrap gap-1 sm:gap-1.5">
                            {project.tech.slice(0, 4).map((t) => (
                              <Badge key={t} variant="outline" className="text-[8px] sm:text-[9px] font-bold h-4 sm:h-5 border-border/60">{t}</Badge>
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
               <Button variant="outline" className="w-full gap-2 text-xs h-10" asChild>
                 <Link href="/webdev">See More Work <ArrowRight size={14} /></Link>
               </Button>
            </CardFooter>
          </Card>

        </div>
      </section>
    </>
  );
}
