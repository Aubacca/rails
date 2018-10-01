import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LoadingIndicatorEffects } from './effects';
import { featureReducer } from 'src/app/root-store/spinner-store/reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('mySpinner', featureReducer),
    EffectsModule.forFeature([LoadingIndicatorEffects])
  ],
  providers: [LoadingIndicatorEffects],
  declarations: []
})
export class SpinnerStoreModule {}
