export type MarkerType = {
  location: [number, number],
  timestamp: number,
  next: MarkerType | null,
}