import { Link } from "react-router-dom";
import type { Movie } from "../types/movie.types";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => (
  <div className="movie-card">
    <Link to={`/movie/${movie.imdbID}`}>
      <img src={movie.Poster} alt={movie.Title} width={200} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </Link>
  </div>
);

export default MovieCard;
