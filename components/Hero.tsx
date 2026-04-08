import PromoCard from "./PromoCard";

const WA =
  "https://wa.me/56985660954?text=Hola%2C%20quiero%20agendar%20un%20diagn%C3%B3stico%20gratuito";

const stats = [
  { num: "+50", label: "Proyectos" },
  { num: "100%", label: "Satisfacción" },
  { num: "48h", label: "Entrega express" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[72px]"
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-110 blur-[5px]"
      >
        <source src="/video-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

      {/* Orbs */}
      <div className="absolute -top-52 -left-24 w-[600px] h-[600px] rounded-full bg-am-primary/15 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-16 w-[500px] h-[500px] rounded-full bg-am-accent/10 blur-[90px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── COPY ── */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-am-green animate-pulse-dot" />
            <span className="text-am-accent text-[13px] font-semibold tracking-wide">
              Ingenieros a tu servicio
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-white text-balance leading-[1.15] mb-6"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Si no tienes página web, estás{" "}
            <span className="gradient-text">perdiendo clientes</span>{" "}
            todos los días.
          </h1>

          <p className="text-am-muted text-lg leading-[1.75] mb-10 max-w-xl">
            Creamos sitios web, e-commerce y automatizaciones con IA para que
            tu empresa crezca — diseñados por{" "}
            <span className="text-am-text font-medium">Ingenieros Civiles</span>{" "}
            con visión tecnológica.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-am-primary hover:text-am-prim2 font-bold text-[15px] border-b border-am-primary/40 hover:border-am-prim2/60 pb-0.5 transition-all duration-200"
            >
              <WaIcon />
              Agendar Diagnóstico
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 text-am-muted hover:text-am-text font-semibold text-[15px] transition-all duration-200"
            >
              Ver Proyectos
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 sm:gap-8">
            {stats.map((s, i) => (
              <div key={s.num} className="flex items-center gap-4 sm:gap-8">
                <div className="text-center">
                  <span className="block font-display font-bold text-white text-3xl leading-none">
                    {s.num}
                  </span>
                  <span className="block text-am-muted text-xs uppercase tracking-widest mt-1.5">
                    {s.label}
                  </span>
                </div>
                {i < stats.length - 1 && (
                  <div className="h-10 w-px bg-white/8" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── PROMO CARD ── */}
        <div className="flex justify-center lg:justify-end">
          <PromoCard />
        </div>
      </div>

      {/* Section fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-am-muted text-[11px] uppercase tracking-[0.1em] animate-float pointer-events-none">
        <span>Nuestros Proyectos</span>
        <div className="w-4 h-4 border-r-2 border-b-2 border-am-muted rotate-45 -mt-1" />
      </div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
