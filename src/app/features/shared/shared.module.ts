import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...fromComponents.componentList],
  exports: [...fromComponents.componentList]
})
export class SharedModule {}
