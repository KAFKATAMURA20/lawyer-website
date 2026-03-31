import type { Metadata } from "next";
import {
  Heart,
  FileText,
  Users,
  Wallet,
  Home,
  Layers,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { siteData } from "@/lib/siteData";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Matrimonial Law — Divorce, Custody & Family Disputes",
  description: `Matrimonial lawyer in Jammu handling divorce, child custody, maintenance, and family disputes. ${siteData.lawyerName} — empathetic, discreet legal guidance for your family matter.`,
};

const subAreas = [
  {
    icon: FileText,
    title: "Divorce",
    desc: "Whether you are considering a mutual consent divorce or contesting a divorce petition, get guidance through the legal requirements, documentation, and court process — including advice on grounds for divorce, the timeline, and what to expect at each stage.",
  },
  {
    icon: Users,
    title: "Child Custody & Visitation",
    desc: "Child custody disputes require sensitivity and a focus on the child's well-being. Representation for clients seeking custody, visitation rights, or modifications to existing custody arrangements — always with the child's best interest as the guiding principle.",
  },
  {
    icon: Wallet,
    title: "Maintenance & Alimony",
    desc: "Whether you are seeking maintenance or responding to a maintenance claim, get advice on the factors courts consider, the types of maintenance available (interim maintenance, permanent alimony), and how to present your case effectively.",
  },
  {
    icon: Home,
    title: "Restitution of Conjugal Rights",
    desc: "If your spouse has left the matrimonial home without reasonable cause, you may have legal recourse through a petition for restitution of conjugal rights. Get advice on whether this remedy is appropriate for your situation.",
  },
];

const steps = [
  {
    title: "Confidential Consultation",
    description:
      "You share your situation in a private, judgment-free setting. Your legal options are explained — whether that means negotiation, mediation, or court proceedings.",
  },
  {
    title: "Understanding Your Rights",
    description:
      "Before any action is taken, you will fully understand your rights regarding custody, maintenance, property, and any other relevant issues. Informed clients make better decisions.",
  },
  {
    title: "Strategy & Documentation",
    description:
      "The necessary petitions, applications, and supporting documents are prepared. The strategy is tailored to your specific situation — there is no one-size-fits-all approach to family disputes.",
  },
  {
    title: "Court Representation",
    description:
      "Personal appearance for all hearings, arguments, and mediation sessions. Matrimonial courts often require multiple hearings, and you will be prepared for each one.",
  },
  {
    title: "Resolution & Next Steps",
    description:
      "Whether through a mediated settlement, mutual consent, or a contested judgment, the focus is on a resolution that protects your interests and, where children are involved, their well-being. Follow-up advice covers enforcement of orders or modification of arrangements.",
  },
];

const faqs = [
  {
    question: "How long does a divorce take in Jammu?",
    answer:
      "A mutual consent divorce typically takes 6 to 18 months, including the mandatory cooling-off period set by the court. A contested divorce can take longer depending on the issues involved and the court's schedule. You will receive a realistic estimate based on your situation.",
  },
  {
    question: "How is child custody decided?",
    answer:
      "Courts prioritize the best interest of the child. Factors considered include the child's age, emotional and physical needs, the parent's ability to provide care, the child's preference (if old enough), and the stability of each parent's living situation.",
  },
  {
    question: "Am I entitled to maintenance?",
    answer:
      "Maintenance depends on several factors, including your income, your spouse's income, your standard of living during the marriage, and the needs of any children. Your situation will be assessed and you will receive advice on what you may be entitled to claim — or how to respond if a claim has been made against you.",
  },
  {
    question: "Can we settle without going to court?",
    answer:
      "Yes. Many matrimonial matters can be resolved through negotiation or mediation, which is often faster, less expensive, and less adversarial. Amicable resolution options are always explored when both parties are willing. However, if a fair settlement is not possible, court representation ensures your rights are fully protected.",
  },
  {
    question: "Will my case be kept confidential?",
    answer:
      "Yes. Family court proceedings in India are generally conducted in camera (privately), and all client matters are treated with strict confidentiality. Your privacy is respected throughout the process.",
  },
];

export default function MatrimonialLawPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-navy/[0.03] to-cream">
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
          <Heart size={48} className="mx-auto text-gold mb-4" />
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Matrimonial &amp; Family Law Representation in Jammu
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-6">
            Divorce. Child custody. Maintenance. Family disputes. Handled with
            discretion, care, and experienced legal guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteData.phoneLink}
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href={siteData.whatsappLink}
              className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white hover:bg-whatsapp-dark transition-colors"
            >
              WhatsApp
            </a>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-navy px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
          <p className="text-xs text-muted mt-3">Consultation from ₹2,000 &middot; Confidential</p>
        </div>
      </section>

      {/* ===== COMMON PROBLEMS ===== */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[720px] px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
            Family Matters Are Personal &mdash; and Legally Complex
          </h2>
          <p className="text-charcoal leading-relaxed mb-6">
            Matrimonial and family disputes are among the most emotionally
            challenging legal matters anyone can face. Clients often feel:
          </p>
          <ul className="space-y-3 text-charcoal">
            {[
              ["Emotionally drained", "I do not know if I can handle this process."],
              ["Worried about the children", "What will happen to my children? Will I lose custody?"],
              ["Confused about their rights", "Am I entitled to maintenance? What are my options?"],
              ["Uncertain about the process", "How does divorce work? How long will it take?"],
              ["Concerned about privacy", "I do not want the whole world to know about my personal life."],
              ["Anxious about finances", "How will I support myself after separation?"],
            ].map(([bold, rest]) => (
              <li key={bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
                <span>
                  <strong className="text-navy">{bold}</strong> &mdash; &ldquo;{rest}&rdquo;
                </span>
              </li>
            ))}
          </ul>
          <p className="text-charcoal leading-relaxed mt-6">
            These feelings are entirely normal. Matrimonial cases require a
            lawyer who understands both the legal process and the human side of
            what you are going through.
          </p>
        </div>
      </section>

      {/* ===== MID-CONTENT CTA ===== */}
      <CTASection
        variant="light"
        heading="Need Guidance on a Family Matter?"
        body="Sensitive issues deserve careful, experienced advice. Reach out confidentially."
      />

      {/* ===== SUB-AREAS ===== */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-10 text-center">
            Matrimonial Matters {siteData.lawyerName} Handles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {subAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-xl bg-white border border-border p-6"
              >
                <area.icon size={28} className="text-gold mb-3" />
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-charcoal leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-white border border-border p-6">
            <Layers size={28} className="text-gold mb-3" />
            <h3 className="text-lg font-semibold text-navy mb-2">
              Related Family Disputes
            </h3>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-charcoal">
              {[
                "Domestic violence protection orders",
                "Dowry-related matters",
                "Guardianship petitions",
                "Annulment of marriage",
                "Inheritance and succession disputes",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <ProcessSteps
        heading="What to Expect in a Matrimonial Matter"
        steps={steps}
      />

      {/* ===== FAQ ===== */}
      <FAQAccordion
        heading="Matrimonial Law — Common Questions"
        items={faqs}
      />

      {/* ===== CTA ===== */}
      <CTASection
        heading="Going Through a Family Dispute?"
        body="You do not have to navigate this alone. Empathetic, experienced guidance through divorce, custody, maintenance, and all family law matters."
      />
    </>
  );
}
