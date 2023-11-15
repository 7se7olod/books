import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Book, Cart } from '../../models/book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cartKey = 'cart';

  booksInCart$ = new BehaviorSubject<Cart>({});

  getBooksInCart(): Observable<Cart> {
    const cart = this.getCart();
    this.booksInCart$.next(cart);
    return this.booksInCart$.pipe(take(1));
  }

  addToCart(book: Book): void {
    this.addToLocalStorage(book);
    const cart = this.getCart();
    this.booksInCart$.next(cart);
  }

  removeFromCart(book: Book): void {
    this.removeFromLocalStorage(book.isbn13);
    const cart = this.getCart();
    this.booksInCart$.next(cart);
  }

  private getCart(): Cart {
    const cartJson = localStorage.getItem(this.cartKey);
    return cartJson ? JSON.parse(cartJson) : {};
  }

  private addToLocalStorage(item: Book) {
    if (!item) return;
    const cart = this.getCart();
    if (!cart[item.isbn13]) {
      cart[item.isbn13] = 1;
    } else {
      ++cart[item.isbn13];
    }
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  private removeFromLocalStorage(bookId: string) {
    if (!bookId) return;
    const cart = this.getCart();
    if (cart[bookId] <= 1) {
      delete cart[bookId];
    } else {
      --cart[bookId];
    }
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }
}
