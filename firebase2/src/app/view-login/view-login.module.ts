import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewLoginPageRoutingModule } from './view-login-routing.module';

import { ViewLoginPage } from './view-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewLoginPageRoutingModule
  ],
  declarations: [ViewLoginPage]
})
export class ViewLoginPageModule {}
