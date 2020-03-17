import { Component, OnInit, Input } from '@angular/core';

import { Movie } from './../../models/Movie';
import { Showing } from './../../models/Showing';
import { Cinema } from './../../models/Cinema';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Input() showings: Showing[];
  @Input() cinemas: Cinema[];

  constructor() { }

  ngOnInit(): void {
    this.showings = this.filterShowings(this.showings);
  }

  filterShowings(showings): Showing[] {
    return showings.filter(showing => showing.movieId === this.movie.id);
  }
}
