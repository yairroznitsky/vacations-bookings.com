import type { LandingTranslations } from "./types";

export const ptBR: LandingTranslations = {
  heroEyebrow: "Hotéis, resorts e aluguéis",
  heroTitle: "Encontre sua próxima estadia de férias",
  heroSubtitle:
    "Compare hotéis, resorts e aluguéis — e reserve com parceiros de confiança.",
  heroImageAlt:
    "Pôr do sol sobre uma praia de areia com um hotel resort ao fundo",
  featuresTitle: (siteName) => `Por que viajantes usam ${siteName}`,
  featuresSubtitle:
    "Uma busca, parceiros confiáveis e um caminho claro do destino à reserva.",
  features: [
    {
      title: "Planeje sua escapada",
      desc: "Compare resorts, hotéis e aluguéis lado a lado e escolha a estadia ideal para sua viagem.",
    },
    {
      title: "Da praia à cidade",
      desc: "Fins de semana, praia ou estadias longas — opções em litorais e cidades do mundo todo.",
    },
    {
      title: "Reserve com confiança",
      desc: "Políticas flexíveis em muitas listagens, com parceiros de viagem que você já conhece.",
    },
  ],
  destinationsTitle: "Destinos de férias populares",
  destinationsSubtitle: "Praias, ilhas e escapadas urbanas.",
  compareRates: "Comparar estadias",
  checkingRates: "Consultando tarifas…",
  ctaTitle: "Comece a planejar sua escapada",
  ctaSubtitle:
    "Busque um destino para comparar estadias e seguir para um parceiro de reserva.",
  destinationNotFound: (city) =>
    `Não encontramos ${city}. Tente buscar manualmente acima.`,
  reviewSearch: "Revise sua busca",
  ratesUnavailable: "Tarifas indisponíveis no momento",
  ratesUnavailableDesc: "Tente novamente usando a barra de busca acima.",
  destinationPickTitle: "Selecione das sugestões",
  destinationPickDesc:
    "Digite um destino e escolha uma correspondência no menu suspenso.",
  footer: {
    about: "Sobre",
    contact: "Contato",
    privacy: "Privacidade",
    rightsReserved: "Todos os direitos reservados.",
    operatedBy: (siteName, operator) =>
      `${siteName} é operado por ${operator}.`,
    commission: (siteName) =>
      `${siteName} pode receber uma comissão quando você reserva por links de parceiros.`,
  },
  search: {
    where: "Onde",
    wherePlaceholder: "Para onde você vai?",
    whereError: "Escolha onde você vai se hospedar",
    loadingSuggestions: "Carregando sugestões...",
    when: "Quando",
    pickDates: "Escolher datas",
    checkIn: "Check-in",
    checkOut: "Check-out",
    selectCheckIn: "Selecionar check-in",
    selectCheckOut: "Selecionar check-out",
    selectDate: "Selecionar data",
    pickYourDates: "Escolha suas datas",
    chooseArrival: "Escolha sua data de chegada",
    chooseDeparture: "Agora escolha sua data de partida",
    pickCheckInFirst: "Escolha o check-in primeiro, depois o check-out",
    nowChooseCheckOut: "Agora escolha seu check-out",
    who: "Quem",
    guestSummary: (guests, rooms) =>
      `${guests} hóspede${guests !== 1 ? "s" : ""} · ${rooms} quarto${rooms !== 1 ? "s" : ""}`,
    adults: "Adultos",
    adultsSub: "13 anos ou mais",
    children: "Crianças",
    childrenSub: "0–12 anos",
    rooms: "Quartos",
    comparePrices: "Comparar estadias",
    comparingRates: "Comparando estadias...",
    datesRequired: "Datas obrigatórias",
    datesRequiredDesc:
      "Selecione check-in e check-out para comparar hospedagens disponíveis.",
    destinationTooShort: "Destino muito curto",
    destinationTooShortDesc:
      "Digite pelo menos 3 letras — cidade, hotel ou código de aeroporto (ex.: GRU).",
    airportNotFound: "Aeroporto não encontrado",
    airportNotFoundDesc: (code) =>
      `Nenhum aeroporto corresponde a "${code}". Verifique o código e tente novamente.`,
    couldNotCompare: "Não foi possível comparar tarifas",
    couldNotCompareDesc:
      "Tente novamente ou selecione um destino das sugestões.",
    suggestionType: {
      state: "Estado",
      airport: "Aeroporto",
      landmark: "Ponto turístico",
      city: "Cidade",
    },
    validation: {
      checkoutAfterCheckin: "O check-out deve ser após o check-in",
      adultsGteRooms:
        "O número de adultos deve ser maior ou igual ao de quartos",
      adultsRoomsMin: "Adultos e quartos devem ser pelo menos 1",
    },
  },
  countries: {
    "United States": "Estados Unidos",
    Greece: "Grécia",
    Indonesia: "Indonésia",
    Thailand: "Tailândia",
    Mexico: "México",
    "South Pacific": "Pacífico Sul",
    France: "França",
    "United Kingdom": "Reino Unido",
    Japan: "Japão",
    Italy: "Itália",
    Spain: "Espanha",
    "United Arab Emirates": "Emirados Árabes Unidos",
    Australia: "Austrália",
  },
};
