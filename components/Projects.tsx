"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projects: { url: string; title: string; type: string; img?: string }[] = [
  {
    url: "https://www.ajonegroaustral.cl",
    title: "Ajo Negro Austral",
    type: "Tienda Online",
    img: "/preview-ajonegro.png",
  },
  {
    url: "https://www.perfumeriasur.cl",
    title: "Perfumería Sur",
    type: "E-commerce",
    img: "/preview-perfumeria.png",
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
    url: "https://www.micajaempresa.cl",
    title: "Mi Caja Empresa",
    type: "SaaS / App Web",
    img: "/preview-micaja.png",
  },
  {
    url: "https://www.millanolli.com",
    title: "Millanolli",
    type: "Tienda Online",
    img: "/pre_millanolli.png",
  },
];

const MAX_CARD_W = 520;
const IFRAME_W = 1440;
const IFRAME_H = 900;
const IMG_ASPECT = 16 / 10; // landscape preview ratio

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
        className="flex gap-6 overflow-x-auto scroll-smooth select-none py-12"
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
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

function ProjectCard({ url, title, type, img, cardW, scale, previewH }: (typeof projects)[0] & { cardW: number; scale: number; previewH: number }) {
  const domain = url.replace(/^https?:\/\/(www\.)?/, "");
  const imgH = img ? Math.round(cardW / IMG_ASPECT) : previewH;

  return (
    <div
      className="group flex-shrink-0 rounded-2xl border border-white/8 bg-[#0d1120] shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-am-primary/30 hover:shadow-[0_12px_40px_rgba(37,99,235,0.15)] transition-all duration-300"
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
        {img ? (
          <Image
            src={img}
            alt={`Diseño web ${title}`}
            fill
            loading="lazy"
            sizes="(max-width: 767px) calc(100vw - 32px), 520px"
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
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-3 py-1.5 rounded-md bg-am-primary/90 text-white text-xs font-semibold hover:bg-am-primary transition-all duration-200 pointer-events-auto opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0"
          >
            Abrir →
          </a>
        </div>
      </div>
    </div>
  );
}
