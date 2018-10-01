import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ],
  declarations: [OverviewComponent]
})
export class CompaniesModule { }
