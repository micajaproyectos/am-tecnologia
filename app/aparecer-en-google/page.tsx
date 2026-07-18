import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Cómo Aparecer en Google en Chile | Posicionamiento Web para Pymes",
  description:
    "¿Tu negocio no aparece en Google? Creamos páginas web con SEO incluido para que tus clientes te encuentren antes que a tu competencia. Desde $199.990.",
  alternates: {
    canonical: "https://www.amtecnologia.cl/aparecer-en-google",
  },
};

const WA =
  "https://wa.me/56985660954?text=Hola%2C%20quiero%20saber%20c%C3%B3mo%20aparecer%20en%20Google%20en%20mi%20ciudad";

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

const formas = [
  {
    num: "01",
    title: "SEO orgánico — la base de todo",
    body: "El SEO es el conjunto de acciones que hacen que Google entienda qué hace tu negocio y en qué búsquedas debe mostrarte. Empieza con tu página web: sin web, Google no puede indexarte. Y si tienes web pero está mal construida — sin estructura de headings correcta, sin velocidad, sin contenido relevante — Google no sabe cómo clasificarla. Lo mínimo que necesita tu web: título de página con tu servicio y ciudad, textos que expliquen qué haces y a quién sirves, certificado SSL, velocidad bajo 3 segundos y diseño responsive para celular.",
  },
  {
    num: "02",
    title: "Google Maps — el canal más subestimado",
    body: "Para negocios locales en Chile, Google Maps puede ser el canal de mayor retorno. El 76% de las personas que hacen una búsqueda local visitan el negocio en las siguientes 24 horas. Crear y optimizar tu ficha de Google Business Profile es completamente gratuito y puede generarte llamadas directas desde la primera semana. Los factores que más impactan tu posición en Maps: categoría correcta, descripción con tus palabras clave locales, horarios actualizados, fotos reales del negocio y — sobre todo — reseñas de clientes.",
  },
  {
    num: "03",
    title: "Contenido de valor",
    body: "Cada artículo de blog o guía que publicas en tu web es una nueva oportunidad de aparecer para una búsqueda distinta. Si eres contador y publicas \"cuándo vence el IVA en Chile\", apareces en esa búsqueda sin pagar publicidad. El contenido construye relevancia temática: Google entiende mejor de qué trata tu negocio cuando tienes múltiples páginas relacionadas con tu rubro. Un artículo bien escrito al mes tiene más impacto que diez publicaciones apresuradas.",
  },
  {
    num: "04",
    title: "Google Ads — resultados inmediatos",
    body: "Los anuncios pagados de Google aparecen antes que los resultados orgánicos. Son útiles para generar clientes mientras el SEO madura, o para rubros muy competitivos. La desventaja: cuando dejas de pagar, desapareces. Por eso la estrategia más inteligente es usar Ads mientras construyes posicionamiento orgánico duradero. Si quieres partir por aquí, configuramos tu primera campaña con landing de conversión incluida — bien hecha desde el día uno, sin quemar presupuesto aprendiendo.",
  },
  {
    num: "05",
    title: "Autoridad y menciones externas",
    body: "Google mide cuántos otros sitios confiables mencionan o enlazan al tuyo. A más menciones de calidad, mayor autoridad. Esto se construye con tiempo: presencia en directorios de empresas chilenas, colaboraciones con otros negocios y coherencia de tu información en todas las plataformas. No es inmediato, pero refuerza el posicionamiento de todo lo demás.",
  },
];

