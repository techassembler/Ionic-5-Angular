import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentsPageRoutingModule } from './segments-routing.module';

import { SegmentsPage } from './segments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentsPageRoutingModule
  ],
  declarations: [SegmentsPage]
})
export class SegmentsPageModule {}
