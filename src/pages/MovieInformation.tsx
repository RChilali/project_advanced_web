import {useIsDarkTheme} from "../hooks/useIsDarkTheme.tsx";
import {useParams} from "react-router-dom";
import {MovieInformationPageLayout} from "../design/layouts/MovieInformationPageLayout.tsx";


function MovieInformation() {
    const isDarkTheme = useIsDarkTheme();
    const {movieId} = useParams()

    return (
        <MovieInformationPageLayout isDarkTheme={isDarkTheme} movieId={movieId}/>
    );
}

export default MovieInformation