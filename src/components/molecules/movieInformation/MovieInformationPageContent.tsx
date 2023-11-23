import {CaptureImage} from "../../atoms/movieInformation/capture/CaptureImage.tsx";
import {useLoaderData} from "react-router-dom";
import {MovieDetails} from "../../../dto/MovieDetails.ts";
import {MovieCredits} from "../../../dto/MovieCredits.ts";
import {MovieImages} from "../../../dto/MovieImages.ts";
import {MovieInformationCreditsHolder} from "./holders/MovieInformationCreditsHolder.tsx";
import {MovieInformationImageHolder} from "./holders/MovieInformationImageHolder.tsx";
import {MovieInformationHeaderHolder} from "./holders/MovieInformationHeaderHolder.tsx";


export const MovieInformationPageContent = () => {
  const data = useLoaderData() as {
    movieDetails: MovieDetails,
    movieCredits: MovieCredits,
    movieImages: MovieImages
  }
  const movieDetails = data.movieDetails;

  return (
      <div>
        <MovieInformationHeaderHolder movieDetails={movieDetails}/>
        <MovieInformationCreditsHolder/>
        <MovieInformationImageHolder/>
        <CaptureImage/>
      </div>
  );
};