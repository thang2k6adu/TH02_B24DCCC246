import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../services/movie.api";
import type { MovieDetail } from "../types/movie.types";

export const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetail | null>(null);

  useEffect(() => {
    if (id) {
      getMovieDetail(id).then((res) => setMovie(res.data));
    }
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px" }}>
      <img src={movie.Poster} alt={movie.Title} width={250} />
      <h2>{movie.Title} ({movie.Year})</h2>
      <p><strong>Thể loại:</strong> {movie.Genre}</p>
      <p><strong>Thời lượng:</strong> {movie.Runtime}</p>
      <p><strong>Đạo diễn:</strong> {movie.Director}</p>
      <p><strong>Diễn viên:</strong> {movie.Actors}</p>
      <p><strong>Điểm IMDb:</strong> ⭐ {movie.imdbRating}</p>
      <p><strong>Tóm tắt:</strong> {movie.Plot}</p>
    </div>
  );
};
