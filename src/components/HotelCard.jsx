import { Link } from "react-router-dom";
import { Star, MapPin, Heart } from "lucide-react";

export default function HotelCard({ hotel, isFavorite, onToggleFavorite }) {
  return (
    <div className="rounded-xl shadow-sm border border-ink/10 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      {/* Image */}
      <div className="relative h-44 overflow-hidden rounded-t-xl">
        <img
          src={hotel.thumbnail}
          alt={hotel.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-ink/85 text-white text-xs font-mono px-2 py-1 rounded-full flex items-center gap-1">
          <Star size={12} className="fill-gold text-gold" />
          {hotel.rating.toFixed(1)}
        </div>
        <button
          onClick={() => onToggleFavorite(hotel.id)}
          aria-label="Toggle favorite"
          className="absolute top-3 right-3 bg-white/90 rounded-full p-2 hover:scale-110 transition"
        >
          <Heart
            size={16}
            className={isFavorite ? "fill-rust text-rust" : "text-ink/50"}
          />
        </button>
      </div>

      {/* Ticket seam between image and content */}
      <div className="ticket-notch relative border-t-2 border-dashed border-ink/15" />

      {/* Content */}
      <div className="flex flex-col p-4 gap-1 rounded-b-xl">
        <h3 className="font-display text-lg text-ink leading-snug">
          {hotel.name}
        </h3>
        <p className="flex items-center gap-1 text-sm text-ink/60 font-body">
          <MapPin size={14} /> {hotel.location}
        </p>
        <p className="text-sm text-ink/50 line-clamp-2 mt-1 font-body">
          {hotel.description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-ink/40 font-mono">
              per night
            </span>
            <span className="font-mono text-rust font-semibold">
              ₹{hotel.price.toLocaleString("en-IN")}
            </span>
          </div>
          <Link
            to={`/hotel/${hotel.id}`}
            className="text-sm font-body font-medium bg-ink text-parchment px-4 py-2 rounded-lg hover:bg-teal transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
