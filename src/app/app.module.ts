import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CinemasComponent } from './components/cinemas/cinemas.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MovieComponent } from './components/movie/movie.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CinemasComponent,
    NavigationComponent,
    MovieComponent,
    CinemaComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
