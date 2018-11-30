import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GwsRoutingModule } from 'src/app/features/gws/gws-routing-module';
import { SharedModule } from '../shared/shared.module';
// import { GwListComponent } from './container/gw-list/gw-list.component';

import * as fromContainers from './container';

@NgModule({
  imports: [CommonModule, GwsRoutingModule, SharedModule],
  declarations: [...fromContainers.containerList],
  // declarations: [GwListComponent],
  exports: [...fromContainers.containerList]
})
export class GwsModule {}
