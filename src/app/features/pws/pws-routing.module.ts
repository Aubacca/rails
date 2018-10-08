import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from 'src/app/features/pws/overview/overview/overview.component';

const routes: Routes = [
  {
    path: 'pwagen',
    children: [{ path: '', component: OverviewComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwsRoutingModule {}
