import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for the website of ${siteData.firmName}, Advocate, Jammu.`,
};

export default function TermsOfUsePage() {
  return (
    <section className="py-12 md:py-20">
      <article className="mx-auto max-w-[720px] px-4 md:px-8 prose-custom">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-2">
          Terms of Use
        </h1>
        <p className="text-sm text-muted mb-8">Last updated: [Date]</p>

        <div className="space-y-6 text-charcoal leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you agree to be bound by
              these Terms of Use. If you do not agree with any part of these
              terms, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Purpose of This Website
            </h2>
            <p>
              This website is operated by {siteData.firmName},{" "}
              {siteData.designation}, for the purpose of providing general
              information about legal services offered. The website is designed
              in accordance with the rules of the Bar Council of India and is
              intended to be informational &mdash; not solicitation or
              advertisement.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              No Legal Advice
            </h2>
            <p>
              The content on this website, including text, articles, FAQs, and
              practice area descriptions, is for general informational purposes
              only. It does not constitute legal advice. You should not act or
              refrain from acting based on the information on this website
              without seeking professional legal advice tailored to your specific
              situation.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              No Lawyer-Client Relationship
            </h2>
            <p>
              Accessing this website, reading its content, or sending a message
              through the contact form, email, phone, or WhatsApp does not
              create a lawyer-client relationship between you and{" "}
              {siteData.firmName}. A lawyer-client relationship is created
              only after a formal engagement agreement following a consultation.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Intellectual Property
            </h2>
            <p>
              All content on this website &mdash; including text, design,
              layout, graphics, and code &mdash; is the property of{" "}
              {siteData.firmName} or used with permission. You may not
              reproduce, distribute, or use any content from this website
              without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Accuracy and Timeliness
            </h2>
            <p>
              While we strive to keep the information on this website current
              and accurate, we do not warrant or guarantee that all information
              is complete, accurate, or up to date. Laws and procedures change,
              and the content on this site may not reflect the very latest
              developments.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Limitation of Liability
            </h2>
            <p>
              {siteData.firmName} shall not be liable for any direct,
              indirect, incidental, or consequential damages arising from your
              use of this website or reliance on any information provided on it.
              This includes, without limitation, any errors or omissions in the
              content.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              External Links
            </h2>
            <p>
              This website may contain links to external websites.{" "}
              {siteData.firmName} is not responsible for the content,
              availability, or practices of any linked external sites.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Governing Law
            </h2>
            <p>
              These Terms of Use are governed by the laws of India. Any disputes
              arising from or related to the use of this website shall be
              subject to the exclusive jurisdiction of the courts in Jammu,
              Jammu &amp; Kashmir.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms of Use from time to time. Continued use
              of the website after changes are posted constitutes acceptance of
              the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Contact
            </h2>
            <p>
              If you have questions about these Terms of Use, please contact:
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
