"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Cuánto cuesta una página web en Chile?",
    a: "Nuestros planes parten desde $99.990 pago único, sin mensualidades ni costos ocultos. El precio incluye diseño, desarrollo, dominio y hosting. Sin sorpresas al final.",
  },
  {
    q: "¿Cuánto cuesta una página web con tienda online?",
    a: "Una tienda online con Webpay y MercadoPago integrado parte desde $199.990 pago único. Incluye gestión de productos, carrito de compras y panel administrativo completo.",
  },
  {
    q: "¿Cuánto cuesta posicionarme en Google?",
    a: "El SEO básico está incluido en todos nuestros planes sin costo adicional. Configuramos tu sitio para que Google lo encuentre desde el primer día — títulos, descripción, sitemap y datos estructurados.",
  },
  {
    q: "¿Cuánto cobran por hacer una página web?",
    a: "Precio fijo desde $99.990, sin cuotas mensuales ni contratos largos. Lo que cotizamos es exactamente lo que pagas. Sin cargos adicionales por mantenimiento básico.",
  },
  {
    q: "¿Necesito una página web para mi negocio?",
    a: "Si tu competencia ya tiene una, cada día sin web es un cliente que pierdes. El 92% de los chilenos busca productos y servicios en Google antes de comprar. Sin sitio web, no existes para ellos.",
  },
  {
    q: "¿Trabajan fuera de Santiago?",
    a: "Sí, atendemos todo Chile de forma 100% remota. Tenemos clientes en Puerto Montt, Valdivia, Temuco, Osorno, Punta Arenas, Coyhaique y más. La distancia no es ningún problema.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Image background */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/proyectos.png')" }}
      />
      {/* Overlay opaco para diferenciarlo de Services */}
      <div className="absolute inset-0 bg-black/82 pointer-events-none" />

      {/* Fade superior desde Services */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      {/* Fade inferior hacia CTA */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Orbs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-am-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-am-accent/8 blur-[100px] pointer-events-none" />

      <div className="relative z-20 max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-[12px] font-semibold tracking-widest uppercase mb-5">
            Preguntas frecuentes
          </span>
          <h2
            className="font-display font-bold text-white text-balance"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Todo lo que necesitas saber sobre{" "}
            <span className="gradient-text">diseño web en Chile</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-200 ${
                open === i
                  ? "border-am-primary/30 bg-am-primary/5"
                  : "border-white/6 bg-white/2 hover:border-white/12"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-white text-[15px] leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    open === i
                      ? "border-am-primary bg-am-primary/20 text-am-primary rotate-45"
                      : "border-white/20 text-white/40"
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1v10M1 6h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-am-muted text-[14px] leading-[1.75]">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA bajo el FAQ */}
        <p className="text-center text-am-muted text-sm mt-10">
          ¿Tienes otra pregunta?{" "}
          <a
            href="https://wa.me/56985660954?text=Hola%2C%20tengo%20una%20consulta%20sobre%20dise%C3%B1o%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-am-primary hover:text-am-accent font-semibold transition-colors"
          >
            Escríbenos por WhatsApp →
          </a>
        </p>
      </div>
    </section>
  );
}
