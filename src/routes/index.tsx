import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CountryListPage } from '../features/countries/pages/CountryListPage'
import { CountryDetailPage } from '../features/countries/pages/CountryDetailPage'
import ExchangePage from '../features/exchange/pages/ExchangePage'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CountryListPage />} />
      <Route path="/country/:name" element={<CountryDetailPage />} />
      <Route path="/exchange" element={<ExchangePage />} />
    </Routes>
  </BrowserRouter>
)
