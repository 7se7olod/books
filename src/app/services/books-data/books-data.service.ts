import {Injectable} from '@angular/core';
import {map, Observable, shareReplay, take, tap} from "rxjs";
import {BookType, ResponseBookType} from "../../models/book.type";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {

  public allBooks$: Observable<BookType[]> = this.getBooks$();

  public books$: Observable<BookType[]> = this.allBooks$;

  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  getBooks$(): Observable<BookType[]> {
    return this.httpClient.get<ResponseBookType>('assets/mocks/books.json')
      .pipe(
        map(response => response.books),
        shareReplay(1),
        take(1),
      )
  }

  getBookFromId(id: string): Observable<BookType> {
    return this.allBooks$.pipe(
      map(books => books.filter(book => book.isbn13 === id)[0]),
      take(1)
    );
  }

  searchBooks(book: string): void {
    if (!book || book.trim() === '') {
      this.books$ = this.allBooks$;
    }

    this.books$ = this.books$.pipe(
      map(books => books.filter(
        item => item.title.toLowerCase().includes(book.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(book.toLowerCase())
      )))
  }

  sortBooksByTitle(valueL: boolean): Observable<BookType[]> {
    return this.books$ = this.books$.pipe(
      tap(books => books.sort((a, b) => {
        a.title > b.title ? 1 : -1
        if (valueL) {
          return a.title > b.title ? 1 : -1;
        } else {
          return a.title > b.title ? -1 : 1;
        }
      })));
  }

  sortBooksByPrice(value: boolean): Observable<BookType[]> {
    return this.books$.pipe(
      tap(books => books.sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));
        if (value) {
          return priceA > priceB ? 1 : -1;
        } else {
          return priceA > priceB ? -1 : 1;
        }
      })));
  }
}
