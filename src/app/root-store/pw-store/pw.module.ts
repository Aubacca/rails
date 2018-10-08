import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PwEffects } from './pw.effects';
import { pwReducer } from './pw.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('pwagen', pwReducer),
    EffectsModule.forFeature([PwEffects])
  ],
  providers: [PwEffects]
})
export class PwModule {}
