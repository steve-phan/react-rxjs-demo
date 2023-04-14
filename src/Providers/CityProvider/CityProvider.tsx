import React, { ReactNode, createContext, useMemo, useState } from "react";

import { useCityLongLat } from "@/src/hooks/useCityLongLat";
import { BehaviorSubject } from "rxjs";

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

  const citySubject$ = new BehaviorSubject("Berlin");
  const activeCity = citySubject$.getValue();
  console.log({ activeCity });
  const longlatUrl = useMemo(() => {
    return generateLongLatUrl(city);
  }, [city]);
  const { cityLongLat, isLoading, isError } = useCityLongLat(longlatUrl);

  return (
    <CityContext.Provider
      value={{
        city,
        setCity,
        cityLongLat: cityLongLat ?? defaultLongLat,
        isError,
        isLoading,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};
