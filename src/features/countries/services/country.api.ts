import httpClient from "../../../services/httpClient";
import type { Country } from "../types/country.types";

export const getAllCountries = async (): Promise<Country[]> => {
  const res = await httpClient.get("/all?fields=name,flags,population,region");
  return res.data;
};
