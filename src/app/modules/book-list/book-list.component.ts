import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksDataService } from '../../services/books-data/books-data.service';
import { SearchService } from '../../services/search-service/search.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent implements OnInit {
  readonly columns = ['number', 'title', 'subtitle', 'price', 'cart'];

  books$ = this.dataService.books$;

  constructor(
    private readonly dataService: BooksDataService,
    private readonly router: Router,
    private readonly searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.dataService.getBooks$().subscribe();
  }

  searchBooks(book: string): void {
    this.books$.next(
      this.searchService.searchBooks(book, this.dataService.allBooks$.value)
    );
  }

  toDetailPage(id: string): void {
    if (id) {
      this.router.navigate(['main', id]);
    }
  }
}
