import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getAllPosts, formatDate } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — Posicionamiento en Google y Diseño Web en Chile | AM Tecnología",
  description:
    "Artículos sobre posicionamiento en Google, diseño web y estrategias digitales para empresas en Chile. Escrito por el equipo de AM Tecnología.",
  alternates: {
    canonical: "https://www.amtecnologia.cl/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[45vh] flex flex-col justify-center overflow-hidden pt-[72px] bg-black">
        <div className="absolute -top-52 -left-24 w-[600px] h-[600px] rounded-full bg-am-primary/15 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-16 w-[500px] h-[500px] rounded-full bg-am-accent/10 blur-[90px] pointer-events-none" />
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-am-green animate-pulse-dot" />
            <span className="text-am-accent text-[13px] font-semibold tracking-wide">
              Blog · AM Tecnología
            </span>
          </div>
          <h1
            className="font-display font-extrabold text-white text-balance leading-[1.15] mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Estrategias para{" "}
            <span className="gradient-text">aparecer en Google</span>
          </h1>
          <p className="text-am-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Guías prácticas sobre posicionamiento en Google, diseño web y marketing digital para empresas en Chile.
          </p>
        </div>
      </section>

      {/* ── ARTÍCULOS ── */}
      <section className="bg-black px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-am-muted text-center">Próximamente — artículos en camino.</p>
          ) : (
            <div className="flex flex-col gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group border border-white/6 bg-white/2 rounded-2xl px-7 py-7 hover:border-am-primary/30 hover:bg-am-primary/3 transition-all duration-200"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-am-accent">
                      {post.category}
                    </span>
                    <span className="text-white/15">·</span>
                    <time
                      dateTime={post.date}
                      className="text-am-muted text-[13px]"
                    >
                      {formatDate(post.date)}
                    </time>
                    <span className="text-white/15">·</span>
                    <span className="text-am-muted text-[13px]">
                      {post.readingTime} min de lectura
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-white text-[20px] leading-snug mb-3 group-hover:text-am-primary transition-colors">
                    <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-4">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-am-muted text-[14px] leading-relaxed mb-5">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-1 rounded-full border border-white/8 text-am-muted/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-am-primary text-sm font-semibold hover:text-am-accent transition-colors shrink-0 ml-4"
                    >
                      Leer artículo →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
