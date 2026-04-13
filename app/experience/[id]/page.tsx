import { notFound } from "next/navigation";
import { workExperience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, Briefcase, Calendar, MapPin, 
  ExternalLink, Layers, CheckCircle2, History 
} from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/Shared";

export function generateStaticParams() {
  return workExperience.map((work) => ({
    id: work.id,
  }));
}

export default function ExperienceDetailPage({ params }: { params: { id: string } }) {
  const experience = workExperience.find((w) => w.id === params.id);

  if (!experience) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 animate-fade-up">
      <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2 text-muted-foreground hover:text-foreground group">
        <Link href="/about">
          <ChevronLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Profile
        </Link>
      </Button>

      <div className="space-y-12">
        {/* Header Section */}
        <div className="relative">
           <div className="absolute -left-4 top-0 w-1 h-full bg-primary/20 rounded-full hidden sm:block" />
           <SectionLabel>Professional Experience</SectionLabel>
           <h1 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tight leading-tight mt-4">
             {experience.role}<span className="text-orange-500 not-italic">.</span>
           </h1>
           <p className="text-xl sm:text-2xl font-bold text-muted-foreground mt-2 opacity-80">{experience.company}</p>
           
           <div className="flex flex-wrap items-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                 <Calendar size={14} className="text-primary" />
                 {experience.duration}
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                 <History size={14} className="text-primary" />
                 Permanent Role
              </div>
           </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-20 pt-12 border-t border-border/50">
           
           <div className="lg:col-span-2 space-y-10">
              <section className="space-y-4">
                 <h3 className="text-xl font-black uppercase italic tracking-tight flex items-center gap-3">
                    <Briefcase size={20} className="text-primary" /> Role Synopsis
                 </h3>
                 <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
                    {experience.description}
                 </p>
              </section>

              <section className="space-y-6">
                 <h3 className="text-xl font-black uppercase italic tracking-tight flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-primary" /> Key Responsibilities
                 </h3>
                 <div className="grid grid-cols-1 gap-4">
                    {experience.responsibilities.map((item, idx) => (
                       <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/10 group hover:border-primary/30 transition-all">
                          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0 group-hover:scale-150 transition-transform" />
                          <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed">
                             {item}
                          </p>
                       </div>
                    ))}
                 </div>
              </section>
           </div>

           <div className="space-y-10">
              <div className="p-8 rounded-3xl bg-card border border-border/50 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-6 flex items-center gap-2">
                    <Layers size={14} /> Technology Matrix
                 </h4>
                 <div className="flex flex-wrap gap-2">
                    {experience.tech.map((t) => (
                       <Badge key={t} className="px-3 py-1 bg-white/5 text-foreground border-border hover:border-primary/50 transition-colors text-[10px] uppercase font-bold tracking-widest">
                          {t}
                       </Badge>
                    ))}
                 </div>
              </div>

              {experience.link && (
                 <div className="pt-4">
                    <Button asChild size="lg" className="w-full rounded-2xl group shadow-xl">
                       <a href={experience.link} target="_blank" rel="noopener noreferrer">
                          Reference Archive <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                       </a>
                    </Button>
                 </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}
