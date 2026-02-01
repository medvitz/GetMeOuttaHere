import type { Weather, Coordinates } from '../types';

interface OpenMeteoCurrentWeather {
  current: {
    apparent_temperature: number;
    cloud_cover: number;
  };
}

export interface WeatherService {
  getCurrentWeather(coords: Coordinates): Promise<Weather>;
}

async function fetchFromOpenMeteo(coords: Coordinates): Promise<Weather> {
  const { latitude, longitude } = coords;
  const url = new URL('https://api.open-meteo.com/v1/forecast');
  url.searchParams.set('latitude', latitude.toString());
  url.searchParams.set('longitude', longitude.toString());
  url.searchParams.set('current', 'apparent_temperature,cloud_cover');
  url.searchParams.set('temperature_unit', 'fahrenheit');

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Weather API error: ${response.status} ${response.statusText}`);
  }

  const data: OpenMeteoCurrentWeather = await response.json();

  return {
    feelsLike: data.current.apparent_temperature,
    cloudCover: data.current.cloud_cover,
  };
}

export const weatherService: WeatherService = {
  getCurrentWeather: fetchFromOpenMeteo,
};

export async function getWeatherForMultipleLocations(
  locations: Coordinates[],
  onResult?: (index: number, weather: Weather) => void,
  delayMs = 100
): Promise<Weather[]> {
  const results: Weather[] = [];

  for (let i = 0; i < locations.length; i++) {
    const weather = await weatherService.getCurrentWeather(locations[i]);
    results.push(weather);
    onResult?.(i, weather);

    if (i < locations.length - 1 && delayMs > 0) {
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }

  return results;
}
