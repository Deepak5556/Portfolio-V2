import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Film, Play } from "lucide-react";
import Link from "next/link";
import { SectionLabel, Pill } from "@/components/Shared";
import { videoTools, videos } from "@/lib/data";

export default function VideoPage() {
  return (
    <section id="video" className="scroll-mt-20 animate-fade-up">
      <div className="mb-6 sm:mb-8">
        <SectionLabel>Creative</SectionLabel>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Videography & Editing<span className="accent-dot">.</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
          Cinematic videography, motion graphics, and social media content — crafted with attention to detail, pacing, and storytelling.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Known Tools
        </h3>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {videoTools.map((t) => <Pill key={t} className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1">{t}</Pill>)}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((v, i) => (
          <Card key={i} className="card-hover group relative overflow-hidden flex flex-col">
            <CardHeader className="pb-2 px-4 sm:px-6">
              <div className="w-full h-28 sm:h-32 rounded-lg bg-muted border border-border flex items-center justify-center mb-2 relative overflow-hidden">
                <img 
                  src={v.poster} 
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                   <Button variant="secondary" size="sm" className="gap-2 shadow-sm h-9 sm:h-8" asChild>
                     <Link href={`/video/${v.id}`}>
                       <Play size={14} fill="currentColor" /> Play
                     </Link>
                   </Button>
                </div>
              </div>
              <CardTitle className="text-xs sm:text-sm font-semibold truncate">{v.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-3 flex-1">
              <CardDescription className="text-[11px] sm:text-xs leading-relaxed line-clamp-2">
                {v.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-1.5 sm:gap-2 px-4 sm:px-6 mt-auto">
              {v.tools.map((t) => <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>)}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
