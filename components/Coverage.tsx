const CITIES = [
  { name: "Santiago",        region: "Región Metropolitana" },
  { name: "Concepción",      region: "Región del Biobío" },
  { name: "Valparaíso",      region: "Región de Valparaíso" },
  { name: "Viña del Mar",    region: "Región de Valparaíso" },
  { name: "Temuco",          region: "Región de La Araucanía" },
  { name: "Rancagua",        region: "Región del Libertador" },
  { name: "Antofagasta",     region: "Región de Antofagasta" },
  { name: "La Serena",       region: "Región de Coquimbo" },
  { name: "Talca",           region: "Región del Maule" },
  { name: "Iquique",         region: "Región de Tarapacá" },
  { name: "Puerto Montt",    region: "Región de Los Lagos" },
  { name: "Valdivia",        region: "Región de Los Ríos" },
  { name: "Osorno",          region: "Región de Los Lagos" },
  { name: "Punta Arenas",    region: "Región de Magallanes" },
  { name: "Coyhaique",       region: "Región de Aysén" },
];

export default function Coverage() {
  return (
    <section className="relative py-20 bg-blue-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="font-display font-bold text-slate-800 text-balance"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Trabajamos con empresas de todo Chile
          </h2>
          <p className="text-slate-600 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            Diseñamos e implementamos tu sistema a distancia y, si tu proyecto lo
            requiere, visitamos tu empresa.
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
            {[...CITIES, ...CITIES].map((city, i) => (
              <a
                key={`${city.name}-${i}`}
                href={`https://wa.me/56985660954?text=Hola%2C%20quiero%20cotizar%20un%20software%20para%20mi%20empresa%20en%20${encodeURIComponent(city.name)}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
                data-cta-source="coverage_wa"
                data-offer="software"
                className="flex flex-col gap-1 px-4 py-4 group w-[180px] shrink-0"
              >
                <span className="font-semibold text-slate-800 text-[14px] group-hover:text-am-primary transition-colors">
                  {city.name}
                  <span className="ml-1 text-am-primary/50 text-[10px]">→</span>
                </span>
                <span className="text-slate-500 text-[11px] leading-snug">
                  {city.region}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Nota al pie */}
        <p className="text-center text-slate-600 text-sm mt-10">
          ¿Tu ciudad no aparece?{" "}
          <a
            href="https://wa.me/56985660954?text=Hola%2C%20quiero%20saber%20si%20trabajan%20en%20mi%20ciudad"
            data-cta-source="coverage"
            data-offer="software"
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
