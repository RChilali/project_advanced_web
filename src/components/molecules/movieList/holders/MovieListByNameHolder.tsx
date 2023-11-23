import {MovieList} from "../../../atoms/movieList/MovieList.tsx";
import {Size} from "../../../../enum/Size.ts";
import {StarHolder} from "./StarHolder.tsx";
import {PosterImageHolder} from "../../common/holders/PosterImageHolder.tsx";
import {UseFetchMovieByName} from "../../../../rules/UseFetchMovieByName.ts";
import {PosterLinkHolder} from "./PosterLinkHolder.tsx";

interface MovieListNowPlayingProps {
  searchTerm: string;
  toggleFavorite: (id: number) => void;
  favorites: string[];
  isHover: boolean;
  setIsHover: (isHover: boolean) => void;
}

export const MovieListByNameHolder = ({
                                  searchTerm,
                                  toggleFavorite,
                                  favorites,
                                  isHover,
                                  setIsHover
                                }: MovieListNowPlayingProps) => {

  const {isLoading, error, data: movies} = UseFetchMovieByName(searchTerm);


  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
      <MovieList>
        {movies?.map(({poster_path, id}) => (
            poster_path !== null && <PosterLinkHolder key={id} to={"/movie/" + id} disabled={isHover}>
              <PosterImageHolder
                  size={Size.small}
                  isHoverable={true}
                  key={id}
                  src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + poster_path}
              >
                <StarHolder isFavorite={favorites.includes(id.toString())}
                            onClick={() => toggleFavorite(id)}
                            setIsHover={setIsHover}
                />
              </PosterImageHolder>
            </PosterLinkHolder>
        ))}
      </MovieList>
  );
};