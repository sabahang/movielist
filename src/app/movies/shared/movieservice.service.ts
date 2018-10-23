import { Injectable, Output, EventEmitter } from '@angular/core';
import { IMovie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor() {}

  search: EventEmitter<String> = new EventEmitter();
}
