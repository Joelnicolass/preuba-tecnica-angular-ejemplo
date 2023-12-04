import { Routes } from '@angular/router';
import { MoviesViewComponent } from './features/movies/views/movies-view/movies-view.component';
import { MovieComponent } from './features/movies/views/movie/movie.component';

export const routes: Routes = [
  {
    path: '',
    component: MoviesViewComponent,
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];
