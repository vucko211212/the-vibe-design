import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false },
};

// Tekst preuzet sa starog sajta (sajt/tekstovi.md).
// NAPOMENA za klijenta: sekcija 12 i dalje sadrzi neispunjen placeholder
// "[Insert State]" iz originala; popunjava klijent (verovatno Florida).
export default function TermsPage() {
  return (
    <article className="container-site max-w-3xl py-24">
      <h1 className="type-h2">Terms of Service</h1>
      <p className="mt-4 text-sm text-plum-soft">Effective Date: 05-24-2024</p>

      <div className="mt-10 flex flex-col gap-6 text-plum-soft">
        {/* Sekcija 1 je prazna i u originalu, tekst dostavlja klijent */}
        <h2 className="type-h3 text-plum">1. Services Provided</h2>
        <p>[Section text to be provided.]</p>

        <h2 className="type-h3 text-plum">2. Eligibility</h2>
        <p>By using our Services, you represent that you:</p>
        <ul className="list-disc pl-6">
          <li>Are at least 18 years old,</li>
          <li>Have the legal capacity to enter into a binding agreement,</li>
          <li>
            Will use the Services in compliance with applicable laws and
            regulations.
          </li>
        </ul>

        <h2 className="type-h3 text-plum">3. Client Responsibilities</h2>
        <p>You agree to:</p>
        <ul className="list-disc pl-6">
          <li>
            Provide accurate information necessary for us to deliver Services.
          </li>
          <li>
            Supply timely approvals, feedback, and required assets (such as
            logos, images, or access to ad accounts).
          </li>
          <li>
            Maintain compliance with all relevant industry and advertising
            regulations, including those set forth by Meta, Google, and other
            third-party platforms.
          </li>
        </ul>
        <p>
          We are not responsible for delays or failures caused by your failure
          to provide required information or approvals.
        </p>

        <h2 className="type-h3 text-plum">4. Payments &amp; Billing</h2>
        <p>
          Payment terms will be specified in your proposal or invoice. Unless
          otherwise agreed, all payments are due in advance of Services. Late
          payments may result in suspension of Services until the account is
          brought current. All fees are non-refundable unless otherwise stated
          in writing.
        </p>

        <h2 className="type-h3 text-plum">5. Intellectual Property</h2>
        <ul className="list-disc pl-6">
          <li>
            Client Content: You retain ownership of all content, trademarks,
            and materials you provide to us.
          </li>
          <li>
            Company Work: Upon full payment, you will own the final
            deliverables (e.g., designs, branding assets) unless otherwise
            specified. We retain the right to display non-confidential work in
            our portfolio and marketing.
          </li>
          <li>
            Third-Party Rights: You are responsible for ensuring that any
            materials you provide do not infringe the intellectual property
            rights of third parties.
          </li>
        </ul>

        {/* Sekcija 6 je prazna i u originalu, tekst dostavlja klijent */}
        <h2 className="type-h3 text-plum">6. Third-Party Platforms</h2>
        <p>[Section text to be provided.]</p>

        <h2 className="type-h3 text-plum">7. AI Agent Services</h2>
        <p>If you subscribe to our AI call agent or automation services:</p>
        <ul className="list-disc pl-6">
          <li>
            You authorize us to use AI tools to interact with leads and
            customers on your behalf.
          </li>
          <li>
            You remain responsible for compliance with privacy, HIPAA (if
            applicable), and data protection laws.
          </li>
          <li>
            We make no guarantees regarding lead conversions or outcomes, as
            these depend on variables outside our control.
          </li>
        </ul>

        <h2 className="type-h3 text-plum">8. Confidentiality</h2>
        <p>
          Both parties agree to keep confidential any proprietary or sensitive
          information shared during the course of the Services, except where
          disclosure is required by law.
        </p>

        <h2 className="type-h3 text-plum">9. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law:</p>
        <ul className="list-disc pl-6">
          <li>
            We are not liable for indirect, incidental, special, or
            consequential damages.
          </li>
          <li>
            Our total liability under these Terms shall not exceed the amount
            you paid for Services in the three (3) months preceding the claim.
          </li>
        </ul>

        <h2 className="type-h3 text-plum">10. Disclaimer of Guarantees</h2>
        <p>
          We do not guarantee specific results such as revenue increases, lead
          conversions, or search engine rankings. Marketing outcomes vary
          based on numerous factors outside our control.
        </p>

        <h2 className="type-h3 text-plum">11. Termination</h2>
        <p>
          Either party may terminate Services with written notice according to
          the cancellation terms in your agreement. We may suspend or
          terminate Services immediately if you breach these Terms, fail to
          pay, or engage in unlawful activity.
        </p>

        <h2 className="type-h3 text-plum">12. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of [Insert State],
          without regard to its conflict of law provisions.
        </p>

        <h2 className="type-h3 text-plum">13. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. The most current
          version will always be posted on our website, with the &quot;Effective
          Date&quot; updated accordingly. Continued use of our Services after
          changes indicates your acceptance of the new Terms.
        </p>

        <h2 className="type-h3 text-plum">14. Contact Us</h2>
        <p>
          The Vibe Design
          <br />
          Phone: 617-505-8409
          <br />
          Website: www.thevibedesign.com
        </p>
      </div>
    </article>
  );
}
