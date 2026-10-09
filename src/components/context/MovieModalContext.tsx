import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import MovieModal from "../components/movie/MovieModal";
import type { Movie } from "../types/movie";

interface MovieModalContextValue {
  openMovie: (movie: Movie) => void;
  closeMovie: () => void;
}

const MovieModalContext = createContext<MovieModalContextValue | null>(null);

interface MovieModalProviderProps {
  children: ReactNode;
}

export function MovieModalProvider({ children }: MovieModalProviderProps) {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const openMovie = useCallback((movie: Movie) => setSelectedMovie(movie), []);
  const closeMovie = useCallback(() => setSelectedMovie(null), []);

  const value = useMemo(
    () => ({ openMovie, closeMovie }),
    [openMovie, closeMovie]
  );

  return (
    <MovieModalContext.Provider value={value}>
      {children}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeMovie} />
      )}
    </MovieModalContext.Provider>
  );
}

export function useMovieModal(): MovieModalContextValue {
  const context = useContext(MovieModalContext);
  if (!context) {
    throw new Error("useMovieModal must be used inside MovieModalProvider");
  }
  return context;
}