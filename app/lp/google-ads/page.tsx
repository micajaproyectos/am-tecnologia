import type { Metadata } from "next";
import TestimonialsCard from "@/components/TestimonialsCard";

// Landing exclusiva para tráfico pagado (Google Ads / Meta Ads).
// noindex: no compite con el SEO del sitio. AdsBot sí puede rastrearla
// (no está bloqueada en robots.txt) para el Quality Score.
export const metadata: Metadata = {
  title: "Landing + Campaña de Google Ads — $399.990 pago único",
  description:
    "Te construimos la landing y configuramos tu primera campaña en Google Ads o Meta Ads. Tracking completo y 30 días de optimización incluidos.",
  robots: {
    index: false,
    follow: false,
  },
};

const WA =
  "https://wa.me/56985660954?text=Hola%2C%20quiero%20contratar%20mi%20campa%C3%B1a%20de%20Google%20Ads%20%2B%20landing%20page";

const incluye = [
  {
    title: "Landing page optimizada en conversión",
    desc: "La página donde aterrizan tus anuncios, diseñada con un solo objetivo: que la visita te escriba. Sin menús, sin distracciones, con tu oferta al frente.",
  },
  {
    title: "Tu primera campaña configurada por expertos",
    desc: "Palabras clave investigadas, anuncios redactados para tu oferta y palabras negativas desde el día uno para no pagar clics basura.",
  },
  {
    title: "Google Ads o Meta Ads según tu negocio",
    desc: "Diagnosticamos cómo compra tu cliente y lanzamos en la plataforma con mejor retorno para tu caso. Tú no adivinas: nosotros decidimos con datos.",
  },
  {
    title: "Tracking de conversiones completo",
    desc: "Etiqueta de Google, píxel y eventos configurados. Sabrás cuántos contactos genera cada peso invertido, no solo cuántos clics.",
  },
  {
    title: "30 días de optimización incluidos",
    desc: "El primer mes depuramos búsquedas, ajustamos pujas y mejoramos anuncios con datos reales. No te dejamos solo con el botón de encendido.",
  },
  {
    title: "Reporte claro al cierre del mes",
    desc: "Cuánto invertiste, cuántos contactos llegaron, qué costó cada uno y qué conviene hacer después. En español simple, sin humo.",
  },
];

const pasos = [
  { step: "01", title: "Diagnóstico", desc: "Nos cuentas tu negocio por WhatsApp. Definimos plataforma, oferta y presupuesto recomendado. Cotización en menos de 1 hora." },
  { step: "02", title: "Landing y tracking", desc: "Construimos tu página de conversión y dejamos todo el seguimiento configurado antes de invertir un peso en anuncios." },
  { step: "03", title: "Lanzamiento", desc: "Tu campaña sale al aire con estructura profesional y presupuesto protegido con palabras negativas." },
  { step: "04", title: "Optimización 30 días", desc: "Ajustamos con datos reales y cerramos con un reporte y una recomendación honesta de continuidad." },
];

const faqs = [
  {
    q: "¿El precio incluye el presupuesto de publicidad?",
    a: "No. Los $399.990 cubren nuestro trabajo completo: landing, tracking, campaña y 30 días de optimización. El presupuesto publicitario lo pagas directo a Google o Meta desde tu propia cuenta — recomendamos desde $150.000/mes. Tu cuenta, tu tarjeta, tu control.",
  },
  {
    q: "¿En cuánto tiempo está funcionando?",
    a: "La landing y el tracking quedan listos en días, no semanas. La campaña puede estar mostrando anuncios la misma semana en que apruebas el diseño.",
  },
  {
    q: "¿Me garantizan ventas?",
    a: "No, y desconfía de quien te las garantice. Garantizamos el sistema bien construido: landing que convierte, campaña bien estructurada, tracking midiendo todo y un mes de optimización real.",
  },
  {
    q: "¿Qué pasa después de los 30 días?",
    a: "La campaña es tuya y queda funcionando en tu cuenta. Si quieres que sigamos optimizando mes a mes, te cotizamos la gestión continua por WhatsApp, sin permanencia mínima.",
  },
];

