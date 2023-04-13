import React from "react";

import { CitySelector } from "../components/CitySelector/CitySelector";

const Weather = () => {
  return (
    <div className="container min-h-screen m-auto p-2 border-solid border border-indigo-600 flex flex-col">
      <h1 className="full-w text-center py-4 text-4xl">Demo weather App</h1>
      <CitySelector />
    </div>
  );
};

export default Weather;
