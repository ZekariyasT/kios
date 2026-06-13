"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { imgEndingQrCode, imgEndingSettings } from "@/lib/ending-assets";
import EndingSouvenirPolaroid from "@/components/ending/EndingSouvenirPolaroid";
import { clearFlowSession, getCapturedPhoto, getSouvenirChoice } from "@/lib/flow-state";

/**
 * Ending 2 delivery — Figma node 134:3468 (iPad Pro 11" - 56).
 * QR code left, polaroid right (with user photo when captured), "Start over" CTA.
 */
export default function EndingSouvenirPage() {
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);

  useEffect(() => {
    if (getSouvenirChoice() === "photo") {
      setPhotoSrc(getCapturedPhoto());
    }
  }, []);

  return (
    <div className="relative w-full h-screen min-h-screen overflow-hidden bg-baroque-cream flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-10">
      <button
        type="button"
        aria-label="Settings"
        className="absolute top-6 right-6 size-8 hover:opacity-70 transition-opacity z-10"
      >
        <Image src={imgEndingSettings} alt="Settings" fill unoptimized />
      </button>

      <div className="flex flex-col items-center gap-[26px] w-full max-w-[501px] shrink-0">
        <div
          className="w-full flex flex-col items-center gap-[30px] rounded-[9px] p-10"
          style={{ background: "#f5edd6", minHeight: "clamp(400px, 67vh, 559px)" }}
        >
          <p
            className="text-center text-salzach-blue"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(22px, 2.7vw, 32px)",
              lineHeight: 1.4,
              maxWidth: "357px",
            }}
          >
            Scan and get your magical sourvenir
          </p>

          <div
            className="relative shrink-0"
            style={{ width: "clamp(200px, 31vw, 369px)", height: "clamp(200px, 31vw, 369px)" }}
          >
            <Image src={imgEndingQrCode} alt="QR code to download your souvenir" fill unoptimized />
          </div>
        </div>

        <Link
          href="/onboarding"
          onClick={clearFlowSession}
          className="w-full flex items-center justify-center rounded-[14px] hover:opacity-90 transition-opacity"
          style={{
            background: "#c9a84c",
            padding: "clamp(8px, 1.5vh, 12px) 20px",
            minHeight: "76px",
          }}
        >
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(24px, 3.3vw, 40px)",
              color: "#fdfdfd",
            }}
          >
            Start over
          </span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center w-full max-w-[600px]">
        <EndingSouvenirPolaroid photoSrc={photoSrc} />
      </div>
    </div>
  );
}
