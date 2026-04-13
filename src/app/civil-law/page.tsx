import type { Metadata } from "next";
import Image from "next/image";
import { Scale, Home, FileText, ShieldAlert, ShoppingCart, Layers, Phone } from "lucide-react";
import Link from "next/link";
import { siteData } from "@/lib/siteData";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Civil Law — Property Disputes, Contracts & Injunctions",
  description: `Civil lawyer in Jammu representing clients in property disputes, contract enforcement, injunctions, and consumer matters. ${siteData.lawyerName} — personal, experienced representation in the courts of Jammu & Kashmir.`,
};

const subAreas = [
  {
    icon: Home,
    title: "Property Disputes",
    desc: "Disputes over land ownership, boundaries, inheritance of property, partition of joint property, title disputes, and possession. These cases are common in Jammu & Kashmir and often involve complex documentation and revenue records.",
  },
  {
    icon: FileText,
    title: "Contract & Commercial Disputes",
    desc: "Breach of contract, recovery of dues, enforcement of agreements, and disputes between business parties. Whether you entered a verbal agreement or a written contract, you can get clear advice on your options.",
  },
  {
    icon: ShieldAlert,
    title: "Injunctions & Interim Relief",
    desc: "When urgent court intervention is needed — such as stopping illegal construction, preventing the sale of disputed property, or maintaining the status quo — injunction applications and interim relief can be filed on your behalf.",
  },
  {
    icon: ShoppingCart,
    title: "Consumer Disputes",
    desc: "If you have been sold a defective product, received substandard services, or been the victim of unfair trade practices, you may have a remedy under consumer protection law.",
  },
];

const steps = [
  {
    title: "Initial Consultation",
    description:
      "You share the details of your situation. Your documents are reviewed and you receive an honest assessment of your legal position — including the strengths, risks, and realistic expectations.",
  },
  {
    title: "Case Strategy",
    description:
      "A clear plan of action is prepared: what needs to be filed, in which court, and what the process will look like. You will understand the timeline and the key milestones.",
  },
  {
    title: "Filing & Court Representation",
    description:
      "All necessary pleadings, applications, and documents are drafted and filed. On hearing days, your lawyer personally appears in court to argue your case.",
  },
  {
    title: "Ongoing Communication",
    description:
      "After every hearing or development, you receive an update on what happened, what it means, and what comes next. You will never be left wondering about the status of your case.",
  },
  {
    title: "Resolution",
    description:
      "Whether through a court order, settlement, or negotiation, diligent effort is made toward the best possible resolution of your matter. If an appeal is needed, you are advised on the merits and process.",
  },
];

const faqs = [
  {
    question: "How long does a civil case take in Jammu?",
    answer:
      "Civil cases vary significantly in duration depending on the complexity, the court, and the number of hearings. Some matters can be resolved in months; others may take several years. You will receive a realistic timeline based on the specifics of your case during the initial consultation.",
  },
  {
    question: "What documents do I need for a property dispute consultation?",
    answer:
      "Bring any documents you have — sale deeds, revenue records, mutation orders, partition records, correspondence, and any previous court orders. Even if your documentation is incomplete, you can be advised on what is needed and how to obtain missing records.",
  },
  {
    question: "Can a civil dispute be settled without going to court?",
    answer:
      "Yes, many civil disputes can be resolved through negotiation or mediation. Fair settlement options are always explored before or during litigation. However, if the other side is not willing to negotiate reasonably, court representation ensures your rights are protected.",
  },
  {
    question: "What is an injunction and when do I need one?",
    answer:
      "An injunction is a court order that prevents someone from doing something — such as selling property, carrying out construction, or taking any action that would harm your interests while the case is pending. If your situation is urgent, an application for interim relief can be filed quickly.",
  },
  {
    question: "What are the costs involved in a civil case?",
    answer:
      "Costs depend on the nature of the case, the court fees, and the complexity of the matter. Fees are discussed transparently during the initial consultation so there are no surprises.",
  },
];

export default function CivilLawPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-navy/[0.03] to-cream">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/law-library.jpg"
            alt="Law library"
            fill
            quality={90}
            sizes="100vw"
            className="object-cover opacity-[0.07]"
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 md:px-8 text-center">
          <Scale size={48} className="mx-auto text-gold mb-4" />
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Civil Law Representation in Jammu
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-6">
            Property disputes. Contract enforcement. Injunctions. Consumer
            matters. Experienced representation through every stage of the civil
            process.
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
          <p className="text-xs text-muted mt-3">Consultation from ₹2,000</p>
        </div>
      </section>

      {/* ===== COMMON PROBLEMS ===== */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[720px] px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
            Civil Disputes Can Be Stressful and Confusing
          </h2>
          <p className="text-charcoal leading-relaxed mb-6">
            Civil cases often involve your property, your money, or your rights.
            They can be lengthy, procedurally complex, and emotionally draining.
            Many people facing civil disputes feel:
          </p>
          <ul className="space-y-3 text-charcoal">
            {[
              ["Uncertain about their rights", "Do I have a valid legal claim?"],
              ["Confused by the process", "What are the steps? How long will this take?"],
              ["Worried about the other side", "They have already filed a case. What do I do now?"],
              ["Frustrated by delays", "My last lawyer never updated me. I do not know where my case stands."],
              ["Concerned about costs", "Is this going to be worth pursuing?"],
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
            If any of this sounds familiar, you are not alone. Civil disputes
            are among the most common legal matters in Jammu, and navigating
            them effectively requires experienced, attentive legal guidance.
          </p>
        </div>
      </section>

      {/* ===== MID-CONTENT CTA ===== */}
      <CTASection
        variant="light"
        heading="Need Legal Advice on a Civil Matter?"
        body="Get clarity on your rights and options. Reach out for a confidential consultation."
      />

      {/* ===== SUB-AREAS ===== */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-10 text-center">
            Civil Matters {siteData.lawyerName} Handles
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
              Other Civil Matters
            </h3>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-charcoal">
              {[
                "Declaratory suits",
                "Specific performance of contracts",
                "Recovery suits",
                "Easement rights",
                "Rent disputes",
                "Succession and inheritance matters",
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
        heading={`What to Expect When You Work with ${siteData.lawyerName}`}
        steps={steps}
      />

      {/* ===== FAQ ===== */}
      <FAQAccordion heading="Civil Law — Common Questions" items={faqs} />

      {/* ===== CTA ===== */}
      <CTASection
        heading="Facing a Civil Dispute?"
        body="Property matters, contract issues, or any civil dispute — the first step is understanding where you stand legally. Reach out for a consultation."
      />
    </>
  );
}
