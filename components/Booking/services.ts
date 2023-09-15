import axios from "axios";

export const fetchAddress = async (query: string) => {
  try {
    const { data } = await axios.get(
      `https://api.mapbox.com/search/searchbox/v1/suggest?q=${query}&limit=6&language=en&country=US&session_token=9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
    );

    return data.suggestions;
  } catch (e: any) {
    console.log(e);
    throw e.response.message;
  }
};
