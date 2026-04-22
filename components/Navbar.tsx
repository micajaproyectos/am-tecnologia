"use client";

import { useEffect, useState } from "react";

const WA = "https://wa.me/56985660954?text=Hola%2C%20quiero%20cotizar%20mi%20p%C3%A1gina%20web";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto",  label: "Contacto"  },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-am-bg/90 backdrop-blur-xl border-b border-white/5 shadow-xl" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-8 h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="font-display font-bold text-2xl gradient-text">AM</span>
          <span className="font-display font-bold text-xl text-white">Tecnología</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-am-muted hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-white/20 text-sm font-semibold text-am-text hover:border-am-primary hover:text-am-primary transition-all duration-200"
        >
          Cotiza tu Proyecto
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden ml-auto flex flex-col gap-[5px] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span
            className={`block h-0.5 w-6 bg-am-text rounded-full transition-all duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-am-text rounded-full transition-all duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-am-text rounded-full transition-all duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-am-surface/98 backdrop-blur-xl border-t border-white/5 px-6 pb-6 flex flex-col gap-1 max-h-[calc(100vh-72px)] overflow-y-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-am-muted font-medium hover:bg-white/5 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-am-primary text-am-primary font-semibold text-sm hover:bg-am-primary/8 transition-all duration-200"
          >
            Cotiza tu Proyecto
          </a>
        </div>
      )}
    </header>
  );
}
