import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MoviesAppComponent } from './app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieThumbnailComponent } from './movies/movie-thumbnail.component';

@NgModule({
  declarations: [
    MoviesAppComponent,
    NavBarComponent,
    MovieListComponent,
    MovieThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MoviesAppComponent]
})
export class AppModule { }
