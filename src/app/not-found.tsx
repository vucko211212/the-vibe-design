import Link from "next/link";
import TextReveal from "@/components/anim/TextReveal";
import Reveal from "@/components/anim/Reveal";

export default function NotFound() {
  return (
    <div className="container-site flex min-h-[70vh] flex-col items-center justify-center text-center py-24">
      <TextReveal as="p" immediate className="type-label text-magenta">
        404 error
      </TextReveal>
      <TextReveal as="h1" immediate delay={0.1} className="type-display mt-4 max-w-2xl mx-auto">
        This page is missing, just like your <span className="grad-text">no-show patients.</span>
      </TextReveal>
      <Reveal delay={0.2} className="type-lead mt-6 max-w-xl mx-auto text-plum-soft">
        <p>
          Don't worry, even the best medspas have the occasional empty chair. 
          Let's get you back to the front desk.
        </p>
      </Reveal>
      <Reveal delay={0.4} className="mt-10 flex gap-4">
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          Contact Us
        </Link>
      </Reveal>
    </div>
  );
}
