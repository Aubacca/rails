import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Loco2Component } from './loco2/loco2.component';

const locosRoutes: Routes = [
  {
    path: 'locos',
    children: [
      { path: '', component: HomeComponent },
      { path: 'locoState', component: Loco2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(locosRoutes)],
  exports: [RouterModule]
})
export class LocosRoutingModule {}
