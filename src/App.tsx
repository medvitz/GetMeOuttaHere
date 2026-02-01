import { useEffect } from 'react';
import { useWeatherSearch } from './hooks/useWeatherSearch';

function App() {
  const {
    isLoading,
    progress,
    results,
    originWeather,
    topFiveByEfficiency,
    error,
    search,
  } = useWeatherSearch();

  // Demo: Run a search on mount and log results
  useEffect(() => {
    console.log('Starting demo search from NYC (10001) with 8 hour drive time...');
    search('10001', 8);
  }, [search]);

  // Log state changes
  useEffect(() => {
    if (isLoading) {
      console.log(`Loading... ${progress}% (${results.length} results so far)`);
    }
  }, [isLoading, progress, results.length]);

  useEffect(() => {
    if (originWeather) {
      console.log('Origin weather:', originWeather);
    }
  }, [originWeather]);

  useEffect(() => {
    if (!isLoading && results.length > 0) {
      console.log('=== SEARCH COMPLETE ===');
      console.log(`Found ${results.length} destinations`);
      console.log('\nTop 10 warmest destinations:');
      results.slice(0, 10).forEach((r, i) => {
        console.log(
          `${i + 1}. ${r.city.name}, ${r.city.state}: ${r.weather.feelsLike.toFixed(1)}°F ` +
          `(+${r.tempDifference.toFixed(1)}°F) - ${r.distance.toFixed(0)} mi, ${r.driveTime.toFixed(1)} hrs`
        );
      });
      console.log('\nTop 5 "Best Bang for Your Mile":');
      topFiveByEfficiency.forEach((r, i) => {
        console.log(
          `${i + 1}. ${r.city.name}, ${r.city.state}: ${r.milesPerDegree.toFixed(1)} mi/°F ` +
          `(${r.distance.toFixed(0)} mi for +${r.tempDifference.toFixed(1)}°F)`
        );
      });
    }
  }, [isLoading, results, topFiveByEfficiency]);

  useEffect(() => {
    if (error) {
      console.error('Search error:', error);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-warm-800)]">
          Get Me Outta Here!
        </h1>
        <p className="text-[var(--color-warm-600)] mt-2">
          Find warmer destinations within driving distance
        </p>
      </header>
      <main className="max-w-6xl mx-auto text-center">
        {error && (
          <p className="text-red-600 mb-4">{error}</p>
        )}
        {isLoading ? (
          <div>
            <p className="text-[var(--color-warm-700)] mb-2">
              Searching for warmer destinations...
            </p>
            <div className="w-64 mx-auto bg-[var(--color-warm-200)] rounded-full h-4">
              <div
                className="bg-[var(--color-warm-500)] h-4 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-[var(--color-warm-600)] mt-2">
              {progress}% - Found {results.length} destinations
            </p>
          </div>
        ) : results.length > 0 ? (
          <div>
            <p className="text-[var(--color-warm-700)] mb-4">
              Found {results.length} destinations! Check the console for details.
            </p>
            <p className="text-sm text-[var(--color-warm-600)]">
              Warmest: {results[0]?.city.name}, {results[0]?.city.state} at{' '}
              {results[0]?.weather.feelsLike.toFixed(1)}°F
            </p>
          </div>
        ) : (
          <p className="text-[var(--color-warm-700)]">
            Open the browser console to see search results
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
