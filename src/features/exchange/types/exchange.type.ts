export interface ExchangeResponse {
  result: string;
  base_code: string;
  time_last_update_utc: string;
  rates: Record<string, number>; // ví dụ: { "USD": 1, "VND": 26242.58, ... }
}
