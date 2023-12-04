export interface Movie {
  id: string;
  title: string;
  description: string;
  rating: number;
  duration: string;
  genre: string[];
  releaseDate: Date;
  trailerUrl: string;
  poster: string;
}
