const steps = [
  {
    number: "1",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: "Cuéntanos sobre tu negocio",
    desc: "Nos escribes por WhatsApp. En menos de 1 hora tienes tu cotización y empezamos el mismo día.",
  },
  {
    number: "2",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Tu web lista en 48 horas",
    desc: "En dos días tienes tu página web profesional publicada, adaptada a tu nicho y lista para recibir visitas.",
  },
  {
    number: "3",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
        <path d="M11 8v3h3" strokeWidth="1.6" />
      </svg>
    ),
    title: "Empiezas a recibir clientes",
    desc: "Tu negocio aparece cuando buscan lo que ofreces en tu ciudad. Recibes contactos reales desde Google.",
  },
];

export default function HowItWorks() {
  return (
    <section className="metal-surface relative py-24 px-6">
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
      <div className="max-w-5xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-16" data-reveal>
          <h2
            className="font-display font-bold text-white text-balance"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            ¿Cómo <span className="gradient-text">funciona?</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-am-primary/20 via-am-primary/40 to-am-primary/20 pointer-events-none" />

          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center text-center" data-reveal>
              {/* Number + icon stack */}
              <div className="relative mb-6">
                {/* Big number */}
                <span className="font-display font-extrabold text-white/5 leading-none select-none pointer-events-none"
                  style={{ fontSize: "clamp(5rem, 10vw, 7rem)", lineHeight: 1 }}
                >
                  {s.number}
                </span>
                {/* Icon circle — centered over the number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-am-primary/12 border border-am-primary/25 flex items-center justify-center text-am-primary shadow-[0_0_24px_rgba(37,99,235,0.15)]">
                    {s.icon}
                  </div>
                </div>
              </div>

              <h3 className="font-display font-bold text-white text-lg mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-am-muted text-[14px] leading-relaxed max-w-xs">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
