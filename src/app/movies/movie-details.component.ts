import { Component, OnInit } from '@angular/core';
import { IMovie } from './shared/movie.model';
import { ActivatedRoute, Params } from '@angular/router';
import { movies } from './shared/movie.mock-data';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styles: [`
  .container {
    height: 50%;
  }`]
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovie;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.movie = movies.find( val => val.key === params['key'] );
    });
  }

}
