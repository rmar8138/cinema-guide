import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from './../../services/movie.service';
import { Cinema } from './../../models/Cinema';
import { MovieShowing } from './../../models/MovieShowing';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  cinema: Cinema;
  movieShowings: MovieShowing[];
  cinemaName: string;
  cinemaLocation: string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id'));
      this.cinema = this.movieService.getCinema(id);
      this.movieShowings = this.movieService.getMovieShowings(id);
    });
  }

  onSubmit() {
    this.movieService.updateCinema(this.cinema.id, {
      name: this.cinemaName || this.cinema.name,
      location: this.cinemaLocation || this.cinema.location
    });

    this.cinemaName = '';
    this.cinemaLocation = '';
  }
}
