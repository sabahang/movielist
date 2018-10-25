import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMovie } from './shared/movie.model';
import { MovieService } from './shared/movieservice.service';
import { movies } from './shared/movie.mock-data';

@Component({
  selector: 'app-movie-list',
  template:
  `<div class="container-fluid m-5">
    <h1 class="my-3 mt-5">List of Movies</h1>
    <hr/>
    <div class="row justify-content-center">
      <div *ngFor="let movie of movies" class="thumb col-sm-12 col-xl-2 rounded shadow m-3 p-3">
        <app-movie-thumbnail [movie]="movie"></app-movie-thumbnail>
      </div>
    </div>
  </div>`,
  styles: [`
    .thumb {
      min-width: 600px;
    }`]
})
export class MovieListComponent implements OnInit {

  movies: IMovie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.search.subscribe(
      searchTerm => {
        this.movies = movies.filter(
          movie => movie.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1
        );
      }
    );
    this.movieService.search.emit('');
  }

}
