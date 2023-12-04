import { TestBed } from '@angular/core/testing';

import { MoviesFavoritesService } from './movies-favorites.service';

describe('MoviesFavoritesService', () => {
  let service: MoviesFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
