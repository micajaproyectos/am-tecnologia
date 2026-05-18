import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";

const WA = "https://wa.me/56985660954?text=Hola%2C%20quiero%20cotizar%20mi%20p%C3%A1gina%20web";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://www.amtecnologia.cl/servicios/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.amtecnologia.cl/servicios/${service.slug}`,
    name: service.title,
    description: service.schemaDescription,
    url: `https://www.amtecnologia.cl/servicios/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.amtecnologia.cl/#business",
      name: "AM Tecnología",
      url: "https://www.amtecnologia.cl",
    },
    areaServed: { "@type": "Country", name: "Chile" },
    offers: {
      "@type": "Offer",
      price: service.price.replace(/\D/g, ""),
      priceCurrency: "CLP",
      availability: "https://schema.org/InStock",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              {service.badge} · AM Tecnología
            </span>
          </div>

          <h1
            className="font-display font-extrabold text-white text-balance leading-[1.15] mb-3"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            {service.seoTitle}
          </h1>

          <p className="text-am-muted text-xl leading-snug max-w-2xl mb-4">
            {service.headline}{" "}
            <span className="text-white">{service.headlineAccent}</span>
          </p>

          <p className="text-am-muted text-base leading-relaxed max-w-2xl mb-8">
            {service.intro}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={WA}
              data-cta-source={`service_${service.slug}_hero`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-am-primary hover:bg-am-primary/90 text-white font-semibold text-[15px] transition-all duration-200"
            >
              Cotizar ahora
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

      {/* ── QUÉ ES ── */}
      <section className="metal-surface relative overflow-hidden px-6 py-24">
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        <div className="relative z-20 max-w-4xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            ¿Qué es?
          </p>
          <h2
            className="font-display font-bold text-white text-balance mb-6"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            {service.whatIsTitle}
          </h2>
          <p className="text-am-muted text-base leading-[1.85] max-w-3xl">
            {service.whatIs}
          </p>
        </div>
      </section>

      {/* ── IDEAL PARA ── */}
      <section className="bg-black px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-display font-bold text-white text-balance mb-8"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            ¿Para quién es ideal{" "}
            <span className="gradient-text">este servicio?</span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.idealFor.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-am-surf2 border border-white/6 rounded-xl px-5 py-4 hover:border-am-primary/25 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-am-primary shrink-0 mt-1.5" />
                <span className="text-am-muted text-[14px] leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="metal-surface relative overflow-hidden px-6 py-24">
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        <div className="relative z-20 max-w-4xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            Qué incluye
          </p>
          <h2
            className="font-display font-bold text-white text-balance mb-10"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Todo lo que viene con tu{" "}
            <span className="gradient-text">{service.title}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {service.features.map((f) => (
              <div
                key={f.title}
                className="bg-am-bg border border-white/6 rounded-2xl px-6 py-6 hover:border-am-primary/30 transition-colors"
              >
                <h3 className="font-display font-bold text-white text-[16px] mb-2">
                  {f.title}
                </h3>
                <p className="text-am-muted text-[13.5px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section className="bg-black px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            Proceso
          </p>
          <h2
            className="font-display font-bold text-white text-balance mb-10"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Cómo trabajamos{" "}
            <span className="gradient-text">paso a paso</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.process.map((p) => (
              <div key={p.step} className="flex gap-5">
                <span className="font-display font-extrabold text-white/10 text-5xl leading-none shrink-0 select-none">
                  {p.step}
                </span>
                <div>
                  <h3 className="font-display font-bold text-white text-[16px] mb-1">
                    {p.title}
                  </h3>
                  <p className="text-am-muted text-[13.5px] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRECIO CTA ── */}
      <section className="metal-surface relative overflow-hidden px-6 py-20 text-center">
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        <div className="relative z-20 max-w-2xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            Inversión
          </p>
          <div className="font-display font-extrabold text-white text-5xl mb-2">
            {service.price}
          </div>
          <p className="text-am-muted text-sm mb-8">{service.priceNote}</p>
          <a
            href={WA}
            data-cta-source={`service_${service.slug}_cta`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-am-primary hover:bg-am-primary/90 text-white font-bold text-[16px] transition-all duration-200"
          >
            Quiero empezar ahora →
          </a>
          <p className="text-am-muted/60 text-xs mt-4">
            Te respondemos en menos de 1 hora · Sin compromiso
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-black px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            Preguntas frecuentes
          </p>
          <h2
            className="font-display font-bold text-white text-balance mb-10"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Dudas frecuentes sobre{" "}
            <span className="gradient-text">{service.title}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {service.faqs.map((faq) => (
              <div key={faq.q} className="border-b border-white/10 pb-8">
                <h3 className="font-display font-bold text-white text-[17px] mb-3">
                  {faq.q}
                </h3>
                <p className="text-am-muted text-[14px] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Internal links to other services */}
          <div className="mt-16 pt-8 border-t border-white/5">
            <p className="text-am-muted text-sm mb-4">También puede interesarte:</p>
            <div className="flex flex-wrap gap-3">
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  prefetch={true}
                  className="text-am-primary hover:text-am-accent text-sm font-semibold transition-colors"
                >
                  {s.title} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
