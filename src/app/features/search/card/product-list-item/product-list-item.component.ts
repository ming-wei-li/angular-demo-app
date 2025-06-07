import { Component } from '@angular/core';
import { ProductCardBasicComponent } from '..';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent extends ProductCardBasicComponent {
  constructor(
  ) {
    super()
  }

  ngOnInit(): void {
  }
}
