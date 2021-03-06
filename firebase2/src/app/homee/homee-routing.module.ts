import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeePage } from './homee.page';

const routes: Routes = [
  {
    path: '',
    component: HomeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeePageRoutingModule {}
