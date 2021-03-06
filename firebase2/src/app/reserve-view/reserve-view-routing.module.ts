import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveViewPage } from './reserve-view.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveViewPageRoutingModule {}
