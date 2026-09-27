import type { LandingTranslations } from "./types";

export const de: LandingTranslations = {
  heroEyebrow: "Hotels, Resorts und Ferienwohnungen",
  heroTitle: "Finden Sie Ihren nächsten Urlaubsaufenthalt",
  heroSubtitle:
    "Vergleichen Sie Hotels, Resorts und Ferienwohnungen — und buchen Sie über Partner, denen Sie vertrauen.",
  heroImageAlt:
    "Sonnenuntergang über einem Sandstrand mit einem Hotelresort im Hintergrund",
  featuresTitle: (siteName) => `Warum Reisende ${siteName} nutzen`,
  featuresSubtitle:
    "Eine Suche, vertrauenswürdige Partner und ein klarer Weg vom Ziel zur Buchung.",
  features: [
    {
      title: "Planen Sie Ihren Kurzurlaub",
      desc: "Vergleichen Sie Resorts, Hotels und Ferienwohnungen nebeneinander und wählen Sie den Aufenthalt, der zu Ihrer Reise passt.",
    },
    {
      title: "Vom Strand in die Stadt",
      desc: "Wochenendtrips, Strandurlaub oder längere Aufenthalte — Optionen an Küsten und in Städten weltweit.",
    },
    {
      title: "Mit Vertrauen buchen",
      desc: "Flexible Bedingungen bei vielen Angeboten, unterstützt von Reisepartnern, die Sie bereits kennen.",
    },
  ],
  destinationsTitle: "Beliebte Urlaubsziele",
  destinationsSubtitle: "Strandorte, Inseln und Städtereisen.",
  compareRates: "Aufenthalte vergleichen",
  checkingRates: "Preise werden geprüft…",
  ctaTitle: "Planen Sie Ihren Kurzurlaub",
  ctaSubtitle:
    "Suchen Sie ein Reiseziel, vergleichen Sie Aufenthalte und fahren Sie mit einem Buchungspartner fort.",
  destinationNotFound: (city) =>
    `Wir konnten ${city} nicht finden. Versuchen Sie die Suche oben manuell.`,
  reviewSearch: "Überprüfen Sie Ihre Suche",
  ratesUnavailable: "Preise derzeit nicht verfügbar",
  ratesUnavailableDesc: "Bitte versuchen Sie es erneut über die Suchleiste oben.",
  destinationPickTitle: "Aus den Vorschlägen wählen",
  destinationPickDesc:
    "Geben Sie ein Reiseziel ein und wählen Sie einen Treffer aus der Liste.",
  footer: {
    about: "Über uns",
    contact: "Kontakt",
    privacy: "Datenschutz",
    rightsReserved: "Alle Rechte vorbehalten.",
    operatedBy: (siteName, operator) =>
      `${siteName} wird betrieben von ${operator}.`,
    commission: (siteName) =>
      `${siteName} kann eine Provision erhalten, wenn Sie über Partnerlinks buchen.`,
  },
  search: {
    where: "Wohin",
    wherePlaceholder: "Wohin geht die Reise?",
    whereError: "Wählen Sie, wo Sie übernachten",
    loadingSuggestions: "Vorschläge werden geladen...",
    when: "Wann",
    pickDates: "Daten wählen",
    checkIn: "Anreise",
    checkOut: "Abreise",
    selectCheckIn: "Anreise wählen",
    selectCheckOut: "Abreise wählen",
    selectDate: "Datum wählen",
    pickYourDates: "Wählen Sie Ihre Daten",
    chooseArrival: "Wählen Sie Ihr Anreisedatum",
    chooseDeparture: "Wählen Sie jetzt Ihr Abreisedatum",
    pickCheckInFirst: "Zuerst Anreise, dann Abreise wählen",
    nowChooseCheckOut: "Wählen Sie jetzt Ihre Abreise",
    who: "Wer",
    guestSummary: (guests, rooms) =>
      `${guests} ${guests === 1 ? "Gast" : "Gäste"} · ${rooms} Zimmer`,
    adults: "Erwachsene",
    adultsSub: "Ab 13 Jahren",
    children: "Kinder",
    childrenSub: "0–12 Jahre",
    rooms: "Zimmer",
    comparePrices: "Aufenthalte vergleichen",
    comparingRates: "Aufenthalte werden verglichen...",
    datesRequired: "Daten erforderlich",
    datesRequiredDesc:
      "Wählen Sie Anreise und Abreise, um verfügbare Unterkünfte zu vergleichen.",
    destinationTooShort: "Reiseziel zu kurz",
    destinationTooShortDesc:
      "Geben Sie mindestens 3 Buchstaben ein — Stadt, Hotel oder Flughafencode (z. B. FRA).",
    airportNotFound: "Flughafen nicht gefunden",
    airportNotFoundDesc: (code) =>
      `Kein Flughafen entspricht „${code}“. Prüfen Sie den Code und versuchen Sie es erneut.`,
    couldNotCompare: "Preise konnten nicht verglichen werden",
    couldNotCompareDesc:
      "Bitte versuchen Sie es erneut oder wählen Sie ein Reiseziel aus den Vorschlägen.",
    suggestionType: {
      state: "Bundesland",
      airport: "Flughafen",
      landmark: "Sehenswürdigkeit",
      city: "Stadt",
    },
    validation: {
      checkoutAfterCheckin: "Die Abreise muss nach der Anreise liegen",
      adultsGteRooms:
        "Die Anzahl der Erwachsenen muss größer oder gleich der Anzahl der Zimmer sein",
      adultsRoomsMin: "Erwachsene und Zimmer müssen mindestens 1 sein",
    },
  },
  countries: {
    "United States": "Vereinigte Staaten",
    Greece: "Griechenland",
    Indonesia: "Indonesien",
    Thailand: "Thailand",
    Mexico: "Mexiko",
    "South Pacific": "Südpazifik",
    France: "Frankreich",
    "United Kingdom": "Vereinigtes Königreich",
    Japan: "Japan",
    Italy: "Italien",
    Spain: "Spanien",
    "United Arab Emirates": "Vereinigte Arabische Emirate",
    Australia: "Australien",
  },
};
