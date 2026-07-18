"use client";

import { useRef, useState } from "react";
const services = [
  {
    href: "/aparecer-en-google",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" strokeWidth="1.6" />
      </svg>
    ),
    title: "Posicionamiento en Google",
    desc: "Tu página web profesional adaptada a tu rubro y ciudad, construida para que Google la posicione cuando tus clientes te buscan. Incluye SEO local, Google Maps y Analytics configurados desde el primer día. Tráfico orgánico sin costo por clic, sin mensualidades.",
    features: [
      "Página web profesional para tu nicho",
      "Tu negocio visible en Google Maps",
      "Optimización para búsquedas locales",
      "Google Analytics y Search Console configurados",
      "Resultados medibles",
      "Sin costos ocultos",
    ],
    badge: { text: "Más popular", style: "border-am-primary/30 bg-am-primary/10 text-am-primary" },
    featured: true,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 11l18-7-7 18-2.5-7.5L3 11z" strokeLinejoin="round" />
        <path d="M11.5 14.5L21 4" strokeLinecap="round" strokeWidth="1.6" />
      </svg>
    ),
    href: "/servicios/campanas-google-ads",
    title: "Campaña de Google Ads + Landing",
    desc: "Tu sistema de captación completo: landing page optimizada en conversión más tu primera campaña en Google Ads o Meta Ads configurada por expertos. Incluye tracking de conversiones y 30 días de optimización para que la campaña rinda con datos reales.",
    features: [
      "Landing optimizada en conversión",
      "Campaña Google Ads o Meta Ads",
      "Tracking de conversiones completo",
      "30 días de optimización incluidos",
    ],
    badge: { text: "Nuevo", style: "border-am-green/30 bg-am-green/10 text-am-green" },
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
    href: "/servicios/one-page-corporativo",
    title: "One Page Corporativo",
    desc: "Presencia digital profesional en una sola página, diseñada para transmitir credibilidad desde el primer clic. Ideal para profesionales independientes, consultoras y pymes que necesitan imagen sólida en internet sin la complejidad de un sitio completo.",
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
    href: "/servicios/ecommerce",
    title: "E-commerce con Pago",
    desc: "Tienda online completa con pasarela de pago integrada — Webpay y MercadoPago. Vende tus productos o servicios las 24 horas con cobros automáticos, gestión de inventario y panel de administración. Sin comisiones adicionales de nuestra parte.",
    features: ["Webpay / MercadoPago", "Gestión de productos", "Panel administrativo"],
    badge: null,
    featured: false,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    href: "/servicios/presencia-redes-sociales",
    title: "Presencia en Redes Sociales",
    desc: "Administramos tus redes sociales mes a mes con contenido relevante para tu audiencia y branding unificado. Tu marca activa y coherente en Instagram, Facebook, TikTok y Google Business sin que dediques tiempo. Incluye reporte mensual de resultados.",
    features: [
      "Gestión mensual de Instagram, Facebook y TikTok",
      "Google Business Profile activo y actualizado",
      "Creación de contenido con identidad de marca",
      "Branding unificado en todos los perfiles",
      "Reporte mensual de resultados",
      "Respuesta a comentarios y mensajes",
    ],
    badge: { text: "Gestión continua", style: "border-am-accent/30 bg-am-accent/8 text-am-accent" },
    featured: false,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    href: "/servicios/automatizaciones-ia",
    title: "Automatizaciones con IA",
    desc: "Optimiza la operación de tu negocio con inteligencia artificial aplicada. Implementamos chatbots que responden consultas 24/7, flujos automáticos de WhatsApp y análisis de datos que te ayudan a tomar mejores decisiones sin contratar más personal.",
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
    href: "/servicios/app-web-saas",
    title: "App Web SaaS",
    desc: "Aplicaciones web a medida para digitalizar procesos internos o lanzar un producto de software. Plataformas escalables con acceso desde cualquier dispositivo, sin instalaciones, con panel de administración y usuarios configurables según tu modelo de negocio.",
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
    <section id="servicios" className="relative bg-white py-28 overflow-hidden">
      {/* Fade superior desde Projects */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-display font-extrabold text-slate-800 text-balance"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)" }}
            >
              Servicios digitales con posicionamiento{" "}
              <span className="gradient-text">para empresas en Chile</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mt-3 max-w-lg">
              Posicionamiento en Google para negocios en todo Chile. Desde $199.990 pago único · Sin mensualidades.
            </p>
          </div>
          {/* Nav arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Anterior"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-500 flex items-center justify-center hover:border-am-blue/50 hover:text-am-blue transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Siguiente"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-500 flex items-center justify-center hover:border-am-blue/50 hover:text-am-blue transition-all duration-200"
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
          <a
            key={s.title}
            href={s.href}
            style={{ width: CARD_W, minWidth: CARD_W }}
            className={`relative flex-shrink-0 rounded-2xl p-8 border flex flex-col gap-5 group transition-all duration-300 hover:-translate-y-1 ${
              s.featured
                ? "border-am-blue/40 bg-gradient-to-br from-white to-am-blue/5 shadow-[0_0_32px_rgba(37,99,235,0.12)]"
                : "border-slate-200 bg-white hover:border-am-blue/30 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
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
            <div className="w-14 h-14 rounded-xl border border-am-blue/20 bg-am-blue/5 flex items-center justify-center text-am-blue group-hover:bg-am-blue/10 group-hover:border-am-blue/35 transition-all duration-200">
              {s.icon}
            </div>

            <div>
              <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
              <p className="text-slate-600 text-[14px] leading-[1.65]">{s.desc}</p>
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-2 mt-auto">
              {s.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[13px] text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-am-blue shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>

      {/* Fade inferior hacia Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
    </section>
  );
}
