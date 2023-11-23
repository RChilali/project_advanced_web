import {CaptureImageList} from "../../../atoms/movieInformation/capture/CaptureImageList.tsx";
import {useLoaderData} from "react-router-dom";
import {MovieDetails} from "../../../../dto/MovieDetails.ts";
import {MovieCredits} from "../../../../dto/MovieCredits.ts";
import {MovieImages} from "../../../../dto/MovieImages.ts";
import {CaptureImage} from "../../../atoms/movieInformation/capture/CaptureImage.tsx";
import {Text} from "../../../atoms/common/text/Text.tsx";
import {TextVariant} from "../../../../enum/TextVariant.ts";


export const MovieInformationImageHolder = () => {
  const data = useLoaderData() as {
    movieDetails: MovieDetails,
    movieCredits: MovieCredits,
    movieImages: MovieImages
  }
  const movieImages = data.movieImages;

  return (
      <>
        <Text textColor={"white"} variant={TextVariant.large} isItalic={false} isMediaActive={false}>Images</Text>
        <CaptureImageList>
          {movieImages.backdrops?.map(({file_path},index) => (
              <CaptureImage key={index} src={"https://image.tmdb.org/t/p/original/" + file_path} />
          ))}
        </CaptureImageList>
      </>
  );
};