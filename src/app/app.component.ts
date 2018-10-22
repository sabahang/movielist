import { Component } from '@angular/core';
import { movies } from './movies/shared/movie.mock-data';

@Component({
  selector: 'app-movies',
  template:
    `
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
    `
})

export class MoviesAppComponent {
  movies = movies;
}
