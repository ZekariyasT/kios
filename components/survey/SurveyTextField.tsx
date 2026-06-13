"use client";

import { useState } from "react";

interface SurveyTextFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

/**
 * Open-ended text area.
 * Matches Figma node 102:5961 — bg #FDFDFD, border #D6D6D6, radius 15px, p-20px.
 * Placeholder font: Poppins 20px, opacity 50%.
 */
export default function SurveyTextField({
  placeholder,
  value,
  onChange,
}: SurveyTextFieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholder={placeholder}
      rows={4}
      className={[
        "w-full resize-none bg-white-card border rounded-[15px] p-5",
        "text-charcoal-stone text-[20px] leading-normal transition-colors duration-150",
        "outline-none",
        focused ? "border-charcoal-stone/60" : "border-grey-border",
      ].join(" ")}
      style={
        {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          minHeight: "122.58px",
          "--tw-placeholder-color": "rgba(0,0,0,0.5)",
        } as React.CSSProperties
      }
    />
  );
}
