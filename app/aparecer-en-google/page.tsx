import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title:
    "¿Cómo Aparecer en Google? | Posicionamiento para Empresas | AM Tecnología",

  description:
    "Ayudamos a empresas y pymes a aparecer en Google mediante páginas web optimizadas, presencia digital y posicionamiento orgánico.",

  alternates: {
    canonical: "https://www.amtecnologia.cl/aparecer-en-google",
  },
};

const WA =
  "https://wa.me/56985660954?text=Hola%2C%20quiero%20que%20mi%20negocio%20aparezca%20en%20Google";

const reasons = [
  {
    title: "No tienes página web",
    desc: "Google indexa páginas web. Sin una, tu negocio es invisible para cualquier búsqueda, sin importar cuántos años llevas operando.",
  },
  {
    title: "Tu web no está optimizada",
    desc: "Una página sin estructura SEO no aparece aunque exista. Google necesita señales técnicas claras para mostrarla a tus clientes.",
  },
  {
    title: "No tienes presencia local",
    desc: "Sin Google Maps y datos locales configurados, tu negocio no aparece cuando buscan un servicio cerca tuyo.",
  },
];

export default function AparecerEnGooglePage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white">

        {/* ── HERO ── */}
        <section className="relative min-h-[60vh] flex flex-col justify-center overflow-hidden pt-[72px]">
          <div className="absolute -top-52 -left-24 w-[600px] h-[600px] rounded-full bg-am-primary/15 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-16 w-[500px] h-[500px] rounded-full bg-am-accent/10 blur-[90px] pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6 py-24">
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-am-green animate-pulse-dot" />
              <span className="text-am-accent text-[13px] font-semibold tracking-wide">
                Posicionamiento en Google · Todo Chile
              </span>
            </div>

            <h1
              className="font-display font-extrabold text-white text-balance leading-[1.15] mb-6"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
            >
              ¿Cómo aparecer en{" "}
              <span className="gradient-text">Google?</span>
            </h1>

            <p className="text-am-muted text-lg leading-relaxed mb-10 max-w-2xl">
              Hoy miles de empresas tienen redes sociales, pero no aparecen cuando
              las buscan en Google. En AM Tecnología ayudamos a negocios y pymes a
              mejorar su presencia digital mediante páginas web optimizadas y
              posicionamiento orgánico.
            </p>

            <a
              href={WA}
              data-cta-source="aparecer-google-hero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-am-primary hover:bg-am-primary/90 text-white font-bold px-7 py-3.5 rounded-xl transition-colors duration-200 text-[15px]"
            >
              Quiero aparecer en Google
            </a>
          </div>
        </section>

        {/* ── POR QUÉ NO APARECES ── */}
        <section className="py-24 px-6 border-t border-white/6">
          <div className="max-w-4xl mx-auto">
            <h2
              className="font-display font-bold text-white text-balance mb-4"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Por qué tu negocio{" "}
              <span className="gradient-text">no aparece en Google</span>
            </h2>
            <p className="text-am-muted mb-12 max-w-2xl leading-relaxed">
              El 92% de los chilenos busca en Google antes de comprar. Si no apareces,
              existes solo para quienes ya te conocen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {reasons.map((item) => (
                <div
                  key={item.title}
                  className="bg-am-surf2 border border-white/6 rounded-2xl p-6 hover:border-am-primary/30 transition-colors duration-300"
                >
                  <h3 className="font-display font-bold text-white text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-am-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOLUCIÓN ── */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-am-primary/30 bg-gradient-to-br from-am-surf2 to-am-primary/10 shadow-[0_0_60px_rgba(37,99,235,0.10)] px-8 py-14">
              <div className="absolute -top-40 -left-24 w-80 h-80 rounded-full bg-am-primary/20 blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-24 -right-16 w-64 h-64 rounded-full bg-am-accent/15 blur-[70px] pointer-events-none" />

              <div className="relative">
                <span className="inline-block px-4 py-1.5 rounded-full border border-white/15 bg-white/8 text-white/70 text-[12px] font-semibold tracking-widest uppercase mb-6">
                  La solución
                </span>

                <h2
                  className="font-display font-extrabold text-white text-balance leading-[1.15] mb-4"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
                >
                  Web profesional +{" "}
                  <span className="gradient-text-light">posicionamiento desde el día uno</span>
                </h2>

                <p className="text-white/60 text-base leading-relaxed mb-8 max-w-2xl">
                  En AM Tecnología no solo construimos tu página web — la diseñamos para que Google
                  la entienda, la indexe y la muestre cuando tus clientes te buscan. Todo desde{" "}
                  <span className="text-white font-semibold">$99.990 pago único</span>, sin mensualidades.
                </p>

                <a
                  href={WA}
                  data-cta-source="aparecer-google-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-am-green hover:bg-[#25c068] text-white font-bold px-7 py-3.5 rounded-xl transition-colors duration-200 text-[15px] shadow-[0_4px_24px_rgba(42,170,110,0.35)]"
                >
                  Cotizar ahora por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
