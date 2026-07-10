import Link from "next/link";
import Image from "next/image";
import TextReveal from "@/components/anim/TextReveal";
import Reveal from "@/components/anim/Reveal";
import NewsletterForm from "@/components/NewsletterForm";
import Schema from "@/components/Schema";
import ROICalculator from "@/components/ROICalculator";
import { site } from "@/data/site";
import { services, steps } from "@/data/services";
import { caseStudies } from "@/data/case-studies";
import { testimonials } from "@/data/testimonials";

const homeCases = caseStudies.filter((c) => c.card);

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.thevibedesign.com/#organization",
        name: site.name,
        url: "https://www.thevibedesign.com",
        logo: "https://www.thevibedesign.com/opengraph-image",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.contact.phone,
          contactType: "customer service",
        },
      },
      {
        "@type": "Person",
        "@id": "https://www.thevibedesign.com/#founder",
        name: site.founder.name,
        jobTitle: site.founder.title,
        worksFor: { "@id": "https://www.thevibedesign.com/#organization" },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.thevibedesign.com/#website",
        url: "https://www.thevibedesign.com",
        name: site.name,
        publisher: { "@id": "https://www.thevibedesign.com/#organization" },
      },
    ],
  };

  return (
    <>
      <Schema data={jsonLd} />
      {/* Hero: tipografski, meki gradijent blobovi u pozadini */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, #f8cfe7 0%, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-30%] left-[-8%] h-[480px] w-[480px] rounded-full opacity-60"
          style={{ background: "radial-gradient(circle, #ddd2f5 0%, transparent 70%)" }}
        />
        <div className="container-site relative grid gap-10 lg:grid-cols-[1fr_45%] items-end">
          {/* Left Text Content */}
          <div className="pb-4 md:pb-32 z-10 pt-10">
            <TextReveal as="p" immediate className="type-label text-violet">
              Marketing for medspas
            </TextReveal>
            <TextReveal as="h1" immediate delay={0.1} className="type-display mt-6">
              Scale your medspa from invisible to <span className="grad-text">unstoppable.</span>
            </TextReveal>
            <TextReveal
              as="p"
              immediate
              delay={0.25}
              className="type-lead mt-8 max-w-xl text-plum-soft"
            >
              Only a few medspa brands will lead their market this year. We pair
              ads that attract ready to book clients with an AI agent that
              follows up in seconds, so yours is one of them.
            </TextReveal>
            <Reveal delay={0.45} className="mt-10 flex flex-wrap items-center gap-5">
              <Link href="/contact" className="btn btn-primary">
                {site.cta}
              </Link>
              <Link href="/work" className="btn btn-secondary">
                See our work
              </Link>
            </Reveal>
            <Reveal delay={0.6} className="mt-16 hidden lg:block">
              <p className="text-sm text-plum-soft">
                Led by <strong className="font-semibold text-plum">{site.founder.name}</strong>,{" "}
                {site.founder.title}
              </p>
            </Reveal>
          </div>

          {/* Right Image Content */}
          <div className="relative w-full flex justify-center lg:justify-end z-0">
            <Reveal delay={0.3} effect="fade-up" className="w-full max-w-[500px] lg:max-w-none lg:w-[120%] lg:-mr-[10%]">
              <Image 
                src="/images/hero.webp" 
                alt="Maya Sterling, Brand Specialist" 
                width={800} 
                height={1000} 
                className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </Reveal>
          </div>
          
          {/* Mobile "Led by Maya" */}
          <div className="lg:hidden text-center pb-10 -mt-6 z-10">
            <Reveal delay={0.5}>
              <p className="text-sm text-plum-soft">
                Led by <strong className="font-semibold text-plum">{site.founder.name}</strong>,{" "}
                {site.founder.title}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Klijenti: traka poverenja */}
      <section className="border-y border-line bg-paper">
        <div className="container-site flex flex-wrap items-center justify-between gap-x-10 gap-y-3 py-6">
          <span className="type-label text-plum-soft">Our unstoppable clients</span>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-2 text-plum-soft">
            {["Lume Aesthetics", "Verde Beauty", "Silken Shea Glow", "Vegakiss", "Fungi Fuel"].map(
              (name) => (
                <span key={name} className="font-medium">
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Formula rasta: 3 stuba usluga */}
      <section className="container-site py-24 md:py-32">
        <TextReveal as="p" className="type-label text-magenta">
          What we do
        </TextReveal>
        <TextReveal as="h2" className="type-h2 mt-4 max-w-2xl">
          The formula for growth
        </TextReveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.12} className="card p-8">
              <span className="type-label grad-text">0{i + 1}</span>
              <h3 className="type-h3 mt-4">{s.title}</h3>
              <p className="type-body mt-3 text-plum-soft">{s.short}</p>
            </Reveal>
          ))}
        </div>

        {/* ROI Calculator */}
        <ROICalculator />

        <Reveal className="mt-10">
          <Link href="/services" className="link-arrow">
            Explore the services
          </Link>
        </Reveal>
      </section>

      {/* Founder: Maya u prvom planu */}
      <section className="bg-blush">
        <div className="container-site grid items-center gap-12 py-24 md:grid-cols-2 md:py-32">
          <Reveal effect="clip" className="overflow-hidden rounded-3xl">
            <Image
              src="/images/maya.webp"
              alt="Maya Sterling, Founder"
              width={600}
              height={750}
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </Reveal>
          <div>
            <TextReveal as="p" className="type-label text-violet">
              Founder
            </TextReveal>
            <TextReveal as="h2" className="type-h2 mt-4">
              Meet {site.founder.name}
            </TextReveal>
            <Reveal className="type-lead mt-6 text-plum-soft">
              <p>
                Maya has spent her career helping medspa owners turn great
                treatments into fully booked calendars. As a brand specialist
                and growth consultant working exclusively with medspas, she
                knows where your next clients are and what makes them book.
              </p>
            </Reveal>
            <Reveal className="type-body mt-5 text-plum-soft">
              <p>
                When you work with The Vibe Design, your brand gets the same
                care she puts into her own.
              </p>
            </Reveal>
            <Reveal className="mt-8">
              <Link href="/about" className="btn btn-secondary">
                Meet Maya
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Case studije */}
      <section className="container-site py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <TextReveal as="p" className="type-label text-magenta">
              Case studies
            </TextReveal>
            <TextReveal as="h2" className="type-h2 mt-4">
              Work that fills calendars
            </TextReveal>
          </div>
          <Reveal>
            <Link href="/work" className="link-arrow">
              See all case studies
            </Link>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {homeCases.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.12}>
              <Link href={`/work/${c.slug}`} className="group block">
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src={c.card!}
                    alt={`${c.client}, ${c.tag}`}
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="type-h3 mt-5 transition-colors group-hover:text-violet">
                  {c.client}
                </h3>
                <p className="mt-1 text-plum-soft">{c.tag}</p>
                {c.results && (
                  <p className="mt-2 font-semibold text-magenta">
                    {c.results[0].value} {c.results[0].label}
                  </p>
                )}
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Izjava: klikovi u klijente */}
      <section className="bg-plum text-cream">
        <div className="container-site py-24 text-center md:py-32">
          <TextReveal as="h2" className="type-h2 mx-auto max-w-3xl">
            We turn clicks into <span className="grad-text">paying clients.</span>
          </TextReveal>
          <TextReveal as="p" className="type-lead mx-auto mt-6 max-w-2xl text-cream/75">
            From targeted ads to AI powered lead follow up, we help medspas
            fill their calendars fast, without wasting a dollar on unqualified
            leads.
          </TextReveal>
        </div>
      </section>

      {/* Kako radimo: 3 koraka */}
      <section className="bg-lavender">
        <div className="container-site py-24 md:py-32">
          <TextReveal as="p" className="type-label text-violet">
            How it works
          </TextReveal>
          <TextReveal as="h2" className="type-h2 mt-4 max-w-2xl">
            Three steps to a full calendar
          </TextReveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12}>
                <div className="flex items-baseline gap-4">
                  <span
                    className="grad-text"
                    style={{ fontFamily: "var(--font-ngetic)", fontSize: "2.5rem" }}
                  >
                    {i + 1}
                  </span>
                  <div className="h-px flex-1 bg-plum/15" />
                </div>
                <h3 className="type-h3 mt-5">{step.title}</h3>
                <p className="type-body mt-3 text-plum-soft">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonijali */}
      <section className="container-site py-24 md:py-32">
        <TextReveal as="p" className="type-label text-magenta">
          What clients say about us
        </TextReveal>
        <TextReveal as="h2" className="type-h2 mt-4 max-w-2xl">
          In their words
        </TextReveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.12} className="card p-8">
              <p className="type-lead">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-plum-soft">{t.company}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Zavrsni CTA */}
      <section className="container-site pb-24 md:pb-32">
        <Reveal className="rounded-3xl bg-plum px-8 py-20 text-center text-cream sm:px-16">
          <p className="type-label text-cream/60">Ready when you are</p>
          <h2 className="type-h2 mx-auto mt-4 max-w-3xl">
            Your calendar, <span className="grad-text">full.</span>
          </h2>
          <p className="type-lead mx-auto mt-5 max-w-xl text-cream/80">
            Book a free call with Maya and find out exactly where your next
            clients are coming from.
          </p>
          <Link href="/contact" className="btn btn-primary mt-9 inline-flex">
            {site.cta}
          </Link>
        </Reveal>
      </section>

      {/* Newsletter */}
      <section className="border-t border-line bg-paper">
        <div className="container-site max-w-4xl py-20 text-center">
          <TextReveal as="h2" className="type-h3">
            Download the 2026 MedSpa Growth Blueprint
          </TextReveal>
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
