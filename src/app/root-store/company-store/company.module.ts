import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CompanyEffects } from './company.effects';
import { companyReducer } from './company.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('company', companyReducer),
    EffectsModule.forFeature([CompanyEffects])
  ],
  providers: [CompanyEffects]
})
export class CompanyModule {}
