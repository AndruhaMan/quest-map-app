import MarkerClusterGroup from "react-leaflet-cluster";
import { MarkerComponent } from "../MarkerComponent";
import { MarkerType } from "../../types/MarkerType";
import { useEffect, useState } from "react";
import { addMarkerToTheEnd, convertLinkedListToArray, deleteMarkerByTimestamp, updateMarkerByTimestamp } from "../../helpers";
import { useMapEvent } from "react-leaflet";

type Props = {
  markers: MarkerType | null,
  setMarkers: (markers: MarkerType | null) => void,
}

export const Markers: React.FC<Props> = ({ markers, setMarkers }) => {
  const [markersArray, setMarkersArray] = useState<Omit<MarkerType, 'next'>[]>([]);

  useEffect(() => {
    setMarkersArray(convertLinkedListToArray(markers))
  }, [markers]);

  useMapEvent('click', (e) => {
    const newMarker: MarkerType = {
      location: [e.latlng.lat, e.latlng.lng],
      timestamp: Date.now(),
      next: null,
    }

    setMarkers(addMarkerToTheEnd(markers, newMarker));
  });

  const handleDeleteMarker = (marker: Omit<MarkerType, 'next'>) => {
    setMarkers(deleteMarkerByTimestamp(markers, marker.timestamp));
  }

  const handleUpdateMarker = (marker: Omit<MarkerType, 'next'>) => {
    setMarkers(updateMarkerByTimestamp(markers, marker));
  }

  return (
    <MarkerClusterGroup>
      {markersArray.length &&
        markersArray.map(marker => (
          <MarkerComponent
            marker={marker}
            index={markersArray.indexOf(marker) + 1}
            deleteMarker={handleDeleteMarker}
            updateMarker={handleUpdateMarker}
            key={marker.timestamp}
          />
        ))}
    </MarkerClusterGroup>
  );
}