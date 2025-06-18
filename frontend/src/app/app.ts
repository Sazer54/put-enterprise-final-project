import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { CartService } from './services/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'movie-store-frontend';
  cartItemCount$: Observable<number>;

  private cartService = inject(CartService);

  constructor() {
    this.cartItemCount$ = this.cartService.items$.pipe(
      map(items => items.reduce((sum, item) => sum + item.quantity, 0))
    );
  }
}
