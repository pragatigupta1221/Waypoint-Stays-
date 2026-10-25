import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Luggage, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Hotels" },
  { to: "/wishlist", label: "Wishlist" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `font-body text-sm tracking-wide transition ${
      isActive ? "text-gold" : "text-parchment/70 hover:text-parchment"
    }`;

  return (
    <header className="bg-ink text-parchment sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Luggage size={22} className="text-gold" />
          <span className="font-display text-xl tracking-wide">
            Waypoint <span className="text-gold">Stays</span>
          </span>
        </Link>

        <nav className="hidden sm:flex items-center gap-7">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="sm:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="sm:hidden flex flex-col gap-4 px-5 pb-5 border-t border-parchment/10 pt-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={linkClass}
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
