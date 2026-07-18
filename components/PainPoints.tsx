import Link from "next/link";

const points = [
  {
    icon: (
      // Lupa con X — búsqueda sin resultados
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
        <path d="M8.5 8.5l5 5M13.5 8.5l-5 5"/>
      </svg>
    ),
    text: "Buscas tu negocio en Google y no apareces",
  },
  {
    icon: (
      // Barras descendentes separadas de la flecha caída
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h13"/>
        <path d="M4 20V5"/>
        <path d="M8 20V10"/>
        <path d="M12 20V15"/>
        <path d="M19 5v13"/>
        <path d="M16.5 15.5l2.5 3 2.5-3"/>
      </svg>
    ),
    text: "Tu competencia sale antes que tú en los resultados",
  },
  {
    icon: (
      // Billetera con dinero escapando hacia arriba
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="9" width="20" height="12" rx="2"/>
        <path d="M2 13h20"/>
        <path d="M16 17h.01"/>
        <path d="M7 9V5M12 9V4M17 9V6"/>
      </svg>
    ),
    text: "Inviertes en anuncios pero cuando dejas de pagar, desapareces.",
  },
  {
    icon: (
      // Signo menos + $ — dinero negativo / sin ingresos
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12h6" strokeWidth="2.4"/>
        <path d="M16 2v20"/>
        <path d="M21 5H14a3.5 3.5 0 000 7h4a3.5 3.5 0 010 7H11"/>
      </svg>
    ),
    text: "Dependes de referidos porque Google no sabe que existes.",
  },
];

export default function PainPoints() {
  return (
    <section className="relative bg-white py-28 px-6">
      {/* Difuminados de transición con las secciones oscuras vecinas */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
      <div className="max-w-4xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-12" data-reveal>
          <h2
            className="font-display font-extrabold text-slate-800 text-balance mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            ¿Por qué tu negocio{" "}
            <span className="gradient-text">no aparece en Google?</span>
          </h2>
        </div>

        {/* Points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {points.map((p, i) => (
            <div
              key={i}
              data-reveal
              className="flex items-start gap-4 bg-white border border-slate-200 rounded-2xl px-5 py-5 hover:border-am-blue/30 transition-colors duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-am-blue/5 border border-am-blue/20 flex items-center justify-center text-am-blue">
                {p.icon}
              </div>
              <p className="text-slate-600 text-[15px] leading-snug pt-1 font-medium">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="text-center text-slate-600 text-base" data-reveal>
          Si te identificas con alguno de estos, descubre{" "}
          <Link
            href="/aparecer-en-google"
            className="text-am-blue underline"
          >
            cómo aparecer en Google
          </Link>.
        </p>
      </div>
    </section>
  );
}
