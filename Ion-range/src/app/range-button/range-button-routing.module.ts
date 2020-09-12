import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangeButtonPage } from './range-button.page';

const routes: Routes = [
  {
    path: '',
    component: RangeButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangeButtonPageRoutingModule {}
