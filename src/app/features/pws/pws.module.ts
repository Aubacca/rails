import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwsRoutingModule } from './pws-routing.module';
import { OverviewComponent } from './overview/overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    PwsRoutingModule
  ],
  declarations: [OverviewComponent]
})
export class PwsModule { }
