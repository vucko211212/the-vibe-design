import type { Metadata } from "next";
import Link from "next/link";
import TextReveal from "@/components/anim/TextReveal";
import Reveal from "@/components/anim/Reveal";
import { services, processSteps, faqs } from "@/data/services";
import { site } from "@/data/site";

import AIAgentDemo from "@/components/AIAgentDemo";
import PhoneChatDemo from "@/components/PhoneChatDemo";
import AdsDashboardDemo from "@/components/AdsDashboardDemo";
import AICallDemo from "@/components/AICallDemo";

export const metadata: Metadata = {
  title: "Services",
  description:
    "We handle the messy tech and marketing so you can focus on injecting. Discover our complete ecosystem for MedSpas.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* Iste pozadinske mrlje kao na Home strani */}
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
        <div className="container-site relative py-24 md:py-36">
          <TextReveal as="p" immediate className="type-label text-violet">
            What we do
          </TextReveal>
          <TextReveal as="h1" immediate delay={0.1} className="type-display mt-6 max-w-5xl">
            We handle the messy tech. You focus on <span className="grad-text">your patients.</span>
          </TextReveal>
          <TextReveal as="p" immediate delay={0.25} className="type-lead mt-8 max-w-2xl text-plum-soft">
            We don't just run ads. We build a complete system that attracts patients, books them automatically, and keeps them coming back.
          </TextReveal>
        </div>
      </section>

      {/* Main Services (Visual Layout) */}
      <section className="mt-4">

        {/* Ads Section */}
        <div className="bg-paper py-24 border-y border-line">
          <div className="container-site grid gap-12 md:grid-cols-2 items-center">
            <Reveal>
              <span className="text-violet type-label">01</span>
              <h3 className="type-h2 mt-4">{services[0].title}</h3>
              <p className="type-lead mt-6 text-plum-soft">{services[0].long}</p>
            </Reveal>
            <Reveal delay={0.2} className="h-full">
              <AdsDashboardDemo />
            </Reveal>
          </div>
        </div>

        {/* AI Section */}
        <div className="bg-blush py-24 border-b border-white/50">
          <div className="container-site grid gap-12 md:grid-cols-2 items-center">
            <Reveal delay={0.2} className="order-2 md:order-1 h-full">
              <AICallDemo />
            </Reveal>
            <Reveal className="order-1 md:order-2">
              <span className="text-magenta type-label">02</span>
              <h3 className="type-h2 mt-4">{services[1].title}</h3>
              <p className="type-lead mt-6 text-plum-soft">{services[1].long}</p>
            </Reveal>
          </div>
        </div>

        {/* Reactivation Section */}
        <div className="bg-plum text-cream py-24">
          <div className="container-site grid gap-12 md:grid-cols-2 items-center">
            <Reveal>
              <span className="text-violet type-label">03</span>
              <h3 className="type-h2 mt-4 text-white">{services[2].title}</h3>
              <p className="type-lead mt-6 text-cream/80">{services[2].long}</p>
            </Reveal>
            <Reveal delay={0.2} className="flex justify-center">
              <PhoneChatDemo />
            </Reveal>
          </div>
        </div>
      </section>

      {/* AI Agent Demo Section */}
      <section className="container-site pb-24">
        <AIAgentDemo />
      </section>

      {/* The Process */}
      <section className="bg-lavender">
        <div className="container-site py-24 md:py-32">
          <TextReveal as="p" className="type-label text-violet">
            The Timeline
          </TextReveal>
          <TextReveal as="h2" className="type-h2 mt-4 max-w-2xl text-balance">
            Your First 30 Days
          </TextReveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
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
                <h3 className="type-h3 mt-5 text-balance">{step.title}</h3>
                <p className="type-body mt-3 text-plum-soft">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we do vs What you do */}
      <section className="bg-blush">
        <div className="container-site py-24 md:py-32">
          <TextReveal as="p" className="type-label text-magenta">
            The Partnership
          </TextReveal>
          <TextReveal as="h2" className="type-h2 mt-4 max-w-2xl text-balance">
            The &quot;Done-For-You&quot; Promise
          </TextReveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <Reveal className="card p-10 md:p-12">
              <h3 className="type-h3 text-violet">What We Do</h3>
              <ul className="type-lead mt-6 space-y-4 text-plum-soft">
                <li>• Write all the ad copy and design the graphics</li>
                <li>• Set up the tracking codes and messy tech integrations</li>
                <li>• Train the AI receptionist to know your prices</li>
                <li>• Follow up with every single person who messages you</li>
                <li>• Reactivate your old patient list</li>
              </ul>
            </Reveal>
            <Reveal delay={0.2} className="card p-10 md:p-12">
              <h3 className="type-h3 text-magenta">What You Do</h3>
              <ul className="type-lead mt-6 space-y-4 font-medium text-plum">
                <li>• Approve the campaigns</li>
                <li>• Treat the patients sitting in your chair</li>
                <li>• Enjoy a fully booked calendar</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container-site py-24 md:py-32 max-w-4xl">
        <TextReveal as="p" className="type-label text-violet text-center">
          Clarifications
        </TextReveal>
        <TextReveal as="h2" className="type-h2 mt-4 text-center text-balance">
          Frequently Asked Questions
        </TextReveal>
        <div className="mt-16 flex flex-col gap-8">
          {faqs.map((faq, i) => (
            <Reveal key={i} className="border-b border-line pb-8">
              <h3 className="type-h3 text-balance">{faq.question}</h3>
              <p className="type-body mt-4 text-plum-soft">{faq.answer}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA - Isti kao na Home strani */}
      <section className="container-site pb-24 md:pb-32">
        <Reveal className="rounded-3xl bg-plum px-8 py-20 text-center text-cream sm:px-16">
          <p className="type-label text-cream/60">Ready when you are</p>
          <h2 className="type-h2 mx-auto mt-4 max-w-3xl text-balance">
            Stop stressing over marketing. <span className="grad-text">Let us build your system.</span>
          </h2>
          <p className="type-lead mx-auto mt-5 max-w-xl text-cream/80 text-pretty">
            Book a free call with Maya and find out exactly where your next
            patients are coming from.
          </p>
          <Link href="/contact" className="btn btn-primary mt-9 inline-flex">
            {site.cta}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
