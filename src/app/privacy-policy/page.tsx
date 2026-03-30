import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for the website of ${siteData.firmName}, Advocate, Jammu.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-12 md:py-20">
      <article className="mx-auto max-w-[720px] px-4 md:px-8 prose-custom">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted mb-8">Last updated: [Date]</p>

        <div className="space-y-6 text-charcoal leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Introduction
            </h2>
            <p>
              {siteData.firmName} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;) respects the privacy of every visitor to this
              website. This Privacy Policy explains how we collect, use, and
              protect your personal information when you visit our website or
              contact us through it.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Information We Collect
            </h2>
            <p className="mb-3">
              <strong>Information you provide directly:</strong> When you use our
              contact form, call, email, or message us via WhatsApp, you may
              provide us with your name, phone number, email address, and a
              brief description of your legal matter.
            </p>
            <p>
              <strong>Information collected automatically:</strong> When you
              visit our website, we may automatically collect your IP address,
              browser type and version, pages you visit and time spent on each
              page, referring website address, and device type. This information
              is collected through cookies and standard web analytics tools for
              the purpose of improving our website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              How We Use Your Information
            </h2>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Respond to your inquiries and contact form submissions</li>
              <li>Communicate with you about your legal matter</li>
              <li>
                Improve our website&rsquo;s content, performance, and user
                experience
              </li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We do <strong>not</strong> send unsolicited marketing
              communications, share your data with third parties for advertising
              purposes, or sell your personal information to anyone.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Data Protection
            </h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, disclosure, alteration, or destruction.
              Contact form submissions are handled securely and reviewed only by{" "}
              {siteData.firmName}.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Confidentiality of Legal Matters
            </h2>
            <p>
              Any information you share about your legal matter &mdash; whether
              through the contact form, email, phone, or WhatsApp &mdash; is
              treated as confidential. However, please note that submitting
              information through this website does not create a lawyer-client
              relationship (see our{" "}
              <a href="/disclaimer" className="text-navy underline">
                Disclaimer
              </a>
              ), and privileged communications are established only after a
              formal engagement.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Cookies
            </h2>
            <p>
              Our website may use cookies &mdash; small text files stored on
              your device &mdash; to improve your experience. You can control
              cookie settings through your browser. Disabling cookies may affect
              some features of the website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Your Rights
            </h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Request access to the personal information we hold about you
              </li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, please contact us at{" "}
              <a href={siteData.emailLink} className="text-navy underline">
                {siteData.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact:
              <br />
              {siteData.firmName}
              <br />
              {siteData.address.line1}, {siteData.address.city},{" "}
              {siteData.address.state}
              <br />
              Email:{" "}
              <a href={siteData.emailLink} className="text-navy underline">
                {siteData.email}
              </a>
              <br />
              Phone:{" "}
              <a href={siteData.phoneLink} className="text-navy underline">
                {siteData.phone}
              </a>
            </p>
          </section>
        </div>
      </article>
    </section>
  );
}
