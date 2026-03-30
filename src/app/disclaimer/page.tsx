import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Legal disclaimer for the website of ${siteData.firmName}, Advocate, Jammu.`,
};

export default function DisclaimerPage() {
  return (
    <section className="py-12 md:py-20">
      <article className="mx-auto max-w-[720px] px-4 md:px-8 prose-custom">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-2">
          Disclaimer
        </h1>
        <p className="text-sm text-muted mb-8">Last updated: [Date]</p>

        <div className="space-y-6 text-charcoal leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              General Information
            </h2>
            <p>
              The information provided on this website is for general
              informational purposes only. Nothing on this website constitutes
              legal advice, and no lawyer-client relationship is created by
              accessing this site, reading its content, or contacting{" "}
              {siteData.firmName} through the contact form, phone, WhatsApp,
              or email.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              No Guarantee of Results
            </h2>
            <p>
              Every legal matter is unique and depends on its own facts and
              circumstances. {siteData.firmName} does not guarantee or predict
              any particular outcome for any case or legal matter. Past results
              do not guarantee future outcomes. Any descriptions of past cases or
              outcomes on this site are for illustrative purposes only and should
              not be interpreted as a guarantee of similar results.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Professional Engagement
            </h2>
            <p>
              A lawyer-client relationship with {siteData.firmName} is
              established only through a formal engagement agreement after a
              consultation. Simply contacting {siteData.firmName} through this
              website or by any other means does not create a lawyer-client
              relationship or an obligation to provide legal services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Accuracy of Information
            </h2>
            <p>
              While {siteData.firmName} makes reasonable efforts to keep the
              information on this website accurate and current, laws,
              regulations, and court procedures change frequently. The content on
              this site may not reflect the most recent legal developments. You
              should not rely on the information on this website as a substitute
              for professional legal advice tailored to your specific situation.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              External Links
            </h2>
            <p>
              This website may contain links to third-party websites or
              resources. {siteData.firmName} does not endorse and is not
              responsible for the content, accuracy, or availability of any
              external sites.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Jurisdiction
            </h2>
            <p>
              {siteData.firmName} is enrolled with the{" "}
              {siteData.barEnrollment} and practices in the courts of Jammu
              &amp; Kashmir, India. The information on this website is intended
              for individuals seeking legal services in this jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Bar Council Compliance
            </h2>
            <p>
              This website is designed in compliance with the rules and
              regulations of the Bar Council of India. The content is purely
              informational and is not intended as solicitation or advertisement
              in any manner prohibited by the Bar Council of India Rules.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              Contact
            </h2>
            <p>
              If you have questions about this disclaimer, please contact{" "}
              {siteData.firmName} at{" "}
              <a href={siteData.emailLink} className="text-navy underline">
                {siteData.email}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </section>
  );
}
