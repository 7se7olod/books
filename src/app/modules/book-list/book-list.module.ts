import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TuiButtonModule} from "@taiga-ui/core";
import {TuiTableModule} from "@taiga-ui/addon-table";
import {TuiLetModule} from "@taiga-ui/cdk";
import {TuiInputModule} from "@taiga-ui/kit";
import {BookListComponent} from './book-list.component';
import {BooksDataService} from "../../services/books-data/books-data.service";
import {BookListRouterModule} from "./book-list-router.module";
import {BookDetailComponent} from "./components/book-detail/book-detail.component";


@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
  ],
  exports: [],
  providers: [BooksDataService],
  imports: [
    CommonModule,
    BookListRouterModule,
    TuiButtonModule,
    TuiTableModule,
    TuiLetModule,
    TuiInputModule,
  ]
})
export class BookListModule {
}
