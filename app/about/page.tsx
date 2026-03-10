import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Monitor, Smartphone, Camera, Video, ArrowRight, GraduationCap, Briefcase, Award, ExternalLink
} from "lucide-react";
import { SectionLabel } from "@/components/Shared";
import { profile, education, workExperience, internships, certifications } from "@/lib/data";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="space-y-14 sm:space-y-20 animate-fade-up">
      {/* ─── Profile Summary ─── */}
      <section id="about" className="scroll-mt-20">
        <div className="mb-6 sm:mb-8">
          <SectionLabel>Background</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            About Me<span className="accent-dot">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Monitor, title: "Web Development", desc: "React, Next.js, Node.js, full-stack MERN applications.", tools: ["React", "Next.js", "Node.js", "MongoDB"], href: "/webdev" },
            { icon: Smartphone, title: "App Development", desc: "Cross-platform mobile apps with Flutter and FlutterFlow.", tools: ["Flutter", "FlutterFlow", "Firebase"], href: "/appdev" },
            { icon: Camera, title: "Photography", desc: "Professional photography, retouching, and creative compositions.", tools: ["Photoshop", "Lightroom", "Canva"], href: "/photo" },
            { icon: Video, title: "Videography", desc: "Cinematic videography, motion graphics, and social content.", tools: ["Premiere Pro", "After Effects", "CapCut"], href: "/video" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="card-hover">
                <CardHeader className="pb-2 px-4 sm:px-6">
                  <div className="w-9 h-9 rounded-xl bg-muted border border-border flex items-center justify-center mb-3">
                    <Icon size={16} className="text-muted-foreground" />
                  </div>
                  <CardTitle className="text-sm">{item.title}</CardTitle>
                  <CardDescription className="text-xs">{item.desc}</CardDescription>
                </CardHeader>
                <CardContent className="pb-4 px-4 sm:px-6">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.map((t) => <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>)}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 px-4 sm:px-6">
                  <Button variant="ghost" size="sm" className="text-xs h-8 sm:h-7 px-3 sm:px-2 text-muted-foreground" asChild>
                    <Link href={item.href}>
                      View Details <ArrowRight size={10} className="ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-8 sm:mt-12 max-w-2xl">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            I'm a passionate Full Stack Developer with hands-on experience building responsive web
            and mobile applications. I love crafting products that solve real problems with clean,
            maintainable code.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-4">
            Currently studying at Karpagam College, I focus on React, Flutter, and the MERN stack —
            constantly learning, shipping, and improving. I am based in {profile.location}.
          </p>
        </div>
      </section>

      {/* ─── Work Experience ─── */}
      <section className="scroll-mt-20">
        <div className="mb-6 sm:mb-8">
          <SectionLabel>Professional</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Work Experience<span className="accent-dot">.</span>
          </h2>
        </div>
        <div className="space-y-4">
          {workExperience.map((work, i) => (
            <Card key={i} className="card-hover">
              <CardHeader className="flex flex-col sm:flex-row sm:items-start sm:justify-between pb-2 gap-2 px-4 sm:px-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-muted-foreground" />
                    <CardTitle className="text-sm sm:text-base">{work.role}</CardTitle>
                  </div>
                  <CardDescription className="text-xs sm:text-sm font-medium text-foreground">{work.company}</CardDescription>
                </div>
                <Badge variant="outline" className="text-[10px] sm:text-xs w-fit">{work.duration}</Badge>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{work.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ─── Internships ─── */}
      <section className="scroll-mt-20">
        <div className="mb-6 sm:mb-8">
          <SectionLabel>Training</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Internships<span className="accent-dot">.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {internships.map((intern, i) => (
            <Card key={i} className="card-hover">
              <CardHeader className="pb-2 px-4 sm:px-6">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-[10px]">Internship</Badge>
                  <span className="text-[10px] text-muted-foreground">{intern.duration}</span>
                </div>
                <CardTitle className="text-sm sm:text-base">{intern.role}</CardTitle>
                <CardDescription className="text-xs sm:text-sm font-medium text-foreground">{intern.company}</CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{intern.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ─── Education ─── */}
      <section className="scroll-mt-20">
        <div className="mb-6 sm:mb-8">
          <SectionLabel>Academic</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Education<span className="accent-dot">.</span>
          </h2>
        </div>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <Card key={i} className="card-hover">
              <CardHeader className="flex flex-col sm:flex-row sm:items-start sm:justify-between pb-2 gap-2 px-4 sm:px-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap size={18} className="text-muted-foreground shrink-0" />
                    <CardTitle className="text-sm sm:text-base">{edu.school}</CardTitle>
                  </div>
                  <CardDescription className="text-xs sm:text-sm font-medium text-foreground">{edu.degree}</CardDescription>
                </div>
                <Badge variant="outline" className="text-[10px] sm:text-xs w-fit">{edu.duration}</Badge>
              </CardHeader>
              <CardContent className="space-y-1 px-4 sm:px-6">
                <p className="text-xs text-muted-foreground italic">{edu.location}</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ─── Certifications ─── */}
      <section className="scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <SectionLabel>Recognition</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Certifications<span className="accent-dot">.</span>
            </h2>
          </div>
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground group w-fit">
            <Link href="/certificates">
              View All <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.slice(0, 3).map((cert, i) => (
            <Card key={i} className="card-hover flex flex-col h-full">
              <CardHeader className="pb-3 flex-grow px-4 sm:px-6">
                <div className="w-9 h-9 rounded-xl bg-muted border border-border flex items-center justify-center mb-3">
                  <Award size={16} className="text-muted-foreground" />
                </div>
                <CardTitle className="text-sm leading-tight mb-1">{cert.title}</CardTitle>
                <CardDescription className="text-xs">{cert.issuer}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-0 border-t border-border/50 mt-auto flex justify-between items-center py-3 px-4 sm:px-6">
                <span className="text-[10px] text-muted-foreground font-medium">{cert.date}</span>
                <Button variant="ghost" size="sm" className="h-8 sm:h-7 text-[10px] sm:text-xs gap-1" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    Verify <ExternalLink size={10} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
