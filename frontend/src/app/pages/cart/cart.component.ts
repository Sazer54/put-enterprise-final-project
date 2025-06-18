import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems$: Observable<CartItem[]>;
  cartTotal$: Observable<number>;

  private cartService = inject(CartService);
  private toastr = inject(ToastrService);

  constructor() {
    this.cartItems$ = this.cartService.items$;
    this.cartTotal$ = this.cartService.getCartTotal();
  }

  increase(movieId: number): void {
    this.cartService.increaseQuantity(movieId);
  }

  decrease(item: CartItem): void {
    if (item.quantity === 1) {
      this.removeFromCart(item);
    } else {
      this.cartService.decreaseQuantity(item.movie.id);
    }
  }

  removeFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item.movie.id);
    this.toastr.info(`${item.movie.title} został usunięty z koszyka.`);
  }

  purchaseCart(): void {
    this.cartService.purchase();
    this.toastr.success('Dziękujemy za zakup!', 'Transakcja zakończona');
  }
}
