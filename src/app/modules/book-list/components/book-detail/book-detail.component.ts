import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, switchMap, take} from "rxjs";
import {BooksDataService} from "../../../../services/books-data/books-data.service";
import {BookType} from "../../../../models/book.type";
import {CartService} from "../../../../services/cart-service/cart.service";

@Component({
  selector: 'app-detail-book',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailComponent implements OnInit {

  book$: Observable<BookType> | undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly booksDataService: BooksDataService,
    private readonly cartService: CartService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('id')),
      take(1),
    )
      .subscribe(id => {
        this.book$ = this.booksDataService.getBookFromId(id);
      });
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
