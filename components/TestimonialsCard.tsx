const testimonials = [
  {
    name: "Dra. Solange B.",
    city: "Santiago",
    service: "Landing Médica",
    quote:
      "Me crearon una página web amigable, fácil y rápida para promocionarme y posicionarme en el mercado. Impulsó mi negocio desde el primer día.",
  },
  {
    name: "Ajo Negro Austral",
    city: "Prov. de Palena",
    service: "Tienda Online",
    quote:
      "Comencé a vender mis ajos en la web y hoy distribuyo a toda mi región. ¡No lo hubiera logrado sin AM Tecnología!",
  },
  {
    name: "Millanolli",
    city: "Puerto Montt",
    service: "Catálogo Web",
    quote:
      "Necesitaba catálogo, mostrar mis productos y reconocimiento en Google. Todo lo hizo sin problemas y muy rápido. ¡Gracias Allan!",
  },
];

export default function TestimonialsCard() {
  return (
    <div className="relative w-full max-w-[460px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(37,211,102,0.08),0_16px_48px_rgba(0,0,0,0.5)]">

      {/* WhatsApp-style header */}
      <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#25d366]/20 border border-[#25d366]/40 flex items-center justify-center shrink-0">
          <WaIcon />
        </div>
        <div>
          <p className="text-white font-semibold text-sm leading-tight">AM Tecnología</p>
          <p className="text-white/60 text-[11px]">Lo que dicen nuestros clientes</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse" />
          <span className="text-[#25d366] text-[11px] font-semibold">en línea</span>
        </div>
      </div>

      {/* Chat background */}
      <div
        className="bg-[#0b1117] px-4 py-5 flex flex-col gap-5 border border-white/6 border-t-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.015'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      >
        {testimonials.map((t) => (
          <div key={t.name} className="flex flex-col gap-1">
            {/* Sender name */}
            <span className="text-[#25d366] text-[11px] font-bold ml-3">
              {t.name} · {t.city}
            </span>

            {/* Message bubble */}
            <div className="relative bg-[#1a2a1a] border border-[#25d366]/15 rounded-2xl rounded-tl-none px-4 py-3 max-w-[92%]">
              {/* Triangle */}
              <div className="absolute -top-[1px] -left-[8px] w-0 h-0 border-t-[10px] border-t-[#25d366]/15 border-r-[10px] border-r-transparent" />

              <p className="text-white/90 text-[13px] leading-[1.65]">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/5">
                <span className="text-[#25d366] text-[10px] font-semibold uppercase tracking-wide">
                  {t.service}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 text-xs tracking-tight">★★★★★</span>
                  <span className="text-white/30 text-[10px]">✓✓</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Footer */}
        <p className="text-center text-white/25 text-[11px] pt-1 border-t border-white/5">
          +50 empresas en Chile ya tienen su web con AM Tecnología
        </p>
      </div>
    </div>
  );
}

function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25d366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
