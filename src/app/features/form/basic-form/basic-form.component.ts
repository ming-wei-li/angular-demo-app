import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  public submitted: boolean = false;
  public successMessage: string = '';
  public gasUrl = 'https://script.google.com/macros/s/AKfycbwR1gk3CUWz7H7MnzbojZydWOLHJN5umRklCc3OO5HrmyPoZjFl0y18FT_7QCnJ07A/exec';
  public contactForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
  ) { }

  public submit(): void {
    if (!this.contactForm.valid) {
      return;
    }
    const data = this.contactForm.value;
    this.submitted = true;
    const body = new HttpParams()
      .set('name', data.name)
      .set('email', data.email)
      .set('subject', data.subject)
      .set('message', data.message);

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.sendInquiry(body).subscribe({
      next: (res: any) => {
        alert('送出成功！');
      },
      error: (err: any) => {
        console.error(err);
        alert('送出失敗，請稍後再試');
      },
      complete: () => {
        this.submitted = false;
      }
    });
  }

  private sendInquiry(inquiryData: any): Observable<any> {
    console.log('模擬發送諮詢...');
    console.log('模擬接收到的數據:', inquiryData);

    return of({ success: true, message: '模擬：您的諮詢已成功送出！' }).pipe(
      delay(1000) // 模擬 1 秒的網路延遲
    );
  }

  private setForm(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.setForm();
    this.submitted = true;
    if (this.contactForm.invalid) return;
    const formData = this.contactForm.value;
    this.successMessage = '我們已收到您的諮詢，會盡快回覆！';
    this.contactForm.reset();
    this.submitted = false;
  }

}
