import { Component, OnInit, Input } from '@angular/core';

// Import classes
import { Movie }                    from '../../classes/movie';

@Component({
  moduleId: module.id,
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;  // Define variable for incoming movie object
  private imgUrl = "http://image.tmdb.org/t/p/w154";
  fullUrl: string;

  constructor() { }

  ngOnInit() {
    this.fullUrl = this.imgUrl + this.movie.poster_path;
  }
  
}
