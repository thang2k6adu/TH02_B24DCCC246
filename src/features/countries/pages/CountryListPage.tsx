import { useState } from "react";
import { useCountries } from "../hooks/useCountries";
import { SearchBar } from "../../../components/common/SearchBar";
import { CountryCard } from "../../../components/common/CountryCard";

export const CountryListPage = () => {
  const { countries, loading } = useCountries();
  const [search, setSearch] = useState("");

  if (loading) return <p>Loading...</p>;

  const filtered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Country Lookup</h1>
      <SearchBar value={search} onChange={setSearch} />

      <div className="grid grid-cols-4 gap-4 mt-4 max-w-[1200px]">
        {filtered.map((c) => (
          <CountryCard key={c.name.common} country={c} />
        ))}
      </div>
    </div>
  );
};
