"use client";

// Interceptor central de todos los links a WhatsApp del sitio. Dos flujos:
// - "floating": el botón flotante de WhatsApp (data-floating) — único link
//   que termina abriendo wa.me. Pide nombre+fono primero (registro
//   silencioso, ver TODO sheet), sigue con las preguntas de precalificación
//   y abre WhatsApp al final con el mensaje compuesto.
// - "lead": el resto de los CTAs del sitio. Formulario de una sola pantalla
//   (nombre, fono, servicio, tiene página web) que dispara la conversión de
//   Google Ads y cierra con "te contactamos", sin abrir WhatsApp.

import { useEffect, useState } from "react";

const ATTRIBUTION_KEY = "am_attribution";
// Valor por defecto = oferta base del sitio ($199.990). Los CTAs de ofertas
// distintas lo sobreescriben con data-cta-value (ej: LP de Ads = 299990).
const DEFAULT_CONVERSION_VALUE = 199990;
const CONVERSION_SEND_TO = "AW-18068672063/OeknCObymdMcEL-c6KdD";
const WA_PHONE = "56985660954";
const SHEET_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzL-Ub_JIchX7l-yrHoKFcznn_tBhS6-Ak2k4vUVqPKnQV41VherHQDLt5ZcR5OUaP2/exec";

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
type Kind = "floating" | "lead";

const SERVICE_OPTIONS: Record<Flow, { label: string; value: number }> = {
  seo: { label: "Landing + SEO", value: 199990 },
  ads: { label: "Landing + Campaña Ads", value: 299990 },
};

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
  kind: Kind;
  flow: Flow;
  ctaSource: string;
  value: number;
  originalText: string;
}

// Mensajes ya compuestos en esta visita (solo en memoria: una recarga de
// página limpia el estado y el modal vuelve a mostrarse).
const savedMessages: Partial<Record<Flow, string>> = {};
// Nombre+fono ya capturados en esta visita para el flujo del botón flotante:
// no se vuelve a pedir si el visitante reabre el modal.
let floatingContactSaved = false;

