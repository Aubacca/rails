import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LocoStoreEffects } from './loco.effects';
import { locoReducer } from './loco.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('loco', locoReducer),
    EffectsModule.forFeature([LocoStoreEffects])
  ],
  providers: [LocoStoreEffects]
})
export class LocoStoreModule {}
