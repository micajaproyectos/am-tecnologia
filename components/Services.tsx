const extraServices = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
        <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
      </svg>
    ),
    title: "Redes sociales y contenido",
    text: "Gestionamos tus redes y creamos contenido para tu marca.",
    price: "Desde $99.990/mes",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
    title: "Sistema de gestión para tu negocio",
    text: "Reservas, pedidos, clientes, stock y reportes con IA, adaptado a tu operación.",
    price: "A cotizar",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Fidelización con QR",
    text: "Premia a tus clientes frecuentes y haz que vuelvan a comprarte.",
    price: "$250.000 único",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 14h3v3h-3zM18 18h3v3h-3zM14 21h1M21 14v1" />
      </svg>
    ),
    title: "Catálogo digital con QR",
    text: "Tus productos o servicios siempre actualizados, fáciles de compartir.",
    price: "A cotizar",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M9 16l2 2 4-4" />
      </svg>
    ),
    title: "Reservas y agenda online",
    text: "Disponibilidad en línea y confirmaciones automáticas para tus clientes.",
    price: "A cotizar",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
    title: "Aplicaciones web a medida",
    text: "Convertimos los procesos de tu negocio en una herramienta hecha para ti.",
    price: "A cotizar",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Automatización de tareas",
    text: "Eliminamos el trabajo repetitivo para que ganes horas cada semana.",
    price: "A cotizar",
  },
];

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

export default function Services() {
  return (
    <section id="servicios" className="relative bg-blue-50 py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-display font-extrabold text-slate-800 text-balance"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)" }}
            >
              Servicios digitales con posicionamiento para empresas en Chile
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mt-3 max-w-lg">
              Posicionamiento en Google para negocios en todo Chile. Desde $199.990 pago único · Sin mensualidades.
            </p>
          </div>
        </div>

        {/* Tarjetas compactas — el detalle completo está en la página de cada servicio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className={`relative flex items-center gap-3.5 rounded-xl px-4 py-4 border group transition-all duration-200 ${
                s.featured
                  ? "border-am-blue/40 bg-white shadow-sm"
                  : "border-slate-200 bg-white hover:border-am-blue/30 hover:shadow-[0_6px_18px_rgba(15,23,42,0.07)]"
              }`}
            >
              <div className="shrink-0 w-11 h-11 rounded-lg border border-am-blue/20 bg-am-blue/5 flex items-center justify-center text-am-blue group-hover:bg-am-blue/10 transition-colors duration-200">
                {s.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-slate-900 text-[15px] leading-tight">
                  {s.title}
                </h3>
                {s.badge && (
                  <span className={`inline-block mt-1 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border ${s.badge.style}`}>
                    {s.badge.text}
                  </span>
                )}
              </div>
              <span className="shrink-0 text-slate-400 group-hover:text-am-blue group-hover:translate-x-0.5 transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Servicios adicionales — pasarela continua */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-14">
        <h3 className="font-display font-bold text-slate-800 text-center text-[20px] mb-1.5">
          También podemos gestionar por ti
        </h3>
        <p className="text-slate-600 text-[14px] text-center mb-8">
          Soluciones para operar y hacer crecer tu negocio, adaptadas a
          cualquier rubro.
        </p>

        {/* Se duplica la lista para el loop sin corte */}
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="flex gap-3 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...extraServices, ...extraServices].map((s, i) => (
              <div
                key={`${s.title}-${i}`}
                className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-white px-4 py-3.5 w-[340px] shrink-0"
              >
                <div className="shrink-0 w-9 h-9 rounded-lg bg-am-blue/5 border border-am-blue/20 text-am-blue flex items-center justify-center">
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-900 font-semibold text-[14px] leading-tight">
                    {s.title}
                  </p>
                  <p className="text-slate-600 text-[13px] leading-snug mt-0.5">
                    {s.text}
                  </p>
                </div>
                <span className="shrink-0 text-[11px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-2.5 py-1 whitespace-nowrap">
                  {s.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 pb-10">
          <a
            href="https://wa.me/56985660954?text=Hola%2C%20quiero%20cotizar%20un%20servicio%20adicional%20para%20mi%20negocio"
            data-cta-source="servicios_adicionales"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#17804a] hover:bg-[#12683c] text-white font-semibold text-[14px] px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            Cuéntanos qué necesitas
          </a>
        </div>
      </div>
    </section>
  );
}
