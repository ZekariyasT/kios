import PolaroidPanel from "@/components/survey/PolaroidPanel";

/**
 * Survey section layout — split-panel.
 *
 * Desktop (≥ md): left content panel and right Polaroid panel side-by-side at 50/50.
 * Mobile (< md):  Polaroid banner at top, content below.
 *
 * Reference: iPad Pro 11" at 1194×834px with both panels at ~597px.
 */
export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row h-full min-h-screen bg-baroque-cream">
      {/* Left: question content */}
      <div className="flex flex-col w-full md:w-1/2 md:h-screen md:overflow-y-auto order-2 md:order-1">
        {children}
      </div>

      {/* Right: Polaroid decorative panel */}
      <div
        className="w-full md:w-1/2 md:h-screen shrink-0 order-1 md:order-2"
        style={{ minHeight: "220px" }}
      >
        <PolaroidPanel />
      </div>
    </div>
  );
}
