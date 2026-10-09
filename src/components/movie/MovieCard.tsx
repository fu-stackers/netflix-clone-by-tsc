import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Play, X } from "lucide-react";
import { useFetch } from "../../hooks/useFetch";
import { getMovieDetails } from "../../services/tmdb";
import type { Movie, MovieVideo } from "../../types/movie";
import { getImageUrl } from "../../utils/image";
import Button from "../ui/Button";
import { useMovieModal } from "../context/MovieModalContext"; 

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

interface IconButtonProps {
  label: string;
  filled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

function IconButton({ label, filled = false, onClick, children }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(event) => {
        event.stopPropagation();
        onClick?.();
      }}
      className={`flex h-8 w-8 ...same classes as before...`}
    >
      {children}
    </button>
  );
}
function pickTrailer(videos: MovieVideo[]): MovieVideo | undefined {
  const youtube = videos.filter((video) => video.site === "YouTube");
  return (
    youtube.find((video) => video.type === "Trailer" && video.official) ??
    youtube.find((video) => video.type === "Trailer") ??
    youtube[0]
  );
}

function formatRuntime(minutes: number | null): string | null {
  if (!minutes) return null;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return hours > 0 ? `${hours}h ${rest}m` : `${rest}m`;
}

function MovieModal({ movie, onClose }: MovieModalProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const fetchDetails = useCallback(() => getMovieDetails(movie.id), [movie.id]);
  const { data: details, isLoading, error } = useFetch(fetchDetails);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  const trailer = details ? pickTrailer(details.videos.results) : undefined;
  const runtime = details ? formatRuntime(details.runtime) : null;
  const imageUrl = getImageUrl(movie.backdrop_path ?? movie.poster_path, "w780");
  const year = movie.release_date.slice(0, 4);

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/70 p-4 md:py-10"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-modal-title"
        className="relative w-full max-w-3xl overflow-hidden rounded-lg bg-zinc-900 shadow-2xl"
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/80 text-white transition-colors hover:bg-zinc-700"
        >
          <X className="h-5 w-5" />
        </button>

        {/* media area: trailer or image */}
        <div className="relative aspect-video w-full bg-black">
          {isPlaying && trailer ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${trailer.key}?autoplay=1`}
              title={`${movie.title} trailer`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt=""
                  className="h-full w-full object-cover"
                />
              )}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent"
              />
              {trailer && (
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                  <Button
                    label="Play trailer"
                    icon={<Play className="h-5 w-5 fill-black" />}
                    onClick={() => setIsPlaying(true)}
                  />
                </div>
              )}
            </>
          )}
        </div>

        {/* details */}
        <div className="grid gap-6 p-6 md:grid-cols-3 md:p-10">
          <div className="md:col-span-2">
            <h2
              id="movie-modal-title"
              className="text-2xl font-bold text-white md:text-3xl"
            >
              {movie.title}
            </h2>
            <p className="mt-2 flex flex-wrap items-center gap-x-3 text-sm text-gray-400">
              <span className="font-semibold text-green-500">
                ★ {movie.vote_average.toFixed(1)}
              </span>
              <span>{year}</span>
              {runtime && <span>{runtime}</span>}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-200 md:text-base">
              {movie.overview || "No description available."}
            </p>
          </div>

          <div className="text-sm text-gray-300">
            {isLoading && <p className="text-gray-500">Loading details…</p>}
            {error && <p className="text-red-300">Couldn't load more details.</p>}
            {details && details.genres.length > 0 && (
              <p>
                <span className="text-gray-500">Genres: </span>
                {details.genres.map((genre) => genre.name).join(", ")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;