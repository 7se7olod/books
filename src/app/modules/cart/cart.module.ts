import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from "./cart.component";
import {CartRouterModule} from "./cart-router.module";


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRouterModule,
  ]
})
export class CartModule {
}
