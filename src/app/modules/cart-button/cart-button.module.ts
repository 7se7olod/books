import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule } from '@taiga-ui/core';
import { CartButtonComponent } from './cart-button.component';

@NgModule({
  declarations: [CartButtonComponent],
  exports: [CartButtonComponent],
  imports: [CommonModule, TuiButtonModule],
})
export class CartButtonModule {}
