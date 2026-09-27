export interface BookingAirportLocation {
  airportCode: string;
  airportName?: string;
  cityName?: string;
  regionName?: string;
  countryName?: string;
  entityKey?: string;
  typedQuery?: string;
  bookingDestId?: string;
}

/** Keep in sync with src/lib/bookingAirportDestIds.ts */
const BOOKING_AIRPORT_DEST_IDS: Readonly<Record<string, string>> = {
  ACC: "453",
  ADD: "365",
  AGP: "95",
  AKL: "112",
  ALA: "3235",
  ALB: "220",
  AMM: "267",
  AMS: "9",
  ANR: "593",
  ANU: "1147",
  AQJ: "1057",
  ARN: "55",
  ATH: "841",
  ATL: "1",
  AUA: "294",
  AUH: "198",
  AUS: "125",
  AYT: "105",
  BAH: "182",
  BCN: "41",
  BDL: "133",
  BEG: "319",
  BER: "7944",
  BEY: "257",
  BFS: "196",
  BGI: "281",
  BGW: "8003",
  BHX: "119",
  BIS: "604",
  BJV: "341",
  BKK: "21",
  BLQ: "203",
  BNA: "111",
  BNE: "77",
  BOD: "217",
  BOG: "2405",
  BOI: "231",
  BOM: "89",
  BOS: "32",
  BRS: "241",
  BRU: "46",
  BTR: "437",
  BTV: "373",
  BUD: "167",
  BWI: "43",
  CAE: "367",
  CAI: "114",
  CAN: "70",
  CDG: "8",
  CEB: "3810",
  CGK: "85",
  CHS: "309",
  CJU: "103",
  CMB: "246",
  CMH: "136",
  CMN: "201",
  CNX: "269",
  COU: "5560",
  CPH: "56",
  CPT: "175",
  CRW: "5573",
  CTG: "2415",
  CTS: "54",
  CTU: "8731",
  CUN: "120",
  CUR: "346",
  CWL: "312",
  CYS: "5605",
  DAC: "235",
  DAD: "7870",
  DBV: "510",
  DCA: "78",
  DEL: "109",
  DEN: "10",
  DFW: "6",
  DLC: "7988",
  DOH: "225",
  DPS: "168",
  DSM: "302",
  DUB: "69",
  DXB: "76",
  EDI: "144",
  EVN: "1198",
  EZE: "157",
  FCO: "29",
  FLR: "322",
  FOE: "5957",
  FRA: "7",
  FUK: "48",
  GDN: "844",
  GIG: "139",
  GLA: "127",
  GND: "525",
  GRU: "72",
  GUM: "214",
  GVA: "124",
  GYD: "1488",
  HAN: "1052",
  HEL: "94",
  HER: "842",
  HGH: "2371",
  HIJ: "3165",
  HKG: "17",
  HKT: "197",
  HLN: "6171",
  HND: "5",
  HNL: "44",
  HRG: "839",
  IAH: "13",
  IBZ: "170",
  ICN: "68",
  ILG: "6307",
  IND: "128",
  INN: "457",
  ISB: "263",
  IST: "8248",
  JAI: "2969",
  JAN: "342",
  JFK: "23",
  JMK: "850",
  JNB: "87",
  JNU: "6365",
  JTR: "852",
  KBL: "1091",
  KEF: "338",
  KGL: "711",
  KHI: "162",
  KIN: "311",
  KIX: "49",
  KRK: "843",
  KTM: "289",
  KUL: "67",
  KWI: "184",
  LAN: "495",
  LAS: "12",
  LAX: "3",
  LEX: "403",
  LHE: "254",
  LHR: "4",
  LIM: "179",
  LIS: "101",
  LIT: "6525",
  LNK: "507",
  LOS: "230",
  LPL: "266",
  LPQ: "3288",
  LUX: "305",
  LXR: "838",
  LYS: "142",
  MAD: "16",
  MAN: "47",
  MBJ: "215",
  MCO: "24",
  MCT: "240",
  MDT: "356",
  MEL: "59",
  MEX: "42",
  MFM: "188",
  MGM: "6700",
  MHT: "1076",
  MIA: "19",
  MLE: "297",
  MNL: "81",
  MPH: "3807",
  MPM: "529",
  MRS: "147",
  MRU: "293",
  MSN: "339",
  MSP: "15",
  MSY: "98",
  MUC: "35",
  MVD: "7816",
  MXP: "52",
  NAN: "380",
  NAP: "181",
  NAS: "1508",
  NAV: "4162",
  NBO: "223",
  NCE: "108",
  NGO: "7940",
  NKG: "236",
  OKA: "91",
  OKC: "207",
  OLM: "6985",
  OPO: "238",
  ORD: "2",
  ORK: "295",
  OSL: "73",
  OTP: "280",
  PDX: "80",
  PEK: "33",
  PEN: "251",
  PER: "163",
  PHL: "34",
  PHX: "11",
  PIR: "7096",
  PMI: "50",
  PNH: "9623",
  PPT: "320",
  PRG: "143",
  PTY: "3730",
  PUJ: "286",
  PUS: "104",
  PVD: "1078",
  PVG: "129",
  PVR: "275",
  PWM: "1077",
  RAK: "332",
  RDU: "97",
  RGN: "3541",
  RIC: "259",
  RIX: "468",
  RNO: "164",
  RTM: "422",
  RUH: "107",
  RUN: "325",
  SAF: "7319",
  SAN: "71",
  SAT: "131",
  SAV: "298",
  SCL: "152",
  SDQ: "249",
  SEA: "27",
  SEZ: "7996",
  SFO: "14",
  SGN: "7878",
  SHA: "74",
  SIN: "25",
  SJD: "323",
  SJO: "7938",
  SJU: "100",
  SKD: "7823",
  SKG: "849",
  SLC: "51",
  SLE: "7377",
  SMF: "117",
  SNN: "261",
  SOF: "362",
  SPI: "7409",
  SPN: "455",
  SPU: "481",
  SSH: "837",
  SVQ: "270",
  SYD: "31",
  SZG: "344",
  SZX: "122",
  TAO: "2388",
  TAS: "9669",
  TBS: "614",
  TLH: "7530",
  TLL: "479",
  TLV: "113",
  TPE: "53",
  TRN: "233",
  TTN: "7559",
  UBN: "8366",
  UIO: "264",
  UVF: "513",
  VCE: "177",
  VFA: "7923",
  VIE: "84",
  VLC: "265",
  VNO: "476",
  VTE: "3293",
  WAW: "165",
  WDH: "709",
  XIY: "171",
  YOW: "205",
  YQB: "2135",
  YUL: "116",
  YVR: "64",
  YYC: "121",
  YYZ: "26",
  ZAG: "352",
  ZNZ: "644",
  ZQN: "3632",
  ZRH: "40",
};

