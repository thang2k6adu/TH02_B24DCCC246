import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CountryListPage } from '../features/countries/pages/CountryListPage'
import { CountryDetailPage } from '../features/countries/pages/CountryDetailPage'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CountryListPage />} />
      <Route path="/country/:name" element={<CountryDetailPage />} />
    </Routes>
  </BrowserRouter>
)
