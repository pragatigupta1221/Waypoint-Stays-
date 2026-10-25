import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ page, totalPages, setPage }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-3 mt-8 font-mono text-sm">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        className="p-2 rounded-lg border border-ink/15 disabled:opacity-30 hover:bg-ink hover:text-parchment transition"
      >
        <ChevronLeft size={16} />
      </button>
      <span className="text-ink/70">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        className="p-2 rounded-lg border border-ink/15 disabled:opacity-30 hover:bg-ink hover:text-parchment transition"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
