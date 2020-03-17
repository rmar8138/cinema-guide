import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './components/movies/movies.component';
import { CinemasComponent } from './components/cinemas/cinemas.component';
import { CinemaComponent } from './components/cinema/cinema.component'

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'cinemas', component: CinemasComponent },
  { path: 'cinema/:id', component: CinemaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
