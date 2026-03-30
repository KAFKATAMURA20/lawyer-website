"use client";

import { useState, useEffect } from "react";
import { siteData } from "@/lib/siteData";

const CONSENT_KEY = "bsmanhas-disclaimer-accepted";

export default function DisclaimerGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const accepted = localStorage.getItem(CONSENT_KEY);
    if (!accepted) {
      setShow(true);
      // Prevent scrolling behind the modal
      document.body.style.overflow = "hidden";
    }
  }, []);

  function handleAgree() {
    localStorage.setItem(CONSENT_KEY, "true");
    setShow(false);
    document.body.style.overflow = "";
  }

  function handleDisagree() {
    // Redirect away from the website
    window.location.href = "https://www.google.com";
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border px-6 py-4 rounded-t-2xl">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-navy text-center">
            Disclaimer
          </h2>
        </div>

        {/* Content */}
        <div className="px-6 py-5 text-sm text-charcoal leading-relaxed space-y-4">
          <p className="font-semibold text-navy">
            The Bar Council of India prohibits the advertising of legal services
            and solicitation of work by advocates. By clicking &ldquo;I
            Agree&rdquo; below, the user acknowledges the following:
          </p>

          <p>
            This website is meant only for information purposes and not for any
            advertisement, personal communication, invitation or inducement of
            any sort from us or any of our members to solicit or advertise any
            work through this website.
          </p>

          <p>
            If you wish to get more information about us or would like to get in
            touch with <strong>{siteData.firmName}</strong>, you may contact us
            on our registered email address:{" "}
            <span className="text-navy">{siteData.email}</span> or call{" "}
            <span className="text-navy">{siteData.phone}</span>.
          </p>

          <p>
            As per the rules of the Bar Council of India, Advocates are not
            permitted to solicit or advertise their work. By clicking on
            &ldquo;I Agree&rdquo; below, the user (you) acknowledges the
            following:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              There exists no sort of advertisement, personal communication,
              solicitation, invitation or inducement of any sort whatsoever from
              us or any of our members and we are not soliciting any work
              through this website.
            </li>
            <li>
              The user deliberates and wishes to get more information about us
              for his/her own information, use and voluntary will.
            </li>
            <li>
              The information, if any, that may be provided to the user by us
              would have been provided upon user&rsquo;s specific request and
              any such information obtained, retained or downloaded from this
              website is absolutely at the volition of the user and any
              transmission, receipt or use of information or links to this site
              would not create any lawyer-client relationship.
            </li>
          </ul>

          <p>
            The information provided under this website is only available at
            your request for informational purposes rigidly, and should not be
            interpreted as soliciting or advertisement in any manner. We are
            neither privy nor responsible or liable for any consequence of any
            action taken by the user relying upon our material/information
            provided under this website. In case the user has any legal issues,
            the user must seek independent legal advice.
          </p>

          <p className="font-medium text-navy">
            Note: Access will only be granted once you confirm you have read and
            agree to the above.
          </p>
        </div>

        {/* Buttons */}
        <div className="sticky bottom-0 bg-white border-t border-border px-6 py-4 rounded-b-2xl">
          <div className="flex gap-3">
            <button
              onClick={handleDisagree}
              className="flex-1 rounded-lg border border-border py-3 text-sm font-semibold text-muted hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
            >
              I Disagree
            </button>
            <button
              onClick={handleAgree}
              className="flex-1 rounded-lg bg-navy py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
            >
              I Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
