import {useState} from 'react';
import {MovieListNowPlaying} from "./MovieListNowPlaying.tsx";
import {MovieListByName} from "./MovieListByName.tsx";

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
          <MovieListNowPlaying searchTerm={searchTerm} toggleFavorite={toggleFavorite}
                               favorites={favorites} isHover={isHover} setIsHover={setIsHover}/> :
          <MovieListByName searchTerm={searchTerm} toggleFavorite={toggleFavorite}
                           favorites={favorites} isHover={isHover} setIsHover={setIsHover}/>
  );
};