/** Salzburg / travel themed stock photos for the "Let the magic decide" path. */
export const MAGIC_PHOTOS = [
  "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80",
  "https://images.unsplash.com/photo-1590736969955-71cc94902191?w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
] as const;

export const MAGIC_EMOJIS = ["🏰", "🎻", "⛰️", "🦌", "✨", "🎭", "🍺", "🎵", "🌲", "🏔️", "🎪", "🦄"] as const;

export function pickRandomMagicSouvenir() {
  const photo = MAGIC_PHOTOS[Math.floor(Math.random() * MAGIC_PHOTOS.length)];
  const emoji = MAGIC_EMOJIS[Math.floor(Math.random() * MAGIC_EMOJIS.length)];
  return { photo, emoji };
}
