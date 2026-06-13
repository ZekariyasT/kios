"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { unlockAudioForPlayback } from "@/lib/audio-unlock";
import { SurveyStep } from "@/lib/survey-data";
import { imgSettings } from "@/lib/assets";
import PillOption from "./PillOption";
import SurveyTextField from "./SurveyTextField";

interface ContentPanelProps {
  stepData: SurveyStep;
  totalSteps: number;
}

/**
 * Left content panel matching Figma node 102:5945.
 * Contains: nav bar (back + settings), step counter, question, pills, text field, next CTA.
 */
export default function ContentPanel({ stepData, totalSteps }: ContentPanelProps) {
  const router = useRouter();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [textValue, setTextValue] = useState("");

  const handleToggle = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleBack = () => {
    if (stepData.step > 1) {
      router.push(`/survey/${stepData.step - 1}`);
    }
  };

  const handleNext = async () => {
    if (stepData.step < totalSteps) {
      router.push(`/survey/${stepData.step + 1}`);
    } else {
      await unlockAudioForPlayback();
      router.push("/ending");
    }
  };

  const canProceed = selectedIds.size > 0 || textValue.trim().length > 0;

  return (
    <div className="flex flex-col h-full bg-baroque-cream">
      {/* ── Navigation bar ────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-[40px] pt-[24px] pb-0 shrink-0">
        {/* Back chevron */}
        <button
          type="button"
          onClick={handleBack}
          aria-label="Go back"
          className={[
            "flex items-center justify-center size-6 transition-opacity",
            stepData.step === 1 ? "opacity-30 cursor-default" : "opacity-100 hover:opacity-70",
          ].join(" ")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M15.5 18L9.5 12L15.5 6"
              stroke="#2C2C2C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Step counter */}
        <span
          className="text-charcoal-stone/60 text-[14px] select-none"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
        >
          {stepData.step} / {totalSteps}
        </span>

        {/* Settings icon */}
        <button
          type="button"
          aria-label="Settings"
          className="flex items-center justify-center size-8 hover:opacity-70 transition-opacity"
        >
          <Image
            src={imgSettings}
            alt="Settings"
            width={32}
            height={32}
            unoptimized
          />
        </button>
      </div>

      {/* ── Main content ──────────────────────────────────────────── */}
      <div className="flex flex-col gap-[29px] px-[40px] pt-[24px] pb-[40px] flex-1 overflow-y-auto">
        {/* Question heading */}
        <h1
          className="text-[#1e1e1e] text-[32px] leading-[1.5] tracking-[0.03em]"
          style={{ fontFamily: "Sniglet, cursive", fontWeight: 400 }}
        >
          {stepData.question}
        </h1>

        {/* Options + text field */}
        <div className="flex flex-col gap-4">
          {/* Pills group with dashed bottom border */}
          <div className="flex flex-col gap-[10px] pb-[10px] border-b border-dashed border-charcoal-stone">
            {stepData.options.map((option, index) => (
              <PillOption
                key={option.id}
                option={option}
                index={index}
                selected={selectedIds.has(option.id)}
                onToggle={handleToggle}
              />
            ))}
          </div>

          {/* Free-text field */}
          <SurveyTextField
            placeholder={stepData.textFieldPlaceholder}
            value={textValue}
            onChange={setTextValue}
          />
        </div>

        {/* Spacer pushes CTA to bottom on short screens */}
        <div className="flex-1" />

        {/* Next / Submit CTA */}
        <button
          type="button"
          onClick={handleNext}
          disabled={!canProceed}
          className={[
            "w-full py-4 rounded-[14px] text-[18px] font-medium transition-all duration-150",
            canProceed
              ? "bg-charcoal-stone text-white-card hover:bg-charcoal-stone/90"
              : "bg-charcoal-stone/20 text-charcoal-stone/40 cursor-not-allowed",
          ].join(" ")}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {stepData.step < totalSteps ? "Next →" : "Submit"}
        </button>
      </div>
    </div>
  );
}
