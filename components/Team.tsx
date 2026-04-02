"use client";

import { useState } from "react";

const members = [
  {
    img: "/equipo-1.jpg",
    name: "Andrés Morales",
    role: "Ing. Civil · Fundador",
    bio: "Especialista en arquitectura de software y soluciones digitales escalables. Combina la rigurosidad de la ingeniería con visión de negocio.",
    tags: ["Full-Stack", "IA", "E-commerce"],
  },
  {
    img: "/equipo-2.jpg",
    name: "Martín Acuña",
    role: "Ing. Civil · Co-Fundador",
    bio: "Experto en automatizaciones, integración de APIs y diseño de experiencias de usuario que convierten visitantes en clientes.",
    tags: ["UI/UX", "Automatización", "SEO"],
  },
];

export default function Team() {
  return (
    <section id="equipo" className="py-28 bg-am-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-am-primary/25 bg-am-primary/8 text-am-primary text-[13px] font-semibold tracking-widest uppercase mb-5">
            Nuestro Equipo
          </span>
          <h2
            className="font-display font-bold text-white text-balance mb-4"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)" }}
          >
            Ingenieros que{" "}
            <span className="gradient-text">piensan diferente</span>
          </h2>
          <p className="text-am-muted text-lg leading-relaxed">
            Combinamos la rigurosidad de la ingeniería civil con el poder de la
            tecnología moderna para entregar soluciones de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Member cards */}
          {members.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}

          {/* Philosophy card */}
          <div className="rounded-2xl border border-am-accent/20 bg-gradient-to-br from-am-primary/8 to-am-accent/5 p-8 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 rounded-full border border-am-accent/30 bg-am-accent/8 text-am-accent text-[11px] font-bold tracking-wider uppercase mb-6 w-fit">
              Nuestro enfoque
            </span>
            <div className="text-4xl mb-5">🏗️</div>
            <h3 className="font-display font-bold text-white text-xl mb-4 leading-snug">
              Ingeniería aplicada al mundo digital
            </h3>
            <p className="text-am-muted text-sm leading-[1.7] mb-3">
              Formados como Ingenieros Civiles, entendemos que un proyecto digital
              es como una obra: requiere planificación, estructura sólida y
              ejecución precisa.
            </p>
            <p className="text-am-muted text-sm leading-[1.7]">
              Esa mentalidad es lo que diferencia nuestros proyectos — sitios
              rápidos, robustos y diseñados para crecer contigo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MemberCard({
  img,
  name,
  role,
  bio,
  tags,
}: (typeof members)[0]) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="rounded-2xl border border-white/6 bg-am-surface p-8 hover:border-am-primary/20 hover:-translate-y-1 transition-all duration-300">
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

      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full border border-white/8 bg-white/4 text-am-muted text-[12px] font-medium"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
