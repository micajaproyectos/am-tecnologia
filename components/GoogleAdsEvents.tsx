"use client";

// Funnel de WhatsApp: captura de atribución (gclid/UTM), modal de
// precalificación con micro-compromisos, composición del mensaje en primera
// persona y disparo de conversiones de Google Ads en el momento real de
// salida a WhatsApp (no en el clic curioso).

import { useEffect, useState } from "react";

const ATTRIBUTION_KEY = "am_attribution";
// Valor por defecto = oferta base del sitio ($199.990). Los CTAs de ofertas
// distintas lo sobreescriben con data-cta-value (ej: LP de Ads = 299990).
const DEFAULT_CONVERSION_VALUE = 199990;
const CONVERSION_SEND_TO = "AW-18068672063/_M70CObOn6IcEL-c6KdD";
const WA_PHONE = "56985660954";

const TRACKING_PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Attribution = Partial<Record<(typeof TRACKING_PARAMS)[number], string>> & {
  landing_url?: string;
  captured_at?: string;
};

type Flow = "seo" | "ads";

interface FlowOption {
  label: string; // lo que ve en el chip
  text?: string; // afirmación en primera persona que va como frase propia del mensaje
  greeting?: string; // si existe, reemplaza el saludo: la respuesta se funde en la apertura
  closing?: string; // si existe, cierra el mensaje (timing + pregunta en una sola frase)
}

interface FlowStep {
  question: string;
  options: FlowOption[];
}

const NEGOCIO_STEP: FlowStep = {
  question: "¿En qué está tu negocio hoy?",
  options: [
    { label: "Ya vendo, quiero más clientes", text: "Ya vendo y quiero más clientes" },
    { label: "Estoy empezando", text: "Estoy empezando mi negocio" },
  ],
};

const FLOWS: Record<Flow, { greeting: string; closing: string; steps: FlowStep[] }> = {
  seo: {
    greeting: "Hola, quiero contratar mi página web con posicionamiento.",
    closing: "¿Cuál es el siguiente paso?",
    steps: [
      NEGOCIO_STEP,
      {
        question: "¿Qué necesitas?",
        options: [
          {
            label: "Página web nueva",
            greeting: "Hola, quiero contratar una página web nueva con posicionamiento.",
          },
          {
            label: "Mejorar la que tengo",
            greeting: "Hola, quiero contratar la mejora de mi página web con posicionamiento.",
          },
        ],
      },
      {
        question: "¿Cuándo quieres partir?",
        options: [
          {
            label: "Lo antes posible",
            closing: "¿Podemos partir esta semana?",
          },
          {
            label: "Este mes",
            closing: "Quiero partir este mes, ¿cuál es el siguiente paso?",
          },
          {
            label: "Aún estoy evaluando",
            closing: "Antes de partir, ¿me detallan qué incluye?",
          },
        ],
      },
    ],
  },
  ads: {
    greeting: "Hola, quiero contratar la campaña de Google Ads + landing.",
    closing: "¿Cuál es el siguiente paso?",
    steps: [
      NEGOCIO_STEP,
      {
        question: "¿Tienes una página o landing hoy?",
        options: [
          { label: "Sí, ya tengo", text: "Ya tengo una página web" },
          { label: "No, parto de cero", text: "Aún no tengo página" },
        ],
      },
      {
        question: "¿Cuándo quieres lanzar tu primera campaña?",
        options: [
          {
            label: "Esta semana",
            closing: "¿Podemos lanzar esta semana?",
          },
          {
            label: "Este mes",
            closing: "Quiero lanzar este mes, ¿cuál es el siguiente paso?",
          },
          {
            label: "Aún estoy evaluando",
            closing: "Antes de lanzar, ¿me detallan qué incluye?",
          },
        ],
      },
    ],
  },
};

interface PendingCta {
  flow: Flow;
  ctaSource: string;
  value: number;
  originalText: string;
}

// Mensajes ya compuestos en esta visita (solo en memoria: una recarga de
// página limpia el estado y el modal vuelve a mostrarse).
const savedMessages: Partial<Record<Flow, string>> = {};

