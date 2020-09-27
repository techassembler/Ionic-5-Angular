import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssistiveTouchPageRoutingModule } from './assistive-touch-routing.module';

import { AssistiveTouchPage } from './assistive-touch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssistiveTouchPageRoutingModule
  ],
  declarations: [AssistiveTouchPage]
})
export class AssistiveTouchPageModule {}
