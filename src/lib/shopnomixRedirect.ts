import { buildBookingSearchResultsUrl, type BookingDeeplinkInput } from "@/lib/bookingHotels";

export const SHOPNOMIX_REDIRECT_BASE = "https://s3j7c.com/api/v1/bid/redirect";

/** Shopnomix campaign ids are 26-char ULIDs (see docs link generator). */
export const SHOPNOMIX_CAMPAIGN_ID_PATTERN = /^[0-9A-HJKMNP-TV-Z]{26}$/i;

export const isValidShopnomixCampaignId = (campaignId: string): boolean =>
  SHOPNOMIX_CAMPAIGN_ID_PATTERN.test(campaignId.trim());

export const DEFAULT_SHOPNOMIX_CAMPAIGN_ID = "01KZP08SFV6VZGV6ZE1RM3FNKT";

export type ShopnomixBookingSource = "2pop" | "booking";

export interface ShopnomixRedirectConfig {
  campaignId: string;
  redirectBase: string;
}

export const getDefaultShopnomixConfig = (): ShopnomixRedirectConfig => ({
  campaignId:
    import.meta.env.VITE_SHOPNOMIX_CAMPAIGN_ID?.trim() || DEFAULT_SHOPNOMIX_CAMPAIGN_ID,
  redirectBase: SHOPNOMIX_REDIRECT_BASE,
});

/**
 * Wraps a Booking.com search URL in the Shopnomix Redirect API.
 * https://docs.shpnmx.com/redirect-api.html#base-url
 */
export const buildShopnomixBookingUrl = (
  input: BookingDeeplinkInput,
  source: ShopnomixBookingSource,
  config: ShopnomixRedirectConfig = getDefaultShopnomixConfig()
): string => {
  const innerUrl = buildBookingSearchResultsUrl(input);
  const campaignId = config.campaignId.trim();
  if (!campaignId || !isValidShopnomixCampaignId(campaignId)) {
    if (campaignId && import.meta.env.DEV) {
      console.warn(
        "[shopnomix] Invalid VITE_SHOPNOMIX_CAMPAIGN_ID (expected 26-char ULID). Sending user to Booking.com directly."
      );
    }
    return innerUrl;
  }

  const params = new URLSearchParams({
    campaign_id: campaignId,
    url: innerUrl,
    cid: input.click_id,
    source,
  });

  return `${config.redirectBase}?${params.toString()}`;
};
