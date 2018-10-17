import { Component } from '@angular/core';
import { movies } from './movies/shared/movie.mock-data';

@Component({
  selector: 'app-movies',
  template:
    `<app-nav-bar></app-nav-bar>
    <app-movie-list></app-movie-list>`
})

export class MoviesAppComponent {
  movies = movies;
}
