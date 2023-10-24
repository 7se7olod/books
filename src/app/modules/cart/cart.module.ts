import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from "./cart.component";
import {CartRouterModule} from "./cart-router.module";
import {BookListModule} from "../book-list/book-list.module";
import {TuiTableModule} from "@taiga-ui/addon-table";
import {TuiLetModule} from "@taiga-ui/cdk";
import {TuiButtonModule} from "@taiga-ui/core";
import {TuiCurrencyPipeModule} from "@taiga-ui/addon-commerce";


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRouterModule,
    BookListModule,
    TuiTableModule,
    TuiLetModule,
    TuiButtonModule,
    TuiCurrencyPipeModule,
  ]
})
export class CartModule {
}
