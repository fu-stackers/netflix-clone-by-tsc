import { useFetch } from "../../hooks/useFetch";
import type { Movie } from "../../types/movie";
import ErrorMessage from "../ui/ErrorMessage";
import Spinner from "../ui/Spinner";
import Row from "./Row";

interface CategoryRowProps {
  title: string;
  fetcher: () => Promise<Movie[]>;
}

function CategoryRow({ title, fetcher }: CategoryRowProps) {
  const { data, isLoading, error } = useFetch(fetcher);

  if (isLoading) {
    return (
      <section>
        <h2 className="px-4 text-lg font-semibold md:px-12 md:text-2xl">{title}</h2>
        <Spinner />
      </section>
    );
  }

  if (error) return <ErrorMessage message={error} />;

  return <Row title={title} movies={data ?? []} />;
}

export default CategoryRow;