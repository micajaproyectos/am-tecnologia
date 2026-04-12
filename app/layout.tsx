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
    default: "AM Tecnología — Páginas Web Profesionales en Chile",
    template: "%s | AM Tecnología",
  },

  description:
    "Creamos páginas web, tiendas online y automatizaciones con IA para empresas en Chile. Diseñadas por Ingenieros Civiles. Entrega en 48 horas. ¡Diagnóstico gratis!",

  keywords: [
    "páginas web Chile",
    "diseño web Chile",
    "agencia web Chile",
    "landing page Chile",
    "tienda online Chile",
    "e-commerce Chile",
    "desarrollo web profesional",
    "automatización con IA",
    "chatbot WhatsApp",
    "sitio web empresa",
    "página web precio",
    "web pyme Chile",
    "AM Tecnología",
  ],

  authors: [{ name: "AM Tecnología", url: siteUrl }],
  creator: "AM Tecnología",
  publisher: "AM Tecnología",

  alternates: {
    canonical: siteUrl,
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
    title: "AM Tecnología — Páginas Web Profesionales en Chile",
    description:
      "Landing pages, tiendas online y automatizaciones con IA. Diseñadas por Ingenieros Civiles. Entrega en 48 horas.",
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
    title: "AM Tecnología — Páginas Web Profesionales en Chile",
    description:
      "Landing pages, tiendas online y automatizaciones con IA. Entrega en 48 horas.",
    images: ["/icon.png"],
  },
};

const PIXEL_ID = "2526160884471265";

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
