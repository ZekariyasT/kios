"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FigmaCroppedImage from "@/components/shared/FigmaCroppedImage";
import TypewriterBubble from "@/components/onboarding/TypewriterBubble";
import {
  ONBOARDING_SLIDES,
  slideHoldDuration,
} from "@/lib/onboarding-slides";
import {
  imgCityscapeBackground,
  imgTranslateG1,
  imgTranslateG2,
  imgTranslateG3,
  imgTranslateG4,
  imgTranslateG5,
  imgTranslateG6,
} from "@/lib/onboarding-assets";

/**
 * Onboarding Welcome — Figma Onboarding section (frames 9, 10, 11).
 *
 * Auto-cycles three slides:
 *   1. Waving Salzi + greeting (2-line typewriter)
 *   2. Waving Salzi + story prompt (3-line typewriter)
 *   3. Camera Salzi + souvenir pitch (3-line typewriter)
 */
export default function OnboardingWelcomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = ONBOARDING_SLIDES[activeSlide];

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSlide((current) => (current + 1) % ONBOARDING_SLIDES.length);
    }, slideHoldDuration(slide.lines));

    return () => clearTimeout(timer);
  }, [activeSlide, slide.lines]);

  return (
    <div className="relative w-full h-screen min-h-screen overflow-hidden bg-baroque-cream">
      {/* Full-bleed cityscape */}
      <div className="absolute inset-0">
        <Image
          src={imgCityscapeBackground}
          alt="Salzburg cityscape"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
      </div>

      {/* Golden gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(-90deg, rgba(143,138,125,0) 4.5%, rgb(201,168,76) 47.9%)",
        }}
      />

      {/* Mascot — fades between waving and camera poses */}
      <div
        key={`mascot-${slide.id}`}
        className="absolute onboarding-slide-enter"
        style={slide.mascotStyle}
      >
        <FigmaCroppedImage
          key={slide.id}
          src={slide.mascotSrc}
          alt="Salzi — your Salzburg guide"
          cropLeft={slide.cropLeft}
          cropWidth={slide.cropWidth}
          flip={slide.flip}
          priority
        />
        <div className="absolute" style={slide.shadowStyle}>
          <Image
            src={slide.shadowSrc}
            alt=""
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* Speech bubble + CTA */}
      <div
        className="absolute"
        style={{ left: "47.3%", top: "3.3%", right: "2.5%" }}
      >
        <div key={`bubble-${slide.id}`} className="onboarding-slide-enter">
          <TypewriterBubble
            animationKey={slide.id}
            text={slide.text}
            lines={slide.lines}
            minHeight={slide.bubbleHeight}
          />
        </div>

        <div className="flex justify-end mt-[clamp(20px,4vh,40px)]">
          <Link
            href="/onboarding/consent"
            className="inline-flex items-center justify-center bg-white-card rounded-[14px] hover:bg-white-card/90 transition-colors"
            style={{
              padding: "clamp(12px, 2.4vh, 20px) clamp(28px, 3.7vw, 44px)",
            }}
          >
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(20px, 3.3vw, 40px)",
                color: "#4a7fa5",
                whiteSpace: "nowrap",
              }}
            >
              Start Interview
            </span>
          </Link>
        </div>
      </div>

      {/* Translate icon */}
      <div
        className="absolute overflow-hidden"
        style={{ top: "3%", right: "2.7%", width: "2.68%", aspectRatio: "1/1" }}
        aria-label="Translate"
      >
        <div className="absolute inset-0">
          <div className="absolute" style={{ inset: "65.99% 24.72% 25.85% 67.12%" }}>
            <Image src={imgTranslateG1} alt="" fill unoptimized />
          </div>
          <div className="absolute" style={{ inset: "30.68% 0 0 42.4%" }}>
            <Image src={imgTranslateG2} alt="" fill unoptimized />
          </div>
          <div className="absolute" style={{ inset: "24.68% 68.42% 68.01% 26.03%" }}>
            <Image src={imgTranslateG3} alt="" fill unoptimized />
          </div>
          <div className="absolute" style={{ inset: "0 42.4% 30.68% 0" }}>
            <Image src={imgTranslateG4} alt="" fill unoptimized />
          </div>
          <div className="absolute" style={{ inset: "0 0.06% 64.74% 64.68%" }}>
            <Image src={imgTranslateG5} alt="" fill unoptimized />
          </div>
          <div className="absolute" style={{ inset: "64.68% 64.74% 0.06% 0" }}>
            <Image src={imgTranslateG6} alt="" fill unoptimized />
          </div>
        </div>
      </div>
    </div>
  );
}
