import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import httpClient from "../../../services/httpClient";
import type { Country } from "../types/country.types";

export const CountryDetailPage = () => {
  const { name } = useParams<{ name: string }>(); // 👈 typing cho useParams
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!name) return;

    const fetchCountry = async () => {
      try {
        setLoading(true);
        const res = await httpClient.get<Country[]>(`/name/${name}?fullText=true`);
        setCountry(res.data[0]);
      } catch (err) {
        setError("Không thể tải dữ liệu quốc gia.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!country) return <p>Không tìm thấy quốc gia.</p>;

  const languageList = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const currencyList = country.currencies
    ? Object.values(country.currencies)
        .map((c) => `${c.name} (${c.symbol})`)
        .join(", ")
    : "N/A";

  return (
    <div style={{ padding: "1.5rem" }}>
      <img
        src={country.flags.svg}
        alt={country.flags.alt || country.name.common}
        width={250}
        style={{ borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
      />

      <h2 style={{ marginTop: "1rem" }}>{country.name.common}</h2>
      <p><strong>Tên chính thức:</strong> {country.name.official}</p>
      <p><strong>Vùng:</strong> {country.region}</p>
      <p><strong>Vùng con:</strong> {country.subregion || "N/A"}</p>
      <p><strong>Thủ đô:</strong> {country.capital?.join(", ") || "N/A"}</p>
      <p><strong>Dân số:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Diện tích:</strong> {country.area?.toLocaleString()} km²</p>
      <p><strong>Ngôn ngữ:</strong> {languageList}</p>
      <p><strong>Tiền tệ:</strong> {currencyList}</p>
    </div>
  );
};
