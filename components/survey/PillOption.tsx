"use client";

import Image from "next/image";
import { SurveyOption } from "@/lib/survey-data";

interface PillOptionProps {
  option: SurveyOption;
  /** 0-based index — Figma uses 16px for the first pill, 20px for the rest */
  index: number;
  selected: boolean;
  onToggle: (id: string) => void;
}

/**
 * Selectable pill button.
 * Matches Figma node 102:5453 — bg #FDFDFD, border #D6D6D6, radius 14px.
 * Font: Inter Medium 16px (first pill) or 20px (subsequent pills).
 */
export default function PillOption({ option, index, selected, onToggle }: PillOptionProps) {
  const fontSize = index === 0 ? "16px" : "20px";
  const tracking = index === 0 ? "-0.176px" : "-0.22px";

  return (
    <button
      type="button"
      onClick={() => onToggle(option.id)}
      className={[
        "flex w-full items-center gap-[4px] px-[10px] py-[12px] rounded-[14px]",
        "border transition-colors duration-150 text-left",
        selected
          ? "border-charcoal-stone bg-white-card ring-1 ring-charcoal-stone"
          : "border-grey-border bg-white-card hover:border-charcoal-stone/40",
      ].join(" ")}
    >
      {/* Icon */}
      <div className="relative shrink-0 size-5">
        <Image
          src={option.iconSrc}
          alt={option.iconAlt}
          fill
          className="object-contain"
          unoptimized
        />
      </div>

      {/* Label */}
      <span
        className="text-charcoal-stone leading-[1.5] flex-1 min-w-0"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize,
          letterSpacing: tracking,
        }}
      >
        {option.label}
      </span>
    </button>
  );
}
