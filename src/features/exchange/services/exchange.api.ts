import httpClient from "../../../services/httpClient";
import type { ExchangeResponse } from "../types/exchange.type";

export const getExchangeRates = (baseCurrency: string) => {
  return httpClient.get<ExchangeResponse>(`https://open.er-api.com/v6/latest/${baseCurrency}`);
};
