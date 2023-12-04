import { Component, OnInit, inject } from '@angular/core';
import { MoviesApiService } from '../../services/movies-api/movies-api.service';
import { Movie } from '../../../../core/interfaces/movie.interface';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-movies-view',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movies-view.component.html',
  styleUrl: './movies-view.component.scss',
})
export class MoviesViewComponent implements OnInit {
  moviesApi = inject(MoviesApiService);
  movies: Movie[] = [];

  ngOnInit(): void {
    this.moviesApi.getMovies().subscribe((movies) => (this.movies = movies));
  }

  sortByName(): void {
    this.movies.sort((a, b) => a.title.localeCompare(b.title));
  }

  sortByDate(): void {
    this.movies.sort(
      (a, b) => a.releaseDate.getTime() - b.releaseDate.getTime()
    );
  }

  sortByRating(): void {
    this.movies.sort((a, b) => b.rating - a.rating);
  }
}
