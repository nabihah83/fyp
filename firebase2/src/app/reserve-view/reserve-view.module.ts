import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveViewPageRoutingModule } from './reserve-view-routing.module';

import { ReserveViewPage } from './reserve-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveViewPageRoutingModule
  ],
  declarations: [ReserveViewPage]
})
export class ReserveViewPageModule {}
