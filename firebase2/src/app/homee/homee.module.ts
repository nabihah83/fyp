import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeePageRoutingModule } from './homee-routing.module';

import { HomeePage } from './homee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeePageRoutingModule
  ],
  declarations: [HomeePage]
})
export class HomeePageModule {}
