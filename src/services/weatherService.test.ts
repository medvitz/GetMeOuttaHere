import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { weatherService, getWeatherForMultipleLocations } from './weatherService';

describe('weatherService', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('getCurrentWeather', () => {
    it('should fetch weather data and return formatted result', async () => {
      const mockResponse = {
        current: {
          apparent_temperature: 72.5,
          cloud_cover: 25,
        },
      };

      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      } as Response);

      const result = await weatherService.getCurrentWeather({
        latitude: 40.7128,
        longitude: -74.006,
      });

      expect(result).toEqual({
        feelsLike: 72.5,
        cloudCover: 25,
      });

      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('api.open-meteo.com')
      );
    });

    it('should throw on API error', async () => {
      vi.mocked(fetch).mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      } as Response);

      await expect(
        weatherService.getCurrentWeather({ latitude: 40.7128, longitude: -74.006 })
      ).rejects.toThrow('Weather API error: 500 Internal Server Error');
    });

    it('should request temperature in Fahrenheit', async () => {
      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve({ current: { apparent_temperature: 70, cloud_cover: 0 } }),
      } as Response);

      await weatherService.getCurrentWeather({ latitude: 40.7128, longitude: -74.006 });

      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('temperature_unit=fahrenheit')
      );
    });
  });

  describe('getWeatherForMultipleLocations', () => {
    it('should fetch weather for all locations and call callback', async () => {
      const mockWeather = { current: { apparent_temperature: 70, cloud_cover: 10 } };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockWeather),
      } as Response);

      const onResult = vi.fn();
      const locations = [
        { latitude: 40.7128, longitude: -74.006 },
        { latitude: 34.0522, longitude: -118.2437 },
      ];

      const results = await getWeatherForMultipleLocations(locations, onResult, 0);

      expect(results).toHaveLength(2);
      expect(onResult).toHaveBeenCalledTimes(2);
      expect(onResult).toHaveBeenCalledWith(0, { feelsLike: 70, cloudCover: 10 });
      expect(onResult).toHaveBeenCalledWith(1, { feelsLike: 70, cloudCover: 10 });
    });
  });
});
