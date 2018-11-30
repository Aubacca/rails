import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwsRoutingModule } from './pws-routing.module';
import { SharedModule } from '../shared/shared.module';
// import { PwListComponent } from './container/pw-list/pw-list.component';

import * as fromComponents from './container';

@NgModule({
  imports: [CommonModule, PwsRoutingModule, SharedModule],
  declarations: [...fromComponents.componentList]
  // declarations: [PwListComponent]
})
export class PwsModule {}
