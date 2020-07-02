import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonMenuPageRoutingModule } from './ion-menu-routing.module';

import { IonMenuPage } from './ion-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonMenuPageRoutingModule
  ],
  declarations: [IonMenuPage]
})
export class IonMenuPageModule {}
