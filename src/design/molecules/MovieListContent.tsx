import movies from "../../../public/movies.json"
import {PropsWithChildren} from "react";
import {MovieListLayout} from "../layouts/MovieListLayout.tsx";
import {MoviePoster} from "../atoms/MoviePoster.tsx";

interface MovieListLayoutHolderProps {
}

export const MovieListContent = ({}: PropsWithChildren<MovieListLayoutHolderProps>) => {
    return (
        <MovieListLayout>
            {movies && movies.results.map(({poster_path}) => (
                <MoviePoster src={poster_path} alt="alt"></MoviePoster>
            ))}
        </MovieListLayout>
    );
};