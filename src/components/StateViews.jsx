import { AlertTriangle, SearchX } from "lucide-react";

export function SkeletonGrid({ count = 9 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl border border-ink/10 bg-white overflow-hidden animate-pulse"
        >
          <div className="h-44 bg-ink/10" />
          <div className="p-4 space-y-2">
            <div className="h-4 bg-ink/10 rounded w-3/4" />
            <div className="h-3 bg-ink/10 rounded w-1/2" />
            <div className="h-3 bg-ink/10 rounded w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ErrorState({ onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
      <AlertTriangle className="text-rust" size={36} />
      <p className="font-display text-lg text-ink">
        Hotels ka data load nahi ho paaya
      </p>
      <p className="text-ink/50 text-sm">
        Server se connection issue lag raha hai. Dobara try karo.
      </p>
      <button
        onClick={onRetry}
        className="mt-2 bg-ink text-parchment px-5 py-2 rounded-lg hover:bg-teal transition"
      >
        Retry
      </button>
    </div>
  );
}

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
      <SearchX className="text-ink/30" size={36} />
      <p className="font-display text-lg text-ink">Koi hotel nahi mila</p>
      <p className="text-ink/50 text-sm">
        Filters ko thoda loosen karo, kuch aur options milenge.
      </p>
    </div>
  );
}
