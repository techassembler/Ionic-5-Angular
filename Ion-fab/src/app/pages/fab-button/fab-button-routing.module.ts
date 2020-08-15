import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabButtonPage } from './fab-button.page';

const routes: Routes = [
  {
    path: '',
    component: FabButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabButtonPageRoutingModule {}
