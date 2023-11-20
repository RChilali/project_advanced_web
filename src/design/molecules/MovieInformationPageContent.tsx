import {MoviePoster} from "../atoms/MoviePoster.tsx";
import {MovieCapture} from "../atoms/MovieCapture.tsx";
import {MovieHeadInformation} from "../atoms/MovieHeadInformation.tsx";
import {MovieHeadText} from "../atoms/MovieHeadText.tsx";
import { useLoaderData} from "react-router-dom";
import {MovieDetails} from "../../dto/MovieDetails.ts";


export const MovieInformationPageContent = () => {
  const movieDetails = useLoaderData() as MovieDetails;
  return (
      <div>
        <MovieHeadInformation>
          <MoviePoster
              src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movieDetails.poster_path}
              alt={movieDetails.original_title}>
          </MoviePoster>
          <MovieHeadText>
            <p>{movieDetails.original_title}</p>
            <p>{movieDetails.overview}</p>
            <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
            <p>{movieDetails.release_date}</p>
          </MovieHeadText>
        </MovieHeadInformation>
        <p>Credits</p>
        <p>Images</p>
        <MovieCapture/>
      </div>
  );
};