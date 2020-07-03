import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwipableSegmentsPageRoutingModule } from './swipable-segments-routing.module';

import { SwipableSegmentsPage } from './swipable-segments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwipableSegmentsPageRoutingModule
  ],
  declarations: [SwipableSegmentsPage]
})
export class SwipableSegmentsPageModule {}
