import {useLoaderData} from "react-router-dom";
import {MovieDetails} from "../../dto/MovieDetails.ts";
import {MovieCredits} from "../../dto/MovieCredits.ts";
import {MovieImages} from "../../dto/MovieImages.ts";
import {CreditsList} from "../atoms/CreditsList.tsx";
import {MovieInformationCredits} from "./MovieInformationCredits.tsx";
import {TextVariant} from "../../enum/TextVariant.ts";
import {Text} from "../atoms/Text.tsx";


export const MovieInformationCreditsHolder = () => {
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
              <MovieInformationCredits name={name} character={character} profile_path={profile_path}
                                       key={id}
              />
          ))}
        </CreditsList>
      </>
  );
};