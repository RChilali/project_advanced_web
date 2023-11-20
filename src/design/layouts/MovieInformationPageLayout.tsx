import {BackgroundImage} from "../atoms/images/BackgroundImage.tsx";
import {MovieInformationPage} from "../atoms/pages/MovieInformationPage.tsx";
import {MovieInformationPageContent} from "../molecules/MovieInformationPageContent.tsx";
import {LoaderFunctionArgs, useLoaderData} from "react-router-dom";
import {fetchMovieDetails} from "../../rules/fetchMovieDetails.tsx";
import {MovieDetails} from "../../dto/MovieDetails.ts";


export const loader = async ({params}: LoaderFunctionArgs<{ movieId: string }>): Promise<MovieDetails> => {
    return await fetchMovieDetails(Number(params.movieId));
}

export const MovieInformationPageLayout = () => {
    const movieDetails = useLoaderData() as MovieDetails;

    const imgSrc = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movieDetails.backdrop_path;

    return (
        <MovieInformationPage>
            <BackgroundImage imgSrc={imgSrc}></BackgroundImage>
            <MovieInformationPageContent/>
        </MovieInformationPage>
    );
};