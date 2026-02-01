import { describe, it, expect } from 'vitest';
import {
  calculateHaversineDistance,
  estimateDriveTime,
  filterCitiesByDriveTime,
  getCityDistances,
  distanceService,
} from './distanceService';
import type { City, Coordinates } from '../types';

describe('distanceService', () => {
  const newYork: Coordinates = { latitude: 40.7128, longitude: -74.006 };
  const losAngeles: Coordinates = { latitude: 34.0522, longitude: -118.2437 };
  const boston: Coordinates = { latitude: 42.3601, longitude: -71.0589 };
  const philadelphia: Coordinates = { latitude: 39.9526, longitude: -75.1652 };

  describe('calculateHaversineDistance', () => {
    it('should calculate distance between two points accurately', () => {
      // NYC to LA is approximately 2451 miles (crow flies)
      const distance = calculateHaversineDistance(newYork, losAngeles);
      expect(distance).toBeGreaterThan(2400);
      expect(distance).toBeLessThan(2500);
    });

    it('should return 0 for same point', () => {
      const distance = calculateHaversineDistance(newYork, newYork);
      expect(distance).toBeCloseTo(0, 5);
    });

    it('should calculate short distances accurately', () => {
      // NYC to Boston is approximately 190 miles
      const distance = calculateHaversineDistance(newYork, boston);
      expect(distance).toBeGreaterThan(180);
      expect(distance).toBeLessThan(200);
    });

    it('should calculate medium distances accurately', () => {
      // NYC to Philadelphia is approximately 80 miles
      const distance = calculateHaversineDistance(newYork, philadelphia);
      expect(distance).toBeGreaterThan(75);
      expect(distance).toBeLessThan(85);
    });
  });

  describe('estimateDriveTime', () => {
    it('should calculate drive time at 55 mph', () => {
      // 110 miles should take 2 hours at 55 mph
      expect(estimateDriveTime(110)).toBeCloseTo(2, 2);
    });

    it('should handle fractional hours', () => {
      // 55 miles = 1 hour
      expect(estimateDriveTime(55)).toBeCloseTo(1, 2);
      // 27.5 miles = 0.5 hours
      expect(estimateDriveTime(27.5)).toBeCloseTo(0.5, 2);
    });
  });

  describe('filterCitiesByDriveTime', () => {
    const testCities: City[] = [
      { name: 'Philadelphia', state: 'PA', latitude: 39.9526, longitude: -75.1652, country: 'US' },
      { name: 'Boston', state: 'MA', latitude: 42.3601, longitude: -71.0589, country: 'US' },
      { name: 'Los Angeles', state: 'CA', latitude: 34.0522, longitude: -118.2437, country: 'US' },
    ];

    it('should filter cities within drive time radius', () => {
      // From NYC, 4 hours at 55 mph = 220 miles
      // Philadelphia (~80mi) and Boston (~190mi) should be included
      // LA (~2450mi) should be excluded
      const filtered = filterCitiesByDriveTime(testCities, newYork, 4);

      expect(filtered).toHaveLength(2);
      expect(filtered.map(c => c.name)).toContain('Philadelphia');
      expect(filtered.map(c => c.name)).toContain('Boston');
      expect(filtered.map(c => c.name)).not.toContain('Los Angeles');
    });

    it('should exclude all cities if drive time is too short', () => {
      // 0.5 hours at 55 mph = 27.5 miles - none of our cities
      const filtered = filterCitiesByDriveTime(testCities, newYork, 0.5);
      expect(filtered).toHaveLength(0);
    });

    it('should include all cities if drive time is long enough', () => {
      // 50 hours should cover LA from NYC
      const filtered = filterCitiesByDriveTime(testCities, newYork, 50);
      expect(filtered).toHaveLength(3);
    });
  });

  describe('getCityDistances', () => {
    const testCities: City[] = [
      { name: 'Philadelphia', state: 'PA', latitude: 39.9526, longitude: -75.1652, country: 'US' },
      { name: 'Boston', state: 'MA', latitude: 42.3601, longitude: -71.0589, country: 'US' },
    ];

    it('should return distances and drive times for all cities', () => {
      const results = getCityDistances(testCities, newYork);

      expect(results).toHaveLength(2);

      const philly = results.find(r => r.city.name === 'Philadelphia');
      expect(philly).toBeDefined();
      expect(philly!.distance).toBeGreaterThan(75);
      expect(philly!.distance).toBeLessThan(85);
      expect(philly!.driveTime).toBeGreaterThan(1);
      expect(philly!.driveTime).toBeLessThan(2);
    });
  });

  describe('distanceService interface', () => {
    it('should expose all methods', () => {
      expect(distanceService.calculateDistance).toBeDefined();
      expect(distanceService.estimateDriveTime).toBeDefined();
      expect(distanceService.filterByDriveTime).toBeDefined();
      expect(distanceService.getCityDistances).toBeDefined();
    });
  });
});
