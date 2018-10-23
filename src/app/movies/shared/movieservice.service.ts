import { Injectable, Output, EventEmitter } from '@angular/core';
import { movies } from './movie.mock-data';
import { IMovie } from './movie.model';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  filteredList: IMovie[];
  constructor() {
    this.filteredList = movies;
  }

  @Output() searchClicked: EventEmitter<IMovie[]> = new EventEmitter();

  search(searhTerm: String) {
    this.filteredList = movies.filter(
      movie => movie.name.toLocaleLowerCase().indexOf(searhTerm.toLocaleLowerCase()) > -1
    );
    this.searchClicked.emit(this.filteredList);
  }
}
