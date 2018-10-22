import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movies/shared/movie.model';
import { movies } from '../movies/shared/movie.mock-data';
import { MovieService } from '../movies/shared/movieservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponent implements OnInit {
  foundMovies: IMovie[];
  searchTerm: String;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchMovieTitles(searchTerm: String) {
    this.movieService.searchMovies(searchTerm);
    // console.log(filterdMovies);
  }

}
