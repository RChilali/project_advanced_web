import {PosterImage} from "../atoms/images/PosterImage.tsx";
import {CaptureImage} from "../atoms/images/CaptureImage.tsx";
import {InformationHeader} from "../atoms/headers/InformationHeader.tsx";
import {MovieInformation} from "../atoms/MovieInformation.tsx";
import {useLoaderData} from "react-router-dom";
import {MovieDetails} from "../../dto/MovieDetails.ts";


export const MovieInformationPageContent = () => {
  const movieDetails = useLoaderData() as MovieDetails;
  return (
      <div>
        <InformationHeader>
          <PosterImage
              src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movieDetails.poster_path}
              alt={movieDetails.original_title}>
          </PosterImage>
          <MovieInformation>
            <p>{movieDetails.original_title}</p>
            <p>{movieDetails.overview}</p>
            <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
            <p>{movieDetails.release_date}</p>
          </MovieInformation>
        </InformationHeader>
        <p>Credits</p>
        <p>Images</p>
        <CaptureImage/>
      </div>
  );
};