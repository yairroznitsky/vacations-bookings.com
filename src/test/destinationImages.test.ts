import {
  DEFAULT_HERO_SIZES,
  getCityHeroImagePath,
  getCityHeroSrcSet,
  getDefaultHeroImage,
  getDefaultHeroSrcSet,
  getDestinationHeroFallback,
  getDestinationHeroImage,
} from "@/lib/destinationImages";

describe("destinationImages", () => {
  it("builds public webp paths from city slugs", () => {
    expect(getDestinationHeroImage("Miami")).toBe(
      "/images/city-heroes-optimized/miami.webp"
    );
    expect(getCityHeroImagePath("new-york")).toBe(
      "/images/city-heroes-optimized/new-york.webp"
    );
  });

  it("builds responsive city hero srcsets", () => {
    expect(getCityHeroSrcSet("Chengdu")).toBe(
      "/images/city-heroes-optimized/chengdu-960.webp 960w, /images/city-heroes-optimized/chengdu.webp 1600w"
    );
  });

  it("exposes a bundled fallback hero", () => {
    expect(getDestinationHeroFallback()).toMatch(/hero-hotel/);
  });

  it("builds optimized default hero paths and srcset", () => {
    expect(getDefaultHeroImage()).toBe("/images/hero-sunset-beach.webp");
    expect(getDefaultHeroSrcSet()).toBe(
      "/images/hero-sunset-beach-960.webp 960w, /images/hero-sunset-beach.webp 1600w"
    );
    expect(DEFAULT_HERO_SIZES).toBe("100vw");
  });
});
