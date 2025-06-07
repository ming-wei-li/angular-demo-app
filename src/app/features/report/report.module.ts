import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
// import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    ReportComponent,
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    // NgxEchartsModule,
  ]
})
export class ReportModule { }
