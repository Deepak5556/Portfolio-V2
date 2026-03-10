"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center animate-fade-up">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full" />
        <div className="relative w-24 h-24 rounded-3xl bg-card border border-red-500/20 flex items-center justify-center shadow-xl">
          <AlertTriangle size={48} className="text-red-500" />
        </div>
      </div>
      
      <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
        Something went wrong<span className="text-red-500">!</span>
      </h1>
      
      <p className="text-muted-foreground max-w-md mb-10 leading-relaxed text-sm sm:text-base">
        An unexpected server error occurred. We've been notified and are looking into it.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Button onClick={() => reset()} className="gap-2 px-8 h-12 font-bold bg-red-600 hover:bg-red-700 text-white border-none transition-colors">
          <RefreshCcw size={18} /> Try Again
        </Button>
        <Button variant="outline" asChild className="gap-2 px-8 h-12 font-bold border-border/60">
          <Link href="/">
            <Home size={18} /> Home
          </Link>
        </Button>
      </div>

      <div className="mt-12 p-4 rounded-xl bg-muted/30 border border-border/50 max-w-lg w-full">
         <p className="text-[10px] font-mono text-muted-foreground break-all">
           Error Digest: {error.digest || "Internal Server Error"}
         </p>
      </div>
    </div>
  );
}
