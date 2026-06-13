"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FigmaCroppedImage from "@/components/shared/FigmaCroppedImage";
import { setCapturedPhoto } from "@/lib/flow-state";
import {
  imgSalziOnboardingCapture,
  imgOnboardingShutter,
  imgOnboardingCaptureShadow,
  imgSettingsOnboardingCapture,
} from "@/lib/onboarding-assets";

const TIMER_OPTIONS = [3, 5, 10] as const;
type TimerOption = (typeof TIMER_OPTIONS)[number];

/**
 * Onboarding photo capture — Figma node 134:3451 (iPad Pro 11" - 55).
 * Captures from webcam, stores photo for the ending souvenir polaroid.
 */
export default function OnboardingCapturePage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [selectedTimer, setSelectedTimer] = useState<TimerOption>(5);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);

  useEffect(() => {
    let active = true;

    navigator.mediaDevices
      ?.getUserMedia({ video: { facingMode: "user" }, audio: false })
      .then((stream) => {
        if (!active) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setCameraReady(true);
      })
      .catch(() => setCameraReady(false));

    return () => {
      active = false;
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const savePhotoAndContinue = useCallback(() => {
    const video = videoRef.current;
    if (video && video.videoWidth > 0) {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        setCapturedPhoto(canvas.toDataURL("image/jpeg", 0.92));
      }
    }
    streamRef.current?.getTracks().forEach((track) => track.stop());
    router.push("/onboarding/options");
  }, [router]);

  useEffect(() => {
    if (countdown === null) return;
    if (countdown <= 0) {
      savePhotoAndContinue();
      return;
    }
    const id = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(id);
  }, [countdown, savePhotoAndContinue]);

  const handleCapture = useCallback(() => {
    if (isCapturing) return;
    setIsCapturing(true);
    setCountdown(selectedTimer);
  }, [isCapturing, selectedTimer]);

  return (
    <div className="relative w-full h-screen min-h-screen overflow-hidden bg-baroque-cream flex flex-col items-center justify-center">
      <button
        type="button"
        aria-label="Settings"
        className="absolute top-6 right-6 size-8 hover:opacity-70 transition-opacity z-10"
      >
        <Image src={imgSettingsOnboardingCapture} alt="Settings" fill unoptimized />
      </button>

      <div
        className="relative mb-8 overflow-hidden bg-black"
        style={{
          width: "clamp(320px, 52vw, 620px)",
          aspectRatio: "620 / 480",
          borderRadius: "26.88px",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover scale-x-[-1]"
        />
        {!cameraReady && (
          <div className="absolute inset-0 flex items-center justify-center text-white-card/70 text-sm">
            Camera unavailable
          </div>
        )}
        {countdown !== null && countdown > 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span
              className="text-white-card"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 700 }}
            >
              {countdown}
            </span>
          </div>
        )}
      </div>

      <div className="flex gap-3 mb-8">
        {TIMER_OPTIONS.map((seconds) => (
          <button
            key={seconds}
            type="button"
            onClick={() => setSelectedTimer(seconds)}
            className="rounded-full px-5 py-2 transition-colors"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(14px, 1.8vw, 20px)",
              background: selectedTimer === seconds ? "#4a7fa5" : "#e8e0cc",
              color: selectedTimer === seconds ? "#fdfdfd" : "#2d2d2d",
            }}
          >
            {seconds}s
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={handleCapture}
        disabled={isCapturing}
        aria-label="Take photo"
        className="relative shrink-0 hover:opacity-90 transition-opacity disabled:opacity-50"
        style={{ width: "clamp(72px, 10vw, 100px)", aspectRatio: "1/1" }}
      >
        <Image src={imgOnboardingShutter} alt="" fill unoptimized />
      </button>

      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{ width: "clamp(180px, 24vw, 280px)", aspectRatio: "280 / 360" }}
      >
        <FigmaCroppedImage
          src={imgSalziOnboardingCapture}
          alt="Salzi"
          cropLeft={-80.8}
          cropWidth={262.06}
          flip="horizontal"
        />
        <div className="absolute" style={{ bottom: "0%", left: "12%", width: "65%", height: "3%" }}>
          <Image src={imgOnboardingCaptureShadow} alt="" fill className="object-contain" unoptimized />
        </div>
      </div>
    </div>
  );
}
