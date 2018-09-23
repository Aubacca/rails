import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MyLocoStoreModule } from './my-loco-store/my-loco-store.module';
import { SpinnerStoreModule } from './spinner-store/spinner-store.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    MyLocoStoreModule,
    SpinnerStoreModule
  ],
  declarations: []
})
export class RootStoreModule {}
