"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  imgSalziHeadshot,
  imgSettingsCall,
  imgCallRingGlow,
  imgCallPhoneIcon,
} from "@/lib/call-assets";

/**
 * Call connecting/ringing screen — matches Figma node 24:3513.
 *
 * Layout:
 *   Baroque cream bg.
 *   Centre: white card (grey 4px border, rounded-[25px]) containing Salzi circular headshot.
 *   Below card: animated gold ring + phone icon.
 *   Top: settings (right) + back arrow (left).
 *
 * Auto-advances to /call/1 after 3 s to simulate "call answered".
 */
export default function CallConnectingPage() {
  const router = useRouter();

  useEffect(() => {
    const id = setTimeout(() => router.push("/call/1"), 3000);
    return () => clearTimeout(id);
  }, [router]);

  return (
    <div className="relative w-full h-screen min-h-screen overflow-hidden bg-baroque-cream flex items-center justify-center">
      {/* Back arrow */}
      <Link
        href="/onboarding/options"
        aria-label="Go back"
        className="absolute top-6 left-4 flex items-center justify-center size-6 hover:opacity-70 transition-opacity"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="#2c2c2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {/* Settings icon */}
      <button
        type="button"
        aria-label="Settings"
        className="absolute top-6 right-6 size-8 hover:opacity-70 transition-opacity"
      >
        <div className="relative size-full">
          <Image src={imgSettingsCall} alt="Settings" fill unoptimized />
        </div>
      </button>

      {/* ── Salzi card + call ring ──────────────────────────────── */}
      <div className="relative flex flex-col items-center">
        {/* White video card */}
        <div
          className="relative flex flex-col items-center justify-center bg-white-card rounded-[25px]"
          style={{
            width: "clamp(220px, 44vw, 526px)",
            height: "clamp(200px, 55vh, 460px)",
            border: "4px solid #989898",
          }}
        >
          {/* Salzi circular headshot */}
          <div
            className="relative rounded-full overflow-hidden"
            style={{ width: "clamp(120px, 16vw, 193px)", height: "clamp(120px, 16vw, 193px)" }}
          >
            <Image
              src={imgSalziHeadshot}
              alt="Salzi"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          {/* "Salzi" name badge */}
          <div
            className="absolute bottom-3 left-3 bg-white border border-[#d9d9d9] flex items-center justify-center px-7 py-1 rounded-full"
          >
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(12px, 1.7vw, 20px)",
                color: "#2c2c2c",
              }}
            >
              Salzi
            </span>
          </div>
        </div>

        {/* Animated ring + phone icon — overlaps bottom of card */}
        <div
          className="ring-pulse relative -mt-10 flex items-center justify-center"
          style={{ width: "clamp(80px, 11vw, 134px)", height: "clamp(80px, 11vw, 134px)" }}
        >
          {/* Gold glow ring */}
          <div className="absolute inset-0">
            <Image src={imgCallRingGlow} alt="" fill className="object-contain" unoptimized />
          </div>
          {/* Phone icon */}
          <div
            className="relative z-10"
            style={{ width: "56%", height: "56%" }}
          >
            <Image src={imgCallPhoneIcon} alt="Calling…" fill className="object-contain" unoptimized />
          </div>
        </div>

        {/* Connecting label */}
        <p
          className="mt-4 text-charcoal-stone"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(14px, 1.7vw, 20px)",
          }}
        >
          Connecting…
        </p>
      </div>
    </div>
  );
}
