import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movie.service';

import { Movie } from './../../models/Movie';
import { Cinema } from './../../models/Cinema';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})
export class CinemasComponent implements OnInit {
  movies: Movie[];
  cinemas: Cinema[];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.cinemas = this.movieService.getCinemas();
  }

}
