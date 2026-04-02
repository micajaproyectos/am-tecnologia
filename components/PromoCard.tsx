"use client";

import { useState } from "react";

const WA =
  "https://wa.me/56985660954?text=Quiero%20aprovechar%20la%20oferta%20de%20lanzamiento";

export default function PromoCard() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full max-w-[460px] rounded-2xl border border-am-primary/20 bg-am-surface overflow-hidden shadow-[0_0_32px_rgba(37,99,235,0.08),0_16px_48px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 transition-transform duration-300">
      {/* Launch badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-red-500 text-white text-[11px] font-bold tracking-wider">
      </div>

      {/* ── IMAGE SLOT ──
          Coloca tu imagen en: /public/promo-banner.png
          Se mostrará automáticamente al agregarlo.
      ── */}
      <div className="relative aspect-[4/5] overflow-hidden bg-am-surf2">
        {!imgError ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/promo_hero.png"
            alt="Promoción de lanzamiento AM Tecnología"
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <ImagePlaceholder />
        )}
      </div>

      {/* Content */}
      <div className="px-4 py-3 flex items-center justify-between gap-4">
        <div>
          <p className="text-am-muted text-xs leading-tight mb-1">
            Sitio web profesional + dominio + hosting incluido
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-am-muted line-through text-xs">$289.990</span>
            <span className="font-display font-bold text-am-green text-xl">$99.990</span>
          </div>
        </div>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-am-primary text-am-primary font-semibold text-sm hover:bg-am-primary/8 transition-all duration-200"
        >
          Aprovechar oferta
        </a>
      </div>

      {/* Glow */}
      <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-am-primary/15 blur-3xl pointer-events-none" />
    </div>
  );
}

function ImagePlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-am-muted">
      <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-am-primary/30 flex items-center justify-center bg-am-primary/5">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-[13px] font-medium text-am-muted">Imagen publicitaria</p>
        <p className="text-[11px] text-am-muted/60 mt-0.5">
          Agrega{" "}
          <code className="bg-am-primary/10 text-am-accent px-1.5 py-0.5 rounded text-[11px]">
            /public/promo-banner.png
          </code>
        </p>
      </div>
    </div>
  );
}
