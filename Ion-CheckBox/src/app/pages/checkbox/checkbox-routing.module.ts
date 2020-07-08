import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckboxPage } from './checkbox.page';

const routes: Routes = [
  {
    path: '',
    component: CheckboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckboxPageRoutingModule {}