const errores = [
  {
    title: "Depender solo de redes sociales",
    desc: "Cuando alguien busca 'gasfiter en Osorno' en Google, aparecen páginas web y fichas de Maps — no perfiles de Instagram. Las redes no te posicionan en búsquedas de compra.",
  },
  {
    title: "Tener web pero sin optimización",
    desc: "Una web puede verse bien y aun así ser invisible para Google. Sin velocidad adecuada, sin headings correctos o sin textos que mencionen tu ciudad y servicio, Google no sabe cómo clasificarla.",
  },
  {
    title: "Google Business sin completar",
    desc: "Un perfil a medias es casi tan malo como no tener perfil. Sin categoría correcta, sin descripción, sin fotos reales y sin horarios actualizados, la ficha no compite con la que sí está completa.",
  },
  {
    title: "Información inconsistente",
    desc: "Si tu web dice 'Av. Independencia 123' y tu Google Maps dice algo distinto, Google detecta inconsistencia. Nombre, dirección y teléfono deben ser idénticos en todas las plataformas.",
  },
  {
    title: "Sin reseñas de clientes",
    desc: "Un negocio con 0 reseñas pierde frente a uno con 20, aunque técnicamente esté mejor optimizado. Solicitar reseñas activamente es parte de la estrategia, no un extra opcional.",
  },
  {
    title: "No monitorear ni actualizar nada",
    desc: "Una web publicada y abandonada no mejora sola. Google premia la actividad: publicaciones en Maps, nuevo contenido en la web y respuestas a reseñas son señales que suman.",
  },
];

const faqItems = [
  {
    q: "¿Cuánto tarda en aparecer mi negocio en Google?",
    a: "Depende del canal. En Google Maps, con un perfil bien configurado, los primeros resultados pueden verse en 2 a 6 semanas. Para posicionamiento orgánico (SEO), búsquedas locales con poca competencia pueden tomar entre 4 y 12 semanas. Rubros más competitivos, entre 3 y 6 meses. Google Ads es inmediato — pero pagas por cada clic.",
  },
  {
    q: "¿Hay que pagar publicidad para aparecer en Google?",
    a: "No necesariamente. Los resultados orgánicos y Google Maps son completamente gratuitos. La publicidad (Google Ads) ayuda a acelerar resultados, pero no reemplaza una buena base digital. Una web optimizada y un perfil de Maps bien configurado generan tráfico sin costo por clic.",
  },
  {
    q: "¿Esto funciona para negocios pequeños o unipersonales?",
    a: "Sí. De hecho, muchos negocios pequeños ganan visibilidad local justamente porque explican bien qué hacen, dónde atienden y cómo contactarlos. No necesitas ser una empresa grande — necesitas ser claro y estar bien configurado.",
  },
  {
    q: "¿Qué pasa si ya tengo una página web?",
    a: "Podemos revisar si tu web actual le está entregando a Google la información correcta. A veces no se trata de crear todo desde cero, sino de ordenar, mejorar y posicionar mejor lo que ya existe.",
  },
  {
    q: "¿Cuánto cuesta aparecer en Google?",
    a: "En AM Tecnología trabajamos soluciones desde $199.990 pago único, dependiendo del tipo de negocio y del nivel de presencia digital que necesite. Google Maps es completamente gratuito. La base profesional para empezar a ser encontrado no requiere mensualidades.",
  },
  {
    q: "¿Cuánto tarda en aparecer en Google Maps específicamente?",
    a: "Entre 2 y 6 semanas desde que creas y verificas tu perfil de Google Business Profile. En rubros con poca competencia digital en tu ciudad, puedes aparecer en el Top 3 del Local Pack en ese tiempo. El proceso de verificación por correo postal tarda entre 5 y 14 días hábiles en Chile.",
  },
  {
    q: "¿Puedo aparecer en Google si no tengo local físico?",
    a: "Sí. Puedes configurar tu perfil de Google Business Profile con una zona de servicio en lugar de dirección física. Si trabajas de forma remota o atiendes a domicilio, Google Maps te muestra en las ciudades o regiones que configures.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.amtecnologia.cl" },
    { "@type": "ListItem", position: 2, name: "Aparecer en Google", item: "https://www.amtecnologia.cl/aparecer-en-google" },
  ],
};

export default function AparecerEnGooglePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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

          <p className="text-am-muted text-base leading-relaxed max-w-2xl mb-8">
            Aparecer en Google no requiere ser una empresa grande ni pagar
            publicidad mensual. Requiere una web optimizada y tu negocio
            configurado correctamente. Eso es exactamente lo que hacemos.
          </p>

          <a
            href={WA}
            data-cta-source="aparecer_hero"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-am-primary hover:bg-am-primary/90 text-white font-semibold text-[15px] transition-all duration-200"
          >
            Quiero aparecer en Google →
          </a>
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

      {/* ── CÓMO FUNCIONA EL POSICIONAMIENTO ── */}
      <section className="bg-black px-6 py-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">
          <header>
            <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
              Cómo funciona
            </p>
            <h2
              className="font-display font-bold text-white text-balance leading-snug"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              El posicionamiento en Google explicado sin tecnicismos
            </h2>
          </header>
          <div className="flex flex-col gap-5 text-am-muted text-[15px] leading-relaxed">
            <p>
              Google tiene tres zonas donde puede aparecer tu negocio. La primera son los <strong className="text-white">resultados orgánicos</strong>: la lista de páginas web que Google muestra según relevancia. Llegar ahí no se paga por clic — se gana con una web bien construida. La segunda es el <strong className="text-white">Local Pack de Google Maps</strong>: el mapa con tres negocios que aparece al inicio de búsquedas locales como "dentista en Temuco" o "taller mecánico cerca de mí". La tercera son los <strong className="text-white">anuncios de Google Ads</strong>, marcados como "Patrocinado", que funcionan mientras pagas.
            </p>
            <p>
              Para decidir a quién mostrar, Google evalúa tres señales principales: <strong className="text-white">relevancia</strong> (¿tu negocio responde a lo que busca el usuario?), <strong className="text-white">autoridad</strong> (¿Google confía en tu web comparada con la competencia?) y <strong className="text-white">experiencia</strong> (¿tu sitio carga rápido y se ve bien en celular?). Una web bien construida trabaja las tres señales desde el primer día.
            </p>
            <p>
              El error más común es creer que "tener presencia en internet" es suficiente. Una página web existe — pero posicionarse significa que Google te considera la mejor respuesta para una búsqueda específica. Esa diferencia es la que separa a los negocios que reciben clientes desde Google de los que simplemente tienen un sitio que nadie visita.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPARATIVA ── */}
      <section className="bg-black px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            Comparativa
          </p>
          <h2
            className="font-display font-bold text-white text-balance mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            SEO, Google Maps y Google Ads:{" "}
            <span className="gradient-text">¿cuál sirve para qué?</span>
          </h2>
          <p className="text-am-muted text-base leading-relaxed mb-10 max-w-2xl">
            No son opciones excluyentes — son herramientas que se complementan. Antes de invertir tiempo o dinero, conviene entender qué hace cada canal y qué resultados genera.
          </p>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[540px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 pr-8 text-am-muted text-[11px] font-semibold uppercase tracking-widest min-w-[110px]"> </th>
                  <th className="pb-4 pr-8 text-am-primary text-[13px] font-bold">SEO orgánico</th>
                  <th className="pb-4 pr-8 text-blue-400 text-[13px] font-bold">Google Maps</th>
                  <th className="pb-4 text-yellow-400 text-[13px] font-bold">Google Ads</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Costo", "Solo inversión inicial", "Completamente gratis", "Pago por cada clic"],
                  ["Tiempo", "4 – 12 semanas", "2 – 6 semanas", "Inmediato"],
                  ["Duración", "Permanente ✓", "Permanente ✓", "Solo mientras pagas"],
                  ["Requisito", "Web optimizada", "Ficha configurada", "Presupuesto mensual"],
                  ["Ideal para", "Crecer sin pagar por clic", "Llamadas directas locales", "Resultados rápidos"],
                ].map(([label, seo, maps, ads], i) => (
                  <tr key={label} className={i < 4 ? "border-b border-white/6" : ""}>
                    <td className="py-4 pr-8 text-am-muted font-semibold text-[11px] uppercase tracking-wide">{label}</td>
                    <td className={`py-4 pr-8 text-[13.5px] ${label === "Duración" ? "text-am-primary" : "text-white"}`}>{seo}</td>
                    <td className={`py-4 pr-8 text-[13.5px] ${label === "Duración" ? "text-am-primary" : "text-white"}`}>{maps}</td>
                    <td className={`py-4 text-[13.5px] ${label === "Duración" ? "text-am-muted" : "text-white"}`}>{ads}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── LAS 5 FORMAS REALES ── */}
      <section className="metal-surface relative overflow-hidden px-6 py-24">
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        <div className="relative z-20 max-w-4xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            Estrategia
          </p>
          <h2
            className="font-display font-bold text-white text-balance mb-10"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Las 5 formas reales de{" "}
            <span className="gradient-text">aparecer en Google</span>
          </h2>
          <div className="flex flex-col gap-8">
            {formas.map((f) => (
              <div key={f.num} className="flex gap-6 items-start">
                <span className="font-display font-extrabold text-white/10 text-5xl leading-none shrink-0 select-none w-14 text-right">
                  {f.num}
                </span>
                <div className="pt-1">
                  <h3 className="font-display font-bold text-white text-[17px] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-am-muted text-[14px] leading-relaxed">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUÁNTO TARDA ── */}
      <section className="bg-black px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            Tiempos reales
          </p>
          <h2
            className="font-display font-bold text-white text-balance mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            ¿Cuánto tarda en aparecer{" "}
            <span className="gradient-text">mi negocio en Google?</span>
          </h2>
          <p className="text-am-muted text-base leading-relaxed mb-10 max-w-2xl">
            Esta es la pregunta que más recibimos. La respuesta honesta es: depende del canal y de cuánta competencia digital ya existe en tu rubro y ciudad.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            <div className="bg-am-surf2 border border-white/6 rounded-2xl px-6 py-6">
              <div className="text-am-primary font-display font-bold text-[13px] tracking-widest uppercase mb-2">Google Maps</div>
              <div className="font-display font-bold text-white text-2xl mb-2">2 – 6 semanas</div>
              <p className="text-am-muted text-[13.5px] leading-relaxed">Con un perfil bien configurado y verificado. En rubros con poca competencia digital en tu ciudad, puedes aparecer en el Top 3 en ese tiempo.</p>
            </div>
            <div className="bg-am-surf2 border border-white/6 rounded-2xl px-6 py-6">
              <div className="text-am-accent font-display font-bold text-[13px] tracking-widest uppercase mb-2">SEO orgánico local</div>
              <div className="font-display font-bold text-white text-2xl mb-2">4 – 12 semanas</div>
              <p className="text-am-muted text-[13.5px] leading-relaxed">Para búsquedas locales con poca competencia. Una web recién publicada, bien optimizada para tu ciudad y rubro, puede comenzar a posicionarse en este plazo.</p>
            </div>
            <div className="bg-am-surf2 border border-white/6 rounded-2xl px-6 py-6">
              <div className="text-purple-400 font-display font-bold text-[13px] tracking-widest uppercase mb-2">SEO búsquedas competitivas</div>
              <div className="font-display font-bold text-white text-2xl mb-2">3 – 6 meses</div>
              <p className="text-am-muted text-[13.5px] leading-relaxed">Rubros como abogados, clínicas o inmobiliarias en ciudades grandes requieren más tiempo porque ya hay muchos competidores posicionados.</p>
            </div>
            <div className="bg-am-surf2 border border-white/6 rounded-2xl px-6 py-6">
              <div className="text-yellow-400 font-display font-bold text-[13px] tracking-widest uppercase mb-2">Google Ads</div>
              <div className="font-display font-bold text-white text-2xl mb-2">Inmediato</div>
              <p className="text-am-muted text-[13.5px] leading-relaxed">Los anuncios pueden aparecer el mismo día que activas la campaña. Pero requieren inversión continua: cuando dejas de pagar, desapareces.</p>
            </div>
          </div>
          <p className="text-am-muted text-[14px] leading-relaxed max-w-2xl border-t border-white/5 pt-8">
            Lo que más acelera el proceso: empezar con una web publicada (Google ya la conoce), estar en una ciudad con poca competencia digital, tener un rubro específico bien descrito, y activar Google Maps desde el inicio. El error más común es esperar resultados en la primera semana — el SEO es una inversión que construye con el tiempo.
          </p>
        </div>
      </section>

      {/* ── CÓMO SALIR PRIMERO ── */}
      <section className="metal-surface relative overflow-hidden px-6 py-24">
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        <div className="relative z-20 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">
          <header>
            <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
              Posición #1
            </p>
            <h2
              className="font-display font-bold text-white text-balance leading-snug"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              Cómo salir primero en Google
            </h2>
          </header>
          <div className="flex flex-col gap-5 text-am-muted text-[15px] leading-relaxed">
            <p>
              Aparecer en Google es un logro. Salir primero es el objetivo real. Google prioriza a los negocios que mejor responden a la intención del buscador — no al más grande ni al más antiguo, sino al más <strong className="text-white">relevante y confiable</strong> para esa búsqueda específica.
            </p>
            <p>
              Para los resultados orgánicos, lo que más impacta es la <strong className="text-white">especificidad del contenido</strong>: una página que diga "gasfiter en Antofagasta con servicio de urgencia 24 horas" posiciona mejor para esa búsqueda que una página genérica de "gasfiter en Chile". También influye la <strong className="text-white">velocidad y experiencia móvil</strong>: Google usa ambos como factor de ranking directo. Y los <strong className="text-white">datos estructurados</strong> (Schema.org) que le dicen explícitamente a Google qué tipo de negocio eres, qué ofreces y cuánto cobras.
            </p>
            <p>
              Para Google Maps, los tres factores son: <strong className="text-white">relevancia</strong> (qué tan bien tu perfil coincide con la búsqueda), <strong className="text-white">distancia</strong> (qué tan cerca estás del usuario) y <strong className="text-white">prominencia</strong> (reseñas, actividad reciente, web conectada). De los tres, la prominencia es la que más puedes trabajar activamente: consigue reseñas, respóndelas, publica actualizaciones en tu perfil y conecta tu web a tu ficha de Maps.
            </p>
          </div>
        </div>
      </section>

      {/* ── ERRORES ── */}
      <section className="bg-black px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            Lo que frena el posicionamiento
          </p>
          <h2
            className="font-display font-bold text-white text-balance mb-10"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Errores que impiden{" "}
            <span className="gradient-text">posicionar un negocio</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {errores.map((e) => (
              <div
                key={e.title}
                className="bg-am-surf2 border border-white/6 rounded-2xl px-6 py-6 hover:border-am-primary/30 transition-colors duration-300"
              >
                <h3 className="font-display font-bold text-white text-[16px] mb-2">
                  {e.title}
                </h3>
                <p className="text-am-muted text-[13.5px] leading-relaxed">
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASOS ── */}
      <section className="bg-black px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            Resultados reales
          </p>
          <h2
            className="font-display font-bold text-white text-balance mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Negocios que empezaron a aparecer{" "}
            <span className="gradient-text">en Google</span>
          </h2>
          <p className="text-am-muted text-base leading-relaxed mb-10 max-w-2xl">
            Ejemplos de lo que ocurre cuando una empresa implementa correctamente su presencia digital en Chile.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-am-surf2 border border-white/6 rounded-2xl p-6 hover:border-am-primary/20 transition-colors">
              <div className="inline-flex px-3 py-1 rounded-full bg-am-primary/10 border border-am-primary/20 text-am-primary text-[11px] font-bold tracking-wide mb-4">
                Taller mecánico · Temuco
              </div>
              <p className="text-am-muted text-[13.5px] leading-relaxed">
                Sin web y sin presencia en Google Maps. Creamos una landing page y configuramos su perfil de Google Business. En 5 semanas apareció en el Top 3 de Maps para búsquedas de talleres en la zona. Hoy recibe entre 4 y 6 consultas directas semanales desde Google, sin publicidad pagada.
              </p>
            </div>
            <div className="bg-am-surf2 border border-white/6 rounded-2xl p-6 hover:border-blue-500/20 transition-colors">
              <div className="inline-flex px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-bold tracking-wide mb-4">
                Psicóloga · Santiago
              </div>
              <p className="text-am-muted text-[13.5px] leading-relaxed">
                Tenía Instagram activo pero cero clientes desde Google. Con una landing page optimizada para búsquedas locales de psicología en su comuna, comenzó a recibir consultas orgánicas en el segundo mes. Al tercer mes alcanzó la primera página sin publicidad.
              </p>
            </div>
            <div className="bg-am-surf2 border border-white/6 rounded-2xl p-6 hover:border-purple-500/20 transition-colors">
              <div className="inline-flex px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[11px] font-bold tracking-wide mb-4">
                Operador turístico · Puerto Montt
              </div>
              <p className="text-am-muted text-[13.5px] leading-relaxed">
                Quería captar turistas que buscan actividades en la Patagonia. Con contenido específico para búsquedas de temporada y el perfil de Maps activo, triplicaron el tráfico orgánico en cuatro meses. Google superó a Instagram como principal fuente de clientes nuevos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO AYUDAMOS ── */}
      <section className="metal-surface relative overflow-hidden px-6 py-24">
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        <div className="relative z-20 max-w-4xl mx-auto">
          <p className="text-am-accent text-[13px] font-bold tracking-widest uppercase mb-4">
            AM Tecnología
          </p>
          <h2
            className="font-display font-bold text-white text-balance mb-6"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Cómo ayudamos a empresas chilenas{" "}
            <span className="gradient-text">a posicionarse en Google</span>
          </h2>
          <p className="text-am-muted text-base leading-[1.85] max-w-3xl mb-10">
            AM Tecnología trabaja 100% remoto con pymes y emprendedores en todo Chile. Diseñamos tu presencia digital desde cero — web, Google Maps, datos estructurados y contenido — para que Google comience a recomendarte cuando alguien busca lo que ofreces, sin que tengas que entender de tecnología ni pagar mensualidades.
          </p>

          {/* Servicios */}
          <p className="text-am-muted text-[13px] font-semibold uppercase tracking-widest mb-4">Servicios</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { href: "/servicios/landing-page", label: "Landing Page de Ventas", price: "desde $199.990" },
              { href: "/servicios/campanas-google-ads", label: "Campaña Google Ads + Landing", price: "$399.990" },
              { href: "/servicios/one-page-corporativo", label: "One Page Corporativo", price: "desde $199.990" },
              { href: "/servicios/ecommerce", label: "Tienda Online", price: "$199.990 a $399.990" },
              { href: "/servicios/automatizaciones-ia", label: "Automatizaciones con IA", price: "desde $199.990" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                prefetch={true}
                className="flex flex-col gap-1 bg-am-bg border border-white/6 rounded-xl px-5 py-4 hover:border-am-primary/30 transition-colors group"
              >
                <span className="font-semibold text-white text-[13px] group-hover:text-am-primary transition-colors leading-snug">
                  {s.label} →
                </span>
                <span className="text-am-muted text-[12px]">{s.price}</span>
              </Link>
            ))}
          </div>

          {/* Ciudades */}
          <p className="text-am-muted text-[13px] font-semibold uppercase tracking-widest mb-4">Posicionamiento por ciudad</p>
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { href: "/posicionamiento-google-santiago", label: "Santiago" },
              { href: "/posicionamiento-google-concepcion", label: "Concepción" },
              { href: "/posicionamiento-google-temuco", label: "Temuco" },
              { href: "/posicionamiento-google-valdivia", label: "Valdivia" },
              { href: "/posicionamiento-google-puerto-montt", label: "Puerto Montt" },
              { href: "/posicionamiento-google-osorno", label: "Osorno" },
              { href: "/posicionamiento-google-coyhaique", label: "Coyhaique" },
              { href: "/posicionamiento-google-punta-arenas", label: "Punta Arenas" },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                prefetch={true}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/4 text-am-muted hover:text-white hover:border-am-primary/40 text-[13px] font-semibold transition-all duration-200"
              >
                {c.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-white/6">
            <a
              href={WA}
              data-cta-source="aparecer_ayudamos"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-am-primary hover:bg-am-primary/90 text-white font-semibold text-[15px] transition-all duration-200"
            >
              Cotizar ahora →
            </a>
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
            Lo que preguntan antes de{" "}
            <span className="gradient-text">aparecer en Google</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {faqItems.map((faq, i) => (
              <div
                key={faq.q}
                className={`border-b border-white/10 pb-8 pt-6 ${i === faqItems.length - 1 && faqItems.length % 2 !== 0 ? "md:col-span-2" : ""}`}
              >
                <h3 className="font-display font-bold text-white text-[18px] mb-3">
                  {faq.q}
                </h3>
                <p className="text-am-muted text-[15px] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/servicios/landing-page"
              className="flex flex-col gap-1 bg-am-surf2 border border-white/6 rounded-xl px-5 py-4 hover:border-am-primary/30 transition-colors group"
            >
              <span className="font-semibold text-white text-[14px] group-hover:text-am-primary transition-colors">
                Landing Page de Ventas →
              </span>
              <span className="text-am-muted text-[12px]">
                Página optimizada para convertir visitas en clientes
              </span>
            </Link>
            <Link
              href="/servicios/one-page-corporativo"
              className="flex flex-col gap-1 bg-am-surf2 border border-white/6 rounded-xl px-5 py-4 hover:border-am-primary/30 transition-colors group"
            >
              <span className="font-semibold text-white text-[14px] group-hover:text-am-primary transition-colors">
                One Page Corporativo →
              </span>
              <span className="text-am-muted text-[12px]">
                Presencia digital profesional en una sola página
              </span>
            </Link>
            <Link
              href="/blog/como-aparecer-en-google-empresa-chile"
              className="flex flex-col gap-1 bg-am-surf2 border border-white/6 rounded-xl px-5 py-4 hover:border-am-primary/30 transition-colors group"
            >
              <span className="font-semibold text-white text-[14px] group-hover:text-am-primary transition-colors">
                Guía: Aparecer en Google →
              </span>
              <span className="text-am-muted text-[12px]">
                Guía completa para empresas y pymes en Chile
              </span>
            </Link>
            <Link
              href="/blog/google-ads-vs-seo-chile"
              className="flex flex-col gap-1 bg-am-surf2 border border-white/6 rounded-xl px-5 py-4 hover:border-am-primary/30 transition-colors group"
            >
              <span className="font-semibold text-white text-[14px] group-hover:text-am-primary transition-colors">
                Google Ads vs SEO: cuál conviene →
              </span>
              <span className="text-am-muted text-[12px]">
                Comparativa honesta para empresas en Chile
              </span>
            </Link>
            <Link
              href="/blog/por-que-mi-negocio-no-aparece-en-google"
              className="flex flex-col gap-1 bg-am-surf2 border border-white/6 rounded-xl px-5 py-4 hover:border-am-primary/30 transition-colors group"
            >
              <span className="font-semibold text-white text-[14px] group-hover:text-am-primary transition-colors">
                ¿Por qué no aparezco en Google? →
              </span>
              <span className="text-am-muted text-[12px]">
                Diagnóstico real para negocios en Chile
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
