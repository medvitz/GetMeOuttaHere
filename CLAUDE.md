# Get Me Outta Here!

A playful single-page web app that helps users escape bad weather. Enter your zip code, set a max drive time, and discover warmer destinations within driving distance — ranked by temperature gain and efficiency.

## Tech Stack

- **Frontend:** React (Vite + TypeScript)
- **Map:** Leaflet + OpenStreetMap (zero cost, no API key)
- **Weather:** Open-Meteo API (free, no API key) — abstracted behind a service layer for easy swapping
- **Geocoding:** Bundled US city dataset (~400 major cities with lat/lon/zip)
- **Distance:** Haversine formula, assuming ~55 mph average to estimate drive time
- **Styling:** Tailwind CSS — playful, warm-toned palette (designed to be swappable for a "cool down" summer theme later)

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Lint check
- `npm run test` — Run tests

## Architecture

```
src/
├── components/        # React UI components
│   ├── ZipInput.tsx          # Zip code input field
│   ├── DriveTimeSlider.tsx   # 2–12hr slider, 0.5hr increments
│   ├── ResultsList.tsx       # Scrollable destination results
│   ├── MapView.tsx           # Leaflet map with temp-colored pins
│   ├── TopFivePanel.tsx      # "Best Bang for Your Mile" leaderboard
│   └── WeatherIcon.tsx       # Sun/partial cloud/overcast icon
├── services/          # API + business logic (swappable)
│   ├── weatherService.ts     # Fetches weather from Open-Meteo
│   ├── geocodingService.ts   # Zip → lat/lon lookup
│   └── distanceService.ts    # Haversine distance + drive time calc
├── data/
│   └── usCities.ts           # Bundled city dataset (~400 cities)
├── hooks/
│   └── useWeatherSearch.ts   # Orchestrates search, streaming results
├── types/
│   └── index.ts              # Shared TypeScript types
├── utils/
│   └── temperatureUtils.ts   # Miles-per-degree ratio, formatting
├── App.tsx
└── main.tsx
```

## Key Design Decisions

- **Crow-flies distance** for V1 (no routing API). Haversine + 55mph estimate.
- **"Feels like" temperature** is the primary metric. Cloud cover shown as a visual icon only — not factored into ranking.
- **Results stream in live** as weather data loads. Show a clear progress indicator until all cities are fetched.
- **Filter before fetching.** Use the city dataset + Haversine to eliminate cities outside the user's max drive radius BEFORE making any weather API calls.
- **Service layer abstraction.** `weatherService.ts` must expose a clean interface so the underlying API (Open-Meteo) can be swapped without touching components.
- **Theme adaptability.** Color palette and copy should be easy to swap for a "cool down" summer mode later. Use CSS variables or Tailwind theme config.
- **Canadian cities** are a planned V2 feature. Stub out the data structure to support a `country` field but don't implement the toggle yet.

## UI Layout (Single Page)

```
┌─────────────────────────────────────────────────┐
│  🚗 Get Me Outta Here!                          │
│  [Zip Code Input]  [Drive Time Slider: 2–12hr]  │
│  [Search Button]                                 │
├────────────────────────┬────────────────────────┤
│                        │  Best Bang for Your    │
│                        │  Mile 🏆               │
│    Leaflet Map         │  1. City - ratio       │
│    (temp-colored pins) │  2. City - ratio       │
│                        │  3. ...                │
│                        ├────────────────────────┤
│                        │  Results List          │
│                        │  City | Dist | Drive   │
│                        │  Feels Like | Δ Temp   │
│                        │  mi/°F | ☁️ icon       │
│                        │  (streams in live)     │
│                        │  [progress indicator]  │
└────────────────────────┴────────────────────────┘
```

## Results Row Fields

Each result displays: city name, state, distance (mi), estimated drive time, "feels like" temp (°F), temp difference from origin (°F), miles-per-degree ratio, cloud cover icon (sun/partial/overcast).

## Important Notes

- NEVER commit API keys (even though Open-Meteo doesn't need one, keep the pattern clean for future providers)
- Open-Meteo rate limits: be respectful — batch requests or add small delays if fetching 100+ cities
- The app name "Get Me Outta Here!" should appear in the title bar, header, and meta tags
- Zip code validation: US 5-digit zips only for V1
- Drive time slider: 2.0 to 12.0 hours, in 0.5-hour increments
- Default drive time: 8 hours

## Beads Integration

We use `bd` (Beads) for issue tracking. Run `bd quickstart` if not initialized.

```bash
bd ready --json          # Find ready work
bd create "title" -t feature -p <0-4> -d "description" --json
bd update <id> --status in_progress --json
bd close <id> --reason "Done" --json
bd dep tree <id>         # View dependency tree
```

## V1 Task Breakdown (for Beads epic creation)

Create as a Beads epic: "Get Me Outta Here! V1"

### Task 1: Project scaffolding
- Type: task, Priority: 0
- Vite + React + TypeScript + Tailwind setup
- Folder structure per Architecture section above
- No blockers

### Task 2: Bundled US city dataset
- Type: task, Priority: 0
- Create `usCities.ts` with ~400 major US cities
- Fields: `name`, `state`, `latitude`, `longitude`, `country` (default "US", stubbed for future Canadian support)
- No blockers

### Task 3: Geocoding service
- Type: task, Priority: 1
- `geocodingService.ts`: zip code → lat/lon lookup
- Use a bundled zip-to-coordinates mapping (free dataset) or a lightweight API
- Blocks: Task 6

### Task 4: Distance service
- Type: task, Priority: 1
- `distanceService.ts`: Haversine formula for crow-flies distance
- Function to convert distance → estimated drive time at 55 mph
- Function to filter city list by max drive time
- No blockers

### Task 5: Weather service
- Type: task, Priority: 0
- `weatherService.ts`: fetch current weather from Open-Meteo
- Must return: feels-like temp (°F), cloud cover (%)
- Clean interface — easy to swap provider later
- Blocks: Task 6

### Task 6: Search orchestration hook
- Type: feature, Priority: 0
- `useWeatherSearch.ts`: coordinates user input → filtered cities → weather fetch → ranked results
- Streams results as they arrive (not all-at-once)
- Calculates temp difference and miles-per-degree ratio
- Depends on: Task 3, Task 4, Task 5

### Task 7: Zip code input component
- Type: feature, Priority: 1
- `ZipInput.tsx`: text input, validates 5-digit US zip
- Depends on: Task 1

### Task 8: Drive time slider component
- Type: feature, Priority: 1
- `DriveTimeSlider.tsx`: range 2.0–12.0, step 0.5
- Displays current value as "X.X hours"
- Default: 8 hours
- Depends on: Task 1

### Task 9: Map view component
- Type: feature, Priority: 1
- `MapView.tsx`: Leaflet + OpenStreetMap
- Shows user's location as a distinct pin
- Destination pins color-coded by temperature (warm = red/orange, cold = blue)
- Updates live as results stream in
- Depends on: Task 1

### Task 10: Results list component
- Type: feature, Priority: 1
- `ResultsList.tsx`: scrollable list of destinations
- Columns per "Results Row Fields" section
- Progress indicator while loading
- Sorted by temperature (warmest first)
- Depends on: Task 1

### Task 11: Weather icon component
- Type: task, Priority: 2
- `WeatherIcon.tsx`: sun / partial cloud / overcast based on cloud cover %
- Simple SVG or emoji-based

### Task 12: Top 5 panel component
- Type: feature, Priority: 1
- `TopFivePanel.tsx`: "Best Bang for Your Mile" leaderboard
- Ranked by best miles-per-degree ratio (lowest miles per °F gained)
- Shows: rank, city, ratio value, temp
- Depends on: Task 6

### Task 13: App integration and layout
- Type: task, Priority: 0
- `App.tsx`: wire all components together per UI Layout diagram
- Connect search hook to all display components
- Responsive layout
- Depends on: Tasks 6–12

### Task 14: Playful styling and polish
- Type: task, Priority: 2
- Warm color palette, fun typography
- Encouraging copy (e.g., "Time to thaw out!", "Your escape plan is ready")
- CSS variables or Tailwind theme for future summer mode swap
- Loading animations
- Depends on: Task 13

## V2 Features (deferred — do NOT implement)

- Forecast view (plan trips for specific days)
- Canadian cities toggle
- "Cool down" summer mode (reverse — find cooler destinations)
- Save/share trip results
- Real driving distances via routing API
- Attraction/POI integration near destinations
