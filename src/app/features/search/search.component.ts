import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public keyword: string = '';
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.http.get<any[]>('api/products').subscribe(data => this.products = data);
    this.filteredProducts = this.products;
  }

  onSearch(): void {
    const lower = this.keyword.toLowerCase();
    this.filteredProducts = this.products.filter(p =>
      p.name.toLowerCase().includes(lower) || p.category.includes(lower)
    );
  }

  goDetail(id: number): void {
    this.router.navigate(['/product', id]);
  }
}
