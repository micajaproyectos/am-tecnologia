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
            className="font-display font-extrabold text-white text-balance leading-[1.15] mb-3"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Cómo Aparecer en Google:{" "}
            <span className="gradient-text">Guía para Empresas en Chile</span>
          </h1>

          <p className="text-am-muted text-xl leading-snug max-w-2xl mb-4">
            Tu negocio existe. Que Google también lo sepa.
          </p>

          <p className="text-am-muted text-base leading-relaxed max-w-2xl">
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

      {/* ── METODOLOGÍA ── */}
      <section className="bg-black px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            Nuestra metodología
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">
            <h2
              className="font-display font-bold text-white text-balance leading-snug"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              Cómo hacemos que Google recomiende tu negocio
            </h2>
            <div className="flex flex-col gap-5 text-am-muted text-[15px] leading-relaxed">
              <p>
                Aparecer en Google de forma orgánica no es cuestión de suerte. Es el resultado de construir una presencia digital que Google pueda leer, entender y recomendar a las personas correctas en el momento en que buscan lo que ofreces. Trabajamos en tres frentes: la página web, la presencia en Google Maps y las palabras clave correctas para tu rubro y ciudad.
              </p>
              <p>
                La página web es la base. Diseñamos cada sitio con la estructura técnica y el contenido específico que Google necesita para entender tu rubro, tu ciudad y tu cliente ideal. No se trata de una página genérica: cada elemento está pensado para conectar tu negocio con búsquedas reales de personas que ya están listas para contratar.
              </p>
              <p>
                Google Maps es el segundo pilar. Tu perfil en Google Business Profile es lo que aparece cuando alguien busca tu tipo de negocio cerca de su ubicación. Un perfil bien configurado — con categorías correctas, horarios, zona de atención y reseñas — aumenta significativamente tu visibilidad local sin necesidad de pagar publicidad.
              </p>
              <p>
                Finalmente, las palabras clave determinan ante qué búsquedas apareces. Investigamos qué términos usan tus clientes en tu ciudad y construimos tu presencia digital alrededor de esas búsquedas específicas. Así Google sabe cuándo y a quién recomendarte, y tú recibes contactos de personas que ya están buscando lo que ofreces.
              </p>
            </div>
          </div>
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

      {/* ── INTERLINKING ── */}
      <section className="bg-black px-6 pb-20">
        <div className="max-w-4xl mx-auto border-t border-white/6 pt-12">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-6">
            También puede interesarte
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="/servicios/landing-page" className="flex flex-col gap-1 bg-am-surf2 border border-white/6 rounded-xl px-5 py-4 hover:border-am-primary/30 transition-colors group">
              <span className="font-semibold text-white text-[14px] group-hover:text-am-primary transition-colors">Landing Page de Ventas →</span>
              <span className="text-am-muted text-[12px]">Página optimizada para convertir visitas en clientes</span>
            </a>
            <a href="/servicios/one-page-corporativo" className="flex flex-col gap-1 bg-am-surf2 border border-white/6 rounded-xl px-5 py-4 hover:border-am-primary/30 transition-colors group">
              <span className="font-semibold text-white text-[14px] group-hover:text-am-primary transition-colors">One Page Corporativo →</span>
              <span className="text-am-muted text-[12px]">Presencia digital profesional en una sola página</span>
            </a>
            <a href="/blog/como-aparecer-en-google-empresa-chile" className="flex flex-col gap-1 bg-am-surf2 border border-white/6 rounded-xl px-5 py-4 hover:border-am-primary/30 transition-colors group">
              <span className="font-semibold text-white text-[14px] group-hover:text-am-primary transition-colors">Guía: Aparecer en Google →</span>
              <span className="text-am-muted text-[12px]">Guía completa para empresas y pymes en Chile</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
