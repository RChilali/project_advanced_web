import {MovieListPageLayout} from "../design/layouts/MovieListPageLayout.tsx";
import {useIsDarkTheme} from "../hooks/useIsDarkTheme.tsx";

function MovieList() {
    const isDarkTheme = useIsDarkTheme();

    return (
        <MovieListPageLayout isDarkTheme={isDarkTheme} />
    );
}

export default MovieList