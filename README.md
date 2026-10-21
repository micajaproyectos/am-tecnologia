This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## IndexNow

Avisa a Bing / Yandex / Seznam / Naver cuando cambia el contenido. Google no participa.

```bash
npm run indexnow:dry        # muestra qué enviaría, sin enviar
npm run indexnow            # envía solo las URLs cuyo texto cambió
npm run indexnow -- --all   # fuerza el envío de todo el sitemap
npm run indexnow -- --url=https://www.amtecnologia.cl/blog/mi-post
```

Se corre **después** de que el deploy esté en producción: el script lee el sitemap y
el HTML del sitio publicado, y compara contra `scripts/indexnow-state.json` (versionado)
para no repetir envíos. La clave vive en `public/82424b2fb0c74422a2a876c5e1a250ec.txt`
y debe seguir accesible; si se borra, IndexNow responde `403`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
