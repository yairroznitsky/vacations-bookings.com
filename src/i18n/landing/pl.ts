import type { LandingTranslations } from "./types";

const polishPlural = (n: number, one: string, few: string, many: string) => {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (n === 1) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
};

export const pl: LandingTranslations = {
  heroEyebrow: "Hotele, kurorty i apartamenty",
  heroTitle: "Znajdź swój następny pobyt wakacyjny",
  heroSubtitle:
    "Porównuj hotele, kurorty i apartamenty — a następnie rezerwuj u zaufanych partnerów.",
  heroImageAlt:
    "Zachód słońca nad piaszczystą plażą z kurortem hotelowym w tle",
  featuresTitle: (siteName) => `Dlaczego podróżni korzystają z ${siteName}`,
  featuresSubtitle:
    "Jedno wyszukiwanie, zaufani partnerzy i jasna droga od celu podróży do rezerwacji.",
  features: [
    {
      title: "Zaplanuj swój wypad",
      desc: "Porównuj kurorty, hotele i apartamenty obok siebie i wybierz pobyt dopasowany do Twojej podróży.",
    },
    {
      title: "Od plaży do miasta",
      desc: "Weekendowe wypady, urlopy na plaży lub dłuższe pobyty — opcje na wybrzeżach i w miastach na całym świecie.",
    },
    {
      title: "Rezerwuj z pewnością",
      desc: "Elastyczne zasady w wielu ofertach, u partnerów turystycznych, których już znasz.",
    },
  ],
  destinationsTitle: "Popularne kierunki wakacyjne",
  destinationsSubtitle: "Nadmorskie miejscowości, wyspy i wypady do miast.",
  compareRates: "Porównaj pobyty",
  checkingRates: "Sprawdzanie cen…",
  ctaTitle: "Zacznij planować swój wypad",
  ctaSubtitle:
    "Wyszukaj miejsce, porównaj pobyty i przejdź do partnera rezerwacyjnego.",
  destinationNotFound: (city) =>
    `Nie znaleźliśmy ${city}. Spróbuj wyszukać ręcznie powyżej.`,
  reviewSearch: "Sprawdź wyszukiwanie",
  ratesUnavailable: "Ceny są teraz niedostępne",
  ratesUnavailableDesc: "Spróbuj ponownie, korzystając z paska wyszukiwania powyżej.",
  destinationPickTitle: "Wybierz z podpowiedzi",
  destinationPickDesc:
    "Wpisz miejsce, a następnie wybierz dopasowanie z listy rozwijanej.",
  footer: {
    about: "O nas",
    contact: "Kontakt",
    privacy: "Prywatność",
    rightsReserved: "Wszelkie prawa zastrzeżone.",
    operatedBy: (siteName, operator) =>
      `${siteName} jest prowadzony przez ${operator}.`,
    commission: (siteName) =>
      `${siteName} może otrzymać prowizję, gdy rezerwujesz przez nasze linki partnerskie.`,
  },
  search: {
    where: "Dokąd",
    wherePlaceholder: "Dokąd się wybierasz?",
    whereError: "Wybierz, gdzie się zatrzymasz",
    loadingSuggestions: "Ładowanie podpowiedzi...",
    when: "Kiedy",
    pickDates: "Wybierz daty",
    checkIn: "Przyjazd",
    checkOut: "Wyjazd",
    selectCheckIn: "Wybierz przyjazd",
    selectCheckOut: "Wybierz wyjazd",
    selectDate: "Wybierz datę",
    pickYourDates: "Wybierz swoje daty",
    chooseArrival: "Wybierz datę przyjazdu",
    chooseDeparture: "Teraz wybierz datę wyjazdu",
    pickCheckInFirst: "Najpierw wybierz przyjazd, potem wyjazd",
    nowChooseCheckOut: "Teraz wybierz wyjazd",
    who: "Kto",
    guestSummary: (guests, rooms) =>
      `${guests} ${polishPlural(guests, "gość", "goście", "gości")} · ${rooms} ${polishPlural(rooms, "pokój", "pokoje", "pokoi")}`,
    adults: "Dorośli",
    adultsSub: "13 lat lub więcej",
    children: "Dzieci",
    childrenSub: "0–12 lat",
    rooms: "Pokoje",
    comparePrices: "Porównaj pobyty",
    comparingRates: "Porównywanie pobytów...",
    datesRequired: "Daty wymagane",
    datesRequiredDesc:
      "Wybierz przyjazd i wyjazd, aby porównać dostępne noclegi.",
    destinationTooShort: "Zbyt krótka nazwa miejsca",
    destinationTooShortDesc:
      "Wpisz co najmniej 3 litery — miasto, hotel lub kod lotniska (np. WAW).",
    airportNotFound: "Nie znaleziono lotniska",
    airportNotFoundDesc: (code) =>
      `Żadne lotnisko nie pasuje do „${code}”. Sprawdź kod i spróbuj ponownie.`,
    couldNotCompare: "Nie udało się porównać cen",
    couldNotCompareDesc:
      "Spróbuj ponownie lub wybierz miejsce z podpowiedzi.",
    suggestionType: {
      state: "Stan",
      airport: "Lotnisko",
      landmark: "Punkt orientacyjny",
      city: "Miasto",
    },
    validation: {
      checkoutAfterCheckin: "Wyjazd musi być po przyjeździe",
      adultsGteRooms:
        "Liczba dorosłych musi być większa lub równa liczbie pokoi",
      adultsRoomsMin: "Dorośli i pokoje muszą wynosić co najmniej 1",
    },
  },
  countries: {
    "United States": "Stany Zjednoczone",
    Greece: "Grecja",
    Indonesia: "Indonezja",
    Thailand: "Tajlandia",
    Mexico: "Meksyk",
    "South Pacific": "Południowy Pacyfik",
    France: "Francja",
    "United Kingdom": "Wielka Brytania",
    Japan: "Japonia",
    Italy: "Włochy",
    Spain: "Hiszpania",
    "United Arab Emirates": "Zjednoczone Emiraty Arabskie",
    Australia: "Australia",
  },
};
