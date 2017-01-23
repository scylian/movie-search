import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

// Import services
import { MovieDbApiService }  from '../../services/movie-db-api/movie-db-api.service';

// Import classes
import { Movie }              from '../../classes/movie';

@Component({
  moduleId: module.id,
  selector: 'results-page',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  movies: Movie[] // Define empty movies array to be filled with service

  constructor(
    private movieDbApiService: MovieDbApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        // query api with passed in term from search box
        .switchMap((params: Params) => this.movieDbApiService.getMovies(params['term']))
        // assign results to movies array
        .subscribe(movies => this.movies = movies);
  }
  
}
