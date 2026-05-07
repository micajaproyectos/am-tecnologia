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
            Trabajamos 100% remoto. Da igual si estás en el norte, el centro o la Patagonia — tu negocio puede aparecer en Google desde cualquier ciudad.
          </p>
        </div>

        {/* Grid de ciudades */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {CITIES.map((city) => (
            <li
              key={city.name}
              className="flex flex-col gap-1 rounded-xl border border-white/6 bg-white/2 px-4 py-4 hover:border-am-primary/30 hover:bg-am-primary/5 transition-all duration-200 group"
            >
              <span className="font-semibold text-white text-[14px] group-hover:text-am-primary transition-colors">
                {city.name}
              </span>
              <span className="text-am-muted text-[11px] leading-snug">
                {city.region}
              </span>
            </li>
          ))}
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
