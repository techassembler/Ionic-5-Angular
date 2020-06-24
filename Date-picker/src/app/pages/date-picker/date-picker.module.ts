import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatePickerPageRoutingModule } from './date-picker-routing.module';

import { DatePickerPage } from './date-picker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatePickerPageRoutingModule
  ],
  declarations: [DatePickerPage],
  providers: [
    DatePipe]
})
export class DatePickerPageModule { }
