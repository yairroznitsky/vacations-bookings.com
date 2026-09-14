import SiteFooter from "@/components/SiteFooter";
import Benefits from "@/components/landing/Benefits";
import CityInventoryStrip from "@/components/landing/CityInventoryStrip";
import CTASection from "@/components/landing/CTASection";
import DestinationContent from "@/components/landing/DestinationContent";
import FAQ from "@/components/landing/FAQ";
import IntentBrowse from "@/components/landing/IntentBrowse";
import LandingHero from "@/components/landing/LandingHero";
import LandingPageMeta from "@/components/landing/LandingPageMeta";
import RelatedHotels from "@/components/landing/RelatedHotels";
import NearbyHotels from "@/components/sitelink/NearbyHotels";
import type { SearchFormProps } from "@/components/SearchForm";
import { fetchNearby, type NearbyData } from "@/lib/nearbyLocation";
import type { LandingPageConfig } from "@/types/landingPage";
import { format } from "date-fns";
import { useEffect, useMemo, useState } from "react";

type LandingPageProps = {
  config: LandingPageConfig;
};

const LandingPage = ({ config }: LandingPageProps) => {
  // Fetch nearby hotels using the current hotel's coordinates (hotel pages only)
  const [nearbyData, setNearbyData] = useState<NearbyData | null>(null);
  const hotelLat = config.hotel?.latitude;
  const hotelLng = config.hotel?.longitude;

  useEffect(() => {
    if (!hotelLat || !hotelLng) return;
    fetchNearby({ lat: hotelLat, lng: hotelLng })
      .then((data) => setNearbyData(data))
      .catch(() => { /* silently ignore — section simply won't render */ });
  }, [hotelLat, hotelLng]);

  // Derive check-in / check-out strings from the page's search defaults
  const checkInStr = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + (config.searchDefaults.nightsOffsetDays ?? 1));
    return format(d, "yyyy-MM-dd");
  }, [config.searchDefaults.nightsOffsetDays]);

  const checkOutStr = useMemo(() => {
    const checkIn = new Date();
    checkIn.setDate(checkIn.getDate() + (config.searchDefaults.nightsOffsetDays ?? 1));
    const checkOut = new Date(checkIn);
    checkOut.setDate(checkOut.getDate() + (config.searchDefaults.stayNights ?? 1));
    return format(checkOut, "yyyy-MM-dd");
  }, [config.searchDefaults.nightsOffsetDays, config.searchDefaults.stayNights]);

  // Filter out the current hotel from nearby results
  const nearbyHotels = useMemo(
    () =>
      nearbyData?.hotels.filter(
        (h) => !config.hotel || h.externalId !== Number(config.hotel.id)
      ) ?? [],
    [nearbyData, config.hotel]
  );

  const searchFormProps = useMemo((): Pick<
    SearchFormProps,
    "defaults" | "trackingContext"
  > => ({
    defaults: config.hotel
      ? {
          // Hotel pages search for the property itself; Kayak autocomplete
          // resolves the hotel name (disambiguated by city + country).
          destinationQuery: config.hotel.name,
          nightsOffsetDays: config.searchDefaults.nightsOffsetDays,
          stayNights: config.searchDefaults.stayNights,
          adults: config.searchDefaults.adults,
          rooms: config.searchDefaults.rooms,
          cityName: config.hotel.name,
          countryName: `${config.city.name}, ${config.city.country}`,
          lockDestination: true,
          latitude: config.hotel.latitude,
          longitude: config.hotel.longitude,
        }
      : {
          destinationQuery: config.city.name,
          nightsOffsetDays: config.searchDefaults.nightsOffsetDays,
          stayNights: config.searchDefaults.stayNights,
          adults: config.searchDefaults.adults,
          rooms: config.searchDefaults.rooms,
          kayakDestinationId: config.city.kayakDestinationId,
          kayakCitySlug: config.city.kayakCitySlug,
          cityName: config.city.name,
          countryName: config.city.country,
          lockDestination: true,
        },
    trackingContext: {
      landingPageId: config.tracking.landingPageId,
      cityId: config.tracking.cityId,
      intentId: config.tracking.intentId,
      surface: "hotel_landing",
    },
  }), [config]);

  const showCityExtras = !config.hotel;

  return (
    <div className="min-h-screen bg-background">
      <LandingPageMeta config={config} />
      <LandingHero config={config} searchFormProps={searchFormProps} />
      <Benefits benefits={config.content.benefits} />
      {config.hotel && nearbyHotels.length > 0 && (
        <NearbyHotels
          hotels={nearbyHotels}
          nearestCity={nearbyData?.nearest}
          checkIn={checkInStr}
          checkOut={checkOutStr}
          surface="hotel_landing_nearby"
          geoSource="precise"
        />
      )}
      {showCityExtras && config.cityStats ? (
        <CityInventoryStrip
          cityName={config.city.name}
          stats={config.cityStats}
        />
      ) : null}
      {showCityExtras && config.relatedHotels?.length ? (
        <RelatedHotels
          city={config.city}
          hotels={config.relatedHotels}
          intentLabel={config.intent?.label}
          tracking={config.tracking}
        />
      ) : null}
      <DestinationContent config={config} />
      <FAQ faqs={config.content.faqs} />
      {showCityExtras && !config.intent && config.browseIntents?.length ? (
        <IntentBrowse
          cityName={config.city.name}
          intents={config.browseIntents}
        />
      ) : null}
      <CTASection ctaText={config.content.ctaText} cityName={config.city.name} />
      <SiteFooter />
    </div>
  );
};

export default LandingPage;
