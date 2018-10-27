import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwsRoutingModule } from './pws-routing.module';
import { PwListComponent } from './container/pw-list/pw-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, PwsRoutingModule, SharedModule],
  declarations: [PwListComponent]
})
export class PwsModule {}
