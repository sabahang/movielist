import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMovie } from './shared/movie.model';
import { MovieService } from './shared/movieservice.service';
import { movies } from './shared/movie.mock-data';

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
export class MovieListComponent implements OnInit, OnDestroy {

  movies: IMovie[];

  constructor(private movieService: MovieService) {
  }

  ngOnDestroy(): void {
    this.movieService.search.unsubscribe();
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
