import {useLoaderData} from "react-router-dom";
import {MovieDetails} from "../../../../dto/MovieDetails.ts";
import {MovieCredits} from "../../../../dto/MovieCredits.ts";
import {MovieImages} from "../../../../dto/MovieImages.ts";
import {CreditsList} from "../../../atoms/movieInformation/credits/CreditsList.tsx";
import {MovieInformationCreditsHolder} from "./MovieInformationCreditsHolder.tsx";
import {TextVariant} from "../../../../enum/TextVariant.ts";
import {Text} from "../../../atoms/common/text/Text.tsx";


export const MovieInformationCreditsListHolder = () => {
  const data = useLoaderData() as {
    movieDetails: MovieDetails,
    movieCredits: MovieCredits,
    movieImages: MovieImages
  }
  const movieCredits = data.movieCredits;


  return (
      <>
        <Text textColor={"white"} variant={TextVariant.large} isItalic={false} isMediaActive={false}>Credits</Text>
        <CreditsList>
          {movieCredits.cast?.map(({id, name, character, profile_path}) => (
              <MovieInformationCreditsHolder name={name} character={character} profile_path={profile_path}
                                             key={id}
              />
          ))}
        </CreditsList>
      </>
  );
};