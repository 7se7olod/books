import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject, tap} from "rxjs";
import {map} from "rxjs/operators";
import {CartService} from '../../services/cart-service/cart.service';
import {Book} from '../../models/book';
import {BooksDataService} from "../../services/books-data/books-data.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {

  totalSum$ = new BehaviorSubject<number>(0);

  booksInCart$ = this.cartService.booksInCart$.pipe(
    tap(books => {
      let sum = 0;
      books.forEach(book => {
        sum += parseFloat(book.price.replace('$', ''))
      })
      sum = parseFloat(sum.toFixed(2));
      this.totalSum$.next(sum);
    }),
  );

  constructor(
    private readonly booksDataService: BooksDataService,
    private readonly cartService: CartService,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.cartService.getBooksInCart().subscribe();
  }

  toDetailPage(id: string): void {
    if (id) {
      this.router.navigate(['main', id]);
    }
  }

  removeFromCart(book: Book): void {
    if (book) {
      this.cartService.removeFromCart(book);
      this.totalSum$.pipe(
        map(sum => {
          const bookPrice = parseFloat(book.price.replace('$', ''));
          const result = sum - bookPrice;
          return result.toFixed(2);
        })
      );
    }
  }
}
