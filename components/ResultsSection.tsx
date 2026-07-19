import Image from "next/image";

const WA_RESULTS =
  "https://wa.me/56985660954?text=Hola%2C%20quiero%20posicionar%20mi%20negocio%20en%20Google%20como%20sus%20casos%20reales";

const whatsappProofs = [
  {
    src: "/ajonegro_demanda/lista-espera.jpg",
    w: 640,
    h: 1096,
    alt: "Conversación real de WhatsApp: pedido agendado en lista de espera hasta que salga la próxima producción",
  },
  {
    src: "/ajonegro_demanda/felicitaciones-pedidos.jpg",
    w: 640,
    h: 1096,
    alt: "Conversación real de WhatsApp: cliente felicita a Ajo Negro Austral por el buen servicio y la respuesta",
  },
  {
    src: "/ajonegro_demanda/cliente-1.jpg",
    w: 640,
    h: 1096,
    alt: "Conversación real de WhatsApp: cliente cotizando ajo negro por kilo y en bolsitas",
  },
  {
    src: "/ajonegro_demanda/cliente-2.jpg",
    w: 638,
    h: 1098,
    alt: "Conversación real de WhatsApp: cliente de Santiago pidiendo 1.200 grs de ajo negro",
  },
  {
    src: "/ajonegro_demanda/cliente-3.jpg",
    w: 638,
    h: 1098,
    alt: "Conversación real de WhatsApp: cliente cotizando ajo negro al por mayor para comercio",
  },
  {
    src: "/ajonegro_demanda/cliente-4.jpg",
    w: 638,
    h: 1093,
    alt: "Conversación real de WhatsApp: cliente pidiendo valores mayoristas de 1 kg hacia arriba",
  },
  {
    src: "/ajonegro_demanda/cliente-5.jpg",
    w: 638,
    h: 1098,
    alt: "Conversación real de WhatsApp: clienta de Puerto Montt cotizando para su negocio",
  },
];

