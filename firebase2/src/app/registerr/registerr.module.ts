import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterrPageRoutingModule } from './registerr-routing.module';

import { RegisterrPage } from './registerr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterrPageRoutingModule
  ],
  declarations: [RegisterrPage]
})
export class RegisterrPageModule {}
