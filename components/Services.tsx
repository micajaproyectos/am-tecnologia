"use client";

import { useRef, useState } from "react";

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    title: "Landing Page de Ventas",
    desc: "Páginas diseñadas para convertir visitas en clientes. Carrito WhatsApp integrado para cerrar ventas al instante — sin pasarela de pago.",
    features: ["Carrito por WhatsApp", "Diseño orientado a conversión", "Carga ultra rápida"],
    badge: { text: "Más popular", style: "border-am-primary/30 bg-am-primary/10 text-am-primary" },
    featured: false,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "One Page Corporativo",
    desc: "Presencia digital elegante en una sola página. Ideal para profesionales, consultoras y pymes que necesitan imagen sólida en internet.",
    features: ["Diseño personalizado", "Formulario de contacto", "SEO básico incluido"],
    badge: null,
    featured: false,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </svg>
    ),
    title: "E-commerce con Pago",
    desc: "Tienda online completa con pasarela de pago integrada. Vende tus productos las 24 horas con pagos automáticos y gestión de inventario.",
    features: ["Webpay / MercadoPago", "Gestión de productos", "Panel administrativo"],
    badge: null,
    featured: false,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    title: "Automatizaciones con IA",
    desc: "Optimiza tu negocio con inteligencia artificial. Chatbots, respuestas automáticas, análisis de datos y flujos que trabajan mientras tú descansas.",
    features: ["Chatbot inteligente 24/7", "Automatización de WhatsApp", "Reportes con IA"],
    badge: { text: "IA Powered", style: "border-am-accent/30 bg-am-accent/8 text-am-accent" },
    featured: false,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h.01M11 8h5M7 12h3m4 0h2" />
      </svg>
    ),
    title: "App Web SaaS",
    desc: "Aplicaciones web a medida diseñadas para tu negocio. Plataformas escalables con acceso desde cualquier dispositivo, sin instalaciones.",
    features: ["Diseño a medida", "Panel administrativo", "Escalable y en la nube"],
    badge: null,
    featured: false,
  },
];

const CARD_W = 320;

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  function onMouseDown(e: React.MouseEvent) {
    setDragging(true);
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!dragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.2;
  }
  function stopDrag() { setDragging(false); }

  function scroll(dir: "left" | "right") {
    trackRef.current?.scrollBy({ left: dir === "right" ? CARD_W + 24 : -(CARD_W + 24), behavior: "smooth" });
  }

  return (
    <section id="servicios" className="relative py-28 bg-am-surface overflow-hidden">
      {/* Tech background */}
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-am-primary/30 to-transparent pointer-events-none"
        style={{ animation: "scan-line 8s ease-in-out infinite" }}
      />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-am-primary/7 blur-[100px] pointer-events-none"
        style={{ animation: "orb-1 12s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-am-accent/6 blur-[90px] pointer-events-none"
        style={{ animation: "orb-2 16s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-am-primary/5 blur-[80px] pointer-events-none"
        style={{ animation: "orb-3 20s ease-in-out infinite" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-display font-bold text-white text-balance"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)" }}
            >
              Soluciones digitales{" "}
              <span className="gradient-text">a tu medida</span>
            </h2>
          </div>
          {/* Nav arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Anterior"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/4 text-am-muted flex items-center justify-center hover:border-am-primary/40 hover:text-am-primary transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Siguiente"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/4 text-am-muted flex items-center justify-center hover:border-am-primary/40 hover:text-am-primary transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll track — full bleed */}
      <div
        ref={trackRef}
        className="relative z-10 flex gap-6 overflow-x-auto scroll-smooth pb-6 select-none"
        style={{
          paddingLeft: "max(24px, calc((100vw - 1280px) / 2 + 24px))",
          paddingRight: "max(24px, calc((100vw - 1280px) / 2 + 24px))",
          scrollbarWidth: "none",
          cursor: dragging ? "grabbing" : "grab",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {services.map((s) => (
          <div
            key={s.title}
            style={{ width: CARD_W, minWidth: CARD_W }}
            className={`relative flex-shrink-0 rounded-2xl p-8 border flex flex-col gap-5 group transition-all duration-300 hover:-translate-y-1 ${
              s.featured
                ? "border-am-primary/40 bg-gradient-to-br from-am-surf2 to-am-primary/10 shadow-[0_0_32px_rgba(37,99,235,0.14)]"
                : "border-white/6 bg-am-bg hover:border-am-primary/20 hover:shadow-[0_0_18px_rgba(37,99,235,0.07)]"
            }`}
          >
            {/* Featured top accent line */}
            {s.featured && (
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-am-primary/60 to-transparent" />
            )}

            {/* Badge */}
            {s.badge && (
              <span className={`absolute top-5 right-5 text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border ${s.badge.style}`}>
                {s.badge.text}
              </span>
            )}

            {/* Icon */}
            <div className="w-14 h-14 rounded-xl border border-am-primary/20 bg-am-primary/10 flex items-center justify-center text-am-primary group-hover:bg-am-primary/18 group-hover:border-am-primary/35 transition-all duration-200">
              {s.icon}
            </div>

            <div>
              <h3 className="font-display font-bold text-white text-lg mb-2">{s.title}</h3>
              <p className="text-am-muted text-[14px] leading-[1.65]">{s.desc}</p>
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-2 mt-auto">
              {s.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[13px] text-am-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-am-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>

      {/* Section fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-am-surface to-transparent pointer-events-none" />
    </section>
  );
}
