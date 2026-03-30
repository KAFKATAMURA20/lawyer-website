import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import DisclaimerGate from "@/components/DisclaimerGate";
import "./globals.css";
import { siteData } from "@/lib/siteData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1B2A4A",
};

export const metadata: Metadata = {
  title: {
    default: `${siteData.firmName} — Civil, Criminal & Matrimonial Lawyer in Jammu`,
    template: `%s | ${siteData.firmName} — Advocate, Jammu`,
  },
  description: `${siteData.firmName} is an independent advocate in Jammu practicing civil, criminal, and matrimonial law. Personally involved in every case. Available by phone, WhatsApp, and in person.`,
  keywords: [
    "lawyer Jammu",
    "advocate Jammu",
    "civil lawyer Jammu",
    "criminal lawyer Jammu",
    "matrimonial lawyer Jammu",
    "divorce lawyer Jammu",
    "bail lawyer Jammu",
    "property lawyer Jammu",
    "High Court J&K lawyer",
    "District Court Jammu advocate",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: `${siteData.firmName} — Advocate`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className="min-h-screen flex flex-col">
        <DisclaimerGate />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
