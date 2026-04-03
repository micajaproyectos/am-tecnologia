const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Conversamos por WhatsApp para entender tu negocio, objetivos y público objetivo sin costo.",
  },
  {
    num: "02",
    title: "Propuesta",
    desc: "Te enviamos una propuesta personalizada con diseño preliminar y presupuesto claro.",
  },
  {
    num: "03",
    title: "Desarrollo",
    desc: "Construimos tu sitio con tecnología de punta. Iteramos contigo en tiempo real.",
  },
  {
    num: "04",
    title: "Lanzamiento",
    desc: "Publicamos, configuramos el dominio y te entregamos capacitación completa de uso.",
  },
];

export default function Process() {
  return (
    <section className="relative py-16 metal-surface">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Tu sitio web en{" "}
            <span className="gradient-text">4 pasos</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((s, i) => (
            <div key={s.num} className="flex gap-6 group">
              {/* Left — number + connector */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-md border border-am-primary/30 bg-am-bg flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-sm gradient-text">{s.num}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 my-2 bg-gradient-to-b from-am-primary/30 to-transparent" />
                )}
              </div>

              {/* Right — content */}
              <div className={`pb-8 ${i === steps.length - 1 ? "" : ""}`}>
                <h3 className="font-display font-semibold text-white text-base mb-1">{s.title}</h3>
                <p className="text-am-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-am-bg to-transparent pointer-events-none" />
    </section>
  );
}
