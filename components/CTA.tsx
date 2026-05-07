"use client";

import { useEffect, useRef, useState } from "react";

const WA =
  "https://wa.me/56985660954?text=Hola%2C%20quiero%20cotizar%20mi%20p%C3%A1gina%20web";

const SHEET_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzL-Ub_JIchX7l-yrHoKFcznn_tBhS6-Ak2k4vUVqPKnQV41VherHQDLt5ZcR5OUaP2/exec";
const CONVERSION_VALUE = 99990;
const CONVERSION_NAME  = "lead_formulario_cta";
const CHILE_TIME_ZONE  = "America/Santiago";

export default function CTA() {
  const [nombre, setNombre]     = useState("");
  const [telefono, setTelefono] = useState("+569");
  const [tieneWeb, setTieneWeb] = useState<"si" | "no" | null>(null);
  const [enviado, setEnviado]   = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError]       = useState("");

  const gclidRef  = useRef<string>("");
  const leadIdRef = useRef<string>("");

  useEffect(() => {
    // Capture gclid from URL and persist in sessionStorage so it survives navigation
    const params = new URLSearchParams(window.location.search);
    const gclidFromUrl = params.get("gclid") ?? "";
    if (gclidFromUrl) {
      sessionStorage.setItem("gclid", gclidFromUrl);
    }
    gclidRef.current  = gclidFromUrl || sessionStorage.getItem("gclid") || "";
    leadIdRef.current = crypto.randomUUID();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!tieneWeb) {
      setError("Selecciona si tienes página web.");
      return;
    }

    const payload = {
      lead_id:          leadIdRef.current,
      gclid:            gclidRef.current,
      conversion_time:  formatConversionTimeInChile(new Date()),
      conversion_value: CONVERSION_VALUE,
      conversion_name:  CONVERSION_NAME,
      nombre_negocio:   nombre,
      contacto:         telefono,
      tiene_pagina:     tieneWeb,
    };

    try {
      setEnviando(true);

      await fetch(SHEET_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      setEnviado(true);
    } catch (err) {
      console.error("Error sending lead:", err);
      setError("No pudimos enviar tus datos. Intenta nuevamente o escríbenos por WhatsApp.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section id="contacto" className="relative py-28 overflow-hidden">
      {/* Image background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed pointer-events-none"
        style={{ backgroundImage: "url('/fondo.webp')" }}
      />
      <div className="absolute inset-0 bg-black/85 pointer-events-none" />
      <div className="absolute inset-0 bg-am-primary/12 pointer-events-none" />

      {/* Fade superior desde FAQ */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-am-primary/20 bg-gradient-to-br from-[#0d1120] via-[#131928] to-[#0b1020] shadow-[0_0_60px_rgba(37,99,235,0.12)] px-8 py-14">
          {/* Orbs */}
          <div className="absolute -top-40 -left-24 w-80 h-80 rounded-full bg-am-primary/20 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-16 w-64 h-64 rounded-full bg-am-accent/15 blur-[70px] pointer-events-none" />

          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative">
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/15 bg-white/8 text-white/70 text-[12px] font-semibold tracking-widest uppercase mb-6">
              ¿Listo para dar el salto?
            </span>

            <h2
              className="font-display font-extrabold text-white text-balance leading-[1.15] mb-3"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              ¿Quieres que tu negocio{" "}
              <span className="gradient-text-light">aparezca en Google?</span>
            </h2>

            <p className="text-white/55 text-base leading-relaxed mb-8">
              Completa estos datos y te contactamos en menos de 1 hora.
            </p>

            {enviado ? (
              <div className="text-center py-10">
                <p className="text-am-green font-bold text-xl mb-2">¡Recibido!</p>
                <p className="text-white/60 text-sm">Te contactamos en menos de 1 hora por WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Nombre */}
                <div>
                  <label className="block text-white/70 text-[13px] font-semibold mb-2">
                    Nombre de tu negocio
                  </label>
                  <input
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej: Panadería Don Pedro"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[15px] placeholder-white/25 focus:outline-none focus:border-am-primary/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-white/70 text-[13px] font-semibold mb-2">
                    WhatsApp de contacto
                  </label>
                  <input
                    type="tel"
                    required
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="+56 9 XXXX XXXX"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[15px] placeholder-white/25 focus:outline-none focus:border-am-primary/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>

                {/* ¿Tienes web? */}
                <div>
                  <label className="block text-white/70 text-[13px] font-semibold mb-2">
                    ¿Tienes página web?
                  </label>
                  <div className="flex gap-3">
                    {(["si", "no"] as const).map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setTieneWeb(val)}
                        className={`flex-1 py-3 rounded-xl border text-[15px] font-semibold transition-all duration-200 ${
                          tieneWeb === val
                            ? "border-am-primary bg-am-primary/20 text-white"
                            : "border-white/10 bg-white/4 text-white/50 hover:border-white/25 hover:text-white/80"
                        }`}
                      >
                        {val === "si" ? "Sí" : "No"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full mt-2 py-4 rounded-xl bg-am-green hover:bg-[#25c068] disabled:opacity-60 disabled:hover:translate-y-0 text-white font-bold text-[16px] shadow-[0_4px_24px_rgba(42,170,110,0.4)] hover:shadow-[0_6px_32px_rgba(42,170,110,0.55)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  {enviando ? "Enviando..." : "Quiero aparecer en Google"}
                </button>

                {error && (
                  <p className="text-center text-sm text-red-300">
                    {error}
                  </p>
                )}
              </form>
            )}

            {/* WA alternativa */}
            <p className="text-center text-white/35 text-sm mt-6">
              ¿Prefieres escribirnos directo?{" "}
              <a
                href={WA}
                data-cta-source="cta_final"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white font-semibold transition-colors"
              >
                → WhatsApp
              </a>
            </p>

            <div className="mt-8 pt-7 border-t border-white/8">
              <p className="text-white/40 text-[13px] mb-3 text-center">¿Ya trabajaste con nosotros?</p>
              <div className="flex justify-center">
                <a
                  href="https://g.page/r/CX_Uc-66lRnzEAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-200"
                >
                  <GoogleColorIcon />
                  <span className="text-white/70 text-[13px] font-medium hover:text-white transition-colors">
                    Déjanos tu reseña en Google
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GoogleColorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function formatConversionTimeInChile(date: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: CHILE_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    hourCycle: "h23",
    timeZoneName: "shortOffset",
  }).formatToParts(date);

  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return [
    value("year"),
    "-",
    value("month"),
    "-",
    value("day"),
    " ",
    value("hour"),
    ":",
    value("minute"),
    ":",
    value("second"),
    normalizeOffset(value("timeZoneName")),
  ].join("");
}

function normalizeOffset(timeZoneName: string) {
  const rawOffset = timeZoneName.replace("GMT", "");
  if (!rawOffset) return "+00:00";

  const match = rawOffset.match(/^([+-])(\d{1,2})(?::?(\d{2}))?$/);
  if (!match) return rawOffset;

  const [, sign, hours, minutes = "00"] = match;
  return `${sign}${hours.padStart(2, "0")}:${minutes}`;
}