const lookupBookingAirportDestId = (iataCode: string | undefined): string | undefined => {
  if (!iataCode) return undefined;
  const normalized = iataCode.trim().toUpperCase();
  if (!/^[A-Z]{3}$/.test(normalized)) return undefined;
  return BOOKING_AIRPORT_DEST_IDS[normalized];
};

const titleCaseWord = (word: string): string => {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

const formatBookingAirportTitle = (
  airportName: string | undefined,
  entityKey?: string
): string => {
  if (entityKey?.startsWith("place:")) {
    const fromKey = entityKey
      .slice("place:".length)
      .split("_")
      .map(titleCaseWord)
      .join(" ");
    if (fromKey) return fromKey;
  }
  const trimmed = airportName?.trim() ?? "";
  if (!trimmed) return "";
  let name = trimmed.replace(/\s*\([A-Za-z]{3}\)\s*$/, "").trim();
  if (/\bIntl\.?\b/i.test(name)) {
    name = name.replace(/\bIntl\.?\b/gi, "International");
  }
  if (!/\bAirport\b/i.test(name)) {
    name = `${name} Airport`;
  }
  return name.replace(/\s+/g, " ").trim();
};

const buildBookingAirportSearchString = (location: BookingAirportLocation): string => {
  const code = location.airportCode.trim().toUpperCase();
  const airportTitle = formatBookingAirportTitle(location.airportName, location.entityKey);
  const city = location.cityName?.trim() || airportTitle.replace(/\s+Airport$/i, "").trim();
  const country = location.countryName?.trim() || "";
  const region = location.regionName?.trim() || "";
  const parts: string[] = [`${airportTitle} (${code})`, `${city} (${code})`];
  const regionLine = [region, country].filter(Boolean).join(" ").trim();
  if (regionLine && regionLine !== country) parts.push(regionLine);
  if (country) parts.push(country);
  return parts.join(", ");
};

const buildBookingAirportSsne = (location: BookingAirportLocation): string => {
  const title = formatBookingAirportTitle(location.airportName, location.entityKey);
  if (title) return title;
  const typed = location.typedQuery?.trim();
  if (typed) return typed;
  return location.airportCode.trim().toUpperCase();
};

const resolveBookingAirportDestId = (location: BookingAirportLocation): string | undefined => {
  const explicit = location.bookingDestId?.trim();
  if (explicit) return explicit;
  return lookupBookingAirportDestId(location.airportCode);
};

export interface BookingDeeplinkInput {
  query: string;
  checkin: string;
  checkout: string;
  rooms: number;
  adults: number;
  children: number;
  children_ages: number[];
  click_id: string;
  latitude?: number;
  longitude?: number;
  airport?: BookingAirportLocation;
}

export interface BookingAffiliateConfig {
  tid: string;
  auth: string;
  baseUrl: string;
  currency: string;
  lang: string;
}

export const BOOKING_CURRENCY = "USD";
export const BOOKING_LANG = "en-us";

const isValidCoordinate = (value: number, min: number, max: number) =>
  Number.isFinite(value) && value >= min && value <= max;

const formatCoordinate = (value: number) => String(value);

export const parseSkyscannerLocation = (
  value: unknown
): { lat: string; lng: string } | null => {
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return null;

    const commaParts = trimmed.split(",").map((part) => part.trim());
    if (commaParts.length >= 2) {
      const lat = Number(commaParts[0]);
      const lng = Number(commaParts[1]);
      if (isValidCoordinate(lat, -90, 90) && isValidCoordinate(lng, -180, 180)) {
        return { lat: formatCoordinate(lat), lng: formatCoordinate(lng) };
      }
    }
    return null;
  }

  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    const lat = Number(record.latitude ?? record.lat);
    const lng = Number(record.longitude ?? record.lng ?? record.lon);
    if (isValidCoordinate(lat, -90, 90) && isValidCoordinate(lng, -180, 180)) {
      return { lat: formatCoordinate(lat), lng: formatCoordinate(lng) };
    }
  }

  return null;
};

