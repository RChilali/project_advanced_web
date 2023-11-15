import {Link} from "react-router-dom";
import {MovieA} from "../components/MovieA.tsx";
import {MovieDiv} from "../components/Div.tsx";
import {Movie} from "../dto/Movie.ts";
import {MovieListLayout} from "../design/layouts/MovieListLayout.tsx";
import {HeaderLayout} from "../design/layouts/HeaderLayout.tsx";
import {MovieListPageLayout} from "../design/layouts/MovieListPageLayout.tsx";
import {Header} from "../design/molecules/Header.tsx";
import {SearchBar} from "../design/molecules/SearchBar.tsx";

function MovieList() {
    const movieList: Movie[] = [{id: 10, title: "test"}]  //todo replace with service call
    return (
        <MovieListPageLayout>
            <HeaderLayout>
                <Header title={"🎬🍿 Movie library"}/>
                <SearchBar placeholder={"🔎 Search for movie"} value={""}/>
            </HeaderLayout>

            <MovieListLayout>
                <Link to={`movie/${movieList[0].id}`}><MovieA><MovieDiv></MovieDiv></MovieA></Link>
            </MovieListLayout>
        </MovieListPageLayout>
    );
}

export default MovieList