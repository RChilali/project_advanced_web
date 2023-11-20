import {useLoaderData} from "react-router-dom";
import {MovieDetails} from "../../dto/MovieDetails.ts";
import {MovieCredits} from "../../dto/MovieCredits.ts";
import {MovieImages} from "../../dto/MovieImages.ts";
import {CreditsList} from "../atoms/CreditsList.tsx";
import {MovieInformationCredits} from "./MovieInformationCredits.tsx";


export const MovieInformationCreditsHolder = () => {
  const data = useLoaderData() as {
    movieDetails: MovieDetails,
    movieCredits: MovieCredits,
    movieImages: MovieImages
  }
  const movieCredits = data.movieCredits;


  return (
      <>
        <p>Credits</p>
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