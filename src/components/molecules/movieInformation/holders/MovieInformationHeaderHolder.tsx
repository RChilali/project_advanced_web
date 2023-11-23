import {MovieDetails} from "../../../../dto/MovieDetails.ts";
import {InformationHeader} from "../../../atoms/movieInformation/headers/InformationHeader.tsx";
import {PosterImageHolder} from "../../common/holders/PosterImageHolder.tsx";
import {Size} from "../../../../enum/Size.ts";
import {MovieInformationHolder} from "./MovieInformationHolder.tsx";

interface MovieInformationHolderProps {
  movieDetails: MovieDetails;
}

export const MovieInformationHeaderHolder = ({movieDetails}: MovieInformationHolderProps) => {

  return (
      <InformationHeader>
        <PosterImageHolder
            size={Size.large} isHoverable={false}
            src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movieDetails.poster_path}
        />
        <MovieInformationHolder movieDetails={movieDetails}/>
      </InformationHeader>
  );
};