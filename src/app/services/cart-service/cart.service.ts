import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, take} from 'rxjs';
import {Book} from "../../models/book";

export type Cart = {
  [id: string]: Book,
}

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private readonly cartKey = 'cart';

  booksInCart$ = new BehaviorSubject<Book[]>([]);

  getBooksInCart(): Observable<Book[]> {
    const cart = Object.values(this.getCart());
    this.booksInCart$.next(cart);
    return this.booksInCart$.pipe(
      take(1),
    );
  }

  addToCart(book: Book): void {
    this.addToLocalStorage(book);
    const cart = Object.values(this.getCart());
    this.booksInCart$.next(cart);
  }

  removeFromCart(book: Book): void {
    this.removeFromLocalStorage(book);
    const cart = Object.values(this.getCart());
    this.booksInCart$.next(cart);
  }

  private getCart(): Cart {
    const cartJson = localStorage.getItem(this.cartKey);
    return cartJson ? JSON.parse(cartJson) : {};
  }

  private addToLocalStorage(item: Book) {
    const cart = this.getCart();
    cart[item.isbn13] = item;
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  private removeFromLocalStorage(item: Book) {
    const cart = this.getCart();
    if (cart[item.isbn13]) {
      delete cart[item.isbn13];
      localStorage.setItem(this.cartKey, JSON.stringify(cart));
    }
  }
}
