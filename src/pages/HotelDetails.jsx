import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Heart } from "lucide-react";
import { fetchHotels } from "../api/hotels";
import useFavorites from "../hooks/useFavorites";
import { SkeletonGrid, ErrorState } from "../components/StateViews";

export default function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [status, setStatus] = useState("loading");
  const [activePhoto, setActivePhoto] = useState(0);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    setStatus("loading");
    fetchHotels()
      .then((data) => {
        const found = data.find((h) => String(h.id) === id);
        setHotel(found || null);
        setStatus(found ? "ready" : "notfound");
      })
      .catch(() => setStatus("error"));
  }, [id]);

  if (status === "loading") {
    return (
      <div className="max-w-5xl mx-auto px-5 py-8">
        <SkeletonGrid count={3} />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="max-w-5xl mx-auto px-5 py-8">
        <ErrorState onRetry={() => window.location.reload()} />
      </div>
    );
  }

  if (status === "notfound") {
    return (
      <div className="max-w-5xl mx-auto px-5 py-16 text-center">
        <p className="font-display text-xl text-ink">Ye hotel nahi mila.</p>
        <Link to="/" className="text-teal underline mt-2 inline-block">
          Back to search
        </Link>
      </div>
    );
  }

  const photos = hotel.photos?.length ? hotel.photos : [hotel.thumbnail];

  return (
    <div className="max-w-5xl mx-auto px-5 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-ink/60 hover:text-teal text-sm mb-6 font-body"
      >
        <ArrowLeft size={16} /> Back to results
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Gallery */}
        <div className="lg:col-span-2">
          <div className="rounded-xl overflow-hidden border border-ink/10 h-80 sm:h-96">
            <img
              src={photos[activePhoto]}
              alt={hotel.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-thin pb-2">
            {photos.map((p, i) => (
              <button
                key={i}
                onClick={() => setActivePhoto(i)}
                className={`w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 ${
                  activePhoto === i ? "border-gold" : "border-transparent"
                }`}
              >
                <img src={p} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Boarding-pass style info card */}
        <div className="ticket-notch bg-white border border-ink/10 rounded-xl p-6 flex flex-col gap-4 h-fit">
          <div className="flex items-start justify-between">
            <h1 className="font-display text-2xl text-ink leading-tight">
              {hotel.name}
            </h1>
            <button onClick={() => toggleFavorite(hotel.id)}>
              <Heart
                size={20}
                className={isFavorite(hotel.id) ? "fill-rust text-rust" : "text-ink/30"}
              />
            </button>
          </div>

          <p className="flex items-center gap-1 text-ink/60 font-body">
            <MapPin size={16} /> {hotel.location}
          </p>

          <div className="flex items-center gap-1 text-teal font-mono">
            <Star size={16} className="fill-gold text-gold" />
            {hotel.rating.toFixed(1)} / 5.0
          </div>

          <div className="dash-line h-px w-full bg-none" style={{ background: "none" }} />
          <hr className="border-dashed border-ink/20" />

          <p className="text-ink/70 text-sm leading-relaxed font-body">
            {hotel.description}
          </p>

          <div className="flex items-center justify-between mt-2">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-ink/40 font-mono block">
                Total per night
              </span>
              <span className="font-mono text-2xl text-rust font-semibold">
                ₹{hotel.price.toLocaleString("en-IN")}
              </span>
            </div>
            <button className="bg-ink text-parchment px-5 py-3 rounded-lg font-body font-medium hover:bg-teal transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
