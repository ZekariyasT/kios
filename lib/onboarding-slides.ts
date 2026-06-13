import {
  imgSalziWaving,
  imgSalziShadowWelcome,
  imgSalziCameraWelcome,
  imgSalziShadowCamera,
} from "@/lib/onboarding-assets";

export interface OnboardingSlide {
  id: number;
  text: string;
  lines: number;
  bubbleHeight: number;
  mascotSrc: string;
  shadowSrc: string;
  cropLeft: number;
  cropWidth: number;
  flip?: "horizontal";
  /** Mascot container — % of viewport (Figma 1194×834) */
  mascotStyle: {
    left: string;
    top: string;
    width: string;
    height: string;
  };
  shadowStyle: {
    bottom: string;
    left: string;
    width: string;
    height: string;
  };
}

/** Welcome carousel — Figma Onboarding frames 9, 10, 11 */
export const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: 0,
    text: "Servus! I'm Salzi — your local Salzburg guide!",
    lines: 2,
    bubbleHeight: 184,
    mascotSrc: imgSalziWaving,
    shadowSrc: imgSalziShadowWelcome,
    cropLeft: -86.16,
    cropWidth: 258.25,
    mascotStyle: { left: "1.47%", top: "3.04%", width: "48.04%", height: "96.95%" },
    shadowStyle: { bottom: "0.5%", left: "0.98%", width: "49.02%", height: "3.6%" },
  },
  {
    id: 1,
    text: "Tell me about your time here — what did you see, taste, or feel?",
    lines: 3,
    bubbleHeight: 220,
    mascotSrc: imgSalziWaving,
    shadowSrc: imgSalziShadowWelcome,
    cropLeft: -86.16,
    cropWidth: 258.25,
    mascotStyle: { left: "1.47%", top: "3.04%", width: "48.04%", height: "96.95%" },
    shadowStyle: { bottom: "0.5%", left: "0.98%", width: "49.02%", height: "3.6%" },
  },
  {
    id: 2,
    text: "Share your story and get a magical souvenir",
    lines: 3,
    bubbleHeight: 220,
    mascotSrc: imgSalziCameraWelcome,
    shadowSrc: imgSalziShadowCamera,
    cropLeft: -80.8,
    cropWidth: 262.06,
    flip: "horizontal",
    mascotStyle: { left: "4.31%", top: "1.53%", width: "48.08%", height: "98.47%" },
    shadowStyle: { bottom: "2.2%", left: "7.47%", width: "34.9%", height: "2.56%" },
  },
];

/** ms to wait after typewriter finishes before advancing slide */
export function slideHoldDuration(lines: number): number {
  const lastLineDelay = 0.3 + (lines - 1) * 0.8;
  const revealDuration = 0.6;
  const pauseAfterReveal = 2200;
  return (lastLineDelay + revealDuration) * 1000 + pauseAfterReveal;
}