export default function GoogleAdsEvents() {
  const [pending, setPending] = useState<PendingCta | null>(null);

  // Flujo "floating": paso de contacto + preguntas de precalificación
  const [contactDone, setContactDone] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactError, setContactError] = useState("");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<FlowOption[]>([]);
  const [ready, setReady] = useState<string | null>(null);

  // Flujo "lead": formulario de una sola pantalla
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadService, setLeadService] = useState<Flow>("seo");
  const [leadHasWebsite, setLeadHasWebsite] = useState<"si" | "no" | null>(null);
  const [leadError, setLeadError] = useState("");
  const [leadDone, setLeadDone] = useState(false);

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
      const kind: Kind = link.dataset.floating !== undefined ? "floating" : "lead";
      let originalText = FLOWS[flow].greeting;
      try {
        originalText = new URL(link.href).searchParams.get("text") ?? originalText;
      } catch {
        // href inválido: seguimos con el saludo del flujo
      }

      e.preventDefault();

      if (kind === "floating") {
        const saved = savedMessages[flow] ?? null;
        window.gtag?.("event", saved ? "modal_reopen_ready" : "modal_open", {
          flow,
          cta_source: ctaSource,
          kind,
        });
        setContactDone(floatingContactSaved);
        setContactName("");
        setContactPhone("");
        setContactError("");
        setStep(0);
        setAnswers([]);
        setReady(saved);
        setPending({ kind, flow, ctaSource, value, originalText });
        return;
      }

      window.gtag?.("event", "modal_open", { flow, cta_source: ctaSource, kind });
      setLeadName("");
      setLeadPhone("");
      setLeadService(flow);
      setLeadHasWebsite(null);
      setLeadError("");
      setLeadDone(false);
      setPending({ kind, flow, ctaSource, value, originalText });
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
    window.gtag?.("event", "modal_close", { kind: pending.kind, flow: pending.flow, step: step + 1 });
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

  function submitContact(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!contactName.trim() || contactPhone.length < 8) {
      setContactError("Ingresa tu nombre y celular.");
      return;
    }
    if (!pending) return;
    setContactError("");
    floatingContactSaved = true;
    window.gtag?.("event", "floating_contact_saved", { cta_source: pending.ctaSource });

    fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        origen: "floating_contact",
        nombre: contactName,
        fono: contactPhone,
        gclid: getClickId(getAttribution()) ?? "",
      }),
    }).catch(() => {});

    setContactDone(true);
  }

  function submitLead(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!leadName.trim()) {
      setLeadError("Ingresa tu nombre.");
      return;
    }
    if (leadPhone.length < 8) {
      setLeadError("Ingresa un número válido.");
      return;
    }
    if (!leadHasWebsite) {
      setLeadError("Selecciona si tienes página web.");
      return;
    }
    if (!pending) return;
    setLeadError("");

    const value = SERVICE_OPTIONS[leadService].value;

    // Conversiones avanzadas: el teléfono que dejó el lead, hasheado por la
    // etiqueta de Google antes de enviarse (formato E.164 requerido).
    window.gtag?.("set", "user_data", { phone_number: `+569${leadPhone}` });
    window.gtag?.("event", "conversion", {
      send_to: CONVERSION_SEND_TO,
      value,
      currency: "CLP",
      cta_source: pending.ctaSource,
    });
    window.gtag?.("event", "generate_lead", {
      value,
      currency: "CLP",
      conversion_name: "lead_modal_contactar_ahora",
    });

    fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        origen: "lead_modal",
        nombre: leadName,
        fono: leadPhone,
        servicio: SERVICE_OPTIONS[leadService].label,
        tiene_pagina: leadHasWebsite,
        gclid: getClickId(getAttribution()) ?? "",
      }),
    }).catch(() => {});

    setLeadDone(true);
  }

  if (!pending) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-4"
      role="dialog"
      aria-modal="true"
      aria-label="Cuéntanos de tu negocio"
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
        <button
          onClick={closeModal}
          aria-label="Cerrar"
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-lg text-am-muted hover:text-white hover:bg-white/5 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {pending.kind === "floating" ? (
          !contactDone ? (
            <FloatingContactStep
              name={contactName}
              phone={contactPhone}
              error={contactError}
              onName={setContactName}
              onPhone={setContactPhone}
              onSubmit={submitContact}
            />
          ) : (
            <FloatingQuestions
              flow={pending.flow}
              step={step}
              ready={ready}
              onSelect={selectOption}
              onSkip={skipModal}
              onConfirmReady={confirmReady}
              onRestart={restartQuestions}
            />
          )
        ) : leadDone ? (
          <LeadDone />
        ) : (
          <LeadForm
            name={leadName}
            phone={leadPhone}
            service={leadService}
            hasWebsite={leadHasWebsite}
            error={leadError}
            onName={setLeadName}
            onPhone={setLeadPhone}
            onService={setLeadService}
            onHasWebsite={setLeadHasWebsite}
            onSubmit={submitLead}
          />
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── subcomponentes de UI ───────────────────────── */

function FloatingContactStep({
  name,
  phone,
  error,
  onName,
  onPhone,
  onSubmit,
}: {
  name: string;
  phone: string;
  error: string;
  onName: (v: string) => void;
  onPhone: (v: string) => void;
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit}>
      <h3 className="font-display font-bold text-white text-[18px] leading-snug mb-4 pr-8">
        Antes de escribirnos, ¿cómo te contactamos?
      </h3>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => onName(e.target.value)}
          placeholder="Tu nombre"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[15px] placeholder-white/25 focus:outline-none focus:border-am-primary/50 focus:bg-white/8 transition-all duration-200"
        />
        <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:border-am-primary/50 focus-within:bg-white/8 transition-all duration-200">
          <span className="px-4 py-3 text-white/50 text-[15px] font-mono select-none shrink-0 border-r border-white/10">
            +569
          </span>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="off"
            required
            value={phone}
            onChange={(e) => onPhone(e.target.value.replace(/\D/g, "").slice(0, 8))}
            placeholder="8566 0954"
            maxLength={8}
            className="flex-1 bg-transparent px-4 py-3 text-white text-[15px] placeholder-white/25 focus:outline-none"
          />
        </div>
      </div>

      {error && <p className="text-center text-sm text-red-300 mt-3">{error}</p>}

      <button
        type="submit"
        className="w-full mt-4 py-3.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold text-[15px] transition-colors duration-200"
      >
        Continuar →
      </button>
    </form>
  );
}

