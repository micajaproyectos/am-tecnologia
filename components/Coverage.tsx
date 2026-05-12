import Link from "next/link";

const CITIES = [
  { name: "Santiago",        region: "Región Metropolitana",   slug: "santiago" },
  { name: "Concepción",      region: "Región del Biobío",      slug: "concepcion" },
  { name: "Valparaíso",      region: "Región de Valparaíso",   slug: null },
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
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-[12px] font-semibold tracking-widest uppercase mb-5">
            Cobertura nacional
          </span>
          <h2
            className="font-display font-bold text-white text-balance"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Posicionamiento en Google para{" "}
            <span className="gradient-text">empresas en todo Chile</span>
          </h2>
          <p className="text-am-muted text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            Trabajamos 100% remoto con negocios en todo Chile. Sin importar si estás en el norte, el centro o la Patagonia, aplicamos la misma metodología de SEO local que ha llevado a más de 50 pymes chilenas a las primeras posiciones de Google.
          </p>
          <p className="text-am-muted text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Para los negocios fuera de Santiago, el posicionamiento local en Google representa una ventaja enorme: menos competencia digital significa mayor oportunidad de aparecer primero. Un servicio en Rancagua, La Serena o Temuco puede superar a empresas más grandes con la estrategia correcta.
          </p>
        </div>

        {/* Grid de ciudades */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {CITIES.map((city) => {
            const href = city.slug
              ? `/posicionamiento-google-${city.slug}`
              : `https://wa.me/56985660954?text=Hola%2C%20quiero%20aparecer%20en%20Google%20en%20${encodeURIComponent(city.name)}`;
            const isExternal = !city.slug;
            if (isExternal) {
              return (
                <li key={city.name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta-source="coverage_wa"
                    className="flex flex-col gap-1 rounded-xl border border-white/6 bg-white/2 px-4 py-4 hover:border-am-primary/30 hover:bg-am-primary/5 transition-all duration-200 group h-full"
                  >
                    <span className="font-semibold text-white text-[14px] group-hover:text-am-primary transition-colors">
                      {city.name}
                      <span className="ml-1 text-am-primary/50 text-[10px]">→</span>
                    </span>
                    <span className="text-am-muted text-[11px] leading-snug">
                      {city.region}
                    </span>
                  </a>
                </li>
              );
            }
            return (
              <li key={city.name}>
                <Link
                  href={href}
                  prefetch={true}
                  className="flex flex-col gap-1 rounded-xl border border-white/6 bg-white/2 px-4 py-4 hover:border-am-primary/30 hover:bg-am-primary/5 transition-all duration-200 group h-full"
                >
                  <span className="font-semibold text-white text-[14px] group-hover:text-am-primary transition-colors">
                    {city.name}
                    <span className="ml-1 text-am-primary/50 text-[10px]">→</span>
                  </span>
                  <span className="text-am-muted text-[11px] leading-snug">
                    {city.region}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Nota al pie */}
        <p className="text-center text-am-muted text-sm mt-10">
          ¿Tu ciudad no aparece?{" "}
          <a
            href="https://wa.me/56985660954?text=Hola%2C%20quiero%20saber%20si%20trabajan%20en%20mi%20ciudad"
            data-cta-source="coverage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-am-primary hover:text-am-accent font-semibold transition-colors"
          >
            Escríbenos — atendemos todo Chile →
          </a>
        </p>
      </div>
    </section>
  );
}
