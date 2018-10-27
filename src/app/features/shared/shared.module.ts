import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { LocoListComponent } from './components/loco-list/loco-list.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [VehicleListComponent, CompanyListComponent, LocoListComponent],
  exports: [VehicleListComponent, CompanyListComponent, LocoListComponent]
})
export class SharedModule {}
