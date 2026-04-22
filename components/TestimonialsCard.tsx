"use client";

const reviews = [
  {
    name: "Claudia Villagrán",
    initial: "C",
    color: "#8430ce",
    badge: "1 opinión",
    timeAgo: "Hace 4 horas",
    stars: 5,
    text: "¡Excelente servicio! Superó mis expectativas. Respondieron rápidamente cada solicitud y resolvieron todas mis dudas a tiempo y de forma clara. Súper recomendado.",
  },
  {
    name: "Moisés Olate Figueroa",
    initial: "M",
    color: "#fa7b17",
    badge: "1 opinión",
    timeAgo: "Hace 6 horas",
    stars: 5,
    text: "Excelente servicio. Muy responsables y comprometidos con el trabajo. Me ayudaron con soluciones digitales a medida y el resultado fue mejor de lo esperado. Totalmente recomendados.",
  },
  {
    name: "Jairo Jaramillo",
    initial: "J",
    color: "#34a853",
    badge: "1 opinión",
    timeAgo: "Hace 43 minutos",
    stars: 5,
    text: "A sido muy buena la experiencia con la app. Ha cumplido con todo lo que necesita mi negocio. Muy agradecido y muy recomendado al 💯%.. bendiciones 💪💪.",
  },
  {
    name: "Millanolli",
    initial: "M",
    color: "#1a73e8",
    badge: "1 opinión",
    timeAgo: "Hace 7 horas",
    stars: 5,
    text: "Excelente servicio, muy eficiente en desarrollo web, automatización con IA e integración con Mi Caja. Totalmente recomendado.",
  },
  {
    name: "Richard Millapinda",
    initial: "R",
    color: "#e91e63",
    badge: "1 opinión",
    timeAgo: "Hace 23 minutos",
    stars: 5,
    text: "Empresa seria y profesional 100% recomendaba!!!",
  },
  {
    name: "César Kevin Tello Flores",
    initial: "C",
    color: "#ea4335",
    badge: "1 opinión",
    timeAgo: "Hace 30 minutos",
    stars: 5,
    text: "Excelente servicio, los mejores.",
  },
  {
    name: "Limpia fosas Chaitén",
    initial: "L",
    color: "#1a73e8",
    badge: "1 opinión",
    timeAgo: "Hace 17 minutos",
    stars: 5,
    text: null,
  },
];

export default function TestimonialsCard() {
  return (
    <div className="relative w-full max-w-[400px] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.6)] border border-white/8">
      <style>{`
        @keyframes scroll-up {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .reviews-track {
          animation: scroll-up 28s linear infinite;
        }
        .reviews-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Google-style header */}
      <div className="bg-[#1c1c1e] px-4 pt-4 pb-3 border-b border-white/8">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <GoogleIcon />
            <div>
              <span className="text-[#e8eaed] font-semibold text-[13px] block leading-tight">AM Tecnología</span>
              <span className="text-[#9aa0a6] text-[11px] leading-tight">Lo que dicen nuestros clientes</span>
            </div>
          </div>
          <span className="text-[#9aa0a6] text-[11px]">Google</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#e8eaed] font-bold text-2xl leading-none">5.0</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling reviews */}
      <div className="bg-[#202124] overflow-hidden h-[340px] relative">
        {/* Fade top */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#202124] to-transparent z-10 pointer-events-none" />
        {/* Fade bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#202124] to-transparent z-10 pointer-events-none" />

        <div className="reviews-track">
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="px-4 py-3 border-b border-white/5 last:border-0">
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white font-semibold text-[13px]"
                  style={{ backgroundColor: r.color }}
                >
                  {r.initial}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Name + badge */}
                  <div className="flex flex-wrap items-baseline gap-1.5">
                    <span className="text-[#e8eaed] text-[13px] font-medium leading-tight">{r.name}</span>
                    {r.badge && (
                      <span className="text-[#9aa0a6] text-[11px] leading-tight">{r.badge}</span>
                    )}
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(r.stars)].map((_, si) => (
                      <StarIcon key={si} size={11} />
                    ))}
                  </div>

                  {/* Review text */}
                  {r.text && (
                    <p className="text-[#bdc1c6] text-[12px] leading-[1.6] mt-1.5">{r.text}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer link */}
      <a
        href="https://g.page/r/CX_Uc-66lRnzEAE/review"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1c1c1e] px-4 py-2.5 border-t border-white/8 flex items-center justify-center gap-1.5 hover:bg-[#2a2a2e] transition-colors"
      >
        <GoogleIcon size={13} />
        <span className="text-[#8ab4f8] text-[12px] font-medium">Dejar una reseña en Google</span>
      </a>
    </div>
  );
}

function StarIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fbbc04">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function GoogleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}
