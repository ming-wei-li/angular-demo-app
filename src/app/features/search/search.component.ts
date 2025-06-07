import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  keyword: string = '';
  selectedCategory: string = '';
  categories: string[] = [];
  products: any[] = [];
  filteredProducts: any[] = [];
  viewType: 'grid4' | 'grid3' | 'list' | 'mini' = 'grid4';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public onSearch(): void {
    const kw = this.keyword.toLowerCase();
    this.filteredProducts = this.products.filter(p => {
      const matchesKeyword = p.name.toLowerCase().includes(kw);
      const matchesCategory = this.selectedCategory ? p.category === this.selectedCategory : true;
      return matchesKeyword && matchesCategory;
    });
  }

  public setView(type: 'grid4' | 'grid3' | 'list' | 'mini'): void {
    this.viewType = type;
  }

  public onReset(): void {
    this.keyword = '';
    this.selectedCategory = '';
    this.filteredProducts = this.products;
  }

  public goDetail(id: number): void {
    this.router.navigate(['/products', id]);
  }

  ngOnInit(): void {
    this.http.get<any[]>('/api/products').subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
      this.categories = [...new Set(data.map(p => p.category))]; // 自動分類選項
    });
  }
}
