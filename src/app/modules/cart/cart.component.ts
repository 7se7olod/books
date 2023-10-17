import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CartService} from '../../services/cart-service/cart.service';
import {BookType} from '../../models/book.type';
import {BehaviorSubject, tap} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {

  totalSum$ = new BehaviorSubject<number>(0);

  books$ = this.cartService.cartSubject.pipe(
    tap(books => {
      let sum = 0;
      books.forEach(book => {
        sum += parseFloat(book.price.replace('$', ''))
      })
      sum = parseFloat(sum.toFixed(2));
      this.totalSum$.next(sum);
    })
  );

  constructor(
    private readonly cartService: CartService,
  ) {
  }

  isBookInCart(book: BookType): boolean {
    return this.cartService.isInCart(book);
  }

  removeFromCart(book: BookType): void {
    if (this.isBookInCart(book)) {
      this.cartService.removeFromCart(book);
      this.totalSum$.pipe(
        map(sum => {
          const bookPrice = parseFloat(book.price.replace('$', ''));
          const result = sum - bookPrice;
          console.log(result);
          return result.toFixed(2);
        })
      );
    }
  }
}
