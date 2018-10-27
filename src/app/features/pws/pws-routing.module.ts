import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PwListComponent } from './container/pw-list/pw-list.component';

const routes: Routes = [
  {
    path: 'pwagen',
    children: [{ path: '', component: PwListComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwsRoutingModule {}
