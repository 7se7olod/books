import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Book} from "../../models/book";
import {CartService} from "../../services/cart-service/cart.service";
import {SortService} from "../../services/sort-service/sort.service";
import {BooksDataService} from "../../services/books-data/books-data.service";
import {SearchService} from "../../services/search-service/search.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent implements OnInit {

  books$ = this.dataService.books$;

  constructor(
    private readonly dataService: BooksDataService,
    private readonly router: Router,
    private readonly cartService: CartService,
    private readonly sortService: SortService,
    private readonly searchService: SearchService,
  ) {
  }

  ngOnInit() {
    this.dataService.getBooks$().subscribe();
  }

  searchBooks(book: string): void {
    this.books$.next(this.searchService.searchBooks(book, this.dataService.allBooks$.value));
  }

  toDetailPage(id: string): void {
    if (id) {
      this.router.navigate(['main', id]);
    }
  }

  addToOrRemoveFromCart(book: Book): void {
    if (book.isInCart) {
      this.cartService.removeFromCart(book);
    } else {
      this.cartService.addToCart(book);
    }
    book.isInCart = !book.isInCart;
  }

  sortBooks(event: Event): void {
    const sortedBooks = this.books$.value;

    if (!sortedBooks) return;

    const sortValue = (event.target as HTMLSelectElement).value;

    if (sortValue === 'A-Z') {
      this.books$.next(this.sortService.sortBooksByTitle(sortedBooks, true));
    } else if (sortValue === 'Z-A') {
      this.books$.next(this.sortService.sortBooksByTitle(sortedBooks, false));
    } else if (sortValue === 'lowPrice') {
      this.books$.next(this.sortService.sortBooksByPrice(sortedBooks, true));
    } else if (sortValue === 'highPrice') {
      this.books$.next(this.sortService.sortBooksByPrice(sortedBooks, false));
    }
  }
}
