import type { Metadata } from "next";
import TextReveal from "@/components/anim/TextReveal";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical growth advice for medspa owners: ads, AI lead follow up and marketing budgets that pay for themselves.",
};

import { blogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/anim/Reveal";

// Struktura po planu: dizajn i ruta u v1, prvi clanci stizu u SEO koraku.
export default function BlogPage() {
  return (
    <>
      <section className="container-site py-24 md:py-32">
        <TextReveal as="p" immediate className="type-label text-violet">
          Blog
        </TextReveal>
        <TextReveal as="h1" immediate delay={0.1} className="type-display mt-6 max-w-4xl">
          Growth notes for medspa <span className="grad-text">owners.</span>
        </TextReveal>
        
        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.1} className="flex flex-col border-t border-line pt-8 group">
              {post.coverImage && (
                <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl">
                  <Image 
                    src={post.coverImage} 
                    alt={post.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
              )}
              <span className="type-label text-plum-soft">{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <h2 className="type-h3 mt-4 transition-colors group-hover:text-violet text-balance">
                <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">
                  {post.title}
                </Link>
              </h2>
              <p className="type-body mt-3 text-plum-soft">{post.excerpt}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="container-site max-w-4xl py-20 text-center">
          <h2 className="type-h3">Get new articles by email</h2>
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
