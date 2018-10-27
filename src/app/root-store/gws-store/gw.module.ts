import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GwEffects } from './gw.effects';
import { gwReducer } from './gw.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('gwagen', gwReducer, {}),
    EffectsModule.forFeature([GwEffects])
  ],
  providers: [GwEffects]
})
export class GwModule {}
