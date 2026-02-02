import type { DestinationResult } from '../types';

interface TopFivePanelProps {
  results: DestinationResult[];
}

export function TopFivePanel({ results }: TopFivePanelProps) {
  if (results.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md h-full">
        <div className="px-4 py-3 border-b border-[var(--color-warm-100)]">
          <h2 className="text-lg font-semibold text-[var(--color-warm-800)] flex items-center gap-2">
            <span>🏆</span>
            Best Bang for Your Mile
          </h2>
        </div>
        <div className="p-4">
          <p className="text-sm text-[var(--color-warm-600)] text-center py-8">
            Search to find the most efficient escapes
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md h-full">
      <div className="px-4 py-3 border-b border-[var(--color-warm-100)]">
        <h2 className="text-lg font-semibold text-[var(--color-warm-800)] flex items-center gap-2">
          <span>🏆</span>
          Best Bang for Your Mile
        </h2>
      </div>

      <div className="p-4">
        <ul className="space-y-2">
          {results.map((result, index) => (
            <li
              key={`${result.city.name}-${result.city.state}`}
              className="flex items-center gap-2 bg-[var(--color-warm-50)] rounded-lg p-2"
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

        <p className="text-xs text-[var(--color-warm-500)] mt-3 italic text-center">
          Lower is better — fewer miles per degree gained
        </p>
      </div>
    </div>
  );
}
