import type { DestinationResult } from '../types';
import { WeatherIcon } from './WeatherIcon';

interface ResultsListProps {
  results: DestinationResult[];
  isLoading: boolean;
  progress: number;
}

export function ResultsList({ results, isLoading, progress }: ResultsListProps) {
  if (isLoading && results.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-[var(--color-warm-800)] mb-3">
          Destinations
        </h2>
        <div className="flex flex-col items-center py-8">
          <div className="w-full bg-[var(--color-warm-200)] rounded-full h-2 mb-2">
            <div
              className="bg-[var(--color-warm-500)] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-[var(--color-warm-600)]">
            Finding warmer destinations...
          </p>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-[var(--color-warm-800)] mb-3">
          Destinations
        </h2>
        <p className="text-[var(--color-warm-600)] text-center py-8">
          Enter your zip code and click Search to find warmer destinations
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-[var(--color-warm-800)]">
          Destinations
        </h2>
        {isLoading && (
          <span className="text-xs text-[var(--color-warm-500)]">
            {progress}% loaded
          </span>
        )}
      </div>

      <div className="overflow-auto max-h-96">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-[var(--color-warm-100)]">
            <tr className="text-left text-[var(--color-warm-700)]">
              <th className="py-2 px-2">City</th>
              <th className="py-2 px-2 text-right">Temp</th>
              <th className="py-2 px-2 text-right">Gain</th>
              <th className="py-2 px-2 text-right">Dist</th>
              <th className="py-2 px-2 text-right">Drive</th>
              <th className="py-2 px-2 text-right">mi/°F</th>
              <th className="py-2 px-2 text-center">Sky</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr
                key={`${result.city.name}-${result.city.state}`}
                className={`
                  border-t border-[var(--color-warm-100)]
                  ${index % 2 === 0 ? 'bg-white' : 'bg-[var(--color-warm-50)]'}
                  hover:bg-[var(--color-warm-100)] transition-colors
                `}
              >
                <td className="py-2 px-2">
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
                  {result.distance.toFixed(0)} mi
                </td>
                <td className="py-2 px-2 text-right font-mono text-[var(--color-warm-700)]">
                  {result.driveTime.toFixed(1)} hr
                </td>
                <td className="py-2 px-2 text-right font-mono text-[var(--color-warm-600)]">
                  {result.milesPerDegree === Infinity
                    ? '—'
                    : result.milesPerDegree.toFixed(1)}
                </td>
                <td className="py-2 px-2 text-center">
                  <WeatherIcon cloudCover={result.weather.cloudCover} size="sm" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[var(--color-warm-500)] mt-2 text-right">
        {results.length} destinations found
      </p>
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
