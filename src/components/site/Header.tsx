import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/our-story", label: "Our Story" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/80 border-b border-border/60">
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-20">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Anchored Love" className="h-11 sm:h-12 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 hover:text-maroon transition-colors"
              activeProps={{ className: "text-maroon" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/book"
            className="inline-flex items-center rounded-full bg-maroon text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-maroon/90 transition shadow-soft"
          >
            Book Session
          </Link>
        </nav>

        <button className="lg:hidden p-2 text-maroon" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-cream">
          <div className="container-px mx-auto py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-foreground/80 hover:text-maroon" activeProps={{ className: "text-maroon" }}>
                {n.label}
              </Link>
            ))}
            <Link to="/book" onClick={() => setOpen(false)} className="mt-3 inline-flex justify-center rounded-full bg-maroon text-primary-foreground px-5 py-3 text-sm font-medium">
              Book Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
