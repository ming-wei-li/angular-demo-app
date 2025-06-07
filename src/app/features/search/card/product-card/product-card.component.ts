import { Component } from '@angular/core';
import { ProductCardBasicComponent } from '..';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent extends ProductCardBasicComponent {
  constructor(
  ) {
    super()
  }

  ngOnInit(): void {
  }
}
