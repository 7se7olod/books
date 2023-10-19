import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layouts/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'main',
        loadChildren: () => import('./modules/book-list/book-list.module').then(m => m.BookListModule),
      },
      {
        path: 'cart',
        loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule),
      },
      {
        path: '**',
        redirectTo: '/main',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
