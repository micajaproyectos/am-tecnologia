import HeroReviewsRotator from "./HeroReviewsRotator";
import HeroShowcase from "./HeroShowcase";

const WA_SEO =
  "https://wa.me/56985660954?text=Hola%2C%20quiero%20contratar%20mi%20p%C3%A1gina%20web%20con%20posicionamiento";
const WA_ADS =
  "https://wa.me/56985660954?text=Hola%2C%20quiero%20contratar%20mi%20campa%C3%B1a%20de%20Google%20Ads%20%2B%20landing%20page";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex flex-col justify-center bg-white pt-[72px]"
    >
      <div className="relative max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── COPY ── */}
        <div>
          {/* Headline */}
          <h1
            className="font-display font-extrabold text-slate-800 text-balance leading-[1.12] mb-6"
            style={{ fontSize: "clamp(2.375rem, 5vw, 4rem)" }}
          >
            Atrae Más Clientes a tu Negocio
          </h1>

          {/* Bajada */}
          <p className="text-slate-600 text-[20px] leading-snug mb-8 max-w-lg">
            Aumenta la visibilidad de tu negocio y consigue más clientes.
          </p>


          {/* Doble oferta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 mb-4 max-w-xl divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {/* Orgánico */}
            <div className="flex flex-col pb-6 sm:pb-0 sm:pr-6">
              <span className="text-am-blue text-[11px] font-bold tracking-widest uppercase mb-1.5">
                Orgánico
              </span>
              <span className="font-display font-bold text-slate-900 text-[16px]">
                Página Web + SEO orgánico
              </span>
              <span className="font-display font-bold tracking-tight text-slate-900 text-[26px] leading-tight">
                $199.990
              </span>
              <span className="text-slate-600 text-[13px] leading-snug mt-1 mb-4">
                Resultados orgánicos, sin pagar por clic
              </span>
              <a
                href={WA_SEO}
                data-cta-source="hero_seo"
                data-cta-value="199990"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-[#17804a] hover:bg-[#12683c] text-white font-semibold text-[14px] px-4 py-2.5 rounded-lg transition-colors duration-200"
              >
                <WaIcon />
                Elegir
              </a>
            </div>

            {/* Inmediato */}
            <div className="flex flex-col pt-6 sm:pt-0 sm:pl-6">
              <span className="text-am-blue text-[11px] font-bold tracking-widest uppercase mb-1.5">
                Inmediato
              </span>
              <span className="font-display font-bold text-slate-900 text-[16px]">
                Landing + Google Ads
              </span>
              <span className="text-slate-400 text-[13px] leading-tight">
                Antes: <span className="line-through">$399.990</span>
              </span>
              <span className="font-display font-bold tracking-tight text-slate-900 text-[26px] leading-tight">
                <span className="text-[14px] font-semibold text-slate-500">Ahora:</span>{" "}
                $299.990
              </span>
              <span className="text-slate-600 text-[13px] leading-snug mt-1 mb-4">
                Tu primera campaña, clientes esta semana
              </span>
              <a
                href={WA_ADS}
                data-cta-source="hero_ads"
                data-cta-value="299990"
                data-offer="ads"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-[#17804a] hover:bg-[#12683c] text-white font-semibold text-[14px] px-4 py-2.5 rounded-lg transition-colors duration-200"
              >
                <WaIcon />
                Elegir
              </a>
            </div>
          </div>

          <p className="text-slate-500 text-[12px]">
            Negocios reales que encontraron nuevos clientes
          </p>
        </div>

        {/* ── PROYECTOS REALES ── */}
        <div className="flex flex-col items-center lg:items-end">
          <div className="relative w-full max-w-[560px] pt-10 sm:pt-16 select-none">
            {/* Vitrina rotativa de proyectos */}
            <HeroShowcase />
            {/* Reseñas de Google rotando bajo los mockups */}
            <div className="w-full mt-5">
              <HeroReviewsRotator />
            </div>
          </div>
        </div>
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

