import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import TextReveal from "@/components/anim/TextReveal";
import Reveal from "@/components/anim/Reveal";
import { caseStudies } from "@/data/case-studies";
import { site } from "@/data/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.filter((c) => !c.pending).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.client} Case Study`,
    description: cs.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug && !c.pending);
  if (!cs) notFound();

  return (
    <>
      <section className="container-site py-24 md:py-32">
        <TextReveal as="p" immediate className="type-label text-violet">
          {cs.tag}
        </TextReveal>
        <TextReveal as="h1" immediate delay={0.1} className="type-display mt-6 max-w-4xl">
          {cs.client}
        </TextReveal>
        <TextReveal as="p" immediate delay={0.2} className="type-lead mt-8 max-w-3xl text-plum-soft">
          {cs.summary}
        </TextReveal>
      </section>

      {cs.results && (
        <section className="bg-plum text-cream">
          <div className="container-site py-20">
            <TextReveal as="h2" className="type-h2">
              The results
            </TextReveal>
            <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
              {cs.results.map((r, i) => (
                <Reveal key={r.label} delay={i * 0.08}>
                  <p
                    className="grad-text"
                    style={{ fontFamily: "var(--font-ngetic)", fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
                  >
                    {r.value}
                  </p>
                  <p className="mt-2 text-sm text-cream/70">{r.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-site flex flex-col gap-10 py-24">
        {cs.gallery.map((img) => (
          <Reveal key={img.src} effect="clip" className="overflow-hidden rounded-3xl">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full"
              sizes="(max-width: 1440px) 100vw, 1328px"
            />
          </Reveal>
        ))}
      </section>

      <section className="container-site pb-24">
        <Reveal className="rounded-3xl bg-blush px-8 py-16 text-center sm:px-16">
          <h2 className="type-h2">Want results like these?</h2>
          <Link href="/contact" className="btn btn-primary mt-8 inline-flex">
            {site.cta}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
