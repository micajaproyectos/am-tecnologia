"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const INTERVAL_MS = 4500;

// Solar & Arriagada queda fija en la tarjeta de atrás, por eso no va aquí.
const projects = [
  {
    img: "/preview-rioespolon.png",
    title: "Cabañas Río Espolón",
    type: "Turismo / Cabañas",
  },
  {
    img: "/preview-beautylab.png",
    title: "Clínica Beauty Lab",
    type: "Landing Médica",
  },
  {
    img: "/preview-micaja.png",
    title: "Mi Caja Empresa",
    type: "SaaS / App Web",
  },
  {
    img: "/preview-ajonegro.png",
    title: "Ajo Negro Austral",
    type: "Tienda Online",
  },
  {
    img: "/preview-solange.png",
    title: "Dra. Solange Ballén",
    type: "Landing Médica",
  },
  {
    img: "/preview-perfumeria.png",
    title: "Perfumería Sur",
    type: "E-commerce",
  },
  {
    img: "/futarte.png",
    title: "Futarte",
    type: "Tienda de Ropa",
  },
  {
    img: "/preview-millanolli.png",
    title: "Millanolli",
    type: "Tienda Online",
  },
];

export default function HeroShowcase() {
  const [index, setIndex] = useState(0);
  // Solo se montan las imágenes ya mostradas + la siguiente, para no cargar
  // todas las capturas de golpe en el primer paint.
  const [maxMounted, setMaxMounted] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
      setMaxMounted((prev) => Math.min(prev + 1, projects.length - 1));
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .hero-showcase-caption {
            animation: hero-showcase-caption-fade 0.5s ease;
          }
        }
        @keyframes hero-showcase-caption-fade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>

      {/* Secundario, detrás — fijo */}
      <div className="absolute top-0 right-0 w-[62%] rotate-[4deg] rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-[0_16px_40px_rgba(0,0,0,0.16)] hidden sm:block">
        <Image
          src="/preview-abogadas.png"
          alt="Sitio web del estudio jurídico Solar & Arriagada, proyecto de AM Tecnología"
          width={1250}
          height={858}
          sizes="(max-width: 1024px) 60vw, 350px"
          className="w-full h-auto"
        />
      </div>

      {/* Principal, delante — vitrina rotativa */}
      <div className="relative w-full sm:w-[82%] sm:mt-14 rotate-0 sm:rotate-[-3deg] rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
        <div className="relative w-full aspect-[1250/858] bg-slate-100">
          {projects.map((p, i) =>
            i <= maxMounted ? (
              <Image
                key={p.img}
                src={p.img}
                alt={`Sitio web de ${p.title} (${p.type}), proyecto de AM Tecnología`}
                fill
                sizes="(max-width: 1024px) 90vw, 460px"
                preload={i === 0 ? true : undefined}
                className={`object-cover object-top transition-opacity duration-700 ease-in-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : null
          )}
        </div>

        {/* Etiqueta del proyecto activo */}
        <div
          key={index}
          className="hero-showcase-caption absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-sm rounded-lg ring-1 ring-slate-200 px-3 py-1.5 shadow-sm"
        >
          <span className="block text-[9px] font-bold uppercase tracking-widest text-am-blue leading-tight">
            {projects[index].type}
          </span>
          <span className="block font-display font-bold text-slate-800 text-[13px] leading-tight">
            {projects[index].title}
          </span>
        </div>
      </div>
    </>
  );
}
