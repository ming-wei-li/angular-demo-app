import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public products: Array<any> = [];
  constructor(
    private http: HttpClient,

  ) { }

  ngOnInit(): void {
    this.http.get<any[]>('api/products').subscribe(data => this.products = data);
  }

}
