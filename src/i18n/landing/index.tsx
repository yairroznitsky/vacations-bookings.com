import { createContext, useContext, useEffect, type ReactNode } from "react";
import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { nl } from "./nl";
import { pl } from "./pl";
import { ptBR } from "./pt-BR";
import type { LandingLocale, LandingTranslations } from "./types";

export type { LandingLocale, LandingTranslations };

const translations: Record<LandingLocale, LandingTranslations> = {
  en,
  es,
  "pt-BR": ptBR,
  fr,
  de,
  it,
  nl,
  pl,
};

export const getLandingTranslations = (locale: LandingLocale): LandingTranslations =>
  translations[locale];

const VALIDATION_MESSAGE_MAP: Record<
  LandingLocale,
  Record<string, string>
> = {
  en: {},
  es: {
    "Check-out must be after check-in":
      translations.es.search.validation.checkoutAfterCheckin,
    "Number of adults must be greater than or equal to number of rooms":
      translations.es.search.validation.adultsGteRooms,
    "Adults and rooms must be at least 1":
      translations.es.search.validation.adultsRoomsMin,
  },
  "pt-BR": {
    "Check-out must be after check-in":
      translations["pt-BR"].search.validation.checkoutAfterCheckin,
    "Number of adults must be greater than or equal to number of rooms":
      translations["pt-BR"].search.validation.adultsGteRooms,
    "Adults and rooms must be at least 1":
      translations["pt-BR"].search.validation.adultsRoomsMin,
  },
  fr: {
    "Check-out must be after check-in":
      translations.fr.search.validation.checkoutAfterCheckin,
    "Number of adults must be greater than or equal to number of rooms":
      translations.fr.search.validation.adultsGteRooms,
    "Adults and rooms must be at least 1":
      translations.fr.search.validation.adultsRoomsMin,
  },
  de: {
    "Check-out must be after check-in":
      translations.de.search.validation.checkoutAfterCheckin,
    "Number of adults must be greater than or equal to number of rooms":
      translations.de.search.validation.adultsGteRooms,
    "Adults and rooms must be at least 1":
      translations.de.search.validation.adultsRoomsMin,
  },
  it: {
    "Check-out must be after check-in":
      translations.it.search.validation.checkoutAfterCheckin,
    "Number of adults must be greater than or equal to number of rooms":
      translations.it.search.validation.adultsGteRooms,
    "Adults and rooms must be at least 1":
      translations.it.search.validation.adultsRoomsMin,
  },
  nl: {
    "Check-out must be after check-in":
      translations.nl.search.validation.checkoutAfterCheckin,
    "Number of adults must be greater than or equal to number of rooms":
      translations.nl.search.validation.adultsGteRooms,
    "Adults and rooms must be at least 1":
      translations.nl.search.validation.adultsRoomsMin,
  },
  pl: {
    "Check-out must be after check-in":
      translations.pl.search.validation.checkoutAfterCheckin,
    "Number of adults must be greater than or equal to number of rooms":
      translations.pl.search.validation.adultsGteRooms,
    "Adults and rooms must be at least 1":
      translations.pl.search.validation.adultsRoomsMin,
  },
};

export const translateValidationMessage = (
  locale: LandingLocale,
  message: string
): string => VALIDATION_MESSAGE_MAP[locale][message] ?? message;

type LandingLocaleContextValue = {
  locale: LandingLocale;
  t: LandingTranslations;
};

const LandingLocaleContext = createContext<LandingLocaleContextValue>({
  locale: "en",
  t: en,
});

export const LandingLocaleProvider = ({
  locale,
  children,
}: {
  locale: LandingLocale;
  children: ReactNode;
}) => {
  const t = getLandingTranslations(locale);

  useEffect(() => {
    document.documentElement.lang = locale === "pt-BR" ? "pt-BR" : locale;
  }, [locale]);

  return (
    <LandingLocaleContext.Provider value={{ locale, t }}>
      {children}
    </LandingLocaleContext.Provider>
  );
};

export const useLandingI18n = () => useContext(LandingLocaleContext);

export const localizeCountryName = (
  t: LandingTranslations,
  country: string
): string => t.countries[country] ?? country;
