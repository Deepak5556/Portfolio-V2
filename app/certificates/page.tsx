import React from "react";
import { 
  Card, CardHeader, CardTitle, CardDescription, CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, ChevronLeft, Award, Calendar, 
  MapPin, CheckCircle2, Bookmark
} from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/Shared";
import { certifications } from "@/lib/data";

export default function CertificatesPage() {
  return (
    <div className="animate-fade-up">
      <div className="mb-12">
        <Button variant="ghost" size="sm" asChild className="mb-4 -ml-2 text-muted-foreground hover:text-foreground">
          <Link href="/about">
            <ChevronLeft size={16} className="mr-1" /> Back to About
          </Link>
        </Button>
        <SectionLabel>Recognition</SectionLabel>
        <h1 className="text-4xl font-bold tracking-tight mt-2">
          Certifications<span className="accent-dot">.</span>
        </h1>
        <p className="text-muted-foreground mt-2 max-w-xl">
          A showcase of professional certifications, technical courses, and academic recognitions I've earned.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <Card key={i} className="card-hover flex flex-col group overflow-hidden border-border/50">
            <CardHeader className="pb-3 flex-1">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary transition-transform group-hover:scale-110">
                <Bookmark size={20} />
              </div>
              <CardTitle className="text-base font-bold leading-tight group-hover:text-primary transition-colors">
                {cert.title}
              </CardTitle>
              <CardDescription className="text-xs font-semibold text-muted-foreground/80 flex items-center gap-1.5 mt-2">
                <CheckCircle2 size={12} className="text-orange-500" /> {cert.issuer}
              </CardDescription>
            </CardHeader>
            <CardFooter className="pt-0 p-6 flex-col items-start gap-4">
              <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <Calendar size={11} /> {cert.date}
                </span>
              </div>
              {cert.link && cert.link !== "#" && (
                <Button variant="outline" size="sm" className="w-full gap-2 text-xs font-semibold h-9" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    Verify Certificate <ExternalLink size={12} />
                  </a>
                </Button>
              )}
              {(!cert.link || cert.link === "#") && (
                <Button variant="outline" size="sm" className="w-full gap-2 text-xs font-semibold h-9 opacity-50 cursor-not-allowed">
                  Certificate Offline
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-br from-orange-500/10 via-background to-background border border-orange-500/10 text-center">
          <Award size={48} className="mx-auto mb-6 text-orange-500" />
          <h3 className="text-2xl font-bold mb-3">Commitment to Excellence</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            I consistently invest in my professional growth through industry-standard certifications and specialized technical training. 
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-xs font-semibold">Quality First</Badge>
            <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-xs font-semibold">Continuous Learning</Badge>
            <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-xs font-semibold">Technical Mastery</Badge>
          </div>
      </div>
    </div>
  );
}
