import { describe, it, expect } from 'vitest';
import {
  validateZipCode,
  getCoordinatesFromZip,
  geocodingService,
} from './geocodingService';

describe('geocodingService', () => {
  describe('validateZipCode', () => {
    it('should validate 5-digit zip codes', () => {
      expect(validateZipCode('10001')).toBe(true);
      expect(validateZipCode('90210')).toBe(true);
      expect(validateZipCode('00000')).toBe(true);
    });

    it('should reject invalid zip codes', () => {
      expect(validateZipCode('1234')).toBe(false);
      expect(validateZipCode('123456')).toBe(false);
      expect(validateZipCode('abcde')).toBe(false);
      expect(validateZipCode('1234a')).toBe(false);
      expect(validateZipCode('')).toBe(false);
      expect(validateZipCode('10001-1234')).toBe(false); // ZIP+4 not supported
    });
  });

  describe('getCoordinatesFromZip', () => {
    it('should return coordinates for known zip codes', () => {
      const coords = getCoordinatesFromZip('10001');
      expect(coords).not.toBeNull();
      expect(coords?.latitude).toBeCloseTo(40.75, 1);
      expect(coords?.longitude).toBeCloseTo(-73.99, 1);
    });

    it('should fall back to 3-digit prefix for unknown zips', () => {
      const coords = getCoordinatesFromZip('10099');
      expect(coords).not.toBeNull();
      // Should match the NYC region
      expect(coords?.latitude).toBeGreaterThan(40);
      expect(coords?.longitude).toBeLessThan(-73);
    });

    it('should fall back to first digit region for completely unknown zips', () => {
      const coords = getCoordinatesFromZip('99999');
      expect(coords).not.toBeNull();
      // Region 9 is Pacific
      expect(coords?.latitude).toBeGreaterThan(30);
    });

    it('should return null for invalid zip codes', () => {
      expect(getCoordinatesFromZip('abc')).toBeNull();
      expect(getCoordinatesFromZip('')).toBeNull();
    });
  });

  describe('geocodingService interface', () => {
    it('should expose getCoordinates method', () => {
      const coords = geocodingService.getCoordinates('90210');
      expect(coords).not.toBeNull();
      expect(coords?.latitude).toBeCloseTo(34.09, 1);
    });

    it('should expose isValidZip method', () => {
      expect(geocodingService.isValidZip('90210')).toBe(true);
      expect(geocodingService.isValidZip('invalid')).toBe(false);
    });
  });
});
