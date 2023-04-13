import React, { useContext } from "react";
import { CityContext } from "../Providers/CityProvider/CityProvider";

export const useSelectedCity = () => {
  return useContext(CityContext);
};
