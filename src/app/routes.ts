import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './movies/movie-details.component';
import { MovieListComponent } from './movies/movie-list.component';
// import { Error404Component } from './errors/404.component'

export const appRoutes: Routes = [
  // { path: 'movies/new', component: CreateMovieComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:key', component: MovieDetailsComponent },
  // { path: '404', component: Error404Component },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
];
