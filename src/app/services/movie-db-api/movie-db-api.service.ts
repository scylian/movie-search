import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams, Response } from '@angular/http';

// Import rxjs operator to output result as a promise
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

// Import Movie class
import { Movie }  from '../../classes/movie';

@Injectable()
export class MovieDbApiService {
  private apiUrl = 'http://api.themoviedb.org/3/search/movie';
  private detailsUrl = 'http://api.themoviedb.org/3/movie';
  private apiKey = '42b3e60b6636f50062f6d3579100d83f';

  constructor(
    //private http: Http, // TMDb does not support CORS so we must use a jsonp request
    private jsonp: Jsonp) { }
  
  // Method for returning list of queried movies
  getMovies(query: string): Promise<Movie[]> {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    search.set('query', query);
    search.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get(this.apiUrl, { search })
               .toPromise()
               .then(response => response.json().results as Movie[])
               .catch(this.handleError);
  }
  
  getMovie(id: number): Promise<Movie> {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    search.set('callback', 'JSONP_CALLBACK');
    const url = `${this.detailsUrl}/${id}`;
    return this.jsonp.get(url, { search })
               .toPromise()
               .then(response => response.json() as Movie)
               .catch(this.handleError);
  }
  
  // Method to handle HTTP request errors
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
