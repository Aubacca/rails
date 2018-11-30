import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromDirective from './directives';

@NgModule({
  imports: [CommonModule],
  declarations: [...fromDirective.directiveList],
  exports: [...fromDirective.directiveList]
})
export class CommonUtilsModule {}
