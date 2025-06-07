import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  customer: any = null;
  isLoading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.customerService.getById(+id).subscribe({
        next: (data: any) => {
          this.customer = data;
          this.isLoading = false;
        },
        error: (err: any) => {
          this.error = '無法載入客戶資料';
          this.isLoading = false;
        }
      });
    }
  }

  back(): void {
    this.router.navigate(['/customer']);
  }
}