export default function ResultsSection() {
  return (
    <section id="resultados" className="metal-surface relative px-6 pt-24 pb-24">
      {/* Transición desde el hero blanco */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white via-white/40 to-transparent pointer-events-none z-10" />

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Encabezado */}
        <header className="text-center mb-14" data-reveal>
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-white/55 text-[11px] font-semibold tracking-widest uppercase mb-5">
            Evidencia, no promesas
          </span>
          <h2
            className="font-display font-bold text-white text-balance"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)" }}
          >
            Resultados Reales
          </h2>
          <p className="text-am-muted text-[16px] mt-3 max-w-2xl mx-auto">
            Casos con evidencia que puedes comprobar ahora mismo: abre Google,
            busca y míralo tú mismo.
          </p>
        </header>

        {/* ── CASO 1: AJO NEGRO AUSTRAL ── */}
        <article
          className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 mb-10"
          data-reveal
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-white/55 text-[11px] font-bold tracking-widest uppercase">
                Caso 1 · Nuestro propio negocio
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1.5 mb-3">
                <h3 className="font-display font-bold text-white text-[26px]">
                  Ajo Negro Austral
                  <sup className="text-[13px] font-semibold ml-0.5">®</sup>
                </h3>
                <VerifyPill query="ajo negro patagonia" />
              </div>
              <p className="text-am-muted text-[15px] leading-relaxed mb-6">
                Quisimos demostrar nuestro método con nuestro propio
                emprendimiento: ajo negro artesanal producido en la Patagonia.
                Cero pesos en publicidad — solo posicionamiento orgánico.
              </p>

              {/* Línea de tiempo */}
              <ol className="relative border-l-2 border-white/15 pl-5 space-y-4 mb-6">
                <li className="relative">
                  <span className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-[2px] bg-am-primary" />
                  <p className="text-white text-[14px] font-semibold">Junio</p>
                  <p className="text-am-muted text-[14px]">
                    Lanzamos el sitio y el perfil de Google.
                  </p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-[2px] bg-am-primary" />
                  <p className="text-white text-[14px] font-semibold">
                    Ese mismo mes
                  </p>
                  <p className="text-am-muted text-[14px]">
                    Primeras ventas con tráfico orgánico, sin ninguna promoción.
                  </p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-[2px] bg-am-primary" />
                  <p className="text-white text-[14px] font-semibold">
                    Un mes después
                  </p>
                  <p className="text-am-muted text-[14px]">
                    Compramos maquinaria para abastecer la demanda.
                  </p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[30px] top-0.5 w-[18px] h-[18px] rounded-full bg-white text-[#17804a] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <p className="text-white text-[14px] font-semibold">Hoy</p>
                  <p className="text-am-muted text-[14px]">
                    Lista de espera para la próxima producción y clientes
                    felicitando el servicio.
                  </p>
                </li>
              </ol>
            </div>

            <figure>
              <BrowserFrame>
                <Image
                  src="/ajonegro_demanda/busqueda_incognito.png"
                  alt='Búsqueda de Google en incógnito para "ajo negro patagonia": la IA de Google menciona a Ajo Negro Austral como productor local y su sitio es el primer resultado orgánico'
                  width={1751}
                  height={771}
                  sizes="(max-width: 1024px) 90vw, 540px"
                  className="w-full h-auto"
                />
              </BrowserFrame>
              <figcaption className="text-am-muted text-[13px] mt-3">
                La IA de Google lo recomienda como productor local y es el
                primer resultado orgánico.
              </figcaption>
            </figure>
          </div>

          {/* Cotizaciones por WhatsApp — marquesina continua */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-white text-[15px] font-semibold mb-1">
              Y las cotizaciones llegan solas por WhatsApp
            </p>
            <p className="text-am-muted text-[13px] mb-4">
              Ya tenemos lista de espera con pedidos agendados y clientes
              satisfechos que nos felicitan por el producto. Pedidos mayoristas
              desde Santiago hasta Puerto Montt. Conversaciones reales — datos
              de los clientes difuminados.
            </p>
            {/* Se duplica la lista para el loop sin corte */}
            <div
              className="overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
              }}
            >
              <div className="flex gap-3 w-max animate-marquee hover:[animation-play-state:paused]">
                {[...whatsappProofs, ...whatsappProofs].map((p, i) => (
                  <Image
                    key={`${p.src}-${i}`}
                    src={p.src}
                    alt={p.alt}
                    width={p.w}
                    height={p.h}
                    sizes="160px"
                    className="w-[150px] sm:w-[160px] h-auto shrink-0 rounded-xl ring-1 ring-white/10"
                  />
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* ── CASOS 2 Y 3 ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <article
            className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 flex flex-col"
            data-reveal
          >
            <span className="text-white/55 text-[11px] font-bold tracking-widest uppercase">
              Caso 2 · Visibilidad desde cero
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1.5 mb-3">
              <h3 className="font-display font-bold text-white text-[22px]">
                Futarte
              </h3>
              <VerifyPill query="regalos en futaleufú" />
            </div>
            <p className="text-am-muted text-[14px] leading-relaxed mb-5">
              Hacían souvenirs personalizados prácticamente sin visibilidad
              online. Creamos su landing y hoy son los primeros cuando alguien
              busca regalos en Futaleufú: primeros en el mapa y primer
              resultado orgánico, con su Instagram justo después.
            </p>
            <BrowserFrame>
              <Image
                src="/busqueda_futarte/busqueda_incognito.png"
                alt='Búsqueda de Google en incógnito para "regalos en futaleufu": Futarte aparece primero en el mapa de sitios y futarte.cl es el primer resultado orgánico'
                width={1751}
                height={868}
                sizes="(max-width: 1024px) 90vw, 500px"
                className="w-full h-auto"
              />
            </BrowserFrame>
          </article>

          <article
            className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 flex flex-col"
            data-reveal
            data-delay="120"
          >
            <span className="text-white/55 text-[11px] font-bold tracking-widest uppercase">
              Caso 3 · De invisible a primero
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1.5 mb-3">
              <h3 className="font-display font-bold text-white text-[22px]">
                Cabañas Río Espolón
              </h3>
              <VerifyPill query="cabañas en futaleufú" />
            </div>
            <p className="text-am-muted text-[14px] leading-relaxed mb-5">
              Sus cabañas rankeaban fuera del top 10. Actualizamos su perfil de
              Google y creamos una página enfocada en posicionamiento: hoy son
              las primeras en aparecer al buscar cabañas en Futaleufú, sobre
              competidores con años de presencia.
            </p>
            <BrowserFrame>
              <Image
                src="/busqueda_rioespolon/busqueda_incognito.png"
                alt='Búsqueda de Google en incógnito para "cabañas en futaleufu": Cabañas Río Espolón aparece en primer lugar del listado de alojamientos'
                width={1758}
                height={731}
                sizes="(max-width: 1024px) 90vw, 500px"
                className="w-full h-auto"
              />
            </BrowserFrame>
          </article>
        </div>

        {/* Cierre */}
        <div className="text-center" data-reveal>
          <p
            className="font-display font-bold text-white mb-5"
            style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)" }}
          >
            Tu negocio puede ser el siguiente
          </p>
          <a
            href={WA_RESULTS}
            data-cta-source="resultados_seo"
            data-cta-value="199990"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#17804a] hover:bg-[#12683c] text-white font-semibold text-[15px] px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Quiero estos resultados
          </a>
        </div>
      </div>
    </section>
  );
}

/* Marco tipo navegador para las capturas de búsquedas */
function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden ring-1 ring-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-2 px-4 py-2 bg-[#0d1120]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="text-white/40 text-[11px] font-mono ml-2 truncate">
          google.com · búsqueda en incógnito
        </span>
      </div>
      {children}
    </div>
  );
}

function VerifyPill({ query }: { query: string }) {
  return (
    <a
      href={`https://www.google.com/search?q=${encodeURIComponent(query)}`}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/80 text-[13px] font-semibold px-4 py-2 transition-colors duration-200"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
      Busca &ldquo;{query}&rdquo;
    </a>
  );
}
