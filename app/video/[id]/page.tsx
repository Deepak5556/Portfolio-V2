import { notFound } from "next/navigation";
import { videos } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Info, Scissors, Layers, Sparkles, Sliders } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/Shared";
import { CustomVideoPlayer } from "@/components/CustomVideoPlayer";
import { ShareAction } from "@/components/ShareAction";

export function generateStaticParams() {
  return videos.map((v) => ({
    id: v.id,
  }));
}

export default function VideoDetailsPage({ params }: { params: { id: string } }) {
  const video = videos.find((v) => v.id === params.id);

  if (!video) {
    notFound();
  }

  return (
    <div className="animate-fade-up">
      <Button variant="ghost" size="sm" asChild className="mb-6 sm:mb-10 -ml-2 text-muted-foreground hover:text-foreground">
        <Link href="/video">
          <ChevronLeft size={16} className="mr-1" /> Back to Videos
        </Link>
      </Button>

      <div className="space-y-8 sm:space-y-12">
        <div className="max-w-4xl">
          <SectionLabel>Video Project</SectionLabel>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1]">
            {video.title}<span className="accent-dot">.</span>
          </h1>
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            {video.tools.map((t) => (
              <Badge key={t} variant="secondary" className="px-3 py-1 bg-accent/5 text-accent border border-accent/10 font-bold">{t}</Badge>
            ))}
            <ShareAction 
              title={video.title} 
              variant="outline" 
              size="default" 
              className="rounded-xl h-8 border-border/50 text-xs gap-2"
              iconOnly={false} 
            />
          </div>
        </div>

        {/* Custom video player with premium styling */}
        <div className="rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/10">
          <CustomVideoPlayer src={video.videoSrc} poster={video.poster} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-16 pt-10 sm:pt-14 border-t border-border/50">
          <div className="lg:col-span-2 space-y-8 sm:space-y-10">
            <div>
                <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2 mb-4">
                  <Info size={22} className="text-accent" /> Project Overview
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {video.description}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-3">
                    <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider">
                        <Scissors size={18} className="text-accent" /> Editing Workflow
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Meticulous attention to pacing and narrative flow. Every cut is timed to the 
                        beat and visual movement to ensure a seamless viewer experience.
                    </p>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider">
                        <Sliders size={18} className="text-accent" /> Post-Processing
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Advanced color correction and grading to achieve a consistent cinematic look. 
                        Sound design integrated to heighten the emotional impact of the visuals.
                    </p>
                </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <div className="p-6 rounded-2xl bg-muted/30 border border-border/50 shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60 mb-5">Creative Suite</h4>
              <div className="flex flex-wrap gap-2">
                {video.tools.map(tool => (
                  <Badge key={tool} variant="outline" className="px-2.5 py-1 text-[11px] font-bold border-border/60 hover:border-accent/30 hover:bg-accent/5 transition-colors">{tool}</Badge>
                ))}
              </div>
            </div>
            
            <div className="px-2">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60 mb-3">Service Type</h4>
              <p className="text-sm font-bold text-foreground">Video Production & Post-Processing</p>
              <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Sparkles size={14} className="text-orange-400" /> High-Fidelity Rendering
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Layers size={14} className="text-orange-400" /> Layered Motion Graphics
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
