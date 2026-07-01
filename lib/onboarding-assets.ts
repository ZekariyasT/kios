/**
 * Local image assets for the Kios onboarding flow.
 * Source: Figma file UXsCXQdYv2GRYpRh01q03z — re-export via scripts/download-figma-assets.sh
 */

const img = (name: string) => `/assets/images/${name}`;

// ─── Welcome screen (9:138) ──────────────────────────────────────────────────

/** Full-screen cityscape photo background */
export const imgCityscapeBackground = img("cityscape-background.png");

/** Salzi (waving goat mascot) character photo */
export const imgSalziWaving = img("salzi-waving.png");

/** Salzi shadow ellipse (welcome screen — waving pose) */
export const imgSalziShadowWelcome = img("salzi-shadow-welcome.svg");

/** Salzi with camera (welcome carousel slide 3, node 9:154) */
export const imgSalziCameraWelcome = img("salzi-camera-welcome.png");

/** Salzi shadow ellipse (welcome screen — camera pose) */
export const imgSalziShadowCamera = img("salzi-shadow-camera.svg");

/** Translate / language icon (top-right) */
export const imgTranslateIcon = img("translate-icon.png");

// ─── Consent screen (9:179) ───────────────────────────────────────────────────

/** Salzi thinking pose (consent screen, flipped) */
export const imgSalziThinking = img("salzi-thinking.png");

/** Salzi shadow ellipse (consent screen) */
export const imgSalziShadowConsent = img("salzi-shadow-consent.svg");

/** Settings gear icon (consent screen) */
export const imgSettingsConsent = img("settings.png");

// ─── Options screen (12:374) ──────────────────────────────────────────────────

/** Salzi options character (flipped mascot for options screen) */
export const imgSalziOptions = img("salzi-options.png");

/** Salzi shadow ellipse (options screen) */
export const imgSalziShadowOptions = img("salzi-shadow-options.svg");

/** Chat icon (Aa cursor) */
export const imgChatIcon = img("chat-icon.png");

/** Call / phone icon */
export const imgCallIcon = img("call-icon.png");

/** Settings gear icon (options screen) */
export const imgSettingsOptions = img("settings.png");

// ─── Souvenir pitch screen (131:3337) ────────────────────────────────────────

/** Salzi mascot on souvenir pitch screen */
export const imgSalziSouvenirPitch = img("salzi-souvenir-pitch.png");

/** Shadow ellipse — souvenir pitch */
export const imgShadowSouvenirPitch = img("shadow-souvenir-pitch.svg");

/** Wand / sparkle icon for souvenir choice buttons */
export const imgWandIcon = img("wand-icon.svg");

/** Settings — souvenir pitch screen */
export const imgSettingsSouvenirPitch = img("settings.png");

// ─── Onboarding capture screen (134:3451) ───────────────────────────────────

export const imgSalziOnboardingCapture = img("salzi-onboarding-capture.png");

export const imgOnboardingShutter = img("onboarding-shutter.png");

export const imgOnboardingCaptureShadow = img("onboarding-capture-shadow.svg");

export const imgSettingsOnboardingCapture = img("settings.png");
