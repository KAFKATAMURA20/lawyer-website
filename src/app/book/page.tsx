import type { Metadata } from "next";
import {
  Phone,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { siteData } from "@/lib/siteData";
import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: `Book a consultation with ${siteData.firmName} in Jammu. Choose a date, time, and consultation type. In-office and tele-consultations available.`,
};

export default function BookPage() {
  return (
    <>
      {/* ===== HERO + BOOKING (ABOVE THE FOLD) ===== */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-navy/[0.03] to-cream">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-1 text-center">
            Book a Consultation
          </h1>
          <p className="text-sm text-muted text-center mb-6">
            Select a consultation type, pick a date &amp; time, and confirm.
          </p>

          {/* Consultation type cards → Cal.com calendar */}
          <CalEmbed />
        </div>
      </section>

      {/* ===== COMPACT INFO ROW ===== */}
      <section className="py-8 md:py-10">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="grid sm:grid-cols-3 gap-4 text-sm text-charcoal">
            {/* Office info */}
            <div className="rounded-lg border border-border p-4">
              <h3 className="font-semibold text-navy mb-2 text-sm">Office Hours</h3>
              <ul className="text-xs text-muted space-y-0.5">
                <li>Mon: {siteData.hours.monday}</li>
                <li>Tue&ndash;Sat: {siteData.hours.tuesdayToSaturday}</li>
                <li>Sun: {siteData.hours.sunday}</li>
              </ul>
              <p className="text-xs text-muted mt-2">
                {siteData.address.line1}, {siteData.address.city}
              </p>
            </div>

            {/* Policy */}
            <div className="rounded-lg border border-border p-4">
              <h3 className="font-semibold text-navy mb-2 text-sm">Policy</h3>
              <ul className="text-xs text-muted space-y-1">
                <li className="flex items-start gap-1.5">
                  <Clock size={12} className="mt-0.5 shrink-0 text-gold" />
                  Reschedule/cancel up to 12 hours before
                </li>
                <li className="flex items-start gap-1.5">
                  <ShieldCheck size={12} className="mt-0.5 shrink-0 text-gold" />
                  Urgent matters? Call directly
                </li>
              </ul>
            </div>

            {/* Trust */}
            <div className="rounded-lg border border-border p-4">
              <h3 className="font-semibold text-navy mb-2 text-sm">Good to Know</h3>
              <ul className="text-xs text-muted space-y-1">
                <li>Booking does not create a lawyer-client relationship</li>
                <li>Your details are kept confidential</li>
                <li>
                  NRI &amp; video consultations available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FALLBACK CTA ===== */}
      <section className="py-10 md:py-14 bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 md:px-8 text-center">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">
            Prefer to Speak First?
          </h2>
          <p className="text-white/80 text-sm mb-5">
            Call or message us directly — we are happy to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteData.phoneLink}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-navy hover:bg-white/90 transition-colors"
            >
              <Phone size={18} />
              Call {siteData.phone}
            </a>
            <a
              href={siteData.whatsappLink}
              className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-base font-semibold text-white hover:bg-whatsapp-dark transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
