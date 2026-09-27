import type { HotelSearchInput } from "@/types/hotels";

/** Booking `ss` for city search from Kayak place fields. */
export const buildBookingCityQueryFromSearch = (search: HotelSearchInput): string => {
  const city = search.cityName?.trim();
  const state = search.stateName?.trim();
  const country = search.countryName?.trim() ?? search.country?.trim();

  if (city && state && country) {
    return `${city}, ${state}, ${country}`;
  }
  if (city && country) {
    return `${city}, ${country}`;
  }
  if (city) {
    return city;
  }
  return search.destination?.trim() ?? "";
};
