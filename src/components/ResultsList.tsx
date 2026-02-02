import { useState, useMemo } from 'react';
import type { DestinationResult } from '../types';
import { WeatherIcon } from './WeatherIcon';

type SortColumn = 'city' | 'temp' | 'gain' | 'dist' | 'drive';
type SortDirection = 'asc' | 'desc';

interface ResultsListProps {
  results: DestinationResult[];
  isLoading: boolean;
  progress: number;
}

function SortIcon({ active, direction }: { active: boolean; direction: SortDirection }) {
  if (!active) {
    return <span className="text-[var(--color-warm-300)] ml-1">⇅</span>;
  }
  return (
    <span className="text-[var(--color-warm-600)] ml-1">
      {direction === 'asc' ? '↑' : '↓'}
    </span>
  );
}

export function ResultsList({ results, isLoading, progress }: ResultsListProps) {
  const [sortColumn, setSortColumn] = useState<SortColumn>('temp');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(column);
      // Default direction based on column type
      setSortDirection(column === 'city' ? 'asc' : 'desc');
    }
  };

  const sortedResults = useMemo(() => {
    if (results.length === 0) return results;

    return [...results].sort((a, b) => {
      let comparison = 0;

      switch (sortColumn) {
        case 'city':
          comparison = a.city.name.localeCompare(b.city.name);
          break;
        case 'temp':
          comparison = a.weather.feelsLike - b.weather.feelsLike;
          break;
        case 'gain':
          comparison = a.tempDifference - b.tempDifference;
          break;
        case 'dist':
          comparison = a.distance - b.distance;
          break;
        case 'drive':
          comparison = a.driveTime - b.driveTime;
          break;
      }

      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [results, sortColumn, sortDirection]);

  const headerClass = `py-2 px-2 cursor-pointer hover:bg-[var(--color-warm-200)] transition-colors select-none`;

  if (isLoading && results.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md h-full animate-bounce-in">
        <div className="px-4 py-3 border-b border-[var(--color-warm-100)]">
          <h2 className="text-lg font-semibold text-[var(--color-warm-800)]">
            Destinations
          </h2>
        </div>
        <div className="flex flex-col items-center py-8 px-4">
          <div className="text-4xl mb-4 animate-spin-slow">🌞</div>
          <div className="w-full bg-[var(--color-warm-200)] rounded-full h-3 mb-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[var(--color-warm-400)] to-[var(--color-warm-500)] h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-[var(--color-warm-600)] animate-pulse-warm">
            Scanning for sunshine...
          </p>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md h-full">
        <div className="px-4 py-3 border-b border-[var(--color-warm-100)]">
          <h2 className="text-lg font-semibold text-[var(--color-warm-800)]">
            Destinations
          </h2>
        </div>
        <div className="text-center py-8 px-4">
          <p className="text-4xl mb-3">🗺️</p>
          <p className="text-[var(--color-warm-600)]">
            Ready to escape the cold?
          </p>
          <p className="text-sm text-[var(--color-warm-500)] mt-1">
            Enter your zip code and hit Search!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md h-full">
      <div className="px-4 py-3 border-b border-[var(--color-warm-100)] flex justify-between items-center">
        <h2 className="text-lg font-semibold text-[var(--color-warm-800)]">
          Destinations
        </h2>
        {isLoading && (
          <span className="text-xs text-[var(--color-warm-500)]">
            {progress}% loaded
          </span>
        )}
      </div>

      <div className="overflow-auto max-h-80 custom-scrollbar">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-[var(--color-warm-100)]">
            <tr className="text-left text-[var(--color-warm-700)]">
              <th
                className={`${headerClass} px-3`}
                onClick={() => handleSort('city')}
              >
                City
                <SortIcon active={sortColumn === 'city'} direction={sortDirection} />
              </th>
              <th
                className={`${headerClass} text-right`}
                onClick={() => handleSort('temp')}
                title="Feels like temperature (accounts for wind chill and humidity)"
              >
                Temp*
                <SortIcon active={sortColumn === 'temp'} direction={sortDirection} />
              </th>
              <th
                className={`${headerClass} text-right`}
                onClick={() => handleSort('gain')}
              >
                Gain
                <SortIcon active={sortColumn === 'gain'} direction={sortDirection} />
              </th>
              <th
                className={`${headerClass} text-right`}
                onClick={() => handleSort('dist')}
              >
                Dist
                <SortIcon active={sortColumn === 'dist'} direction={sortDirection} />
              </th>
              <th
                className={`${headerClass} text-right`}
                onClick={() => handleSort('drive')}
              >
                Drive
                <SortIcon active={sortColumn === 'drive'} direction={sortDirection} />
              </th>
              <th className="py-2 px-2 text-center">Sky</th>
            </tr>
          </thead>
          <tbody>
            {sortedResults.map((result, index) => (
              <tr
                key={`${result.city.name}-${result.city.state}`}
                className={`
                  border-t border-[var(--color-warm-100)]
                  ${index % 2 === 0 ? 'bg-white' : 'bg-[var(--color-warm-50)]'}
                  hover:bg-[var(--color-warm-100)] transition-colors
                `}
              >
                <td className="py-2 px-3">
                  <span className="font-medium text-[var(--color-warm-900)]">
                    {result.city.name}
                  </span>
                  <span className="text-[var(--color-warm-500)] ml-1">
                    {result.city.state}
                  </span>
                </td>
                <td className="py-2 px-2 text-right font-mono">
                  <span className={getTemperatureColor(result.weather.feelsLike)}>
                    {result.weather.feelsLike.toFixed(0)}°F
                  </span>
                </td>
                <td className="py-2 px-2 text-right font-mono">
                  <span className={result.tempDifference > 0 ? 'text-green-600' : 'text-blue-600'}>
                    {result.tempDifference > 0 ? '+' : ''}
                    {result.tempDifference.toFixed(0)}°
                  </span>
                </td>
                <td className="py-2 px-2 text-right font-mono text-[var(--color-warm-700)]">
                  {result.distance.toFixed(0)}mi
                </td>
                <td className="py-2 px-2 text-right font-mono text-[var(--color-warm-700)]">
                  {result.driveTime.toFixed(1)}hr
                </td>
                <td className="py-2 px-2 text-center">
                  <WeatherIcon cloudCover={result.weather.cloudCover} size="sm" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-2 border-t border-[var(--color-warm-100)] flex justify-between items-center">
        <p className="text-xs text-[var(--color-warm-400)] italic">
          * Temps are "feels like"
        </p>
        <p className="text-xs text-[var(--color-warm-500)]">
          {results.length} destinations found
        </p>
      </div>
    </div>
  );
}

function getTemperatureColor(temp: number): string {
  if (temp >= 80) return 'text-red-600';
  if (temp >= 70) return 'text-orange-500';
  if (temp >= 60) return 'text-yellow-600';
  if (temp >= 50) return 'text-green-600';
  if (temp >= 40) return 'text-cyan-600';
  return 'text-blue-600';
}
