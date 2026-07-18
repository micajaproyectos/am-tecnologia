"use client";

import { useEffect, useState } from "react";

const WA = "https://wa.me/56985660954?text=Hola%2C%20quiero%20contratar%20mi%20p%C3%A1gina%20web";

export default function Navbar({ corporate = false }: { corporate?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "/#servicios", label: "Servicios" },
    { href: "/#proyectos", label: "Proyectos" },
    { href: "/blog",       label: "Blog"      },
    { href: "/#contacto",  label: "Contacto"  },
  ];

  const headerClass = corporate
    ? `bg-gradient-to-b from-[#152f59] to-[#0a1c39] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] ${
        scrolled ? "shadow-lg" : ""
      }`
    : scrolled
      ? "bg-am-bg/90 backdrop-blur-xl border-b border-white/5 shadow-xl"
      : "";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-8 h-[72px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className={`font-display font-bold text-2xl ${corporate ? "text-white" : "gradient-text"}`}>AM</span>
          <span className="font-display font-bold text-xl text-am-blue">
            Tecnología<sup className="text-[10px] font-normal align-super text-white">®</sup>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[15px] font-medium transition-colors ${
                corporate
                  ? "text-white hover:text-blue-100"
                  : "text-am-muted hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={WA}
          data-cta-source="navbar"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
            corporate
              ? "bg-white text-am-navy hover:bg-blue-50"
              : "border border-white/20 text-am-text hover:border-am-primary hover:text-am-primary"
          }`}
        >
          Comenzar mi proyecto
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden ml-auto flex flex-col gap-[5px] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 w-6 rounded-full transition-all duration-200 ${
                corporate ? "bg-white" : "bg-am-text"
              } ${
                open
                  ? i === 0
                    ? "rotate-45 translate-y-[7px]"
                    : i === 1
                      ? "opacity-0"
                      : "-rotate-45 -translate-y-[7px]"
                  : ""
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className={`md:hidden px-6 pb-6 flex flex-col gap-1 max-h-[calc(100vh-72px)] overflow-y-auto ${
            corporate
              ? "bg-am-navy-2 border-t border-white/10"
              : "bg-am-surface/98 backdrop-blur-xl border-t border-white/5"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                corporate
                  ? "text-white hover:bg-white/10"
                  : "text-am-muted hover:bg-white/5 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA}
            data-cta-source="mobile_menu"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={`mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-md font-semibold text-sm transition-all duration-200 ${
              corporate
                ? "bg-white text-am-navy hover:bg-blue-50"
                : "border border-am-primary text-am-primary hover:bg-am-primary/8"
            }`}
          >
            Comenzar mi proyecto
          </a>
        </div>
      )}
    </header>
  );
}
