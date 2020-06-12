import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondPagePage } from './second-page.page';

const routes: Routes = [
  {
    path: '',
    component: SecondPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondPagePageRoutingModule {}
