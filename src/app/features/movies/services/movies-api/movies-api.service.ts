import { Injectable } from '@angular/core';
import { Movie } from '../../../../core/interfaces/movie.interface';
import movies from '../../../../../assets/data.json';
import { Observable, map, of } from 'rxjs';

interface MoviesRepository {
  getMovies(): Observable<Movie[]>;
}

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService implements MoviesRepository {
  constructor() {}

  public getMovies(): Observable<Movie[]> {
    return of(movies).pipe(map((movies) => this._moviesAdapter(movies)));
  }

  public getMovieById(id: string): Observable<Movie> {
    const movie = movies.find((movie) => movie.id === id);

    return of(this._movieAdapter(movie));
  }

  private _moviesAdapter = (movies: any[]): Movie[] => {
    return movies.map((movie) => this._movieAdapter(movie));
  };

  private _movieAdapter = (movie: any): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.description,
      rating: movie.rating,
      duration: movie.duration,
      genre: movie.genre,
      releaseDate: new Date(movie.releaseDate),
      trailerUrl: movie.trailerUrl,
      poster: movie.poster,
    };
  };
}
