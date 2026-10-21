"use client";

import { useState } from "react";
import Link from "next/link";
import { homeFaqs as faqs } from "@/lib/home-faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="relative z-20 max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="font-display font-bold text-slate-800 text-balance"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Preguntas frecuentes sobre software a medida
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border shadow-sm transition-all duration-200 ${
                open === i
                  ? "border-am-primary/40 bg-blue-50"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <h3 className="m-0">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-slate-900 text-[15px] leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    open === i
                      ? "border-am-primary bg-am-primary/20 text-am-primary rotate-45"
                      : "border-slate-300 text-slate-400"
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1v10M1 6h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              </h3>

              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 text-[14px] leading-[1.75]">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA bajo el FAQ */}
        <p className="text-center text-slate-600 text-sm mt-10">
          ¿Tienes otra pregunta?{" "}
          <a
            href="https://wa.me/56985660954?text=Hola%2C%20tengo%20una%20consulta%20sobre%20un%20software%20para%20mi%20empresa"
            data-cta-source="faq"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-am-primary hover:text-am-accent font-semibold transition-colors"
          >
            Escríbenos por WhatsApp →
          </a>
        </p>
        <p className="text-center text-slate-600 text-sm mt-3">
          ¿Buscas una página web o aparecer en Google?{" "}
          <Link
            href="/aparecer-en-google"
            className="text-am-primary hover:text-am-accent font-semibold transition-colors"
          >
            Mira cómo te ayudamos →
          </Link>
        </p>
      </div>
    </section>
  );
}
