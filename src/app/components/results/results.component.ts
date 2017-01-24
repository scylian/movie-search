import { Component, OnInit, Input,
          trigger, state, style, transition, animate, keyframes}        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

// Import services
import { MovieDbApiService }  from '../../services/movie-db-api/movie-db-api.service';

// Import classes
import { Movie }              from '../../classes/movie';

@Component({
  moduleId: module.id,
  selector: 'results-page',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  // set the animation styles
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(100px)', offset: 0}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class ResultsComponent implements OnInit {
  movies: Array<Movie> = [];  // Define array for movies to be pushed into for animating

  constructor(
    private movieDbApiService: MovieDbApiService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
        // query api with passed in term from search box
        .switchMap((params: Params) => this.movieDbApiService.getMovies(params['term']))
        // assign results to movies array
        .subscribe(movies => {
          // initialize array
          this.movies = [];
          // for-loop for animating results
          for (let i = 0; i < movies.length; i++) {
            setTimeout(() => {
              this.movies[i] = movies[i];
            }, 500+i*200);
          }
        });
  }
}
