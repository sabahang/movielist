import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MoviesAppComponent } from './app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieThumbnailComponent } from './movies/movie-thumbnail.component';
import { MovieDetailsComponent } from './movies/movie-details.component';
import { appRoutes } from './routes';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MoviesAppComponent,
    NavBarComponent,
    MovieListComponent,
    MovieThumbnailComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [MoviesAppComponent]
})
export class AppModule { }
