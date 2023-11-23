import {Text} from "../../../atoms/common/text/Text.tsx";
import {TextVariant} from "../../../../enum/TextVariant.ts";
import {MovieInformation} from "../../../atoms/movieInformation/MovieInformation.tsx";
import {MovieDetails} from "../../../../dto/MovieDetails.ts";

interface MovieInformationHolderProps {
  movieDetails: MovieDetails;
}

export const MovieInformationHolder = ({movieDetails}: MovieInformationHolderProps) => {

  return (
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
  );
};