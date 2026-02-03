import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { DestinationResult, Coordinates } from '../types';

// Fix for default marker icons in webpack/vite
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface MapViewProps {
  originCoords: Coordinates | null;
  results: DestinationResult[];
  originTemp?: number;
}

function getTemperatureColor(temp: number): string {
  if (temp >= 80) return '#dc2626'; // red-600
  if (temp >= 70) return '#f97316'; // orange-500
  if (temp >= 60) return '#ca8a04'; // yellow-600
  if (temp >= 50) return '#16a34a'; // green-600
  if (temp >= 40) return '#0891b2'; // cyan-600
  return '#2563eb'; // blue-600
}

function createTemperatureIcon(temp: number, isOrigin: boolean = false): L.DivIcon {
  const color = isOrigin ? '#1f2937' : getTemperatureColor(temp);
  const bgColor = isOrigin ? '#fbbf24' : color;
  const textColor = isOrigin ? '#1f2937' : '#ffffff';
  const size = isOrigin ? 40 : 32;

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${bgColor};
        color: ${textColor};
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${isOrigin ? '12px' : '10px'};
        font-weight: bold;
        border: 2px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      ">
        ${isOrigin ? '🏠' : Math.round(temp) + '°'}
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

function MapController({ originCoords, results }: { originCoords: Coordinates | null; results: DestinationResult[] }) {
  const map = useMap();

  // Invalidate size on mount and when container might have resized
  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 100);

    const handleResize = () => map.invalidateSize();
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [map]);

  // Update bounds when data changes
  useEffect(() => {
    if (!originCoords && results.length === 0) return;

    const points: [number, number][] = [];

    if (originCoords) {
      points.push([originCoords.latitude, originCoords.longitude]);
    }

    results.forEach(r => {
      points.push([r.city.latitude, r.city.longitude]);
    });

    if (points.length > 0) {
      const bounds = L.latLngBounds(points);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, originCoords, results]);

  return null;
}

export function MapView({ originCoords, results, originTemp }: MapViewProps) {
  const defaultCenter: [number, number] = [39.8283, -98.5795]; // Center of US
  const defaultZoom = 4;

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      style={{ height: '360px', width: '100%' }}
      scrollWheelZoom={true}
    >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController originCoords={originCoords} results={results} />

        {originCoords && (
          <Marker
            position={[originCoords.latitude, originCoords.longitude]}
            icon={createTemperatureIcon(originTemp ?? 0, true)}
          >
            <Popup>
              <div className="text-center">
                <p className="font-bold">Your Location</p>
                {originTemp !== undefined && (
                  <p className="text-sm">Feels like: {originTemp.toFixed(0)}°F</p>
                )}
              </div>
            </Popup>
          </Marker>
        )}

        {results.map(result => (
          <Marker
            key={`${result.city.name}-${result.city.state}`}
            position={[result.city.latitude, result.city.longitude]}
            icon={createTemperatureIcon(result.weather.feelsLike)}
          >
            <Popup>
              <div className="text-center">
                <p className="font-bold">{result.city.name}, {result.city.state}</p>
                <p className="text-sm">
                  Feels like: <strong>{result.weather.feelsLike.toFixed(0)}°F</strong>
                </p>
                <p className="text-xs text-gray-600">
                  {result.tempDifference > 0 ? '+' : ''}{result.tempDifference.toFixed(0)}°F from home
                </p>
                <p className="text-xs text-gray-600">
                  {result.distance.toFixed(0)} mi • {result.driveTime.toFixed(1)} hr drive
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
  );
}
