import { Injectable, inject } from '@angular/core';
import { LocalStorageService } from '../../../../core/services/local-storage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesFavoritesService {
  private _favoritesKey = 'moviesFavorites';
  private _localStorageService = inject(LocalStorageService);

  private _favorites = new BehaviorSubject<string[] | null>(null);
  public readonly favorites$ = this._favorites.asObservable();

  constructor() {
    this.updateState();
  }

  updateState(): void {
    const favorites = this._localStorageService.getItem(this._favoritesKey);
    if (!favorites) return;

    this._favorites.next(favorites);
  }

  addToFavorites(movieId: string): void {
    const favorites = this._favorites.value;

    if (!favorites) {
      this._localStorageService.setItem(this._favoritesKey, [movieId]);
    } else {
      const newFavorites = [...favorites, movieId];
      this._localStorageService.setItem(this._favoritesKey, newFavorites);
    }

    this.updateState();
  }

  removeFromFavorites(movieId: string): void {
    const favorites = this._favorites.value;
    if (!favorites) return;

    const newFavorites = favorites.filter((id) => id !== movieId);
    this._localStorageService.setItem(this._favoritesKey, newFavorites);

    this.updateState();
  }
}
