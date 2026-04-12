const serviceLinks = [
  "Landing Page de Ventas",
  "One Page Corporativo",
  "E-commerce con Pago",
  "Automatizaciones con IA",
  "App Web SaaS",
];

const companyLinks = [
  { href: "#inicio",    label: "Inicio"     },
  { href: "#servicios", label: "Servicios"  },
  { href: "#proyectos", label: "Proyectos"  },
  { href: "#contacto",  label: "Contacto"   },
];

export default function Footer() {
  return (
    <footer className="metal-surface border-t border-white/5 relative">
      {/* Fade superior desde Services */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-black pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-2xl gradient-text">AM</span>
              <span className="font-display font-bold text-xl text-white">Tecnología</span>
            </a>
            <p className="text-am-muted text-sm leading-[1.7] max-w-[260px]">
              Soluciones digitales diseñadas por Ingenieros Civiles para impulsar
              tu negocio en internet.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <SocialLink href="https://www.instagram.com/micajaempresa" aria="Instagram" target="_blank">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </SocialLink>
              <SocialLink href="https://wa.me/56985660954" aria="WhatsApp" target="_blank">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-am-accent font-bold text-[15px] tracking-wide uppercase mb-5">Servicios</p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="text-am-muted text-sm hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-am-accent font-bold text-[15px] tracking-wide uppercase mb-5">Empresa</p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-am-muted text-sm hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-am-accent font-bold text-[15px] tracking-wide uppercase mb-5">Contacto</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://wa.me/56985660954"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-am-muted text-sm hover:text-white transition-colors"
                >
                  +56 9 8566 0954
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@amconsultora.cl"
                  className="text-am-muted text-sm hover:text-white transition-colors"
                >
                  contacto@amconsultora.cl
                </a>
              </li>
              <li className="text-am-muted text-sm">Futaleufú, Patagonia Chilena.</li>
              <li className="text-am-muted text-sm">Santiago, Chile.</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-am-muted text-sm">
            © 2026 AM Tecnología. Todos los derechos reservados.
          </p>
          <p className="text-am-muted text-sm">
            Creado por{" "}
            <span className="gradient-text font-semibold">AM Tecnología</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  aria,
  target,
  children,
}: {
  href: string;
  aria: string;
  target?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={aria}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="w-9 h-9 rounded-xl border border-white/8 bg-white/4 flex items-center justify-center text-am-muted hover:border-am-primary/40 hover:text-am-primary hover:bg-am-primary/8 transition-all duration-200"
    >
      {children}
    </a>
  );
}
