import { Marker, Popup } from 'react-leaflet';
import { MarkerType } from '../../types/MarkerType';
import { Icon } from 'leaflet';
import markerIcon from '../../images/marker.svg';
import './MarkerComponent.css';

type Props = {
  marker: Omit<MarkerType, 'next'>,
  index: number,
  deleteMarker: (marker: Omit<MarkerType, 'next'>) => void,
  updateMarker: (marker: Omit<MarkerType, 'next'>) => void,
}

const customIcon = new Icon({
  iconUrl: markerIcon,
  iconSize: [38, 38],
});

export const MarkerComponent: React.FC<Props> = ({ marker, index, deleteMarker, updateMarker }) => {
  return (
    <Marker
      position={marker.location}
      icon={customIcon}
      draggable={true}
      eventHandlers={{
        dragend(e) {
          const locationObj = e.target.getLatLng();

          updateMarker({
            ...marker,
            location: [locationObj.lat, locationObj.lng],
          })
        }
      }}
    >
      <Popup>
        <div className="MarkerComponent__container">
          {`Quest ${index}`}
          <button
            className='MarkerComponent__delete-button'
            onClick={() => deleteMarker(marker)}
          >
            Delete
          </button>
        </div>
      </Popup>
    </Marker>
  );
}
