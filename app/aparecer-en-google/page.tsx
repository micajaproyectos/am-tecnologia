import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Aparecer en Google | Posicionamiento Chile",

  description:
    "Ayudamos a empresas y pymes a aparecer en Google mediante páginas web optimizadas, presencia digital y posicionamiento orgánico.",

  alternates: {
    canonical: "https://www.amtecnologia.cl/aparecer-en-google",
  },
};

const reasons = [
  {
    title: "No tienes una página web propia",
    desc: "Google puede mostrar páginas web con información clara sobre tu negocio. Si hoy dependes solo de Instagram o WhatsApp, es más difícil que Google entienda qué haces y cuándo mostrarte.",
  },
  {
    title: "Tienes web, pero Google no puede entenderla",
    desc: "Una web puede verse bien, pero si no explica claramente qué haces, dónde atiendes y a quién ayudas, Google no tiene señales suficientes para mostrarla a las personas correctas.",
  },
  {
    title: "Tu negocio no está bien configurado en Google",
    desc: "Muchas empresas existen, pero no tienen correctamente configurada su presencia en Google Maps, datos de contacto, categoría, ubicación o zona de atención.",
  },
  {
    title: "Tu web no dice lo que tus clientes realmente buscan",
    desc: "Google necesita conectar tu negocio con las palabras que usan tus clientes. Si tu sitio habla de forma muy genérica, puede perder oportunidades frente a competidores más claros.",
  },
];

export default function AparecerEnGooglePage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden pt-[72px] bg-black">
        <div className="absolute -top-52 -left-24 w-[600px] h-[600px] rounded-full bg-am-primary/15 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-16 w-[500px] h-[500px] rounded-full bg-am-accent/10 blur-[90px] pointer-events-none" />
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />

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
            Tu negocio existe.{" "}
            <br className="hidden sm:block" />
            Que <span className="gradient-text">Google</span> también lo sepa.
          </h1>

          <p className="text-am-muted text-lg leading-relaxed max-w-2xl">
            Aparecer en Google no requiere ser una empresa grande ni pagar
            publicidad mensual. Requiere una web optimizada y tu negocio
            configurado correctamente. Eso es exactamente lo que hacemos.
          </p>
        </div>
      </section>

      {/* ── POR QUÉ NO APARECES ── */}
      <section className="metal-surface relative px-6 py-24">
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            Diagnóstico
          </p>

          <h2
            className="font-display font-bold text-white text-balance mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            ¿Por qué mi negocio{" "}
            <span className="gradient-text">no aparece en Google?</span>
          </h2>

          <p className="text-am-muted text-base leading-relaxed mb-12 max-w-2xl">
            Si llevas tiempo operando y aun así no apareces, no estás solo.
            Hay razones concretas por las que Google no muestra un negocio,
            y ninguna tiene que ver con el tamaño de tu empresa.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="bg-am-surf2 border border-white/6 rounded-2xl px-6 py-6 hover:border-am-primary/30 transition-colors duration-300"
              >
                <h3 className="font-display font-bold text-white text-[17px] mb-3">
                  {item.title}
                </h3>
                <p className="text-am-muted text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-am-muted text-base leading-relaxed mt-12 max-w-2xl border-t border-white/5 pt-8">
            La buena noticia es que todo esto se puede ordenar. No necesitas
            entender cómo funciona Google por dentro; necesitas una presencia
            digital clara, bien configurada y pensada para que tus clientes
            te encuentren.
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
            Lo que preguntan antes de aparecer en Google
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 items-start">
            <div className="border-b border-white/10 pb-8 pt-6">
              <h3 className="font-display font-bold text-white text-[18px] mb-3">
                ¿Cuánto tarda en aparecer mi negocio en Google?
              </h3>
              <p className="text-am-muted text-[15px] leading-relaxed">
                En la mayoría de los casos, los primeros avances pueden verse entre 2 y 8 semanas.
                Depende del rubro, la ciudad y la competencia que ya exista en Google.
                Lo importante es empezar con una web clara y una presencia bien configurada.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8 pt-6">
              <h3 className="font-display font-bold text-white text-[18px] mb-3">
                ¿Hay que pagar publicidad para aparecer en Google?
              </h3>
              <p className="text-am-muted text-[15px] leading-relaxed">
                No necesariamente. Puedes aparecer de forma orgánica si tu negocio tiene una
                web optimizada y datos claros para Google. La publicidad ayuda a acelerar
                resultados, pero no reemplaza una buena base digital.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8 pt-6">
              <h3 className="font-display font-bold text-white text-[18px] mb-3">
                ¿Esto funciona para negocios pequeños?
              </h3>
              <p className="text-am-muted text-[15px] leading-relaxed">
                Sí. De hecho, muchos negocios pequeños pueden ganar visibilidad local cuando
                explican bien qué hacen, dónde atienden y cómo contactarlos. No necesitas ser
                una empresa grande para empezar a aparecer mejor.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8 pt-6">
              <h3 className="font-display font-bold text-white text-[18px] mb-3">
                ¿Qué pasa si ya tengo una página web?
              </h3>
              <p className="text-am-muted text-[15px] leading-relaxed">
                Podemos revisar si tu web actual le está entregando a Google la información
                correcta. A veces no se trata de crear todo desde cero, sino de ordenar,
                mejorar y posicionar mejor lo que ya existe.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8 pt-6 md:col-span-2">
              <h3 className="font-display font-bold text-white text-[18px] mb-3">
                ¿Cuánto cuesta aparecer en Google?
              </h3>
              <p className="text-am-muted text-[15px] leading-relaxed">
                En AM Tecnología trabajamos soluciones desde $99.990 pago único, dependiendo
                del tipo de negocio y del nivel de presencia digital que necesite. La idea es
                que tengas una base profesional para empezar a ser encontrado.
              </p>
            </div>
          </div>

          <p className="text-am-muted text-[15px] leading-relaxed mt-10 border-t border-white/5 pt-8">
            Si tienes una situación específica que no está aquí, lo más rápido es contarnos
            por WhatsApp qué negocio tienes y en qué ciudad quieres aparecer.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
