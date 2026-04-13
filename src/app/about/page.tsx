import type { Metadata } from "next";
import Image from "next/image";
import { FileCheck, MessageSquare, RefreshCw } from "lucide-react";
import { siteData } from "@/lib/siteData";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteData.lawyerFullName}, an independent advocate in Jammu with ${siteData.yearsOfPractice} years of experience in civil, criminal, and matrimonial law.`,
};

export default function AboutPage() {
  return (
    <>
      {/* ===== PRINCIPALS ===== */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-navy/[0.03] to-cream">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-2 text-center">
            {siteData.firmName}
          </h1>
          <p className="text-center text-muted mb-10">
            {siteData.tagline} &mdash; Jammu, Jammu &amp; Kashmir
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* B S Manhas — Founder */}
            <div className="rounded-xl bg-white border border-border p-6">
              <div className="w-24 h-28 rounded-xl overflow-hidden mx-auto mb-4">
                <Image
                  src="/images/bs-manhas.png"
                  alt={siteData.founderName}
                  width={331}
                  height={505}
                  quality={95}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h2 className="font-heading text-xl font-bold text-navy text-center mb-1">
                {siteData.founderName}
              </h2>
              <p className="text-gold font-medium text-center text-sm mb-4">
                Founder &middot; {siteData.founderYearsOfPractice} years of practice
              </p>
              <dl className="grid grid-cols-1 gap-y-2 text-sm">
                <div>
                  <dt className="font-medium text-muted">Role</dt>
                  <dd className="text-charcoal">Founding Partner &amp; Advocate</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted">Courts</dt>
                  <dd className="text-charcoal">{siteData.courts.join(", ")}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted">Languages</dt>
                  <dd className="text-charcoal">{siteData.languages.join(", ")}</dd>
                </div>
              </dl>
            </div>

            {/* Amarvir Singh Manhas — Lead Advocate */}
            <div className="rounded-xl bg-white border border-border p-6">
              <div className="w-24 h-28 rounded-xl overflow-hidden mx-auto mb-4">
                <Image
                  src="/images/amar-manhas.png"
                  alt={siteData.lawyerFullName}
                  width={768}
                  height={1024}
                  quality={95}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h2 className="font-heading text-xl font-bold text-navy text-center mb-1">
                {siteData.lawyerFullName}
              </h2>
              <p className="text-gold font-medium text-center text-sm mb-4">
                Lead Advocate &middot; Practicing since 2008 ({siteData.yearsOfPractice} years)
              </p>
              <dl className="grid grid-cols-1 gap-y-2 text-sm">
                <div>
                  <dt className="font-medium text-muted">Bar Enrollment</dt>
                  <dd className="text-charcoal">{siteData.barEnrollment}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted">Education</dt>
                  <dd className="text-charcoal">{siteData.education}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted">Courts</dt>
                  <dd className="text-charcoal">{siteData.courts.join(", ")}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted">Languages</dt>
                  <dd className="text-charcoal">{siteData.languages.join(", ")}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROFESSIONAL PROFILE ===== */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[720px] px-4 md:px-8 text-charcoal leading-relaxed space-y-5">
          <p>
            <strong className="text-navy">{siteData.firmName}</strong> is a
            Jammu-based law practice founded by{" "}
            <strong>{siteData.founderName}</strong>, who brings{" "}
            {siteData.founderYearsOfPractice} years of experience in the courts
            of Jammu &amp; Kashmir. The firm is now led by{" "}
            <strong>{siteData.lawyerFullName}</strong>, practicing since 2008,
            with {siteData.yearsOfPractice} years of experience across civil,
            criminal, and matrimonial law.
          </p>
          <p>
            Together, the firm has represented individuals, families, and small
            businesses in matters ranging from property disputes and criminal
            defense to divorce and child custody.{" "}
            {siteData.lawyerFullName} is enrolled with the{" "}
            {siteData.barEnrollment} and regularly appears before the High Court
            of Jammu &amp; Kashmir and Ladakh, the District Court Jammu, and
            other relevant courts and forums.
          </p>
          <div className="mt-8 rounded-xl overflow-hidden">
            <Image
              src="/images/office-library.jpg"
              alt="Legal records and case files library at the office"
              width={1280}
              height={576}
              quality={95}
              className="w-full h-auto object-cover"
            />
            <p className="text-xs text-muted mt-2 text-center">Our office library — case records and legal references</p>
          </div>
        </div>
      </section>

      {/* ===== APPROACH ===== */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6 text-center">
            How We Work
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

      {/* ===== OUR TEAM ===== */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-3 text-center">
            Our Team
          </h2>
          <p className="text-center text-muted mb-10 max-w-xl mx-auto">
            Our associates bring dedicated experience across civil, criminal, and matrimonial matters.
          </p>

          <div className="mb-8 flex justify-center">
            <div className="rounded-xl overflow-hidden max-w-2xl w-full">
              <Image
                src="/images/team-photo.png"
                alt="The legal team at our Jammu office"
                width={716}
                height={540}
                quality={100}
                unoptimized
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Chander Dev Singh", since: "2017", years: 9, role: "Senior Associate" },
              { name: "Pooja Pandit", since: "2018", years: 8, role: "Associate" },
              { name: "Sudesh", since: "2019", years: 7, role: "Associate" },
              { name: "Deepak Kumar", since: "2022", years: 4, role: "Associate" },
              { name: "Aman", since: "2022", years: 4, role: "Associate" },
              { name: "Shubham", since: "2023", years: 3, role: "Associate" },
              { name: "Akshay Kumar", since: null, years: null, role: "Junior Associate" },
            ].map((member) => (
              <div
                key={member.name}
                className="rounded-xl bg-white border border-border p-4 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-navy font-semibold text-lg">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-navy text-sm mb-1">
                  {member.name}
                </h3>
                <p className="text-xs text-muted">
                  {member.since
                    ? `Licensed since ${member.since} \u00B7 ${member.years} yrs`
                    : "Associate"}
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
