import { useSelectedCity } from "@/src/hooks/useSelectedCity";
import { useState } from "react";

const cities = [
  "Berlin",
  "Paris",
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
];

export const CitySelector = () => {
  const { city, setCity } = useSelectedCity();

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log({ event: event.target.value });
    setCity(event.target.value);
  };

  return (
    <div className="flex items-center justify-center">
      <label htmlFor="city" className="mr-2 font-bold">
        Select a city:
      </label>
      <select
        id="city"
        className="px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={city}
        onChange={handleCityChange}
      >
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};
