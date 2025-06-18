import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<Movie> | undefined;

  private route = inject(ActivatedRoute);
  private movieService = inject(MovieService);
  private cartService = inject(CartService);
  private toastr = inject(ToastrService);

  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.movie$ = this.movieService.getMovieById(movieId);
  }

  addToCart(movie: Movie): void {
    this.cartService.addToCart(movie);
    this.toastr.success(`${movie.title} został dodany do koszyka!`);
  }
}
