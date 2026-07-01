/**
 * Local image assets from the Kios "Chat" section.
 * Source: Figma file UXsCXQdYv2GRYpRh01q03z — re-export via scripts/download-figma-assets.sh
 */

const img = (name: string) => `/assets/images/${name}`;

// ─── Shared / Polaroid panel ────────────────────────────────────────────────

/** Tiled Salzburg icon pattern background (opacity 30%) */
export const imgPattern = img("pattern.png");

/** Polaroid lower-section ruled lines texture */
export const imgPolaroidLines = img("polaroid-lines.svg");

/** Salzburg city stamp / badge */
export const imgCityStamp = img("city-stamp.png");

/** Marnie mascot (goat character) – displayed with rotate-180 + scaleY(-1) */
export const imgMarnie = img("marnie.png");

/** Marnie shadow ellipse (small) */
export const imgShadowSmall = img("shadow-small.svg");

/** Marnie shadow ellipse (large) */
export const imgShadowLarge = img("shadow-large.svg");

/** Decorative pin / Purple-Black element on Polaroid */
export const imgPin = img("pin.svg");

/** Settings gear icon */
export const imgSettings = img("settings.png");

// ─── Screen 1 — "Co-star" question ──────────────────────────────────────────

/** Icon: couple / travel partner */
export const imgIconCouple = img("icon-couple.png");

/** Icon overlay for couple (stacked SVG layer) */
export const imgIconCoupleLayer = img("icon-couple-layer.png");

/** Icon: backpack */
export const imgIconBackpack = img("icon-backpack.png");

/** Icon: whole crew / group */
export const imgIconCrew = img("icon-crew.png");

// ─── Screen 2 — "Heart steal" question ──────────────────────────────────────

/** Icon: fortress / castle */
export const imgIconFortress = img("icon-fortress.png");

/** Icon: flower / garden */
export const imgIconGarden = img("icon-garden.png");

/** Icon: mountain / nature */
export const imgIconNature = img("icon-nature.png");

// ─── Screen 3 — "Budget" question ────────────────────────────────────────────

/** Icon: food / gastronomy */
export const imgIconFood = img("icon-food.png");

/** Icon: ticket / culture */
export const imgIconCulture = img("icon-culture.png");

/** Icon: shopping bag / retail */
export const imgIconShopping = img("icon-shopping.png");

// ─── Screen 4 — "Magic wand" question ────────────────────────────────────────

/** Icon: magic wand / sparkle – crowds */
export const imgIconWand = img("icon-wand.png");

/** Icon: sun / weather */
export const imgIconSun = img("icon-sun.png");

/** Icon: map / navigation */
export const imgIconMap = img("icon-map.png");
