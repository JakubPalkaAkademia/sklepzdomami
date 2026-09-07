function toDms(decimal: number, isLat: boolean): string {
  const absolute = Math.abs(decimal);
  const degrees = Math.floor(absolute);
  const minutesFloat = (absolute - degrees) * 60;
  const minutes = Math.floor(minutesFloat);
  const seconds = ((minutesFloat - minutes) * 60).toFixed(1);
  const direction = isLat ? (decimal >= 0 ? "N" : "S") : decimal >= 0 ? "E" : "W";
  return `${degrees}°${minutes.toString().padStart(2, "0")}'${seconds.padStart(4, "0")}"${direction}`;
}

export function formatCoordinates(latitude: number, longitude: number): string {
  return `${toDms(latitude, true)} ${toDms(longitude, false)}`;
}
