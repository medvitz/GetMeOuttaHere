import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useWeatherSearch } from './useWeatherSearch';

// Mock the services
vi.mock('../services/geocodingService', () => ({
  geocodingService: {
    isValidZip: vi.fn(),
    getCoordinates: vi.fn(),
  },
}));

vi.mock('../services/distanceService', () => ({
  distanceService: {
    filterByDriveTime: vi.fn(),
    getCityDistances: vi.fn(),
  },
}));

vi.mock('../services/weatherService', () => ({
  weatherService: {
    getCurrentWeather: vi.fn(),
  },
}));

vi.mock('../data/usCities', () => ({
  usCities: [
    { name: 'Miami', state: 'FL', latitude: 25.7617, longitude: -80.1918, country: 'US' },
    { name: 'Atlanta', state: 'GA', latitude: 33.7490, longitude: -84.3880, country: 'US' },
  ],
}));

import { geocodingService } from '../services/geocodingService';
import { distanceService } from '../services/distanceService';
import { weatherService } from '../services/weatherService';

describe('useWeatherSearch', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should initialize with default state', () => {
    const { result } = renderHook(() => useWeatherSearch());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.progress).toBe(0);
    expect(result.current.results).toEqual([]);
    expect(result.current.originWeather).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('should reject invalid zip codes', async () => {
    vi.mocked(geocodingService.isValidZip).mockReturnValue(false);

    const { result } = renderHook(() => useWeatherSearch());

    await act(async () => {
      await result.current.search('invalid', 8);
    });

    expect(result.current.error).toBe('Please enter a valid 5-digit US zip code');
    expect(result.current.isLoading).toBe(false);
  });

  it('should handle missing coordinates', async () => {
    vi.mocked(geocodingService.isValidZip).mockReturnValue(true);
    vi.mocked(geocodingService.getCoordinates).mockReturnValue(null);

    const { result } = renderHook(() => useWeatherSearch());

    await act(async () => {
      await result.current.search('99999', 8);
    });

    expect(result.current.error).toBe('Could not find coordinates for this zip code');
  });

  it('should fetch weather and return sorted results', async () => {
    vi.mocked(geocodingService.isValidZip).mockReturnValue(true);
    vi.mocked(geocodingService.getCoordinates).mockReturnValue({
      latitude: 40.7128,
      longitude: -74.006,
    });

    vi.mocked(distanceService.filterByDriveTime).mockReturnValue([
      { name: 'Miami', state: 'FL', latitude: 25.7617, longitude: -80.1918, country: 'US' },
      { name: 'Atlanta', state: 'GA', latitude: 33.7490, longitude: -84.3880, country: 'US' },
    ]);

    vi.mocked(distanceService.getCityDistances).mockReturnValue([
      {
        city: { name: 'Miami', state: 'FL', latitude: 25.7617, longitude: -80.1918, country: 'US' },
        distance: 1000,
        driveTime: 18,
      },
      {
        city: { name: 'Atlanta', state: 'GA', latitude: 33.7490, longitude: -84.3880, country: 'US' },
        distance: 500,
        driveTime: 9,
      },
    ]);

    // Origin weather (cold in NYC)
    vi.mocked(weatherService.getCurrentWeather)
      .mockResolvedValueOnce({ feelsLike: 30, cloudCover: 50 }) // Origin
      .mockResolvedValueOnce({ feelsLike: 75, cloudCover: 10 }) // Miami
      .mockResolvedValueOnce({ feelsLike: 55, cloudCover: 30 }); // Atlanta

    const { result } = renderHook(() => useWeatherSearch());

    await act(async () => {
      await result.current.search('10001', 20);
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.results).toHaveLength(2);
    // Miami should be first (warmest)
    expect(result.current.results[0].city.name).toBe('Miami');
    expect(result.current.results[0].tempDifference).toBe(45); // 75 - 30
    expect(result.current.results[1].city.name).toBe('Atlanta');
  });

  it('should calculate top 5 by efficiency correctly', async () => {
    vi.mocked(geocodingService.isValidZip).mockReturnValue(true);
    vi.mocked(geocodingService.getCoordinates).mockReturnValue({
      latitude: 40.7128,
      longitude: -74.006,
    });

    vi.mocked(distanceService.filterByDriveTime).mockReturnValue([
      { name: 'Miami', state: 'FL', latitude: 25.7617, longitude: -80.1918, country: 'US' },
      { name: 'Atlanta', state: 'GA', latitude: 33.7490, longitude: -84.3880, country: 'US' },
    ]);

    vi.mocked(distanceService.getCityDistances).mockReturnValue([
      {
        city: { name: 'Miami', state: 'FL', latitude: 25.7617, longitude: -80.1918, country: 'US' },
        distance: 1000,
        driveTime: 18,
      },
      {
        city: { name: 'Atlanta', state: 'GA', latitude: 33.7490, longitude: -84.3880, country: 'US' },
        distance: 250,
        driveTime: 4.5,
      },
    ]);

    vi.mocked(weatherService.getCurrentWeather)
      .mockResolvedValueOnce({ feelsLike: 30, cloudCover: 50 }) // Origin
      .mockResolvedValueOnce({ feelsLike: 75, cloudCover: 10 }) // Miami: 1000mi / 45deg = 22.2 mi/deg
      .mockResolvedValueOnce({ feelsLike: 55, cloudCover: 30 }); // Atlanta: 250mi / 25deg = 10 mi/deg

    const { result } = renderHook(() => useWeatherSearch());

    await act(async () => {
      await result.current.search('10001', 20);
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    // Atlanta has better efficiency (10 mi/deg vs 22.2 mi/deg)
    expect(result.current.topFiveByEfficiency[0].city.name).toBe('Atlanta');
  });

  it('should reset state', async () => {
    const { result } = renderHook(() => useWeatherSearch());

    await act(async () => {
      result.current.reset();
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.progress).toBe(0);
    expect(result.current.results).toEqual([]);
  });
});
