"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

// Tamna traka: beli logo zahteva tamnu podlogu (jedina verzija logoa koju imamo).
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-plum/95 backdrop-blur transform-gpu">
        <div className="container-site flex items-center justify-between py-2 md:py-4">
        <Link href="/" aria-label="The Vibe Design, home" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/tvd-logo-white.png"
            alt="The Vibe Design, marketing agency"
            width={168}
            height={53}
            priority
            className="w-[145px] md:w-[168px] h-auto pointer-events-none"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-white ${
                pathname.startsWith(item.href) ? "text-white" : "text-white/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary !py-3 !text-[0.8rem]">
            {site.cta}
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-[9999] flex h-12 w-12 md:h-14 md:w-14 flex-col items-center justify-center gap-1.5 lg:hidden cursor-pointer touch-manipulation"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          onTouchStart={() => {}}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <span
            className={`pointer-events-none h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`pointer-events-none h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>
      </div>

      </header>

      {/* Mobile Menu Overlay - OUTSIDE of header to escape backdrop-filter containing block */}
      <div 
        data-lenis-prevent="true" 
        className={`fixed inset-0 z-[40] bg-plum lg:hidden pt-[100px] pb-10 overflow-y-auto overscroll-contain transform-gpu transition-all duration-1000 ease-in-out ${
          open ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="container-site flex flex-col gap-4 py-8" aria-label="Mobile">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-3 text-2xl font-semibold text-white/90 active:text-magenta"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn-primary mt-6 self-start text-lg px-8 py-4"
            onClick={() => setOpen(false)}
          >
            {site.cta}
          </Link>
        </nav>
      </div>
    </>
  );
}
