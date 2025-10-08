import { useEffect, useState } from "react";
import { getExchangeRates } from "../services/exchange.api";
import type { ExchangeResponse } from "../types/exchange.type";

const ExchangePage = () => {
  const [data, setData] = useState<ExchangeResponse | null>(null);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [targetCurrency, setTargetCurrency] = useState("VND");

  useEffect(() => {
    getExchangeRates(baseCurrency).then(res => setData(res.data));
  }, [baseCurrency]);

  if (!data) return <p>Loading...</p>;

  const rate = data.rates[targetCurrency];
  const result = amount * rate;

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", textAlign: "center" }}>
      <h2>💱 Quy đổi tỉ giá tiền tệ</h2>
      <p>Cập nhật lần cuối: {data.time_last_update_utc}</p>

      <div style={{ marginTop: 20 }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <div>
          <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
            {Object.keys(data.rates).map((code) => (
              <option key={code} value={code}>{code}</option>
            ))}
          </select>

          <span style={{ margin: "0 10px" }}>➡️</span>

          <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
            {Object.keys(data.rates).map((code) => (
              <option key={code} value={code}>{code}</option>
            ))}
          </select>
        </div>

        <h3 style={{ marginTop: 20 }}>
          {amount} {baseCurrency} = {result.toLocaleString()} {targetCurrency}
        </h3>
      </div>
    </div>
  );
};

export default ExchangePage;
