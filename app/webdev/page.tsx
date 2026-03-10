import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Award, GitBranch, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionLabel, Pill } from "@/components/Shared";
import { achievements, projects, profile } from "@/lib/data";
import { GithubCalendarWrapper } from "@/components/GithubCalendarWrapper";

export default function WebDevPage() {
  return (
    <section id="webdev" className="scroll-mt-20 animate-fade-up">
      <div className="mb-6 sm:mb-8">
        <SectionLabel>Engineering</SectionLabel>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Web Development<span className="accent-dot">.</span>
        </h2>
      </div>

      {/* Achievements */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
          Event Winnings
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((a, i) => (
            <Link key={i} href={`/achievements/${a.id}`}>
              <Card className="card-hover cursor-pointer h-full border-primary/5 hover:border-primary/20 transition-all duration-300">
                <CardHeader className="pb-2 px-4 sm:px-6">
                  <div className="flex items-center gap-2">
                    <Award size={15} className="text-primary shrink-0 transition-transform group-hover:scale-125" />
                    <CardTitle className="text-xs sm:text-sm">{a.event}</CardTitle>
                  </div>
                  <CardDescription className="text-xs">{a.org}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3 px-4 sm:px-6">
                  <p className="text-xs text-muted-foreground">{a.desc}</p>
                </CardContent>
                <CardFooter className="px-4 sm:px-6">
                  <Badge variant="outline" className="text-[10px] bg-primary/5 text-primary border-primary/10">{a.year}</Badge>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Known tech */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
          Known Technologies
        </h3>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS",
            "Node.js", "Express.js", "MongoDB", "Firebase", "Git", "REST APIs", "FlutterFlow"].map((t) => (
            <Pill key={t} className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1">{t}</Pill>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((p, i) => (
          <Card key={i} className="card-hover flex flex-col group overflow-hidden">
            <div className="relative w-full aspect-video overflow-hidden">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <CardHeader className="pb-3 flex-1 px-4 sm:px-6">
              <CardTitle className="text-sm sm:text-base font-bold">{p.title}</CardTitle>
              <CardDescription className="text-xs leading-relaxed line-clamp-2">{p.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto flex-col items-start gap-3 sm:gap-4 p-4 sm:p-5 pt-0">
              <div className="flex flex-wrap gap-1.5">
                {p.tech.slice(0, 3).map((t) => <Badge key={t} variant="secondary" className="text-[10px] font-semibold">{t}</Badge>)}
              </div>
              <div className="flex w-full gap-2">
                <Button size="sm" variant="outline" className="flex-1 text-[10px] sm:text-[11px] h-9 sm:h-8 gap-2 border-border/60" asChild>
                  <a href={`https://github.com/Deepak5556`} target="_blank" rel="noopener noreferrer">
                    <Github size={12} /> Repo
                  </a>
                </Button>
                {p.link && (
                  <Button size="sm" className="flex-1 text-[10px] sm:text-[11px] h-9 sm:h-8 gap-2 shadow-sm" asChild>
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={12} /> Preview
                    </a>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-6 sm:mt-8">
        <Button variant="ghost" className="gap-2 group text-muted-foreground hover:text-foreground h-10 sm:h-9" asChild>
          <Link href="/projects">
            See All My Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      {/* GitHub activity section */}
      <div className="mt-8 sm:mt-12">
        <GithubCalendarWrapper username="Deepak5556" />
      </div>

      <div className="mt-8 sm:mt-12">
        <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
          Featured Repositories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "ReactPortfolio", desc: "Showcases my professional journey as a Full Stack & App Developer.", lang: "JavaScript", stars: 0 },
            { name: "Smart-Identity-Validator",   desc: "AI-powered identity validation and secure verification backend.", lang: "Python", stars: 0 },
            { name: "Smart-Identity-Validator-UI",   desc: "Modern administrative dashboard for identity verification management.", lang: "TypeScript", stars: 0 },
          ].map((repo, i) => (
            <Card key={i} className="card-hover">
              <CardHeader className="pb-2 px-4 sm:px-6">
                <div className="flex items-center gap-2">
                  <GitBranch size={13} className="text-muted-foreground shrink-0" />
                  <CardTitle className="text-xs font-mono truncate">{repo.name}</CardTitle>
                </div>
                <CardDescription className="text-xs">{repo.desc}</CardDescription>
              </CardHeader>
              <CardFooter className="gap-3 px-4 sm:px-6 flex-wrap">
                <Badge variant="outline" className="text-[10px]">{repo.lang}</Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star size={11} /> {repo.stars}
                </span>
                <Button variant="ghost" size="sm" className="text-xs h-7 ml-auto px-2 gap-1" asChild>
                  <a href={`https://github.com/Deepak5556/${repo.name}`} target="_blank" rel="noopener noreferrer">
                    <Github size={11} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
