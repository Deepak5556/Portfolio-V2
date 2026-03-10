"use client";

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      let start = Math.max(1, currentPage - 2);
      let end = Math.min(totalPages, start + maxVisiblePages - 1);
      
      if (end === totalPages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }
      
      for (let i = start; i <= end; i++) pages.push(i);
    }
    return pages;
  };

  return (
    <div className={cn("flex items-center justify-center gap-2 mt-12 mb-8", className)}>
      <div className="flex items-center gap-1 group">
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-border/50 hover:border-primary/50 disabled:opacity-30 rounded-xl transition-all"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          <ChevronsLeft size={16} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-border/50 hover:border-primary/50 disabled:opacity-30 rounded-xl transition-all"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} />
        </Button>
      </div>

      <div className="flex items-center gap-1.5 mx-2">
        {getPageNumbers().map(page => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="icon"
            className={cn(
              "h-9 w-9 rounded-xl transition-all font-bold text-xs",
              currentPage === page 
                ? "shadow-lg shadow-primary/20 scale-110 z-10" 
                : "border-border/50 hover:border-primary/50 text-muted-foreground hover:text-foreground"
            )}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-1 group">
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-border/50 hover:border-primary/50 disabled:opacity-30 rounded-xl transition-all"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight size={16} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-border/50 hover:border-primary/50 disabled:opacity-30 rounded-xl transition-all"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <ChevronsRight size={16} />
        </Button>
      </div>
    </div>
  );
}
