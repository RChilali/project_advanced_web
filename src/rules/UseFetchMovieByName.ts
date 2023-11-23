import {Movie} from "../dto/Movie.ts";
import {useQuery} from "react-query";

export const  UseFetchMovieByName = (movieName:string) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjllMzQ4OGJhYWIxNGQxMWNlNGNiOTI5MDcwMzk4ZCIsInN1YiI6IjY1NGE0ZGY0MzkxYjljMDBjNjE0MzNkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K9VfV56BM3_996nbP8M0QOHL_7u_erd4nVloNsC8me0',
    },
  };

  const getMovieByName = async ():Promise<Movie[]> => {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=true&page=1`,
        options,
    );
    const
        {
          results
        } = await response.json();
    return results;
  }

  return useQuery<Movie[]>('MovieByName'+movieName, getMovieByName);
}


