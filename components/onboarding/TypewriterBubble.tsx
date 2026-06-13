interface TypewriterBubbleProps {
  text: string;
  /** Number of typewriter reveal lines (2 or 3 per Figma Salzi-text variants) */
  lines: number;
  /** Bubble min-height in px at design reference size */
  minHeight: number;
  /** Re-mount covers when slide changes */
  animationKey: number;
}

/**
 * Dark speech bubble with line-by-line typewriter reveal.
 * Matches Figma Salzi-text component covers that shrink from right → left.
 */
export default function TypewriterBubble({
  text,
  lines,
  minHeight,
  animationKey,
}: TypewriterBubbleProps) {
  const lineHeight = 100 / lines;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "#2c2c2c",
        borderRadius: "20px 20px 20px 0px",
        width: "100%",
        minHeight: `clamp(${Math.round(minHeight * 0.65)}px, 22vh, ${minHeight}px)`,
        padding: "clamp(16px, 3.8vh, 32px) clamp(24px, 3.5vw, 40px)",
      }}
    >
      <p
        className="text-white relative z-10"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(18px, 3.3vw, 40px)",
          lineHeight: 1.4,
        }}
      >
        {text}
      </p>

      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={`${animationKey}-${i}`}
          className="absolute left-0 right-0"
          style={{
            top: `${i * lineHeight}%`,
            height: `${lineHeight}%`,
            background: "#2c2c2c",
            zIndex: 20,
            transformOrigin: "right",
            width: "100%",
            animation: `type-reveal 0.6s steps(20, end) ${0.3 + i * 0.8}s forwards`,
          }}
        />
      ))}
    </div>
  );
}
