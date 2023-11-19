import {useFetchNowPlayingMovies} from "../../rules/useFetchNowPlayingMovies.tsx";
import {MovieListLayout} from "../layouts/MovieListLayout.tsx";
import {MoviePoster} from "../atoms/MoviePoster.tsx";

export const MovieListContent = () => {

    const {isLoading, error, data: movies} = useFetchNowPlayingMovies();

    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div>Loading...</div>;


    return (
        <MovieListLayout>
            {movies?.map(({poster_path}) => (
                <MoviePoster src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + poster_path} alt="alt"></MoviePoster>
            ))}
        </MovieListLayout>
    );
};

