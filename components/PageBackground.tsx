"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export function PageBackground() {
  return (
    <DotPattern
      width={24}
      height={24}
      cx={1}
      cy={1}
      cr={1}
      className={cn(
        "fixed inset-0 -z-10 [mask-image:radial-gradient(1200px_circle_at_center,white,transparent)] opacity-40",
      )}
    />
  );
}
