import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "../movie/MovieCard";
import type { Movie } from "../../types/movie";

interface RowProps {
  title: string;
  movies: Movie[];
}

function Row({ title, movies }: RowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const element = rowRef.current;
    if (!element) return;

    const amount = element.clientWidth * 0.8;
    element.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (movies.length === 0) return null;

  return (
    <section className="group/row relative -mb-28">
      <h2 className="px-4 text-lg font-semibold text-white md:px-12 md:text-2xl">
        {title}
      </h2>

      {/* left arrow */}
      <button
        type="button"
        aria-label={`Scroll ${title} left`}
        onClick={() => scroll("left")}
        className="absolute left-0 top-14 z-30 hidden h-28 w-10 items-center justify-center bg-black/60 text-white opacity-0 transition-opacity duration-300 hover:bg-black/80 focus-visible:opacity-100 group-hover/row:opacity-100 md:flex md:h-32 md:w-12"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      {/* the scrolling list */}
      <div
        ref={rowRef}
        className="flex gap-2 overflow-x-auto px-4 pb-40 pt-6 [scrollbar-width:none] md:px-12 [&::-webkit-scrollbar]:hidden"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* right arrow */}
      <button
        type="button"
        aria-label={`Scroll ${title} right`}
        onClick={() => scroll("right")}
        className="absolute right-0 top-14 z-30 hidden h-28 w-10 items-center justify-center bg-black/60 text-white opacity-0 transition-opacity duration-300 hover:bg-black/80 focus-visible:opacity-100 group-hover/row:opacity-100 md:flex md:h-32 md:w-12"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </section>
  );
}

export default Row;