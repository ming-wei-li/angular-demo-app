import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
// import { NgxEchartsModule } from 'ngx-echarts';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ReportComponent,
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    BrowserModule,
    // NgxEchartsModule.forRoot({
    //   echarts: () => import('echarts')
    // }),
  ]
})
export class ReportModule { }
