"use client";

import { useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { endingProcessingVideoSrc } from "@/lib/ending-assets";

/**
 * Ending 2 processing — Figma node 134:3656 (iPad Pro 11" - 57).
 * Plays the mascot video on a black screen, then advances to delivery.
 */
export default function EndingProcessingPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasNavigated = useRef(false);

  const goToSouvenir = useCallback(() => {
    if (hasNavigated.current) return;
    hasNavigated.current = true;
    router.push("/ending/souvenir");
  }, [router]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 1;

    video.play().catch(() => {
      video.muted = true;
      video.play().catch(goToSouvenir);
    });
  }, [goToSouvenir]);

  return (
    <div className="relative w-full h-screen min-h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-contain"
        src={endingProcessingVideoSrc}
        autoPlay
        playsInline
        onEnded={goToSouvenir}
        onError={goToSouvenir}
      />
    </div>
  );
}
