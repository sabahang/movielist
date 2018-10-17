import { Component, OnInit } from '@angular/core';
import { movies } from './shared/movie.mock-data';
import { IMovie } from './shared/movie.model';

@Component({
  selector: 'app-movie-list',
  template:
  `<div class="container">
    <h1>List of Movies</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let movie of movies" class="col-md-4">
        <app-movie-thumbnail [movie]="movie"></app-movie-thumbnail>
      </div>
    </div>
  </div>`,
  styles: []
})
export class MovieListComponent implements OnInit {
  movies: IMovie[];

  constructor() { }

  ngOnInit() {
    this.movies = movies;
  }

}
