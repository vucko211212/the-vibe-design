export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
};

export const services: Service[] = [
  {
    slug: "patient-focused-ads",
    title: "Ads That Actually Bring People In",
    short:
      "Stop paying for 'tire-kickers' and start filling your chairs with high-ticket patients.",
    long: "We don't care about 'clicks' or vanity metrics. We connect our ad systems directly to your booking calendar, so the algorithm learns exactly what a high-paying patient looks like. The result? Fewer bargain hunters wasting your front desk's time, and a calendar full of people ready to invest in premium treatments.",
  },
  {
    slug: "safe-ai-receptionist",
    title: "Your 24/7 Virtual Receptionist",
    short:
      "A friendly voice assistant that books appointments while protecting your medical liability.",
    long: "This isn't a cheap chat widget. Our AI answers live calls with a natural voice, handles pricing questions, and books appointments seamlessly. Most importantly: it has strict medical guardrails. If a patient asks for medical advice or something complex, the AI elegantly says, 'That is a great question for our doctor. Let me grab your details so they can call you right back.' No guessing, no risks.",
  },
  {
    slug: "cms-reactivation",
    title: "Bringing Past Patients Back",
    short:
      "Wake up your dusty patient list and generate quick revenue without spending a dime on ads.",
    long: "Acquiring a new patient is incredibly expensive. Bringing back someone who already trusts you is practically free. We deploy friendly, automated text and email campaigns. Whether it's reminding them it's time for their Botox touch-up, or following up on a consultation they never booked, we turn your old database into immediate revenue.",
  },
];

export const processSteps = [
  {
    title: "Week 1: The Cleanup",
    body: "We audit your current booking process, organize your patient list, and connect all the messy tech behind the scenes. You don't lift a finger.",
  },
  {
    title: "Week 2: The Quick Cash",
    body: "We train your new AI receptionist on your specific prices and send a friendly campaign to your past patients to get quick bookings on the calendar.",
  },
  {
    title: "Week 3: The Growth Engine",
    body: "With the foundation set, we turn on highly targeted ads to bring in brand new, high-quality patients to fill your remaining open slots.",
  },
  {
    title: "Week 4+: Autopilot",
    body: "Your system is running. We handle the tweaking, the follow-ups, and the tech updates. You focus purely on delivering amazing clinical results.",
  },
];

export const faqs = [
  {
    question: "Do I have to change my current booking software?",
    answer: "Usually, no. We integrate seamlessly with the most popular booking systems used in the MedSpa industry. We handle the technical connection so you don't have to change the way you work."
  },
  {
    question: "What if the AI gives the wrong medical advice?",
    answer: "It physically can't. We program strict 'fences' around the AI. It is only allowed to discuss pricing, scheduling, and basic FAQs. The moment a question becomes medical, the AI is trained to instantly pause, collect the patient's information, and pass the conversation to your human staff."
  },
  {
    question: "Will this make my clinic feel too 'robotic'?",
    answer: "Actually, it's the exact opposite. By letting the AI handle the repetitive phone calls ('How much is lip filler?'), your human front desk staff finally has the time to look up, smile, and provide a true VIP, concierge experience to the patients standing in your waiting room."
  },
  {
    question: "I'm not good with technology. Will this be overwhelming?",
    answer: "That is exactly why we are here. You are a medical professional, not an IT expert. Our 'Done-For-You' approach means we handle the setup, the writing, the coding, and the testing. Your only job is to treat the patients we send you."
  }
];

// "How it works" koraci (iz "How Can We Help You" sekcije starog sajta)
export const steps = [
  {
    title: "Attract the right clients",
    body: "Targeted campaigns bring in leads who are actively searching for medspa treatments. No wasted clicks, just qualified prospects.",
  },
  {
    title: "Convert leads instantly",
    body: "Our 24/7 AI agent responds to every inquiry within seconds and keeps following up until the appointment is on your calendar.",
  },
  {
    title: "Grow without the stress",
    body: "We manage the advertising, follow up and tracking, so you can focus on delivering great results while your calendar fills up.",
  },
];
