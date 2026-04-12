"use client";

import { useEffect, useRef, useState } from "react";

const projects: { url: string; title: string; type: string; blocked?: boolean; img?: string }[] = [
  {
    url: "https://www.ajonegroaustral.cl",
    title: "Ajo Negro Austral",
    type: "Tienda Online",
  },
  {
    url: "https://www.perfumeriasur.cl",
    title: "Perfumería Sur",
    type: "E-commerce",
  },
  {
    url: "https://www.clinicabeautylab.cl",
    title: "Clínica Beauty Lab",
    type: "Landing Médica",
  },
  {
    url: "https://www.drasolangeballen.cl",
    title: "Dra. Solange Ballén",
    type: "Landing Médica",
  },
  {
    url: "https://www.micajaempresa.cl",
    title: "Mi Caja Empresa",
    type: "SaaS / App Web",
  },
  {
    url: "https://www.millanolli.com",
    title: "Millanolli",
    type: "Tienda Online",
    blocked: true,
    img: "/pre_millanolli.png",
  },
];

const MAX_CARD_W = 550;
const IFRAME_W = 1440;
const IFRAME_H = 900;

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [cardW, setCardW] = useState(MAX_CARD_W);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const update = () => setCardW(window.innerWidth < 768 ? window.innerWidth - 32 : MAX_CARD_W);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scale = cardW / IFRAME_W;
  const previewH = Math.round(IFRAME_H * scale);

  function onMouseDown(e: React.MouseEvent) {
    setDragging(true);
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!dragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  }
  function stopDrag() {
    setDragging(false);
  }

  function scroll(dir: "left" | "right") {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir === "right" ? cardW + 16 : -(cardW + 16), behavior: "smooth" });
  }

  return (
    <section id="proyectos" className="relative overflow-hidden">
      {/* Image background */}
      <div className="absolute inset-0 bg-cover bg-center pointer-events-none" style={{ backgroundImage: "url('/proyectos.png')" }} />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* Section header */}
      <div className="relative z-20 text-center pt-16 pb-2 px-6">
        <h2 className="font-display font-bold text-white text-balance"
          style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)" }}
        >
          Diseño Web en Chile —{" "}
          <span className="gradient-text">Resultados Reales</span>
        </h2>
        <p className="text-am-muted text-sm mt-3">
          Sitios web, tiendas online y landing pages que están generando clientes hoy.
        </p>
      </div>

      {/* Nav — left */}
      <button
        onClick={() => scroll("left")}
        aria-label="Anterior"
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/15 bg-am-bg/80 backdrop-blur-sm text-am-muted items-center justify-center hover:border-am-primary/50 hover:text-am-primary transition-all duration-200"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Nav — right */}
      <button
        onClick={() => scroll("right")}
        aria-label="Siguiente"
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/15 bg-am-bg/80 backdrop-blur-sm text-am-muted items-center justify-center hover:border-am-primary/50 hover:text-am-primary transition-all duration-200"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Scroll track — full bleed */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-smooth select-none py-16"
        style={{
          paddingLeft: "16px",
          paddingRight: "16px",
          scrollbarWidth: "none",
          cursor: dragging ? "grabbing" : "grab",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {projects.map((p) => (
          <ProjectCard key={p.url} {...p} cardW={cardW} scale={scale} previewH={previewH} />
        ))}
      </div>

      {/* Hide scrollbar webkit */}
      <style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>

      {/* Fade inferior hacia Services */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />

    </section>
  );
}

function ProjectCard({ url, title, type, blocked, img, cardW, scale, previewH }: (typeof projects)[0] & { cardW: number; scale: number; previewH: number }) {
  const domain = url.replace(/^https?:\/\//, "");


  return (
    <div
      className="group flex-shrink-0 rounded-xl border border-white/6 bg-am-surface overflow-hidden hover:border-am-primary/25 transition-all duration-300"
      style={{ width: cardW }}
    >
      {/* Preview — full card */}
      <div className="relative overflow-hidden bg-am-surf2" style={{ height: previewH }}>
        {blocked && img ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover object-top" />
          </>
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

        {/* Bottom info overlay — always visible */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between">
          <div>
            <span
              className="text-[11px] font-extrabold uppercase tracking-widest text-white"
              style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 10px rgba(0,0,0,0.8)" }}
            >{type}</span>
            <h3 className="font-display font-extrabold text-am-primary text-lg leading-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">{title}</h3>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-md border border-white/30 text-white text-xs font-semibold hover:border-am-primary hover:text-am-primary transition-all duration-200 pointer-events-auto opacity-0 group-hover:opacity-100"
          >
            Abrir →
          </a>
        </div>
      </div>
    </div>
  );
}
