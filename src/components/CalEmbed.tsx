"use client";

import { useEffect } from "react";

// ============================================================
// CAL.COM SETUP
// ============================================================
// 1. Sign up at https://cal.com (free)
// 2. Connect your Google Calendar
// 3. Create event types for each consultation:
//    - "In-Office Consultation (30 min)"
//    - "In-Office Detailed Consultation (60 min)"
//    - "Tele-Consultation (20 min)"
//    - "Tele-Consultation Extended (30 min)"
//    - "Urgent Consultation Request"
// 4. Replace CAL_USERNAME below with your Cal.com username
//    e.g., "bsmanhas" if your link is cal.com/bsmanhas
// 5. Optionally set a specific event slug if you want to
//    link directly to one event type
// ============================================================

const CAL_USERNAME = "REPLACE_WITH_YOUR_CAL_USERNAME";

interface CalEmbedProps {
  calLink?: string; // e.g., "bsmanhas" or "bsmanhas/office-30min"
}

export default function CalEmbed({ calLink }: CalEmbedProps) {
  const link = calLink || CAL_USERNAME;

  useEffect(() => {
    // Load Cal.com embed script
    const w = window as unknown as Record<string, unknown>;
    const p = function (a: unknown, ar?: unknown) {
      ((p as unknown as { q: unknown[] }).q =
        (p as unknown as { q: unknown[] }).q || []).push([a, ar]);
    };
    w["Cal"] = p;
    const s = document.createElement("script");
    s.src = "https://app.cal.com/embed/embed.js";
    s.async = true;
    document.head.appendChild(s);

    // Initialize Cal embed after script loads
    const timer = setTimeout(() => {
      const Cal = w["Cal"] as
        | ((action: string, ...args: unknown[]) => void)
        | undefined;
      if (Cal) {
        Cal("init", { origin: "https://app.cal.com" });
        Cal("inline", {
          elementOrSelector: "#cal-embed",
          calLink: link,
          layout: "month_view",
          config: { theme: "light" },
        });
        Cal("ui", {
          theme: "light",
          styles: { branding: { brandColor: "#1B2A4A" } },
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [link]);

  return (
    <div className="w-full">
      <div
        id="cal-embed"
        className="w-full overflow-hidden rounded-xl"
        style={{ minHeight: "500px" }}
      />

      {/* Fallback if Cal.com hasn't been configured yet */}
      {link === "REPLACE_WITH_YOUR_CAL_USERNAME" && (
        <div className="rounded-xl border-2 border-dashed border-border bg-cream/50 p-8 text-center">
          <p className="text-lg font-semibold text-navy mb-2">
            Booking Calendar Coming Soon
          </p>
          <p className="text-sm text-muted mb-4">
            Online scheduling is being set up. In the meantime, please contact
            us directly to book a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919419000016"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 text-base font-semibold text-white hover:bg-navy-light transition-colors"
            >
              Call +91 94190 00016
            </a>
            <a
              href="https://wa.me/919419000016?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation."
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-base font-semibold text-white hover:bg-whatsapp-dark transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
