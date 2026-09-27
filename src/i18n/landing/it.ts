import type { LandingTranslations } from "./types";

export const it: LandingTranslations = {
  heroEyebrow: "Hotel, resort e affitti",
  heroTitle: "Trova il tuo prossimo soggiorno di vacanza",
  heroSubtitle:
    "Confronta hotel, resort e affitti — poi prenota con partner di fiducia.",
  heroImageAlt:
    "Tramonto su una spiaggia di sabbia con un hotel resort sullo sfondo",
  featuresTitle: (siteName) => `Perché i viaggiatori usano ${siteName}`,
  featuresSubtitle:
    "Una ricerca, partner affidabili e un percorso chiaro dalla destinazione alla prenotazione.",
  features: [
    {
      title: "Pianifica la tua fuga",
      desc: "Confronta resort, hotel e affitti uno accanto all'altro e scegli il soggiorno adatto al tuo viaggio.",
    },
    {
      title: "Dalla spiaggia alla città",
      desc: "Weekend, pause al mare o soggiorni più lunghi — opzioni su coste e città di tutto il mondo.",
    },
    {
      title: "Prenota con fiducia",
      desc: "Politiche flessibili su molte offerte, con partner di viaggio che già conosci.",
    },
  ],
  destinationsTitle: "Destinazioni vacanza popolari",
  destinationsSubtitle: "Località di mare, isole e fughe in città.",
  compareRates: "Confronta soggiorni",
  checkingRates: "Controllo delle tariffe…",
  ctaTitle: "Inizia a pianificare la tua fuga",
  ctaSubtitle:
    "Cerca una destinazione per confrontare i soggiorni, poi continua con un partner di prenotazione.",
  destinationNotFound: (city) =>
    `Non abbiamo trovato ${city}. Prova a cercare manualmente qui sopra.`,
  reviewSearch: "Controlla la tua ricerca",
  ratesUnavailable: "Tariffe non disponibili al momento",
  ratesUnavailableDesc: "Riprova usando la barra di ricerca qui sopra.",
  destinationPickTitle: "Seleziona dai suggerimenti",
  destinationPickDesc:
    "Digita una destinazione e scegli una corrispondenza dal menu a discesa.",
  footer: {
    about: "Chi siamo",
    contact: "Contatti",
    privacy: "Privacy",
    rightsReserved: "Tutti i diritti riservati.",
    operatedBy: (siteName, operator) =>
      `${siteName} è gestito da ${operator}.`,
    commission: (siteName) =>
      `${siteName} può ricevere una commissione quando prenoti tramite i nostri link partner.`,
  },
  search: {
    where: "Dove",
    wherePlaceholder: "Dove stai andando?",
    whereError: "Scegli dove soggiornerai",
    loadingSuggestions: "Caricamento suggerimenti...",
    when: "Quando",
    pickDates: "Scegli le date",
    checkIn: "Arrivo",
    checkOut: "Partenza",
    selectCheckIn: "Seleziona arrivo",
    selectCheckOut: "Seleziona partenza",
    selectDate: "Seleziona una data",
    pickYourDates: "Scegli le tue date",
    chooseArrival: "Scegli la data di arrivo",
    chooseDeparture: "Ora scegli la data di partenza",
    pickCheckInFirst: "Scegli prima l'arrivo, poi la partenza",
    nowChooseCheckOut: "Ora scegli la partenza",
    who: "Chi",
    guestSummary: (guests, rooms) =>
      `${guests} ospit${guests === 1 ? "e" : "i"} · ${rooms} camer${rooms === 1 ? "a" : "e"}`,
    adults: "Adulti",
    adultsSub: "13 anni o più",
    children: "Bambini",
    childrenSub: "0–12 anni",
    rooms: "Camere",
    comparePrices: "Confronta soggiorni",
    comparingRates: "Confronto dei soggiorni...",
    datesRequired: "Date obbligatorie",
    datesRequiredDesc:
      "Seleziona arrivo e partenza per confrontare gli alloggi disponibili.",
    destinationTooShort: "Destinazione troppo corta",
    destinationTooShortDesc:
      "Digita almeno 3 lettere — città, hotel o codice aeroporto (es. FCO).",
    airportNotFound: "Aeroporto non trovato",
    airportNotFoundDesc: (code) =>
      `Nessun aeroporto corrisponde a « ${code} ». Controlla il codice e riprova.`,
    couldNotCompare: "Impossibile confrontare le tariffe",
    couldNotCompareDesc:
      "Riprova o seleziona una destinazione dai suggerimenti.",
    suggestionType: {
      state: "Stato",
      airport: "Aeroporto",
      landmark: "Punto di interesse",
      city: "Città",
    },
    validation: {
      checkoutAfterCheckin: "La partenza deve essere successiva all'arrivo",
      adultsGteRooms:
        "Il numero di adulti deve essere maggiore o uguale al numero di camere",
      adultsRoomsMin: "Adulti e camere devono essere almeno 1",
    },
  },
  countries: {
    "United States": "Stati Uniti",
    Greece: "Grecia",
    Indonesia: "Indonesia",
    Thailand: "Thailandia",
    Mexico: "Messico",
    "South Pacific": "Pacifico del Sud",
    France: "Francia",
    "United Kingdom": "Regno Unito",
    Japan: "Giappone",
    Italy: "Italia",
    Spain: "Spagna",
    "United Arab Emirates": "Emirati Arabi Uniti",
    Australia: "Australia",
  },
};
