"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteData } from "@/lib/siteData";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/civil-law", label: "Civil Law" },
  { href: "/criminal-law", label: "Criminal Law" },
  { href: "/matrimonial-law", label: "Matrimonial Law" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
    return () => document.body.classList.remove("nav-open");
  }, [mobileOpen]);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex h-14 items-center justify-between md:h-16">
          {/* Logo / Name */}
          <Link href="/" className="flex flex-col leading-tight min-w-0">
            <span className="font-heading text-base md:text-lg font-bold text-navy truncate">
              {siteData.firmName}
            </span>
            <span className="text-[11px] text-muted hidden sm:block">
              {siteData.designation} &mdash; {siteData.tagline}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === link.href
                    ? "text-navy bg-cream"
                    : "text-muted hover:text-navy hover:bg-cream/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteData.phoneLink}
              className="ml-3 inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
            >
              <Phone size={16} />
              Call Now
            </a>
          </nav>

          {/* Mobile hamburger — 48px touch target */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex items-center justify-center w-12 h-12 -mr-2 text-navy"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden overflow-y-auto">
          <div className="flex h-14 items-center justify-between px-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="font-heading text-base font-bold text-navy"
            >
              {siteData.firmName}
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-12 h-12 -mr-2 text-navy"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col px-6 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-4 text-lg font-medium border-b border-border/60 ${
                  pathname === link.href ? "text-navy" : "text-charcoal"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-8">
              <a
                href={siteData.phoneLink}
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-navy px-4 py-4 text-base font-semibold text-white"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href={siteData.whatsappLink}
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-4 text-base font-semibold text-white"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
