import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent,
    BasicFormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
  ]
})
export class FormModule { }
