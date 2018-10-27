import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompanyListComponent } from './containers/company-list/company-list.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';

@NgModule({
  imports: [CommonModule, CompaniesRoutingModule, SharedModule],
  declarations: [CompanyListComponent, CompanyDetailsComponent]
})
export class CompaniesModule {}
