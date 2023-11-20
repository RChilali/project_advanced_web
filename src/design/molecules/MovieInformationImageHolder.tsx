import {CaptureImageList} from "../atoms/CaptureImageList.tsx";
import {useLoaderData} from "react-router-dom";
import {MovieDetails} from "../../dto/MovieDetails.ts";
import {MovieCredits} from "../../dto/MovieCredits.ts";
import {MovieImages} from "../../dto/MovieImages.ts";
import {CaptureImage} from "../atoms/images/CaptureImage.tsx";


export const MovieInformationImageHolder = () => {
  const data = useLoaderData() as {
    movieDetails: MovieDetails,
    movieCredits: MovieCredits,
    movieImages: MovieImages
  }
  const movieImages = data.movieImages;

  return (
      <>
        <p>Images</p>
        <CaptureImageList>
          {movieImages.backdrops?.map(({file_path}) => (
              <CaptureImage src={"https://image.tmdb.org/t/p/original/" + file_path} />
          ))}
        </CaptureImageList>
      </>
  );
};