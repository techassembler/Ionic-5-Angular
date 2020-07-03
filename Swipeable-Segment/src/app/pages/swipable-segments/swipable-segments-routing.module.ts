import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwipableSegmentsPage } from './swipable-segments.page';

const routes: Routes = [
  {
    path: '',
    component: SwipableSegmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwipableSegmentsPageRoutingModule {}
