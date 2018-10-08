import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CompanyModule } from './company-store/company.module';
import { LocoStoreModule } from './loco-store/loco-store.module';
import { PwModule } from './pw-store/pw.module';
import { SpinnerStoreModule } from './spinner-store/spinner-store.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    LocoStoreModule,
    CompanyModule,
    PwModule,
    SpinnerStoreModule
  ],
  declarations: []
})
export class RootStoreModule {}
