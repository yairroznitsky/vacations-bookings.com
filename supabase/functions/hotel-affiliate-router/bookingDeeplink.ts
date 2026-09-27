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
  AAC: "1039",
  AAE: "1097",
  AAL: "974",
  AAN: "1051",
  AAR: "881",
  ABA: "2643",
  ABB: "8253",
  ABD: "93",
  ABJ: "372",
  ABQ: "141",
  ABV: "3640",
  ABZ: "250",
  ACA: "391",
  ACC: "453",
  ACE: "161",
  ADB: "252",
  ADD: "365",
  ADE: "654",
  ADJ: "1058",
  ADL: "178",
  ADZ: "2400",
  AEP: "156",
  AES: "448",
  AEY: "1004",
  AGA: "364",
  AGP: "95",
  AGT: "3754",
  AGU: "3424",
  AHB: "347",
  AJF: "657",
  AKL: "112",
  AKX: "3234",
  ALA: "3235",
  ALB: "220",
  ALC: "138",
  ALG: "204",
  ALP: "142",
  AMD: "2931",
  AMM: "267",
  AMQ: "3014",
  AMS: "9",
  ANC: "159",
  ANF: "2325",
  ANR: "593",
  ANU: "1147",
  AOE: "8470",
  AOJ: "3157",
  APL: "3498",
  APW: "673",
  AQI: "732",
  AQJ: "1057",
  AQP: "8057",
  ARN: "55",
  ASB: "8052",
  ASR: "4142",
  ASU: "3755",
  ASW: "1029",
  ATH: "841",
  ATL: "1",
  ATQ: "2932",
  ATZ: "1037",
  AUA: "294",
  AUH: "198",
  AUS: "125",
  AVV: "1067",
  AWA: "8222",
  AWZ: "8222",
  AYT: "105",
  BAH: "182",
  BAQ: "386",
  BAV: "8134",
  BBI: "7997",
  BBK: "1572",
  BBU: "749",
  BCD: "3786",
  BCM: "1014",
  BCN: "41",
  BCU: "9081",
  BDA: "416",
  BDJ: "600",
  BDL: "133",
  BDQ: "8084",
  BDS: "470",
  BEG: "319",
  BEL: "337",
  BEM: "8473",
  BEN: "113",
  BER: "7944",
  BES: "446",
  BEW: "3499",
  BEY: "257",
  BFN: "637",
  BFS: "196",
  BGF: "769",
  BGI: "281",
  BGO: "193",
  BGW: "8003",
  BGY: "371",
  BHK: "8067",
  BHM: "221",
  BHO: "2934",
  BHX: "119",
  BIA: "401",
  BIO: "256",
  BIS: "604",
  BJA: "629",
  BJL: "567",
  BJM: "763",
  BJV: "341",
  BJX: "3426",
  BKI: "219",
  BKK: "21",
  BKO: "548",
  BLA: "7830",
  BLJ: "1099",
  BLL: "299",
  BLQ: "203",
  BLR: "7995",
  BLZ: "3370",
  BME: "1221",
  BNA: "111",
  BND: "77",
  BNE: "77",
  BNX: "965",
  BOD: "217",
  BOG: "2405",
  BOI: "231",
  BOJ: "474",
  BOM: "89",
  BON: "594",
  BOO: "327",
  BOS: "32",
  BOY: "799",
  BPN: "463",
  BPS: "1606",
  BQT: "3841",
  BRC: "546",
  BRE: "292",
  BRI: "355",
  BRM: "7832",
  BRS: "241",
  BRU: "46",
  BSA: "3952",
  BSB: "132",
  BSG: "2628",
  BSK: "1101",
  BSL: "200",
  BSR: "3107",
  BSZ: "3286",
  BTH: "3016",
  BTJ: "718",
  BTR: "437",
  BTS: "576",
  BTV: "373",
  BUD: "167",
  BUF: "172",
  BUQ: "7919",
  BUR: "169",
  BUS: "2782",
  BVA: "527",
  BVB: "721",
  BVC: "2295",
  BWA: "3560",
  BWI: "43",
  BWN: "369",
  BXY: "9380",
  BZE: "1536",
  BZV: "522",
  CAE: "367",
  CAG: "853",
  CAI: "114",
  CAN: "70",
  CAP: "2898",
  CAY: "532",
  CBB: "1544",
  CCJ: "2939",
  CCK: "8271",
  CCP: "2330",
  CCS: "118",
  CCU: "247",
  CDG: "8",
  CEB: "3810",
  CEI: "492",
  CEK: "143",
  CFE: "406",
  CFK: "8272",
  CFU: "847",
  CGB: "1621",
  CGH: "1054",
  CGK: "85",
  CGN: "150",
  CGO: "2363",
  CGP: "1521",
  CGQ: "2364",
  CGY: "8169",
  CHC: "173",
  CHQ: "905",
  CHS: "309",
  CIA: "454",
  CIT: "3236",
  CIX: "3764",
  CJB: "2940",
  CJJ: "8200",
  CJS: "3428",
  CJU: "103",
  CKG: "2365",
  CKY: "589",
  CLE: "83",
  CLJ: "715",
  CLO: "2410",
  CLT: "36",
  CMB: "246",
  CMH: "136",
  CMN: "201",
  CMW: "246",
  CND: "754",
  CNF: "435",
  CNN: "8249",
  CNS: "222",
  CNX: "269",
  COK: "7981",
  COO: "606",
  COR: "331",
  COS: "279",
  COU: "5560",
  COV: "9530",
  CPH: "56",
  CPT: "175",
  CRA: "3848",
  CRD: "578",
  CRK: "3794",
  CRL: "428",
  CRW: "5573",
  CRZ: "9191",
  CSX: "2366",
  CTA: "861",
  CTG: "2415",
  CTS: "54",
  CTU: "8731",
  CUL: "8152",
  CUN: "120",
  CUR: "346",
  CUU: "3434",
  CUZ: "3766",
  CVG: "58",
  CWB: "213",
  CWL: "312",
  CXI: "3266",
  CXR: "8038",
  CYS: "5605",
  CZL: "8033",
  CZM: "487",
  DAC: "235",
  DAD: "7870",
  DAL: "135",
  DAM: "1402",
  DAR: "460",
  DAT: "8074",
  DBB: "9101",
  DBV: "510",
  DCA: "78",
  DEB: "1002",
  DEL: "109",
  DEN: "10",
  DFW: "6",
  DIA: "225",
  DIL: "2600",
  DIR: "755",
  DJE: "271",
  DJG: "1104",
  DJJ: "3018",
  DJT: "146",
  DLA: "494",
  DLC: "7988",
  DLM: "272",
  DMB: "3237",
  DME: "1069",
  DMK: "1069",
  DMM: "228",
  DNH: "8053",
  DOH: "225",
  DPS: "168",
  DQM: "8188",
  DRP: "8734",
  DRS: "301",
  DRW: "1280",
  DSM: "302",
  DSN: "8135",
  DSS: "8203",
  DSY: "9602",
  DTM: "368",
  DTW: "18",
  DUB: "69",
  DUR: "260",
  DUS: "65",
  DVO: "8064",
  DWC: "7929",
  DXB: "76",
  DXN: "9675",
  DYG: "8095",
  DYU: "4083",
  DZA: "8062",
  DZN: "3238",
  EBB: "535",
  EBL: "8078",
  ECN: "7942",
  EDI: "144",
  EDL: "792",
  EDO: "5",
  EHU: "8881",
  EIN: "588",
  EIS: "7883",
  ELP: "216",
  ELQ: "559",
  ELS: "570",
  EMA: "262",
  ENO: "9637",
  ENU: "3643",
  ERF: "896",
  ESB: "212",
  ESM: "2604",
  ETM: "8282",
  EUN: "7889",
  EVE: "505",
  EVN: "1198",
  EWR: "22",
  EZE: "157",
  FAE: "978",
  FAO: "166",
  FAT: "388",
  FBM: "2542",
  FCO: "29",
  FDF: "303",
  FDH: "536",
  FEZ: "704",
  FIH: "582",
  FJR: "781",
  FKB: "874",
  FKI: "2544",
  FLL: "61",
  FLN: "324",
  FLR: "322",
  FMM: "1055",
  FMO: "307",
  FNA: "3934",
  FNC: "268",
  FNJ: "268",
  FOC: "2367",
  FOE: "5957",
  FOR: "258",
  FPO: "1499",
  FRA: "7",
  FRW: "1573",
  FSC: "613",
  FSZ: "7990",
  FUE: "199",
  FUK: "48",
  GAN: "3387",
  GAU: "8",
  GBE: "1574",
  GCM: "396",
  GDL: "148",
  GDN: "844",
  GEG: "229",
  GEO: "8089",
  GES: "3800",
  GHV: "8732",
  GIB: "7986",
  GIG: "139",
  GJL: "1107",
  GLA: "127",
  GMP: "38",
  GND: "525",
  GNJ: "1489",
  GNY: "8503",
  GOA: "379",
  GOH: "987",
  GOI: "2945",
  GOJ: "176",
  GOM: "2547",
  GOT: "176",
  GOU: "761",
  GOX: "8393",
  GRJ: "616",
  GRO: "472",
  GRQ: "8063",
  GRR: "290",
  GRU: "72",
  GRV: "72",
  GRZ: "438",
  GSM: "248",
  GSO: "248",
  GSV: "248",
  GUA: "2875",
  GUM: "214",
  GUW: "3239",
  GVA: "124",
  GWD: "3697",
  GXF: "767",
  GYD: "1488",
  GYE: "300",
  GYN: "1653",
  GZT: "4153",
  HAH: "710",
  HAJ: "158",
  HAK: "2368",
  HAM: "99",
  HAN: "1052",
  HAQ: "3388",
  HAS: "563",
  HBA: "376",
  HBE: "1038",
  HDY: "419",
  HEA: "4",
  HEL: "94",
  HER: "842",
  HET: "2369",
  HFE: "8151",
  HGA: "3961",
  HGH: "2371",
  HHN: "523",
  HIA: "8161",
  HIJ: "3165",
  HIR: "3947",
  HKD: "3167",
  HKG: "17",
  HKT: "197",
  HLA: "1026",
  HLD: "2372",
  HLN: "6171",
  HLP: "619",
  HMB: "8032",
  HMO: "326",
  HND: "5",
  HNL: "44",
  HOF: "803",
  HOG: "4049",
  HOU: "13",
  HPH: "7873",
  HRB: "2373",
  HRE: "7920",
  HRG: "839",
  HSA: "8553",
  HSG: "3208",
  HSN: "8172",
  HSR: "9054",
  HSS: "9597",
  HUI: "7874",
  HUN: "4076",
  HUX: "568",
  HWR: "9670",
  HYD: "7978",
  IAD: "57",
  IAH: "13",
  IAR: "13",
  IAS: "823",
  IBR: "7947",
  IBZ: "170",
  ICN: "68",
  IDR: "2948",
  IFN: "8834",
  IGU: "508",
  IKT: "3171",
  IKU: "8526",
  ILG: "6307",
  ILO: "8145",
  ILR: "3645",
  IMF: "2949",
  INC: "68",
  IND: "128",
  INI: "969",
  INN: "457",
  IOM: "452",
  IPC: "2336",
  IPH: "690",
  IQQ: "2337",
  IQT: "3769",
  ISB: "263",
  ISK: "8259",
  IST: "8248",
  ITM: "60",
  IVL: "691",
  IXB: "2951",
  IXC: "2952",
  IXE: "2953",
  IXZ: "2968",
  JAF: "4014",
  JAI: "2969",
  JAN: "342",
  JAX: "160",
  JCL: "9107",
  JED: "93",
  JFK: "23",
  JGN: "8235",
  JHB: "377",
  JHG: "2374",
  JIB: "2590",
  JIJ: "8100",
  JJN: "8130",
  JMK: "850",
  JNB: "87",
  JNU: "6365",
  JPA: "1676",
  JRO: "630",
  JTR: "852",
  JUB: "4028",
  JUJ: "1166",
  JUL: "3771",
  KAD: "3647",
  KAN: "3648",
  KBL: "1091",
  KBV: "1072",
  KCH: "243",
  KCZ: "3176",
  KDH: "1092",
  KDU: "3701",
  KEF: "338",
  KEJ: "338",
  KER: "9279",
  KGD: "711",
  KGF: "3240",
  KGL: "711",
  KGS: "848",
  KHG: "2376",
  KHH: "115",
  KHI: "162",
  KHN: "2377",
  KIH: "49",
  KIJ: "3177",
  KIK: "8849",
  KIM: "731",
  KIN: "311",
  KIS: "8030",
  KIX: "49",
  KJA: "8848",
  KKJ: "3178",
  KLO: "3803",
  KLU: "625",
  KLV: "809",
  KMG: "2378",
  KMI: "3180",
  KMJ: "3181",
  KMQ: "3182",
  KMS: "2838",
  KNO: "8031",
  KOA: "245",
  KOJ: "145",
  KOS: "8215",
  KOV: "8317",
  KQT: "8474",
  KRK: "843",
  KRN: "661",
  KRR: "843",
  KRS: "418",
  KRT: "4029",
  KSA: "2647",
  KSF: "2805",
  KSN: "8319",
  KTI: "9623",
  KTM: "289",
  KTT: "662",
  KTW: "666",
  KUF: "67",
  KUL: "67",
  KUN: "811",
  KUO: "583",
  KUT: "2783",
  KVA: "993",
  KWE: "2379",
  KWI: "184",
  KWL: "2380",
  KYA: "4158",
  KZN: "2852",
  KZO: "8322",
  LAD: "1131",
  LAE: "3739",
  LAN: "495",
  LAO: "3804",
  LAQ: "3316",
  LAS: "12",
  LAX: "3",
  LBA: "317",
  LBD: "4084",
  LBV: "431",
  LCA: "153",
  LCJ: "870",
  LEJ: "274",
  LEX: "403",
  LFW: "664",
  LGA: "39",
  LGB: "475",
  LGK: "415",
  LGW: "20",
  LHE: "254",
  LHR: "4",
  LHW: "8114",
  LIH: "244",
  LIL: "384",
  LIM: "179",
  LIN: "130",
  LIR: "2497",
  LIS: "101",
  LIT: "6525",
  LJG: "7991",
  LJU: "400",
  LKO: "7998",
  LLA: "381",
  LLW: "650",
  LNK: "507",
  LNZ: "450",
  LOP: "7969",
  LOS: "230",
  LPA: "102",
  LPB: "1548",
  LPI: "1081",
  LPL: "266",
  LPP: "765",
  LPQ: "3288",
  LRM: "541",
  LTN: "137",
  LTO: "3447",
  LUN: "518",
  LUX: "305",
  LUZ: "7970",
  LVI: "7908",
  LWN: "1199",
  LXA: "8128",
  LXR: "838",
  LYA: "8021",
  LYG: "8170",
  LYP: "3702",
  LYS: "142",
  MAA: "186",
  MAD: "16",
  MAH: "232",
  MAJ: "3404",
  MAN: "47",
  MAO: "334",
  MAR: "345",
  MBA: "409",
  MBJ: "215",
  MCI: "82",
  MCO: "24",
  MCT: "240",
  MCX: "24",
  MCY: "1361",
  MCZ: "7935",
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
