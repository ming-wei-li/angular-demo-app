import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
