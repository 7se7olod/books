import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from '../../services/cart-service/cart.service';
import { Book } from '../../models/book';
import { BooksDataService } from '../../services/books-data/books-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  readonly columns = ['number', 'title', 'subtitle', 'price', 'cart'];

  totalSum$ = new BehaviorSubject<number>(0);

  booksInCart$ = combineLatest(
    this.cartService.booksInCart$,
    this.booksDataService.allBooks$
  ).pipe(
    map(([cart, allBooks]) => {
      const booksInCart = Object.keys(cart);
      return allBooks.filter((book) => {
        book.counterBooks = cart[book.isbn13];
        return booksInCart.includes(book.isbn13);
      });
    }),
    tap((books: Book[]) => {
      let sum = 0;
      books.forEach((book) => {
        const price = parseFloat(book.price.replace('$', ''));
        const quantity = book.counterBooks || 0;
        sum += price * quantity;
      });
      sum = parseFloat(sum.toFixed(2));
      this.totalSum$.next(sum);
    })
  );

  constructor(
    private readonly booksDataService: BooksDataService,
    private readonly cartService: CartService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getBooksInCart().subscribe();
  }

  toDetailPage(id: string): void {
    if (id) {
      this.router.navigate(['main', id]);
    }
  }
}
