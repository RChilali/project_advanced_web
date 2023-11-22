import {CaptureImage} from "../atoms/images/CaptureImage.tsx";
import {InformationHeader} from "../atoms/headers/InformationHeader.tsx";
import {MovieInformation} from "../atoms/MovieInformation.tsx";
import {useLoaderData} from "react-router-dom";
import {MovieDetails} from "../../dto/MovieDetails.ts";
import {MovieCredits} from "../../dto/MovieCredits.ts";
import {MovieImages} from "../../dto/MovieImages.ts";
import {MovieInformationCreditsHolder} from "./MovieInformationCreditsHolder.tsx";
import {MovieInformationImageHolder} from "./MovieInformationImageHolder.tsx";
import {Text} from "../atoms/Text.tsx";
import {TextVariant} from "../../enum/TextVariant.ts";
import {Size} from "../../enum/Size.ts";
import {PosterImageHolder} from "./PosterImageHolder.tsx";


export const MovieInformationPageContent = () => {
  const data = useLoaderData() as {
    movieDetails: MovieDetails,
    movieCredits: MovieCredits,
    movieImages: MovieImages
  }
  const movieDetails = data.movieDetails;

  return (
      <div>
        <InformationHeader>
          <PosterImageHolder
              size={Size.large} isHoverable={false}
              src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movieDetails.poster_path}
          />
          <MovieInformation>
            <Text textColor={"white"} variant={TextVariant.extraLarge} isItalic={false}
                  isMediaActive={false}>{movieDetails.original_title}</Text>
            <Text textColor={"white"} variant={TextVariant.medium} isItalic={false}
                  isMediaActive={false}>{movieDetails.overview}</Text>
            <Text textColor={"white"} variant={TextVariant.medium} isItalic={true}
                  isMediaActive={false}>{movieDetails.genres.map(genre => genre.name).join(', ')}</Text>
            <Text textColor={"white"} variant={TextVariant.medium} isItalic={true}
                  isMediaActive={false}>{movieDetails.release_date}</Text>
          </MovieInformation>
        </InformationHeader>
        <MovieInformationCreditsHolder/>
        <MovieInformationImageHolder/>
        <CaptureImage/>
      </div>
  );
};