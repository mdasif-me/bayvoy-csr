/**
 * Loading Skeleton Component
 */

export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-gray-200 animate-pulse rounded ${className}`}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <Skeleton className="w-full h-48" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <div className="flex justify-between">
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-5 w-1/4" />
        </div>
      </div>
    </div>
  );
}
