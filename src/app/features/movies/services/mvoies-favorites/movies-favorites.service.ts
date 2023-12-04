import { Injectable, inject } from '@angular/core';
import { LocalStorageService } from '../../../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesFavoritesService {
  private _favoritesKey = 'moviesFavorites';
  private _localStorageService = inject(LocalStorageService);

  // TODO hacer un observable para los favs

  addToFavorites(movieId: string): void {
    const favorites: string[] | null = this._localStorageService.getItem(
      this._favoritesKey
    );

    if (!favorites) {
      this._localStorageService.setItem(this._favoritesKey, [movieId]);
    } else {
      const newFavorites = [...favorites, movieId];
      this._localStorageService.setItem(this._favoritesKey, newFavorites);
    }
  }

  removeFromFavorites(movieId: string): void {
    const favorites: string[] = this._localStorageService.getItem(
      this._favoritesKey
    );

    if (!favorites) {
      return;
    }

    const newFavorites = favorites.filter((id) => id !== movieId);
    this._localStorageService.setItem(this._favoritesKey, newFavorites);
  }

  getFavorites(): string[] {
    return this._localStorageService.getItem(this._favoritesKey);
  }

  isFavorite(movieId: string): boolean {
    const favorites: string[] = this._localStorageService.getItem(
      this._favoritesKey
    );

    if (!favorites) {
      return false;
    }

    return favorites.includes(movieId);
  }
}
