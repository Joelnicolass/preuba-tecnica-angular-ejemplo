import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from '../../services/movies-api/movies-api.service';
import { Movie } from '../../../../core/interfaces/movie.interface';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  private _moviesApiService = inject(MoviesApiService);
  id: string = this._activatedRoute.snapshot.params['id'];
  movie: Movie | null = null;

  ngOnInit(): void {
    this._moviesApiService.getMovieById(this.id).subscribe((movie) => {
      this.movie = movie;
    });
  }

  get image(): string {
    return `../../../../../assets/${this.movie?.poster}`;
  }
}
