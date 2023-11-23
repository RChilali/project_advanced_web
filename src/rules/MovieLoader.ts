import {QueryClient} from 'react-query';
import {LoaderFunctionArgs} from 'react-router-dom';
import {MovieDetails} from '../dto/MovieDetails';
import {MovieCredits} from '../dto/MovieCredits';
import {MovieImages} from '../dto/MovieImages';

export const movieLoader = async (
    {params}: LoaderFunctionArgs<{ movieId: string }>,
    queryClient: QueryClient
): Promise<{ movieDetails: MovieDetails; movieCredits: MovieCredits; movieImages: MovieImages }> => {
  const movieId = Number(params.movieId);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjllMzQ4OGJhYWIxNGQxMWNlNGNiOTI5MDcwMzk4ZCIsInN1YiI6IjY1NGE0ZGY0MzkxYjljMDBjNjE0MzNkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K9VfV56BM3_996nbP8M0QOHL_7u_erd4nVloNsC8me0',
    },
  };

  const movieDetails = await queryClient.fetchQuery(['movieDetails', movieId], () =>
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en`, options).then((res) => res.json())
  );

  const movieCredits = await queryClient.fetchQuery(['movieCredits', movieId], () =>
      fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en`, options).then((res) => res.json())
  );

  const movieImages = await queryClient.fetchQuery(['movieImages', movieId], () =>
      fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?include_image_language=null`, options).then((res) => res.json())
  );

  return {movieDetails, movieCredits, movieImages};
};