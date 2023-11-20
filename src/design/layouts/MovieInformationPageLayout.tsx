import {BackgroundImage} from "../atoms/images/BackgroundImage.tsx";
import {MovieInformationPage} from "../atoms/pages/MovieInformationPage.tsx";
import {MovieInformationPageContent} from "../molecules/MovieInformationPageContent.tsx";
import {json, LoaderFunctionArgs, useLoaderData} from "react-router-dom";
import {fetchMovieDetails} from "../../rules/fetchMovieDetails.tsx";
import {MovieDetails} from "../../dto/MovieDetails.ts";
import {fetchMovieCredits} from "../../rules/fetchMovieCredits.tsx";
import {fetchMovieImages} from "../../rules/fetchMovieImages.tsx";
import {MovieCredits} from "../../dto/MovieCredits.ts";
import {MovieImages} from "../../dto/MovieImages.ts";
import {BackButtonHolder} from "../molecules/BackButtonHolder.tsx";


export const loader = async ({params}: LoaderFunctionArgs<{
  movieId: string
}>): Promise<Response> => {
  const [movieDetails, movieCredits, movieImages] = await Promise.all([
    fetchMovieDetails(Number(params.movieId)),
    fetchMovieCredits(Number(params.movieId)),
    fetchMovieImages(Number(params.movieId))
  ]);
  return json({movieDetails, movieCredits, movieImages});
}

export const MovieInformationPageLayout = () => {
  const data = useLoaderData() as {
    movieDetails: MovieDetails,
    movieCredits: MovieCredits,
    movieImages: MovieImages
  }
  const movieDetails = data.movieDetails;
  const imgSrc = "https://www.themoviedb.org/t/p/original/" + movieDetails.backdrop_path;

  return (
      <MovieInformationPage>
        <BackButtonHolder/>
        <BackgroundImage imgSrc={imgSrc}></BackgroundImage>
        <MovieInformationPageContent/>
      </MovieInformationPage>
  );
};