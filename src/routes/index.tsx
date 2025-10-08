import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountryListPage } from "../features/countries/pages/CountryListPage";
import { CountryDetailPage } from "../features/countries/pages/CountryDetailPage";
import ExchangePage from "../features/exchange/pages/ExchangePage";
import { MovieListPage } from "../features/movies/pages/MovieListPage";
import { MovieDetailPage } from "../features/movies/pages/MovieDetailPage";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CountryListPage />} />
      <Route path="/country/:name" element={<CountryDetailPage />} />
      <Route path="/exchange" element={<ExchangePage />} />
      <Route path="/movies" element={<MovieListPage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
    </Routes>
  </BrowserRouter>
);
