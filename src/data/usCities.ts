import type { City } from '../types';

export const usCities: City[] = [
  // Alabama
  { name: 'Birmingham', state: 'AL', latitude: 33.5207, longitude: -86.8025, country: 'US' },
  { name: 'Montgomery', state: 'AL', latitude: 32.3792, longitude: -86.3077, country: 'US' },
  { name: 'Huntsville', state: 'AL', latitude: 34.7304, longitude: -86.5861, country: 'US' },
  { name: 'Mobile', state: 'AL', latitude: 30.6954, longitude: -88.0399, country: 'US' },

  // Alaska
  { name: 'Anchorage', state: 'AK', latitude: 61.2181, longitude: -149.9003, country: 'US' },
  { name: 'Fairbanks', state: 'AK', latitude: 64.8378, longitude: -147.7164, country: 'US' },
  { name: 'Juneau', state: 'AK', latitude: 58.3019, longitude: -134.4197, country: 'US' },

  // Arizona
  { name: 'Phoenix', state: 'AZ', latitude: 33.4484, longitude: -112.0740, country: 'US' },
  { name: 'Tucson', state: 'AZ', latitude: 32.2226, longitude: -110.9747, country: 'US' },
  { name: 'Mesa', state: 'AZ', latitude: 33.4152, longitude: -111.8315, country: 'US' },
  { name: 'Scottsdale', state: 'AZ', latitude: 33.4942, longitude: -111.9261, country: 'US' },
  { name: 'Tempe', state: 'AZ', latitude: 33.4255, longitude: -111.9400, country: 'US' },
  { name: 'Flagstaff', state: 'AZ', latitude: 35.1983, longitude: -111.6513, country: 'US' },

  // Arkansas
  { name: 'Little Rock', state: 'AR', latitude: 34.7465, longitude: -92.2896, country: 'US' },
  { name: 'Fort Smith', state: 'AR', latitude: 35.3859, longitude: -94.3985, country: 'US' },
  { name: 'Fayetteville', state: 'AR', latitude: 36.0626, longitude: -94.1574, country: 'US' },

  // California
  { name: 'Los Angeles', state: 'CA', latitude: 34.0522, longitude: -118.2437, country: 'US' },
  { name: 'San Diego', state: 'CA', latitude: 32.7157, longitude: -117.1611, country: 'US' },
  { name: 'San Jose', state: 'CA', latitude: 37.3382, longitude: -121.8863, country: 'US' },
  { name: 'San Francisco', state: 'CA', latitude: 37.7749, longitude: -122.4194, country: 'US' },
  { name: 'Fresno', state: 'CA', latitude: 36.7378, longitude: -119.7871, country: 'US' },
  { name: 'Sacramento', state: 'CA', latitude: 38.5816, longitude: -121.4944, country: 'US' },
  { name: 'Long Beach', state: 'CA', latitude: 33.7701, longitude: -118.1937, country: 'US' },
  { name: 'Oakland', state: 'CA', latitude: 37.8044, longitude: -122.2712, country: 'US' },
  { name: 'Bakersfield', state: 'CA', latitude: 35.3733, longitude: -119.0187, country: 'US' },
  { name: 'Anaheim', state: 'CA', latitude: 33.8366, longitude: -117.9143, country: 'US' },
  { name: 'Santa Ana', state: 'CA', latitude: 33.7455, longitude: -117.8677, country: 'US' },
  { name: 'Riverside', state: 'CA', latitude: 33.9533, longitude: -117.3962, country: 'US' },
  { name: 'Stockton', state: 'CA', latitude: 37.9577, longitude: -121.2908, country: 'US' },
  { name: 'Irvine', state: 'CA', latitude: 33.6846, longitude: -117.8265, country: 'US' },
  { name: 'Chula Vista', state: 'CA', latitude: 32.6401, longitude: -117.0842, country: 'US' },
  { name: 'Santa Clarita', state: 'CA', latitude: 34.3917, longitude: -118.5426, country: 'US' },
  { name: 'San Bernardino', state: 'CA', latitude: 34.1083, longitude: -117.2898, country: 'US' },
  { name: 'Modesto', state: 'CA', latitude: 37.6391, longitude: -120.9969, country: 'US' },
  { name: 'Santa Barbara', state: 'CA', latitude: 34.4208, longitude: -119.6982, country: 'US' },
  { name: 'Palm Springs', state: 'CA', latitude: 33.8303, longitude: -116.5453, country: 'US' },

  // Colorado
  { name: 'Denver', state: 'CO', latitude: 39.7392, longitude: -104.9903, country: 'US' },
  { name: 'Colorado Springs', state: 'CO', latitude: 38.8339, longitude: -104.8214, country: 'US' },
  { name: 'Aurora', state: 'CO', latitude: 39.7294, longitude: -104.8319, country: 'US' },
  { name: 'Fort Collins', state: 'CO', latitude: 40.5853, longitude: -105.0844, country: 'US' },
  { name: 'Boulder', state: 'CO', latitude: 40.0150, longitude: -105.2705, country: 'US' },
  { name: 'Pueblo', state: 'CO', latitude: 38.2545, longitude: -104.6091, country: 'US' },

  // Connecticut
  { name: 'Bridgeport', state: 'CT', latitude: 41.1865, longitude: -73.1952, country: 'US' },
  { name: 'New Haven', state: 'CT', latitude: 41.3083, longitude: -72.9279, country: 'US' },
  { name: 'Hartford', state: 'CT', latitude: 41.7658, longitude: -72.6734, country: 'US' },
  { name: 'Stamford', state: 'CT', latitude: 41.0534, longitude: -73.5387, country: 'US' },

  // Delaware
  { name: 'Wilmington', state: 'DE', latitude: 39.7391, longitude: -75.5398, country: 'US' },
  { name: 'Dover', state: 'DE', latitude: 39.1582, longitude: -75.5244, country: 'US' },

  // Florida
  { name: 'Jacksonville', state: 'FL', latitude: 30.3322, longitude: -81.6557, country: 'US' },
  { name: 'Miami', state: 'FL', latitude: 25.7617, longitude: -80.1918, country: 'US' },
  { name: 'Tampa', state: 'FL', latitude: 27.9506, longitude: -82.4572, country: 'US' },
  { name: 'Orlando', state: 'FL', latitude: 28.5383, longitude: -81.3792, country: 'US' },
  { name: 'St. Petersburg', state: 'FL', latitude: 27.7676, longitude: -82.6403, country: 'US' },
  { name: 'Hialeah', state: 'FL', latitude: 25.8576, longitude: -80.2781, country: 'US' },
  { name: 'Fort Lauderdale', state: 'FL', latitude: 26.1224, longitude: -80.1373, country: 'US' },
  { name: 'Tallahassee', state: 'FL', latitude: 30.4383, longitude: -84.2807, country: 'US' },
  { name: 'Cape Coral', state: 'FL', latitude: 26.5629, longitude: -81.9495, country: 'US' },
  { name: 'Pembroke Pines', state: 'FL', latitude: 26.0031, longitude: -80.2241, country: 'US' },
  { name: 'Hollywood', state: 'FL', latitude: 26.0112, longitude: -80.1495, country: 'US' },
  { name: 'Gainesville', state: 'FL', latitude: 29.6516, longitude: -82.3248, country: 'US' },
  { name: 'West Palm Beach', state: 'FL', latitude: 26.7153, longitude: -80.0534, country: 'US' },
  { name: 'Sarasota', state: 'FL', latitude: 27.3364, longitude: -82.5307, country: 'US' },
  { name: 'Naples', state: 'FL', latitude: 26.1420, longitude: -81.7948, country: 'US' },
  { name: 'Key West', state: 'FL', latitude: 24.5551, longitude: -81.7800, country: 'US' },
  { name: 'Pensacola', state: 'FL', latitude: 30.4213, longitude: -87.2169, country: 'US' },
  { name: 'Daytona Beach', state: 'FL', latitude: 29.2108, longitude: -81.0228, country: 'US' },

  // Georgia
  { name: 'Atlanta', state: 'GA', latitude: 33.7490, longitude: -84.3880, country: 'US' },
  { name: 'Augusta', state: 'GA', latitude: 33.4735, longitude: -82.0105, country: 'US' },
  { name: 'Columbus', state: 'GA', latitude: 32.4610, longitude: -84.9877, country: 'US' },
  { name: 'Macon', state: 'GA', latitude: 32.8407, longitude: -83.6324, country: 'US' },
  { name: 'Savannah', state: 'GA', latitude: 32.0809, longitude: -81.0912, country: 'US' },
  { name: 'Athens', state: 'GA', latitude: 33.9519, longitude: -83.3576, country: 'US' },

  // Hawaii
  { name: 'Honolulu', state: 'HI', latitude: 21.3069, longitude: -157.8583, country: 'US' },
  { name: 'Hilo', state: 'HI', latitude: 19.7074, longitude: -155.0885, country: 'US' },
  { name: 'Kailua', state: 'HI', latitude: 21.4022, longitude: -157.7394, country: 'US' },

  // Idaho
  { name: 'Boise', state: 'ID', latitude: 43.6150, longitude: -116.2023, country: 'US' },
  { name: 'Meridian', state: 'ID', latitude: 43.6121, longitude: -116.3915, country: 'US' },
  { name: 'Idaho Falls', state: 'ID', latitude: 43.4917, longitude: -112.0339, country: 'US' },

  // Illinois
  { name: 'Chicago', state: 'IL', latitude: 41.8781, longitude: -87.6298, country: 'US' },
  { name: 'Aurora', state: 'IL', latitude: 41.7606, longitude: -88.3201, country: 'US' },
  { name: 'Naperville', state: 'IL', latitude: 41.7508, longitude: -88.1535, country: 'US' },
  { name: 'Rockford', state: 'IL', latitude: 42.2711, longitude: -89.0940, country: 'US' },
  { name: 'Joliet', state: 'IL', latitude: 41.5250, longitude: -88.0817, country: 'US' },
  { name: 'Springfield', state: 'IL', latitude: 39.7817, longitude: -89.6501, country: 'US' },
  { name: 'Peoria', state: 'IL', latitude: 40.6936, longitude: -89.5890, country: 'US' },
  { name: 'Champaign', state: 'IL', latitude: 40.1164, longitude: -88.2434, country: 'US' },

  // Indiana
  { name: 'Indianapolis', state: 'IN', latitude: 39.7684, longitude: -86.1581, country: 'US' },
  { name: 'Fort Wayne', state: 'IN', latitude: 41.0793, longitude: -85.1394, country: 'US' },
  { name: 'Evansville', state: 'IN', latitude: 37.9716, longitude: -87.5711, country: 'US' },
  { name: 'South Bend', state: 'IN', latitude: 41.6764, longitude: -86.2520, country: 'US' },
  { name: 'Bloomington', state: 'IN', latitude: 39.1653, longitude: -86.5264, country: 'US' },

  // Iowa
  { name: 'Des Moines', state: 'IA', latitude: 41.5868, longitude: -93.6250, country: 'US' },
  { name: 'Cedar Rapids', state: 'IA', latitude: 41.9779, longitude: -91.6656, country: 'US' },
  { name: 'Davenport', state: 'IA', latitude: 41.5236, longitude: -90.5776, country: 'US' },
  { name: 'Sioux City', state: 'IA', latitude: 42.4963, longitude: -96.4049, country: 'US' },
  { name: 'Iowa City', state: 'IA', latitude: 41.6611, longitude: -91.5302, country: 'US' },

  // Kansas
  { name: 'Wichita', state: 'KS', latitude: 37.6872, longitude: -97.3301, country: 'US' },
  { name: 'Overland Park', state: 'KS', latitude: 38.9822, longitude: -94.6708, country: 'US' },
  { name: 'Kansas City', state: 'KS', latitude: 39.1155, longitude: -94.6268, country: 'US' },
  { name: 'Topeka', state: 'KS', latitude: 39.0473, longitude: -95.6752, country: 'US' },

  // Kentucky
  { name: 'Louisville', state: 'KY', latitude: 38.2527, longitude: -85.7585, country: 'US' },
  { name: 'Lexington', state: 'KY', latitude: 38.0406, longitude: -84.5037, country: 'US' },
  { name: 'Bowling Green', state: 'KY', latitude: 36.9685, longitude: -86.4808, country: 'US' },

  // Louisiana
  { name: 'New Orleans', state: 'LA', latitude: 29.9511, longitude: -90.0715, country: 'US' },
  { name: 'Baton Rouge', state: 'LA', latitude: 30.4515, longitude: -91.1871, country: 'US' },
  { name: 'Shreveport', state: 'LA', latitude: 32.5252, longitude: -93.7502, country: 'US' },
  { name: 'Lafayette', state: 'LA', latitude: 30.2241, longitude: -92.0198, country: 'US' },
  { name: 'Lake Charles', state: 'LA', latitude: 30.2266, longitude: -93.2174, country: 'US' },

  // Maine
  { name: 'Portland', state: 'ME', latitude: 43.6591, longitude: -70.2568, country: 'US' },
  { name: 'Lewiston', state: 'ME', latitude: 44.1004, longitude: -70.2148, country: 'US' },
  { name: 'Bangor', state: 'ME', latitude: 44.8012, longitude: -68.7778, country: 'US' },

  // Maryland
  { name: 'Baltimore', state: 'MD', latitude: 39.2904, longitude: -76.6122, country: 'US' },
  { name: 'Frederick', state: 'MD', latitude: 39.4143, longitude: -77.4105, country: 'US' },
  { name: 'Rockville', state: 'MD', latitude: 39.0840, longitude: -77.1528, country: 'US' },
  { name: 'Annapolis', state: 'MD', latitude: 38.9784, longitude: -76.4922, country: 'US' },

  // Massachusetts
  { name: 'Boston', state: 'MA', latitude: 42.3601, longitude: -71.0589, country: 'US' },
  { name: 'Worcester', state: 'MA', latitude: 42.2626, longitude: -71.8023, country: 'US' },
  { name: 'Springfield', state: 'MA', latitude: 42.1015, longitude: -72.5898, country: 'US' },
  { name: 'Cambridge', state: 'MA', latitude: 42.3736, longitude: -71.1097, country: 'US' },
  { name: 'Lowell', state: 'MA', latitude: 42.6334, longitude: -71.3162, country: 'US' },

  // Michigan
  { name: 'Detroit', state: 'MI', latitude: 42.3314, longitude: -83.0458, country: 'US' },
  { name: 'Grand Rapids', state: 'MI', latitude: 42.9634, longitude: -85.6681, country: 'US' },
  { name: 'Warren', state: 'MI', latitude: 42.5145, longitude: -83.0147, country: 'US' },
  { name: 'Sterling Heights', state: 'MI', latitude: 42.5803, longitude: -83.0302, country: 'US' },
  { name: 'Ann Arbor', state: 'MI', latitude: 42.2808, longitude: -83.7430, country: 'US' },
  { name: 'Lansing', state: 'MI', latitude: 42.7325, longitude: -84.5555, country: 'US' },
  { name: 'Flint', state: 'MI', latitude: 43.0125, longitude: -83.6875, country: 'US' },
  { name: 'Kalamazoo', state: 'MI', latitude: 42.2917, longitude: -85.5872, country: 'US' },

  // Minnesota
  { name: 'Minneapolis', state: 'MN', latitude: 44.9778, longitude: -93.2650, country: 'US' },
  { name: 'Saint Paul', state: 'MN', latitude: 44.9537, longitude: -93.0900, country: 'US' },
  { name: 'Rochester', state: 'MN', latitude: 44.0121, longitude: -92.4802, country: 'US' },
  { name: 'Duluth', state: 'MN', latitude: 46.7867, longitude: -92.1005, country: 'US' },
  { name: 'Bloomington', state: 'MN', latitude: 44.8408, longitude: -93.2983, country: 'US' },

  // Mississippi
  { name: 'Jackson', state: 'MS', latitude: 32.2988, longitude: -90.1848, country: 'US' },
  { name: 'Gulfport', state: 'MS', latitude: 30.3674, longitude: -89.0928, country: 'US' },
  { name: 'Biloxi', state: 'MS', latitude: 30.3960, longitude: -88.8853, country: 'US' },
  { name: 'Hattiesburg', state: 'MS', latitude: 31.3271, longitude: -89.2903, country: 'US' },

  // Missouri
  { name: 'Kansas City', state: 'MO', latitude: 39.0997, longitude: -94.5786, country: 'US' },
  { name: 'St. Louis', state: 'MO', latitude: 38.6270, longitude: -90.1994, country: 'US' },
  { name: 'Springfield', state: 'MO', latitude: 37.2090, longitude: -93.2923, country: 'US' },
  { name: 'Columbia', state: 'MO', latitude: 38.9517, longitude: -92.3341, country: 'US' },
  { name: 'Independence', state: 'MO', latitude: 39.0911, longitude: -94.4155, country: 'US' },

  // Montana
  { name: 'Billings', state: 'MT', latitude: 45.7833, longitude: -108.5007, country: 'US' },
  { name: 'Missoula', state: 'MT', latitude: 46.8721, longitude: -113.9940, country: 'US' },
  { name: 'Great Falls', state: 'MT', latitude: 47.5053, longitude: -111.3008, country: 'US' },
  { name: 'Bozeman', state: 'MT', latitude: 45.6770, longitude: -111.0429, country: 'US' },

  // Nebraska
  { name: 'Omaha', state: 'NE', latitude: 41.2565, longitude: -95.9345, country: 'US' },
  { name: 'Lincoln', state: 'NE', latitude: 40.8258, longitude: -96.6852, country: 'US' },
  { name: 'Grand Island', state: 'NE', latitude: 40.9264, longitude: -98.3420, country: 'US' },

  // Nevada
  { name: 'Las Vegas', state: 'NV', latitude: 36.1699, longitude: -115.1398, country: 'US' },
  { name: 'Henderson', state: 'NV', latitude: 36.0395, longitude: -114.9817, country: 'US' },
  { name: 'Reno', state: 'NV', latitude: 39.5296, longitude: -119.8138, country: 'US' },
  { name: 'North Las Vegas', state: 'NV', latitude: 36.1989, longitude: -115.1175, country: 'US' },

  // New Hampshire
  { name: 'Manchester', state: 'NH', latitude: 42.9956, longitude: -71.4548, country: 'US' },
  { name: 'Nashua', state: 'NH', latitude: 42.7654, longitude: -71.4676, country: 'US' },
  { name: 'Concord', state: 'NH', latitude: 43.2081, longitude: -71.5376, country: 'US' },

  // New Jersey
  { name: 'Newark', state: 'NJ', latitude: 40.7357, longitude: -74.1724, country: 'US' },
  { name: 'Jersey City', state: 'NJ', latitude: 40.7178, longitude: -74.0431, country: 'US' },
  { name: 'Paterson', state: 'NJ', latitude: 40.9168, longitude: -74.1718, country: 'US' },
  { name: 'Elizabeth', state: 'NJ', latitude: 40.6640, longitude: -74.2107, country: 'US' },
  { name: 'Trenton', state: 'NJ', latitude: 40.2206, longitude: -74.7597, country: 'US' },
  { name: 'Atlantic City', state: 'NJ', latitude: 39.3643, longitude: -74.4229, country: 'US' },

  // New Mexico
  { name: 'Albuquerque', state: 'NM', latitude: 35.0844, longitude: -106.6504, country: 'US' },
  { name: 'Las Cruces', state: 'NM', latitude: 32.3199, longitude: -106.7637, country: 'US' },
  { name: 'Santa Fe', state: 'NM', latitude: 35.6870, longitude: -105.9378, country: 'US' },
  { name: 'Roswell', state: 'NM', latitude: 33.3943, longitude: -104.5230, country: 'US' },

  // New York
  { name: 'New York', state: 'NY', latitude: 40.7128, longitude: -74.0060, country: 'US' },
  { name: 'Buffalo', state: 'NY', latitude: 42.8864, longitude: -78.8784, country: 'US' },
  { name: 'Rochester', state: 'NY', latitude: 43.1566, longitude: -77.6088, country: 'US' },
  { name: 'Yonkers', state: 'NY', latitude: 40.9312, longitude: -73.8988, country: 'US' },
  { name: 'Syracuse', state: 'NY', latitude: 43.0481, longitude: -76.1474, country: 'US' },
  { name: 'Albany', state: 'NY', latitude: 42.6526, longitude: -73.7562, country: 'US' },
  { name: 'Ithaca', state: 'NY', latitude: 42.4440, longitude: -76.5019, country: 'US' },

  // North Carolina
  { name: 'Charlotte', state: 'NC', latitude: 35.2271, longitude: -80.8431, country: 'US' },
  { name: 'Raleigh', state: 'NC', latitude: 35.7796, longitude: -78.6382, country: 'US' },
  { name: 'Greensboro', state: 'NC', latitude: 36.0726, longitude: -79.7920, country: 'US' },
  { name: 'Durham', state: 'NC', latitude: 35.9940, longitude: -78.8986, country: 'US' },
  { name: 'Winston-Salem', state: 'NC', latitude: 36.0999, longitude: -80.2442, country: 'US' },
  { name: 'Fayetteville', state: 'NC', latitude: 35.0527, longitude: -78.8784, country: 'US' },
  { name: 'Wilmington', state: 'NC', latitude: 34.2257, longitude: -77.9447, country: 'US' },
  { name: 'Asheville', state: 'NC', latitude: 35.5951, longitude: -82.5515, country: 'US' },

  // North Dakota
  { name: 'Fargo', state: 'ND', latitude: 46.8772, longitude: -96.7898, country: 'US' },
  { name: 'Bismarck', state: 'ND', latitude: 46.8083, longitude: -100.7837, country: 'US' },
  { name: 'Grand Forks', state: 'ND', latitude: 47.9253, longitude: -97.0329, country: 'US' },

  // Ohio
  { name: 'Columbus', state: 'OH', latitude: 39.9612, longitude: -82.9988, country: 'US' },
  { name: 'Cleveland', state: 'OH', latitude: 41.4993, longitude: -81.6944, country: 'US' },
  { name: 'Cincinnati', state: 'OH', latitude: 39.1031, longitude: -84.5120, country: 'US' },
  { name: 'Toledo', state: 'OH', latitude: 41.6528, longitude: -83.5379, country: 'US' },
  { name: 'Akron', state: 'OH', latitude: 41.0814, longitude: -81.5190, country: 'US' },
  { name: 'Dayton', state: 'OH', latitude: 39.7589, longitude: -84.1916, country: 'US' },
  { name: 'Youngstown', state: 'OH', latitude: 41.0998, longitude: -80.6495, country: 'US' },

  // Oklahoma
  { name: 'Oklahoma City', state: 'OK', latitude: 35.4676, longitude: -97.5164, country: 'US' },
  { name: 'Tulsa', state: 'OK', latitude: 36.1540, longitude: -95.9928, country: 'US' },
  { name: 'Norman', state: 'OK', latitude: 35.2226, longitude: -97.4395, country: 'US' },
  { name: 'Broken Arrow', state: 'OK', latitude: 36.0609, longitude: -95.7975, country: 'US' },

  // Oregon
  { name: 'Portland', state: 'OR', latitude: 45.5152, longitude: -122.6784, country: 'US' },
  { name: 'Salem', state: 'OR', latitude: 44.9429, longitude: -123.0351, country: 'US' },
  { name: 'Eugene', state: 'OR', latitude: 44.0521, longitude: -123.0868, country: 'US' },
  { name: 'Bend', state: 'OR', latitude: 44.0582, longitude: -121.3153, country: 'US' },
  { name: 'Medford', state: 'OR', latitude: 42.3265, longitude: -122.8756, country: 'US' },

  // Pennsylvania
  { name: 'Philadelphia', state: 'PA', latitude: 39.9526, longitude: -75.1652, country: 'US' },
  { name: 'Pittsburgh', state: 'PA', latitude: 40.4406, longitude: -79.9959, country: 'US' },
  { name: 'Allentown', state: 'PA', latitude: 40.6084, longitude: -75.4902, country: 'US' },
  { name: 'Reading', state: 'PA', latitude: 40.3356, longitude: -75.9269, country: 'US' },
  { name: 'Erie', state: 'PA', latitude: 42.1292, longitude: -80.0851, country: 'US' },
  { name: 'Scranton', state: 'PA', latitude: 41.4090, longitude: -75.6624, country: 'US' },
  { name: 'Harrisburg', state: 'PA', latitude: 40.2732, longitude: -76.8867, country: 'US' },
  { name: 'State College', state: 'PA', latitude: 40.7934, longitude: -77.8600, country: 'US' },

  // Rhode Island
  { name: 'Providence', state: 'RI', latitude: 41.8240, longitude: -71.4128, country: 'US' },
  { name: 'Warwick', state: 'RI', latitude: 41.7001, longitude: -71.4162, country: 'US' },
  { name: 'Newport', state: 'RI', latitude: 41.4901, longitude: -71.3128, country: 'US' },

  // South Carolina
  { name: 'Charleston', state: 'SC', latitude: 32.7765, longitude: -79.9311, country: 'US' },
  { name: 'Columbia', state: 'SC', latitude: 34.0007, longitude: -81.0348, country: 'US' },
  { name: 'North Charleston', state: 'SC', latitude: 32.8546, longitude: -79.9748, country: 'US' },
  { name: 'Greenville', state: 'SC', latitude: 34.8526, longitude: -82.3940, country: 'US' },
  { name: 'Myrtle Beach', state: 'SC', latitude: 33.6891, longitude: -78.8867, country: 'US' },

  // South Dakota
  { name: 'Sioux Falls', state: 'SD', latitude: 43.5446, longitude: -96.7311, country: 'US' },
  { name: 'Rapid City', state: 'SD', latitude: 44.0805, longitude: -103.2310, country: 'US' },

  // Tennessee
  { name: 'Nashville', state: 'TN', latitude: 36.1627, longitude: -86.7816, country: 'US' },
  { name: 'Memphis', state: 'TN', latitude: 35.1495, longitude: -90.0490, country: 'US' },
  { name: 'Knoxville', state: 'TN', latitude: 35.9606, longitude: -83.9207, country: 'US' },
  { name: 'Chattanooga', state: 'TN', latitude: 35.0456, longitude: -85.3097, country: 'US' },
  { name: 'Clarksville', state: 'TN', latitude: 36.5298, longitude: -87.3595, country: 'US' },
  { name: 'Murfreesboro', state: 'TN', latitude: 35.8456, longitude: -86.3903, country: 'US' },

  // Texas
  { name: 'Houston', state: 'TX', latitude: 29.7604, longitude: -95.3698, country: 'US' },
  { name: 'San Antonio', state: 'TX', latitude: 29.4241, longitude: -98.4936, country: 'US' },
  { name: 'Dallas', state: 'TX', latitude: 32.7767, longitude: -96.7970, country: 'US' },
  { name: 'Austin', state: 'TX', latitude: 30.2672, longitude: -97.7431, country: 'US' },
  { name: 'Fort Worth', state: 'TX', latitude: 32.7555, longitude: -97.3308, country: 'US' },
  { name: 'El Paso', state: 'TX', latitude: 31.7619, longitude: -106.4850, country: 'US' },
  { name: 'Arlington', state: 'TX', latitude: 32.7357, longitude: -97.1081, country: 'US' },
  { name: 'Corpus Christi', state: 'TX', latitude: 27.8006, longitude: -97.3964, country: 'US' },
  { name: 'Plano', state: 'TX', latitude: 33.0198, longitude: -96.6989, country: 'US' },
  { name: 'Laredo', state: 'TX', latitude: 27.5036, longitude: -99.5075, country: 'US' },
  { name: 'Lubbock', state: 'TX', latitude: 33.5779, longitude: -101.8552, country: 'US' },
  { name: 'Garland', state: 'TX', latitude: 32.9126, longitude: -96.6389, country: 'US' },
  { name: 'Irving', state: 'TX', latitude: 32.8140, longitude: -96.9489, country: 'US' },
  { name: 'Amarillo', state: 'TX', latitude: 35.2220, longitude: -101.8313, country: 'US' },
  { name: 'Brownsville', state: 'TX', latitude: 25.9017, longitude: -97.4975, country: 'US' },
  { name: 'McAllen', state: 'TX', latitude: 26.2034, longitude: -98.2300, country: 'US' },
  { name: 'Midland', state: 'TX', latitude: 31.9973, longitude: -102.0779, country: 'US' },
  { name: 'Waco', state: 'TX', latitude: 31.5493, longitude: -97.1467, country: 'US' },
  { name: 'Galveston', state: 'TX', latitude: 29.3013, longitude: -94.7977, country: 'US' },

  // Utah
  { name: 'Salt Lake City', state: 'UT', latitude: 40.7608, longitude: -111.8910, country: 'US' },
  { name: 'West Valley City', state: 'UT', latitude: 40.6916, longitude: -112.0011, country: 'US' },
  { name: 'Provo', state: 'UT', latitude: 40.2338, longitude: -111.6585, country: 'US' },
  { name: 'West Jordan', state: 'UT', latitude: 40.6097, longitude: -111.9391, country: 'US' },
  { name: 'Ogden', state: 'UT', latitude: 41.2230, longitude: -111.9738, country: 'US' },
  { name: 'St. George', state: 'UT', latitude: 37.0965, longitude: -113.5684, country: 'US' },
  { name: 'Park City', state: 'UT', latitude: 40.6461, longitude: -111.4980, country: 'US' },

  // Vermont
  { name: 'Burlington', state: 'VT', latitude: 44.4759, longitude: -73.2121, country: 'US' },
  { name: 'Montpelier', state: 'VT', latitude: 44.2601, longitude: -72.5754, country: 'US' },

  // Virginia
  { name: 'Virginia Beach', state: 'VA', latitude: 36.8529, longitude: -75.9780, country: 'US' },
  { name: 'Norfolk', state: 'VA', latitude: 36.8508, longitude: -76.2859, country: 'US' },
  { name: 'Chesapeake', state: 'VA', latitude: 36.7682, longitude: -76.2875, country: 'US' },
  { name: 'Richmond', state: 'VA', latitude: 37.5407, longitude: -77.4360, country: 'US' },
  { name: 'Newport News', state: 'VA', latitude: 37.0871, longitude: -76.4730, country: 'US' },
  { name: 'Alexandria', state: 'VA', latitude: 38.8048, longitude: -77.0469, country: 'US' },
  { name: 'Hampton', state: 'VA', latitude: 37.0299, longitude: -76.3452, country: 'US' },
  { name: 'Roanoke', state: 'VA', latitude: 37.2710, longitude: -79.9414, country: 'US' },
  { name: 'Charlottesville', state: 'VA', latitude: 38.0293, longitude: -78.4767, country: 'US' },

  // Washington
  { name: 'Seattle', state: 'WA', latitude: 47.6062, longitude: -122.3321, country: 'US' },
  { name: 'Spokane', state: 'WA', latitude: 47.6588, longitude: -117.4260, country: 'US' },
  { name: 'Tacoma', state: 'WA', latitude: 47.2529, longitude: -122.4443, country: 'US' },
  { name: 'Vancouver', state: 'WA', latitude: 45.6387, longitude: -122.6615, country: 'US' },
  { name: 'Bellevue', state: 'WA', latitude: 47.6101, longitude: -122.2015, country: 'US' },
  { name: 'Olympia', state: 'WA', latitude: 47.0379, longitude: -122.9007, country: 'US' },
  { name: 'Bellingham', state: 'WA', latitude: 48.7519, longitude: -122.4787, country: 'US' },

  // Washington D.C.
  { name: 'Washington', state: 'DC', latitude: 38.9072, longitude: -77.0369, country: 'US' },

  // West Virginia
  { name: 'Charleston', state: 'WV', latitude: 38.3498, longitude: -81.6326, country: 'US' },
  { name: 'Huntington', state: 'WV', latitude: 38.4192, longitude: -82.4452, country: 'US' },
  { name: 'Morgantown', state: 'WV', latitude: 39.6295, longitude: -79.9559, country: 'US' },

  // Wisconsin
  { name: 'Milwaukee', state: 'WI', latitude: 43.0389, longitude: -87.9065, country: 'US' },
  { name: 'Madison', state: 'WI', latitude: 43.0731, longitude: -89.4012, country: 'US' },
  { name: 'Green Bay', state: 'WI', latitude: 44.5133, longitude: -88.0133, country: 'US' },
  { name: 'Kenosha', state: 'WI', latitude: 42.5847, longitude: -87.8212, country: 'US' },
  { name: 'Racine', state: 'WI', latitude: 42.7261, longitude: -87.7829, country: 'US' },
  { name: 'Appleton', state: 'WI', latitude: 44.2619, longitude: -88.4154, country: 'US' },

  // Wyoming
  { name: 'Cheyenne', state: 'WY', latitude: 41.1400, longitude: -104.8202, country: 'US' },
  { name: 'Casper', state: 'WY', latitude: 42.8666, longitude: -106.3131, country: 'US' },
  { name: 'Laramie', state: 'WY', latitude: 41.3114, longitude: -105.5911, country: 'US' },
  { name: 'Jackson', state: 'WY', latitude: 43.4799, longitude: -110.7624, country: 'US' },
];
