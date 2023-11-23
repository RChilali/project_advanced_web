import {MovieList} from "../../../atoms/movieList/MovieList.tsx";
import {Size} from "../../../../enum/Size.ts";
import {StarHolder} from "./StarHolder.tsx";
import {PosterImageHolder} from "../../common/holders/PosterImageHolder.tsx";
import {FetchNowPlayingMovies} from "../../../../rules/FetchNowPlayingMovies.ts";
import {PosterLinkHolder} from "./PosterLinkHolder.tsx";
import {Loader} from "../../../atoms/movieList/loaders/Loader.tsx";

interface MovieListNowPlayingProps {
    searchTerm: string;
    toggleFavorite: (id: number) => void;
    favorites: string[];
    isHover: boolean;
    setIsHover: (isHover: boolean) => void;
}

export const MovieListNowPlayingHolder = ({
                                              searchTerm,
                                              toggleFavorite,
                                              favorites,
                                              isHover,
                                              setIsHover
                                          }: MovieListNowPlayingProps) => {

    const {isLoading, error, data: movies} = FetchNowPlayingMovies();


    if (error) return <div>Request Failed</div>;
    if (isLoading) return <Loader/>;

    const filteredMovies = movies?.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const sortedMovies = [...(filteredMovies || [])].sort((a, b) => +favorites.includes(b.id.toString()) - +favorites.includes(a.id.toString()));

    return (
        <MovieList>
            {sortedMovies?.map(({poster_path, id}) => (
                <PosterLinkHolder key={id} to={"/movie/" + id} disabled={isHover}>
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