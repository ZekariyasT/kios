import Link from "next/link";
import Image from "next/image";
import FigmaCroppedImage from "@/components/shared/FigmaCroppedImage";
import {
  imgSalziOptions,
  imgSalziShadowOptions,
  imgChatIcon,
  imgCallIcon,
  imgSettingsOptions,
} from "@/lib/onboarding-assets";

/**
 * Conversation Options screen — matches Figma node 12:374.
 *
 * Layout (centred):
 *   Left: Salzi (listening pose, flipped) with drop shadow.
 *   Right: Salzi's quote + "Chat" (salzach-blue) and "Call" (fortress-gold) buttons.
 *   Top-right: Settings icon.
 */
export default function ConversationOptionsPage() {
  return (
    <div className="relative w-full h-screen min-h-screen overflow-hidden bg-baroque-cream flex items-center justify-center">
      {/* Settings icon */}
      <button
        type="button"
        aria-label="Settings"
        className="absolute top-6 right-6 size-8 hover:opacity-70 transition-opacity"
      >
        <Image src={imgSettingsOptions} alt="Settings" fill unoptimized />
      </button>

      {/* ── Centred content ─────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row items-center gap-[clamp(24px,5vw,60px)] px-10 w-full max-w-[1100px]">
        {/* Salzi character */}
        <div
          className="relative shrink-0 flex-none"
          style={{ width: "clamp(180px, 36vw, 440px)", aspectRatio: "479 / 627" }}
        >
          {/* Shadow ellipse */}
          <div
            className="absolute"
            style={{ bottom: "0%", left: "17%", width: "67%", height: "3%" }}
          >
            <Image
              src={imgSalziShadowOptions}
              alt=""
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          {/* Mascot — Figma crop: left -75.89%, width 239.94% */}
          <FigmaCroppedImage
            src={imgSalziOptions}
            alt="Salzi the Salzburg guide"
            cropLeft={-75.89}
            cropWidth={239.94}
            flip="horizontal"
            priority
          />
        </div>

        {/* Quote + buttons */}
        <div className="flex flex-col gap-[clamp(24px,4vh,40px)] flex-1">
          <p
            className="text-charcoal-stone"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(18px, 2.7vw, 32px)",
              lineHeight: 1.5,
            }}
          >
            I&apos;ve been waiting to hear your story. This city has 1,200 years
            of history — and today, you became part of it.
          </p>

          {/* Choice buttons */}
          <div className="flex gap-[clamp(16px,2vw,21px)]">
            {/* Chat → survey */}
            <Link
              href="/survey/1"
              className="flex flex-col items-center gap-[clamp(12px,2vh,19px)] rounded-[11px] flex-1 max-w-[280px] hover:opacity-90 transition-opacity"
              style={{
                background: "#4a7fa5",
                padding: "clamp(14px, 2vh, 20px)",
              }}
            >
              <div className="relative shrink-0 size-[clamp(36px,5vw,60px)]">
                <Image src={imgChatIcon} alt="Chat icon" fill unoptimized />
              </div>
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(20px, 3vw, 36px)",
                  color: "#fdfdfd",
                  whiteSpace: "nowrap",
                }}
              >
                Chat
              </span>
            </Link>

            {/* Call → call connecting screen */}
            <Link
              href="/call"
              className="flex flex-col items-center gap-[clamp(12px,2vh,19px)] rounded-[11px] flex-1 max-w-[270px] border border-white-card hover:opacity-90 transition-opacity"
              style={{
                background: "#c9a84c",
                padding: "clamp(14px, 2vh, 20px)",
              }}
            >
              <div className="relative shrink-0 size-[clamp(36px,5vw,60px)]">
                <Image src={imgCallIcon} alt="Call icon" fill unoptimized />
              </div>
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(20px, 3vw, 36px)",
                  color: "#fdfdfd",
                  whiteSpace: "nowrap",
                }}
              >
                Call
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
