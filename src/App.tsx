import { useState, useCallback } from 'react';
import { useWeatherSearch } from './hooks/useWeatherSearch';
import { geocodingService } from './services/geocodingService';
import { ZipInput } from './components/ZipInput';
import { DriveTimeSlider } from './components/DriveTimeSlider';
import { ResultsList } from './components/ResultsList';
import { TopFivePanel } from './components/TopFivePanel';
import { MapView } from './components/MapView';
import type { Coordinates } from './types';

function App() {
  const [zipCode, setZipCode] = useState('');
  const [driveTime, setDriveTime] = useState(8);
  const [originCoords, setOriginCoords] = useState<Coordinates | null>(null);

  const {
    isLoading,
    progress,
    results,
    originWeather,
    topFiveByEfficiency,
    error,
    search,
  } = useWeatherSearch();

  const handleSearch = useCallback(() => {
    if (zipCode.length !== 5) return;

    const coords = geocodingService.getCoordinates(zipCode);
    setOriginCoords(coords);
    search(zipCode, driveTime);
  }, [zipCode, driveTime, search]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[var(--color-warm-600)] to-[var(--color-warm-500)] text-white py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
            <span>🚗</span>
            Get Me Outta Here!
          </h1>
          <p className="text-[var(--color-warm-100)] mt-1">
            Find warmer destinations within driving distance
          </p>
        </div>
      </header>

      {/* Search Controls */}
      <div className="bg-white shadow-md py-4 px-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-end gap-4" onKeyDown={handleKeyDown}>
          <ZipInput
            value={zipCode}
            onChange={setZipCode}
            disabled={isLoading}
          />

          <DriveTimeSlider
            value={driveTime}
            onChange={setDriveTime}
            disabled={isLoading}
          />

          <button
            onClick={handleSearch}
            disabled={isLoading || zipCode.length !== 5}
            className={`
              px-6 py-2 rounded-lg font-semibold text-white
              transition-all duration-200 flex items-center gap-2
              ${isLoading || zipCode.length !== 5
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[var(--color-warm-500)] hover:bg-[var(--color-warm-600)] active:scale-95 hover:shadow-lg'
              }
            `}
          >
            {isLoading ? (
              <>
                <span className="animate-spin-slow">🌞</span>
                Searching...
              </>
            ) : (
              <>
                <span>🔍</span>
                Find Sunshine
              </>
            )}
          </button>

          {originWeather && (
            <div className="ml-auto text-sm text-[var(--color-warm-700)]">
              <span className="font-medium">Your weather:</span>{' '}
              <span className="font-mono">{originWeather.feelsLike.toFixed(0)}°F</span>
              <span className="text-[var(--color-warm-500)]"> feels like</span>
            </div>
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="max-w-6xl mx-auto px-4 mt-4">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Map */}
          <div className="lg:col-span-2">
            <MapView
              originCoords={originCoords}
              results={results}
              originTemp={originWeather?.feelsLike}
            />
          </div>

          {/* Right Column: Top 5 + Results */}
          <div className="space-y-6">
            <TopFivePanel results={topFiveByEfficiency} />
            <ResultsList
              results={results}
              isLoading={isLoading}
              progress={progress}
            />
          </div>
        </div>

        {/* Encouraging message when results are found */}
        {!isLoading && results.length > 0 && results[0].tempDifference > 0 && (
          <div className="mt-6 text-center animate-slide-up">
            <div className="inline-block bg-gradient-to-r from-[var(--color-warm-100)] to-[var(--color-warm-200)] rounded-xl px-6 py-4 shadow-md">
              <p className="text-xl text-[var(--color-warm-800)]">
                <span className="text-2xl mr-2">🌴</span>
                Your escape plan is ready!
              </p>
              <p className="text-lg text-[var(--color-warm-700)] mt-1">
                {results[0].city.name}, {results[0].city.state} is{' '}
                <span className="font-bold text-green-600">
                  {results[0].tempDifference.toFixed(0)}°F warmer
                </span>{' '}
                — just {results[0].driveTime.toFixed(1)} hours away!
              </p>
              <p className="text-sm text-[var(--color-warm-500)] mt-2">
                Pack your bags and chase the sunshine! ☀️
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-warm-100)] py-4 px-4 mt-8">
        <div className="max-w-6xl mx-auto text-center text-sm text-[var(--color-warm-600)]">
          <p>
            Weather data from{' '}
            <a
              href="https://open-meteo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--color-warm-800)]"
            >
              Open-Meteo
            </a>
            {' '}• Maps by{' '}
            <a
              href="https://www.openstreetmap.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--color-warm-800)]"
            >
              OpenStreetMap
            </a>
          </p>
          <p className="mt-1">
            Distances are crow-flies estimates at 55 mph average
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
