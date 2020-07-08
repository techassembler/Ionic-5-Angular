import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfiniteScrollPage } from './infinite-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: InfiniteScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfiniteScrollPageRoutingModule {}
