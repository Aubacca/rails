import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './containers/company-list/company-list.component';

const routes: Routes = [
  {
    path: 'companies',
    children: [{ path: '', component: CompanyListComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {}
