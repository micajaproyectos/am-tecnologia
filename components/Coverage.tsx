import Link from "next/link";

const CITIES = [
  { name: "Santiago",        region: "Región Metropolitana",   slug: "santiago" },
  { name: "Concepción",      region: "Región del Biobío",      slug: "concepcion" },
  { name: "Valparaíso",      region: "Región de Valparaíso",   slug: "valparaiso" },
  { name: "Viña del Mar",    region: "Región de Valparaíso",   slug: null },
  { name: "Temuco",          region: "Región de La Araucanía", slug: "temuco" },
  { name: "Rancagua",        region: "Región del Libertador",  slug: null },
  { name: "Antofagasta",     region: "Región de Antofagasta",  slug: null },
  { name: "La Serena",       region: "Región de Coquimbo",     slug: null },
  { name: "Talca",           region: "Región del Maule",       slug: null },
  { name: "Iquique",         region: "Región de Tarapacá",     slug: null },
  { name: "Puerto Montt",    region: "Región de Los Lagos",    slug: "puerto-montt" },
  { name: "Valdivia",        region: "Región de Los Ríos",     slug: "valdivia" },
  { name: "Osorno",          region: "Región de Los Lagos",    slug: "osorno" },
  { name: "Punta Arenas",    region: "Región de Magallanes",   slug: "punta-arenas" },
  { name: "Coyhaique",       region: "Región de Aysén",        slug: "coyhaique" },
];

export default function Coverage() {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Orbs decorativos */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-am-primary/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-am-accent/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-white/60 text-[12px] font-semibold tracking-widest uppercase mb-5">
            Cobertura nacional
          </span>
          <h2
            className="font-display font-bold text-white text-balance"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Posicionamiento en Google en todo Chile
          </h2>
          <p className="text-am-muted text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            Trabajamos 100% remoto con pymes de todo Chile — más de 50 negocios
            ya posicionan su negocio.
          </p>
        </div>

        {/* Pasarela de ciudades; se duplica la lista para el loop sin corte */}
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
            {[...CITIES, ...CITIES].map((city, i) => {
              const href = city.slug
                ? `/posicionamiento-google-${city.slug}`
                : `https://wa.me/56985660954?text=Hola%2C%20quiero%20aparecer%20en%20Google%20en%20${encodeURIComponent(city.name)}`;
              const cardClass =
                "flex flex-col gap-1 rounded-xl border border-white/6 bg-white/2 px-4 py-4 hover:border-am-primary/30 hover:bg-am-primary/5 transition-all duration-200 group w-[180px] shrink-0";
              const inner = (
                <>
                  <span className="font-semibold text-white text-[14px] group-hover:text-am-primary transition-colors">
                    {city.name}
                    <span className="ml-1 text-am-primary/50 text-[10px]">→</span>
                  </span>
                  <span className="text-am-muted text-[11px] leading-snug">
                    {city.region}
                  </span>
                </>
              );
              if (!city.slug) {
                return (
                  <a
                    key={`${city.name}-${i}`}
                    href={href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    data-cta-source="coverage_wa"
                    className={cardClass}
                  >
                    {inner}
                  </a>
                );
              }
              return (
                <Link
                  key={`${city.name}-${i}`}
                  href={href}
                  prefetch={true}
                  className={cardClass}
                >
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Nota al pie */}
        <p className="text-center text-am-muted text-sm mt-10">
          ¿Tu ciudad no aparece?{" "}
          <a
            href="https://wa.me/56985660954?text=Hola%2C%20quiero%20saber%20si%20trabajan%20en%20mi%20ciudad"
            data-cta-source="coverage"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-am-primary hover:text-am-accent font-semibold transition-colors"
          >
            Escríbenos — atendemos todo Chile →
          </a>
        </p>
      </div>
    </section>
  );
}
