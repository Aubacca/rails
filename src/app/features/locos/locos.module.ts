import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocosRoutingModule } from './locos-routing.module';
import { HomeComponent } from './home/home.component';
import { Loco2Component } from './loco2/loco2.component';

@NgModule({
  imports: [CommonModule, LocosRoutingModule],
  declarations: [HomeComponent, Loco2Component]
})
export class LocosModule {}
