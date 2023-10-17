import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BookType} from "../../models/book.type";


@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cart: BookType[] = [];

  cartSubject = new BehaviorSubject<BookType[]>(this.cart);

  get cart$() {
    return this.cartSubject.asObservable();
  }

  addToCart(book: BookType): void {
    this.cart.push(book);
    this.cartSubject.next(this.cart);
  }

  removeFromCart(book: BookType): void {
    const index = this.cart.findIndex((b) => b.isbn13 === book.isbn13);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.cartSubject.next(this.cart);
    }
  }

  isInCart(book: BookType): boolean {
    return this.cart.some((b) => b.isbn13 === book.isbn13);
  }
}
