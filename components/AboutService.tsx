import Link from "next/link";

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

export default function AboutService() {
  return (
    <section className="metal-surface relative pt-28 pb-20 px-6">
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      <div className="max-w-5xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">

          <header>
            <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-white/55 text-[11px] font-semibold tracking-widest uppercase mb-5">
              ¿Por qué aparecer en Google?
            </span>
            <h2
              className="font-display font-bold text-white text-balance leading-snug"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}
            >
              Páginas web profesionales que posicionan en Google
            </h2>
            <p className="text-am-muted text-[15px] leading-relaxed mt-4">
              Cuando alguien busca un servicio en Chile, lo busca en Google — y
              elige entre los primeros resultados.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              }
              title="Los primeros se llevan los clientes"
              text="Si tu negocio no está en las primeras posiciones, esos clientes los encuentra tu competencia."
            />
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17l6-6 4 4 8-8" />
                  <path d="M14 7h7v7" />
                </svg>
              }
              title="Escala con Google Ads"
              text="¿Quieres llevar tu negocio a otro nivel? Creamos tu primera campaña para recibir clientes de inmediato mientras tu posicionamiento orgánico madura."
            />
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
              title="SEO local para tu rubro"
              text="Página optimizada y perfil de Google Maps para aparecer justo cuando te buscan en tu ciudad."
            />
            <FeatureCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 12V8a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2v-4z" />
                  <path d="M18 12a2 2 0 100 4h4v-4h-4z" />
                </svg>
              }
              title="$199.990 pago único"
              text="Sin mensualidades ni costos ocultos. Trabajamos con pymes y emprendedores en todo Chile."
            />
          </div>

        </div>

        <p className="text-center text-am-muted text-[15px] mt-10">
          Si tu negocio aún no aparece, descubre{" "}
          <Link href="/aparecer-en-google" className="text-[#7eb3f5] underline">
            cómo aparecer en Google
          </Link>
          .
        </p>

        {/* Servicios adicionales */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <h3 className="font-display font-bold text-white text-center text-[20px] mb-1.5">
            También podemos gestionar por ti
          </h3>
          <p className="text-am-muted text-[14px] text-center mb-8">
            Soluciones para operar y hacer crecer tu negocio, adaptadas a
            cualquier rubro.
          </p>

          {/* Pasarela continua; se duplica la lista para el loop sin corte */}
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
                  className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 w-[340px] shrink-0"
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-am-primary/15 text-am-accent flex items-center justify-center">
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-[14px] leading-tight">
                      {s.title}
                    </p>
                    <p className="text-am-muted text-[13px] leading-snug mt-0.5">
                      {s.text}
                    </p>
                  </div>
                  <span className="shrink-0 text-[11px] font-semibold text-white/70 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 whitespace-nowrap">
                    {s.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
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
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="w-9 h-9 rounded-lg bg-am-primary/15 text-am-accent flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="text-white font-semibold text-[15px] mb-1.5">{title}</h3>
      <p className="text-am-muted text-[13.5px] leading-relaxed">{text}</p>
    </div>
  );
}
