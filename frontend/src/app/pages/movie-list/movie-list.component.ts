import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Movie, Category } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  categories = Object.values(Category);
  selectedCategory: Category | undefined;

  private movieService = inject(MovieService);
  private cartService = inject(CartService);
  private toastr = inject(ToastrService);

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies(this.selectedCategory).subscribe(data => {
      this.movies = data;
      console.log('Movies loaded:', this.movies);
    });
  }

  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const categoryValue = selectElement.value;
    this.selectedCategory = categoryValue ? (categoryValue as Category) : undefined;
    this.loadMovies();
  }

  addToCart(movie: Movie): void {
    this.cartService.addToCart(movie);
    this.toastr.success(`${movie.title} został dodany do koszyka!`);
  }
}
