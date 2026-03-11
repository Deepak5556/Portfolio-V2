import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full space-y-12 animate-in fade-in duration-500 pt-8">
      {/* Header Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-4 w-24 rounded-full" />
        <Skeleton className="h-10 sm:h-12 w-3/4 sm:w-1/2 rounded-lg" />
        <Skeleton className="h-6 w-full sm:w-2/3 rounded-lg" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="space-y-4 p-4 rounded-2xl border border-border/50">
            <Skeleton className="aspect-video w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4 rounded-md" />
              <Skeleton className="h-3 w-full rounded-md" />
              <Skeleton className="h-3 w-5/6 rounded-md" />
            </div>
            <Skeleton className="h-9 w-full rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
