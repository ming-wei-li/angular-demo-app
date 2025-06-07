import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductCardComponent, ProductCardLargeComponent, ProductListItemComponent, ProductMiniComponent } from './card';


@NgModule({
  declarations: [
    SearchComponent,
    ProductCardComponent,
    ProductCardLargeComponent,
    ProductListItemComponent,
    ProductMiniComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SearchRoutingModule,
  ]
})
export class SearchModule { }
