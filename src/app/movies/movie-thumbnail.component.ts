import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from './shared/movie.model';

@Component({
  selector: 'app-movie-thumbnail',
  template: `
    <div class="well hoverwell thumbnail container-fuild">
      <div class="row">
        <img src="../../assets/{{movie?.key}}.jpg" alt="movie?.name" class="img-fluid img-thumbnail">
        <div>
          <h2>{{movie?.name | uppercase}}</h2>
          <div>Description: {{movie?.description}}</div>
        </div>
      </div>
      <div class="row">
        <div>Genre: {{movie?.genre}}</div>
        <div>Rate: {{movie?.rate}}</div>
        <div>Length: {{movie?.length}}</div>
      </div>
    </div>
  `,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class MovieThumbnailComponent implements OnInit {
  @Input() movie: IMovie;

  constructor() { }

  ngOnInit() {
  }

}
