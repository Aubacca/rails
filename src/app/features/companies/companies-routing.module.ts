import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './containers/company-list/company-list.component';
import { CompanyDetailsComponent } from './components';

const routes: Routes = [
  {
    path: 'companies',
    children: [{ path: '', component: CompanyListComponent }]
  },
  { path: 'companies/:code', component: CompanyDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {}
