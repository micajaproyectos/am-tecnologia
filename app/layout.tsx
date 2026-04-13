import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import MetaPixelEvents from "@/components/MetaPixelEvents";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.amtecnologia.cl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Diseño Web Chile | Páginas Web desde $99.990 | AM Tecnología",
    template: "%s | AM Tecnología",
  },

  description:
    "Diseño web Chile desde $99.990. Landing pages, sitio web y tienda online para tu empresa. Servimos Puerto Montt, Temuco, Valdivia, Osorno y todo Chile. Entrega en 48h.",

  keywords: [
    // Nacionales — alto volumen confirmado
    "diseño web",
    "páginas web",
    "sitio web",
    "landing page",
    "diseño pagina web",
    "página web para mi negocio",
    "tienda online",
    // Con geo Chile
    "diseño web Chile",
    "páginas web Chile",
    "sitio web Chile",
    "landing page Chile",
    "tienda online Chile",
    "diseño web profesional Chile",
    "página web empresa Chile",
    "agencia diseño web Chile",
    "hacer página web Chile",
    "crear página web Chile",
    // Locales — baja competencia, fácil de rankear
    "diseño web Puerto Montt",
    "diseño web Osorno",
    "diseño web Valdivia",
    "diseño web Temuco",
    "diseño web Concepción",
    "diseño web Coyhaique",
    "diseño web Punta Arenas",
    "diseño web Patagonia",
    "páginas web región de los Lagos",
    "diseño web región de los Lagos",
    "diseño web región de los Ríos",
    "diseño web Araucanía",
    // Marca
    "AM Tecnología",
  ],

  authors: [{ name: "AM Tecnología", url: siteUrl }],
  creator: "AM Tecnología",
  publisher: "AM Tecnología",

  alternates: {
    canonical: siteUrl,
  },

  verification: {
    google: "iuzcq3PnynOBicXpLgGcEZqKWScewQ_BajwYrwYuQp0",
    other: {
      "facebook-domain-verification": "bxv4yyjyzqpt9optasfnfcfv0200vj",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "AM Tecnología",
    title: "Diseño Web Chile | Páginas Web desde $99.990 | AM Tecnología",
    description:
      "Diseño web profesional en Chile desde $99.990. Landing pages, tiendas online y sitios web para empresas en Puerto Montt, Temuco, Valdivia y todo Chile.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "AM Tecnología — Soluciones Web para Empresas en Chile",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Diseño Web Chile | Páginas Web desde $99.990 | AM Tecnología",
    description:
      "Diseño web profesional en Chile desde $99.990. Landing pages, tiendas online y sitios web. Puerto Montt, Temuco, Valdivia y todo Chile. Entrega en 48h.",
    images: ["/icon.png"],
  },
};

const PIXEL_ID = "2526160884471265";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.amtecnologia.cl/#business",
      "name": "AM Tecnología",
      "description":
        "Agencia de desarrollo web profesional en Chile. Creamos páginas web, tiendas online y automatizaciones con IA para empresas. Diseñadas por Ingenieros Civiles. Entrega en 48 horas.",
      "url": "https://www.amtecnologia.cl",
      "telephone": "+56985660954",
      "email": "contacto@amconsultora.cl",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CL",
        "addressRegion": "Los Lagos",
        "addressLocality": "Futaleufú",
      },
      "areaServed": [
        { "@type": "Country", "name": "Chile" },
        { "@type": "City", "name": "Puerto Montt" },
        { "@type": "City", "name": "Osorno" },
        { "@type": "City", "name": "Valdivia" },
        { "@type": "City", "name": "Temuco" },
        { "@type": "City", "name": "Concepción" },
        { "@type": "City", "name": "Coyhaique" },
        { "@type": "City", "name": "Punta Arenas" },
        { "@type": "City", "name": "Futaleufú" },
        { "@type": "City", "name": "Santiago" },
      ],
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00",
      },
      "sameAs": ["https://www.instagram.com/micajaempresa"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Desarrollo Web en Chile",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Landing Page de Ventas",
              "description": "Páginas web diseñadas para convertir visitas en clientes. Con carrito WhatsApp integrado para cerrar ventas al instante.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "One Page Corporativo",
              "description": "Presencia digital elegante en una sola página. Ideal para profesionales, consultoras y pymes en Chile.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-commerce con Pago",
              "description": "Tienda online completa con Webpay y MercadoPago integrado. Vende tus productos las 24 horas.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Automatizaciones con IA",
              "description": "Chatbots inteligentes, automatización de WhatsApp y flujos con inteligencia artificial para empresas en Chile.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "App Web SaaS",
              "description": "Aplicaciones web a medida para tu negocio. Plataformas escalables con acceso desde cualquier dispositivo.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.amtecnologia.cl/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta una página web en Chile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestros planes parten desde $99.990 pago único, sin mensualidades ni costos ocultos. El precio incluye diseño, desarrollo, dominio y hosting.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta una página web con tienda online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Una tienda online con Webpay y MercadoPago integrado parte desde $199.990 pago único. Incluye gestión de productos, carrito de compras y panel administrativo.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta posicionarme en Google?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El SEO básico está incluido en todos nuestros planes sin costo adicional. Configuramos título, descripción, sitemap y datos estructurados desde el primer día.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Cuánto cobran por hacer una página web?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Precio fijo desde $99.990, sin cuotas mensuales ni contratos largos. Lo que cotizamos es exactamente lo que pagas.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Necesito una página web para mi negocio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Si tu competencia ya tiene una, cada día sin web es un cliente que pierdes. El 92% de los chilenos busca productos y servicios en Google antes de comprar.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Trabajan fuera de Santiago?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, atendemos todo Chile de forma 100% remota. Tenemos clientes en Puerto Montt, Valdivia, Temuco, Osorno, Punta Arenas, Coyhaique y más.",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.amtecnologia.cl/#website",
      "url": "https://www.amtecnologia.cl",
      "name": "AM Tecnología",
      "description": "Páginas web profesionales en Chile. Landing pages, tiendas online y automatizaciones con IA.",
      "publisher": { "@id": "https://www.amtecnologia.cl/#business" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="font-sans">
        {children}
        <MetaPixelEvents />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
