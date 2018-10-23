import { Component, OnInit } from '@angular/core';
import { IMovie } from './shared/movie.model';
import { MovieService } from './shared/movieservice.service';

@Component({
  selector: 'app-movie-list',
  template:
  `<div class="container-fluid">
    <h1 class="my-3 mt-5">List of Movies</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let movie of movies" class="col-lg-4">
        <app-movie-thumbnail [movie]="movie"></app-movie-thumbnail>
      </div>
    </div>
  </div>`,
  styles: []
})
export class MovieListComponent implements OnInit {
  movies: IMovie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.searchClicked.subscribe(
      filteredList => { this.movies = filteredList; }
    );
    this.movieService.search('');
  }

}
