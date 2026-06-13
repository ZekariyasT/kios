"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FigmaCroppedImage from "@/components/shared/FigmaCroppedImage";
import {
  imgSalziThinking,
  imgSalziShadowConsent,
  imgSettingsConsent,
} from "@/lib/onboarding-assets";

const CONSENT_SECTIONS = [
  {
    title: "1. Use of Your Experience Data",
    body: "The thoughts and experiences you share with Salzi will be anonymized and used to help improve tourist areas, public services, and visitor experiences across Salzburg. No response will ever be linked back to you personally.",
  },
  {
    title: "2. Use of Your Image",
    body: "Your photo will be used solely to generate your personal AI portrait souvenir. It will not be stored on our servers beyond the duration of your session, shared with third parties, used for advertising, or included in any database or training dataset.",
  },
  {
    title: "3. Session Data & Anonymization",
    body: "All conversation data is automatically anonymized the moment your session ends. We do not collect your name, nationality, or any identifying information unless you voluntarily choose to share it during the conversation.",
  },
  {
    title: "4. Your Portrait & QR Delivery",
    body: "Your generated portrait is available exclusively through the QR code displayed at the end of your session. Once the session closes, the image is permanently deleted from our system. We recommend saving it immediately.",
  },
  {
    title: "5. Children & Minors",
    body: "If you are under the age of 16, please ensure a parent or guardian is present and agrees to these terms on your behalf before continuing.",
  },
  {
    title: "6. Voluntary Participation",
    body: 'Your participation is entirely voluntary. You may stop the conversation at any time by pressing "End Session". Choosing not to participate will have no consequences whatsoever.',
  },
  {
    title: "7. Data Controller & Contact",
    body: "This kiosk is operated by [Organization Name], in compliance with the General Data Protection Regulation (GDPR) and Austrian data protection law. For any questions or data-related requests, contact us at: contact@organization.at",
  },
  {
    title: "8. Your Rights",
    body: "Under GDPR, you have the right to access, correct, or request deletion of any data associated with your session. To exercise these rights, contact us at the address above within 30 days of your visit.",
  },
];

/**
 * Consent form screen — matches Figma node 9:179.
 *
 * Layout:
 *   Left ~50%: Salzi thinking pose (flipped horizontally, with shadow).
 *   Right ~50%: heading, scrollable consent box, Decline/Agree buttons.
 */
export default function ConsentPage() {
  const router = useRouter();
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const atBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 10;
    if (atBottom) setHasScrolled(true);
  };

  return (
    <div className="relative w-full h-screen min-h-screen overflow-hidden bg-baroque-cream flex">
      {/* ── Left: Salzi thinking pose ─────────────────────────────── */}
      <div className="hidden md:block relative w-1/2 h-full shrink-0">
        {/* Mascot — Figma 9:189: 598×826 px in left panel */}
        <div
          className="absolute"
          style={{ left: "0%", top: "1%", width: "100%", height: "99%" }}
        >
          <FigmaCroppedImage
            src={imgSalziThinking}
            alt="Salzi thinking"
            cropLeft={-77.34}
            cropWidth={252.7}
            flip="horizontal"
            priority
          />
        </div>
        {/* Shadow ellipse */}
        <div
          className="absolute"
          style={{ bottom: "0.5%", left: "6.6%", width: "73.5%", height: "3%" }}
        >
          <Image
            src={imgSalziShadowConsent}
            alt=""
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* ── Right: consent form ───────────────────────────────────── */}
      <div
        className="relative flex flex-col w-full md:w-1/2 h-full overflow-hidden"
        style={{ padding: "clamp(24px, 4.8vh, 40px) clamp(24px, 3vw, 40px)" }}
      >
        {/* Settings button */}
        <button
          type="button"
          aria-label="Settings"
          className="absolute top-6 right-6 size-8 hover:opacity-70 transition-opacity"
        >
          <Image src={imgSettingsConsent} alt="Settings" fill unoptimized />
        </button>

        {/* Heading */}
        <p
          className="text-charcoal-stone shrink-0 mb-6"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(18px, 2.7vw, 32px)",
            lineHeight: 1.4,
          }}
        >
          Before we begin, Salzi needs just a moment of your time. Please{" "}
          <strong style={{ fontWeight: 700 }}>read the following carefully</strong>{" "}
          — your privacy matters to us.
        </p>

        {/* Scrollable consent box */}
        <div
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto border border-charcoal-stone rounded-[7px] p-5 mb-6"
          style={{ background: "rgba(255,255,255,0.42)" }}
        >
          {CONSENT_SECTIONS.map((section) => (
            <div key={section.title} className="mb-4 last:mb-0">
              <p
                className="text-charcoal-stone font-semibold mb-1"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(12px, 1.4vw, 16px)" }}
              >
                {section.title}
              </p>
              <p
                className="text-charcoal-stone"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(12px, 1.4vw, 16px)", lineHeight: 1.5 }}
              >
                {section.body}
              </p>
            </div>
          ))}
          <p
            className="text-charcoal-stone mt-4"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(12px, 1.4vw, 16px)", lineHeight: 1.5 }}
          >
            &ldquo;By tapping &apos;I Agree &amp; Continue&apos;, you confirm that you have read,
            understood, and agreed to the above. If you do not agree, simply tap
            &apos;No Thanks&apos; — Salzi will still be happy to chat, but no portrait will
            be generated.&rdquo;
          </p>
        </div>

        {/* Action buttons */}
        <div
          className="flex gap-8 shrink-0 transition-opacity duration-300"
          style={{ opacity: hasScrolled ? 1 : 0.5 }}
        >
          {/* Decline */}
          <button
            type="button"
            onClick={() => router.push("/onboarding")}
            className="flex-1 flex items-center justify-center border-2 border-charcoal-stone rounded-[14px] hover:bg-charcoal-stone/5 transition-colors"
            style={{ padding: "clamp(8px, 1.5vh, 12px) 20px" }}
          >
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(20px, 3.3vw, 40px)",
                color: "#2c2c2c",
                whiteSpace: "nowrap",
              }}
            >
              Decline
            </span>
          </button>

          {/* Agree */}
          <button
            type="button"
            onClick={() => router.push("/onboarding/souvenir")}
            className="flex-1 flex items-center justify-center rounded-[14px] transition-colors"
            style={{
              background: "#c9a84c",
              padding: "clamp(8px, 1.5vh, 12px) 20px",
            }}
          >
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(20px, 3.3vw, 40px)",
                color: "#fdfdfd",
                whiteSpace: "nowrap",
              }}
            >
              Agree
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
