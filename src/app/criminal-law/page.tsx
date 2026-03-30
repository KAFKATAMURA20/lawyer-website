import type { Metadata } from "next";
import {
  Shield,
  KeyRound,
  Gavel,
  FileWarning,
  AlertTriangle,
  Layers,
} from "lucide-react";
import { siteData } from "@/lib/siteData";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Criminal Law — Bail, Defense & FIR Guidance",
  description: `Criminal lawyer in Jammu providing bail applications, trial defense, FIR advice, and guidance through police procedures. ${siteData.lawyerName} — responsive, confidential criminal defense representation.`,
};

const subAreas = [
  {
    icon: KeyRound,
    title: "Bail Applications",
    desc: "When someone is arrested or anticipates arrest, securing bail is the immediate priority. Regular bail, anticipatory bail, and interim bail applications are filed in the appropriate court and argued promptly.",
  },
  {
    icon: Gavel,
    title: "Trial Defense & Court Representation",
    desc: "Comprehensive defense representation at trial: cross-examination of prosecution witnesses, presentation of defense evidence, legal arguments, and representation at every hearing.",
  },
  {
    icon: FileWarning,
    title: "FIR-Related Advice & Support",
    desc: "If an FIR has been filed against you, or if you need to file an FIR and are unsure how, get advice on your rights, the implications, and the best course of action. Early legal advice at the FIR stage can significantly impact the trajectory of a case.",
  },
  {
    icon: AlertTriangle,
    title: "Police Procedure Guidance",
    desc: "Rights during police questioning, arrest, and detention are governed by specific legal procedures. Get advice on when and how to cooperate, and when to exercise your right to remain silent.",
  },
];

const steps = [
  {
    title: "Immediate Response",
    description:
      "Criminal matters are time-sensitive. The priority is to understand the situation quickly — what has happened, what stage the matter is at, and what needs to be done immediately.",
  },
  {
    title: "Bail (If Applicable)",
    description:
      "If arrest has occurred or is anticipated, a bail application is prepared and filed as quickly as possible. The bail hearing is personally argued and you are kept informed at every stage.",
  },
  {
    title: "Understanding the Case",
    description:
      "The FIR, charges, and all available evidence are reviewed. You will receive a clear, honest assessment of the situation — the strengths of the defense, the risks, and the likely process ahead.",
  },
  {
    title: "Defense Strategy",
    description:
      "A defense strategy is developed based on the facts, the law, and the specific circumstances. This includes identifying weaknesses in the prosecution's case, gathering supporting evidence, and preparing for cross-examination.",
  },
  {
    title: "Court Representation",
    description:
      "Personal appearance for every hearing. Motions are argued, witnesses are cross-examined, and the defense is presented. You receive updates after every hearing.",
  },
  {
    title: "Resolution",
    description:
      "Whether through acquittal, discharge, compounding, or appeal, diligent effort is made toward the best possible outcome within the law.",
  },
];

const faqs = [
  {
    question:
      "Someone in my family has been arrested. What should I do first?",
    answer:
      "Contact a lawyer immediately. A bail application can be filed, and your family member's legal rights will be ensured. Do not delay — early legal intervention matters significantly in criminal cases.",
  },
  {
    question:
      "What is the difference between anticipatory bail and regular bail?",
    answer:
      "Anticipatory bail is sought before arrest — when a person apprehends that they may be arrested. Regular bail is sought after arrest has taken place. Both require a court application and hearing. Both types of bail applications are handled.",
  },
  {
    question: "Can an FIR be withdrawn or quashed?",
    answer:
      "In certain circumstances, an FIR can be quashed by the High Court if it is found to be frivolous, motivated, or if the parties have reached a settlement in compoundable offences. Whether quashing is a viable option depends on the specific facts of your case.",
  },
  {
    question: "What are my rights if the police call me for questioning?",
    answer:
      "You have the right to know why you are being questioned. You are not obligated to sign any document without understanding its contents. You have the right to have a lawyer present or to consult a lawyer before responding.",
  },
  {
    question: "How long does a criminal trial take?",
    answer:
      "The duration of a criminal trial depends on the charges, the number of witnesses, and the court's schedule. Some matters are resolved in months; others can take years. You will receive a realistic timeline and every effort is made to avoid unnecessary delays.",
  },
];

export default function CriminalLawPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-navy/[0.03] to-cream">
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
          <Shield size={48} className="mx-auto text-gold mb-4" />
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Criminal Law Representation in Jammu
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Bail applications. Trial defense. FIR guidance. Confidential,
            responsive legal support when it matters most.
          </p>
        </div>
      </section>

      {/* ===== COMMON PROBLEMS ===== */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[720px] px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
            A Criminal Case Can Turn Your Life Upside Down
          </h2>
          <p className="text-charcoal leading-relaxed mb-6">
            Being accused of a crime &mdash; or having a family member face
            criminal charges &mdash; is one of the most stressful experiences
            anyone can go through. Clients often feel:
          </p>
          <ul className="space-y-3 text-charcoal">
            {[
              ["Scared and overwhelmed", "I do not understand what is happening or what will happen to me."],
              ["Confused by police procedures", "The police have called me for questioning. What are my rights?"],
              ["Desperate for bail", "My family member has been arrested. How do I get them out?"],
              ["Unsure about the process", "What happens after an FIR is filed? What are the next steps?"],
              ["Worried about their reputation", "Will this follow me forever? How do I protect myself?"],
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
            Criminal matters require immediate, knowledgeable legal
            intervention. The earlier you involve a lawyer, the better your
            position is likely to be.
          </p>
        </div>
      </section>

      {/* ===== SUB-AREAS ===== */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-10 text-center">
            Criminal Matters {siteData.lawyerName} Handles
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
              Additional Criminal Defense Support
            </h3>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-charcoal">
              {[
                "Quashing of FIR applications (High Court)",
                "Revision petitions",
                "Appeals against conviction",
                "Compounding of offences",
                "Plea-related advice and representation",
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
        heading="What to Expect in a Criminal Matter"
        steps={steps}
      />

      {/* ===== FAQ ===== */}
      <FAQAccordion heading="Criminal Law — Common Questions" items={faqs} />

      {/* ===== URGENCY NOTE + CTA ===== */}
      <section className="py-8 bg-red-50 border-y border-red-100">
        <div className="mx-auto max-w-3xl px-4 md:px-8 text-center">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-red-800 mb-2">
            Do Not Wait &mdash; Criminal Cases Are Time-Sensitive
          </h2>
          <p className="text-red-700">
            In criminal matters, delays can weaken your position. If you or a
            family member is facing criminal charges, an FIR, or police
            questioning, contact {siteData.lawyerName} immediately.
          </p>
        </div>
      </section>

      <CTASection
        heading="Need Criminal Defense Support?"
        body="Bail, FIR guidance, trial defense — immediate, confidential legal support is available. Call now or send a WhatsApp message."
      />
    </>
  );
}
