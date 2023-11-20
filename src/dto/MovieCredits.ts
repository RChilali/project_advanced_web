export interface MovieCredits{
  id: number;
  cast: Cast[];
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}