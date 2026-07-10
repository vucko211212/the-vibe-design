import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false },
};

// Tekst preuzet sa starog sajta (sajt/tekstovi.md). Email adresa je na starom
// sajtu maskirana, pa se do potvrde od klijenta upucuje na telefon.
export default function PrivacyPage() {
  return (
    <article className="container-site max-w-3xl py-24">
      <h1 className="type-h2">Privacy Policy</h1>
      <p className="mt-4 text-sm text-plum-soft">
        Effective Date: 05/05/2024 | Last Updated: 08/21/2025
      </p>

      <div className="prose-tvd mt-10 flex flex-col gap-6 text-plum-soft">
        <h2 className="type-h3 text-plum">1. Introduction</h2>
        <p>
          Welcome to The Vibe Design. Your privacy is important to us, and we
          are committed to protecting the personal information you share with
          us. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website and use our
          services.
        </p>

        <h2 className="type-h3 text-plum">2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-6">
          <li>
            Personal Information: Name, email address, phone number, business
            details, and any information provided when contacting us or
            filling out forms.
          </li>
          <li>
            Payment Information: If you make a purchase, we may collect
            billing and payment details. Transactions are processed securely
            by third-party payment processors.
          </li>
          <li>
            Technical Data: IP address, browser type, operating system, and
            website usage statistics through cookies and tracking
            technologies.
          </li>
          <li>
            Marketing &amp; Communications Data: Preferences for receiving
            marketing materials, feedback, and survey responses.
          </li>
        </ul>

        <h2 className="type-h3 text-plum">3. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul className="list-disc pl-6">
          <li>Provide, operate, and improve our services.</li>
          <li>Process transactions and manage customer relationships.</li>
          <li>Respond to inquiries and customer support requests.</li>
          <li>Send marketing and promotional materials (with consent).</li>
          <li>
            Analyze website traffic and user interactions to enhance user
            experience.
          </li>
          <li>Comply with legal obligations and enforce our terms of service.</li>
        </ul>

        <h2 className="type-h3 text-plum">4. SMS Messaging &amp; Consent</h2>
        <p>
          By providing your phone number, you consent to receive SMS messages
          from The Vibe Design. These messages may include booking
          confirmations, appointment reminders, service updates, and
          promotional offers. Message frequency may vary. Message and data
          rates may apply depending on your carrier. You can opt out of SMS
          communications at any time by replying STOP. For assistance, reply
          HELP or contact us by phone at 617-505-8409. We will never sell,
          share, or rent your phone number to third parties for marketing
          purposes.
        </p>

        <h2 className="type-h3 text-plum">5. How We Share Your Information</h2>
        <p>
          We do not sell or rent your personal information. However, we may
          share it with:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Service Providers: Third-party vendors assisting in business
            operations (e.g., payment processors, hosting providers, and
            marketing tools).
          </li>
          <li>
            Legal Compliance: If required by law, such as in response to a
            court order or government request.
          </li>
          <li>
            Business Transfers: In the event of a merger, sale, or business
            restructuring.
          </li>
        </ul>

        <h2 className="type-h3 text-plum">6. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your data from
          unauthorized access, alteration, or disclosure. However, no method
          of transmission over the internet is 100% secure.
        </p>

        <h2 className="type-h3 text-plum">7. Your Rights &amp; Choices</h2>
        <ul className="list-disc pl-6">
          <li>
            Opt-Out: You can unsubscribe from marketing emails or SMS messages
            at any time.
          </li>
          <li>
            Access &amp; Update: You may request to review, correct, or delete
            your personal information.
          </li>
          <li>
            Cookies &amp; Tracking: You can manage cookie preferences through
            your browser settings.
          </li>
        </ul>

        <h2 className="type-h3 text-plum">8. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites. We are not
          responsible for their privacy practices and encourage you to review
          their policies before providing any personal information.
        </p>

        <h2 className="type-h3 text-plum">9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The latest
          version will always be available on our website with the updated
          effective date.
        </p>

        <h2 className="type-h3 text-plum">10. Contact Us</h2>
        <p>
          The Vibe Design
          <br />
          Address: 4030 Watercove Dr. Riverview, FL 33578
          <br />
          Phone: 617-505-8409
        </p>
      </div>
    </article>
  );
}
