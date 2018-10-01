import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocosRoutingModule } from './locos-routing.module';
import { HomeComponent } from './home/home.component';
import { LocoStoreComponent } from './locoStore/locoStore.component';

@NgModule({
  imports: [CommonModule, LocosRoutingModule],
  declarations: [HomeComponent, LocoStoreComponent]
})
export class LocosModule {}
