import { Injectable } from '@angular/core';
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

  private emitChangeSource = new Subject<any>();

  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(searhTerm: String) {
    this.filteredList = movies.filter(
      movie => movie.name.toLocaleLowerCase().indexOf(searhTerm.toLocaleLowerCase()) > -1
    );
    this.emitChangeSource.next();
  }
  // getMovies(searhTerm: String): Observable<IMovie[]> {
  //   return of(movies.filter(
  //     movie => movie.name.toLocaleLowerCase().indexOf(searhTerm.toLocaleLowerCase()) > -1
  //   ));
  // }
}
