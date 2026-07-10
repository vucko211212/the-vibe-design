"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** bez ScrollTrigger-a: animira odmah po mount-u (hero) */
  immediate?: boolean;
};

// Naslov podeljen na linije, svaka klizi odozdo iz maske.
export default function TextReveal({
  children,
  as: Tag = "h2",
  className,
  delay = 0,
  immediate = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const split = SplitText.create(ref.current, {
        type: "lines",
        mask: "lines",
        linesClass: "split-line",
      });

      gsap.from(split.lines, {
        yPercent: 110,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.09,
        delay,
        ...(immediate
          ? {}
          : {
              scrollTrigger: {
                trigger: ref.current,
                start: "top 88%",
                once: true,
              },
            }),
      });

      return () => split.revert();
    },
    { scope: ref }
  );

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  );
}
