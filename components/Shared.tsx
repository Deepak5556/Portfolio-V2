import React from "react";
import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.12em] mb-1", className)}>
      {children}
    </p>
  );
}

export function Pill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-block px-2.5 py-1 rounded-lg bg-muted text-xs font-medium text-foreground border border-border", className)}>
      {children}
    </span>
  );
}
