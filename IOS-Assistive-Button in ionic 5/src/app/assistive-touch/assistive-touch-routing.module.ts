import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssistiveTouchPage } from './assistive-touch.page';

const routes: Routes = [
  {
    path: '',
    component: AssistiveTouchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssistiveTouchPageRoutingModule {}
