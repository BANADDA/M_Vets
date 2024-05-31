"use client";

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

// Function to generate random coordinates within a bounding box
const getRandomCoordinates = (minLat, maxLat, minLng, maxLng, count) => {
  const coordinates = [];
  for (let i = 0; i < count; i++) {
    const lat = Math.random() * (maxLat - minLat) + minLat;
    const lng = Math.random() * (maxLng - minLng) + minLng;
    coordinates.push([lat, lng]);
  }
  return coordinates;
};

// Sample districts data structure
const districts = [
  {
    id: 1,
    name: 'Kampala',
    farms: getRandomCoordinates(0.30, 0.36, 32.54, 32.60, 20).map((coords, index) => ({
      id: `1.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 2,
    name: 'Jinja',
    farms: getRandomCoordinates(0.55, 0.60, 33.45, 33.50, 20).map((coords, index) => ({
      id: `2.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 3,
    name: 'Entebbe',
    farms: getRandomCoordinates(0.28, 0.32, 32.50, 32.55, 20).map((coords, index) => ({
      id: `3.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 4,
    name: 'Mbarara',
    farms: getRandomCoordinates(0.60, 0.65, 30.60, 30.65, 20).map((coords, index) => ({
      id: `4.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 5,
    name: 'Gulu',
    farms: getRandomCoordinates(2.75, 2.80, 32.30, 32.35, 20).map((coords, index) => ({
      id: `5.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  // Add all districts following the same pattern
  {
    id: 6,
    name: 'Arua',
    farms: getRandomCoordinates(3.00, 3.05, 30.90, 30.95, 20).map((coords, index) => ({
      id: `6.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 7,
    name: 'Bushenyi',
    farms: getRandomCoordinates(-0.55, -0.50, 30.15, 30.20, 20).map((coords, index) => ({
      id: `7.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 8,
    name: 'Fort Portal',
    farms: getRandomCoordinates(0.68, 0.72, 30.25, 30.30, 20).map((coords, index) => ({
      id: `8.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 9,
    name: 'Hoima',
    farms: getRandomCoordinates(1.40, 1.45, 31.30, 31.35, 20).map((coords, index) => ({
      id: `9.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 10,
    name: 'Kabale',
    farms: getRandomCoordinates(-1.25, -1.20, 30.00, 30.05, 20).map((coords, index) => ({
      id: `10.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 11,
    name: 'Kotido',
    farms: getRandomCoordinates(3.00, 3.05, 34.10, 34.15, 20).map((coords, index) => ({
      id: `11.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 12,
    name: 'Kiruhura',
    farms: getRandomCoordinates(-0.20, -0.15, 30.80, 30.85, 20).map((coords, index) => ({
      id: `12.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 13,
    name: 'Kazo',
    farms: getRandomCoordinates(-0.10, -0.05, 30.90, 30.95, 20).map((coords, index) => ({
      id: `13.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 14,
    name: 'Lira',
    farms: getRandomCoordinates(2.25, 2.30, 32.88, 32.92, 20).map((coords, index) => ({
      id: `14.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 15,
    name: 'Lwengo',
    farms: getRandomCoordinates(-0.40, -0.35, 31.40, 31.45, 20).map((coords, index) => ({
      id: `15.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 16,
    name: 'Masaka',
    farms: getRandomCoordinates(-0.35, -0.25, 31.70, 31.75, 20).map((coords, index) => ({
      id: `16.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 17,
    name: 'Mbale',
    farms: getRandomCoordinates(1.05, 1.10, 34.15, 34.20, 20).map((coords, index) => ({
      id: `17.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 18,
    name: 'Moroto',
    farms: getRandomCoordinates(2.50, 2.55, 34.65, 34.70, 20).map((coords, index) => ({
      id: `18.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 19,
    name: 'Mukono',
    farms: getRandomCoordinates(0.28, 0.32, 32.75, 32.80, 20).map((coords, index) => ({
      id: `19.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 20,
    name: 'Rakai',
    farms: getRandomCoordinates(-0.70, -0.65, 31.40, 31.45, 20).map((coords, index) => ({
      id: `20.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 21,
    name: 'Sembabule',
    farms: getRandomCoordinates(-0.10, -0.05, 31.40, 31.45, 20).map((coords, index) => ({
      id: `21.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 22,
    name: 'Soroti',
    farms: getRandomCoordinates(1.70, 1.75, 33.60, 33.65, 20).map((coords, index) => ({
      id: `22.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  // Add all other districts following the same pattern
  {
    id: 23,
    name: 'Adjumani',
    farms: getRandomCoordinates(3.40, 3.45, 31.80, 31.85, 20).map((coords, index) => ({
      id: `23.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 24,
    name: 'Amolatar',
    farms: getRandomCoordinates(1.60, 1.65, 32.80, 32.85, 20).map((coords, index) => ({
      id: `24.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 25,
    name: 'Amuria',
    farms: getRandomCoordinates(2.00, 2.05, 33.70, 33.75, 20).map((coords, index) => ({
      id: `25.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  {
    id: 26,
    name: 'Amuru',
    farms: getRandomCoordinates(2.90, 2.95, 31.90, 31.95, 20).map((coords, index) => ({
      id: `26.${index + 1}`,
      position: coords,
      name: `Farm ${index + 1}`
    }))
  },
  // Continue with the remaining districts
  // ...
];

// Define your custom icon
const defaultIcon = new L.Icon({
  iconUrl: '/image/marker-icon.png',
  iconSize: [25, 41], // Adjust size as necessary
  iconAnchor: [12, 41], // Adjust anchor as necessary
  popupAnchor: [1, -34], // Adjust popup anchor as necessary
});

export function MapIntro() {
  return (
    <div className="p-8">
      <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-6 h-auto max-w-6xl">
        {/* Increase the height of the map container to 500px */}
        <MapContainer center={[0.3476, 32.5825]} zoom={7} scrollWheelZoom={false} className="w-full h-800 rounded-xl" style={{ height: "500px" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MarkerClusterGroup>
            {districts.map(district =>
              district.farms.map(farm => (
                <Marker key={farm.id} position={farm.position} icon={defaultIcon}>
                  <Popup>{`${district.name} - ${farm.name}`}</Popup>
                </Marker>
              ))
            )}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapIntro;
