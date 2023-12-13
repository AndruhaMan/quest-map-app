import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { MarkerComponent } from '../MarkerComponent';
import 'leaflet/dist/leaflet.css'
import './Map.css'
import { MarkerType } from '../../types/MarkerType';
import { useEffect } from 'react';

type Props = {
  markers: MarkerType[],
  setMarkers: (markers: MarkerType[]) => void,
}

export const Map: React.FC<Props> = ({ markers, setMarkers }) => {

  useEffect(() => {
    setMarkers([
      { location: [49.0139, 31.2858], timestamp: Date.now() },
    ])
  }, [setMarkers]);

  return (
    <MapContainer center={[49.0139, 31.2858]} zoom={6}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {markers.map(marker => (
          <MarkerComponent marker={marker} key={marker.timestamp} />
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}