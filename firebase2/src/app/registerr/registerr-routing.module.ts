import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterrPage } from './registerr.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterrPageRoutingModule {}
