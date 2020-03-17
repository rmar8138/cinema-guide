import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from './../../services/movie.service';
import { Cinema } from './../../models/Cinema';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  cinema: Cinema;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id'));
      this.cinema = this.movieService.getCinema(id);
      console.log(this.movieService.getMovieShowings(id));

    });
  }
}
