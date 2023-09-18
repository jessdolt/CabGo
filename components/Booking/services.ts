import { Coordinates } from "@/hooks/context/BookingProvider";
import axios from "axios";

const session_token = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";

export const fetchAddress = async (query: string) => {
  try {
    const { data } = await axios.get(
      `https://api.mapbox.com/search/searchbox/v1/suggest?q=${query}&limit=6&language=en&country=PH&session_token=${session_token}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
    );

    return data.suggestions;
  } catch (e: any) {
    console.log(e);
    throw e.message;
  }
};

export const retrieveAddress = async (query: string) => {
  try {
    const { data } = await axios.get(
      `https://api.mapbox.com/search/searchbox/v1/retrieve/${query}?session_token=${session_token}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
    );

    return data;
  } catch (e: any) {
    console.log(e);
    throw e.message;
  }
};

export const retrieveDirections = async (coordinates: Coordinates[]) => {
  const profile = "driving";

  const origin = `${coordinates[0].longitude},${coordinates[0].latitude}`;
  const destination = `${coordinates[1].longitude},${coordinates[1].latitude}`;

  try {
    const { data } = await axios.get(
      `https://api.mapbox.com/directions/v5/mapbox/${profile}/${origin};${destination}?`,
      {
        params: {
          access_token: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
          overview: "full",
          geometries: "geojson",
        },
      }
    );

    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
