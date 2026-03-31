import type { Metadata } from "next";
import { User, FileCheck, MessageSquare, RefreshCw } from "lucide-react";
import { siteData } from "@/lib/siteData";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteData.lawyerFullName}, an independent advocate in Jammu with ${siteData.yearsOfPractice} years of experience in civil, criminal, and matrimonial law.`,
};

export default function AboutPage() {
  return (
    <>
      {/* ===== PROFILE HERO ===== */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-navy/[0.03] to-cream">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Photo placeholder */}
            <div className="w-48 h-56 md:w-56 md:h-64 rounded-xl bg-gradient-to-br from-navy/10 to-gold/10 border border-border flex items-center justify-center shrink-0">
              <div className="text-center text-muted">
                <User size={48} className="mx-auto mb-2 text-navy/30" />
                <p className="text-xs">[Photo]</p>
              </div>
            </div>

            {/* Details */}
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-1">
                {siteData.lawyerFullName}
              </h1>
              <p className="text-lg text-gold font-medium mb-6">
                {siteData.designation}
              </p>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                {[
                  { label: "Bar Enrollment", value: siteData.barEnrollment },
                  { label: "Education", value: siteData.education },
                  {
                    label: "Experience",
                    value: `${siteData.yearsOfPractice} years`,
                  },
                  { label: "Courts", value: siteData.courts.join(", ") },
                  {
                    label: "Languages",
                    value: siteData.languages.join(", "),
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="font-medium text-muted">{item.label}</dt>
                    <dd className="text-charcoal">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROFESSIONAL PROFILE ===== */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[720px] px-4 md:px-8 text-charcoal leading-relaxed space-y-5">
          <p>
            {siteData.lawyerFullName} is an independent advocate based in Jammu,
            practicing in civil, criminal, and matrimonial law. With{" "}
            {siteData.yearsOfPractice} years of experience in the courts of
            Jammu &amp; Kashmir, {siteData.lawyerFullName} has represented
            individuals, families, and small businesses in matters ranging from
            property disputes and criminal defense to divorce and child custody.
          </p>
          <p>
            {siteData.lawyerFullName} is enrolled with the {siteData.barEnrollment}{" "}
            and regularly appears before the High Court of Jammu &amp; Kashmir
            and Ladakh, the District Court Jammu, and other relevant courts
            and forums.
          </p>
        </div>
      </section>

      {/* ===== APPROACH ===== */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6 text-center">
            How {siteData.lawyerFullName} Works
          </h2>
          <div className="max-w-[720px] mx-auto text-charcoal leading-relaxed mb-10">
            <p>
              Every client who walks through my door is dealing with something
              that matters deeply to them &mdash; their property, their freedom,
              their family. I believe that good legal representation starts with
              listening carefully, understanding the full picture, and then
              explaining the options in plain language.
            </p>
            <p className="mt-4">
              I handle every case personally. When you call, you speak with me.
              When you come to court, I am the one representing you. I do not
              believe in passing matters to juniors or keeping clients in the
              dark about what is happening with their case.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FileCheck,
                title: "Honest Advice",
                desc: "I will tell you what I genuinely think about your case, including the risks and challenges, not just what you want to hear.",
              },
              {
                icon: MessageSquare,
                title: "Clear Communication",
                desc: "You will understand each step of the process, every document that is filed, and every decision that needs to be made.",
              },
              {
                icon: RefreshCw,
                title: "Consistent Effort",
                desc: "I prepare thoroughly, follow up diligently, and make sure nothing falls through the cracks.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white border border-border p-6 text-center"
              >
                <item.icon size={32} className="mx-auto text-gold mb-3" />
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MID-CONTENT CTA ===== */}
      <CTASection
        variant="light"
        heading="Want to Discuss Your Case?"
        body="Schedule a consultation to get direct, honest advice on your legal matter."
      />

      {/* ===== WHY THESE PRACTICE AREAS ===== */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[720px] px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6 text-center">
            Why I Chose These Practice Areas
          </h2>
          <div className="text-charcoal leading-relaxed space-y-5">
            <p>
              I chose to focus on civil, criminal, and matrimonial law because
              these are the areas where individuals and families need legal
              support the most &mdash; and where having a dedicated, personally
              involved lawyer makes the greatest difference.
            </p>
            <p>
              A property dispute can affect generations. A criminal charge can
              change the course of a life. A family dispute can reshape your
              future and your children&rsquo;s future. In each of these areas, I
              have seen how much it matters to have a lawyer who is present,
              prepared, and genuinely invested in the outcome.
            </p>
            <p>These are not cases I delegate. These are the cases I care about.</p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTASection
        heading="Have a Legal Matter to Discuss?"
        body="Available for consultations in person, by phone, or via WhatsApp. If you are facing a legal challenge, the best next step is a conversation."
      />
    </>
  );
}
