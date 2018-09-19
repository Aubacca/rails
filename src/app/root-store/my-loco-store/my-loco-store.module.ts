import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MyLocoStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('myLoco', featureReducer),
    EffectsModule.forFeature([MyLocoStoreEffects])
  ],
  providers: [MyLocoStoreEffects]
})
export class MyLocoStoreModule { }
