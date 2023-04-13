import { useQuery } from "react-query";

export const useCityLongLat = (longlatUrl: string) => {
  const { data, isLoading, isError } = useQuery(
    ["fetchCityLongLat", longlatUrl],
    async () => {
      const response = await fetch(longlatUrl);
      const { result } = await response.json();
      const { longitude: long, latitude: lat } = result[0];
      return { long, lat };
    }
  );
  return { cityLongLat: data, isLoading, isError };
};
