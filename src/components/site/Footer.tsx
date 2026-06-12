import { Link, NavLink } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 bg-[oklch(0.22_0.03_40)] text-cream/85">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="bg-cream/95 rounded-2xl p-4 inline-flex">
            <img src="/logo.png" alt="Anchored Love" className="h-12 w-auto object-contain" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-cream/70">
            Strengthening hearts, restoring homes through faith-based counseling and Christ-centered guidance.
          </p>
        </div>

        <div>
          <h4 className="font-display text-cream text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", l: "Home" },
              { to: "/services", l: "Services" },
              { to: "/our-story", l: "Our Story" },
              { to: "/about", l: "About" },
              { to: "/contact", l: "Contact" },
              { to: "/book", l: "Book Session" },
            ].map((i) => (
              <li key={i.to}><Link to={i.to} className="text-cream/70 hover:text-ember transition">{i.l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-cream text-lg mb-4">Connect</h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-ember" /><span>+234 904 098 7432</span></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-ember" /><span>anchoredlovecounsel@gmail.com</span></li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-ember" />
              <a href="https://www.instagram.com/anchoredlovecounsel/" target="_blank" rel="noreferrer" className="hover:text-ember">@anchoredlovecounsel</a>
            </li>
            <li className="pt-2 text-xs text-cream/50">Mon – Fri · 9 AM – 5 PM WAT</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-px mx-auto max-w-7xl py-6 text-xs text-cream/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Anchored Love. All rights reserved.</span>
          <span>Strengthening Hearts · Restoring Homes</span>
        </div>
      </div>
    </footer>
  );
}
