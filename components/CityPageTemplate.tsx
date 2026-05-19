import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { CityData } from "@/lib/cities-data";
import { SERVICES } from "@/lib/services-data";

const WA = "https://wa.me/56985660954?text=Hola%2C%20quiero%20saber%20c%C3%B3mo%20aparecer%20en%20Google%20en%20mi%20ciudad";

interface Props {
  city: CityData;
  jsonLd: object;
}

export default function CityPageTemplate({ city, jsonLd }: Props) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[65vh] flex flex-col justify-center overflow-hidden pt-[72px] bg-black">
        <div className="absolute -top-52 -left-24 w-[600px] h-[600px] rounded-full bg-am-primary/15 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-16 w-[500px] h-[500px] rounded-full bg-am-accent/10 blur-[90px] pointer-events-none" />
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />

        <div className="relative max-w-4xl mx-auto px-6 py-24">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-am-green animate-pulse-dot" />
            <span className="text-am-accent text-[13px] font-semibold tracking-wide">
              Posicionamiento en Google · {city.name} · {city.region}
            </span>
          </div>

          <h1
            className="font-display font-extrabold text-white text-balance leading-[1.15] mb-3"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Posicionamiento en Google{" "}
            <span className="gradient-text">{city.name}</span>
          </h1>

          <p className="text-am-muted text-xl leading-snug max-w-2xl mb-4">
            {city.headline}{" "}
            <span className="text-white">{city.headlineAccent}</span>
          </p>

          <p className="text-am-muted text-base leading-relaxed max-w-2xl mb-8">
            {city.intro}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={WA}
              data-cta-source={`city_${city.slug}_hero`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-am-primary hover:bg-am-primary/90 text-white font-semibold text-[15px] transition-all duration-200"
            >
              Quiero aparecer en Google en {city.name}
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 text-am-muted hover:text-white hover:border-white/30 font-semibold text-[15px] transition-all duration-200"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTEXTO LOCAL ── */}
      <section className="metal-surface relative overflow-hidden px-6 py-24">
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        <div className="relative z-20 max-w-4xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            Mercado local
          </p>
          <h2
            className="font-display font-bold text-white text-balance mb-6"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            El mercado digital en{" "}
            <span className="gradient-text">{city.name}</span>
          </h2>
          <p className="text-am-muted text-base leading-[1.85] max-w-3xl">
            {city.context}
          </p>
        </div>
      </section>

      {/* ── EDITORIAL ── */}
      <section className="bg-black px-6 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">
          <header>
            <h2
              className="font-display font-bold text-white text-balance leading-snug"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              Posicionamiento orgánico en Google para negocios en {city.name}
            </h2>
          </header>
          <div className="flex flex-col gap-5 text-am-muted text-[15px] leading-relaxed">
            <p>
              En {city.name}, cuando alguien busca un servicio en Google, los negocios que aparecen en las primeras posiciones se llevan la gran mayoría de los contactos. No porque sean los más grandes ni los más conocidos, sino porque tienen una presencia digital que Google puede leer y recomendar.
            </p>
            <p>
              El posicionamiento orgánico no requiere pagar por cada clic. A diferencia de Google Ads, una vez que tu negocio está bien posicionado, sigue apareciendo sin costo adicional. Para lograrlo se necesita una página web optimizada, un perfil de Google Maps configurado correctamente y contenido que conecte tu negocio con las búsquedas reales de tus clientes en {city.name}.
            </p>
            <p>
              AM Tecnología trabaja 100% remoto con pymes y emprendedores en {city.region}. Diseñamos tu presencia digital desde cero, adaptada a tu rubro y ciudad, para que Google comience a recomendarte cuando alguien busca lo que ofreces — sin que tengas que entender de tecnología ni invertir en publicidad mensual.
            </p>
          </div>
        </div>
      </section>

      {/* ── POR QUÉ IMPORTA ── */}
      <section className="bg-black px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-display font-bold text-white text-balance mb-8"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            Por qué tu negocio en {city.name} necesita{" "}
            <span className="gradient-text">estar en Google</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {city.marketPoints.map((point) => (
              <div
                key={point.title}
                className="bg-am-surf2 border border-white/6 rounded-2xl px-6 py-6 hover:border-am-primary/30 transition-colors"
              >
                <h3 className="font-display font-bold text-white text-[16px] mb-2">
                  {point.title}
                </h3>
                <p className="text-am-muted text-[13.5px] leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ NOSOTROS ── */}
      <section className="metal-surface relative overflow-hidden px-6 py-20">
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        <div className="relative z-20 max-w-4xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            Por qué AM Tecnología
          </p>
          <h2
            className="font-display font-bold text-white text-balance mb-6"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Posicionamiento en Google para{" "}
            <span className="gradient-text">negocios en {city.name}</span>
          </h2>
          <p className="text-am-muted text-base leading-[1.85] max-w-3xl mb-10">
            {city.whyUs}
          </p>

          {/* Servicios relevantes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {SERVICES.filter((s) => ["landing-page", "one-page-corporativo", "ecommerce"].includes(s.slug)).map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                prefetch={true}
                className="flex flex-col gap-2 bg-am-bg border border-white/6 rounded-xl px-5 py-5 hover:border-am-primary/30 transition-colors group"
              >
                <span className="font-semibold text-white text-[14px] group-hover:text-am-primary transition-colors">
                  {s.title}
                </span>
                <span className="text-am-muted text-[12px] leading-snug">{s.price}</span>
              </Link>
            ))}
          </div>

          {/* Links editoriales */}
          <div className="flex flex-wrap gap-4 pt-2 border-t border-white/6">
            <Link href="/aparecer-en-google" className="text-am-primary hover:text-am-accent text-sm font-semibold transition-colors">
              ¿Cómo aparecer en Google? →
            </Link>
            <Link href="/blog/como-aparecer-en-google-empresa-chile" className="text-am-primary hover:text-am-accent text-sm font-semibold transition-colors">
              Guía completa de posicionamiento →
            </Link>
            <Link href="/blog/cuanto-cuesta-una-pagina-web-en-chile" className="text-am-primary hover:text-am-accent text-sm font-semibold transition-colors">
              ¿Cuánto cuesta una página web? →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-black px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            Empieza hoy
          </p>
          <h2
            className="font-display font-bold text-white text-balance mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Tu negocio en {city.name},{" "}
            <span className="gradient-text">en Google mañana.</span>
          </h2>
          <p className="text-am-muted text-base mb-8">
            Desde $99.990 pago único · Sin mensualidades · Sin publicidad pagada
          </p>
          <a
            href={WA}
            data-cta-source={`city_${city.slug}_cta`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-am-primary hover:bg-am-primary/90 text-white font-bold text-[16px] transition-all duration-200"
          >
            Cotizar ahora →
          </a>
          <p className="text-am-muted/60 text-xs mt-4">
            Te respondemos en menos de 1 hora · Sin compromiso
          </p>
        </div>
      </section>

      {/* ── FAQ LOCAL ── */}
      <section className="metal-surface relative overflow-hidden px-6 py-24">
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        <div className="relative z-20 max-w-4xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            Preguntas frecuentes
          </p>
          <h2
            className="font-display font-bold text-white text-balance mb-10"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Dudas sobre posicionamiento en{" "}
            <span className="gradient-text">{city.name}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {city.localFaqs.map((faq) => (
              <div key={faq.q} className="border-b border-white/10 pb-8">
                <h3 className="font-display font-bold text-white text-[17px] mb-3">
                  {faq.q}
                </h3>
                <p className="text-am-muted text-[14px] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
