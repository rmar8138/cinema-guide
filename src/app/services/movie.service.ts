import { Injectable } from '@angular/core';

import { Movie } from './../models/Movie';
import { Cinema } from './../models/Cinema';
import { Showing } from './../models/Showing';
import { movies, cinemas, showings } from './../fixtures/data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = movies;
  cinemas: Cinema[] = cinemas;
  showings: Showing[] = showings;

  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovie(id: number) {
    return this.movies.find(movie => movie.id === id);
  }

  getCinemas() {
    return this.cinemas;
  }

  getCinema(id: number) {
    return this.cinemas.find(cinema => cinema.id === id);
  }

  getShowings() {
    return this.showings;
  }

  getMovieShowings(cinemaId: number) {
    const movieShowings = [];
    const cinemaShowings = this.getShowings().filter(showing => showing.cinemaId === cinemaId);
    const movies = this.getMovies();
    cinemaShowings.forEach(cinemaShowing => {
      movieShowings.push({
        movie: movies.find(movie => movie.id === cinemaShowing.movieId),
        times: cinemaShowing.times
      });
    });

    return movieShowings;
  }
}
