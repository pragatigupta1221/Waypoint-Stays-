import useHotels from "../hooks/useHotels";
import useFavorites from "../hooks/useFavorites";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import HotelCard from "../components/HotelCard";
import Pagination from "../components/Pagination";
import { SkeletonGrid, ErrorState, EmptyState } from "../components/StateViews";

export default function Home() {
  const {
    status,
    hotels,
    totalResults,
    locations,
    search,
    setSearch,
    location,
    setLocation,
    maxPrice,
    setMaxPrice,
    minRating,
    setMinRating,
    sortBy,
    setSortBy,
    page,
    setPage,
    totalPages,
  } = useHotels();

  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div className="max-w-6xl mx-auto px-5 py-8">
      {/* Hero */}
      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest text-teal font-mono mb-2">
          Gate Open · 500 Destinations
        </p>
        <h1 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
          Find your next stay, <br className="hidden sm:block" />
          book your boarding pass.
        </h1>
      </section>

      <div className="mb-6 max-w-xl">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="lg:col-span-1">
          <FilterPanel
            locations={locations}
            location={location}
            setLocation={setLocation}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            minRating={minRating}
            setMinRating={setMinRating}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </aside>

        <main className="lg:col-span-3">
          {status === "ready" && (
            <p className="text-sm text-ink/50 font-mono mb-4">
              {totalResults} hotels found
            </p>
          )}

          {status === "loading" && <SkeletonGrid />}
          {status === "error" && (
            <ErrorState onRetry={() => window.location.reload()} />
          )}
          {status === "ready" && hotels.length === 0 && <EmptyState />}

          {status === "ready" && hotels.length > 0 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {hotels.map((hotel) => (
                  <HotelCard
                    key={hotel.id}
                    hotel={hotel}
                    isFavorite={isFavorite(hotel.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
              <Pagination page={page} totalPages={totalPages} setPage={setPage} />
            </>
          )}
        </main>
      </div>
    </div>
  );
}
