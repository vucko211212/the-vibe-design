import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import NewsletterForm from "@/components/NewsletterForm";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Schema from "@/components/Schema";
import { site } from "@/data/site";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Schema Markup za Blog (Article)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage ? [post.coverImage] : [],
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: site.founder.name,
      url: "https://www.thevibedesign.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: "https://www.thevibedesign.com/opengraph-image",
      },
    },
  };

  return (
    <>
      <Schema data={jsonLd} />
      <article className="container-site max-w-3xl py-24 md:py-32">
        <Link href="/blog" className="link-arrow text-sm">
          ← Back to all notes
        </Link>
        <div className="mt-12">
          <span className="type-label text-magenta">
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
          <h1 className="type-display mt-4 text-[clamp(2rem,5vw,4rem)] text-balance">{post.title}</h1>
        </div>
        
        {post.coverImage && (
          <div className="relative mt-12 aspect-[21/9] w-full overflow-hidden rounded-3xl">
            <Image 
              src={post.coverImage} 
              alt={post.title} 
              fill 
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover" 
            />
          </div>
        )}

        {/* Prose styling for dynamic HTML content */}
        <div 
          className="mt-16 text-plum-soft type-body space-y-6 [&>h2]:type-h3 [&>h2]:text-plum [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:text-balance"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>

      <section className="border-t border-line bg-paper">
        <div className="container-site max-w-4xl py-20 text-center">
          <h2 className="type-h3">
            Download the 2026 MedSpa Growth Blueprint
          </h2>
          <p className="type-body mt-3 text-plum-soft">
            Get the exact frameworks we use to double clinic revenue, sent straight to your inbox.
          </p>
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
