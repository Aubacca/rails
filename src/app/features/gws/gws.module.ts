import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GwListComponent } from './container/gw-list/gw-list.component';
import { GwsRoutingModule } from 'src/app/features/gws/gws-routing-module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, GwsRoutingModule, SharedModule],
  declarations: [GwListComponent]
})
export class GwsModule {}
