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

  authors: [{ name: "Allan Milla", url: `${siteUrl}/autor/allan-milla` }],
  creator: "Allan Milla",
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
    title: "Diseño Web Chile | Páginas Web desde $99.990",
    description:
      "Cotiza tu página web hoy desde $99.990 pago único. Landing pages, tiendas online y sitios corporativos para empresas en todo Chile. Orientado a resultados, sin mensualidades.",
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
    title: "Diseño Web Chile | Páginas Web desde $99.990",
    description:
      "Cotiza tu página web hoy desde $99.990 pago único. Orientado a resultados, sin mensualidades. Todo Chile.",
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
        "Agencia de desarrollo web profesional en Chile. Creamos páginas web, tiendas online y automatizaciones con IA para empresas. Diseñadas por Ingenieros Civiles. Orientados a resultados reales.",
      "url": "https://www.amtecnologia.cl",
      "image": "https://www.amtecnologia.cl/og-image.jpg",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.amtecnologia.cl/og-image.jpg",
        "width": 1200,
        "height": 630,
      },
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
        { "@type": "City", "name": "Santiago" },
        { "@type": "City", "name": "Concepción" },
        { "@type": "City", "name": "Valparaíso" },
        { "@type": "City", "name": "Viña del Mar" },
        { "@type": "City", "name": "Temuco" },
        { "@type": "City", "name": "Rancagua" },
        { "@type": "City", "name": "Antofagasta" },
        { "@type": "City", "name": "La Serena" },
        { "@type": "City", "name": "Talca" },
        { "@type": "City", "name": "Iquique" },
        { "@type": "City", "name": "Puerto Montt" },
        { "@type": "City", "name": "Valdivia" },
        { "@type": "City", "name": "Osorno" },
        { "@type": "City", "name": "Punta Arenas" },
        { "@type": "City", "name": "Coyhaique" },
        { "@type": "City", "name": "Futaleufú" },
      ],
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00",
      },
      "sameAs": ["https://www.instagram.com/micajaempresa"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "7",
        "bestRating": "5",
        "worstRating": "1",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Desarrollo Web en Chile",
        "itemListElement": [
          {
            "@type": "Offer",
            "price": "99990",
            "priceCurrency": "CLP",
            "itemOffered": {
              "@type": "Service",
              "name": "Landing Page de Ventas",
              "description": "Páginas web diseñadas para convertir visitas en clientes. Con carrito WhatsApp integrado para cerrar ventas al instante.",
            },
          },
          {
            "@type": "Offer",
            "price": "99990",
            "priceCurrency": "CLP",
            "itemOffered": {
              "@type": "Service",
              "name": "One Page Corporativo",
              "description": "Presencia digital elegante en una sola página. Ideal para profesionales, consultoras y pymes en Chile.",
            },
          },
          {
            "@type": "Offer",
            "price": "199990",
            "priceCurrency": "CLP",
            "priceRange": "$199.990 a $399.990",
            "itemOffered": {
              "@type": "Service",
              "name": "E-commerce con Pago",
              "description": "Tienda online completa con Webpay y MercadoPago integrado. Vende tus productos las 24 horas.",
            },
          },
          {
            "@type": "Offer",
            "price": "199990",
            "priceCurrency": "CLP",
            "itemOffered": {
              "@type": "Service",
              "name": "Automatizaciones con IA",
              "description": "Chatbots inteligentes, automatización de WhatsApp y flujos con inteligencia artificial para empresas en Chile.",
            },
          },
          {
            "@type": "Offer",
            "price": "500000",
            "priceCurrency": "CLP",
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
