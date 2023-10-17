import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookSearchComponent {
  @Output() book = new EventEmitter<string>();

  searchBook(book: string): void {
    this.book.emit(book);
  }
}
