// Stvarne izjave klijenata sa starog sajta (izvucene iz slider widgeta 10.07.2026).
// Crtice iz originala zamenjene tackom/zapetom po pravilu o crticama.
export type Testimonial = {
  quote: string;
  name: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The Vibe Design completely transformed my medspa's growth. Their ads brought in high-quality leads, the AI call agent kept our calendar full, and they treated my brand like their own. Bookings have skyrocketed!",
    name: "Patricia C.",
    company: "Verde Beauty MedSpa",
  },
  {
    quote:
      "The Vibe Design exceeded my expectations. Their ads brought in a steady stream of new clients, and the AI call agent made sure we never missed a lead. Professional, results-driven, and easy to work with. Highly recommend.",
    name: "Richard L.",
    company: "Lume Aesthetics",
  },
  {
    quote:
      "The Vibe Design completely transformed our business. We went from struggling with bookings to being fully booked weeks ahead. Their branding and ads made us look professional and trustworthy. Clients even mention it when they visit.",
    name: "Dr. Sarah K.",
    company: "Silken Shea Glow",
  },
  {
    quote:
      "I've tried other agencies, but none understood the medspa space like The Vibe Design. They set up a system that brings us qualified leads and follows up automatically, so no client slips through the cracks. In just one month, our revenue doubled.",
    name: "Amanda R.",
    company: "Vegakiss",
  },
];
