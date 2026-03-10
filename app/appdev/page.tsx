import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, TabletSmartphone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionLabel, Pill } from "@/components/Shared";
import { appProjects } from "@/lib/data";

const appDevTools = ["Flutter", "FlutterFlow", "Dart", "Firebase", "SQLite", "Hive", "Provider", "GetX"];

export default function AppDevPage() {
  return (
    <section id="appdev" className="scroll-mt-20 animate-fade-up">
      <div className="mb-6 sm:mb-8">
        <SectionLabel>Engineering</SectionLabel>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          App Development<span className="accent-dot">.</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
          Cross-platform mobile applications built with Flutter and FlutterFlow — designed for performance and beautiful user experiences.
        </p>
      </div>

      {/* Known tech */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
          Technologies & Frameworks
        </h3>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {appDevTools.map((t) => (
            <Pill key={t} className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1">{t}</Pill>
          ))}
        </div>
      </div>

      {/* App Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {appProjects.map((p, i) => {
          const Icon = p.icon;
          return (
            <Card key={i} className="card-hover flex flex-col group overflow-hidden">
              {/* Icon header */}
              <div className="w-full h-28 sm:h-36 bg-muted/30 border-b border-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5" />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} className="text-primary sm:hidden" />
                    <Icon size={24} className="text-primary hidden sm:block" />
                  </div>
                  <Badge variant="secondary" className="text-[9px] font-bold">{p.platform}</Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3 flex-1 px-4 sm:px-6">
                <CardTitle className="text-sm sm:text-base font-bold group-hover:text-primary transition-colors">{p.title}</CardTitle>
                <CardDescription className="text-xs leading-relaxed line-clamp-2">{p.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 px-4 sm:px-6">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="outline" className="text-[9px] font-bold border-border/60">{t}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="mt-auto flex gap-2 p-4 sm:p-5 pt-0">
                <Button size="sm" variant="outline" className="flex-1 text-[10px] sm:text-[11px] h-9 sm:h-8 gap-2 border-border/60" asChild>
                  <a href="https://github.com/Deepak5556" target="_blank" rel="noopener noreferrer">
                    <Github size={12} /> Source
                  </a>
                </Button>
                {p.link && (
                  <Button size="sm" className="flex-1 text-[10px] sm:text-[11px] h-9 sm:h-8 gap-2 shadow-sm" asChild>
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={12} /> Preview
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-primary/5 border border-primary/10 text-center">
        <h3 className="text-lg sm:text-xl font-bold mb-2">Looking for a Mobile Developer?</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 max-w-lg mx-auto">
          I build cross-platform apps that feel native. Let's create something amazing together.
        </p>
        <Button className="gap-2 px-6 sm:px-8 h-11 sm:h-10" asChild>
          <Link href="/contact">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  );
}