export const buildBookingSearchResultsUrl = (
  input: BookingDeeplinkInput,
  options?: Pick<BookingAffiliateConfig, "currency" | "lang">
) => {
  const currency = options?.currency ?? BOOKING_CURRENCY;
  const lang = options?.lang ?? BOOKING_LANG;

  const airport = input.airport;
  const ss = airport ? buildBookingAirportSearchString(airport) : input.query.trim();

  const params = new URLSearchParams({
    ss,
    checkin: input.checkin,
    checkout: input.checkout,
    group_adults: String(input.adults),
    group_children: String(input.children),
    no_rooms: String(input.rooms),
    selected_currency: currency,
    lang,
  });

  if (airport) {
    const ssne = buildBookingAirportSsne(airport);
    params.set("ssne", ssne);
    params.set("ssne_untouched", ssne);
    params.set("sb", "1");
    params.set("src_elem", "sb");
    params.set("src", "searchresults");
    params.set("search_selected", "true");
    params.set("dest_type", "airport");
    const destId = resolveBookingAirportDestId(airport);
    if (destId) {
      params.set("dest_id", destId);
    }
  }

  for (const age of input.children_ages) {
    params.append("age", String(age));
  }

  if (
    !airport &&
    typeof input.latitude === "number" &&
    typeof input.longitude === "number" &&
    isValidCoordinate(input.latitude, -90, 90) &&
    isValidCoordinate(input.longitude, -180, 180)
  ) {
    params.set("latitude", formatCoordinate(input.latitude));
    params.set("longitude", formatCoordinate(input.longitude));
  }

  return `https://www.booking.com/searchresults.html?${params.toString()}`;
};

export const buildBookingAffiliateRedirectUrl = (
  input: BookingDeeplinkInput,
  config: BookingAffiliateConfig
) => {
  const innerUrl = buildBookingSearchResultsUrl(input, config);
  const outerParams = new URLSearchParams({
    tid: config.tid,
    auth: config.auth,
    puid: input.click_id,
    subid: input.click_id,
    osr: innerUrl,
  });

  const baseUrl = config.baseUrl.replace(/\/$/, "");
  return `${baseUrl}?${outerParams.toString()}`;
};

export const getDefaultBookingAffiliateConfig = (): BookingAffiliateConfig => ({
  tid: Deno.env.get("BOOKING_AFFILIATE_TID") ?? "1321636",
  auth: Deno.env.get("BOOKING_AFFILIATE_AUTH") ?? "ofxbqjcsboet",
  baseUrl:
    Deno.env.get("BOOKING_AFFILIATE_BASE_URL") ??
    "https://selfashelookedrou.com/brands_redirect",
  currency: BOOKING_CURRENCY,
  lang: BOOKING_LANG,
});

// ─── CJ affiliate ───────────────────────────────────────────────────────────

export interface CjAffiliateConfig {
  clickDomain: string;
  pid: string;
  aid: string;
}

const normalizeCjDomain = (domain: string): string =>
  domain
    .replace(/^https?:\/\//i, "")
    .replace(/^www\./i, "")
    .trim();

export const getDefaultCjConfig = (): CjAffiliateConfig => ({
  clickDomain: Deno.env.get("CJ_CLICK_DOMAIN") ?? "kqzyfj.com",
  pid: Deno.env.get("CJ_PID") ?? "101841809",
  aid: Deno.env.get("CJ_AID") ?? "17293132",
});

/**
 * Wraps a Booking.com search URL in a CJ affiliate click URL.
 * https://www.{domain}/click-{pid}-{aid}?url={bookingUrl}&sid={click_id}
 */
export const buildCjBookingUrl = (
  input: BookingDeeplinkInput,
  config: CjAffiliateConfig = getDefaultCjConfig()
): string => {
  const innerUrl = buildBookingSearchResultsUrl(input);
  const domain = normalizeCjDomain(config.clickDomain);

  const outerParams = new URLSearchParams({
    url: innerUrl,
    sid: input.click_id,
  });

  return `https://www.${domain}/click-${config.pid}-${config.aid}?${outerParams.toString()}`;
};
