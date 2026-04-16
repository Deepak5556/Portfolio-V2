import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Monitor, Camera, Video, ArrowRight, GraduationCap, Briefcase, Award, ExternalLink,
  TabletSmartphone, Palette, Code2, Sparkles, Layout
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
          <h2 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tight">
            About Me<span className="text-orange-500 not-italic">.</span>
          </h2>
        </div>

        <div className="mb-10 sm:mb-12 max-w-2xl">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
            I'm a passionate Full Stack Developer with hands-on experience building responsive web
            and mobile applications. I love crafting products that solve real problems with clean,
            maintainable code.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-4 font-medium">
            Currently studying at Karpagam College, I focus on React, Flutter, and the MERN stack —
            constantly learning, shipping, and improving. I am based in {profile.location}.
          </p>
        </div>

        <div className="mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-tight">
            Skills<span className="text-orange-500 not-italic">.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { 
              icon: Code2, 
              title: "Software Development", 
              desc: "Building scalable web and cross-platform mobile applications with modern stacks.", 
              tools: ["React", "Next.js", "Flutter", "Node.js", "Dart"], 
              href: "/software" 
            },
            { 
              icon: Layout, 
              title: "Designs", 
              desc: "Crafting pixel-perfect designs and intuitive User Experiences for all platforms.", 
              tools: ["Figma", "UI/UX", "Adobe XD", "Branding"], 
              href: "/designs" 
            },
            { 
              icon: Sparkles, 
              title: "Visual Art", 
              desc: "Cinematic video production and professional photography with post-processing.", 
              tools: ["Premiere Pro", "After Effects", "Photoshop", "Lightroom"], 
              href: "/media" 
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="card-hover">
                <CardHeader className="pb-2 px-4 sm:px-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-lg shadow-primary/5 transition-transform group-hover:scale-110">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-black uppercase italic tracking-tight mb-2">
                    {item.title}<span className="text-orange-500 not-italic">.</span>
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-muted-foreground/60 leading-relaxed font-medium">
                    {item.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4 px-4 sm:px-6">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.map((t) => <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>)}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 px-4 sm:px-6">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={item.href}>
                      View Details <ArrowRight size={12} />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>



      {/* ─── Work Experience ─── */}
      <section className="scroll-mt-20">
        <div className="mb-6 sm:mb-8">
          <SectionLabel>Professional</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tight">
            Work Experience<span className="text-orange-500 not-italic">.</span>
          </h2>
        </div>
        <div className="space-y-4">
          {workExperience.map((work, i) => (
            <Link key={i} href={`/experience/${work.id}`} className="block">
              <Card className="card-hover cursor-pointer h-full border-border/40 hover:border-primary/30 transition-all duration-500">
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
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">{work.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {work.tech?.map((t) => (
                      <Badge key={t} variant="secondary" className="text-[8px] font-black uppercase tracking-widest bg-muted/30 text-muted-foreground border-none px-2.5 py-1">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── Internships ─── */}
      <section className="scroll-mt-20">
        <div className="mb-6 sm:mb-8">
          <SectionLabel>Training</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tight">
            Internships<span className="text-orange-500 not-italic">.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {internships.map((intern, i) => (
            <Link key={i} href={`/internship/${intern.id}`} className="block">
              <Card className="card-hover flex flex-col h-full cursor-pointer border-border/40 hover:border-orange-500/30 transition-all duration-500">
                <CardHeader className="pb-2 px-4 sm:px-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-[10px]">Internship</Badge>
                    <span className="text-[10px] text-muted-foreground">{intern.duration}</span>
                  </div>
                  <CardTitle className="text-sm sm:text-base">{intern.role}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm font-medium text-foreground">{intern.company}</CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 flex-1 flex flex-col">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{intern.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {intern.tech?.map((t) => (
                      <Badge key={t} variant="secondary" className="text-[8px] font-black uppercase tracking-widest bg-muted/30 text-muted-foreground border-none px-2.5 py-1">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── Education ─── */}
      <section className="scroll-mt-20">
        <div className="mb-6 sm:mb-8">
          <SectionLabel>Academic</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tight">
            Education<span className="text-orange-500 not-italic">.</span>
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
            <h2 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tight">
            Certifications<span className="text-orange-500 not-italic">.</span>
          </h2>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            asChild 
            className="shadow-sm"
          >
            <Link href="/certificates">
              View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
                <Button variant="outline" size="sm" asChild>
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
