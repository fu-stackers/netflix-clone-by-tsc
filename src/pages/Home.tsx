import Banner from "../components/Home/Banner";
import CategoryRow from "../components/Home/CategoryRow";
import Row from "../components/Home/Row";
import ErrorMessage from "../components/ui/ErrorMessage";
import Spinner from "../components/ui/Spinner";
import { useFetch } from "../hooks/useFetch";
import {
  getMovieDetails,
  // getMoviesByGenre,
  getTopRated,
  getTrending,
} from "../services/tmdb";
import { getImageUrl } from "../utils/image";

const getActionMovies = () => getMovieDetails(28);
const getComedyMovies = () => getMovieDetails(35);

function Home() {
  const { data: trending, isLoading, error } = useFetch(getTrending);

  if (isLoading) {
    return (
      <div className="pt-40">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-28">
        <ErrorMessage message={error} />
      </div>
    );
  }

  const featured = trending?.find((movie) => movie.backdrop_path);
  const bannerImage = getImageUrl(featured?.backdrop_path ?? null, "original");

  return (
    <>
      {featured && bannerImage && (
        <Banner
          title={featured.title}
          overview={featured.overview}
          image={bannerImage}
        />
      )}
      <Row title="Trending Now" movies={trending ?? []} />
      <CategoryRow title="Top Rated" fetcher={getTopRated} />
      <CategoryRow title="Action Movies" fetcher={getActionMovies} />
      <CategoryRow title="Comedies" fetcher={getComedyMovies} />
    </>
  );
}

export default Home;
