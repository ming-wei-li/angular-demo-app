import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card-basic',
  template: '',
})
export class ProductCardBasicComponent implements OnInit {
  @Input() product!: any;
  constructor(
  ) { }

  public onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/image/none-pic.jpg';
  }

  ngOnInit(): void {
  }
}
