export interface City {
  name: string;
  state: string;
  latitude: number;
  longitude: number;
  country: string; // "US" for V1, stubbed for Canadian cities in V2
}

export interface Weather {
  feelsLike: number; // Fahrenheit
  cloudCover: number; // 0-100 percent
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface DestinationResult {
  city: City;
  distance: number; // miles
  driveTime: number; // hours
  weather: Weather;
  tempDifference: number; // degrees F gained (positive = warmer)
  milesPerDegree: number; // efficiency ratio (lower = better)
}

export interface SearchState {
  isLoading: boolean;
  progress: number; // 0-100
  results: DestinationResult[];
  originWeather: Weather | null;
  error: string | null;
}
