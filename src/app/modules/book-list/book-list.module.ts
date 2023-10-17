import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookListComponent} from './book-list.component';
import {BookSearchComponent} from './components/book-search/book-search.component';
import {BooksDataService} from "../../services/books-data/books-data.service";
import {BookListRouterModule} from "./book-list-router.module";
import {BookDetailComponent} from "./components/book-detail/book-detail.component";


@NgModule({
  declarations: [
    BookListComponent,
    BookSearchComponent,
    BookDetailComponent,
  ],
  exports: [],
  providers: [BooksDataService],
  imports: [
    CommonModule,
    BookListRouterModule,
  ]
})
export class BookListModule {
}
