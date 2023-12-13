import { Marker, Popup } from 'react-leaflet';
import { MarkerType } from '../../types/MarkerType';
import { Icon } from 'leaflet';
import markerIcon from '../../images/marker.svg';

type Props = {
  marker: MarkerType,
}

const customIcon = new Icon({
  iconUrl: markerIcon,
  iconSize: [38, 38],
});

export const MarkerComponent: React.FC<Props> = ({ marker }) => {
  return (
    <Marker position={marker.location} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
  );
}