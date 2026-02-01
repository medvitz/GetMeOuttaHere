import type { DestinationResult } from '../types';

interface TopFivePanelProps {
  results: DestinationResult[];
}

export function TopFivePanel({ results }: TopFivePanelProps) {
  if (results.length === 0) {
    return (
      <div className="bg-gradient-to-br from-[var(--color-warm-100)] to-[var(--color-warm-200)] rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-[var(--color-warm-800)] flex items-center gap-2">
          <span>🏆</span>
          Best Bang for Your Mile
        </h2>
        <p className="text-sm text-[var(--color-warm-600)] mt-2">
          Search to find the most efficient escapes
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[var(--color-warm-100)] to-[var(--color-warm-200)] rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold text-[var(--color-warm-800)] flex items-center gap-2 mb-3">
        <span>🏆</span>
        Best Bang for Your Mile
      </h2>

      <ul className="space-y-2">
        {results.map((result, index) => (
          <li
            key={`${result.city.name}-${result.city.state}`}
            className="flex items-center gap-2 bg-white/60 rounded-lg p-2"
          >
            <span className={`
              w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold
              ${index === 0 ? 'bg-yellow-400 text-yellow-900' : ''}
              ${index === 1 ? 'bg-gray-300 text-gray-700' : ''}
              ${index === 2 ? 'bg-amber-600 text-amber-100' : ''}
              ${index > 2 ? 'bg-[var(--color-warm-300)] text-[var(--color-warm-800)]' : ''}
            `}>
              {index + 1}
            </span>

            <div className="flex-1 min-w-0">
              <p className="font-medium text-[var(--color-warm-900)] truncate">
                {result.city.name}, {result.city.state}
              </p>
              <p className="text-xs text-[var(--color-warm-600)]">
                {result.distance.toFixed(0)} mi for{' '}
                <span className="text-green-600 font-medium">
                  +{result.tempDifference.toFixed(0)}°F
                </span>
              </p>
            </div>

            <div className="text-right">
              <p className="font-mono font-bold text-[var(--color-warm-800)]">
                {result.milesPerDegree.toFixed(1)}
              </p>
              <p className="text-xs text-[var(--color-warm-500)]">mi/°F</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="text-xs text-[var(--color-warm-600)] mt-3 italic">
        Lower is better — fewer miles per degree gained
      </p>
    </div>
  );
}
