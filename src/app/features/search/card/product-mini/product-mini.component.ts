import { Component } from '@angular/core';
import { ProductCardBasicComponent } from '..';

@Component({
  selector: 'app-product-mini',
  templateUrl: './product-mini.component.html',
  styleUrls: ['./product-mini.component.scss']
})
export class ProductMiniComponent  extends ProductCardBasicComponent {
  constructor(
  ) {
    super()
  }

  ngOnInit(): void {
  }
}
