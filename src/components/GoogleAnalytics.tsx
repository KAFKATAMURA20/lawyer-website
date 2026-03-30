"use client";

import Script from "next/script";

// ============================================================
// GOOGLE ANALYTICS SETUP
// ============================================================
// 1. Go to https://analytics.google.com
// 2. Create a property for "B S Manhas & Associates"
// 3. Get your Measurement ID (starts with "G-")
// 4. Add it as an environment variable:
//    - Vercel: Settings → Environment Variables → GA_MEASUREMENT_ID
//    - Local: add to .env.local
// ============================================================

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
