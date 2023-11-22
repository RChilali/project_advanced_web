import {useState} from 'react';
import {MovieList} from "../atoms/MovieList.tsx";
import {PosterImageHolder} from "./PosterImageHolder.tsx";
import {Size} from "../../enum/Size.ts";
import {FetchNowPlayingMovies} from "../../rules/FetchNowPlayingMovies.tsx";
import {StarHolder} from "./StarHolder.tsx";
import {PosterLink} from "./PosterLink.tsx";

interface MovieListContentProps {
  searchTerm: string;
}

export const MovieListContent = ({searchTerm}: MovieListContentProps) => {

  const {isLoading, error, data: movies} = FetchNowPlayingMovies();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isHover, setIsHover] = useState<boolean>(false);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  const filteredMovies = movies?.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const sortedMovies = [...(filteredMovies || [])].sort((a, b) => +favorites.includes(b.id.toString()) - +favorites.includes(a.id.toString()));
  const toggleFavorite = (id: number) => {
    const idStr = id.toString();
    setFavorites(favs => favs.includes(idStr) ? favs.filter(favId => favId !== idStr) : [...favs, idStr]);
  };

  if (sortedMovies.length === 0) {
    return <div>No movies found</div>;
  }

  return (
      <MovieList>
        {sortedMovies?.map(({poster_path, id}) => (
            <PosterLink key={id} to={"/movie/" + id} disabled={isHover}>
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
            </PosterLink>
        ))}
      </MovieList>
  );
};