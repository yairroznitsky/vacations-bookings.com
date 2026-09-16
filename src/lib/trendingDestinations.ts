import { getDestinationHeroImage } from "@/lib/destinationImages";

export type TrendingDestination = {
  /** Card heading */
  title: string;
  /** Card subheading (usually the country) */
  subtitle: string;
  /** Autocomplete query: city segment */
  city: string;
  /** Autocomplete query: region/state segment (optional for international cities) */
  state?: string;
  /** Autocomplete query: country segment (full name) */
  country: string;
  image: string;
  imageAlt: string;
  /** CSS `object-position` so the crop matches the landmark (e.g. skyline vs sign). */
  imageObjectPosition?: string;
  /** Landing-page city slug under /hotels/{slug} */
  slug: string;
};

/** Popular vacation markets — autocomplete + affiliate `query` use `city, [region,] country`. */
export const TRENDING_DESTINATIONS: readonly TrendingDestination[] = [
  {
    title: "Honolulu",
    slug: "honolulu",
    subtitle: "United States",
    city: "Honolulu",
    state: "Hawaii",
    country: "United States",
    image: getDestinationHeroImage("honolulu"),
    imageAlt: "Waikiki Beach and palm trees at sunset in Honolulu",
    imageObjectPosition: "center 35%",
  },
  {
    title: "Santorini",
    slug: "santorini",
    subtitle: "Greece",
    city: "Santorini",
    state: "South Aegean",
    country: "Greece",
    image: getDestinationHeroImage("santorini"),
    imageAlt: "White-washed villages and blue domes overlooking the Aegean in Santorini",
  },
  {
    title: "Bali",
    slug: "bali",
    subtitle: "Indonesia",
    city: "Bali",
    country: "Indonesia",
    image: getDestinationHeroImage("bali"),
    imageAlt: "Tropical rice terraces and lush green hills in Bali",
  },
  {
    title: "Miami",
    slug: "miami",
    subtitle: "United States",
    city: "Miami",
    state: "Florida",
    country: "United States",
    image: getDestinationHeroImage("miami"),
    imageAlt: "Art Deco skyline and palm-lined coast at golden hour in Miami",
  },
  {
    title: "Phuket",
    slug: "phuket",
    subtitle: "Thailand",
    city: "Phuket",
    country: "Thailand",
    image: getDestinationHeroImage("phuket"),
    imageAlt: "Turquoise water and limestone cliffs along a Phuket beach",
  },
  {
    title: "Los Cabos",
    slug: "los-cabos",
    subtitle: "Mexico",
    city: "Los Cabos",
    state: "Baja California Sur",
    country: "Mexico",
    image: getDestinationHeroImage("los-cabos"),
    imageAlt: "Desert coastline and resort hotels where the Sea of Cortez meets the Pacific",
  },
  {
    title: "Cancún",
    slug: "cancun",
    subtitle: "Mexico",
    city: "Cancun",
    state: "Quintana Roo",
    country: "Mexico",
    image: getDestinationHeroImage("cancun"),
    imageAlt: "Caribbean shoreline and resort hotels along Cancún's hotel zone",
  },
  {
    title: "Fiji",
    slug: "fiji",
    subtitle: "South Pacific",
    city: "Fiji",
    country: "Fiji",
    image: getDestinationHeroImage("fiji"),
    imageAlt: "Palm-fringed turquoise lagoon on a Fijian island",
  },
];

export const trendingAutocompleteQuery = (d: TrendingDestination): string =>
  [d.city, d.state, d.country].filter(Boolean).join(", ");
