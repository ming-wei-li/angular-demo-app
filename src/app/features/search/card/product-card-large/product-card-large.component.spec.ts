import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardLargeComponent } from './product-card-large.component';

describe('ProductCardLargeComponent', () => {
  let component: ProductCardLargeComponent;
  let fixture: ComponentFixture<ProductCardLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
