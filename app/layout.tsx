import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import GoogleAdsEvents from "@/components/GoogleAdsEvents";
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
    default: "Posicionamiento en Google Chile | AM Tecnología",
    template: "%s | AM Tecnología",
  },

  description:
    "Ayudamos a empresas de Chile a aparecer en Google con su página web. Presencia orgánica para que tus clientes te encuentren antes que a tu competencia.",

  keywords: [
    // Transaccionales — intención de compra
    "contratar diseño web Chile",
    "cotizar página web Chile",
    "agencia web Chile precio",
    "hacer página web para empresa",
    "contratar página web Chile",
    "precio diseño web Chile",
    "cotizar sitio web Chile",
    "agencia diseño web Chile",
    // Con geo Chile
    "diseño web Chile",
    "páginas web Chile",
    "sitio web Chile",
    "landing page Chile",
    "tienda online Chile",
    "diseño web profesional Chile",
    "página web empresa Chile",
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
      "Cotiza tu página web hoy desde $99.990 pago único. Landing pages, tiendas online y sitios corporativos para empresas en todo Chile. Entrega en 48h, sin mensualidades.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AM Tecnología — Soluciones Web para Empresas en Chile",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Diseño Web Chile | Páginas Web desde $99.990 | AM Tecnología",
    description:
      "Cotiza tu página web hoy desde $99.990 pago único. Entrega en 48h, sin mensualidades. Todo Chile.",
    images: ["/og-image.jpg"],
  },
};

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
      "image": "https://www.amtecnologia.cl/og-image.jpg",
      "telephone": "+56985660954",
      "email": "contacto@amconsultora.cl",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "General del Canto 112, Depto. 301",
        "addressLocality": "Providencia",
        "addressRegion": "Región Metropolitana",
        "postalCode": "7500000",
        "addressCountry": "CL",
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
            "text": "Con nosotros, $99.990 precio de lanzamiento — pago único. Lo que hacemos no es solo crear una página: es posicionar tu marca en Google para que tus clientes te encuentren cuando buscan lo que tú ofreces. Las agencias de marketing cobran entre $400.000 y $600.000 por este mismo resultado. Nosotros lo entregamos desde $99.990.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Cómo hago para que mi negocio aparezca en Google?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nos encargamos de todo el proceso: creamos la estructura de tu sitio, configuramos tu perfil en Google Maps, Google Analytics y Search Console, y optimizamos cada página para que Google entienda a qué clientes debes aparecer. Con la optimización incluida, tu marca ya puede empezar a recibir tráfico orgánico. El seguimiento mensual es opcional, pero te permite seguir escalando tu posición y adelantar a tu competencia con el tiempo.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Necesito una página web para mi negocio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Si quieres que tus clientes te encuentren en Google, sí. Hoy más del 80% de las personas busca en internet antes de comprar. Sin página web, esos clientes los encuentra tu competencia.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Cuánto tarda en estar lista mi página?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La estructura de tu sitio queda lista en 48 horas. La optimización SEO completa — para que Google te posicione sobre tu competencia — puede tomar hasta 1 semana. Y para maximizar los resultados a largo plazo, contamos con planes de seguimiento mensual que incluyen: ajuste continuo de palabras clave, análisis de rendimiento en Google Search Console, mejoras de velocidad y experiencia de usuario, reportes de visibilidad y tráfico, y adaptación a los cambios del algoritmo de Google.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Necesito saber de tecnología?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Nosotros nos encargamos de todo. Tú solo te preocupas de atender a tus nuevos clientes.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa después de la entrega?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tu sitio queda publicado y con la optimización SEO activa en los primeros días. Desde ahí, Google empieza a indexar tu marca y puedes comenzar a recibir tráfico orgánico sin pagar publicidad. Si quieres seguir escalando resultados, nuestros planes de seguimiento mensual ajustan la estrategia según cómo evoluciona tu posición, tu competencia y los cambios del algoritmo de Google — pero el tráfico orgánico inicial ya está incluido desde el primer entregable.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta una página web con tienda online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Una tienda online con Webpay y MercadoPago integrado parte desde $199.990 pago único. Incluye gestión de productos, carrito de compras y panel administrativo completo.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Cómo es el proceso para contratar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Es simple: escríbenos por WhatsApp con los detalles de tu negocio. En menos de 1 hora te enviamos una cotización. Si la apruebas, empezamos el mismo día. En 48 horas tienes tu sitio web listo y publicado.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Trabajan en todo Chile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Servimos empresas en Puerto Montt, Valdivia, Temuco, Rancagua, Santiago y todo Chile.",
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
        <GoogleAdsEvents />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Ads Tag */}
        <Script
          id="google-ads-tag"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18068672063"
        />
        <Script id="google-ads-config" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18068672063');
            gtag('config', 'G-XF80KBXGCT');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wm7kem1zbm");
          `}
        </Script>

      </body>
    </html>
  );
}
