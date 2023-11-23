import {MovieListPageLayout} from "../components/layouts/movieList/MovieListPageLayout.tsx";
import {useIsDarkTheme} from "../hooks/useIsDarkTheme.tsx";

function MovieList() {
    const isDarkTheme = useIsDarkTheme();

    return (
        <MovieListPageLayout isDarkTheme={isDarkTheme} />
    );
}

export default MovieList