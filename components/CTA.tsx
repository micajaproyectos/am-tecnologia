const WA =
  "https://wa.me/56985660954?text=Hola%2C%20quiero%20agendar%20mi%20diagn%C3%B3stico%20digital%20gratuito";

export default function CTA() {
  return (
    <section id="contacto" className="relative py-28 overflow-hidden">
      {/* Image background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed pointer-events-none"
        style={{ backgroundImage: "url('/fondo.png')" }}
      />
      {/* Overlay más oscuro y azulado — contraste fuerte vs FAQ */}
      <div className="absolute inset-0 bg-black/85 pointer-events-none" />
      <div className="absolute inset-0 bg-am-primary/12 pointer-events-none" />

      {/* Fade superior desde FAQ */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-am-primary/20 bg-gradient-to-br from-[#0d1120] via-[#131928] to-[#0b1020] shadow-[0_0_60px_rgba(37,99,235,0.12)] text-center px-8 py-20">
          {/* Orbs */}
          <div className="absolute -top-40 -left-24 w-80 h-80 rounded-full bg-am-primary/20 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-16 w-64 h-64 rounded-full bg-am-accent/15 blur-[70px] pointer-events-none" />

          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative">
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/15 bg-white/8 text-white/70 text-[13px] font-semibold tracking-widest uppercase mb-6">
              ¿Listo para dar el salto?
            </span>

            <h2
              className="font-display font-extrabold text-white text-balance leading-[1.15] mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Agenda tu diagnóstico{" "}
              <span className="gradient-text-light">digital gratuito</span>
            </h2>

            <p className="text-white/60 text-lg leading-[1.75] max-w-xl mx-auto mb-10">
              Conversemos sin compromiso. En 30 minutos te decimos exactamente
              qué necesita tu negocio para crecer en internet.
            </p>

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-md border border-white/50 text-white font-bold text-[16px] hover:border-white hover:bg-white/8 hover:-translate-y-0.5 transition-all duration-200"
            >
              <WaIcon />
              Escribir por WhatsApp ahora
            </a>

            <p className="text-white/35 text-sm mt-5">
              Respuesta en menos de 1 hora · Lunes a Sábado 9:00–20:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
