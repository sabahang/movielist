import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from './shared/movie.model';

@Component({
  selector: 'app-movie-thumbnail',
  template: `
    <div class="container bg-secondary m-3 p-5">
      <div class="row my-2">
        <div class="media">
          <img src="../../assets/{{movie?.key}}.jpg" alt="movie?.name" class="img-fluid img-thumbnail align-self-start">
          <div class="media-body p-3">
            <h2>{{movie?.name | uppercase}}</h2>
            <div>{{movie?.description}}</div>
            <div class="mt-1">
              <div>Genres: {{movie?.genres}}</div>
              <div>Rate: {{movie?.rate}}</div>
              <div>Length: {{movie?.length}}</div>
            </div>
            <a routerLink="/movies/{{movie?.key}}">Click for info</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class MovieThumbnailComponent implements OnInit {
  @Input() movie: IMovie;

  constructor() {}

  ngOnInit() {
  }

}
