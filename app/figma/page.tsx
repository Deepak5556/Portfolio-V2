import {
  Card, CardHeader, CardTitle, CardDescription, CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Figma } from "lucide-react";
import { SectionLabel } from "@/components/Shared";
import { figmaProjects } from "@/lib/data";

export default function FigmaPage() {
  return (
    <section id="figma" className="scroll-mt-20 animate-fade-up">
      <div className="mb-6 sm:mb-8">
        <SectionLabel>Design</SectionLabel>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          UI/UX Design<span className="accent-dot">.</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
          Designing intuitive, accessible interfaces — from wireframes to high-fidelity prototypes in Figma.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {figmaProjects.map((proj, i) => (
          <Card key={i} className="card-hover flex flex-col">
            <CardHeader className="pb-3 px-4 sm:px-6">
              <div className="w-full h-24 sm:h-28 rounded-lg bg-muted border border-border flex items-center justify-center mb-2">
                <Figma size={22} className="text-muted-foreground/30" />
              </div>
              <CardTitle className="text-xs sm:text-sm">{proj.name}</CardTitle>
              <CardDescription className="text-xs">{proj.desc}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto px-4 sm:px-6">
              <Button variant="outline" size="sm" className="w-full text-xs h-9 sm:h-8 gap-1.5">
                <Figma size={11} /> View in Figma
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
