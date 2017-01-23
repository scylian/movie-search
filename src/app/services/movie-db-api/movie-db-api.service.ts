import { Injectable }   from '@angular/core';
import { Http, Jsonp }  from '@angular/http';

// Import rxjs operator to output result as a promise
import 'rxjs/add/operator/toPromise';

// Import Movie class
import { Movie }        from '../../classes/movie';

@Injectable()
export class MovieDbApiService {
  private apiUrl = 'http://api.themoviedb.org/3/search/movie';
  private apiKey = '42b3e60b6636f50062f6d3579100d83f';

  constructor(
    //private http: Http, // TMDb does not support CORS so we must use a jsonp request
    private jsonp: Jsonp) { }
  
  // Method for returning list of queried movies
  getMovies(): Promise<Movie[]> {
    const url = `${this.apiUrl}/?api_key=${this.apiKey}&query=troll&callback=JSONP_CALLBACK`;
    
    return this.jsonp.get(url)
               .toPromise()
               .then(response => response.json().results as Movie[])
               .catch(this.handleError);
  }
  
  // Method to handle HTTP request errors
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
