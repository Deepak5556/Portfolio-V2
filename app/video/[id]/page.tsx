import { notFound } from "next/navigation";
import { videos } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Info } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/Shared";
import { CustomVideoPlayer } from "@/components/CustomVideoPlayer";

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
      <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2 text-muted-foreground">
        <Link href="/video">
          <ChevronLeft size={16} className="mr-1" /> Back to Videos
        </Link>
      </Button>

      <div className="space-y-8">
        <div>
          <SectionLabel>Video Project</SectionLabel>
          <h1 className="text-4xl font-bold tracking-tight mb-4">{video.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {video.tools.map((t) => (
              <Badge key={t} variant="secondary">{t}</Badge>
            ))}
          </div>
        </div>

        {/* Custom video player */}
        <CustomVideoPlayer src={video.videoSrc} poster={video.poster} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Info size={18} className="text-muted-foreground" /> Project Overview
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {video.description}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This project involved meticulous attention to detail in editing, ensuring that every transition and sound effect aligned perfectly with the visual narrative. This custom playback experience provides distraction-free viewing.
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Tools Used</h4>
              <div className="flex flex-wrap gap-1.5">
                {video.tools.map(tool => (
                  <Badge key={tool} variant="outline">{tool}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Category</h4>
              <p className="text-sm font-medium">Video Production / Post-Processing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
