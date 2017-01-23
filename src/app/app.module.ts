// Imports for Angular2
import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';

// Imports for components 
import { AppComponent }             from './app.component';
import { SearchBoxComponent }       from './components/search-box/search-box.component';
import { BrandLogoComponent }       from './components/brand-logo/brand-logo.component';
import { HomeComponent }            from './components/home/home.component';
import { ResultsComponent }         from './components/results/results.component';
import { MovieDetailsComponent }    from './components/movie-details/movie-details.component';
import { MovieComponent }           from './components/movie/movie.component';

// Imports for services
import { MovieDbApiService }        from './services/movie-db-api/movie-db-api.service';

// Imports for modules
import { RoutingModule }            from './modules/routing/routing.module';

// Imports for rxjs extensions
import './extensions/rxjs-extensions';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    BrandLogoComponent,
    HomeComponent,
    ResultsComponent,
    MovieDetailsComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RoutingModule
  ],
  providers: [ MovieDbApiService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
