import { MarkerType } from "./types/MarkerType";

export const convertLinkedListToArray = (marker: MarkerType | null) => {
  if (!marker) {
    return [];
  }

  const array = [];
  let currentMarker: MarkerType | null = marker;

  while (true) {
    array.push({
      location: currentMarker.location,
      timestamp: currentMarker.timestamp,
    });

    if (!currentMarker.next) {
      break;
    }
    currentMarker = currentMarker.next;
  }

  return array;
}

export const addMarkerToTheEnd = (firstMarker: MarkerType | null, marker: MarkerType) => {
  if (!firstMarker) {
    return marker;
  }

  const firstMarkerCopy = { ...firstMarker };
  let currentMarker = firstMarkerCopy;

  while (currentMarker.next) {
    currentMarker = currentMarker.next;
  }
  currentMarker.next = marker;

  return firstMarkerCopy;
}

export const deleteMarker = (firstMarker: MarkerType | null, marker: Omit<MarkerType, 'next'>) => {
  if (!firstMarker) {
    return null;
  }

  if (firstMarker.timestamp === marker.timestamp) {
    return firstMarker.next;
  }

  const firstMarkerCopy: MarkerType = { ...firstMarker };
  let previousMarker = firstMarkerCopy;
  let currentMarker = firstMarkerCopy.next;

  while (true) {
    if (!currentMarker) {
      break;
    }

    if (currentMarker.timestamp === marker.timestamp) {
      previousMarker.next = currentMarker.next;
      break;
    }
    previousMarker = currentMarker;
    currentMarker = currentMarker.next;
  }

  return firstMarkerCopy;
}

export const updateMarker = (firstMarker: MarkerType | null, marker: Omit<MarkerType, 'next'>) => {
  if (!firstMarker) {
    return null;
  }

  const firstMarkerCopy: MarkerType = { ...firstMarker };
  let currentMarker: MarkerType | null = firstMarkerCopy;

  while (true) {
    if (!currentMarker) {
      break;
    }

    if (currentMarker.timestamp === marker.timestamp) {
      currentMarker.location = marker.location;
      break;
    }
    currentMarker = currentMarker.next;
  }

  return firstMarkerCopy;
}
