"use client";

import { useRef, useState } from "react";

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

const CARD_W = 680;
const IFRAME_W = 1440;
const IFRAME_H = 960;
const SCALE = CARD_W / IFRAME_W;
const PREVIEW_H = Math.round(IFRAME_H * SCALE);

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

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
    trackRef.current.scrollBy({ left: dir === "right" ? CARD_W + 24 : -(CARD_W + 24), behavior: "smooth" });
  }

  return (
    <section id="proyectos" className="relative py-16 bg-am-bg overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[280px] rounded-full bg-am-primary/10 blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[130px] rounded-full bg-am-accent/7 blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
            Proyectos <span className="gradient-text">realizados</span>
          </h2>
          {/* Nav arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Anterior"
              className="w-9 h-9 rounded-full border border-white/10 text-am-muted flex items-center justify-center hover:border-am-primary/40 hover:text-am-primary transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Siguiente"
              className="w-9 h-9 rounded-full border border-white/10 text-am-muted flex items-center justify-center hover:border-am-primary/40 hover:text-am-primary transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll track — full bleed */}
      <div
        ref={trackRef}
        className="relative z-10 flex gap-6 overflow-x-auto scroll-smooth pb-6 select-none"
        style={{
          paddingLeft: "max(24px, calc((100vw - 1280px) / 2 + 24px))",
          paddingRight: "max(24px, calc((100vw - 1280px) / 2 + 24px))",
          scrollbarWidth: "none",
          cursor: dragging ? "grabbing" : "grab",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {projects.map((p) => (
          <ProjectCard key={p.url} {...p} />
        ))}
      </div>

      {/* Hide scrollbar webkit */}
      <style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>

      {/* Section fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-am-surface to-transparent pointer-events-none" />
    </section>
  );
}

function ProjectCard({ url, title, type, blocked, img }: (typeof projects)[0]) {
  const domain = url.replace(/^https?:\/\//, "");

  const typeColors: Record<string, string> = {
    "Tienda Online": "text-am-accent",
    "E-commerce":    "text-am-accent",
    "Landing Médica":"text-am-green",
    "SaaS / App Web":"text-am-primary",
  };

  return (
    <div
      className="group flex-shrink-0 rounded-2xl border border-white/6 bg-am-surface overflow-hidden hover:border-am-primary/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-300"
      style={{ width: CARD_W }}
    >
      {/* Preview */}
      <div
        className="relative overflow-hidden bg-am-surf2"
        style={{ height: PREVIEW_H }}
      >
        {blocked && img ? (
          /* Imagen estática en reemplazo del iframe bloqueado */
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-am-bg/80 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md border border-am-primary text-am-primary text-sm font-semibold hover:bg-am-primary/8 transition-all duration-200 pointer-events-auto"
              >
                Abrir sitio →
              </a>
              <span className="text-am-muted text-xs">{domain}</span>
            </div>
          </>
        ) : (
          <>
            <div
              className="absolute top-0 left-0 pointer-events-none origin-top-left"
              style={{ width: IFRAME_W, height: IFRAME_H, transform: `scale(${SCALE})` }}
            >
              <iframe
                src={url}
                title={title}
                width={IFRAME_W}
                height={IFRAME_H}
                className="border-0"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-am-bg/80 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md border border-am-primary text-am-primary text-sm font-semibold hover:bg-am-primary/8 transition-all duration-200 pointer-events-auto"
              >
                Abrir sitio →
              </a>
              <span className="text-am-muted text-xs">{domain}</span>
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div className="px-7 py-6 flex items-center justify-between">
        <div>
          <span className={`text-[12px] font-bold uppercase tracking-wider ${typeColors[type] ?? "text-am-primary"}`}>
            {type}
          </span>
          <h3 className="font-display font-bold text-white text-[20px] mt-0.5">{title}</h3>
        </div>
        <span className="text-am-muted text-sm truncate max-w-[200px] text-right">{domain}</span>
      </div>
    </div>
  );
}
