import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeartOff } from "lucide-react";
import { fetchHotels } from "../api/hotels";
import useFavorites from "../hooks/useFavorites";
import HotelCard from "../components/HotelCard";
import { SkeletonGrid, ErrorState } from "../components/StateViews";

export default function Wishlist() {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  const [hotels, setHotels] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetchHotels()
      .then((data) => {
        setHotels(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  const saved = hotels.filter((h) => favorites.includes(h.id));

  return (
    <div className="max-w-6xl mx-auto px-5 py-8">
      <p className="text-xs uppercase tracking-widest text-teal font-mono mb-2">
        Saved for Later
      </p>
      <h1 className="font-display text-3xl text-ink mb-6">Your Wishlist</h1>

      {status === "loading" && <SkeletonGrid count={3} />}
      {status === "error" && <ErrorState onRetry={() => window.location.reload()} />}

      {status === "ready" && saved.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
          <HeartOff className="text-ink/30" size={36} />
          <p className="font-display text-lg text-ink">
            Wishlist abhi khaali hai
          </p>
          <p className="text-ink/50 text-sm">
            Hotel cards par heart icon dabao unhe yahan save karne ke liye.
          </p>
          <Link
            to="/"
            className="mt-2 bg-ink text-parchment px-5 py-2 rounded-lg hover:bg-teal transition"
          >
            Browse Hotels
          </Link>
        </div>
      )}

      {status === "ready" && saved.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {saved.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              isFavorite={isFavorite(hotel.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
