import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movie.service';

import { Movie } from './../../models/Movie';
import { Showing } from './../../models/Showing';
import { Cinema } from './../../models/Cinema';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  showings: Showing[];
  cinemas: Cinema[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.showings = this.movieService.getShowings();
    this.cinemas = this.movieService.getCinemas();
  }

}
