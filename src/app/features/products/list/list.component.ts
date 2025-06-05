import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements
  OnInit {
  public products: Array<any> = [];
  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  public onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/image/none-pic.jpg';
  }

  public viewDetail(product: any): void {
    this.router.navigate(['/products', product.id]);
  }

  ngOnInit(): void {
    this.http.get<any[]>('api/products').subscribe(data => this.products = data);
  }

}
