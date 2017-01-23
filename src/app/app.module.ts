import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { BrandLogoComponent } from './components/brand-logo/brand-logo.component';
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieComponent } from './components/movie/movie.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
