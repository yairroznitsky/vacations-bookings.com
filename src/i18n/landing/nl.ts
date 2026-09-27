import type { LandingTranslations } from "./types";

export const nl: LandingTranslations = {
  heroEyebrow: "Hotels, resorts en vakantiewoningen",
  heroTitle: "Vind je volgende vakantieverblijf",
  heroSubtitle:
    "Vergelijk hotels, resorts en vakantiewoningen — en boek via partners die je vertrouwt.",
  heroImageAlt:
    "Zonsondergang boven een zandstrand met een hotelresort op de achtergrond",
  featuresTitle: (siteName) => `Waarom reizigers ${siteName} gebruiken`,
  featuresSubtitle:
    "Eén zoekopdracht, betrouwbare partners en een duidelijk pad van bestemming naar boeking.",
  features: [
    {
      title: "Plan je uitje",
      desc: "Vergelijk resorts, hotels en vakantiewoningen naast elkaar en kies het verblijf dat bij je reis past.",
    },
    {
      title: "Van strand naar stad",
      desc: "Weekendjes weg, strandvakanties of langere verblijven — opties langs kusten en in steden wereldwijd.",
    },
    {
      title: "Boek met vertrouwen",
      desc: "Flexibele voorwaarden bij veel aanbiedingen, met reispartners die je al kent.",
    },
  ],
  destinationsTitle: "Populaire vakantiebestemmingen",
  destinationsSubtitle: "Badplaatsen, eilanden en stedentrips.",
  compareRates: "Verblijven vergelijken",
  checkingRates: "Tarieven worden gecontroleerd…",
  ctaTitle: "Begin met het plannen van je uitje",
  ctaSubtitle:
    "Zoek een bestemming om verblijven te vergelijken en ga verder naar een boekingspartner.",
  destinationNotFound: (city) =>
    `We konden ${city} niet vinden. Probeer hierboven handmatig te zoeken.`,
  reviewSearch: "Controleer je zoekopdracht",
  ratesUnavailable: "Tarieven nu niet beschikbaar",
  ratesUnavailableDesc: "Probeer het opnieuw via de zoekbalk hierboven.",
  destinationPickTitle: "Kies uit de suggesties",
  destinationPickDesc:
    "Typ een bestemming en kies een match uit het dropdownmenu.",
  footer: {
    about: "Over ons",
    contact: "Contact",
    privacy: "Privacy",
    rightsReserved: "Alle rechten voorbehouden.",
    operatedBy: (siteName, operator) =>
      `${siteName} wordt geëxploiteerd door ${operator}.`,
    commission: (siteName) =>
      `${siteName} kan een commissie ontvangen wanneer je boekt via onze partnerlinks.`,
  },
  search: {
    where: "Waar",
    wherePlaceholder: "Waar ga je naartoe?",
    whereError: "Kies waar je verblijft",
    loadingSuggestions: "Suggesties worden geladen...",
    when: "Wanneer",
    pickDates: "Kies datums",
    checkIn: "Aankomst",
    checkOut: "Vertrek",
    selectCheckIn: "Kies aankomst",
    selectCheckOut: "Kies vertrek",
    selectDate: "Kies een datum",
    pickYourDates: "Kies je datums",
    chooseArrival: "Kies je aankomstdatum",
    chooseDeparture: "Kies nu je vertrekdatum",
    pickCheckInFirst: "Kies eerst aankomst, daarna vertrek",
    nowChooseCheckOut: "Kies nu je vertrek",
    who: "Wie",
    guestSummary: (guests, rooms) =>
      `${guests} ${guests === 1 ? "gast" : "gasten"} · ${rooms} ${rooms === 1 ? "kamer" : "kamers"}`,
    adults: "Volwassenen",
    adultsSub: "13 jaar of ouder",
    children: "Kinderen",
    childrenSub: "0–12 jaar",
    rooms: "Kamers",
    comparePrices: "Verblijven vergelijken",
    comparingRates: "Verblijven worden vergeleken...",
    datesRequired: "Datums verplicht",
    datesRequiredDesc:
      "Selecteer aankomst en vertrek om beschikbare verblijven te vergelijken.",
    destinationTooShort: "Bestemming te kort",
    destinationTooShortDesc:
      "Typ minstens 3 letters — stad, hotel of luchthavencode (bijv. AMS).",
    airportNotFound: "Luchthaven niet gevonden",
    airportNotFoundDesc: (code) =>
      `Geen luchthaven komt overeen met "${code}". Controleer de code en probeer het opnieuw.`,
    couldNotCompare: "Tarieven konden niet worden vergeleken",
    couldNotCompareDesc:
      "Probeer het opnieuw of kies een bestemming uit de suggesties.",
    suggestionType: {
      state: "Staat",
      airport: "Luchthaven",
      landmark: "Bezienswaardigheid",
      city: "Stad",
    },
    validation: {
      checkoutAfterCheckin: "Vertrek moet na aankomst liggen",
      adultsGteRooms:
        "Het aantal volwassenen moet groter dan of gelijk aan het aantal kamers zijn",
      adultsRoomsMin: "Volwassenen en kamers moeten minstens 1 zijn",
    },
  },
  countries: {
    "United States": "Verenigde Staten",
    Greece: "Griekenland",
    Indonesia: "Indonesië",
    Thailand: "Thailand",
    Mexico: "Mexico",
    "South Pacific": "Zuidelijke Stille Oceaan",
    France: "Frankrijk",
    "United Kingdom": "Verenigd Koninkrijk",
    Japan: "Japan",
    Italy: "Italië",
    Spain: "Spanje",
    "United Arab Emirates": "Verenigde Arabische Emiraten",
    Australia: "Australië",
  },
};
