import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  customers: any[] = [];

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerService.getAll().subscribe((data: any[]) => (this.customers = data));
  }

  public deleteUser(id: number): void {
    if (confirm('確認刪除?')) {
      this.customerService.delete(id).subscribe(() => {
        this.customers = this.customers.filter((c) => c.id !== id);
      });
    }
  }
}
