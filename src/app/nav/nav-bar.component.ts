import { Component, OnInit, HostListener } from '@angular/core';
import { IMovie } from '../movies/shared/movie.model';
import { movies } from '../movies/shared/movie.mock-data';
import { MovieService } from '../movies/shared/movieservice.service';
import { Router } from '@angular/router';

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
  searchTerm: String;

  constructor(private movieService: MovieService, public router: Router) { }

  ngOnInit() {
  }

  searchMovieTitles(searchTerm: String) {
    this.movieService.search.emit(searchTerm || '');
  }

}
