import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, take, tap} from "rxjs";
import {Book} from "../../models/book";
import {Cart} from "../cart-service/cart.service";
import * as booksJsonData from '../../books-data/books.json';


@Injectable({
  providedIn: 'root'
})
export class BooksDataService {

  private readonly cartKey = 'cart';

  private readonly responseBooks = booksJsonData;

  allBooks$ = new BehaviorSubject<Book[]>(this.responseBooks.books);

  books$ = new BehaviorSubject<Book[]>([]);

  book$ = new BehaviorSubject<Book | undefined>(undefined);

  getBooks$(): Observable<Book[]> {
    let cart = this.getCart()
    return this.allBooks$
      .pipe(
        map(response => response.map(item => ({
          ...item,
          isInCart: Boolean(cart[item.isbn13]),
        }))),
        tap(books => {
          this.books$.next(books);
        }),
        take(1),
      )
  }

  getBookFromId(id: string): Observable<Book | undefined> {
    const cart = this.getCart();
    return this.allBooks$.pipe(
      map(allBooks => allBooks.find(book => book.isbn13 === id)),
      tap(book => {
        if (book) {
          if (cart[book.isbn13]) {
            book.isInCart = true;
          } else {
            book.isInCart = false;
          }
          this.book$.next(book);
        }
      }),
      take(1),
    )
  }

  private getCart(): Cart {
    const cartJson = localStorage.getItem(this.cartKey);
    return cartJson ? JSON.parse(cartJson) : {};
  }
}
