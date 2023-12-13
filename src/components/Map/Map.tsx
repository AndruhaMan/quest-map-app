import { MapContainer, TileLayer } from 'react-leaflet';
import { MarkerType } from '../../types/MarkerType';
import { Markers } from '../Markers';
import 'leaflet/dist/leaflet.css'
import './Map.css'

type Props = {
  markers: MarkerType | null,
  setMarkers: (markers: MarkerType | null) => void,
}

export const Map: React.FC<Props> = ({ markers, setMarkers }) => {
  return (
    <MapContainer center={[49.0139, 31.2858]} zoom={6} doubleClickZoom={false} zoomControl={false} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Markers markers={markers} setMarkers={setMarkers} />
    </MapContainer>
  );
}
