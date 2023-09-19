import { Coordinates } from "@/hooks/context/BookingProvider";

export const calculateDistance = (coor1: Coordinates, coor2: Coordinates) => {
  const { longitude: lon1, latitude: lat1 } = coor1;
  const { longitude: lon2, latitude: lat2 } = coor2;

  const earthRadius = 6371; // Earth's radius in kilometers
  const lat1Radians = lat1 * (Math.PI / 180);
  const lat2Radians = lat2 * (Math.PI / 180);
  const dLat = lat2Radians - lat1Radians;
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1Radians) *
      Math.cos(lat2Radians) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * c;

  return distance;
};

export const calculateETA = (durationInSeconds: number) => {
  if (durationInSeconds <= 0) {
    return "0 mins";
  } else if (durationInSeconds < 60) {
    return durationInSeconds + " secs";
  } else {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);

    let etaValue = "";

    if (hours > 0) {
      etaValue += hours + " hour";
      if (hours > 1) {
        etaValue += "s";
      }
      etaValue += " ";
    }

    if (minutes > 0) {
      etaValue += minutes + " min";
      if (minutes > 1) {
        etaValue += "s";
      }
    }

    return etaValue;
  }
};

// // Example usage:
// const durationInSeconds = 3720; // 62 minutes
// const etaValue = calculateETA(durationInSeconds);
// console.log(etaValue); // Output: "1 hour 2 mins"
