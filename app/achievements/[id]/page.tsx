import { notFound } from "next/navigation";
import { achievements } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Award, Calendar, Landmark, Trophy, ExternalLink } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/Shared";

export function generateStaticParams() {
  return achievements.map((a) => ({
    id: a.id,
  }));
}

export default function AchievementDetailsPage({ params }: { params: { id: string } }) {
  const achievement = achievements.find((a) => a.id === params.id);

  if (!achievement) {
    notFound();
  }

  return (
    <div className="animate-fade-up">
      <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2 text-muted-foreground">
        <Link href="/software">
          <ChevronLeft size={16} className="mr-1" /> Back to Software
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <SectionLabel>Achievement</SectionLabel>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
              {achievement.event} <Trophy className="text-orange-500 shrink-0" size={28} />
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {achievement.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-muted/50 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <Landmark className="text-primary" size={20} />
                <h3 className="font-semibold">Organization</h3>
              </div>
              <p className="text-muted-foreground">{achievement.org}</p>
            </div>
            <div className="p-6 rounded-2xl bg-muted/50 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="text-primary" size={20} />
                <h3 className="font-semibold">Year</h3>
              </div>
              <p className="text-muted-foreground">{achievement.year}</p>
            </div>
          </div>

          {achievement.details && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Details & Impact</h2>
              <ul className="space-y-4">
                {(achievement as any).details.map((detail: string, idx: number) => (
                  <li key={idx} className="flex gap-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      {detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-3xl bg-primary text-primary-foreground shadow-xl shadow-primary/20">
            <Award size={48} className="mb-6 opacity-80" />
            <h3 className="text-2xl font-bold mb-2">Recognition</h3>
            <p className="text-primary-foreground/80 mb-6">
              This certificate validates my expertise and commitment to excellence in engineering.
            </p>
            <Button variant="secondary" className="w-full gap-2 font-bold" disabled>
              Certificate Issued
            </Button>
          </div>
          
          <div className="p-6 rounded-2xl border border-dashed border-border">
            <p className="text-sm italic text-muted-foreground text-center">
              &quot;A testament to dedication and technical prowess in modern web architecture.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
