import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolBarPageRoutingModule } from './tool-bar-routing.module';

import { ToolBarPage } from './tool-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolBarPageRoutingModule
  ],
  declarations: [ToolBarPage]
})
export class ToolBarPageModule {}
