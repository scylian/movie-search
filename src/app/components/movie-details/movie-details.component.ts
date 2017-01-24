import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

// Import services
import { MovieDbApiService }        from '../../services/movie-db-api/movie-db-api.service';

// Import classes
import { Movie }                    from '../../classes/movie';

// Rxjs imports
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;

  constructor(
    private movieService: MovieDbApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.movieService.getMovie(+params['id']))
        .subscribe(movie => this.movie = movie);
  }
  
  goBack(): void {
    this.location.back();
  }

}
