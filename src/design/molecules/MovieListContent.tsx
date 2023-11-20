import {useFetchNowPlayingMovies} from "../../rules/useFetchNowPlayingMovies.tsx";
import {MovieList} from "../atoms/MovieList.tsx";
import {Link} from "react-router-dom";
import {PosterImage} from "../atoms/images/PosterImage.tsx";

export const MovieListContent = () => {

    const {isLoading, error, data: movies} = useFetchNowPlayingMovies();

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;


  return (
      <MovieList>
        {movies?.map(({poster_path, id}) => (
            <Link key={id} to={"/movie/" + id}>
              <PosterImage key={id} src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + poster_path} alt="alt"></PosterImage>
            </Link>
        ))}
      </MovieList>
  );
};

