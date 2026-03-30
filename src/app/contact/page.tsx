import type { Metadata } from "next";
import { Phone, Mail, MapPin, Landmark, Clock } from "lucide-react";
import { siteData } from "@/lib/siteData";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteData.firmName}, advocate in Jammu, for a consultation on civil, criminal, or matrimonial matters. Available by phone, WhatsApp, email, and in person.`,
};

export default function ContactPage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-navy/[0.03] to-cream">
        <div className="mx-auto max-w-3xl px-4 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Get in Touch
          </h1>
          <p className="text-muted leading-relaxed">
            Whether you have a question about a legal matter or are ready to
            discuss your case in detail, {siteData.lawyerName} is available by
            phone, WhatsApp, email, or in person. The first step is a
            conversation.
          </p>
        </div>
      </section>

      {/* ===== CONTACT DETAILS + FORM ===== */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-xl font-bold text-navy mb-6">
                  Contact Details
                </h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 shrink-0">
                      <Phone size={20} className="text-navy" />
                    </div>
                    <div>
                      <p className="font-medium text-navy">Phone</p>
                      <a
                        href={siteData.phoneLink}
                        className="text-charcoal hover:text-navy transition-colors"
                      >
                        {siteData.phone}
                      </a>
                      <p className="text-xs text-muted mt-1">
                        Available during working hours. For urgent criminal
                        matters, please call directly.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-whatsapp/10 shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-whatsapp"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-navy">WhatsApp</p>
                      <a
                        href={siteData.whatsappLink}
                        className="text-charcoal hover:text-navy transition-colors"
                      >
                        {siteData.whatsapp}
                      </a>
                      <p className="text-xs text-muted mt-1">
                        Send a message anytime. All WhatsApp messages are
                        responded to personally.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 shrink-0">
                      <Mail size={20} className="text-navy" />
                    </div>
                    <div>
                      <p className="font-medium text-navy">Email</p>
                      <a
                        href={siteData.emailLink}
                        className="text-charcoal hover:text-navy transition-colors"
                      >
                        {siteData.email}
                      </a>
                      <p className="text-xs text-muted mt-1">
                        For non-urgent matters, documentation, or detailed
                        queries.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 shrink-0">
                      <MapPin size={20} className="text-navy" />
                    </div>
                    <div>
                      <p className="font-medium text-navy">Office Address</p>
                      <p className="text-charcoal">
                        {siteData.firmName}
                        <br />
                        {siteData.designation}
                        <br />
                        {siteData.address.line1}
                        <br />
                        {siteData.address.line2}
                        <br />
                        {siteData.address.city}, {siteData.address.state}{" "}
                        &mdash; {siteData.address.pin}
                      </p>
                      <p className="text-xs text-muted mt-1">
                        Office consultations by appointment. Walk-ins welcome
                        during office hours.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 shrink-0">
                      <Clock size={20} className="text-navy" />
                    </div>
                    <div>
                      <p className="font-medium text-navy">Office Hours</p>
                      <ul className="text-charcoal text-sm space-y-1 mt-1">
                        <li>Monday: 5:45 PM &ndash; 9 PM</li>
                        <li>Tuesday &ndash; Saturday: 6 PM &ndash; 9 PM</li>
                        <li>Sunday: Closed</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Courts */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Landmark size={20} className="text-gold" />
                  <h3 className="font-semibold text-navy">
                    Courts &amp; Jurisdiction
                  </h3>
                </div>
                <ul className="space-y-1 text-sm text-charcoal">
                  {siteData.courts.map((court) => (
                    <li key={court} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      {court}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div className="rounded-xl border border-border bg-white p-6 md:p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== GOOGLE MAP ===== */}
      <section className="py-0">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.123!2d74.8571!3d32.7185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s19A+Bhawani+Nagar%2C+Janipur%2C+Jammu%2C+Jammu+and+Kashmir+180007!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="B S Manhas & Associates — Office Location"
              className="w-full"
            />
          </div>
          <p className="text-xs text-muted text-center mt-3 mb-8">
            19 A Bhawani Nagar, Janipur, Jammu, J&amp;K 180007 &mdash;{" "}
            <a
              href="https://www.google.com/maps/search/B+S+Manhas+%26+Associates+Jammu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy underline"
            >
              Open in Google Maps
            </a>
          </p>
        </div>
      </section>

      {/* ===== WHAT HAPPENS NEXT ===== */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8 text-center">
            What Happens Next?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Review", desc: "Your message is reviewed" },
              {
                step: "2",
                title: "Respond",
                desc: "You hear back within 24 hours",
              },
              {
                step: "3",
                title: "Consult",
                desc: "A consultation is scheduled",
              },
              {
                step: "4",
                title: "Advise",
                desc: "You receive an honest assessment",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-navy mb-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-12 md:py-16 bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 md:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Your Legal Matter Deserves Personal Attention
          </h2>
          <p className="text-white/80 mb-6">
            Do not wait to get the guidance you need. Call, message, or visit
            today.
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
              WhatsApp {siteData.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
