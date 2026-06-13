"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import FigmaCroppedImage from "@/components/shared/FigmaCroppedImage";
import { setSouvenirChoice } from "@/lib/flow-state";
import {
  imgSalziSouvenirPitch,
  imgShadowSouvenirPitch,
  imgWandIcon,
  imgSettingsSouvenirPitch,
} from "@/lib/onboarding-assets";

/**
 * Souvenir pitch — Figma node 131:3337 (iPad Pro 11" - 54).
 * Left: pitch copy. Right: Salzi + "Let the magic decide" / "Use my photo".
 */
export default function OnboardingSouvenirPage() {
  const router = useRouter();

  const handleMagic = () => {
    setSouvenirChoice("magic");
    router.push("/onboarding/options");
  };

  const handlePhoto = () => {
    setSouvenirChoice("photo");
    router.push("/onboarding/capture");
  };

  return (
    <div className="relative w-full h-screen min-h-screen overflow-hidden bg-baroque-cream flex">
      <button
        type="button"
        aria-label="Settings"
        className="absolute top-6 right-6 size-8 hover:opacity-70 transition-opacity z-10"
      >
        <Image src={imgSettingsSouvenirPitch} alt="Settings" fill unoptimized />
      </button>

      <div className="flex w-1/2 items-center px-[clamp(24px,2.2vw,26px)]">
        <h1
          className="text-charcoal-stone"
          style={{
            fontFamily: "Sniglet, cursive",
            fontWeight: 400,
            fontSize: "clamp(28px, 4vw, 48px)",
            lineHeight: 1.25,
            maxWidth: "531px",
          }}
        >
          Answer a few questions and unlock your magical Salzburg souvenir!
        </h1>
      </div>

      <div
        className="relative flex w-1/2 flex-col items-center justify-center px-8"
        style={{ background: "#4a7fa5" }}
      >
        <p
          className="text-white-card text-center mb-6"
          style={{
            fontFamily: "Sniglet, cursive",
            fontWeight: 400,
            fontSize: "clamp(28px, 4vw, 48px)",
            lineHeight: 1.25,
            maxWidth: "459px",
          }}
        >
          Want to be the star of your souvenir
        </p>

        <div
          className="relative shrink-0 mb-8"
          style={{ width: "clamp(220px, 28vw, 336px)", aspectRatio: "336 / 440" }}
        >
          <FigmaCroppedImage
            src={imgSalziSouvenirPitch}
            alt="Salzi"
            cropLeft={-75.89}
            cropWidth={239.94}
            flip="horizontal"
          />
          <div
            className="absolute"
            style={{ bottom: "0%", left: "10%", width: "68%", height: "2.9%" }}
          >
            <Image src={imgShadowSouvenirPitch} alt="" fill className="object-contain" unoptimized />
          </div>
        </div>

        <div className="flex w-full max-w-[543px] gap-3">
          <button
            type="button"
            onClick={handleMagic}
            className="flex flex-1 flex-col items-center justify-center gap-1.5 rounded-[14px] border border-white-card hover:bg-white-card/10 transition-colors"
            style={{ padding: "clamp(8px, 1vh, 12px) 11px", minHeight: "81px" }}
          >
            <div className="relative size-[33px] shrink-0">
              <Image src={imgWandIcon} alt="" fill unoptimized />
            </div>
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.9vw, 22px)",
                color: "#fdfdfd",
                whiteSpace: "nowrap",
              }}
            >
              Let the magic decide
            </span>
          </button>

          <button
            type="button"
            onClick={handlePhoto}
            className="flex flex-1 flex-col items-center justify-center gap-1.5 rounded-[14px] hover:opacity-90 transition-opacity"
            style={{
              background: "#c9a84c",
              padding: "clamp(8px, 1vh, 12px) 11px",
              minHeight: "81px",
            }}
          >
            <div className="relative size-[33px] shrink-0">
              <Image src={imgWandIcon} alt="" fill unoptimized />
            </div>
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.9vw, 22px)",
                color: "#fdfdfd",
                whiteSpace: "nowrap",
              }}
            >
              Use my photo
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
