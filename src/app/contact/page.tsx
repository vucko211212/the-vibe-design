import type { Metadata } from "next";
import TextReveal from "@/components/anim/TextReveal";
import Reveal from "@/components/anim/Reveal";
import { site } from "@/data/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free call with The Vibe Design and find out where your medspa's next clients are coming from.",
};

export default function ContactPage() {
  return (
    <>
      <section className="container-site py-24 md:py-32">
        <TextReveal as="p" immediate className="type-label text-violet">
          Contact
        </TextReveal>
        <TextReveal as="h1" immediate delay={0.1} className="type-display mt-6 max-w-4xl">
          Let&apos;s talk about your <span className="grad-text">growth.</span>
        </TextReveal>
        <TextReveal as="p" immediate delay={0.2} className="type-lead mt-8 max-w-2xl text-plum-soft">
          A free call with {site.founder.name}: where you are now, where the
          gaps are and what it would take to fill your calendar.
        </TextReveal>
      </section>

      <section className="container-site grid gap-6 pb-24 md:grid-cols-2">
        <Reveal className="card p-6 md:p-10 flex flex-col h-full">
          <div>
            <p className="type-label text-plum-soft">Call us</p>
            <a
              href={`tel:+1${site.contact.phone.replaceAll("-", "")}`}
              className="type-h3 mt-4 inline-block transition-colors hover:text-violet"
            >
              {site.contact.phone}
            </a>
            <p className="type-body mt-4 text-plum-soft">{site.contact.address}</p>
          </div>
          
          <div className="mt-8 flex-1 relative min-h-[250px] overflow-hidden rounded-2xl bg-lavender">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(site.contact.address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              className="absolute inset-0 w-full h-full border-0"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.7) mix-blend-mode(multiply)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
        <Reveal delay={0.12} className="card bg-blush p-6 md:p-10">
          <p className="type-label text-plum-soft mb-6">Or send us your details</p>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
