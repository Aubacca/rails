import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LocosRoutingModule } from './locos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonUtilsModule } from 'src/app/common-utils/common-utils.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LocosRoutingModule,
    SharedModule,
    CommonUtilsModule
  ],
  declarations: [
    ...fromComponents.componentList,
    ...fromContainers.containerList
  ],
  exports: [...fromComponents.componentList, ...fromContainers.containerList]
  // declarations: [HomeComponent, LocosComponent, LocoDetailsComponent]
})
export class LocosModule {}
