import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    number: "1",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" />
      </svg>
    ),
    title: "Revisamos cómo trabajas hoy",
    desc: "Nos muestras tus planillas Excel, documentos y carpetas de Drive. Entendemos tus procesos administrativos y contables antes de proponerte nada.",
  },
  {
    number: "2",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Diseñamos un sistema a tu medida",
    desc: "Reunimos todo en una sola plataforma web: tu información, tus procesos y tus reportes, solo con lo que tu empresa realmente necesita.",
  },
  {
    number: "3",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    title: "Lo implementamos contigo",
    desc: "Traspasamos tu información al nuevo sistema y capacitamos a tu equipo. Dejas atrás el Excel, el papel y los archivos sueltos.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative bg-white py-24 px-6 scroll-mt-[72px]">
      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-16" data-reveal>
          <h2
            className="font-display font-bold text-slate-800 text-balance"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            ¿Cómo creamos el software de tu empresa?
          </h2>
        </div>

        {/* Two-column: steps | founder */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-center">

          {/* Steps */}
          <div className="flex flex-col gap-6 lg:order-1">
            {steps.map((s, i) => (
              <div key={i} className="flex items-start gap-5" data-reveal>
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-am-primary">
                  {s.icon}
                </div>
                <div>
                  <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-1">Paso {s.number}</p>
                  <h3 className="font-display font-bold text-slate-900 text-[17px] leading-snug mb-1">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-[14px] leading-relaxed">
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
              className="group flex flex-col items-center text-center bg-blue-50 border border-blue-100 rounded-3xl overflow-hidden w-full max-w-[260px] shadow-sm hover:border-am-primary/40 transition-colors duration-300"
            >
              {/* Image flush to top */}
              <div className="relative w-full">
                <Image
                  src="/fundador.webp"
                  alt="Allan Milla, Ingeniero Civil Industrial y Fundador de AM Tecnología"
                  width={260}
                  height={300}
                  sizes="260px"
                  className="w-full h-[300px] object-cover object-top"
                />
              </div>
              {/* Info */}
              <div className="px-6 py-5">
                <p className="text-slate-900 font-bold text-[16px] leading-snug">Allan Milla</p>
                <p className="text-am-primary font-semibold text-[13px] mt-0.5">Fundador · AM Tecnología</p>
                <p className="text-slate-500 text-[12px] mt-1">Ingeniero Civil Industrial</p>
                <p className="text-slate-500 text-[12px]">Especialista en procesos y gestión</p>
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
