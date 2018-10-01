import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LocoStoreComponent } from './locoStore/locoStore.component';

const locosRoutes: Routes = [
  {
    path: 'locos',
    children: [
      { path: '', component: HomeComponent },
      { path: 'locoState', component: LocoStoreComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(locosRoutes)],
  exports: [RouterModule]
})
export class LocosRoutingModule {}
