import type { Coordinates } from '../types';

const ZIP_COORDINATES: Record<string, Coordinates> = {
  // Major metro areas - a representative zip for each
  // Northeast
  '10001': { latitude: 40.7506, longitude: -73.9971 }, // New York, NY
  '10019': { latitude: 40.7654, longitude: -73.9855 }, // New York, NY (Midtown)
  '10128': { latitude: 40.7812, longitude: -73.9505 }, // New York, NY (Upper East)
  '11201': { latitude: 40.6936, longitude: -73.9897 }, // Brooklyn, NY
  '07102': { latitude: 40.7357, longitude: -74.1724 }, // Newark, NJ
  '19102': { latitude: 39.9526, longitude: -75.1652 }, // Philadelphia, PA
  '19103': { latitude: 39.9540, longitude: -75.1717 }, // Philadelphia, PA
  '02101': { latitude: 42.3601, longitude: -71.0589 }, // Boston, MA
  '02134': { latitude: 42.3554, longitude: -71.1317 }, // Boston, MA (Allston)
  '06101': { latitude: 41.7658, longitude: -72.6734 }, // Hartford, CT
  '21201': { latitude: 39.2904, longitude: -76.6122 }, // Baltimore, MD
  '15201': { latitude: 40.4679, longitude: -79.9535 }, // Pittsburgh, PA

  // Southeast
  '20001': { latitude: 38.9072, longitude: -77.0169 }, // Washington, DC
  '20009': { latitude: 38.9192, longitude: -77.0377 }, // Washington, DC
  '23219': { latitude: 37.5407, longitude: -77.4360 }, // Richmond, VA
  '27601': { latitude: 35.7796, longitude: -78.6382 }, // Raleigh, NC
  '28202': { latitude: 35.2271, longitude: -80.8431 }, // Charlotte, NC
  '29401': { latitude: 32.7765, longitude: -79.9311 }, // Charleston, SC
  '30301': { latitude: 33.7490, longitude: -84.3880 }, // Atlanta, GA
  '30303': { latitude: 33.7545, longitude: -84.3915 }, // Atlanta, GA
  '32801': { latitude: 28.5383, longitude: -81.3792 }, // Orlando, FL
  '33101': { latitude: 25.7742, longitude: -80.1936 }, // Miami, FL
  '33131': { latitude: 25.7617, longitude: -80.1918 }, // Miami, FL
  '33602': { latitude: 27.9506, longitude: -82.4572 }, // Tampa, FL
  '32099': { latitude: 30.3322, longitude: -81.6557 }, // Jacksonville, FL
  '70112': { latitude: 29.9511, longitude: -90.0715 }, // New Orleans, LA

  // Midwest
  '60601': { latitude: 41.8819, longitude: -87.6278 }, // Chicago, IL
  '60611': { latitude: 41.8925, longitude: -87.6245 }, // Chicago, IL
  '60614': { latitude: 41.9226, longitude: -87.6523 }, // Chicago, IL
  '48201': { latitude: 42.3411, longitude: -83.0500 }, // Detroit, MI
  '44101': { latitude: 41.4995, longitude: -81.6954 }, // Cleveland, OH
  '43201': { latitude: 39.9831, longitude: -83.0031 }, // Columbus, OH
  '45201': { latitude: 39.1407, longitude: -84.5060 }, // Cincinnati, OH
  '46201': { latitude: 39.7795, longitude: -86.1349 }, // Indianapolis, IN
  '53201': { latitude: 43.0340, longitude: -87.9226 }, // Milwaukee, WI
  '55401': { latitude: 44.9833, longitude: -93.2688 }, // Minneapolis, MN
  '63101': { latitude: 38.6273, longitude: -90.1979 }, // St. Louis, MO
  '64101': { latitude: 39.1044, longitude: -94.5871 }, // Kansas City, MO
  '68101': { latitude: 41.2565, longitude: -95.9345 }, // Omaha, NE
  '50301': { latitude: 41.5868, longitude: -93.6250 }, // Des Moines, IA

  // Southwest
  '75201': { latitude: 32.7887, longitude: -96.7988 }, // Dallas, TX
  '75202': { latitude: 32.7767, longitude: -96.7970 }, // Dallas, TX
  '76102': { latitude: 32.7509, longitude: -97.3305 }, // Fort Worth, TX
  '77001': { latitude: 29.7633, longitude: -95.3633 }, // Houston, TX
  '77002': { latitude: 29.7604, longitude: -95.3698 }, // Houston, TX
  '78201': { latitude: 29.4723, longitude: -98.5255 }, // San Antonio, TX
  '78701': { latitude: 30.2672, longitude: -97.7431 }, // Austin, TX
  '79901': { latitude: 31.7619, longitude: -106.4850 }, // El Paso, TX
  '73101': { latitude: 35.4676, longitude: -97.5164 }, // Oklahoma City, OK
  '85001': { latitude: 33.4484, longitude: -112.0740 }, // Phoenix, AZ
  '85004': { latitude: 33.4510, longitude: -112.0690 }, // Phoenix, AZ
  '85701': { latitude: 32.2226, longitude: -110.9747 }, // Tucson, AZ
  '87101': { latitude: 35.0844, longitude: -106.6504 }, // Albuquerque, NM
  '87501': { latitude: 35.6870, longitude: -105.9378 }, // Santa Fe, NM

  // Mountain/West
  '80201': { latitude: 39.7427, longitude: -104.9876 }, // Denver, CO
  '80202': { latitude: 39.7508, longitude: -104.9953 }, // Denver, CO
  '80301': { latitude: 40.0292, longitude: -105.2509 }, // Boulder, CO
  '84101': { latitude: 40.7608, longitude: -111.8910 }, // Salt Lake City, UT
  '89101': { latitude: 36.1716, longitude: -115.1391 }, // Las Vegas, NV
  '89109': { latitude: 36.1305, longitude: -115.1523 }, // Las Vegas, NV (Strip)
  '59601': { latitude: 46.5891, longitude: -112.0391 }, // Helena, MT
  '59801': { latitude: 46.8721, longitude: -113.9940 }, // Missoula, MT
  '83702': { latitude: 43.6150, longitude: -116.2023 }, // Boise, ID
  '82001': { latitude: 41.1400, longitude: -104.8202 }, // Cheyenne, WY

  // Pacific
  '90001': { latitude: 33.9425, longitude: -118.2551 }, // Los Angeles, CA
  '90012': { latitude: 34.0668, longitude: -118.2418 }, // Los Angeles, CA
  '90024': { latitude: 34.0665, longitude: -118.4421 }, // Los Angeles, CA (Westwood)
  '90210': { latitude: 34.0901, longitude: -118.4065 }, // Beverly Hills, CA
  '92101': { latitude: 32.7195, longitude: -117.1628 }, // San Diego, CA
  '94102': { latitude: 37.7813, longitude: -122.4164 }, // San Francisco, CA
  '94103': { latitude: 37.7726, longitude: -122.4117 }, // San Francisco, CA
  '95101': { latitude: 37.3361, longitude: -121.8906 }, // San Jose, CA
  '95814': { latitude: 38.5816, longitude: -121.4944 }, // Sacramento, CA
  '97201': { latitude: 45.5081, longitude: -122.6894 }, // Portland, OR
  '98101': { latitude: 47.6062, longitude: -122.3321 }, // Seattle, WA
  '98104': { latitude: 47.6019, longitude: -122.3312 }, // Seattle, WA
  '99201': { latitude: 47.6588, longitude: -117.4260 }, // Spokane, WA

  // Alaska & Hawaii
  '99501': { latitude: 61.2181, longitude: -149.9003 }, // Anchorage, AK
  '96801': { latitude: 21.3069, longitude: -157.8583 }, // Honolulu, HI
};

