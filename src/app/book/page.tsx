import type { Metadata } from "next";
import {
  CalendarCheck,
  ListChecks,
  UserCircle,
  CheckCircle,
  Phone,
  MapPin,
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
      {/* ===== HERO ===== */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-navy/[0.03] to-cream">
        <div className="mx-auto max-w-3xl px-4 md:px-8 text-center">
          <CalendarCheck size={48} className="mx-auto text-gold mb-4" />
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Book a Consultation
          </h1>
          <p className="text-muted leading-relaxed max-w-2xl mx-auto">
            Schedule a consultation at a time that suits you. Select an
            available date and time, share a few basic details, and we will
            confirm your appointment. Consultations are offered in person at our
            Jammu office or via phone/video, depending on availability and the
            nature of the matter.
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: ListChecks,
                step: "1",
                title: "Choose Type",
                desc: "Select consultation type",
              },
              {
                icon: CalendarCheck,
                step: "2",
                title: "Pick Date & Time",
                desc: "Choose an available slot",
              },
              {
                icon: UserCircle,
                step: "3",
                title: "Share Details",
                desc: "Tell us about your matter",
              },
              {
                icon: CheckCircle,
                step: "4",
                title: "Get Confirmed",
                desc: "We confirm your booking",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-navy/5">
                  <item.icon size={24} className="text-navy" />
                </div>
                <h3 className="font-semibold text-navy text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CAL.COM BOOKING WIDGET ===== */}
      <section className="py-10 md:py-14 bg-cream">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-2 text-center">
            Schedule Your Consultation
          </h2>
          <p className="text-sm text-muted text-center mb-8">
            Select a consultation type, choose an available date and time, and
            confirm your booking. Your Google Calendar will be updated
            automatically.
          </p>
          <CalEmbed />
        </div>
      </section>

      {/* ===== CONSULTATION INFO ===== */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-10 text-center">
            Consultation Details
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* In-Office */}
            <div className="rounded-xl border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5">
                  <MapPin size={20} className="text-navy" />
                </div>
                <h3 className="font-semibold text-navy text-lg">
                  In-Office Consultation
                </h3>
              </div>
              <div className="space-y-3 text-sm text-charcoal">
                <p>
                  <strong className="text-navy">Address:</strong>{" "}
                  {siteData.address.line1}, {siteData.address.city},{" "}
                  {siteData.address.state} &mdash; {siteData.address.pin}
                </p>
                <p>
                  <strong className="text-navy">Office Hours:</strong>
                </p>
                <ul className="text-muted space-y-0.5 ml-4">
                  <li>Monday: {siteData.hours.monday}</li>
                  <li>Tuesday &ndash; Saturday: {siteData.hours.tuesdayToSaturday}</li>
                  <li>Sunday: {siteData.hours.sunday}</li>
                </ul>
                <p className="text-muted text-xs pt-2">
                  Please arrive 5&ndash;10 minutes before your scheduled time.
                  Bring any relevant documents for review.
                </p>
              </div>
            </div>

            {/* Tele-Consultation */}
            <div className="rounded-xl border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5">
                  <Phone size={20} className="text-navy" />
                </div>
                <h3 className="font-semibold text-navy text-lg">
                  Tele-Consultation
                </h3>
              </div>
              <div className="space-y-3 text-sm text-charcoal">
                <p>
                  Available via phone call, WhatsApp call, or video meeting.
                  Ideal for NRI clients or those unable to visit the office.
                </p>
                <p>
                  <strong className="text-navy">How it works:</strong>
                </p>
                <ul className="text-muted space-y-1 ml-4 list-disc">
                  <li>Book your preferred slot online</li>
                  <li>
                    We confirm the appointment and share the call/meeting details
                  </li>
                  <li>
                    Join via phone, WhatsApp, or Google Meet at the scheduled
                    time
                  </li>
                </ul>
                <p className="text-muted text-xs pt-2">
                  For video consultations, a meeting link will be shared
                  before the appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESCHEDULING & POLICY ===== */}
      <section className="py-10 md:py-12 bg-cream">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mb-6 text-center">
            Booking Policy
          </h2>
          <div className="rounded-xl border border-border bg-white p-6 space-y-3 text-sm text-charcoal">
            <div className="flex items-start gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-gold" />
              <p>
                <strong className="text-navy">Rescheduling:</strong>{" "}
                Appointments may be rescheduled up to 12 hours before the
                scheduled time. Please contact us by phone or WhatsApp.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-gold" />
              <p>
                <strong className="text-navy">Cancellation:</strong>{" "}
                Cancellations are accepted up to 12 hours before the
                appointment. Missed appointments may require a fresh booking.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck size={18} className="mt-0.5 shrink-0 text-gold" />
              <p>
                <strong className="text-navy">Urgent Matters:</strong>{" "}
                For time-sensitive issues such as bail or FIR-related matters,
                please call directly at{" "}
                <a href={siteData.phoneLink} className="text-navy underline">
                  {siteData.phone}
                </a>{" "}
                rather than booking online.
              </p>
            </div>
          </div>
          <p className="text-xs text-muted text-center mt-4">
            Appointments are subject to availability and confirmation where
            required. Please contact us directly for urgent legal matters.
          </p>
        </div>
      </section>

      {/* ===== TRUST & COMPLIANCE ===== */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="rounded-xl bg-navy/[0.03] border border-border p-6">
            <h3 className="font-semibold text-navy mb-3 flex items-center gap-2">
              <ShieldCheck size={20} className="text-gold" />
              Important Information
            </h3>
            <ul className="space-y-2 text-sm text-charcoal">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                Your details are used only to review and schedule your
                consultation.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                Submitting a booking request does not create a lawyer-client
                relationship. The consultation is an initial discussion only.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                Please do not share highly sensitive confidential material until
                formally advised to do so.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                All information shared is treated as confidential in accordance
                with our{" "}
                <a href="/privacy-policy" className="text-navy underline">
                  Privacy Policy
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== FALLBACK CTA ===== */}
      <section className="py-12 md:py-16 bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 md:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
            Prefer to Speak First?
          </h2>
          <p className="text-white/80 mb-6">
            If you would rather discuss your matter before booking, call or
            message us directly. We are happy to help.
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
