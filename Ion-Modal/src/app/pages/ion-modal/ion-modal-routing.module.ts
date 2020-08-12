import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonModalPage } from './ion-modal.page';

const routes: Routes = [
  {
    path: '',
    component: IonModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonModalPageRoutingModule {}
