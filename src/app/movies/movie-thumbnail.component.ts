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
            <h4>{{movie?.name | uppercase}}</h4>
            <div class=""><em>
              {{(movie?.description.length > 100) ? (movie?.description | slice:0:100) + '...' : (movie?.description)}}
            </em></div>
            <div class="mt-3">
              <p>Genres: {{movie?.genres.join(", ")}}</p>
              <p>Rate: {{movie?.rate}}</p>
              <p>Length: {{movie?.length}}</p>
            </div>
            <p class="text-right"><a routerLink="/movies/{{movie?.key}}">Click for info</a></p>
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
