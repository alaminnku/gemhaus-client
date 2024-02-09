'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';

type Props = {
  name: string;
  latitude: number;
  longitude: number;
};

const customIcon = icon({
  iconSize: [125, 125],
  iconUrl: '/vacation-rental/marker-icon.png',
});

export default function Map({ name, latitude, longitude }: Props) {
  return (
    <MapContainer
      zoom={12}
      scrollWheelZoom={false}
      center={[latitude, longitude]}
      style={{ height: '300px', width: '100%', borderRadius: '20px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <Marker position={[latitude, longitude]} icon={customIcon}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
}
