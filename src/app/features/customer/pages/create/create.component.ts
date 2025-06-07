import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  id: number | null = null;
  submitting = false;
  errorMsg: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: CustomerService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^(\+?\d{1,4}[-.\s]?)?(\d{6,14})$/)]],
      address: ['', Validators.required],
    });
  }

  cancel(): void {
    this.router.navigate(['/customer', this.id]);
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEdit = true;
      this.id = +idParam;
      this.service.getById(this.id).subscribe({
        next: data => this.form.patchValue(data),
        error: () => this.errorMsg = '載入資料失敗，請稍後再試'
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.errorMsg = '請確認表單輸入內容是否正確';
      return;
    }
    this.submitting = true;
    this.errorMsg = null;

    const data = this.form.value;
    const action$ = this.isEdit
      ? this.service.update(this.id!, data)
      : this.service.create(data);

    action$.subscribe({
      next: () => this.router.navigate(['/customer']),
      error: () => {
        this.errorMsg = '儲存失敗，請稍後再試';
        this.submitting = false;
      }
    });
  }
}
