import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentsPage } from './segments.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentsPageRoutingModule {}
