import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { CinemasComponent } from './components/cinemas/cinemas.component';
import { CinemaComponent } from './components/cinema/cinema.component'

const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'cinemas', component: CinemasComponent },
  { path: 'cinema/:id', component: CinemaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
