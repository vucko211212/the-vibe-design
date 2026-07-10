import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-plum text-cream">
      <div className="container-site grid gap-12 py-16 md:grid-cols-3">
        <div>
          <Image
            src="/images/tvd-logo-white.png"
            alt="The Vibe Design, marketing agency"
            width={190}
            height={60}
          />
          <p className="type-body mt-6 max-w-xs text-cream/70">
            Ads that attract the right clients and an AI agent that follows up
            instantly, keeping your calendar full and your business ahead of
            the competition.
          </p>
        </div>

        <div>
          <p className="type-label text-cream/50">Quick links</p>
          <ul className="mt-5 flex flex-col gap-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="type-label text-cream/50">Contact</p>
          <ul className="mt-5 flex flex-col gap-3 text-cream/80">
            <li>{site.contact.address}</li>
            <li>
              <a
                href={`tel:+1${site.contact.phone.replaceAll("-", "")}`}
                className="transition-colors hover:text-white"
              >
                {site.contact.phone}
              </a>
            </li>
          </ul>
          <Link href="/contact" className="btn btn-primary mt-8">
            {site.cta}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-sm text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 The Vibe Design. All rights reserved.</span>
          <span className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
