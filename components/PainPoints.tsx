const points = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
    text: "Buscas tu negocio en Google y no apareces",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l4-8 4 4 4-6 4 3" /><path d="M21 7h-4v4" />
      </svg>
    ),
    text: "Tu competencia sale antes que tú en los resultados",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="10" r="3" />
        <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </svg>
    ),
    text: "Tienes redes sociales pero no te llegan clientes nuevos",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    text: "Dependes solo de referidos para conseguir clientes",
  },
];

export default function PainPoints() {
  return (
    <section className="metal-surface relative py-20 px-6">
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
      <div className="max-w-4xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-12" data-reveal>
          <h2
            className="font-display font-bold text-white text-balance mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            ¿Te pasa <span className="gradient-text">esto?</span>
          </h2>
        </div>

        {/* Points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {points.map((p, i) => (
            <div
              key={i}
              data-reveal
              className="flex items-start gap-4 bg-am-surf2 border border-white/6 rounded-2xl px-5 py-5 hover:border-red-500/20 transition-colors duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                {p.icon}
              </div>
              <p className="text-am-text text-[15px] leading-snug pt-1 font-medium">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="text-center text-am-muted text-base" data-reveal>
          Si te identificas con alguno de estos,{" "}
          <span className="text-am-text font-semibold">tenemos la solución.</span>
        </p>
      </div>
    </section>
  );
}
