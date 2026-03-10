import { notFound } from "next/navigation";
import { photos } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Image as ImageIcon, Info } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/Shared";
import { PhotoCarousel } from "@/components/PhotoCarousel";

export function generateStaticParams() {
  return photos.map((p) => ({
    id: p.id,
  }));
}

export default function PhotoDetailsPage({ params }: { params: { id: string } }) {
  const photo = photos.find((p) => p.id === params.id);

  if (!photo) {
    notFound();
  }

  return (
    <div className="animate-fade-up">
      <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2 text-muted-foreground">
        <Link href="/photo">
          <ChevronLeft size={16} className="mr-1" /> Back to Photos
        </Link>
      </Button>

      <div className="space-y-8">
        <div>
          <SectionLabel>Design Project</SectionLabel>
          <h1 className="text-4xl font-bold tracking-tight mb-4">{photo.title}</h1>
          <Badge variant="secondary">Graphic Design</Badge>
        </div>

        {/* Carousel Display */}
        <PhotoCarousel images={photo.images} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Info size={18} className="text-muted-foreground" /> Design Details
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {photo.description}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Focused on visual hierarchy and color harmony, this design was crafted to stand out while maintaining professional standards. 
              The process involved multiple iterations to ensure the perfect balance between aesthetics and functionality. 
              View the carousel above to see different variations and process shots.
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Software Used</h4>
              <div className="flex flex-wrap gap-1.5">
                {["Photoshop", "Lightroom", "Illustrator"].map(tool => (
                  <Badge key={tool} variant="outline" className="text-[10px]">{tool}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Type</h4>
              <p className="text-sm font-medium">Digital Art / Creative Direction</p>
            </div>
            <Button className="w-full gap-2">
               <ImageIcon size={14} /> Download Assets
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
