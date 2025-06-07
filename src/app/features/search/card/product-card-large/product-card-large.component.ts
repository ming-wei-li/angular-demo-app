import { Component } from '@angular/core';
import { ProductCardBasicComponent } from '..';

@Component({
  selector: 'app-product-card-large',
  templateUrl: './product-card-large.component.html',
  styleUrls: ['./product-card-large.component.scss']
})
export class ProductCardLargeComponent extends ProductCardBasicComponent {
  constructor(
  ) {
    super()
  }

  ngOnInit(): void {
  }
}
