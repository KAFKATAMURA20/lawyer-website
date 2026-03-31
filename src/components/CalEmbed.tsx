"use client";

import { useEffect } from "react";

// ============================================================
// CAL.COM — CONNECTED
// ============================================================
// Username: amarvir-manhas-fexlyo
// Event types:
//   - In Person meeting (30m)  → /amarvir-manhas-fexlyo/in-person
//   - Phone Consultation (10m) → /amarvir-manhas-fexlyo/phonecall
//   - Video Calling (10m)      → /amarvir-manhas-fexlyo/videocalling
// ============================================================

const CAL_USERNAME = "amarvir-manhas-fexlyo";

interface CalEmbedProps {
  calLink?: string; // e.g., "bsmanhas" or "bsmanhas/office-30min"
}

export default function CalEmbed({ calLink }: CalEmbedProps) {
  const link = calLink || CAL_USERNAME;

  useEffect(() => {
    const w = window as unknown as Record<string, unknown>;

    // Cal.com's official embed snippet: queue commands until script loads
    const cal = function (...args: unknown[]) {
      const q = ((cal as unknown as { q: unknown[] }).q =
        (cal as unknown as { q: unknown[] }).q || []);
      q.push(args);
    };
    w["Cal"] = cal;

    // Queue the init + inline commands (they execute once the script loads)
    cal("init", { origin: "https://app.cal.com" });
    cal("inline", {
      elementOrSelector: "#cal-embed",
      calLink: link,
      layout: "month_view",
      config: { theme: "light" },
    });
    cal("ui", {
      theme: "light",
      styles: { branding: { brandColor: "#1B2A4A" } },
    });

    // Load the embed script
    const s = document.createElement("script");
    s.src = "https://app.cal.com/embed/embed.js";
    s.async = true;
    document.head.appendChild(s);

    return () => {
      s.remove();
    };
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
