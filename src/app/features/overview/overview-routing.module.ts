import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewHomeComponent } from './components/overview-home/overview-home.component';

const overviewRoutes: Routes = [
  {
    path: 'overview',
    children: [{ path: '', component: OverviewHomeComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(overviewRoutes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule {}
