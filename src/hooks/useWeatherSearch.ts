import { useState, useCallback } from 'react';
import type { SearchState, DestinationResult } from '../types';
import { geocodingService } from '../services/geocodingService';
import { distanceService } from '../services/distanceService';
import { weatherService } from '../services/weatherService';
import { usCities } from '../data/usCities';

const INITIAL_STATE: SearchState = {
  isLoading: false,
  progress: 0,
  results: [],
  originWeather: null,
  error: null,
};

export function useWeatherSearch() {
  const [state, setState] = useState<SearchState>(INITIAL_STATE);

  const search = useCallback(async (zipCode: string, maxDriveTimeHours: number) => {
    setState({
      isLoading: true,
      progress: 0,
      results: [],
      originWeather: null,
      error: null,
    });

    try {
      // Validate and geocode the zip code
      if (!geocodingService.isValidZip(zipCode)) {
        throw new Error('Please enter a valid 5-digit US zip code');
      }

      const originCoords = geocodingService.getCoordinates(zipCode);
      if (!originCoords) {
        throw new Error('Could not find coordinates for this zip code');
      }

      // Get origin weather first
      const originWeather = await weatherService.getCurrentWeather(originCoords);
      setState(prev => ({ ...prev, originWeather, progress: 5 }));

      // Filter cities by drive time BEFORE fetching weather
      const reachableCities = distanceService.filterByDriveTime(
        usCities,
        originCoords,
        maxDriveTimeHours
      );

      if (reachableCities.length === 0) {
        setState(prev => ({
          ...prev,
          isLoading: false,
          progress: 100,
          error: 'No cities found within your drive time range',
        }));
        return;
      }

      // Get distances for all reachable cities
      const citiesWithDistances = distanceService.getCityDistances(
        reachableCities,
        originCoords
      );

      // Fetch weather for each city and stream results
      const results: DestinationResult[] = [];
      const totalCities = citiesWithDistances.length;

      for (let i = 0; i < totalCities; i++) {
        const { city, distance, driveTime } = citiesWithDistances[i];

        try {
          const weather = await weatherService.getCurrentWeather({
            latitude: city.latitude,
            longitude: city.longitude,
          });

          const tempDifference = weather.feelsLike - originWeather.feelsLike;

          // Calculate miles per degree (only meaningful if temp difference is positive)
          const milesPerDegree = tempDifference > 0
            ? distance / tempDifference
            : Infinity;

          const result: DestinationResult = {
            city,
            distance,
            driveTime,
            weather,
            tempDifference,
            milesPerDegree,
          };

          results.push(result);

          // Sort by temperature (warmest first) and update state
          const sortedResults = [...results].sort(
            (a, b) => b.weather.feelsLike - a.weather.feelsLike
          );

          const progress = Math.round(5 + ((i + 1) / totalCities) * 95);
          setState(prev => ({
            ...prev,
            results: sortedResults,
            progress,
          }));

          // Small delay to be respectful of Open-Meteo rate limits
          if (i < totalCities - 1) {
            await new Promise(resolve => setTimeout(resolve, 50));
          }
        } catch (err) {
          // Skip cities that fail to fetch weather, continue with others
          console.warn(`Failed to fetch weather for ${city.name}, ${city.state}:`, err);
        }
      }

      setState(prev => ({
        ...prev,
        isLoading: false,
        progress: 100,
      }));
    } catch (err) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        progress: 0,
        error: err instanceof Error ? err.message : 'An unexpected error occurred',
      }));
    }
  }, []);

  const reset = useCallback(() => {
    setState(INITIAL_STATE);
  }, []);

  // Get top 5 by efficiency (lowest miles per degree, excluding Infinity)
  const topFiveByEfficiency = state.results
    .filter(r => r.tempDifference > 0 && r.milesPerDegree !== Infinity)
    .sort((a, b) => a.milesPerDegree - b.milesPerDegree)
    .slice(0, 5);

  return {
    ...state,
    topFiveByEfficiency,
    search,
    reset,
  };
}
