import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/Movie';
import { CinemaShowing } from './../../models/CinemaShowing';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  cinemaShowings: CinemaShowing[];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id'));
      this.movie = this.movieService.getMovie(id);
      this.cinemaShowings = this.movieService.getCinemaShowings(id);
    });
  }
}
