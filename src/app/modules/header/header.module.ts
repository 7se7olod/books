import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {AppRoutingModule} from "../../app-routing.module";
import {TuiButtonModule} from "@taiga-ui/core";



@NgModule({
  declarations: [HeaderComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        TuiButtonModule,
    ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
