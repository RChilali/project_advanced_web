import {useState} from 'react';
import {MovieListNowPlayingHolder} from "./holders/MovieListNowPlayingHolder.tsx";
import {MovieListByNameHolder} from "./holders/MovieListByNameHolder.tsx";

interface MovieListContentProps {
  searchTerm: string;
}

export const MovieListContent = ({searchTerm}: MovieListContentProps) => {

  const [favorites, setFavorites] = useState<string[]>([]);
  const [isHover, setIsHover] = useState<boolean>(false);


  const toggleFavorite = (id: number) => {
    const idStr = id.toString();
    setFavorites(favs => favs.includes(idStr) ? favs.filter(favId => favId !== idStr) : [...favs, idStr]);
  };


  return (
      searchTerm === "" ?
          <MovieListNowPlayingHolder searchTerm={searchTerm} toggleFavorite={toggleFavorite}
                                     favorites={favorites} isHover={isHover} setIsHover={setIsHover}/> :
          <MovieListByNameHolder searchTerm={searchTerm} toggleFavorite={toggleFavorite}
                                 favorites={favorites} isHover={isHover} setIsHover={setIsHover}/>
  );
};