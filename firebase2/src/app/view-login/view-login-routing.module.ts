import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewLoginPage } from './view-login.page';

const routes: Routes = [
  {
    path: '',
    component: ViewLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewLoginPageRoutingModule {}
