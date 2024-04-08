"use client";

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// Define your districts with nested farm locations
const districts = [
  {
    id: 1,
    name: 'Kampala',
    farms: [
      { id: 1.1, position: [0.3476, 32.5825], name: 'Farm 1' },
      { id: 1.2, position: [0.3106, 32.5811], name: 'Farm 2' },
      { id: 1.3, position: [0.3489, 32.5772], name: 'Farm 3' },
      { id: 1.4, position: [0.3554, 32.5836], name: 'Farm 4' },
      { id: 1.5, position: [0.3381, 32.5769], name: 'Farm 5' },
      { id: 1.6, position: [0.3278, 32.5812], name: 'Farm 6' },
      { id: 1.7, position: [0.3225, 32.5743], name: 'Farm 7' },
      { id: 1.8, position: [0.3167, 32.5902], name: 'Farm 8' },
      { id: 1.9, position: [0.3302, 32.5798], name: 'Farm 9' },
      { id: 1.10, position: [0.3254, 32.5687], name: 'Farm 10' },
      // Add 10 more farms here
    ],
  },
  {
    id: 2,
    name: 'Jinja',
    farms: [
      { id: 2.1, position: [0.5635, 33.4822], name: 'Farm 1' },
      { id: 2.2, position: [0.5678, 33.4865], name: 'Farm 2' },
      { id: 2.3, position: [0.5601, 33.4803], name: 'Farm 3' },
      { id: 2.4, position: [0.5756, 33.4889], name: 'Farm 4' },
      { id: 2.5, position: [0.5692, 33.4836], name: 'Farm 5' },
      { id: 2.6, position: [0.5738, 33.4752], name: 'Farm 6' },
      { id: 2.7, position: [0.5653, 33.4789], name: 'Farm 7' },
      { id: 2.8, position: [0.5589, 33.4861], name: 'Farm 8' },
      { id: 2.9, position: [0.5702, 33.4793], name: 'Farm 9' },
      { id: 2.10, position: [0.5743, 33.4905], name: 'Farm 10' },
      // Add 10 more farms here
    ],
  },
  {
    id: 3,
    name: 'Entebbe',
    farms: [
      { id: 3.1, position: [0.2992, 32.5222], name: 'Farm 1' },
      { id: 3.2, position: [0.3035, 32.5265], name: 'Farm 2' },
      { id: 3.3, position: [0.2965, 32.5198], name: 'Farm 3' },
      { id: 3.4, position: [0.3087, 32.5301], name: 'Farm 4' },
      { id: 3.5, position: [0.3052, 32.5246], name: 'Farm 5' },
      { id: 3.6, position: [0.3018, 32.5179], name: 'Farm 6' },
      { id: 3.7, position: [0.2983, 32.5295], name: 'Farm 7' },
      { id: 3.8, position: [0.3027, 32.5183], name: 'Farm 8' },
      { id: 3.9, position: [0.2998, 32.5312], name: 'Farm 9' },
      { id: 3.10, position: [0.3065, 32.5229], name: 'Farm 10' },
      // Add 10 more farms here
    ],
  },
  // Add two more districts
  {
    id: 4,
    name: 'Mbarara',
    farms: [
      { id: 4.1, position: [0.6072, 30.6465], name: 'Farm 1' },
      { id: 4.2, position: [0.6098, 30.6498], name: 'Farm 2' },
      { id: 4.3, position: [0.6045, 30.6511], name: 'Farm 3' },
      { id: 4.4, position: [0.6112, 30.6457], name: 'Farm 4' },
      { id: 4.5, position: [0.6059, 30.6524], name: 'Farm 5' },
      { id: 4.6, position: [0.6093, 30.6482], name: 'Farm 6' },
      { id: 4.7, position: [0.6067, 30.6556], name: 'Farm 7' },
      { id: 4.8, position: [0.6081, 30.6543], name: 'Farm 8' },
      { id: 4.9, position: [0.6105, 30.6479], name: 'Farm 9' },
      { id: 4.10, position: [0.6038, 30.6502], name: 'Farm 10' },
      { id: 4.11, position: [0.6061, 30.6551], name: 'Farm 11' },
      { id: 4.12, position: [0.6124, 30.6443], name: 'Farm 12' },
      { id: 4.13, position: [0.6057, 30.6519], name: 'Farm 13' },
      { id: 4.14, position: [0.6082, 30.6488], name: 'Farm 14' },
      { id: 4.15, position: [0.6119, 30.6466], name: 'Farm 15' },
      // Add 15 farms here
    ],
  },
  {
    id: 5,
    name: 'Gulu',
    farms: [
      { id: 5.1, position: [2.7734, 32.3044], name: 'Farm 1' },
      { id: 5.2, position: [2.7756, 32.3067], name: 'Farm 2' },
      { id: 5.3, position: [2.7789, 32.3023], name: 'Farm 3' },
      { id: 5.4, position: [2.7745, 32.3088], name: 'Farm 4' },
      { id: 5.5, position: [2.7701, 32.3032], name: 'Farm 5' },
      { id: 5.6, position: [2.7762, 32.3075], name: 'Farm 6' },
      { id: 5.7, position: [2.7798, 32.3019], name: 'Farm 7' },
      { id: 5.8, position: [2.7714, 32.3063], name: 'Farm 8' },
      { id: 5.9, position: [2.7751, 32.3048], name: 'Farm 9' },
      { id: 5.10, position: [2.7783, 32.3029], name: 'Farm 10' },
      { id: 5.11, position: [2.7727, 32.3051], name: 'Farm 11' },
      { id: 5.12, position: [2.7771, 32.3037], name: 'Farm 12' },
      { id: 5.13, position: [2.7738, 32.3062], name: 'Farm 13' },
      { id: 5.14, position: [2.7705, 32.3018], name: 'Farm 14' },
      { id: 5.15, position: [2.7769, 32.3083], name: 'Farm 15' },
      // Add 15 farms here
    ],
  },
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
          {districts.map(district =>
            district.farms.map(farm => (
              <Marker key={farm.id} position={farm.position} icon={defaultIcon}>
                <Popup>{`${district.name} - ${farm.name}`}</Popup>
              </Marker>
            ))
          )}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapIntro;
