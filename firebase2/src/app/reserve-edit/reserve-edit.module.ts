import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveEditPageRoutingModule } from './reserve-edit-routing.module';

import { ReserveEditPage } from './reserve-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveEditPageRoutingModule
  ],
  declarations: [ReserveEditPage]
})
export class ReserveEditPageModule {}
