import { Routes } from '@angular/router';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', redirectTo: '/movies' }
];
