"use client";

import { useEffect, useRef, useState } from "react";

const INTERVAL_MS = 7000;

// Pestañas del panel; las que tienen `slide` cambian de vista al hacer clic
const TABS: { label: string; slide?: number }[] = [
  { label: "Resumen General", slide: 0 },
  { label: "Administración", slide: 1 },
  { label: "Inventario General", slide: 2 },
  { label: "Flujo de Caja" },
  { label: "Proveedores" },
  { label: "Centros de Costo" },
];

const SLIDE_NAMES = ["Control de pagos y flujo de caja", "Administración de personal", "Inventario por bodega"];

// Mensaje del asistente IA (solo visual) según la vista activa
const AI_MESSAGES = [
  "La semana del 19/10 la caja no alcanza por $1.838.671. ¿Reprogramo 2 pagos a proveedores?",
  "El contrato de Diego Muñoz vence el 31/10. ¿Preparo el anexo de renovación?",
  "Quedan 3 cajas de discos de corte en Bodega 2. ¿Genero la orden de compra?",
];

/* Carrusel del hero con vistas de un software de gestión (cifras ficticias).
   Rota solo, se desliza con el dedo y se pausa al pasar el mouse. Sin gate de
   prefers-reduced-motion, igual que HeroReviewsRotator. */
export default function HeroPanels() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = SLIDE_NAMES.length;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused, count, index]);

  function onTouchEnd(e: React.TouchEvent) {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < 40) return;
    setIndex((i) => (dx < 0 ? (i + 1) % count : (i - 1 + count) % count));
  }

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carrusel"
      aria-label="Vistas de un software de gestión"
    >
      <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-[0_12px_36px_rgba(15,23,42,0.22)] bg-[#0b0b0d] text-white">
        {/* Pestañas */}
        <div className="flex gap-4 px-4 border-b border-white/10 overflow-hidden">
          {TABS.map((t) => {
            const active = t.slide === index;
            const cls = `shrink-0 whitespace-nowrap text-[11px] py-2.5 border-b-2 transition-colors ${
              active ? "text-[#ff4d4d] font-semibold border-[#ff4d4d]" : "text-white/60 border-transparent"
            }`;
            return t.slide !== undefined ? (
              <button key={t.label} type="button" onClick={() => setIndex(t.slide!)} className={`${cls} ${active ? "" : "hover:text-white"}`}>
                {t.label}
              </button>
            ) : (
              <span key={t.label} className={cls}>
                {t.label}
              </span>
            );
          })}
        </div>

        {/* Vistas */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            <div className="w-full shrink-0" aria-hidden={index !== 0}>
              <CashFlowView />
            </div>
            <div className="w-full shrink-0" aria-hidden={index !== 1}>
              <StaffView />
            </div>
            <div className="w-full shrink-0" aria-hidden={index !== 2}>
              <InventoryView />
            </div>
          </div>
        </div>

        {/* Asistente IA (solo visual) */}
        <div className="flex items-end gap-2.5 px-4 pb-4" aria-hidden="true">
          <span className="shrink-0 w-8 h-8 rounded-full bg-[#7c5cff] flex items-center justify-center shadow-[0_0_0_3px_rgba(124,92,255,0.25)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9L12 2zM19 14l.95 2.55L22.5 17.5l-2.55.95L19 21l-.95-2.55L15.5 17.5l2.55-.95L19 14z" />
            </svg>
          </span>
          <div className="flex-1 min-w-0 rounded-2xl rounded-bl-sm bg-white/[0.07] border border-white/10 px-3 py-2">
            <p className="text-[#b9a8ff] text-[9px] font-bold tracking-wider uppercase mb-0.5">Asistente IA</p>
            <p key={index} className="ai-msg-enter text-white/85 text-[11px] leading-snug">
              {AI_MESSAGES[index]}
            </p>
          </div>
        </div>
        <style>{`
          .ai-msg-enter { animation: ai-msg-in 0.4s ease; }
          @keyframes ai-msg-in {
            from { opacity: 0; transform: translateY(4px); }
            to   { opacity: 1; transform: none; }
          }
        `}</style>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-3">
        {SLIDE_NAMES.map((name, i) => (
          <button
            key={name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={name}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-slate-700" : "w-1.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* Vista 1: control de pagos y flujo de caja por semana */
function CashFlowView() {
  const weeks = [
    { range: "05/10 al 11/10", pagar: "3.337.091", ingreso: "4.958.586", caja: "1.621.495", ok: true },
    { range: "12/10 al 18/10", pagar: "2.706.240", ingreso: "3.365.117", caja: "658.877", ok: true, current: true },
    { range: "19/10 al 25/10", pagar: "4.238.671", ingreso: "2.400.000", caja: "-1.838.671", ok: false },
  ];

  return (
    <div className="p-4">
      <ViewHeader title="OCTUBRE 2026" action="Registrar pago" />

      <div className="grid grid-cols-3 border border-white/10 rounded-lg overflow-hidden mb-4">
        {weeks.map((w, i) => (
          <div
            key={w.range}
            className={`p-2.5 ${i > 0 ? "border-l border-white/10" : ""} ${w.current ? "bg-white/[0.06]" : ""}`}
          >
            {w.current && (
              <span className="inline-block bg-white text-black text-[8px] font-bold tracking-wider px-1 mb-1">
                ESTA SEMANA
              </span>
            )}
            <p className="text-white/60 text-[10px]">{w.range}</p>
            <p className="font-mono text-[12px] sm:text-[13px] mb-1.5">{w.pagar}</p>
            <div className="flex justify-between text-[9px] text-white/50">
              <span>Ingreso</span>
              <span className="font-mono">{w.ingreso}</span>
            </div>
            <div className="flex justify-between text-[9px] font-semibold border-t border-dashed border-white/15 mt-1 pt-1">
              <span>Queda en caja</span>
              <span className="font-mono">{w.caja}</span>
            </div>
            <StatusDot ok={w.ok} label={w.ok ? "Alcanza" : "No alcanza"} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Kpi label="A pagar esta semana" value="$ 2.706.240" sub="8 compromisos" bar="border-l-[#ff4d4d]" />
        <Kpi label="Vencido sin pagar" value="$ 1.190.689" sub="3 cuotas" bar="border-l-[#ff4d4d]" tone="text-[#ff4d4d]" />
        <Kpi label="Disponible hoy" value="$ 3.586.268" sub="12 ingresos" bar="border-l-[#3ddc84]" />
      </div>
    </div>
  );
}

/* Vista 2: personal, contratos, remuneraciones y cotizaciones */
function StaffView() {
  const staff = [
    { name: "Camila Rojas", contract: "Indefinido", net: "1.250.000", status: "Pagado", tone: "ok" },
    { name: "Diego Muñoz", contract: "Plazo fijo · 31/10", net: "780.000", status: "Por vencer", tone: "warn" },
    { name: "Fernanda Soto", contract: "Indefinido", net: "960.000", status: "Pagado", tone: "ok" },
    { name: "Matías Pérez", contract: "Plazo fijo · 15/11", net: "720.000", status: "Pendiente", tone: "bad" },
  ] as const;

  const toneCls = { ok: "text-[#3ddc84]", warn: "text-[#ffb547]", bad: "text-[#ff4d4d]" };
  const dotCls = { ok: "bg-[#3ddc84]", warn: "bg-[#ffb547]", bad: "bg-[#ff4d4d]" };
  // Filas de una sola línea para que la vista mida lo mismo que las otras
  const cols = "grid grid-cols-[1.2fr_1.1fr_0.9fr_0.9fr] gap-2 items-center px-2.5";

  return (
    <div className="p-4">
      <ViewHeader title="PERSONAL" action="Registrar trabajador" />

      <div className="grid grid-cols-3 gap-2 mb-4">
        <Kpi label="Trabajadores activos" value="18" sub="2 a plazo fijo" bar="border-l-white/40" />
        <Kpi label="Remuneraciones del mes" value="$ 14.850.000" sub="16 de 18 pagadas" bar="border-l-[#3ddc84]" />
        <Kpi label="Cotizaciones previsionales" value="$ 2.970.000" sub="AFP · Salud · AFC" bar="border-l-[#ffb547]" />
      </div>

      <div className="border border-white/10 rounded-lg overflow-hidden">
        <div className={`${cols} py-1.5 bg-white/[0.04] text-white/50 text-[9px] uppercase tracking-wider`}>
          <span>Trabajador</span>
          <span>Contrato</span>
          <span className="text-right">Líquido</span>
          <span className="text-right">Estado</span>
        </div>
        {staff.map((p) => (
          <div key={p.name} className={`${cols} py-1.5 border-t border-white/10`}>
            <span className="text-[10px] font-semibold truncate">{p.name}</span>
            <span className={`text-[10px] truncate ${p.tone === "warn" ? toneCls.warn : "text-white/70"}`}>{p.contract}</span>
            <span className="font-mono text-[10px] text-right">{p.net}</span>
            <span className={`text-[9px] inline-flex items-center justify-end gap-1 whitespace-nowrap ${toneCls[p.tone]}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${dotCls[p.tone]}`} />
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Vista 3: inventario general (maquinaria y herramientas) separado por bodega */
function InventoryView() {
  const warehouses = [
    {
      name: "Bodega 1",
      items: [
        { product: "Generador 5 kVA", qty: 3, unit: "un." },
        { product: "Compresor 100 L", qty: 2, unit: "un." },
        { product: "Soldadora inverter", qty: 4, unit: "un." },
        { product: "Hidrolavadora", qty: 1, unit: "un.", low: true },
      ],
    },
    {
      name: "Bodega 2",
      items: [
        { product: "Taladro percutor", qty: 12, unit: "un." },
        { product: "Esmeril 4½\"", qty: 9, unit: "un." },
        { product: "Sierra circular", qty: 5, unit: "un." },
        { product: "Discos de corte", qty: 3, unit: "cajas", low: true },
      ],
    },
  ];

  return (
    <div className="p-4">
      <ViewHeader title="INVENTARIO GENERAL" action="Registrar ingreso" />

      <div className="grid grid-cols-3 gap-2 mb-4">
        <Kpi label="Equipos y herramientas" value="86" sub="en 2 bodegas" bar="border-l-white/40" />
        <Kpi label="Valor del inventario" value="$ 48.600.000" sub="a costo" bar="border-l-[#3ddc84]" />
        <Kpi label="Bajo stock mínimo" value="2" sub="reponer esta semana" bar="border-l-[#ffb547]" tone="text-[#ffb547]" />
      </div>

      <div className="grid grid-cols-2 gap-2">
        {warehouses.map((w) => (
          <div key={w.name} className="border border-white/10 rounded-lg overflow-hidden">
            <div className="flex justify-between items-center px-2.5 py-1.5 bg-white/[0.04]">
              <span className="text-[11px] font-semibold">{w.name}</span>
              <span className="text-white/45 text-[9px]">{w.items.length} ítems</span>
            </div>
            {w.items.map((it) => (
              <div
                key={it.product}
                className="flex justify-between items-center gap-2 px-2.5 py-1.5 border-t border-white/10"
              >
                <span className="text-[10px] text-white/80 truncate">{it.product}</span>
                <span className={`shrink-0 font-mono text-[10px] ${it.low ? "text-[#ffb547]" : ""}`}>
                  {it.qty} <span className="text-white/45">{it.unit}</span>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Título de la vista + botón de acción (solo visual, no hace nada) */
function ViewHeader({ title, action }: { title: string; action: string }) {
  return (
    <div className="flex items-center justify-between gap-3 mb-3">
      <p className="font-display font-bold text-[15px] tracking-wide truncate">{title}</p>
      <span
        aria-hidden="true"
        className="shrink-0 inline-flex items-center gap-1 rounded-md bg-[#ff4d4d] text-white text-[10px] sm:text-[11px] font-semibold px-2.5 py-1.5"
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
        {action}
      </span>
    </div>
  );
}

function Kpi({
  label,
  value,
  sub,
  bar,
  tone = "text-white",
}: {
  label: string;
  value: string;
  sub: string;
  bar: string;
  tone?: string;
}) {
  return (
    <div className={`border border-white/10 border-l-2 ${bar} rounded-md px-2.5 py-2`}>
      <p className="text-white/60 text-[9px] leading-tight">{label}</p>
      <p className={`font-mono font-semibold whitespace-nowrap text-[11px] sm:text-[14px] mt-1 ${tone}`}>{value}</p>
      <p className="text-white/45 text-[9px] mt-0.5">{sub}</p>
    </div>
  );
}

function StatusDot({ ok, label }: { ok: boolean; label: string }) {
  return (
    <p className={`text-[10px] mt-1 flex items-center gap-1 ${ok ? "text-[#3ddc84]" : "text-[#ff4d4d]"}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${ok ? "bg-[#3ddc84]" : "bg-[#ff4d4d]"}`} />
      {label}
    </p>
  );
}
