import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatePickerPage } from './date-picker.page';

const routes: Routes = [
  {
    path: '',
    component: DatePickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatePickerPageRoutingModule {}
