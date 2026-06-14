export default function AboutService() {
  return (
    <section className="metal-surface relative py-20 px-6">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      <div className="max-w-5xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">

          <header>
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/55 text-[11px] font-semibold tracking-widest uppercase mb-5">
              ¿Por qué aparecer en Google?
            </span>
            <h2
              className="font-display font-bold text-white text-balance leading-snug"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}
            >
              Páginas web profesionales{" "}
              <span className="gradient-text">que posicionan en Google</span>
            </h2>
          </header>

          <div className="flex flex-col gap-5 text-am-muted text-[15px] leading-relaxed">
            <p>
              En Chile, cuando alguien busca un gasfiter, un dentista, un abogado o cualquier servicio local, lo busca en Google. La gran mayoría de esas búsquedas termina en un mensaje o llamada al primer negocio que aparece en los resultados. Si tu empresa no está en esas primeras posiciones, esos clientes no saben que existes — y se van directo a tu competencia.
            </p>
            <p>
              El posicionamiento orgánico es la diferencia entre depender de referidos y recibir clientes de forma constante. A diferencia de la publicidad pagada, donde pagas por cada clic y desapareces cuando dejas de invertir, el posicionamiento orgánico trabaja para ti todos los días, sin costo por visita. Una vez que Google te recomienda, te sigue recomendando.
            </p>
            <p>
              En AM Tecnología nos especializamos en llevar negocios chilenos a las primeras posiciones de Google. Creamos páginas web profesionales optimizadas para tu rubro y tu ciudad, configuramos tu perfil en Google Maps y aplicamos estrategias de SEO local para que aparezcas exactamente cuando tus clientes te buscan — sin que tengas que entender de tecnología.
            </p>
            <p>
              Trabajamos con pymes y emprendedores en todo Chile, desde Santiago y Concepción hasta Temuco, Puerto Montt y Punta Arenas. Nuestro servicio de posicionamiento en Google parte desde <strong className="text-white font-semibold">$99.990 pago único</strong>, sin mensualidades ni costos ocultos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