function FloatingQuestions({
  flow,
  step,
  ready,
  onSelect,
  onSkip,
  onConfirmReady,
  onRestart,
}: {
  flow: Flow;
  step: number;
  ready: string | null;
  onSelect: (opt: FlowOption) => void;
  onSkip: () => void;
  onConfirmReady: () => void;
  onRestart: () => void;
}) {
  const flowDef = FLOWS[flow];
  const current = flowDef.steps[step];
  const isLast = step === flowDef.steps.length - 1;

  return (
    <>
      <div className="flex items-center justify-between mb-5 pr-8">
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
            onClick={onConfirmReady}
            className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-[15px] px-4 py-3 rounded-xl transition-colors duration-200"
          >
            Abrir WhatsApp →
          </button>
          <button
            onClick={onRestart}
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
                onClick={() => onSelect(opt)}
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
            onClick={onSkip}
            className="mt-4 text-am-muted/70 hover:text-white text-[12.5px] underline underline-offset-2 transition-colors"
          >
            Prefiero escribir directo →
          </button>
        </>
      )}
    </>
  );
}

function LeadForm({
  name,
  phone,
  service,
  hasWebsite,
  error,
  onName,
  onPhone,
  onService,
  onHasWebsite,
  onSubmit,
}: {
  name: string;
  phone: string;
  service: Flow;
  hasWebsite: "si" | "no" | null;
  error: string;
  onName: (v: string) => void;
  onPhone: (v: string) => void;
  onService: (v: Flow) => void;
  onHasWebsite: (v: "si" | "no") => void;
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="pr-8">
        <h3 className="font-display font-bold text-white text-[18px] leading-snug mb-1">
          Cuéntanos qué necesitas
        </h3>
        <p className="text-am-muted text-[13px]">Te contactamos en menos de 1 hora.</p>
      </div>

      <div>
        <label className="block text-white/70 text-[13px] font-semibold mb-2">Nombre</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => onName(e.target.value)}
          placeholder="Tu nombre"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[15px] placeholder-white/25 focus:outline-none focus:border-am-primary/50 focus:bg-white/8 transition-all duration-200"
        />
      </div>

      <div>
        <label className="block text-white/70 text-[13px] font-semibold mb-2">WhatsApp de contacto</label>
        <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:border-am-primary/50 focus-within:bg-white/8 transition-all duration-200">
          <span className="px-4 py-3 text-white/50 text-[15px] font-mono select-none shrink-0 border-r border-white/10">
            +569
          </span>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="off"
            required
            value={phone}
            onChange={(e) => onPhone(e.target.value.replace(/\D/g, "").slice(0, 8))}
            placeholder="8566 0954"
            maxLength={8}
            className="flex-1 bg-transparent px-4 py-3 text-white text-[15px] placeholder-white/25 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-white/70 text-[13px] font-semibold mb-2">¿Qué servicio necesitas?</label>
        <select
          value={service}
          onChange={(e) => onService(e.target.value as Flow)}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[15px] focus:outline-none focus:border-am-primary/50 focus:bg-white/8 transition-all duration-200 appearance-none"
        >
          {(Object.keys(SERVICE_OPTIONS) as Flow[]).map((key) => (
            <option key={key} value={key} className="bg-am-surf2 text-white">
              {SERVICE_OPTIONS[key].label} — ${SERVICE_OPTIONS[key].value.toLocaleString("es-CL")}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-white/70 text-[13px] font-semibold mb-2">¿Tienes página web?</label>
        <div className="flex gap-3">
          {(["si", "no"] as const).map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => onHasWebsite(val)}
              className={`flex-1 py-3 rounded-xl border text-[15px] font-semibold transition-all duration-200 ${
                hasWebsite === val
                  ? "border-am-primary bg-am-primary text-white"
                  : "border-white/10 bg-white/5 text-white/50 hover:border-white/25 hover:text-white/80"
              }`}
            >
              {val === "si" ? "Sí" : "No"}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-center text-sm text-red-300">{error}</p>}

      <button
        type="submit"
        className="w-full mt-1 py-4 rounded-xl bg-am-green hover:bg-[#25c068] text-white font-bold text-[16px] shadow-[0_4px_24px_rgba(42,170,110,0.4)] hover:shadow-[0_6px_32px_rgba(42,170,110,0.55)] hover:-translate-y-0.5 transition-all duration-200"
      >
        Contactar Ahora
      </button>
    </form>
  );
}

function LeadDone() {
  return (
    <div className="text-center py-6">
      <p className="text-am-green font-bold text-xl mb-2">¡Recibido!</p>
      <p className="text-white/60 text-sm">Te contactaremos en menos de 1 hora.</p>
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

// gclid = clic estándar; gbraid/wbraid = iOS. Valor crudo (sin prefijo) para
// la columna "gclid" del Sheet.
function getClickId(attribution: Attribution): string | null {
  return attribution.gclid || attribution.gbraid || attribution.wbraid || null;
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
