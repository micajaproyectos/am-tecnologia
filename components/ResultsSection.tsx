import Image from "next/image";

const WA_RESULTS =
  "https://wa.me/56985660954?text=Hola%2C%20quiero%20cotizar%20un%20software%20para%20administrar%20mi%20empresa";

/* Logos de clientes. `outline` = el logo tiene partes blancas/doradas que se
   pierden sobre el fondo claro; se les aplica un contorno de sombra. */
const clientLogos = [
  { src: "/empresas_logos/logo_transparente.png", w: 800, h: 533, name: "Solar & Arriagada Abogadas", rubro: "Estudio jurídico", outline: true },
  { src: "/empresas_logos/logo-ajo-austral.png", w: 1000, h: 1000, name: "Ajo Negro Austral", rubro: "Alimentos" },
  { src: "/empresas_logos/logo_medico.png", w: 2167, h: 725, name: "Dra. Solange Ballén", rubro: "Salud", outline: true },
  { src: "/empresas_logos/logo_trasnparente.png", w: 1024, h: 1024, name: "Futarte", rubro: "Souvenirs y regalos" },
  { src: "/empresas_logos/logo_cabanas_rio-espolon.png", w: 2172, h: 724, name: "Cabañas Río Espolón", rubro: "Turismo", outline: true },
  { src: "/empresas_logos/logo_cosmeticabeauty.png", w: 512, h: 512, name: "Clínica Beauty Lab", rubro: "Estética" },
  { src: "/empresas_logos/logo_grua.png", w: 1254, h: 1254, name: "Grúa Emergencia 27-4", rubro: "Asistencia en ruta", outline: true },
  { src: "/empresas_logos/logo_mi-caja.png", w: 1254, h: 1254, name: "Mi Caja Empresa", rubro: "Software" },
  { src: "/empresas_logos/logo_millanolli.png", w: 1645, h: 956, name: "Millanolli", rubro: "Joyería y deco" },
  { src: "/empresas_logos/logo_panaderia.png", w: 1254, h: 1254, name: "Panadería Emanuel", rubro: "Panadería", outline: true },
  { src: "/empresas_logos/logo-badge.png", w: 512, h: 512, name: "Refugio del Vilcún", rubro: "Restaurante y hospedaje" },
  { src: "/empresas_logos/logo_los-hermanos.png", w: 2953, h: 2953, name: "Frutería Los Hermanos", rubro: "Frutería e insumos agrícolas" },
  { src: "/empresas_logos/logo_habitandostudio.png", w: 2170, h: 725, name: "Habitando Studio", rubro: "Arquitectura" },
  { src: "/empresas_logos/logo-rio-austral.png", w: 262, h: 160, name: "Río Austral", rubro: "Construcción" },
];

const LOGO_OUTLINE =
  "drop-shadow(0 0 0.6px rgba(15,23,42,0.75)) drop-shadow(0 1px 1.5px rgba(15,23,42,0.35))";

const testimonialsData = [
  {
    quote: "Muy buen servicio, es totalmente personalizado. Nos hemos ahorrado tiempo en la capacidad de respuesta para tomar decisiones.",
    company: "Río Austral",
    rubro: "Construcción",
  },
  {
    quote: "Gracias a los chiquillos hoy nuestra producción alcanza su mejor momento, todo está controlado y sistematizado.",
    company: "Ajo Negro Austral",
    rubro: "Alimentos",
  },
  {
    quote: "Nos hicieron un sistema conectado que automatiza gran parte de las gestiones que antes había que hacer manualmente.",
    company: "Millanolli",
    rubro: "Joyería y deco",
  },
];

// El logo se toma de la marquesina por nombre de empresa
const testimonials = testimonialsData.map((t) => ({
  ...t,
  logo: clientLogos.find((l) => l.name === t.company),
}));

export default function ResultsSection() {
  return (
    <section id="resultados" className="relative bg-blue-50 px-6 pt-24 pb-24">
      <div className="max-w-6xl mx-auto relative z-20">
        {/* Encabezado */}
        <header className="text-center mb-3" data-reveal>
          <h2
            className="font-display font-bold text-slate-800 text-balance"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)" }}
          >
            Empresas de más de 20 rubros confían en nosotros
          </h2>
        </header>

        {/* ── LOGOS DE CLIENTES — marquesina continua ── */}
        <div className="mb-14" data-reveal>
          <p className="text-center text-slate-500 text-[11px] font-bold tracking-widest uppercase mb-5">
            Soluciones a medida funcionando en salud, construcción, alimentos, turismo y más
          </p>
          {/* Lista duplicada para el loop sin corte; el espaciado va como
              padding de cada ítem para que -50% calce exacto */}
          <div
            className="overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
            }}
          >
            <ul className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {[...clientLogos, ...clientLogos].map((l, i) => (
                <li
                  key={`${l.src}-${i}`}
                  className="shrink-0 pr-4"
                  aria-hidden={i >= clientLogos.length || undefined}
                >
                  <div className="flex items-center justify-center w-[240px] sm:w-[300px] h-[144px] sm:h-[176px] p-1">
                    <Image
                      src={l.src}
                      alt={`Logo de ${l.name}`}
                      width={l.w}
                      height={l.h}
                      sizes="300px"
                      // Carga inmediata: con lazy cada logo se descargaba al
                      // entrar en pantalla y "aparecía" en plena marquesina
                      loading="eager"
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                      style={l.outline ? { filter: LOGO_OUTLINE } : undefined}
                    />
                  </div>
                  <p className="text-center text-slate-500 text-[12px] font-medium mt-2">
                    {l.rubro}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── TESTIMONIOS — citas breves, sin tarjetas ── */}
        <ul className="grid gap-8 md:grid-cols-3 md:gap-10 max-w-5xl mx-auto mb-14" data-reveal>
          {testimonials.map((t) => (
            <li key={t.company}>
              <figure className="border-l-2 border-slate-300 pl-4">
                <blockquote className="text-slate-600 text-[15px] leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3 text-[13px]">
                  {t.logo ? (
                    <Image
                      src={t.logo.src}
                      alt={t.company}
                      width={t.logo.w}
                      height={t.logo.h}
                      sizes="120px"
                      className="h-10 w-auto max-w-[120px] object-contain"
                      style={t.logo.outline ? { filter: LOGO_OUTLINE } : undefined}
                    />
                  ) : (
                    <span className="font-semibold text-slate-800">{t.company}</span>
                  )}
                  <span className="text-slate-500">{t.rubro}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {/* Cierre */}
        <div className="text-center" data-reveal>
          <a
            href={WA_RESULTS}
            data-cta-source="resultados"
            data-service="software"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#17804a] hover:bg-[#12683c] text-white font-semibold text-[15px] px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Cotizar mi proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
