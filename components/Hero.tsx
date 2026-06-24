import Image from "next/image";
import TestimonialsCard from "./TestimonialsCard";

const WA =
  "https://wa.me/56985660954?text=Hola%2C%20quiero%20cotizar%20mi%20p%C3%A1gina%20web";

const bullets = [
  "Google te recomienda cuando buscan servicios como el tuyo.",
  "Haz que Google te envíe clientes directo a tu WhatsApp.",
  "Aparece antes que tu competencia.",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[72px]"
    >
      <Image
        src="/proyectos.png"
        alt="Muestra de proyectos web para empresas y pymes en Chile"
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="absolute inset-0 object-cover object-center pointer-events-none"
      />

      <div className="absolute inset-0 bg-black/75 pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

      <div className="absolute -top-52 -left-24 w-[600px] h-[600px] rounded-full bg-am-primary/15 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-16 w-[500px] h-[500px] rounded-full bg-am-accent/10 blur-[90px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── COPY ── */}
        <div>
          {/* Headline */}
          <h1
            className="font-display font-extrabold text-white text-balance leading-[1.15] mb-3"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            Contrata tu Página Web{" "}
            <span className="gradient-text">con SEO en Chile</span>
          </h1>

          {/* Sub */}
          <p className="text-am-muted text-xl leading-snug mb-3 max-w-lg">
            Posicionamiento en Google incluido desde el primer día.
          </p>

          <p className="text-am-muted text-base leading-relaxed mb-3 max-w-lg">
            Diseñamos y publicamos tu página web profesional, optimizada para posicionarte desde el primer día — sin publicidad pagada, sin mensualidades.
          </p>

          {/* Price */}
          <p className="font-display font-extrabold text-white text-3xl mb-4">
            $199.990
          </p>

          {/* Bullets */}
          <ul className="flex flex-col gap-2 mb-5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-am-text text-[15px]">
                <CheckIcon />
                {b}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href={WA}
              data-cta-source="hero"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold text-[15px] px-6 py-3 rounded-xl transition-colors duration-200"
            >
              <WaIcon />
              Cotizar mi proyecto
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-am-text hover:text-white font-semibold text-[15px] px-6 py-3 rounded-xl transition-all duration-200"
            >
              Ver proyectos
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-nowrap gap-2">
            <div className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2">
              <ShieldIcon />
              <span className="text-white text-[13px] font-semibold">100% Satisfacción</span>
            </div>
            <div className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2">
              <SearchIcon />
              <span className="text-white text-[13px] font-semibold">Posicionamiento orgánico</span>
            </div>
            <div className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2">
              <FolderIcon />
              <span className="text-white text-[13px] font-semibold">+50 proyectos en Google</span>
            </div>
          </div>
        </div>

        {/* ── TESTIMONIALS CARD ── */}
        <div className="flex justify-center lg:justify-end">
          <TestimonialsCard />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-am-muted text-[11px] uppercase tracking-[0.1em] animate-float pointer-events-none">
        <span>Desliza</span>
        <div className="w-4 h-4 border-r-2 border-b-2 border-am-muted rotate-45 -mt-1" />
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="12" fill="rgba(42,170,110,0.15)" />
      <path d="M7 12l3.5 3.5L17 8.5" stroke="#2aaa6e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" fill="rgba(42,170,110,0.25)" stroke="#2aaa6e" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="#2aaa6e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <circle cx="11" cy="11" r="7" stroke="#60a5fa" strokeWidth="1.8" />
      <path d="M16.5 16.5L21 21" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" fill="rgba(168,85,247,0.2)" stroke="#a855f7" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
