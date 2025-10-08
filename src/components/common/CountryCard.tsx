import type { Country } from '../../features/countries/types/country.types'
import { Link } from 'react-router-dom'

export const CountryCard = ({ country }: { country: Country }) => (
  <Link to={`/country/${country.name.common}`} className="card">
    <img src={country.flags.png} alt={country.name.common} width={200} />
    <h3>{country.name.common}</h3>
    <p>Population: {country.population.toLocaleString()}</p>
    <p>Region: {country.region}</p>
  </Link>
)
