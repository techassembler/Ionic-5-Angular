import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabButtonPageRoutingModule } from './fab-button-routing.module';

import { FabButtonPage } from './fab-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabButtonPageRoutingModule
  ],
  declarations: [FabButtonPage]
})
export class FabButtonPageModule {}
