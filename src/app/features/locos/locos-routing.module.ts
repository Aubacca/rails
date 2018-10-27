import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LocosComponent } from './containers/loco-list/locos.component';
import { LocoDetailsComponent } from './components/loco-details/loco-details.component';

const locosRoutes: Routes = [
  {
    path: 'locos',
    children: [
      { path: '', component: HomeComponent },
      { path: 'locoState', component: LocosComponent }
    ]
  },
  { path: 'locos/locoState/:id', component: LocoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(locosRoutes)],
  exports: [RouterModule]
})
export class LocosRoutingModule {}
