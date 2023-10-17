import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BooksDataService} from "../../services/books-data/books-data.service";
import {Router} from "@angular/router";
import {BookType} from "../../models/book.type";
import {CartService} from "../../services/cart-service/cart.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent {

  books$ = this.dataService.books$;

  isBooksTitleSort = true;
  isBooksPriceSort = true;

  constructor(
    private readonly dataService: BooksDataService,
    private readonly router: Router,
    private readonly cartService: CartService,
  ) {
  }

  searchBooks(book: string): void {
    this.dataService.searchBooks(book);
    this.books$ = this.dataService.books$;
  }

  sortBooksByTitle(): void {
    this.isBooksTitleSort = !this.isBooksTitleSort;
    this.books$ = this.dataService.sortBooksByTitle(this.isBooksTitleSort);
  }

  sortBooksByPrice(): void {
    this.isBooksPriceSort = !this.isBooksPriceSort;
    this.books$ = this.dataService.sortBooksByPrice(this.isBooksPriceSort);
  }

  toDetail(id: string): void {
    if (id) {
      this.router.navigate(['main', id]);
    }
  }

  isBookInCart(book: BookType): boolean {
    return this.cartService.isInCart(book);
  }

  addToOrRemoveFromCart(book: BookType): void {
    if (this.isBookInCart(book)) {
      this.cartService.removeFromCart(book);
    } else {
      this.cartService.addToCart(book);
    }
  }
}
