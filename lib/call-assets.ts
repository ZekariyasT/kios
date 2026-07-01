/**
 * Local image assets for the Kios call flow.
 * Source: Figma file UXsCXQdYv2GRYpRh01q03z — re-export via scripts/download-figma-assets.sh
 */

const img = (name: string) => `/assets/images/${name}`;

// ─── Connecting screen (24:3513) ─────────────────────────────────────────────

/** Salzi circular headshot — used in the connecting card and active Salzi tile */
export const imgSalziHeadshot = img("salzi-headshot.png");

/** Settings gear icon (call screens) */
export const imgSettingsCall = img("settings.png");

/** Gold ring / ellipse glow around the call button */
export const imgCallRingGlow = img("call-ring-glow.png");

/** Animated phone receiver icon inside the ring */
export const imgCallPhoneIcon = img("call-phone-icon.svg");

// ─── Active call screen (24:3221) ────────────────────────────────────────────

/** User avatar silhouette (User video tile placeholder) */
export const imgUserAvatar = img("user-avatar.svg");

/** Red hang-up phone icon */
export const imgHangupIcon = img("hangup-icon.png");
