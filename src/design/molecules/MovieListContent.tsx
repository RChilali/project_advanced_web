import {useFetchNowPlayingMovies} from "../../rules/useFetchNowPlayingMovies.tsx";
import {MovieList} from "../atoms/MovieList.tsx";
import {Link} from "react-router-dom";
import {PosterImage} from "../atoms/images/PosterImage.tsx";

interface MovieListContentProps {
  searchTerm: string;
}

export const MovieListContent = ({searchTerm}: MovieListContentProps) => {

  const {isLoading, error, data: movies} = useFetchNowPlayingMovies();

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  const filteredMovies = movies?.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
      <MovieList>
        {filteredMovies?.map(({poster_path, id}) => (
            <Link key={id} to={"/movie/" + id}>
              <PosterImage key={id} src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + poster_path} alt="alt"></PosterImage>
            </Link>
        ))}
      </MovieList>
  );
};

