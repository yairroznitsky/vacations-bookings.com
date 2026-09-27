import { lookupBookingAirportDestId } from "@/lib/bookingAirportDestIds";

export interface BookingAirportLocation {
  airportCode: string;
  airportName?: string;
  cityName?: string;
  regionName?: string;
  countryName?: string;
  /** Kayak `entityKey`, e.g. place:Ben_Gurion_International_Airport */
  entityKey?: string;
  /** Raw text the user typed before picking a suggestion (often a 3-letter IATA). */
  typedQuery?: string;
  bookingDestId?: string;
}

const titleCaseWord = (word: string): string => {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

/** Converts Kayak entityKey or short names into a Booking-style airport title. */
export const formatBookingAirportTitle = (
  airportName: string | undefined,
  entityKey?: string
): string => {
  if (entityKey?.startsWith("place:")) {
    const fromKey = entityKey
      .slice("place:".length)
      .split("_")
      .map(titleCaseWord)
      .join(" ");
    if (fromKey) return fromKey;
  }

  const trimmed = airportName?.trim() ?? "";
  if (!trimmed) return "";

  let name = trimmed.replace(/\s*\([A-Za-z]{3}\)\s*$/, "").trim();
  if (/\bIntl\.?\b/i.test(name)) {
    name = name.replace(/\bIntl\.?\b/gi, "International");
  }
  if (!/\bAirport\b/i.test(name)) {
    name = `${name} Airport`;
  }
  return name.replace(/\s+/g, " ").trim();
};

/**
 * Booking `ss` for airport hotel search, e.g.
 * Ben Gurion Airport (TLV), Tel Aviv (TLV), Center District Israel, Israel
 */
export const buildBookingAirportSearchString = (location: BookingAirportLocation): string => {
  const code = location.airportCode.trim().toUpperCase();
  const airportTitle = formatBookingAirportTitle(location.airportName, location.entityKey);
  const city = location.cityName?.trim() || airportTitle.replace(/\s+Airport$/i, "").trim();
  const country = location.countryName?.trim() || "";
  const region = location.regionName?.trim() || "";

  const parts: string[] = [`${airportTitle} (${code})`, `${city} (${code})`];

  const regionLine = [region, country].filter(Boolean).join(" ").trim();
  if (regionLine && regionLine !== country) {
    parts.push(regionLine);
  }
  if (country) {
    parts.push(country);
  }

  return parts.join(", ");
};

export const buildBookingAirportSsne = (location: BookingAirportLocation): string => {
  const title = formatBookingAirportTitle(location.airportName, location.entityKey);
  if (title) return title;
  const typed = location.typedQuery?.trim();
  if (typed) return typed;
  return location.airportCode.trim().toUpperCase();
};

export const resolveBookingAirportDestId = (location: BookingAirportLocation): string | undefined => {
  const explicit = location.bookingDestId?.trim();
  if (explicit) return explicit;
  return lookupBookingAirportDestId(location.airportCode);
};

export { lookupBookingAirportDestId };