export default function GoogleAdsEvents() {
  const [pending, setPending] = useState<PendingCta | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<FlowOption[]>([]);
  // Mensaje ya compuesto en esta visita → pantalla "listo" en vez de preguntas
  const [ready, setReady] = useState<string | null>(null);

  useEffect(() => {
    captureAttribution();

    function handleClick(e: MouseEvent) {
      const link = (e.target as Element).closest("a");
      if (!link?.href) return;
      if (!link.href.includes("wa.me") && !link.href.includes("api.whatsapp.com")) return;
      // Anchor sintético de openWhatsApp: dejarlo navegar sin interceptar
      if (link.dataset.waBypass !== undefined) return;

      const ctaSource = link.dataset.ctaSource ?? "unknown";
      const value = Number(link.dataset.ctaValue) || DEFAULT_CONVERSION_VALUE;
      const flow: Flow = link.dataset.offer === "ads" ? "ads" : "seo";
      let originalText = FLOWS[flow].greeting;
      try {
        originalText = new URL(link.href).searchParams.get("text") ?? originalText;
      } catch {
        // href inválido: seguimos con el saludo del flujo
      }

      e.preventDefault();

      // Contacto directo sin precalificación (ej: ícono del footer)
      if (link.dataset.noModal !== undefined) {
        openWhatsApp(originalText, ctaSource, value);
        return;
      }

      // Si ya respondió en esta visita, mostramos su mensaje listo para
      // confirmar (nunca redirigir en silencio: es confuso y esconde errores).
      const saved = savedMessages[flow] ?? null;
      window.gtag?.("event", saved ? "modal_reopen_ready" : "modal_open", {
        flow,
        cta_source: ctaSource,
      });
      setStep(0);
      setAnswers([]);
      setReady(saved);
      setPending({ flow, ctaSource, value, originalText });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Scroll bloqueado y cierre con Escape mientras el modal está abierto
  useEffect(() => {
    if (!pending) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pending]);

  function closeModal() {
    if (!pending) return;
    window.gtag?.("event", "modal_close", { flow: pending.flow, step: step + 1 });
    setPending(null);
  }

  function skipModal() {
    if (!pending) return;
    window.gtag?.("event", "modal_skip", { flow: pending.flow, step: step + 1 });
    openWhatsApp(pending.originalText, pending.ctaSource, pending.value);
    setPending(null);
  }

  function selectOption(opt: FlowOption) {
    if (!pending) return;
    const flowDef = FLOWS[pending.flow];
    window.gtag?.("event", "modal_step", {
      flow: pending.flow,
      step: step + 1,
      answer: opt.label,
    });

    const nextAnswers = [...answers, opt];
    if (step + 1 < flowDef.steps.length) {
      setAnswers(nextAnswers);
      setStep(step + 1);
      return;
    }

    // Último paso: cada dato aparece una sola vez — la necesidad se funde en
    // el saludo, el contexto va como frase propia y el timing cierra con la
    // pregunta en una sola frase.
    const greeting = nextAnswers.find((o) => o.greeting)?.greeting ?? flowDef.greeting;
    const closing = opt.closing ?? flowDef.closing;
    const message = [
      greeting,
      ...nextAnswers.filter((o) => o.text).map((o) => `${o.text}.`),
      closing,
    ].join(" ");
    savedMessages[pending.flow] = message;
    window.gtag?.("event", "modal_complete", { flow: pending.flow, cta_source: pending.ctaSource });
    openWhatsApp(message, pending.ctaSource, pending.value);
    setPending(null);
  }

  function confirmReady() {
    if (!pending || !ready) return;
    window.gtag?.("event", "modal_ready_open", { flow: pending.flow, cta_source: pending.ctaSource });
    openWhatsApp(ready, pending.ctaSource, pending.value);
    setPending(null);
  }

  function restartQuestions() {
    if (!pending) return;
    delete savedMessages[pending.flow];
    window.gtag?.("event", "modal_restart", { flow: pending.flow });
    setReady(null);
    setStep(0);
    setAnswers([]);
  }

  if (!pending) return null;

  const flowDef = FLOWS[pending.flow];
  const current = flowDef.steps[step];
  const isLast = step === flowDef.steps.length - 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-4"
      role="dialog"
      aria-modal="true"
      aria-label="Cuéntanos de tu negocio antes de ir a WhatsApp"
    >
      <style>{`
        @keyframes am-modal-in {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Card */}
      <div
        className="relative w-full max-w-sm bg-am-surf2 border border-white/10 rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        style={{ animation: "am-modal-in 0.22s ease-out" }}
      >
        {/* Progreso + cerrar */}
        <div className="flex items-center justify-between mb-5">
          {ready ? (
            <span className="text-am-green text-[12px] font-bold tracking-wide">
              ✓ Mensaje listo
            </span>
          ) : (
            <div className="flex items-center gap-1.5">
              {flowDef.steps.map((s, i) => (
                <span
                  key={s.question}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i <= step ? "w-6 bg-am-primary" : "w-3 bg-white/15"
                  }`}
                />
              ))}
              <span className="text-am-muted text-[11px] font-semibold ml-2">
                {step + 1} de {flowDef.steps.length}
              </span>
            </div>
          )}
          <button
            onClick={closeModal}
            aria-label="Cerrar"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-am-muted hover:text-white hover:bg-white/5 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {ready ? (
          <>
            <h3 className="font-display font-bold text-white text-[18px] leading-snug mb-3">
              Tu mensaje está listo
            </h3>
            <p className="bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-am-muted text-[13px] leading-relaxed mb-4 whitespace-pre-line">
              {ready}
            </p>
            <button
              onClick={confirmReady}
              className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-[15px] px-4 py-3 rounded-xl transition-colors duration-200"
            >
              Abrir WhatsApp →
            </button>
            <button
              onClick={restartQuestions}
              className="mt-3 w-full text-am-muted/70 hover:text-white text-[12.5px] underline underline-offset-2 transition-colors"
            >
              Responder de nuevo
            </button>
          </>
        ) : (
          <>
            <h3 className="font-display font-bold text-white text-[18px] leading-snug mb-4">
              {current.question}
            </h3>

            <div className="flex flex-col gap-2.5">
              {current.options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => selectOption(opt)}
                  className="w-full text-left px-4 py-3.5 rounded-xl border border-white/10 bg-white/4 text-am-text text-[14.5px] font-semibold hover:border-am-primary/50 hover:bg-am-primary/10 active:scale-[0.98] transition-all duration-150"
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {isLast && (
              <p className="text-am-muted/70 text-[11.5px] mt-3">
                Al elegir, se abre WhatsApp con tu mensaje listo ✓
              </p>
            )}

            <button
              onClick={skipModal}
              className="mt-4 text-am-muted/70 hover:text-white text-[12.5px] underline underline-offset-2 transition-colors"
            >
              Prefiero escribir directo →
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── helpers ───────────────────────── */

function openWhatsApp(text: string, ctaSource: string, value: number) {
  const attribution = getAttribution();

  // El click id completo es imprescindible para importar la conversión
  // offline en Google Ads. gclid = clic estándar; gbraid/wbraid = iOS.
  const clickId = attribution.gclid
    ? `gclid=${attribution.gclid}`
    : attribution.gbraid
      ? `gbraid=${attribution.gbraid}`
      : attribution.wbraid
        ? `wbraid=${attribution.wbraid}`
        : null;

  // Saludo y afirmaciones primero; la referencia queda como cola al final.
  // Visitante orgánico o directo: mensaje limpio, sin tracking.
  const fullText = clickId
    ? `${text}\n\nRef anuncio (no borrar): ${clickId} · ${formatConversionTime(new Date())}`
    : text;

  window.gtag?.("event", "conversion", {
    send_to: CONVERSION_SEND_TO,
    value,
    currency: "CLP",
    cta_source: ctaSource,
  });
  window.gtag?.("event", "whatsapp_click", {
    cta_source: ctaSource,
    value,
    currency: "CLP",
  });

  const url = new URL(`https://wa.me/${WA_PHONE}`);
  url.searchParams.set("text", fullText);

  // Anchor real con target _blank: es el mismo mecanismo de los enlaces
  // originales del sitio y no lo frenan los bloqueadores de pop-ups
  // (window.open con "noopener" sí era bloqueado o abría ventanas ocultas).
  const anchor = document.createElement("a");
  anchor.href = url.toString();
  anchor.target = "_blank";
  anchor.rel = "nofollow noopener noreferrer";
  anchor.dataset.waBypass = "";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

function captureAttribution() {
  const params = new URLSearchParams(window.location.search);
  const attribution: Attribution = {};

  for (const key of TRACKING_PARAMS) {
    const value = params.get(key);
    if (value) attribution[key] = value;
  }

  if (Object.keys(attribution).length === 0) return;

  attribution.landing_url = window.location.href;
  attribution.captured_at = new Date().toISOString();

  try {
    window.localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  } catch {
    // If storage is unavailable, WhatsApp still works with the default message.
  }
}

function getAttribution(): Attribution {
  try {
    const raw = window.localStorage.getItem(ATTRIBUTION_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

function formatConversionTime(date: Date) {
  const timezoneOffset = -date.getTimezoneOffset();
  const sign = timezoneOffset >= 0 ? "+" : "-";
  const absOffset = Math.abs(timezoneOffset);
  const offsetHours = pad(Math.floor(absOffset / 60));
  const offsetMinutes = pad(absOffset % 60);

  return [
    date.getFullYear(),
    "-",
    pad(date.getMonth() + 1),
    "-",
    pad(date.getDate()),
    " ",
    pad(date.getHours()),
    ":",
    pad(date.getMinutes()),
    ":",
    pad(date.getSeconds()),
    sign,
    offsetHours,
    ":",
    offsetMinutes,
  ].join("");
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}
