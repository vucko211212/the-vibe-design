"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  children: ReactNode;
  className?: string;
  /** fade-up (default) | clip (otkrivanje slike odozdo) | scale (zoom-out slike) */
  effect?: "fade-up" | "clip" | "scale";
  delay?: number;
};

// Generički scroll reveal blok.
export default function Reveal({ children, className, effect = "fade-up", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const common = {
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        duration: 1.2,
        ease: "power3.out",
        delay,
      } as const;

      if (effect === "clip") {
        gsap.from(ref.current, {
          clipPath: "inset(100% 0 0 0)",
          ...common,
          ease: "power4.inOut",
        });
        const img = ref.current.querySelector("img");
        if (img) gsap.from(img, { scale: 1.25, ...common, ease: "power4.inOut" });
      } else if (effect === "scale") {
        gsap.from(ref.current, { scale: 1.12, opacity: 0, ...common });
      } else {
        gsap.from(ref.current, { y: 48, opacity: 0, ...common });
      }
    },
    { scope: ref, dependencies: [effect, delay] }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