// 3-digit zip prefix to approximate coordinates (state/region centers)
const ZIP_PREFIX_COORDINATES: Record<string, Coordinates> = {
  // Northeast (0xx-1xx)
  '010': { latitude: 42.1015, longitude: -72.5898 }, // Western MA
  '011': { latitude: 42.2626, longitude: -71.8023 }, // Worcester, MA
  '012': { latitude: 42.4499, longitude: -73.2512 }, // Western MA
  '013': { latitude: 42.1015, longitude: -72.5898 }, // Springfield, MA
  '014': { latitude: 42.2626, longitude: -71.8023 }, // Worcester area
  '015': { latitude: 42.2626, longitude: -71.8023 }, // Worcester area
  '016': { latitude: 42.2626, longitude: -71.8023 }, // Worcester area
  '017': { latitude: 42.2626, longitude: -71.8023 }, // Worcester area
  '018': { latitude: 42.4670, longitude: -71.1449 }, // Eastern MA
  '019': { latitude: 42.5259, longitude: -70.8946 }, // Lynn, MA
  '020': { latitude: 42.3601, longitude: -71.0589 }, // Boston, MA
  '021': { latitude: 42.3601, longitude: -71.0589 }, // Boston, MA
  '022': { latitude: 42.3601, longitude: -71.0589 }, // Boston, MA
  '023': { latitude: 41.6558, longitude: -70.2878 }, // Cape Cod, MA
  '024': { latitude: 42.3554, longitude: -71.0640 }, // Boston suburbs
  '025': { latitude: 41.7001, longitude: -71.4162 }, // Rhode Island
  '026': { latitude: 41.7001, longitude: -71.4162 }, // Rhode Island
  '027': { latitude: 41.8240, longitude: -71.4128 }, // Providence, RI
  '028': { latitude: 41.8240, longitude: -71.4128 }, // Providence, RI
  '029': { latitude: 41.8240, longitude: -71.4128 }, // Providence, RI
  '030': { latitude: 42.9956, longitude: -71.4548 }, // New Hampshire
  '031': { latitude: 42.9956, longitude: -71.4548 }, // New Hampshire
  '032': { latitude: 42.9956, longitude: -71.4548 }, // New Hampshire
  '033': { latitude: 43.2081, longitude: -71.5376 }, // Concord, NH
  '034': { latitude: 43.2081, longitude: -71.5376 }, // NH
  '035': { latitude: 44.4759, longitude: -73.2121 }, // Vermont
  '036': { latitude: 44.4759, longitude: -73.2121 }, // Vermont
  '037': { latitude: 44.4759, longitude: -73.2121 }, // Vermont
  '038': { latitude: 42.7654, longitude: -71.4676 }, // Nashua, NH
  '039': { latitude: 43.6591, longitude: -70.2568 }, // Maine
  '040': { latitude: 43.6591, longitude: -70.2568 }, // Portland, ME
  '041': { latitude: 43.6591, longitude: -70.2568 }, // Southern Maine
  '042': { latitude: 43.6591, longitude: -70.2568 }, // Maine
  '043': { latitude: 44.3106, longitude: -69.7795 }, // Central Maine
  '044': { latitude: 44.8012, longitude: -68.7778 }, // Bangor, ME
  '045': { latitude: 43.6591, longitude: -70.2568 }, // Maine
  '046': { latitude: 44.8012, longitude: -68.7778 }, // Northern Maine
  '047': { latitude: 44.8012, longitude: -68.7778 }, // Northern Maine
  '048': { latitude: 44.8012, longitude: -68.7778 }, // Northern Maine
  '049': { latitude: 44.8012, longitude: -68.7778 }, // Northern Maine

  // New York (100-149)
  '100': { latitude: 40.7128, longitude: -74.0060 }, // NYC
  '101': { latitude: 40.7128, longitude: -74.0060 }, // NYC
  '102': { latitude: 40.7128, longitude: -74.0060 }, // NYC
  '103': { latitude: 40.5795, longitude: -74.1502 }, // Staten Island
  '104': { latitude: 40.8448, longitude: -73.8648 }, // Bronx
  '105': { latitude: 40.9312, longitude: -73.8988 }, // Westchester
  '106': { latitude: 41.0534, longitude: -73.5387 }, // White Plains
  '107': { latitude: 41.0534, longitude: -73.5387 }, // Westchester
  '108': { latitude: 40.9312, longitude: -73.8988 }, // Westchester
  '109': { latitude: 41.0534, longitude: -73.5387 }, // Westchester
  '110': { latitude: 40.7282, longitude: -73.7949 }, // Queens
  '111': { latitude: 40.6936, longitude: -73.9897 }, // Brooklyn
  '112': { latitude: 40.6936, longitude: -73.9897 }, // Brooklyn
  '113': { latitude: 40.6936, longitude: -73.9897 }, // Brooklyn
  '114': { latitude: 40.7282, longitude: -73.7949 }, // Queens
  '115': { latitude: 40.7282, longitude: -73.7949 }, // Queens
  '116': { latitude: 40.7282, longitude: -73.7949 }, // Queens
  '117': { latitude: 40.7561, longitude: -73.5869 }, // Long Island
  '118': { latitude: 40.7561, longitude: -73.5869 }, // Long Island
  '119': { latitude: 40.7561, longitude: -73.5869 }, // Long Island
  '120': { latitude: 42.6526, longitude: -73.7562 }, // Albany
  '121': { latitude: 42.6526, longitude: -73.7562 }, // Albany
  '122': { latitude: 42.6526, longitude: -73.7562 }, // Albany
  '123': { latitude: 42.8142, longitude: -73.9396 }, // Schenectady
  '124': { latitude: 41.7004, longitude: -73.9210 }, // Poughkeepsie
  '125': { latitude: 41.7004, longitude: -73.9210 }, // Poughkeepsie
  '126': { latitude: 41.7004, longitude: -73.9210 }, // Poughkeepsie
  '127': { latitude: 41.7004, longitude: -73.9210 }, // Mid-Hudson
  '128': { latitude: 43.0481, longitude: -76.1474 }, // Syracuse area
  '129': { latitude: 42.0987, longitude: -75.9180 }, // Binghamton
  '130': { latitude: 43.0481, longitude: -76.1474 }, // Syracuse
  '131': { latitude: 43.0481, longitude: -76.1474 }, // Syracuse
  '132': { latitude: 43.0481, longitude: -76.1474 }, // Syracuse
  '133': { latitude: 43.0974, longitude: -75.2265 }, // Utica
  '134': { latitude: 43.0974, longitude: -75.2265 }, // Utica
  '135': { latitude: 43.0974, longitude: -75.2265 }, // Utica
  '136': { latitude: 44.6995, longitude: -73.4529 }, // Plattsburgh
  '137': { latitude: 42.0987, longitude: -75.9180 }, // Binghamton
  '138': { latitude: 42.0987, longitude: -75.9180 }, // Binghamton
  '139': { latitude: 42.0987, longitude: -75.9180 }, // Binghamton
  '140': { latitude: 42.8864, longitude: -78.8784 }, // Buffalo
  '141': { latitude: 42.8864, longitude: -78.8784 }, // Buffalo
  '142': { latitude: 42.8864, longitude: -78.8784 }, // Buffalo
  '143': { latitude: 43.1566, longitude: -77.6088 }, // Rochester
  '144': { latitude: 43.1566, longitude: -77.6088 }, // Rochester
  '145': { latitude: 43.1566, longitude: -77.6088 }, // Rochester
  '146': { latitude: 43.1566, longitude: -77.6088 }, // Rochester
  '147': { latitude: 42.0987, longitude: -78.4277 }, // Jamestown
  '148': { latitude: 42.4440, longitude: -76.5019 }, // Ithaca
  '149': { latitude: 42.4440, longitude: -76.5019 }, // Ithaca

  // Pennsylvania (150-196)
  '150': { latitude: 40.4406, longitude: -79.9959 }, // Pittsburgh
  '151': { latitude: 40.4406, longitude: -79.9959 }, // Pittsburgh
  '152': { latitude: 40.4406, longitude: -79.9959 }, // Pittsburgh
  '153': { latitude: 40.4406, longitude: -79.9959 }, // Pittsburgh area
  '154': { latitude: 40.4406, longitude: -79.9959 }, // Pittsburgh area
  '155': { latitude: 40.3178, longitude: -78.9197 }, // Johnstown
  '156': { latitude: 40.3178, longitude: -78.9197 }, // Johnstown
  '157': { latitude: 40.2732, longitude: -76.8867 }, // Harrisburg area
  '158': { latitude: 41.2033, longitude: -77.1945 }, // Central PA
  '159': { latitude: 40.3178, longitude: -78.9197 }, // Johnstown
  '160': { latitude: 40.5186, longitude: -80.0193 }, // Butler
  '161': { latitude: 41.2033, longitude: -80.0851 }, // Erie area
  '162': { latitude: 41.2033, longitude: -80.0851 }, // Erie area
  '163': { latitude: 41.4090, longitude: -75.6624 }, // Oil City
  '164': { latitude: 42.1292, longitude: -80.0851 }, // Erie
  '165': { latitude: 42.1292, longitude: -80.0851 }, // Erie
  '166': { latitude: 40.6084, longitude: -75.4902 }, // Altoona
  '167': { latitude: 40.6084, longitude: -75.4902 }, // Altoona area
  '168': { latitude: 40.7934, longitude: -77.8600 }, // State College
  '169': { latitude: 41.2033, longitude: -77.1945 }, // Williamsport
  '170': { latitude: 40.2732, longitude: -76.8867 }, // Harrisburg
  '171': { latitude: 40.2732, longitude: -76.8867 }, // Harrisburg
  '172': { latitude: 40.2732, longitude: -76.8867 }, // Harrisburg area
  '173': { latitude: 39.9601, longitude: -76.7277 }, // York
  '174': { latitude: 39.9601, longitude: -76.7277 }, // York
  '175': { latitude: 40.0379, longitude: -76.3055 }, // Lancaster
  '176': { latitude: 40.0379, longitude: -76.3055 }, // Lancaster
  '177': { latitude: 41.2033, longitude: -77.1945 }, // Williamsport
  '178': { latitude: 41.2033, longitude: -77.1945 }, // Williamsport area
  '179': { latitude: 40.3356, longitude: -75.9269 }, // Reading
  '180': { latitude: 40.8418, longitude: -75.3785 }, // Lehigh Valley
  '181': { latitude: 40.6084, longitude: -75.4902 }, // Allentown
  '182': { latitude: 40.6084, longitude: -75.4902 }, // Allentown
  '183': { latitude: 40.3356, longitude: -75.9269 }, // Reading
  '184': { latitude: 41.4090, longitude: -75.6624 }, // Scranton
  '185': { latitude: 41.4090, longitude: -75.6624 }, // Scranton
  '186': { latitude: 41.4090, longitude: -75.6624 }, // Scranton area
  '187': { latitude: 41.2437, longitude: -75.8813 }, // Wilkes-Barre
  '188': { latitude: 41.2437, longitude: -75.8813 }, // Wilkes-Barre
  '189': { latitude: 40.9176, longitude: -75.0697 }, // Stroudsburg
  '190': { latitude: 39.9526, longitude: -75.1652 }, // Philadelphia
  '191': { latitude: 39.9526, longitude: -75.1652 }, // Philadelphia
  '192': { latitude: 39.9526, longitude: -75.1652 }, // Philadelphia suburbs
  '193': { latitude: 39.9526, longitude: -75.1652 }, // Philadelphia suburbs
  '194': { latitude: 40.1170, longitude: -75.3506 }, // Norristown
  '195': { latitude: 40.3356, longitude: -75.9269 }, // Reading area
  '196': { latitude: 40.3356, longitude: -75.9269 }, // Reading area

  // Default regions by first digit
  '0': { latitude: 42.3601, longitude: -71.0589 }, // Northeast (Boston area default)
  '1': { latitude: 40.7128, longitude: -74.0060 }, // NY/NJ/PA
  '2': { latitude: 38.9072, longitude: -77.0369 }, // DC/VA/MD/WV/NC
  '3': { latitude: 33.7490, longitude: -84.3880 }, // Southeast (Atlanta default)
  '4': { latitude: 41.8781, longitude: -87.6298 }, // Midwest (Chicago default)
  '5': { latitude: 44.9778, longitude: -93.2650 }, // Northern Midwest
  '6': { latitude: 39.0997, longitude: -94.5786 }, // Central (KC default)
  '7': { latitude: 32.7767, longitude: -96.7970 }, // Texas/South Central
  '8': { latitude: 39.7392, longitude: -104.9903 }, // Mountain (Denver default)
  '9': { latitude: 37.7749, longitude: -122.4194 }, // Pacific (SF default)
};

export function validateZipCode(zip: string): boolean {
  return /^\d{5}$/.test(zip);
}

export function getCoordinatesFromZip(zip: string): Coordinates | null {
  if (!validateZipCode(zip)) {
    return null;
  }

  // Try exact match first
  if (ZIP_COORDINATES[zip]) {
    return ZIP_COORDINATES[zip];
  }

  // Try 3-digit prefix
  const prefix = zip.substring(0, 3);
  if (ZIP_PREFIX_COORDINATES[prefix]) {
    return ZIP_PREFIX_COORDINATES[prefix];
  }

  // Fall back to first digit region
  const region = zip[0];
  if (ZIP_PREFIX_COORDINATES[region]) {
    return ZIP_PREFIX_COORDINATES[region];
  }

  return null;
}

export interface GeocodingService {
  getCoordinates(zip: string): Coordinates | null;
  isValidZip(zip: string): boolean;
}

export const geocodingService: GeocodingService = {
  getCoordinates: getCoordinatesFromZip,
  isValidZip: validateZipCode,
};
