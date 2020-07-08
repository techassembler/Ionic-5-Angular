import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxPageRoutingModule } from './checkbox-routing.module';

import { CheckboxPage } from './checkbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxPageRoutingModule
  ],
  declarations: [CheckboxPage]
})
export class CheckboxPageModule {}
