"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Lenis smooth scroll sinhronizovan sa GSAP ScrollTrigger-om.
// Kod prefers-reduced-motion se ne aktivira uopste.
export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.12, anchors: true });
    lenis.on("scroll", ScrollTrigger.update);
    lenisRef.current = lenis;
    // izlozeno za debug/verifikaciju
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Na promenu rute: trenutni skok na vrh, inace Lenis vraca staru poziciju
  // (Next resetuje scroll, ali Lenis-ov interni target ostaje na starom mestu).
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}
