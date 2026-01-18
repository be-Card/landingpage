export function distanceKm(a, b) {
  const earthRadiusKm = 6371.0;
  const rad = (deg) => (deg * Math.PI) / 180.0;
  const dLat = rad(b.latitude - a.latitude);
  const dLon = rad(b.longitude - a.longitude);
  const lat1 = rad(a.latitude);
  const lat2 = rad(b.latitude);
  const h =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
  return earthRadiusKm * c;
}

export function formatDistanceLabel(km) {
  if (!Number.isFinite(km)) return "";
  if (km < 1) return `${Math.max(0.1, Math.round(km * 10) / 10).toFixed(1)} km`;
  return `${Math.round(km * 10) / 10} km`;
}

