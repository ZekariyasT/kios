import Image from "next/image";
import FigmaCroppedImage from "@/components/shared/FigmaCroppedImage";
import {
  imgEndingSouvenirPattern,
  imgEndingSouvenirLines,
  imgEndingSouvenirCityStamp,
  imgEndingSouvenirMascot,
  imgEndingSouvenirShadowSmall,
  imgEndingSouvenirShadowLarge,
  imgEndingSouvenirPin,
} from "@/lib/ending-assets";

interface EndingSouvenirPolaroidProps {
  /** User-captured photo shown inside the polaroid when they chose "Use my photo". */
  photoSrc?: string | null;
}

/** Souvenir Polaroid — Figma node 134:3468 (Ending 2, frame 56). */
export default function EndingSouvenirPolaroid({ photoSrc }: EndingSouvenirPolaroidProps) {
  return (
    <div
      className="relative w-full max-w-[572px]"
      style={{ aspectRatio: "572.201 / 698.688" }}
    >
      <div
        className="absolute inset-0 rounded-[10.988px] overflow-hidden border border-black/10"
        style={{ boxShadow: "0px 4.395px 21.977px 0px rgba(0,0,0,0.05)" }}
      >
        <div
          className="absolute inset-0 bg-white-card"
          style={{ boxShadow: "0px 0px 24.093px 0px rgba(0,0,0,0.1)" }}
        />
        <div className="absolute inset-0 opacity-30 overflow-hidden">
          <Image src={imgEndingSouvenirPattern} alt="" fill className="object-cover" unoptimized />
        </div>
        <div
          className="absolute overflow-hidden rounded-sm bg-black"
          style={{ top: "5.74%", left: "5.38%", right: "5.57%", bottom: "21.29%" }}
        >
          {photoSrc ? (
            <Image src={photoSrc} alt="Your souvenir photo" fill className="object-cover" unoptimized />
          ) : null}
        </div>
        <div
          className="absolute overflow-hidden"
          style={{ top: "82.07%", left: "-2.82%", right: "-2.82%", bottom: 0 }}
        >
          <Image src={imgEndingSouvenirLines} alt="" fill className="object-cover" unoptimized />
        </div>
        <div
          className="absolute"
          style={{ left: "40.27%", top: "81.6%", width: "15.37%", aspectRatio: "1/1" }}
        >
          <Image src={imgEndingSouvenirCityStamp} alt="Salzburg city stamp" fill className="object-contain" unoptimized />
        </div>
        <div
          className="absolute flex items-center justify-center"
          style={{ left: "32.7%", top: "81.5%", width: "30%", height: "7%" }}
        >
          <span
            className="opacity-70 text-black select-none"
            style={{
              fontFamily: "var(--font-figma-hand)",
              fontSize: "clamp(16px, 2.7vw, 32.6px)",
              fontWeight: 700,
              transform: "rotate(1.29deg)",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            Salzburg
          </span>
        </div>
        <div
          className="absolute overflow-visible"
          style={{ left: "-2.5%", top: "55.3%", width: "43.8%", height: "47%" }}
        >
          <div className="absolute" style={{ bottom: "0", left: "4.9%", width: "67.7%", height: "2.9%" }}>
            <Image src={imgEndingSouvenirShadowSmall} alt="" fill className="object-contain" unoptimized />
          </div>
          <div className="absolute" style={{ bottom: "0.3%", left: "2.1%", width: "77.8%", height: "6.6%" }}>
            <Image src={imgEndingSouvenirShadowLarge} alt="" fill className="object-contain" unoptimized />
          </div>
          <FigmaCroppedImage
            src={imgEndingSouvenirMascot}
            alt="Salzi mascot"
            cropLeft={-75.89}
            cropWidth={239.94}
            flip="polaroid"
          />
        </div>
      </div>
      <div
        className="absolute"
        style={{
          top: "-1%",
          right: "8%",
          width: "4.4%",
          aspectRatio: "25.273 / 48.221",
          transform: "rotate(25.84deg)",
        }}
      >
        <Image src={imgEndingSouvenirPin} alt="" fill className="object-contain" unoptimized />
      </div>
    </div>
  );
}
