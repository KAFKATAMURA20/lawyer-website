import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  User,
  MessageCircle,
  Clock,
  Landmark,
  Scale,
  Shield,
  Heart,
  ArrowRight,
} from "lucide-react";
import { siteData, googleReviews, consultationTypes } from "@/lib/siteData";
import CTASection from "@/components/CTASection";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";

export const metadata: Metadata = {
  title: `${siteData.firmName} — Civil, Criminal & Matrimonial Lawyer in Jammu`,
};

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-to-br from-navy/[0.03] to-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-medium text-gold uppercase tracking-wider mb-3">
                Advocate &mdash; Jammu, Jammu &amp; Kashmir
              </p>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-navy leading-tight mb-5">
                Dedicated Legal Representation in Jammu
              </h1>
              <p className="text-lg text-muted mb-3">
                Civil, Criminal &amp; Matrimonial Lawyer &mdash; Practicing in
                the High Court of Jammu &amp; Kashmir and Ladakh and District
                Courts
              </p>
              <p className="text-charcoal leading-relaxed mb-8 max-w-xl">
                When you face a legal challenge, you deserve a lawyer who
                listens, explains clearly, and handles your case personally.{" "}
                {siteData.firmName} provides focused, one-on-one legal
                representation in civil disputes, criminal matters, and
                matrimonial cases across Jammu and Jammu &amp; Kashmir.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={siteData.phoneLink}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 text-base font-semibold text-white hover:bg-navy-light transition-colors"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <a
                  href={siteData.whatsappLink}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-base font-semibold text-white hover:bg-whatsapp-dark transition-colors"
                >
                  WhatsApp
                </a>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy px-6 py-3 text-base font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
                >
                  Book a Consultation
                </Link>
              </div>

              {/* Trust signals + availability near CTAs */}
              <div className="mt-5 flex flex-col gap-3">
                <GoogleRatingBadge compact />
                <p className="text-xs text-muted">
                  Evening consultations Mon&ndash;Sat &middot; Responds within 24
                  hours
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-charcoal">
                  {consultationTypes.map((ct) => (
                    <span key={ct.id}>
                      {ct.title.replace(" Consultation", "")}: <strong className="text-navy">{ct.fee}</strong>{" "}
                      <span className="text-muted">({ct.duration})</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Law library image */}
            <div className="hidden lg:flex justify-center">
              <div className="w-80 h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/office-library-wide.png"
                  alt="Office library at B S Manhas & Associates"
                  width={1280}
                  height={576}
                  quality={95}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUE PROPS ===== */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy text-center mb-10">
            Why Clients Choose {siteData.lawyerName}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: User,
                title: "Direct Lawyer Access",
                desc: "Your case is handled directly — not passed to a junior associate or a team you have never met. You speak with your lawyer, not a receptionist.",
              },
              {
                icon: MessageCircle,
                title: "Clear Guidance at Every Step",
                desc: "The legal process can be confusing. Each step is explained in plain language so you always understand where your case stands and what comes next.",
              },
              {
                icon: Clock,
                title: "Responsive & Available",
                desc: "Legal matters do not wait for business hours. Reach out by phone, WhatsApp, or in person when you need advice or an update on your case.",
              },
              {
                icon: Landmark,
                title: "Local Expertise",
                desc: `With ${siteData.yearsOfPractice} years of practice in the courts of Jammu and Jammu & Kashmir, bringing thorough understanding of local legal procedures and court systems.`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <item.icon size={32} className="text-gold mb-4" />
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRACTICE AREAS ===== */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy text-center mb-10">
            Areas of Practice
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Scale,
                title: "Civil Law",
                href: "/civil-law",
                desc: "Property disputes, contract enforcement, injunctions, and consumer matters. Methodical representation through every stage of the civil process.",
              },
              {
                icon: Shield,
                title: "Criminal Law",
                href: "/criminal-law",
                desc: "Bail applications, trial defense, FIR consultation, and guidance through police procedures. Immediate, confidential support when you need it most.",
              },
              {
                icon: Heart,
                title: "Matrimonial Law",
                href: "/matrimonial-law",
                desc: "Divorce, child custody, maintenance, and family disputes. Sensitive family matters handled with discretion, care, and a focus on protecting your interests.",
              },
            ].map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group rounded-xl border border-border bg-white p-8 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <area.icon size={40} className="text-gold mb-4" />
                <h3 className="text-xl font-heading font-bold text-navy mb-3">
                  {area.title}
                </h3>
                <p className="text-charcoal leading-relaxed mb-4 text-sm">
                  {area.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-navy group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST SIGNALS ===== */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy text-center mb-10">
            Your Case in Experienced Hands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {[
              { value: `${siteData.founderYearsOfPractice}`, label: "Years of Practice" },
              { value: "Bar Council", label: "Enrolled Member" },
              { value: "High Court", label: "of J&K and Ladakh" },
              { value: "District Court", label: "Jammu" },
              {
                value: siteData.languages.length.toString(),
                label: `Languages: ${siteData.languages.join(", ")}`,
              },
            ].map((stat) => (
              <div key={stat.label} className="p-4">
                <p className="text-2xl md:text-3xl font-heading font-bold text-navy mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL PREVIEW ===== */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy text-center mb-4">
            What Clients Say
          </h2>
          <div className="flex justify-center mb-10">
            <GoogleRatingBadge />
          </div>

          {/* Top Google review */}
          <div className="max-w-2xl mx-auto rounded-xl border border-border bg-white p-6 md:p-8 mb-6">
            <blockquote className="text-charcoal leading-relaxed text-center text-lg">
              &ldquo;{googleReviews.reviews[0].text}&rdquo;
            </blockquote>
            <p className="text-center mt-4 text-sm text-muted">
              <span className="font-medium text-navy">{googleReviews.reviews[0].name}</span>{" "}
              &mdash; Google Review
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-1 text-base font-medium text-navy hover:gap-2 transition-all"
            >
              Read All Reviews <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <CTASection
        heading="Facing a Legal Matter? Let Us Talk."
        body="Whether it is a property dispute, a criminal matter, or a family issue — the first step is a conversation. Reach out to discuss your situation confidentially."
      />
    </>
  );
}
