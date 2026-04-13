import { notFound } from "next/navigation";
import { internships } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, GraduationCap, Calendar, 
  Sparkles, Layers, CheckCircle2, Award 
} from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/Shared";

export function generateStaticParams() {
  return internships.map((intern) => ({
    id: intern.id,
  }));
}

export default function InternshipDetailPage({ params }: { params: { id: string } }) {
  const internship = internships.find((i) => i.id === params.id);

  if (!internship) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 animate-fade-up">
      <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2 text-muted-foreground hover:text-foreground group text-[10px] font-black uppercase tracking-widest">
        <Link href="/about">
          <ChevronLeft size={14} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Training Archive
        </Link>
      </Button>

      <div className="space-y-12">
        {/* Header Section */}
        <div className="relative">
           <div className="absolute -left-4 top-0 w-1 h-full bg-orange-500/20 rounded-full hidden sm:block" />
           <SectionLabel>Professional Training</SectionLabel>
           <h1 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tight leading-tight mt-4">
             {internship.role}<span className="text-orange-500 not-italic">.</span>
           </h1>
           <p className="text-xl sm:text-2xl font-bold text-muted-foreground mt-2 opacity-80">{internship.company}</p>
           
           <div className="flex flex-wrap items-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                 <Calendar size={14} className="text-orange-500" />
                 {internship.duration}
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                 <Badge className="bg-orange-500 text-white border-none text-[8px]">ACTIVE_INTERNSHIP</Badge>
              </div>
           </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-20 pt-12 border-t border-border/50">
           
           <div className="lg:col-span-2 space-y-10">
              <section className="space-y-4">
                 <h3 className="text-xl font-black uppercase italic tracking-tight flex items-center gap-3">
                    <Sparkles size={20} className="text-orange-500" /> Training Overview
                 </h3>
                 <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium italic border-l-2 border-orange-500/20 pl-6">
                    {internship.description}
                 </p>
              </section>

              <section className="space-y-6">
                 <h3 className="text-xl font-black uppercase italic tracking-tight flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-orange-500" /> Responsibilities & Learning
                 </h3>
                 <div className="grid grid-cols-1 gap-4">
                    {internship.responsibilities.map((item, idx) => (
                       <div key={idx} className="flex items-start gap-4 p-5 rounded-3xl bg-orange-500/5 border border-orange-500/10 group hover:border-orange-500/30 transition-all">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 group-hover:scale-150 transition-transform" />
                          <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed">
                             {item}
                          </p>
                       </div>
                    ))}
                 </div>
              </section>
           </div>

           <div className="space-y-10">
              <div className="p-8 rounded-[2.5rem] bg-zinc-900/10 backdrop-blur-3xl border border-white/5 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-orange-500/10 transition-colors" />
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-6 flex items-center gap-2">
                    <Layers size={14} /> Technical Stack
                 </h4>
                 <div className="flex flex-wrap gap-2">
                    {internship.tech.map((t) => (
                       <Badge key={t} className="px-3 py-1 bg-white/5 text-foreground border-border hover:border-orange-500/50 transition-colors text-[9px] uppercase font-black tracking-widest">
                          {t}
                       </Badge>
                    ))}
                 </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-muted/20 border border-border/50 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Certified Industry Training Module</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
