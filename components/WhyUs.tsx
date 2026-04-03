const features = [
  {
    icon: "⚡",
    title: "Entrega Rápida",
    desc: "Tu sitio listo en 48 a 72 horas. Sin demoras ni sorpresas.",
  },
  {
    icon: "🎯",
    title: "Orientados a Resultados",
    desc: "No creamos sitios bonitos: creamos sitios que convierten visitas en clientes.",
  },
  {
    icon: "🔧",
    title: "Soporte Post-Entrega",
    desc: "Acompañamiento real después de lanzar tu proyecto. No desaparecemos.",
  },
  {
    icon: "🤖",
    title: "Integración con IA",
    desc: "Automatizamos procesos para que tu negocio escale sin aumentar costos.",
  },
];

const tech = [
  "React", "Next.js", "Node.js", "IA / GPT", "Webpay",
  "WhatsApp API", "MercadoPago", "PostgreSQL", "Supabase", "Vercel",
];

export default function WhyUs() {
  return (
    <section className="py-28 metal-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* ── Copy ── */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-am-primary/25 bg-am-primary/8 text-am-primary text-[13px] font-semibold tracking-widest uppercase mb-6">
              ¿Por qué nosotros?
            </span>
            <h2
              className="font-display font-bold text-white text-balance leading-[1.2] mb-5"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)" }}
            >
              La diferencia{" "}
              <span className="gradient-text">AM Tecnología</span>
            </h2>
            <p className="text-am-muted text-lg leading-[1.75] mb-10">
              No somos una agencia genérica. Somos Ingenieros Civiles que entienden
              la lógica de los procesos, la eficiencia y la optimización — y la
              aplicamos al mundo digital.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4 items-start group">
                  <div className="w-11 h-11 rounded-xl bg-am-bg border border-white/6 flex items-center justify-center text-xl shrink-0 group-hover:border-am-primary/30 transition-colors duration-200">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">{f.title}</p>
                    <p className="text-am-muted text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Tech Stack card ── */}
          <div className="rounded-2xl border border-am-primary/18 bg-am-bg p-8 shadow-[0_0_32px_rgba(37,99,235,0.08),0_16px_48px_rgba(0,0,0,0.4)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-am-muted mb-5">
              Stack Tecnológico
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-1.5 rounded-full border border-white/8 bg-am-surface text-am-text text-[13px] font-medium hover:border-am-primary/40 hover:text-am-primary transition-all duration-200 cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="border-t border-white/6 pt-6 flex gap-6">
              <MetricItem
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                }
                label="Rendimiento"
                value="99/100"
              />
              <MetricItem
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                }
                label="Seguridad"
                value="SSL + CDN"
              />
              <MetricItem
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a94b8" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
                label="Uptime"
                value="99.9%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="shrink-0">{icon}</div>
      <div>
        <p className="text-am-muted text-[11px]">{label}</p>
        <p className="text-white font-bold text-sm">{value}</p>
      </div>
    </div>
  );
}
