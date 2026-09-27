import { describe, expect, it } from "vitest";
import {
  buildShopnomixBookingUrl,
  isValidShopnomixCampaignId,
  SHOPNOMIX_REDIRECT_BASE,
} from "@/lib/shopnomixRedirect";
import { buildBookingSearchResultsUrl } from "@/lib/bookingHotels";

const baseInput = {
  query: "New York",
  checkin: "2026-06-10",
  checkout: "2026-06-11",
  rooms: 1,
  adults: 2,
  children: 0,
  children_ages: [] as number[],
  click_id: "test-click-123",
};

const TEST_CAMPAIGN_ULID = "01KZP08SFV6VZGV6ZE1RM3FNKT";

const testConfig = {
  campaignId: TEST_CAMPAIGN_ULID,
  redirectBase: SHOPNOMIX_REDIRECT_BASE,
};

describe("buildShopnomixBookingUrl", () => {
  it("uses Shopnomix redirect endpoint with required query params", () => {
    const url = buildShopnomixBookingUrl(baseInput, "booking", testConfig);
    const parsed = new URL(url);

    expect(parsed.origin + parsed.pathname).toBe(SHOPNOMIX_REDIRECT_BASE);
    expect(parsed.searchParams.get("campaign_id")).toBe(TEST_CAMPAIGN_ULID);
    expect(parsed.searchParams.get("cid")).toBe("test-click-123");
    expect(parsed.searchParams.get("source")).toBe("booking");
    expect(parsed.searchParams.has("fb")).toBe(false);
  });

  it("passes the Booking.com search URL as url", () => {
    const url = buildShopnomixBookingUrl(baseInput, "2pop", testConfig);
    const parsed = new URL(url);
    const inner = parsed.searchParams.get("url");
    expect(inner).toBe(buildBookingSearchResultsUrl(baseInput));
    expect(inner).toContain("https://www.booking.com/searchresults.html");
  });

  it("returns direct Booking.com URL when campaign id is empty", () => {
    const url = buildShopnomixBookingUrl(baseInput, "booking", {
      campaignId: "",
      redirectBase: SHOPNOMIX_REDIRECT_BASE,
    });
    expect(url).toBe(buildBookingSearchResultsUrl(baseInput));
  });

  it("rejects non-ULID campaign ids (e.g. 40-char hex)", () => {
    expect(
      isValidShopnomixCampaignId("be49e2ab85f860b4149a07d9173f8ee72dc7bed2")
    ).toBe(false);
    const url = buildShopnomixBookingUrl(baseInput, "booking", {
      campaignId: "be49e2ab85f860b4149a07d9173f8ee72dc7bed2",
      redirectBase: SHOPNOMIX_REDIRECT_BASE,
    });
    expect(url).toBe(buildBookingSearchResultsUrl(baseInput));
  });
});
