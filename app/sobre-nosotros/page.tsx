import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const siteUrl = "https://www.amtecnologia.cl";
const WA =
  "https://wa.me/56985660954?text=Hola%2C%20quiero%20contratar%20mi%20p%C3%A1gina%20web";

export const metadata: Metadata = {
  title: "Sobre Nosotros | AM Tecnología",
  description:
    "Conoce a Allan Milla, Ingeniero Civil Industrial fundador de AM Tecnología. Especialista en desarrollo Full Stack, Ingeniería de IA y Marketing Digital para empresas en Chile.",
  alternates: {
    canonical: `${siteUrl}/sobre-nosotros`,
  },
  openGraph: {
    title: "Sobre Nosotros — Allan Milla | AM Tecnología",
    description:
      "Ingeniero Civil Industrial especialista en desarrollo web, IA y posicionamiento en Google para empresas en Chile.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/autor/allan-milla`,
  name: "Allan Milla",
  jobTitle: "Ingeniero Civil Industrial",
  description:
    "Fundador de AM Tecnología. Especialista en desarrollo Full Stack, Ingeniería de IA, Marketing Digital e Innovación. Construye presencia digital que posiciona empresas chilenas en Google.",
  url: `${siteUrl}/autor/allan-milla`,
  mainEntityOfPage: `${siteUrl}/autor/allan-milla`,
  image: `${siteUrl}/fundador.webp`,
  worksFor: {
    "@type": "Organization",
    "@id": `${siteUrl}/#business`,
    name: "AM Tecnología",
    url: siteUrl,
  },
  knowsAbout: [
    "Desarrollo Full Stack",
    "Ingeniería de Inteligencia Artificial",
    "Marketing Digital",
    "SEO y Posicionamiento Web",
    "Innovación y Desarrollo",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: "Ingeniero Civil Industrial",
  },
};

const specialties = [
  {
    icon: "⚙️",
    title: "Desarrollo Full Stack",
    desc: "Arquitectura de software moderna con Next.js, React y TypeScript. Sitios que cargan rápido y escalan.",
  },
  {
    icon: "🤖",
    title: "Ingeniería de IA",
    desc: "Integración de modelos de lenguaje y automatizaciones inteligentes para optimizar procesos de negocio.",
  },
  {
    icon: "📈",
    title: "Marketing Digital",
    desc: "Estrategia SEO, analítica de conversiones y posicionamiento orgánico en Google para el mercado chileno.",
  },
  {
    icon: "💡",
    title: "Innovación y Desarrollo",
    desc: "Aplicaciones web SaaS y soluciones digitales a medida que resuelven problemas reales de negocio.",
  },
];

const milestones = [
  { year: "2025", text: "Fundación de AM Tecnología en Santiago, Chile." },
  { year: "2025", text: "Primeros +50 proyectos publicados y posicionados en Google." },
  { year: "2026", text: "Expansión a clientes en 16 ciudades de Chile, con foco en el sur del país." },
];

export default function SobreNosotros() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-[72px] bg-black">
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-am-primary/12 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-10 w-[400px] h-[400px] rounded-full bg-am-accent/8 blur-[90px] pointer-events-none" />
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-15" />

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-am-muted mb-10">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="text-white/20">/</span>
            <span className="text-am-muted/60">Sobre Nosotros</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-am-primary/25 bg-am-primary/8 text-am-primary text-[13px] font-semibold tracking-widest uppercase mb-6">
                Quién está detrás
              </span>
              <h1
                className="font-display font-extrabold text-white text-balance leading-[1.15] mb-5"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                El Ingeniero detrás de{" "}
                <span className="gradient-text">AM Tecnología</span>
              </h1>
              <p className="text-am-muted text-lg leading-relaxed mb-4">
                Soy Allan Milla, Ingeniero Civil Industrial y fundador de AM Tecnología. Creo que
                los emprendedores y pymes en Chile merecen presencia digital diseñada con la misma
                rigurosidad que un sistema de ingeniería: analizada, optimizada y
                orientada a resultados.
              </p>
              <p className="text-am-muted text-base leading-relaxed mb-8">
                AM Tecnología nació a inicios de 2025 con un objetivo claro: que cualquier
                empresa en Chile pueda aparecer en Google y recibir clientes sin depender
                de publicidad pagada ni de mensualidades.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA}
                  data-cta-source="sobre-nosotros-hero"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-am-primary hover:bg-am-primary/90 text-white font-bold text-[15px] px-6 py-3 rounded-xl transition-colors duration-200"
                >
                  Cotizar proyecto →
                </a>
                <Link
                  href="/autor/allan-milla"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-am-text hover:text-white font-semibold text-[15px] px-6 py-3 rounded-xl transition-all duration-200"
                >
                  Ver artículos publicados
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px]">
                <div className="rounded-2xl overflow-hidden border border-white/8 shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
                  <Image
                    src="/fundador.webp"
                    alt="Allan Milla, Ingeniero Civil Industrial y Fundador de AM Tecnología"
                    width={420}
                    height={500}
                    className="w-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-am-surface border border-white/10 rounded-xl px-5 py-3 shadow-lg">
                  <p className="text-white font-bold text-[15px] leading-tight">Allan Milla</p>
                  <p className="text-am-primary text-[12px] font-semibold">Ing. Civil · Fundador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESPECIALIDADES ── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full border border-am-primary/25 bg-am-primary/8 text-am-primary text-[13px] font-semibold tracking-widest uppercase mb-5">
              Especialidades
            </span>
            <h2
              className="font-display font-bold text-white text-balance mb-4"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Ingeniería aplicada a{" "}
              <span className="gradient-text">cada proyecto</span>
            </h2>
            <p className="text-am-muted text-base leading-relaxed">
              Cada disciplina se aplica directamente en los proyectos de los
              clientes — no es teoría, es lo que construimos cada día.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {specialties.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/6 bg-am-surface p-6 hover:border-am-primary/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-display font-bold text-white text-[16px] mb-2">{s.title}</h3>
                <p className="text-am-muted text-[13px] leading-[1.7]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HISTORIA + OFICINA ── */}
      <section className="py-24 metal-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Office photo */}
            <div className="rounded-2xl overflow-hidden border border-white/8 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
              <Image
                src="/oficina.webp"
                alt="Oficina de AM Tecnología en Santiago, Chile"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>

            {/* Story */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-am-accent/25 bg-am-accent/8 text-am-accent text-[13px] font-semibold tracking-widest uppercase mb-6">
                Historia
              </span>
              <h2
                className="font-display font-bold text-white text-balance mb-5"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
              >
                Por qué nació{" "}
                <span className="gradient-text">AM Tecnología</span>
              </h2>
              <p className="text-am-muted text-base leading-relaxed mb-4">
                Trabajé 8 años en una empresa de ingeniería y vi de cerca cómo
                se tomaban en serio la visibilidad de su marca: era una
                inversión estratégica, no un gasto. Mientras tanto, veía a
                emprendedores con excelentes productos y servicios que eran
                completamente invisibles, dependiendo del boca a boca y de
                publicidad que se terminaba junto con el presupuesto.
              </p>
              <p className="text-am-muted text-base leading-relaxed mb-4">
                Acumulé tanto conocimiento en esos años que decidí comenzar a
                impartirlo a emprendedores que están dando sus primeros pasos
                en posicionar su negocio de manera digital. Así nació AM
                Tecnología a inicios de 2025.
              </p>
              <p className="text-am-muted text-base leading-relaxed mb-8">
                Hoy la realidad es simple: si no estás en la web — redes
                sociales, Google Maps, una página propia — no existes. Y
                construir esa presencia no tiene que ser caro ni complejo: un
                sitio bien construido puede posicionar tu emprendimiento en
                Google de forma permanente, sin mensualidades ni dependencia
                de publicidad pagada.
              </p>

              <div className="flex flex-col gap-5">
                {milestones.map((m) => (
                  <div key={m.text} className="flex items-start gap-4">
                    <span className="shrink-0 px-2.5 py-1 rounded-lg bg-am-primary/15 border border-am-primary/20 text-am-primary text-[12px] font-bold">
                      {m.year}
                    </span>
                    <p className="text-am-muted text-[14px] leading-relaxed">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILOSOFÍA ── */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="rounded-2xl border border-am-primary/20 bg-am-primary/5 px-8 py-14">
            <div className="text-5xl mb-6">⚙️</div>
            <h2
              className="font-display font-bold text-white text-balance mb-5"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Un proyecto digital es un sistema que debe funcionar solo
            </h2>
            <p className="text-am-muted text-lg leading-relaxed max-w-2xl mx-auto mb-4">
              Requiere análisis del problema, diseño del proceso correcto y ejecución
              sin fricciones. No se improvisa. Y cuando está bien diseñado, opera con
              autonomía — atrayendo clientes sin que tengas que hacer nada extra.
            </p>
            <p className="text-am-muted text-base leading-relaxed max-w-xl mx-auto">
              Esa mentalidad de ingeniería industrial aplicada al mundo digital es lo que
              diferencia los proyectos de AM Tecnología de una plantilla genérica
              o un sitio sin estrategia.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 metal-bg">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-am-primary/25 bg-am-primary/8 text-am-primary text-[13px] font-semibold tracking-widest uppercase mb-6">
            ¿Hablamos?
          </span>
          <h2
            className="font-display font-bold text-white text-balance mb-4"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
          >
            Tu negocio puede aparecer en Google este mes
          </h2>
          <p className="text-am-muted text-base leading-relaxed mb-8">
            Desde $199.990 pago único · Resultados reales · Sin mensualidades
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WA}
              data-cta-source="sobre-nosotros-cta"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold text-[15px] px-7 py-3.5 rounded-xl transition-colors duration-200"
            >
              Cotizar por WhatsApp
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-am-text hover:text-white font-semibold text-[15px] px-7 py-3.5 rounded-xl transition-all duration-200"
            >
              Leer el blog →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
