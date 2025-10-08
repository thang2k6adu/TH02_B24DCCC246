import { useState } from 'react'
import { useCountries } from '../hooks/useCountries'
import { SearchBar } from '../../../components/common/SearchBar'
import { CountryCard } from '../../../components/common/CountryCard'

export const CountryListPage = () => {
  const { countries, loading } = useCountries()
  const [search, setSearch] = useState('')

  if (loading) return <p>Loading...</p>

  const filtered = countries.filter(c =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>Country Lookup</h1>
      <SearchBar value={search} onChange={setSearch} />
      <div className="grid">
        {filtered.map(c => (
          <CountryCard key={c.name.common} country={c} />
        ))}
      </div>
    </div>
  )
}
