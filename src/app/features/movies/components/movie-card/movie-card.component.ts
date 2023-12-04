import { Component, Input, OnInit, inject } from '@angular/core';
import { Movie } from '../../../../core/interfaces/movie.interface';
import { MoviesFavoritesService } from '../../services/mvoies-favorites/movies-favorites.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent implements OnInit {
  private _moviesFavoritesService = inject(MoviesFavoritesService);

  @Input() movie: Movie | null = null;

  isFavorite: boolean = false;

  ngOnInit(): void {
    this.isFavorite = this._moviesFavoritesService.isFavorite(this.movie!.id);
  }

  addToFavorites(): void {
    this.isFavorite
      ? this._moviesFavoritesService.removeFromFavorites(this.movie!.id)
      : this._moviesFavoritesService.addToFavorites(this.movie!.id);
  }
}
