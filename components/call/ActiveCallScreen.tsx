"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { unlockAudioForPlayback } from "@/lib/audio-unlock";
import { CallStep } from "@/lib/call-data";
import {
  imgSalziHeadshot,
  imgSettingsCall,
  imgUserAvatar,
  imgHangupIcon,
} from "@/lib/call-assets";

interface ActiveCallScreenProps {
  stepData: CallStep;
  totalSteps: number;
}

/**
 * Active call screen — matches Figma node 24:3221 (frame 35) and siblings.
 *
 * Layout (1194×834 reference):
 *   Top:    back arrow (left) + settings (right)                  y≈24
 *   Bar:    question pill — white card, rounded-[43px], centred   y≈120
 *   Main:   Salzi tile (grey border) + User tile (gold border)    y≈176–716
 *   Bottom: hang-up circle + Previous pill + Next pill            y≈748
 */
export default function ActiveCallScreen({
  stepData,
  totalSteps,
}: ActiveCallScreenProps) {
  const router = useRouter();
  const isFirst = stepData.step === 1;
  const isLast = stepData.step === totalSteps;

  const handleHangUp = () => router.push("/onboarding/options");
  const handlePrev = () => router.push(`/call/${stepData.step - 1}`);
  const handleNext = async () => {
    if (isLast) {
      await unlockAudioForPlayback();
      router.push("/ending");
    } else {
      router.push(`/call/${stepData.step + 1}`);
    }
  };

  return (
    <div className="relative w-full h-screen min-h-screen overflow-hidden bg-baroque-cream flex flex-col">
      {/* ── Top bar ───────────────────────────────────────────────── */}
      <div className="relative flex items-center justify-between px-4 pt-6 pb-2 shrink-0">
        {/* Back arrow */}
        <button
          type="button"
          onClick={handleHangUp}
          aria-label="Leave call"
          className="flex items-center justify-center size-6 hover:opacity-70 transition-opacity"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18l-6-6 6-6"
              stroke="#2c2c2c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Settings */}
        <button
          type="button"
          aria-label="Settings"
          className="relative size-8 hover:opacity-70 transition-opacity"
        >
          <Image src={imgSettingsCall} alt="Settings" fill unoptimized />
        </button>
      </div>

      {/* ── Question banner ───────────────────────────────────────── */}
      <div className="px-[clamp(16px,3.9vw,46.5px)] pb-3 shrink-0">
        <div
          className="w-full flex items-center justify-center bg-white-card rounded-[43px]"
          style={{ padding: "clamp(6px, 1.2vh, 10px) clamp(12px, 2vw, 20px)" }}
        >
          <p
            className="text-center text-black"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 2vw, 24px)",
              lineHeight: 1.4,
            }}
          >
            {stepData.question}
          </p>
        </div>
      </div>

      {/* ── Video tiles ───────────────────────────────────────────── */}
      <div
        className="flex-1 flex items-center justify-center gap-[clamp(16px,3.4vw,40px)] px-[clamp(16px,3.4vw,40px)] overflow-hidden"
      >
        {/* Salzi tile — grey border */}
        <div
          className="relative flex-1 h-full max-h-[clamp(220px,55vh,460px)] max-w-[526px] bg-white-card rounded-[25px] flex items-center justify-center overflow-hidden"
          style={{ border: "4px solid #989898", minWidth: 0 }}
        >
          {/* Salzi headshot centred as "video feed" */}
          <div
            className="relative rounded-full overflow-hidden"
            style={{ width: "clamp(100px, 14vw, 193px)", height: "clamp(100px, 14vw, 193px)" }}
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

          {/* Name badge */}
          <NameBadge label="Salzi" />
        </div>

        {/* User tile — gold border + glow */}
        <div
          className="relative flex-1 h-full max-h-[clamp(220px,55vh,460px)] max-w-[526px] bg-white-card rounded-[25px] flex items-center justify-center overflow-hidden"
          style={{
            border: "4px solid #c9a84c",
            boxShadow: "0px 0px 25.5px 3px #c9a84c",
            minWidth: 0,
          }}
        >
          {/* User avatar */}
          <div
            className="relative overflow-hidden"
            style={{ width: "clamp(100px, 14vw, 200px)", height: "clamp(100px, 14vw, 200px)" }}
          >
            <Image src={imgUserAvatar} alt="You" fill className="object-contain" unoptimized />
          </div>

          {/* Name badge */}
          <NameBadge label="You" />
        </div>
      </div>

      {/* ── Bottom controls ───────────────────────────────────────── */}
      <div className="flex items-end justify-center gap-[clamp(12px,1.7vw,20px)] px-4 pb-6 pt-4 shrink-0">
        {/* Hang-up button */}
        <button
          type="button"
          onClick={handleHangUp}
          aria-label="Hang up"
          className="relative flex items-center justify-center rounded-full border hover:opacity-80 transition-opacity shrink-0"
          style={{
            width: "clamp(48px,5.6vw,67px)",
            height: "clamp(48px,5vw,59.5px)",
            borderColor: "#ad1e18",
            borderWidth: "clamp(1px,0.13vw,1.5px)",
            padding: "clamp(12px,3.8vw,45px) clamp(20px,3.8vw,45px)",
          }}
        >
          <div
            className="relative shrink-0"
            style={{ width: "clamp(24px,3.4vw,40px)", height: "clamp(9px,1.25vw,14.8px)" }}
          >
            <Image src={imgHangupIcon} alt="Hang up" fill unoptimized />
          </div>
        </button>

        {/* Previous */}
        {!isFirst && (
          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center justify-center rounded-full opacity-50 hover:opacity-80 transition-opacity"
            style={{
              width: "clamp(100px,13.4vw,160px)",
              padding: "clamp(5px,0.75vh,6.25px) 12px",
              border: "1.563px solid #2c2c2c",
            }}
          >
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px,2.6vw,31.25px)",
                color: "#2c2c2c",
                whiteSpace: "nowrap",
              }}
            >
              Previous
            </span>
          </button>
        )}

        {/* Next / Finish */}
        <button
          type="button"
          onClick={handleNext}
          className="flex items-center justify-center rounded-full hover:opacity-90 transition-opacity"
          style={{
            background: "#c9a84c",
            width: "clamp(100px,13.4vw,160px)",
            padding: "clamp(5px,0.75vh,6.25px) 12px",
          }}
        >
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px,2.6vw,31.25px)",
              color: "#fdfdfd",
              whiteSpace: "nowrap",
            }}
          >
            {isLast ? "Finish" : "Next"}
          </span>
        </button>
      </div>
    </div>
  );
}

/** Small pill badge at bottom-left of a video tile */
function NameBadge({ label }: { label: string }) {
  return (
    <div className="absolute bottom-3 left-3 bg-white border border-[#d9d9d9] flex items-center justify-center px-7 py-1 rounded-full">
      <span
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(12px,1.7vw,20px)",
          color: "#2c2c2c",
        }}
      >
        {label}
      </span>
    </div>
  );
}
