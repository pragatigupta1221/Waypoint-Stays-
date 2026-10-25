import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/50"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search hotel name or city..."
        className="w-full pl-10 pr-4 py-3 rounded-lg border border-ink/15 bg-white
                   font-body text-ink placeholder:text-ink/40
                   focus:outline-none focus:ring-2 focus:ring-gold"
      />
    </div>
  );
}
