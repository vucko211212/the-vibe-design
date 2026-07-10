"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Honeypot: pravi korisnik ne vidi ovo polje, bot ga popuni.
    // Ako je popunjeno, tiho "uspemo" bez slanja webhook-u.
    if (data.company_website) {
      setStatus("success");
      return;
    }

    // Webhook URL (iz .env fajla, ili placeholder dok klijent ne postavi n8n)
    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL || "YOUR_N8N_WEBHOOK_URL_HERE";

    try {
      if (webhookUrl !== "YOUR_N8N_WEBHOOK_URL_HERE") {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error("Webhook failed");
      } else {
        // Simulacija za lokalni development ako nema webhook-a
        await new Promise((r) => setTimeout(r, 1000));
      }

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-lavender p-10 text-center">
        <p className="type-h3 text-violet">Request Received.</p>
        <p className="type-body mt-4 text-plum-soft">
          Thank you for reaching out. Maya will review your details and contact you shortly to schedule your free call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 min-w-0">
      {/* Honeypot: skriveno od korisnika, mamac za botove. Ne uklanjati. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden" style={{ position: "absolute" }}>
        <label>
          Company Website
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 min-w-0">
          <span className="type-label text-plum-soft">Full Name</span>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-xl border border-line bg-paper px-5 py-3 outline-none transition-colors focus:border-violet"
          />
        </label>
        <label className="flex flex-col gap-2 min-w-0">
          <span className="type-label text-plum-soft">Email</span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-line bg-paper px-5 py-3 outline-none transition-colors focus:border-violet"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 min-w-0">
        <span className="type-label text-plum-soft">MedSpa / Clinic Name</span>
        <input
          type="text"
          name="clinic"
          required
          className="w-full rounded-xl border border-line bg-paper px-5 py-3 outline-none transition-colors focus:border-violet"
        />
      </label>

      <label className="flex flex-col gap-2 min-w-0">
        <span className="type-label text-plum-soft">Website or Instagram URL</span>
        <input
          type="url"
          name="url"
          className="w-full rounded-xl border border-line bg-paper px-5 py-3 outline-none transition-colors focus:border-violet"
        />
      </label>

      <label className="flex flex-col gap-2 min-w-0">
        <span className="type-label text-plum-soft">Biggest Current Challenge</span>
        <select
          name="challenge"
          className="w-full rounded-xl border border-line bg-paper px-5 py-3 outline-none transition-colors focus:border-violet truncate"
          required
        >
          <option value="">Select an option...</option>
          <option value="leads">We get leads, but they are low quality (tire-kickers)</option>
          <option value="noshows">Too many no-shows or cancellations</option>
          <option value="retention">Patients come once and never return</option>
          <option value="tech">Overwhelmed by marketing tech and tools</option>
          <option value="other">Other</option>
        </select>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary mt-4 w-full sm:w-auto sm:self-start justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Request Free Call"}
      </button>
    </form>
  );
}
