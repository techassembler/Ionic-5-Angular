import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolBarPage } from './tool-bar.page';

const routes: Routes = [
  {
    path: '',
    component: ToolBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolBarPageRoutingModule {}
