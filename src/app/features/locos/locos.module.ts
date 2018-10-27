import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LocosRoutingModule } from './locos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { LocosComponent } from './containers/loco-list/locos.component';
import { LocoDetailsComponent } from './components/loco-details/loco-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LocosRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, LocosComponent, LocoDetailsComponent]
})
export class LocosModule {}
