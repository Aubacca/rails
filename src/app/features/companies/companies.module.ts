import { CommonUtilsModule } from './../../common-utils/common-utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CompaniesRoutingModule } from './companies-routing.module';
import { SharedModule } from '../shared/shared.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompaniesRoutingModule,
    SharedModule,
    CommonUtilsModule
  ],
  declarations: [
    ...fromComponents.componentList,
    ...fromContainers.containerList
  ],
  exports: [...fromComponents.componentList, ...fromContainers.containerList]
})
export class CompaniesModule {}
