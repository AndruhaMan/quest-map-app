import MarkerClusterGroup from "react-leaflet-cluster";
import { MarkerComponent } from "../MarkerComponent";
import { MarkerType } from "../../types/MarkerType";
import { useEffect, useState } from "react";
import { addMarkerToTheEnd, convertLinkedListToArray, deleteMarker, updateMarker } from "../../helpers";
import { useMapEvent } from "react-leaflet";
import { writeToDB } from "../../firebase";

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
    const updatedMarkers = addMarkerToTheEnd(markers, newMarker);

    writeToDB(updatedMarkers);
    setMarkers(updatedMarkers);
  });

  const handleDeleteMarker = (marker: Omit<MarkerType, 'next'>) => {
    const updatedMarkers = deleteMarker(markers, marker);

    writeToDB(updatedMarkers);
    setMarkers(updatedMarkers);
  }

  const handleUpdateMarker = (marker: Omit<MarkerType, 'next'>) => {
    const updatedMarkers = updateMarker(markers, marker);

    writeToDB(updatedMarkers);
    setMarkers(updatedMarkers);
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
