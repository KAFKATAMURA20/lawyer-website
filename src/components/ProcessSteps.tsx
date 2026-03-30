interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  heading?: string;
  steps: Step[];
}

export default function ProcessSteps({
  heading = "What to Expect",
  steps,
}: ProcessStepsProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-10 text-center">
          {heading}
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 md:gap-6">
                {/* Step number */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white text-sm font-bold">
                  {i + 1}
                </div>
                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-navy mb-1">
                    {step.title}
                  </h3>
                  <p className="text-charcoal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
