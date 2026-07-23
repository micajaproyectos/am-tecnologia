"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const projects: { url: string; title: string; type: string; img?: string; aspect?: number }[] = [
  {
    url: "https://www.abogadasconcepcion.cl",
    title: "Solar & Arriagada",
    type: "Estudio Jurídico",
    img: "/abogadasconcepcion.png",
    // La captura es más ancha que el ratio 16/10 por defecto; con su aspect real no se recorta.
    aspect: 3320 / 1714,
  },
  {
    url: "https://www.patagoniafutaleufu.cl",
    title: "Cabañas Río Espolón",
    type: "Turismo / Cabañas",
    img: "/preview-rioespolon-2.webp",
  },
  {
    url: "https://futarte.cl",
    title: "Futarte",
    type: "Souvenirs y Regalos",
    img: "/futarte.png",
  },
  {
    url: "https://www.ajonegroaustral.cl",
    title: "Ajo Negro Austral",
    type: "Tienda Online",
    img: "/preview-ajonegro.png",
  },
  {
    url: "https://www.micajaempresa.cl",
    title: "Mi Caja Empresa",
    type: "SaaS / App Web",
    img: "/preview-micaja.png",
  },
  {
    url: "https://www.clinicabeautylab.cl",
    title: "Clínica Beauty Lab",
    type: "Landing Médica",
    img: "/preview-beautylab.png",
  },
  {
    url: "https://www.drasolangeballen.cl",
    title: "Dra. Solange Ballén",
    type: "Landing Médica",
    img: "/preview-solange.png",
  },
  {
    url: "https://www.millanolli.com",
    title: "Millanolli",
    type: "Tienda Online",
    img: "/preview-millanolli.png",
  },
];

const MAX_CARD_W = 520;
const IFRAME_W = 1440;
const IFRAME_H = 900;
const IMG_ASPECT = 16 / 10; // landscape preview ratio

export default function Projects() {
  const [cardW, setCardW] = useState(MAX_CARD_W);

  useEffect(() => {
    const update = () => setCardW(window.innerWidth < 768 ? window.innerWidth - 32 : MAX_CARD_W);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scale = cardW / IFRAME_W;
  const previewH = Math.round(IFRAME_H * scale);
  // Velocidad constante (~54 px/s) aunque cambie la cantidad de proyectos
  const marqueeDuration = projects.length * 10;

  return (
    <section id="proyectos" className="relative overflow-hidden bg-white">
      <style>{`
        @keyframes projects-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .projects-marquee-track {
          animation: projects-marquee ${marqueeDuration}s linear infinite;
          will-change: transform;
        }
        .projects-marquee:hover .projects-marquee-track {
          animation-play-state: paused;
        }
      `}</style>
      {/* Section header */}
      <div className="relative z-20 text-center pt-16 pb-2 px-6">
        <h2 className="font-display font-bold text-slate-800 text-balance"
          style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)" }}
        >
          Negocios que ya tienen nuevos clientes
        </h2>
        <p className="text-slate-600 text-sm mt-3">
          Sitios web, tiendas online y landing pages que están generando clientes hoy.
        </p>
      </div>

      {/* Marquesina — full bleed, pasa sola y se pausa con el mouse encima */}
      <div
        className="projects-marquee relative overflow-hidden select-none py-12"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div className="projects-marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex gap-6 pr-6"
              aria-hidden={copy === 1 || undefined}
              inert={copy === 1 || undefined}
            >
              {projects.map((p) => (
                <ProjectCard key={p.url} {...p} cardW={cardW} scale={scale} previewH={previewH} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ url, title, type, img, aspect, cardW, scale, previewH }: (typeof projects)[0] & { cardW: number; scale: number; previewH: number }) {
  const domain = url.replace(/^https?:\/\/(www\.)?/, "");
  const imgH = img ? Math.round(cardW / (aspect ?? IMG_ASPECT)) : previewH;

  return (
    <div
      className="flex-shrink-0 rounded-2xl border border-white/8 bg-[#0d1120] shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-am-primary/30 hover:shadow-[0_12px_40px_rgba(37,99,235,0.15)] transition-all duration-300"
      style={{ width: cardW }}
    >
      {/* Browser chrome bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/6 bg-white/3">
        {/* Traffic lights */}
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        {/* URL bar */}
        <div className="flex-1 mx-3 px-3 py-1 rounded-md bg-white/5 border border-white/8 flex items-center gap-1.5">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30 shrink-0">
            <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          <span className="text-white/40 text-[11px] font-mono truncate">{domain}</span>
        </div>
      </div>

      {/* Screenshot */}
      <div className="relative overflow-hidden bg-am-surf2" style={{ height: imgH }}>
        {/* Ver página button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-md bg-am-primary text-white text-[11px] font-semibold hover:bg-am-prim2 transition-all duration-200 pointer-events-auto shadow-lg"
        >
          Ver página →
        </a>
        {img ? (
          <Image
            src={img}
            alt={`Sitio web ${title} — posicionamiento en Google Chile`}
            fill
            loading="lazy"
            sizes="(max-width: 767px) calc(100vw - 80px), 385px"
            className="object-cover object-top"
          />
        ) : (
          <div
            className="absolute top-0 left-0 pointer-events-none origin-top-left"
            style={{ width: IFRAME_W + 20, height: IFRAME_H, transform: `scale(${scale})` }}
          >
            <iframe
              src={url}
              title={title}
              width={IFRAME_W + 20}
              height={IFRAME_H}
              className="border-0"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        )}

        {/* Bottom info overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-between">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-0.5">{type}</span>
            <h3 className="font-display font-bold text-white text-base leading-tight">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
