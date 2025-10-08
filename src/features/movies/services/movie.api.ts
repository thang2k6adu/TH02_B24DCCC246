import httpClient from "../../../services/httpClient";
import type { MovieSearchResponse, MovieDetail } from "../types/movie.types";

const API_KEY = "thewdb";

export const searchMovies = (query: string) => {
  return httpClient.get<MovieSearchResponse>(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
};

export const getMovieDetail = (id: string) => {
  return httpClient.get<MovieDetail>(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
};
