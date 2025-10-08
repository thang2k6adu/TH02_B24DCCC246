import { useState } from "react";
import { searchMovies } from "../services/movie.api";
import type { Movie } from "../types/movie.types";
import MovieCard from "../components/MovieCard";

export const MovieListPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await searchMovies(query);
      setMovies(res.data.Search || []);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>🎥 Tìm kiếm phim</h2>
      <input
        type="text"
        value={query}
        placeholder="Nhập tên phim..."
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "60%", marginRight: "10px" }}
      />
      <button onClick={handleSearch}>Tìm</button>

      {loading && <p>Đang tải...</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};
