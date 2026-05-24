import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    number: "1",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: "Nos cuentas a qué te dedicas",
    desc: "Una conversación por WhatsApp es suficiente. Nos cuentas tu rubro, tu ciudad y quiénes son tus clientes. Con esa información definimos las palabras clave exactas que tu público usa en Google para encontrar negocios como el tuyo.",
  },
  {
    number: "2",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Creamos tu presencia en Google",
    desc: "Diseñamos y publicamos tu página web con la estructura técnica y el contenido que Google necesita para posicionarte. Activamos tu perfil en Google Maps, configuramos Search Console y aplicamos SEO local para que aparezcas en búsquedas de tu ciudad. Sin publicidad pagada.",
  },
  {
    number: "3",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
        <path d="M11 8v3h3" strokeWidth="1.6" />
      </svg>
    ),
    title: "Tus clientes llegan solos",
    desc: "Una vez posicionado, apareces antes que tu competencia cada vez que alguien busca tu servicio en Google. Los clientes interesados te contactan directo por WhatsApp sin intermediarios y sin pagar publicidad. El posicionamiento orgánico sigue trabajando para ti todos los días.",
  },
];

export default function HowItWorks() {
  return (
    <section className="metal-surface relative py-24 px-6">
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-16" data-reveal>
          <h2
            className="font-display font-bold text-white text-balance"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Cómo funciona el{" "}
            <span className="gradient-text">posicionamiento en Google</span>
          </h2>
        </div>

        {/* Two-column: steps | founder */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-center">

          {/* Steps */}
          <div className="flex flex-col gap-6 lg:order-1">
            {steps.map((s, i) => (
              <div key={i} className="flex items-start gap-5" data-reveal>
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-am-primary/12 border border-am-primary/25 flex items-center justify-center text-am-primary shadow-[0_0_24px_rgba(37,99,235,0.15)]">
                  {s.icon}
                </div>
                <div>
                  <p className="text-am-muted text-[11px] font-bold uppercase tracking-widest mb-1">Paso {s.number}</p>
                  <h3 className="font-display font-bold text-white text-[17px] leading-snug mb-1">
                    {s.title}
                  </h3>
                  <p className="text-am-muted text-[14px] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Founder */}
          <div className="flex justify-center lg:justify-end lg:order-2" data-reveal>
            <Link
              href="/sobre-nosotros"
              className="group flex flex-col items-center text-center bg-white/4 border border-white/10 rounded-3xl overflow-hidden w-full max-w-[260px] shadow-[0_0_60px_rgba(37,99,235,0.08)] hover:border-am-primary/40 transition-colors duration-300"
            >
              {/* Image flush to top */}
              <div className="relative w-full">
                <Image
                  src="/fundador.webp"
                  alt="Allan Milla – Fundador AM Tecnología"
                  width={260}
                  height={300}
                  sizes="260px"
                  className="w-full h-[300px] object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0d0d0d]/80 to-transparent pointer-events-none" />
              </div>
              {/* Info */}
              <div className="px-6 py-5">
                <p className="text-white font-bold text-[16px] leading-snug">Allan Milla</p>
                <p className="text-am-primary font-semibold text-[13px] mt-0.5">Fundador · AM Tecnología</p>
                <p className="text-am-muted text-[12px] mt-1">Ingeniero Civil Industrial</p>
                <p className="text-am-primary text-[12px] font-semibold mt-3 group-hover:text-am-accent transition-colors">
                  Ver perfil completo →
                </p>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
