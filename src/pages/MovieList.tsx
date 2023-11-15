import {MovieListPageLayout} from "../design/layouts/MovieListPageLayout.tsx";
import {MovieListHeader} from "../design/molecules/MovieListHeader.tsx";
import {MovieListContent} from "../design/molecules/MovieListContent.tsx";

function MovieList() {
    return (
        <MovieListPageLayout>
            <MovieListHeader title={"🎬🍿 Movie library"} placeholder={"🔎 Search for movie"}/>
            <MovieListContent/>
        </MovieListPageLayout>
    );
}

export default MovieList