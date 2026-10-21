import HeroPanels from "./HeroPanels";
import HeroReviewsRotator from "./HeroReviewsRotator";

const WA_SOFTWARE =
  "https://wa.me/56985660954?text=Hola%2C%20quiero%20cotizar%20un%20software%20para%20administrar%20mi%20empresa";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex flex-col justify-center bg-white pt-[72px]"
    >
      <div className="relative max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 items-center">
        {/* ── COPY ── */}
        <div>
          <h1
            className="font-display font-extrabold text-slate-800 text-balance leading-[1.12] mb-6"
            style={{ fontSize: "clamp(2.375rem, 5vw, 4rem)" }}
          >
            Tu empresa creció y tu Excel ya no alcanza
          </h1>

          <p className="text-slate-600 text-[20px] leading-snug mb-8 max-w-lg">
            Diseñamos tu software a medida para terminar con planillas que no cuadran y datos repartidos en distintas plataformas.
          </p>

          <a
            href={WA_SOFTWARE}
            data-cta-source="hero_software"
            data-service="software"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#17804a] hover:bg-[#12683c] text-white font-semibold text-[16px] px-7 py-3.5 rounded-lg transition-colors duration-200"
          >
            Cotizar mi software
          </a>
        </div>

        {/* ── VISUAL: herramientas sueltas → un solo sistema ── */}
        <div className="flex flex-col items-center lg:items-end">
          <div className="w-full max-w-[520px] lg:max-w-[680px] select-none">
            <ScatteredToSystem />
            {/* En desktop, alineado bajo el panel (deja libre la columna de herramientas) */}
            <div className="w-full mt-5 lg:pl-[152px]">
              <HeroReviewsRotator />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Herramientas sueltas (Excel, papel, Drive) que convergen en un solo sistema */
function ScatteredToSystem() {
  const sources = [
    // Fondo con el color de cada herramienta: verde Excel, papel crema, azul Drive
    { label: "Excel", icon: <SheetIcon />, color: "text-[#107c41]", box: "bg-[#e6f4ea] border-[#107c41]/40", text: "text-[#0b5a2f]" },
    { label: "Papel", icon: <PaperIcon />, color: "text-[#9a7b4f]", box: "bg-[#fbf3e2] border-[#c9a96e]/50", text: "text-[#6b5232]" },
    { label: "Drive", icon: <FolderIcon />, color: "text-[#1a73e8]", box: "bg-[#e8f0fe] border-[#1a73e8]/40", text: "text-[#174ea6]" },
  ];

  const chips = sources.map((s) => (
    <div
      key={s.label}
      className={`flex items-center justify-center gap-2 rounded-xl border border-dashed h-11 ${s.box}`}
    >
      <span className={s.color}>{s.icon}</span>
      <span className={`text-[14px] font-semibold ${s.text}`}>{s.label}</span>
    </div>
  ));

  // Una sola grilla: en móvil todo apilado (herramientas arriba, flechas hacia
  // abajo); en desktop herramientas a la izquierda con flechas hacia el panel.
  // Chips de 44px + gap 12px → centros en y = 22, 78, 134 del SVG lateral.
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[112px_40px_minmax(0,1fr)] items-center">
      <div className="grid grid-cols-3 gap-3 lg:flex lg:flex-col" aria-hidden="true">
        {chips}
      </div>

      <svg aria-hidden="true" viewBox="0 0 300 44" className="lg:hidden w-full h-11 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M50 2 C50 26 150 18 150 40" />
        <path d="M150 2 V40" />
        <path d="M250 2 C250 26 150 18 150 40" />
        <path d="M144 34 L150 41 L156 34" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 40 156" className="hidden lg:block w-10 h-[156px] text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 22 C22 22 18 78 38 78" />
        <path d="M2 78 H38" />
        <path d="M2 134 C22 134 18 78 38 78" />
        <path d="M32 72 L39 78 L32 84" />
      </svg>

      <HeroPanels />
    </div>
  );
}

function SheetIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18" />
    </svg>
  );
}

function PaperIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M8 13h8M8 17h5" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
    </svg>
  );
}
