import { useEffect, useState } from 'react'
import { getAllCountries } from '../services/country.api'
import type { Country } from '../types/country.types'

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllCountries().then(data => {
      setCountries(data)
      setLoading(false)
    })
  }, [])

  return { countries, loading }
}
