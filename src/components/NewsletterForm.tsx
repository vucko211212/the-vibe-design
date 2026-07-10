"use client";

import { useState } from "react";

// Newsletter forma sa starog sajta (polja i poruka identicni).
// TODO backend: n8n webhook kad se dogovori (za sada samo lokalno stanje).
export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return <p className="type-lead text-violet">Thanks for submitting!</p>;
  }

  return (
    <form
      className="flex flex-col gap-4 sm:flex-row sm:items-end"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        
        try {
          await fetch("YOUR_N8N_WEBHOOK_URL_HERE", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              type: "lead_magnet",
              ...data
            }),
          });
        } catch (err) {
          console.error("Webhook failed", err);
        }
        
        setDone(true);
      }}
    >
      <label className="flex flex-1 flex-col gap-2 text-left">
        <span className="type-label text-plum-soft">Email</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className="rounded-full border border-line bg-paper px-5 py-3 outline-none transition-colors focus:border-violet"
        />
      </label>
      <label className="flex flex-1 flex-col gap-2 text-left">
        <span className="type-label text-plum-soft">First name</span>
        <input
          type="text"
          name="firstName"
          required
          autoComplete="given-name"
          className="rounded-full border border-line bg-paper px-5 py-3 outline-none transition-colors focus:border-violet"
        />
      </label>
      <label className="flex flex-1 flex-col gap-2 text-left">
        <span className="type-label text-plum-soft">Last name</span>
        <input
          type="text"
          name="lastName"
          autoComplete="family-name"
          className="rounded-full border border-line bg-paper px-5 py-3 outline-none transition-colors focus:border-violet"
        />
      </label>
      <button type="submit" className="btn btn-primary shrink-0">
        Get the Blueprint
      </button>
    </form>
  );
}
