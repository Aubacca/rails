import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { OverviewRoutingModule } from './overview-routing.module';
// import { OverviewHomeComponent } from './components/overview-home/overview-home.component';
// import { DetailComponent } from './components/detail/detail.component';

import * as fromComponents from './components';

@NgModule({
  imports: [CommonModule, OverviewRoutingModule, HttpClientModule],
  declarations: [...fromComponents.componentList]
  // declarations: [OverviewHomeComponent, DetailComponent]
})
export class OverviewModule {}