function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
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

export default function LpGoogleAdsPage() {
  return (
    <>
      {/* ── TOP BAR mínima: marca + respuesta rápida, sin navegación ── */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/85 backdrop-blur-sm border-b border-white/6">
        <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
          <span className="font-display font-bold text-white text-[15px] tracking-tight">
            AM Tecnología
          </span>
          <span className="flex items-center gap-2 text-am-muted text-[12px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-am-green animate-pulse-dot" />
            Te respondemos en menos de 1 hora
          </span>
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-[60px] bg-black">
          <div className="absolute -top-52 -left-24 w-[600px] h-[600px] rounded-full bg-am-primary/15 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-16 w-[500px] h-[500px] rounded-full bg-am-accent/10 blur-[90px] pointer-events-none" />
          <div className="absolute inset-0 grid-bg pointer-events-none opacity-25" />

          <div className="relative max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-am-green animate-pulse-dot" />
                <span className="text-am-accent text-[13px] font-semibold tracking-wide">
                  Landing + campaña publicitaria · Todo Chile
                </span>
              </div>

              <h1
                className="font-display font-extrabold text-white text-balance leading-[1.12] mb-4"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                Tu primera campaña en Google Ads,{" "}
                <span className="gradient-text">con una landing que vende</span>
              </h1>

              <p className="text-am-muted text-lg leading-relaxed mb-4 max-w-lg">
                Te construimos la página y configuramos tu campaña en Google Ads
                o Meta Ads. Sistema completo, listo para captar clientes.
              </p>

              {/* Precio */}
              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-display font-extrabold text-white text-4xl">
                  $399.990
                </span>
                <span className="text-am-muted text-sm font-semibold">
                  pago único
                </span>
              </div>

              <ul className="flex flex-col gap-2 mb-7">
                {[
                  "Landing page optimizada en conversión",
                  "Campaña configurada por expertos, con tracking completo",
                  "30 días de optimización incluidos — no te dejamos solo",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-am-text text-[15px]">
                    <CheckIcon />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href={WA}
                data-cta-source="lp_ads_hero"
                data-cta-value="399990"
                data-offer="ads"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold text-[16px] px-7 py-4 rounded-xl transition-colors duration-200 shadow-[0_6px_28px_rgba(37,211,102,0.3)]"
              >
                <WaIcon />
                Quiero mi cotización por WhatsApp
              </a>
              <p className="text-am-muted/70 text-xs mt-3">
                Respuesta en menos de 1 hora · Sin compromiso · Sin mensualidades obligatorias
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <TestimonialsCard />
            </div>
          </div>
        </section>

        {/* ── EL PROBLEMA / LA LÓGICA ── */}
        <section className="metal-surface relative px-6 py-20">
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2
              className="font-display font-bold text-white text-balance mb-6"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Una campaña sin buena landing{" "}
              <span className="gradient-text">quema presupuesto</span>
            </h2>
            <p className="text-am-muted text-base leading-[1.85] max-w-2xl mx-auto">
              Y una landing sin tráfico es un folleto guardado en un cajón. Por
              eso no vendemos las piezas por separado: te entregamos el sistema
              completo — la página que convierte y la campaña que le trae
              visitas calificadas — configurado por gente que hace esto todos
              los días.
            </p>
          </div>
        </section>

        {/* ── QUÉ INCLUYE ── */}
        <section className="bg-black px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4 text-center">
              Qué incluye tu inversión
            </p>
            <h2
              className="font-display font-bold text-white text-balance mb-12 text-center"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Todo lo que recibes por{" "}
              <span className="gradient-text">$399.990</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {incluye.map((item) => (
                <div
                  key={item.title}
                  className="bg-am-surf2 border border-white/6 rounded-2xl px-6 py-6 hover:border-am-primary/30 transition-colors"
                >
                  <h3 className="font-display font-bold text-white text-[16px] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-am-muted text-[13.5px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Transparencia de presupuesto — filtro de compradores serios */}
            <div className="mt-10 bg-am-bg border border-am-accent/25 rounded-2xl px-7 py-6 max-w-3xl mx-auto">
              <p className="text-white font-display font-bold text-[15px] mb-2">
                Hablemos claro: el presupuesto publicitario va aparte
              </p>
              <p className="text-am-muted text-[14px] leading-relaxed">
                Los $399.990 cubren nuestro trabajo completo. Lo que inviertes
                en anuncios se paga directo a Google o Meta desde tu propia
                cuenta — recomendamos partir desde $150.000 mensuales.
                Preferimos decírtelo aquí y no después de cotizar: trabajamos
                con negocios que van en serio.
              </p>
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ── */}
        <section className="metal-surface relative overflow-hidden px-6 py-20">
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
          <div className="relative z-20 max-w-4xl mx-auto">
            <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
              Proceso
            </p>
            <h2
              className="font-display font-bold text-white text-balance mb-10"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              De la cotización a tu campaña{" "}
              <span className="gradient-text">al aire</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pasos.map((p) => (
                <div key={p.step} className="flex gap-5">
                  <span className="font-display font-extrabold text-white/10 text-5xl leading-none shrink-0 select-none">
                    {p.step}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-white text-[16px] mb-1">
                      {p.title}
                    </h3>
                    <p className="text-am-muted text-[13.5px] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-black px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
              Preguntas frecuentes
            </p>
            <h2
              className="font-display font-bold text-white text-balance mb-10"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Lo que preguntan antes de{" "}
              <span className="gradient-text">contratar</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-white/10 pb-8">
                  <h3 className="font-display font-bold text-white text-[17px] mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-am-muted text-[14px] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="metal-surface relative overflow-hidden px-6 py-24 text-center">
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
          <div className="relative z-20 max-w-2xl mx-auto">
            <h2
              className="font-display font-bold text-white text-balance mb-3"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Landing + campaña + 30 días de optimización
            </h2>
            <div className="font-display font-extrabold text-white text-5xl mb-2">
              $399.990
            </div>
            <p className="text-am-muted text-sm mb-8">
              Pago único · Presupuesto publicitario aparte · Sin mensualidades obligatorias
            </p>
            <a
              href={WA}
              data-cta-source="lp_ads_final"
              data-cta-value="399990"
              data-offer="ads"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold text-[16px] px-8 py-4 rounded-xl transition-colors duration-200 shadow-[0_6px_28px_rgba(37,211,102,0.3)]"
            >
              <WaIcon />
              Cotizar por WhatsApp ahora
            </a>
            <p className="text-am-muted/60 text-xs mt-4">
              Te respondemos en menos de 1 hora · Cupos limitados por mes para
              garantizar la optimización de cada cliente
            </p>
          </div>
        </section>
      </main>

      {/* ── FOOTER mínimo ── */}
      <footer className="bg-black border-t border-white/6 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-am-muted text-[12px]">
          <span>© {new Date().getFullYear()} AM Tecnología · Providencia, Chile</span>
          <span>contacto@amconsultora.cl · +56 9 8566 0954</span>
        </div>
      </footer>

      {/* ── STICKY WHATSAPP con message match propio de esta LP ── */}
      <div className="fixed bottom-7 right-7 z-50 flex items-center gap-3">
        <span className="hidden md:block bg-white text-slate-800 text-[13px] font-bold px-4 py-2 rounded-xl shadow-xl whitespace-nowrap select-none">
          Cotiza tu campaña
        </span>
        <a
          href={WA}
          data-cta-source="lp_ads_sticky"
          data-cta-value="399990"
          data-offer="ads"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Cotiza tu landing y campaña de Google Ads por WhatsApp"
          className="group relative flex items-center justify-center w-[60px] h-[60px] md:w-[72px] md:h-[72px] bg-[#25d366] rounded-full shadow-[0_6px_28px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_10px_36px_rgba(37,211,102,0.65)] transition-all duration-200 text-white"
        >
          <span className="absolute inset-[-4px] rounded-full bg-[#25d366]/30 animate-wa-pulse" />
          <span className="relative z-10">
            <WaIcon size={30} />
          </span>
        </a>
      </div>
    </>
  );
}
