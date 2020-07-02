import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonMenuPage } from './ion-menu.page';

const routes: Routes = [
  {
    path: '',
    component: IonMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonMenuPageRoutingModule {}
