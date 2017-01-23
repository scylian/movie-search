import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Import Components to route to
import { HomeComponent }        from '../../components/home/home.component';
import { ResultsComponent }     from '../../components/results/results.component';
import { MovieComponent }       from '../../components/movie/movie.component';

// Define all route paths as a constant
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list/:term', component: ResultsComponent },
  { path: 'movie', component: MovieComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)  // Import RouterModule with route paths
  ],
  exports: [ RouterModule ],      // Export RouterModule for other components and modules in the application to use
  declarations: []
})
export class RoutingModule { }
