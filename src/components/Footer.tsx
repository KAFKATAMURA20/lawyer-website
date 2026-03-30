import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteData } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/90">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              {siteData.firmName}
            </h3>
            <p className="text-sm text-white/60">
              {siteData.designation} &mdash; Civil, Criminal &amp; Matrimonial
              Law
            </p>
            <p className="text-sm text-white/60 mt-1">
              {siteData.address.city}, {siteData.address.state}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/civil-law", label: "Civil Law" },
                { href: "/criminal-law", label: "Criminal Law" },
                { href: "/matrimonial-law", label: "Matrimonial Law" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                <a href={siteData.phoneLink} className="text-white/60 hover:text-white transition-colors">
                  {siteData.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <a href={siteData.emailLink} className="text-white/60 hover:text-white transition-colors">
                  {siteData.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span className="text-white/60">
                  {siteData.address.line1}, {siteData.address.city},{" "}
                  {siteData.address.state}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} {siteData.firmName}. All
              rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-white/40">
              <Link href="/disclaimer" className="hover:text-white/70 transition-colors">
                Disclaimer
              </Link>
              <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="hover:text-white/70 transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
          <p className="mt-4 text-xs text-white/30 max-w-2xl">
            This website is for informational purposes only. Accessing this site
            or contacting {siteData.firmName} does not create a lawyer-client
            relationship. Please read our full{" "}
            <Link href="/disclaimer" className="underline hover:text-white/50">
              Disclaimer
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
