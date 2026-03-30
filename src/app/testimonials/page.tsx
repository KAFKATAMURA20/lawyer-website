import type { Metadata } from "next";
import { Check, Star } from "lucide-react";
import { siteData, googleReviews, testimonials } from "@/lib/siteData";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `Read what clients say about working with ${siteData.firmName} — rated ${googleReviews.rating}/5 on Google. Civil, criminal, and matrimonial lawyers in Jammu.`,
};

export default function TestimonialsPage() {
  const reviewsWithText = googleReviews.reviews.filter((r) => r.text);
  const reviewsWithoutText = googleReviews.reviews.filter((r) => !r.text);

  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-navy/[0.03] to-cream">
        <div className="mx-auto max-w-3xl px-4 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            What Clients Say
          </h1>
          <p className="text-muted leading-relaxed mb-6">
            Our clients trust us with their most important legal matters. Here
            is what they have to say about working with {siteData.firmName}.
          </p>
          <GoogleRatingBadge />
        </div>
      </section>

      {/* ===== GOOGLE REVIEWS ===== */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-2 text-center">
            Google Reviews
          </h2>
          <p className="text-muted text-center mb-10 text-sm">
            Verified reviews from Google Maps
          </p>

          {/* Reviews with text */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {reviewsWithText.map((review, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-white p-6 flex flex-col"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className={
                        j < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-200"
                      }
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-charcoal leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-medium text-navy">
                    {review.name}
                  </p>
                  <span className="text-xs text-muted">{review.timeAgo}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Star-only reviews */}
          {reviewsWithoutText.length > 0 && (
            <div className="rounded-xl border border-border bg-cream/50 p-6">
              <p className="text-sm text-muted mb-4 text-center">
                Additional 5-star reviews
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {reviewsWithoutText.map((review, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-lg bg-white border border-border px-4 py-2"
                  >
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star
                          key={j}
                          size={12}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-navy font-medium">
                      {review.name}
                    </span>
                    <span className="text-xs text-muted">
                      {review.timeAgo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== NRI NOTE (from Sumukh's review) ===== */}
      <section className="py-10 md:py-12 bg-navy/[0.03]">
        <div className="mx-auto max-w-3xl px-4 md:px-8 text-center">
          <h3 className="font-heading text-xl font-bold text-navy mb-2">
            NRI &amp; International Consultations Available
          </h3>
          <p className="text-charcoal">
            If you are based outside India and need legal assistance in Jammu
            &amp; Kashmir, {siteData.firmName} provides remote consultations by
            phone and WhatsApp.
          </p>
        </div>
      </section>

      {/* ===== TRUST SIGNALS ===== */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy text-center mb-10">
            {siteData.firmName} in Practice
          </h2>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
            {[
              {
                value: `${siteData.yearsOfPractice}+`,
                label: "Years of Practice",
              },
              { value: "4.7/5", label: "Google Rating" },
              { value: "High Court", label: "J&K and Ladakh" },
              { value: "District Court", label: "Jammu" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-white border border-border"
              >
                <p className="text-xl md:text-2xl font-heading font-bold text-navy mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Professional principles */}
          <div className="max-w-lg mx-auto">
            <h3 className="font-semibold text-navy mb-4 text-center">
              Professional Principles
            </h3>
            <ul className="space-y-3">
              {[
                "Every case is handled personally by the lead advocate",
                "Clients receive updates after every hearing or development",
                "Fees are discussed transparently before engagement",
                "NRI and international consultations available",
                "Confidentiality is maintained at all times",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-charcoal"
                >
                  <Check
                    size={20}
                    className="mt-0.5 shrink-0 text-green-600"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTASection
        heading="Ready to Discuss Your Case?"
        body="Every matter begins with a conversation. Reach out to discuss your situation confidentially."
      />
    </>
  );
}
