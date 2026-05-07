import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  BLOG_POSTS,
  getPostBySlug,
  getRelatedPosts,
  formatDate,
} from "@/lib/blog-data";

const WA =
  "https://wa.me/56985660954?text=Hola%2C%20le%C3%AD%20su%20blog%20y%20quiero%20saber%20c%C3%B3mo%20aparecer%20en%20Google";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: post.canonicalUrl },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function extractHeadings(content: string): { id: string; text: string; level: 2 | 3 }[] {
  const regex = /^(#{2,3}) (.+)$/gm;
  const headings: { id: string; text: string; level: 2 | 3 }[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const level = match[1].length as 2 | 3;
    const text = match[2];
    headings.push({ id: toId(text), text, level });
  }
  return headings;
}

function toId(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function applyInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-am-primary hover:text-am-accent underline underline-offset-4 transition-colors">$1</a>'
    )
    .replace(/\n/g, "<br />");
}

function renderContent(content: string): string {
  return content
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("## ")) {
        const text = block.slice(3);
        return `<h2 id="${toId(text)}" class="font-display font-bold text-white text-[22px] mt-12 mb-4 scroll-mt-24">${text}</h2>`;
      }
      if (block.startsWith("### ")) {
        const text = block.slice(4);
        return `<h3 id="${toId(text)}" class="font-display font-semibold text-white text-[17px] mt-8 mb-3 scroll-mt-24">${text}</h3>`;
      }
      if (block.startsWith("---")) {
        return `<hr class="border-white/8 my-10" />`;
      }
      return `<p class="text-am-muted text-[15px] leading-[1.9] mb-5">${applyInline(block)}</p>`;
    })
    .join("\n");
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const headings = extractHeadings(post.content);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": post.canonicalUrl,
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://www.amtecnologia.cl",
    },
    publisher: {
      "@type": "Organization",
      name: "AM Tecnología",
      url: "https://www.amtecnologia.cl",
      logo: {
        "@type": "ImageObject",
        url: "https://www.amtecnologia.cl/og-image.jpg",
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": post.canonicalUrl },
    keywords: post.tags.join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.amtecnologia.cl" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.amtecnologia.cl/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: post.canonicalUrl },
    ],
  };

  const faqJsonLd = post.faqSchema && post.faqSchema.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqSchema.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-[72px] bg-black">
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-am-primary/12 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-15" />

        <div className="relative max-w-3xl mx-auto px-6 pt-16 pb-12">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-am-muted mb-8">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="text-white/20">/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="text-white/20">/</span>
            <span className="text-am-muted/60 truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-am-accent">
              {post.category}
            </span>
            <span className="text-white/15">·</span>
            <time dateTime={post.date} className="text-am-muted text-[13px]">
              {formatDate(post.date)}
            </time>
            <span className="text-white/15">·</span>
            <span className="text-am-muted text-[13px]">{post.readingTime} min de lectura</span>
            <span className="text-white/15">·</span>
            <span className="text-am-muted text-[13px]">{post.author}</span>
          </div>

          <h1
            className="font-display font-extrabold text-white text-balance leading-[1.2] mb-6"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            {post.title}
          </h1>

          <p className="text-am-muted text-[16px] leading-relaxed border-l-2 border-am-primary/50 pl-4">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="bg-black px-6 pb-24">
        <div className="max-w-3xl mx-auto">

          {/* Tabla de contenidos */}
          {headings.length > 1 && (
            <div className="mb-12 border border-white/8 bg-white/2 rounded-2xl px-6 py-5">
              <p className="text-white font-semibold text-[13px] uppercase tracking-widest mb-4">
                Contenido
              </p>
              <ol className="flex flex-col gap-1.5">
                {headings.map((h, i) => (
                  <li
                    key={h.id}
                    className={`flex items-start gap-2.5 ${h.level === 3 ? "ml-4" : ""}`}
                  >
                    {h.level === 2 && (
                      <span className="text-am-primary/50 text-[12px] font-bold mt-0.5 shrink-0 w-4">
                        {headings.filter((x, xi) => x.level === 2 && xi <= i).length}.
                      </span>
                    )}
                    {h.level === 3 && (
                      <span className="text-white/15 text-[12px] mt-0.5 shrink-0">–</span>
                    )}
                    <a
                      href={`#${h.id}`}
                      className={`hover:text-am-primary transition-colors leading-snug ${
                        h.level === 2
                          ? "text-am-muted text-[14px]"
                          : "text-am-muted/70 text-[13px]"
                      }`}
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Contenido del artículo */}
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[12px] px-3 py-1.5 rounded-full border border-white/8 text-am-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* FAQ visible */}
          {post.faqSchema && post.faqSchema.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display font-bold text-white text-[22px] mb-8">
                Preguntas frecuentes
              </h2>
              <div className="flex flex-col gap-6">
                {post.faqSchema.map((faq) => (
                  <div key={faq.q} className="border-b border-white/8 pb-6">
                    <h3 className="font-display font-bold text-white text-[16px] mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-am-muted text-[14px] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-am-primary/20 bg-am-primary/5 px-8 py-10 text-center">
            <p className="text-am-accent text-[12px] font-bold uppercase tracking-widest mb-3">
              ¿Listo para dar el siguiente paso?
            </p>
            <h3 className="font-display font-bold text-white text-[22px] mb-3 text-balance">
              Tu negocio puede aparecer en Google este mes
            </h3>
            <p className="text-am-muted text-[14px] mb-6">
              Desde $99.990 pago único · Entrega en 48 horas · Sin mensualidades
            </p>
            <a
              href={WA}
              data-cta-source="blog_article_bottom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-am-primary hover:bg-am-primary/90 text-white font-bold text-[15px] transition-all duration-200"
            >
              Cotizar ahora →
            </a>
          </div>

          {/* Artículos relacionados */}
          {related.length > 0 && (
            <div className="mt-16">
              <p className="text-am-accent text-[12px] font-bold uppercase tracking-widest mb-6">
                También puede interesarte
              </p>
              <div className="flex flex-col gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex flex-col gap-1 border border-white/6 bg-white/2 rounded-xl px-5 py-4 hover:border-am-primary/30 hover:bg-am-primary/3 transition-all duration-200"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-widest text-am-accent">
                      {r.category}
                    </span>
                    <span className="font-display font-bold text-white text-[15px] group-hover:text-am-primary transition-colors">
                      {r.title}
                    </span>
                    <span className="text-am-muted text-[13px]">{formatDate(r.date)}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Volver al blog */}
          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-am-muted text-sm hover:text-white transition-colors"
            >
              ← Volver al blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
