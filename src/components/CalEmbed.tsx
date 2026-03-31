"use client";

import { useEffect, useRef } from "react";

// ============================================================
// CAL.COM — CONNECTED
// ============================================================
// Username: amarvir-manhas
// Event types:
//   - In Person meeting (30m)  → /amarvir-manhas/in-person
//   - Phone Consultation (10m) → /amarvir-manhas/phonecall
//   - Video Calling (10m)      → /amarvir-manhas/videocalling
// ============================================================

const CAL_USERNAME = "amarvir-manhas";

interface CalEmbedProps {
  calLink?: string;
}

export default function CalEmbed({ calLink }: CalEmbedProps) {
  const link = calLink || CAL_USERNAME;
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Load Cal.com embed via their official snippet
    (function (C: string, A: string, L: string) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const p = function (a: any, ar?: any) {
        (p.q = p.q || []).push([a, ar]);
      } as any;
      (window as any).Cal = p;
      p.ns = {};
      p.loaded = false;

      const d = document;
      const s = d.createElement("script");
      s.src = A;
      s.async = true;
      d.head.appendChild(s);

      p("init", C, { origin: L });
    })("", "https://app.cal.com/embed/embed.js", "https://app.cal.com");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Cal = (window as any).Cal;

    Cal("inline", {
      elementOrSelector: "#cal-embed",
      calLink: link,
      layout: "month_view",
    });

    Cal("ui", {
      theme: "light",
      styles: { branding: { brandColor: "#1B2A4A" } },
    });
  }, [link]);

  return (
    <div className="w-full">
      <div
        id="cal-embed"
        className="w-full overflow-hidden rounded-xl"
        style={{ minHeight: "600px" }}
      />
    </div>
  );
}
