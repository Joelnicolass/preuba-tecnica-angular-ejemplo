import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Movie } from '../../../../core/interfaces/movie.interface';
import { MoviesFavoritesService } from '../../services/mvoies-favorites/movies-favorites.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent implements OnInit, OnDestroy {
  private _moviesFavoritesService = inject(MoviesFavoritesService);

  @Input() movie: Movie | null = null;
  isFavorite: boolean = false;
  favoritesSub: Subscription | null = null;

  ngOnInit(): void {
    this.favoritesSub = this._moviesFavoritesService.favorites$.subscribe(
      (favorites) => {
        if (!favorites) return;
        this.isFavorite = favorites.includes(this.movie!.id);
      }
    );
  }

  ngOnDestroy(): void {
    this.favoritesSub?.unsubscribe();
  }

  addToFavorites(event: MouseEvent): void {
    event.stopPropagation();

    this.isFavorite
      ? this._moviesFavoritesService.removeFromFavorites(this.movie!.id)
      : this._moviesFavoritesService.addToFavorites(this.movie!.id);
  }
}
