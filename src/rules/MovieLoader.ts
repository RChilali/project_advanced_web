import {LoaderFunctionArgs} from "react-router-dom";
import {FetchMovieDetails} from "./FetchMovieDetails.ts";
import {FetchMovieCredits} from "./FetchMovieCredits.ts";
import {FetchMovieImages} from "./FetchMovieImages.ts";
import {MovieDetails} from "../dto/MovieDetails.ts";
import {MovieCredits} from "../dto/MovieCredits.ts";
import {MovieImages} from "../dto/MovieImages.ts";

export const loader = async ({params}: LoaderFunctionArgs<{
  movieId: string
}>): Promise<{movieDetails: MovieDetails, movieCredits: MovieCredits, movieImages: MovieImages}> => {
  const [movieDetails, movieCredits, movieImages] = await Promise.all([
    FetchMovieDetails(Number(params.movieId)),
    FetchMovieCredits(Number(params.movieId)),
    FetchMovieImages(Number(params.movieId))
  ]);
  return {movieDetails, movieCredits, movieImages};
}