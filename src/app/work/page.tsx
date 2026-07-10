import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TextReveal from "@/components/anim/TextReveal";
import Reveal from "@/components/anim/Reveal";
import { caseStudies } from "@/data/case-studies";
import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Case Studies | The Vibe Design",
  description:
    "Medspa and brand growth case studies: Lume Aesthetics, Silken Shea Glow, Fungi Fuel and Verde Beauty. Real results, real numbers.",
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-site py-24 md:py-32 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 left-[-10%] h-[560px] w-[560px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #ddd2f5 0%, transparent 70%)" }}
        />
        <TextReveal as="p" immediate className="type-label text-violet">
          Our Impact
        </TextReveal>
        <TextReveal as="h1" immediate delay={0.1} className="type-display mt-6 max-w-4xl">
          Real numbers from <span className="grad-text">unstoppable clinics.</span>
        </TextReveal>
        <TextReveal as="p" immediate delay={0.2} className="type-lead mt-8 max-w-2xl text-plum-soft">
          We don't deal in vanity metrics like "impressions" or "clicks." We measure success in booked consultations, filled calendars, and revenue generated.
        </TextReveal>
      </section>

      {/* Aggregate Stats Bar */}
      <section className="bg-plum text-cream py-16 border-y border-white/10">
        <div className="container-site grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          <Reveal delay={0.1} className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">$5M+</span>
            <span className="text-sm text-cream/70 uppercase tracking-widest font-medium">Revenue Generated</span>
          </Reveal>
          <Reveal delay={0.2} className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">85%</span>
            <span className="text-sm text-cream/70 uppercase tracking-widest font-medium">Avg. Booking Increase</span>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">12k+</span>
            <span className="text-sm text-cream/70 uppercase tracking-widest font-medium">AI Leads Processed</span>
          </Reveal>
          <Reveal delay={0.4} className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">&lt;60s</span>
            <span className="text-sm text-cream/70 uppercase tracking-widest font-medium">Lead Follow-up Time</span>
          </Reveal>
        </div>
      </section>

      {/* Interleaved Case Studies & Testimonials Grid */}
      <section className="container-site py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Case Study 1 */}
          <Reveal className="h-full">
            <Link href={`/work/${caseStudies[0].slug}`} className="group flex flex-col h-full">
              <div className="overflow-hidden rounded-3xl shadow-sm border border-line">
                <Image
                  src={caseStudies[0].card!}
                  alt={caseStudies[0].client}
                  width={900}
                  height={675}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <span className="type-label text-violet">{caseStudies[0].tag}</span>
                <h2 className="type-h3 mt-2 transition-colors group-hover:text-magenta">
                  {caseStudies[0].client}
                </h2>
                <p className="mt-3 text-plum-soft line-clamp-2">{caseStudies[0].summary}</p>
              </div>
            </Link>
          </Reveal>

          {/* Testimonial 1 */}
          <Reveal delay={0.2} className="bg-lavender rounded-3xl p-10 md:p-14 h-full flex flex-col justify-center border border-white relative overflow-hidden">
            <div className="absolute top-4 right-8 text-8xl text-violet opacity-10 font-serif">"</div>
            <p className="type-lead text-plum italic relative z-10">&ldquo;{testimonials[0].quote}&rdquo;</p>
            <div className="mt-8">
              <p className="font-semibold text-violet">{testimonials[0].name}</p>
              <p className="text-sm text-plum-soft uppercase tracking-wider">{testimonials[0].company}</p>
            </div>
          </Reveal>

          {/* Case Study 2 */}
          <Reveal className="h-full">
            <Link href={`/work/${caseStudies[1].slug}`} className="group flex flex-col h-full">
              <div className="overflow-hidden rounded-3xl shadow-sm border border-line">
                <Image
                  src={caseStudies[1].card!}
                  alt={caseStudies[1].client}
                  width={900}
                  height={675}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <span className="type-label text-violet">{caseStudies[1].tag}</span>
                <h2 className="type-h3 mt-2 transition-colors group-hover:text-magenta">
                  {caseStudies[1].client}
                </h2>
                {caseStudies[1].results && (
                  <p className="mt-3 font-semibold text-magenta">
                    {caseStudies[1].results[0].value} {caseStudies[1].results[0].label}
                  </p>
                )}
              </div>
            </Link>
          </Reveal>

          {/* Case Study 3 */}
          <Reveal delay={0.2} className="h-full">
            <Link href={`/work/${caseStudies[2].slug}`} className="group flex flex-col h-full">
              <div className="overflow-hidden rounded-3xl shadow-sm border border-line">
                <Image
                  src={caseStudies[2].card!}
                  alt={caseStudies[2].client}
                  width={900}
                  height={675}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <span className="type-label text-violet">{caseStudies[2].tag}</span>
                <h2 className="type-h3 mt-2 transition-colors group-hover:text-magenta">
                  {caseStudies[2].client}
                </h2>
                <p className="mt-3 text-plum-soft line-clamp-2">{caseStudies[2].summary}</p>
              </div>
            </Link>
          </Reveal>

          {/* Testimonial 2 */}
          <Reveal delay={0.1} className="bg-blush rounded-3xl p-10 md:p-14 h-full flex flex-col justify-center border border-white/50 relative overflow-hidden">
             <div className="absolute top-4 right-8 text-8xl text-magenta opacity-10 font-serif">"</div>
            <p className="type-lead text-plum italic relative z-10">&ldquo;{testimonials[2].quote}&rdquo;</p>
            <div className="mt-8">
              <p className="font-semibold text-magenta">{testimonials[2].name}</p>
              <p className="text-sm text-plum-soft uppercase tracking-wider">{testimonials[2].company}</p>
            </div>
          </Reveal>

          {/* Case Study 4: Aura Aesthetics */}
          <Reveal className="h-full">
            <Link href={`/work/${caseStudies[4].slug}`} className="group flex flex-col h-full">
              <div className="overflow-hidden rounded-3xl shadow-sm border border-line">
                <Image
                  src={caseStudies[4].card!}
                  alt={caseStudies[4].client}
                  width={900}
                  height={675}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <span className="type-label text-violet">{caseStudies[4].tag}</span>
                <h2 className="type-h3 mt-2 transition-colors group-hover:text-magenta">
                  {caseStudies[4].client}
                </h2>
                {caseStudies[4].results && (
                  <p className="mt-3 font-semibold text-magenta">
                    {caseStudies[4].results[0].value} {caseStudies[4].results[0].label}
                  </p>
                )}
              </div>
            </Link>
          </Reveal>

          {/* Case Study 5: Glow & Go */}
          <Reveal delay={0.2} className="h-full">
            <Link href={`/work/${caseStudies[5].slug}`} className="group flex flex-col h-full">
              <div className="overflow-hidden rounded-3xl shadow-sm border border-line">
                <Image
                  src={caseStudies[5].card!}
                  alt={caseStudies[5].client}
                  width={900}
                  height={675}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <span className="type-label text-violet">{caseStudies[5].tag}</span>
                <h2 className="type-h3 mt-2 transition-colors group-hover:text-magenta">
                  {caseStudies[5].client}
                </h2>
                {caseStudies[5].results && (
                  <p className="mt-3 font-semibold text-magenta">
                    {caseStudies[5].results[0].value} {caseStudies[5].results[0].label}
                  </p>
                )}
              </div>
            </Link>
          </Reveal>

        </div>
      </section>

      {/* Our Approach to Growth */}
      <section className="bg-paper border-y border-line py-24 md:py-32">
        <div className="container-site text-center max-w-4xl">
          <TextReveal as="p" className="type-label text-magenta">
            The Methodology
          </TextReveal>
          <TextReveal as="h2" className="type-h2 mt-4 text-balance">
            How we get these results
          </TextReveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3 text-left">
            <Reveal delay={0.1}>
              <div className="text-4xl text-violet mb-4">01</div>
              <h3 className="type-h3">Premium Brand</h3>
              <p className="type-body mt-3 text-plum-soft">
                We design a visual identity that screams luxury. If your brand looks cheap, patients will expect cheap prices. We fix that first.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="text-4xl text-violet mb-4">02</div>
              <h3 className="type-h3">High-Intent Ads</h3>
              <p className="type-body mt-3 text-plum-soft">
                We run Google and Facebook ads specifically targeting high-income demographics actively searching for your treatments.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="text-4xl text-magenta mb-4">03</div>
              <h3 className="type-h3">AI Conversion</h3>
              <p className="type-body mt-3 text-plum-soft">
                The secret sauce. Our AI agents contact every single lead within 60 seconds, answering questions and booking them directly into your calendar.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-site py-24 md:py-32">
        <Reveal className="rounded-3xl bg-plum px-8 py-20 text-center text-cream sm:px-16 shadow-xl">
          <p className="type-label text-cream/60">Your turn</p>
          <h2 className="type-h2 mx-auto mt-4 max-w-3xl text-balance">
            Want to be our next <span className="grad-text">success story?</span>
          </h2>
          <p className="type-lead mx-auto mt-5 max-w-xl text-cream/80 text-pretty">
            Book a free strategy session and we'll show you exactly how our system would work for your clinic.
          </p>
          <Link href="/contact" className="btn btn-primary mt-9 inline-flex">
            {site.cta}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
