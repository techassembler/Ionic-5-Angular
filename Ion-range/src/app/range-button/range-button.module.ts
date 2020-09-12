import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangeButtonPageRoutingModule } from './range-button-routing.module';

import { RangeButtonPage } from './range-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangeButtonPageRoutingModule
  ],
  declarations: [RangeButtonPage]
})
export class RangeButtonPageModule {}
