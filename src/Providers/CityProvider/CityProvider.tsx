import React, { ReactNode, createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

interface ICityContextType {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  cityLongLat: {
    long: number;
    lat: number;
  };
  isLoading: boolean;
  isError: boolean;
}

const generateLongLatUrl = (city: string) =>
  `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;

const defaultLongLat = {
  lat: 52.52437,
  long: 13.41053,
} as const;

export const CityContext = createContext<ICityContextType>({
  city: "Berlin",
  setCity: () => {},
  cityLongLat: defaultLongLat,
  isLoading: false,
  isError: false,
});

export const CityProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState("Berlin");
  const { data, isLoading, isError } = useQuery(
    "fetchCityLongLat",
    async () => {
      const response = await fetch(generateLongLatUrl(city));
      const { result } = await response.json();
      const { longitude: long, latitude: lat } = result[0];
      return { long, lat };
    }
  );
  // console.log({ city });
  // useEffect(() => {}, [city]);

  return (
    <CityContext.Provider
      value={{
        city,
        setCity,
        cityLongLat: data ?? defaultLongLat,
        isError,
        isLoading,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};
