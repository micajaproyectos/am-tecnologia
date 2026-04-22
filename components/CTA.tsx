const WA =
  "https://wa.me/56985660954?text=Hola%2C%20quiero%20cotizar%20mi%20p%C3%A1gina%20web";

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
              Cotiza tu proyecto{" "}
              <span className="gradient-text-light">web hoy</span>
            </h2>

            <p className="text-white/60 text-lg leading-[1.75] max-w-xl mx-auto mb-10">
              Cuéntanos sobre tu proyecto y te enviamos una cotización en menos
              de 1 hora. Sin vueltas, sin sorpresas.
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

            <div className="mt-8 pt-7 border-t border-white/8">
              <p className="text-white/40 text-[13px] mb-3">¿Ya trabajaste con nosotros?</p>
              <a
                href="https://g.page/r/CX_Uc-66lRnzEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-200"
              >
                <GoogleColorIcon />
                <span className="text-white/70 text-[13px] font-medium hover:text-white transition-colors">
                  Déjanos tu reseña en Google
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GoogleColorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function WaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
