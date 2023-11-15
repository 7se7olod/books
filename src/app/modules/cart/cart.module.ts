import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { CartComponent } from './cart.component';
import { CartRouterModule } from './cart-router.module';
import { BookListModule } from '../book-list/book-list.module';
import { CartButtonModule } from '../cart-button/cart-button.module';

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
    CartButtonModule,
  ],
})
export class CartModule {}
