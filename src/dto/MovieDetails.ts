export interface MovieDetails {
  id: number;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  genres: Genre[];
  release_date: string;
}


export interface Genre {
  id: number;
  name: string;
}