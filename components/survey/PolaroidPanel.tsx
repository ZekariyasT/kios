"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import FigmaCroppedImage from "@/components/shared/FigmaCroppedImage";
import { getCapturedPhoto, getMagicSouvenir, getSouvenirChoice } from "@/lib/flow-state";
import {
  imgPattern,
  imgPolaroidLines,
  imgCityStamp,
  imgMarnie,
  imgShadowSmall,
  imgShadowLarge,
  imgPin,
} from "@/lib/assets";

/**
 * Decorative right-hand Polaroid panel, shared across all survey screens.
 *
 * Reference: Figma node 102:5278 (Marnie card), 504.565 × 616.101 px.
 * All inner positions are expressed as percentages of the card dimensions.
 *
 * Card proportions:
 *   width  504.565
 *   height 616.101
 *   ratio  504.565 / 616.101 ≈ 0.819
 *
 * Key child positions (px → % of card):
 *   Photo area:      left=27.15 (5.38%), top=35.4 (5.74%), right=5.57%, h=449.6 (72.97%)
 *   Lines texture:   left=0.44 (0.09%), top=505.61 (82.07%), h=108.5 (17.6%)
 *   City stamp:      left=166.01+37.17=203.18 (40.27%), top=502.8 (81.6%), w=77.5 (15.37%), h=77.5
 *   "Salzburg":      left=166.01 (32.9%), top=502.8+60.07=562.87 (91.4%), w=151.86 (30.1%)
 *   Mascot group:    left=-11.48 (-2.27%), top=341.18 (55.37%), w=221.1 (43.83%), h=289.6 (47%)
 *   Pin:             right~-2%, top~-1%, w=38.59 (7.65%)
 */
export default function PolaroidPanel() {
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);
  const [magicPhoto, setMagicPhoto] = useState<string | null>(null);
  const [magicEmoji, setMagicEmoji] = useState<string | null>(null);

  useEffect(() => {
    const choice = getSouvenirChoice();
    if (choice === "photo") {
      setPhotoSrc(getCapturedPhoto());
    } else if (choice === "magic") {
      const magic = getMagicSouvenir();
      if (magic) {
        setMagicPhoto(magic.photo);
        setMagicEmoji(magic.emoji);
      }
    }
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-baroque-cream">
      {/* Tiled Salzburg icon pattern — 30% opacity */}
      <div className="absolute inset-0 opacity-30 pointer-events-none select-none">
        <Image
          src={imgPattern}
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Polaroid card — centred, fills panel */}
      <div className="absolute inset-0 flex items-center justify-center px-6 py-8 md:py-10">
        <div
          className="relative w-full max-w-[505px]"
          style={{ aspectRatio: "504.565 / 616.101" }}
        >
          {/* ── Polaroid card body ───────────────────────────────── */}
          <div
            className="absolute inset-0 rounded-[9.689px] overflow-hidden border border-black/10"
            style={{ boxShadow: "0px 3.876px 19.379px 0px rgba(0,0,0,0.05)" }}
          >
            {/* White backing */}
            <div
              className="absolute inset-0 bg-white-card"
              style={{ boxShadow: "0px 0px 21.245px 0px rgba(0,0,0,0.1)" }}
            />

            {/* Photo area */}
            <div
              className="absolute overflow-hidden rounded-sm bg-black"
              style={{ top: "5.74%", left: "5.38%", right: "5.57%", bottom: "21.29%" }}
            >
              {photoSrc ? (
                <Image src={photoSrc} alt="Your captured photo" fill className="object-cover" unoptimized />
              ) : magicPhoto ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={magicPhoto} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  {magicEmoji ? (
                    <span
                      className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
                      style={{
                        fontSize: "clamp(48px, 12vw, 96px)",
                        filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.45))",
                      }}
                      aria-hidden
                    >
                      {magicEmoji}
                    </span>
                  ) : null}
                </>
              ) : null}
            </div>

            {/* Ruled lines texture — bottom strip */}
            <div
              className="absolute overflow-hidden"
              style={{ top: "82.07%", left: "-2.82%", right: "-2.82%", bottom: 0 }}
            >
              <Image
                src={imgPolaroidLines}
                alt=""
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* City stamp badge */}
            <div
              className="absolute"
              style={{
                left: "40.27%",
                top: "81.6%",
                width: "15.37%",
                aspectRatio: "1/1",
              }}
            >
              <Image
                src={imgCityStamp}
                alt="Salzburg city stamp"
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* "Salzburg" handwritten caption */}
            <div
              className="absolute flex items-center justify-start"
              style={{
                left: "32.9%",
                top: "91.4%",
                width: "30.1%",
                height: "7.05%",
              }}
            >
              <span
                className="opacity-70 text-black select-none"
                style={{
                  fontFamily: "Caveat, cursive",
                  fontSize: "clamp(16px, 4.67vw, 28.74px)",
                  fontWeight: 700,
                  transform: "rotate(1.29deg)",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                }}
              >
                Salzburg
              </span>
            </div>

            {/* Marnie mascot — extends into lower portion of photo */}
            <div
              className="absolute overflow-visible"
              style={{
                left: "-2.27%",
                top: "55.37%",
                width: "43.83%",
                height: "47%",
              }}
            >
              {/* Large shadow ellipse */}
              <div
                className="absolute"
                style={{ bottom: "0", left: "0.93%", width: "96.37%", height: "6.64%" }}
              >
                <Image
                  src={imgShadowLarge}
                  alt=""
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Small shadow ellipse */}
              <div
                className="absolute"
                style={{ bottom: "1.46%", left: "5.32%", width: "68.66%", height: "2.91%" }}
              >
                <Image
                  src={imgShadowSmall}
                  alt=""
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Mascot — Figma crop: left -75.89%, width 239.94% */}
              <FigmaCroppedImage
                src={imgMarnie}
                alt="Marnie the Salzburg mascot"
                cropLeft={-75.89}
                cropWidth={239.94}
                flip="polaroid"
              />
            </div>
          </div>

          {/* Decorative pin — sits above-right of the Polaroid */}
          <div
            className="absolute"
            style={{
              top: "-1%",
              right: "-1%",
              width: "7.65%",
              aspectRatio: "38.593 / 47.984",
              transform: "rotate(25.84deg)",
              transformOrigin: "center center",
            }}
          >
            <Image src={imgPin} alt="" fill className="object-contain" unoptimized />
          </div>
        </div>
      </div>
    </div>
  );
}
