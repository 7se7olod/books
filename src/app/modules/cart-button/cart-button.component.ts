import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
} from '@angular/core';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { Book } from '../../models/book';
import { CartService } from '../../services/cart-service/cart.service';

@Component({
  selector: 'cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartButtonComponent {
  @Input() book: Book | null = null;

  constructor(
    private readonly cartService: CartService,
    @Inject(TuiDialogService)
    private readonly dialogs: TuiDialogService
  ) {}

  addBookToCart(book: Book) {
    if (!book.counterBooks) {
      book.counterBooks = 1;
    } else {
      book.counterBooks++;
    }

    this.cartService.addToCart(book);
  }

  removeBookFromCart(
    book: Book,
    content: PolymorpheusContent<TuiDialogContext>
  ) {
    if (!book.counterBooks) return;

    if (book.counterBooks <= 1) {
      this.dialogs.open(content).subscribe();
    } else if (book.counterBooks > 1) {
      --book.counterBooks;
      this.cartService.removeFromCart(book);
    }
  }

  dialogRemoveBook(book: Book, observer: any): void {
    book.counterBooks = 0;
    this.cartService.removeFromCart(book);
    observer.complete();
  }
}
