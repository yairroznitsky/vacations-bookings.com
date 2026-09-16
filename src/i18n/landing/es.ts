import type { LandingTranslations } from "./types";

export const es: LandingTranslations = {
  heroEyebrow: "Hoteles, resorts y alquileres",
  heroTitle: "Encuentra tu próxima estancia de vacaciones",
  heroSubtitle:
    "Compara hoteles, resorts y alquileres — y reserva con socios de confianza.",
  heroImageAlt:
    "Atardecer sobre una playa de arena con un hotel resort al fondo",
  featuresTitle: (siteName) => `Por qué los viajeros usan ${siteName}`,
  featuresSubtitle:
    "Una búsqueda, socios de confianza y un camino claro del destino a la reserva.",
  features: [
    {
      title: "Planifica tu escapada",
      desc: "Compara resorts, hoteles y alquileres en paralelo y elige la estancia ideal para tu viaje.",
    },
    {
      title: "De playa a ciudad",
      desc: "Fines de semana, playa o estancias largas — opciones en costas y ciudades de todo el mundo.",
    },
    {
      title: "Reserva con confianza",
      desc: "Políticas flexibles en muchos anuncios, respaldados por socios de viaje que ya conoces.",
    },
  ],
  destinationsTitle: "Destinos vacacionales populares",
  destinationsSubtitle: "Playas, islas y escapadas urbanas.",
  compareRates: "Comparar estancias",
  checkingRates: "Consultando tarifas…",
  ctaTitle: "Empieza a planear tu escapada",
  ctaSubtitle:
    "Busca un destino para comparar estancias y continuar con un socio de reserva.",
  destinationNotFound: (city) =>
    `No encontramos ${city}. Prueba buscando manualmente arriba.`,
  reviewSearch: "Revisa tu búsqueda",
  ratesUnavailable: "Tarifas no disponibles ahora",
  ratesUnavailableDesc: "Inténtalo de nuevo usando la barra de búsqueda de arriba.",
  destinationPickTitle: "Selecciona de las sugerencias",
  destinationPickDesc:
    "Escribe un destino y elige una coincidencia del menú desplegable.",
  footer: {
    about: "Acerca de",
    contact: "Contacto",
    privacy: "Privacidad",
    rightsReserved: "Todos los derechos reservados.",
    operatedBy: (siteName, operator) =>
      `${siteName} es operado por ${operator}.`,
    commission: (siteName) =>
      `${siteName} puede recibir una comisión cuando reservas a través de enlaces de socios.`,
  },
  search: {
    where: "Dónde",
    wherePlaceholder: "¿A dónde vas?",
    whereError: "Elige dónde te alojarás",
    loadingSuggestions: "Cargando sugerencias...",
    when: "Cuándo",
    pickDates: "Elegir fechas",
    checkIn: "Entrada",
    checkOut: "Salida",
    selectCheckIn: "Seleccionar entrada",
    selectCheckOut: "Seleccionar salida",
    selectDate: "Seleccionar fecha",
    pickYourDates: "Elige tus fechas",
    chooseArrival: "Elige tu fecha de llegada",
    chooseDeparture: "Ahora elige tu fecha de salida",
    pickCheckInFirst: "Elige la entrada primero, luego la salida",
    nowChooseCheckOut: "Ahora elige tu salida",
    who: "Quién",
    guestSummary: (guests, rooms) =>
      `${guests} huésped${guests !== 1 ? "es" : ""} · ${rooms} habitación${rooms !== 1 ? "es" : ""}`,
    adults: "Adultos",
    adultsSub: "13 años o más",
    children: "Niños",
    childrenSub: "0–12 años",
    rooms: "Habitaciones",
    comparePrices: "Comparar estancias",
    comparingRates: "Comparando estancias...",
    datesRequired: "Fechas obligatorias",
    datesRequiredDesc:
      "Selecciona entrada y salida para comparar alojamientos disponibles.",
    destinationTooShort: "Destino demasiado corto",
    destinationTooShortDesc:
      "Escribe al menos 3 letras — ciudad, hotel o código de aeropuerto (p. ej. MAD).",
    airportNotFound: "Aeropuerto no encontrado",
    airportNotFoundDesc: (code) =>
      `Ningún aeropuerto coincide con "${code}". Verifica el código e inténtalo de nuevo.`,
    couldNotCompare: "No se pudieron comparar tarifas",
    couldNotCompareDesc:
      "Inténtalo de nuevo o selecciona un destino de las sugerencias.",
    suggestionType: {
      state: "Estado",
      airport: "Aeropuerto",
      landmark: "Punto de interés",
      city: "Ciudad",
    },
    validation: {
      checkoutAfterCheckin: "La salida debe ser posterior a la entrada",
      adultsGteRooms:
        "El número de adultos debe ser mayor o igual al de habitaciones",
      adultsRoomsMin: "Adultos y habitaciones deben ser al menos 1",
    },
  },
  countries: {
    "United States": "Estados Unidos",
    Greece: "Grecia",
    Indonesia: "Indonesia",
    Thailand: "Tailandia",
    Mexico: "México",
    "South Pacific": "Pacífico Sur",
    France: "Francia",
    "United Kingdom": "Reino Unido",
    Japan: "Japón",
    Italy: "Italia",
    Spain: "España",
    "United Arab Emirates": "Emiratos Árabes Unidos",
    Australia: "Australia",
  },
};
