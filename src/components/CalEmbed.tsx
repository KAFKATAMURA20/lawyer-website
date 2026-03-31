"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Video, MapPin, ArrowLeft } from "lucide-react";

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

const eventTypes = [
  {
    slug: "phonecall",
    title: "Phone Consultation",
    duration: "10 min",
    fee: "₹2,000",
    icon: Phone,
    desc: "Quick advice on a specific legal question",
  },
  {
    slug: "in-person",
    title: "In-Office Consultation",
    duration: "30 min",
    fee: "₹5,000",
    icon: MapPin,
    desc: "First advice, case review, and document discussion",
  },
  {
    slug: "videocalling",
    title: "Video Consultation",
    duration: "10 min",
    fee: "₹2,000",
    icon: Video,
    desc: "Ideal for NRI clients or those unable to visit",
  },
];

function CalInline({ slug }: { slug: string }) {
  const embedId = `cal-embed-${slug}`;
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const calLink = `${CAL_USERNAME}/${slug}`;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;

    // If Cal script is already loaded, just create a new inline embed
    if (w.Cal) {
      w.Cal("inline", {
        elementOrSelector: `#${embedId}`,
        calLink,
        layout: "month_view",
      });
      w.Cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#1B2A4A" },
        },
      });
      return;
    }

    // First time: load the Cal.com script
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const p = function (a: any, ar?: any) {
      (p.q = p.q || []).push([a, ar]);
    } as any;
    w.Cal = p;
    p.ns = {};
    p.loaded = false;

    const s = document.createElement("script");
    s.src = "https://app.cal.com/embed/embed.js";
    s.async = true;
    document.head.appendChild(s);

    p("init", "", { origin: "https://app.cal.com" });
    p("inline", {
      elementOrSelector: `#${embedId}`,
      calLink,
      layout: "month_view",
    });
    p("ui", {
      theme: "light",
      cssVarsPerTheme: {
        light: { "cal-brand": "#1B2A4A" },
      },
    });
  }, [slug, embedId]);

  return (
    <div
      id={embedId}
      className="w-full overflow-hidden rounded-xl"
      style={{ minHeight: "480px" }}
    />
  );
}

export default function CalEmbed() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  // Counter to force fresh mount of CalInline on each selection
  const [mountKey, setMountKey] = useState(0);

  const handleSelect = (slug: string) => {
    setSelectedEvent(slug);
    setMountKey((k) => k + 1);
  };

  // Step 1: Show our own event type picker
  if (!selectedEvent) {
    return (
      <div className="grid sm:grid-cols-3 gap-4">
        {eventTypes.map((et) => (
          <button
            key={et.slug}
            onClick={() => handleSelect(et.slug)}
            className="group rounded-xl border-2 border-border bg-white p-5 text-left hover:border-navy hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 group-hover:bg-navy/10 transition-colors">
                <et.icon size={20} className="text-navy" />
              </div>
              <span className="text-lg font-bold text-navy">{et.fee}</span>
            </div>
            <h3 className="font-semibold text-navy mb-1">{et.title}</h3>
            <p className="text-xs text-muted mb-2">{et.desc}</p>
            <span className="text-xs font-medium text-gold">{et.duration}</span>
          </button>
        ))}
      </div>
    );
  }

  // Step 2: Show Cal.com calendar for the selected event
  const selected = eventTypes.find((e) => e.slug === selectedEvent);

  return (
    <div className="w-full">
      {/* Back button + selected type info */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => setSelectedEvent(null)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-navy-light transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </button>
        {selected && (
          <span className="text-sm text-muted">
            {selected.title} &middot; {selected.duration} &middot;{" "}
            <strong className="text-navy">{selected.fee}</strong>
          </span>
        )}
      </div>

      {/* Cal.com embed — key forces fresh mount each time */}
      <CalInline key={mountKey} slug={selectedEvent} />
    </div>
  );
}
