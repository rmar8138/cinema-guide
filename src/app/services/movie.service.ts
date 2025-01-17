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
    // see what movies are showing at a cinema
    const movieShowings = [];
    const cinemaShowings = this.getShowings().filter(showing => showing.cinemaId === cinemaId);
    cinemaShowings.forEach(cinemaShowing => {
      movieShowings.push({
        movie: this.movies.find(movie => movie.id === cinemaShowing.movieId),
        times: cinemaShowing.times
      });
    });

    return movieShowings;
  }

  getCinemaShowings(movieId: number) {
    // see which cinemas are showing a certain movie
    const cinemaShowings = [];
    const movieShowings = this.getShowings().filter(showing => showing.movieId === movieId);
    movieShowings.forEach(movieShowing => {
      cinemaShowings.push({
        cinema: this.cinemas.find(cinema => cinema.id === movieShowing.cinemaId),
        times: movieShowing.times
      });
    });

    return cinemaShowings;
  }

  updateMovie(id: number, { title, genre }) {
    this.movies.forEach(movie => {
      if (movie.id === id) {
        movie.title = title;
        movie.genre = genre;
        return;
      }
    });
  }

  updateCinema(id: number, { name, location }) {
    this.cinemas.forEach(cinema => {
      if (cinema.id === id) {
        cinema.name = name;
        cinema.location = location;
        return;
      }
    });
  }
}
