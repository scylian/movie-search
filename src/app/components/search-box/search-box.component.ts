import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

// Imports for classes
import { Movie }              from '../../classes/movie';


@Component({
  moduleId: module.id,
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  private temp: string;

  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  
  // Method to route to results page after submitting search query
  search(term: string): void {
    // Check if new query is different from previous query and not empty or null
    // so that user does not barrage api with requests
    if (term !== this.temp && term !== "" && term !== null) {
      this.temp = term;   // set new query to temp variable
      let link = ['/list', term];
      this.router.navigate(link);
    }
  }

}
