// Case studije. Tekst i brojke iskljucivo sa starog sajta:
// brojke su bile zarobljene u slikama (izvucene rucno 10.07.2026, vidi OVERVIEW klijenta).
export type CaseStudy = {
  slug: string;
  client: string;
  tag: string;
  summary: string;
  card?: string; // slika za karticu
  results?: { value: string; label: string }[];
  gallery: { src: string; alt: string; width: number; height: number }[];
  pending?: boolean; // ceka materijal od klijenta
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "lume-aesthetics",
    client: "Lume Aesthetics",
    tag: "Medspa brand and growth system",
    summary:
      "Lume Aesthetics came to The Vibe Design with a high quality service offering but low visibility and inconsistent bookings: outdated branding, a website converting at 1.2%, no paid ad strategy and follow up that took too long. We rebuilt the brand, redesigned the website around conversion and integrated instant booking with lead capture on every key service page.",
    card: "/images/work/lume-card.webp",
    gallery: [
      { src: "/images/work/lume-card.webp", alt: "Lume Aesthetics website redesign on a laptop", width: 1400, height: 2030 },
      { src: "/images/work/lume-strategy.webp", alt: "The Vibe Design growth strategy for Lume Aesthetics, step one: branding and website overhaul", width: 1600, height: 1354 },
    ],
  },
  {
    slug: "silken",
    client: "Silken Shea Glow",
    tag: "Skincare brand, ads and AI follow up",
    summary:
      "Silken Shea Glow needed a brand and a growth engine to match the quality of its shea based skincare. We built the visual identity, ran Google Ads focused on high intent buyers and put AI follow up in front of every lead.",
    card: "/images/work/silken-card.webp",
    results: [
      { value: "220%", label: "more bookings over the campaign period" },
      { value: "3,060", label: "total sales, 86% from new customers" },
      { value: "6.7%", label: "website conversion rate, up from 1.2%" },
      { value: "10.13x", label: "return on ad spend, $135K spent for $1.37M in sales" },
      { value: "2 min", label: "lead follow up time, down from 12 hours" },
    ],
    gallery: [
      { src: "/images/work/silken-full.webp", alt: "Silken Shea Glow campaign results and social media designs", width: 1600, height: 3573 },
    ],
  },
  {
    slug: "fungi-fuel",
    client: "Fungi Fuel",
    tag: "Brand identity and packaging",
    summary:
      "Fungi Fuel blends the rich flavor of coffee with the benefits of carefully selected mushrooms. We created a distinctive illustrated identity and carried it across packaging, vehicles and merchandise, giving an unusual product a brand people remember.",
    card: "/images/work/fungi-fuel-card.webp",
    gallery: [
      { src: "/images/work/fungi-brand.webp", alt: "Fungi Fuel mushroom coffee brand identity", width: 1600, height: 1250 },
      { src: "/images/work/fungi-fuel-card.webp", alt: "Fungi Fuel packaging design, black and kraft pouches", width: 1400, height: 909 },
      { src: "/images/work/fungi-van.webp", alt: "Fungi Fuel delivery van wrap design", width: 1600, height: 1067 },
    ],
  },
  {
    slug: "verde-beauty",
    client: "Verde Beauty MedSpa",
    tag: "Ads and AI lead follow up",
    summary:
      "Growth campaign for Verde Beauty MedSpa. Full case study materials are being prepared.",
    gallery: [],
    pending: true,
  },
  {
    slug: "aura-aesthetics",
    client: "Aura Aesthetics",
    tag: "Botox Reactivation & High-Ticket Ads",
    summary:
      "Aura Aesthetics had a massive list of past patients who hadn't returned in 8+ months. We deployed our AI reactivation sequence via SMS, generating $42,000 in bookings within the first 14 days without spending a dollar on ads.",
    card: "/images/work/aura-card.png",
    results: [
      { value: "$42K", label: "revenue generated in 14 days" },
      { value: "0", label: "ad spend required" },
    ],
    gallery: [
      { src: "/images/work/aura-card.png", alt: "Aura Aesthetics luxurious medspa treatment room", width: 1024, height: 1024 },
    ],
  },
  {
    slug: "glow-and-go",
    client: "Glow & Go Injectables",
    tag: "AI Receptionist & Conversion",
    summary:
      "Glow & Go was missing calls and losing leads to competitors because their front desk was overwhelmed. We implemented a 24/7 AI Receptionist that books appointments directly into their EMR.",
    card: "/images/work/glow-card.png",
    results: [
      { value: "45%", label: "decrease in missed calls" },
      { value: "112", label: "appointments booked automatically" },
    ],
    gallery: [
      { src: "/images/work/glow-card.png", alt: "Glow & Go Injectables premium skincare aesthetic", width: 1024, height: 1024 },
    ],
  },
];
