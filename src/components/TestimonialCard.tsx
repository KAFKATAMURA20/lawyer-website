interface TestimonialCardProps {
  quote: string;
  name: string;
  caseType: string;
  practiceArea: "Civil" | "Criminal" | "Matrimonial";
}

const areaBadgeColors = {
  Civil: "bg-blue-50 text-blue-700",
  Criminal: "bg-red-50 text-red-700",
  Matrimonial: "bg-purple-50 text-purple-700",
};

export default function TestimonialCard({
  quote,
  name,
  caseType,
  practiceArea,
}: TestimonialCardProps) {
  return (
    <div className="rounded-xl border border-border bg-white p-6 md:p-8 flex flex-col">
      {/* Decorative quote mark */}
      <span className="font-heading text-5xl text-gold/40 leading-none select-none mb-2">
        &ldquo;
      </span>
      <blockquote className="text-charcoal leading-relaxed flex-1 -mt-4">
        {quote}
      </blockquote>
      <div className="mt-5 flex items-center justify-between gap-2">
        <p className="text-sm text-muted">
          <span className="font-medium text-navy">{name}</span> &mdash;{" "}
          {caseType} Client
        </p>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${areaBadgeColors[practiceArea]}`}
        >
          {practiceArea}
        </span>
      </div>
    </div>
  );
}
