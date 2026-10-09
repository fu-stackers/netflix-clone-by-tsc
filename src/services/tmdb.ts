import type { Movie, MovieDetails, MovieListResponse } from "../types/movie";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

async function request<T>(
  path: string,
  params: Record<string, string> = {}
): Promise<T> {
  if (!API_KEY) {
    throw new Error("Missing VITE_TMDB_API_KEY. Check your .env file.");
  }

  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set("api_key", API_KEY);
  url.searchParams.set("language", "en-US");

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`TMDB request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getTrending(): Promise<Movie[]> {
  const data = await request<MovieListResponse>("/trending/movie/week");
  return data.results;
}

export async function getTopRated(): Promise<Movie[]> {
  const data = await request<MovieListResponse>("/movie/top_rated");
  return data.results;
}

export function getMovieDetails(id: number): Promise<MovieDetails> {
  return request<MovieDetails>(`/movie/${id}`, {
    append_to_response: "videos",
  });
}
