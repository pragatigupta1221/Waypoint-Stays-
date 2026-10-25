export default function FilterPanel({
  locations,
  location,
  setLocation,
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="bg-white border border-ink/10 rounded-xl p-5 flex flex-col gap-5 font-body">
      <div>
        <label className="text-xs uppercase tracking-widest text-ink/50 font-mono">
          Destination
        </label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mt-1 w-full border border-ink/15 rounded-lg px-3 py-2 bg-parchment focus:outline-none focus:ring-2 focus:ring-gold"
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-xs uppercase tracking-widest text-ink/50 font-mono flex justify-between">
          <span>Max Price</span>
          <span className="text-rust font-mono">₹{maxPrice}</span>
        </label>
        <input
          type="range"
          min="500"
          max="10000"
          step="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="mt-2 w-full accent-gold"
        />
      </div>

      <div>
        <label className="text-xs uppercase tracking-widest text-ink/50 font-mono">
          Min Rating
        </label>
        <div className="mt-2 flex gap-2">
          {[0, 3, 3.5, 4, 4.5].map((r) => (
            <button
              key={r}
              onClick={() => setMinRating(r)}
              className={`px-3 py-1 rounded-full text-sm border transition ${
                minRating === r
                  ? "bg-teal text-white border-teal"
                  : "border-ink/15 text-ink/70 hover:border-teal"
              }`}
            >
              {r === 0 ? "Any" : `${r}+`}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs uppercase tracking-widest text-ink/50 font-mono">
          Sort By
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="mt-1 w-full border border-ink/15 rounded-lg px-3 py-2 bg-parchment focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <option value="recommended">Recommended</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Rating: High to Low</option>
        </select>
      </div>
    </div>
  );
}
