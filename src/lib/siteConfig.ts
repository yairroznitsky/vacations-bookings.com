import { DEFAULT_META_PIXEL_ID } from "@/lib/metaPixelHtml";

/** Vite inlines `import.meta.env`; Node scripts (`tsx`) do not — fall back to `process.env`. */
const runtimeEnv: Record<string, string | undefined> =
  (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env ??
  (typeof process !== "undefined" ? process.env : {});

const readEnv = (value: string | undefined, fallback: string): string => {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
};

const readFlag = (value: string | undefined, fallback: boolean): boolean => {
  if (value === undefined) return fallback;
  const normalized = value.trim().toLowerCase();
  if (normalized === "true" || normalized === "1") return true;
  if (normalized === "false" || normalized === "0") return false;
  return fallback;
};

const name = readEnv(runtimeEnv.VITE_SITE_NAME, "Vacations Bookings");
const slug = readEnv(runtimeEnv.VITE_SITE_SLUG, "vacations-bookings");
const useApiProxy = readFlag(runtimeEnv.VITE_USE_API_PROXY, false);

export const siteConfig = {
  name,
  wordmark: readEnv(runtimeEnv.VITE_SITE_WORDMARK, name),
  slug,
  shortName: readEnv(runtimeEnv.VITE_SITE_SHORT_NAME, name.replace(/\s+/g, "")),
  domain: readEnv(runtimeEnv.VITE_SITE_DOMAIN, "vacations-bookings.com"),
  operator: readEnv(runtimeEnv.VITE_SITE_OPERATOR, "Big Edition"),
  supportEmail: readEnv(runtimeEnv.VITE_SITE_SUPPORT_EMAIL, "media@vacations-bookings.com"),
  trackingBrand: readEnv(runtimeEnv.VITE_TRACKING_BRAND, slug.replace(/-/g, "_")),
  landingIdPrefix: readEnv(runtimeEnv.VITE_LANDING_ID_PREFIX, "VB-"),
  metaPixelId: readEnv(runtimeEnv.VITE_META_PIXEL_ID, DEFAULT_META_PIXEL_ID),
  tiktokPixelId: readEnv(runtimeEnv.VITE_TIKTOK_PIXEL_ID, ""),
  googleAdsId: readEnv(runtimeEnv.VITE_GOOGLE_ADS_ID, ""),
  googleAdsConversionLabel: readEnv(runtimeEnv.VITE_GOOGLE_ADS_CONVERSION_LABEL, ""),
  /** Client-side Kayak deeplinks only (`a=` param). Override with `VITE_KAYAK_AFFILIATE_ID`. */
  kayakAffiliateId: readEnv(runtimeEnv.VITE_KAYAK_AFFILIATE_ID, "kan_248654"),
  useApiProxy,
  enableDbTracking: useApiProxy
    ? false
    : readFlag(runtimeEnv.VITE_ENABLE_DB_TRACKING, true),
  siteUrl: () => {
    const domain = readEnv(runtimeEnv.VITE_SITE_DOMAIN, "localhost");
    const protocol = domain === "localhost" ? "http" : "https";
    return `${protocol}://${domain}/`;
  },
  tagline: readEnv(runtimeEnv.VITE_SITE_TAGLINE, "Find your next vacation stay"),
  description:
    "Compare hotels, resorts, and rentals — then book through partners you trust.",
} as const;
