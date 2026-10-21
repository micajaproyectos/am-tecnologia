import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const siteUrl = "https://www.amtecnologia.cl";
const WA =
  "https://wa.me/56985660954?text=Hola%2C%20quiero%20cotizar%20un%20software%20para%20administrar%20mi%20empresa";

export const metadata: Metadata = {
  title: "Sobre Nosotros | AM Tecnología",
  description:
    "Conoce a Allan Milla, fundador de AM Tecnología. Ingeniero Civil Industrial con 8 años de experiencia optimizando procesos en una empresa de ingeniería, hoy aplicados al desarrollo de software a medida para empresas en Chile.",
  alternates: {
    canonical: `${siteUrl}/sobre-nosotros`,
  },
  openGraph: {
    title: "Sobre Nosotros — Allan Milla | AM Tecnología",
    description:
      "Ingeniero Civil Industrial con 8 años de experiencia optimizando procesos en una empresa de ingeniería. Fundador de AM Tecnología.",
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
    "Ingeniero Civil Industrial con 8 años de experiencia optimizando procesos en una empresa de ingeniería. Fundador de AM Tecnología, donde lleva ese conocimiento a software a medida para empresas chilenas.",
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
    "Optimización de procesos productivos",
    "Software de gestión a medida",
    "Desarrollo Full Stack",
    "Ingeniería de Inteligencia Artificial",
    "SEO y Posicionamiento Web",
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
    title: "Optimización de procesos",
    desc: "Analizamos cómo trabaja tu empresa hoy y detectamos qué tareas se repiten, se duplican o se pueden automatizar.",
  },
  {
    icon: "📊",
    title: "Software de gestión a medida",
    desc: "Sistemas web para pagos, inventario, personal y reportes, diseñados según tus procesos y no al revés.",
  },
  {
    icon: "🤖",
    title: "Automatización e IA",
    desc: "Integramos automatizaciones e inteligencia artificial para que las tareas repetitivas se hagan solas.",
  },
  {
    icon: "💻",
    title: "Desarrollo web",
    desc: "Páginas web y tiendas online para cuando tu empresa también necesita vender y aparecer en Google.",
  },
];

const milestones = [
  { year: "2025", text: "Fundación de AM Tecnología en Santiago, Chile." },
  { year: "2025", text: "Más de 50 proyectos web publicados para empresas de distintos rubros." },
  { year: "2026", text: "Foco en software de gestión a medida para empresas de todo Chile." },
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
              <span className="inline-block text-am-primary text-[13px] font-semibold tracking-widest uppercase mb-6">
                Quién está detrás
              </span>
              <h1
                className="font-display font-extrabold text-white text-balance leading-[1.15] mb-5"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                El ingeniero detrás de AM Tecnología
              </h1>
              <p className="text-am-muted text-lg leading-relaxed mb-4">
                Soy Allan Milla, Ingeniero Civil Industrial y fundador de AM Tecnología. Durante
                8 años trabajé en una empresa de ingeniería analizando y optimizando procesos
                para hacerlos cada vez más eficientes. Hoy pongo esa experiencia al servicio de
                tu empresa, junto con tecnología de punta, para entregar soluciones a medida
                que funcionan.
              </p>
              <p className="text-am-muted text-base leading-relaxed mb-8">
                AM Tecnología nació a inicios de 2025 con un objetivo claro: ayudar a las
                empresas a ser cada vez más eficientes, dejando atrás métodos de trabajo
                obsoletos que frenan su crecimiento.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA}
                  data-cta-source="sobre-nosotros-hero"
                  data-offer="software"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-am-primary hover:bg-am-primary/90 text-white font-bold text-[15px] px-6 py-3 rounded-xl transition-colors duration-200"
                >
                  Cotizar mi software →
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
            <span className="inline-block text-am-primary text-[13px] font-semibold tracking-widest uppercase mb-5">
              Especialidades
            </span>
            <h2
              className="font-display font-bold text-white text-balance mb-4"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Ingeniería aplicada a cada proyecto
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
              <span className="inline-block text-am-accent text-[13px] font-semibold tracking-widest uppercase mb-6">
                Historia
              </span>
              <h2
                className="font-display font-bold text-white text-balance mb-5"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
              >
                Por qué nació AM Tecnología
              </h2>
              <p className="text-am-muted text-base leading-relaxed mb-4">
                Trabajé 8 años en una empresa de ingeniería analizando y optimizando
                procesos. Ahí vi lo que cambia en una empresa cuando su información
                está ordenada: decisiones más rápidas, menos errores y menos horas
                perdidas.
              </p>
              <p className="text-am-muted text-base leading-relaxed mb-4">
                En 2025 fundé AM Tecnología y partimos ayudando a emprendedores con
                páginas web y posicionamiento en Google. Trabajando con ellos vimos
                que el problema de fondo era otro: la administración repartida entre
                planillas, papeles y carpetas sueltas.
              </p>
              <p className="text-am-muted text-base leading-relaxed mb-8">
                Hoy nos enfocamos en eso: software a medida que reúne la gestión de
                tu empresa en un solo sistema, para que dediques tu tiempo a crecer
                y no a cuadrar planillas.
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
              Un sistema bien diseñado trabaja por tu empresa
            </h2>
            <p className="text-am-muted text-lg leading-relaxed max-w-2xl mx-auto mb-4">
              Requiere entender el problema, diseñar el proceso correcto y ejecutarlo
              sin fricciones. No se improvisa. Y cuando está bien hecho, tu equipo
              trabaja más rápido, con menos errores y sin esfuerzo extra.
            </p>
            <p className="text-am-muted text-base leading-relaxed max-w-xl mx-auto">
              Esa mentalidad de ingeniería industrial es lo que diferencia los proyectos
              de AM Tecnología de un software genérico que obliga a tu empresa a
              adaptarse a él.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 metal-bg">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-am-primary text-[13px] font-semibold tracking-widest uppercase mb-6">
            ¿Hablamos?
          </span>
          <h2
            className="font-display font-bold text-white text-balance mb-4"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
          >
            Cuéntanos cómo trabaja tu empresa hoy
          </h2>
          <p className="text-am-muted text-base leading-relaxed mb-8">
            Revisamos tus procesos y te enviamos una cotización a medida, sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WA}
              data-cta-source="sobre-nosotros-cta"
              data-offer="software"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold text-[15px] px-7 py-3.5 rounded-xl transition-colors duration-200"
            >
              Cotizar mi software
            </a>
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-am-text hover:text-white font-semibold text-[15px] px-7 py-3.5 rounded-xl transition-all duration-200"
            >
              Ver proyectos →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton offer="software" />
    </>
  );
}
