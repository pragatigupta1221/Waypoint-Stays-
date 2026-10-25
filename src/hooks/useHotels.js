import { useState, useEffect, useMemo } from "react";
import { fetchHotels } from "../api/hotels";

const PAGE_SIZE = 9;

export default function useHotels() {
  const [allHotels, setAllHotels] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | error | ready

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("recommended");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchHotels()
      .then((data) => {
        setAllHotels(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  const locations = useMemo(() => {
    const set = new Set(allHotels.map((h) => h.location));
    return ["All", ...Array.from(set).sort()];
  }, [allHotels]);

  const filtered = useMemo(() => {
    let list = allHotels.filter((h) => {
      const matchesSearch =
        !search ||
        h.name.toLowerCase().includes(search.toLowerCase()) ||
        h.location.toLowerCase().includes(search.toLowerCase());
      const matchesLocation = location === "All" || h.location === location;
      const matchesPrice = h.price <= maxPrice;
      const matchesRating = h.rating >= minRating;
      return matchesSearch && matchesLocation && matchesPrice && matchesRating;
    });

    if (sortBy === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "rating-desc") list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [allHotels, search, location, maxPrice, minRating, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // reset to page 1 whenever filters change
  useEffect(() => {
    setPage(1);
  }, [search, location, maxPrice, minRating, sortBy]);

  return {
    status,
    hotels: paginated,
    totalResults: filtered.length,
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
    allHotels,
  };
}
