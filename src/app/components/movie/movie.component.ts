import { Component, OnInit }  from '@angular/core';

// Import services
import { MovieDbApiService }  from '../../services/movie-db-api/movie-db-api.service';

// Import classes
import { Movie }              from '../../classes/movie';

@Component({
  moduleId: module.id,
  selector: 'movies-list',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies: Movie[] // Define empty movies array to be filled with service

  constructor(
    private movieDbApiService: MovieDbApiService) { }

  ngOnInit() {
    this.getMovies(); // Call function that calls service inside ngOnInit() lifecycle hook
  }
  
  getMovies(): void {
    this.movieDbApiService.getMovies().then(movies => this.movies = movies);
  }
}
