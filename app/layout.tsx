import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import MetaPixelEvents from "@/components/MetaPixelEvents";
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
    default: "Diseño Web Chile | Páginas Web desde $99.990 | AM Tecnología",
    template: "%s | AM Tecnología",
  },

  description:
    "Diseño web Chile desde $99.990 pago único. Cotiza hoy y recibe tu sitio web en 48h. Landing pages, tiendas online y sitios corporativos para empresas en todo Chile. Sin mensualidades.",

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
            "text": "Nuestros planes parten desde $99.990 pago único, sin mensualidades ni costos ocultos. El precio incluye diseño, desarrollo, dominio y hosting. Sin sorpresas al final.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Cuánto tarda en estar lista mi página web?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Entregamos en 48 horas desde que apruebas la cotización. Es nuestro compromiso con cada cliente. Una vez que nos das el visto bueno, empezamos el mismo día y en dos días tienes tu sitio web funcionando.",
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
          "name": "¿Trabajan fuera de Santiago?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, atendemos todo Chile de forma 100% remota. Tenemos clientes en Puerto Montt, Valdivia, Temuco, Osorno, Punta Arenas, Coyhaique y más. La distancia no es ningún problema.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Necesito una página web para mi negocio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Si tu competencia ya tiene una, cada día sin web es un cliente que pierdes. El 92% de los chilenos busca productos y servicios en Google antes de comprar. Sin sitio web, no existes para ellos.",
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
        <GoogleAdsEvents />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Ads Tag */}
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18068672063"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18068672063');
          `}
        </Script>

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
