import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie.model';

export interface CartItem {
  movie: Movie;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  constructor() {
    const savedCart = localStorage.getItem('shopping_cart');
    if (savedCart) {
      this.itemsSubject.next(JSON.parse(savedCart));
    }
  }

  addToCart(movie: Movie): void {
    const currentItems = this.itemsSubject.getValue();
    const existingItem = currentItems.find(item => item.movie.id === movie.id);

    if (existingItem) {
      existingItem.quantity++;
      this.itemsSubject.next([...currentItems]);
    } else {
      const newItems = [...currentItems, { movie: movie, quantity: 1 }];
      this.itemsSubject.next(newItems);
    }
    this.saveCart();
  }

  removeFromCart(movieId: number): void {
    const currentItems = this.itemsSubject.getValue();
    const newItems = currentItems.filter(item => item.movie.id !== movieId);
    this.itemsSubject.next(newItems);
    this.saveCart();
  }

  increaseQuantity(movieId: number): void {
    const items = this.itemsSubject.getValue();
    const item = items.find(i => i.movie.id === movieId);
    if (item) {
      item.quantity++;
      this.itemsSubject.next([...items]);
      this.saveCart();
    }
  }

  decreaseQuantity(movieId: number): void {
    const items = this.itemsSubject.getValue();
    const item = items.find(i => i.movie.id === movieId);
    if (item && item.quantity > 1) {
      item.quantity--;
      this.itemsSubject.next([...items]);
      this.saveCart();
    }
  }

  purchase(): void {
    this.itemsSubject.next([]);
    this.saveCart();
  }

  getCartTotal(): Observable<number> {
    return this.items$.pipe(
      map(items => items.reduce((total, item) => total + (item.movie.price * item.quantity), 0))
    );
  }

  private saveCart(): void {
    localStorage.setItem('shopping_cart', JSON.stringify(this.itemsSubject.getValue()));
  }
}
