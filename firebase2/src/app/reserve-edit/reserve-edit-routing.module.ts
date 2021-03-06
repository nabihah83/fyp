import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveEditPage } from './reserve-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveEditPageRoutingModule {}
