"use client";

import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  heading?: string;
}

export default function FAQAccordion({
  items,
  heading = "Common Questions",
}: FAQAccordionProps) {
  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8 text-center">
          {heading}
        </h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <details
              key={i}
              className="group bg-white rounded-xl border border-border overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-base font-medium text-navy hover:bg-cream/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                <span className="pr-4">{item.question}</span>
                <ChevronDown
                  size={20}
                  className="faq-chevron shrink-0 text-muted"
                />
              </summary>
              <div className="px-5 pb-5 text-charcoal leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
