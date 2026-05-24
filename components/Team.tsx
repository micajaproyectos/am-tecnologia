"use client";

import { useState } from "react";
import Link from "next/link";

const founder = {
  img: "/fundador.webp",
  name: "Allan Milla",
  role: "Ing. Civil · Fundador",
  bio: "Especialista en desarrollo Full Stack, ingeniería de IA y marketing digital. Fundador de AM Tecnología con la convicción de que la tecnología bien aplicada resuelve problemas reales de negocio.",
  tags: ["Full-Stack", "Ingeniería IA", "Marketing Digital"],
};

const metrics = [
  { value: "+50", label: "Proyectos exitosos" },
  { value: "5.0 ★", label: "Calificación Google" },
  { value: "100%", label: "Orientado a resultados" },
  { value: "2025", label: "Fundada en Chile" },
];

export default function Team() {
  return (
    <section id="equipo" className="py-28 metal-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-am-primary/25 bg-am-primary/8 text-am-primary text-[13px] font-semibold tracking-widest uppercase mb-5">
            Quién está detrás
          </span>
          <h2
            className="font-display font-bold text-white text-balance mb-4"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)" }}
          >
            Ingeniería aplicada al{" "}
            <span className="gradient-text">mundo digital</span>
          </h2>
          <p className="text-am-muted text-lg leading-relaxed">
            Un Ingeniero Civil Industrial que combina pensamiento sistémico con visión de negocio
            para diseñar presencia digital que realmente posiciona en Google.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Founder card */}
          <MemberCard {...founder} />

          {/* Philosophy card */}
          <div className="rounded-2xl border border-am-accent/20 bg-gradient-to-br from-am-primary/8 to-am-accent/5 p-8 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 rounded-full border border-am-accent/30 bg-am-accent/8 text-am-accent text-[11px] font-bold tracking-wider uppercase mb-6 w-fit">
              Nuestro enfoque
            </span>
            <div className="text-4xl mb-5">⚙️</div>
            <h3 className="font-display font-bold text-white text-xl mb-4 leading-snug">
              Un proyecto digital es un sistema que trabaja por ti
            </h3>
            <p className="text-am-muted text-sm leading-[1.7] mb-3">
              Requiere análisis, diseño del proceso correcto y ejecución sin
              fricciones. Esa mentalidad de ingeniería industrial es lo que
              diferencia los proyectos de AM Tecnología.
            </p>
            <p className="text-am-muted text-sm leading-[1.7]">
              Sitios optimizados para posicionarse en Google y captar clientes
              de forma continua, sin intervención manual.
            </p>
          </div>

          {/* Metrics card */}
          <div className="rounded-2xl border border-white/8 bg-am-surface p-8 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 rounded-full border border-am-primary/30 bg-am-primary/8 text-am-primary text-[11px] font-bold tracking-wider uppercase mb-6 w-fit">
              Resultados reales
            </span>
            <div className="grid grid-cols-2 gap-5">
              {metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display font-extrabold text-white text-[1.6rem] leading-none mb-1">
                    {m.value}
                  </p>
                  <p className="text-am-muted text-[12px] leading-snug">{m.label}</p>
                </div>
              ))}
            </div>
            <Link
              href="/sobre-nosotros"
              className="mt-8 text-am-primary text-[13px] font-semibold hover:text-am-accent transition-colors"
            >
              Conoce más sobre AM Tecnología →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

type MemberProps = {
  img: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
};

function MemberCard({ img, name, role, bio, tags }: MemberProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="rounded-2xl border border-white/6 bg-am-surface p-8 hover:border-am-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full border-2 border-am-primary/25 overflow-hidden bg-am-surf2 mb-5">
        {!imgError ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-am-muted">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        )}
      </div>

      <h3 className="font-display font-bold text-white text-xl mb-0.5">{name}</h3>
      <p className="text-am-primary text-[13px] font-semibold mb-4">{role}</p>
      <p className="text-am-muted text-sm leading-[1.7] mb-5">{bio}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full border border-white/8 bg-white/4 text-am-muted text-[12px] font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      <Link
        href="/sobre-nosotros"
        className="mt-auto text-am-primary text-[13px] font-semibold hover:text-am-accent transition-colors"
      >
        Ver perfil completo →
      </Link>
    </div>
  );
}
