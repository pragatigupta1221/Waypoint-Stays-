import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-parchment">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="text-center text-xs text-ink/40 font-mono py-6">
        Waypoint Stays — built for the final assignment
      </footer>
    </div>
  );
}
