import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  public submitted: boolean = false;
  public successMessage: string = '';
  public gasUrl = 'https://script.google.com/macros/s/AKfycbwx1380xiaBX_0tjVjUZ689p4v75WqRxrN85YIB-6j-6bbHv65REp07-EXreqEv9E8/exec';
  public contactForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
  ) { }

  public submit(): void {
    const data = this.contactForm.value;
    this.submitted = true;
    const body = new HttpParams()
      .set('name', data.name)
      .set('email', data.email)
      .set('subject', data.subject)
      .set('message', data.message);

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post(this.gasUrl, body.toString(), { headers }).subscribe({
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
