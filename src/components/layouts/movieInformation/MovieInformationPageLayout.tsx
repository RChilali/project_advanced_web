import {BackgroundImage} from "../../atoms/movieInformation/BackgroundImage.tsx";
import {MovieInformationPage} from "../../atoms/movieInformation/pages/MovieInformationPage.tsx";
import {MovieInformationPageContent} from "../../molecules/movieInformation/MovieInformationPageContent.tsx";
import {useLoaderData} from "react-router-dom";
import {BackButtonHolder} from "../../molecules/movieInformation/holders/BackButtonHolder.tsx";
import {MovieDetails} from "../../../dto/MovieDetails.ts";
import {MovieImages} from "../../../dto/MovieImages.ts";
import {MovieCredits} from "../../../dto/MovieCredits.ts";

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