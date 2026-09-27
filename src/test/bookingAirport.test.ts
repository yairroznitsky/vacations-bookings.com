import { describe, expect, it } from "vitest";
import {
  buildBookingAirportSearchString,
  formatBookingAirportTitle,
} from "@/lib/bookingAirport";
import { buildBookingCityQueryFromSearch } from "@/lib/bookingCityQuery";
import { buildBookingSearchResultsUrl, hotelSearchToBookingDeeplinkInput } from "@/lib/bookingHotels";

describe("formatBookingAirportTitle", () => {
  it("derives a title from Kayak entityKey", () => {
    expect(
      formatBookingAirportTitle("Ben Gurion Intl", "place:Ben_Gurion_International_Airport")
    ).toBe("Ben Gurion International Airport");
  });
});

describe("buildBookingAirportSearchString", () => {
  it("formats TLV-style airport ss segments", () => {
    const ss = buildBookingAirportSearchString({
      airportCode: "TLV",
      airportName: "Ben Gurion Intl",
      cityName: "Tel Aviv",
      regionName: "Tel Aviv",
      countryName: "Israel",
      entityKey: "place:Ben_Gurion_International_Airport",
    });
    expect(ss).toContain("Ben Gurion International Airport (TLV)");
    expect(ss).toContain("Tel Aviv (TLV)");
    expect(ss).toContain("Israel");
  });
});

describe("buildBookingSearchResultsUrl airport mode", () => {
  it("includes dest_type, dest_id, and search form params for mapped airports", () => {
    const url = buildBookingSearchResultsUrl({
      query: "Ben Gurion Intl, Tel Aviv, Israel, (TLV)",
      checkin: "2026-09-28",
      checkout: "2026-09-29",
      rooms: 1,
      adults: 2,
      children: 0,
      children_ages: [],
      click_id: "abc",
      airport: {
        airportCode: "TLV",
        airportName: "Ben Gurion Intl",
        cityName: "Tel Aviv",
        regionName: "Tel Aviv",
        countryName: "Israel",
        entityKey: "place:Ben_Gurion_International_Airport",
        typedQuery: "TLV",
      },
    });

    const parsed = new URL(url);
    expect(parsed.searchParams.get("dest_type")).toBe("airport");
    expect(parsed.searchParams.get("dest_id")).toBe("113");
    expect(parsed.searchParams.get("src")).toBe("searchresults");
    expect(parsed.searchParams.get("search_selected")).toBe("true");
    expect(parsed.searchParams.get("ss")).toContain("(TLV)");
    expect(parsed.searchParams.get("ssne")).toContain("Ben Gurion");
    expect(parsed.searchParams.has("latitude")).toBe(false);
  });
});

describe("hotelSearchToBookingDeeplinkInput", () => {
  it("maps mapped IATA to airport deeplink fields", () => {
    const input = hotelSearchToBookingDeeplinkInput(
      {
        destination: "Ben Gurion Intl, Tel Aviv, Israel, (TLV)",
        airportCode: "TLV",
        airportName: "Ben Gurion Intl",
        cityName: "Tel Aviv",
        stateName: "Tel Aviv",
        countryName: "Israel",
        bookingEntityKey: "place:Ben_Gurion_International_Airport",
        destinationTypedQuery: "TLV",
        checkIn: "2026-09-28",
        checkOut: "2026-09-29",
      },
      "click-1"
    );
    expect(input.airport?.airportCode).toBe("TLV");
    expect(input.airport?.typedQuery).toBe("TLV");
  });

  it("falls back to city query when IATA is not in the static map", () => {
    const input = hotelSearchToBookingDeeplinkInput(
      {
        destination: "Jose Marti Intl, Havana, Cuba, (HAV)",
        airportCode: "HAV",
        airportName: "Jose Marti Intl",
        cityName: "Havana",
        stateName: "Havana",
        countryName: "Cuba",
        checkIn: "2026-09-28",
        checkOut: "2026-09-29",
      },
      "click-2"
    );
    expect(input.airport).toBeUndefined();
    expect(input.query).toBe("Havana, Havana, Cuba");
    expect(buildBookingCityQueryFromSearch({
      cityName: "Havana",
      stateName: "Havana",
      countryName: "Cuba",
      destination: "",
    })).toBe("Havana, Havana, Cuba");
  });
});
