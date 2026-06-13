import { pickRandomMagicSouvenir } from "@/lib/magic-souvenir";

/** Session flag for which souvenir path the user chose during onboarding. */
export type SouvenirChoice = "magic" | "photo";

const CHOICE_KEY = "kios.souvenirChoice";
const PHOTO_KEY = "kios.capturedPhoto";
const MAGIC_PHOTO_KEY = "kios.magicPhoto";
const MAGIC_EMOJI_KEY = "kios.magicEmoji";

export function setSouvenirChoice(choice: SouvenirChoice) {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(CHOICE_KEY, choice);
    if (choice === "magic") {
      sessionStorage.removeItem(PHOTO_KEY);
      const { photo, emoji } = pickRandomMagicSouvenir();
      sessionStorage.setItem(MAGIC_PHOTO_KEY, photo);
      sessionStorage.setItem(MAGIC_EMOJI_KEY, emoji);
    } else {
      sessionStorage.removeItem(MAGIC_PHOTO_KEY);
      sessionStorage.removeItem(MAGIC_EMOJI_KEY);
    }
  }
}

export function getSouvenirChoice(): SouvenirChoice | null {
  if (typeof window === "undefined") return null;
  const value = sessionStorage.getItem(CHOICE_KEY);
  return value === "magic" || value === "photo" ? value : null;
}

export function setCapturedPhoto(dataUrl: string) {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(PHOTO_KEY, dataUrl);
  }
}

export function getCapturedPhoto(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(PHOTO_KEY);
}

export function getMagicSouvenir(): { photo: string; emoji: string } | null {
  if (typeof window === "undefined") return null;
  const photo = sessionStorage.getItem(MAGIC_PHOTO_KEY);
  const emoji = sessionStorage.getItem(MAGIC_EMOJI_KEY);
  if (!photo || !emoji) return null;
  return { photo, emoji };
}

export function clearFlowSession() {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(CHOICE_KEY);
    sessionStorage.removeItem(PHOTO_KEY);
    sessionStorage.removeItem(MAGIC_PHOTO_KEY);
    sessionStorage.removeItem(MAGIC_EMOJI_KEY);
  }
}
