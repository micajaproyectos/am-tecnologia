import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getAllPosts, formatDate } from "@/lib/blog-data";

const siteUrl = "https://www.amtecnologia.cl";

export const metadata: Metadata = {
  title: "Allan Milla — Autor | AM Tecnología",
  description:
    "Artículos escritos por Allan Milla, Ingeniero Civil Industrial y fundador de AM Tecnología. Guías prácticas sobre posicionamiento en Google, SEO y digitalización para empresas en Chile.",
  alternates: {
    canonical: `${siteUrl}/autor/allan-milla`,
  },
  openGraph: {
    title: "Allan Milla — Autor | AM Tecnología",
    description:
      "Guías prácticas sobre SEO, Google y digitalización para pymes en Chile, escritas por el fundador de AM Tecnología.",
    images: [{ url: "/fundador.webp", width: 420, height: 500 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/autor/allan-milla`,
  name: "Allan Milla",
  jobTitle: "Ingeniero Civil Industrial",
  description:
    "Fundador de AM Tecnología. Especialista en desarrollo Full Stack, Ingeniería de IA y Marketing Digital. Autor de guías sobre posicionamiento en Google para empresas chilenas.",
  url: `${siteUrl}/autor/allan-milla`,
  image: `${siteUrl}/fundador.webp`,
  worksFor: {
    "@type": "Organization",
    "@id": `${siteUrl}/#business`,
    name: "AM Tecnología",
    url: siteUrl,
  },
  knowsAbout: [
    "Posicionamiento en Google",
    "SEO para pymes",
    "Desarrollo Full Stack",
    "Marketing Digital",
    "Digitalización de empresas en Chile",
  ],
};

export default function AllanMillaPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-[72px] bg-black">
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-am-primary/12 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-15" />

        <div className="relative max-w-4xl mx-auto px-6 pt-16 pb-16">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-am-muted mb-10">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="text-white/20">/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="text-white/20">/</span>
            <span className="text-am-muted/60">Allan Milla</span>
          </nav>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            {/* Avatar */}
            <div className="shrink-0 w-24 h-24 rounded-full border-2 border-am-primary/30 overflow-hidden">
              <Image
                src="/fundador.webp"
                alt="Allan Milla, Ingeniero Civil Industrial y Fundador de AM Tecnología"
                width={96}
                height={96}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full border border-am-primary/25 bg-am-primary/8 text-am-primary text-[11px] font-bold tracking-widest uppercase mb-3">
                Autor
              </span>
              <h1 className="font-display font-extrabold text-white text-[2rem] leading-tight mb-1">
                Allan Milla
              </h1>
              <p className="text-am-primary text-[14px] font-semibold mb-3">
                Ing. Civil · Fundador de AM Tecnología
              </p>
              <p className="text-am-muted text-[14px] leading-relaxed max-w-xl">
                Especialista en desarrollo Full Stack, Ingeniería de IA y Marketing Digital.
                Escribo guías prácticas sobre cómo las empresas chilenas pueden aparecer
                en Google y crecer de forma orgánica.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Link
                  href="/sobre-nosotros"
                  className="text-am-primary text-[13px] font-semibold hover:text-am-accent transition-colors"
                >
                  Ver perfil completo →
                </Link>
                <span className="text-white/15">·</span>
                <span className="text-am-muted text-[13px]">
                  {posts.length} artículo{posts.length !== 1 ? "s" : ""} publicado{posts.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTÍCULOS ── */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display font-bold text-white text-[20px] mb-8">
            Artículos publicados
          </h2>

          <div className="flex flex-col gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border border-white/6 bg-am-surface rounded-2xl px-6 py-6 hover:border-am-primary/25 hover:bg-am-primary/3 transition-all duration-200"
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-am-accent">
                    {post.category}
                  </span>
                  <span className="text-white/15">·</span>
                  <time dateTime={post.date} className="text-am-muted text-[12px]">
                    {formatDate(post.date)}
                  </time>
                  <span className="text-white/15">·</span>
                  <span className="text-am-muted text-[12px]">{post.readingTime} min de lectura</span>
                </div>

                <h3 className="font-display font-bold text-white text-[17px] leading-snug mb-2 group-hover:text-am-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-am-muted text-[13px] leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {post.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full border border-white/8 text-am-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
