import type { LandingTranslations } from "./types";

export const fr: LandingTranslations = {
  heroEyebrow: "Hôtels, resorts et locations",
  heroTitle: "Trouvez votre prochain séjour de vacances",
  heroSubtitle:
    "Comparez hôtels, resorts et locations — puis réservez auprès de partenaires de confiance.",
  heroImageAlt:
    "Coucher de soleil sur une plage de sable avec un hôtel resort en arrière-plan",
  featuresTitle: (siteName) => `Pourquoi les voyageurs utilisent ${siteName}`,
  featuresSubtitle:
    "Une recherche, des partenaires de confiance et un chemin clair de la destination à la réservation.",
  features: [
    {
      title: "Planifiez votre escapade",
      desc: "Comparez resorts, hôtels et locations côte à côte pour choisir le séjour qui correspond à votre voyage.",
    },
    {
      title: "De la plage à la ville",
      desc: "Week-ends, pauses plage ou séjours plus longs — des options sur les côtes et dans les villes du monde entier.",
    },
    {
      title: "Réservez en toute confiance",
      desc: "Des politiques flexibles sur de nombreuses annonces, avec des partenaires de voyage que vous connaissez déjà.",
    },
  ],
  destinationsTitle: "Destinations de vacances populaires",
  destinationsSubtitle: "Stations balnéaires, îles et escapades urbaines.",
  compareRates: "Comparer les séjours",
  checkingRates: "Consultation des tarifs…",
  ctaTitle: "Commencez à planifier votre escapade",
  ctaSubtitle:
    "Recherchez une destination pour comparer les séjours, puis continuez vers un partenaire de réservation.",
  destinationNotFound: (city) =>
    `Nous n'avons pas trouvé ${city}. Essayez de rechercher manuellement ci-dessus.`,
  reviewSearch: "Vérifiez votre recherche",
  ratesUnavailable: "Tarifs indisponibles pour le moment",
  ratesUnavailableDesc: "Réessayez en utilisant la barre de recherche ci-dessus.",
  destinationPickTitle: "Sélectionnez parmi les suggestions",
  destinationPickDesc:
    "Saisissez une destination, puis choisissez une correspondance dans le menu déroulant.",
  footer: {
    about: "À propos",
    contact: "Contact",
    privacy: "Confidentialité",
    rightsReserved: "Tous droits réservés.",
    operatedBy: (siteName, operator) =>
      `${siteName} est exploité par ${operator}.`,
    commission: (siteName) =>
      `${siteName} peut percevoir une commission lorsque vous réservez via nos liens partenaires.`,
  },
  search: {
    where: "Où",
    wherePlaceholder: "Où allez-vous ?",
    whereError: "Choisissez où vous allez séjourner",
    loadingSuggestions: "Chargement des suggestions...",
    when: "Quand",
    pickDates: "Choisir les dates",
    checkIn: "Arrivée",
    checkOut: "Départ",
    selectCheckIn: "Sélectionner l'arrivée",
    selectCheckOut: "Sélectionner le départ",
    selectDate: "Sélectionner une date",
    pickYourDates: "Choisissez vos dates",
    chooseArrival: "Choisissez votre date d'arrivée",
    chooseDeparture: "Choisissez maintenant votre date de départ",
    pickCheckInFirst: "Choisissez d'abord l'arrivée, puis le départ",
    nowChooseCheckOut: "Choisissez maintenant votre départ",
    who: "Qui",
    guestSummary: (guests, rooms) =>
      `${guests} voyageur${guests !== 1 ? "s" : ""} · ${rooms} chambre${rooms !== 1 ? "s" : ""}`,
    adults: "Adultes",
    adultsSub: "13 ans ou plus",
    children: "Enfants",
    childrenSub: "0–12 ans",
    rooms: "Chambres",
    comparePrices: "Comparer les séjours",
    comparingRates: "Comparaison des séjours...",
    datesRequired: "Dates obligatoires",
    datesRequiredDesc:
      "Sélectionnez l'arrivée et le départ pour comparer les hébergements disponibles.",
    destinationTooShort: "Destination trop courte",
    destinationTooShortDesc:
      "Saisissez au moins 3 lettres — ville, hôtel ou code d'aéroport (ex. CDG).",
    airportNotFound: "Aéroport introuvable",
    airportNotFoundDesc: (code) =>
      `Aucun aéroport ne correspond à « ${code} ». Vérifiez le code et réessayez.`,
    couldNotCompare: "Impossible de comparer les tarifs",
    couldNotCompareDesc:
      "Réessayez ou sélectionnez une destination parmi les suggestions.",
    suggestionType: {
      state: "État",
      airport: "Aéroport",
      landmark: "Point d'intérêt",
      city: "Ville",
    },
    validation: {
      checkoutAfterCheckin: "Le départ doit être postérieur à l'arrivée",
      adultsGteRooms:
        "Le nombre d'adultes doit être supérieur ou égal au nombre de chambres",
      adultsRoomsMin: "Adultes et chambres doivent être au moins 1",
    },
  },
  countries: {
    "United States": "États-Unis",
    Greece: "Grèce",
    Indonesia: "Indonésie",
    Thailand: "Thaïlande",
    Mexico: "Mexique",
    "South Pacific": "Pacifique Sud",
    France: "France",
    "United Kingdom": "Royaume-Uni",
    Japan: "Japon",
    Italy: "Italie",
    Spain: "Espagne",
    "United Arab Emirates": "Émirats arabes unis",
    Australia: "Australie",
  },
};
