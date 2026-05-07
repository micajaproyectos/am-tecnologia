import type { NextConfig } from "next";

const securityHeaders = [
  // Fuerza HTTPS por 2 años, incluyendo subdominios
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Evita que el sitio se embeba en iframes externos (clickjacking)
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Evita MIME sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Limita información enviada en el Referer header
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Desactiva APIs del navegador que no se usan
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // CSP: permite Google Ads, GA4 y Clarity; bloquea plugins y base-tag injection
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms https://scripts.clarity.ms https://googleads.g.doubleclick.net https://www.googleadservices.com https://connect.facebook.net",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self'",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://script.google.com https://region1.google-analytics.com",
      "frame-src https://www.googletagmanager.com https://td.doubleclick.net",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://script.google.com",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Sirve imágenes en AVIF (mejor compresión) y WebP según soporte del navegador
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      // Headers de seguridad en todas las rutas
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Cache inmutable para assets estáticos de Next.js (JS, CSS, fonts)
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache de 1 año para imágenes y fuentes en /public
      {
        source: "/:file(.*\\.(?:ico|png|jpg|jpeg|gif|webp|avif|svg|woff|woff2))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirect de dominio sin www → con www (canonical)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "amtecnologia.cl" }],
        destination: "https://www.amtecnologia.cl/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
