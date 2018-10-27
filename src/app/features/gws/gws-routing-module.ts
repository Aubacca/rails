import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GwListComponent } from 'src/app/features/gws/container/gw-list/gw-list.component';

const routes: Routes = [
  {
    path: 'gwagen',
    children: [{ path: '', component: GwListComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GwsRoutingModule {}
