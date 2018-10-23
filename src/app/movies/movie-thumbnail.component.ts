import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from './shared/movie.model';

@Component({
  selector: 'app-movie-thumbnail',
  template: `
    <div class="container">
      <div class="row">
        <div class="media">
          <img src="../../assets/{{movie?.key}}.jpg" alt="movie?.name" class="img-fluid img-thumbnail align-self-center">
          <div class="media-body p-3">
            <h2>{{movie?.name | uppercase}}</h2>
            <div>{{(movie?.description.length > 100) ? (movie?.description | slice:0:100) + '...' : (movie?.description)}}</div>
            <div class="mt-3">
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
