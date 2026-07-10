import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TextReveal from "@/components/anim/TextReveal";
import Reveal from "@/components/anim/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About The Vibe Design",
  description:
    "We are a specialized growth agency for MedSpas. Brand strategy, performance marketing, and AI lead follow-up.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container-site py-24 md:py-32 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #f8cfe7 0%, transparent 70%)" }}
        />
        <TextReveal as="p" immediate className="type-label text-violet">
          Our Story
        </TextReveal>
        <TextReveal as="h1" immediate delay={0.1} className="type-display mt-6 max-w-5xl">
          We believe you should be <span className="grad-text">injecting,</span> not managing ads.
        </TextReveal>
        <TextReveal as="p" immediate delay={0.2} className="type-lead mt-8 max-w-2xl text-plum-soft">
          Most agencies will hand you a list of "leads" and wish you luck. We build a complete ecosystem that captures, books, and retains your patients.
        </TextReveal>
      </section>

      {/* Maya & The Philosophy */}
      <section className="bg-blush border-y border-white/50">
        <div className="container-site grid gap-12 py-24 md:py-32 md:grid-cols-2 items-center">
          <Reveal effect="clip" className="overflow-hidden rounded-3xl shadow-lg border border-white/40">
            <Image
              src="/images/maya.webp"
              alt="Maya Sterling, Founder"
              width={600}
              height={750}
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </Reveal>
          <div className="flex flex-col justify-center gap-6">
            <Reveal>
              <p className="type-label text-magenta">Meet The Founder</p>
              <h2 className="type-h2 mt-3">{site.founder.name}</h2>
              <p className="text-plum-soft font-medium">{site.founder.title}</p>
            </Reveal>
            <Reveal delay={0.1} className="type-h3 text-plum mt-4">
              "A beautiful brand is useless if it doesn't ring the register."
            </Reveal>
            <Reveal delay={0.2} className="type-body text-plum-soft space-y-4">
              <p>
                Maya works exclusively with medspas. That focus is the whole
                point: she knows the treatments, the patients, the seasonality
                and the competition, so your marketing never starts from zero.
              </p>
              <p>
                Her approach combines luxury brand strategy with ruthless performance
                marketing: a brand that earns trust, ads that attract high-ticket 
                patients, and an AI system that never lets a lead slip through the cracks.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why MedSpas Only */}
      <section className="container-site py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <TextReveal as="p" className="type-label text-violet">
            The Niche Advantage
          </TextReveal>
          <TextReveal as="h2" className="type-h2 mt-4 text-balance">
            Why we work <span className="italic">exclusively</span> with MedSpas
          </TextReveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Reveal delay={0.1} className="card p-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-violet/10 flex items-center justify-center text-violet mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 className="type-h3">Compliance Experts</h3>
            <p className="mt-4 type-body text-plum-soft">
              We know what you can and cannot say on Facebook Ads when it comes to Botox, fillers, and weight loss treatments. No banned accounts.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="card p-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-magenta/10 flex items-center justify-center text-magenta mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="type-h3">Patient Psychology</h3>
            <p className="mt-4 type-body text-plum-soft">
              Selling a $50 facial is different than selling a $3,000 Morpheus8 package. We know how to position your high-ticket services.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="card p-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-violet/10 flex items-center justify-center text-violet mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <h3 className="type-h3">Zero Learning Curve</h3>
            <p className="mt-4 type-body text-plum-soft">
              You don't have to explain to us what a neurotoxin is or how laser hair removal works. We hit the ground running on day one.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The AI Edge */}
      <section className="bg-plum text-cream py-24 md:py-32 border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet/20 to-transparent pointer-events-none" />
        <div className="container-site grid gap-12 md:grid-cols-2 items-center relative z-10">
          <div>
            <TextReveal as="p" className="type-label text-violet">
              The Unfair Advantage
            </TextReveal>
            <TextReveal as="h2" className="type-display mt-4 text-white">
              Agencies are stuck in the past.
            </TextReveal>
            <Reveal className="mt-6 type-lead text-cream/80 space-y-4">
              <p>
                Most marketing agencies still rely on manual email follow-ups and hoping your front desk calls leads back within 15 minutes. 
              </p>
              <p>
                At The Vibe Design, we deploy custom-trained AI Voice and Chat Agents that follow up with every single inquiry in under 60 seconds, 24/7/365. 
              </p>
              <p className="text-white font-medium">
                We don't just generate leads. We generate booked appointments on your calendar.
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <Reveal className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-violet shrink-0 flex items-center justify-center text-white font-bold text-sm">TVD</div>
                  <div className="bg-paper text-plum p-4 rounded-2xl rounded-tl-sm text-sm shadow-md">
                    Hi Sarah! I saw you were looking at our Lip Filler specials. Did you have any questions or would you like to check our availability for this week?
                  </div>
                </div>
                <div className="flex gap-4 items-start flex-row-reverse">
                  <div className="w-10 h-10 rounded-full bg-magenta shrink-0 flex items-center justify-center text-white font-bold text-sm">S</div>
                  <div className="bg-blush text-plum p-4 rounded-2xl rounded-tr-sm text-sm shadow-md">
                    Yes, how much is it and who does the injections?
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-violet shrink-0 flex items-center justify-center text-white font-bold text-sm">TVD</div>
                  <div className="bg-paper text-plum p-4 rounded-2xl rounded-tl-sm text-sm shadow-md">
                    Our lip filler starts at $650 per syringe, and all injections are performed by Dr. Smith or our Lead RN Maya. We actually have an opening this Thursday at 2:00 PM. Should I lock that in for you?
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-site py-24 md:py-32">
        <Reveal className="rounded-3xl bg-lavender border border-white px-8 py-20 text-center sm:px-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-white opacity-40 blur-3xl rounded-full pointer-events-none" />
          <div className="relative z-10">
            <p className="type-label text-violet">Ready to scale?</p>
            <h2 className="type-h2 mx-auto mt-4 max-w-3xl text-balance">
              Let's build a brand that <span className="grad-text">dominates</span> your local market.
            </h2>
            <Link href="/contact" className="btn btn-primary mt-9 inline-flex shadow-lg shadow-violet/20">
              {site.cta}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
