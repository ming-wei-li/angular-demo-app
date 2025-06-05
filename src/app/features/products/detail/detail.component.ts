import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public product: any = {};
  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  public onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/image/none-pic.jpg';
  }

  public back(): void {
    this.router.navigate(['/products'])
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`api/products/${id}`).subscribe(p => this.product = p);
    if (!this.product) {
      this.router.navigate(['/products']);
    }
  }

}
