import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Design System",
  robots: { index: false },
};

const swatches = [
  { name: "Cream", varName: "--cream", hex: "#fbf7f4", text: "#2b1f3a" },
  { name: "Blush", varName: "--blush", hex: "#f8eaf2", text: "#2b1f3a" },
  { name: "Lavender", varName: "--lavender", hex: "#efe9f9", text: "#2b1f3a" },
  { name: "Paper", varName: "--paper", hex: "#ffffff", text: "#2b1f3a" },
  { name: "Plum", varName: "--plum", hex: "#2b1f3a", text: "#fbf7f4" },
  { name: "Plum Soft", varName: "--plum-soft", hex: "#6f6280", text: "#fbf7f4" },
  { name: "Magenta", varName: "--magenta", hex: "#e40f9f", text: "#ffffff" },
  { name: "Violet", varName: "--violet", hex: "#4a24a5", text: "#ffffff" },
];

function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-4 border-b border-line pb-4">
      <span className="type-label text-magenta">{index}</span>
      <h2 className="type-h3">{title}</h2>
    </div>
  );
}

export default function StyleTile() {
  return (
    <div>
      {/* Header traka: beli logo trazi tamnu podlogu */}
      <header className="bg-plum">
        <div className="container-site flex items-center justify-between py-6">
          <Image
            src="/images/tvd-logo-white.png"
            alt="The Vibe Design, marketing agency"
            width={216}
            height={68}
            priority
          />
          <span className="type-label text-cream/70">Design System v1</span>
        </div>
      </header>

      <div className="container-site flex flex-col gap-20 py-16">
        {/* 01 Paleta */}
        <section>
          <SectionTitle index="01" title="Palette" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {swatches.map((s) => (
              <div
                key={s.name}
                className="flex h-28 flex-col justify-between rounded-2xl border border-line p-4"
                style={{ background: s.hex, color: s.text }}
              >
                <span className="font-semibold">{s.name}</span>
                <span className="text-sm opacity-70">{s.hex}</span>
              </div>
            ))}
          </div>
          <div className="grad-brand mt-4 flex h-28 items-end rounded-2xl p-4 text-white">
            <span className="font-semibold">
              Brand gradient (logo), samo akcenat: CTA, detalji, hover
            </span>
          </div>
        </section>

        {/* 02 Tipografija */}
        <section>
          <SectionTitle index="02" title="Typography" />
          <div className="flex flex-col gap-10">
            <div>
              <span className="type-label text-plum-soft">Display, Ngetic Modern</span>
              <h1 className="type-display mt-3">
                From invisible to{" "}
                <span className="grad-text">unstoppable.</span>
              </h1>
            </div>
            <div>
              <span className="type-label text-plum-soft">H2, Ngetic Modern</span>
              <p className="type-h2 mt-3">The formula for growth</p>
            </div>
            <div>
              <span className="type-label text-plum-soft">H3, Ngetic Modern</span>
              <p className="type-h3 mt-3">Ads that attract</p>
            </div>
            <div className="max-w-2xl">
              <span className="type-label text-plum-soft">Lead, Josefin Sans Light</span>
              <p className="type-lead mt-3">
                From targeted ads to AI powered lead follow up, we help medspas
                fill their calendars fast, without wasting a dollar on
                unqualified leads.
              </p>
            </div>
            <div className="max-w-2xl">
              <span className="type-label text-plum-soft">Body, Josefin Sans</span>
              <p className="type-body mt-3 text-plum-soft">
                We create high converting ad campaigns that do more than
                generate traffic. They attract qualified, ready to book clients
                who are actively looking for your services. Every dollar is
                strategically placed to maximize results.
              </p>
            </div>
          </div>
        </section>

        {/* 03 Dugmad i linkovi */}
        <section>
          <SectionTitle index="03" title="Buttons & Links" />
          <div className="flex flex-wrap items-center gap-6">
            <button className="btn btn-primary">Book a Free Call</button>
            <button className="btn btn-secondary">See Our Work</button>
            <a href="#" className="link-arrow">
              Read the case study
            </a>
          </div>
        </section>

        {/* 04 Kartice */}
        <section>
          <SectionTitle index="04" title="Cards" />
          <div className="grid gap-6 md:grid-cols-3">
            {/* Servisna kartica */}
            <div className="card p-8">
              <span className="type-label grad-text">01</span>
              <h3 className="type-h3 mt-4">Ads that attract</h3>
              <p className="type-body mt-3 text-plum-soft">
                High converting campaigns that bring in qualified, ready to
                book clients who are actively looking for your services.
              </p>
            </div>
            {/* Testimonijal kartica */}
            <div className="card bg-blush p-8">
              <p className="type-lead">
                Quote arrives from the live site or the client. Names are
                confirmed, the words are on their way.
              </p>
              <div className="mt-6">
                <p className="font-semibold">Patricia C.</p>
                <p className="text-sm text-plum-soft">Verde Beauty MedSpa</p>
              </div>
            </div>
            {/* Founder kartica */}
            <div className="card bg-lavender p-8">
              <span className="type-label text-violet">Founder</span>
              <h3 className="type-h3 mt-4">Maya Sterling</h3>
              <p className="type-body mt-3 text-plum-soft">
                Brand Specialist &amp; Growth Consultant for Medspas
              </p>
              <a href="#" className="link-arrow mt-6 inline-block">
                Meet Maya
              </a>
            </div>
          </div>
        </section>

        {/* 05 Tamna sekcija */}
        <section>
          <SectionTitle index="05" title="Dark section" />
          <div className="rounded-3xl bg-plum px-8 py-16 text-center text-cream sm:px-16">
            <p className="type-label text-cream/60">Ready when you are</p>
            <p className="type-h2 mx-auto mt-4 max-w-3xl">
              Your calendar, <span className="grad-text">full.</span>
            </p>
            <p className="type-lead mx-auto mt-4 max-w-xl text-cream/80">
              Ads that attract the right clients and an AI agent that follows
              up instantly, keeping your business ahead of the competition.
            </p>
            <button className="btn btn-primary mt-8">Book a Free Call</button>
          </div>
        </section>
      </div>

      <footer className="border-t border-line py-8">
        <div className="container-site flex items-center justify-between text-sm text-plum-soft">
          <span>The Vibe Design, design system preview</span>
          <span>Ngetic Modern + Josefin Sans</span>
        </div>
      </footer>
    </div>
  );
}
