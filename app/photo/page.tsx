import {
  Card, CardContent, CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Eye } from "lucide-react";
import Link from "next/link";
import { SectionLabel, Pill } from "@/components/Shared";
import { photoTools, photos } from "@/lib/data";

export default function PhotoPage() {
  return (
    <section id="photo" className="scroll-mt-20 animate-fade-up">
      <div className="mb-6 sm:mb-8">
        <SectionLabel>Creative</SectionLabel>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Photography & Photo Editing<span className="accent-dot">.</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
          Professional photography, portrait retouching, and creative compositions — bringing stories to life through the lens.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Known Tools
        </h3>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {photoTools.map((t) => <Pill key={t} className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1">{t}</Pill>)}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {photos.map((item, i) => (
          <Card key={i} className="card-hover group relative overflow-hidden">
            <CardContent className="p-3 sm:p-4">
              <div className="w-full aspect-square rounded-lg bg-muted border border-border flex items-center justify-center mb-3 relative overflow-hidden">
                <img 
                  src={item.images[0]} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                   <Button variant="secondary" size="sm" className="gap-2 text-xs h-9 sm:h-8 shadow-sm" asChild>
                     <Link href={`/photo/${item.id}`}>
                       <Eye size={14} /> View Details
                     </Link>
                   </Button>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-semibold truncate px-1">{item.title}</p>
              <CardDescription className="text-[10px] sm:text-xs px-1 mt-1 line-clamp-2">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
