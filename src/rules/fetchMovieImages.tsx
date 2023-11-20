import {MovieImages} from "../dto/MovieImages.ts";

export const fetchMovieImages = async (movieId: number): Promise<MovieImages> => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjllMzQ4OGJhYWIxNGQxMWNlNGNiOTI5MDcwMzk4ZCIsInN1YiI6IjY1NGE0ZGY0MzkxYjljMDBjNjE0MzNkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K9VfV56BM3_996nbP8M0QOHL_7u_erd4nVloNsC8me0',
    },
  };

  const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/images?include_image_language=null`,
      options,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}