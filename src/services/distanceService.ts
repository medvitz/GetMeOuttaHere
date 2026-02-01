import type { City, Coordinates } from '../types';

const EARTH_RADIUS_MILES = 3958.8;
const AVERAGE_SPEED_MPH = 55;

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function calculateHaversineDistance(
  from: Coordinates,
  to: Coordinates
): number {
  const lat1 = toRadians(from.latitude);
  const lat2 = toRadians(to.latitude);
  const deltaLat = toRadians(to.latitude - from.latitude);
  const deltaLon = toRadians(to.longitude - from.longitude);

  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS_MILES * c;
}

export function estimateDriveTime(distanceMiles: number): number {
  return distanceMiles / AVERAGE_SPEED_MPH;
}

export function filterCitiesByDriveTime(
  cities: City[],
  origin: Coordinates,
  maxDriveTimeHours: number
): City[] {
  const maxDistance = maxDriveTimeHours * AVERAGE_SPEED_MPH;

  return cities.filter(city => {
    const distance = calculateHaversineDistance(origin, {
      latitude: city.latitude,
      longitude: city.longitude,
    });
    return distance <= maxDistance;
  });
}

export function getCityDistances(
  cities: City[],
  origin: Coordinates
): { city: City; distance: number; driveTime: number }[] {
  return cities.map(city => {
    const distance = calculateHaversineDistance(origin, {
      latitude: city.latitude,
      longitude: city.longitude,
    });
    return {
      city,
      distance,
      driveTime: estimateDriveTime(distance),
    };
  });
}

export interface DistanceService {
  calculateDistance(from: Coordinates, to: Coordinates): number;
  estimateDriveTime(distanceMiles: number): number;
  filterByDriveTime(
    cities: City[],
    origin: Coordinates,
    maxHours: number
  ): City[];
  getCityDistances(
    cities: City[],
    origin: Coordinates
  ): { city: City; distance: number; driveTime: number }[];
}

export const distanceService: DistanceService = {
  calculateDistance: calculateHaversineDistance,
  estimateDriveTime,
  filterByDriveTime: filterCitiesByDriveTime,
  getCityDistances,
};
