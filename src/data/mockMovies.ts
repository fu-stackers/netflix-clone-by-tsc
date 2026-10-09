import type { Movie } from "../types/movie";

export const makeMovies = (count: number, offset: number): Movie[] =>
  Array.from({ length: count }, (_, i) => ({
    id: offset + i,
    title: `Movie ${offset + i}`,
    overview: "Test",
    poster_path: null,
    backdrop_path: `https://picsum.photos/seed/${offset + i}/500/280`,
    vote_average: 7 + (i % 3) * 0.5,
    release_date: "2024-01-01",
  }));