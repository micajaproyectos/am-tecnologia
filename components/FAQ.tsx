"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    q: "¿Cuánto cuesta una página web en Chile?",
    a: "Con nosotros, $199.990 pago único. Lo que hacemos no es solo crear una página: es posicionar tu marca en Google para que tus clientes te encuentren cuando buscan lo que tú ofreces. Las agencias de marketing cobran entre $400.000 y $600.000 por este mismo resultado. Nosotros lo entregamos desde $199.990.",
  },
  {
    q: "¿Cómo hago para que mi negocio aparezca en Google?",
    a: "Nos encargamos de todo el proceso: creamos la estructura de tu sitio, configuramos tu perfil en Google Maps, Google Analytics y Search Console, y optimizamos cada página para que Google entienda a qué clientes debes aparecer. Con la optimización incluida, tu marca ya puede empezar a recibir tráfico orgánico. El seguimiento mensual es opcional, pero te permite seguir escalando tu posición y adelantar a tu competencia con el tiempo.",
  },
  {
    q: "¿Necesito una página web para mi negocio?",
    a: "Si quieres que tus clientes te encuentren en Google, sí. Hoy más del 80% de las personas busca en internet antes de comprar. Sin página web, esos clientes los encuentra tu competencia.",
  },
  {
    q: "¿Cuánto tarda en estar lista mi página?",
    a: "La estructura de tu sitio queda lista en los primeros días. La optimización SEO completa — para que Google te posicione sobre tu competencia — puede tomar hasta 1 semana. Y para maximizar los resultados a largo plazo, contamos con planes de seguimiento mensual que incluyen: ajuste continuo de palabras clave, análisis de rendimiento en Google Search Console, mejoras de velocidad y experiencia de usuario, reportes de visibilidad y tráfico, y adaptación a los cambios del algoritmo de Google.",
  },
  {
    q: "¿Necesito saber de tecnología?",
    a: "No. Nosotros nos encargamos de todo. Tú solo te preocupas de atender a tus nuevos clientes.",
  },
  {
    q: "¿Qué pasa después de la entrega?",
    a: "Tu sitio queda publicado y con la optimización SEO activa en los primeros días. Desde ahí, Google empieza a indexar tu marca y puedes comenzar a recibir tráfico orgánico sin pagar publicidad. Si quieres seguir escalando resultados, nuestros planes de seguimiento mensual ajustan la estrategia según cómo evoluciona tu posición, tu competencia y los cambios del algoritmo de Google — pero el tráfico orgánico inicial ya está incluido desde el primer entregable.",
  },
  {
    q: "¿Cuánto cuesta una página web con tienda online?",
    a: "Una tienda online con Webpay y MercadoPago integrado parte desde $199.990 a $399.990 pago único. Incluye gestión de productos, carrito de compras y panel administrativo completo.",
  },
  {
    q: "¿Hacen campañas de Google Ads?",
    a: "Sí. Te construimos una landing page optimizada en conversión y configuramos tu primera campaña en Google Ads o Meta Ads por $399.990 pago único, con tracking de conversiones y 30 días de optimización incluidos. El presupuesto publicitario se paga aparte, directo a Google o Meta. Es el complemento ideal para recibir clientes de inmediato mientras tu posicionamiento orgánico madura.",
  },
  {
    q: "¿Cómo es el proceso para contratar?",
    a: "Es simple: escríbenos por WhatsApp con los detalles de tu negocio. En menos de 1 hora te enviamos una cotización. Si la apruebas, empezamos el mismo día y tu sitio queda publicado y posicionándose en Google.",
  },
  {
    q: "¿Trabajan en todo Chile?",
    a: "Sí, trabajamos 100% remoto en todo Chile. Tenemos clientes en Santiago, Concepción, Valparaíso, Viña del Mar, Temuco, Rancagua, Antofagasta, La Serena, Talca, Iquique, Puerto Montt, Valdivia, Osorno, Punta Arenas y Coyhaique. La distancia no es ningún problema.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Image background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image src="/proyectos.webp" alt="" fill loading="lazy" sizes="100vw" className="object-cover object-center" />
      </div>
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
            Preguntas frecuentes sobre{" "}
            <span className="gradient-text">páginas web en Chile</span>
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
              <h3 className="m-0">
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
              </h3>

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
            data-cta-source="faq"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-am-primary hover:text-am-accent font-semibold transition-colors"
          >
            Escríbenos por WhatsApp →
          </a>
        </p>
        <p className="text-center text-am-muted text-sm mt-3">
          ¿Quieres saber más sobre páginas web y SEO?{" "}
          <Link
            href="/blog"
            className="text-am-primary hover:text-am-accent font-semibold transition-colors"
          >
            Lee nuestras guías →
          </Link>
        </p>
      </div>
    </section>
  );
}
