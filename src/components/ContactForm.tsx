"use client";

import { useState } from "react";
import { siteData } from "@/lib/siteData";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: (formData.get("email") as string) || "",
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send. Please try calling or WhatsApp instead."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="font-heading text-xl font-bold text-green-800 mb-2">
          Message Sent
        </h3>
        <p className="text-green-700">
          Thank you for reaching out. {siteData.lawyerName} will review your
          message and get back to you shortly. A confirmation has been sent to
          your email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-heading text-xl font-bold text-navy mb-2">
        Send a Message
      </h3>
      <p className="text-sm text-muted mb-4">
        Fill out the form below and {siteData.lawyerName} will get back to you.
        All inquiries are treated as confidential.
      </p>

      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={submitting}
          className="w-full rounded-lg border border-border px-4 py-3 text-base text-charcoal placeholder:text-muted/60 focus:border-gold focus:ring-1 focus:ring-gold/40 outline-none transition-colors disabled:opacity-60"
          placeholder="Full name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          disabled={submitting}
          className="w-full rounded-lg border border-border px-4 py-3 text-base text-charcoal placeholder:text-muted/60 focus:border-gold focus:ring-1 focus:ring-gold/40 outline-none transition-colors disabled:opacity-60"
          placeholder="+91 XXXXX XXXXX"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          disabled={submitting}
          className="w-full rounded-lg border border-border px-4 py-3 text-base text-charcoal placeholder:text-muted/60 focus:border-gold focus:ring-1 focus:ring-gold/40 outline-none transition-colors disabled:opacity-60"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
          Tell Us Briefly About Your Matter <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          disabled={submitting}
          className="w-full rounded-lg border border-border px-4 py-3 text-base text-charcoal placeholder:text-muted/60 focus:border-gold focus:ring-1 focus:ring-gold/40 outline-none transition-colors resize-y disabled:opacity-60"
          placeholder="For example: I have a property dispute in Jammu and need legal advice..."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-lg bg-navy px-6 py-3 text-base font-semibold text-white hover:bg-navy-light active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="text-xs text-muted">
        Submitting this form does not create a lawyer-client relationship.{" "}
        {siteData.lawyerName} will review your message and respond to discuss
        next steps. Please read our{" "}
        <a href="/disclaimer" className="underline hover:text-navy">
          Disclaimer
        </a>{" "}
        for more information.
      </p>
    </form>
  );
}
